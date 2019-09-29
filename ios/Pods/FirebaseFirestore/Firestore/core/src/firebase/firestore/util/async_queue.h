/*
 * Copyright 2018 Google
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_ASYNC_QUEUE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_ASYNC_QUEUE_H_

#include <atomic>
#include <chrono>  // NOLINT(build/c++11)
#include <functional>
#include <memory>
#include <mutex>  // NOLINT(build/c++11)
#include <vector>

#include "Firestore/core/src/firebase/firestore/util/executor.h"

namespace firebase {
namespace firestore {
namespace util {

/**
 * Well-known "timer" ids used when scheduling delayed operations on the
 * AsyncQueue. These ids can then be used from tests to check for the
 * presence of delayed operations or to run them early.
 */
enum class TimerId {
  /** All can be used with `RunScheduledOperationsUntil` to run all timers. */
  All,

  /**
   * The following 4 timers are used in `Stream` for the listen and write
   * streams. The "Idle" timer is used to close the stream due to inactivity.
   * The "ConnectionBackoff" timer is used to restart a stream once the
   * appropriate backoff delay has elapsed.
   */
  ListenStreamIdle,
  ListenStreamConnectionBackoff,
  WriteStreamIdle,
  WriteStreamConnectionBackoff,

  /**
   * A timer used in `OnlineStateTracker` to transition from
   * `OnlineStateUnknown` to `Offline` after a set timeout, rather than waiting
   * indefinitely for success or failure.
   */
  OnlineStateTimeout,

  /**
   * A timer used to periodically attempt LRU Garbage collection
   */
  GarbageCollectionDelay,

  /**
   * A timer used to retry transactions. Since there can be multiple concurrent
   * transactions, multiple of these may be in the queue at a given time.
   */
  RetryTransaction
};

// A serial queue that executes given operations asynchronously, one at a time.
// Operations may be scheduled to be executed as soon as possible or in the
// future. Operations scheduled for the same time are FIFO-ordered.
//
// `AsyncQueue` wraps a platform-specific executor, adding checks that enforce
// sequential ordering of operations: an enqueued operation, while being run,
// normally cannot enqueue other operations for immediate execution (but see
// `EnqueueRelaxed`).
//
// `AsyncQueue` methods have particular expectations about whether they must be
// invoked on the queue or not; check "preconditions" section in comments on
// each method.
//
// A significant portion of `AsyncQueue` interface only exists for test purposes
// and must *not* be used in regular code.
class AsyncQueue {
 public:
  using Operation = Executor::Operation;
  using Milliseconds = Executor::Milliseconds;

  explicit AsyncQueue(std::unique_ptr<Executor> executor);

  // Asserts for the caller that it is being invoked as part of an operation on
  // the `AsyncQueue`.
  void VerifyIsCurrentQueue() const;

  // Enqueue methods

  // Puts the `operation` on the queue to be executed as soon as possible, while
  // maintaining FIFO order.
  //
  // Precondition: `Enqueue` calls cannot be nested; that is, `Enqueue` may not
  // be called by a previously enqueued operation when it is run (as a special
  // case, destructors invoked when an enqueued operation has run and is being
  // destroyed may invoke `Enqueue`).
  //
  // After the shutdown process has initiated (`is_shutting_down()` is true),
  // calling `Enqueue` is a no-op.
  void Enqueue(const Operation& operation);

  // Like `Enqueue`, but also starts the shutdown process. Once the shutdown
  // process has started, calling any Enqueue* methods becomes a no-op
  //
  // The exception is `EnqueueEvenAfterShutdown`, operations requsted via
  // this will still be scheduled.
  void EnqueueAndInitiateShutdown(const Operation& operation);

  // Like `Enqueue`, but it will proceed scheduling the requested operation
  // regardless of whether the queue is shut down or not.
  void EnqueueEvenAfterShutdown(const Operation& operation);

  // Like `Enqueue`, but without applying any prerequisite checks.
  void EnqueueRelaxed(const Operation& operation);

  // Whether the queue has initiated its shutdown process.
  bool is_shutting_down() const;

  // Puts the `operation` on the queue to be executed `delay` milliseconds from
  // now, and returns a handle that allows to cancel the operation (provided it
  // hasn't run already).
  //
  // `operation` is tagged by a `timer_id` which allows to identify the caller.
  // Only one operation tagged with any given `timer_id` may be on the queue at
  // any time; an attempt to put another such operation will result in an
  // assertion failure. In tests, these tags also allow to check for presence of
  // certain operations and to run certain operations in advance.
  //
  // Precondition: `EnqueueAfterDelay` is being invoked asynchronously on the
  // queue.
  DelayedOperation EnqueueAfterDelay(Milliseconds delay,
                                     TimerId timer_id,
                                     const Operation& operation);

  // Direct execution

  // Immediately executes the `operation` on the queue.
  //
  // This is largely a workaround to allow other classes (GRPC) to directly
  // access the underlying dispatch queue without getting `AsyncQueue` into an
  // inconsistent state.
  //
  // Precondition: no other operation is being executed on the queue at the
  // moment of the call (i.e., `ExecuteBlocking` cannot call `ExecuteBlocking`).
  //
  // Precondition: `ExecuteBlocking` is being invoked asynchronously on the
  // queue.
  void ExecuteBlocking(const Operation& operation);

  // Returns the underlying platform-dependent executor.
  Executor* executor() {
    return executor_.get();
  }

  // Test-only interface follows
  // TODO(varconst): move the test-only interface into a helper object that is
  // a friend of AsyncQueue and delegates its public methods to private methods
  // on AsyncQueue.

  // Like `Enqueue`, but blocks until the `operation` is complete.
  void EnqueueBlocking(const Operation& operation);

  // Checks whether an operation tagged with `timer_id` is currently scheduled
  // for execution in the future.
  bool IsScheduled(TimerId timer_id) const;

  // Force runs operations scheduled for future execution, in scheduled order,
  // up to *and including* the operation tagged with `last_timer_id`.
  //
  // Precondition: `RunScheduledOperationsUntil` is *not* being invoked on the
  // queue.
  void RunScheduledOperationsUntil(TimerId last_timer_id);

  // For tests: Skip all subsequent delays for a specific TimerId.
  // NOTE: This does not work with TimerId::All.
  void SkipDelaysForTimerId(TimerId timer_id);

 private:
  Operation Wrap(const Operation& operation);

  // Asserts that the current invocation happens asynchronously on the queue.
  void VerifyIsCurrentExecutor() const;
  void VerifySequentialOrder() const;

  std::atomic<bool> is_operation_in_progress_;
  std::unique_ptr<Executor> executor_;

  bool is_shutting_down_ = false;
  mutable std::mutex shut_down_mutex_;

  std::vector<TimerId> timer_ids_to_skip_;
};

}  // namespace util
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_ASYNC_QUEUE_H_

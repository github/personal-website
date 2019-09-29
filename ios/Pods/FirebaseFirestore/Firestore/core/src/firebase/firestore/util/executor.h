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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_EXECUTOR_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_EXECUTOR_H_

#include <chrono>  // NOLINT(build/c++11)
#include <functional>
#include <string>
#include <utility>

#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace util {

// A handle to an operation scheduled for future execution. The handle may
// outlive the operation, but it *cannot* outlive the executor that created it.
class DelayedOperation {
 public:
  // Creates an empty `DelayedOperation` not associated with any actual
  // operation. Calling `Cancel` on it is a no-op.
  DelayedOperation() {
  }

  // Returns whether this `DelayedOperation` is associated with an actual
  // operation.
  explicit operator bool() const {
    return static_cast<bool>(cancel_func_);
  }

  // If the operation has not been run yet, cancels the operation. Otherwise,
  // this function is a no-op.
  void Cancel() {
    if (cancel_func_) {
      cancel_func_();
      cancel_func_ = {};
    }
  }

  // Internal use only.
  explicit DelayedOperation(std::function<void()>&& cancel_func)
      : cancel_func_{std::move(cancel_func)} {
  }

 private:
  std::function<void()> cancel_func_;
};

// An interface to a platform-specific executor of asynchronous operations
// (called tasks on other platforms).
//
// Operations may be scheduled for immediate or delayed execution. Operations
// delayed until the exact same time are scheduled in FIFO order.
//
// The operations are executed sequentially; only a single operation is executed
// at any given time.
//
// Delayed operations may be canceled if they have not already been run.
class Executor {
 public:
  using Tag = int;
  using Operation = std::function<void()>;
  using Milliseconds = std::chrono::milliseconds;

  // Operations scheduled for future execution have an opaque tag. The value of
  // the tag is ignored by the executor but can be used to find operations with
  // a given tag after they are scheduled.
  struct TaggedOperation {
    TaggedOperation() {
    }
    TaggedOperation(const Tag tag, Operation&& operation)
        : tag{tag}, operation{std::move(operation)} {
    }
    Tag tag = 0;
    Operation operation;
  };

  virtual ~Executor() {
  }

  // Schedules the `operation` to be asynchronously executed as soon as
  // possible, in FIFO order.
  virtual void Execute(Operation&& operation) = 0;
  // Like `Execute`, but blocks until the `operation` finishes, consequently
  // draining immediate operations from the executor.
  virtual void ExecuteBlocking(Operation&& operation) = 0;
  // Scheduled the given `operation` to be executed after `delay` milliseconds
  // from now, and returns a handle that allows to cancel the operation
  // (provided it hasn't been run already). The operation is tagged to allow
  // retrieving it later.
  //
  // `delay` must be non-negative; use `Execute` to schedule operations for
  // immediate execution.
  virtual DelayedOperation Schedule(Milliseconds delay,
                                    TaggedOperation&& operation) = 0;

  // Checks for the caller whether it is being invoked by this executor.
  virtual bool IsCurrentExecutor() const = 0;
  // Returns some sort of an identifier for the current execution context. The
  // only guarantee is that it will return different values depending on whether
  // this function is invoked by this executor or not.
  virtual std::string CurrentExecutorName() const = 0;
  // Like `CurrentExecutorName`, but returns an identifier for this executor,
  // whether the caller code currently runs on this executor or not.
  virtual std::string Name() const = 0;

  // Checks whether an operation tagged with the given `tag` is currently
  // scheduled for future execution.
  virtual bool IsScheduled(Tag tag) const = 0;
  // Removes the nearest due scheduled operation from the schedule and returns
  // it to the caller. This function may be used to reschedule operations.
  // Immediate operations don't count; only operations scheduled for delayed
  // execution may be removed. If no such operations are currently scheduled, an
  // empty `optional` is returned.
  virtual absl::optional<TaggedOperation> PopFromSchedule() = 0;
};

}  // namespace util
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_EXECUTOR_H_

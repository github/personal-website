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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_REMOTE_GRPC_COMPLETION_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_REMOTE_GRPC_COMPLETION_H_

#include <chrono>  // NOLINT(build/c++11)
#include <functional>
#include <future>  // NOLINT(build/c++11)
#include <memory>
#include <utility>

#include "Firestore/core/src/firebase/firestore/util/async_queue.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "grpcpp/support/byte_buffer.h"

namespace firebase {
namespace firestore {
namespace remote {

/**
 * A completion for a gRPC asynchronous operation that runs an arbitrary
 * callback.
 *
 * All created `GrpcCompletion`s are expected to be put on the gRPC completion
 * queue (as "tags"). `GrpcCompletion` expects that once it's received back from
 * the gRPC completion queue, `Complete` will be called on it. `Complete`
 * doesn't run the given callback immediately when taken off the queue; rather,
 * it schedules running the callback on the worker queue. If the callback is no
 * longer relevant, calling `Cancel` on the `GrpcCompletion` will turn the
 * callback into a no-op.
 *
 * `GrpcCompletion` owns the objects that are used by gRPC operations for output
 * (a `ByteBuffer` for reading a new message and a `Status` for finish
 * operation). The buffer and/or the status may be unused by the corresponding
 * gRPC operation.
 *
 * `GrpcCompletion` is "self-owned"; `GrpcCompletion` deletes itself in its
 * `Complete` method.
 *
 * `GrpcCompletion` expects all gRPC objects pertaining to the current stream to
 * remain valid until the `GrpcCompletion` comes back from the gRPC completion
 * queue.
 */
class GrpcCompletion {
 public:
  /**
   * This is only to aid debugging and testing; type allows easily
   * distinguishing between pending completions of a gRPC call.
   */
  enum class Type { Start, Read, Write, Finish };

  /**
   * The boolean parameter is used to indicate whether the corresponding gRPC
   * operation finished successfully or not.
   *
   * The `GrpcCompletion` pointer will always point to `this`.
   */
  using Callback = std::function<void(bool, const GrpcCompletion*)>;

  GrpcCompletion(Type type,
                 const std::shared_ptr<util::AsyncQueue>& worker_queue,
                 Callback&& callback);

  /**
   * Marks the `GrpcCompletion` as having come back from the gRPC completion
   * queue and puts notifying the observing stream on the Firestore async queue.
   * The given `ok` value indicates whether the corresponding gRPC operation
   * completed successfully.
   *
   * This function deletes the `GrpcCompletion`.
   *
   * Must be called outside of Firestore async queue.
   */
  void Complete(bool ok);

  void Cancel();

  /**
   * Blocks until the `GrpcCompletion` comes back from the gRPC completion
   * queue. It is important to only call this function when the `GrpcCompletion`
   * is sure to come back from the queue quickly.
   */
  void WaitUntilOffQueue();
  std::future_status WaitUntilOffQueue(std::chrono::milliseconds timeout);

  grpc::ByteBuffer* message() {
    return &message_;
  }
  const grpc::ByteBuffer* message() const {
    return &message_;
  }
  grpc::Status* status() {
    return &status_;
  }
  const grpc::Status* status() const {
    return &status_;
  }

  Type type() const {
    return type_;
  }

 private:
  std::shared_ptr<util::AsyncQueue> worker_queue_;
  Callback callback_;

  void EnsureValidFuture();

  // Note that even though `grpc::GenericClientAsyncReaderWriter::Write` takes
  // the byte buffer by const reference, it expects the buffer's lifetime to
  // extend beyond `Write` (the buffer must be valid until the completion queue
  // returns the tag associated with the write, see
  // https://github.com/grpc/grpc/issues/13019#issuecomment-336932929, #5).
  grpc::ByteBuffer message_;
  grpc::Status status_;

  std::promise<void> off_queue_;
  std::future<void> off_queue_future_;

  Type type_{};
};

}  // namespace remote
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_REMOTE_GRPC_COMPLETION_H_

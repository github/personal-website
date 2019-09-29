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

#include "Firestore/core/src/firebase/firestore/remote/grpc_completion.h"

#include <memory>
#include <utility>

namespace firebase {
namespace firestore {
namespace remote {

using util::AsyncQueue;

GrpcCompletion::GrpcCompletion(
    Type type,
    const std::shared_ptr<util::AsyncQueue>& worker_queue,
    Callback&& callback)
    : worker_queue_{worker_queue}, callback_{std::move(callback)}, type_{type} {
}

void GrpcCompletion::Cancel() {
  worker_queue_->VerifyIsCurrentQueue();
  callback_ = {};
}

void GrpcCompletion::WaitUntilOffQueue() {
  worker_queue_->VerifyIsCurrentQueue();

  EnsureValidFuture();
  return off_queue_future_.wait();
}

std::future_status GrpcCompletion::WaitUntilOffQueue(
    std::chrono::milliseconds timeout) {
  worker_queue_->VerifyIsCurrentQueue();

  EnsureValidFuture();
  return off_queue_future_.wait_for(timeout);
}

void GrpcCompletion::EnsureValidFuture() {
  if (!off_queue_future_.valid()) {
    off_queue_future_ = off_queue_.get_future();
  }
}

void GrpcCompletion::Complete(bool ok) {
  // This mechanism allows `GrpcStream` to know when the completion is off the
  // gRPC completion queue (and thus no longer requires the underlying gRPC
  // objects to be valid).
  off_queue_.set_value();

  worker_queue_->Enqueue([this, ok] {
    if (callback_) {
      callback_(ok, this);
    }
    delete this;
  });
}

}  // namespace remote
}  // namespace firestore
}  // namespace firebase

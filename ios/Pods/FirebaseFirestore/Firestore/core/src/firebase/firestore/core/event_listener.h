/*
 * Copyright 2019 Google
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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_EVENT_LISTENER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_EVENT_LISTENER_H_

#include <atomic>
#include <memory>
#include <utility>

#include "Firestore/core/src/firebase/firestore/util/executor.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"
#include "Firestore/core/src/firebase/firestore/util/statusor_callback.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace core {

/**
 * A general interface for listening to events internally.
 */
template <typename T>
class EventListener {
 public:
  static std::unique_ptr<EventListener<T>> Create(
      util::StatusOrCallback<T> callback);

  virtual ~EventListener() {
  }

  /**
   * OnEvent will be called with the new value or the error if an error
   * occurred.
   *
   * @param maybe_value The value of the event or the error.
   */
  virtual void OnEvent(util::StatusOr<T> maybe_value) = 0;
};

/**
 * A wrapper around another EventListener that dispatches events asynchronously.
 */
template <typename T>
class AsyncEventListener
    : public EventListener<T>,
      public std::enable_shared_from_this<AsyncEventListener<T>> {
 public:
  using DelegateListener = std::unique_ptr<EventListener<T>>;

  AsyncEventListener(const std::shared_ptr<util::Executor>& executor,
                     DelegateListener&& delegate)
      : executor_(executor), delegate_(std::move(delegate)) {
    // std::atomic's constructor is not atomic, so assign after contruction
    // (since assignment is atomic).
    muted_ = false;
  }

  static std::shared_ptr<AsyncEventListener<T>> Create(
      std::shared_ptr<util::Executor> executor, DelegateListener&& delegate);

  static std::shared_ptr<AsyncEventListener<T>> Create(
      std::shared_ptr<util::Executor> executor, EventListener<T>&& delegate) {
    return Create(executor,
                  absl::make_unique<EventListener>(std::move(delegate)));
  }

  void OnEvent(util::StatusOr<T> maybe_value) override;

  /**
   * Synchronously mutes the listener and raises no further events. This method
   * is thread safe and can be called from any queue.
   */
  void Mute();

 private:
  std::atomic<bool> muted_;
  std::shared_ptr<util::Executor> executor_;
  DelegateListener delegate_;
};

template <typename T>
std::unique_ptr<EventListener<T>> EventListener<T>::Create(
    util::StatusOrCallback<T> callback) {
  class CallbackEventListener : public EventListener<T> {
   public:
    explicit CallbackEventListener(util::StatusOrCallback<T>&& callback)
        : callback_(std::move(callback)) {
    }

    void OnEvent(util::StatusOr<T> maybe_value) override {
      callback_(std::move(maybe_value));
    }

   private:
    util::StatusOrCallback<T> callback_;
  };

  return absl::make_unique<CallbackEventListener>(std::move(callback));
}

template <typename T>
std::shared_ptr<AsyncEventListener<T>> AsyncEventListener<T>::Create(
    std::shared_ptr<util::Executor> executor, DelegateListener&& delegate) {
  return std::make_shared<AsyncEventListener<T>>(executor, std::move(delegate));
}

template <typename T>
void AsyncEventListener<T>::Mute() {
  muted_ = true;
}

template <typename T>
void AsyncEventListener<T>::OnEvent(util::StatusOr<T> maybe_value) {
  // Retain a strong reference to this. If the EventManager is sending an error
  // it will immediately clear its strong reference to this after posting the
  // event. The strong reference here allows the AsyncEventListener to survive
  // until the executor gets around to calling.
  std::shared_ptr<AsyncEventListener<T>> shared_this = this->shared_from_this();

  executor_->Execute([shared_this, maybe_value]() {
    if (!shared_this->muted_) {
      shared_this->delegate_->OnEvent(std::move(maybe_value));
    }
  });
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_EVENT_LISTENER_H_

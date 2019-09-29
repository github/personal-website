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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REFERENCE_DELEGATE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REFERENCE_DELEGATE_H_

#if __OBJC__
#import "Firestore/Source/Local/FSTPersistence.h"
#endif  // __OBJC__

#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "absl/strings/string_view.h"

namespace firebase {
namespace firestore {
namespace model {

class DocumentKey;

}  // namespace model

namespace local {

class QueryData;
class ReferenceSet;

/**
 * A ReferenceDelegate instance handles all of the hooks into the
 * document-reference lifecycle. This includes being added to a target, being
 * removed from a target, being subject to mutation, and being mutated by the
 * user.
 *
 * Different implementations may do different things with each of these events.
 * Not every implementation needs to do something with every lifecycle hook.
 *
 * Implementations that care about sequence numbers are responsible for
 * generating them and making them available.
 */
class ReferenceDelegate {
 public:
  virtual model::ListenSequenceNumber current_sequence_number() const = 0;

  /**
   * Registers a ReferenceSet of documents that should be considered
   * 'referenced' and not eligible for removal during garbage collection.
   */
  virtual void AddInMemoryPins(ReferenceSet* set) = 0;

  /**
   * Notifies the delegate that the given document was added to a target.
   */
  virtual void AddReference(const model::DocumentKey& key) = 0;

  /**
   * Notifies the delegate that the given document was removed from a target.
   */
  virtual void RemoveReference(const model::DocumentKey& key) = 0;

  /**
   * Notifies the delegate that a document is no longer being mutated by the
   * user.
   */
  virtual void RemoveMutationReference(const model::DocumentKey& key) = 0;

  /**
   * Notifies the delegate that a target was removed.
   */
  virtual void RemoveTarget(const local::QueryData& query_data) = 0;

  /**
   * Notifies the delegate that a limbo document was updated.
   */
  virtual void UpdateLimboDocument(const model::DocumentKey& key) = 0;

  /**
   * Lifecycle hook that notifies the delegate that a transaction has started.
   */
  virtual void OnTransactionStarted(absl::string_view label) = 0;

  /**
   * Lifecycle hook that notifies the delegate that a transaction has committed.
   */
  virtual void OnTransactionCommitted() = 0;
};

#if __OBJC__

class ReferenceDelegateBridge : public ReferenceDelegate {
 public:
  ReferenceDelegateBridge() = default;

  explicit ReferenceDelegateBridge(id<FSTReferenceDelegate> target)
      : target_(target) {
  }

  model::ListenSequenceNumber current_sequence_number() const override {
    return target_.currentSequenceNumber;
  }

  void AddInMemoryPins(ReferenceSet* set) override {
    [target_ addInMemoryPins:set];
  }

  void AddReference(const model::DocumentKey& key) override {
    [target_ addReference:key];
  }

  void RemoveReference(const model::DocumentKey& key) override {
    [target_ removeReference:key];
  }

  void RemoveMutationReference(const model::DocumentKey& key) override {
    [target_ removeMutationReference:key];
  }

  void RemoveTarget(const local::QueryData& query_data) override {
    [target_ removeTarget:query_data];
  }

  void UpdateLimboDocument(const model::DocumentKey& key) override {
    [target_ limboDocumentUpdated:key];
  }

  void OnTransactionStarted(absl::string_view label) override {
    if ([target_ conformsToProtocol:@protocol(FSTTransactional)]) {
      auto transactional = static_cast<id<FSTTransactional>>(target_);
      [transactional startTransaction:label];
    }
  }

  void OnTransactionCommitted() override {
    if ([target_ conformsToProtocol:@protocol(FSTTransactional)]) {
      auto transactional = static_cast<id<FSTTransactional>>(target_);
      [transactional commitTransaction];
    }
  }

 private:
  __weak id<FSTReferenceDelegate> target_;
};

#endif  // __OBJC__

}  // namespace local
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REFERENCE_DELEGATE_H_

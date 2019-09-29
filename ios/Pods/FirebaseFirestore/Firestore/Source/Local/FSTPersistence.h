/*
 * Copyright 2017 Google
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

#import <Foundation/Foundation.h>

#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/local/index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/mutation_queue.h"
#include "Firestore/core/src/firebase/firestore/local/query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/local/reference_set.h"
#include "Firestore/core/src/firebase/firestore/local/remote_document_cache.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"

@protocol FSTReferenceDelegate;

namespace auth = firebase::firestore::auth;
namespace local = firebase::firestore::local;
namespace model = firebase::firestore::model;

struct FSTTransactionRunner;

NS_ASSUME_NONNULL_BEGIN

/**
 * FSTPersistence is the lowest-level shared interface to persistent storage in Firestore.
 *
 * FSTPersistence is used to create FSTMutationQueue and FSTRemoteDocumentCache instances backed
 * by persistence (which might be in-memory or LevelDB).
 *
 * FSTPersistence also exposes an API to create and commit FSTWriteGroup instances.
 * Implementations of FSTWriteGroup/FSTPersistence only need to guarantee that writes made
 * against the FSTWriteGroup are not made to durable storage until commitGroup:action: is called
 * here. Since memory-only storage components do not alter durable storage, they are free to ignore
 * the group.
 *
 * This contract is enough to allow the FSTLocalStore be be written independently of whether or not
 * the stored state actually is durably persisted. If persistent storage is enabled, writes are
 * grouped together to avoid inconsistent state that could cause crashes.
 *
 * Concretely, when persistent storage is enabled, the persistent versions of FSTMutationQueue,
 * FSTRemoteDocumentCache, and others (the mutators) will defer their writes into an FSTWriteGroup.
 * Once the local store has completed one logical operation, it commits the write group using
 * [FSTPersistence commitGroup:action:].
 *
 * When persistent storage is disabled, the non-persistent versions of the mutators ignore the
 * FSTWriteGroup and [FSTPersistence commitGroup:action:] is a no-op. This short-cut is allowed
 * because memory-only storage leaves no state so it cannot be inconsistent.
 *
 * This simplifies the implementations of the mutators and allows memory-only implementations to
 * supplement the persistent ones without requiring any special dual-store implementation of
 * FSTPersistence. The cost is that the FSTLocalStore needs to be slightly careful about the order
 * of its reads and writes in order to avoid relying on being able to read back uncommitted writes.
 */
@protocol FSTPersistence <NSObject>

/** Releases any resources held during eager shutdown. */
- (void)shutdown;

/**
 * Returns a MutationQueue representing the persisted mutations for the given user.
 *
 * <p>Note: The implementation is free to return the same instance every time this is called for a
 * given user. In particular, the memory-backed implementation does this to emulate the persisted
 * implementation to the extent possible (e.g. in the case of uid switching from
 * sally=>jack=>sally, sally's mutation queue will be preserved).
 */
- (local::MutationQueue *)mutationQueueForUser:(const auth::User &)user;

/** Creates an FSTQueryCache representing the persisted cache of queries. */
- (local::QueryCache *)queryCache;

/** Creates a RemoteDocumentCache representing the persisted cache of remote documents. */
- (local::RemoteDocumentCache *)remoteDocumentCache;

/** Creates an IndexManager that manages our persisted query indexes. */
- (local::IndexManager *)indexManager;

@property(nonatomic, readonly, assign) const FSTTransactionRunner &run;

/**
 * This property provides access to hooks around the document reference lifecycle. It is initially
 * nullable while being implemented, but the goal is to eventually have it be non-nil.
 */
@property(nonatomic, readonly, strong) id<FSTReferenceDelegate> referenceDelegate;

@property(nonatomic, readonly) model::ListenSequenceNumber currentSequenceNumber;

@end

@protocol FSTTransactional

- (void)startTransaction:(absl::string_view)label;

- (void)commitTransaction;

@end

/**
 * An FSTReferenceDelegate instance handles all of the hooks into the document-reference lifecycle.
 * This includes being added to a target, being removed from a target, being subject to mutation,
 * and being mutated by the user.
 *
 * Different implementations may do different things with each of these events. Not every
 * implementation needs to do something with every lifecycle hook.
 *
 * Implementations that care about sequence numbers are responsible for generating them and making
 * them available.
 */
@protocol FSTReferenceDelegate <NSObject>

/**
 * Registers an FSTReferenceSet of documents that should be considered 'referenced' and not eligible
 * for removal during garbage collection.
 */
- (void)addInMemoryPins:(local::ReferenceSet *)set;

/**
 * Notify the delegate that a target was removed.
 */
- (void)removeTarget:(const local::QueryData &)queryData;

/**
 * Notify the delegate that the given document was added to a target.
 */
- (void)addReference:(const model::DocumentKey &)key;

/**
 * Notify the delegate that the given document was removed from a target.
 */
- (void)removeReference:(const model::DocumentKey &)key;

/**
 * Notify the delegate that a document is no longer being mutated by the user.
 */
- (void)removeMutationReference:(const model::DocumentKey &)key;

/**
 * Notify the delegate that a limbo document was updated.
 */
- (void)limboDocumentUpdated:(const model::DocumentKey &)key;

@property(nonatomic, readonly) model::ListenSequenceNumber currentSequenceNumber;

@end

struct FSTTransactionRunner {
// Intentionally disable nullability checking for this function. We cannot properly annotate
// the function because this function can handle both pointer and non-pointer types. It is an error
// to annotate non-pointer types with a nullability annotation.
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wnullability-completeness"

  /**
   * The following two functions handle accepting callables and optionally running them within a
   * transaction. Persistence layers that conform to the FSTTransactional protocol can set
   * themselves as the backing persistence for a transaction runner, in which case a transaction
   * will be started before a block is run, and committed after the block has executed. If there is
   * no backing instance of FSTTransactional, the block will be run directly.
   *
   * There are two instances of operator() to handle the case where the block returns void, rather
   * than a type.
   *
   * The transaction runner keeps a weak reference to the backing persistence so as not to cause a
   * retain cycle. The reference is upgraded to strong (with a fatal error if it has disappeared)
   * for the duration of running a transaction.
   */

  template <typename F>
  auto operator()(absl::string_view label, F block) const ->
      typename std::enable_if<std::is_void<decltype(block())>::value, void>::type {
    __strong id<FSTTransactional> strongDb = _db;
    if (!strongDb && _expect_db) {
      HARD_FAIL("Transaction runner accessed without underlying db when it expected one");
    }
    if (strongDb) {
      [strongDb startTransaction:label];
    }
    block();
    if (strongDb) {
      [strongDb commitTransaction];
    }
  }

  template <typename F>
  auto operator()(absl::string_view label, F block) const ->
      typename std::enable_if<!std::is_void<decltype(block())>::value, decltype(block())>::type {
    using ReturnT = decltype(block());
    __strong id<FSTTransactional> strongDb = _db;
    if (!strongDb && _expect_db) {
      HARD_FAIL("Transaction runner accessed without underlying db when it expected one");
    }
    if (strongDb) {
      [strongDb startTransaction:label];
    }
    ReturnT result = block();
    if (strongDb) {
      [strongDb commitTransaction];
    }
    return result;
  }
#pragma clang diagnostic pop
  void SetBackingPersistence(id<FSTTransactional> db) {
    _db = db;
    _expect_db = true;
  }

 private:
  __weak id<FSTTransactional> _db;
  bool _expect_db = false;
};

NS_ASSUME_NONNULL_END

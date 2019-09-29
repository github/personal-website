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

#import "Firestore/Source/Local/FSTMemoryPersistence.h"

#include <memory>
#include <unordered_map>
#include <unordered_set>
#include <vector>

#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/local/index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/listen_sequence.h"
#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"
#include "Firestore/core/src/firebase/firestore/local/memory_index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/memory_mutation_queue.h"
#include "Firestore/core/src/firebase/firestore/local/memory_query_cache.h"
#include "Firestore/core/src/firebase/firestore/local/memory_remote_document_cache.h"
#include "Firestore/core/src/firebase/firestore/local/proto_sizer.h"
#include "Firestore/core/src/firebase/firestore/local/reference_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "absl/memory/memory.h"

using firebase::firestore::auth::HashUser;
using firebase::firestore::auth::User;
using firebase::firestore::local::ListenSequence;
using firebase::firestore::local::LruGarbageCollector;
using firebase::firestore::local::LruParams;
using firebase::firestore::local::MemoryIndexManager;
using firebase::firestore::local::MemoryMutationQueue;
using firebase::firestore::local::MemoryQueryCache;
using firebase::firestore::local::MemoryRemoteDocumentCache;
using firebase::firestore::local::ProtoSizer;
using firebase::firestore::local::QueryData;
using firebase::firestore::local::ReferenceSet;
using firebase::firestore::local::TargetCallback;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::DocumentKeyHash;
using firebase::firestore::model::ListenSequenceNumber;
using firebase::firestore::model::TargetId;
using firebase::firestore::util::Status;

using MutationQueues = std::unordered_map<User, std::unique_ptr<MemoryMutationQueue>, HashUser>;

NS_ASSUME_NONNULL_BEGIN

@interface FSTMemoryPersistence ()

- (MemoryQueryCache *)queryCache;

- (MemoryRemoteDocumentCache *)remoteDocumentCache;

- (MemoryIndexManager *)indexManager;

- (MemoryMutationQueue *)mutationQueueForUser:(const User &)user;

@property(nonatomic, readonly) MutationQueues &mutationQueues;

@property(nonatomic, assign, getter=isStarted) BOOL started;

// Make this property writable so we can wire up a delegate.
@property(nonatomic, strong) id<FSTReferenceDelegate> referenceDelegate;

@end

@implementation FSTMemoryPersistence {
  /**
   * The QueryCache representing the persisted cache of queries.
   *
   * Note that this is retained here to make it easier to write tests affecting both the in-memory
   * and LevelDB-backed persistence layers. Tests can create a new FSTLocalStore wrapping this
   * FSTPersistence instance and this will make the in-memory persistence layer behave as if it
   * were actually persisting values.
   */
  std::unique_ptr<MemoryQueryCache> _queryCache;

  /** The RemoteDocumentCache representing the persisted cache of remote documents. */
  std::unique_ptr<MemoryRemoteDocumentCache> _remoteDocumentCache;

  MemoryIndexManager _indexManager;

  FSTTransactionRunner _transactionRunner;

  id<FSTReferenceDelegate> _referenceDelegate;
}

+ (instancetype)persistenceWithEagerGC {
  FSTMemoryPersistence *persistence = [[FSTMemoryPersistence alloc] init];
  persistence.referenceDelegate =
      [[FSTMemoryEagerReferenceDelegate alloc] initWithPersistence:persistence];
  return persistence;
}

+ (instancetype)persistenceWithLruParams:(firebase::firestore::local::LruParams)lruParams
                              serializer:(FSTLocalSerializer *)serializer {
  FSTMemoryPersistence *persistence = [[FSTMemoryPersistence alloc] init];
  persistence.referenceDelegate =
      [[FSTMemoryLRUReferenceDelegate alloc] initWithPersistence:persistence
                                                      serializer:serializer
                                                       lruParams:lruParams];
  return persistence;
}

- (instancetype)init {
  if (self = [super init]) {
    _queryCache = absl::make_unique<MemoryQueryCache>(self);
    _remoteDocumentCache = absl::make_unique<MemoryRemoteDocumentCache>(self);
    self.started = YES;
  }
  return self;
}

- (void)setReferenceDelegate:(id<FSTReferenceDelegate>)referenceDelegate {
  _referenceDelegate = referenceDelegate;
  id delegate = _referenceDelegate;
  if ([delegate conformsToProtocol:@protocol(FSTTransactional)]) {
    _transactionRunner.SetBackingPersistence((id<FSTTransactional>)_referenceDelegate);
  }
}

- (void)shutdown {
  // No durable state to ensure is closed on shutdown.
  HARD_ASSERT(self.isStarted, "FSTMemoryPersistence shutdown without start!");
  self.started = NO;
}

- (id<FSTReferenceDelegate>)referenceDelegate {
  return _referenceDelegate;
}

- (ListenSequenceNumber)currentSequenceNumber {
  return [_referenceDelegate currentSequenceNumber];
}

- (const FSTTransactionRunner &)run {
  return _transactionRunner;
}

- (MemoryMutationQueue *)mutationQueueForUser:(const User &)user {
  const std::unique_ptr<MemoryMutationQueue> &existing = _mutationQueues[user];
  if (!existing) {
    _mutationQueues[user] = absl::make_unique<MemoryMutationQueue>(self);
    return _mutationQueues[user].get();
  } else {
    return existing.get();
  }
}

- (MemoryQueryCache *)queryCache {
  return _queryCache.get();
}

- (MemoryRemoteDocumentCache *)remoteDocumentCache {
  return _remoteDocumentCache.get();
}

- (MemoryIndexManager *)indexManager {
  return &_indexManager;
}

@end

@implementation FSTMemoryLRUReferenceDelegate {
  local::LruDelegateBridge _delegateBridge;
  // This delegate should have the same lifetime as the persistence layer, but mark as
  // weak to avoid retain cycle.
  __weak FSTMemoryPersistence *_persistence;
  // Tracks sequence numbers of when documents are used. Equivalent to sentinel rows in
  // the leveldb implementation.
  std::unordered_map<DocumentKey, ListenSequenceNumber, DocumentKeyHash> _sequenceNumbers;
  ReferenceSet *_additionalReferences;
  std::unique_ptr<LruGarbageCollector> _gc;
  // PORTING NOTE: when this class is ported to C++, this does not need to be a pointer
  std::unique_ptr<ListenSequence> _listenSequence;
  ListenSequenceNumber _currentSequenceNumber;
  FSTLocalSerializer *_serializer;
}

- (instancetype)initWithPersistence:(FSTMemoryPersistence *)persistence
                         serializer:(FSTLocalSerializer *)serializer
                          lruParams:(firebase::firestore::local::LruParams)lruParams {
  if (self = [super init]) {
    _persistence = persistence;
    _delegateBridge = local::LruDelegateBridge(self);
    _gc = absl::make_unique<LruGarbageCollector>(&_delegateBridge, lruParams);
    _currentSequenceNumber = local::kListenSequenceNumberInvalid;
    // Theoretically this is always 0, since this is all in-memory...
    ListenSequenceNumber highestSequenceNumber =
        _persistence.queryCache->highest_listen_sequence_number();
    _listenSequence = absl::make_unique<ListenSequence>(highestSequenceNumber);
    _serializer = serializer;
  }
  return self;
}

- (local::LruGarbageCollector *)gc {
  return _gc.get();
}

- (ListenSequenceNumber)currentSequenceNumber {
  HARD_ASSERT(_currentSequenceNumber != local::kListenSequenceNumberInvalid,
              "Asking for a sequence number outside of a transaction");
  return _currentSequenceNumber;
}

- (void)addInMemoryPins:(ReferenceSet *)set {
  // Technically can't assert this, due to restartWithNoopGarbageCollector (for now...)
  // FSTAssert(_additionalReferences == nil, @"Overwriting additional references");
  _additionalReferences = set;
}

- (void)removeTarget:(const QueryData &)queryData {
  QueryData updated = queryData.Copy(queryData.snapshot_version(), queryData.resume_token(),
                                     _currentSequenceNumber);
  _persistence.queryCache->UpdateTarget(updated);
}

- (void)limboDocumentUpdated:(const DocumentKey &)key {
  _sequenceNumbers[key] = self.currentSequenceNumber;
}

- (void)startTransaction:(absl::string_view)label {
  _currentSequenceNumber = _listenSequence->Next();
}

- (void)commitTransaction {
  _currentSequenceNumber = local::kListenSequenceNumberInvalid;
}

- (void)enumerateTargetsUsingCallback:(const TargetCallback &)callback {
  return _persistence.queryCache->EnumerateTargets(callback);
}

- (void)enumerateMutationsUsingCallback:
    (const firebase::firestore::local::OrphanedDocumentCallback &)callback {
  for (const auto &entry : _sequenceNumbers) {
    ListenSequenceNumber sequenceNumber = entry.second;
    const DocumentKey &key = entry.first;
    // Pass in the exact sequence number as the upper bound so we know it won't be pinned by being
    // too recent.
    if (![self isPinnedAtSequenceNumber:sequenceNumber document:key]) {
      callback(key, sequenceNumber);
    }
  }
}

- (int)removeTargetsThroughSequenceNumber:(ListenSequenceNumber)sequenceNumber
                              liveQueries:
                                  (const std::unordered_map<TargetId, QueryData> &)liveQueries {
  return _persistence.queryCache->RemoveTargets(sequenceNumber, liveQueries);
}

- (size_t)sequenceNumberCount {
  size_t totalCount = _persistence.queryCache->size();
  [self enumerateMutationsUsingCallback:[&totalCount](const DocumentKey &key,
                                                      ListenSequenceNumber sequenceNumber) {
    totalCount++;
  }];
  return totalCount;
}

- (int)removeOrphanedDocumentsThroughSequenceNumber:(ListenSequenceNumber)upperBound {
  std::vector<DocumentKey> removed =
      _persistence.remoteDocumentCache->RemoveOrphanedDocuments(self, upperBound);
  for (const auto &key : removed) {
    _sequenceNumbers.erase(key);
  }
  return static_cast<int>(removed.size());
}

- (void)addReference:(const DocumentKey &)key {
  _sequenceNumbers[key] = self.currentSequenceNumber;
}

- (void)removeReference:(const DocumentKey &)key {
  _sequenceNumbers[key] = self.currentSequenceNumber;
}

- (BOOL)mutationQueuesContainKey:(const DocumentKey &)key {
  const MutationQueues &queues = [_persistence mutationQueues];
  for (const auto &entry : queues) {
    if (entry.second->ContainsKey(key)) {
      return YES;
    }
  }
  return NO;
}

- (void)removeMutationReference:(const DocumentKey &)key {
  _sequenceNumbers[key] = self.currentSequenceNumber;
}

- (BOOL)isPinnedAtSequenceNumber:(ListenSequenceNumber)upperBound
                        document:(const DocumentKey &)key {
  if ([self mutationQueuesContainKey:key]) {
    return YES;
  }
  if (_additionalReferences->ContainsKey(key)) {
    return YES;
  }
  if (_persistence.queryCache->Contains(key)) {
    return YES;
  }
  auto it = _sequenceNumbers.find(key);
  if (it != _sequenceNumbers.end() && it->second > upperBound) {
    return YES;
  }
  return NO;
}

- (size_t)byteSize {
  // Note that this method is only used for testing because this delegate is only
  // used for testing. The algorithm here (loop through everything, serialize it
  // and count bytes) is inefficient and inexact, but won't run in production.
  size_t count = 0;
  ProtoSizer sizer(_serializer);
  count += _persistence.queryCache->CalculateByteSize(sizer);
  count += _persistence.remoteDocumentCache->CalculateByteSize(sizer);
  const MutationQueues &queues = [_persistence mutationQueues];
  for (const auto &entry : queues) {
    count += entry.second->CalculateByteSize(_serializer);
  }
  return count;
}

@end

@implementation FSTMemoryEagerReferenceDelegate {
  std::unique_ptr<std::unordered_set<DocumentKey, DocumentKeyHash>> _orphaned;
  // This delegate should have the same lifetime as the persistence layer, but mark as
  // weak to avoid retain cycle.
  __weak FSTMemoryPersistence *_persistence;
  ReferenceSet *_additionalReferences;
}

- (instancetype)initWithPersistence:(FSTMemoryPersistence *)persistence {
  if (self = [super init]) {
    _persistence = persistence;
  }
  return self;
}

- (ListenSequenceNumber)currentSequenceNumber {
  return local::kListenSequenceNumberInvalid;
}

- (void)addInMemoryPins:(ReferenceSet *)set {
  // We should be able to assert that _additionalReferences is nil, but due to restarts in spec
  // tests it would fail.
  _additionalReferences = set;
}

- (void)removeTarget:(const QueryData &)queryData {
  for (const DocumentKey &docKey :
       _persistence.queryCache->GetMatchingKeys(queryData.target_id())) {
    _orphaned->insert(docKey);
  }
  _persistence.queryCache->RemoveTarget(queryData);
}

- (void)addReference:(const DocumentKey &)key {
  _orphaned->erase(key);
}

- (void)removeReference:(const DocumentKey &)key {
  _orphaned->insert(key);
}

- (void)removeMutationReference:(const DocumentKey &)key {
  _orphaned->insert(key);
}

- (BOOL)isReferenced:(const DocumentKey &)key {
  if (_persistence.queryCache->Contains(key)) {
    return YES;
  }
  if ([self mutationQueuesContainKey:key]) {
    return YES;
  }
  if (_additionalReferences->ContainsKey(key)) {
    return YES;
  }
  return NO;
}

- (void)limboDocumentUpdated:(const DocumentKey &)key {
  if ([self isReferenced:key]) {
    _orphaned->erase(key);
  } else {
    _orphaned->insert(key);
  }
}

- (void)startTransaction:(__unused absl::string_view)label {
  _orphaned = absl::make_unique<std::unordered_set<DocumentKey, DocumentKeyHash>>();
}

- (BOOL)mutationQueuesContainKey:(const DocumentKey &)key {
  const MutationQueues &queues = [_persistence mutationQueues];
  for (const auto &entry : queues) {
    if (entry.second->ContainsKey(key)) {
      return YES;
    }
  }
  return NO;
}

- (void)commitTransaction {
  for (const auto &key : *_orphaned) {
    if (![self isReferenced:key]) {
      _persistence.remoteDocumentCache->Remove(key);
    }
  }
  _orphaned.reset();
}

@end

NS_ASSUME_NONNULL_END

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

#import "Firestore/Source/Core/FSTSyncEngine.h"

#include <map>
#include <memory>
#include <set>
#include <unordered_map>
#include <utility>
#include <vector>

#import "FIRFirestoreErrors.h"
#import "Firestore/Source/Local/FSTLocalStore.h"

#include "Firestore/core/include/firebase/firestore/firestore_errors.h"
#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/core/target_id_generator.h"
#include "Firestore/core/src/firebase/firestore/core/transaction.h"
#include "Firestore/core/src/firebase/firestore/core/transaction_runner.h"
#include "Firestore/core/src/firebase/firestore/core/view.h"
#include "Firestore/core/src/firebase/firestore/core/view_snapshot.h"
#include "Firestore/core/src/firebase/firestore/local/local_view_changes.h"
#include "Firestore/core/src/firebase/firestore/local/local_write_result.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/local/reference_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_map.h"
#include "Firestore/core/src/firebase/firestore/model/document_set.h"
#include "Firestore/core/src/firebase/firestore/model/mutation_batch.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/remote/remote_event.h"
#include "Firestore/core/src/firebase/firestore/util/delayed_constructor.h"
#include "Firestore/core/src/firebase/firestore/util/error_apple.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "absl/types/optional.h"

using firebase::firestore::Error;
using firebase::firestore::auth::HashUser;
using firebase::firestore::auth::User;
using firebase::firestore::core::LimboDocumentChange;
using firebase::firestore::core::Query;
using firebase::firestore::core::SyncEngineCallback;
using firebase::firestore::core::TargetIdGenerator;
using firebase::firestore::core::Transaction;
using firebase::firestore::core::TransactionRunner;
using firebase::firestore::core::View;
using firebase::firestore::core::ViewChange;
using firebase::firestore::core::ViewDocumentChanges;
using firebase::firestore::core::ViewSnapshot;
using firebase::firestore::local::LocalViewChanges;
using firebase::firestore::local::LocalWriteResult;
using firebase::firestore::local::QueryData;
using firebase::firestore::local::QueryPurpose;
using firebase::firestore::local::ReferenceSet;
using firebase::firestore::model::BatchId;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::DocumentKeySet;
using firebase::firestore::model::DocumentMap;
using firebase::firestore::model::kBatchIdUnknown;
using firebase::firestore::model::ListenSequenceNumber;
using firebase::firestore::model::MaybeDocumentMap;
using firebase::firestore::model::Mutation;
using firebase::firestore::model::MutationBatchResult;
using firebase::firestore::model::NoDocument;
using firebase::firestore::model::OnlineState;
using firebase::firestore::model::SnapshotVersion;
using firebase::firestore::model::TargetId;
using firebase::firestore::nanopb::ByteString;
using firebase::firestore::remote::Datastore;
using firebase::firestore::remote::RemoteEvent;
using firebase::firestore::remote::RemoteStore;
using firebase::firestore::remote::TargetChange;
using firebase::firestore::util::AsyncQueue;
using firebase::firestore::util::MakeNSError;
using firebase::firestore::util::Status;
using firebase::firestore::util::StatusCallback;

NS_ASSUME_NONNULL_BEGIN

// Limbo documents don't use persistence, and are eagerly GC'd. So, listens for them don't need
// real sequence numbers.
static const ListenSequenceNumber kIrrelevantSequenceNumber = -1;

#pragma mark - FSTQueryView

/**
 * FSTQueryView contains all of the info that FSTSyncEngine needs to track for a particular
 * query and view.
 */
@interface FSTQueryView : NSObject

- (instancetype)initWithQuery:(Query)query
                     targetID:(TargetId)targetID
                  resumeToken:(ByteString)resumeToken
                         view:(core::View)view NS_DESIGNATED_INITIALIZER;

- (instancetype)init NS_UNAVAILABLE;

/** The query itself. */
- (const Query &)query;

/** The targetID created by the client that is used in the watch stream to identify this query. */
@property(nonatomic, assign, readonly) TargetId targetID;

/**
 * An identifier from the datastore backend that indicates the last state of the results that
 * was received. This can be used to indicate where to continue receiving new doc changes for the
 * query.
 */
- (const ByteString &)resumeToken;

/**
 * The view is responsible for computing the final merged truth of what docs are in the query.
 * It gets notified of local and remote changes, and applies the query filters and limits to
 * determine the most correct possible results.
 */
- (core::View *)view;

@end

@implementation FSTQueryView {
  Query _query;
  ByteString _resumeToken;
  util::DelayedConstructor<View> _view;
}

- (instancetype)initWithQuery:(Query)query
                     targetID:(TargetId)targetID
                  resumeToken:(ByteString)resumeToken
                         view:(View)view {
  if (self = [super init]) {
    _query = std::move(query);
    _targetID = targetID;
    _resumeToken = std::move(resumeToken);
    _view.Init(std::move(view));
  }
  return self;
}

- (const Query &)query {
  return _query;
}

- (const ByteString &)resumeToken {
  return _resumeToken;
}

- (View *)view {
  return &*_view;
}

@end

#pragma mark - LimboResolution

/** Tracks a limbo resolution. */
class LimboResolution {
 public:
  LimboResolution() {
  }

  explicit LimboResolution(const DocumentKey &key) : key{key} {
  }

  DocumentKey key;

  /**
   * Set to true once we've received a document. This is used in remoteKeysForTarget and
   * ultimately used by `WatchChangeAggregator` to decide whether it needs to manufacture a delete
   * event for the target once the target is CURRENT.
   */
  bool document_received = false;
};

#pragma mark - FSTSyncEngine

@interface FSTSyncEngine ()

/** The local store, used to persist mutations and cached documents. */
@property(nonatomic, strong, readonly) FSTLocalStore *localStore;

@end

@implementation FSTSyncEngine {
  /** The remote store for sending writes, watches, etc. to the backend. */
  RemoteStore *_remoteStore;

  /**
   * A callback to be notified when queries being listened to produce new view snapshots or errors.
   */
  SyncEngineCallback *_callback;

  /** Used for creating the TargetId for the listens used to resolve limbo documents. */
  TargetIdGenerator _targetIdGenerator;

  /** Stores user completion blocks, indexed by user and BatchId. */
  std::unordered_map<User, NSMutableDictionary<NSNumber *, FSTVoidErrorBlock> *, HashUser>
      _mutationCompletionBlocks;

  /** Stores user callbacks waiting for pending writes to be acknowledged. */
  std::unordered_map<model::BatchId, std::vector<StatusCallback>> _pendingWritesCallbacks;

  /** FSTQueryViews for all active queries, indexed by query. */
  std::unordered_map<Query, FSTQueryView *> _queryViewsByQuery;

  /** FSTQueryViews for all active queries, indexed by target ID. */
  std::unordered_map<TargetId, FSTQueryView *> _queryViewsByTarget;

  /**
   * When a document is in limbo, we create a special listen to resolve it. This maps the
   * DocumentKey of each limbo document to the TargetId of the listen resolving it.
   */
  std::map<DocumentKey, TargetId> _limboTargetsByKey;

  /**
   * Basically the inverse of limboTargetsByKey, a map of target ID to a LimboResolution (which
   * includes the DocumentKey as well as whether we've received a document for the target).
   */
  std::map<TargetId, LimboResolution> _limboResolutionsByTarget;

  User _currentUser;

  /** Used to track any documents that are currently in limbo. */
  ReferenceSet _limboDocumentRefs;
}

- (instancetype)initWithLocalStore:(FSTLocalStore *)localStore
                       remoteStore:(RemoteStore *)remoteStore
                       initialUser:(const User &)initialUser {
  if (self = [super init]) {
    _localStore = localStore;
    _remoteStore = remoteStore;

    _targetIdGenerator = TargetIdGenerator::SyncEngineTargetIdGenerator();
    _currentUser = initialUser;
  }
  return self;
}

- (void)setCallback:(SyncEngineCallback *)callback {
  _callback = callback;
}

- (TargetId)listenToQuery:(Query)query {
  [self assertCallbackExistsForSelector:_cmd];
  HARD_ASSERT(_queryViewsByQuery.find(query) == _queryViewsByQuery.end(),
              "We already listen to query: %s", query.ToString());

  QueryData queryData = [self.localStore allocateQuery:query];
  ViewSnapshot viewSnapshot = [self initializeViewAndComputeSnapshotForQueryData:queryData];
  _callback->OnViewSnapshots({viewSnapshot});

  _remoteStore->Listen(queryData);
  return queryData.target_id();
}

- (ViewSnapshot)initializeViewAndComputeSnapshotForQueryData:(const QueryData &)queryData {
  DocumentMap docs = [self.localStore executeQuery:queryData.query()];
  DocumentKeySet remoteKeys = [self.localStore remoteDocumentKeysForTarget:queryData.target_id()];

  View view(queryData.query(), std::move(remoteKeys));
  ViewDocumentChanges viewDocChanges = view.ComputeDocumentChanges(docs.underlying_map());
  ViewChange viewChange = view.ApplyChanges(viewDocChanges);
  HARD_ASSERT(viewChange.limbo_changes().empty(),
              "View returned limbo docs before target ack from the server.");

  FSTQueryView *queryView = [[FSTQueryView alloc] initWithQuery:queryData.query()
                                                       targetID:queryData.target_id()
                                                    resumeToken:queryData.resume_token()
                                                           view:view];
  _queryViewsByQuery[queryData.query()] = queryView;
  _queryViewsByTarget[queryData.target_id()] = queryView;

  HARD_ASSERT(viewChange.snapshot().has_value(),
              "applyChangesToDocuments for new view should always return a snapshot");
  return viewChange.snapshot().value();
}

- (void)stopListeningToQuery:(const Query &)query {
  [self assertCallbackExistsForSelector:_cmd];

  FSTQueryView *queryView = _queryViewsByQuery[query];
  HARD_ASSERT(queryView, "Trying to stop listening to a query not found");

  [self.localStore releaseQuery:query];
  _remoteStore->StopListening(queryView.targetID);
  [self removeAndCleanupQuery:queryView];
}

- (void)writeMutations:(std::vector<Mutation> &&)mutations
            completion:(FSTVoidErrorBlock)completion {
  [self assertCallbackExistsForSelector:_cmd];

  LocalWriteResult result = [self.localStore locallyWriteMutations:std::move(mutations)];
  [self addMutationCompletionBlock:completion batchID:result.batch_id()];

  [self emitNewSnapshotsAndNotifyLocalStoreWithChanges:result.changes() remoteEvent:absl::nullopt];
  _remoteStore->FillWritePipeline();
}

- (void)registerPendingWritesCallback:(StatusCallback)callback {
  if (!_remoteStore->CanUseNetwork()) {
    LOG_DEBUG("The network is disabled. The task returned by 'awaitPendingWrites()' will not "
              "complete until the network is enabled.");
  }

  int largestPendingBatchId = [self.localStore getHighestUnacknowledgedBatchId];

  if (largestPendingBatchId == kBatchIdUnknown) {
    // Trigger the callback right away if there is no pending writes at the moment.
    callback(Status::OK());
    return;
  }

  auto it = _pendingWritesCallbacks.find(largestPendingBatchId);
  if (it != _pendingWritesCallbacks.end()) {
    it->second.push_back(std::move(callback));
  } else {
    _pendingWritesCallbacks.emplace(largestPendingBatchId,
                                    std::vector<StatusCallback>({std::move(callback)}));
  }
}

/** Triggers callbacks waiting for this batch id to get acknowledged by server, if there are any. */
- (void)triggerPendingWriteCallbacksWithBatchId:(int)batchId {
  auto it = _pendingWritesCallbacks.find(batchId);
  if (it != _pendingWritesCallbacks.end()) {
    for (const auto &callback : it->second) {
      callback(Status::OK());
    }

    _pendingWritesCallbacks.erase(it);
  }
}

- (void)failOutstandingPendingWritesAwaitingCallbacks:(absl::string_view)errorMessage {
  for (const auto &entry : _pendingWritesCallbacks) {
    for (const auto &callback : entry.second) {
      callback(Status(Error::Cancelled, errorMessage));
    }
  }

  _pendingWritesCallbacks.clear();
}

- (void)addMutationCompletionBlock:(FSTVoidErrorBlock)completion batchID:(BatchId)batchID {
  NSMutableDictionary<NSNumber *, FSTVoidErrorBlock> *completionBlocks =
      _mutationCompletionBlocks[_currentUser];
  if (!completionBlocks) {
    completionBlocks = [NSMutableDictionary dictionary];
    _mutationCompletionBlocks[_currentUser] = completionBlocks;
  }
  [completionBlocks setObject:completion forKey:@(batchID)];
}

/**
 * Takes an updateCallback in which a set of reads and writes can be performed atomically. In the
 * updateCallback, user code can read and write values using a transaction object. After the
 * updateCallback, all changes will be committed. If a retryable error occurs (for example, some
 * other client has changed any of the data referenced), then the updateCallback will be called
 * again after a backoff. If the updateCallback still fails after all retries, then the transaction
 * will be rejected.
 *
 * The transaction object passed to the updateCallback contains methods for accessing documents
 * and collections. Unlike other firestore access, data accessed with the transaction will not
 * reflect local changes that have not been committed. For this reason, it is required that all
 * reads are performed before any writes. Transactions must be performed while online.
 */
- (void)transactionWithRetries:(int)retries
                   workerQueue:(const std::shared_ptr<AsyncQueue> &)workerQueue
                updateCallback:(core::TransactionUpdateCallback)updateCallback
                resultCallback:(core::TransactionResultCallback)resultCallback {
  workerQueue->VerifyIsCurrentQueue();
  HARD_ASSERT(retries >= 0, "Got negative number of retries for transaction");

  // Allocate a shared_ptr so that the TransactionRunner can outlive this frame.
  auto runner = std::make_shared<TransactionRunner>(workerQueue, _remoteStore, updateCallback,
                                                    resultCallback);
  runner->Run();
}

- (void)applyRemoteEvent:(const RemoteEvent &)remoteEvent {
  [self assertCallbackExistsForSelector:_cmd];

  // Update `receivedDocument` as appropriate for any limbo targets.
  for (const auto &entry : remoteEvent.target_changes()) {
    TargetId targetID = entry.first;
    const TargetChange &change = entry.second;
    const auto iter = _limboResolutionsByTarget.find(targetID);
    if (iter != _limboResolutionsByTarget.end()) {
      LimboResolution &limboResolution = iter->second;
      // Since this is a limbo resolution lookup, it's for a single document and it could be
      // added, modified, or removed, but not a combination.
      HARD_ASSERT(change.added_documents().size() + change.modified_documents().size() +
                          change.removed_documents().size() <=
                      1,
                  "Limbo resolution for single document contains multiple changes.");

      if (change.added_documents().size() > 0) {
        limboResolution.document_received = true;
      } else if (change.modified_documents().size() > 0) {
        HARD_ASSERT(limboResolution.document_received,
                    "Received change for limbo target document without add.");
      } else if (change.removed_documents().size() > 0) {
        HARD_ASSERT(limboResolution.document_received,
                    "Received remove for limbo target document without add.");
        limboResolution.document_received = false;
      } else {
        // This was probably just a CURRENT targetChange or similar.
      }
    }
  }

  MaybeDocumentMap changes = [self.localStore applyRemoteEvent:remoteEvent];
  [self emitNewSnapshotsAndNotifyLocalStoreWithChanges:changes remoteEvent:remoteEvent];
}

- (void)applyChangedOnlineState:(OnlineState)onlineState {
  [self assertCallbackExistsForSelector:_cmd];

  std::vector<ViewSnapshot> newViewSnapshots;
  for (const auto &entry : _queryViewsByQuery) {
    FSTQueryView *queryView = entry.second;
    ViewChange viewChange = queryView.view->ApplyOnlineStateChange(onlineState);
    HARD_ASSERT(viewChange.limbo_changes().empty(),
                "OnlineState should not affect limbo documents.");
    if (viewChange.snapshot().has_value()) {
      newViewSnapshots.push_back(*std::move(viewChange).snapshot());
    }
  }

  _callback->OnViewSnapshots(std::move(newViewSnapshots));
  _callback->HandleOnlineStateChange(onlineState);
}

- (void)rejectListenWithTargetID:(const TargetId)targetID error:(NSError *)error {
  [self assertCallbackExistsForSelector:_cmd];

  const auto iter = _limboResolutionsByTarget.find(targetID);
  if (iter != _limboResolutionsByTarget.end()) {
    const DocumentKey limboKey = iter->second.key;
    // Since this query failed, we won't want to manually unlisten to it.
    // So go ahead and remove it from bookkeeping.
    _limboTargetsByKey.erase(limboKey);
    _limboResolutionsByTarget.erase(targetID);

    // TODO(dimond): Retry on transient errors?

    // It's a limbo doc. Create a synthetic event saying it was deleted. This is kind of a hack.
    // Ideally, we would have a method in the local store to purge a document. However, it would
    // be tricky to keep all of the local store's invariants with another method.
    NoDocument doc(limboKey, SnapshotVersion::None(), /* has_committed_mutations= */ false);
    DocumentKeySet limboDocuments = DocumentKeySet{limboKey};
    RemoteEvent event{SnapshotVersion::None(), /*target_changes=*/{}, /*target_mismatches=*/{},
                      /*document_updates=*/{{limboKey, doc}}, std::move(limboDocuments)};
    [self applyRemoteEvent:event];
  } else {
    auto found = _queryViewsByTarget.find(targetID);
    HARD_ASSERT(found != _queryViewsByTarget.end(), "Unknown targetId: %s", targetID);
    FSTQueryView *queryView = found->second;
    const Query &query = queryView.query;
    [self.localStore releaseQuery:query];
    [self removeAndCleanupQuery:queryView];
    if ([self errorIsInteresting:error]) {
      LOG_WARN("Listen for query at %s failed: %s", query.path().CanonicalString(),
               error.localizedDescription);
    }
    _callback->OnError(query, Status::FromNSError(error));
  }
}

- (void)applySuccessfulWriteWithResult:(const MutationBatchResult &)batchResult {
  [self assertCallbackExistsForSelector:_cmd];

  // The local store may or may not be able to apply the write result and raise events immediately
  // (depending on whether the watcher is caught up), so we raise user callbacks first so that they
  // consistently happen before listen events.
  [self processUserCallbacksForBatchID:batchResult.batch().batch_id() error:nil];

  [self triggerPendingWriteCallbacksWithBatchId:batchResult.batch().batch_id()];

  MaybeDocumentMap changes = [self.localStore acknowledgeBatchWithResult:batchResult];
  [self emitNewSnapshotsAndNotifyLocalStoreWithChanges:changes remoteEvent:absl::nullopt];
}

- (void)rejectFailedWriteWithBatchID:(BatchId)batchID error:(NSError *)error {
  [self assertCallbackExistsForSelector:_cmd];
  MaybeDocumentMap changes = [self.localStore rejectBatchID:batchID];

  if (!changes.empty() && [self errorIsInteresting:error]) {
    const DocumentKey &minKey = changes.min()->first;
    LOG_WARN("Write at %s failed: %s", minKey.ToString(), error.localizedDescription);
  }

  // The local store may or may not be able to apply the write result and raise events immediately
  // (depending on whether the watcher is caught up), so we raise user callbacks first so that they
  // consistently happen before listen events.
  [self processUserCallbacksForBatchID:batchID error:error];

  [self triggerPendingWriteCallbacksWithBatchId:batchID];

  [self emitNewSnapshotsAndNotifyLocalStoreWithChanges:changes remoteEvent:absl::nullopt];
}

- (void)processUserCallbacksForBatchID:(BatchId)batchID error:(NSError *_Nullable)error {
  NSMutableDictionary<NSNumber *, FSTVoidErrorBlock> *completionBlocks =
      _mutationCompletionBlocks[_currentUser];

  // NOTE: Mutations restored from persistence won't have completion blocks, so it's okay for
  // this (or the completion below) to be nil.
  if (completionBlocks) {
    NSNumber *boxedBatchID = @(batchID);
    FSTVoidErrorBlock completion = completionBlocks[boxedBatchID];
    if (completion) {
      completion(error);
      [completionBlocks removeObjectForKey:boxedBatchID];
    }
  }
}

- (void)assertCallbackExistsForSelector:(SEL)methodSelector {
  HARD_ASSERT(_callback, "Tried to call '%s' before callback was registered.",
              NSStringFromSelector(methodSelector));
}

- (void)removeAndCleanupQuery:(FSTQueryView *)queryView {
  _queryViewsByQuery.erase(queryView.query);
  _queryViewsByTarget.erase(queryView.targetID);

  DocumentKeySet limboKeys = _limboDocumentRefs.ReferencedKeys(queryView.targetID);
  _limboDocumentRefs.RemoveReferences(queryView.targetID);
  for (const DocumentKey &key : limboKeys) {
    if (!_limboDocumentRefs.ContainsKey(key)) {
      // We removed the last reference for this key.
      [self removeLimboTargetForKey:key];
    }
  }
}

/**
 * Computes a new snapshot from the changes and calls the registered callback with the new snapshot.
 */
- (void)emitNewSnapshotsAndNotifyLocalStoreWithChanges:(const MaybeDocumentMap &)changes
                                           remoteEvent:(const absl::optional<RemoteEvent> &)
                                                           maybeRemoteEvent {
  std::vector<ViewSnapshot> newSnapshots;
  std::vector<LocalViewChanges> documentChangesInAllViews;

  for (const auto &entry : _queryViewsByQuery) {
    FSTQueryView *queryView = entry.second;
    const View &view = *queryView.view;
    ViewDocumentChanges viewDocChanges = view.ComputeDocumentChanges(changes);
    if (viewDocChanges.needs_refill()) {
      // The query has a limit and some docs were removed/updated, so we need to re-run the
      // query against the local store to make sure we didn't lose any good docs that had been
      // past the limit.
      DocumentMap docs = [self.localStore executeQuery:queryView.query];
      viewDocChanges = view.ComputeDocumentChanges(docs.underlying_map(), viewDocChanges);
    }

    absl::optional<TargetChange> targetChange;
    if (maybeRemoteEvent.has_value()) {
      const RemoteEvent &remoteEvent = maybeRemoteEvent.value();
      auto it = remoteEvent.target_changes().find(queryView.targetID);
      if (it != remoteEvent.target_changes().end()) {
        targetChange = it->second;
      }
    }
    ViewChange viewChange = queryView.view->ApplyChanges(viewDocChanges, targetChange);

    [self updateTrackedLimboDocumentsWithChanges:viewChange.limbo_changes()
                                        targetID:queryView.targetID];

    if (viewChange.snapshot().has_value()) {
      newSnapshots.push_back(*viewChange.snapshot());
      LocalViewChanges docChanges =
          LocalViewChanges::FromViewSnapshot(*viewChange.snapshot(), queryView.targetID);
      documentChangesInAllViews.push_back(std::move(docChanges));
    }
  }

  _callback->OnViewSnapshots(std::move(newSnapshots));
  [self.localStore notifyLocalViewChanges:documentChangesInAllViews];
}

/** Updates the limbo document state for the given targetID. */
- (void)updateTrackedLimboDocumentsWithChanges:
            (const std::vector<LimboDocumentChange> &)limboChanges
                                      targetID:(TargetId)targetID {
  for (const LimboDocumentChange &limboChange : limboChanges) {
    switch (limboChange.type()) {
      case LimboDocumentChange::Type::Added:
        _limboDocumentRefs.AddReference(limboChange.key(), targetID);
        [self trackLimboChange:limboChange];
        break;

      case LimboDocumentChange::Type::Removed:
        LOG_DEBUG("Document no longer in limbo: %s", limboChange.key().ToString());
        _limboDocumentRefs.RemoveReference(limboChange.key(), targetID);
        if (!_limboDocumentRefs.ContainsKey(limboChange.key())) {
          // We removed the last reference for this key
          [self removeLimboTargetForKey:limboChange.key()];
        }
        break;

      default:
        HARD_FAIL("Unknown limbo change type: %s", limboChange.type());
    }
  }
}

- (void)trackLimboChange:(const LimboDocumentChange &)limboChange {
  const DocumentKey &key = limboChange.key();

  if (_limboTargetsByKey.find(key) == _limboTargetsByKey.end()) {
    LOG_DEBUG("New document in limbo: %s", key.ToString());
    TargetId limboTargetID = _targetIdGenerator.NextId();
    Query query(key.path());
    QueryData queryData(std::move(query), limboTargetID, kIrrelevantSequenceNumber,
                        QueryPurpose::LimboResolution);
    _limboResolutionsByTarget.emplace(limboTargetID, LimboResolution{key});
    _remoteStore->Listen(queryData);
    _limboTargetsByKey[key] = limboTargetID;
  }
}

- (void)removeLimboTargetForKey:(const DocumentKey &)key {
  const auto iter = _limboTargetsByKey.find(key);
  if (iter == _limboTargetsByKey.end()) {
    // This target already got removed, because the query failed.
    return;
  }
  TargetId limboTargetID = iter->second;
  _remoteStore->StopListening(limboTargetID);
  _limboTargetsByKey.erase(key);
  _limboResolutionsByTarget.erase(limboTargetID);
}

// Used for testing
- (std::map<DocumentKey, TargetId>)currentLimboDocuments {
  // Return defensive copy
  return _limboTargetsByKey;
}

- (void)credentialDidChangeWithUser:(const firebase::firestore::auth::User &)user {
  BOOL userChanged = (_currentUser != user);
  _currentUser = user;

  if (userChanged) {
    // Fails callbacks waiting for pending writes requested by previous user.
    [self failOutstandingPendingWritesAwaitingCallbacks:
              "'waitForPendingWrites' callback is cancelled due to a user change."];
    // Notify local store and emit any resulting events from swapping out the mutation queue.
    MaybeDocumentMap changes = [self.localStore userDidChange:user];
    [self emitNewSnapshotsAndNotifyLocalStoreWithChanges:changes remoteEvent:absl::nullopt];
  }

  // Notify remote store so it can restart its streams.
  _remoteStore->HandleCredentialChange();
}

- (DocumentKeySet)remoteKeysForTarget:(TargetId)targetId {
  const auto iter = _limboResolutionsByTarget.find(targetId);
  if (iter != _limboResolutionsByTarget.end() && iter->second.document_received) {
    return DocumentKeySet{iter->second.key};
  } else {
    auto found = _queryViewsByTarget.find(targetId);
    FSTQueryView *queryView = found != _queryViewsByTarget.end() ? found->second : nil;
    return queryView ? queryView.view->synced_documents() : DocumentKeySet{};
  }
}

/**
 * Decides if the error likely represents a developer mistake such as forgetting to create an index
 * or permission denied. Used to decide whether an error is worth automatically logging as a
 * warning.
 */
- (BOOL)errorIsInteresting:(NSError *)error {
  if (error.domain == FIRFirestoreErrorDomain) {
    if (error.code == FIRFirestoreErrorCodeFailedPrecondition &&
        [error.localizedDescription containsString:@"requires an index"]) {
      return YES;
    } else if (error.code == FIRFirestoreErrorCodePermissionDenied) {
      return YES;
    }
  }

  return NO;
}

- (BOOL)isRetryableTransactionError:(const Status &)error {
  // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
  // non-matching document versions with ABORTED. These errors should be retried.
  Error code = error.code();
  return code == Error::Aborted || code == Error::FailedPrecondition ||
         !Datastore::IsPermanentError(error);
}

@end

NS_ASSUME_NONNULL_END

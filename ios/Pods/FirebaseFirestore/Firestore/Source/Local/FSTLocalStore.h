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

#include <vector>

#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/local/local_view_changes.h"
#include "Firestore/core/src/firebase/firestore/local/local_write_result.h"
#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_map.h"
#include "Firestore/core/src/firebase/firestore/model/mutation.h"
#include "Firestore/core/src/firebase/firestore/model/mutation_batch.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"

namespace firebase {
namespace firestore {
namespace remote {

class RemoteEvent;

}  // namespace remote
}  // namespace firestore
}  // namespace firebase

@class FSTLocalViewChanges;
@class FSTLocalWriteResult;
@protocol FSTPersistence;

namespace auth = firebase::firestore::auth;
namespace core = firebase::firestore::core;
namespace local = firebase::firestore::local;
namespace model = firebase::firestore::model;
namespace nanopb = firebase::firestore::nanopb;
namespace remote = firebase::firestore::remote;

NS_ASSUME_NONNULL_BEGIN

/**
 * Local storage in the Firestore client. Coordinates persistence components like the mutation
 * queue and remote document cache to present a latency compensated view of stored data.
 *
 * The LocalStore is responsible for accepting mutations from the Sync Engine. Writes from the
 * client are put into a queue as provisional Mutations until they are processed by the RemoteStore
 * and confirmed as having been written to the server.
 *
 * The local store provides the local version of documents that have been modified locally. It
 * maintains the constraint:
 *
 *  LocalDocument = RemoteDocument + Active(LocalMutations)
 *
 * (Active mutations are those that are enqueued and have not been previously acknowledged or
 * rejected).
 *
 * The RemoteDocument ("ground truth") state is provided via the applyChangeBatch method. It will
 * be some version of a server-provided document OR will be a server-provided document PLUS
 * acknowledged mutations:
 *
 *  RemoteDocument' = RemoteDocument + Acknowledged(LocalMutations)
 *
 * Note that this "dirty" version of a RemoteDocument will not be identical to a server base
 * version, since it has LocalMutations added to it pending getting an authoritative copy from the
 * server.
 *
 * Since LocalMutations can be rejected by the server, we have to be able to revert a LocalMutation
 * that has already been applied to the LocalDocument (typically done by replaying all remaining
 * LocalMutations to the RemoteDocument to re-apply).
 *
 * It also maintains the persistence of mapping queries to resume tokens and target ids.
 *
 * The LocalStore must be able to efficiently execute queries against its local cache of the
 * documents, to provide the initial set of results before any remote changes have been received.
 */
@interface FSTLocalStore : NSObject

/** Creates a new instance of the FSTLocalStore with its required dependencies as parameters. */
- (instancetype)initWithPersistence:(id<FSTPersistence>)persistence
                        initialUser:(const auth::User &)initialUser NS_DESIGNATED_INITIALIZER;

- (instancetype)init NS_UNAVAILABLE;

/** Performs any initial startup actions required by the local store. */
- (void)start;

/**
 * Tells the FSTLocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and returns any
 * resulting document changes.
 */
- (model::MaybeDocumentMap)userDidChange:(const auth::User &)user;

/** Accepts locally generated Mutations and commits them to storage. */
- (local::LocalWriteResult)locallyWriteMutations:(std::vector<model::Mutation> &&)mutations;

/** Returns the current value of a document with a given key, or nil if not found. */
- (absl::optional<model::MaybeDocument>)readDocument:(const model::DocumentKey &)key;

/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 * + remove the batch from the mutation queue;
 * + apply the changes to the remote document cache;
 * + recalculate the latency compensated view implied by those changes (there may be mutations in
 *   the queue that affect the documents but haven't been acknowledged yet); and
 * + give the changed documents back the sync engine
 *
 * @return The resulting (modified) documents.
 */
- (model::MaybeDocumentMap)acknowledgeBatchWithResult:
    (const model::MutationBatchResult &)batchResult;

/**
 * Removes mutations from the MutationQueue for the specified batch. LocalDocuments will be
 * recalculated.
 *
 * @return The resulting (modified) documents.
 */
- (model::MaybeDocumentMap)rejectBatchID:(model::BatchId)batchID;

/** Returns the last recorded stream token for the current user. */
- (nanopb::ByteString)lastStreamToken;

/**
 * Sets the stream token for the current user without acknowledging any mutation batch. This is
 * usually only useful after a stream handshake or in response to an error that requires clearing
 * the stream token.
 */
- (void)setLastStreamToken:(const nanopb::ByteString &)streamToken;

/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to determine whether to
 * buffer incoming snapshots from the backend).
 */
- (const model::SnapshotVersion &)lastRemoteSnapshotVersion;

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote event reflects any
 * write batches that have been acknowledged or rejected (i.e. we do not re-apply local mutations
 * to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the queue.
 */
- (model::MaybeDocumentMap)applyRemoteEvent:(const remote::RemoteEvent &)remoteEvent;

/**
 * Returns the keys of the documents that are associated with the given targetID in the remote
 * table.
 */
- (model::DocumentKeySet)remoteDocumentKeysForTarget:(model::TargetId)targetID;

/**
 * Assigns @a query an internal ID so that its results can be pinned so they don't get GC'd.
 * A query must be allocated in the local store before the store can be used to manage its view.
 */
- (local::QueryData)allocateQuery:(core::Query)query;

/** Unpin all the documents associated with @a query. */
- (void)releaseQuery:(const core::Query &)query;

/** Runs @a query against all the documents in the local store and returns the results. */
- (model::DocumentMap)executeQuery:(const core::Query &)query;

/** Notify the local store of the changed views to locally pin / unpin documents. */
- (void)notifyLocalViewChanges:(const std::vector<local::LocalViewChanges> &)viewChanges;

/**
 * Gets the mutation batch after the passed in batchId in the mutation queue or nil if empty.
 *
 * @param batchID The batch to search after, or -1 for the first mutation in the queue.
 * @return the next mutation or nil if there wasn't one.
 */
- (absl::optional<model::MutationBatch>)nextMutationBatchAfterBatchID:(model::BatchId)batchID;

/**
 * Returns the largest (latest) batch id in mutation queue that is pending server response.
 * Returns `kBatchIdUnknown` if the queue is empty.
 */
- (model::BatchId)getHighestUnacknowledgedBatchId;

- (local::LruResults)collectGarbage:(local::LruGarbageCollector *)garbageCollector;

@end

NS_ASSUME_NONNULL_END

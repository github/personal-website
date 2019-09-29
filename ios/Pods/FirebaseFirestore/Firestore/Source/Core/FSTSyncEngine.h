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

#include <memory>
#include <vector>

#import "Firestore/Source/Core/FSTTypes.h"

#include "Firestore/core/src/firebase/firestore/auth/user.h"
#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/core/sync_engine_callback.h"
#include "Firestore/core/src/firebase/firestore/core/transaction.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/remote/remote_store.h"
#include "Firestore/core/src/firebase/firestore/util/async_queue.h"
#include "Firestore/core/src/firebase/firestore/util/statusor_callback.h"

@class FSTLocalStore;

namespace auth = firebase::firestore::auth;
namespace core = firebase::firestore::core;
namespace model = firebase::firestore::model;
namespace remote = firebase::firestore::remote;
namespace util = firebase::firestore::util;

NS_ASSUME_NONNULL_BEGIN

#pragma mark - SyncEngineCallback

/**
 * SyncEngine is the central controller in the client SDK architecture. It is the glue code
 * between the EventManager, LocalStore, and RemoteStore. Some of SyncEngine's responsibilities
 * include:
 * 1. Coordinating client requests and remote events between the EventManager and the local and
 *    remote data stores.
 * 2. Managing a View object for each query, providing the unified view between the local and
 *    remote data stores.
 * 3. Notifying the RemoteStore when the LocalStore has new mutations in its queue that need
 *    sending to the backend.
 *
 * The SyncEngine’s methods should only ever be called by methods running on our own worker
 * queue.
 */
@interface FSTSyncEngine : NSObject <FSTRemoteSyncer>

- (instancetype)init NS_UNAVAILABLE;
- (instancetype)initWithLocalStore:(FSTLocalStore *)localStore
                       remoteStore:(remote::RemoteStore *)remoteStore
                       initialUser:(const auth::User &)user NS_DESIGNATED_INITIALIZER;

- (void)setCallback:(core::SyncEngineCallback *)callback;

/**
 * Initiates a new listen. The FSTLocalStore will be queried for initial data and the listen will
 * be sent to the `RemoteStore` to get remote data. The registered FSTSyncEngineDelegate will be
 * notified of resulting view snapshots and/or listen errors.
 *
 * @return the target ID assigned to the query.
 */
- (model::TargetId)listenToQuery:(core::Query)query;

/** Stops listening to a query previously listened to via listenToQuery:. */
- (void)stopListeningToQuery:(const core::Query &)query;

/**
 * Initiates the write of local mutation batch which involves adding the writes to the mutation
 * queue, notifying the remote store about new mutations, and raising events for any changes this
 * write caused. The provided completion block will be called once the write has been acked or
 * rejected by the backend (or failed locally for any other reason).
 */
- (void)writeMutations:(std::vector<model::Mutation> &&)mutations
            completion:(FSTVoidErrorBlock)completion;

/**
 * Registers a user callback that is called when all pending mutations at the moment of calling
 * are acknowledged .
 */
- (void)registerPendingWritesCallback:(util::StatusCallback)callback;

/**
 * Runs the given transaction block up to retries times and then calls completion.
 *
 * @param retries The number of times to try before giving up.
 * @param workerQueue The queue to dispatch sync engine calls to.
 * @param updateCallback The callback to call to execute the user's transaction.
 * @param resultCallback The callback to call when the transaction is finished or failed.
 */
- (void)transactionWithRetries:(int)retries
                   workerQueue:(const std::shared_ptr<util::AsyncQueue> &)workerQueue
                updateCallback:(core::TransactionUpdateCallback)updateCallback
                resultCallback:(core::TransactionResultCallback)resultCallback;

- (void)credentialDidChangeWithUser:(const auth::User &)user;

/** Applies an OnlineState change to the sync engine and notifies any views of the change. */
- (void)applyChangedOnlineState:(model::OnlineState)onlineState;

@end

NS_ASSUME_NONNULL_END

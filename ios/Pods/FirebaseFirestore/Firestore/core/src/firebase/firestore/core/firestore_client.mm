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

#include "Firestore/core/src/firebase/firestore/core/firestore_client.h"

#include <future>  // NOLINT(build/c++11)
#include <memory>
#include <utility>

#import "FIRFirestoreErrors.h"
#import "Firestore/Source/API/FIRDocumentReference+Internal.h"
#import "Firestore/Source/API/FIRDocumentSnapshot+Internal.h"
#import "Firestore/Source/API/FIRFirestore+Internal.h"
#import "Firestore/Source/API/FIRQuery+Internal.h"
#import "Firestore/Source/API/FIRQuerySnapshot+Internal.h"
#import "Firestore/Source/API/FIRSnapshotMetadata+Internal.h"
#import "Firestore/Source/Core/FSTSyncEngine.h"
#import "Firestore/Source/Local/FSTLRUGarbageCollector.h"
#import "Firestore/Source/Local/FSTLevelDB.h"
#import "Firestore/Source/Local/FSTLocalSerializer.h"
#import "Firestore/Source/Local/FSTLocalStore.h"
#import "Firestore/Source/Local/FSTMemoryPersistence.h"
#import "Firestore/Source/Local/FSTPersistence.h"
#import "Firestore/Source/Remote/FSTSerializerBeta.h"
#import "Firestore/Source/Util/FSTClasses.h"

#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/auth/credentials_provider.h"
#include "Firestore/core/src/firebase/firestore/core/database_info.h"
#include "Firestore/core/src/firebase/firestore/core/event_manager.h"
#include "Firestore/core/src/firebase/firestore/core/view.h"
#include "Firestore/core/src/firebase/firestore/model/database_id.h"
#include "Firestore/core/src/firebase/firestore/model/document_set.h"
#include "Firestore/core/src/firebase/firestore/model/mutation.h"
#include "Firestore/core/src/firebase/firestore/remote/datastore.h"
#include "Firestore/core/src/firebase/firestore/remote/remote_store.h"
#include "Firestore/core/src/firebase/firestore/util/async_queue.h"
#include "Firestore/core/src/firebase/firestore/util/delayed_constructor.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace core {

using firestore::Error;
using api::DocumentReference;
using api::DocumentSnapshot;
using api::QuerySnapshot;
using api::Settings;
using api::SnapshotMetadata;
using api::ThrowIllegalState;
using auth::CredentialsProvider;
using auth::User;
using local::LruParams;
using model::DatabaseId;
using model::Document;
using model::DocumentKeySet;
using model::DocumentMap;
using model::MaybeDocument;
using model::Mutation;
using model::OnlineState;
using remote::Datastore;
using remote::RemoteStore;
using util::Path;
using util::AsyncQueue;
using util::DelayedConstructor;
using util::DelayedOperation;
using util::Executor;
using util::Status;
using util::StatusCallback;
using util::StatusOr;
using util::StatusOrCallback;
using util::TimerId;

std::shared_ptr<FirestoreClient> FirestoreClient::Create(
    const DatabaseInfo& database_info,
    const api::Settings& settings,
    std::shared_ptr<auth::CredentialsProvider> credentials_provider,
    std::shared_ptr<util::Executor> user_executor,
    std::shared_ptr<util::AsyncQueue> worker_queue) {
  // Have to use `new` because `make_shared` cannot access private constructor.
  std::shared_ptr<FirestoreClient> shared_client(
      new FirestoreClient(database_info, std::move(credentials_provider),
                          std::move(user_executor), std::move(worker_queue)));

  auto user_promise = std::make_shared<std::promise<User>>();
  bool credentials_initialized = false;

  std::weak_ptr<FirestoreClient> weak_client(shared_client);
  auto credential_change_listener = [credentials_initialized, user_promise,
                                     weak_client](User user) mutable {
    auto shared_client = weak_client.lock();
    if (!shared_client) return;

    if (!credentials_initialized) {
      credentials_initialized = true;
      user_promise->set_value(user);
    } else {
      shared_client->worker_queue()->Enqueue([shared_client, user] {
        shared_client->worker_queue()->VerifyIsCurrentQueue();

        LOG_DEBUG("Credential Changed. Current user: %s", user.uid());
        [shared_client->sync_engine_ credentialDidChangeWithUser:user];
      });
    }
  };

  shared_client->credentials_provider_->SetCredentialChangeListener(
      credential_change_listener);

  // Defer initialization until we get the current user from the
  // credential_change_listener. This is guaranteed to be synchronously
  // dispatched onto our worker queue, so we will be initialized before any
  // subsequently queued work runs.
  shared_client->worker_queue()->Enqueue(
      [shared_client, user_promise, settings] {
        User user = user_promise->get_future().get();
        shared_client->Initialize(user, settings);
      });

  return shared_client;
}

FirestoreClient::FirestoreClient(
    const DatabaseInfo& database_info,
    std::shared_ptr<auth::CredentialsProvider> credentials_provider,
    std::shared_ptr<util::Executor> user_executor,
    std::shared_ptr<util::AsyncQueue> worker_queue)
    : database_info_(database_info),
      credentials_provider_(std::move(credentials_provider)),
      worker_queue_(std::move(worker_queue)),
      user_executor_(std::move(user_executor)) {
}

void FirestoreClient::Initialize(const User& user, const Settings& settings) {
  // Do all of our initialization on our own dispatch queue.
  worker_queue()->VerifyIsCurrentQueue();
  LOG_DEBUG("Initializing. Current user: %s", user.uid());

  // Note: The initialization work must all be synchronous (we can't dispatch
  // more work) since external write/listen operations could get queued to run
  // before that subsequent work completes.
  if (settings.persistence_enabled()) {
    Path dir = [FSTLevelDB
        storageDirectoryForDatabaseInfo:database_info_
                     documentsDirectory:[FSTLevelDB documentsDirectory]];

    FSTSerializerBeta* remote_serializer = [[FSTSerializerBeta alloc]
        initWithDatabaseID:database_info_.database_id()];
    FSTLocalSerializer* serializer =
        [[FSTLocalSerializer alloc] initWithRemoteSerializer:remote_serializer];
    FSTLevelDB* ldb;
    Status level_db_status = [FSTLevelDB
        dbWithDirectory:std::move(dir)
             serializer:serializer
              lruParams:LruParams::WithCacheSize(settings.cache_size_bytes())
                    ptr:&ldb];
    if (!level_db_status.ok()) {
      // If leveldb fails to start then just throw up our hands: the error is
      // unrecoverable. There's nothing an end-user can do and nearly all
      // failures indicate the developer is doing something grossly wrong so we
      // should stop them cold in their tracks with a failure they can't ignore.
      [NSException
           raise:NSInternalInconsistencyException
          format:@"Failed to open DB: %s", level_db_status.ToString().c_str()];
    }
    lru_delegate_ = ldb.referenceDelegate;
    persistence_ = ldb;
    if (settings.gc_enabled()) {
      ScheduleLruGarbageCollection();
    }
  } else {
    persistence_ = [FSTMemoryPersistence persistenceWithEagerGC];
  }

  local_store_ = [[FSTLocalStore alloc] initWithPersistence:persistence_
                                                initialUser:user];

  auto datastore = std::make_shared<Datastore>(database_info_, worker_queue(),
                                               credentials_provider_);

  std::weak_ptr<FirestoreClient> weak_this(shared_from_this());
  remote_store_ = absl::make_unique<RemoteStore>(
      local_store_, std::move(datastore), worker_queue(),
      [weak_this](OnlineState online_state) {
        [weak_this.lock()->sync_engine_ applyChangedOnlineState:online_state];
      });

  sync_engine_ = [[FSTSyncEngine alloc] initWithLocalStore:local_store_
                                               remoteStore:remote_store_.get()
                                               initialUser:user];

  event_manager_.Init(sync_engine_);

  // Setup wiring for remote store.
  remote_store_->set_sync_engine(sync_engine_);

  // NOTE: RemoteStore depends on LocalStore (for persisting stream tokens,
  // refilling mutation queue, etc.) so must be started after LocalStore.
  [local_store_ start];
  remote_store_->Start();
}

/**
 * Schedules a callback to try running LRU garbage collection. Reschedules
 * itself after the GC has run.
 */
void FirestoreClient::ScheduleLruGarbageCollection() {
  std::chrono::milliseconds delay =
      gc_has_run_ ? regular_gc_delay_ : initial_gc_delay_;
  auto shared_this = shared_from_this();
  lru_callback_ = worker_queue()->EnqueueAfterDelay(
      delay, TimerId::GarbageCollectionDelay, [shared_this] {
        [shared_this->local_store_
            collectGarbage:shared_this->lru_delegate_.gc];
        shared_this->gc_has_run_ = true;
        shared_this->ScheduleLruGarbageCollection();
      });
}

void FirestoreClient::DisableNetwork(StatusCallback callback) {
  VerifyNotTerminated();
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, callback] {
    shared_this->remote_store_->DisableNetwork();
    if (callback) {
      shared_this->user_executor()->Execute([=] { callback(Status::OK()); });
    }
  });
}

void FirestoreClient::EnableNetwork(StatusCallback callback) {
  VerifyNotTerminated();
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, callback] {
    shared_this->remote_store_->EnableNetwork();
    if (callback) {
      shared_this->user_executor()->Execute([=] { callback(Status::OK()); });
    }
  });
}

void FirestoreClient::Terminate(StatusCallback callback) {
  auto shared_this = shared_from_this();
  worker_queue()->EnqueueAndInitiateShutdown([shared_this, callback] {
    shared_this->credentials_provider_->SetCredentialChangeListener(nullptr);

    // If we've scheduled LRU garbage collection, cancel it.
    if (shared_this->lru_callback_) {
      shared_this->lru_callback_.Cancel();
    }
    shared_this->remote_store_->Shutdown();
    [shared_this->persistence_ shutdown];
  });

  // This separate enqueue ensures if `terminate` is called multiple times
  // every time the callback is triggered. If it is in the above
  // enqueue, it might not get executed because after first `terminate`
  // all operations are not executed.
  worker_queue()->EnqueueEvenAfterShutdown([shared_this, callback] {
    if (callback) {
      shared_this->user_executor()->Execute([=] { callback(Status::OK()); });
    }
  });
}

void FirestoreClient::WaitForPendingWrites(StatusCallback callback) {
  VerifyNotTerminated();

  // Dispatch the result back onto the user dispatch queue.
  auto shared_this = shared_from_this();
  auto async_callback = [shared_this, callback](util::Status status) {
    if (callback) {
      shared_this->user_executor()->Execute(
          [=] { callback(std::move(status)); });
    }
  };

  worker_queue()->Enqueue([shared_this, async_callback] {
    [shared_this->sync_engine_
        registerPendingWritesCallback:std::move(async_callback)];
  });
}

void FirestoreClient::VerifyNotTerminated() {
  if (is_terminated()) {
    ThrowIllegalState("The client has already been terminated.");
  }
}

bool FirestoreClient::is_terminated() const {
  // Technically, the worker queue is still running, but only accepting tasks
  // related to termination or supposed to be run after termination. It is
  // effectively terminated to the eyes of users.
  return worker_queue()->is_shutting_down();
}

std::shared_ptr<QueryListener> FirestoreClient::ListenToQuery(
    Query query,
    ListenOptions options,
    ViewSnapshot::SharedListener&& listener) {
  VerifyNotTerminated();

  auto query_listener = QueryListener::Create(
      std::move(query), std::move(options), std::move(listener));

  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, query_listener] {
    shared_this->event_manager_->AddQueryListener(std::move(query_listener));
  });

  return query_listener;
}

void FirestoreClient::RemoveListener(
    const std::shared_ptr<QueryListener>& listener) {
  // Checks for termination but does not throw error, allowing it to be an no-op
  // if client is already terminated.
  if (is_terminated()) {
    return;
  }
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, listener] {
    shared_this->event_manager_->RemoveQueryListener(listener);
  });
}

void FirestoreClient::GetDocumentFromLocalCache(
    const DocumentReference& doc, DocumentSnapshot::Listener&& callback) {
  VerifyNotTerminated();

  // TODO(c++14): move `callback` into lambda.
  auto shared_callback = absl::ShareUniquePtr(std::move(callback));
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, doc, shared_callback] {
    absl::optional<MaybeDocument> maybe_document =
        [shared_this->local_store_ readDocument:doc.key()];
    StatusOr<DocumentSnapshot> maybe_snapshot;

    if (maybe_document && maybe_document->is_document()) {
      Document document(*maybe_document);
      maybe_snapshot = DocumentSnapshot{
          doc.firestore(), doc.key(), document,
          /*from_cache=*/true,
          /*has_pending_writes=*/document.has_local_mutations()};
    } else if (maybe_document && maybe_document->is_no_document()) {
      maybe_snapshot =
          DocumentSnapshot{doc.firestore(), doc.key(), absl::nullopt,
                           /*from_cache=*/true,
                           /*has_pending_writes=*/false};
    } else {
      maybe_snapshot =
          Status{Error::Unavailable,
                 "Failed to get document from cache. (However, this document "
                 "may exist on the server. Run again without setting source to "
                 "FirestoreSourceCache to attempt to retrieve the document "};
    }

    if (shared_callback) {
      shared_this->user_executor()->Execute(
          [=] { shared_callback->OnEvent(std::move(maybe_snapshot)); });
    }
  });
}

void FirestoreClient::GetDocumentsFromLocalCache(
    const api::Query& query, QuerySnapshot::Listener&& callback) {
  VerifyNotTerminated();

  // TODO(c++14): move `callback` into lambda.
  auto shared_callback = absl::ShareUniquePtr(std::move(callback));
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, query, shared_callback] {
    DocumentMap docs = [shared_this->local_store_ executeQuery:query.query()];

    View view(query.query(), DocumentKeySet{});
    ViewDocumentChanges view_doc_changes =
        view.ComputeDocumentChanges(docs.underlying_map());
    ViewChange view_change = view.ApplyChanges(view_doc_changes);
    HARD_ASSERT(
        view_change.limbo_changes().empty(),
        "View returned limbo documents during local-only query execution.");

    HARD_ASSERT(view_change.snapshot().has_value(), "Expected a snapshot");

    ViewSnapshot snapshot = std::move(view_change.snapshot()).value();
    SnapshotMetadata metadata(snapshot.has_pending_writes(),
                              snapshot.from_cache());

    QuerySnapshot result(query.firestore(), query.query(), std::move(snapshot),
                         std::move(metadata));

    if (shared_callback) {
      shared_this->user_executor()->Execute(
          [=] { shared_callback->OnEvent(std::move(result)); });
    }
  });
}

void FirestoreClient::WriteMutations(std::vector<Mutation>&& mutations,
                                     StatusCallback callback) {
  VerifyNotTerminated();

  // TODO(c++14): move `mutations` into lambda (C++14).
  auto shared_this = shared_from_this();
  worker_queue()->Enqueue([shared_this, mutations, callback]() mutable {
    if (mutations.empty()) {
      if (callback) {
        shared_this->user_executor()->Execute([=] { callback(Status::OK()); });
      }
    } else {
      [shared_this->sync_engine_
          writeMutations:std::move(mutations)
              completion:^(NSError* error) {
                // Dispatch the result back onto the user dispatch queue.
                if (callback) {
                  shared_this->user_executor()->Execute(
                      [=] { callback(Status::FromNSError(error)); });
                }
              }];
    }
  });
}

void FirestoreClient::Transaction(int retries,
                                  TransactionUpdateCallback update_callback,
                                  TransactionResultCallback result_callback) {
  VerifyNotTerminated();

  // Dispatch the result back onto the user dispatch queue.
  auto shared_this = shared_from_this();
  auto async_callback = [shared_this,
                         result_callback](StatusOr<absl::any> maybe_value) {
    if (result_callback) {
      shared_this->user_executor()->Execute(
          [=] { result_callback(std::move(maybe_value)); });
    }
  };

  worker_queue()->Enqueue(
      [shared_this, retries, update_callback, async_callback] {
        [shared_this->sync_engine_
            transactionWithRetries:retries
                       workerQueue:shared_this->worker_queue()
                    updateCallback:std::move(update_callback)
                    resultCallback:std::move(async_callback)];
      });
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase

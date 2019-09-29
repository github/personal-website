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

#include "Firestore/core/src/firebase/firestore/api/firestore.h"

#import "Firestore/Source/API/FIRCollectionReference+Internal.h"
#import "Firestore/Source/API/FIRDocumentReference+Internal.h"
#import "Firestore/Source/API/FIRFirestore+Internal.h"
#import "Firestore/Source/API/FIRQuery+Internal.h"
#import "Firestore/Source/API/FIRTransaction+Internal.h"
#import "Firestore/Source/Local/FSTLevelDB.h"

#include "Firestore/core/src/firebase/firestore/api/collection_reference.h"
#include "Firestore/core/src/firebase/firestore/api/document_reference.h"
#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/api/write_batch.h"
#include "Firestore/core/src/firebase/firestore/auth/firebase_credentials_provider_apple.h"
#include "Firestore/core/src/firebase/firestore/core/firestore_client.h"
#include "Firestore/core/src/firebase/firestore/core/transaction.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/resource_path.h"
#include "Firestore/core/src/firebase/firestore/util/async_queue.h"
#include "Firestore/core/src/firebase/firestore/util/executor_libdispatch.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace api {

using auth::CredentialsProvider;
using core::DatabaseInfo;
using core::FirestoreClient;
using core::Transaction;
using model::DocumentKey;
using model::ResourcePath;
using util::AsyncQueue;
using util::Executor;
using util::ExecutorLibdispatch;
using util::Status;

Firestore::Firestore(model::DatabaseId database_id,
                     std::string persistence_key,
                     std::shared_ptr<CredentialsProvider> credentials_provider,
                     std::shared_ptr<AsyncQueue> worker_queue,
                     void* extension)
    : database_id_{std::move(database_id)},
      credentials_provider_{std::move(credentials_provider)},
      persistence_key_{std::move(persistence_key)},
      worker_queue_{std::move(worker_queue)},
      extension_{extension} {
}

const std::shared_ptr<FirestoreClient>& Firestore::client() {
  HARD_ASSERT(client_, "Client is not yet configured.");
  return client_;
}

const std::shared_ptr<AsyncQueue>& Firestore::worker_queue() {
  return worker_queue_;
}

const Settings& Firestore::settings() const {
  std::lock_guard<std::mutex> lock{mutex_};
  return settings_;
}

void Firestore::set_settings(const Settings& settings) {
  std::lock_guard<std::mutex> lock{mutex_};
  if (client_) {
    HARD_FAIL(
        "Firestore instance has already been started and its settings can "
        "no longer be changed. You can only set settings before calling any "
        "other methods on a Firestore instance.");
  }
  settings_ = settings;
}

void Firestore::set_user_executor(
    std::unique_ptr<util::Executor> user_executor) {
  std::lock_guard<std::mutex> lock{mutex_};
  HARD_ASSERT(!client_ && user_executor,
              "set_user_executor() must be called with a valid executor, "
              "before the client is initialized.");
  user_executor_ = std::move(user_executor);
}

CollectionReference Firestore::GetCollection(
    absl::string_view collection_path) {
  EnsureClientConfigured();
  ResourcePath path = ResourcePath::FromString(collection_path);
  return CollectionReference{std::move(path), shared_from_this()};
}

DocumentReference Firestore::GetDocument(absl::string_view document_path) {
  EnsureClientConfigured();
  return DocumentReference{ResourcePath::FromString(document_path),
                           shared_from_this()};
}

WriteBatch Firestore::GetBatch() {
  EnsureClientConfigured();
  return WriteBatch(shared_from_this());
}

FIRQuery* Firestore::GetCollectionGroup(std::string collection_id) {
  EnsureClientConfigured();

  core::Query query(ResourcePath::Empty(), std::make_shared<const std::string>(
                                               std::move(collection_id)));
  return [[FIRQuery alloc] initWithQuery:std::move(query)
                               firestore:shared_from_this()];
}

void Firestore::RunTransaction(
    core::TransactionUpdateCallback update_callback,
    core::TransactionResultCallback result_callback) {
  EnsureClientConfigured();

  client_->Transaction(5, std::move(update_callback),
                       std::move(result_callback));
}

void Firestore::Terminate(util::StatusCallback callback) {
  // The client must be initialized to ensure that all subsequent API usage
  // throws an exception.
  EnsureClientConfigured();
  client_->Terminate(std::move(callback));
}

void Firestore::WaitForPendingWrites(util::StatusCallback callback) {
  EnsureClientConfigured();
  client_->WaitForPendingWrites(std::move(callback));
}

void Firestore::ClearPersistence(util::StatusCallback callback) {
  worker_queue()->EnqueueEvenAfterShutdown([this, callback] {
    auto Yield = [=](Status status) {
      if (callback) {
        this->user_executor_->Execute([=] { callback(status); });
      }
    };

    {
      std::lock_guard<std::mutex> lock{mutex_};
      if (client_ && !client()->is_terminated()) {
        Yield(util::Status(
            Error::FailedPrecondition,
            "Persistence cannot be cleared while the client is running."));
        return;
      }
    }

    Yield([FSTLevelDB clearPersistence:MakeDatabaseInfo()]);
  });
}

void Firestore::EnableNetwork(util::StatusCallback callback) {
  EnsureClientConfigured();
  client_->EnableNetwork(std::move(callback));
}

void Firestore::DisableNetwork(util::StatusCallback callback) {
  EnsureClientConfigured();
  client_->DisableNetwork(std::move(callback));
}

void Firestore::EnsureClientConfigured() {
  std::lock_guard<std::mutex> lock{mutex_};

  if (!client_) {
    HARD_ASSERT(worker_queue_, "Expected non-null worker queue");
    client_ = FirestoreClient::Create(MakeDatabaseInfo(), settings_,
                                      std::move(credentials_provider_),
                                      user_executor_, worker_queue_);
  }
}

DatabaseInfo Firestore::MakeDatabaseInfo() const {
  return DatabaseInfo(database_id_, persistence_key_, settings_.host(),
                      settings_.ssl_enabled());
}

}  // namespace api
}  // namespace firestore
}  // namespace firebase

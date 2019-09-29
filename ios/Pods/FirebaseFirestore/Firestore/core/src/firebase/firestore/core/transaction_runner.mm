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

#include <utility>

#include "Firestore/core/src/firebase/firestore/core/transaction_runner.h"
#include "Firestore/core/src/firebase/firestore/remote/exponential_backoff.h"
#include "absl/algorithm/container.h"

namespace firebase {
namespace firestore {
namespace core {
namespace {

using remote::RemoteStore;
using util::AsyncQueue;
using util::TimerId;
using util::Status;

/** Maximum number of times a transaction can be retried before failing. */
constexpr int kRetryCount = 5;

bool IsRetryableTransactionError(const util::Status& error) {
  // In transactions, the backend will fail outdated reads with
  // FAILED_PRECONDITION and non-matching document versions with ABORTED. These
  // errors should be retried.
  Error code = error.code();
  return code == Error::Aborted || code == Error::FailedPrecondition ||
         !remote::Datastore::IsPermanentError(error);
}
}  // namespace

TransactionRunner::TransactionRunner(const std::shared_ptr<AsyncQueue>& queue,
                                     RemoteStore* remote_store,
                                     TransactionUpdateCallback update_callback,
                                     TransactionResultCallback result_callback)
    : queue_{queue},
      remote_store_{remote_store},
      update_callback_{update_callback},
      result_callback_{result_callback},
      backoff_{queue_, TimerId::RetryTransaction},
      retries_left_{kRetryCount} {
}

void TransactionRunner::Run() {
  queue_->VerifyIsCurrentQueue();

  auto shared_this = this->shared_from_this();
  backoff_.BackoffAndRun([shared_this] {
    std::shared_ptr<Transaction> transaction =
        shared_this->remote_store_->CreateTransaction();
    shared_this->update_callback_(
        transaction,
        [transaction, shared_this](util::StatusOr<absl::any> maybe_result) {
          shared_this->queue_->Enqueue(
              [transaction, shared_this, maybe_result] {
                shared_this->ContinueCommit(transaction, maybe_result);
              });
        });
  });
}

void TransactionRunner::ContinueCommit(
    const std::shared_ptr<Transaction> transaction,
    const util::StatusOr<absl::any> maybe_result) {
  if (!maybe_result.ok()) {
    HandleTransactionError(transaction, maybe_result.status());
  } else {
    auto shared_this = this->shared_from_this();
    transaction->Commit(
        [shared_this, transaction, maybe_result](Status status) {
          shared_this->DispatchResult(transaction, status, maybe_result);
        });
  }
}

void TransactionRunner::DispatchResult(
    const std::shared_ptr<Transaction> transaction,
    Status status,
    const util::StatusOr<absl::any> maybe_result) {
  if (status.ok()) {
    result_callback_(std::move(maybe_result));
  } else {
    HandleTransactionError(transaction, status);
  }
}

void TransactionRunner::HandleTransactionError(
    const std::shared_ptr<Transaction> transaction, Status status) {
  if (retries_left_ > 0 && IsRetryableTransactionError(status) &&
      !transaction->IsPermanentlyFailed()) {
    retries_left_ -= 1;
    Run();
  } else {
    result_callback_(std::move(status));
  }
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase

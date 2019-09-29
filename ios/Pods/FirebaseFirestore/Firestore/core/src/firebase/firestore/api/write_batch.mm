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

#include "Firestore/core/src/firebase/firestore/api/write_batch.h"

#include <algorithm>

#include "Firestore/core/src/firebase/firestore/api/document_reference.h"
#include "Firestore/core/src/firebase/firestore/api/firestore.h"
#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/core/firestore_client.h"
#include "Firestore/core/src/firebase/firestore/core/user_data.h"
#include "Firestore/core/src/firebase/firestore/model/delete_mutation.h"

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace api {

using model::DeleteMutation;
using model::Mutation;
using model::Precondition;

void WriteBatch::SetData(const DocumentReference& reference,
                         core::ParsedSetData&& setData) {
  VerifyNotCommitted();
  ValidateReference(reference);

  std::vector<Mutation> append_mutations = std::move(setData).ToMutations(
      reference.key(), model::Precondition::None());
  std::move(append_mutations.begin(), append_mutations.end(),
            std::back_inserter(mutations_));
}

void WriteBatch::UpdateData(const DocumentReference& reference,
                            core::ParsedUpdateData&& updateData) {
  VerifyNotCommitted();
  ValidateReference(reference);

  std::vector<Mutation> append_mutations =
      std::move(updateData)
          .ToMutations(reference.key(), model::Precondition::Exists(true));
  std::move(append_mutations.begin(), append_mutations.end(),
            std::back_inserter(mutations_));
}

void WriteBatch::DeleteData(const DocumentReference& reference) {
  VerifyNotCommitted();
  ValidateReference(reference);

  mutations_.push_back(DeleteMutation(reference.key(), Precondition::None()));
}

void WriteBatch::Commit(util::StatusCallback callback) {
  VerifyNotCommitted();

  committed_ = true;
  firestore_->client()->WriteMutations(std::move(mutations_),
                                       std::move(callback));
}

void WriteBatch::VerifyNotCommitted() const {
  if (committed_) {
    ThrowIllegalState(
        "A write batch can no longer be used after commit has been called.");
  }
}

void WriteBatch::ValidateReference(const DocumentReference& reference) const {
  if (reference.firestore() != firestore_) {
    ThrowInvalidArgument("Provided document reference is from a different "
                         "Firestore instance.");
  }
}

}  // namespace api
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

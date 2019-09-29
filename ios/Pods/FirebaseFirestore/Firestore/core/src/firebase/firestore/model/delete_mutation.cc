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

#include "Firestore/core/src/firebase/firestore/model/delete_mutation.h"

#include <cstdlib>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

namespace firebase {
namespace firestore {
namespace model {

static_assert(
    sizeof(Mutation) == sizeof(DeleteMutation),
    "DeleteMutation may not have additional members (everything goes in Rep)");

DeleteMutation::DeleteMutation(DocumentKey key, Precondition precondition)
    : Mutation(std::make_shared<Rep>(std::move(key), std::move(precondition))) {
}

DeleteMutation::DeleteMutation(const Mutation& mutation) : Mutation(mutation) {
  HARD_ASSERT(type() == Type::Delete);
}

MaybeDocument DeleteMutation::Rep::ApplyToRemoteDocument(
    const absl::optional<MaybeDocument>& maybe_doc,
    const MutationResult& mutation_result) const {
  VerifyKeyMatches(maybe_doc);

  HARD_ASSERT(mutation_result.transform_results() == absl::nullopt,
              "Transform results received by DeleteMutation.");

  // Unlike ApplyToLocalView, if we're applying a mutation to a remote document
  // the server has accepted the mutation so the precondition must have held.

  // We store the deleted document at the commit version of the delete. Any
  // document version that the server sends us before the delete was applied is
  // discarded.
  return NoDocument(key(), mutation_result.version(),
                    /* has_committed_mutations= */ true);
}

absl::optional<MaybeDocument> DeleteMutation::Rep::ApplyToLocalView(
    const absl::optional<MaybeDocument>& maybe_doc,
    const absl::optional<MaybeDocument>&,
    const Timestamp&) const {
  VerifyKeyMatches(maybe_doc);

  if (!precondition().IsValidFor(maybe_doc)) {
    return maybe_doc;
  }

  return NoDocument(key(), SnapshotVersion::None(),
                    /* has_committed_mutations= */ false);
}

std::string DeleteMutation::Rep::ToString() const {
  return absl::StrCat("DeleteMutation(key=", key().ToString(),
                      ", precondition=", precondition().ToString(), ")");
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

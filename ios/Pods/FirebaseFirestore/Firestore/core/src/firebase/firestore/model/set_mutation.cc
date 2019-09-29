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

#include "Firestore/core/src/firebase/firestore/model/set_mutation.h"

#include <cstdlib>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/hashing.h"
#include "absl/strings/str_cat.h"

namespace firebase {
namespace firestore {
namespace model {

static_assert(
    sizeof(Mutation) == sizeof(SetMutation),
    "SetMutation may not have additional members (everything goes in Rep)");

SetMutation::SetMutation(DocumentKey key,
                         ObjectValue value,
                         Precondition precondition)
    : Mutation(std::make_shared<Rep>(
          std::move(key), std::move(value), std::move(precondition))) {
}

SetMutation::SetMutation(const Mutation& mutation) : Mutation(mutation) {
  HARD_ASSERT(type() == Type::Set);
}

SetMutation::Rep::Rep(DocumentKey&& key,
                      ObjectValue&& value,
                      Precondition&& precondition)
    : Mutation::Rep(std::move(key), std::move(precondition)),
      value_(std::move(value)) {
}

MaybeDocument SetMutation::Rep::ApplyToRemoteDocument(
    const absl::optional<MaybeDocument>& maybe_doc,
    const MutationResult& mutation_result) const {
  VerifyKeyMatches(maybe_doc);

  HARD_ASSERT(mutation_result.transform_results() == absl::nullopt,
              "Transform results received by SetMutation.");

  // Unlike applyToLocalView, if we're applying a mutation to a remote document
  // the server has accepted the mutation so the precondition must have held.

  const SnapshotVersion& version = mutation_result.version();
  return Document(value_, key(), version, DocumentState::kCommittedMutations);
}

absl::optional<MaybeDocument> SetMutation::Rep::ApplyToLocalView(
    const absl::optional<MaybeDocument>& maybe_doc,
    const absl::optional<MaybeDocument>&,
    const Timestamp&) const {
  VerifyKeyMatches(maybe_doc);

  if (!precondition().IsValidFor(maybe_doc)) {
    return maybe_doc;
  }

  SnapshotVersion version = GetPostMutationVersion(maybe_doc);
  return Document(value_, key(), version, DocumentState::kLocalMutations);
}

bool SetMutation::Rep::Equals(const Mutation::Rep& other) const {
  if (!Mutation::Rep::Equals(other)) return false;

  const auto& other_rep = static_cast<const SetMutation::Rep&>(other);
  return value_ == other_rep.value_;
}

size_t SetMutation::Rep::Hash() const {
  return util::Hash(Mutation::Rep::Hash(), value_);
}

std::string SetMutation::Rep::ToString() const {
  return absl::StrCat("SetMutation(key=", key().ToString(),
                      ", precondition=", precondition().ToString(),
                      ", value=", value().ToString(), ")");
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

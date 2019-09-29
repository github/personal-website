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

#include "Firestore/core/src/firebase/firestore/model/patch_mutation.h"

#include <cstdlib>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/unknown_document.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

namespace firebase {
namespace firestore {
namespace model {

static_assert(
    sizeof(Mutation) == sizeof(PatchMutation),
    "PatchMutation may not have additional members (everything goes in Rep)");

PatchMutation::PatchMutation(DocumentKey key,
                             ObjectValue value,
                             FieldMask mask,
                             Precondition precondition)
    : Mutation(std::make_shared<Rep>(std::move(key),
                                     std::move(value),
                                     std::move(mask),
                                     std::move(precondition))) {
}

PatchMutation::PatchMutation(const Mutation& mutation) : Mutation(mutation) {
  HARD_ASSERT(type() == Type::Patch);
}

PatchMutation::Rep::Rep(DocumentKey&& key,
                        ObjectValue&& value,
                        FieldMask&& mask,
                        Precondition&& precondition)
    : Mutation::Rep(std::move(key), std::move(precondition)),
      value_(std::move(value)),
      mask_(std::move(mask)) {
}

MaybeDocument PatchMutation::Rep::ApplyToRemoteDocument(
    const absl::optional<MaybeDocument>& maybe_doc,
    const MutationResult& mutation_result) const {
  VerifyKeyMatches(maybe_doc);
  HARD_ASSERT(mutation_result.transform_results() == absl::nullopt,
              "Transform results received by PatchMutation.");

  if (!precondition().IsValidFor(maybe_doc)) {
    // Since the mutation was not rejected, we know that the precondition
    // matched on the backend. We therefore must not have the expected version
    // of the document in our cache and return an UnknownDocument with the known
    // update_time.
    return UnknownDocument(key(), mutation_result.version());
  }

  ObjectValue new_data = PatchDocument(maybe_doc);
  const SnapshotVersion& version = mutation_result.version();
  return Document(std::move(new_data), key(), version,
                  DocumentState::kCommittedMutations);
}

absl::optional<MaybeDocument> PatchMutation::Rep::ApplyToLocalView(
    const absl::optional<MaybeDocument>& maybe_doc,
    const absl::optional<MaybeDocument>&,
    const Timestamp&) const {
  VerifyKeyMatches(maybe_doc);

  if (!precondition().IsValidFor(maybe_doc)) {
    return maybe_doc;
  }

  ObjectValue new_data = PatchDocument(maybe_doc);
  SnapshotVersion version = GetPostMutationVersion(maybe_doc);
  return Document(std::move(new_data), key(), version,
                  DocumentState::kLocalMutations);
}

ObjectValue PatchMutation::Rep::PatchDocument(
    const absl::optional<MaybeDocument>& maybe_doc) const {
  if (maybe_doc && maybe_doc->type() == MaybeDocument::Type::Document) {
    return PatchObject(Document(*maybe_doc).data());
  } else {
    return PatchObject(ObjectValue::Empty());
  }
}

ObjectValue PatchMutation::Rep::PatchObject(ObjectValue obj) const {
  for (const FieldPath& path : mask_) {
    if (!path.empty()) {
      absl::optional<FieldValue> new_value = value_.Get(path);
      if (!new_value) {
        obj = obj.Delete(path);
      } else {
        obj = obj.Set(path, *new_value);
      }
    }
  }
  return obj;
}

bool PatchMutation::Rep::Equals(const Mutation::Rep& other) const {
  if (!Mutation::Rep::Equals(other)) return false;

  const auto& other_rep = static_cast<const PatchMutation::Rep&>(other);
  return value_ == other_rep.value_ && mask_ == other_rep.mask_;
}

size_t PatchMutation::Rep::Hash() const {
  return util::Hash(Mutation::Rep::Hash(), mask_, value_);
}

std::string PatchMutation::Rep::ToString() const {
  return absl::StrCat("PatchMutation(key=", key().ToString(),
                      ", precondition=", precondition().ToString(),
                      ", value=", value().ToString(),
                      ", mask=", mask().ToString(), ")");
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

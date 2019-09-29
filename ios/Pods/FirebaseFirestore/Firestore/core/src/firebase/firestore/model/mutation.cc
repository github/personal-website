/*
 * Copyright 2018 Google
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

#include "Firestore/core/src/firebase/firestore/model/mutation.h"

#include <cstdlib>
#include <ostream>
#include <sstream>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/field_path.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/to_string.h"
#include "absl/strings/str_cat.h"

namespace firebase {
namespace firestore {
namespace model {

std::string MutationResult::ToString() const {
  return absl::StrCat(
      "MutationResult(version=", version_.ToString(),
      ", transform_results=", util::ToString(transform_results_), ")");
}

std::ostream& operator<<(std::ostream& os, const MutationResult& result) {
  return os << result.ToString();
}

Mutation::Rep::Rep(DocumentKey&& key, Precondition&& precondition)
    : key_(std::move(key)), precondition_(std::move(precondition)) {
}

bool Mutation::Rep::Equals(const Mutation::Rep& other) const {
  return type() == other.type() && key_ == other.key_ &&
         precondition_ == other.precondition_;
}

void Mutation::Rep::VerifyKeyMatches(
    const absl::optional<MaybeDocument>& maybe_doc) const {
  if (maybe_doc) {
    HARD_ASSERT(maybe_doc->key() == key(),
                "Can only apply a mutation to a document with the same key");
  }
}

SnapshotVersion Mutation::Rep::GetPostMutationVersion(
    const absl::optional<MaybeDocument>& maybe_doc) {
  if (maybe_doc && maybe_doc->type() == MaybeDocument::Type::Document) {
    return maybe_doc->version();
  } else {
    return SnapshotVersion::None();
  }
}

bool operator==(const Mutation& lhs, const Mutation& rhs) {
  return lhs.rep_ == nullptr
             ? rhs.rep_ == nullptr
             : (rhs.rep_ != nullptr && lhs.rep_->Equals(*rhs.rep_));
}

size_t Mutation::Rep::Hash() const {
  return util::Hash(type(), key(), precondition());
}

std::ostream& operator<<(std::ostream& os, const Mutation& mutation) {
  return os << mutation.ToString();
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

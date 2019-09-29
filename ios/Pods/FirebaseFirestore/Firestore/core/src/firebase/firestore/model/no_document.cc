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

#include "Firestore/core/src/firebase/firestore/model/no_document.h"

#include <string>
#include <utility>

#include "Firestore/core/src/firebase/firestore/util/hashing.h"
#include "absl/strings/str_cat.h"

namespace firebase {
namespace firestore {
namespace model {

static_assert(
    sizeof(MaybeDocument) == sizeof(NoDocument),
    "NoDocument may not have additional members (everything goes in Rep)");

class NoDocument::Rep : public MaybeDocument::Rep {
 public:
  Rep(DocumentKey key, SnapshotVersion version, bool has_committed_mutations)
      : MaybeDocument::Rep(Type::NoDocument, std::move(key), version),
        has_committed_mutations_(has_committed_mutations) {
  }

  bool has_pending_writes() const override {
    return has_committed_mutations_;
  }

  bool Equals(const MaybeDocument::Rep& other) const override {
    if (!MaybeDocument::Rep::Equals(other)) return false;

    const auto& other_rep = static_cast<const Rep&>(other);
    return has_committed_mutations_ == other_rep.has_committed_mutations_;
  }

  size_t Hash() const override {
    return util::Hash(MaybeDocument::Rep::Hash(), has_committed_mutations_);
  }

  std::string ToString() const override {
    return absl::StrCat(
        "NoDocument(key=", key().ToString(), ", version=", version().ToString(),
        ", has_committed_mutations=", has_committed_mutations_, ")");
  }

 private:
  friend class NoDocument;

  bool has_committed_mutations_ = false;
};

NoDocument::NoDocument(DocumentKey key,
                       SnapshotVersion version,
                       bool has_committed_mutations)
    : MaybeDocument(std::make_shared<Rep>(
          std::move(key), version, has_committed_mutations)) {
}

NoDocument::NoDocument(const MaybeDocument& document)
    : MaybeDocument(document) {
  HARD_ASSERT(type() == Type::NoDocument);
}

bool NoDocument::has_committed_mutations() const {
  return doc_rep().has_committed_mutations_;
}

const NoDocument::Rep& NoDocument::doc_rep() const {
  return static_cast<const Rep&>(MaybeDocument::rep());
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

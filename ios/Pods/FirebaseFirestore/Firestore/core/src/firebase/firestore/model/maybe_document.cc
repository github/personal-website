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

#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"

#include <ostream>
#include <utility>

namespace firebase {
namespace firestore {
namespace model {

bool MaybeDocument::Rep::Equals(const MaybeDocument::Rep& other) const {
  return type() == other.type() && version() == other.version() &&
         key() == other.key();
}

size_t MaybeDocument::Rep::Hash() const {
  return util::Hash(type_, key_, version_);
}

std::ostream& operator<<(std::ostream& os, const MaybeDocument& doc) {
  return os << doc.rep_->ToString();
}

bool operator==(const MaybeDocument& lhs, const MaybeDocument& rhs) {
  return lhs.rep_ == nullptr
             ? rhs.rep_ == nullptr
             : (rhs.rep_ != nullptr && lhs.rep_->Equals(*rhs.rep_));
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

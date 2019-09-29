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

#include "Firestore/core/src/firebase/firestore/model/document_key.h"

#include <ostream>
#include <utility>

#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

namespace firebase {
namespace firestore {
namespace model {

namespace {

void AssertValidPath(const ResourcePath& path) {
  HARD_ASSERT(DocumentKey::IsDocumentKey(path), "invalid document key path: %s",
              path.CanonicalString());
}

}  // namespace

DocumentKey::DocumentKey(const ResourcePath& path)
    : path_{std::make_shared<ResourcePath>(path)} {
  AssertValidPath(*path_);
}

DocumentKey::DocumentKey(ResourcePath&& path)
    : path_{std::make_shared<ResourcePath>(std::move(path))} {
  AssertValidPath(*path_);
}

const DocumentKey& DocumentKey::Empty() {
  static const DocumentKey empty;
  return empty;
}

util::ComparisonResult DocumentKey::CompareTo(const DocumentKey& other) const {
  return path().CompareTo(other.path());
}

std::string DocumentKey::ToString() const {
  return path().CanonicalString();
}

std::ostream& operator<<(std::ostream& os, const DocumentKey& key) {
  return os << key.ToString();
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

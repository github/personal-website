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

#include "Firestore/core/src/firebase/firestore/model/document_map.h"

namespace firebase {
namespace firestore {
namespace model {

ABSL_MUST_USE_RESULT DocumentMap
DocumentMap::insert(const DocumentKey& key, const Document& value) const {
  return DocumentMap{map_.insert(key, value)};
}

ABSL_MUST_USE_RESULT DocumentMap
DocumentMap::erase(const DocumentKey& key) const {
  return DocumentMap{map_.erase(key)};
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

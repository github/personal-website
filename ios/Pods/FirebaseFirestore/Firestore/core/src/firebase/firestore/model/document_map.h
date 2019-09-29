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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_MAP_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_MAP_H_

#include <utility>

#include "Firestore/core/src/firebase/firestore/immutable/sorted_map.h"
#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"
#include "absl/base/attributes.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace model {

/**
 * Convenience type for a map of keys to MaybeDocuments, since they are so
 * common.
 */
using MaybeDocumentMap = immutable::SortedMap<DocumentKey, MaybeDocument>;

using OptionalMaybeDocumentMap =
    immutable::SortedMap<DocumentKey, absl::optional<MaybeDocument>>;

/**
 * Convenience type for a map of keys to Documents, since they are so common.
 *
 * PORTING NOTE: unlike other platforms, in C++ `Foo<Derived*>` cannot be
 * converted to `Foo<Base*>`; consequently, if `DocumentMap` were simply an
 * alias similar to `MaybeDocumentMap`, it couldn't be passed to functions
 * expecting `MaybeDocumentMap`.
 *
 * To work around this, in C++ `DocumentMap` is a simple wrapper over a
 * `MaybeDocumentMap` that forwards all functions to the underlying map but with
 * added type safety (it only accepts `Document`, not `MaybeDocument`). Use
 * `DocumentMap` in functions creating and/or returning maps that only contain
 * `Document`; when the `DocumentMap` needs to be passed to a function accepting
 * a `MaybeDocumentMap`, use `underlying_map` function to get (read-only) access
 * to the representation. Also use `underlying_map` for iterating and searching.
 */
class DocumentMap {
 public:
  DocumentMap() = default;

  ABSL_MUST_USE_RESULT DocumentMap insert(const DocumentKey& key,
                                          const Document& value) const;

  ABSL_MUST_USE_RESULT DocumentMap erase(const DocumentKey& key) const;

  bool empty() const {
    return map_.empty();
  }
  MaybeDocumentMap::size_type size() const {
    return map_.size();
  }

  /** Use this function to "convert" `DocumentMap` to a `MaybeDocumentMap`. */
  const MaybeDocumentMap& underlying_map() const {
    return map_;
  }

 private:
  explicit DocumentMap(MaybeDocumentMap&& map) : map_{std::move(map)} {
  }

  MaybeDocumentMap map_;
};

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_DOCUMENT_MAP_H_

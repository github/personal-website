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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REMOTE_DOCUMENT_CACHE_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REMOTE_DOCUMENT_CACHE_H_

#if !defined(__OBJC__)
#error "For now, this file must only be included by ObjC source files."
#endif  // !defined(__OBJC__)

#import <Foundation/Foundation.h>

#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/document_key_set.h"
#include "Firestore/core/src/firebase/firestore/model/document_map.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace local {

/**
 * Represents cached documents received from the remote backend.
 *
 * The cache is keyed by DocumentKey and entries in the cache are MaybeDocument
 * instances, meaning we can cache both Document instances (an actual document
 * with data) as well as DeletedDocument instances (indicating that the document
 * is known to not exist).
 */
class RemoteDocumentCache {
 public:
  virtual ~RemoteDocumentCache() {
  }

  /**
   * Adds or replaces an entry in the cache.
   *
   * The cache key is extracted from `document.key`. If there is already a cache
   * entry for the key, it will be replaced.
   *
   * @param document A Document or DeletedDocument to put in the cache.
   */
  virtual void Add(const model::MaybeDocument& document) = 0;

  /** Removes the cached entry for the given key (no-op if no entry exists). */
  virtual void Remove(const model::DocumentKey& key) = 0;

  /**
   * Looks up an entry in the cache.
   *
   * @param key The key of the entry to look up.
   * @return The cached Document or DeletedDocument entry, or nullopt if we
   * have nothing cached.
   */
  virtual absl::optional<model::MaybeDocument> Get(
      const model::DocumentKey& key) = 0;

  /**
   * Looks up a set of entries in the cache.
   *
   * @param keys The keys of the entries to look up.
   * @return The cached Document or NoDocument entries indexed by key. If an
   * entry is not cached, the corresponding key will be mapped to a null value.
   */
  virtual model::OptionalMaybeDocumentMap GetAll(
      const model::DocumentKeySet& keys) = 0;

  /**
   * Executes a query against the cached Document entries
   *
   * Implementations may return extra documents if convenient. The results
   * should be re-filtered by the consumer before presenting them to the user.
   *
   * Cached DeletedDocument entries have no bearing on query results.
   *
   * @param query The query to match documents against.
   * @return The set of matching documents.
   */
  virtual model::DocumentMap GetMatching(const core::Query& query) = 0;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_REMOTE_DOCUMENT_CACHE_H_

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

#include "Firestore/core/src/firebase/firestore/local/memory_remote_document_cache.h"

#include <utility>

#import "Firestore/Source/Local/FSTMemoryPersistence.h"

#include "Firestore/core/src/firebase/firestore/local/sizer.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

namespace firebase {
namespace firestore {
namespace local {

using core::Query;
using model::Document;
using model::DocumentKey;
using model::DocumentKeySet;
using model::DocumentMap;
using model::ListenSequenceNumber;
using model::MaybeDocument;
using model::MaybeDocumentMap;
using model::OptionalMaybeDocumentMap;

MemoryRemoteDocumentCache::MemoryRemoteDocumentCache(
    FSTMemoryPersistence* persistence) {
  persistence_ = persistence;
}

void MemoryRemoteDocumentCache::Add(const MaybeDocument& document) {
  docs_ = docs_.insert(document.key(), document);

  persistence_.indexManager->AddToCollectionParentIndex(
      document.key().path().PopLast());
}

void MemoryRemoteDocumentCache::Remove(const DocumentKey& key) {
  docs_ = docs_.erase(key);
}

absl::optional<MaybeDocument> MemoryRemoteDocumentCache::Get(
    const DocumentKey& key) {
  return docs_.get(key);
}

OptionalMaybeDocumentMap MemoryRemoteDocumentCache::GetAll(
    const DocumentKeySet& keys) {
  OptionalMaybeDocumentMap results;
  for (const DocumentKey& key : keys) {
    // Make sure each key has a corresponding entry, which is nullopt in case
    // the document is not found.
    // TODO(http://b/32275378): Don't conflate missing / deleted.
    results = results.insert(key, Get(key));
  }
  return results;
}

DocumentMap MemoryRemoteDocumentCache::GetMatching(const Query& query) {
  HARD_ASSERT(
      !query.IsCollectionGroupQuery(),
      "CollectionGroup queries should be handled in LocalDocumentsView");

  DocumentMap results;

  // Documents are ordered by key, so we can use a prefix scan to narrow down
  // the documents we need to match the query against.
  DocumentKey prefix{query.path().Append("")};
  for (auto it = docs_.lower_bound(prefix); it != docs_.end(); ++it) {
    const DocumentKey& key = it->first;
    if (!query.path().IsPrefixOf(key.path())) {
      break;
    }
    const MaybeDocument& maybe_doc = it->second;
    if (!maybe_doc.is_document()) {
      continue;
    }

    Document doc(maybe_doc);
    if (query.Matches(doc)) {
      results = results.insert(key, std::move(doc));
    }
  }
  return results;
}

std::vector<DocumentKey> MemoryRemoteDocumentCache::RemoveOrphanedDocuments(
    FSTMemoryLRUReferenceDelegate* reference_delegate,
    ListenSequenceNumber upper_bound) {
  std::vector<DocumentKey> removed;
  MaybeDocumentMap updated_docs = docs_;
  for (const auto& kv : docs_) {
    const DocumentKey& key = kv.first;
    if (![reference_delegate isPinnedAtSequenceNumber:upper_bound
                                             document:key]) {
      updated_docs = updated_docs.erase(key);
      removed.push_back(key);
    }
  }
  docs_ = updated_docs;
  return removed;
}

size_t MemoryRemoteDocumentCache::CalculateByteSize(const Sizer& sizer) {
  size_t count = 0;
  for (const auto& kv : docs_) {
    count += sizer.CalculateByteSize(kv.second);
  }
  return count;
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase

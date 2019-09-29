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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_INDEX_MANAGER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_INDEX_MANAGER_H_

#if !defined(__OBJC__)
#error "For now, this file must only be included by ObjC source files."
#endif  // !defined(__OBJC__)

#include <string>
#include <vector>

#include "Firestore/core/src/firebase/firestore/local/index_manager.h"
#include "Firestore/core/src/firebase/firestore/local/memory_index_manager.h"
#include "Firestore/core/src/firebase/firestore/model/resource_path.h"

@class FSTLevelDB;

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace local {

/** A persisted implementation of IndexManager. */
class LevelDbIndexManager : public IndexManager {
 public:
  explicit LevelDbIndexManager(FSTLevelDB* db);

  void AddToCollectionParentIndex(
      const model::ResourcePath& collection_path) override;

  std::vector<model::ResourcePath> GetCollectionParents(
      const std::string& collection_id) override;

 private:
  // This instance is owned by FSTLevelDB; avoid a retain cycle.
  __weak FSTLevelDB* db_;

  /**
   * An in-memory copy of the index entries we've already written since the SDK
   * launched. Used to avoid re-writing the same entry repeatedly.
   *
   * This is *NOT* a complete cache of what's in persistence and so can never
   * be used to satisfy reads.
   */
  MemoryCollectionParentIndex collection_parents_cache_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LEVELDB_INDEX_MANAGER_H_

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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_H_

#include <memory>
#include <string>

#include "Firestore/core/src/firebase/firestore/util/path.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"

namespace firebase {
namespace firestore {
namespace util {

// High-level routines for the manipulating the filesystem. All filesystems
// are required to implement these routines.

/**
 * Answers the question "is this path a directory? The path is not required to
 * have a trailing slash.
 *
 * Typical return codes include:
 *   * Ok - The path exists and is a directory.
 *   * FailedPrecondition - Some component of the path is not a directory. This
 *     does not necessarily imply that the path exists and is a file.
 *   * NotFound - The path does not exist
 *   * PermissionDenied - Insufficient permissions to access the path.
 */
Status IsDirectory(const Path& path);

/**
 * Recursively creates all the directories in the path name if they don't
 * exist.
 *
 * @return Ok if the directory was created or already existed.
 */
Status RecursivelyCreateDir(const Path& path);

/**
 * Recursively deletes the contents of the given pathname. If the pathname is
 * a file, deletes just that file. The the pathname is a directory, deletes
 * everything within the directory.
 *
 * @return Ok if the directory was deleted or did not exist.
 */
Status RecursivelyDelete(const Path& path);

/**
 * Returns system-defined best directory in which to create temporary files.
 * Typical return values are like `/tmp` on UNIX systems. Clients should create
 * randomly named directories or files within this location to avoid collisions.
 * Absent any changes that might affect the underlying calls, the value returned
 * from TempDir will be stable over time.
 *
 * Note: the returned path is just where the system thinks temporary files
 * should be stored, but TempDir does not actually guarantee that this path
 * exists.
 */
Path TempDir();

/**
 * On success, returns the size in bytes of the file specified by
 * `path`.
 */
StatusOr<int64_t> FileSize(const Path& path);

/**
 * On success, opens the file at the given `path` and returns its contents as
 * a string.
 */
StatusOr<std::string> ReadFile(const Path& path);

/**
 * Implements an iterator over the contents of a directory. Initializes to the
 * first entry in the directory.
 */
class DirectoryIterator {
 public:
  /**
   * Creates a new platform-specific directory iterator.
   *
   * @param path The path over which to iterate (must outlive the
   *     DirectoryIterator).
   */
  static std::unique_ptr<DirectoryIterator> Create(const Path& path);

  virtual ~DirectoryIterator() {
  }

  /**
   * Advances the iterator.
   */
  virtual void Next() = 0;

  /**
   * Returns true if `Next()` and `file()` can be called on the iterator.
   * If `Valid() == false && status().ok()`, then iteration has finished.
   */
  virtual bool Valid() const = 0;

  /**
   * Return the full path of the current entry pointed to by the iterator.
   */
  virtual Path file() const = 0;

  /**
   * Returns the last error encountered by the iterator, or OK.
   */
  Status status() const {
    return status_;
  }

 protected:
  /**
   * `path` should outlive the iterator.
   */
  explicit DirectoryIterator(const Path& path) : parent_{path} {
  }

  DirectoryIterator(const DirectoryIterator& other) = delete;
  DirectoryIterator& operator=(const DirectoryIterator& other) = delete;

  Status status_;
  const Path& parent_;
};

}  // namespace util
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_H_

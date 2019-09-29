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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_DETAIL_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_DETAIL_H_

#include "Firestore/core/src/firebase/firestore/util/path.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"

namespace firebase {
namespace firestore {
namespace util {
namespace detail {

// Additional routines for filesystem implementations that are not based on
// high-level mechanisms like NSFileManager.

/**
 * Creates the given directory. The immediate parent directory must already
 * exist and not already be a file.
 *
 * @return Ok if the directory was created or already existed. On some systems
 *     this may also return Ok if a regular file exists at the given path.
 */
Status CreateDir(const Path& path);

/**
 * Deletes the given directory if it exists.
 *
 * @return Ok if the directory was deleted or did not exist. Returns a
 *     system-defined error if the path is not a directory or the directory is
 *     non-empty.
 */
Status DeleteDir(const Path& path);

/**
 * Deletes the given file if it exists.
 *
 * @return Ok if the file was deleted or did not exist. Returns a system-defined
 *     error if the path exists but is not a regular file.
 */
Status DeleteFile(const Path& path);

/**
 * Recursively deletes the contents of the given pathname that is known to be
 * a directory.
 *
 * @return Ok if the directory was deleted or did not exist. Returns a
 *     system-defined error if the path exists but is not a directory.
 *
 */
Status RecursivelyDeleteDir(const Path& path);

}  // namespace detail
}  // namespace util
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_FILESYSTEM_DETAIL_H_

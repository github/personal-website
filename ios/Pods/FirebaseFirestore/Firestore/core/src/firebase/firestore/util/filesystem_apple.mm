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

#include "Firestore/core/src/firebase/firestore/util/filesystem.h"

#if defined(__APPLE__)

#import <Foundation/Foundation.h>

namespace firebase {
namespace firestore {
namespace util {

Path TempDir() {
  const char* env_tmpdir = getenv("TMPDIR");
  if (env_tmpdir) {
    return Path::FromUtf8(env_tmpdir);
  }

  NSString* ns_tmpdir = NSTemporaryDirectory();
  if (ns_tmpdir) {
    return Path::FromNSString(ns_tmpdir);
  }

  return Path::FromUtf8("/tmp");
}

}  // namespace util
}  // namespace firestore
}  // namespace firebase

#endif  // defined(__APPLE__)

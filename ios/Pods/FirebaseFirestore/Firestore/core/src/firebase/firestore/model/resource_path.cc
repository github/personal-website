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

#include "Firestore/core/src/firebase/firestore/model/resource_path.h"

#include <algorithm>
#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "absl/strings/str_join.h"
#include "absl/strings/str_split.h"

namespace firebase {
namespace firestore {
namespace model {

ResourcePath ResourcePath::FromString(absl::string_view path) {
  // NOTE: The client is ignorant of any path segments containing escape
  // sequences (e.g. __id123__) and just passes them through raw (they exist
  // for legacy reasons and should not be used frequently).

  HARD_ASSERT(path.find("//") == std::string::npos,
              "Invalid path (%s). Paths must not contain // in them.", path);

  // SkipEmpty because we may still have an empty segment at the beginning or
  // end if they had a leading or trailing slash (which we allow).
  std::vector<std::string> segments =
      absl::StrSplit(path, '/', absl::SkipEmpty());
  return ResourcePath{std::move(segments)};
}

std::string ResourcePath::CanonicalString() const {
  // NOTE: The client is ignorant of any path segments containing escape
  // sequences (e.g. __id123__) and just passes them through raw (they exist
  // for legacy reasons and should not be used frequently).

  return absl::StrJoin(begin(), end(), "/");
}

}  // namespace model
}  // namespace firestore
}  // namespace firebase

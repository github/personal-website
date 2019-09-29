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

#include "Firestore/core/src/firebase/firestore/timestamp_internal.h"

#include "Firestore/core/src/firebase/firestore/util/hashing.h"

namespace util = firebase::firestore::util;

namespace firebase {

size_t TimestampInternal::Hash(const Timestamp& timestamp) {
  return util::Hash(timestamp.seconds(), timestamp.nanoseconds());
}

Timestamp TimestampInternal::Truncate(const Timestamp& timestamp) {
  int32_t truncated_nanos = timestamp.nanoseconds() / 1000 * 1000;
  return Timestamp(timestamp.seconds(), truncated_nanos);
}

}  // namespace firebase

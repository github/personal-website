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

#include "Firestore/core/src/firebase/firestore/nanopb/reader.h"

namespace firebase {
namespace firestore {
namespace nanopb {

using nanopb::ByteString;

using firebase::firestore::util::Status;

Reader::Reader(const ByteString& bytes) : Reader(bytes.data(), bytes.size()) {
}

Reader::Reader(const std::vector<uint8_t>& bytes)
    : Reader(bytes.data(), bytes.size()) {
}

Reader::Reader(const uint8_t* bytes, size_t size)
    : stream_(pb_istream_from_buffer(bytes, size)) {
}

Reader::Reader(absl::string_view str)
    : Reader(reinterpret_cast<const uint8_t*>(str.data()), str.size()) {
}

void Reader::ReadNanopbMessage(const pb_field_t fields[], void* dest_struct) {
  if (!status_.ok()) return;

  if (!pb_decode(&stream_, fields, dest_struct)) {
    Fail(PB_GET_ERROR(&stream_));
  }
}

void Reader::FreeNanopbMessage(const pb_field_t fields[], void* dest_struct) {
  pb_release(fields, dest_struct);
}

}  // namespace nanopb
}  // namespace firestore
}  // namespace firebase

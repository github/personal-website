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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_READER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_READER_H_

#include <pb.h>
#include <pb_decode.h>

#include <cstdint>
#include <vector>

#include "Firestore/core/include/firebase/firestore/firestore_errors.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "absl/strings/string_view.h"

namespace firebase {
namespace firestore {
namespace nanopb {

/**
 * Docs TODO(rsgowman). But currently, this just wraps the underlying nanopb
 * pb_istream_t.
 *
 * All 'ReadX' methods verify the wiretype (by examining the last_tag_ field, as
 * set by ReadTag()) to ensure the correct type. If that fails, the status of
 * the Reader instance is set to non-ok.
 */
class Reader {
 public:
  Reader(const Reader&) = delete;
  Reader(Reader&&) = delete;

  /**
   * Creates an input stream that reads from the specified bytes. Note that
   * this reference must remain valid for the lifetime of this Reader.
   *
   * (This is roughly equivalent to the nanopb function
   * pb_istream_from_buffer())
   *
   * @param bytes where the input should be deserialized from.
   */
  explicit Reader(const nanopb::ByteString& bytes);
  explicit Reader(const std::vector<uint8_t>& bytes);
  Reader(const uint8_t* bytes, size_t length);

  /**
   * Creates an input stream from bytes backing the string_view. Note that
   * the backing buffer must remain valid for the lifetime of this Reader.
   *
   * (This is roughly equivalent to the nanopb function
   * pb_istream_from_buffer())
   */
  explicit Reader(absl::string_view);

  /**
   * Reads a nanopb message from the input stream.
   *
   * This essentially wraps calls to nanopb's pb_decode() method. This is the
   * primary way of decoding messages.
   *
   * Note that this allocates memory. You must call FreeNanopbMessage() (which
   * essentially wraps pb_release()) on the dest_struct in order to avoid memory
   * leaks. (This also implies code that uses this is not exception safe.)
   */
  // TODO(rsgowman): At the moment we rely on the caller to manually free
  // dest_struct via FreeNanopbMessage(). We might instead see if we can
  // register allocated messages, track them, and free them ourselves. This may
  // be especially relevant if we start to use nanopb messages as the underlying
  // data within the model objects.
  void ReadNanopbMessage(const pb_field_t fields[], void* dest_struct);

  /**
   * Release memory allocated by ReadNanopbMessage().
   *
   * This essentially wraps calls to nanopb's pb_release() method.
   */
  void FreeNanopbMessage(const pb_field_t fields[], void* dest_struct);

  util::Status status() const {
    return status_;
  }

  void set_status(util::Status status) {
    status_ = status;
  }

  /**
   * Ensures this Reader's status is `!ok().
   *
   * If this Reader's status is already !ok(), then this may augment the
   * description, but will otherwise leave it alone. Otherwise, this Reader's
   * status will be set to Error::DataLoss with the specified
   * description.
   */
  void Fail(absl::string_view description) {
    status_.Update(util::Status(Error::DataLoss, description));
  }

 private:
  /**
   * Creates a new Reader, based on the given nanopb pb_istream_t. Note that
   * a shallow copy will be taken. (Non-null pointers within this struct must
   * remain valid for the lifetime of this Reader.)
   */
  explicit Reader(pb_istream_t stream) : stream_(stream) {
  }

  util::Status status_ = util::Status::OK();

  pb_istream_t stream_;
};

}  // namespace nanopb
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_READER_H_

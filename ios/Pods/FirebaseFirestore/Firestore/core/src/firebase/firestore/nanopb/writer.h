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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_WRITER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_WRITER_H_

#include <pb.h>
#include <pb_encode.h>

#include <cstdint>
#include <string>
#include <vector>

#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"

namespace firebase {
namespace firestore {
namespace nanopb {

/**
 * Docs TODO(rsgowman). But currently, this just wraps the underlying nanopb
 * pb_ostream_t. All errors are considered fatal.
 */
class Writer {
 public:
  /**
   * Writes a nanopb message to the output stream.
   *
   * This essentially wraps calls to nanopb's `pb_encode()` method. If we didn't
   * use `oneof`s in our protos, this would be the primary way of encoding
   * messages.
   */
  void WriteNanopbMessage(const pb_field_t fields[], const void* src_struct);

 protected:
  /**
   * Creates a new Writer, with a default-initialized pb_ostream_t.
   */
  Writer() = default;

  pb_ostream_t stream_{};
};

/**
 * Creates a Writer that writes into a vector of bytes.
 *
 * This is roughly equivalent to the nanopb function pb_ostream_from_buffer(),
 * except that ByteStringWriter manages the buffer.
 */
class ByteStringWriter : public Writer {
 public:
  ByteStringWriter();
  ~ByteStringWriter();

  ByteStringWriter(const ByteStringWriter&) = delete;
  ByteStringWriter(ByteStringWriter&&) = delete;

  ByteStringWriter& operator=(const ByteStringWriter&) = delete;
  ByteStringWriter& operator=(ByteStringWriter&&) = delete;

  /**
   * Appends the given data to the internal buffer, growing the capacity of the
   * buffer to fit.
   */
  void Append(const void* data, size_t size);

  /**
   * Reserves the given number of bytes of total capacity. To reserve `n` more
   * bytes in a writer `w`, call `w.Reserve(w.size() + n)`.
   */
  void Reserve(size_t capacity);

  /**
   * Sets the size of the buffer to some value less than the current capacity,
   * presumably after writing into the buffer with `pos()`.
   */
  void SetSize(size_t size);

  /**
   * Returns a ByteString that takes ownership of the bytes backing this
   * writer.
   */
  ByteString Release();

  size_t size() const {
    return buffer_ ? buffer_->size : 0;
  }

  size_t capacity() const {
    return capacity_;
  }

  /**
   * Returns the number of remaining bytes: the difference between capacity and
   * size.
   */
  size_t remaining() const {
    return capacity_ - size();
  }

  /**
   * Returns the current writing position within this writer's internal buffer.
   * This can only be used after calling `Reserve()`.
   */
  uint8_t* pos() {
    return buffer_->bytes + buffer_->size;
  }

 private:
  pb_bytes_array_t* buffer_ = nullptr;
  size_t capacity_ = 0;
};

/**
 * Creates an Writer that writes into a std::string.
 *
 * This is roughly equivalent to the nanopb function pb_ostream_from_buffer(),
 * except that StringWriter manages the string.
 */
class StringWriter : public Writer {
 public:
  StringWriter();

  /**
   * Returns the string backing this StringWriter, taking ownership of its
   * contents.
   */
  std::string Release();

 private:
  std::string buffer_;
};

}  // namespace nanopb
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_NANOPB_WRITER_H_

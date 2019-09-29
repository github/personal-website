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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LOCAL_SERIALIZER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LOCAL_SERIALIZER_H_

#include <memory>
#include <vector>

#include "Firestore/Protos/nanopb/firestore/local/maybe_document.nanopb.h"
#include "Firestore/Protos/nanopb/firestore/local/mutation.nanopb.h"
#include "Firestore/Protos/nanopb/firestore/local/target.nanopb.h"
#include "Firestore/core/src/firebase/firestore/local/query_data.h"
#include "Firestore/core/src/firebase/firestore/model/document.h"
#include "Firestore/core/src/firebase/firestore/model/maybe_document.h"
#include "Firestore/core/src/firebase/firestore/model/mutation_batch.h"
#include "Firestore/core/src/firebase/firestore/model/no_document.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/model/unknown_document.h"
#include "Firestore/core/src/firebase/firestore/nanopb/reader.h"
#include "Firestore/core/src/firebase/firestore/nanopb/writer.h"
#include "Firestore/core/src/firebase/firestore/remote/serializer.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"

namespace firebase {
namespace firestore {
namespace local {

/**
 * @brief Serializer for values stored in the LocalStore.
 *
 * All errors that occur during serialization are fatal.
 *
 * All deserialization methods (that can fail) take a nanopb::Reader parameter
 * whose status will be set to failed upon an error. Callers must check this
 * before using the returned value via `reader->status()`. A deserialization
 * method might fail if a protocol buffer is missing a critical field or has a
 * value we can't interpret. On error, the return value from a deserialization
 * method is unspecified.
 *
 * Note that local::LocalSerializer currently delegates to the
 * remote::Serializer (for the Firestore v1 RPC protocol) to save implementation
 * time and code duplication. We'll need to revisit this when the RPC protocol
 * we use diverges from local storage.
 */
class LocalSerializer {
 public:
  explicit LocalSerializer(const remote::Serializer& rpc_serializer)
      : rpc_serializer_(rpc_serializer) {
  }

  /**
   * Release memory allocated by the Encode* methods that return protos.
   *
   * This essentially wraps calls to nanopb's pb_release() method.
   */
  static void FreeNanopbMessage(const pb_field_t fields[], void* dest_struct) {
    remote::Serializer::FreeNanopbMessage(fields, dest_struct);
  }

  /**
   * @brief Encodes a MaybeDocument model to the equivalent nanopb proto for
   * local storage.
   */
  firestore_client_MaybeDocument EncodeMaybeDocument(
      const model::MaybeDocument& maybe_doc) const;

  /**
   * @brief Decodes nanopb proto representing a MaybeDocument proto to the
   * equivalent model.
   */
  model::MaybeDocument DecodeMaybeDocument(
      nanopb::Reader* reader,
      const firestore_client_MaybeDocument& proto) const;

  /**
   * @brief Encodes a QueryData to the equivalent nanopb proto, representing a
   * ::firestore::proto::Target, for local storage.
   */
  firestore_client_Target EncodeQueryData(const QueryData& query_data) const;

  /**
   * @brief Decodes nanopb proto representing a ::firestore::proto::Target proto
   * to the equivalent QueryData.
   */
  QueryData DecodeQueryData(nanopb::Reader* reader,
                            const firestore_client_Target& proto) const;

  /**
   * @brief Encodes a MutationBatch to the equivalent nanopb proto, representing
   * a ::firestore::client::WriteBatch, for local storage in the mutation queue.
   */
  firestore_client_WriteBatch EncodeMutationBatch(
      const model::MutationBatch& mutation_batch) const;

  /**
   * @brief Decodes a nanopb proto representing a
   * ::firestore::client::WriteBatch proto to the equivalent MutationBatch.
   */
  model::MutationBatch DecodeMutationBatch(
      nanopb::Reader* reader, const firestore_client_WriteBatch& proto) const;

 private:
  /**
   * Encodes a Document for local storage. This differs from the v1 RPC
   * serializer for Documents in that it preserves the updateTime, which is
   * considered an output only value by the server.
   */
  google_firestore_v1_Document EncodeDocument(const model::Document& doc) const;

  firestore_client_NoDocument EncodeNoDocument(
      const model::NoDocument& no_doc) const;

  model::NoDocument DecodeNoDocument(
      nanopb::Reader* reader, const firestore_client_NoDocument& proto) const;

  firestore_client_UnknownDocument EncodeUnknownDocument(
      const model::UnknownDocument& unknown_doc) const;
  model::UnknownDocument DecodeUnknownDocument(
      nanopb::Reader* reader,
      const firestore_client_UnknownDocument& proto) const;

  const remote::Serializer& rpc_serializer_;
};

}  // namespace local
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_LOCAL_SERIALIZER_H_

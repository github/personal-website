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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_QUERY_DATA_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_QUERY_DATA_H_

#include <iosfwd>
#include <string>
#include <vector>

#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/nanopb/byte_string.h"

namespace firebase {
namespace firestore {
namespace local {

/** An enumeration for the different purposes we have for queries. */
enum class QueryPurpose {
  /** A regular, normal query. */
  Listen,

  /**
   * The query was used to refill a query after an existence filter mismatch.
   */
  ExistenceFilterMismatch,

  /** The query was used to resolve a limbo document. */
  LimboResolution,
};

std::ostream& operator<<(std::ostream& os, QueryPurpose purpose);

/**
 * An immutable set of metadata that the store will need to keep track of for
 * each query.
 */
class QueryData {
 public:
  /**
   * Creates a new QueryData with the given values.
   *
   * @param query The query being listened to.
   * @param target_id The target to which the query corresponds, assigned by the
   *     LocalStore for user queries or the SyncEngine for limbo queries.
   * @param purpose The purpose of the query.
   * @param snapshot_version The latest snapshot version seen for this target.
   * @param resume_token An opaque, server-assigned token that allows watching a
   *     query to be resumed after disconnecting without retransmitting all the
   *     data that matches the query. The resume token essentially identifies a
   *     point in time from which the server should resume sending results.
   */
  QueryData(core::Query query,
            model::TargetId target_id,
            model::ListenSequenceNumber sequence_number,
            QueryPurpose purpose,
            model::SnapshotVersion snapshot_version,
            nanopb::ByteString resume_token);

  /**
   * Convenience constructor for use when creating a QueryData for the first
   * time.
   */
  QueryData(core::Query query,
            int target_id,
            model::ListenSequenceNumber sequence_number,
            QueryPurpose purpose);

  /**
   * Creates an invalid QueryData. Prefer QueryData::Invalid() for readability.
   */
  QueryData() = default;

  /**
   * Constructs an invalid QueryData. Reading any properties of the returned
   * value is undefined.
   */
  static QueryData Invalid();

  /** The query being listened to. */
  const core::Query& query() const {
    return query_;
  }

  /**
   * The TargetId to which the query corresponds, assigned by the FSTLocalStore
   * for user queries or the FSTSyncEngine for limbo queries.
   */
  model::TargetId target_id() const {
    return target_id_;
  }

  model::ListenSequenceNumber sequence_number() const {
    return sequence_number_;
  }

  /** The purpose of the query. */
  QueryPurpose purpose() const {
    return purpose_;
  }

  /** The latest snapshot version seen for this target. */
  const model::SnapshotVersion& snapshot_version() const {
    return snapshot_version_;
  }

  /**
   * An opaque, server-assigned token that allows watching a query to be resumed
   * after disconnecting without retransmitting all the data that matches the
   * query. The resume token essentially identifies a point in time from which
   * the server should resume sending results.
   */
  const nanopb::ByteString& resume_token() const {
    return resume_token_;
  }

  QueryData Copy(model::SnapshotVersion snapshot_version,
                 nanopb::ByteString resume_token,
                 model::ListenSequenceNumber sequence_number) const;

  friend bool operator==(const QueryData& lhs, const QueryData& rhs);

  size_t Hash() const;

  std::string ToString() const;

  friend std::ostream& operator<<(std::ostream& os, const QueryData& value);

 private:
  core::Query query_;
  model::TargetId target_id_;
  model::ListenSequenceNumber sequence_number_;
  QueryPurpose purpose_;
  model::SnapshotVersion snapshot_version_;
  nanopb::ByteString resume_token_;
};

inline bool operator!=(const QueryData& lhs, const QueryData& rhs) {
  return !(lhs == rhs);
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_LOCAL_QUERY_DATA_H_

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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_OPTIONS_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_OPTIONS_H_

namespace firebase {
namespace firestore {
namespace model {

/** Defines the return value for pending server timestamps. */
enum class ServerTimestampBehavior { kNone, kEstimate, kPrevious };

/** Holds properties that define field value deserialization options. */
class FieldValueOptions {
 public:
  /**
   * Creates an FieldValueOptions instance that specifies deserialization
   * behavior for pending server timestamps.
   */
  FieldValueOptions(ServerTimestampBehavior server_timestamp_behavior,
                    bool timestamps_in_snapshots_enabled)
      : server_timestamp_behavior_(server_timestamp_behavior),
        timestamps_in_snapshots_enabled_(timestamps_in_snapshots_enabled) {
  }

  ServerTimestampBehavior server_timestamp_behavior() const {
    return server_timestamp_behavior_;
  }

  bool timestamps_in_snapshots_enabled() const {
    return timestamps_in_snapshots_enabled_;
  }

 private:
  ServerTimestampBehavior server_timestamp_behavior_;
  bool timestamps_in_snapshots_enabled_;
};

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_FIELD_VALUE_OPTIONS_H_

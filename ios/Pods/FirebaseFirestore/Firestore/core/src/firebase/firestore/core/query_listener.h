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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_QUERY_LISTENER_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_QUERY_LISTENER_H_

#include <memory>
#include <utility>

#include "Firestore/core/src/firebase/firestore/core/listen_options.h"
#include "Firestore/core/src/firebase/firestore/core/query.h"
#include "Firestore/core/src/firebase/firestore/core/view_snapshot.h"
#include "Firestore/core/src/firebase/firestore/model/types.h"
#include "Firestore/core/src/firebase/firestore/util/status.h"
#include "Firestore/core/src/firebase/firestore/util/statusor_callback.h"
#include "absl/types/optional.h"

namespace firebase {
namespace firestore {
namespace core {

/**
 * QueryListener takes a series of internal view snapshots and determines when
 * to raise user-facing events.
 */
class QueryListener {
 public:
  static std::shared_ptr<QueryListener> Create(
      Query query,
      ListenOptions options,
      ViewSnapshot::SharedListener&& listener) {
    return std::make_shared<QueryListener>(std::move(query), std::move(options),
                                           std::move(listener));
  }

  static std::shared_ptr<QueryListener> Create(
      Query query, ViewSnapshot::SharedListener&& listener) {
    return Create(std::move(query), ListenOptions::DefaultOptions(),
                  std::move(listener));
  }

  static std::shared_ptr<QueryListener> Create(
      Query query,
      ListenOptions options,
      util::StatusOrCallback<ViewSnapshot>&& listener) {
    auto event_listener =
        EventListener<ViewSnapshot>::Create(std::move(listener));
    return Create(std::move(query), std::move(options),
                  std::move(event_listener));
  }

  static std::shared_ptr<QueryListener> Create(
      Query query, util::StatusOrCallback<ViewSnapshot>&& listener) {
    return Create(std::move(query), ListenOptions::DefaultOptions(),
                  std::move(listener));
  }

  QueryListener(Query query,
                ListenOptions options,
                ViewSnapshot::SharedListener&& listener);

  virtual ~QueryListener() {
  }

  const Query& query() const {
    return query_;
  }

  /** The last received view snapshot. */
  const absl::optional<ViewSnapshot>& snapshot() const {
    return snapshot_;
  }

  virtual void OnViewSnapshot(ViewSnapshot snapshot);
  virtual void OnError(util::Status error);
  virtual void OnOnlineStateChanged(model::OnlineState online_state);

 private:
  bool ShouldRaiseInitialEvent(const ViewSnapshot& snapshot,
                               model::OnlineState online_state) const;
  bool ShouldRaiseEvent(const ViewSnapshot& snapshot) const;
  void RaiseInitialEvent(const ViewSnapshot& snapshot);

  Query query_;
  ListenOptions options_;

  /**
   * The EventListener that will process ViewSnapshots associated with this
   * query listener.
   */
  ViewSnapshot::SharedListener listener_;

  /**
   * Initial snapshots (e.g. from cache) may not be propagated to the
   * ViewSnapshotHandler. This flag is set to true once we've actually raised an
   * event.
   */
  bool raised_initial_event_ = false;

  /** The last online state this query listener got. */
  model::OnlineState online_state_ = model::OnlineState::Unknown;

  absl::optional<ViewSnapshot> snapshot_;
};

}  // namespace core
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_CORE_QUERY_LISTENER_H_

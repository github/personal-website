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

#include "Firestore/core/src/firebase/firestore/core/event_manager.h"

#include <utility>

#import "Firestore/Source/Core/FSTSyncEngine.h"

namespace firebase {
namespace firestore {
namespace core {

EventManager::EventManager(FSTSyncEngine* sync_engine)
    : sync_engine_(sync_engine) {
  [sync_engine_ setCallback:this];
}

model::TargetId EventManager::AddQueryListener(
    std::shared_ptr<core::QueryListener> listener) {
  const Query& query = listener->query();

  auto inserted = queries_.emplace(query, QueryListenersInfo{});
  bool first_listen = inserted.second;
  QueryListenersInfo& query_info = inserted.first->second;

  query_info.listeners.push_back(listener);

  listener->OnOnlineStateChanged(online_state_);

  if (query_info.view_snapshot().has_value()) {
    listener->OnViewSnapshot(query_info.view_snapshot().value());
  }

  if (first_listen) {
    query_info.target_id = [sync_engine_ listenToQuery:query];
  }
  return query_info.target_id;
}

void EventManager::RemoveQueryListener(
    std::shared_ptr<core::QueryListener> listener) {
  const Query& query = listener->query();
  bool last_listen = false;

  auto found_iter = queries_.find(query);
  if (found_iter != queries_.end()) {
    QueryListenersInfo& query_info = found_iter->second;
    query_info.Erase(listener);
    last_listen = query_info.listeners.empty();
  }

  if (last_listen) {
    queries_.erase(found_iter);
    [sync_engine_ stopListeningToQuery:query];
  }
}

void EventManager::HandleOnlineStateChange(model::OnlineState online_state) {
  online_state_ = online_state;

  for (auto&& kv : queries_) {
    QueryListenersInfo& info = kv.second;
    for (auto&& listener : info.listeners) {
      listener->OnOnlineStateChanged(online_state_);
    }
  }
}

void EventManager::OnViewSnapshots(
    std::vector<core::ViewSnapshot>&& snapshots) {
  for (ViewSnapshot& snapshot : snapshots) {
    const Query& query = snapshot.query();
    auto found_iter = queries_.find(query);
    if (found_iter != queries_.end()) {
      QueryListenersInfo& query_info = found_iter->second;
      for (const auto& listener : query_info.listeners) {
        listener->OnViewSnapshot(snapshot);
      }
      query_info.set_view_snapshot(std::move(snapshot));
    }
  }
}

void EventManager::OnError(const core::Query& query, util::Status error) {
  auto found_iter = queries_.find(query);
  if (found_iter != queries_.end()) {
    QueryListenersInfo& query_info = found_iter->second;
    for (const auto& listener : query_info.listeners) {
      listener->OnError(std::move(error));
    }

    // Remove all listeners. NOTE: We don't need to call [FSTSyncEngine
    // stopListening] after an error.
    queries_.erase(found_iter);
  }
}

}  // namespace core
}  // namespace firestore
}  // namespace firebase

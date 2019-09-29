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

#include "Firestore/core/src/firebase/firestore/local/lru_garbage_collector.h"

#include <chrono>  // NOLINT(build/c++11)
#include <queue>
#include <string>
#include <utility>

#include "Firestore/core/include/firebase/firestore/timestamp.h"
#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"

namespace firebase {
namespace firestore {
namespace local {
namespace {

using firebase::firestore::api::Settings;
using firebase::firestore::model::DocumentKey;
using firebase::firestore::model::ListenSequenceNumber;
using firebase::firestore::model::TargetId;

using Millis = std::chrono::milliseconds;

static Millis::rep MillisecondsBetween(const Timestamp& start,
                                       const Timestamp& end) {
  return std::chrono::duration_cast<Millis>(end.ToTimePoint() -
                                            start.ToTimePoint())
      .count();
}

/**
 * RollingSequenceNumberBuffer tracks the nth sequence number in a series.
 * Sequence numbers may be added out of order.
 */
class RollingSequenceNumberBuffer {
 public:
  explicit RollingSequenceNumberBuffer(size_t max_elements)
      : queue_(std::priority_queue<ListenSequenceNumber>()),
        max_elements_(max_elements) {
  }

  RollingSequenceNumberBuffer(const RollingSequenceNumberBuffer& other) =
      delete;

  void AddElement(ListenSequenceNumber sequence_number) {
    if (queue_.size() < max_elements_) {
      queue_.push(sequence_number);
    } else {
      ListenSequenceNumber highestValue = queue_.top();
      if (sequence_number < highestValue) {
        queue_.pop();
        queue_.push(sequence_number);
      }
    }
  }

  ListenSequenceNumber max_value() const {
    return queue_.top();
  }

  size_t size() const {
    return queue_.size();
  }

 private:
  std::priority_queue<ListenSequenceNumber> queue_;
  const size_t max_elements_;
};

}  // namespace

const ListenSequenceNumber kListenSequenceNumberInvalid = -1;

LruParams LruParams::Default() {
  return LruParams{100 * 1024 * 1024, 10, 1000};
}

LruParams LruParams::Disabled() {
  return LruParams{api::Settings::CacheSizeUnlimited, 0, 0};
}

LruParams LruParams::WithCacheSize(int64_t cacheSize) {
  LruParams params = Default();
  params.min_bytes_threshold = cacheSize;
  return params;
}

LruGarbageCollector::LruGarbageCollector(LruDelegate* delegate,
                                         LruParams params)
    : delegate_(delegate), params_(std::move(params)) {
}

LruResults LruGarbageCollector::Collect(const LiveQueryMap& live_targets) {
  if (params_.min_bytes_threshold == Settings::CacheSizeUnlimited) {
    LOG_DEBUG("Garbage collection skipped; disabled");
    return LruResults::DidNotRun();
  }

  size_t current_size = CalculateByteSize();
  if (current_size < static_cast<size_t>(params_.min_bytes_threshold)) {
    // Not enough on disk to warrant collection. Wait another timeout cycle.
    LOG_DEBUG(
        "Garbage collection skipped; Cache size %s is lower than threshold %s",
        current_size, params_.min_bytes_threshold);
    return LruResults::DidNotRun();
  }

  LOG_DEBUG("Running garbage collection on cache of size: %s", current_size);
  return RunGarbageCollection(live_targets);
}

LruResults LruGarbageCollector::RunGarbageCollection(
    const LiveQueryMap& live_targets) {
  Timestamp start = Timestamp::Now();

  // Cap at the configured max
  int sequence_numbers = QueryCountForPercentile(params_.percentile_to_collect);
  if (sequence_numbers > params_.maximum_sequence_numbers_to_collect) {
    sequence_numbers = params_.maximum_sequence_numbers_to_collect;
  }
  Timestamp counted_targets = Timestamp::Now();

  ListenSequenceNumber upper_bound =
      SequenceNumberForQueryCount(sequence_numbers);
  Timestamp found_upper_bound = Timestamp::Now();

  int num_targets_removed = RemoveTargets(upper_bound, live_targets);
  Timestamp removed_targets = Timestamp::Now();

  int num_documents_removed = RemoveOrphanedDocuments(upper_bound);
  Timestamp removed_documents = Timestamp::Now();

  std::string desc = "LRU Garbage Collection:\n";
  absl::StrAppend(&desc, "\tCounted targets in ",
                  MillisecondsBetween(start, counted_targets), "ms\n");
  absl::StrAppend(&desc, "\tDetermined least recently used ", sequence_numbers,
                  " sequence numbers in ",
                  MillisecondsBetween(counted_targets, found_upper_bound),
                  "ms\n");
  absl::StrAppend(&desc, "\tRemoved ", num_targets_removed, " targets in ",
                  MillisecondsBetween(found_upper_bound, removed_targets),
                  "ms\n");
  absl::StrAppend(&desc, "\tRemoved ", num_documents_removed, " documents in ",
                  MillisecondsBetween(removed_targets, removed_documents),
                  "ms\n");
  absl::StrAppend(&desc, "Total duration: ",
                  MillisecondsBetween(start, removed_documents), "ms");
  LOG_DEBUG(desc.c_str());

  return LruResults{/* did_run= */ true, sequence_numbers, num_targets_removed,
                    num_documents_removed};
}

int LruGarbageCollector::QueryCountForPercentile(int percentile) {
  size_t total_count = delegate_->GetSequenceNumberCount();
  return static_cast<int>((percentile / 100.0f) * total_count);
}

ListenSequenceNumber LruGarbageCollector::SequenceNumberForQueryCount(
    int query_count) {
  if (query_count == 0) {
    return kListenSequenceNumberInvalid;
  }

  RollingSequenceNumberBuffer buffer(query_count);

  delegate_->EnumerateTargets([&buffer](const QueryData& queryData) {
    buffer.AddElement(queryData.sequence_number());
  });

  delegate_->EnumerateOrphanedDocuments(
      [&buffer](const DocumentKey& docKey,
                ListenSequenceNumber sequence_number) {
        buffer.AddElement(sequence_number);
      });

  return buffer.max_value();
}

int LruGarbageCollector::RemoveTargets(ListenSequenceNumber sequence_number,
                                       const LiveQueryMap& live_queries) {
  return delegate_->RemoveTargets(sequence_number, live_queries);
}

int LruGarbageCollector::RemoveOrphanedDocuments(
    ListenSequenceNumber sequence_number) {
  return delegate_->RemoveOrphanedDocuments(sequence_number);
}

}  // namespace local
}  // namespace firestore
}  // namespace firebase

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

#include "Firestore/core/src/firebase/firestore/api/query_core.h"

#include <future>  // NOLINT(build/c++11)
#include <memory>
#include <utility>
#include <vector>

#include "Firestore/core/src/firebase/firestore/api/firestore.h"
#include "Firestore/core/src/firebase/firestore/core/field_filter.h"
#include "Firestore/core/src/firebase/firestore/core/filter.h"
#include "Firestore/core/src/firebase/firestore/core/firestore_client.h"
#include "Firestore/core/src/firebase/firestore/core/operator.h"
#include "Firestore/core/src/firebase/firestore/model/field_value.h"
#include "absl/algorithm/container.h"

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace api {

namespace util = firebase::firestore::util;
using core::AsyncEventListener;
using core::Bound;
using core::Direction;
using core::EventListener;
using core::FieldFilter;
using core::Filter;
using core::ListenOptions;
using core::QueryListener;
using core::ViewSnapshot;
using model::DocumentKey;
using model::FieldPath;
using model::FieldValue;
using model::ResourcePath;
using util::Status;
using util::StatusOr;

using Operator = Filter::Operator;

Query::Query(core::Query query, std::shared_ptr<Firestore> firestore)
    : firestore_{std::move(firestore)}, query_{std::move(query)} {
}

bool operator==(const Query& lhs, const Query& rhs) {
  return lhs.firestore() == rhs.firestore() && lhs.query() == rhs.query();
}

size_t Query::Hash() const {
  return util::Hash(firestore_.get(), query());
}

void Query::GetDocuments(Source source, QuerySnapshot::Listener&& callback) {
  if (source == Source::Cache) {
    firestore_->client()->GetDocumentsFromLocalCache(*this,
                                                     std::move(callback));
    return;
  }

  ListenOptions options(
      /*include_query_metadata_changes=*/true,
      /*include_document_metadata_changes=*/true,
      /*wait_for_sync_when_online=*/true);

  class ListenOnce : public EventListener<QuerySnapshot> {
   public:
    ListenOnce(Source source, QuerySnapshot::Listener&& listener)
        : source_(source), listener_(std::move(listener)) {
    }

    void OnEvent(StatusOr<QuerySnapshot> maybe_snapshot) override {
      if (!maybe_snapshot.ok()) {
        listener_->OnEvent(std::move(maybe_snapshot));
        return;
      }

      QuerySnapshot snapshot = std::move(maybe_snapshot).ValueOrDie();

      // Remove query first before passing event to user to avoid user actions
      // affecting the now stale query.
      ListenerRegistration registration =
          registration_promise_.get_future().get();
      registration.Remove();

      if (snapshot.metadata().from_cache() && source_ == Source::Server) {
        listener_->OnEvent(Status{
            Error::Unavailable,
            "Failed to get documents from server. (However, these documents "
            "may exist in the local cache. Run again without setting source to "
            "FirestoreSourceServer to retrieve the cached documents.)"});
      } else {
        listener_->OnEvent(std::move(snapshot));
      }
    };

    void Resolve(ListenerRegistration&& registration) {
      registration_promise_.set_value(std::move(registration));
    }

   private:
    Source source_;
    QuerySnapshot::Listener listener_;

    std::promise<ListenerRegistration> registration_promise_;
  };

  auto listener = absl::make_unique<ListenOnce>(source, std::move(callback));
  auto listener_unowned = listener.get();

  ListenerRegistration registration =
      AddSnapshotListener(std::move(options), std::move(listener));

  listener_unowned->Resolve(std::move(registration));
}

ListenerRegistration Query::AddSnapshotListener(
    ListenOptions options, QuerySnapshot::Listener&& user_listener) {
  // Convert from ViewSnapshots to QuerySnapshots.
  class Converter : public EventListener<ViewSnapshot> {
   public:
    Converter(Query* parent, QuerySnapshot::Listener&& user_listener)
        : firestore_(parent->firestore()),
          query_(parent->query()),
          user_listener_(std::move(user_listener)) {
    }

    void OnEvent(StatusOr<ViewSnapshot> maybe_snapshot) override {
      if (!maybe_snapshot.status().ok()) {
        user_listener_->OnEvent(maybe_snapshot.status());
        return;
      }

      ViewSnapshot snapshot = std::move(maybe_snapshot).ValueOrDie();
      SnapshotMetadata metadata(snapshot.has_pending_writes(),
                                snapshot.from_cache());

      QuerySnapshot result(firestore_, query_, std::move(snapshot),
                           std::move(metadata));

      user_listener_->OnEvent(result);
    }

   private:
    std::shared_ptr<Firestore> firestore_;
    core::Query query_;
    QuerySnapshot::Listener user_listener_;
  };
  auto view_listener =
      absl::make_unique<Converter>(this, std::move(user_listener));

  // Call the view_listener on the user Executor.
  auto async_listener = AsyncEventListener<ViewSnapshot>::Create(
      firestore_->client()->user_executor(), std::move(view_listener));

  std::shared_ptr<QueryListener> query_listener =
      firestore_->client()->ListenToQuery(this->query(), options,
                                          async_listener);

  return ListenerRegistration(firestore_->client(), std::move(async_listener),
                              std::move(query_listener));
}

Query Query::Filter(FieldPath field_path,
                    Filter::Operator op,
                    FieldValue field_value,
                    const std::function<std::string()>& type_describer) const {
  if (field_path.IsKeyFieldPath()) {
    if (IsArrayOperator(op)) {
      ThrowInvalidArgument(
          "Invalid query. You can't perform %s queries on document "
          "ID since document IDs are not arrays.",
          Describe(op));
    } else if (op == Filter::Operator::In) {
      ValidateDisjunctiveFilterElements(field_value, op);
      std::vector<FieldValue> references;
      for (const auto& array_value : field_value.array_value()) {
        references.push_back(
            ParseExpectedReferenceValue(array_value, type_describer));
      }
      field_value = FieldValue::FromArray(references);
    } else {
      field_value = ParseExpectedReferenceValue(field_value, type_describer);
    }
  } else {
    if (IsDisjunctiveOperator(op)) {
      ValidateDisjunctiveFilterElements(field_value, op);
    }
  }

  FieldFilter filter = FieldFilter::Create(field_path, op, field_value);
  ValidateNewFilter(filter);

  return Wrap(query_.AddingFilter(std::move(filter)));
}

Query Query::OrderBy(FieldPath fieldPath, bool descending) const {
  return OrderBy(fieldPath, Direction::FromDescending(descending));
}

Query Query::OrderBy(FieldPath fieldPath, Direction direction) const {
  ValidateNewOrderByPath(fieldPath);
  if (query_.start_at()) {
    ThrowInvalidArgument("Invalid query. You must not specify a starting point "
                         "before specifying the order by.");
  }
  if (query_.end_at()) {
    ThrowInvalidArgument("Invalid query. You must not specify an ending point "
                         "before specifying the order by.");
  }
  return Wrap(
      query_.AddingOrderBy(core::OrderBy(std::move(fieldPath), direction)));
}

Query Query::Limit(int32_t limit) const {
  if (limit <= 0) {
    ThrowInvalidArgument(
        "Invalid Query. Query limit (%s) is invalid. Limit must be positive.",
        limit);
  }
  return Wrap(query_.WithLimit(limit));
}

Query Query::StartAt(Bound bound) const {
  return Wrap(query_.StartingAt(std::move(bound)));
}

Query Query::EndAt(Bound bound) const {
  return Wrap(query_.EndingAt(std::move(bound)));
}

void Query::ValidateNewFilter(const class Filter& filter) const {
  if (filter.IsAFieldFilter()) {
    FieldFilter field_filter(filter);

    if (field_filter.IsInequality()) {
      const FieldPath* existing_inequality = query_.InequalityFilterField();
      const FieldPath* new_inequality = &filter.field();

      if (existing_inequality && *existing_inequality != *new_inequality) {
        ThrowInvalidArgument(
            "Invalid Query. All where filters with an inequality (lessThan, "
            "lessThanOrEqual, greaterThan, or greaterThanOrEqual) must be on "
            "the same field. But you have inequality filters on '%s' and '%s'",
            existing_inequality->CanonicalString(),
            new_inequality->CanonicalString());
      }

      const FieldPath* first_order_by_field = query_.FirstOrderByField();
      if (first_order_by_field) {
        ValidateOrderByField(*first_order_by_field, filter.field());
      }

    } else {
      // You can have at most 1 disjunctive filter and 1 array filter. Check if
      // the new filter conflicts with an existing one.
      absl::optional<Operator> conflicting_op;
      Operator filter_op = field_filter.op();

      if (IsDisjunctiveOperator(filter_op)) {
        conflicting_op = query_.FirstDisjunctiveOperator();
      }
      if (!conflicting_op.has_value() && IsArrayOperator(filter_op)) {
        conflicting_op = query_.FirstArrayOperator();
      }
      if (conflicting_op) {
        // We special case when it's a duplicate op to give a slightly clearer
        // error message.
        if (*conflicting_op == filter_op) {
          ThrowInvalidArgument(
              "Invalid Query. You cannot use more than one '%s' filter.",
              Describe(filter_op));
        } else {
          ThrowInvalidArgument("Invalid Query. You cannot use '%s' filters with"
                               " '%s' filters.",
                               Describe(filter_op),
                               Describe(conflicting_op.value()));
        }
      }
    }
  }
}

void Query::ValidateNewOrderByPath(const FieldPath& fieldPath) const {
  if (!query_.FirstOrderByField()) {
    // This is the first order by. It must match any inequality.
    const FieldPath* inequalityField = query_.InequalityFilterField();
    if (inequalityField) {
      ValidateOrderByField(fieldPath, *inequalityField);
    }
  }
}

void Query::ValidateOrderByField(const FieldPath& orderByField,
                                 const FieldPath& inequalityField) const {
  if (orderByField != inequalityField) {
    ThrowInvalidArgument(
        "Invalid query. You have a where filter with an inequality "
        "(lessThan, lessThanOrEqual, greaterThan, or greaterThanOrEqual) on "
        "field '%s' and so you must also use '%s' as your first queryOrderedBy "
        "field, but your first queryOrderedBy is currently on field '%s' "
        "instead.",
        inequalityField.CanonicalString(), inequalityField.CanonicalString(),
        orderByField.CanonicalString());
  }
}

void Query::ValidateDisjunctiveFilterElements(
    const model::FieldValue& field_value, core::Filter::Operator op) const {
  if (field_value.type() != FieldValue::Type::Array ||
      field_value.array_value().size() == 0) {
    ThrowInvalidArgument("Invalid Query. A non-empty array is required for '%s'"
                         " filters.",
                         Describe(op));
  }
  if (field_value.array_value().size() > 10) {
    ThrowInvalidArgument("Invalid Query. '%s' filters support a maximum of 10"
                         " elements in the value array.",
                         Describe(op));
  }

  std::vector<FieldValue> array = field_value.array_value();
  for (const auto& val : array) {
    if (val.is_null()) {
      ThrowInvalidArgument(
          "Invalid Query. '%s' filters cannot contain 'null' in"
          " the value array.",
          Describe(op));
    }
    if (val.is_nan()) {
      ThrowInvalidArgument("Invalid Query. '%s' filters cannot contain 'NaN' in"
                           " the value array.",
                           Describe(op));
    }
  }
}

FieldValue Query::ParseExpectedReferenceValue(
    const model::FieldValue& field_value,
    const std::function<std::string()>& type_describer) const {
  if (field_value.type() == FieldValue::Type::String) {
    const std::string& document_key = field_value.string_value();
    if (document_key.empty()) {
      ThrowInvalidArgument(
          "Invalid query. When querying by document ID you must provide a "
          "valid document ID, but it was an empty string.");
    }
    if (!query().IsCollectionGroupQuery() &&
        document_key.find('/') != std::string::npos) {
      ThrowInvalidArgument(
          "Invalid query. When querying a collection by document ID you must "
          "provide a plain document ID, but '%s' contains a '/' character.",
          document_key);
    }
    ResourcePath path =
        query().path().Append(ResourcePath::FromString(document_key));
    if (!DocumentKey::IsDocumentKey(path)) {
      ThrowInvalidArgument(
          "Invalid query. When querying a collection group by document ID, "
          "the value provided must result in a valid document path, but '%s' "
          "is not because it has an odd number of segments.",
          path.CanonicalString());
    }
    return FieldValue::FromReference(firestore_->database_id(),
                                     DocumentKey{path});
  } else if (field_value.type() == FieldValue::Type::Reference) {
    return field_value;
  } else {
    ThrowInvalidArgument(
        "Invalid query. When querying by document ID you must provide a "
        "valid string or DocumentReference, but it was of type: %s",
        type_describer());
  }
}

std::string Query::Describe(Filter::Operator op) const {
  switch (op) {
    case Filter::Operator::LessThan:
      return "lessThan";
    case Filter::Operator::LessThanOrEqual:
      return "lessThanOrEqual";
    case Filter::Operator::Equal:
      return "equal";
    case Filter::Operator::GreaterThanOrEqual:
      return "greaterThanOrEqual";
    case Filter::Operator::GreaterThan:
      return "greaterThan";
    case Filter::Operator::ArrayContains:
      return "arrayContains";
    case Filter::Operator::In:
      return "in";
    case Filter::Operator::ArrayContainsAny:
      return "arrayContainsAny";
  }

  UNREACHABLE();
}

}  // namespace api
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MAYBE_DOCUMENT_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MAYBE_DOCUMENT_H_

#include <functional>
#include <iosfwd>
#include <memory>
#include <string>
#include <utility>

#include "Firestore/core/src/firebase/firestore/model/document_key.h"
#include "Firestore/core/src/firebase/firestore/model/snapshot_version.h"

namespace firebase {
namespace firestore {
namespace model {

/**
 * The result of a lookup for a given path may be an existing document or a
 * tombstone that marks the path deleted.
 *
 * Note: MaybeDocument and its subclasses are specially designed to avoid
 * slicing. You can assign a subclass of MaybeDocument to an instance of
 * MaybeDocument and the full value is preserved, unsliced. Each subclass
 * declares an explicit constructor that can recover the derived type. This
 * means that code like this will work:
 *
 *     Document doc(...);
 *     MaybeDocument maybe_doc = doc;
 *     Document recovered(maybe_doc);
 *
 * The final line results in an explicit check that will fail if the type of
 * the underlying data is not actually Type::Document.
 */
class MaybeDocument {
 public:
  /**
   * All the different kinds of documents, including MaybeDocument and its
   * subclasses. This is used to provide RTTI for documents. See the docstrings
   * of the subclasses for details.
   */
  enum class Type {
    // An unknown subclass of MaybeDocument. This should never happen.
    //
    // TODO(rsgowman): Since it's no longer possible to directly create
    // MaybeDocument's, we can likely remove this value entirely. But
    // investigate impact on the serializers first.
    Invalid,

    Document,
    NoDocument,
    UnknownDocument,
  };

  MaybeDocument() = default;

  bool is_valid() const {
    return rep_ != nullptr;
  }

  /** The runtime type of this document. */
  Type type() const {
    return rep_ ? rep_->type() : Type::Invalid;
  }

  bool is_document() const {
    return type() == Type::Document;
  }

  bool is_no_document() const {
    return type() == Type::NoDocument;
  }

  bool is_unknown_document() const {
    return type() == Type::UnknownDocument;
  }

  /** The key for this document. */
  const DocumentKey& key() const {
    return rep_->key();
  }

  /**
   * Returns the version of this document if it exists or a version at which
   * this document was guaranteed to not exist.
   */
  const SnapshotVersion& version() const {
    return rep_->version();
  }

  /**
   * Whether this document has a local mutation applied that has not yet been
   * acknowledged by Watch.
   */
  bool has_pending_writes() const {
    return rep_->has_pending_writes();
  }

  size_t Hash() const {
    return rep_->Hash();
  }

  std::string ToString() const {
    return rep_->ToString();
  }

  friend std::ostream& operator<<(std::ostream& os, const MaybeDocument& doc);

 protected:
  class Rep {
   public:
    Rep(Type type, DocumentKey&& key, SnapshotVersion version)
        : type_(type), key_(std::move(key)), version_(version) {
    }

    virtual ~Rep() = default;

    Type type() const {
      return type_;
    }

    const DocumentKey& key() const {
      return key_;
    }

    const SnapshotVersion& version() const {
      return version_;
    }

    virtual bool has_pending_writes() const = 0;

    virtual bool Equals(const Rep& other) const;

    virtual size_t Hash() const;

    virtual std::string ToString() const = 0;

   private:
    Type type_ = Type::Invalid;
    DocumentKey key_;
    SnapshotVersion version_;
  };

  explicit MaybeDocument(std::shared_ptr<Rep> rep) : rep_(std::move(rep)) {
  }

  const Rep& rep() const {
    return *rep_;
  }

  friend bool operator==(const MaybeDocument& lhs, const MaybeDocument& rhs);

 private:
  std::shared_ptr<const Rep> rep_;
};

inline bool operator!=(const MaybeDocument& lhs, const MaybeDocument& rhs) {
  return !(lhs == rhs);
}

/** Compares against another MaybeDocument by keys only. */
struct DocumentKeyComparator {
  bool operator()(const MaybeDocument& lhs, const MaybeDocument& rhs) const {
    return lhs.key() < rhs.key();
  }
};

}  // namespace model
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_MODEL_MAYBE_DOCUMENT_H_

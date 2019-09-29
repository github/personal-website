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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_OBJC_OBJC_CLASS_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_OBJC_OBJC_CLASS_H_

#if __OBJC__
#include <objc/objc.h>
#else
struct objc_object;
using id = struct objc_object*;
#endif

#include "Firestore/core/src/firebase/firestore/objc/objc_compatibility.h"

namespace firebase {
namespace firestore {
namespace objc {

// The OBJC_CLASS macro defines a forward declaration for an Objective-C class
// that's compatible both with Objective-C++ and regular C++. It's useful in
// headers that reference Objective-C types as members of C++ classes that must
// be usable from straight C++.
//
// Care must be taken to not use the forward declaration (even implicitly) in
// any inline definitions in the header. Even though Objective-C object
// pointers look like raw pointers, under ARC they're more like
// std::shared_ptr, where assignments and copies all potentially change the
// refcount of the pointee. When methods that affect the reference count are
// compiled inline in regular C++ this additional behavior won't get compiled
// in and the Objective-C reference counts will be off.
//
// Note that this may even appear to work, though it does so through undefined
// behavior: inline definitions are deduplicated at link time, and if the
// linker happens to choose a definition that was generated in an ARC-enabled
// translation unit then that specific build will work.
//
// Concretely this means that any method manipulating an Objective-C object
// pointer (constructors, destructors, getters, and setters) all must be
// defined out of line to avoid problems where ARC does not see changes to the
// reference.
//
// To make this safe, any members of a type declared with OBJC_CLASS should be
// held in a Handle object, defined below.
#if __OBJC__
#define OBJC_CLASS(name) @class name

#else
// Objective-C classes correspond to a C struct of the same name. Use a forward
// declaration of that struct as the pointer type to help C++ generate the
// correct mangled names.
//
// An alternative implementation would be to make this an alias for objc_object.
// While that's appealing because it makes interaction with functions taking id
// easier, any parameters of that type will be mangled differently in C++ vs
// Objective-C++ leading to undefined symbol errors at link time.
#define OBJC_CLASS(name) struct name
#endif  // __OBJC__

/**
 * A base class for implementing Handle, below, in such a way that allows all
 * the major operations to be defined out-of-line in an ARC-managed translation
 * unit.
 */
class HandleBase {
 public:
  HandleBase();
  HandleBase(const HandleBase& other);
  HandleBase(HandleBase&& other) noexcept;

  explicit HandleBase(id object);

  ~HandleBase();

  HandleBase& operator=(const HandleBase& other);
  HandleBase& operator=(HandleBase&& other) noexcept;

  void Assign(id object);

  void Release();

 protected:
  id object_;
};

/**
 * A holder for a pointer to an Objective-C class, that can be declared in
 * headers meant to be shared with plain C++. All useful operations on the
 * handle are only available in Objective-C++.
 */
template <typename ObjcType>
class Handle : public HandleBase {
 public:
  Handle() = default;

#if __OBJC__
  explicit Handle(ObjcType* object) : HandleBase(object) {
  }

  // In most cases, just using the handle as an Objective-C pointer works.
  operator ObjcType*() const {
    return get();
  }

  // Explicit conversion to the Objective-C pointer type is required when
  // accessing Objective-C properties. C++ doesn't have an operator overload
  // that makes that work, and the compiler doesn't attempt to coerce to the
  // Objective-C type to find it.
  ObjcType* get() const {
    return static_cast<ObjcType*>(object_);
  }

  Handle& operator=(const Handle&) = default;
  Handle& operator=(ObjcType* value) {
    HandleBase::Assign(value);
    return *this;
  }

  friend bool operator==(const Handle& lhs, const Handle& rhs) {
    return Equals(lhs.object_, rhs.object_);
  }

  friend bool operator!=(const Handle& lhs, const Handle& rhs) {
    return !(lhs == rhs);
  }

  friend bool operator==(const Handle& lhs, ObjcType* rhs) {
    return Equals(static_cast<ObjcType*>(lhs.object_), rhs);
  }

  friend bool operator!=(const Handle& lhs, ObjcType* rhs) {
    return !(lhs == rhs);
  }
#endif
};

#if __OBJC__
template <typename T>
bool Equals(const Handle<T>& lhs, const Handle<T>& rhs) {
  return lhs == rhs;
}
#endif

}  // namespace objc
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_OBJC_OBJC_CLASS_H_

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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_API_INPUT_VALIDATION_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_API_INPUT_VALIDATION_H_

// Routines in this file are used to throw an exception (or crash, depending on
// platform) in response to API usage errors. Exceptions should only be used
// for programmer errors made by consumers of the SDK, e.g. invalid method
// arguments.
//
// These routines avoid conditional compilation in the caller and avoids lint
// warnings around actually throwing exceptions in source. The implementation
// chooses the best way to surface a logic error to the developer.
//
// For recoverable runtime errors, use util::Status, or in pure Objective-C
// code use an NSError** out-parameter.
//
// For internal programming errors, including internal argument checking, use
// HARD_ASSERT or HARD_FAIL().

#include <string>

#include "Firestore/core/src/firebase/firestore/util/string_format.h"

namespace firebase {
namespace firestore {
namespace api {

namespace impl {

[[noreturn]] void ThrowIllegalState(const std::string& message);
[[noreturn]] void ThrowInvalidArgument(const std::string& message);

}  // namespace impl

/**
 * Throws an exception indicating that the user passed an invalid argument.
 *
 * Invalid argument is interpreted pretty broadly and can mean that the user
 * made an incompatible chained method call while building up a larger
 * structure, like a query.
 */
template <typename... FA>
[[noreturn]] void ThrowInvalidArgument(const char* format, const FA&... args) {
  impl::ThrowInvalidArgument(util::StringFormat(format, args...));
}

/**
 * Throws an exception that indicates the user has attempted to use an API
 * that's in an illegal state, usually by violating a precondition of the API
 * call.
 *
 * Good uses of these are things like using a write batch after committing or
 * trying to use Firestore without initializing FIRApp. Builder-style APIs that
 * haven't done anything yet should likely just stick to ThrowInvalidArgument.
 */
template <typename... FA>
[[noreturn]] void ThrowIllegalState(const char* format, const FA&... args) {
  impl::ThrowIllegalState(util::StringFormat(format, args...));
}

}  // namespace api
}  // namespace firestore
}  // namespace firebase

#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_API_INPUT_VALIDATION_H_

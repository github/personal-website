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

#include "Firestore/core/src/firebase/firestore/api/input_validation.h"

#import <Foundation/Foundation.h>

#include "Firestore/core/src/firebase/firestore/util/string_apple.h"

NS_ASSUME_NONNULL_BEGIN

namespace firebase {
namespace firestore {
namespace api {
namespace impl {

static NSException* MakeException(NSString* name, const std::string& message) {
  return [[NSException alloc] initWithName:name
                                    reason:util::MakeNSString(message)
                                  userInfo:nil];
}

[[noreturn]] void ThrowIllegalState(const std::string& message) {
  @throw MakeException(@"FIRIllegalStateException", message);  // NOLINT
}

[[noreturn]] void ThrowInvalidArgument(const std::string& message) {
  @throw MakeException(@"FIRInvalidArgumentException", message);  // NOLINT
}

}  // namespace impl
}  // namespace api
}  // namespace firestore
}  // namespace firebase

NS_ASSUME_NONNULL_END

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

#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"

#import <Foundation/Foundation.h>

#include <string>

#include "Firestore/core/src/firebase/firestore/util/string_apple.h"

namespace firebase {
namespace firestore {
namespace util {
namespace internal {

void Fail(const char* file,
          const char* func,
          const int line,
          const std::string& message) {
  [[NSAssertionHandler currentHandler]
      handleFailureInFunction:MakeNSString(func)
                         file:MakeNSString(file)
                   lineNumber:line
                  description:@"FIRESTORE INTERNAL ASSERTION FAILED: %s",
                              message.c_str()];
  abort();
}

void Fail(const char* file,
          const char* func,
          const int line,
          const std::string& message,
          const char* condition) {
  std::string failure;
  if (message.empty()) {
    failure = condition;
  } else {
    failure = StringFormat("%s (expected %s)", message, condition);
  }
  Fail(file, func, line, failure);
}

}  // namespace internal
}  // namespace util
}  // namespace firestore
}  // namespace firebase

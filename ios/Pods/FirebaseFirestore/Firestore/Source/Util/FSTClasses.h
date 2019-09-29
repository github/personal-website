/*
 * Copyright 2017 Google
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

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

// A convenience macro for unimplemented methods. Use as follows:
//
//     @throw FSTAbstractMethodException(); // NOLINT
#define FSTAbstractMethodException()                                                               \
  [NSException exceptionWithName:NSInternalInconsistencyException                                  \
                          reason:[NSString stringWithFormat:@"You must override %s in a subclass", \
                                                            __func__]                              \
                        userInfo:nil];

// Declare a weak pointer to the given variable
#define FSTWeakify(var) __weak __typeof__(var) fstWeakPointerTo##var = var;

// Declare a strong pointer to a variable that's been FSTWeakified. This creates a shadow of the
// original.
#define FSTStrongify(var)                                                           \
  _Pragma("clang diagnostic push") _Pragma("clang diagnostic ignored \"-Wshadow\"") \
      __strong __typeof__(var) var = fstWeakPointerTo##var;                         \
  _Pragma("clang diagnostic pop")

NS_ASSUME_NONNULL_END

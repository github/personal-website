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

#ifndef FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_CONFIG_H_
#define FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_CONFIG_H_

// This header defines macros for all available platform configuration values.
// When building with CMake, it will substitute the lines marked with
// cmakedefine with values corresponding to the local configuration.
//
// On Apple platforms we support building via CocoaPods without CMake. When
// building this way we can't test the presence of features before building so
// predefine all the platform-support feature macros to their expected values.

#if COCOAPODS
#  define HAVE_ARC4RANDOM 1
#endif


#endif  // FIRESTORE_CORE_SRC_FIREBASE_FIRESTORE_UTIL_CONFIG_H_

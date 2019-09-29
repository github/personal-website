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

#include "Firestore/core/src/firebase/firestore/remote/grpc_root_certificate_finder.h"

#import <objc/runtime.h>

#include <string>

#include "Firestore/core/src/firebase/firestore/util/filesystem.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "Firestore/core/src/firebase/firestore/util/statusor.h"
#include "absl/strings/str_cat.h"

namespace firebase {
namespace firestore {
namespace remote {

using util::Path;
using util::ReadFile;
using util::StatusOr;
using util::StringFormat;

namespace {

std::string DebugBundleIdentifier(NSBundle* _Nullable bundle) {
  if (!bundle) return "(nil bundle)";

  NSString* identifier = [bundle bundleIdentifier];
  if (!identifier) {
    identifier = [bundle bundlePath];
  }

  return identifier ? util::MakeString(identifier)
                    : "(bundle with no identifier)";
}

/**
 * Finds the roots.pem certificate file in the given resource bundle and logs
 * the outcome.
 *
 * @param bundle The bundle to check. Can be a nested bundle in Resources or
 *     an app or framework bundle to look in directly.
 * @param parent The parent bundle of the bundle to search. Used for logging.
 */
NSString* _Nullable FindCertFileInResourceBundle(NSBundle* _Nullable bundle,
                                                 NSBundle* _Nullable parent) {
  if (!bundle) return nil;

  NSString* path = [bundle pathForResource:@"roots" ofType:@"pem"];
  if (util::LogIsDebugEnabled()) {
    std::string message =
        absl::StrCat("roots.pem ", path ? "found " : "not found ", "in bundle ",
                     DebugBundleIdentifier(bundle));
    if (parent) {
      absl::StrAppend(&message, " (in parent ", DebugBundleIdentifier(parent),
                      ")");
    }
    LOG_DEBUG("%s", message);
  }

  return path;
}

/**
 * Finds gRPCCertificates.bundle inside the given parent, if it exists.
 *
 * This function exists mostly to handle differences in platforms.  On iOS,
 * resources are nested directly within the top-level of the parent bundle, but
 * on macOS this will actually be in Contents/Resources.
 *
 * @param parent A framework or app bundle to check.
 * @return The nested gRPCCertificates.bundle if found, otherwise nil.
 */
NSBundle* _Nullable FindCertBundleInParent(NSBundle* _Nullable parent) {
  if (!parent) return nil;

  static NSString* const bundle_names[] = {
      // gRPC-C++ 0.0.9 changed the name of the resource bundle to allow it to
      // coexist with Objective-C gRPC.
      @"gRPCCertificates-Cpp",

      // Older gRPC-C++ or Objective-C gRPC use this name.
      @"gRPCCertificates",
  };

  for (NSString* bundle_name : bundle_names) {
    NSString* path = [parent pathForResource:bundle_name ofType:@"bundle"];
    if (path) {
      return [[NSBundle alloc] initWithPath:path];
    }
  }

  return nil;
}

using BundleLoader = NSBundle* _Nullable (*)(void);

// CocoaPods: try to load from the gRPC-C++ Framework.
NSBundle* _Nullable FindGrpcCppFrameworkBundle() {
  return [NSBundle bundleWithIdentifier:@"org.cocoapods.grpcpp"];
}

// CocoaPods: also allow loading from the Objective-C gRPC Framework.
NSBundle* _Nullable FindGrpcObjcFrameworkBundle() {
  return [NSBundle bundleWithIdentifier:@"org.cocoapods.GRPCClient"];
}

// Carthage: try to load from the FirebaseFirestore.framework
NSBundle* _Nullable FindFirestoreFrameworkBundle() {
  // Load FIRFirestore reflectively to avoid a circular reference at build time.
  Class firestore_class = objc_getClass("FIRFirestore");
  if (!firestore_class) return nil;

  return [NSBundle bundleForClass:firestore_class];
}

// Carthage and manual projects: users manually adding resources to the project
// may add the certificate to the main application bundle. Note that
// `mainBundle` is nil for unit tests of library projects.
NSBundle* _Nullable FindMainBundle() {
  return [NSBundle mainBundle];
}

/**
 * Finds the path to the roots.pem certificates file, wherever it may be.
 *
 * Carthage users will find roots.pem inside gRPCCertificates.bundle in the
 * main bundle.
 *
 * There have been enough variations and workarounds posted on this that this
 * also accepts the roots.pem file outside gRPCCertificates.bundle.
 */
NSString* FindPathToCertificatesFile() {
  // Certificates file might be present in gRPC frameworks, Firestore, or the
  // main bundle.
  static BundleLoader loaders[] = {
      FindGrpcCppFrameworkBundle,
      FindGrpcObjcFrameworkBundle,
      FindFirestoreFrameworkBundle,
      FindMainBundle,
  };

  NSString* path = nil;

  for (BundleLoader loader : loaders) {
    NSBundle* parent = loader();
    if (!parent) continue;

    NSBundle* certs_bundle = FindCertBundleInParent(parent);
    path = FindCertFileInResourceBundle(certs_bundle, parent);
    if (path) break;

    path = FindCertFileInResourceBundle(parent, nil);
    if (path) break;
  }

  return path;
}

}  // namespace

std::string LoadGrpcRootCertificate() {
  NSString* path = FindPathToCertificatesFile();
  HARD_ASSERT(
      path,
      "Could not load root certificates from the bundle. SSL cannot work.");

  StatusOr<std::string> certificate = ReadFile(Path::FromNSString(path));
  HARD_ASSERT(
      certificate.ok(),
      StringFormat("Unable to open root certificates at file path %s", path)
          .c_str());
  return certificate.ValueOrDie();
}

}  // namespace remote
}  // namespace firestore
}  // namespace firebase

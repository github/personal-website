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

#import "FIRFirestoreSettings.h"

#include "Firestore/core/src/firebase/firestore/api/input_validation.h"
#include "Firestore/core/src/firebase/firestore/api/settings.h"
#include "Firestore/core/src/firebase/firestore/util/string_apple.h"
#include "Firestore/core/src/firebase/firestore/util/warnings.h"
#include "absl/base/attributes.h"
#include "absl/memory/memory.h"

NS_ASSUME_NONNULL_BEGIN

namespace api = firebase::firestore::api;
namespace util = firebase::firestore::util;
using api::Settings;
using api::ThrowInvalidArgument;

// Public constant
ABSL_CONST_INIT extern "C" const int64_t kFIRFirestoreCacheSizeUnlimited =
    api::Settings::CacheSizeUnlimited;

@implementation FIRFirestoreSettings

- (instancetype)init {
  if (self = [super init]) {
    _host = [NSString stringWithUTF8String:Settings::DefaultHost];
    _sslEnabled = Settings::DefaultSslEnabled;
    _dispatchQueue = dispatch_get_main_queue();
    _persistenceEnabled = Settings::DefaultPersistenceEnabled;
    _timestampsInSnapshotsEnabled = Settings::DefaultTimestampsInSnapshotsEnabled;
    _cacheSizeBytes = Settings::DefaultCacheSizeBytes;
  }
  return self;
}

- (BOOL)isEqual:(id)other {
  if (self == other) {
    return YES;
  } else if (![other isKindOfClass:[FIRFirestoreSettings class]]) {
    return NO;
  }

  FIRFirestoreSettings *otherSettings = (FIRFirestoreSettings *)other;
  SUPPRESS_DEPRECATED_DECLARATIONS_BEGIN()
  return [self.host isEqual:otherSettings.host] &&
         self.isSSLEnabled == otherSettings.isSSLEnabled &&
         self.dispatchQueue == otherSettings.dispatchQueue &&
         self.isPersistenceEnabled == otherSettings.isPersistenceEnabled &&
         self.timestampsInSnapshotsEnabled == otherSettings.timestampsInSnapshotsEnabled &&
         self.cacheSizeBytes == otherSettings.cacheSizeBytes;
  SUPPRESS_END()
}

- (NSUInteger)hash {
  NSUInteger result = [self.host hash];
  result = 31 * result + (self.isSSLEnabled ? 1231 : 1237);
  // Ignore the dispatchQueue to avoid having to deal with sizeof(dispatch_queue_t).
  result = 31 * result + (self.isPersistenceEnabled ? 1231 : 1237);
  SUPPRESS_DEPRECATED_DECLARATIONS_BEGIN()
  result = 31 * result + (self.timestampsInSnapshotsEnabled ? 1231 : 1237);
  SUPPRESS_END()
  result = 31 * result + (NSUInteger)self.cacheSizeBytes;
  return result;
}

- (id)copyWithZone:(nullable NSZone *)zone {
  FIRFirestoreSettings *copy = [[FIRFirestoreSettings alloc] init];
  copy.host = _host;
  copy.sslEnabled = _sslEnabled;
  copy.dispatchQueue = _dispatchQueue;
  copy.persistenceEnabled = _persistenceEnabled;
  SUPPRESS_DEPRECATED_DECLARATIONS_BEGIN()
  copy.timestampsInSnapshotsEnabled = _timestampsInSnapshotsEnabled;
  SUPPRESS_END()
  copy.cacheSizeBytes = _cacheSizeBytes;
  return copy;
}

- (void)setHost:(NSString *)host {
  if (!host) {
    ThrowInvalidArgument("Host setting may not be nil. You should generally just use the default "
                         "value (which is %s)",
                         Settings::DefaultHost);
  }
  _host = [host mutableCopy];
}

- (void)setDispatchQueue:(dispatch_queue_t)dispatchQueue {
  if (!dispatchQueue) {
    ThrowInvalidArgument(
        "Dispatch queue setting may not be nil. Create a new dispatch queue with "
        "dispatch_queue_create(\"com.example.MyQueue\", NULL) or just use the default (which is "
        "the main queue, returned from dispatch_get_main_queue())");
  }
  _dispatchQueue = dispatchQueue;
}

- (void)setCacheSizeBytes:(int64_t)cacheSizeBytes {
  if (cacheSizeBytes != kFIRFirestoreCacheSizeUnlimited &&
      cacheSizeBytes < Settings::MinimumCacheSizeBytes) {
    ThrowInvalidArgument("Cache size must be set to at least %s bytes",
                         Settings::MinimumCacheSizeBytes);
  }
  _cacheSizeBytes = cacheSizeBytes;
}

- (api::Settings)internalSettings {
  api::Settings settings;
  settings.set_host(util::MakeString(_host));
  settings.set_ssl_enabled(_sslEnabled);
  settings.set_persistence_enabled(_persistenceEnabled);
  settings.set_timestamps_in_snapshots_enabled(_timestampsInSnapshotsEnabled);
  settings.set_cache_size_bytes(_cacheSizeBytes);
  return settings;
}

@end

NS_ASSUME_NONNULL_END

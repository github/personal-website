// Copyright 2018 Google
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

#import <Foundation/Foundation.h>

@class FIRApp;
@class FIRStorage;

NS_ASSUME_NONNULL_BEGIN

/// This protocol is used in the interop registration process to register an instance provider for
/// individual FIRApps.
@protocol FIRStorageMultiBucketProvider

/// Default method for creating a Storage instance.
- (FIRStorage *)storageForBucket:(NSString *)bucket;

@end

/// A concrete implementation for FIRStorageMultiBucketProvider to create Storage instances.
@interface FIRStorageComponent : NSObject <FIRStorageMultiBucketProvider>

/// The FIRApp that instances will be set up with.
@property(nonatomic, weak, readonly) FIRApp *app;

/// Default method for creating a Storage instance.
- (FIRStorage *)storageForBucket:(NSString *)bucket;

/// Unavailable, use `storageForApp:storageURL:` instead.
- (instancetype)init NS_UNAVAILABLE;

@end

NS_ASSUME_NONNULL_END

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

#import "FIRStorageComponent.h"

#import "Public/FIRStorage.h"

#import <FirebaseAuthInterop/FIRAuthInterop.h>
#import <FirebaseCore/FIRAppInternal.h>
#import <FirebaseCore/FIRComponent.h>
#import <FirebaseCore/FIRComponentContainer.h>
#import <FirebaseCore/FIRDependency.h>
#import <FirebaseCore/FIRLibrary.h>

NS_ASSUME_NONNULL_BEGIN

@interface FIRStorage ()
// Surface the internal initializer to create instances of FIRStorage.
- (instancetype)initWithApp:(FIRApp *)app
                     bucket:(NSString *)bucket
                       auth:(nullable id<FIRAuthInterop>)auth;
@end

@interface FIRStorageComponent () <FIRLibrary>
/// Internal initializer.
- (instancetype)initWithApp:(FIRApp *)app;
@end

@implementation FIRStorageComponent

#pragma mark - Initialization

- (instancetype)initWithApp:(FIRApp *)app {
  self = [super init];
  if (self) {
    _app = app;
  }
  return self;
}

#pragma mark - Lifecycle

+ (void)load {
  [FIRApp registerInternalLibrary:(Class<FIRLibrary>)self
                         withName:@"fire-str"
                      withVersion:[NSString stringWithUTF8String:FIRStorageVersionString]];
}

#pragma mark - FIRComponentRegistrant

+ (nonnull NSArray<FIRComponent *> *)componentsToRegister {
  FIRDependency *authDep = [FIRDependency dependencyWithProtocol:@protocol(FIRAuthInterop)
                                                      isRequired:NO];
  FIRComponentCreationBlock creationBlock =
      ^id _Nullable(FIRComponentContainer *container, BOOL *isCacheable) {
    return [[FIRStorageComponent alloc] initWithApp:container.app];
  };
  FIRComponent *storageProvider =
      [FIRComponent componentWithProtocol:@protocol(FIRStorageMultiBucketProvider)
                      instantiationTiming:FIRInstantiationTimingLazy
                             dependencies:@[ authDep ]
                            creationBlock:creationBlock];

  return @[ storageProvider ];
}

#pragma mark - FIRStorageInstanceProvider Conformance

- (FIRStorage *)storageForBucket:(NSString *)bucket {
  // Create an instance of FIRStorage and return it.
  id<FIRAuthInterop> auth = FIR_COMPONENT(FIRAuthInterop, self.app.container);
  return [[FIRStorage alloc] initWithApp:self.app bucket:bucket auth:auth];
}

@end

NS_ASSUME_NONNULL_END

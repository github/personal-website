// Copyright 2017 Google
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

#import "Public/FIRStorage.h"

#import "FIRStorageComponent.h"
#import "FIRStorageConstants_Private.h"
#import "FIRStoragePath.h"
#import "FIRStorageReference_Private.h"
#import "FIRStorageTokenAuthorizer.h"
#import "FIRStorageUtils.h"
#import "FIRStorage_Private.h"
#import "Public/FIRStorageReference.h"

#import <FirebaseAuthInterop/FIRAuthInterop.h>
#import <FirebaseCore/FIRAppInternal.h>
#import <FirebaseCore/FIRComponentContainer.h>
#import <FirebaseCore/FIROptions.h>

#import <GTMSessionFetcher/GTMSessionFetcher.h>
#import <GTMSessionFetcher/GTMSessionFetcherLogging.h>

static NSMutableDictionary<
    NSString * /* app name */,
    NSMutableDictionary<NSString * /* bucket */, GTMSessionFetcherService *> *> *_fetcherServiceMap;
static GTMSessionFetcherRetryBlock _retryWhenOffline;

@interface FIRStorage () {
  /// Stored Auth reference, if it exists. This needs to be stored for `copyWithZone:`.
  id<FIRAuthInterop> _Nullable _auth;
}
@end

@implementation FIRStorage

+ (void)initialize {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    _retryWhenOffline = ^(BOOL suggestedWillRetry, NSError *GTM_NULLABLE_TYPE error,
                          GTMSessionFetcherRetryResponse response) {
      bool shouldRetry = suggestedWillRetry;
      // GTMSessionFetcher does not consider being offline a retryable error, but we do, so we
      // special-case it here.
      if (!shouldRetry && error) {
        shouldRetry = error.code == NSURLErrorNotConnectedToInternet;
      }
      response(shouldRetry);
    };
    _fetcherServiceMap = [[NSMutableDictionary alloc] init];
  });
}

+ (GTMSessionFetcherService *)fetcherServiceForApp:(FIRApp *)app
                                            bucket:(NSString *)bucket
                                              auth:(nullable id<FIRAuthInterop>)auth {
  @synchronized(_fetcherServiceMap) {
    NSMutableDictionary *bucketMap = _fetcherServiceMap[app.name];
    if (!bucketMap) {
      bucketMap = [[NSMutableDictionary alloc] init];
      _fetcherServiceMap[app.name] = bucketMap;
    }

    GTMSessionFetcherService *fetcherService = bucketMap[bucket];
    if (!fetcherService) {
      fetcherService = [[GTMSessionFetcherService alloc] init];
      [fetcherService setRetryEnabled:YES];
      [fetcherService setRetryBlock:_retryWhenOffline];
      FIRStorageTokenAuthorizer *authorizer =
          [[FIRStorageTokenAuthorizer alloc] initWithGoogleAppID:app.options.googleAppID
                                                  fetcherService:fetcherService
                                                    authProvider:auth];
      [fetcherService setAuthorizer:authorizer];
      bucketMap[bucket] = fetcherService;
    }
    return fetcherService;
  }
}

+ (void)setGTMSessionFetcherLoggingEnabled:(BOOL)isLoggingEnabled {
  [GTMSessionFetcher setLoggingEnabled:isLoggingEnabled];
}

+ (instancetype)storage {
  return [self storageForApp:[FIRApp defaultApp]];
}

+ (instancetype)storageForApp:(FIRApp *)app {
  if (app.options.storageBucket) {
    NSString *url = [app.options.storageBucket isEqualToString:@""]
                        ? @""
                        : [@"gs://" stringByAppendingString:app.options.storageBucket];
    return [self storageForApp:app URL:url];
  } else {
    NSString *const kAppNotConfiguredMessage =
        @"No default Storage bucket found. Did you configure Firebase Storage properly?";
    [NSException raise:NSInvalidArgumentException format:kAppNotConfiguredMessage];
    return nil;
  }
}

+ (instancetype)storageWithURL:(NSString *)url {
  return [self storageForApp:[FIRApp defaultApp] URL:url];
}

+ (instancetype)storageForApp:(FIRApp *)app URL:(NSString *)url {
  NSString *bucket;
  if ([url isEqualToString:@""]) {
    bucket = @"";
  } else {
    FIRStoragePath *path;

    @try {
      path = [FIRStoragePath pathFromGSURI:url];
    } @catch (NSException *e) {
      [NSException raise:NSInternalInconsistencyException
                  format:@"URI must be in the form of gs://<bucket>/"];
    }

    if (path.object != nil && ![path.object isEqualToString:@""]) {
      [NSException raise:NSInternalInconsistencyException
                  format:@"Storage bucket cannot be initialized with a path"];
    }

    bucket = path.bucket;
  }

  // Retrieve the instance provider from the app's container to inject dependencies as needed.
  id<FIRStorageMultiBucketProvider> provider =
      FIR_COMPONENT(FIRStorageMultiBucketProvider, app.container);
  return [provider storageForBucket:bucket];
}

- (instancetype)initWithApp:(FIRApp *)app
                     bucket:(NSString *)bucket
                       auth:(nullable id<FIRAuthInterop>)auth {
  self = [super init];
  if (self) {
    _app = app;
    _auth = auth;
    _storageBucket = bucket;
    _dispatchQueue = dispatch_queue_create("com.google.firebase.storage", DISPATCH_QUEUE_SERIAL);
    _fetcherServiceForApp = [FIRStorage fetcherServiceForApp:_app bucket:bucket auth:auth];
    _maxDownloadRetryTime = 600.0;
    _maxOperationRetryTime = 120.0;
    _maxUploadRetryTime = 600.0;
  }
  return self;
}

- (instancetype)init {
  NSAssert(false, @"Storage cannot be directly instantiated, use "
                   "Storage.storage() or Storage.storage(app:) instead");
  return nil;
}

#pragma mark - NSObject overrides

- (instancetype)copyWithZone:(NSZone *)zone {
  FIRStorage *storage = [[[self class] allocWithZone:zone] initWithApp:_app
                                                                bucket:_storageBucket
                                                                  auth:_auth];
  storage.callbackQueue = _callbackQueue;
  return storage;
}

// Two FIRStorage objects are equal if they use the same app
- (BOOL)isEqual:(id)object {
  if (self == object) {
    return YES;
  }

  if (![object isKindOfClass:[FIRStorage class]]) {
    return NO;
  }

  BOOL isEqualObject = [self isEqualToFIRStorage:(FIRStorage *)object];
  return isEqualObject;
}

- (BOOL)isEqualToFIRStorage:(FIRStorage *)storage {
  BOOL isEqual =
      [_app isEqual:storage.app] && [_storageBucket isEqualToString:storage.storageBucket];
  return isEqual;
}

- (NSUInteger)hash {
  NSUInteger hash = [_app hash] ^ [_callbackQueue hash];
  return hash;
}

- (NSString *)description {
  return [NSString stringWithFormat:@"%@ %p: %@", [self class], self, _app];
}

#pragma mark - Public methods

- (FIRStorageReference *)reference {
  FIRStoragePath *path = [[FIRStoragePath alloc] initWithBucket:_storageBucket object:nil];
  return [[FIRStorageReference alloc] initWithStorage:self path:path];
}

- (FIRStorageReference *)referenceForURL:(NSString *)string {
  FIRStoragePath *path = [FIRStoragePath pathFromString:string];

  // If no default bucket exists (empty string), accept anything.
  if ([_storageBucket isEqual:@""]) {
    FIRStorageReference *reference = [[FIRStorageReference alloc] initWithStorage:self path:path];
    return reference;
  }

  // If there exists a default bucket, throw if provided a different bucket.
  if (![path.bucket isEqual:_storageBucket]) {
    NSString *const kInvalidBucketFormat =
        @"Provided bucket: %@ does not match the Storage bucket of the current instance: %@";
    [NSException raise:NSInvalidArgumentException
                format:kInvalidBucketFormat, path.bucket, _storageBucket];
  }

  FIRStorageReference *reference = [[FIRStorageReference alloc] initWithStorage:self path:path];
  return reference;
}

- (FIRStorageReference *)referenceWithPath:(NSString *)string {
  FIRStorageReference *reference = [[self reference] child:string];
  return reference;
}

- (void)setCallbackQueue:(dispatch_queue_t)callbackQueue {
  _fetcherServiceForApp.callbackQueue = callbackQueue;
}

#pragma mark - Background tasks

+ (void)enableBackgroundTasks:(BOOL)isEnabled {
  [NSException raise:NSGenericException format:@"enableBackgroundTasks not implemented"];
}

- (NSArray<FIRStorageUploadTask *> *)uploadTasks {
  [NSException raise:NSGenericException format:@"getUploadTasks not implemented"];
  return nil;
}

- (NSArray<FIRStorageDownloadTask *> *)downloadTasks {
  [NSException raise:NSGenericException format:@"getDownloadTasks not implemented"];
  return nil;
}
@end

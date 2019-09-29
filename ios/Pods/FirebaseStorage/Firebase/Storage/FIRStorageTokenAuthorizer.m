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

#import "FIRStorageTokenAuthorizer.h"

#import "FIRStorageConstants.h"
#import "FIRStorageConstants_Private.h"
#import "FIRStorageErrors.h"

#import "FirebaseStorage.h"

#import <FirebaseAuthInterop/FIRAuthInterop.h>

@implementation FIRStorageTokenAuthorizer {
 @private
  /// Google App ID to pass along with each request.
  NSString *_googleAppID;

  /// Auth provider.
  id<FIRAuthInterop> _auth;
}

@synthesize fetcherService = _fetcherService;

- (instancetype)initWithGoogleAppID:(NSString *)googleAppID
                     fetcherService:(GTMSessionFetcherService *)service
                       authProvider:(nullable id<FIRAuthInterop>)auth {
  self = [super init];
  if (self) {
    _googleAppID = googleAppID;
    _fetcherService = service;
    _auth = auth;
  }
  return self;
}

#pragma mark - GTMFetcherAuthorizationProtocol methods

- (void)authorizeRequest:(NSMutableURLRequest *)request
                delegate:(id)delegate
       didFinishSelector:(SEL)sel {
  // Set version header on each request
  NSString *versionString = [NSString stringWithFormat:@"ios/%s", FIRStorageVersionString];
  [request setValue:versionString forHTTPHeaderField:@"x-firebase-storage-version"];

  // Set GMP ID on each request
  [request setValue:_googleAppID forHTTPHeaderField:@"x-firebase-gmpid"];

  if (delegate && sel) {
    id selfParam = self;
    NSMethodSignature *sig = [delegate methodSignatureForSelector:sel];
    NSInvocation *invocation = [NSInvocation invocationWithMethodSignature:sig];
    [invocation setSelector:sel];
    [invocation setTarget:delegate];
    [invocation setArgument:&selfParam atIndex:2];
    [invocation setArgument:&request atIndex:3];

    dispatch_queue_t callbackQueue = self.fetcherService.callbackQueue;
    if (!callbackQueue) {
      callbackQueue = dispatch_get_main_queue();
    }

    [invocation retainArguments];
    if (_auth) {
      [_auth getTokenForcingRefresh:NO
                       withCallback:^(NSString *_Nullable token, NSError *_Nullable error) {
                         if (error) {
                           NSMutableDictionary *errorDictionary =
                               [NSMutableDictionary dictionaryWithDictionary:error.userInfo];
                           errorDictionary[kFIRStorageResponseErrorDomain] = error.domain;
                           errorDictionary[kFIRStorageResponseErrorCode] = @(error.code);

                           NSError *tokenError =
                               [FIRStorageErrors errorWithCode:FIRStorageErrorCodeUnauthenticated
                                                infoDictionary:errorDictionary];
                           [invocation setArgument:&tokenError atIndex:4];
                         } else if (token) {
                           NSString *firebaseToken =
                               [NSString stringWithFormat:kFIRStorageAuthTokenFormat, token];
                           [request setValue:firebaseToken forHTTPHeaderField:@"Authorization"];
                         }
                         dispatch_async(callbackQueue, ^{
                           [invocation invoke];
                         });
                       }];
    } else {
      dispatch_async(callbackQueue, ^{
        [invocation invoke];
      });
    }
  }
}

// Note that stopAuthorization, isAuthorizingRequest, and userEmail
// aren't relevant with the Firebase App/Auth implementation of tokens,
// and thus aren't implemented. Token refresh is handled transparently
// for us, and we don't allow the auth request to be stopped.
// Auth is also not required so the world doesn't stop.
- (void)stopAuthorization {
  // Noop
}

- (void)stopAuthorizationForRequest:(NSURLRequest *)request {
  // Noop
}

- (BOOL)isAuthorizingRequest:(NSURLRequest *)request {
  return NO;
}

- (BOOL)isAuthorizedRequest:(NSURLRequest *)request {
  NSString *authHeader = request.allHTTPHeaderFields[@"Authorization"];
  BOOL isFirebaseToken = [authHeader hasPrefix:@"Firebase"];
  return isFirebaseToken;
}

- (NSString *)userEmail {
  // Noop
  return nil;
}

@end

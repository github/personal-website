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

#import "FIRVerifyCustomTokenRequest.h"

NS_ASSUME_NONNULL_BEGIN

/** @var kVerifyCustomTokenEndpoint
    @brief The "verifyPassword" endpoint.
 */
static NSString *const kVerifyCustomTokenEndpoint = @"verifyCustomToken";

/** @var kTokenKey
    @brief The key for the "token" value in the request.
 */
static NSString *const kTokenKey = @"token";

/** @var kReturnSecureTokenKey
    @brief The key for the "returnSecureToken" value in the request.
 */
static NSString *const kReturnSecureTokenKey = @"returnSecureToken";

@implementation FIRVerifyCustomTokenRequest

- (nullable instancetype)initWithToken:(NSString *)token
                  requestConfiguration:(FIRAuthRequestConfiguration *)requestConfiguration {
  self = [super initWithEndpoint:kVerifyCustomTokenEndpoint
            requestConfiguration:requestConfiguration];
  if (self) {
    _token = [token copy];
    _returnSecureToken = YES;
  }
  return self;
}

- (nullable id)unencodedHTTPRequestBodyWithError:(NSError *_Nullable *_Nullable)error {
  NSMutableDictionary *body = [@{
    kTokenKey : _token
  } mutableCopy];
  if (_returnSecureToken) {
    body[kReturnSecureTokenKey] = @YES;
  }
  return body;
}

@end

NS_ASSUME_NONNULL_END

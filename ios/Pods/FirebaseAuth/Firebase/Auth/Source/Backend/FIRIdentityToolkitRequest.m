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

#import "FIRIdentityToolkitRequest.h"

NS_ASSUME_NONNULL_BEGIN

/** @var kAPIURLFormat
    @brief URL format for server API calls.
 */
static NSString *const kAPIURLFormat = @"https://%@/identitytoolkit/v3/relyingparty/%@?key=%@";

/** @var gAPIHost
    @brief Host for server API calls.
 */
static NSString *gAPIHost = @"www.googleapis.com";

@implementation FIRIdentityToolkitRequest {
  FIRAuthRequestConfiguration *_requestConfiguration;
}

- (nullable instancetype)initWithEndpoint:(NSString *)endpoint
                     requestConfiguration:(FIRAuthRequestConfiguration *)requestConfiguration {
  self = [super init];
  if (self) {
    _endpoint = [endpoint copy];
    _APIKey = [requestConfiguration.APIKey copy];
    _requestConfiguration = requestConfiguration;
  }
  return self;
}

- (BOOL)containsPostBody {
  return YES;
}

- (NSURL *)requestURL {
  NSString *URLString = [NSString stringWithFormat:kAPIURLFormat, gAPIHost, _endpoint, _APIKey];
  NSURL *URL = [NSURL URLWithString:URLString];
  return URL;
}

- (FIRAuthRequestConfiguration *)requestConfiguration {
  return _requestConfiguration;
}

#pragma mark - Internal API for development

+ (NSString *)host {
  return gAPIHost;
}

+ (void)setHost:(NSString *)host {
  gAPIHost = host;
}

NS_ASSUME_NONNULL_END

@end

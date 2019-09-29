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

#import "FIRAuthTokenResult_Internal.h"

NS_ASSUME_NONNULL_BEGIN

/** @var kExpirationDateKey
    @brief The key used to encode the expirationDate property for NSSecureCoding.
 */
static NSString *const kExpirationDateKey = @"expiratinDate";

/** @var kTokenKey
    @brief The key used to encode the token property for NSSecureCoding.
 */
static NSString *const kTokenKey = @"token";

/** @var kAuthDateKey
    @brief The key used to encode the authDate property for NSSecureCoding.
 */
static NSString *const kAuthDateKey = @"authDate";

/** @var kIssuedDateKey
    @brief The key used to encode the issuedDate property for NSSecureCoding.
 */
static NSString *const kIssuedDateKey = @"issuedDate";

/** @var kSignInProviderKey
    @brief The key used to encode the signInProvider property for NSSecureCoding.
 */
static NSString *const kSignInProviderKey = @"signInProvider";

/** @var kClaimsKey
    @brief The key used to encode the claims property for NSSecureCoding.
 */
static NSString *const kClaimsKey = @"claims";

@implementation FIRAuthTokenResult

- (instancetype)initWithToken:(NSString *)token
               expirationDate:(NSDate *)expirationDate
                     authDate:(NSDate *)authDate
                 issuedAtDate:(NSDate *)issuedAtDate
               signInProvider:(NSString *)signInProvider
                       claims:(NSDictionary *)claims {
  self = [super init];
  if (self) {
    _token = token;
    _expirationDate = expirationDate;
    _authDate = authDate;
    _issuedAtDate = issuedAtDate;
    _signInProvider = signInProvider;
    _claims = claims;
  }
  return self;
}

#pragma mark - NSSecureCoding

+ (BOOL)supportsSecureCoding {
  return YES;
}

- (nullable instancetype)initWithCoder:(NSCoder *)aDecoder {
  NSString *token =
      [aDecoder decodeObjectOfClass:[NSDate class] forKey:kTokenKey];
  NSDate *expirationDate =
      [aDecoder decodeObjectOfClass:[NSDate class] forKey:kExpirationDateKey];
  NSDate *authDate =
      [aDecoder decodeObjectOfClass:[NSDate class] forKey:kAuthDateKey];
  NSDate *issuedAtDate =
      [aDecoder decodeObjectOfClass:[NSDate class] forKey:kAuthDateKey];
  NSString *signInProvider =
      [aDecoder decodeObjectOfClass:[NSString class] forKey:kSignInProviderKey];
  NSDictionary<NSString *, NSString *> *claims =
      [aDecoder decodeObjectOfClass:[NSDictionary<NSString *, NSString *> class] forKey:kClaimsKey];

  return [self initWithToken:token
              expirationDate:expirationDate
                    authDate:authDate
                issuedAtDate:issuedAtDate
              signInProvider:signInProvider
                      claims:claims];
}

- (void)encodeWithCoder:(NSCoder *)aCoder {
  [aCoder encodeObject:_token forKey:kTokenKey];
  [aCoder encodeObject:_expirationDate forKey:kExpirationDateKey];
  [aCoder encodeObject:_authDate forKey:kAuthDateKey];
  [aCoder encodeObject:_issuedAtDate forKey:kIssuedDateKey];
  [aCoder encodeObject:_signInProvider forKey:kSignInProviderKey];
  [aCoder encodeObject:_claims forKey:kClaimsKey];
}

@end

NS_ASSUME_NONNULL_END

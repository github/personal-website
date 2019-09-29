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

 #import <Foundation/Foundation.h>

 #import "FIRAuthTokenResult.h"

 NS_ASSUME_NONNULL_BEGIN

/** @extension FIRAuthAPNSTokenResult
    @brief An internal class used to expose internal methods of FIRAuthAPNSTokenResult.
 */
@interface FIRAuthTokenResult () <NSSecureCoding>

- (instancetype)initWithToken:(NSString *)token
               expirationDate:(NSDate *)expirationDate
                     authDate:(NSDate *)authDate
                 issuedAtDate:(NSDate *)issuedAtDate
               signInProvider:(NSString *)signInProvider
                       claims:(NSDictionary *)claims;

@end

NS_ASSUME_NONNULL_END

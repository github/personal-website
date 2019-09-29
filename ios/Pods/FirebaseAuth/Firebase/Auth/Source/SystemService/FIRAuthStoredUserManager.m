/*
 * Copyright 2019 Google
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

#import "FIRAuthStoredUserManager.h"

/** @var kUserAccessGroupKey
    @brief Key of user access group stored in user defaults. Used for retrieve the user access
        group at launch.
 */
static NSString *kStoredUserAccessGroupKey = @"firebase_auth_stored_user_access_group";

/** @var kSharedKeychainAccountValue
    @brief Default value for kSecAttrAccount of shared keychain items.
 */
static NSString *kSharedKeychainAccountValue = @"firebase_auth_firebase_user";

/** @var kStoredUserCoderKey
    @brief The key to encode and decode the stored user.
 */
static NSString *kStoredUserCoderKey = @"firebase_auth_stored_user_coder_key";

@implementation FIRAuthStoredUserManager

#pragma mark - Initializers

- (instancetype)initWithServiceName:(NSString *)serviceName {
  self = [super init];
  if (self) {
    _keychainServices = [[FIRAuthKeychainServices alloc] initWithService:serviceName];
    _userDefaults = [[FIRAuthUserDefaults alloc] initWithService:serviceName];
  }
  return self;
}

#pragma mark - User Access Group

- (NSString *_Nullable)getStoredUserAccessGroupWithError:(NSError *_Nullable *_Nullable)outError {
  NSData *data = [self.userDefaults dataForKey:kStoredUserAccessGroupKey error:outError];
  if (data) {
    NSString *userAccessGroup = [NSString stringWithUTF8String:data.bytes];
    return userAccessGroup;
  } else {
    return nil;
  }
}

- (BOOL)setStoredUserAccessGroup:(NSString *_Nullable)accessGroup
                           error:(NSError *_Nullable *_Nullable)outError {
  NSData *data = [accessGroup dataUsingEncoding:NSUTF8StringEncoding];
  if (!data) {
    return [self.userDefaults removeDataForKey:kStoredUserAccessGroupKey error:outError];
  } else {
    return [self.userDefaults setData:data forKey:kStoredUserAccessGroupKey error:outError];
  }
}

#pragma mark - User for Access Group

- (FIRUser *)getStoredUserForAccessGroup:(NSString *)accessGroup
                       projectIdentifier:(NSString *)projectIdentifier
                                   error:(NSError *_Nullable *_Nullable)outError {


  NSMutableDictionary *query = [[NSMutableDictionary alloc] init];
  query[(__bridge id)kSecClass] = (__bridge id)kSecClassGenericPassword;

  query[(__bridge id)kSecAttrAccessGroup] = accessGroup;
  query[(__bridge id)kSecAttrService] = projectIdentifier;
  query[(__bridge id)kSecAttrAccount] = kSharedKeychainAccountValue;

  NSData *data = [self.keychainServices getItemWithQuery:query error:outError];
  NSKeyedUnarchiver *unarchiver = [[NSKeyedUnarchiver alloc] initForReadingWithData:data];
  FIRUser *user = [unarchiver decodeObjectOfClass:[FIRUser class] forKey:kStoredUserCoderKey];

  return user;
}

- (BOOL)setStoredUser:(FIRUser *)user
       forAccessGroup:(NSString *)accessGroup
    projectIdentifier:(NSString *)projectIdentifier
                error:(NSError *_Nullable *_Nullable)outError {
  NSMutableDictionary *query = [[NSMutableDictionary alloc] init];
  query[(__bridge id)kSecClass] = (__bridge id)kSecClassGenericPassword;
  query[(__bridge id)kSecAttrAccessible] = (__bridge id)kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly;

  query[(__bridge id)kSecAttrAccessGroup] = accessGroup;
  query[(__bridge id)kSecAttrService] = projectIdentifier;
  query[(__bridge id)kSecAttrAccount] = kSharedKeychainAccountValue;

  NSMutableData *data = [NSMutableData data];
  NSKeyedArchiver *archiver = [[NSKeyedArchiver alloc] initForWritingWithMutableData:data];
  [archiver encodeObject:user forKey:kStoredUserCoderKey];
  [archiver finishEncoding];

  return [self.keychainServices setItem:data withQuery:query error:outError];
}

- (BOOL)removeStoredUserForAccessGroup:(NSString *)accessGroup
                     projectIdentifier:(NSString *)projectIdentifier
                                 error:(NSError *_Nullable *_Nullable)outError {
  NSMutableDictionary *query = [[NSMutableDictionary alloc] init];
  query[(__bridge id)kSecClass] = (__bridge id)kSecClassGenericPassword;
  query[(__bridge id)kSecAttrAccessible] = (__bridge id)kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly;

  query[(__bridge id)kSecAttrAccessGroup] = accessGroup;
  query[(__bridge id)kSecAttrService] = projectIdentifier;
  query[(__bridge id)kSecAttrAccount] = kSharedKeychainAccountValue;

  return [self.keychainServices removeItemWithQuery:query error:outError];
}

@end

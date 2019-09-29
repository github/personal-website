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

#import <Foundation/Foundation.h>

#if TARGET_OS_IOS || TARGET_OS_TV
#import <MobileCoreServices/MobileCoreServices.h>
#elif TARGET_OS_OSX
#import <CoreServices/CoreServices.h>
#endif

#import "FIRStorageUtils.h"

#import "FIRStorageConstants_Private.h"
#import "FIRStoragePath.h"

#import "FirebaseStorage.h"

#import <GTMSessionFetcher/GTMSessionFetcher.h>

// This is the list at https://cloud.google.com/storage/docs/json_api/ without &, ; and +.
NSString *const kGCSObjectAllowedCharacterSet =
    @"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~!$'()*,=:@";

@implementation FIRStorageUtils

+ (nullable NSString *)GCSEscapedString:(NSString *)string {
  NSCharacterSet *allowedCharacters =
      [NSCharacterSet characterSetWithCharactersInString:kGCSObjectAllowedCharacterSet];

  return [string stringByAddingPercentEncodingWithAllowedCharacters:allowedCharacters];
}

+ (nullable NSString *)MIMETypeForExtension:(NSString *)extension {
  if (extension == nil) {
    return nil;
  }

  CFStringRef pathExtension = (__bridge_retained CFStringRef)extension;
  CFStringRef type =
      UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, pathExtension, NULL);
  NSString *mimeType =
      (__bridge_transfer NSString *)UTTypeCopyPreferredTagWithClass(type, kUTTagClassMIMEType);
  CFRelease(pathExtension);
  if (type != NULL) {
    CFRelease(type);
  }

  return mimeType;
}

+ (NSString *)queryStringForDictionary:(nullable NSDictionary *)dictionary {
  if (!dictionary) {
    return @"";
  }

  __block NSMutableArray *queryItems = [[NSMutableArray alloc] initWithCapacity:[dictionary count]];
  [dictionary enumerateKeysAndObjectsUsingBlock:^(NSString *_Nonnull name, NSString *_Nonnull value,
                                                  BOOL *_Nonnull stop) {
    NSString *item =
        [FIRStorageUtils GCSEscapedString:[NSString stringWithFormat:@"%@=%@", name, value]];
    [queryItems addObject:item];
  }];
  return [queryItems componentsJoinedByString:@"&"];
}

+ (NSURLRequest *)defaultRequestForPath:(FIRStoragePath *)path {
  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
  NSURLComponents *components = [[NSURLComponents alloc] init];
  [components setScheme:kFIRStorageScheme];
  [components setHost:kFIRStorageHost];
  NSString *encodedPath = [self encodedURLForPath:path];
  [components setPercentEncodedPath:encodedPath];
  [request setURL:components.URL];
  return request;
}

+ (NSURLRequest *)defaultRequestForPath:(FIRStoragePath *)path
                            queryParams:(NSDictionary<NSString *, NSString *> *)queryParams {
  NSMutableURLRequest *request = [[NSMutableURLRequest alloc] init];
  NSURLComponents *components = [[NSURLComponents alloc] init];
  [components setScheme:kFIRStorageScheme];
  [components setHost:kFIRStorageHost];

  NSMutableArray<NSURLQueryItem *> *queryItems = [NSMutableArray new];
  for (NSString *key in queryParams) {
    [queryItems addObject:[NSURLQueryItem queryItemWithName:key value:queryParams[key]]];
  }
  [components setQueryItems:queryItems];

  NSString *encodedPath = [self encodedURLForPath:path];
  [components setPercentEncodedPath:encodedPath];
  [request setURL:components.URL];
  return request;
}

+ (NSString *)encodedURLForPath:(FIRStoragePath *)path {
  NSString *bucketName = [FIRStorageUtils GCSEscapedString:path.bucket];
  NSString *objectName = [FIRStorageUtils GCSEscapedString:path.object];
  NSString *bucketFormat = [NSString stringWithFormat:kFIRStorageBucketPathFormat, bucketName];
  NSString *urlPath = [@"/" stringByAppendingPathComponent:bucketFormat];
  if (objectName) {
    NSString *objectFormat = [NSString stringWithFormat:kFIRStorageObjectPathFormat, objectName];
    urlPath = [urlPath stringByAppendingFormat:@"/%@", objectFormat];
  } else {
    urlPath = [urlPath stringByAppendingString:@"/o"];
  }
  return [@"/" stringByAppendingString:[kFIRStorageVersionPath stringByAppendingString:urlPath]];
}

+ (NSError *)storageErrorWithDescription:(NSString *)description code:(NSInteger)code {
  return [NSError errorWithDomain:FIRStorageErrorDomain
                             code:code
                         userInfo:@{NSLocalizedDescriptionKey : description}];
}

@end

@implementation NSDictionary (FIRStorageNSDictionaryJSONHelpers)

+ (nullable instancetype)frs_dictionaryFromJSONData:(nullable NSData *)data {
  if (!data) {
    return nil;
  }
  return [NSJSONSerialization JSONObjectWithData:data
                                         options:NSJSONReadingMutableContainers
                                           error:nil];
}

@end

@implementation NSData (FIRStorageNSDataJSONHelpers)

+ (nullable instancetype)frs_dataFromJSONDictionary:(nullable NSDictionary *)dictionary {
  if (!dictionary) {
    return nil;
  }
  return [NSJSONSerialization dataWithJSONObject:dictionary options:0 error:nil];
}

@end

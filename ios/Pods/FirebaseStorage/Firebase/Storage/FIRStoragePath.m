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

#import "FIRStoragePath.h"

#import "FIRStorageConstants_Private.h"

@implementation FIRStoragePath

#pragma mark - Class methods

+ (nullable FIRStoragePath *)pathFromString:(NSString *)string {
  if ([string hasPrefix:@"gs://"]) {
    // "gs://bucket/path/to/object"
    return [FIRStoragePath pathFromGSURI:string];
  } else if ([string hasPrefix:@"http://"] || [string hasPrefix:@"https://"]) {
    // "http[s]://firebasestorage.googleapis.com/bucket/path/to/object?signed_url_params"
    return [FIRStoragePath pathFromHTTPURL:string];
  } else {
    // Invalid scheme, raise an exception!
    [NSException raise:NSInternalInconsistencyException
                format:@"URL scheme must be one of gs://, http://, or https:// "];
    return nil;
  }
}

+ (nullable FIRStoragePath *)pathFromGSURI:(NSString *)aURIString {
  NSString *bucketName;
  NSString *objectName;
  NSScanner *scanner = [NSScanner scannerWithString:aURIString];
  BOOL isGSURI = [scanner scanString:@"gs://" intoString:NULL];
  BOOL hasBucket = [scanner scanUpToString:@"/" intoString:&bucketName];
  [scanner scanString:@"/" intoString:NULL];
  [scanner scanUpToString:@"\n" intoString:&objectName];

  if (!isGSURI || !hasBucket) {
    [NSException raise:NSInternalInconsistencyException
                format:@"URI must be in the form of gs://<bucket>/<path/to/object>"];
    return nil;
  }

  return [[self alloc] initWithBucket:bucketName object:objectName];
}

+ (nullable FIRStoragePath *)pathFromHTTPURL:(NSString *)aURLString {
  NSString *bucketName;
  NSString *objectName;
  NSURL *httpsURL = [NSURL URLWithString:aURLString];
  NSArray *pathComponents = httpsURL.pathComponents;  // [/, v0, b, <bucket>, o, <objects/...>]

  if ([httpsURL.host isEqual:kFIRStorageHost]) {
    // Have a bucket name
    if ([pathComponents count] > 3) {
      bucketName = pathComponents[3];
    }

    // Have an object name
    if ([pathComponents count] > 5) {
      NSRange objectRange = NSMakeRange(5, [pathComponents count] - 5);
      objectName = [[pathComponents subarrayWithRange:objectRange] componentsJoinedByString:@"/"];
    }
  }

  if (bucketName.length == 0) {
    [NSException raise:NSInternalInconsistencyException
                format:@"URL must be in the form of "
                       @"http[s]://firebasestorage.googleapis.com/v0/b/<bucket>/o/<path/to/"
                       @"object>[?token=signed_url_params]"];
    return nil;
  }

  if (objectName.length == 0) {
    objectName = nil;
  }

  return [[self alloc] initWithBucket:bucketName object:objectName];
}

#pragma mark - Initializers

- (instancetype)initWithBucket:(NSString *)bucket object:(nullable NSString *)object {
  self = [super init];
  if (self) {
    _bucket = [bucket copy];
    _object = [self standardizedPathForString:[object copy]];
  }
  return self;
}

#pragma mark - NSObject overrides

- (instancetype)copyWithZone:(NSZone *)zone {
  return [[[self class] allocWithZone:zone] initWithBucket:_bucket object:_object];
}

- (BOOL)isEqual:(id)object {
  if (self == object) {
    return YES;
  }

  if (![object isKindOfClass:[FIRStoragePath class]]) {
    return NO;
  }

  BOOL isObjectEqual = [self isEqualToFIRStoragePath:(FIRStoragePath *)object];
  return isObjectEqual;
}

- (BOOL)isEqualToFIRStoragePath:(FIRStoragePath *)path {
  BOOL isBucketEqual = _bucket == nil && path->_bucket == nil;
  BOOL isObjectEqual = _object == nil && path->_object == nil;

  if (_bucket && path->_bucket) {
    isBucketEqual = [_bucket isEqual:path->_bucket];
  }

  if (_object && path.object) {
    isObjectEqual = [_object isEqual:path->_object];
  }

  BOOL isEqual = isBucketEqual && isObjectEqual;
  return isEqual;
}

- (NSUInteger)hash {
  // "...because in those days, you could XOR anything with anything and get something useful..."
  // https://www.usenix.org/system/files/1309_14-17_mickens.pdf
  NSUInteger hash = [_bucket hash] ^ [_object hash];
  return hash;
}

- (NSString *)description {
  return [NSString stringWithFormat:@"%@ %p: %@", [self class], self, [self stringValue]];
}

- (NSString *)stringValue {
  return [NSString stringWithFormat:@"gs://%@/%@", _bucket, _object ?: @""];
}

#pragma mark - Public methods

- (FIRStoragePath *)child:(NSString *)path {
  if (path.length == 0) {
    return [self copy];  // Return a copy of the same path, nothing happened
  }

  NSString *childObject;
  if (_object == nil) {
    childObject = path;
  } else {
    childObject = [_object stringByAppendingPathComponent:path];
  }

  FIRStoragePath *childPath = [[FIRStoragePath alloc] initWithBucket:_bucket object:childObject];
  return childPath;
}

- (nullable FIRStoragePath *)parent {
  if (_object.length == 0) {
    return nil;
  }

  NSString *parentObject = [_object stringByDeletingLastPathComponent];
  FIRStoragePath *parentPath = [[FIRStoragePath alloc] initWithBucket:_bucket object:parentObject];
  return parentPath;
}

- (FIRStoragePath *)root {
  FIRStoragePath *rootPath = [[FIRStoragePath alloc] initWithBucket:_bucket object:nil];
  return rootPath;
}

#pragma mark - Private methods

// Removes leading and trailing slashes, and compresses multiple slashes
// to create a canonical representation.
// Example: /foo//bar///baz//// -> foo/bar/baz
- (NSString *)standardizedPathForString:(NSString *)string {
  NSMutableArray *components = [[string componentsSeparatedByString:@"/"] mutableCopy];
  NSIndexSet *removedPaths =
      [components indexesOfObjectsPassingTest:^BOOL(NSString *string, NSUInteger idx, BOOL *stop) {
        return (string.length == 0);
      }];
  [components removeObjectsAtIndexes:removedPaths];
  return [components componentsJoinedByString:@"/"];
}

@end

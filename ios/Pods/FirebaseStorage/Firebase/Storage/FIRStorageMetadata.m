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

#import "FIRStorageMetadata.h"

#import "FIRStorageConstants.h"
#import "FIRStorageConstants_Private.h"
#import "FIRStorageMetadata_Private.h"
#import "FIRStorageUtils.h"

// TODO: consider rewriting this using GTLR (GTLRStorageObjects.h)
@implementation FIRStorageMetadata

#pragma mark - Initializers

- (instancetype)init {
  return [self initWithDictionary:[NSDictionary dictionary]];
}

- (instancetype)initWithDictionary:(NSDictionary *)dictionary {
  self = [super init];
  if (self) {
    _initialMetadata = [dictionary copy];

    _bucket = dictionary[kFIRStorageMetadataBucket];
    _cacheControl = dictionary[kFIRStorageMetadataCacheControl];
    _contentDisposition = dictionary[kFIRStorageMetadataContentDisposition];
    _contentEncoding = dictionary[kFIRStorageMetadataContentEncoding];
    _contentLanguage = dictionary[kFIRStorageMetadataContentLanguage];
    _contentType = dictionary[kFIRStorageMetadataContentType];
    _customMetadata = dictionary[kFIRStorageMetadataCustomMetadata];
    _size = [dictionary[kFIRStorageMetadataSize] longLongValue];
    _generation = [dictionary[kFIRStorageMetadataGeneration] longLongValue];
    _metageneration = [dictionary[kFIRStorageMetadataMetageneration] longLongValue];
    _timeCreated = [self dateFromRFC3339String:dictionary[kFIRStorageMetadataTimeCreated]];
    _updated = [self dateFromRFC3339String:dictionary[kFIRStorageMetadataUpdated]];
    _md5Hash = dictionary[kFIRStorageMetadataMd5Hash];
    // GCS "name" is our path, our "name" is just the last path component of the path
    _path = dictionary[kFIRStorageMetadataName];
    _name = [_path lastPathComponent];
  }
  return self;
}

#pragma mark - NSObject overrides

- (instancetype)copyWithZone:(NSZone *)zone {
  FIRStorageMetadata *clone =
      [[[self class] allocWithZone:zone] initWithDictionary:[self dictionaryRepresentation]];
  clone.initialMetadata = [self.initialMetadata copy];
  return clone;
}

- (BOOL)isEqual:(id)object {
  if (self == object) {
    return YES;
  }

  if (![object isKindOfClass:[FIRStorageMetadata class]]) {
    return NO;
  }

  BOOL isEqualObject = [self isEqualToFIRStorageMetadata:(FIRStorageMetadata *)object];
  return isEqualObject;
}

- (BOOL)isEqualToFIRStorageMetadata:(FIRStorageMetadata *)metadata {
  return [[self dictionaryRepresentation] isEqualToDictionary:[metadata dictionaryRepresentation]];
}

- (NSUInteger)hash {
  NSUInteger hash = [[self dictionaryRepresentation] hash];
  return hash;
}

- (NSString *)description {
  NSDictionary *metadataDictionary = [self dictionaryRepresentation];
  return [NSString stringWithFormat:@"%@ %p: %@", [self class], self, metadataDictionary];
}

#pragma mark - Public methods

- (NSDictionary *)dictionaryRepresentation {
  NSMutableDictionary *metadataDictionary = [[NSMutableDictionary alloc] initWithCapacity:13];

  if (_bucket) {
    metadataDictionary[kFIRStorageMetadataBucket] = _bucket;
  }

  if (_cacheControl) {
    metadataDictionary[kFIRStorageMetadataCacheControl] = _cacheControl;
  }

  if (_contentDisposition) {
    metadataDictionary[kFIRStorageMetadataContentDisposition] = _contentDisposition;
  }

  if (_contentEncoding) {
    metadataDictionary[kFIRStorageMetadataContentEncoding] = _contentEncoding;
  }

  if (_contentLanguage) {
    metadataDictionary[kFIRStorageMetadataContentLanguage] = _contentLanguage;
  }

  if (_contentType) {
    metadataDictionary[kFIRStorageMetadataContentType] = _contentType;
  }

  if (_md5Hash) {
    metadataDictionary[kFIRStorageMetadataMd5Hash] = _md5Hash;
  }

  if (_customMetadata) {
    metadataDictionary[kFIRStorageMetadataCustomMetadata] = _customMetadata;
  }

  if (_generation) {
    NSString *generationString = [NSString stringWithFormat:@"%lld", _generation];
    metadataDictionary[kFIRStorageMetadataGeneration] = generationString;
  }

  if (_metageneration) {
    NSString *metagenerationString = [NSString stringWithFormat:@"%lld", _metageneration];
    metadataDictionary[kFIRStorageMetadataMetageneration] = metagenerationString;
  }

  if (_timeCreated) {
    metadataDictionary[kFIRStorageMetadataTimeCreated] = [self RFC3339StringFromDate:_timeCreated];
  }

  if (_updated) {
    metadataDictionary[kFIRStorageMetadataUpdated] = [self RFC3339StringFromDate:_updated];
  }

  if (_path) {
    metadataDictionary[kFIRStorageMetadataName] = _path;
  }

  if (_size) {
    metadataDictionary[kFIRStorageMetadataSize] = [NSNumber numberWithLongLong:_size];
  }

  return [metadataDictionary copy];
}

- (BOOL)isFile {
  return _type == FIRStorageMetadataTypeFile;
}

- (BOOL)isFolder {
  return _type == FIRStorageMetadataTypeFolder;
}

#pragma mark - Private methods

+ (void)removeMatchingMetadata:(NSMutableDictionary *)metadata
                   oldMetadata:(NSDictionary *)oldMetadata {
  for (NSString *metadataKey in [oldMetadata allKeys]) {
    id oldValue = [oldMetadata objectForKey:metadataKey];
    id newValue = [metadata objectForKey:metadataKey];

    if (oldValue && !newValue) {
      [metadata setObject:[NSNull null] forKey:metadataKey];
    } else if ([oldValue isKindOfClass:[NSString class]] &&
               [newValue isKindOfClass:[NSString class]]) {
      if ([oldValue isEqualToString:newValue]) {
        [metadata removeObjectForKey:metadataKey];
      }
    } else if ([oldValue isKindOfClass:[NSDictionary class]] &&
               [newValue isKindOfClass:[NSDictionary class]]) {
      NSMutableDictionary *nestedMetadata = [newValue mutableCopy];
      [self removeMatchingMetadata:nestedMetadata oldMetadata:oldValue];
      [metadata setObject:[nestedMetadata copy] forKey:metadataKey];
    }
  }
}

- (NSDictionary *)updatedMetadata {
  NSMutableDictionary *metadataUpdate = [[self dictionaryRepresentation] mutableCopy];
  [FIRStorageMetadata removeMatchingMetadata:metadataUpdate oldMetadata:_initialMetadata];
  return [metadataUpdate copy];
}

#pragma mark - RFC 3339 conversions

static NSDateFormatter *sRFC3339DateFormatter;

static void setupDateFormatterOnce(void) {
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    sRFC3339DateFormatter = [[NSDateFormatter alloc] init];
    NSLocale *enUSPOSIXLocale = [[NSLocale alloc] initWithLocaleIdentifier:@"en_US_POSIX"];

    [sRFC3339DateFormatter setLocale:enUSPOSIXLocale];
    [sRFC3339DateFormatter setDateFormat:@"yyyy'-'MM'-'dd'T'HH':'mm':'ss.SSSZZZZZ"];
    [sRFC3339DateFormatter setTimeZone:[NSTimeZone timeZoneForSecondsFromGMT:0]];
  });
}

- (nullable NSDate *)dateFromRFC3339String:(NSString *)dateString {
  setupDateFormatterOnce();
  NSDate *rfc3339Date = [sRFC3339DateFormatter dateFromString:dateString];
  return rfc3339Date;
}

- (nullable NSString *)RFC3339StringFromDate:(NSDate *)date {
  setupDateFormatterOnce();
  NSString *rfc3339String = [sRFC3339DateFormatter stringFromDate:date];
  return rfc3339String;
}

@end

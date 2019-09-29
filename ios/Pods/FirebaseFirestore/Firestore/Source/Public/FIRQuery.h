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

#import <Foundation/Foundation.h>

#import "FIRFirestoreSource.h"
#import "FIRListenerRegistration.h"

@class FIRFieldPath;
@class FIRFirestore;
@class FIRQuerySnapshot;
@class FIRDocumentSnapshot;

NS_ASSUME_NONNULL_BEGIN

/**
 * A block type used to handle failable snapshot method callbacks.
 */
typedef void (^FIRQuerySnapshotBlock)(FIRQuerySnapshot *_Nullable snapshot,
                                      NSError *_Nullable error);

/**
 * A `FIRQuery` refers to a Query which you can read or listen to. You can also construct
 * refined `FIRQuery` objects by adding filters and ordering.
 */
NS_SWIFT_NAME(Query)
@interface FIRQuery : NSObject
/** :nodoc: */
- (id)init __attribute__((unavailable("FIRQuery cannot be created directly.")));

/** The `FIRFirestore` for the Firestore database (useful for performing transactions, etc.). */
@property(nonatomic, strong, readonly) FIRFirestore *firestore;

#pragma mark - Retrieving Data
/**
 * Reads the documents matching this query.
 *
 * This method attempts to provide up-to-date data when possible by waiting for
 * data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. See the
 * `getDocuments(source:completion:)` method to change this behavior.
 *
 * @param completion a block to execute once the documents have been successfully read.
 *     documentSet will be `nil` only if error is `non-nil`.
 */
- (void)getDocumentsWithCompletion:(FIRQuerySnapshotBlock)completion
    NS_SWIFT_NAME(getDocuments(completion:));

/**
 * Reads the documents matching this query.
 *
 * @param source indicates whether the results should be fetched from the cache
 *     only (`Source.cache`), the server only (`Source.server`), or to attempt
 *     the server and fall back to the cache (`Source.default`).
 * @param completion a block to execute once the documents have been successfully read.
 *     documentSet will be `nil` only if error is `non-nil`.
 */
// clang-format off
- (void)getDocumentsWithSource:(FIRFirestoreSource)source
                    completion:(FIRQuerySnapshotBlock)completion
    NS_SWIFT_NAME(getDocuments(source:completion:));
// clang-format on

/**
 * Attaches a listener for QuerySnapshot events.
 *
 * @param listener The listener to attach.
 *
 * @return A FIRListenerRegistration that can be used to remove this listener.
 */
- (id<FIRListenerRegistration>)addSnapshotListener:(FIRQuerySnapshotBlock)listener
    NS_SWIFT_NAME(addSnapshotListener(_:));

/**
 * Attaches a listener for QuerySnapshot events.
 *
 * @param includeMetadataChanges Whether metadata-only changes (i.e. only
 *     `FIRDocumentSnapshot.metadata` changed) should trigger snapshot events.
 * @param listener The listener to attach.
 *
 * @return A FIRListenerRegistration that can be used to remove this listener.
 */
// clang-format off
- (id<FIRListenerRegistration>)
addSnapshotListenerWithIncludeMetadataChanges:(BOOL)includeMetadataChanges
                                     listener:(FIRQuerySnapshotBlock)listener
    NS_SWIFT_NAME(addSnapshotListener(includeMetadataChanges:listener:));
// clang-format on

#pragma mark - Filtering Data
/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be equal to the specified value.
 *
 * @param field The name of the field to compare.
 * @param value The value the field must be equal to.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
                    isEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be equal to the specified value.
 *
 * @param path The path of the field to compare.
 * @param value The value the field must be equal to.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
                        isEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be less than the specified value.
 *
 * @param field The name of the field to compare.
 * @param value The value the field must be less than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
                   isLessThan:(id)value NS_SWIFT_NAME(whereField(_:isLessThan:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be less than the specified value.
 *
 * @param path The path of the field to compare.
 * @param value The value the field must be less than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
                       isLessThan:(id)value NS_SWIFT_NAME(whereField(_:isLessThan:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be less than or equal to the specified value.
 *
 * @param field The name of the field to compare
 * @param value The value the field must be less than or equal to.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
          isLessThanOrEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isLessThanOrEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be less than or equal to the specified value.
 *
 * @param path The path of the field to compare
 * @param value The value the field must be less than or equal to.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
              isLessThanOrEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isLessThanOrEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must greater than the specified value.
 *
 * @param field The name of the field to compare
 * @param value The value the field must be greater than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
                isGreaterThan:(id)value NS_SWIFT_NAME(whereField(_:isGreaterThan:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must greater than the specified value.
 *
 * @param path The path of the field to compare
 * @param value The value the field must be greater than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
                    isGreaterThan:(id)value NS_SWIFT_NAME(whereField(_:isGreaterThan:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be greater than or equal to the specified value.
 *
 * @param field The name of the field to compare
 * @param value The value the field must be greater than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
       isGreaterThanOrEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isGreaterThanOrEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * contain the specified field and the value must be greater than or equal to the specified value.
 *
 * @param path The path of the field to compare
 * @param value The value the field must be greater than.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
           isGreaterThanOrEqualTo:(id)value NS_SWIFT_NAME(whereField(_:isGreaterThanOrEqualTo:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field, it must be an array, and the array must contain the provided value.
 *
 * A query can have only one arrayContains filter.
 *
 * @param field The name of the field containing an array to search
 * @param value The value that must be contained in the array
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereField:(NSString *)field
                arrayContains:(id)value NS_SWIFT_NAME(whereField(_:arrayContains:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must contain
 * the specified field, it must be an array, and the array must contain the provided value.
 *
 * A query can have only one arrayContains filter.
 *
 * @param path The path of the field containing an array to search
 * @param value The value that must be contained in the array
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryWhereFieldPath:(FIRFieldPath *)path
                    arrayContains:(id)value NS_SWIFT_NAME(whereField(_:arrayContains:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` with the additional filter that documents must
 * satisfy the specified predicate.
 *
 * @param predicate The predicate the document must satisfy. Can be either comparison
 *     or compound of comparison. In particular, block-based predicate is not supported.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryFilteredUsingPredicate:(NSPredicate *)predicate NS_SWIFT_NAME(filter(using:));
// clang-format on

#pragma mark - Sorting Data
/**
 * Creates and returns a new `FIRQuery` that's additionally sorted by the specified field.
 *
 * @param field The field to sort by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryOrderedByField:(NSString *)field NS_SWIFT_NAME(order(by:));

/**
 * Creates and returns a new `FIRQuery` that's additionally sorted by the specified field.
 *
 * @param path The field to sort by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryOrderedByFieldPath:(FIRFieldPath *)path NS_SWIFT_NAME(order(by:));

/**
 * Creates and returns a new `FIRQuery` that's additionally sorted by the specified field,
 * optionally in descending order instead of ascending.
 *
 * @param field The field to sort by.
 * @param descending Whether to sort descending.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryOrderedByField:(NSString *)field
                       descending:(BOOL)descending NS_SWIFT_NAME(order(by:descending:));
// clang-format on

/**
 * Creates and returns a new `FIRQuery` that's additionally sorted by the specified field,
 * optionally in descending order instead of ascending.
 *
 * @param path The field to sort by.
 * @param descending Whether to sort descending.
 *
 * @return The created `FIRQuery`.
 */
// clang-format off
- (FIRQuery *)queryOrderedByFieldPath:(FIRFieldPath *)path
                           descending:(BOOL)descending NS_SWIFT_NAME(order(by:descending:));
// clang-format on

#pragma mark - Limiting Data
/**
 * Creates and returns a new `FIRQuery` that's additionally limited to only return up to
 * the specified number of documents.
 *
 * @param limit The maximum number of items to return.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryLimitedTo:(NSInteger)limit NS_SWIFT_NAME(limit(to:));

#pragma mark - Choosing Endpoints
/**
 * Creates and returns a new `FIRQuery` that starts at the provided document (inclusive). The
 * starting position is relative to the order of the query. The document must contain all of the
 * fields provided in the orderBy of this query.
 *
 * @param document The snapshot of the document to start at.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryStartingAtDocument:(FIRDocumentSnapshot *)document
    NS_SWIFT_NAME(start(atDocument:));

/**
 * Creates and returns a new `FIRQuery` that starts at the provided fields relative to the order of
 * the query. The order of the field values must match the order of the order by clauses of the
 * query.
 *
 * @param fieldValues The field values to start this query at, in order of the query's order by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryStartingAtValues:(NSArray *)fieldValues NS_SWIFT_NAME(start(at:));

/**
 * Creates and returns a new `FIRQuery` that starts after the provided document (exclusive). The
 * starting position is relative to the order of the query. The document must contain all of the
 * fields provided in the orderBy of this query.
 *
 * @param document The snapshot of the document to start after.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryStartingAfterDocument:(FIRDocumentSnapshot *)document
    NS_SWIFT_NAME(start(afterDocument:));

/**
 * Creates and returns a new `FIRQuery` that starts after the provided fields relative to the order
 * of the query. The order of the field values must match the order of the order by clauses of the
 * query.
 *
 * @param fieldValues The field values to start this query after, in order of the query's order
 *     by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryStartingAfterValues:(NSArray *)fieldValues NS_SWIFT_NAME(start(after:));

/**
 * Creates and returns a new `FIRQuery` that ends before the provided document (exclusive). The end
 * position is relative to the order of the query. The document must contain all of the fields
 * provided in the orderBy of this query.
 *
 * @param document The snapshot of the document to end before.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryEndingBeforeDocument:(FIRDocumentSnapshot *)document
    NS_SWIFT_NAME(end(beforeDocument:));

/**
 * Creates and returns a new `FIRQuery` that ends before the provided fields relative to the order
 * of the query. The order of the field values must match the order of the order by clauses of the
 * query.
 *
 * @param fieldValues The field values to end this query before, in order of the query's order by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryEndingBeforeValues:(NSArray *)fieldValues NS_SWIFT_NAME(end(before:));

/**
 * Creates and returns a new `FIRQuery` that ends at the provided document (exclusive). The end
 * position is relative to the order of the query. The document must contain all of the fields
 * provided in the orderBy of this query.
 *
 * @param document The snapshot of the document to end at.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryEndingAtDocument:(FIRDocumentSnapshot *)document NS_SWIFT_NAME(end(atDocument:));

/**
 * Creates and returns a new `FIRQuery` that ends at the provided fields relative to the order of
 * the query. The order of the field values must match the order of the order by clauses of the
 * query.
 *
 * @param fieldValues The field values to end this query at, in order of the query's order by.
 *
 * @return The created `FIRQuery`.
 */
- (FIRQuery *)queryEndingAtValues:(NSArray *)fieldValues NS_SWIFT_NAME(end(at:));

@end

NS_ASSUME_NONNULL_END

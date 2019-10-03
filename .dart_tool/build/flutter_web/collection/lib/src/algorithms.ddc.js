define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  const algorithms = Object.create(dart.library);
  const $length = dartx.length;
  const $rightShift = dartx['>>'];
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $setRange = dartx.setRange;
  const CT = Object.create(null);
  algorithms.binarySearch = function binarySearch(T, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(element, value);
      if (comp === 0) return mid;
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  algorithms.lowerBound = function lowerBound(T, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    let min = 0;
    let max = sortedList[$length];
    while (min < dart.notNull(max)) {
      let mid = min + (dart.notNull(max) - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(element, value);
      if (dart.notNull(comp) < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  };
  algorithms.shuffle = function shuffle(list, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    let random = math.Random.new();
    if (end == null) end = list[$length];
    let length = dart.notNull(end) - dart.notNull(start);
    while (length > 1) {
      let pos = random.nextInt(length);
      length = length - 1;
      let tmp1 = list[$_get](dart.notNull(start) + dart.notNull(pos));
      list[$_set](dart.notNull(start) + dart.notNull(pos), list[$_get](dart.notNull(start) + length));
      list[$_set](dart.notNull(start) + length, tmp1);
    }
  };
  algorithms.reverse = function reverse(list, start, end) {
    if (start === void 0) start = 0;
    if (end === void 0) end = null;
    if (end == null) end = list[$length];
    algorithms._reverse(list, start, end);
  };
  algorithms._reverse = function _reverse(list, start, end) {
    for (let i = start, j = dart.notNull(end) - 1; dart.notNull(i) < j; i = dart.notNull(i) + 1, j = j - 1) {
      let tmp = list[$_get](i);
      list[$_set](i, list[$_get](j));
      list[$_set](j, tmp);
    }
  };
  algorithms.insertionSort = function insertionSort(T, list, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    end == null ? end = list[$length] : null;
    for (let pos = dart.notNull(start) + 1; pos < dart.notNull(end); pos = pos + 1) {
      let min = start;
      let max = pos;
      let element = list[$_get](pos);
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        let comparison = compare(element, list[$_get](mid));
        if (dart.notNull(comparison) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      list[$setRange](dart.notNull(min) + 1, pos + 1, list, min);
      list[$_set](min, element);
    }
  };
  algorithms.mergeSort = function mergeSort(T, list, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    let compare = opts && 'compare' in opts ? opts.compare : null;
    end == null ? end = list[$length] : null;
    compare == null ? compare = utils.defaultCompare(T) : null;
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 2) return;
    if (length < 32) {
      algorithms.insertionSort(T, list, {compare: compare, start: start, end: end});
      return;
    }
    let middle = dart.notNull(start) + (dart.notNull(end) - dart.notNull(start))[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(T).new(secondLength);
    algorithms._mergeSort(T, list, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    algorithms._mergeSort(T, list, compare, start, middle, list, firstTarget);
    algorithms._merge(T, compare, list, firstTarget, end, scratchSpace, 0, secondLength, list, start);
  };
  algorithms._movingInsertionSort = function _movingInsertionSort(T, list, compare, start, end, target, targetOffset) {
    let length = dart.notNull(end) - dart.notNull(start);
    if (length === 0) return;
    target[$_set](targetOffset, list[$_get](start));
    for (let i = 1; i < length; i = i + 1) {
      let element = list[$_get](dart.notNull(start) + i);
      let min = targetOffset;
      let max = dart.notNull(targetOffset) + i;
      while (dart.notNull(min) < max) {
        let mid = dart.notNull(min) + (max - dart.notNull(min))[$rightShift](1);
        if (dart.notNull(compare(element, target[$_get](mid))) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      target[$setRange](dart.notNull(min) + 1, dart.notNull(targetOffset) + i + 1, target, min);
      target[$_set](min, element);
    }
  };
  algorithms._mergeSort = function _mergeSort(T, list, compare, start, end, target, targetOffset) {
    let length = dart.notNull(end) - dart.notNull(start);
    if (length < 32) {
      algorithms._movingInsertionSort(T, list, compare, start, end, target, targetOffset);
      return;
    }
    let middle = dart.notNull(start) + length[$rightShift](1);
    let firstLength = middle - dart.notNull(start);
    let secondLength = dart.notNull(end) - middle;
    let targetMiddle = dart.notNull(targetOffset) + firstLength;
    algorithms._mergeSort(T, list, compare, middle, end, target, targetMiddle);
    algorithms._mergeSort(T, list, compare, start, middle, list, middle);
    algorithms._merge(T, compare, list, middle, middle + firstLength, target, targetMiddle, targetMiddle + secondLength, target, targetOffset);
  };
  algorithms._merge = function _merge(T, compare, firstList, firstStart, firstEnd, secondList, secondStart, secondEnd, target, targetOffset) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
    if (!(dart.notNull(firstStart) < dart.notNull(firstEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/algorithms.dart", 255, 10, "firstStart < firstEnd");
    if (!(dart.notNull(secondStart) < dart.notNull(secondEnd))) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/algorithms.dart", 256, 10, "secondStart < secondEnd");
    let cursor1 = firstStart;
    let cursor2 = secondStart;
    let firstElement = firstList[$_get]((t0 = cursor1, cursor1 = dart.notNull(t0) + 1, t0));
    let secondElement = secondList[$_get]((t0$ = cursor2, cursor2 = dart.notNull(t0$) + 1, t0$));
    while (true) {
      if (dart.notNull(compare(firstElement, secondElement)) <= 0) {
        target[$_set]((t0$0 = targetOffset, targetOffset = dart.notNull(t0$0) + 1, t0$0), firstElement);
        if (cursor1 == firstEnd) break;
        firstElement = firstList[$_get]((t0$1 = cursor1, cursor1 = dart.notNull(t0$1) + 1, t0$1));
      } else {
        target[$_set]((t0$2 = targetOffset, targetOffset = dart.notNull(t0$2) + 1, t0$2), secondElement);
        if (cursor2 != secondEnd) {
          secondElement = secondList[$_get]((t0$3 = cursor2, cursor2 = dart.notNull(t0$3) + 1, t0$3));
          continue;
        }
        target[$_set]((t0$4 = targetOffset, targetOffset = dart.notNull(t0$4) + 1, t0$4), firstElement);
        target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(firstEnd) - dart.notNull(cursor1)), firstList, cursor1);
        return;
      }
    }
    target[$_set]((t0$5 = targetOffset, targetOffset = dart.notNull(t0$5) + 1, t0$5), secondElement);
    target[$setRange](targetOffset, dart.notNull(targetOffset) + (dart.notNull(secondEnd) - dart.notNull(cursor2)), secondList, cursor2);
  };
  dart.defineLazy(algorithms, {
    /*algorithms._MERGE_SORT_LIMIT*/get _MERGE_SORT_LIMIT() {
      return 32;
    }
  });
  dart.trackLibraries("packages/collection/src/algorithms", {
    "package:collection/src/algorithms.dart": algorithms
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["algorithms.dart"],"names":[],"mappings":"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","file":"algorithms.ddc.js"}');
  // Exports:
  return {
    src__algorithms: algorithms
  };
});

//# sourceMappingURL=algorithms.ddc.js.map

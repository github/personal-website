define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  const priority_queue = Object.create(dart.library);
  const $_get = dartx._get;
  const $take = dartx.take;
  const $length = dartx.length;
  const $setRange = dartx.setRange;
  const $sort = dartx.sort;
  const $toString = dartx.toString;
  const $isOdd = dartx.isOdd;
  const $rightShift = dartx['>>'];
  const $_set = dartx._set;
  const $truncate = dartx.truncate;
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], core.Null);
    }
  });
  const _is_PriorityQueue_default = Symbol('_is_PriorityQueue_default');
  priority_queue.PriorityQueue$ = dart.generic(E => {
    class PriorityQueue extends core.Object {}
    (PriorityQueue[dart.mixinNew] = function() {
    }).prototype = PriorityQueue.prototype;
    dart.addTypeTests(PriorityQueue);
    PriorityQueue.prototype[_is_PriorityQueue_default] = true;
    dart.setLibraryUri(PriorityQueue, "package:collection/src/priority_queue.dart");
    return PriorityQueue;
  });
  priority_queue.PriorityQueue = priority_queue.PriorityQueue$();
  dart.addTypeTests(priority_queue.PriorityQueue, _is_PriorityQueue_default);
  const _queue = dart.privateName(priority_queue, "_queue");
  const _length = dart.privateName(priority_queue, "_length");
  const _add = dart.privateName(priority_queue, "_add");
  let C0;
  const _locate = dart.privateName(priority_queue, "_locate");
  const _removeLast = dart.privateName(priority_queue, "_removeLast");
  const _bubbleUp = dart.privateName(priority_queue, "_bubbleUp");
  const _bubbleDown = dart.privateName(priority_queue, "_bubbleDown");
  const _grow = dart.privateName(priority_queue, "_grow");
  const _is_HeapPriorityQueue_default = Symbol('_is_HeapPriorityQueue_default');
  priority_queue.HeapPriorityQueue$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let SplayTreeSetOfE = () => (SplayTreeSetOfE = dart.constFn(collection.SplayTreeSet$(E)))();
    class HeapPriorityQueue extends core.Object {
      get comparison() {
        return this[comparison$];
      }
      set comparison(value) {
        super.comparison = value;
      }
      add(element) {
        E._check(element);
        this[_add](element);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        for (let element of elements) {
          this[_add](element);
        }
      }
      clear() {
        this[_queue] = C0 || CT.C0;
        this[_length] = 0;
      }
      contains(object) {
        E._check(object);
        return dart.notNull(this[_locate](object)) >= 0;
      }
      get first() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        return this[_queue][$_get](0);
      }
      get isEmpty() {
        return this[_length] === 0;
      }
      get isNotEmpty() {
        return this[_length] !== 0;
      }
      get length() {
        return this[_length];
      }
      remove(element) {
        E._check(element);
        let index = this[_locate](element);
        if (dart.notNull(index) < 0) return false;
        let last = this[_removeLast]();
        if (dart.notNull(index) < dart.notNull(this[_length])) {
          let comp = this.comparison(last, element);
          if (dart.notNull(comp) <= 0) {
            this[_bubbleUp](last, index);
          } else {
            this[_bubbleDown](last, index);
          }
        }
        return true;
      }
      removeAll() {
        let result = this[_queue];
        let length = this[_length];
        this[_queue] = C0 || CT.C0;
        this[_length] = 0;
        return result[$take](length);
      }
      removeFirst() {
        if (this[_length] === 0) dart.throw(new core.StateError.new("No such element"));
        let result = this[_queue][$_get](0);
        let last = this[_removeLast]();
        if (dart.notNull(this[_length]) > 0) {
          this[_bubbleDown](last, 0);
        }
        return result;
      }
      toList() {
        let t0;
        let list = (t0 = JSArrayOfE().of([]), t0[$length] = this[_length], t0);
        list[$setRange](0, this[_length], this[_queue]);
        list[$sort](this.comparison);
        return list;
      }
      toSet() {
        let set = new (SplayTreeSetOfE()).new(this.comparison);
        for (let i = 0; i < dart.notNull(this[_length]); i = i + 1) {
          set.add(this[_queue][$_get](i));
        }
        return set;
      }
      toString() {
        return dart.toString(this[_queue][$take](this[_length]));
      }
      [_add](element) {
        let t0;
        if (this[_length] == this[_queue][$length]) this[_grow]();
        this[_bubbleUp](element, (t0 = this[_length], this[_length] = dart.notNull(t0) + 1, t0));
      }
      [_locate](object) {
        if (this[_length] === 0) return -1;
        let position = 1;
        do {
          let index = position - 1;
          let element = this[_queue][$_get](index);
          let comp = this.comparison(element, object);
          if (comp === 0) return index;
          if (dart.notNull(comp) < 0) {
            let leftChildPosition = position * 2;
            if (leftChildPosition <= dart.notNull(this[_length])) {
              position = leftChildPosition;
              continue;
            }
          }
          do {
            while (position[$isOdd]) {
              position = position[$rightShift](1);
            }
            position = position + 1;
          } while (position > dart.notNull(this[_length]));
        } while (position !== 1);
        return -1;
      }
      [_removeLast]() {
        let newLength = dart.notNull(this[_length]) - 1;
        let last = this[_queue][$_get](newLength);
        this[_queue][$_set](newLength, null);
        this[_length] = newLength;
        return last;
      }
      [_bubbleUp](element, index) {
        while (dart.notNull(index) > 0) {
          let parentIndex = ((dart.notNull(index) - 1) / 2)[$truncate]();
          let parent = this[_queue][$_get](parentIndex);
          if (dart.notNull(this.comparison(element, parent)) > 0) break;
          this[_queue][$_set](index, parent);
          index = parentIndex;
        }
        this[_queue][$_set](index, element);
      }
      [_bubbleDown](element, index) {
        let rightChildIndex = dart.notNull(index) * 2 + 2;
        while (rightChildIndex < dart.notNull(this[_length])) {
          let leftChildIndex = rightChildIndex - 1;
          let leftChild = this[_queue][$_get](leftChildIndex);
          let rightChild = this[_queue][$_get](rightChildIndex);
          let comp = this.comparison(leftChild, rightChild);
          let minChildIndex = null;
          let minChild = null;
          if (dart.notNull(comp) < 0) {
            minChild = leftChild;
            minChildIndex = leftChildIndex;
          } else {
            minChild = rightChild;
            minChildIndex = rightChildIndex;
          }
          comp = this.comparison(element, minChild);
          if (dart.notNull(comp) <= 0) {
            this[_queue][$_set](index, element);
            return;
          }
          this[_queue][$_set](index, minChild);
          index = minChildIndex;
          rightChildIndex = dart.notNull(index) * 2 + 2;
        }
        let leftChildIndex = rightChildIndex - 1;
        if (leftChildIndex < dart.notNull(this[_length])) {
          let child = this[_queue][$_get](leftChildIndex);
          let comp = this.comparison(element, child);
          if (dart.notNull(comp) > 0) {
            this[_queue][$_set](index, child);
            index = leftChildIndex;
          }
        }
        this[_queue][$_set](index, element);
      }
      [_grow]() {
        let newCapacity = dart.notNull(this[_queue][$length]) * 2 + 1;
        if (newCapacity < 7) newCapacity = 7;
        let newQueue = ListOfE().new(newCapacity);
        newQueue[$setRange](0, this[_length], this[_queue]);
        this[_queue] = newQueue;
      }
    }
    (HeapPriorityQueue.new = function(comparison) {
      let t0;
      if (comparison === void 0) comparison = null;
      this[_queue] = ListOfE().new(7);
      this[_length] = 0;
      this[comparison$] = (t0 = comparison, t0 == null ? utils.defaultCompare(E) : t0);
      ;
    }).prototype = HeapPriorityQueue.prototype;
    dart.addTypeTests(HeapPriorityQueue);
    HeapPriorityQueue.prototype[_is_HeapPriorityQueue_default] = true;
    const comparison$ = Symbol("HeapPriorityQueue.comparison");
    HeapPriorityQueue[dart.implements] = () => [priority_queue.PriorityQueue$(E)];
    dart.setMethodSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getMethods(HeapPriorityQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      contains: dart.fnType(core.bool, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(core.Iterable$(E), []),
      removeFirst: dart.fnType(E, []),
      toList: dart.fnType(core.List$(E), []),
      toSet: dart.fnType(core.Set$(E), []),
      [_add]: dart.fnType(dart.void, [E]),
      [_locate]: dart.fnType(core.int, [E]),
      [_removeLast]: dart.fnType(E, []),
      [_bubbleUp]: dart.fnType(dart.void, [E, core.int]),
      [_bubbleDown]: dart.fnType(dart.void, [E, core.int]),
      [_grow]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getGetters(HeapPriorityQueue.__proto__),
      first: E,
      isEmpty: core.bool,
      isNotEmpty: core.bool,
      length: core.int
    }));
    dart.setLibraryUri(HeapPriorityQueue, "package:collection/src/priority_queue.dart");
    dart.setFieldSignature(HeapPriorityQueue, () => ({
      __proto__: dart.getFields(HeapPriorityQueue.__proto__),
      comparison: dart.finalFieldType(dart.fnType(core.int, [E, E])),
      [_queue]: dart.fieldType(core.List$(E)),
      [_length]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(HeapPriorityQueue, ['toString']);
    return HeapPriorityQueue;
  });
  priority_queue.HeapPriorityQueue = priority_queue.HeapPriorityQueue$();
  dart.defineLazy(priority_queue.HeapPriorityQueue, {
    /*priority_queue.HeapPriorityQueue._INITIAL_CAPACITY*/get _INITIAL_CAPACITY() {
      return 7;
    }
  });
  dart.addTypeTests(priority_queue.HeapPriorityQueue, _is_HeapPriorityQueue_default);
  dart.trackLibraries("packages/collection/src/priority_queue", {
    "package:collection/src/priority_queue.dart": priority_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["priority_queue.dart"],"names":[],"mappings":"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","file":"priority_queue.ddc.js"}');
  // Exports:
  return {
    src__priority_queue: priority_queue
  };
});

//# sourceMappingURL=priority_queue.ddc.js.map

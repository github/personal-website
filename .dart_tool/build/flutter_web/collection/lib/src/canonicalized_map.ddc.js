define(['dart_sdk', 'packages/collection/src/utils'], function(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const _internal = dart_sdk._internal;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  const empty_unmodifiable_set = Object.create(dart.library);
  const unmodifiable_wrappers = Object.create(dart.library);
  const wrappers = Object.create(dart.library);
  const canonicalized_map = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $isEmpty = dartx.isEmpty;
  const $singleWhere = dartx.singleWhere;
  const $noSuchMethod = dartx.noSuchMethod;
  const $cast = dartx.cast;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $plus = dartx['+'];
  const $add = dartx.add;
  const $addAll = dartx.addAll;
  const $asMap = dartx.asMap;
  const $clear = dartx.clear;
  const $fillRange = dartx.fillRange;
  const $getRange = dartx.getRange;
  const $indexOf = dartx.indexOf;
  const $indexWhere = dartx.indexWhere;
  const $insert = dartx.insert;
  const $insertAll = dartx.insertAll;
  const $lastIndexOf = dartx.lastIndexOf;
  const $lastIndexWhere = dartx.lastIndexWhere;
  const $length = dartx.length;
  const $remove = dartx.remove;
  const $removeAt = dartx.removeAt;
  const $removeLast = dartx.removeLast;
  const $removeRange = dartx.removeRange;
  const $removeWhere = dartx.removeWhere;
  const $replaceRange = dartx.replaceRange;
  const $retainWhere = dartx.retainWhere;
  const $reversed = dartx.reversed;
  const $setAll = dartx.setAll;
  const $setRange = dartx.setRange;
  const $shuffle = dartx.shuffle;
  const $sort = dartx.sort;
  const $sublist = dartx.sublist;
  const $any = dartx.any;
  const $contains = dartx.contains;
  const $elementAt = dartx.elementAt;
  const $every = dartx.every;
  const $expand = dartx.expand;
  const $first = dartx.first;
  const $firstWhere = dartx.firstWhere;
  const $fold = dartx.fold;
  const $followedBy = dartx.followedBy;
  const $forEach = dartx.forEach;
  const $isNotEmpty = dartx.isNotEmpty;
  const $join = dartx.join;
  const $last = dartx.last;
  const $lastWhere = dartx.lastWhere;
  const $map = dartx.map;
  const $reduce = dartx.reduce;
  const $single = dartx.single;
  const $skip = dartx.skip;
  const $skipWhile = dartx.skipWhile;
  const $take = dartx.take;
  const $takeWhile = dartx.takeWhile;
  const $toList = dartx.toList;
  const $toSet = dartx.toSet;
  const $where = dartx.where;
  const $whereType = dartx.whereType;
  const $toString = dartx.toString;
  const $putIfAbsent = dartx.putIfAbsent;
  const $addEntries = dartx.addEntries;
  const $containsKey = dartx.containsKey;
  const $containsValue = dartx.containsValue;
  const $entries = dartx.entries;
  const $keys = dartx.keys;
  const $values = dartx.values;
  const $update = dartx.update;
  const $updateAll = dartx.updateAll;
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const(new _js_helper.PrivateSymbol.new('_base', _base));
    },
    get C1() {
      return C1 = dart.const(new _js_helper.PrivateSymbol.new('_setBase', _setBase));
    }
  });
  const _base = dart.privateName(empty_unmodifiable_set, "_base");
  let C0;
  const _base$ = dart.privateName(wrappers, "_base");
  const _setBase = dart.privateName(empty_unmodifiable_set, "_setBase");
  let C1;
  const _setBase$ = dart.privateName(wrappers, "_setBase");
  const _is_EmptyUnmodifiableSet_default = Symbol('_is_EmptyUnmodifiableSet_default');
  empty_unmodifiable_set.EmptyUnmodifiableSet$ = dart.generic(E => {
    let EmptyIterableOfE = () => (EmptyIterableOfE = dart.constFn(_internal.EmptyIterable$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let LinkedHashSetOfE = () => (LinkedHashSetOfE = dart.constFn(collection.LinkedHashSet$(E)))();
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let _HashSetOfE = () => (_HashSetOfE = dart.constFn(collection._HashSet$(E)))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    class EmptyUnmodifiableSet extends collection.IterableBase$(E) {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      get iterator() {
        return new (EmptyIterableOfE()).new()[$iterator];
      }
      get length() {
        return 0;
      }
      cast(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      contains(element) {
        return false;
      }
      containsAll(other) {
        return other[$isEmpty];
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return LinkedHashSetOfE().from(other);
      }
      lookup(element) {
        return null;
      }
      retype(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return super[$singleWhere](test);
      }
      whereType(T) {
        return new (empty_unmodifiable_set.EmptyUnmodifiableSet$(T)).new();
      }
      toSet() {
        return new (_HashSetOfE()).new();
      }
      union(other) {
        SetOfE()._check(other);
        return LinkedHashSetOfE().from(other);
      }
      intersection(other) {
        return new (_HashSetOfE()).new();
      }
      difference(other) {
        return new (_HashSetOfE()).new();
      }
      add(value) {
        E._check(value);
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      clear() {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      remove(element) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(core.bool);
      }
      removeAll(elements) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      removeWhere(test) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainWhere(test) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      retainAll(elements) {
        return empty_unmodifiable_set.EmptyUnmodifiableSet._throw(dart.void);
      }
      get [_base$]() {
        return IterableOfE()._check(this[$noSuchMethod](new core._Invocation.getter(C0 || CT.C0)));
      }
      get [_setBase$]() {
        return SetOfE()._check(this[$noSuchMethod](new core._Invocation.getter(C1 || CT.C1)));
      }
    }
    (EmptyUnmodifiableSet.new = function() {
      EmptyUnmodifiableSet.__proto__.new.call(this);
      ;
    }).prototype = EmptyUnmodifiableSet.prototype;
    dart.addTypeTests(EmptyUnmodifiableSet);
    EmptyUnmodifiableSet.prototype[_is_EmptyUnmodifiableSet_default] = true;
    EmptyUnmodifiableSet[dart.implements] = () => [unmodifiable_wrappers.UnmodifiableSetView$(E)];
    dart.setMethodSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getMethods(EmptyUnmodifiableSet.__proto__),
      cast: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      [$cast]: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [empty_unmodifiable_set.EmptyUnmodifiableSet$(T), []]),
      union: dart.fnType(core.Set$(E), [core.Object]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)])
    }));
    dart.setGetterSignature(EmptyUnmodifiableSet, () => ({
      __proto__: dart.getGetters(EmptyUnmodifiableSet.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      [_base$]: core.Iterable$(E),
      [_setBase$]: core.Set$(E)
    }));
    dart.setLibraryUri(EmptyUnmodifiableSet, "package:collection/src/empty_unmodifiable_set.dart");
    dart.defineExtensionMethods(EmptyUnmodifiableSet, [
      'cast',
      'contains',
      'followedBy',
      'singleWhere',
      'whereType',
      'toSet'
    ]);
    dart.defineExtensionAccessors(EmptyUnmodifiableSet, ['iterator', 'length']);
    return EmptyUnmodifiableSet;
  });
  empty_unmodifiable_set.EmptyUnmodifiableSet = empty_unmodifiable_set.EmptyUnmodifiableSet$();
  dart.addTypeTests(empty_unmodifiable_set.EmptyUnmodifiableSet, _is_EmptyUnmodifiableSet_default);
  const _listBase = dart.privateName(wrappers, "_listBase");
  const _is__DelegatingIterableBase_default = Symbol('_is__DelegatingIterableBase_default');
  wrappers._DelegatingIterableBase$ = dart.generic(E => {
    let VoidToE = () => (VoidToE = dart.constFn(dart.fnType(E, [])))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let EAndEToE = () => (EAndEToE = dart.constFn(dart.fnType(E, [E, E])))();
    class _DelegatingIterableBase extends core.Object {
      any(test) {
        return this[_base$][$any](test);
      }
      cast(T) {
        return this[_base$][$cast](T);
      }
      contains(element) {
        return this[_base$][$contains](element);
      }
      elementAt(index) {
        return this[_base$][$elementAt](index);
      }
      every(test) {
        return this[_base$][$every](test);
      }
      expand(T, f) {
        return this[_base$][$expand](T, f);
      }
      get first() {
        return this[_base$][$first];
      }
      firstWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$firstWhere](test, {orElse: orElse});
      }
      fold(T, initialValue, combine) {
        return this[_base$][$fold](T, initialValue, combine);
      }
      followedBy(other) {
        IterableOfE()._check(other);
        return this[_base$][$followedBy](other);
      }
      forEach(f) {
        return this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get iterator() {
        return this[_base$][$iterator];
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return this[_base$][$join](separator);
      }
      get last() {
        return this[_base$][$last];
      }
      lastWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$lastWhere](test, {orElse: orElse});
      }
      get length() {
        return this[_base$][$length];
      }
      map(T, f) {
        return this[_base$][$map](T, f);
      }
      reduce(combine) {
        EAndEToE()._check(combine);
        return this[_base$][$reduce](combine);
      }
      retype(T) {
        return this.cast(T);
      }
      get single() {
        return this[_base$][$single];
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToE()._check(orElse);
        return this[_base$][$singleWhere](test, {orElse: orElse});
      }
      skip(n) {
        return this[_base$][$skip](n);
      }
      skipWhile(test) {
        return this[_base$][$skipWhile](test);
      }
      take(n) {
        return this[_base$][$take](n);
      }
      takeWhile(test) {
        return this[_base$][$takeWhile](test);
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        return this[_base$][$toList]({growable: growable});
      }
      toSet() {
        return this[_base$][$toSet]();
      }
      where(test) {
        return this[_base$][$where](test);
      }
      whereType(T) {
        return this[_base$][$whereType](T);
      }
      toString() {
        return dart.toString(this[_base$]);
      }
    }
    (_DelegatingIterableBase.new = function() {
      ;
    }).prototype = _DelegatingIterableBase.prototype;
    _DelegatingIterableBase.prototype[dart.isIterable] = true;
    dart.addTypeTests(_DelegatingIterableBase);
    _DelegatingIterableBase.prototype[_is__DelegatingIterableBase_default] = true;
    _DelegatingIterableBase[dart.implements] = () => [core.Iterable$(E)];
    dart.setMethodSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getMethods(_DelegatingIterableBase.__proto__),
      any: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$any]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      cast: dart.gFnType(T => [core.Iterable$(T), []]),
      [$cast]: dart.gFnType(T => [core.Iterable$(T), []]),
      contains: dart.fnType(core.bool, [core.Object]),
      [$contains]: dart.fnType(core.bool, [core.Object]),
      elementAt: dart.fnType(E, [core.int]),
      [$elementAt]: dart.fnType(E, [core.int]),
      every: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      [$every]: dart.fnType(core.bool, [dart.fnType(core.bool, [E])]),
      expand: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      [$expand]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(core.Iterable$(T), [E])]]),
      firstWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$firstWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      fold: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      [$fold]: dart.gFnType(T => [T, [T, dart.fnType(T, [T, E])]]),
      followedBy: dart.fnType(core.Iterable$(E), [core.Object]),
      [$followedBy]: dart.fnType(core.Iterable$(E), [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [E])]),
      join: dart.fnType(core.String, [], [core.String]),
      [$join]: dart.fnType(core.String, [], [core.String]),
      lastWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$lastWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      map: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      [$map]: dart.gFnType(T => [core.Iterable$(T), [dart.fnType(T, [E])]]),
      reduce: dart.fnType(E, [core.Object]),
      [$reduce]: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Iterable$(T), []]),
      singleWhere: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      [$singleWhere]: dart.fnType(E, [dart.fnType(core.bool, [E])], {orElse: core.Object}),
      skip: dart.fnType(core.Iterable$(E), [core.int]),
      [$skip]: dart.fnType(core.Iterable$(E), [core.int]),
      skipWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$skipWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      take: dart.fnType(core.Iterable$(E), [core.int]),
      [$take]: dart.fnType(core.Iterable$(E), [core.int]),
      takeWhile: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$takeWhile]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      toList: dart.fnType(core.List$(E), [], {growable: core.bool}),
      [$toList]: dart.fnType(core.List$(E), [], {growable: core.bool}),
      toSet: dart.fnType(core.Set$(E), []),
      [$toSet]: dart.fnType(core.Set$(E), []),
      where: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      [$where]: dart.fnType(core.Iterable$(E), [dart.fnType(core.bool, [E])]),
      whereType: dart.gFnType(T => [core.Iterable$(T), []]),
      [$whereType]: dart.gFnType(T => [core.Iterable$(T), []])
    }));
    dart.setGetterSignature(_DelegatingIterableBase, () => ({
      __proto__: dart.getGetters(_DelegatingIterableBase.__proto__),
      first: E,
      [$first]: E,
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E),
      last: E,
      [$last]: E,
      length: core.int,
      [$length]: core.int,
      single: E,
      [$single]: E
    }));
    dart.setLibraryUri(_DelegatingIterableBase, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(_DelegatingIterableBase, [
      'any',
      'cast',
      'contains',
      'elementAt',
      'every',
      'expand',
      'firstWhere',
      'fold',
      'followedBy',
      'forEach',
      'join',
      'lastWhere',
      'map',
      'reduce',
      'singleWhere',
      'skip',
      'skipWhile',
      'take',
      'takeWhile',
      'toList',
      'toSet',
      'where',
      'whereType',
      'toString'
    ]);
    dart.defineExtensionAccessors(_DelegatingIterableBase, [
      'first',
      'isEmpty',
      'isNotEmpty',
      'iterator',
      'last',
      'length',
      'single'
    ]);
    return _DelegatingIterableBase;
  });
  wrappers._DelegatingIterableBase = wrappers._DelegatingIterableBase$();
  dart.addTypeTests(wrappers._DelegatingIterableBase, _is__DelegatingIterableBase_default);
  const _is_DelegatingIterable_default = Symbol('_is_DelegatingIterable_default');
  wrappers.DelegatingIterable$ = dart.generic(E => {
    class DelegatingIterable extends wrappers._DelegatingIterableBase$(E) {
      get [_base$]() {
        return this[_base];
      }
      set [_base$](value) {
        super[_base$] = value;
      }
      static typed(E, base) {
        return base[$cast](E);
      }
    }
    (DelegatingIterable.new = function(base) {
      this[_base] = base;
      DelegatingIterable.__proto__.new.call(this);
      ;
    }).prototype = DelegatingIterable.prototype;
    dart.addTypeTests(DelegatingIterable);
    DelegatingIterable.prototype[_is_DelegatingIterable_default] = true;
    const _base = Symbol("DelegatingIterable._base");
    dart.setLibraryUri(DelegatingIterable, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(DelegatingIterable, () => ({
      __proto__: dart.getFields(DelegatingIterable.__proto__),
      [_base$]: dart.finalFieldType(core.Iterable$(E))
    }));
    return DelegatingIterable;
  });
  wrappers.DelegatingIterable = wrappers.DelegatingIterable$();
  dart.addTypeTests(wrappers.DelegatingIterable, _is_DelegatingIterable_default);
  const _is_DelegatingList_default = Symbol('_is_DelegatingList_default');
  wrappers.DelegatingList$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingList extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base[$cast](E);
      }
      get [_listBase]() {
        return ListOfE()._check(this[_base$]);
      }
      _get(index) {
        return this[_listBase][$_get](index);
      }
      _set(index, value$) {
        let value = value$;
        E._check(value);
        this[_listBase][$_set](index, value);
        return value$;
      }
      ['+'](other) {
        ListOfE()._check(other);
        return this[_listBase][$plus](other);
      }
      add(value) {
        E._check(value);
        this[_listBase][$add](value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$addAll](iterable);
      }
      asMap() {
        return this[_listBase][$asMap]();
      }
      cast(T) {
        return this[_listBase][$cast](T);
      }
      clear() {
        this[_listBase][$clear]();
      }
      fillRange(start, end, fillValue) {
        if (fillValue === void 0) fillValue = null;
        E._check(fillValue);
        this[_listBase][$fillRange](start, end, fillValue);
      }
      set first(value) {
        E._check(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(0, value);
      }
      get first() {
        return super.first;
      }
      getRange(start, end) {
        return this[_listBase][$getRange](start, end);
      }
      indexOf(element, start) {
        E._check(element);
        if (start === void 0) start = 0;
        return this[_listBase][$indexOf](element, start);
      }
      indexWhere(test, start) {
        if (start === void 0) start = 0;
        return this[_listBase][$indexWhere](test, start);
      }
      insert(index, element) {
        E._check(element);
        this[_listBase][$insert](index, element);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$insertAll](index, iterable);
      }
      set last(value) {
        E._check(value);
        if (dart.test(this.isEmpty)) dart.throw(new core.IndexError.new(0, this));
        this._set(dart.notNull(this.length) - 1, value);
      }
      get last() {
        return super.last;
      }
      lastIndexOf(element, start) {
        E._check(element);
        if (start === void 0) start = null;
        return this[_listBase][$lastIndexOf](element, start);
      }
      lastIndexWhere(test, start) {
        if (start === void 0) start = null;
        return this[_listBase][$lastIndexWhere](test, start);
      }
      set length(newLength) {
        this[_listBase][$length] = newLength;
      }
      get length() {
        return super.length;
      }
      remove(value) {
        return this[_listBase][$remove](value);
      }
      removeAt(index) {
        return this[_listBase][$removeAt](index);
      }
      removeLast() {
        return this[_listBase][$removeLast]();
      }
      removeRange(start, end) {
        this[_listBase][$removeRange](start, end);
      }
      removeWhere(test) {
        this[_listBase][$removeWhere](test);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$replaceRange](start, end, iterable);
      }
      retainWhere(test) {
        this[_listBase][$retainWhere](test);
      }
      retype(T) {
        return this.cast(T);
      }
      get reversed() {
        return this[_listBase][$reversed];
      }
      setAll(index, iterable) {
        IterableOfE()._check(iterable);
        this[_listBase][$setAll](index, iterable);
      }
      setRange(start, end, iterable, skipCount) {
        IterableOfE()._check(iterable);
        if (skipCount === void 0) skipCount = 0;
        this[_listBase][$setRange](start, end, iterable, skipCount);
      }
      shuffle(random) {
        if (random === void 0) random = null;
        this[_listBase][$shuffle](random);
      }
      sort(compare) {
        if (compare === void 0) compare = null;
        this[_listBase][$sort](compare);
      }
      sublist(start, end) {
        if (end === void 0) end = null;
        return this[_listBase][$sublist](start, end);
      }
    }
    (DelegatingList.new = function(base) {
      DelegatingList.__proto__.new.call(this, base);
      ;
    }).prototype = DelegatingList.prototype;
    DelegatingList.prototype[dart.isList] = true;
    dart.addTypeTests(DelegatingList);
    DelegatingList.prototype[_is_DelegatingList_default] = true;
    DelegatingList[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(DelegatingList, () => ({
      __proto__: dart.getMethods(DelegatingList.__proto__),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.int, core.Object]),
      '+': dart.fnType(core.List$(E), [core.Object]),
      [$plus]: dart.fnType(core.List$(E), [core.Object]),
      add: dart.fnType(dart.void, [core.Object]),
      [$add]: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      asMap: dart.fnType(core.Map$(core.int, E), []),
      [$asMap]: dart.fnType(core.Map$(core.int, E), []),
      cast: dart.gFnType(T => [core.List$(T), []]),
      [$cast]: dart.gFnType(T => [core.List$(T), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      fillRange: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      [$fillRange]: dart.fnType(dart.void, [core.int, core.int], [core.Object]),
      getRange: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      [$getRange]: dart.fnType(core.Iterable$(E), [core.int, core.int]),
      indexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$indexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      indexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$indexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      lastIndexOf: dart.fnType(core.int, [core.Object], [core.int]),
      [$lastIndexOf]: dart.fnType(core.int, [core.Object], [core.int]),
      lastIndexWhere: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      [$lastIndexWhere]: dart.fnType(core.int, [dart.fnType(core.bool, [E])], [core.int]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [core.List$(T), []]),
      setAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$setAll]: dart.fnType(dart.void, [core.int, core.Object]),
      setRange: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      [$setRange]: dart.fnType(dart.void, [core.int, core.int, core.Object], [core.int]),
      shuffle: dart.fnType(dart.void, [], [math.Random]),
      [$shuffle]: dart.fnType(dart.void, [], [math.Random]),
      sort: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      [$sort]: dart.fnType(dart.void, [], [dart.fnType(core.int, [E, E])]),
      sublist: dart.fnType(core.List$(E), [core.int], [core.int]),
      [$sublist]: dart.fnType(core.List$(E), [core.int], [core.int])
    }));
    dart.setGetterSignature(DelegatingList, () => ({
      __proto__: dart.getGetters(DelegatingList.__proto__),
      [_listBase]: core.List$(E),
      reversed: core.Iterable$(E),
      [$reversed]: core.Iterable$(E)
    }));
    dart.setSetterSignature(DelegatingList, () => ({
      __proto__: dart.getSetters(DelegatingList.__proto__),
      first: core.Object,
      [$first]: core.Object,
      last: core.Object,
      [$last]: core.Object,
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(DelegatingList, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingList, [
      '_get',
      '_set',
      '+',
      'add',
      'addAll',
      'asMap',
      'cast',
      'clear',
      'fillRange',
      'getRange',
      'indexOf',
      'indexWhere',
      'insert',
      'insertAll',
      'lastIndexOf',
      'lastIndexWhere',
      'remove',
      'removeAt',
      'removeLast',
      'removeRange',
      'removeWhere',
      'replaceRange',
      'retainWhere',
      'setAll',
      'setRange',
      'shuffle',
      'sort',
      'sublist'
    ]);
    dart.defineExtensionAccessors(DelegatingList, ['first', 'last', 'length', 'reversed']);
    return DelegatingList;
  });
  wrappers.DelegatingList = wrappers.DelegatingList$();
  dart.addTypeTests(wrappers.DelegatingList, _is_DelegatingList_default);
  const _is_NonGrowableListMixin_default = Symbol('_is_NonGrowableListMixin_default');
  unmodifiable_wrappers.NonGrowableListMixin$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class NonGrowableListMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot change the length of a fixed-length list"));
      }
      set length(newLength) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      add(value) {
        E._check(value);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insert(index, element) {
        E._check(element);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      insertAll(index, iterable) {
        IterableOfE()._check(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      remove(value) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(core.bool);
      }
      removeAt(index) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeLast() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(E);
      }
      removeWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      retainWhere(test) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      removeRange(start, end) {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      replaceRange(start, end, iterable) {
        IterableOfE()._check(iterable);
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      clear() {
        return unmodifiable_wrappers.NonGrowableListMixin._throw(dart.void);
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (NonGrowableListMixin.new = function() {
      ;
    }).prototype = NonGrowableListMixin.prototype;
    NonGrowableListMixin.prototype[dart.isList] = true;
    dart.addTypeTests(NonGrowableListMixin);
    NonGrowableListMixin.prototype[_is_NonGrowableListMixin_default] = true;
    NonGrowableListMixin[dart.implements] = () => [core.List$(E)];
    dart.setMethodSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getMethods(NonGrowableListMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      [$add]: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      insert: dart.fnType(dart.void, [core.int, core.Object]),
      [$insert]: dart.fnType(dart.void, [core.int, core.Object]),
      insertAll: dart.fnType(dart.void, [core.int, core.Object]),
      [$insertAll]: dart.fnType(dart.void, [core.int, core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      [$remove]: dart.fnType(core.bool, [core.Object]),
      removeAt: dart.fnType(E, [core.int]),
      [$removeAt]: dart.fnType(E, [core.int]),
      removeLast: dart.fnType(E, []),
      [$removeLast]: dart.fnType(E, []),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      [$retainWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      removeRange: dart.fnType(dart.void, [core.int, core.int]),
      [$removeRange]: dart.fnType(dart.void, [core.int, core.int]),
      replaceRange: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      [$replaceRange]: dart.fnType(dart.void, [core.int, core.int, core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(NonGrowableListMixin, () => ({
      __proto__: dart.getSetters(NonGrowableListMixin.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(NonGrowableListMixin, "package:collection/src/unmodifiable_wrappers.dart");
    dart.defineExtensionMethods(NonGrowableListMixin, [
      'add',
      'addAll',
      'insert',
      'insertAll',
      'remove',
      'removeAt',
      'removeLast',
      'removeWhere',
      'retainWhere',
      'removeRange',
      'replaceRange',
      'clear'
    ]);
    dart.defineExtensionAccessors(NonGrowableListMixin, ['length']);
    return NonGrowableListMixin;
  });
  unmodifiable_wrappers.NonGrowableListMixin = unmodifiable_wrappers.NonGrowableListMixin$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListMixin, _is_NonGrowableListMixin_default);
  const _is_NonGrowableListView_default = Symbol('_is_NonGrowableListView_default');
  unmodifiable_wrappers.NonGrowableListView$ = dart.generic(E => {
    const DelegatingList_NonGrowableListMixin$ = class DelegatingList_NonGrowableListMixin extends wrappers.DelegatingList$(E) {};
    (DelegatingList_NonGrowableListMixin$.new = function(base) {
      DelegatingList_NonGrowableListMixin$.__proto__.new.call(this, base);
    }).prototype = DelegatingList_NonGrowableListMixin$.prototype;
    dart.applyMixin(DelegatingList_NonGrowableListMixin$, unmodifiable_wrappers.NonGrowableListMixin$(E));
    class NonGrowableListView extends DelegatingList_NonGrowableListMixin$ {}
    (NonGrowableListView.new = function(listBase) {
      NonGrowableListView.__proto__.new.call(this, listBase);
      ;
    }).prototype = NonGrowableListView.prototype;
    dart.addTypeTests(NonGrowableListView);
    NonGrowableListView.prototype[_is_NonGrowableListView_default] = true;
    dart.setLibraryUri(NonGrowableListView, "package:collection/src/unmodifiable_wrappers.dart");
    return NonGrowableListView;
  });
  unmodifiable_wrappers.NonGrowableListView = unmodifiable_wrappers.NonGrowableListView$();
  dart.addTypeTests(unmodifiable_wrappers.NonGrowableListView, _is_NonGrowableListView_default);
  const _is_DelegatingSet_default = Symbol('_is_DelegatingSet_default');
  wrappers.DelegatingSet$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    let DelegatingSetOfE = () => (DelegatingSetOfE = dart.constFn(wrappers.DelegatingSet$(E)))();
    class DelegatingSet extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base.cast(E);
      }
      get [_setBase$]() {
        return SetOfE()._check(this[_base$]);
      }
      add(value) {
        E._check(value);
        return this[_setBase$].add(value);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        this[_setBase$].addAll(elements);
      }
      cast(T) {
        return this[_setBase$].cast(T);
      }
      clear() {
        this[_setBase$].clear();
      }
      containsAll(other) {
        return this[_setBase$].containsAll(other);
      }
      difference(other) {
        return this[_setBase$].difference(other);
      }
      intersection(other) {
        return this[_setBase$].intersection(other);
      }
      lookup(element) {
        return this[_setBase$].lookup(element);
      }
      remove(value) {
        return this[_setBase$].remove(value);
      }
      removeAll(elements) {
        this[_setBase$].removeAll(elements);
      }
      removeWhere(test) {
        this[_setBase$].removeWhere(test);
      }
      retainAll(elements) {
        this[_setBase$].retainAll(elements);
      }
      retype(T) {
        return this.cast(T);
      }
      retainWhere(test) {
        this[_setBase$].retainWhere(test);
      }
      union(other) {
        SetOfE()._check(other);
        return this[_setBase$].union(other);
      }
      toSet() {
        return new (DelegatingSetOfE()).new(this[_setBase$].toSet());
      }
    }
    (DelegatingSet.new = function(base) {
      DelegatingSet.__proto__.new.call(this, base);
      ;
    }).prototype = DelegatingSet.prototype;
    dart.addTypeTests(DelegatingSet);
    DelegatingSet.prototype[_is_DelegatingSet_default] = true;
    DelegatingSet[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(DelegatingSet, () => ({
      __proto__: dart.getMethods(DelegatingSet.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(DelegatingSet, () => ({
      __proto__: dart.getGetters(DelegatingSet.__proto__),
      [_setBase$]: core.Set$(E)
    }));
    dart.setLibraryUri(DelegatingSet, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingSet, ['cast', 'toSet']);
    return DelegatingSet;
  });
  wrappers.DelegatingSet = wrappers.DelegatingSet$();
  dart.addTypeTests(wrappers.DelegatingSet, _is_DelegatingSet_default);
  const _is_UnmodifiableSetMixin_default = Symbol('_is_UnmodifiableSetMixin_default');
  unmodifiable_wrappers.UnmodifiableSetMixin$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class UnmodifiableSetMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Set"));
      }
      add(value) {
        E._check(value);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      addAll(elements) {
        IterableOfE()._check(elements);
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      remove(value) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(core.bool);
      }
      removeAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainAll(elements) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      removeWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      retainWhere(test) {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableSetMixin._throw(dart.void);
      }
      [Symbol.iterator]() {
        return new dart.JsIterator(this[$iterator]);
      }
    }
    (UnmodifiableSetMixin.new = function() {
      ;
    }).prototype = UnmodifiableSetMixin.prototype;
    dart.addTypeTests(UnmodifiableSetMixin);
    UnmodifiableSetMixin.prototype[_is_UnmodifiableSetMixin_default] = true;
    UnmodifiableSetMixin[dart.implements] = () => [core.Set$(E)];
    dart.setMethodSignature(UnmodifiableSetMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableSetMixin.__proto__),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable]),
      retainAll: dart.fnType(dart.void, [core.Iterable]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      clear: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(UnmodifiableSetMixin, "package:collection/src/unmodifiable_wrappers.dart");
    return UnmodifiableSetMixin;
  });
  unmodifiable_wrappers.UnmodifiableSetMixin = unmodifiable_wrappers.UnmodifiableSetMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetMixin, _is_UnmodifiableSetMixin_default);
  const _is_UnmodifiableSetView_default = Symbol('_is_UnmodifiableSetView_default');
  unmodifiable_wrappers.UnmodifiableSetView$ = dart.generic(E => {
    const DelegatingSet_UnmodifiableSetMixin$ = class DelegatingSet_UnmodifiableSetMixin extends wrappers.DelegatingSet$(E) {};
    (DelegatingSet_UnmodifiableSetMixin$.new = function(base) {
      DelegatingSet_UnmodifiableSetMixin$.__proto__.new.call(this, base);
    }).prototype = DelegatingSet_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(DelegatingSet_UnmodifiableSetMixin$, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class UnmodifiableSetView extends DelegatingSet_UnmodifiableSetMixin$ {}
    (UnmodifiableSetView.new = function(setBase) {
      UnmodifiableSetView.__proto__.new.call(this, setBase);
      ;
    }).prototype = UnmodifiableSetView.prototype;
    dart.addTypeTests(UnmodifiableSetView);
    UnmodifiableSetView.prototype[_is_UnmodifiableSetView_default] = true;
    dart.setLibraryUri(UnmodifiableSetView, "package:collection/src/unmodifiable_wrappers.dart");
    return UnmodifiableSetView;
  });
  unmodifiable_wrappers.UnmodifiableSetView = unmodifiable_wrappers.UnmodifiableSetView$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableSetView, _is_UnmodifiableSetView_default);
  const _is_UnmodifiableMapMixin_default = Symbol('_is_UnmodifiableMapMixin_default');
  unmodifiable_wrappers.UnmodifiableMapMixin$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    class UnmodifiableMapMixin extends core.Object {
      static _throw(T) {
        dart.throw(new core.UnsupportedError.new("Cannot modify an unmodifiable Map"));
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
        return value$;
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      addAll(other) {
        MapOfK$V()._check(other);
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      remove(key) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(V);
      }
      clear() {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set first(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
      set last(_) {
        return unmodifiable_wrappers.UnmodifiableMapMixin._throw(dart.void);
      }
    }
    (UnmodifiableMapMixin.new = function() {
      ;
    }).prototype = UnmodifiableMapMixin.prototype;
    UnmodifiableMapMixin.prototype[dart.isMap] = true;
    dart.addTypeTests(UnmodifiableMapMixin);
    UnmodifiableMapMixin.prototype[_is_UnmodifiableMapMixin_default] = true;
    UnmodifiableMapMixin[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getMethods(UnmodifiableMapMixin.__proto__),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, [])
    }));
    dart.setSetterSignature(UnmodifiableMapMixin, () => ({
      __proto__: dart.getSetters(UnmodifiableMapMixin.__proto__),
      first: dart.dynamic,
      last: dart.dynamic
    }));
    dart.setLibraryUri(UnmodifiableMapMixin, "package:collection/src/unmodifiable_wrappers.dart");
    dart.defineExtensionMethods(UnmodifiableMapMixin, [
      '_set',
      'putIfAbsent',
      'addAll',
      'remove',
      'clear'
    ]);
    return UnmodifiableMapMixin;
  });
  unmodifiable_wrappers.UnmodifiableMapMixin = unmodifiable_wrappers.UnmodifiableMapMixin$();
  dart.addTypeTests(unmodifiable_wrappers.UnmodifiableMapMixin, _is_UnmodifiableMapMixin_default);
  const _baseQueue = dart.privateName(wrappers, "_baseQueue");
  const _is_DelegatingQueue_default = Symbol('_is_DelegatingQueue_default');
  wrappers.DelegatingQueue$ = dart.generic(E => {
    let QueueOfE = () => (QueueOfE = dart.constFn(collection.Queue$(E)))();
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class DelegatingQueue extends wrappers.DelegatingIterable$(E) {
      static typed(E, base) {
        return base.cast(E);
      }
      get [_baseQueue]() {
        return QueueOfE()._check(this[_base$]);
      }
      add(value) {
        E._check(value);
        this[_baseQueue].add(value);
      }
      addAll(iterable) {
        IterableOfE()._check(iterable);
        this[_baseQueue].addAll(iterable);
      }
      addFirst(value) {
        E._check(value);
        this[_baseQueue].addFirst(value);
      }
      addLast(value) {
        E._check(value);
        this[_baseQueue].addLast(value);
      }
      cast(T) {
        return this[_baseQueue].cast(T);
      }
      clear() {
        this[_baseQueue].clear();
      }
      remove(object) {
        return this[_baseQueue].remove(object);
      }
      removeWhere(test) {
        this[_baseQueue].removeWhere(test);
      }
      retainWhere(test) {
        this[_baseQueue].retainWhere(test);
      }
      retype(T) {
        return this.cast(T);
      }
      removeFirst() {
        return this[_baseQueue].removeFirst();
      }
      removeLast() {
        return this[_baseQueue].removeLast();
      }
    }
    (DelegatingQueue.new = function(queue) {
      DelegatingQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = DelegatingQueue.prototype;
    dart.addTypeTests(DelegatingQueue);
    DelegatingQueue.prototype[_is_DelegatingQueue_default] = true;
    DelegatingQueue[dart.implements] = () => [collection.Queue$(E)];
    dart.setMethodSignature(DelegatingQueue, () => ({
      __proto__: dart.getMethods(DelegatingQueue.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      addFirst: dart.fnType(dart.void, [core.Object]),
      addLast: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType(T => [collection.Queue$(T), []]),
      [$cast]: dart.gFnType(T => [collection.Queue$(T), []]),
      clear: dart.fnType(dart.void, []),
      remove: dart.fnType(core.bool, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [E])]),
      retype: dart.gFnType(T => [collection.Queue$(T), []]),
      removeFirst: dart.fnType(E, []),
      removeLast: dart.fnType(E, [])
    }));
    dart.setGetterSignature(DelegatingQueue, () => ({
      __proto__: dart.getGetters(DelegatingQueue.__proto__),
      [_baseQueue]: collection.Queue$(E)
    }));
    dart.setLibraryUri(DelegatingQueue, "package:collection/src/wrappers.dart");
    dart.defineExtensionMethods(DelegatingQueue, ['cast']);
    return DelegatingQueue;
  });
  wrappers.DelegatingQueue = wrappers.DelegatingQueue$();
  dart.addTypeTests(wrappers.DelegatingQueue, _is_DelegatingQueue_default);
  const _is_DelegatingMap_default = Symbol('_is_DelegatingMap_default');
  wrappers.DelegatingMap$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class DelegatingMap extends core.Object {
      static typed(K, V, base) {
        return base[$cast](K, V);
      }
      _get(key) {
        return this[_base$][$_get](key);
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        this[_base$][$_set](key, value);
        return value$;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        this[_base$][$addAll](other);
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        this[_base$][$addEntries](entries);
      }
      clear() {
        this[_base$][$clear]();
      }
      cast(K2, V2) {
        return this[_base$][$cast](K2, V2);
      }
      containsKey(key) {
        return this[_base$][$containsKey](key);
      }
      containsValue(value) {
        return this[_base$][$containsValue](value);
      }
      get entries() {
        return this[_base$][$entries];
      }
      forEach(f) {
        this[_base$][$forEach](f);
      }
      get isEmpty() {
        return this[_base$][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$][$isNotEmpty];
      }
      get keys() {
        return this[_base$][$keys];
      }
      get length() {
        return this[_base$][$length];
      }
      map(K2, V2, transform) {
        return this[_base$][$map](K2, V2, transform);
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this[_base$][$putIfAbsent](key, ifAbsent);
      }
      remove(key) {
        return this[_base$][$remove](key);
      }
      removeWhere(test) {
        return this[_base$][$removeWhere](test);
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      get values() {
        return this[_base$][$values];
      }
      toString() {
        return dart.toString(this[_base$]);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_base$][$update](key, update, {ifAbsent: ifAbsent});
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_base$][$updateAll](update);
      }
    }
    (DelegatingMap.new = function(base) {
      this[_base$] = base;
      ;
    }).prototype = DelegatingMap.prototype;
    DelegatingMap.prototype[dart.isMap] = true;
    dart.addTypeTests(DelegatingMap);
    DelegatingMap.prototype[_is_DelegatingMap_default] = true;
    DelegatingMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(DelegatingMap, () => ({
      __proto__: dart.getMethods(DelegatingMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object])
    }));
    dart.setGetterSignature(DelegatingMap, () => ({
      __proto__: dart.getGetters(DelegatingMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(DelegatingMap, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(DelegatingMap, () => ({
      __proto__: dart.getFields(DelegatingMap.__proto__),
      [_base$]: dart.finalFieldType(core.Map$(K, V))
    }));
    dart.defineExtensionMethods(DelegatingMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'clear',
      'cast',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'toString',
      'update',
      'updateAll'
    ]);
    dart.defineExtensionAccessors(DelegatingMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return DelegatingMap;
  });
  wrappers.DelegatingMap = wrappers.DelegatingMap$();
  dart.addTypeTests(wrappers.DelegatingMap, _is_DelegatingMap_default);
  const _baseMap = dart.privateName(wrappers, "_baseMap");
  const _is_MapKeySet_default = Symbol('_is_MapKeySet_default');
  wrappers.MapKeySet$ = dart.generic(E => {
    let ETobool = () => (ETobool = dart.constFn(dart.fnType(core.bool, [E])))();
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    const _DelegatingIterableBase_UnmodifiableSetMixin$ = class _DelegatingIterableBase_UnmodifiableSetMixin extends wrappers._DelegatingIterableBase$(E) {};
    (_DelegatingIterableBase_UnmodifiableSetMixin$.new = function() {
      _DelegatingIterableBase_UnmodifiableSetMixin$.__proto__.new.call(this);
    }).prototype = _DelegatingIterableBase_UnmodifiableSetMixin$.prototype;
    dart.applyMixin(_DelegatingIterableBase_UnmodifiableSetMixin$, unmodifiable_wrappers.UnmodifiableSetMixin$(E));
    class MapKeySet extends _DelegatingIterableBase_UnmodifiableSetMixin$ {
      get [_base$]() {
        return this[_baseMap][$keys];
      }
      cast(T) {
        if (wrappers.MapKeySet$(T).is(this)) {
          return wrappers.MapKeySet$(T).as(this);
        }
        return core.Set.castFrom(E, T, this);
      }
      contains(element) {
        return this[_baseMap][$containsKey](element);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return "{" + dart.str(this[_base$][$join](", ")) + "}";
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !dart.test(other.contains(element)), ETobool()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        return dart.throw(new core.UnsupportedError.new("MapKeySet doesn't support lookup()."));
      }
      retype(T) {
        return core.Set.castFrom(E, T, this);
      }
      union(other) {
        let t0;
        SetOfE()._check(other);
        t0 = this.toSet();
        t0.addAll(other);
        return t0;
      }
    }
    (MapKeySet.new = function(base) {
      this[_baseMap] = base;
      MapKeySet.__proto__.new.call(this);
      ;
    }).prototype = MapKeySet.prototype;
    dart.addTypeTests(MapKeySet);
    MapKeySet.prototype[_is_MapKeySet_default] = true;
    dart.setMethodSignature(MapKeySet, () => ({
      __proto__: dart.getMethods(MapKeySet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(E), [core.Set$(core.Object)]),
      lookup: dart.fnType(E, [core.Object]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(E), [core.Object])
    }));
    dart.setGetterSignature(MapKeySet, () => ({
      __proto__: dart.getGetters(MapKeySet.__proto__),
      [_base$]: core.Iterable$(E)
    }));
    dart.setLibraryUri(MapKeySet, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(MapKeySet, () => ({
      __proto__: dart.getFields(MapKeySet.__proto__),
      [_baseMap]: dart.finalFieldType(core.Map$(E, dart.dynamic))
    }));
    dart.defineExtensionMethods(MapKeySet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapKeySet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapKeySet;
  });
  wrappers.MapKeySet = wrappers.MapKeySet$();
  dart.addTypeTests(wrappers.MapKeySet, _is_MapKeySet_default);
  const _keyForValue = dart.privateName(wrappers, "_keyForValue");
  const _is_MapValueSet_default = Symbol('_is_MapValueSet_default');
  wrappers.MapValueSet$ = dart.generic((K, V) => {
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let IterableOfV = () => (IterableOfV = dart.constFn(core.Iterable$(V)))();
    let VTobool = () => (VTobool = dart.constFn(dart.fnType(core.bool, [V])))();
    let _IdentityHashSetOfV = () => (_IdentityHashSetOfV = dart.constFn(collection._IdentityHashSet$(V)))();
    let SetOfV = () => (SetOfV = dart.constFn(core.Set$(V)))();
    class MapValueSet extends wrappers._DelegatingIterableBase$(V) {
      get [_base$]() {
        return this[_baseMap][$values];
      }
      cast(T) {
        if (core.Set$(T).is(this)) {
          return core.Set$(T).as(this);
        }
        return core.Set.castFrom(V, T, this);
      }
      contains(element) {
        if (element != null && !V.is(element)) return false;
        let key = this[_keyForValue](V.as(element));
        return this[_baseMap][$containsKey](key);
      }
      get isEmpty() {
        return this[_baseMap][$isEmpty];
      }
      get isNotEmpty() {
        return this[_baseMap][$isNotEmpty];
      }
      get length() {
        return this[_baseMap][$length];
      }
      toString() {
        return dart.toString(this.toSet());
      }
      add(value) {
        V._check(value);
        let key = this[_keyForValue](value);
        let result = false;
        this[_baseMap][$putIfAbsent](key, dart.fn(() => {
          result = true;
          return value;
        }, VoidToV()));
        return result;
      }
      addAll(elements) {
        IterableOfV()._check(elements);
        return elements[$forEach](dart.bind(this, 'add'));
      }
      clear() {
        return this[_baseMap][$clear]();
      }
      containsAll(other) {
        return other[$every](dart.bind(this, 'contains'));
      }
      difference(other) {
        return this.where(dart.fn(element => !dart.test(other.contains(element)), VTobool()))[$toSet]();
      }
      intersection(other) {
        return this.where(dart.bind(other, 'contains'))[$toSet]();
      }
      lookup(element) {
        if (element != null && !V.is(element)) return null;
        let key = this[_keyForValue](V.as(element));
        return this[_baseMap][$_get](key);
      }
      remove(element) {
        if (element != null && !V.is(element)) return false;
        let key = this[_keyForValue](V.as(element));
        if (!dart.test(this[_baseMap][$containsKey](key))) return false;
        this[_baseMap][$remove](key);
        return true;
      }
      removeAll(elements) {
        return elements[$forEach](dart.bind(this, 'remove'));
      }
      removeWhere(test) {
        let toRemove = [];
        this[_baseMap][$forEach](dart.fn((key, value) => {
          if (dart.test(test(value))) toRemove[$add](key);
        }, KAndVToNull()));
        toRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainAll(elements) {
        let valuesToRetain = new (_IdentityHashSetOfV()).new();
        for (let element of elements) {
          if (element != null && !V.is(element)) continue;
          let key = this[_keyForValue](V.as(element));
          if (!dart.test(this[_baseMap][$containsKey](key))) continue;
          valuesToRetain.add(this[_baseMap][$_get](key));
        }
        let keysToRemove = [];
        this[_baseMap][$forEach](dart.fn((k, v) => {
          if (!dart.test(valuesToRetain.contains(v))) keysToRemove[$add](k);
        }, KAndVToNull()));
        keysToRemove[$forEach](dart.bind(this[_baseMap], $remove));
      }
      retainWhere(test) {
        return this.removeWhere(dart.fn(element => !dart.test(test(element)), VTobool()));
      }
      retype(T) {
        return core.Set.castFrom(V, T, this);
      }
      union(other) {
        let t0;
        SetOfV()._check(other);
        t0 = this.toSet();
        t0.addAll(other);
        return t0;
      }
    }
    (MapValueSet.new = function(base, keyForValue) {
      this[_baseMap] = base;
      this[_keyForValue] = keyForValue;
      MapValueSet.__proto__.new.call(this);
      ;
    }).prototype = MapValueSet.prototype;
    dart.addTypeTests(MapValueSet);
    MapValueSet.prototype[_is_MapValueSet_default] = true;
    MapValueSet[dart.implements] = () => [core.Set$(V)];
    dart.setMethodSignature(MapValueSet, () => ({
      __proto__: dart.getMethods(MapValueSet.__proto__),
      cast: dart.gFnType(T => [core.Set$(T), []]),
      [$cast]: dart.gFnType(T => [core.Set$(T), []]),
      add: dart.fnType(core.bool, [core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      clear: dart.fnType(dart.void, []),
      containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
      difference: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      intersection: dart.fnType(core.Set$(V), [core.Set$(core.Object)]),
      lookup: dart.fnType(V, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object]),
      removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
      retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [V])]),
      retype: dart.gFnType(T => [core.Set$(T), []]),
      union: dart.fnType(core.Set$(V), [core.Object])
    }));
    dart.setGetterSignature(MapValueSet, () => ({
      __proto__: dart.getGetters(MapValueSet.__proto__),
      [_base$]: core.Iterable$(V)
    }));
    dart.setLibraryUri(MapValueSet, "package:collection/src/wrappers.dart");
    dart.setFieldSignature(MapValueSet, () => ({
      __proto__: dart.getFields(MapValueSet.__proto__),
      [_baseMap]: dart.finalFieldType(core.Map$(K, V)),
      [_keyForValue]: dart.finalFieldType(dart.fnType(K, [V]))
    }));
    dart.defineExtensionMethods(MapValueSet, ['cast', 'contains', 'toString']);
    dart.defineExtensionAccessors(MapValueSet, ['isEmpty', 'isNotEmpty', 'length']);
    return MapValueSet;
  });
  wrappers.MapValueSet = wrappers.MapValueSet$();
  dart.addTypeTests(wrappers.MapValueSet, _is_MapValueSet_default);
  const _base$0 = dart.privateName(canonicalized_map, "_base");
  const _canonicalize = dart.privateName(canonicalized_map, "_canonicalize");
  const _isValidKeyFn = dart.privateName(canonicalized_map, "_isValidKeyFn");
  const _isValidKey = dart.privateName(canonicalized_map, "_isValidKey");
  const _is_CanonicalizedMap_default = Symbol('_is_CanonicalizedMap_default');
  canonicalized_map.CanonicalizedMap$ = dart.generic((C, K, V) => {
    let LinkedMapOfC$PairOfK$V = () => (LinkedMapOfC$PairOfK$V = dart.constFn(_js_helper.LinkedMap$(C, PairOfK$V())))();
    let MapEntryOfC$PairOfK$V = () => (MapEntryOfC$PairOfK$V = dart.constFn(core.MapEntry$(C, PairOfK$V())))();
    let MapEntryOfK$VToMapEntryOfC$PairOfK$V = () => (MapEntryOfK$VToMapEntryOfC$PairOfK$V = dart.constFn(dart.fnType(MapEntryOfC$PairOfK$V(), [MapEntryOfK$V()])))();
    let MapEntryOfC$PairOfK$VToMapEntryOfK$V = () => (MapEntryOfC$PairOfK$VToMapEntryOfK$V = dart.constFn(dart.fnType(MapEntryOfK$V(), [MapEntryOfC$PairOfK$V()])))();
    let CAndPairOfK$VTovoid = () => (CAndPairOfK$VTovoid = dart.constFn(dart.fnType(dart.void, [C, PairOfK$V()])))();
    let CAndPairOfK$VTobool = () => (CAndPairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [C, PairOfK$V()])))();
    let CAndPairOfK$VToPairOfK$V = () => (CAndPairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [C, PairOfK$V()])))();
    let PairOfK$V = () => (PairOfK$V = dart.constFn(utils.Pair$(K, V)))();
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    let KAndVToV = () => (KAndVToV = dart.constFn(dart.fnType(V, [K, V])))();
    let MapEntryOfK$V = () => (MapEntryOfK$V = dart.constFn(core.MapEntry$(K, V)))();
    let IterableOfMapEntryOfK$V = () => (IterableOfMapEntryOfK$V = dart.constFn(core.Iterable$(MapEntryOfK$V())))();
    let PairOfK$VTobool = () => (PairOfK$VTobool = dart.constFn(dart.fnType(core.bool, [PairOfK$V()])))();
    let PairOfK$VToK = () => (PairOfK$VToK = dart.constFn(dart.fnType(K, [PairOfK$V()])))();
    let VoidToPairOfK$V = () => (VoidToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [])))();
    let PairOfK$VToPairOfK$V = () => (PairOfK$VToPairOfK$V = dart.constFn(dart.fnType(PairOfK$V(), [PairOfK$V()])))();
    let PairOfK$VToV = () => (PairOfK$VToV = dart.constFn(dart.fnType(V, [PairOfK$V()])))();
    let KAndVToNull = () => (KAndVToNull = dart.constFn(dart.fnType(core.Null, [K, V])))();
    let VoidToV = () => (VoidToV = dart.constFn(dart.fnType(V, [])))();
    let VToV = () => (VToV = dart.constFn(dart.fnType(V, [V])))();
    class CanonicalizedMap extends core.Object {
      _get(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base$0][$_get](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      _set(key, value$) {
        let value = value$;
        K._check(key);
        V._check(value);
        if (!dart.test(this[_isValidKey](key))) return value$;
        this[_base$0][$_set](this[_canonicalize](key), new (PairOfK$V()).new(key, value));
        return value$;
      }
      addAll(other) {
        MapOfK$V()._check(other);
        other[$forEach](dart.fn((key, value) => {
          let t1, t0;
          t0 = key;
          t1 = value;
          this._set(t0, t1);
          return t1;
        }, KAndVToV()));
      }
      addEntries(entries) {
        IterableOfMapEntryOfK$V()._check(entries);
        return this[_base$0][$addEntries](entries[$map](MapEntryOfC$PairOfK$V(), dart.fn(e => new (MapEntryOfC$PairOfK$V()).__(this[_canonicalize](e.key), new (PairOfK$V()).new(e.key, e.value)), MapEntryOfK$VToMapEntryOfC$PairOfK$V())));
      }
      cast(K2, V2) {
        return this[_base$0][$cast](K2, V2);
      }
      clear() {
        this[_base$0][$clear]();
      }
      containsKey(key) {
        if (!dart.test(this[_isValidKey](key))) return false;
        return this[_base$0][$containsKey](this[_canonicalize](K.as(key)));
      }
      containsValue(value) {
        return this[_base$0][$values][$any](dart.fn(pair => dart.equals(pair.last, value), PairOfK$VTobool()));
      }
      get entries() {
        return this[_base$0][$entries][$map](MapEntryOfK$V(), dart.fn(e => new (MapEntryOfK$V()).__(e.value.first, e.value.last), MapEntryOfC$PairOfK$VToMapEntryOfK$V()));
      }
      forEach(f) {
        this[_base$0][$forEach](dart.fn((key, pair) => f(pair.first, pair.last), CAndPairOfK$VTovoid()));
      }
      get isEmpty() {
        return this[_base$0][$isEmpty];
      }
      get isNotEmpty() {
        return this[_base$0][$isNotEmpty];
      }
      get keys() {
        return this[_base$0][$values][$map](K, dart.fn(pair => pair.first, PairOfK$VToK()));
      }
      get length() {
        return this[_base$0][$length];
      }
      map(K2, V2, transform) {
        return this[_base$0][$map](K2, V2, dart.fn((_, pair) => transform(pair.first, pair.last), dart.fnType(core.MapEntry$(K2, V2), [C, PairOfK$V()])));
      }
      putIfAbsent(key, ifAbsent) {
        K._check(key);
        VoidToV()._check(ifAbsent);
        return this[_base$0][$putIfAbsent](this[_canonicalize](key), dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())).last;
      }
      remove(key) {
        if (!dart.test(this[_isValidKey](key))) return null;
        let pair = this[_base$0][$remove](this[_canonicalize](K.as(key)));
        return pair == null ? null : pair.last;
      }
      removeWhere(test) {
        return this[_base$0][$removeWhere](dart.fn((_, pair) => test(pair.first, pair.last), CAndPairOfK$VTobool()));
      }
      retype(K2, V2) {
        return this.cast(K2, V2);
      }
      update(key, update, opts) {
        K._check(key);
        VToV()._check(update);
        let ifAbsent = opts && 'ifAbsent' in opts ? opts.ifAbsent : null;
        VoidToV()._check(ifAbsent);
        return this[_base$0][$update](this[_canonicalize](key), dart.fn(pair => new (PairOfK$V()).new(key, update(pair.last)), PairOfK$VToPairOfK$V()), {ifAbsent: ifAbsent == null ? null : dart.fn(() => new (PairOfK$V()).new(key, ifAbsent()), VoidToPairOfK$V())}).last;
      }
      updateAll(update) {
        KAndVToV()._check(update);
        return this[_base$0][$updateAll](dart.fn((_, pair) => new (PairOfK$V()).new(pair.first, update(pair.first, pair.last)), CAndPairOfK$VToPairOfK$V()));
      }
      get values() {
        return this[_base$0][$values][$map](V, dart.fn(pair => pair.last, PairOfK$VToV()));
      }
      toString() {
        if (dart.test(canonicalized_map._isToStringVisiting(this))) {
          return "{...}";
        }
        let result = new core.StringBuffer.new();
        try {
          canonicalized_map._toStringVisiting[$add](this);
          result.write("{");
          let first = true;
          this.forEach(dart.fn((k, v) => {
            if (!first) {
              result.write(", ");
            }
            first = false;
            result.write(dart.str(k) + ": " + dart.str(v));
          }, KAndVToNull()));
          result.write("}");
        } finally {
          if (!(canonicalized_map._toStringVisiting[$last] === this)) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/canonicalized_map.dart", 156, 14, "identical(_toStringVisiting.last, this)");
          canonicalized_map._toStringVisiting[$removeLast]();
        }
        return result.toString();
      }
      [_isValidKey](key) {
        return (key == null || K.is(key)) && (this[_isValidKeyFn] == null || dart.test(this[_isValidKeyFn](key)));
      }
    }
    (CanonicalizedMap.new = function(canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base$0] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      ;
    }).prototype = CanonicalizedMap.prototype;
    (CanonicalizedMap.from = function(other, canonicalize, opts) {
      let isValidKey = opts && 'isValidKey' in opts ? opts.isValidKey : null;
      this[_base$0] = new (LinkedMapOfC$PairOfK$V()).new();
      this[_canonicalize] = canonicalize;
      this[_isValidKeyFn] = isValidKey;
      this.addAll(other);
    }).prototype = CanonicalizedMap.prototype;
    CanonicalizedMap.prototype[dart.isMap] = true;
    dart.addTypeTests(CanonicalizedMap);
    CanonicalizedMap.prototype[_is_CanonicalizedMap_default] = true;
    CanonicalizedMap[dart.implements] = () => [core.Map$(K, V)];
    dart.setMethodSignature(CanonicalizedMap, () => ({
      __proto__: dart.getMethods(CanonicalizedMap.__proto__),
      _get: dart.fnType(V, [core.Object]),
      [$_get]: dart.fnType(V, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.Object]),
      [$_set]: dart.fnType(dart.void, [core.Object, core.Object]),
      addAll: dart.fnType(dart.void, [core.Object]),
      [$addAll]: dart.fnType(dart.void, [core.Object]),
      addEntries: dart.fnType(dart.void, [core.Object]),
      [$addEntries]: dart.fnType(dart.void, [core.Object]),
      cast: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      [$cast]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      clear: dart.fnType(dart.void, []),
      [$clear]: dart.fnType(dart.void, []),
      containsKey: dart.fnType(core.bool, [core.Object]),
      [$containsKey]: dart.fnType(core.bool, [core.Object]),
      containsValue: dart.fnType(core.bool, [core.Object]),
      [$containsValue]: dart.fnType(core.bool, [core.Object]),
      forEach: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      [$forEach]: dart.fnType(dart.void, [dart.fnType(dart.void, [K, V])]),
      map: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      [$map]: dart.gFnType((K2, V2) => [core.Map$(K2, V2), [dart.fnType(core.MapEntry$(K2, V2), [K, V])]]),
      putIfAbsent: dart.fnType(V, [core.Object, core.Object]),
      [$putIfAbsent]: dart.fnType(V, [core.Object, core.Object]),
      remove: dart.fnType(V, [core.Object]),
      [$remove]: dart.fnType(V, [core.Object]),
      removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      [$removeWhere]: dart.fnType(dart.void, [dart.fnType(core.bool, [K, V])]),
      retype: dart.gFnType((K2, V2) => [core.Map$(K2, V2), []]),
      update: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      [$update]: dart.fnType(V, [core.Object, core.Object], {ifAbsent: core.Object}),
      updateAll: dart.fnType(dart.void, [core.Object]),
      [$updateAll]: dart.fnType(dart.void, [core.Object]),
      [_isValidKey]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(CanonicalizedMap, () => ({
      __proto__: dart.getGetters(CanonicalizedMap.__proto__),
      entries: core.Iterable$(core.MapEntry$(K, V)),
      [$entries]: core.Iterable$(core.MapEntry$(K, V)),
      isEmpty: core.bool,
      [$isEmpty]: core.bool,
      isNotEmpty: core.bool,
      [$isNotEmpty]: core.bool,
      keys: core.Iterable$(K),
      [$keys]: core.Iterable$(K),
      length: core.int,
      [$length]: core.int,
      values: core.Iterable$(V),
      [$values]: core.Iterable$(V)
    }));
    dart.setLibraryUri(CanonicalizedMap, "package:collection/src/canonicalized_map.dart");
    dart.setFieldSignature(CanonicalizedMap, () => ({
      __proto__: dart.getFields(CanonicalizedMap.__proto__),
      [_canonicalize]: dart.finalFieldType(dart.fnType(C, [K])),
      [_isValidKeyFn]: dart.finalFieldType(dart.fnType(core.bool, [core.Object])),
      [_base$0]: dart.finalFieldType(core.Map$(C, utils.Pair$(K, V)))
    }));
    dart.defineExtensionMethods(CanonicalizedMap, [
      '_get',
      '_set',
      'addAll',
      'addEntries',
      'cast',
      'clear',
      'containsKey',
      'containsValue',
      'forEach',
      'map',
      'putIfAbsent',
      'remove',
      'removeWhere',
      'update',
      'updateAll',
      'toString'
    ]);
    dart.defineExtensionAccessors(CanonicalizedMap, [
      'entries',
      'isEmpty',
      'isNotEmpty',
      'keys',
      'length',
      'values'
    ]);
    return CanonicalizedMap;
  });
  canonicalized_map.CanonicalizedMap = canonicalized_map.CanonicalizedMap$();
  dart.addTypeTests(canonicalized_map.CanonicalizedMap, _is_CanonicalizedMap_default);
  canonicalized_map._isToStringVisiting = function _isToStringVisiting(o) {
    return canonicalized_map._toStringVisiting[$any](dart.fn(e => core.identical(o, e), dynamicTobool()));
  };
  dart.defineLazy(canonicalized_map, {
    /*canonicalized_map._toStringVisiting*/get _toStringVisiting() {
      return [];
    }
  });
  dart.trackLibraries("packages/collection/src/canonicalized_map", {
    "package:collection/src/empty_unmodifiable_set.dart": empty_unmodifiable_set,
    "package:collection/src/unmodifiable_wrappers.dart": unmodifiable_wrappers,
    "package:collection/src/wrappers.dart": wrappers,
    "package:collection/src/canonicalized_map.dart": canonicalized_map
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["empty_unmodifiable_set.dart","wrappers.dart","unmodifiable_wrappers.dart","canonicalized_map.dart"],"names":[],"mappings":"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","file":"canonicalized_map.ddc.js"}');
  // Exports:
  return {
    src__empty_unmodifiable_set: empty_unmodifiable_set,
    src__unmodifiable_wrappers: unmodifiable_wrappers,
    src__wrappers: wrappers,
    src__canonicalized_map: canonicalized_map
  };
});

//# sourceMappingURL=canonicalized_map.ddc.js.map

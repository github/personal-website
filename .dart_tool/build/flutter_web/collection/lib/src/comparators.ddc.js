define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const equality = Object.create(dart.library);
  const comparators = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $iterator = dartx.iterator;
  const $rightShift = dartx['>>'];
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $_equals = dartx._equals;
  const $keys = dartx.keys;
  const $codeUnitAt = dartx.codeUnitAt;
  const $sign = dartx.sign;
  let DefaultEqualityOfNull = () => (DefaultEqualityOfNull = dart.constFn(equality.DefaultEquality$(core.Null)))();
  let LinkedMapOf_MapEntry$int = () => (LinkedMapOf_MapEntry$int = dart.constFn(_js_helper.LinkedMap$(equality._MapEntry, core.int)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: DefaultEqualityOfNull().prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: equality.DefaultEquality.prototype
      });
    }
  });
  const _is_Equality_default = Symbol('_is_Equality_default');
  equality.Equality$ = dart.generic(E => {
    class Equality extends core.Object {}
    (Equality[dart.mixinNew] = function() {
    }).prototype = Equality.prototype;
    dart.addTypeTests(Equality);
    Equality.prototype[_is_Equality_default] = true;
    dart.setLibraryUri(Equality, "package:collection/src/equality.dart");
    return Equality;
  });
  equality.Equality = equality.Equality$();
  dart.addTypeTests(equality.Equality, _is_Equality_default);
  let C0;
  const _getKey = dart.privateName(equality, "_getKey");
  const _inner = dart.privateName(equality, "_inner");
  const _is_EqualityBy_default = Symbol('_is_EqualityBy_default');
  equality.EqualityBy$ = dart.generic((E, F) => {
    class EqualityBy extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        return this[_inner].equals(this[_getKey](e1), this[_getKey](e2));
      }
      hash(e) {
        E._check(e);
        return this[_inner].hash(this[_getKey](e));
      }
      isValidKey(o) {
        if (E.is(o)) {
          let value = this[_getKey](o);
          return F.is(value) && dart.test(this[_inner].isValidKey(value));
        }
        return false;
      }
    }
    (EqualityBy.new = function(getKey, inner) {
      if (inner === void 0) inner = C0 || CT.C0;
      this[_getKey] = getKey;
      this[_inner] = inner;
      ;
    }).prototype = EqualityBy.prototype;
    dart.addTypeTests(EqualityBy);
    EqualityBy.prototype[_is_EqualityBy_default] = true;
    EqualityBy[dart.implements] = () => [equality.Equality$(E)];
    dart.setMethodSignature(EqualityBy, () => ({
      __proto__: dart.getMethods(EqualityBy.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(EqualityBy, "package:collection/src/equality.dart");
    dart.setFieldSignature(EqualityBy, () => ({
      __proto__: dart.getFields(EqualityBy.__proto__),
      [_getKey]: dart.finalFieldType(dart.fnType(F, [E])),
      [_inner]: dart.finalFieldType(equality.Equality$(F))
    }));
    return EqualityBy;
  });
  equality.EqualityBy = equality.EqualityBy$();
  dart.addTypeTests(equality.EqualityBy, _is_EqualityBy_default);
  const _is_DefaultEquality_default = Symbol('_is_DefaultEquality_default');
  equality.DefaultEquality$ = dart.generic(E => {
    class DefaultEquality extends core.Object {
      equals(e1, e2) {
        return dart.equals(e1, e2);
      }
      hash(e) {
        return dart.hashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (DefaultEquality.new = function() {
      ;
    }).prototype = DefaultEquality.prototype;
    dart.addTypeTests(DefaultEquality);
    DefaultEquality.prototype[_is_DefaultEquality_default] = true;
    DefaultEquality[dart.implements] = () => [equality.Equality$(E)];
    dart.setMethodSignature(DefaultEquality, () => ({
      __proto__: dart.getMethods(DefaultEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(DefaultEquality, "package:collection/src/equality.dart");
    return DefaultEquality;
  });
  equality.DefaultEquality = equality.DefaultEquality$();
  dart.addTypeTests(equality.DefaultEquality, _is_DefaultEquality_default);
  const _is_IdentityEquality_default = Symbol('_is_IdentityEquality_default');
  equality.IdentityEquality$ = dart.generic(E => {
    class IdentityEquality extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        return core.identical(e1, e2);
      }
      hash(e) {
        E._check(e);
        return core.identityHashCode(e);
      }
      isValidKey(o) {
        return true;
      }
    }
    (IdentityEquality.new = function() {
      ;
    }).prototype = IdentityEquality.prototype;
    dart.addTypeTests(IdentityEquality);
    IdentityEquality.prototype[_is_IdentityEquality_default] = true;
    IdentityEquality[dart.implements] = () => [equality.Equality$(E)];
    dart.setMethodSignature(IdentityEquality, () => ({
      __proto__: dart.getMethods(IdentityEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(IdentityEquality, "package:collection/src/equality.dart");
    return IdentityEquality;
  });
  equality.IdentityEquality = equality.IdentityEquality$();
  dart.addTypeTests(equality.IdentityEquality, _is_IdentityEquality_default);
  const _elementEquality$ = dart.privateName(equality, "_elementEquality");
  const _is_IterableEquality_default = Symbol('_is_IterableEquality_default');
  equality.IterableEquality$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class IterableEquality extends core.Object {
      equals(elements1, elements2) {
        IterableOfE()._check(elements1);
        IterableOfE()._check(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let it1 = elements1[$iterator];
        let it2 = elements2[$iterator];
        while (true) {
          let hasNext = it1.moveNext();
          if (!dart.equals(hasNext, it2.moveNext())) return false;
          if (!dart.test(hasNext)) return true;
          if (!dart.test(this[_elementEquality$].equals(it1.current, it2.current))) return false;
        }
      }
      hash(elements) {
        IterableOfE()._check(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality$].hash(element);
          hash = (hash + dart.notNull(c) & 2147483647) >>> 0;
          hash = (hash + (hash << 10 >>> 0) & 2147483647) >>> 0;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return IterableOfE().is(o);
      }
    }
    (IterableEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = C0 || CT.C0;
      this[_elementEquality$] = elementEquality;
      ;
    }).prototype = IterableEquality.prototype;
    dart.addTypeTests(IterableEquality);
    IterableEquality.prototype[_is_IterableEquality_default] = true;
    IterableEquality[dart.implements] = () => [equality.Equality$(core.Iterable$(E))];
    dart.setMethodSignature(IterableEquality, () => ({
      __proto__: dart.getMethods(IterableEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(IterableEquality, "package:collection/src/equality.dart");
    dart.setFieldSignature(IterableEquality, () => ({
      __proto__: dart.getFields(IterableEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality.Equality$(E))
    }));
    return IterableEquality;
  });
  equality.IterableEquality = equality.IterableEquality$();
  dart.addTypeTests(equality.IterableEquality, _is_IterableEquality_default);
  const _is_ListEquality_default = Symbol('_is_ListEquality_default');
  equality.ListEquality$ = dart.generic(E => {
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class ListEquality extends core.Object {
      equals(list1, list2) {
        ListOfE()._check(list1);
        ListOfE()._check(list2);
        if (list1 == list2) return true;
        if (list1 == null || list2 == null) return false;
        let length = list1[$length];
        if (length != list2[$length]) return false;
        for (let i = 0; i < dart.notNull(length); i = i + 1) {
          if (!dart.test(this[_elementEquality$].equals(list1[$_get](i), list2[$_get](i)))) return false;
        }
        return true;
      }
      hash(list) {
        ListOfE()._check(list);
        if (list == null) return dart.hashCode(null);
        let hash = 0;
        for (let i = 0; i < dart.notNull(list[$length]); i = i + 1) {
          let c = this[_elementEquality$].hash(list[$_get](i));
          hash = (hash + dart.notNull(c) & 2147483647) >>> 0;
          hash = (hash + (hash << 10 >>> 0) & 2147483647) >>> 0;
          hash = (hash ^ hash[$rightShift](6)) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return ListOfE().is(o);
      }
    }
    (ListEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = C0 || CT.C0;
      this[_elementEquality$] = elementEquality;
      ;
    }).prototype = ListEquality.prototype;
    dart.addTypeTests(ListEquality);
    ListEquality.prototype[_is_ListEquality_default] = true;
    ListEquality[dart.implements] = () => [equality.Equality$(core.List$(E))];
    dart.setMethodSignature(ListEquality, () => ({
      __proto__: dart.getMethods(ListEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(ListEquality, "package:collection/src/equality.dart");
    dart.setFieldSignature(ListEquality, () => ({
      __proto__: dart.getFields(ListEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality.Equality$(E))
    }));
    return ListEquality;
  });
  equality.ListEquality = equality.ListEquality$();
  dart.addTypeTests(equality.ListEquality, _is_ListEquality_default);
  const _is__UnorderedEquality_default = Symbol('_is__UnorderedEquality_default');
  equality._UnorderedEquality$ = dart.generic((E, T) => {
    let HashMapOfE$int = () => (HashMapOfE$int = dart.constFn(collection.HashMap$(E, core.int)))();
    class _UnorderedEquality extends core.Object {
      equals(elements1, elements2) {
        T._check(elements1);
        T._check(elements2);
        if (elements1 == elements2) return true;
        if (elements1 == null || elements2 == null) return false;
        let counts = HashMapOfE$int().new({equals: dart.bind(this[_elementEquality$], 'equals'), hashCode: dart.bind(this[_elementEquality$], 'hash'), isValidKey: dart.bind(this[_elementEquality$], 'isValidKey')});
        let length = 0;
        for (let e of elements1) {
          let count = counts[$_get](e);
          if (count == null) count = 0;
          counts[$_set](e, dart.notNull(count) + 1);
          length = length + 1;
        }
        for (let e of elements2) {
          let count = counts[$_get](e);
          if (count == null || count === 0) return false;
          counts[$_set](e, dart.notNull(count) - 1);
          length = length - 1;
        }
        return length === 0;
      }
      hash(elements) {
        T._check(elements);
        if (elements == null) return dart.hashCode(null);
        let hash = 0;
        for (let element of elements) {
          let c = this[_elementEquality$].hash(element);
          hash = (hash + dart.notNull(c) & 2147483647) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
    }
    (_UnorderedEquality.new = function(_elementEquality) {
      this[_elementEquality$] = _elementEquality;
      ;
    }).prototype = _UnorderedEquality.prototype;
    dart.addTypeTests(_UnorderedEquality);
    _UnorderedEquality.prototype[_is__UnorderedEquality_default] = true;
    _UnorderedEquality[dart.implements] = () => [equality.Equality$(T)];
    dart.setMethodSignature(_UnorderedEquality, () => ({
      __proto__: dart.getMethods(_UnorderedEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object])
    }));
    dart.setLibraryUri(_UnorderedEquality, "package:collection/src/equality.dart");
    dart.setFieldSignature(_UnorderedEquality, () => ({
      __proto__: dart.getFields(_UnorderedEquality.__proto__),
      [_elementEquality$]: dart.finalFieldType(equality.Equality$(E))
    }));
    return _UnorderedEquality;
  });
  equality._UnorderedEquality = equality._UnorderedEquality$();
  dart.addTypeTests(equality._UnorderedEquality, _is__UnorderedEquality_default);
  const _is_UnorderedIterableEquality_default = Symbol('_is_UnorderedIterableEquality_default');
  equality.UnorderedIterableEquality$ = dart.generic(E => {
    let IterableOfE = () => (IterableOfE = dart.constFn(core.Iterable$(E)))();
    class UnorderedIterableEquality extends equality._UnorderedEquality$(E, core.Iterable$(E)) {
      isValidKey(o) {
        return IterableOfE().is(o);
      }
    }
    (UnorderedIterableEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = C0 || CT.C0;
      UnorderedIterableEquality.__proto__.new.call(this, elementEquality);
      ;
    }).prototype = UnorderedIterableEquality.prototype;
    dart.addTypeTests(UnorderedIterableEquality);
    UnorderedIterableEquality.prototype[_is_UnorderedIterableEquality_default] = true;
    dart.setMethodSignature(UnorderedIterableEquality, () => ({
      __proto__: dart.getMethods(UnorderedIterableEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(UnorderedIterableEquality, "package:collection/src/equality.dart");
    return UnorderedIterableEquality;
  });
  equality.UnorderedIterableEquality = equality.UnorderedIterableEquality$();
  dart.addTypeTests(equality.UnorderedIterableEquality, _is_UnorderedIterableEquality_default);
  const _is_SetEquality_default = Symbol('_is_SetEquality_default');
  equality.SetEquality$ = dart.generic(E => {
    let SetOfE = () => (SetOfE = dart.constFn(core.Set$(E)))();
    class SetEquality extends equality._UnorderedEquality$(E, core.Set$(E)) {
      isValidKey(o) {
        return SetOfE().is(o);
      }
    }
    (SetEquality.new = function(elementEquality) {
      if (elementEquality === void 0) elementEquality = C0 || CT.C0;
      SetEquality.__proto__.new.call(this, elementEquality);
      ;
    }).prototype = SetEquality.prototype;
    dart.addTypeTests(SetEquality);
    SetEquality.prototype[_is_SetEquality_default] = true;
    dart.setMethodSignature(SetEquality, () => ({
      __proto__: dart.getMethods(SetEquality.__proto__),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(SetEquality, "package:collection/src/equality.dart");
    return SetEquality;
  });
  equality.SetEquality = equality.SetEquality$();
  dart.addTypeTests(equality.SetEquality, _is_SetEquality_default);
  const _keyEquality = dart.privateName(equality, "_keyEquality");
  const _valueEquality = dart.privateName(equality, "_valueEquality");
  equality._MapEntry = class _MapEntry extends core.Object {
    get hashCode() {
      return (3 * dart.notNull(this.equality[_keyEquality].hash(this.key)) + 7 * dart.notNull(this.equality[_valueEquality].hash(this.value)) & 2147483647) >>> 0;
    }
    _equals(other) {
      if (other == null) return false;
      return equality._MapEntry.is(other) && dart.test(this.equality[_keyEquality].equals(this.key, other.key)) && dart.test(this.equality[_valueEquality].equals(this.value, other.value));
    }
  };
  (equality._MapEntry.new = function(equality, key, value) {
    this.equality = equality;
    this.key = key;
    this.value = value;
    ;
  }).prototype = equality._MapEntry.prototype;
  dart.addTypeTests(equality._MapEntry);
  dart.setMethodSignature(equality._MapEntry, () => ({
    __proto__: dart.getMethods(equality._MapEntry.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(equality._MapEntry, "package:collection/src/equality.dart");
  dart.setFieldSignature(equality._MapEntry, () => ({
    __proto__: dart.getFields(equality._MapEntry.__proto__),
    equality: dart.finalFieldType(equality.MapEquality),
    key: dart.finalFieldType(dart.dynamic),
    value: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(equality._MapEntry, ['_equals']);
  dart.defineExtensionAccessors(equality._MapEntry, ['hashCode']);
  const _is_MapEquality_default = Symbol('_is_MapEquality_default');
  equality.MapEquality$ = dart.generic((K, V) => {
    let MapOfK$V = () => (MapOfK$V = dart.constFn(core.Map$(K, V)))();
    class MapEquality extends core.Object {
      equals(map1, map2) {
        MapOfK$V()._check(map1);
        MapOfK$V()._check(map2);
        if (map1 == map2) return true;
        if (map1 == null || map2 == null) return false;
        let length = map1[$length];
        if (length != map2[$length]) return false;
        let equalElementCounts = new (LinkedMapOf_MapEntry$int()).new();
        for (let key of map1[$keys]) {
          let entry = new equality._MapEntry.new(this, key, map1[$_get](key));
          let count = equalElementCounts[$_get](entry);
          if (count == null) count = 0;
          equalElementCounts[$_set](entry, dart.notNull(count) + 1);
        }
        for (let key of map2[$keys]) {
          let entry = new equality._MapEntry.new(this, key, map2[$_get](key));
          let count = equalElementCounts[$_get](entry);
          if (count == null || count === 0) return false;
          equalElementCounts[$_set](entry, dart.notNull(count) - 1);
        }
        return true;
      }
      hash(map) {
        MapOfK$V()._check(map);
        if (map == null) return dart.hashCode(null);
        let hash = 0;
        for (let key of map[$keys]) {
          let keyHash = this[_keyEquality].hash(key);
          let valueHash = this[_valueEquality].hash(map[$_get](key));
          hash = (hash + 3 * dart.notNull(keyHash) + 7 * dart.notNull(valueHash) & 2147483647) >>> 0;
        }
        hash = (hash + (hash << 3 >>> 0) & 2147483647) >>> 0;
        hash = (hash ^ hash[$rightShift](11)) >>> 0;
        hash = (hash + (hash << 15 >>> 0) & 2147483647) >>> 0;
        return hash;
      }
      isValidKey(o) {
        return MapOfK$V().is(o);
      }
    }
    (MapEquality.new = function(opts) {
      let keys = opts && 'keys' in opts ? opts.keys : C0 || CT.C0;
      let values = opts && 'values' in opts ? opts.values : C0 || CT.C0;
      this[_keyEquality] = keys;
      this[_valueEquality] = values;
      ;
    }).prototype = MapEquality.prototype;
    dart.addTypeTests(MapEquality);
    MapEquality.prototype[_is_MapEquality_default] = true;
    MapEquality[dart.implements] = () => [equality.Equality$(core.Map$(K, V))];
    dart.setMethodSignature(MapEquality, () => ({
      __proto__: dart.getMethods(MapEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(MapEquality, "package:collection/src/equality.dart");
    dart.setFieldSignature(MapEquality, () => ({
      __proto__: dart.getFields(MapEquality.__proto__),
      [_keyEquality]: dart.finalFieldType(equality.Equality$(K)),
      [_valueEquality]: dart.finalFieldType(equality.Equality$(V))
    }));
    return MapEquality;
  });
  equality.MapEquality = equality.MapEquality$();
  dart.addTypeTests(equality.MapEquality, _is_MapEquality_default);
  const _equalities = dart.privateName(equality, "_equalities");
  const _is_MultiEquality_default = Symbol('_is_MultiEquality_default');
  equality.MultiEquality$ = dart.generic(E => {
    class MultiEquality extends core.Object {
      equals(e1, e2) {
        E._check(e1);
        E._check(e2);
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(e1))) return dart.test(eq.isValidKey(e2)) && dart.test(eq.equals(e1, e2));
        }
        return false;
      }
      hash(e) {
        E._check(e);
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(e))) return eq.hash(e);
        }
        return 0;
      }
      isValidKey(o) {
        for (let eq of this[_equalities]) {
          if (dart.test(eq.isValidKey(o))) return true;
        }
        return false;
      }
    }
    (MultiEquality.new = function(equalities) {
      this[_equalities] = equalities;
      ;
    }).prototype = MultiEquality.prototype;
    dart.addTypeTests(MultiEquality);
    MultiEquality.prototype[_is_MultiEquality_default] = true;
    MultiEquality[dart.implements] = () => [equality.Equality$(E)];
    dart.setMethodSignature(MultiEquality, () => ({
      __proto__: dart.getMethods(MultiEquality.__proto__),
      equals: dart.fnType(core.bool, [core.Object, core.Object]),
      hash: dart.fnType(core.int, [core.Object]),
      isValidKey: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(MultiEquality, "package:collection/src/equality.dart");
    dart.setFieldSignature(MultiEquality, () => ({
      __proto__: dart.getFields(MultiEquality.__proto__),
      [_equalities]: dart.finalFieldType(core.Iterable$(equality.Equality$(E)))
    }));
    return MultiEquality;
  });
  equality.MultiEquality = equality.MultiEquality$();
  dart.addTypeTests(equality.MultiEquality, _is_MultiEquality_default);
  let C1;
  const _base = dart.privateName(equality, "_base");
  const _unordered = dart.privateName(equality, "_unordered");
  equality.DeepCollectionEquality = class DeepCollectionEquality extends core.Object {
    equals(e1, e2) {
      if (core.Set.is(e1)) {
        return core.Set.is(e2) && dart.test(new equality.SetEquality.new(this).equals(e1, e2));
      }
      if (core.Map.is(e1)) {
        return core.Map.is(e2) && dart.test(new equality.MapEquality.new({keys: this, values: this}).equals(e1, e2));
      }
      if (!dart.test(this[_unordered])) {
        if (core.List.is(e1)) {
          return core.List.is(e2) && dart.test(new equality.ListEquality.new(this).equals(e1, e2));
        }
        if (core.Iterable.is(e1)) {
          return core.Iterable.is(e2) && dart.test(new equality.IterableEquality.new(this).equals(e1, e2));
        }
      } else if (core.Iterable.is(e1)) {
        if (!core.List.is(e1)[$_equals](core.List.is(e2))) return false;
        return core.Iterable.is(e2) && dart.test(new equality.UnorderedIterableEquality.new(this).equals(e1, e2));
      }
      return this[_base].equals(e1, e2);
    }
    hash(o) {
      if (core.Set.is(o)) return new equality.SetEquality.new(this).hash(o);
      if (core.Map.is(o)) return new equality.MapEquality.new({keys: this, values: this}).hash(o);
      if (!dart.test(this[_unordered])) {
        if (core.List.is(o)) return new equality.ListEquality.new(this).hash(o);
        if (core.Iterable.is(o)) return new equality.IterableEquality.new(this).hash(o);
      } else if (core.Iterable.is(o)) {
        return new equality.UnorderedIterableEquality.new(this).hash(o);
      }
      return this[_base].hash(o);
    }
    isValidKey(o) {
      return core.Iterable.is(o) || core.Map.is(o) || dart.test(this[_base].isValidKey(o));
    }
  };
  (equality.DeepCollectionEquality.new = function(base) {
    if (base === void 0) base = C1 || CT.C1;
    this[_base] = base;
    this[_unordered] = false;
    ;
  }).prototype = equality.DeepCollectionEquality.prototype;
  (equality.DeepCollectionEquality.unordered = function(base) {
    if (base === void 0) base = C1 || CT.C1;
    this[_base] = base;
    this[_unordered] = true;
    ;
  }).prototype = equality.DeepCollectionEquality.prototype;
  dart.addTypeTests(equality.DeepCollectionEquality);
  equality.DeepCollectionEquality[dart.implements] = () => [equality.Equality];
  dart.setMethodSignature(equality.DeepCollectionEquality, () => ({
    __proto__: dart.getMethods(equality.DeepCollectionEquality.__proto__),
    equals: dart.fnType(core.bool, [core.Object, core.Object]),
    hash: dart.fnType(core.int, [core.Object]),
    isValidKey: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(equality.DeepCollectionEquality, "package:collection/src/equality.dart");
  dart.setFieldSignature(equality.DeepCollectionEquality, () => ({
    __proto__: dart.getFields(equality.DeepCollectionEquality.__proto__),
    [_base]: dart.finalFieldType(equality.Equality),
    [_unordered]: dart.finalFieldType(core.bool)
  }));
  equality.CaseInsensitiveEquality = class CaseInsensitiveEquality extends core.Object {
    equals(string1, string2) {
      core.String._check(string1);
      core.String._check(string2);
      return comparators.equalsIgnoreAsciiCase(string1, string2);
    }
    hash(string) {
      core.String._check(string);
      return comparators.hashIgnoreAsciiCase(string);
    }
    isValidKey(object) {
      return typeof object == 'string';
    }
  };
  (equality.CaseInsensitiveEquality.new = function() {
    ;
  }).prototype = equality.CaseInsensitiveEquality.prototype;
  dart.addTypeTests(equality.CaseInsensitiveEquality);
  equality.CaseInsensitiveEquality[dart.implements] = () => [equality.Equality$(core.String)];
  dart.setMethodSignature(equality.CaseInsensitiveEquality, () => ({
    __proto__: dart.getMethods(equality.CaseInsensitiveEquality.__proto__),
    equals: dart.fnType(core.bool, [core.Object, core.Object]),
    hash: dart.fnType(core.int, [core.Object]),
    isValidKey: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(equality.CaseInsensitiveEquality, "package:collection/src/equality.dart");
  dart.defineLazy(equality, {
    /*equality._HASH_MASK*/get _HASH_MASK() {
      return 2147483647;
    }
  });
  comparators.equalsIgnoreAsciiCase = function equalsIgnoreAsciiCase(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i = i + 1) {
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar === bChar) continue;
      if ((aChar ^ bChar) >>> 0 !== 32) return false;
      let aCharLowerCase = (aChar | 32) >>> 0;
      if (97 <= aCharLowerCase && aCharLowerCase <= 122) {
        continue;
      }
      return false;
    }
    return true;
  };
  comparators.hashIgnoreAsciiCase = function hashIgnoreAsciiCase(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i = i + 1) {
      let char = string[$codeUnitAt](i);
      if (97 <= char && char <= 122) char = char - 32;
      hash = 536870911 & hash + char;
      hash = 536870911 & hash + ((524287 & hash) << 10);
      hash = hash[$rightShift](6);
    }
    hash = 536870911 & hash + ((67108863 & hash) << 3);
    hash = hash[$rightShift](11);
    return 536870911 & hash + ((16383 & hash) << 15);
  };
  comparators.compareAsciiUpperCase = function compareAsciiUpperCase(a, b) {
    let defaultResult = 0;
    for (let i = 0; i < a.length; i = i + 1) {
      if (i >= b.length) return 1;
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar === bChar) continue;
      let aUpperCase = aChar;
      let bUpperCase = bChar;
      if (97 <= aChar && aChar <= 122) {
        aUpperCase = aUpperCase - 32;
      }
      if (97 <= bChar && bChar <= 122) {
        bUpperCase = bUpperCase - 32;
      }
      if (aUpperCase !== bUpperCase) return (aUpperCase - bUpperCase)[$sign];
      if (defaultResult === 0) defaultResult = aChar - bChar;
    }
    if (b.length > a.length) return -1;
    return defaultResult[$sign];
  };
  comparators.compareAsciiLowerCase = function compareAsciiLowerCase(a, b) {
    let defaultResult = 0;
    for (let i = 0; i < a.length; i = i + 1) {
      if (i >= b.length) return 1;
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar === bChar) continue;
      let aLowerCase = aChar;
      let bLowerCase = bChar;
      if (65 <= bChar && bChar <= 90) {
        bLowerCase = bLowerCase + 32;
      }
      if (65 <= aChar && aChar <= 90) {
        aLowerCase = aLowerCase + 32;
      }
      if (aLowerCase !== bLowerCase) return (aLowerCase - bLowerCase)[$sign];
      if (defaultResult === 0) defaultResult = aChar - bChar;
    }
    if (b.length > a.length) return -1;
    return defaultResult[$sign];
  };
  comparators.compareNatural = function compareNatural(a, b) {
    for (let i = 0; i < a.length; i = i + 1) {
      if (i >= b.length) return 1;
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar !== bChar) {
        return comparators._compareNaturally(a, b, i, aChar, bChar);
      }
    }
    if (b.length > a.length) return -1;
    return 0;
  };
  comparators.compareAsciiLowerCaseNatural = function compareAsciiLowerCaseNatural(a, b) {
    let defaultResult = 0;
    for (let i = 0; i < a.length; i = i + 1) {
      if (i >= b.length) return 1;
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar === bChar) continue;
      let aLowerCase = aChar;
      let bLowerCase = bChar;
      if (65 <= aChar && aChar <= 90) {
        aLowerCase = aLowerCase + 32;
      }
      if (65 <= bChar && bChar <= 90) {
        bLowerCase = bLowerCase + 32;
      }
      if (aLowerCase !== bLowerCase) {
        return comparators._compareNaturally(a, b, i, aLowerCase, bLowerCase);
      }
      if (defaultResult === 0) defaultResult = aChar - bChar;
    }
    if (b.length > a.length) return -1;
    return defaultResult[$sign];
  };
  comparators.compareAsciiUpperCaseNatural = function compareAsciiUpperCaseNatural(a, b) {
    let defaultResult = 0;
    for (let i = 0; i < a.length; i = i + 1) {
      if (i >= b.length) return 1;
      let aChar = a[$codeUnitAt](i);
      let bChar = b[$codeUnitAt](i);
      if (aChar === bChar) continue;
      let aUpperCase = aChar;
      let bUpperCase = bChar;
      if (97 <= aChar && aChar <= 122) {
        aUpperCase = aUpperCase - 32;
      }
      if (97 <= bChar && bChar <= 122) {
        bUpperCase = bUpperCase - 32;
      }
      if (aUpperCase !== bUpperCase) {
        return comparators._compareNaturally(a, b, i, aUpperCase, bUpperCase);
      }
      if (defaultResult === 0) defaultResult = aChar - bChar;
    }
    if (b.length > a.length) return -1;
    return defaultResult[$sign];
  };
  comparators._compareNaturally = function _compareNaturally(a, b, index, aChar, bChar) {
    if (!(aChar != bChar)) dart.assertFailed(null, "org-dartlang-app:///packages/collection/src/comparators.dart", 259, 10, "t(aChar != bCh");
    let aIsDigit = comparators._isDigit(aChar);
    let bIsDigit = comparators._isDigit(bChar);
    if (dart.test(aIsDigit)) {
      if (dart.test(bIsDigit)) {
        return comparators._compareNumerically(a, b, aChar, bChar, index);
      } else if (dart.notNull(index) > 0 && dart.test(comparators._isDigit(a[$codeUnitAt](dart.notNull(index) - 1)))) {
        return 1;
      }
    } else if (dart.test(bIsDigit) && dart.notNull(index) > 0 && dart.test(comparators._isDigit(b[$codeUnitAt](dart.notNull(index) - 1)))) {
      return -1;
    }
    return (dart.notNull(aChar) - dart.notNull(bChar))[$sign];
  };
  comparators._compareNumerically = function _compareNumerically(a, b, aChar, bChar, index) {
    if (dart.test(comparators._isNonZeroNumberSuffix(a, index))) {
      let result = comparators._compareDigitCount(a, b, index, index);
      if (result !== 0) return result;
      return (dart.notNull(aChar) - dart.notNull(bChar))[$sign];
    }
    let aIndex = index;
    let bIndex = index;
    if (aChar === 48) {
      do {
        aIndex = dart.notNull(aIndex) + 1;
        if (aIndex === a.length) return -1;
        aChar = a[$codeUnitAt](aIndex);
      } while (aChar === 48);
      if (!dart.test(comparators._isDigit(aChar))) return -1;
    } else if (bChar === 48) {
      do {
        bIndex = dart.notNull(bIndex) + 1;
        if (bIndex === b.length) return 1;
        bChar = b[$codeUnitAt](bIndex);
      } while (bChar === 48);
      if (!dart.test(comparators._isDigit(bChar))) return 1;
    }
    if (aChar != bChar) {
      let result = comparators._compareDigitCount(a, b, aIndex, bIndex);
      if (result !== 0) return result;
      return (dart.notNull(aChar) - dart.notNull(bChar))[$sign];
    }
    while (true) {
      let aIsDigit = false;
      let bIsDigit = false;
      aChar = 0;
      bChar = 0;
      if ((aIndex = dart.notNull(aIndex) + 1) < a.length) {
        aChar = a[$codeUnitAt](aIndex);
        aIsDigit = comparators._isDigit(aChar);
      }
      if ((bIndex = dart.notNull(bIndex) + 1) < b.length) {
        bChar = b[$codeUnitAt](bIndex);
        bIsDigit = comparators._isDigit(bChar);
      }
      if (dart.test(aIsDigit)) {
        if (dart.test(bIsDigit)) {
          if (aChar == bChar) continue;
          break;
        }
        return 1;
      } else if (dart.test(bIsDigit)) {
        return -1;
      } else {
        return (dart.notNull(aIndex) - dart.notNull(bIndex))[$sign];
      }
    }
    let result = comparators._compareDigitCount(a, b, aIndex, bIndex);
    if (result !== 0) return result;
    return (dart.notNull(aChar) - dart.notNull(bChar))[$sign];
  };
  comparators._compareDigitCount = function _compareDigitCount(a, b, i, j) {
    while ((i = dart.notNull(i) + 1) < a.length) {
      let aIsDigit = comparators._isDigit(a[$codeUnitAt](i));
      if ((j = dart.notNull(j) + 1) === b.length) return dart.test(aIsDigit) ? 1 : 0;
      let bIsDigit = comparators._isDigit(b[$codeUnitAt](j));
      if (dart.test(aIsDigit)) {
        if (dart.test(bIsDigit)) continue;
        return 1;
      } else if (dart.test(bIsDigit)) {
        return -1;
      } else {
        return 0;
      }
    }
    if ((j = dart.notNull(j) + 1) < b.length && dart.test(comparators._isDigit(b[$codeUnitAt](j)))) {
      return -1;
    }
    return 0;
  };
  comparators._isDigit = function _isDigit(charCode) {
    return (dart.notNull(charCode) ^ 48) >>> 0 <= 9;
  };
  comparators._isNonZeroNumberSuffix = function _isNonZeroNumberSuffix(string, index) {
    while ((index = dart.notNull(index) - 1) >= 0) {
      let char = string[$codeUnitAt](index);
      if (char !== 48) return comparators._isDigit(char);
    }
    return false;
  };
  dart.defineLazy(comparators, {
    /*comparators._zero*/get _zero() {
      return 48;
    },
    /*comparators._upperCaseA*/get _upperCaseA() {
      return 65;
    },
    /*comparators._upperCaseZ*/get _upperCaseZ() {
      return 90;
    },
    /*comparators._lowerCaseA*/get _lowerCaseA() {
      return 97;
    },
    /*comparators._lowerCaseZ*/get _lowerCaseZ() {
      return 122;
    },
    /*comparators._asciiCaseBit*/get _asciiCaseBit() {
      return 32;
    }
  });
  dart.trackLibraries("packages/collection/src/comparators", {
    "package:collection/src/equality.dart": equality,
    "package:collection/src/comparators.dart": comparators
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["equality.dart","comparators.dart"],"names":[],"mappings":"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","file":"comparators.ddc.js"}');
  // Exports:
  return {
    src__equality: equality,
    src__comparators: comparators
  };
});

//# sourceMappingURL=comparators.ddc.js.map

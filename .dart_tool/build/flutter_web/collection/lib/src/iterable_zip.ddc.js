define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const iterable_zip = Object.create(dart.library);
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $isEmpty = dartx.isEmpty;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const CT = Object.create(null);
  const _iterables = dart.privateName(iterable_zip, "_iterables");
  const _is_IterableZip_default = Symbol('_is_IterableZip_default');
  iterable_zip.IterableZip$ = dart.generic(T => {
    let IteratorOfT = () => (IteratorOfT = dart.constFn(core.Iterator$(T)))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIteratorOfT = () => (IterableOfTToIteratorOfT = dart.constFn(dart.fnType(IteratorOfT(), [IterableOfT()])))();
    let _IteratorZipOfT = () => (_IteratorZipOfT = dart.constFn(iterable_zip._IteratorZip$(T)))();
    class IterableZip extends collection.IterableBase$(core.List$(T)) {
      get iterator() {
        let iterators = this[_iterables][$map](IteratorOfT(), dart.fn(x => x[$iterator], IterableOfTToIteratorOfT()))[$toList]({growable: false});
        return new (_IteratorZipOfT()).new(iterators);
      }
    }
    (IterableZip.new = function(iterables) {
      this[_iterables] = iterables;
      IterableZip.__proto__.new.call(this);
      ;
    }).prototype = IterableZip.prototype;
    dart.addTypeTests(IterableZip);
    IterableZip.prototype[_is_IterableZip_default] = true;
    dart.setGetterSignature(IterableZip, () => ({
      __proto__: dart.getGetters(IterableZip.__proto__),
      iterator: core.Iterator$(core.List$(T)),
      [$iterator]: core.Iterator$(core.List$(T))
    }));
    dart.setLibraryUri(IterableZip, "package:collection/src/iterable_zip.dart");
    dart.setFieldSignature(IterableZip, () => ({
      __proto__: dart.getFields(IterableZip.__proto__),
      [_iterables]: dart.finalFieldType(core.Iterable$(core.Iterable$(T)))
    }));
    dart.defineExtensionAccessors(IterableZip, ['iterator']);
    return IterableZip;
  });
  iterable_zip.IterableZip = iterable_zip.IterableZip$();
  dart.addTypeTests(iterable_zip.IterableZip, _is_IterableZip_default);
  const _current = dart.privateName(iterable_zip, "_current");
  const _iterators = dart.privateName(iterable_zip, "_iterators");
  const _is__IteratorZip_default = Symbol('_is__IteratorZip_default');
  iterable_zip._IteratorZip$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _IteratorZip extends core.Object {
      moveNext() {
        if (dart.test(this[_iterators][$isEmpty])) return false;
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i = i + 1) {
          if (!dart.test(this[_iterators][$_get](i).moveNext())) {
            this[_current] = null;
            return false;
          }
        }
        this[_current] = ListOfT().new(this[_iterators][$length]);
        for (let i = 0; i < dart.notNull(this[_iterators][$length]); i = i + 1) {
          this[_current][$_set](i, this[_iterators][$_get](i).current);
        }
        return true;
      }
      get current() {
        return this[_current];
      }
    }
    (_IteratorZip.new = function(iterators) {
      this[_current] = null;
      this[_iterators] = iterators;
      ;
    }).prototype = _IteratorZip.prototype;
    dart.addTypeTests(_IteratorZip);
    _IteratorZip.prototype[_is__IteratorZip_default] = true;
    _IteratorZip[dart.implements] = () => [core.Iterator$(core.List$(T))];
    dart.setMethodSignature(_IteratorZip, () => ({
      __proto__: dart.getMethods(_IteratorZip.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_IteratorZip, () => ({
      __proto__: dart.getGetters(_IteratorZip.__proto__),
      current: core.List$(T)
    }));
    dart.setLibraryUri(_IteratorZip, "package:collection/src/iterable_zip.dart");
    dart.setFieldSignature(_IteratorZip, () => ({
      __proto__: dart.getFields(_IteratorZip.__proto__),
      [_iterators]: dart.finalFieldType(core.List$(core.Iterator$(T))),
      [_current]: dart.fieldType(core.List$(T))
    }));
    return _IteratorZip;
  });
  iterable_zip._IteratorZip = iterable_zip._IteratorZip$();
  dart.addTypeTests(iterable_zip._IteratorZip, _is__IteratorZip_default);
  dart.trackLibraries("packages/collection/src/iterable_zip", {
    "package:collection/src/iterable_zip.dart": iterable_zip
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["iterable_zip.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;AAuBQ,wBAAY,AAAW,AAAuB,sCAAnB,QAAC,KAAM,AAAE,CAAD,8DAA4B;AAEnE,cAAW,6BAAgB,SAAS;MACtC;;gCARkC;MAA6B,mBAAE,SAAS;AAA1E;;IAA0E;;;;;;;;;;;;;;;;;;;;;;;;;AAkBxE,sBAAI,AAAW,6BAAS,MAAO;AAC/B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAQ,IAAA,AAAC,CAAA;AACtC,yBAAK,AAAU,AAAI,wBAAH,CAAC;YACf,iBAAW;AACX,kBAAO;;;QAGX,iBAAe,cAAK,AAAW;AAC/B,iBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAW,4BAAQ,IAAA,AAAC,CAAA;UACtC,AAAQ,sBAAC,CAAC,EAAI,AAAU,AAAI,wBAAH,CAAC;;AAE5B,cAAO;MACT;;AAEuB;MAAQ;;iCAjBA;MAFvB;MAE+C,mBAAE,SAAS","file":"iterable_zip.ddc.js"}');
  // Exports:
  return {
    src__iterable_zip: iterable_zip
  };
});

//# sourceMappingURL=iterable_zip.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = Object.create(dart.library);
  const $compareTo = dartx.compareTo;
  const CT = Object.create(null);
  const _is_Pair_default = Symbol('_is_Pair_default');
  const Pair_first = dart.privateName(utils, "Pair.first");
  const Pair_last = dart.privateName(utils, "Pair.last");
  utils.Pair$ = dart.generic((E, F) => {
    class Pair extends core.Object {
      get first() {
        return this[first$];
      }
      set first(value) {
        this[first$] = E._check(value);
      }
      get last() {
        return this[last$];
      }
      set last(value) {
        this[last$] = F._check(value);
      }
    }
    (Pair.new = function(first, last) {
      this[first$] = first;
      this[last$] = last;
      ;
    }).prototype = Pair.prototype;
    dart.addTypeTests(Pair);
    Pair.prototype[_is_Pair_default] = true;
    const first$ = Pair_first;
    const last$ = Pair_last;
    dart.setLibraryUri(Pair, "package:collection/src/utils.dart");
    dart.setFieldSignature(Pair, () => ({
      __proto__: dart.getFields(Pair.__proto__),
      first: dart.fieldType(E),
      last: dart.fieldType(F)
    }));
    return Pair;
  });
  utils.Pair = utils.Pair$();
  dart.addTypeTests(utils.Pair, _is_Pair_default);
  utils.defaultCompare = function defaultCompare(T) {
    return dart.fn((value1, value2) => core.Comparable.as(value1)[$compareTo](value2), dart.fnType(core.int, [T, T]));
  };
  dart.trackLibraries("packages/collection/src/utils", {
    "package:collection/src/utils.dart": utils
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart"],"names":[],"mappings":";;;;;;;;;;;;;MAMI;;;;;;MACA;;;;;;;yBAEQ,OAAY;MAAZ;MAAY;;IAAK;;;;;;;;;;;;;;;;AAKzB,oBAAC,QAAQ,WAAmB,AAAe,mBAAtB,MAAM,cAA0B,MAAM;EAAC","file":"utils.ddc.js"}');
  // Exports:
  return {
    src__utils: utils
  };
});

//# sourceMappingURL=utils.ddc.js.map

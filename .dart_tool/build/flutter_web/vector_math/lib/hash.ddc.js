define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const hash = Object.create(dart.library);
  const $hashCode = dartx.hashCode;
  const $fold = dartx.fold;
  const $rightShift = dartx['>>'];
  let intAndObjectToint = () => (intAndObjectToint = dart.constFn(dart.fnType(core.int, [core.int, core.Object])))();
  const CT = Object.create(null);
  hash.hashObjects = function hashObjects(objects) {
    return hash._finish(objects[$fold](core.int, 0, dart.fn((h, i) => hash._combine(h, dart.hashCode(i)), intAndObjectToint())));
  };
  hash._combine = function _combine(hash, value) {
    hash = 536870911 & dart.notNull(hash) + dart.notNull(value);
    hash = 536870911 & dart.notNull(hash) + ((524287 & dart.notNull(hash)) << 10);
    return (dart.notNull(hash) ^ hash[$rightShift](6)) >>> 0;
  };
  hash._finish = function _finish(hash) {
    hash = 536870911 & dart.notNull(hash) + ((67108863 & dart.notNull(hash)) << 3);
    hash = (dart.notNull(hash) ^ hash[$rightShift](11)) >>> 0;
    return 536870911 & dart.notNull(hash) + ((16383 & dart.notNull(hash)) << 15);
  };
  dart.trackLibraries("packages/vector_math/hash", {
    "package:vector_math/hash.dart": hash
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["hash.dart"],"names":[],"mappings":";;;;;;;;;;;0CAOiC;AAC7B,wBAAQ,AAAQ,OAAD,kBAAW,GAAG,SAAK,GAAU,MAAM,cAAS,CAAC,EAAI,cAAF,CAAC;EAAY;oCAG9D,MAAU;IACzB,OAAO,AAAW,YAAQ,aAAL,IAAI,iBAAG,KAAK;IACjC,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,sBAAE,IAAI,MAAK;AACpD,UAAY,eAAL,IAAI,IAAI,AAAK,IAAD,cAAI;EACzB;kCAEgB;IACd,OAAO,AAAW,YAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,wBAAE,IAAI,MAAK;IACpD,OAAY,cAAL,IAAI,IAAI,AAAK,IAAD,cAAI;AACvB,UAAO,AAAW,aAAQ,aAAL,IAAI,KAAwB,CAAnB,AAAW,qBAAE,IAAI,MAAK;EACtD","file":"hash.ddc.js"}');
  // Exports:
  return {
    hash: hash
  };
});

//# sourceMappingURL=hash.ddc.js.map

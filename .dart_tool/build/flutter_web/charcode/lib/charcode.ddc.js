define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const charcode = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/charcode/charcode", {
    "package:charcode/charcode.dart": charcode
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"charcode.ddc.js"}');
  // Exports:
  return {
    charcode: charcode
  };
});

//# sourceMappingURL=charcode.ddc.js.map

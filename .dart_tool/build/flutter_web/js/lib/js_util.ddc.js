define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js_util = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/js/js_util", {
    "package:js/js_util.dart": js_util
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"js_util.ddc.js"}');
  // Exports:
  return {
    js_util: js_util
  };
});

//# sourceMappingURL=js_util.ddc.js.map

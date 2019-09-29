define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const cupertino = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/cupertino", {
    "package:flutter/cupertino.dart": cupertino
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"cupertino.ddc.js"}');
  // Exports:
  return {
    cupertino: cupertino
  };
});

//# sourceMappingURL=cupertino.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const painting = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/painting", {
    "package:flutter/painting.dart": painting
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"painting.ddc.js"}');
  // Exports:
  return {
    painting: painting
  };
});

//# sourceMappingURL=painting.ddc.js.map

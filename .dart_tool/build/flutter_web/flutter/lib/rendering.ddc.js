define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const rendering = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/rendering", {
    "package:flutter/rendering.dart": rendering
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"rendering.ddc.js"}');
  // Exports:
  return {
    rendering: rendering
  };
});

//# sourceMappingURL=rendering.ddc.js.map

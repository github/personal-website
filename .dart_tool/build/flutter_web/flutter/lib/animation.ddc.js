define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const animation = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/animation", {
    "package:flutter/animation.dart": animation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"animation.ddc.js"}');
  // Exports:
  return {
    animation: animation
  };
});

//# sourceMappingURL=animation.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const foundation = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/foundation", {
    "package:flutter/foundation.dart": foundation
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"foundation.ddc.js"}');
  // Exports:
  return {
    foundation: foundation
  };
});

//# sourceMappingURL=foundation.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const semantics = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/semantics", {
    "package:flutter/semantics.dart": semantics
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"semantics.ddc.js"}');
  // Exports:
  return {
    semantics: semantics
  };
});

//# sourceMappingURL=semantics.ddc.js.map

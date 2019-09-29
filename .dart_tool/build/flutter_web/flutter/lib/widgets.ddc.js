define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widgets = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/flutter/widgets", {
    "package:flutter/widgets.dart": widgets
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"widgets.ddc.js"}');
  // Exports:
  return {
    widgets: widgets
  };
});

//# sourceMappingURL=widgets.ddc.js.map

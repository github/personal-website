define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const html = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/universal_html/prefer_universal/html", {
    "package:universal_html/prefer_universal/html.dart": html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"html.ddc.js"}');
  // Exports:
  return {
    prefer_universal__html: html
  };
});

//# sourceMappingURL=html.ddc.js.map

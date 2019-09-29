define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const url_launcher = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/personal_website/plugins/url_launcher/url_launcher", {
    "package:personal_website/plugins/url_launcher/url_launcher.dart": url_launcher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"url_launcher.ddc.js"}');
  // Exports:
  return {
    plugins__url_launcher__url_launcher: url_launcher
  };
});

//# sourceMappingURL=url_launcher.ddc.js.map

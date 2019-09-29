define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/fb_auth/data/services/auth/auth", {
    "package:fb_auth/data/services/auth/auth.dart": auth
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"auth.ddc.js"}');
  // Exports:
  return {
    data__services__auth__auth: auth
  };
});

//# sourceMappingURL=auth.ddc.js.map

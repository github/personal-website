define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const constants = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(constants, {
    /*constants.kBreakpoint*/get kBreakpoint() {
      return 720;
    },
    /*constants.kDrawerWidth*/get kDrawerWidth() {
      return 200;
    }
  });
  dart.trackLibraries("packages/personal_website/data/utils/constants", {
    "package:personal_website/data/utils/constants.dart": constants
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["constants.dart"],"names":[],"mappings":";;;;;;;;MAAM,qBAAW;;;MACX,sBAAY","file":"constants.ddc.js"}');
  // Exports:
  return {
    data__utils__constants: constants
  };
});

//# sourceMappingURL=constants.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const firestore = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/firebase/firestore", {
    "package:firebase/firestore.dart": firestore
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"firestore.ddc.js"}');
  // Exports:
  return {
    firestore: firestore
  };
});

//# sourceMappingURL=firestore.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fb_firestore = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/personal_website/plugins/fb_firestore/fb_firestore", {
    "package:personal_website/plugins/fb_firestore/fb_firestore.dart": fb_firestore
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"fb_firestore.ddc.js"}');
  // Exports:
  return {
    plugins__fb_firestore__fb_firestore: fb_firestore
  };
});

//# sourceMappingURL=fb_firestore.ddc.js.map

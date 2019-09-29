define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const file_upload = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/personal_website/plugins/file_upload/file_upload", {
    "package:personal_website/plugins/file_upload/file_upload.dart": file_upload
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"file_upload.ddc.js"}');
  // Exports:
  return {
    plugins__file_upload__file_upload: file_upload
  };
});

//# sourceMappingURL=file_upload.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const streams = Object.create(dart.library);
  const CT = Object.create(null);
  dart.trackLibraries("packages/rxdart/streams", {
    "package:rxdart/streams.dart": streams
  }, {
  }, '{"version":3,"sourceRoot":"","sources":[],"names":[],"mappings":"","file":"streams.ddc.js"}');
  // Exports:
  return {
    streams: streams
  };
});

//# sourceMappingURL=streams.ddc.js.map

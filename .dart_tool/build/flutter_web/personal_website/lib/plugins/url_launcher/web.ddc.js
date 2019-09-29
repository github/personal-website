define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const web = Object.create(dart.library);
  const $open = dartx.open;
  const CT = Object.create(null);
  web.UrlUtils = class UrlUtils extends core.Object {
    static open(url, opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      html.window[$open](url, name);
    }
  };
  (web.UrlUtils.__ = function() {
    ;
  }).prototype = web.UrlUtils.prototype;
  dart.addTypeTests(web.UrlUtils);
  dart.setLibraryUri(web.UrlUtils, "package:personal_website/plugins/url_launcher/web.dart");
  dart.trackLibraries("packages/personal_website/plugins/url_launcher/web", {
    "package:personal_website/plugins/url_launcher/web.dart": web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web.dart"],"names":[],"mappings":";;;;;;;;;;gBAK0B;UAAa;MAC9B,AAAO,mBAAK,GAAG,EAAE,IAAI;IAC5B;;;;EAJY","file":"web.ddc.js"}');
  // Exports:
  return {
    plugins__url_launcher__web: web
  };
});

//# sourceMappingURL=web.ddc.js.map

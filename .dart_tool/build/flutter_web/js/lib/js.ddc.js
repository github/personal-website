define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: js._Anonymous.prototype
      });
    }
  });
  const JS_name = dart.privateName(js, "JS.name");
  js.JS = class JS extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
  };
  (js.JS.new = function(name) {
    if (name === void 0) name = null;
    this[name$] = name;
    ;
  }).prototype = js.JS.prototype;
  dart.addTypeTests(js.JS);
  const name$ = JS_name;
  dart.setLibraryUri(js.JS, "package:js/js.dart");
  dart.setFieldSignature(js.JS, () => ({
    __proto__: dart.getFields(js.JS.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  js._Anonymous = class _Anonymous extends core.Object {};
  (js._Anonymous.new = function() {
    ;
  }).prototype = js._Anonymous.prototype;
  dart.addTypeTests(js._Anonymous);
  dart.setLibraryUri(js._Anonymous, "package:js/js.dart");
  let C0;
  dart.defineLazy(js, {
    /*js.anonymous*/get anonymous() {
      return C0 || CT.C0;
    }
  });
  dart.trackLibraries("packages/js/js", {
    "package:js/js.dart": js
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["js.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAiBe;;;;;;;wBACE;;;;EAAM;;;;;;;;;;;EAIH;;;;;MASH,YAAS","file":"js.ddc.js"}');
  // Exports:
  return {
    js: js
  };
});

//# sourceMappingURL=js.ddc.js.map

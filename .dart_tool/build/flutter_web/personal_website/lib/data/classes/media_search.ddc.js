define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const media_search = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: media_search.MediaType.prototype,
        [_name$]: "MediaType.image",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: media_search.MediaType.prototype,
        [_name$]: "MediaType.video",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], media_search.MediaType);
    }
  });
  const _name$ = dart.privateName(media_search, "_name");
  let C0;
  media_search.MediaSearch = class MediaSearch extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get thumbnail() {
      return this[thumbnail$];
    }
    set thumbnail(value) {
      super.thumbnail = value;
    }
    get preview() {
      let t0;
      t0 = this.thumbnail;
      return t0 == null ? this.url : t0;
    }
  };
  (media_search.MediaSearch.new = function(opts) {
    let type = opts && 'type' in opts ? opts.type : C0 || CT.C0;
    let url = opts && 'url' in opts ? opts.url : null;
    let thumbnail = opts && 'thumbnail' in opts ? opts.thumbnail : null;
    this[type$] = type;
    this[url$] = url;
    this[thumbnail$] = thumbnail;
    ;
  }).prototype = media_search.MediaSearch.prototype;
  dart.addTypeTests(media_search.MediaSearch);
  const type$ = Symbol("MediaSearch.type");
  const url$ = Symbol("MediaSearch.url");
  const thumbnail$ = Symbol("MediaSearch.thumbnail");
  dart.setGetterSignature(media_search.MediaSearch, () => ({
    __proto__: dart.getGetters(media_search.MediaSearch.__proto__),
    preview: core.String
  }));
  dart.setLibraryUri(media_search.MediaSearch, "package:personal_website/data/classes/media_search.dart");
  dart.setFieldSignature(media_search.MediaSearch, () => ({
    __proto__: dart.getFields(media_search.MediaSearch.__proto__),
    type: dart.finalFieldType(media_search.MediaType),
    url: dart.finalFieldType(core.String),
    thumbnail: dart.finalFieldType(core.String)
  }));
  let C1;
  let C2;
  media_search.MediaType = class MediaType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (media_search.MediaType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = media_search.MediaType.prototype;
  dart.addTypeTests(media_search.MediaType);
  dart.setLibraryUri(media_search.MediaType, "package:personal_website/data/classes/media_search.dart");
  dart.setFieldSignature(media_search.MediaType, () => ({
    __proto__: dart.getFields(media_search.MediaType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(media_search.MediaType, ['toString']);
  media_search.MediaType.image = C0 || CT.C0;
  media_search.MediaType.video = C1 || CT.C1;
  media_search.MediaType.values = C2 || CT.C2;
  dart.trackLibraries("packages/personal_website/data/classes/media_search", {
    "package:personal_website/data/classes/media_search.dart": media_search
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["media_search.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOkB;;;;;;IACH;;;;;;IACA;;;;;;;;AACS;mBAAU,OAAG;IAAG;;;QAR/B;QACA;QACA;IAFA;IACA;IACA;;EACL;;;;;;;;;;;;;;;;;;;;;IAQ0B;;gDAAzB;;;;EAAyB","file":"media_search.ddc.js"}');
  // Exports:
  return {
    data__classes__media_search: media_search
  };
});

//# sourceMappingURL=media_search.ddc.js.map

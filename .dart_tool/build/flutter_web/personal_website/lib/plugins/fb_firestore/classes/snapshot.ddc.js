define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const snapshot = Object.create(dart.library);
  const CT = Object.create(null);
  const FbDocumentSnapshot_documentId = dart.privateName(snapshot, "FbDocumentSnapshot.documentId");
  const FbDocumentSnapshot_data = dart.privateName(snapshot, "FbDocumentSnapshot.data");
  snapshot.FbDocumentSnapshot = class FbDocumentSnapshot extends core.Object {
    get documentId() {
      return this[documentId$];
    }
    set documentId(value) {
      super.documentId = value;
    }
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
  };
  (snapshot.FbDocumentSnapshot.new = function(documentId, opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    this[documentId$] = documentId;
    this[data$] = data;
    ;
  }).prototype = snapshot.FbDocumentSnapshot.prototype;
  dart.addTypeTests(snapshot.FbDocumentSnapshot);
  const documentId$ = FbDocumentSnapshot_documentId;
  const data$ = FbDocumentSnapshot_data;
  dart.setLibraryUri(snapshot.FbDocumentSnapshot, "package:personal_website/plugins/fb_firestore/classes/snapshot.dart");
  dart.setFieldSignature(snapshot.FbDocumentSnapshot, () => ({
    __proto__: dart.getFields(snapshot.FbDocumentSnapshot.__proto__),
    documentId: dart.finalFieldType(core.String),
    data: dart.finalFieldType(core.Map$(core.String, dart.dynamic))
  }));
  dart.trackLibraries("packages/personal_website/plugins/fb_firestore/classes/snapshot", {
    "package:personal_website/plugins/fb_firestore/classes/snapshot.dart": snapshot
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["snapshot.dart"],"names":[],"mappings":";;;;;;;;;;IACe;;;;;;IACc;;;;;;;8CAGpB;QACA;IADA;IACA;;EACL","file":"snapshot.ddc.js"}');
  // Exports:
  return {
    plugins__fb_firestore__classes__snapshot: snapshot
  };
});

//# sourceMappingURL=snapshot.ddc.js.map

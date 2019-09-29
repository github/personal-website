define(['dart_sdk', 'packages/personal_website/plugins/fb_firestore/classes/snapshot', 'packages/firebase/src/app', 'packages/firebase/firebase'], function(dart_sdk, packages__personal_website__plugins__fb_firestore__classes__snapshot, packages__firebase__src__app, packages__firebase__firebase) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const snapshot = packages__personal_website__plugins__fb_firestore__classes__snapshot.plugins__fb_firestore__classes__snapshot;
  const firestore = packages__firebase__src__app.src__firestore;
  const top_level = packages__firebase__firebase.src__top_level;
  const web = Object.create(dart.library);
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  let JSArrayOfFbDocumentSnapshot = () => (JSArrayOfFbDocumentSnapshot = dart.constFn(_interceptors.JSArray$(snapshot.FbDocumentSnapshot)))();
  let DocumentSnapshotToNull = () => (DocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [firestore.DocumentSnapshot])))();
  let ListOfFbDocumentSnapshot = () => (ListOfFbDocumentSnapshot = dart.constFn(core.List$(snapshot.FbDocumentSnapshot)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  web.FbFirestore = class FbFirestore extends core.Object {
    static getDocs(path) {
      return async.async(ListOfFbDocumentSnapshot(), function* getDocs() {
        let t0;
        let _data = (yield web.FbFirestore._firestore.collection(path).get());
        if (_data == null) return null;
        if ((t0 = _data, t0 == null ? null : t0.docs) == null || dart.test(_data.docs[$isEmpty])) return JSArrayOfFbDocumentSnapshot().of([]);
        let _items = JSArrayOfFbDocumentSnapshot().of([]);
        _data.docs[$forEach](dart.fn(d => {
          _items[$add](new snapshot.FbDocumentSnapshot.new(d.id, {data: web.FbFirestore._getData(d)}));
        }, DocumentSnapshotToNull()));
        return _items;
      });
    }
    static editDoc(path, data, opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      return async.async(dart.dynamic, function* editDoc() {
        if (id == null) {
          yield web.FbFirestore._firestore.collection(path).add(data);
        } else {
          yield web.FbFirestore._firestore.collection(path).doc(id).set(data);
        }
      });
    }
    static deleteDoc(path) {
      return async.async(dart.dynamic, function* deleteDoc() {
        yield web.FbFirestore._firestore.doc(path).delete();
      });
    }
    static getDoc(path) {
      return async.async(snapshot.FbDocumentSnapshot, function* getDoc() {
        let _data = (yield web.FbFirestore._firestore.doc(path).get());
        return new snapshot.FbDocumentSnapshot.new(_data.id, {data: web.FbFirestore._getData(_data)});
      });
    }
    static _getData(d) {
      let t0;
      if ((t0 = d, t0 == null ? null : t0.data()) == null) return null;
      return MapOfString$dynamic()._check(convert.json.decode(convert.json.encode(d.data())));
    }
  };
  (web.FbFirestore.__ = function() {
    ;
  }).prototype = web.FbFirestore.prototype;
  dart.addTypeTests(web.FbFirestore);
  dart.setLibraryUri(web.FbFirestore, "package:personal_website/plugins/fb_firestore/web.dart");
  dart.defineLazy(web.FbFirestore, {
    /*web.FbFirestore._firestore*/get _firestore() {
      return top_level.firestore();
    },
    set _firestore(_) {}
  });
  dart.trackLibraries("packages/personal_website/plugins/fb_firestore/web", {
    "package:personal_website/plugins/fb_firestore/web.dart": web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;mBAWyD;AAAR;;AACvC,qBAAQ,MAAM,AAAW,AAAiB,sCAAN,IAAI;AAC9C,YAAI,AAAM,KAAD,IAAI,MAAM,MAAO;AAC1B,YAAgB,CAAL,KAAP,KAAK,sBAAE,YAAQ,kBAAQ,AAAM,AAAK,KAAN,kBAAe,MAAO;AAC7B,qBAAS;QAClC,AAAM,AAAK,KAAN,gBAAc,QAAC;UAClB,AAAO,MAAD,OAAK,oCAAmB,AAAE,CAAD,YAAW,yBAAS,CAAC;;AAEtD,cAAO,OAAM;MACf;;mBAE6B,MAA2B;UAC5C;AADS;AAEnB,YAAI,AAAG,EAAD,IAAI;UACR,MAAM,AAAW,AAAiB,sCAAN,IAAI,MAAM,IAAI;;UAE1C,MAAM,AAAW,AAAiB,AAAQ,sCAAd,IAAI,MAAM,EAAE,MAAM,IAAI;;MAEtD;;qBAE+B;AAAR;QACrB,MAAM,AAAW,AAAU,+BAAN,IAAI;MAC3B;;kBAEgD;AAAR;AAChC,qBAAQ,MAAM,AAAW,AAAU,+BAAN,IAAI;AACvC,cAAO,qCAAmB,AAAM,KAAD,YAAW,yBAAS,KAAK;MAC1D;;oBAEsD;;AACpD,UAAc,CAAP,KAAH,CAAC,sBAAE,cAAU,MAAM,MAAO;AAC9B,0CAAO,AAAK,oBAAO,AAAK,oBAAO,AAAE,CAAD;IAClC;;;;EAnCe;;;;MACE,0BAAU;YAAG","file":"web.ddc.js"}');
  // Exports:
  return {
    plugins__fb_firestore__web: web
  };
});

//# sourceMappingURL=web.ddc.js.map

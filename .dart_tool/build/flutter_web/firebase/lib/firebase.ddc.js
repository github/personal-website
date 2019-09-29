define(['dart_sdk', 'packages/firebase/src/app'], function(dart_sdk, packages__firebase__src__app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const js_util = dart_sdk.js_util;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__firebase__src__app.src__utils;
  const js$ = packages__firebase__src__app.src__js;
  const app = packages__firebase__src__app.src__app;
  const auth = packages__firebase__src__app.src__auth;
  const database = packages__firebase__src__app.src__database;
  const storage = packages__firebase__src__app.src__storage;
  const firestore = packages__firebase__src__app.src__firestore;
  const messaging = Object.create(dart.library);
  const firebase = Object.create(dart.library);
  const top_level = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let StreamControllerOfPayload = () => (StreamControllerOfPayload = dart.constFn(async.StreamController$(messaging.Payload)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfNull = () => (StreamControllerOfNull = dart.constFn(async.StreamController$(core.Null)))();
  let StreamOfNull = () => (StreamOfNull = dart.constFn(async.Stream$(core.Null)))();
  let ExpandoOfMessaging = () => (ExpandoOfMessaging = dart.constFn(core.Expando$(messaging.Messaging)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let dynamicToApp = () => (dynamicToApp = dart.constFn(dart.fnType(app.App, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(utils.dartify, ObjectTodynamic());
    }
  });
  const _onMessageController = dart.privateName(messaging, "_onMessageController");
  const _onTokenRefresh = dart.privateName(messaging, "_onTokenRefresh");
  const _onBackgroundMessage = dart.privateName(messaging, "_onBackgroundMessage");
  let C0;
  const _createOnMessageStream = dart.privateName(messaging, "_createOnMessageStream");
  const _createBackgroundMessagedStream = dart.privateName(messaging, "_createBackgroundMessagedStream");
  const _createNullStream = dart.privateName(messaging, "_createNullStream");
  messaging.Messaging = class Messaging extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.messaging.Messaging, "firebase.messaging.Messaging")) {
    static getInstance(jsObject) {
      let t3, t2, t1, t0;
      if (jsObject == null) {
        return null;
      }
      t0 = messaging.Messaging._expando;
      t1 = jsObject;
      t2 = t0._get(t1);
      return t2 == null ? (t3 = new messaging.Messaging._fromJsObject(jsObject), t0._set(t1, t3), t3) : t2;
    }
    usePublicVapidKey(key) {
      this.jsObject.usePublicVapidKey(key);
    }
    useServiceWorker(registration) {
      this.jsObject.useServiceWorker(registration);
    }
    deleteToken(token) {
      this.jsObject.deleteToken(token);
    }
    requestPermission() {
      return async.async(dart.dynamic, (function* requestPermission() {
        yield utils.handleThenable(dart.dynamic, this.jsObject.requestPermission()).then(dart.dynamic, C0 || CT.C0);
      }).bind(this));
    }
    getToken() {
      return utils.handleThenable(core.String, this.jsObject.getToken());
    }
    get onMessage() {
      return this[_createOnMessageStream](this[_onMessageController]);
    }
    get onBackgroundMessage() {
      return this[_createBackgroundMessagedStream](this[_onBackgroundMessage]);
    }
    get onTokenRefresh() {
      return this[_createNullStream](this[_onTokenRefresh]);
    }
    [_createOnMessageStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        this.jsObject.onMessage(nextWrapper, errorWrapper);
      }
      return controller.stream;
    }
    [_createBackgroundMessagedStream](controller) {
      if (controller == null) {
        controller = StreamControllerOfPayload().broadcast({sync: true});
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(payload => {
          controller.add(new messaging.Payload._fromJsObject(dart.anonymousJSType("PayloadJsImpl")._check(payload)));
        }, dynamicToNull()));
        this.jsObject.setBackgroundMessageHandler(nextWrapper);
      }
      return controller.stream;
    }
    [_createNullStream](controller) {
      if (controller == null) {
        let nextWrapper = js.allowInterop(dynamicToNull(), dart.fn(_ => null, dynamicToNull()));
        let errorWrapper = js.allowInterop(dynamicToNull(), dart.fn(e => {
          controller.addError(e);
        }, dynamicToNull()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onTokenRefresh(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfNull().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return StreamOfNull()._check(controller.stream);
    }
  };
  (messaging.Messaging._fromJsObject = function(jsObject) {
    this[_onMessageController] = null;
    this[_onTokenRefresh] = null;
    this[_onBackgroundMessage] = null;
    messaging.Messaging.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Messaging.prototype;
  dart.addTypeTests(messaging.Messaging);
  dart.setMethodSignature(messaging.Messaging, () => ({
    __proto__: dart.getMethods(messaging.Messaging.__proto__),
    usePublicVapidKey: dart.fnType(dart.void, [core.String]),
    useServiceWorker: dart.fnType(dart.void, [dart.dynamic]),
    deleteToken: dart.fnType(dart.void, [core.String]),
    requestPermission: dart.fnType(async.Future, []),
    getToken: dart.fnType(async.Future$(core.String), []),
    [_createOnMessageStream]: dart.fnType(async.Stream$(messaging.Payload), [async.StreamController$(messaging.Payload)]),
    [_createBackgroundMessagedStream]: dart.fnType(async.Stream$(messaging.Payload), [async.StreamController$(messaging.Payload)]),
    [_createNullStream]: dart.fnType(async.Stream$(core.Null), [async.StreamController])
  }));
  dart.setGetterSignature(messaging.Messaging, () => ({
    __proto__: dart.getGetters(messaging.Messaging.__proto__),
    onMessage: async.Stream$(messaging.Payload),
    onBackgroundMessage: async.Stream$(messaging.Payload),
    onTokenRefresh: async.Stream$(core.Null)
  }));
  dart.setLibraryUri(messaging.Messaging, "package:firebase/src/messaging.dart");
  dart.setFieldSignature(messaging.Messaging, () => ({
    __proto__: dart.getFields(messaging.Messaging.__proto__),
    [_onMessageController]: dart.fieldType(async.StreamController$(messaging.Payload)),
    [_onTokenRefresh]: dart.fieldType(async.StreamController$(core.Null)),
    [_onBackgroundMessage]: dart.fieldType(async.StreamController$(messaging.Payload))
  }));
  dart.defineLazy(messaging.Messaging, {
    /*messaging.Messaging._expando*/get _expando() {
      return new (ExpandoOfMessaging()).new();
    }
  });
  messaging.Notification = class Notification extends js$.JsObjectWrapper$(dart.anonymousJSType("NotificationJsImpl")) {
    get title() {
      return this.jsObject.title;
    }
    get body() {
      return this.jsObject.body;
    }
    get clickAction() {
      return this.jsObject.click_action;
    }
    get icon() {
      return this.jsObject.icon;
    }
  };
  (messaging.Notification._fromJsObject = function(jsObject) {
    messaging.Notification.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Notification.prototype;
  dart.addTypeTests(messaging.Notification);
  dart.setGetterSignature(messaging.Notification, () => ({
    __proto__: dart.getGetters(messaging.Notification.__proto__),
    title: core.String,
    body: core.String,
    clickAction: core.String,
    icon: core.String
  }));
  dart.setLibraryUri(messaging.Notification, "package:firebase/src/messaging.dart");
  messaging.Payload = class Payload extends js$.JsObjectWrapper$(dart.anonymousJSType("PayloadJsImpl")) {
    get notification() {
      return new messaging.Notification._fromJsObject(this.jsObject.notification);
    }
    get collapseKey() {
      return this.jsObject.collapse_key;
    }
    get from() {
      return this.jsObject.from;
    }
    get data() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.data));
    }
  };
  (messaging.Payload._fromJsObject = function(jsObject) {
    messaging.Payload.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = messaging.Payload.prototype;
  dart.addTypeTests(messaging.Payload);
  dart.setGetterSignature(messaging.Payload, () => ({
    __proto__: dart.getGetters(messaging.Payload.__proto__),
    notification: messaging.Notification,
    collapseKey: core.String,
    from: core.String,
    data: core.Map$(core.String, dart.dynamic)
  }));
  dart.setLibraryUri(messaging.Payload, "package:firebase/src/messaging.dart");
  top_level.FirebaseJsNotLoadedException = class FirebaseJsNotLoadedException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "FirebaseJsNotLoadedException: " + dart.str(this.message);
    }
  };
  (top_level.FirebaseJsNotLoadedException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = top_level.FirebaseJsNotLoadedException.prototype;
  dart.addTypeTests(top_level.FirebaseJsNotLoadedException);
  const message$ = Symbol("FirebaseJsNotLoadedException.message");
  top_level.FirebaseJsNotLoadedException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(top_level.FirebaseJsNotLoadedException, "package:firebase/src/top_level.dart");
  dart.setFieldSignature(top_level.FirebaseJsNotLoadedException, () => ({
    __proto__: dart.getFields(top_level.FirebaseJsNotLoadedException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(top_level.FirebaseJsNotLoadedException, ['toString']);
  top_level.initializeApp = function initializeApp(opts) {
    let apiKey = opts && 'apiKey' in opts ? opts.apiKey : null;
    let authDomain = opts && 'authDomain' in opts ? opts.authDomain : null;
    let databaseURL = opts && 'databaseURL' in opts ? opts.databaseURL : null;
    let projectId = opts && 'projectId' in opts ? opts.projectId : null;
    let storageBucket = opts && 'storageBucket' in opts ? opts.storageBucket : null;
    let messagingSenderId = opts && 'messagingSenderId' in opts ? opts.messagingSenderId : null;
    let name = opts && 'name' in opts ? opts.name : null;
    name == null ? name = "[DEFAULT]" : null;
    try {
      return app.App.getInstance(dart.global.firebase.initializeApp({apiKey: apiKey, authDomain: authDomain, databaseURL: databaseURL, projectId: projectId, storageBucket: storageBucket, messagingSenderId: messagingSenderId}, name));
    } catch (e$) {
      let e = dart.getThrown(e$);
      if (dart.test(top_level._firebaseNotLoaded(e))) {
        dart.throw(new top_level.FirebaseJsNotLoadedException.new("firebase.js must be loaded."));
      }
      dart.rethrow(e$);
    }
  };
  top_level.app = function app$(name) {
    if (name === void 0) name = null;
    let jsObject = name != null ? dart.global.firebase.app(name) : dart.global.firebase.app();
    return app.App.getInstance(jsObject);
  };
  top_level.auth = function auth$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.auth(app.jsObject) : dart.global.firebase.auth();
    return auth.Auth.getInstance(jsObject);
  };
  top_level.database = function database$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.database(app.jsObject) : dart.global.firebase.database();
    return database.Database.getInstance(jsObject);
  };
  top_level.storage = function storage$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.storage(app.jsObject) : dart.global.firebase.storage();
    return storage.Storage.getInstance(jsObject);
  };
  top_level.firestore = function firestore$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.firestore(app.jsObject) : dart.global.firebase.firestore();
    return firestore.Firestore.getInstance(jsObject);
  };
  top_level.messaging = function messaging$(app) {
    if (app === void 0) app = null;
    let jsObject = app != null ? dart.global.firebase.messaging(app.jsObject) : dart.global.firebase.messaging();
    return messaging.Messaging.getInstance(jsObject);
  };
  top_level._firebaseNotLoaded = function _firebaseNotLoaded(error) {
    if (core.NoSuchMethodError.is(error)) {
      return true;
    }
    if (dart.dtest(js_util.hasProperty(error, "message"))) {
      let message = js_util.getProperty(error, "message");
      return dart.equals(message, "firebase is not defined") || dart.equals(message, "Can't find variable: firebase");
    }
    return false;
  };
  dart.copyProperties(top_level, {
    get apps() {
      return dart.global.firebase.apps[$map](app.App, dart.fn(e => app.App.getInstance(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")._check(e)), dynamicToApp()))[$toList]();
    }
  });
  dart.defineLazy(top_level, {
    /*top_level._defaultAppName*/get _defaultAppName() {
      return "[DEFAULT]";
    }
  });
  dart.trackLibraries("packages/firebase/firebase", {
    "package:firebase/src/messaging.dart": messaging,
    "package:firebase/firebase.dart": firebase,
    "package:firebase/src/top_level.dart": top_level
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/messaging.dart","src/top_level.dart"],"names":[],"mappings":"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","file":"firebase.ddc.js"}');
  // Exports:
  return {
    src__messaging: messaging,
    firebase: firebase,
    src__top_level: top_level
  };
});

//# sourceMappingURL=firebase.ddc.js.map

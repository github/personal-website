define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const js_util = dart_sdk.js_util;
  const async = dart_sdk.async;
  const js = dart_sdk.js;
  const _js_helper = dart_sdk._js_helper;
  const html = dart_sdk.html;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const js_interop = Object.create(dart.library);
  const messaging_interop = Object.create(dart.library);
  const firebase_interop = Object.create(dart.library);
  const storage_interop = Object.create(dart.library);
  const app_interop = Object.create(dart.library);
  const firestore_interop = Object.create(dart.library);
  const func = Object.create(dart.library);
  const database_interop = Object.create(dart.library);
  const auth_interop = Object.create(dart.library);
  const auth$ = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const firestore = Object.create(dart.library);
  const js$ = Object.create(dart.library);
  const app = Object.create(dart.library);
  const storage = Object.create(dart.library);
  const database = Object.create(dart.library);
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $forEach = dartx.forEach;
  const $insert = dartx.insert;
  const $cast = dartx.cast;
  let UserInfoOfUserInfoJsImpl = () => (UserInfoOfUserInfoJsImpl = dart.constFn(auth$.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))))();
  let dynamicToUserInfoOfUserInfoJsImpl = () => (dynamicToUserInfoOfUserInfoJsImpl = dart.constFn(dart.fnType(UserInfoOfUserInfoJsImpl(), [dart.dynamic])))();
  let UserCredentialJsImplToUserCredential = () => (UserCredentialJsImplToUserCredential = dart.constFn(dart.fnType(auth$.UserCredential, [dart.anonymousJSType("UserCredentialJsImpl")])))();
  let UserJsImplToUser = () => (UserJsImplToUser = dart.constFn(dart.fnType(auth$.User, [dart.anonymousJSType("UserJsImpl")])))();
  let ConfirmationResultJsImplToConfirmationResult = () => (ConfirmationResultJsImplToConfirmationResult = dart.constFn(dart.fnType(auth$.ConfirmationResult, [dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")])))();
  let dynamicToUserCredential = () => (dynamicToUserCredential = dart.constFn(dart.fnType(auth$.UserCredential, [dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let ExpandoOfUser = () => (ExpandoOfUser = dart.constFn(core.Expando$(auth$.User)))();
  let UserJsImplToNull = () => (UserJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("UserJsImpl")])))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamControllerOfUser = () => (StreamControllerOfUser = dart.constFn(async.StreamController$(auth$.User)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let ExpandoOfAuth = () => (ExpandoOfAuth = dart.constFn(core.Expando$(auth$.Auth)))();
  let ObjectTodynamic = () => (ObjectTodynamic = dart.constFn(dart.fnType(dart.dynamic, [core.Object])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let FnAndFnToNull = () => (FnAndFnToNull = dart.constFn(dart.fnType(core.Null, [dynamicTovoid(), dynamicTovoid()])))();
  let dynamicToPromiseJsImpl = () => (dynamicToPromiseJsImpl = dart.constFn(dart.fnType(dart.lazyJSType(() => dart.global.firebase.Promise, "firebase.Promise"), [dart.dynamic])))();
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let ExpandoOfFirestore = () => (ExpandoOfFirestore = dart.constFn(core.Expando$(firestore.Firestore)))();
  let dynamicTodynamic = () => (dynamicTodynamic = dart.constFn(dart.fnType(dart.dynamic, [dart.dynamic])))();
  let ExpandoOfWriteBatch = () => (ExpandoOfWriteBatch = dart.constFn(core.Expando$(firestore.WriteBatch)))();
  let DocumentSnapshotJsImplToDocumentSnapshot = () => (DocumentSnapshotJsImplToDocumentSnapshot = dart.constFn(dart.fnType(firestore.DocumentSnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let DocumentSnapshotJsImplToNull = () => (DocumentSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")])))();
  let StreamControllerOfDocumentSnapshot = () => (StreamControllerOfDocumentSnapshot = dart.constFn(async.StreamController$(firestore.DocumentSnapshot)))();
  let ExpandoOfDocumentReference = () => (ExpandoOfDocumentReference = dart.constFn(core.Expando$(firestore.DocumentReference)))();
  let QueryOfQueryJsImpl = () => (QueryOfQueryJsImpl = dart.constFn(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query"))))();
  let QuerySnapshotJsImplToQuerySnapshot = () => (QuerySnapshotJsImplToQuerySnapshot = dart.constFn(dart.fnType(firestore.QuerySnapshot, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let QuerySnapshotJsImplToNull = () => (QuerySnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")])))();
  let StreamControllerOfQuerySnapshot = () => (StreamControllerOfQuerySnapshot = dart.constFn(async.StreamController$(firestore.QuerySnapshot)))();
  let JSArrayOfDocumentSnapshotJsImpl = () => (JSArrayOfDocumentSnapshotJsImpl = dart.constFn(_interceptors.JSArray$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"))))();
  let CollectionReferenceOfCollectionReferenceJsImpl = () => (CollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))))();
  let DocumentReferenceJsImplToDocumentReference = () => (DocumentReferenceJsImplToDocumentReference = dart.constFn(dart.fnType(firestore.DocumentReference, [dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")])))();
  let ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = () => (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl = dart.constFn(core.Expando$(CollectionReferenceOfCollectionReferenceJsImpl())))();
  let ExpandoOfDocumentChange = () => (ExpandoOfDocumentChange = dart.constFn(core.Expando$(firestore.DocumentChange)))();
  let ExpandoOfDocumentSnapshot = () => (ExpandoOfDocumentSnapshot = dart.constFn(core.Expando$(firestore.DocumentSnapshot)))();
  let dynamicToDocumentChange = () => (dynamicToDocumentChange = dart.constFn(dart.fnType(firestore.DocumentChange, [dart.dynamic])))();
  let dynamicToDocumentSnapshot = () => (dynamicToDocumentSnapshot = dart.constFn(dart.fnType(firestore.DocumentSnapshot, [dart.dynamic])))();
  let ExpandoOfQuerySnapshot = () => (ExpandoOfQuerySnapshot = dart.constFn(core.Expando$(firestore.QuerySnapshot)))();
  let ExpandoOfTransaction = () => (ExpandoOfTransaction = dart.constFn(core.Expando$(firestore.Transaction)))();
  let ExpandoOfApp = () => (ExpandoOfApp = dart.constFn(core.Expando$(app.App)))();
  let ExpandoOfStorage = () => (ExpandoOfStorage = dart.constFn(core.Expando$(storage.Storage)))();
  let dynamicToFullMetadata = () => (dynamicToFullMetadata = dart.constFn(dart.fnType(storage.FullMetadata, [dart.dynamic])))();
  let ExpandoOfStorageReference = () => (ExpandoOfStorageReference = dart.constFn(core.Expando$(storage.StorageReference)))();
  let ExpandoOfFullMetadata = () => (ExpandoOfFullMetadata = dart.constFn(core.Expando$(storage.FullMetadata)))();
  let UploadTaskSnapshotJsImplToUploadTaskSnapshot = () => (UploadTaskSnapshotJsImplToUploadTaskSnapshot = dart.constFn(dart.fnType(storage.UploadTaskSnapshot, [dart.anonymousJSType("UploadTaskSnapshotJsImpl")])))();
  let UploadTaskSnapshotJsImplToNull = () => (UploadTaskSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("UploadTaskSnapshotJsImpl")])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let StreamControllerOfUploadTaskSnapshot = () => (StreamControllerOfUploadTaskSnapshot = dart.constFn(async.StreamController$(storage.UploadTaskSnapshot)))();
  let ExpandoOfUploadTask = () => (ExpandoOfUploadTask = dart.constFn(core.Expando$(storage.UploadTask)))();
  let ExpandoOfUploadTaskSnapshot = () => (ExpandoOfUploadTaskSnapshot = dart.constFn(core.Expando$(storage.UploadTaskSnapshot)))();
  let ExpandoOfDatabase = () => (ExpandoOfDatabase = dart.constFn(core.Expando$(database.Database)))();
  let DatabaseReferenceOfReferenceJsImpl = () => (DatabaseReferenceOfReferenceJsImpl = dart.constFn(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))();
  let CompleterOfTransaction = () => (CompleterOfTransaction = dart.constFn(async.Completer$(database.Transaction)))();
  let dynamicAndboolAndDataSnapshotJsImplToNull = () => (dynamicAndboolAndDataSnapshotJsImplToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.bool, dart.anonymousJSType("DataSnapshotJsImpl")])))();
  let QueryOfQueryJsImpl$ = () => (QueryOfQueryJsImpl$ = dart.constFn(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))))();
  let DataSnapshotJsImplAndStringToNull = () => (DataSnapshotJsImplAndStringToNull = dart.constFn(dart.fnType(core.Null, [dart.anonymousJSType("DataSnapshotJsImpl")], [core.String])))();
  let StreamControllerOfQueryEvent = () => (StreamControllerOfQueryEvent = dart.constFn(async.StreamController$(database.QueryEvent)))();
  let CompleterOfQueryEvent = () => (CompleterOfQueryEvent = dart.constFn(async.Completer$(database.QueryEvent)))();
  let ExpandoOfDatabaseReferenceOfReferenceJsImpl = () => (ExpandoOfDatabaseReferenceOfReferenceJsImpl = dart.constFn(core.Expando$(DatabaseReferenceOfReferenceJsImpl())))();
  let ExpandoOfDataSnapshot = () => (ExpandoOfDataSnapshot = dart.constFn(core.Expando$(database.DataSnapshot)))();
  let ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = () => (ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl = dart.constFn(dart.fnType(DatabaseReferenceOfReferenceJsImpl(), [dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(auth$.User.getInstance, UserJsImplToUser());
    },
    get C1() {
      return C1 = dart.fn(utils.dartify, ObjectTodynamic());
    },
    get C2() {
      return C2 = dart.fn(utils.jsify, ObjectTodynamic());
    },
    get C3() {
      return C3 = dart.fn(firestore.DocumentSnapshot.getInstance, DocumentSnapshotJsImplToDocumentSnapshot());
    },
    get C4() {
      return C4 = dart.fn(firestore.QuerySnapshot.getInstance, QuerySnapshotJsImplToQuerySnapshot());
    },
    get C5() {
      return C5 = dart.fn(firestore.DocumentReference.getInstance, DocumentReferenceJsImplToDocumentReference());
    },
    get C6() {
      return C6 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.RUNNING",
        index: 0
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.PAUSED",
        index: 1
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.SUCCESS",
        index: 2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.CANCELED",
        index: 3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: storage.TaskState.prototype,
        [_name$]: "TaskState.ERROR",
        index: 4
      });
    },
    get C11() {
      return C11 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8, C9 || CT.C9, C10 || CT.C10], storage.TaskState);
    },
    get C12() {
      return C12 = dart.fn(storage.FullMetadata.getInstance, dynamicToFullMetadata());
    },
    get C13() {
      return C13 = dart.fn(storage.UploadTaskSnapshot.getInstance, UploadTaskSnapshotJsImplToUploadTaskSnapshot());
    },
    get C14() {
      return C14 = dart.fn(database.DatabaseReference.getInstance, ReferenceJsImplToDatabaseReferenceOfReferenceJsImpl());
    }
  });
  js_interop.dartifyDate = function dartifyDate(jsObject) {
    if (dart.dtest(js_util.hasProperty(jsObject, "toDateString"))) {
      try {
        let date = jsObject;
        return new core.DateTime.fromMillisecondsSinceEpoch(core.int._check(dart.dsend(date, 'getTime', [])));
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.NoSuchMethodError.is(ex)) {
          return null;
        } else
          throw e;
      }
    }
    return null;
  };
  const _is_JsObjectWrapper_default = Symbol('_is_JsObjectWrapper_default');
  const JsObjectWrapper_jsObject = dart.privateName(js$, "JsObjectWrapper.jsObject");
  js$.JsObjectWrapper$ = dart.generic(T => {
    class JsObjectWrapper extends core.Object {
      get jsObject() {
        return this[jsObject$];
      }
      set jsObject(value) {
        super.jsObject = value;
      }
    }
    (JsObjectWrapper.fromJsObject = function(jsObject) {
      this[jsObject$] = jsObject;
      ;
    }).prototype = JsObjectWrapper.prototype;
    dart.addTypeTests(JsObjectWrapper);
    JsObjectWrapper.prototype[_is_JsObjectWrapper_default] = true;
    const jsObject$ = JsObjectWrapper_jsObject;
    dart.setLibraryUri(JsObjectWrapper, "package:firebase/src/js.dart");
    dart.setFieldSignature(JsObjectWrapper, () => ({
      __proto__: dart.getFields(JsObjectWrapper.__proto__),
      jsObject: dart.finalFieldType(T)
    }));
    return JsObjectWrapper;
  });
  js$.JsObjectWrapper = js$.JsObjectWrapper$();
  dart.addTypeTests(js$.JsObjectWrapper, _is_JsObjectWrapper_default);
  const _is_UserInfo_default = Symbol('_is_UserInfo_default');
  auth$.UserInfo$ = dart.generic(T => {
    class UserInfo extends js$.JsObjectWrapper$(T) {
      get displayName() {
        return this.jsObject.displayName;
      }
      get email() {
        return this.jsObject.email;
      }
      get phoneNumber() {
        return this.jsObject.phoneNumber;
      }
      get photoURL() {
        return this.jsObject.photoURL;
      }
      get providerId() {
        return this.jsObject.providerId;
      }
      get uid() {
        return this.jsObject.uid;
      }
    }
    (UserInfo.fromJsObject = function(jsObject) {
      UserInfo.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = UserInfo.prototype;
    dart.addTypeTests(UserInfo);
    UserInfo.prototype[_is_UserInfo_default] = true;
    dart.setGetterSignature(UserInfo, () => ({
      __proto__: dart.getGetters(UserInfo.__proto__),
      displayName: core.String,
      email: core.String,
      phoneNumber: core.String,
      photoURL: core.String,
      providerId: core.String,
      uid: core.String
    }));
    dart.setLibraryUri(UserInfo, "package:firebase/src/auth.dart");
    return UserInfo;
  });
  auth$.UserInfo = auth$.UserInfo$();
  dart.addTypeTests(auth$.UserInfo, _is_UserInfo_default);
  let C0;
  auth$.User = class User extends auth$.UserInfo$(dart.anonymousJSType("UserJsImpl")) {
    get emailVerified() {
      return this.jsObject.emailVerified;
    }
    get isAnonymous() {
      return this.jsObject.isAnonymous;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get providerData() {
      return this.jsObject.providerData[$map](UserInfoOfUserInfoJsImpl(), dart.fn(data => new (UserInfoOfUserInfoJsImpl()).fromJsObject(dart.anonymousJSType("UserInfoJsImpl")._check(data)), dynamicToUserInfoOfUserInfoJsImpl()))[$toList]();
    }
    get refreshToken() {
      return this.jsObject.refreshToken;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = auth$.User._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new auth$.User._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    delete() {
      return utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getIdToken(forceRefresh) {
      if (forceRefresh === void 0) forceRefresh = false;
      return utils.handleThenable(core.String, this.jsObject.getIdToken(forceRefresh));
    }
    linkAndRetrieveDataWithCredential(credential) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkAndRetrieveDataWithCredential(credential)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithCredential(credential) {
      return utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.linkWithCredential(credential)).then(auth$.User, C0 || CT.C0);
    }
    linkWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.linkWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(auth$.ConfirmationResult, dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    linkWithPopup(provider) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.linkWithPopup(provider.jsObject)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    linkWithRedirect(provider) {
      return utils.handleThenable(dart.dynamic, this.jsObject.linkWithRedirect(provider.jsObject));
    }
    reauthenticateAndRetrieveDataWithCredential(credential) {
      return utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateAndRetrieveDataWithCredential(credential)).then(auth$.UserCredential, dart.fn(o => new auth$.UserCredential.fromJsObject(dart.anonymousJSType("UserCredentialJsImpl")._check(o)), dynamicToUserCredential()));
    }
    reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.reauthenticateWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(auth$.ConfirmationResult, dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    reauthenticateWithCredential(credential) {
      return utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithCredential(credential));
    }
    reauthenticateWithPopup(provider) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.reauthenticateWithPopup(provider.jsObject)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    reauthenticateWithRedirect(provider) {
      return utils.handleThenable(dart.dynamic, this.jsObject.reauthenticateWithRedirect(provider.jsObject));
    }
    reload() {
      return utils.handleThenable(dart.dynamic, this.jsObject.reload());
    }
    sendEmailVerification(actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return utils.handleThenable(dart.dynamic, this.jsObject.sendEmailVerification(actionCodeSettings));
    }
    unlink(providerId) {
      return utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.unlink(providerId)).then(auth$.User, C0 || CT.C0);
    }
    updateEmail(newEmail) {
      return utils.handleThenable(dart.dynamic, this.jsObject.updateEmail(newEmail));
    }
    updatePassword(newPassword) {
      return utils.handleThenable(dart.dynamic, this.jsObject.updatePassword(newPassword));
    }
    updatePhoneNumber(phoneCredential) {
      return utils.handleThenable(dart.dynamic, this.jsObject.updatePhoneNumber(phoneCredential));
    }
    updateProfile(profile) {
      return utils.handleThenable(dart.dynamic, this.jsObject.updateProfile(profile));
    }
    toJson() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.toJSON()));
    }
    toString() {
      return "User: " + dart.str(this.uid);
    }
  };
  (auth$.User._fromJsObject = function(jsObject) {
    auth$.User.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.User.prototype;
  dart.addTypeTests(auth$.User);
  dart.setMethodSignature(auth$.User, () => ({
    __proto__: dart.getMethods(auth$.User.__proto__),
    delete: dart.fnType(async.Future, []),
    getIdToken: dart.fnType(async.Future$(core.String), [], [core.bool]),
    linkAndRetrieveDataWithCredential: dart.fnType(async.Future$(auth$.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithCredential: dart.fnType(async.Future$(auth$.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    linkWithPhoneNumber: dart.fnType(async.Future$(auth$.ConfirmationResult), [core.String, auth$.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    linkWithPopup: dart.fnType(async.Future$(auth$.UserCredential), [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    linkWithRedirect: dart.fnType(async.Future, [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateAndRetrieveDataWithCredential: dart.fnType(async.Future$(auth$.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPhoneNumber: dart.fnType(async.Future$(auth$.ConfirmationResult), [core.String, auth$.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    reauthenticateWithCredential: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    reauthenticateWithPopup: dart.fnType(async.Future$(auth$.UserCredential), [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reauthenticateWithRedirect: dart.fnType(async.Future, [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    reload: dart.fnType(async.Future, []),
    sendEmailVerification: dart.fnType(async.Future, [], [dart.anonymousJSType("ActionCodeSettings")]),
    unlink: dart.fnType(async.Future$(auth$.User), [core.String]),
    updateEmail: dart.fnType(async.Future, [core.String]),
    updatePassword: dart.fnType(async.Future, [core.String]),
    updatePhoneNumber: dart.fnType(async.Future, [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    updateProfile: dart.fnType(async.Future, [dart.anonymousJSType("UserProfile")]),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(auth$.User, () => ({
    __proto__: dart.getGetters(auth$.User.__proto__),
    emailVerified: core.bool,
    isAnonymous: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.auth.UserMetadata, "firebase.auth.UserMetadata"),
    providerData: core.List$(auth$.UserInfo$(dart.anonymousJSType("UserInfoJsImpl"))),
    refreshToken: core.String
  }));
  dart.setLibraryUri(auth$.User, "package:firebase/src/auth.dart");
  dart.defineExtensionMethods(auth$.User, ['toString']);
  dart.defineLazy(auth$.User, {
    /*auth$.User._expando*/get _expando() {
      return new (ExpandoOfUser()).new();
    }
  });
  const _onAuthUnsubscribe = dart.privateName(auth$, "_onAuthUnsubscribe");
  const _changeController = dart.privateName(auth$, "_changeController");
  const _onIdTokenChangedUnsubscribe = dart.privateName(auth$, "_onIdTokenChangedUnsubscribe");
  const _idTokenChangedController = dart.privateName(auth$, "_idTokenChangedController");
  auth$.Auth = class Auth extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.Auth, "firebase.auth.Auth")) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    get currentUser() {
      return auth$.User.getInstance(this.jsObject.currentUser);
    }
    get languageCode() {
      return this.jsObject.languageCode;
    }
    set languageCode(s) {
      this.jsObject.languageCode = s;
    }
    get onAuthStateChanged() {
      if (this[_changeController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_changeController].add(auth$.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onAuthUnsubscribe] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase/src/auth.dart", 281, 16, "t(_onAuthUnsubscribe == nu");
          this[_onAuthUnsubscribe] = this.jsObject.onAuthStateChanged(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onAuthUnsubscribe]();
          this[_onAuthUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController].stream;
    }
    get onIdTokenChanged() {
      if (this[_idTokenChangedController] == null) {
        let nextWrapper = js.allowInterop(UserJsImplToNull(), dart.fn(user => {
          this[_idTokenChangedController].add(auth$.User.getInstance(user));
        }, UserJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_idTokenChangedController].addError(e), dynamicTovoid()));
        const startListen = () => {
          if (!(this[_onIdTokenChangedUnsubscribe] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/firebase/src/auth.dart", 316, 16, "t(_onIdTokenChangedUnsubscribe == nu");
          this[_onIdTokenChangedUnsubscribe] = this.jsObject.onIdTokenChanged(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onIdTokenChangedUnsubscribe]();
          this[_onIdTokenChangedUnsubscribe] = null;
        };
        dart.fn(stopListen, VoidTovoid());
        this[_idTokenChangedController] = StreamControllerOfUser().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_idTokenChangedController].stream;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = auth$.Auth._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new auth$.Auth._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    applyActionCode(code) {
      return utils.handleThenable(dart.dynamic, this.jsObject.applyActionCode(code));
    }
    checkActionCode(code) {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo"), this.jsObject.checkActionCode(code));
    }
    confirmPasswordReset(code, newPassword) {
      return utils.handleThenable(dart.dynamic, this.jsObject.confirmPasswordReset(code, newPassword));
    }
    createUserWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserWithEmailAndPassword(email, password)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    createUserAndRetrieveDataWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.createUserAndRetrieveDataWithEmailAndPassword(email, password)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    fetchProvidersForEmail(email) {
      return utils.handleThenable(ListOfString(), this.jsObject.fetchProvidersForEmail(email));
    }
    getRedirectResult() {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.getRedirectResult()).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    sendPasswordResetEmail(email, actionCodeSettings) {
      if (actionCodeSettings === void 0) actionCodeSettings = null;
      return utils.handleThenable(dart.dynamic, this.jsObject.sendPasswordResetEmail(email, actionCodeSettings));
    }
    setPersistence(persistence) {
      return utils.handleThenable(dart.dynamic, this.jsObject.setPersistence(persistence));
    }
    signInAndRetrieveDataWithCredential(credential) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCredential(credential)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymously() {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymously()).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAnonymouslyAndRetrieveData() {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAnonymouslyAndRetrieveData()).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithCredential(credential) {
      return utils.handleThenable(dart.anonymousJSType("UserJsImpl"), this.jsObject.signInWithCredential(credential)).then(auth$.User, C0 || CT.C0);
    }
    signInWithCustomToken(token) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithCustomToken(token)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithCustomToken(token) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithCustomToken(token)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithEmailAndPassword(email, password)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInAndRetrieveDataWithEmailAndPassword(email, password) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInAndRetrieveDataWithEmailAndPassword(email, password)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult"), this.jsObject.signInWithPhoneNumber(phoneNumber, applicationVerifier.jsObject)).then(auth$.ConfirmationResult, dart.fn(c => new auth$.ConfirmationResult.fromJsObject(c), ConfirmationResultJsImplToConfirmationResult()));
    }
    signInWithPopup(provider) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.signInWithPopup(provider.jsObject)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
    signInWithRedirect(provider) {
      return utils.handleThenable(dart.dynamic, this.jsObject.signInWithRedirect(provider.jsObject));
    }
    signOut() {
      return utils.handleThenable(dart.dynamic, this.jsObject.signOut());
    }
    useDeviceLanguage() {
      return this.jsObject.useDeviceLanguage();
    }
    verifyPasswordResetCode(code) {
      return utils.handleThenable(core.String, this.jsObject.verifyPasswordResetCode(code));
    }
  };
  (auth$.Auth._fromJsObject = function(jsObject) {
    this[_onAuthUnsubscribe] = null;
    this[_changeController] = null;
    this[_onIdTokenChangedUnsubscribe] = null;
    this[_idTokenChangedController] = null;
    auth$.Auth.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.Auth.prototype;
  dart.addTypeTests(auth$.Auth);
  dart.setMethodSignature(auth$.Auth, () => ({
    __proto__: dart.getMethods(auth$.Auth.__proto__),
    applyActionCode: dart.fnType(async.Future, [core.String]),
    checkActionCode: dart.fnType(async.Future$(dart.lazyJSType(() => dart.global.firebase.auth.ActionCodeInfo, "firebase.auth.ActionCodeInfo")), [core.String]),
    confirmPasswordReset: dart.fnType(async.Future, [core.String, core.String]),
    createUserWithEmailAndPassword: dart.fnType(async.Future$(auth$.UserCredential), [core.String, core.String]),
    createUserAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(auth$.UserCredential), [core.String, core.String]),
    fetchProvidersForEmail: dart.fnType(async.Future$(core.List$(core.String)), [core.String]),
    getRedirectResult: dart.fnType(async.Future$(auth$.UserCredential), []),
    sendPasswordResetEmail: dart.fnType(async.Future, [core.String], [dart.anonymousJSType("ActionCodeSettings")]),
    setPersistence: dart.fnType(async.Future, [core.String]),
    signInAndRetrieveDataWithCredential: dart.fnType(async.Future$(auth$.UserCredential), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInAnonymously: dart.fnType(async.Future$(auth$.UserCredential), []),
    signInAnonymouslyAndRetrieveData: dart.fnType(async.Future$(auth$.UserCredential), []),
    signInWithCredential: dart.fnType(async.Future$(auth$.User), [dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential")]),
    signInWithCustomToken: dart.fnType(async.Future$(auth$.UserCredential), [core.String]),
    signInAndRetrieveDataWithCustomToken: dart.fnType(async.Future$(auth$.UserCredential), [core.String]),
    signInWithEmailAndPassword: dart.fnType(async.Future$(auth$.UserCredential), [core.String, core.String]),
    signInAndRetrieveDataWithEmailAndPassword: dart.fnType(async.Future$(auth$.UserCredential), [core.String, core.String]),
    signInWithPhoneNumber: dart.fnType(async.Future$(auth$.ConfirmationResult), [core.String, auth$.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))]),
    signInWithPopup: dart.fnType(async.Future$(auth$.UserCredential), [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signInWithRedirect: dart.fnType(async.Future, [auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.AuthProvider, "firebase.auth.AuthProvider"))]),
    signOut: dart.fnType(async.Future, []),
    useDeviceLanguage: dart.fnType(dart.void, []),
    verifyPasswordResetCode: dart.fnType(async.Future$(core.String), [core.String])
  }));
  dart.setGetterSignature(auth$.Auth, () => ({
    __proto__: dart.getGetters(auth$.Auth.__proto__),
    app: app.App,
    currentUser: auth$.User,
    languageCode: core.String,
    onAuthStateChanged: async.Stream$(auth$.User),
    onIdTokenChanged: async.Stream$(auth$.User)
  }));
  dart.setSetterSignature(auth$.Auth, () => ({
    __proto__: dart.getSetters(auth$.Auth.__proto__),
    languageCode: core.String
  }));
  dart.setLibraryUri(auth$.Auth, "package:firebase/src/auth.dart");
  dart.setFieldSignature(auth$.Auth, () => ({
    __proto__: dart.getFields(auth$.Auth.__proto__),
    [_onAuthUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_changeController]: dart.fieldType(async.StreamController$(auth$.User)),
    [_onIdTokenChangedUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_idTokenChangedController]: dart.fieldType(async.StreamController$(auth$.User))
  }));
  dart.defineLazy(auth$.Auth, {
    /*auth$.Auth._expando*/get _expando() {
      return new (ExpandoOfAuth()).new();
    }
  });
  const _is_AuthProvider_default = Symbol('_is_AuthProvider_default');
  auth$.AuthProvider$ = dart.generic(T => {
    class AuthProvider extends js$.JsObjectWrapper$(T) {
      get providerId() {
        return this.jsObject.providerId;
      }
    }
    (AuthProvider.fromJsObject = function(jsObject) {
      AuthProvider.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = AuthProvider.prototype;
    dart.addTypeTests(AuthProvider);
    AuthProvider.prototype[_is_AuthProvider_default] = true;
    dart.setGetterSignature(AuthProvider, () => ({
      __proto__: dart.getGetters(AuthProvider.__proto__),
      providerId: core.String
    }));
    dart.setLibraryUri(AuthProvider, "package:firebase/src/auth.dart");
    return AuthProvider;
  });
  auth$.AuthProvider = auth$.AuthProvider$();
  dart.addTypeTests(auth$.AuthProvider, _is_AuthProvider_default);
  auth$.EmailAuthProvider = class EmailAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.EmailAuthProvider, "firebase.auth.EmailAuthProvider")) {
    static new() {
      return new auth$.EmailAuthProvider.fromJsObject(new dart.global.firebase.auth.EmailAuthProvider());
    }
    static credential(email, password) {
      return dart.global.firebase.auth.EmailAuthProvider.credential(email, password);
    }
  };
  (auth$.EmailAuthProvider.fromJsObject = function(jsObject) {
    auth$.EmailAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.EmailAuthProvider.prototype;
  dart.addTypeTests(auth$.EmailAuthProvider);
  dart.setLibraryUri(auth$.EmailAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(auth$.EmailAuthProvider, {
    /*auth$.EmailAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.EmailAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  auth$.FacebookAuthProvider = class FacebookAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.FacebookAuthProvider, "firebase.auth.FacebookAuthProvider")) {
    static new() {
      return new auth$.FacebookAuthProvider.fromJsObject(new dart.global.firebase.auth.FacebookAuthProvider());
    }
    addScope(scope) {
      return new auth$.FacebookAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.FacebookAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.FacebookAuthProvider.credential(token);
    }
  };
  (auth$.FacebookAuthProvider.fromJsObject = function(jsObject) {
    auth$.FacebookAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.FacebookAuthProvider.prototype;
  dart.addTypeTests(auth$.FacebookAuthProvider);
  dart.setMethodSignature(auth$.FacebookAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.FacebookAuthProvider.__proto__),
    addScope: dart.fnType(auth$.FacebookAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(auth$.FacebookAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(auth$.FacebookAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(auth$.FacebookAuthProvider, {
    /*auth$.FacebookAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.FacebookAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  auth$.GithubAuthProvider = class GithubAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GithubAuthProvider, "firebase.auth.GithubAuthProvider")) {
    static new() {
      return new auth$.GithubAuthProvider.fromJsObject(new dart.global.firebase.auth.GithubAuthProvider());
    }
    addScope(scope) {
      return new auth$.GithubAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.GithubAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token) {
      return dart.global.firebase.auth.GithubAuthProvider.credential(token);
    }
  };
  (auth$.GithubAuthProvider.fromJsObject = function(jsObject) {
    auth$.GithubAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.GithubAuthProvider.prototype;
  dart.addTypeTests(auth$.GithubAuthProvider);
  dart.setMethodSignature(auth$.GithubAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.GithubAuthProvider.__proto__),
    addScope: dart.fnType(auth$.GithubAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(auth$.GithubAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(auth$.GithubAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(auth$.GithubAuthProvider, {
    /*auth$.GithubAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GithubAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  auth$.GoogleAuthProvider = class GoogleAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.GoogleAuthProvider, "firebase.auth.GoogleAuthProvider")) {
    static new() {
      return new auth$.GoogleAuthProvider.fromJsObject(new dart.global.firebase.auth.GoogleAuthProvider());
    }
    addScope(scope) {
      return new auth$.GoogleAuthProvider.fromJsObject(this.jsObject.addScope(scope));
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.GoogleAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(idToken, accessToken) {
      if (idToken === void 0) idToken = null;
      if (accessToken === void 0) accessToken = null;
      return dart.global.firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
    }
  };
  (auth$.GoogleAuthProvider.fromJsObject = function(jsObject) {
    auth$.GoogleAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.GoogleAuthProvider.prototype;
  dart.addTypeTests(auth$.GoogleAuthProvider);
  dart.setMethodSignature(auth$.GoogleAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.GoogleAuthProvider.__proto__),
    addScope: dart.fnType(auth$.GoogleAuthProvider, [core.String]),
    setCustomParameters: dart.fnType(auth$.GoogleAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(auth$.GoogleAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(auth$.GoogleAuthProvider, {
    /*auth$.GoogleAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.GoogleAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  auth$.TwitterAuthProvider = class TwitterAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.TwitterAuthProvider, "firebase.auth.TwitterAuthProvider")) {
    static new() {
      return new auth$.TwitterAuthProvider.fromJsObject(new dart.global.firebase.auth.TwitterAuthProvider());
    }
    setCustomParameters(customOAuthParameters) {
      return new auth$.TwitterAuthProvider.fromJsObject(this.jsObject.setCustomParameters(utils.jsify(customOAuthParameters)));
    }
    static credential(token, secret) {
      return dart.global.firebase.auth.TwitterAuthProvider.credential(token, secret);
    }
  };
  (auth$.TwitterAuthProvider.fromJsObject = function(jsObject) {
    auth$.TwitterAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.TwitterAuthProvider.prototype;
  dart.addTypeTests(auth$.TwitterAuthProvider);
  dart.setMethodSignature(auth$.TwitterAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.TwitterAuthProvider.__proto__),
    setCustomParameters: dart.fnType(auth$.TwitterAuthProvider, [core.Map$(core.String, dart.dynamic)])
  }));
  dart.setLibraryUri(auth$.TwitterAuthProvider, "package:firebase/src/auth.dart");
  dart.defineLazy(auth$.TwitterAuthProvider, {
    /*auth$.TwitterAuthProvider.PROVIDER_ID*/get PROVIDER_ID() {
      return dart.global.firebase.auth.TwitterAuthProvider.PROVIDER_ID;
    },
    set PROVIDER_ID(_) {}
  });
  auth$.PhoneAuthProvider = class PhoneAuthProvider extends auth$.AuthProvider$(dart.lazyJSType(() => dart.global.firebase.auth.PhoneAuthProvider, "firebase.auth.PhoneAuthProvider")) {
    static get PROVIDER_ID() {
      return dart.global.firebase.auth.PhoneAuthProvider.PROVIDER_ID;
    }
    static new(auth) {
      if (auth === void 0) auth = null;
      return new auth$.PhoneAuthProvider.fromJsObject(auth != null ? new dart.global.firebase.auth.PhoneAuthProvider(auth.jsObject) : new dart.global.firebase.auth.PhoneAuthProvider());
    }
    verifyPhoneNumber(phoneNumber, applicationVerifier) {
      return utils.handleThenable(core.String, this.jsObject.verifyPhoneNumber(phoneNumber, applicationVerifier.jsObject));
    }
    static credential(verificationId, verificationCode) {
      return dart.global.firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
    }
  };
  (auth$.PhoneAuthProvider.fromJsObject = function(jsObject) {
    auth$.PhoneAuthProvider.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.PhoneAuthProvider.prototype;
  dart.addTypeTests(auth$.PhoneAuthProvider);
  dart.setMethodSignature(auth$.PhoneAuthProvider, () => ({
    __proto__: dart.getMethods(auth$.PhoneAuthProvider.__proto__),
    verifyPhoneNumber: dart.fnType(async.Future$(core.String), [core.String, auth$.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.ApplicationVerifier, "firebase.auth.ApplicationVerifier"))])
  }));
  dart.setLibraryUri(auth$.PhoneAuthProvider, "package:firebase/src/auth.dart");
  const _is_ApplicationVerifier_default = Symbol('_is_ApplicationVerifier_default');
  auth$.ApplicationVerifier$ = dart.generic(T => {
    class ApplicationVerifier extends js$.JsObjectWrapper$(T) {
      get type() {
        return this.jsObject.type;
      }
      verify() {
        return utils.handleThenable(core.String, this.jsObject.verify());
      }
    }
    (ApplicationVerifier.fromJsObject = function(jsObject) {
      ApplicationVerifier.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = ApplicationVerifier.prototype;
    dart.addTypeTests(ApplicationVerifier);
    ApplicationVerifier.prototype[_is_ApplicationVerifier_default] = true;
    dart.setMethodSignature(ApplicationVerifier, () => ({
      __proto__: dart.getMethods(ApplicationVerifier.__proto__),
      verify: dart.fnType(async.Future$(core.String), [])
    }));
    dart.setGetterSignature(ApplicationVerifier, () => ({
      __proto__: dart.getGetters(ApplicationVerifier.__proto__),
      type: core.String
    }));
    dart.setLibraryUri(ApplicationVerifier, "package:firebase/src/auth.dart");
    return ApplicationVerifier;
  });
  auth$.ApplicationVerifier = auth$.ApplicationVerifier$();
  dart.addTypeTests(auth$.ApplicationVerifier, _is_ApplicationVerifier_default);
  auth$.RecaptchaVerifier = class RecaptchaVerifier extends auth$.ApplicationVerifier$(dart.lazyJSType(() => dart.global.firebase.auth.RecaptchaVerifier, "firebase.auth.RecaptchaVerifier")) {
    static new(container, parameters, app) {
      if (parameters === void 0) parameters = null;
      if (app === void 0) app = null;
      return parameters != null ? app != null ? new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, utils.jsify(parameters), app.jsObject)) : new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container, utils.jsify(parameters))) : new auth$.RecaptchaVerifier.fromJsObject(new dart.global.firebase.auth.RecaptchaVerifier(container));
    }
    clear() {
      return this.jsObject.clear();
    }
    render() {
      return utils.handleThenable(core.num, this.jsObject.render());
    }
  };
  (auth$.RecaptchaVerifier.fromJsObject = function(jsObject) {
    auth$.RecaptchaVerifier.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.RecaptchaVerifier.prototype;
  dart.addTypeTests(auth$.RecaptchaVerifier);
  dart.setMethodSignature(auth$.RecaptchaVerifier, () => ({
    __proto__: dart.getMethods(auth$.RecaptchaVerifier.__proto__),
    clear: dart.fnType(dart.dynamic, []),
    render: dart.fnType(async.Future$(core.num), [])
  }));
  dart.setLibraryUri(auth$.RecaptchaVerifier, "package:firebase/src/auth.dart");
  auth$.ConfirmationResult = class ConfirmationResult extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.auth.ConfirmationResult, "firebase.auth.ConfirmationResult")) {
    get verificationId() {
      return this.jsObject.verificationId;
    }
    confirm(verificationCode) {
      return utils.handleThenable(dart.anonymousJSType("UserCredentialJsImpl"), this.jsObject.confirm(verificationCode)).then(auth$.UserCredential, dart.fn(u => new auth$.UserCredential.fromJsObject(u), UserCredentialJsImplToUserCredential()));
    }
  };
  (auth$.ConfirmationResult.fromJsObject = function(jsObject) {
    auth$.ConfirmationResult.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.ConfirmationResult.prototype;
  dart.addTypeTests(auth$.ConfirmationResult);
  dart.setMethodSignature(auth$.ConfirmationResult, () => ({
    __proto__: dart.getMethods(auth$.ConfirmationResult.__proto__),
    confirm: dart.fnType(async.Future$(auth$.UserCredential), [core.String])
  }));
  dart.setGetterSignature(auth$.ConfirmationResult, () => ({
    __proto__: dart.getGetters(auth$.ConfirmationResult.__proto__),
    verificationId: core.String
  }));
  dart.setLibraryUri(auth$.ConfirmationResult, "package:firebase/src/auth.dart");
  auth$.UserCredential = class UserCredential extends js$.JsObjectWrapper$(dart.anonymousJSType("UserCredentialJsImpl")) {
    get user() {
      return auth$.User.getInstance(this.jsObject.user);
    }
    get credential() {
      return this.jsObject.credential;
    }
    get operationType() {
      return this.jsObject.operationType;
    }
    get additionalUserInfo() {
      return new auth$.AdditionalUserInfo.fromJsObject(this.jsObject.additionalUserInfo);
    }
  };
  (auth$.UserCredential.fromJsObject = function(jsObject) {
    auth$.UserCredential.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.UserCredential.prototype;
  dart.addTypeTests(auth$.UserCredential);
  dart.setGetterSignature(auth$.UserCredential, () => ({
    __proto__: dart.getGetters(auth$.UserCredential.__proto__),
    user: auth$.User,
    credential: dart.lazyJSType(() => dart.global.firebase.auth.AuthCredential, "firebase.auth.AuthCredential"),
    operationType: core.String,
    additionalUserInfo: auth$.AdditionalUserInfo
  }));
  dart.setLibraryUri(auth$.UserCredential, "package:firebase/src/auth.dart");
  auth$.AdditionalUserInfo = class AdditionalUserInfo extends js$.JsObjectWrapper$(dart.anonymousJSType("AdditionalUserInfoJsImpl")) {
    get providerId() {
      return this.jsObject.providerId;
    }
    get profile() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.profile));
    }
    get username() {
      return this.jsObject.username;
    }
    get isNewUser() {
      return this.jsObject.isNewUser;
    }
  };
  (auth$.AdditionalUserInfo.fromJsObject = function(jsObject) {
    auth$.AdditionalUserInfo.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = auth$.AdditionalUserInfo.prototype;
  dart.addTypeTests(auth$.AdditionalUserInfo);
  dart.setGetterSignature(auth$.AdditionalUserInfo, () => ({
    __proto__: dart.getGetters(auth$.AdditionalUserInfo.__proto__),
    providerId: core.String,
    profile: core.Map$(core.String, dart.dynamic),
    username: core.String,
    isNewUser: core.bool
  }));
  dart.setLibraryUri(auth$.AdditionalUserInfo, "package:firebase/src/auth.dart");
  let C1;
  let C2;
  utils.dartify = function dartify(jsObject) {
    if (dart.test(utils._isBasicType(jsObject))) {
      return jsObject;
    }
    if (core.Iterable.is(jsObject)) {
      return jsObject[$map](dart.dynamic, C1 || CT.C1)[$toList]();
    }
    let jsDate = js_interop.dartifyDate(jsObject);
    if (jsDate != null) {
      return jsDate;
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "firestore")) && dart.dtest(js_util.hasProperty(jsObject, "id")) && dart.dtest(js_util.hasProperty(jsObject, "parent"))) {
      return firestore.DocumentReference.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")._check(jsObject));
    }
    if (dart.dtest(js_util.hasProperty(jsObject, "latitude")) && dart.dtest(js_util.hasProperty(jsObject, "longitude")) && dart.global.Object.keys(jsObject)[$length] === 2) {
      return dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").as(jsObject);
    }
    let proto = js_util.getProperty(jsObject, "__proto__");
    if (dart.dtest(js_util.hasProperty(proto, "toDate")) && dart.dtest(js_util.hasProperty(proto, "toMillis"))) {
      return new core.DateTime.fromMillisecondsSinceEpoch(dart.lazyJSType(() => dart.global.firebase.firestore.Timestamp, "firebase.firestore.Timestamp").as(jsObject).toMillis());
    }
    if (dart.dtest(js_util.hasProperty(proto, "isEqual")) && dart.dtest(js_util.hasProperty(proto, "toBase64"))) {
      return dart.anonymousJSType("Blob").as(jsObject);
    }
    let keys = dart.global.Object.keys(jsObject);
    let map = new (IdentityMapOfString$dynamic()).new();
    for (let key of keys) {
      map[$_set](key, utils.dartify(js_util.getProperty(jsObject, key)));
    }
    return map;
  };
  utils.jsifyList = function jsifyList(list) {
    return dart.global.Array.from(list[$map](dart.dynamic, C2 || CT.C2)[$toList]());
  };
  utils.jsify = function jsify(dartObject) {
    if (dart.test(utils._isBasicType(dartObject))) {
      return dartObject;
    }
    if (core.DateTime.is(dartObject)) {
      return dart.global.firebase.firestore.Timestamp.fromMillis(dartObject.millisecondsSinceEpoch);
    }
    if (core.Iterable.is(dartObject)) {
      return utils.jsifyList(dartObject);
    }
    if (core.Map.is(dartObject)) {
      let jsMap = js_util.newObject();
      dartObject[$forEach](dart.fn((key, value) => {
        js_util.setProperty(jsMap, key, utils.jsify(value));
      }, dynamicAnddynamicToNull()));
      return jsMap;
    }
    if (firestore.DocumentReference.is(dartObject)) {
      return dartObject.jsObject;
    }
    if (firestore.FieldValue.is(dartObject)) {
      return firestore.jsifyFieldValue(dartObject);
    }
    if (dart.anonymousJSType("Blob").is(dartObject)) {
      return dartObject;
    }
    if (dart.lazyJSType(() => dart.global.firebase.firestore.GeoPoint, "firebase.firestore.GeoPoint").is(dartObject)) {
      return dartObject;
    }
    if (core.Function.is(dartObject)) {
      return js.allowInterop(core.Function, dartObject);
    }
    dart.throw(new core.ArgumentError.value(dartObject, "dartObject", "Could not convert"));
  };
  utils.callMethod = function callMethod(jsObject, method, args) {
    return js_util.callMethod(jsObject, method, args);
  };
  utils._isBasicType = function _isBasicType(value) {
    if (value == null || typeof value == 'number' || typeof value == 'boolean' || typeof value == 'string') {
      return true;
    }
    return false;
  };
  utils.handleThenable = function handleThenable(T, thenable) {
    return html.promiseToFuture(T, thenable);
  };
  utils.handleFutureWithMapper = function handleFutureWithMapper(T, S, future, mapper) {
    return new dart.global.firebase.Promise(js.allowInterop(core.Function, dart.fn((resolve, reject) => {
      future.then(core.Null, dart.fn(value => {
        let mappedValue = mapper(value);
        resolve(mappedValue);
      }, dart.fnType(core.Null, [T]))).catchError(dart.fn(error => {
        reject(error);
      }, dynamicToNull()));
    }, FnAndFnToNull())));
  };
  utils.resolveError = function resolveError(c) {
    return js.allowInterop(dynamicTovoid(), dart.bind(c, 'completeError'));
  };
  firestore.Firestore = class Firestore extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Firestore, "firebase.firestore.Firestore")) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t5, t5$, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.Firestore._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5$ = new firestore.Firestore._fromJsObject((t5 = jsObject, t5.settings({timestampsInSnapshots: true}), t5)), t2._set(t3, t5$), t5$) : t4;
    }
    batch() {
      return firestore.WriteBatch.getInstance(this.jsObject.batch());
    }
    collection(collectionPath) {
      return firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    doc(documentPath) {
      return firestore.DocumentReference.getInstance(this.jsObject.doc(documentPath));
    }
    enablePersistence() {
      return utils.handleThenable(core.Null, this.jsObject.enablePersistence());
    }
    runTransaction(updateFunction) {
      let updateFunctionWrap = js.allowInterop(dynamicToPromiseJsImpl(), dart.fn(transaction => utils.handleFutureWithMapper(core.Object, dart.dynamic, FutureOfObject()._check(updateFunction(firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(transaction)))), C2 || CT.C2), dynamicToPromiseJsImpl()));
      return utils.handleThenable(dart.dynamic, this.jsObject.runTransaction(updateFunctionWrap)).then(dart.dynamic, C1 || CT.C1);
    }
    settings(settings) {
      return this.jsObject.settings(settings);
    }
    enableNetwork() {
      return utils.handleThenable(dart.dynamic, this.jsObject.enableNetwork());
    }
    disableNetwork() {
      return utils.handleThenable(dart.dynamic, this.jsObject.disableNetwork());
    }
  };
  (firestore.Firestore._fromJsObject = function(jsObject) {
    firestore.Firestore.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.Firestore.prototype;
  dart.addTypeTests(firestore.Firestore);
  dart.setMethodSignature(firestore.Firestore, () => ({
    __proto__: dart.getMethods(firestore.Firestore.__proto__),
    batch: dart.fnType(firestore.WriteBatch, []),
    collection: dart.fnType(firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    doc: dart.fnType(firestore.DocumentReference, [core.String]),
    enablePersistence: dart.fnType(async.Future$(core.Null), []),
    runTransaction: dart.fnType(async.Future, [dart.fnType(dart.dynamic, [firestore.Transaction])]),
    settings: dart.fnType(dart.void, [dart.anonymousJSType("Settings")]),
    enableNetwork: dart.fnType(async.Future, []),
    disableNetwork: dart.fnType(async.Future, [])
  }));
  dart.setGetterSignature(firestore.Firestore, () => ({
    __proto__: dart.getGetters(firestore.Firestore.__proto__),
    app: app.App
  }));
  dart.setLibraryUri(firestore.Firestore, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.Firestore, {
    /*firestore.Firestore._expando*/get _expando() {
      return new (ExpandoOfFirestore()).new();
    }
  });
  const _wrapUpdateFunctionCall = dart.privateName(firestore, "_wrapUpdateFunctionCall");
  firestore._Updatable = class _Updatable extends core.Object {
    [_wrapUpdateFunctionCall](jsObject, data, fieldsAndValues, documentRef) {
      if (documentRef === void 0) documentRef = null;
      if (data == null && fieldsAndValues == null) {
        dart.throw(new core.ArgumentError.new("Please provide either data or fieldsAndValues parameter."));
      }
      let args = data != null ? [utils.jsify(data)] : fieldsAndValues[$map](dart.dynamic, dart.fn(f => dart.lazyJSType(() => dart.global.firebase.firestore.FieldPath, "firebase.firestore.FieldPath").is(f) ? f : utils.jsify(f), dynamicTodynamic()))[$toList]();
      if (documentRef != null) {
        args[$insert](0, documentRef.jsObject);
      }
      return utils.callMethod(jsObject, "update", args);
    }
  };
  (firestore._Updatable.new = function() {
    ;
  }).prototype = firestore._Updatable.prototype;
  dart.addTypeTests(firestore._Updatable);
  dart.setMethodSignature(firestore._Updatable, () => ({
    __proto__: dart.getMethods(firestore._Updatable.__proto__),
    [_wrapUpdateFunctionCall]: dart.fnType(dart.dynamic, [dart.dynamic, core.Map$(core.String, dart.dynamic), core.List], [firestore.DocumentReference])
  }));
  dart.setLibraryUri(firestore._Updatable, "package:firebase/src/firestore.dart");
  const JsObjectWrapper__Updatable$36 = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")) {};
  (JsObjectWrapper__Updatable$36.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36, firestore._Updatable);
  firestore.WriteBatch = class WriteBatch extends JsObjectWrapper__Updatable$36 {
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.WriteBatch._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.WriteBatch._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    commit() {
      return utils.handleThenable(core.Null, this.jsObject.commit());
    }
    delete(documentRef) {
      return firestore.WriteBatch.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, utils.jsify(data));
      return firestore.WriteBatch.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return firestore.WriteBatch.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.WriteBatch, "firebase.firestore.WriteBatch")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (firestore.WriteBatch._fromJsObject = function(jsObject) {
    firestore.WriteBatch.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.WriteBatch.prototype;
  dart.addTypeTests(firestore.WriteBatch);
  dart.setMethodSignature(firestore.WriteBatch, () => ({
    __proto__: dart.getMethods(firestore.WriteBatch.__proto__),
    commit: dart.fnType(async.Future$(core.Null), []),
    delete: dart.fnType(firestore.WriteBatch, [firestore.DocumentReference]),
    set: dart.fnType(firestore.WriteBatch, [firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(firestore.WriteBatch, [firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setLibraryUri(firestore.WriteBatch, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.WriteBatch, {
    /*firestore.WriteBatch._expando*/get _expando() {
      return new (ExpandoOfWriteBatch()).new();
    }
  });
  const _onSnapshotController = dart.privateName(firestore, "_onSnapshotController");
  const _onMetadataController = dart.privateName(firestore, "_onMetadataController");
  let C3;
  const _createStream = dart.privateName(firestore, "_createStream");
  const JsObjectWrapper__Updatable$36$ = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference")) {};
  (JsObjectWrapper__Updatable$36$.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36$.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36$.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36$, firestore._Updatable);
  firestore.DocumentReference = class DocumentReference extends JsObjectWrapper__Updatable$36$ {
    get firestore() {
      return firestore.Firestore.getInstance(this.jsObject.firestore);
    }
    get id() {
      return this.jsObject.id;
    }
    get parent() {
      return firestore.CollectionReference.getInstance(this.jsObject.parent);
    }
    get path() {
      return this.jsObject.path;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.DocumentReference._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.DocumentReference._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    collection(collectionPath) {
      return firestore.CollectionReference.getInstance(this.jsObject.collection(collectionPath));
    }
    delete() {
      return utils.handleThenable(core.Null, this.jsObject.delete());
    }
    get() {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get()).then(firestore.DocumentSnapshot, C3 || CT.C3);
    }
    get onSnapshot() {
      return this[_createStream](this[_onSnapshotController]);
    }
    get onMetadataChangesSnapshot() {
      return this[_createStream](this[_onMetadataController], {includeMetadataChanges: true});
    }
    [_createStream](controller, options) {
      if (options === void 0) options = null;
      if (controller == null) {
        let nextWrapper = js.allowInterop(DocumentSnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(firestore.DocumentSnapshot.getInstance(snapshot));
        }, DocumentSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        const startListen = () => {
          onSnapshotUnsubscribe = options != null ? this.jsObject.onSnapshot(options, nextWrapper, errorWrapper) : this.jsObject.onSnapshot(nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        controller = StreamControllerOfDocumentSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return controller.stream;
    }
    set(data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(utils.jsify(data), options) : this.jsObject.set(utils.jsify(data));
      return utils.handleThenable(core.Null, jsObjectSet);
    }
    update(opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return utils.handleThenable(core.Null, dart.anonymousJSType("ThenableJsImpl")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues)));
    }
  };
  (firestore.DocumentReference._fromJsObject = function(jsObject) {
    this[_onSnapshotController] = null;
    this[_onMetadataController] = null;
    firestore.DocumentReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentReference.prototype;
  dart.addTypeTests(firestore.DocumentReference);
  dart.setMethodSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getMethods(firestore.DocumentReference.__proto__),
    collection: dart.fnType(firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")), [core.String]),
    delete: dart.fnType(async.Future$(core.Null), []),
    get: dart.fnType(async.Future$(firestore.DocumentSnapshot), []),
    [_createStream]: dart.fnType(async.Stream$(firestore.DocumentSnapshot), [async.StreamController$(firestore.DocumentSnapshot)], [dart.anonymousJSType("DocumentListenOptions")]),
    set: dart.fnType(async.Future$(core.Null), [core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(async.Future$(core.Null), [], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setGetterSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getGetters(firestore.DocumentReference.__proto__),
    firestore: firestore.Firestore,
    id: core.String,
    parent: firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference")),
    path: core.String,
    onSnapshot: async.Stream$(firestore.DocumentSnapshot),
    onMetadataChangesSnapshot: async.Stream$(firestore.DocumentSnapshot)
  }));
  dart.setLibraryUri(firestore.DocumentReference, "package:firebase/src/firestore.dart");
  dart.setFieldSignature(firestore.DocumentReference, () => ({
    __proto__: dart.getFields(firestore.DocumentReference.__proto__),
    [_onSnapshotController]: dart.fieldType(async.StreamController$(firestore.DocumentSnapshot)),
    [_onMetadataController]: dart.fieldType(async.StreamController$(firestore.DocumentSnapshot))
  }));
  dart.defineLazy(firestore.DocumentReference, {
    /*firestore.DocumentReference._expando*/get _expando() {
      return new (ExpandoOfDocumentReference()).new();
    }
  });
  const _onSnapshotMetadataController = dart.privateName(firestore, "_onSnapshotMetadataController");
  const _wrapPaginatingFunctionCall = dart.privateName(firestore, "_wrapPaginatingFunctionCall");
  let C4;
  const _is_Query_default = Symbol('_is_Query_default');
  firestore.Query$ = dart.generic(T => {
    class Query extends js$.JsObjectWrapper$(T) {
      get firestore() {
        return firestore.Firestore.getInstance(this.jsObject.firestore);
      }
      endAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endAt", snapshot, fieldValues)));
      }
      endBefore(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("endBefore", snapshot, fieldValues)));
      }
      get() {
        return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot"), this.jsObject.get()).then(firestore.QuerySnapshot, C4 || CT.C4);
      }
      limit(limit) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.limit(limit));
      }
      get onSnapshot() {
        let t2;
        return (t2 = this[_onSnapshotController], t2 == null ? this[_onSnapshotController] = this[_createStream](false) : t2).stream;
      }
      get onSnapshotMetadata() {
        let t2;
        return (t2 = this[_onSnapshotMetadataController], t2 == null ? this[_onSnapshotMetadataController] = this[_createStream](true) : t2).stream;
      }
      [_createStream](includeMetadataChanges) {
        let controller = null;
        let nextWrapper = js.allowInterop(QuerySnapshotJsImplToNull(), dart.fn(snapshot => {
          controller.add(new firestore.QuerySnapshot._fromJsObject(snapshot));
        }, QuerySnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => controller.addError(e), dynamicTovoid()));
        let onSnapshotUnsubscribe = null;
        let options = {includeMetadataChanges: includeMetadataChanges};
        const startListen = () => {
          onSnapshotUnsubscribe = this.jsObject.onSnapshot(options, nextWrapper, errorWrapper);
        };
        dart.fn(startListen, VoidTovoid());
        function stopListen() {
          onSnapshotUnsubscribe();
          onSnapshotUnsubscribe = null;
        }
        dart.fn(stopListen, VoidTovoid());
        return controller = StreamControllerOfQuerySnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      orderBy(fieldPath, directionStr) {
        if (directionStr === void 0) directionStr = null;
        let jsObjectOrderBy = directionStr != null ? this.jsObject.orderBy(fieldPath, directionStr) : this.jsObject.orderBy(fieldPath);
        return new (QueryOfQueryJsImpl()).fromJsObject(jsObjectOrderBy);
      }
      startAfter(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAfter", snapshot, fieldValues)));
      }
      startAt(opts) {
        let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
        let fieldValues = opts && 'fieldValues' in opts ? opts.fieldValues : null;
        return new (QueryOfQueryJsImpl()).fromJsObject(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")._check(this[_wrapPaginatingFunctionCall]("startAt", snapshot, fieldValues)));
      }
      where(fieldPath, opStr, value) {
        return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.where(fieldPath, opStr, utils.jsify(value)));
      }
      [_wrapPaginatingFunctionCall](method, snapshot, fieldValues) {
        if (snapshot == null && fieldValues == null) {
          dart.throw(new core.ArgumentError.new("Please provide either snapshot or fieldValues parameter."));
        }
        let args = snapshot != null ? JSArrayOfDocumentSnapshotJsImpl().of([snapshot.jsObject]) : fieldValues[$map](dart.dynamic, C2 || CT.C2)[$toList]();
        return utils.callMethod(this.jsObject, method, args);
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onSnapshotController] = null;
      this[_onSnapshotMetadataController] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: firestore.DocumentSnapshot}),
      endBefore: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: firestore.DocumentSnapshot}),
      get: dart.fnType(async.Future$(firestore.QuerySnapshot), []),
      limit: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [core.num]),
      [_createStream]: dart.fnType(async.StreamController$(firestore.QuerySnapshot), [core.bool]),
      orderBy: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic], [core.String]),
      startAfter: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: firestore.DocumentSnapshot}),
      startAt: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [], {fieldValues: core.List, snapshot: firestore.DocumentSnapshot}),
      where: dart.fnType(firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")), [dart.dynamic, core.String, dart.dynamic]),
      [_wrapPaginatingFunctionCall]: dart.fnType(dart.dynamic, [core.String, firestore.DocumentSnapshot, core.List])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      firestore: firestore.Firestore,
      onSnapshot: async.Stream$(firestore.QuerySnapshot),
      onSnapshotMetadata: async.Stream$(firestore.QuerySnapshot)
    }));
    dart.setLibraryUri(Query, "package:firebase/src/firestore.dart");
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onSnapshotController]: dart.fieldType(async.StreamController$(firestore.QuerySnapshot)),
      [_onSnapshotMetadataController]: dart.fieldType(async.StreamController$(firestore.QuerySnapshot))
    }));
    return Query;
  });
  firestore.Query = firestore.Query$();
  dart.addTypeTests(firestore.Query, _is_Query_default);
  let C5;
  const _is_CollectionReference_default = Symbol('_is_CollectionReference_default');
  firestore.CollectionReference$ = dart.generic(T => {
    class CollectionReference extends firestore.Query$(T) {
      get id() {
        return this.jsObject.id;
      }
      get parent() {
        return firestore.DocumentReference.getInstance(this.jsObject.parent);
      }
      get path() {
        return this.jsObject.path;
      }
      static getInstance(jsObject) {
        let t5, t4, t3, t2;
        if (jsObject == null) {
          return null;
        }
        t2 = firestore.CollectionReference._expando;
        t3 = jsObject;
        t4 = t2._get(t3);
        return t4 == null ? (t5 = new (CollectionReferenceOfCollectionReferenceJsImpl())._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
      }
      static new() {
        return new (firestore.CollectionReference$(T))._fromJsObject(new dart.global.firebase.firestore.CollectionReference());
      }
      add(data) {
        return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentReference, "firebase.firestore.DocumentReference"), this.jsObject.add(utils.jsify(data))).then(firestore.DocumentReference, C5 || CT.C5);
      }
      doc(documentPath) {
        if (documentPath === void 0) documentPath = null;
        let jsObjectDoc = documentPath != null ? this.jsObject.doc(documentPath) : this.jsObject.doc();
        return firestore.DocumentReference.getInstance(jsObjectDoc);
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
    }
    (CollectionReference._fromJsObject = function(jsObject) {
      CollectionReference.__proto__.fromJsObject.call(this, T._check(jsObject));
      ;
    }).prototype = CollectionReference.prototype;
    dart.addTypeTests(CollectionReference);
    CollectionReference.prototype[_is_CollectionReference_default] = true;
    dart.setMethodSignature(CollectionReference, () => ({
      __proto__: dart.getMethods(CollectionReference.__proto__),
      add: dart.fnType(async.Future$(firestore.DocumentReference), [core.Map$(core.String, dart.dynamic)]),
      doc: dart.fnType(firestore.DocumentReference, [], [core.String]),
      isEqual: dart.fnType(core.bool, [firestore.CollectionReference$(dart.lazyJSType(() => dart.global.firebase.firestore.CollectionReference, "firebase.firestore.CollectionReference"))])
    }));
    dart.setGetterSignature(CollectionReference, () => ({
      __proto__: dart.getGetters(CollectionReference.__proto__),
      id: core.String,
      parent: firestore.DocumentReference,
      path: core.String
    }));
    dart.setLibraryUri(CollectionReference, "package:firebase/src/firestore.dart");
    return CollectionReference;
  });
  firestore.CollectionReference = firestore.CollectionReference$();
  dart.defineLazy(firestore.CollectionReference, {
    /*firestore.CollectionReference._expando*/get _expando() {
      return new (ExpandoOfCollectionReferenceOfCollectionReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(firestore.CollectionReference, _is_CollectionReference_default);
  firestore.DocumentChange = class DocumentChange extends js$.JsObjectWrapper$(dart.anonymousJSType("DocumentChangeJsImpl")) {
    get type() {
      return this.jsObject.type;
    }
    get doc() {
      return firestore.DocumentSnapshot.getInstance(this.jsObject.doc);
    }
    get oldIndex() {
      return this.jsObject.oldIndex;
    }
    get newIndex() {
      return this.jsObject.newIndex;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.DocumentChange._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.DocumentChange._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (firestore.DocumentChange._fromJsObject = function(jsObject) {
    firestore.DocumentChange.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentChange.prototype;
  dart.addTypeTests(firestore.DocumentChange);
  dart.setGetterSignature(firestore.DocumentChange, () => ({
    __proto__: dart.getGetters(firestore.DocumentChange.__proto__),
    type: core.String,
    doc: firestore.DocumentSnapshot,
    oldIndex: core.num,
    newIndex: core.num
  }));
  dart.setLibraryUri(firestore.DocumentChange, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.DocumentChange, {
    /*firestore.DocumentChange._expando*/get _expando() {
      return new (ExpandoOfDocumentChange()).new();
    }
  });
  firestore.DocumentSnapshot = class DocumentSnapshot extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")) {
    get exists() {
      return this.jsObject.exists;
    }
    get id() {
      return this.jsObject.id;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get ref() {
      return firestore.DocumentReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.DocumentSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.DocumentSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    data() {
      return MapOfString$dynamic()._check(utils.dartify(this.jsObject.data()));
    }
    get(fieldPath) {
      return utils.dartify(this.jsObject.get(fieldPath));
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (firestore.DocumentSnapshot._fromJsObject = function(jsObject) {
    firestore.DocumentSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.DocumentSnapshot.prototype;
  dart.addTypeTests(firestore.DocumentSnapshot);
  dart.setMethodSignature(firestore.DocumentSnapshot, () => ({
    __proto__: dart.getMethods(firestore.DocumentSnapshot.__proto__),
    data: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    get: dart.fnType(dart.dynamic, [dart.dynamic]),
    isEqual: dart.fnType(core.bool, [firestore.DocumentSnapshot])
  }));
  dart.setGetterSignature(firestore.DocumentSnapshot, () => ({
    __proto__: dart.getGetters(firestore.DocumentSnapshot.__proto__),
    exists: core.bool,
    id: core.String,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    ref: firestore.DocumentReference
  }));
  dart.setLibraryUri(firestore.DocumentSnapshot, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.DocumentSnapshot, {
    /*firestore.DocumentSnapshot._expando*/get _expando() {
      return new (ExpandoOfDocumentSnapshot()).new();
    }
  });
  firestore.QuerySnapshot = class QuerySnapshot extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.QuerySnapshot, "firebase.firestore.QuerySnapshot")) {
    docChanges() {
      return this.jsObject.docChanges()[$map](firestore.DocumentChange, dart.fn(e => firestore.DocumentChange.getInstance(dart.anonymousJSType("DocumentChangeJsImpl")._check(e)), dynamicToDocumentChange()))[$toList]();
    }
    get docs() {
      return this.jsObject.docs[$map](firestore.DocumentSnapshot, dart.fn(e => firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(e)), dynamicToDocumentSnapshot()))[$toList]();
    }
    get empty() {
      return this.jsObject.empty;
    }
    get metadata() {
      return this.jsObject.metadata;
    }
    get query() {
      return new (QueryOfQueryJsImpl()).fromJsObject(this.jsObject.query);
    }
    get size() {
      return this.jsObject.size;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.QuerySnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.QuerySnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    forEach(callback) {
      let callbackWrap = js.allowInterop(dynamicTodynamic(), dart.fn(s => callback(firestore.DocumentSnapshot.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot")._check(s))), dynamicTodynamic()));
      return this.jsObject.forEach(callbackWrap);
    }
    isEqual(other) {
      return this.jsObject.isEqual(other.jsObject);
    }
  };
  (firestore.QuerySnapshot._fromJsObject = function(jsObject) {
    firestore.QuerySnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.QuerySnapshot.prototype;
  dart.addTypeTests(firestore.QuerySnapshot);
  dart.setMethodSignature(firestore.QuerySnapshot, () => ({
    __proto__: dart.getMethods(firestore.QuerySnapshot.__proto__),
    docChanges: dart.fnType(core.List$(firestore.DocumentChange), []),
    forEach: dart.fnType(dart.void, [dart.fnType(dart.dynamic, [firestore.DocumentSnapshot])]),
    isEqual: dart.fnType(core.bool, [firestore.QuerySnapshot])
  }));
  dart.setGetterSignature(firestore.QuerySnapshot, () => ({
    __proto__: dart.getGetters(firestore.QuerySnapshot.__proto__),
    docs: core.List$(firestore.DocumentSnapshot),
    empty: core.bool,
    metadata: dart.lazyJSType(() => dart.global.firebase.firestore.SnapshotMetadata, "firebase.firestore.SnapshotMetadata"),
    query: firestore.Query$(dart.lazyJSType(() => dart.global.firebase.firestore.Query, "firebase.firestore.Query")),
    size: core.num
  }));
  dart.setLibraryUri(firestore.QuerySnapshot, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.QuerySnapshot, {
    /*firestore.QuerySnapshot._expando*/get _expando() {
      return new (ExpandoOfQuerySnapshot()).new();
    }
  });
  const JsObjectWrapper__Updatable$36$0 = class JsObjectWrapper__Updatable extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")) {};
  (JsObjectWrapper__Updatable$36$0.fromJsObject = function(jsObject) {
    JsObjectWrapper__Updatable$36$0.__proto__.fromJsObject.call(this, jsObject);
  }).prototype = JsObjectWrapper__Updatable$36$0.prototype;
  dart.applyMixin(JsObjectWrapper__Updatable$36$0, firestore._Updatable);
  firestore.Transaction = class Transaction extends JsObjectWrapper__Updatable$36$0 {
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = firestore.Transaction._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new firestore.Transaction._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    delete(documentRef) {
      return firestore.Transaction.getInstance(this.jsObject.delete(documentRef.jsObject));
    }
    get(documentRef) {
      return utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.firestore.DocumentSnapshot, "firebase.firestore.DocumentSnapshot"), this.jsObject.get(documentRef.jsObject)).then(firestore.DocumentSnapshot, C3 || CT.C3);
    }
    set(documentRef, data, options) {
      if (options === void 0) options = null;
      let jsObjectSet = options != null ? this.jsObject.set(documentRef.jsObject, utils.jsify(data), options) : this.jsObject.set(documentRef.jsObject, utils.jsify(data));
      return firestore.Transaction.getInstance(jsObjectSet);
    }
    update(documentRef, opts) {
      let data = opts && 'data' in opts ? opts.data : null;
      let fieldsAndValues = opts && 'fieldsAndValues' in opts ? opts.fieldsAndValues : null;
      return firestore.Transaction.getInstance(dart.lazyJSType(() => dart.global.firebase.firestore.Transaction, "firebase.firestore.Transaction")._check(this[_wrapUpdateFunctionCall](this.jsObject, data, fieldsAndValues, documentRef)));
    }
  };
  (firestore.Transaction._fromJsObject = function(jsObject) {
    firestore.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = firestore.Transaction.prototype;
  dart.addTypeTests(firestore.Transaction);
  dart.setMethodSignature(firestore.Transaction, () => ({
    __proto__: dart.getMethods(firestore.Transaction.__proto__),
    delete: dart.fnType(firestore.Transaction, [firestore.DocumentReference]),
    get: dart.fnType(async.Future$(firestore.DocumentSnapshot), [firestore.DocumentReference]),
    set: dart.fnType(firestore.Transaction, [firestore.DocumentReference, core.Map$(core.String, dart.dynamic)], [dart.anonymousJSType("SetOptions")]),
    update: dart.fnType(firestore.Transaction, [firestore.DocumentReference], {data: core.Map$(core.String, dart.dynamic), fieldsAndValues: core.List})
  }));
  dart.setLibraryUri(firestore.Transaction, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.Transaction, {
    /*firestore.Transaction._expando*/get _expando() {
      return new (ExpandoOfTransaction()).new();
    }
  });
  const _jsify = dart.privateName(firestore, "_jsify");
  firestore._FieldValueDelete = class _FieldValueDelete extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.delete();
    }
    toString() {
      return "FieldValue.delete()";
    }
  };
  (firestore._FieldValueDelete.new = function() {
    ;
  }).prototype = firestore._FieldValueDelete.prototype;
  dart.addTypeTests(firestore._FieldValueDelete);
  firestore._FieldValueDelete[dart.implements] = () => [firestore.FieldValue];
  dart.setMethodSignature(firestore._FieldValueDelete, () => ({
    __proto__: dart.getMethods(firestore._FieldValueDelete.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(firestore._FieldValueDelete, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(firestore._FieldValueDelete, ['toString']);
  firestore._FieldValueServerTimestamp = class _FieldValueServerTimestamp extends core.Object {
    [_jsify]() {
      return dart.global.firebase.firestore.FieldValue.serverTimestamp();
    }
    toString() {
      return "FieldValue.serverTimestamp()";
    }
  };
  (firestore._FieldValueServerTimestamp.new = function() {
    ;
  }).prototype = firestore._FieldValueServerTimestamp.prototype;
  dart.addTypeTests(firestore._FieldValueServerTimestamp);
  firestore._FieldValueServerTimestamp[dart.implements] = () => [firestore.FieldValue];
  dart.setMethodSignature(firestore._FieldValueServerTimestamp, () => ({
    __proto__: dart.getMethods(firestore._FieldValueServerTimestamp.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(firestore._FieldValueServerTimestamp, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(firestore._FieldValueServerTimestamp, ['toString']);
  firestore._FieldValueArray = class _FieldValueArray extends core.Object {};
  (firestore._FieldValueArray.new = function(elements) {
    this.elements = elements;
    ;
  }).prototype = firestore._FieldValueArray.prototype;
  dart.addTypeTests(firestore._FieldValueArray);
  firestore._FieldValueArray[dart.implements] = () => [firestore.FieldValue];
  dart.setLibraryUri(firestore._FieldValueArray, "package:firebase/src/firestore.dart");
  dart.setFieldSignature(firestore._FieldValueArray, () => ({
    __proto__: dart.getFields(firestore._FieldValueArray.__proto__),
    elements: dart.finalFieldType(core.List)
  }));
  firestore._FieldValueArrayUnion = class _FieldValueArrayUnion extends firestore._FieldValueArray {
    [_jsify]() {
      return utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayUnion", core.List._check(utils.jsifyList(this.elements)));
    }
    toString() {
      return "FieldValue.arrayUnion(" + dart.str(this.elements) + ")";
    }
  };
  (firestore._FieldValueArrayUnion.new = function(elements) {
    firestore._FieldValueArrayUnion.__proto__.new.call(this, elements);
    ;
  }).prototype = firestore._FieldValueArrayUnion.prototype;
  dart.addTypeTests(firestore._FieldValueArrayUnion);
  dart.setMethodSignature(firestore._FieldValueArrayUnion, () => ({
    __proto__: dart.getMethods(firestore._FieldValueArrayUnion.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(firestore._FieldValueArrayUnion, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(firestore._FieldValueArrayUnion, ['toString']);
  firestore._FieldValueArrayRemove = class _FieldValueArrayRemove extends firestore._FieldValueArray {
    [_jsify]() {
      return utils.callMethod(dart.global.firebase.firestore.FieldValue, "arrayRemove", core.List._check(utils.jsifyList(this.elements)));
    }
    toString() {
      return "FieldValue.arrayRemove(" + dart.str(this.elements) + ")";
    }
  };
  (firestore._FieldValueArrayRemove.new = function(elements) {
    firestore._FieldValueArrayRemove.__proto__.new.call(this, elements);
    ;
  }).prototype = firestore._FieldValueArrayRemove.prototype;
  dart.addTypeTests(firestore._FieldValueArrayRemove);
  dart.setMethodSignature(firestore._FieldValueArrayRemove, () => ({
    __proto__: dart.getMethods(firestore._FieldValueArrayRemove.__proto__),
    [_jsify]: dart.fnType(dart.dynamic, [])
  }));
  dart.setLibraryUri(firestore._FieldValueArrayRemove, "package:firebase/src/firestore.dart");
  dart.defineExtensionMethods(firestore._FieldValueArrayRemove, ['toString']);
  firestore.FieldValue = class FieldValue extends core.Object {
    static _fromJs(jsFieldValue) {
      if (dart.equals(jsFieldValue, dart.global.firebase.firestore.FieldValue.delete())) {
        return firestore.FieldValue.delete();
      } else if (dart.equals(jsFieldValue, dart.global.firebase.firestore.FieldValue.serverTimestamp())) {
        return firestore.FieldValue.serverTimestamp();
      } else {
        dart.throw(new core.ArgumentError.value(jsFieldValue, "jsFieldValue", "Invalid value provided. We don't support dartfying object like arrayUnion or arrayRemove since not needed"));
      }
    }
    static serverTimestamp() {
      return firestore.FieldValue._serverTimestamp;
    }
    static delete() {
      return firestore.FieldValue._delete;
    }
    static arrayUnion(elements) {
      return new firestore._FieldValueArrayUnion.new(elements);
    }
    static arrayRemove(elements) {
      return new firestore._FieldValueArrayRemove.new(elements);
    }
  };
  (firestore.FieldValue.__ = function() {
    ;
  }).prototype = firestore.FieldValue.prototype;
  dart.addTypeTests(firestore.FieldValue);
  dart.setLibraryUri(firestore.FieldValue, "package:firebase/src/firestore.dart");
  dart.defineLazy(firestore.FieldValue, {
    /*firestore.FieldValue._serverTimestamp*/get _serverTimestamp() {
      return new firestore._FieldValueServerTimestamp.new();
    },
    /*firestore.FieldValue._delete*/get _delete() {
      return new firestore._FieldValueDelete.new();
    }
  });
  firestore.jsifyFieldValue = function jsifyFieldValue(fieldValue) {
    return fieldValue[_jsify]();
  };
  app.App = class App extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.app.App, "firebase.app.App")) {
    get name() {
      return this.jsObject.name;
    }
    get options() {
      return this.jsObject.options;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = app.App._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new app.App._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    auth() {
      return auth$.Auth.getInstance(this.jsObject.auth());
    }
    database() {
      return database.Database.getInstance(this.jsObject.database());
    }
    delete() {
      return utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    storage(url) {
      if (url === void 0) url = null;
      let jsObjectStorage = url != null ? this.jsObject.storage(url) : this.jsObject.storage();
      return storage.Storage.getInstance(jsObjectStorage);
    }
    firestore() {
      return firestore.Firestore.getInstance(this.jsObject.firestore());
    }
  };
  (app.App._fromJsObject = function(jsObject) {
    app.App.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = app.App.prototype;
  dart.addTypeTests(app.App);
  dart.setMethodSignature(app.App, () => ({
    __proto__: dart.getMethods(app.App.__proto__),
    auth: dart.fnType(auth$.Auth, []),
    database: dart.fnType(database.Database, []),
    delete: dart.fnType(async.Future, []),
    storage: dart.fnType(storage.Storage, [], [core.String]),
    firestore: dart.fnType(firestore.Firestore, [])
  }));
  dart.setGetterSignature(app.App, () => ({
    __proto__: dart.getGetters(app.App.__proto__),
    name: core.String,
    options: dart.anonymousJSType("FirebaseOptions")
  }));
  dart.setLibraryUri(app.App, "package:firebase/src/app.dart");
  dart.defineLazy(app.App, {
    /*app.App._expando*/get _expando() {
      return new (ExpandoOfApp()).new();
    }
  });
  const _name$ = dart.privateName(storage, "_name");
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  storage.TaskState = class TaskState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (storage.TaskState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = storage.TaskState.prototype;
  dart.addTypeTests(storage.TaskState);
  dart.setLibraryUri(storage.TaskState, "package:firebase/src/storage.dart");
  dart.setFieldSignature(storage.TaskState, () => ({
    __proto__: dart.getFields(storage.TaskState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(storage.TaskState, ['toString']);
  storage.TaskState.RUNNING = C6 || CT.C6;
  storage.TaskState.PAUSED = C7 || CT.C7;
  storage.TaskState.SUCCESS = C8 || CT.C8;
  storage.TaskState.CANCELED = C9 || CT.C9;
  storage.TaskState.ERROR = C10 || CT.C10;
  storage.TaskState.values = C11 || CT.C11;
  storage.Storage = class Storage extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Storage, "firebase.storage.Storage")) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    get maxOperationRetryTime() {
      return this.jsObject.maxOperationRetryTime;
    }
    get maxUploadRetryTime() {
      return this.jsObject.maxUploadRetryTime;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = storage.Storage._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new storage.Storage._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    ref(path) {
      if (path === void 0) path = null;
      return storage.StorageReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return storage.StorageReference.getInstance(this.jsObject.refFromURL(url));
    }
    setMaxOperationRetryTime(time) {
      return this.jsObject.setMaxOperationRetryTime(time);
    }
    setMaxUploadRetryTime(time) {
      return this.jsObject.setMaxUploadRetryTime(time);
    }
  };
  (storage.Storage._fromJsObject = function(jsObject) {
    storage.Storage.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.Storage.prototype;
  dart.addTypeTests(storage.Storage);
  dart.setMethodSignature(storage.Storage, () => ({
    __proto__: dart.getMethods(storage.Storage.__proto__),
    ref: dart.fnType(storage.StorageReference, [], [core.String]),
    refFromURL: dart.fnType(storage.StorageReference, [core.String]),
    setMaxOperationRetryTime: dart.fnType(dart.void, [core.int]),
    setMaxUploadRetryTime: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(storage.Storage, () => ({
    __proto__: dart.getGetters(storage.Storage.__proto__),
    app: app.App,
    maxOperationRetryTime: core.int,
    maxUploadRetryTime: core.int
  }));
  dart.setLibraryUri(storage.Storage, "package:firebase/src/storage.dart");
  dart.defineLazy(storage.Storage, {
    /*storage.Storage._expando*/get _expando() {
      return new (ExpandoOfStorage()).new();
    }
  });
  let C12;
  storage.StorageReference = class StorageReference extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.Reference, "firebase.storage.Reference")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get name() {
      return this.jsObject.name;
    }
    get parent() {
      return storage.StorageReference.getInstance(this.jsObject.parent);
    }
    get root() {
      return storage.StorageReference.getInstance(this.jsObject.root);
    }
    get storage() {
      return storage.Storage.getInstance(this.jsObject.storage);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = storage.StorageReference._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new storage.StorageReference._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    child(path) {
      return storage.StorageReference.getInstance(this.jsObject.child(path));
    }
    delete() {
      return utils.handleThenable(dart.dynamic, this.jsObject.delete());
    }
    getDownloadURL() {
      return async.async(core.Uri, (function* getDownloadURL() {
        let uriString = (yield utils.handleThenable(core.String, this.jsObject.getDownloadURL()));
        return core.Uri.parse(uriString);
      }).bind(this));
    }
    getMetadata() {
      return utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.getMetadata()).then(storage.FullMetadata, C12 || CT.C12);
    }
    put(blob, metadata) {
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.put(blob, metadata.jsObject);
      } else {
        taskImpl = this.jsObject.put(blob);
      }
      return storage.UploadTask.getInstance(taskImpl);
    }
    putString(data, format, metadata) {
      if (format === void 0) format = null;
      if (metadata === void 0) metadata = null;
      let taskImpl = null;
      if (metadata != null) {
        taskImpl = this.jsObject.putString(data, format, metadata.jsObject);
      } else if (format != null) {
        taskImpl = this.jsObject.putString(data, format);
      } else {
        taskImpl = this.jsObject.putString(data);
      }
      return storage.UploadTask.getInstance(taskImpl);
    }
    toString() {
      return dart.toString(this.jsObject);
    }
    updateMetadata(metadata) {
      return utils.handleThenable(dart.anonymousJSType("FullMetadataJsImpl"), this.jsObject.updateMetadata(metadata.jsObject)).then(storage.FullMetadata, C12 || CT.C12);
    }
  };
  (storage.StorageReference._fromJsObject = function(jsObject) {
    storage.StorageReference.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.StorageReference.prototype;
  dart.addTypeTests(storage.StorageReference);
  dart.setMethodSignature(storage.StorageReference, () => ({
    __proto__: dart.getMethods(storage.StorageReference.__proto__),
    child: dart.fnType(storage.StorageReference, [core.String]),
    delete: dart.fnType(async.Future, []),
    getDownloadURL: dart.fnType(async.Future$(core.Uri), []),
    getMetadata: dart.fnType(async.Future$(storage.FullMetadata), []),
    put: dart.fnType(storage.UploadTask, [dart.dynamic], [storage.UploadMetadata]),
    putString: dart.fnType(storage.UploadTask, [core.String], [core.String, storage.UploadMetadata]),
    updateMetadata: dart.fnType(async.Future$(storage.FullMetadata), [storage.SettableMetadata])
  }));
  dart.setGetterSignature(storage.StorageReference, () => ({
    __proto__: dart.getGetters(storage.StorageReference.__proto__),
    bucket: core.String,
    fullPath: core.String,
    name: core.String,
    parent: storage.StorageReference,
    root: storage.StorageReference,
    storage: storage.Storage
  }));
  dart.setLibraryUri(storage.StorageReference, "package:firebase/src/storage.dart");
  dart.defineExtensionMethods(storage.StorageReference, ['toString']);
  dart.defineLazy(storage.StorageReference, {
    /*storage.StorageReference._expando*/get _expando() {
      return new (ExpandoOfStorageReference()).new();
    }
  });
  const _is__SettableMetadataBase_default = Symbol('_is__SettableMetadataBase_default');
  storage._SettableMetadataBase$ = dart.generic(T => {
    class _SettableMetadataBase extends js$.JsObjectWrapper$(T) {
      get cacheControl() {
        return this.jsObject.cacheControl;
      }
      set cacheControl(s) {
        this.jsObject.cacheControl = s;
      }
      get contentDisposition() {
        return this.jsObject.contentDisposition;
      }
      set contentDisposition(s) {
        this.jsObject.contentDisposition = s;
      }
      get contentEncoding() {
        return this.jsObject.contentEncoding;
      }
      set contentEncoding(s) {
        this.jsObject.contentEncoding = s;
      }
      get contentLanguage() {
        return this.jsObject.contentLanguage;
      }
      set contentLanguage(s) {
        this.jsObject.contentLanguage = s;
      }
      get contentType() {
        return this.jsObject.contentType;
      }
      set contentType(s) {
        this.jsObject.contentType = s;
      }
      get customMetadata() {
        let t2;
        t2 = core.Map.as(utils.dartify(this.jsObject.customMetadata));
        return t2 == null ? null : t2[$cast](core.String, core.String);
      }
      set customMetadata(m) {
        this.jsObject.customMetadata = utils.jsify(m);
      }
    }
    (_SettableMetadataBase.fromJsObject = function(jsObject) {
      _SettableMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _SettableMetadataBase.prototype;
    dart.addTypeTests(_SettableMetadataBase);
    _SettableMetadataBase.prototype[_is__SettableMetadataBase_default] = true;
    dart.setGetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getGetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    dart.setSetterSignature(_SettableMetadataBase, () => ({
      __proto__: dart.getSetters(_SettableMetadataBase.__proto__),
      cacheControl: core.String,
      contentDisposition: core.String,
      contentEncoding: core.String,
      contentLanguage: core.String,
      contentType: core.String,
      customMetadata: core.Map$(core.String, core.String)
    }));
    dart.setLibraryUri(_SettableMetadataBase, "package:firebase/src/storage.dart");
    return _SettableMetadataBase;
  });
  storage._SettableMetadataBase = storage._SettableMetadataBase$();
  dart.addTypeTests(storage._SettableMetadataBase, _is__SettableMetadataBase_default);
  const _is__UploadMetadataBase_default = Symbol('_is__UploadMetadataBase_default');
  storage._UploadMetadataBase$ = dart.generic(T => {
    class _UploadMetadataBase extends storage._SettableMetadataBase$(T) {
      get md5Hash() {
        return this.jsObject.md5Hash;
      }
      set md5Hash(s) {
        this.jsObject.md5Hash = s;
      }
    }
    (_UploadMetadataBase.fromJsObject = function(jsObject) {
      _UploadMetadataBase.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = _UploadMetadataBase.prototype;
    dart.addTypeTests(_UploadMetadataBase);
    _UploadMetadataBase.prototype[_is__UploadMetadataBase_default] = true;
    dart.setGetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getGetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    dart.setSetterSignature(_UploadMetadataBase, () => ({
      __proto__: dart.getSetters(_UploadMetadataBase.__proto__),
      md5Hash: core.String
    }));
    dart.setLibraryUri(_UploadMetadataBase, "package:firebase/src/storage.dart");
    return _UploadMetadataBase;
  });
  storage._UploadMetadataBase = storage._UploadMetadataBase$();
  dart.addTypeTests(storage._UploadMetadataBase, _is__UploadMetadataBase_default);
  storage.FullMetadata = class FullMetadata extends storage._UploadMetadataBase$(dart.anonymousJSType("FullMetadataJsImpl")) {
    get bucket() {
      return this.jsObject.bucket;
    }
    get fullPath() {
      return this.jsObject.fullPath;
    }
    get generation() {
      return this.jsObject.generation;
    }
    get metageneration() {
      return this.jsObject.metageneration;
    }
    get name() {
      return this.jsObject.name;
    }
    get size() {
      return this.jsObject.size;
    }
    get timeCreated() {
      return core.DateTime.parse(this.jsObject.timeCreated);
    }
    get updated() {
      return core.DateTime.parse(this.jsObject.updated);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = storage.FullMetadata._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new storage.FullMetadata._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (storage.FullMetadata._fromJsObject = function(jsObject) {
    storage.FullMetadata.__proto__.fromJsObject.call(this, dart.anonymousJSType("FullMetadataJsImpl")._check(jsObject));
    ;
  }).prototype = storage.FullMetadata.prototype;
  dart.addTypeTests(storage.FullMetadata);
  dart.setGetterSignature(storage.FullMetadata, () => ({
    __proto__: dart.getGetters(storage.FullMetadata.__proto__),
    bucket: core.String,
    fullPath: core.String,
    generation: core.String,
    metageneration: core.String,
    name: core.String,
    size: core.int,
    timeCreated: core.DateTime,
    updated: core.DateTime
  }));
  dart.setLibraryUri(storage.FullMetadata, "package:firebase/src/storage.dart");
  dart.defineLazy(storage.FullMetadata, {
    /*storage.FullMetadata._expando*/get _expando() {
      return new (ExpandoOfFullMetadata()).new();
    }
  });
  storage.UploadMetadata = class UploadMetadata extends storage._UploadMetadataBase$(dart.anonymousJSType("UploadMetadataJsImpl")) {
    static new(opts) {
      let md5Hash = opts && 'md5Hash' in opts ? opts.md5Hash : null;
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new storage.UploadMetadata.fromJsObject({md5Hash: md5Hash, cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? utils.jsify(customMetadata) : null});
    }
  };
  (storage.UploadMetadata.fromJsObject = function(jsObject) {
    storage.UploadMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadMetadata.prototype;
  dart.addTypeTests(storage.UploadMetadata);
  dart.setLibraryUri(storage.UploadMetadata, "package:firebase/src/storage.dart");
  const _future = dart.privateName(storage, "_future");
  const _onStateChangedUnsubscribe = dart.privateName(storage, "_onStateChangedUnsubscribe");
  const _changeController$ = dart.privateName(storage, "_changeController");
  let C13;
  storage.UploadTask = class UploadTask extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.storage.UploadTask, "firebase.storage.UploadTask")) {
    get future() {
      let t2;
      t2 = this[_future];
      return t2 == null ? this[_future] = utils.handleThenable(dart.anonymousJSType("UploadTaskSnapshotJsImpl"), this.jsObject).then(storage.UploadTaskSnapshot, C13 || CT.C13) : t2;
    }
    get snapshot() {
      return storage.UploadTaskSnapshot.getInstance(this.jsObject.snapshot);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = storage.UploadTask._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new storage.UploadTask._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    cancel() {
      return this.jsObject.cancel();
    }
    get onStateChanged() {
      if (this[_changeController$] == null) {
        let nextWrapper = js.allowInterop(UploadTaskSnapshotJsImplToNull(), dart.fn(data => {
          this[_changeController$].add(storage.UploadTaskSnapshot.getInstance(data));
        }, UploadTaskSnapshotJsImplToNull()));
        let errorWrapper = js.allowInterop(dynamicTovoid(), dart.fn(e => this[_changeController$].addError(e), dynamicTovoid()));
        let onCompletion = js.allowInterop(VoidToFuture(), dart.fn(() => this[_changeController$].close(), VoidToFuture()));
        const startListen = () => {
          this[_onStateChangedUnsubscribe] = this.jsObject.on(core.String._check(dart.global.firebase.storage.TaskEvent.STATE_CHANGED), nextWrapper, errorWrapper, onCompletion);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this[_onStateChangedUnsubscribe]();
        };
        dart.fn(stopListen, VoidTovoid());
        this[_changeController$] = StreamControllerOfUploadTaskSnapshot().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
      }
      return this[_changeController$].stream;
    }
    pause() {
      return this.jsObject.pause();
    }
    resume() {
      return this.jsObject.resume();
    }
  };
  (storage.UploadTask._fromJsObject = function(jsObject) {
    this[_future] = null;
    this[_onStateChangedUnsubscribe] = null;
    this[_changeController$] = null;
    storage.UploadTask.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadTask.prototype;
  dart.addTypeTests(storage.UploadTask);
  dart.setMethodSignature(storage.UploadTask, () => ({
    __proto__: dart.getMethods(storage.UploadTask.__proto__),
    cancel: dart.fnType(core.bool, []),
    pause: dart.fnType(core.bool, []),
    resume: dart.fnType(core.bool, [])
  }));
  dart.setGetterSignature(storage.UploadTask, () => ({
    __proto__: dart.getGetters(storage.UploadTask.__proto__),
    future: async.Future$(storage.UploadTaskSnapshot),
    snapshot: storage.UploadTaskSnapshot,
    onStateChanged: async.Stream$(storage.UploadTaskSnapshot)
  }));
  dart.setLibraryUri(storage.UploadTask, "package:firebase/src/storage.dart");
  dart.setFieldSignature(storage.UploadTask, () => ({
    __proto__: dart.getFields(storage.UploadTask.__proto__),
    [_future]: dart.fieldType(async.Future$(storage.UploadTaskSnapshot)),
    [_onStateChangedUnsubscribe]: dart.fieldType(dart.fnType(dart.dynamic, [])),
    [_changeController$]: dart.fieldType(async.StreamController$(storage.UploadTaskSnapshot))
  }));
  dart.defineLazy(storage.UploadTask, {
    /*storage.UploadTask._expando*/get _expando() {
      return new (ExpandoOfUploadTask()).new();
    }
  });
  storage.UploadTaskSnapshot = class UploadTaskSnapshot extends js$.JsObjectWrapper$(dart.anonymousJSType("UploadTaskSnapshotJsImpl")) {
    get bytesTransferred() {
      return this.jsObject.bytesTransferred;
    }
    get metadata() {
      return storage.FullMetadata.getInstance(this.jsObject.metadata);
    }
    get ref() {
      return storage.StorageReference.getInstance(this.jsObject.ref);
    }
    get state() {
      switch (this.jsObject.state) {
        case "running":
        {
          return storage.TaskState.RUNNING;
        }
        case "paused":
        {
          return storage.TaskState.PAUSED;
        }
        case "success":
        {
          return storage.TaskState.SUCCESS;
        }
        case "canceled":
        {
          return storage.TaskState.CANCELED;
        }
        case "error":
        {
          return storage.TaskState.ERROR;
        }
        default:
        {
          dart.throw(new core.UnsupportedError.new("Unknown state \"" + dart.str(this.jsObject.state) + "\" please file a bug."));
        }
      }
    }
    get task() {
      return storage.UploadTask.getInstance(this.jsObject.task);
    }
    get totalBytes() {
      return this.jsObject.totalBytes;
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = storage.UploadTaskSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new storage.UploadTaskSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
  };
  (storage.UploadTaskSnapshot._fromJsObject = function(jsObject) {
    storage.UploadTaskSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.UploadTaskSnapshot.prototype;
  dart.addTypeTests(storage.UploadTaskSnapshot);
  dart.setGetterSignature(storage.UploadTaskSnapshot, () => ({
    __proto__: dart.getGetters(storage.UploadTaskSnapshot.__proto__),
    bytesTransferred: core.int,
    metadata: storage.FullMetadata,
    ref: storage.StorageReference,
    state: storage.TaskState,
    task: storage.UploadTask,
    totalBytes: core.int
  }));
  dart.setLibraryUri(storage.UploadTaskSnapshot, "package:firebase/src/storage.dart");
  dart.defineLazy(storage.UploadTaskSnapshot, {
    /*storage.UploadTaskSnapshot._expando*/get _expando() {
      return new (ExpandoOfUploadTaskSnapshot()).new();
    }
  });
  storage.SettableMetadata = class SettableMetadata extends storage._SettableMetadataBase$(dart.anonymousJSType("SettableMetadataJsImpl")) {
    static new(opts) {
      let cacheControl = opts && 'cacheControl' in opts ? opts.cacheControl : null;
      let contentDisposition = opts && 'contentDisposition' in opts ? opts.contentDisposition : null;
      let contentEncoding = opts && 'contentEncoding' in opts ? opts.contentEncoding : null;
      let contentLanguage = opts && 'contentLanguage' in opts ? opts.contentLanguage : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let customMetadata = opts && 'customMetadata' in opts ? opts.customMetadata : null;
      return new storage.SettableMetadata.fromJsObject({cacheControl: cacheControl, contentDisposition: contentDisposition, contentEncoding: contentEncoding, contentLanguage: contentLanguage, contentType: contentType, customMetadata: customMetadata != null ? utils.jsify(customMetadata) : null});
    }
  };
  (storage.SettableMetadata.fromJsObject = function(jsObject) {
    storage.SettableMetadata.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = storage.SettableMetadata.prototype;
  dart.addTypeTests(storage.SettableMetadata);
  dart.setLibraryUri(storage.SettableMetadata, "package:firebase/src/storage.dart");
  database.Database = class Database extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.Database, "firebase.database.Database")) {
    get app() {
      return app.App.getInstance(this.jsObject.app);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = database.Database._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new database.Database._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    goOffline() {
      return this.jsObject.goOffline();
    }
    goOnline() {
      return this.jsObject.goOnline();
    }
    ref(path) {
      if (path === void 0) path = null;
      return database.DatabaseReference.getInstance(this.jsObject.ref(path));
    }
    refFromURL(url) {
      return database.DatabaseReference.getInstance(this.jsObject.refFromURL(url));
    }
  };
  (database.Database._fromJsObject = function(jsObject) {
    database.Database.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.Database.prototype;
  dart.addTypeTests(database.Database);
  dart.setMethodSignature(database.Database, () => ({
    __proto__: dart.getMethods(database.Database.__proto__),
    goOffline: dart.fnType(dart.void, []),
    goOnline: dart.fnType(dart.void, []),
    ref: dart.fnType(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [], [core.String]),
    refFromURL: dart.fnType(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String])
  }));
  dart.setGetterSignature(database.Database, () => ({
    __proto__: dart.getGetters(database.Database.__proto__),
    app: app.App
  }));
  dart.setLibraryUri(database.Database, "package:firebase/src/database.dart");
  dart.defineLazy(database.Database, {
    /*database.Database._expando*/get _expando() {
      return new (ExpandoOfDatabase()).new();
    }
  });
  const _onValue = dart.privateName(database, "_onValue");
  const _onChildAdded = dart.privateName(database, "_onChildAdded");
  const _onChildRemoved = dart.privateName(database, "_onChildRemoved");
  const _onChildChanged = dart.privateName(database, "_onChildChanged");
  const _onChildMoved = dart.privateName(database, "_onChildMoved");
  const _createStream$ = dart.privateName(database, "_createStream");
  const _is_Query_default$ = Symbol('_is_Query_default');
  database.Query$ = dart.generic(T => {
    class Query extends js$.JsObjectWrapper$(T) {
      get ref() {
        return database.DatabaseReference.getInstance(this.jsObject.ref);
      }
      get onValue() {
        let t2;
        t2 = this[_onValue];
        return t2 == null ? this[_onValue] = this[_createStream$]("value") : t2;
      }
      get onChildAdded() {
        let t2;
        t2 = this[_onChildAdded];
        return t2 == null ? this[_onChildAdded] = this[_createStream$]("child_added") : t2;
      }
      get onChildRemoved() {
        let t2;
        t2 = this[_onChildRemoved];
        return t2 == null ? this[_onChildRemoved] = this[_createStream$]("child_removed") : t2;
      }
      get onChildChanged() {
        let t2;
        t2 = this[_onChildChanged];
        return t2 == null ? this[_onChildChanged] = this[_createStream$]("child_changed") : t2;
      }
      get onChildMoved() {
        let t2;
        t2 = this[_onChildMoved];
        return t2 == null ? this[_onChildMoved] = this[_createStream$]("child_moved") : t2;
      }
      endAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.endAt(value) : this.jsObject.endAt(value, key));
      }
      equalTo(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.equalTo(value) : this.jsObject.equalTo(value, key));
      }
      isEqual(other) {
        return this.jsObject.isEqual(other.jsObject);
      }
      limitToFirst(limit) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.limitToFirst(limit));
      }
      limitToLast(limit) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.limitToLast(limit));
      }
      [_createStream$](eventType) {
        let streamController = null;
        let callbackWrap = js.allowInterop(DataSnapshotJsImplAndStringToNull(), dart.fn((data, string) => {
          if (string === void 0) string = null;
          streamController.add(new database.QueryEvent.new(database.DataSnapshot.getInstance(data), string));
        }, DataSnapshotJsImplAndStringToNull()));
        const startListen = () => {
          this.jsObject.on(eventType, callbackWrap);
        };
        dart.fn(startListen, VoidTovoid());
        const stopListen = () => {
          this.jsObject.off(eventType, callbackWrap);
        };
        dart.fn(stopListen, VoidTovoid());
        streamController = StreamControllerOfQueryEvent().broadcast({onListen: startListen, onCancel: stopListen, sync: true});
        return streamController.stream;
      }
      once(eventType) {
        let c = CompleterOfQueryEvent().new();
        this.jsObject.once(eventType, js.allowInterop(DataSnapshotJsImplAndStringToNull(), dart.fn((snapshot, string) => {
          if (string === void 0) string = null;
          c.complete(new database.QueryEvent.new(database.DataSnapshot.getInstance(snapshot), string));
        }, DataSnapshotJsImplAndStringToNull())), utils.resolveError(c));
        return c.future;
      }
      orderByChild(path) {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByChild(path));
      }
      orderByKey() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByKey());
      }
      orderByPriority() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByPriority());
      }
      orderByValue() {
        return new (QueryOfQueryJsImpl$()).fromJsObject(this.jsObject.orderByValue());
      }
      startAt(value, key) {
        if (key === void 0) key = null;
        return new (QueryOfQueryJsImpl$()).fromJsObject(key == null ? this.jsObject.startAt(value) : this.jsObject.startAt(value, key));
      }
      toString() {
        return dart.toString(this.jsObject);
      }
      toJson() {
        return utils.dartify(this.jsObject.toJSON());
      }
    }
    (Query.fromJsObject = function(jsObject) {
      this[_onValue] = null;
      this[_onChildAdded] = null;
      this[_onChildRemoved] = null;
      this[_onChildChanged] = null;
      this[_onChildMoved] = null;
      Query.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = Query.prototype;
    dart.addTypeTests(Query);
    Query.prototype[_is_Query_default$] = true;
    dart.setMethodSignature(Query, () => ({
      __proto__: dart.getMethods(Query.__proto__),
      endAt: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      equalTo: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      isEqual: dart.fnType(core.bool, [database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query"))]),
      limitToFirst: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      limitToLast: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.int]),
      [_createStream$]: dart.fnType(async.Stream$(database.QueryEvent), [core.String]),
      once: dart.fnType(async.Future$(database.QueryEvent), [core.String]),
      orderByChild: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [core.String]),
      orderByKey: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByPriority: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      orderByValue: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), []),
      startAt: dart.fnType(database.Query$(dart.lazyJSType(() => dart.global.firebase.database.Query, "firebase.database.Query")), [dart.dynamic], [core.String]),
      toJson: dart.fnType(dart.dynamic, [])
    }));
    dart.setGetterSignature(Query, () => ({
      __proto__: dart.getGetters(Query.__proto__),
      ref: database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      onValue: async.Stream$(database.QueryEvent),
      onChildAdded: async.Stream$(database.QueryEvent),
      onChildRemoved: async.Stream$(database.QueryEvent),
      onChildChanged: async.Stream$(database.QueryEvent),
      onChildMoved: async.Stream$(database.QueryEvent)
    }));
    dart.setLibraryUri(Query, "package:firebase/src/database.dart");
    dart.setFieldSignature(Query, () => ({
      __proto__: dart.getFields(Query.__proto__),
      [_onValue]: dart.fieldType(async.Stream$(database.QueryEvent)),
      [_onChildAdded]: dart.fieldType(async.Stream$(database.QueryEvent)),
      [_onChildRemoved]: dart.fieldType(async.Stream$(database.QueryEvent)),
      [_onChildChanged]: dart.fieldType(async.Stream$(database.QueryEvent)),
      [_onChildMoved]: dart.fieldType(async.Stream$(database.QueryEvent))
    }));
    dart.defineExtensionMethods(Query, ['toString']);
    return Query;
  });
  database.Query = database.Query$();
  dart.addTypeTests(database.Query, _is_Query_default$);
  const _is_DatabaseReference_default = Symbol('_is_DatabaseReference_default');
  database.DatabaseReference$ = dart.generic(T => {
    class DatabaseReference extends database.Query$(T) {
      get key() {
        return this.jsObject.key;
      }
      get parent() {
        return database.DatabaseReference.getInstance(this.jsObject.parent);
      }
      get root() {
        return database.DatabaseReference.getInstance(this.jsObject.root);
      }
      static getInstance(jsObject) {
        let t5, t4, t3, t2;
        if (jsObject == null) {
          return null;
        }
        t2 = database.DatabaseReference._expando;
        t3 = jsObject;
        t4 = t2._get(t3);
        return t4 == null ? (t5 = new (DatabaseReferenceOfReferenceJsImpl())._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
      }
      child(path) {
        return database.DatabaseReference.getInstance(this.jsObject.child(path));
      }
      onDisconnect() {
        return new database.OnDisconnect.fromJsObject(this.jsObject.onDisconnect());
      }
      push(value) {
        if (value === void 0) value = null;
        return new database.ThenableReference.fromJsObject(this.jsObject.push(utils.jsify(value)));
      }
      remove() {
        return utils.handleThenable(dart.dynamic, this.jsObject.remove());
      }
      set(value) {
        return utils.handleThenable(dart.dynamic, this.jsObject.set(utils.jsify(value)));
      }
      setPriority(priority) {
        return utils.handleThenable(dart.dynamic, this.jsObject.setPriority(priority));
      }
      setWithPriority(newVal, newPriority) {
        return utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(utils.jsify(newVal), newPriority));
      }
      transaction(transactionUpdate, applyLocally) {
        if (applyLocally === void 0) applyLocally = true;
        let c = CompleterOfTransaction().new();
        let transactionUpdateWrap = js.allowInterop(dynamicTodynamic(), dart.fn(update => utils.jsify(transactionUpdate(utils.dartify(update))), dynamicTodynamic()));
        let onCompleteWrap = js.allowInterop(dynamicAndboolAndDataSnapshotJsImplToNull(), dart.fn((error, committed, snapshot) => {
          if (error != null) {
            c.completeError(error);
          } else {
            c.complete(database.Transaction.new({committed: committed, snapshot: database.DataSnapshot.getInstance(snapshot)}));
          }
        }, dynamicAndboolAndDataSnapshotJsImplToNull()));
        this.jsObject.transaction(transactionUpdateWrap, onCompleteWrap, applyLocally);
        return c.future;
      }
      update(values) {
        return utils.handleThenable(dart.dynamic, this.jsObject.update(utils.jsify(values)));
      }
    }
    (DatabaseReference._fromJsObject = function(jsObject) {
      DatabaseReference.__proto__.fromJsObject.call(this, jsObject);
      ;
    }).prototype = DatabaseReference.prototype;
    dart.addTypeTests(DatabaseReference);
    DatabaseReference.prototype[_is_DatabaseReference_default] = true;
    dart.setMethodSignature(DatabaseReference, () => ({
      __proto__: dart.getMethods(DatabaseReference.__proto__),
      child: dart.fnType(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")), [core.String]),
      onDisconnect: dart.fnType(database.OnDisconnect, []),
      push: dart.fnType(database.ThenableReference, [], [dart.dynamic]),
      remove: dart.fnType(async.Future, []),
      set: dart.fnType(async.Future, [dart.dynamic]),
      setPriority: dart.fnType(async.Future, [dart.dynamic]),
      setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
      transaction: dart.fnType(async.Future$(database.Transaction), [dart.fnType(dart.dynamic, [dart.dynamic])], [core.bool]),
      update: dart.fnType(async.Future, [dart.dynamic])
    }));
    dart.setGetterSignature(DatabaseReference, () => ({
      __proto__: dart.getGetters(DatabaseReference.__proto__),
      key: core.String,
      parent: database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")),
      root: database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
    }));
    dart.setLibraryUri(DatabaseReference, "package:firebase/src/database.dart");
    return DatabaseReference;
  });
  database.DatabaseReference = database.DatabaseReference$();
  dart.defineLazy(database.DatabaseReference, {
    /*database.DatabaseReference._expando*/get _expando() {
      return new (ExpandoOfDatabaseReferenceOfReferenceJsImpl()).new();
    }
  });
  dart.addTypeTests(database.DatabaseReference, _is_DatabaseReference_default);
  const QueryEvent_snapshot = dart.privateName(database, "QueryEvent.snapshot");
  const QueryEvent_prevChildKey = dart.privateName(database, "QueryEvent.prevChildKey");
  database.QueryEvent = class QueryEvent extends core.Object {
    get snapshot() {
      return this[snapshot$];
    }
    set snapshot(value) {
      super.snapshot = value;
    }
    get prevChildKey() {
      return this[prevChildKey$];
    }
    set prevChildKey(value) {
      super.prevChildKey = value;
    }
  };
  (database.QueryEvent.new = function(snapshot, prevChildKey) {
    if (prevChildKey === void 0) prevChildKey = null;
    this[snapshot$] = snapshot;
    this[prevChildKey$] = prevChildKey;
    ;
  }).prototype = database.QueryEvent.prototype;
  dart.addTypeTests(database.QueryEvent);
  const snapshot$ = QueryEvent_snapshot;
  const prevChildKey$ = QueryEvent_prevChildKey;
  dart.setLibraryUri(database.QueryEvent, "package:firebase/src/database.dart");
  dart.setFieldSignature(database.QueryEvent, () => ({
    __proto__: dart.getFields(database.QueryEvent.__proto__),
    snapshot: dart.finalFieldType(database.DataSnapshot),
    prevChildKey: dart.finalFieldType(core.String)
  }));
  database.DataSnapshot = class DataSnapshot extends js$.JsObjectWrapper$(dart.anonymousJSType("DataSnapshotJsImpl")) {
    get key() {
      return this.jsObject.key;
    }
    get ref() {
      return database.DatabaseReference.getInstance(this.jsObject.ref);
    }
    static getInstance(jsObject) {
      let t5, t4, t3, t2;
      if (jsObject == null) {
        return null;
      }
      t2 = database.DataSnapshot._expando;
      t3 = jsObject;
      t4 = t2._get(t3);
      return t4 == null ? (t5 = new database.DataSnapshot._fromJsObject(jsObject), t2._set(t3, t5), t5) : t4;
    }
    child(path) {
      return database.DataSnapshot.getInstance(this.jsObject.child(path));
    }
    exists() {
      return this.jsObject.exists();
    }
    exportVal() {
      return utils.dartify(this.jsObject.exportVal());
    }
    forEach(action) {
      let actionWrap = js.allowInterop(dynamicTodynamic(), dart.fn(d => action(database.DataSnapshot.getInstance(dart.anonymousJSType("DataSnapshotJsImpl")._check(d))), dynamicTodynamic()));
      return this.jsObject.forEach(actionWrap);
    }
    getPriority() {
      return this.jsObject.getPriority();
    }
    hasChild(path) {
      return this.jsObject.hasChild(path);
    }
    hasChildren() {
      return this.jsObject.hasChildren();
    }
    numChildren() {
      return this.jsObject.numChildren();
    }
    val() {
      return utils.dartify(this.jsObject.val());
    }
    toJson() {
      return utils.dartify(this.jsObject.toJSON());
    }
  };
  (database.DataSnapshot._fromJsObject = function(jsObject) {
    database.DataSnapshot.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.DataSnapshot.prototype;
  dart.addTypeTests(database.DataSnapshot);
  dart.setMethodSignature(database.DataSnapshot, () => ({
    __proto__: dart.getMethods(database.DataSnapshot.__proto__),
    child: dart.fnType(database.DataSnapshot, [core.String]),
    exists: dart.fnType(core.bool, []),
    exportVal: dart.fnType(dart.dynamic, []),
    forEach: dart.fnType(core.bool, [dart.fnType(dart.dynamic, [database.DataSnapshot])]),
    getPriority: dart.fnType(dart.dynamic, []),
    hasChild: dart.fnType(core.bool, [core.String]),
    hasChildren: dart.fnType(core.bool, []),
    numChildren: dart.fnType(core.int, []),
    val: dart.fnType(dart.dynamic, []),
    toJson: dart.fnType(dart.dynamic, [])
  }));
  dart.setGetterSignature(database.DataSnapshot, () => ({
    __proto__: dart.getGetters(database.DataSnapshot.__proto__),
    key: core.String,
    ref: database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))
  }));
  dart.setLibraryUri(database.DataSnapshot, "package:firebase/src/database.dart");
  dart.defineLazy(database.DataSnapshot, {
    /*database.DataSnapshot._expando*/get _expando() {
      return new (ExpandoOfDataSnapshot()).new();
    }
  });
  database.OnDisconnect = class OnDisconnect extends js$.JsObjectWrapper$(dart.lazyJSType(() => dart.global.firebase.database.OnDisconnect, "firebase.database.OnDisconnect")) {
    cancel() {
      return utils.handleThenable(dart.dynamic, this.jsObject.cancel());
    }
    remove() {
      return utils.handleThenable(dart.dynamic, this.jsObject.remove());
    }
    set(value) {
      return utils.handleThenable(dart.dynamic, this.jsObject.set(utils.jsify(value)));
    }
    setWithPriority(value, priority) {
      return utils.handleThenable(dart.dynamic, this.jsObject.setWithPriority(utils.jsify(value), priority));
    }
    update(values) {
      return utils.handleThenable(dart.dynamic, this.jsObject.update(utils.jsify(values)));
    }
  };
  (database.OnDisconnect.fromJsObject = function(jsObject) {
    database.OnDisconnect.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.OnDisconnect.prototype;
  dart.addTypeTests(database.OnDisconnect);
  dart.setMethodSignature(database.OnDisconnect, () => ({
    __proto__: dart.getMethods(database.OnDisconnect.__proto__),
    cancel: dart.fnType(async.Future, []),
    remove: dart.fnType(async.Future, []),
    set: dart.fnType(async.Future, [dart.dynamic]),
    setWithPriority: dart.fnType(async.Future, [dart.dynamic, dart.dynamic]),
    update: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setLibraryUri(database.OnDisconnect, "package:firebase/src/database.dart");
  const _future$ = dart.privateName(database, "_future");
  let C14;
  database.ThenableReference = class ThenableReference extends database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.ThenableReference, "firebase.database.ThenableReference")) {
    get future() {
      let t2;
      t2 = this[_future$];
      return t2 == null ? this[_future$] = utils.handleThenable(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"), this.jsObject).then(DatabaseReferenceOfReferenceJsImpl(), C14 || CT.C14) : t2;
    }
  };
  (database.ThenableReference.fromJsObject = function(jsObject) {
    this[_future$] = null;
    database.ThenableReference.__proto__._fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.ThenableReference.prototype;
  dart.addTypeTests(database.ThenableReference);
  dart.setGetterSignature(database.ThenableReference, () => ({
    __proto__: dart.getGetters(database.ThenableReference.__proto__),
    future: async.Future$(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference")))
  }));
  dart.setLibraryUri(database.ThenableReference, "package:firebase/src/database.dart");
  dart.setFieldSignature(database.ThenableReference, () => ({
    __proto__: dart.getFields(database.ThenableReference.__proto__),
    [_future$]: dart.fieldType(async.Future$(database.DatabaseReference$(dart.lazyJSType(() => dart.global.firebase.database.Reference, "firebase.database.Reference"))))
  }));
  database.Transaction = class Transaction extends js$.JsObjectWrapper$(dart.anonymousJSType("TransactionJsImpl")) {
    get committed() {
      return this.jsObject.committed;
    }
    get snapshot() {
      return database.DataSnapshot.getInstance(this.jsObject.snapshot);
    }
    static new(opts) {
      let committed = opts && 'committed' in opts ? opts.committed : null;
      let snapshot = opts && 'snapshot' in opts ? opts.snapshot : null;
      return new database.Transaction.fromJsObject({committed: committed, snapshot: snapshot.jsObject});
    }
  };
  (database.Transaction.fromJsObject = function(jsObject) {
    database.Transaction.__proto__.fromJsObject.call(this, jsObject);
    ;
  }).prototype = database.Transaction.prototype;
  dart.addTypeTests(database.Transaction);
  dart.setGetterSignature(database.Transaction, () => ({
    __proto__: dart.getGetters(database.Transaction.__proto__),
    committed: core.bool,
    snapshot: database.DataSnapshot
  }));
  dart.setLibraryUri(database.Transaction, "package:firebase/src/database.dart");
  database.enableLogging = function enableLogging(logger, persistent) {
    if (logger === void 0) logger = null;
    if (persistent === void 0) persistent = false;
    return dart.global.firebase.database.enableLogging(utils.jsify(logger), persistent);
  };
  dart.trackLibraries("packages/firebase/src/app", {
    "package:firebase/src/interop/js_interop.dart": js_interop,
    "package:firebase/src/interop/messaging_interop.dart": messaging_interop,
    "package:firebase/src/interop/firebase_interop.dart": firebase_interop,
    "package:firebase/src/interop/storage_interop.dart": storage_interop,
    "package:firebase/src/interop/app_interop.dart": app_interop,
    "package:firebase/src/interop/firestore_interop.dart": firestore_interop,
    "package:firebase/src/func.dart": func,
    "package:firebase/src/interop/database_interop.dart": database_interop,
    "package:firebase/src/interop/auth_interop.dart": auth_interop,
    "package:firebase/src/auth.dart": auth$,
    "package:firebase/src/utils.dart": utils,
    "package:firebase/src/firestore.dart": firestore,
    "package:firebase/src/js.dart": js$,
    "package:firebase/src/app.dart": app,
    "package:firebase/src/storage.dart": storage,
    "package:firebase/src/database.dart": database
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["interop/js_interop.dart","js.dart","auth.dart","utils.dart","firestore.dart","app.dart","storage.dart","database.dart"],"names":[],"mappings":"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","file":"app.ddc.js"}');
  // Exports:
  return {
    src__interop__js_interop: js_interop,
    src__interop__messaging_interop: messaging_interop,
    src__interop__firebase_interop: firebase_interop,
    src__interop__storage_interop: storage_interop,
    src__interop__app_interop: app_interop,
    src__interop__firestore_interop: firestore_interop,
    src__func: func,
    src__interop__database_interop: database_interop,
    src__interop__auth_interop: auth_interop,
    src__auth: auth$,
    src__utils: utils,
    src__firestore: firestore,
    src__js: js$,
    src__app: app,
    src__storage: storage,
    src__database: database
  };
});

//# sourceMappingURL=app.ddc.js.map

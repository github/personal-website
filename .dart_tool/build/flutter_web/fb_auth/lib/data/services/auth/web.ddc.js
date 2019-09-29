define(['dart_sdk', 'packages/firebase/firebase', 'packages/fb_auth/data/classes/auth_user', 'packages/firebase/src/app'], function(dart_sdk, packages__firebase__firebase, packages__fb_auth__data__classes__auth_user, packages__firebase__src__app) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const top_level = packages__firebase__firebase.src__top_level;
  const auth_user = packages__fb_auth__data__classes__auth_user.data__classes__auth_user;
  const auth = packages__firebase__src__app.src__auth;
  const web = Object.create(dart.library);
  let UserToAuthUser = () => (UserToAuthUser = dart.constFn(dart.fnType(auth_user.AuthUser, [auth.User])))();
  const CT = Object.create(null);
  const _auth = dart.privateName(web, "_auth");
  const _setPersistenceWeb = dart.privateName(web, "_setPersistenceWeb");
  web.FBAuth = class FBAuth extends core.Object {
    [_setPersistenceWeb](_auth) {
      return async.async(dart.dynamic, function* _setPersistenceWeb() {
        try {
          let selectedPersistence = "local";
          yield _auth.setPersistence(selectedPersistence);
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("_auth.setPersistence -> " + dart.str(e));
        }
      });
    }
    login(username, password) {
      return async.async(auth_user.AuthUser, (function* login() {
        let t1, t1$;
        yield this[_setPersistenceWeb](this[_auth]);
        try {
          let _result = (yield this[_auth].signInWithEmailAndPassword(username, password));
          if (_result != null && (t1 = _result, t1 == null ? null : t1.user) != null) {
            let _user = new auth_user.AuthUser.new({uid: _result.user.uid, displayName: _result.user.displayName, email: (t1$ = _result.user, t1$ == null ? null : t1$.email), isAnonymous: _result.user.isAnonymous, isEmailVerified: _result.user.emailVerified});
            return _user;
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("FBAuthUtils -> _loginWeb -> " + dart.str(e));
        }
        return null;
      }).bind(this));
    }
    startAsGuest() {
      return async.async(auth_user.AuthUser, (function* startAsGuest() {
        let t2, t2$;
        yield this[_setPersistenceWeb](this[_auth]);
        try {
          let _result = (yield this[_auth].signInAnonymously());
          if (_result != null && (t2 = _result, t2 == null ? null : t2.user) != null) {
            let _user = new auth_user.AuthUser.new({uid: _result.user.uid, displayName: _result.user.displayName, email: (t2$ = _result.user, t2$ == null ? null : t2$.email), isAnonymous: _result.user.isAnonymous, isEmailVerified: _result.user.emailVerified});
            return _user;
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("FBAuthUtils -> startAsGuest -> " + dart.str(e));
        }
        return null;
      }).bind(this));
    }
    logout() {
      return async.async(dart.dynamic, (function* logout() {
        try {
          yield this[_auth].signOut();
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("FBAuthUtils -> logout -> " + dart.str(e));
        }
        return null;
      }).bind(this));
    }
    onAuthChanged() {
      return this[_auth].onAuthStateChanged.map(auth_user.AuthUser, dart.fn(user => {
        let t4;
        if (user == null) return null;
        let _user = new auth_user.AuthUser.new({uid: user.uid, displayName: user.displayName, email: (t4 = user, t4 == null ? null : t4.email), isAnonymous: user.isAnonymous, isEmailVerified: user.emailVerified});
        return _user;
      }, UserToAuthUser()));
    }
    currentUser() {
      return async.async(auth_user.AuthUser, (function* currentUser() {
        let t4;
        yield this[_setPersistenceWeb](this[_auth]);
        try {
          let _result = this[_auth].currentUser;
          if (_result != null) {
            let _user = new auth_user.AuthUser.new({uid: _result.uid, displayName: _result.displayName, email: (t4 = _result, t4 == null ? null : t4.email), isAnonymous: _result.isAnonymous, isEmailVerified: _result.emailVerified});
            return _user;
          }
        } catch (e$) {
          let e = dart.getThrown(e$);
          core.print("FBAuthUtils -> currentUser -> " + dart.str(e));
        }
        return null;
      }).bind(this));
    }
    editInfo(opts) {
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
      return async.async(dart.dynamic, (function* editInfo() {
        let _user = this[_auth].currentUser;
        let _info = {};
        if (displayName != null) _info.displayName = displayName;
        if (photoUrl != null) _info.photoURL = photoUrl;
        try {
          yield _user.updateProfile(_info);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw("Error editInfo -> " + dart.str(e));
        }
      }).bind(this));
    }
    forgotPassword(email) {
      return async.async(dart.dynamic, (function* forgotPassword() {
        try {
          yield this[_auth].sendPasswordResetEmail(email);
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw("Error forgotPassword -> " + dart.str(e));
        }
      }).bind(this));
    }
    sendEmailVerification() {
      return async.async(dart.dynamic, (function* sendEmailVerification() {
        try {
          let _user = this[_auth].currentUser;
          yield _user.sendEmailVerification();
        } catch (e$) {
          let e = dart.getThrown(e$);
          dart.throw("Error sendEmailVerification -> " + dart.str(e));
        }
      }).bind(this));
    }
    createAccount(username, password, opts) {
      let displayName = opts && 'displayName' in opts ? opts.displayName : null;
      let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
      return async.async(auth_user.AuthUser, (function* createAccount() {
        let _user = (yield this[_auth].createUserWithEmailAndPassword(username, password));
        if (_user != null) {
          yield this.editInfo({displayName: displayName, photoUrl: photoUrl});
        }
        return yield this.currentUser();
      }).bind(this));
    }
  };
  (web.FBAuth.new = function() {
    this[_auth] = top_level.auth();
    ;
  }).prototype = web.FBAuth.prototype;
  dart.addTypeTests(web.FBAuth);
  dart.setMethodSignature(web.FBAuth, () => ({
    __proto__: dart.getMethods(web.FBAuth.__proto__),
    [_setPersistenceWeb]: dart.fnType(async.Future, [auth.Auth]),
    login: dart.fnType(async.Future$(auth_user.AuthUser), [core.String, core.String]),
    startAsGuest: dart.fnType(async.Future$(auth_user.AuthUser), []),
    logout: dart.fnType(async.Future, []),
    onAuthChanged: dart.fnType(async.Stream$(auth_user.AuthUser), []),
    currentUser: dart.fnType(async.Future$(auth_user.AuthUser), []),
    editInfo: dart.fnType(async.Future, [], {displayName: core.String, photoUrl: core.String}),
    forgotPassword: dart.fnType(async.Future, [core.String]),
    sendEmailVerification: dart.fnType(async.Future, []),
    createAccount: dart.fnType(async.Future$(auth_user.AuthUser), [core.String, core.String], {displayName: core.String, photoUrl: core.String})
  }));
  dart.setLibraryUri(web.FBAuth, "package:fb_auth/data/services/auth/web.dart");
  dart.setFieldSignature(web.FBAuth, () => ({
    __proto__: dart.getFields(web.FBAuth.__proto__),
    [_auth]: dart.finalFieldType(auth.Auth)
  }));
  dart.trackLibraries("packages/fb_auth/data/services/auth/web", {
    "package:fb_auth/data/services/auth/web.dart": web
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["web.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;yBAOiC;AAAN;;AAEjB,oCAAsB;UAC1B,MAAM,AAAM,KAAD,gBAAgB,mBAAmB;;cACvC;UACP,WAAM,AAA4B,sCAAF,CAAC;;MAErC;;UAE8B,UAAiB;AAAzB;;QACpB,MAAM,yBAAmB;;AAEjB,yBACF,MAAM,AAAM,uCAA2B,QAAQ,EAAE,QAAQ;AAC7D,cAAI,OAAO,IAAI,SAAiB,KAAT,OAAO,sBAAE,YAAQ;AAChC,wBAAQ,iCACP,AAAQ,AAAK,OAAN,wBACC,AAAQ,AAAK,OAAN,2BACC,MAAd,AAAQ,OAAD,4BAAO,yBACR,AAAQ,AAAK,OAAN,oCACH,AAAQ,AAAK,OAAN;AAE1B,kBAAO,MAAK;;;cAEP;UACP,WAAM,AAAgC,0CAAF,CAAC;;AAEvC,cAAO;MACT;;;AAE6B;;QAC3B,MAAM,yBAAmB;;AAEjB,yBAAU,MAAM,AAAM;AAC5B,cAAI,OAAO,IAAI,SAAiB,KAAT,OAAO,sBAAE,YAAQ;AAChC,wBAAQ,iCACP,AAAQ,AAAK,OAAN,wBACC,AAAQ,AAAK,OAAN,2BACC,MAAd,AAAQ,OAAD,4BAAO,yBACR,AAAQ,AAAK,OAAN,oCACH,AAAQ,AAAK,OAAN;AAE1B,kBAAO,MAAK;;;cAEP;UACP,WAAM,AAAmC,6CAAF,CAAC;;AAE1C,cAAO;MACT;;;AAEa;;UAET,MAAM,AAAM;;cACL;UACP,WAAM,AAA6B,uCAAF,CAAC;;AAEpC,cAAO;MACT;;;AAGE,YAAO,AAAM,AAAmB,wDAAI,QAAC;;AACnC,YAAI,AAAK,IAAD,IAAI,MAAM,MAAO;AACnB,oBAAQ,iCACP,AAAK,IAAD,mBACI,AAAK,IAAD,sBACJ,KAAN,IAAI,sBAAE,wBACA,AAAK,IAAD,+BACA,AAAK,IAAD;AAEvB,cAAO,MAAK;;IAEhB;;AAE4B;;QAC1B,MAAM,yBAAmB;;AAEjB,wBAAU,AAAM;AACtB,cAAI,OAAO,IAAI;AACP,wBAAQ,iCACP,AAAQ,OAAD,mBACC,AAAQ,OAAD,sBACJ,KAAT,OAAO,sBAAE,wBACH,AAAQ,OAAD,+BACH,AAAQ,OAAD;AAE1B,kBAAO,MAAK;;;cAEP;UACP,WAAM,AAAkC,4CAAF,CAAC;;AAEzC,cAAO;MACT;;;UAEwB;UAAoB;AAA7B;AACP,oBAAQ,AAAM;AACd,oBAAQ;AACd,YAAI,WAAW,IAAI,MAAM,AAAM,KAAD,eAAe,WAAW;AACxD,YAAI,QAAQ,IAAI,MAAM,AAAM,KAAD,YAAY,QAAQ;;UAE7C,MAAM,AAAM,KAAD,eAAe,KAAK;;cACxB;UACP,WAAM,AAAsB,gCAAF,CAAC;;MAE/B;;mBAE6B;AAAR;;UAEjB,MAAM,AAAM,mCAAuB,KAAK;;cACjC;UACP,WAAM,AAA4B,sCAAF,CAAC;;MAErC;;;AAE4B;;AAElB,sBAAQ,AAAM;UACpB,MAAM,AAAM,KAAD;;cACJ;UACP,WAAM,AAAmC,6CAAF,CAAC;;MAE5C;;kBAEsC,UAAiB;UAC3C;UAAoB;AADF;AAEtB,qBACF,MAAM,AAAM,2CAA+B,QAAQ,EAAE,QAAQ;AACjE,YAAI,KAAK,IAAI;UACX,MAAM,4BAAsB,WAAW,YAAY,QAAQ;;AAE7D,cAAO,OAAM;MACf;;;;IApIM,cAAQ;;EAqIhB","file":"web.ddc.js"}');
  // Exports:
  return {
    data__services__auth__web: web
  };
});

//# sourceMappingURL=web.ddc.js.map

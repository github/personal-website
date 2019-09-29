define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth_user = Object.create(dart.library);
  const CT = Object.create(null);
  auth_user.AuthUser = class AuthUser extends core.Object {
    get uid() {
      return this[uid$];
    }
    set uid(value) {
      super.uid = value;
    }
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
    get isEmailVerified() {
      return this[isEmailVerified$];
    }
    set isEmailVerified(value) {
      super.isEmailVerified = value;
    }
    get isAnonymous() {
      return this[isAnonymous$];
    }
    set isAnonymous(value) {
      super.isAnonymous = value;
    }
    toString() {
      return dart.str(this.displayName);
    }
  };
  (auth_user.AuthUser.new = function(opts) {
    let uid = opts && 'uid' in opts ? opts.uid : null;
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let email = opts && 'email' in opts ? opts.email : null;
    let isEmailVerified = opts && 'isEmailVerified' in opts ? opts.isEmailVerified : null;
    let isAnonymous = opts && 'isAnonymous' in opts ? opts.isAnonymous : null;
    this[uid$] = uid;
    this[displayName$] = displayName;
    this[email$] = email;
    this[isEmailVerified$] = isEmailVerified;
    this[isAnonymous$] = isAnonymous;
    ;
  }).prototype = auth_user.AuthUser.prototype;
  dart.addTypeTests(auth_user.AuthUser);
  const uid$ = Symbol("AuthUser.uid");
  const displayName$ = Symbol("AuthUser.displayName");
  const email$ = Symbol("AuthUser.email");
  const isEmailVerified$ = Symbol("AuthUser.isEmailVerified");
  const isAnonymous$ = Symbol("AuthUser.isAnonymous");
  dart.setLibraryUri(auth_user.AuthUser, "package:fb_auth/data/classes/auth_user.dart");
  dart.setFieldSignature(auth_user.AuthUser, () => ({
    __proto__: dart.getFields(auth_user.AuthUser.__proto__),
    uid: dart.finalFieldType(core.String),
    displayName: dart.finalFieldType(core.String),
    email: dart.finalFieldType(core.String),
    isEmailVerified: dart.finalFieldType(core.bool),
    isAnonymous: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(auth_user.AuthUser, ['toString']);
  dart.trackLibraries("packages/fb_auth/data/classes/auth_user", {
    "package:fb_auth/data/classes/auth_user.dart": auth_user
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_user.dart"],"names":[],"mappings":";;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;IASF;;;;;;IACA;;;;;;;AAIT,YAAqB,UAAZ;IACX;;;QAZiB;QACA;QACA;QACA;QACA;IAJA;IACA;IACA;IACA;IACA;;EACf","file":"auth_user.ddc.js"}');
  // Exports:
  return {
    data__classes__auth_user: auth_user
  };
});

//# sourceMappingURL=auth_user.ddc.js.map

define(['dart_sdk', 'packages/fb_auth/data/classes/auth_user'], function(dart_sdk, packages__fb_auth__data__classes__auth_user) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth_user = packages__fb_auth__data__classes__auth_user.data__classes__auth_user;
  const auth_state = Object.create(dart.library);
  const CT = Object.create(null);
  auth_state.AuthState = class AuthState extends core.Object {};
  (auth_state.AuthState.new = function() {
    ;
  }).prototype = auth_state.AuthState.prototype;
  dart.addTypeTests(auth_state.AuthState);
  dart.setLibraryUri(auth_state.AuthState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  auth_state.InitialAuthState = class InitialAuthState extends auth_state.AuthState {};
  (auth_state.InitialAuthState.new = function() {
    ;
  }).prototype = auth_state.InitialAuthState.prototype;
  dart.addTypeTests(auth_state.InitialAuthState);
  dart.setLibraryUri(auth_state.InitialAuthState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  const LoggedInState_user = dart.privateName(auth_state, "LoggedInState.user");
  auth_state.LoggedInState = class LoggedInState extends auth_state.AuthState {
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
  };
  (auth_state.LoggedInState.new = function(user) {
    this[user$] = user;
    ;
  }).prototype = auth_state.LoggedInState.prototype;
  dart.addTypeTests(auth_state.LoggedInState);
  const user$ = LoggedInState_user;
  dart.setLibraryUri(auth_state.LoggedInState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  dart.setFieldSignature(auth_state.LoggedInState, () => ({
    __proto__: dart.getFields(auth_state.LoggedInState.__proto__),
    user: dart.finalFieldType(auth_user.AuthUser)
  }));
  auth_state.LoggedOutState = class LoggedOutState extends auth_state.AuthState {};
  (auth_state.LoggedOutState.new = function() {
    ;
  }).prototype = auth_state.LoggedOutState.prototype;
  dart.addTypeTests(auth_state.LoggedOutState);
  dart.setLibraryUri(auth_state.LoggedOutState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  auth_state.AuthLoadingState = class AuthLoadingState extends auth_state.AuthState {};
  (auth_state.AuthLoadingState.new = function() {
    ;
  }).prototype = auth_state.AuthLoadingState.prototype;
  dart.addTypeTests(auth_state.AuthLoadingState);
  dart.setLibraryUri(auth_state.AuthLoadingState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  const AuthErrorState_message = dart.privateName(auth_state, "AuthErrorState.message");
  auth_state.AuthErrorState = class AuthErrorState extends auth_state.AuthState {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
  };
  (auth_state.AuthErrorState.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = auth_state.AuthErrorState.prototype;
  dart.addTypeTests(auth_state.AuthErrorState);
  const message$ = AuthErrorState_message;
  dart.setLibraryUri(auth_state.AuthErrorState, "package:fb_auth/data/blocs/auth/auth_state.dart");
  dart.setFieldSignature(auth_state.AuthErrorState, () => ({
    __proto__: dart.getFields(auth_state.AuthErrorState.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/fb_auth/data/blocs/auth/auth_state", {
    "package:fb_auth/data/blocs/auth/auth_state.dart": auth_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_state.dart"],"names":[],"mappings":";;;;;;;;;;;EAK0B;;;;;;EAEgB;;;;;IAKzB;;;;;;;;IAFI;;EAAK;;;;;;;;;;;EAKc;;;;;;EAEE;;;;;IAK3B;;;;;;;;IAFO;;EAAQ","file":"auth_state.ddc.js"}');
  // Exports:
  return {
    data__blocs__auth__auth_state: auth_state
  };
});

//# sourceMappingURL=auth_state.ddc.js.map

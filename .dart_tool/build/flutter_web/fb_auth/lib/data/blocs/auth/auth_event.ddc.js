define(['dart_sdk', 'packages/fb_auth/data/classes/auth_user'], function(dart_sdk, packages__fb_auth__data__classes__auth_user) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const auth_user = packages__fb_auth__data__classes__auth_user.data__classes__auth_user;
  const auth_event = Object.create(dart.library);
  const CT = Object.create(null);
  auth_event.AuthEvent = class AuthEvent extends core.Object {};
  (auth_event.AuthEvent.new = function() {
    ;
  }).prototype = auth_event.AuthEvent.prototype;
  dart.addTypeTests(auth_event.AuthEvent);
  dart.setLibraryUri(auth_event.AuthEvent, "package:fb_auth/data/blocs/auth/auth_event.dart");
  auth_event.CheckUser = class CheckUser extends auth_event.AuthEvent {};
  (auth_event.CheckUser.new = function() {
    ;
  }).prototype = auth_event.CheckUser.prototype;
  dart.addTypeTests(auth_event.CheckUser);
  dart.setLibraryUri(auth_event.CheckUser, "package:fb_auth/data/blocs/auth/auth_event.dart");
  const LoginEvent_username = dart.privateName(auth_event, "LoginEvent.username");
  const LoginEvent_password = dart.privateName(auth_event, "LoginEvent.password");
  auth_event.LoginEvent = class LoginEvent extends auth_event.AuthEvent {
    get username() {
      return this[username$];
    }
    set username(value) {
      super.username = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      super.password = value;
    }
  };
  (auth_event.LoginEvent.new = function(username, password) {
    this[username$] = username;
    this[password$] = password;
    ;
  }).prototype = auth_event.LoginEvent.prototype;
  dart.addTypeTests(auth_event.LoginEvent);
  const username$ = LoginEvent_username;
  const password$ = LoginEvent_password;
  dart.setLibraryUri(auth_event.LoginEvent, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.LoginEvent, () => ({
    __proto__: dart.getFields(auth_event.LoginEvent.__proto__),
    username: dart.finalFieldType(core.String),
    password: dart.finalFieldType(core.String)
  }));
  auth_event.LoginGuest = class LoginGuest extends auth_event.AuthEvent {};
  (auth_event.LoginGuest.new = function() {
    ;
  }).prototype = auth_event.LoginGuest.prototype;
  dart.addTypeTests(auth_event.LoginGuest);
  dart.setLibraryUri(auth_event.LoginGuest, "package:fb_auth/data/blocs/auth/auth_event.dart");
  const CreateAccount_username = dart.privateName(auth_event, "CreateAccount.username");
  const CreateAccount_password = dart.privateName(auth_event, "CreateAccount.password");
  const CreateAccount_displayName = dart.privateName(auth_event, "CreateAccount.displayName");
  const CreateAccount_photoUrl = dart.privateName(auth_event, "CreateAccount.photoUrl");
  auth_event.CreateAccount = class CreateAccount extends auth_event.AuthEvent {
    get username() {
      return this[username$0];
    }
    set username(value) {
      super.username = value;
    }
    get password() {
      return this[password$0];
    }
    set password(value) {
      super.password = value;
    }
    get displayName() {
      return this[displayName$];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get photoUrl() {
      return this[photoUrl$];
    }
    set photoUrl(value) {
      super.photoUrl = value;
    }
  };
  (auth_event.CreateAccount.new = function(username, password, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
    this[username$0] = username;
    this[password$0] = password;
    this[displayName$] = displayName;
    this[photoUrl$] = photoUrl;
    ;
  }).prototype = auth_event.CreateAccount.prototype;
  dart.addTypeTests(auth_event.CreateAccount);
  const username$0 = CreateAccount_username;
  const password$0 = CreateAccount_password;
  const displayName$ = CreateAccount_displayName;
  const photoUrl$ = CreateAccount_photoUrl;
  dart.setLibraryUri(auth_event.CreateAccount, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.CreateAccount, () => ({
    __proto__: dart.getFields(auth_event.CreateAccount.__proto__),
    username: dart.finalFieldType(core.String),
    password: dart.finalFieldType(core.String),
    displayName: dart.finalFieldType(core.String),
    photoUrl: dart.finalFieldType(core.String)
  }));
  const LogoutEvent_user = dart.privateName(auth_event, "LogoutEvent.user");
  auth_event.LogoutEvent = class LogoutEvent extends auth_event.AuthEvent {
    get user() {
      return this[user$];
    }
    set user(value) {
      super.user = value;
    }
  };
  (auth_event.LogoutEvent.new = function(user) {
    this[user$] = user;
    ;
  }).prototype = auth_event.LogoutEvent.prototype;
  dart.addTypeTests(auth_event.LogoutEvent);
  const user$ = LogoutEvent_user;
  dart.setLibraryUri(auth_event.LogoutEvent, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.LogoutEvent, () => ({
    __proto__: dart.getFields(auth_event.LogoutEvent.__proto__),
    user: dart.finalFieldType(auth_user.AuthUser)
  }));
  const UpdateUser_user = dart.privateName(auth_event, "UpdateUser.user");
  auth_event.UpdateUser = class UpdateUser extends auth_event.AuthEvent {
    get user() {
      return this[user$0];
    }
    set user(value) {
      super.user = value;
    }
  };
  (auth_event.UpdateUser.new = function(user) {
    this[user$0] = user;
    ;
  }).prototype = auth_event.UpdateUser.prototype;
  dart.addTypeTests(auth_event.UpdateUser);
  const user$0 = UpdateUser_user;
  dart.setLibraryUri(auth_event.UpdateUser, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.UpdateUser, () => ({
    __proto__: dart.getFields(auth_event.UpdateUser.__proto__),
    user: dart.finalFieldType(auth_user.AuthUser)
  }));
  const ForgotPassword_email = dart.privateName(auth_event, "ForgotPassword.email");
  auth_event.ForgotPassword = class ForgotPassword extends auth_event.AuthEvent {
    get email() {
      return this[email$];
    }
    set email(value) {
      super.email = value;
    }
  };
  (auth_event.ForgotPassword.new = function(email) {
    this[email$] = email;
    ;
  }).prototype = auth_event.ForgotPassword.prototype;
  dart.addTypeTests(auth_event.ForgotPassword);
  const email$ = ForgotPassword_email;
  dart.setLibraryUri(auth_event.ForgotPassword, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.ForgotPassword, () => ({
    __proto__: dart.getFields(auth_event.ForgotPassword.__proto__),
    email: dart.finalFieldType(core.String)
  }));
  auth_event.SendEmailVerification = class SendEmailVerification extends auth_event.AuthEvent {};
  (auth_event.SendEmailVerification.new = function() {
    ;
  }).prototype = auth_event.SendEmailVerification.prototype;
  dart.addTypeTests(auth_event.SendEmailVerification);
  dart.setLibraryUri(auth_event.SendEmailVerification, "package:fb_auth/data/blocs/auth/auth_event.dart");
  const EditInfo_displayName = dart.privateName(auth_event, "EditInfo.displayName");
  const EditInfo_photoUrl = dart.privateName(auth_event, "EditInfo.photoUrl");
  const EditInfo_user = dart.privateName(auth_event, "EditInfo.user");
  auth_event.EditInfo = class EditInfo extends auth_event.AuthEvent {
    get displayName() {
      return this[displayName$0];
    }
    set displayName(value) {
      super.displayName = value;
    }
    get photoUrl() {
      return this[photoUrl$0];
    }
    set photoUrl(value) {
      super.photoUrl = value;
    }
    get user() {
      return this[user$1];
    }
    set user(value) {
      super.user = value;
    }
  };
  (auth_event.EditInfo.new = function(user, opts) {
    let displayName = opts && 'displayName' in opts ? opts.displayName : null;
    let photoUrl = opts && 'photoUrl' in opts ? opts.photoUrl : null;
    this[user$1] = user;
    this[displayName$0] = displayName;
    this[photoUrl$0] = photoUrl;
    ;
  }).prototype = auth_event.EditInfo.prototype;
  dart.addTypeTests(auth_event.EditInfo);
  const displayName$0 = EditInfo_displayName;
  const photoUrl$0 = EditInfo_photoUrl;
  const user$1 = EditInfo_user;
  dart.setLibraryUri(auth_event.EditInfo, "package:fb_auth/data/blocs/auth/auth_event.dart");
  dart.setFieldSignature(auth_event.EditInfo, () => ({
    __proto__: dart.getFields(auth_event.EditInfo.__proto__),
    displayName: dart.finalFieldType(core.String),
    photoUrl: dart.finalFieldType(core.String),
    user: dart.finalFieldType(auth_user.AuthUser)
  }));
  dart.trackLibraries("packages/fb_auth/data/blocs/auth/auth_event", {
    "package:fb_auth/data/blocs/auth/auth_event.dart": auth_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_event.dart"],"names":[],"mappings":";;;;;;;;;;;EAK0B;;;;;;EAES;;;;;;IAKpB;;;;;;IAAU;;;;;;;wCAFP,UAAe;IAAf;IAAe;;EAAS;;;;;;;;;;;;;EAKN;;;;;;;;IAMrB;;;;;;IAAU;;;;;;IACV;;;;;;IAAa;;;;;;;2CAJP,UAAe;QACxB;QAAkB;IADT;IAAe;IACxB;IAAkB;;EAAU;;;;;;;;;;;;;;;;IASvB;;;;;;;;IAFE;;EAAK;;;;;;;;;;IAQP;;;;;;;;IAFC;;EAAK;;;;;;;;;;IAQR;;;;;;;;IAFO;;EAAM;;;;;;;;;;;EAKmB;;;;;;;IAKhC;;;;;;IAAa;;;;;;IACX;;;;;;;sCAHD;QAAY;QAAkB;IAA9B;IAAY;IAAkB;;EAAU","file":"auth_event.ddc.js"}');
  // Exports:
  return {
    data__blocs__auth__auth_event: auth_event
  };
});

//# sourceMappingURL=auth_event.ddc.js.map

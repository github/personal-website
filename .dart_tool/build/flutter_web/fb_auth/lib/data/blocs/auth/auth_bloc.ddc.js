define(['dart_sdk', 'packages/fb_auth/data/services/auth/web', 'packages/fb_auth/data/blocs/auth/auth_state', 'packages/fb_auth/data/blocs/auth/auth_event', 'packages/flutter_bloc/flutter_bloc', 'packages/bloc/bloc', 'packages/fb_auth/data/classes/auth_user'], function(dart_sdk, packages__fb_auth__data__services__auth__web, packages__fb_auth__data__blocs__auth__auth_state, packages__fb_auth__data__blocs__auth__auth_event, packages__flutter_bloc__flutter_bloc, packages__bloc__bloc, packages__fb_auth__data__classes__auth_user) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const web = packages__fb_auth__data__services__auth__web.data__services__auth__web;
  const auth_state = packages__fb_auth__data__blocs__auth__auth_state.data__blocs__auth__auth_state;
  const auth_event = packages__fb_auth__data__blocs__auth__auth_event.data__blocs__auth__auth_event;
  const bloc_provider = packages__flutter_bloc__flutter_bloc.src__bloc_provider;
  const bloc = packages__bloc__bloc.src__bloc;
  const auth_user = packages__fb_auth__data__classes__auth_user.data__classes__auth_user;
  const fb_auth = Object.create(dart.library);
  const auth_bloc = Object.create(dart.library);
  const blocs = Object.create(dart.library);
  const bloc$ = Object.create(dart.library);
  let _AsyncStarImplOfAuthState = () => (_AsyncStarImplOfAuthState = dart.constFn(async._AsyncStarImpl$(auth_state.AuthState)))();
  const CT = Object.create(null);
  const _auth = dart.privateName(auth_bloc, "_auth");
  const _mapCheckToState = dart.privateName(auth_bloc, "_mapCheckToState");
  const _mapLoginToState = dart.privateName(auth_bloc, "_mapLoginToState");
  const _mapLogoutToState = dart.privateName(auth_bloc, "_mapLogoutToState");
  const _mapCreateToState = dart.privateName(auth_bloc, "_mapCreateToState");
  const _mapUpdateToState = dart.privateName(auth_bloc, "_mapUpdateToState");
  const _mapEditInfoToState = dart.privateName(auth_bloc, "_mapEditInfoToState");
  const _mapForgotPasswordToState = dart.privateName(auth_bloc, "_mapForgotPasswordToState");
  const _mapVerifyToState = dart.privateName(auth_bloc, "_mapVerifyToState");
  const _mapGuestToState = dart.privateName(auth_bloc, "_mapGuestToState");
  auth_bloc.AuthBloc = class AuthBloc extends bloc.Bloc$(auth_event.AuthEvent, auth_state.AuthState) {
    get saveUser() {
      return this[saveUser$];
    }
    set saveUser(value) {
      super.saveUser = value;
    }
    get deleteUser() {
      return this[deleteUser$];
    }
    set deleteUser(value) {
      super.deleteUser = value;
    }
    get initialState() {
      return new auth_state.InitialAuthState.new();
    }
    mapEventToState(event) {
      auth_event.AuthEvent._check(event);
      return new (_AsyncStarImplOfAuthState()).new((function* mapEventToState(stream) {
        if (auth_event.CheckUser.is(event)) {
          if (stream.addStream(this[_mapCheckToState](event))) return;
          yield;
        }
        if (auth_event.LoginEvent.is(event)) {
          if (stream.addStream(this[_mapLoginToState](event))) return;
          yield;
        }
        if (auth_event.LogoutEvent.is(event)) {
          if (stream.addStream(this[_mapLogoutToState](event))) return;
          yield;
        }
        if (auth_event.CreateAccount.is(event)) {
          if (stream.addStream(this[_mapCreateToState](event))) return;
          yield;
        }
        if (auth_event.UpdateUser.is(event)) {
          if (stream.addStream(this[_mapUpdateToState](event))) return;
          yield;
        }
        if (auth_event.EditInfo.is(event)) {
          if (stream.addStream(this[_mapEditInfoToState](event))) return;
          yield;
        }
        if (auth_event.ForgotPassword.is(event)) {
          if (stream.addStream(this[_mapForgotPasswordToState](event))) return;
          yield;
        }
        if (auth_event.SendEmailVerification.is(event)) {
          if (stream.addStream(this[_mapVerifyToState](event))) return;
          yield;
        }
        if (auth_event.LoginGuest.is(event)) {
          if (stream.addStream(this[_mapGuestToState](event))) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapGuestToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapGuestToState(stream) {
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        let _user = (yield this[_auth].startAsGuest());
        if (_user != null) {
          if (this.saveUser != null) this.saveUser(_user);
          if (stream.add(new auth_state.LoggedInState.new(_user))) return;
          yield;
        } else {
          if (stream.add(new auth_state.LoggedOutState.new())) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapCheckToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapCheckToState(stream) {
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        let _user = (yield this[_auth].currentUser());
        if (_user != null) {
          if (this.saveUser != null) this.saveUser(_user);
          if (stream.add(new auth_state.LoggedInState.new(_user))) return;
          yield;
        } else {
          if (stream.add(new auth_state.LoggedOutState.new())) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapCreateToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapCreateToState(stream) {
        let t0, t0$;
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        let _user = (yield this[_auth].createAccount(event.username, event.password, {displayName: (t0 = event, t0 == null ? null : t0.displayName), photoUrl: (t0$ = event, t0$ == null ? null : t0$.photoUrl)}));
        if (_user != null) {
          if (this.saveUser != null) this.saveUser(_user);
          if (stream.add(new auth_state.LoggedInState.new(_user))) return;
          yield;
        } else {
          if (stream.add(new auth_state.AuthErrorState.new("Error creating user!"))) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapLoginToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapLoginToState(stream) {
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        let _user = (yield this[_auth].login(event.username, event.password));
        if (_user != null) {
          if (this.saveUser != null) this.saveUser(_user);
          if (stream.add(new auth_state.LoggedInState.new(_user))) return;
          yield;
        } else {
          if (stream.add(new auth_state.AuthErrorState.new("Username or Password Incorrect!"))) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapLogoutToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapLogoutToState(stream) {
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        yield this[_auth].logout();
        if (this.deleteUser != null) this.deleteUser();
        if (stream.add(new auth_state.LoggedOutState.new())) return;
        yield;
      }).bind(this)).stream;
    }
    [_mapVerifyToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapVerifyToState(stream) {
        yield this[_auth].sendEmailVerification();
      }).bind(this)).stream;
    }
    [_mapEditInfoToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapEditInfoToState(stream) {
        let t0, t0$;
        if (stream.add(new auth_state.AuthLoadingState.new())) return;
        yield;
        yield this[_auth].editInfo({displayName: (t0 = event, t0 == null ? null : t0.displayName), photoUrl: (t0$ = event, t0$ == null ? null : t0$.photoUrl)});
        let _user = (yield this[_auth].currentUser());
        if (this.saveUser != null) this.saveUser(_user);
        if (stream.add(new auth_state.LoggedInState.new(_user))) return;
        yield;
      }).bind(this)).stream;
    }
    [_mapUpdateToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapUpdateToState(stream) {
        let t0;
        if ((t0 = event, t0 == null ? null : t0.user) != null) {
          if (this.saveUser != null) this.saveUser(event.user);
          if (stream.add(new auth_state.LoggedInState.new(event.user))) return;
          yield;
        } else {
          if (stream.add(new auth_state.LoggedOutState.new())) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapForgotPasswordToState](event) {
      return new (_AsyncStarImplOfAuthState()).new((function* _mapForgotPasswordToState(stream) {
        yield this[_auth].forgotPassword(event.email);
      }).bind(this)).stream;
    }
    static currentUser(context) {
      let auth = bloc_provider.BlocProvider.of(auth_bloc.AuthBloc, context);
      let state = auth.currentState;
      if (auth_state.LoggedInState.is(state)) {
        return state.user;
      }
      return null;
    }
  };
  (auth_bloc.AuthBloc.new = function(opts) {
    let saveUser = opts && 'saveUser' in opts ? opts.saveUser : null;
    let deleteUser = opts && 'deleteUser' in opts ? opts.deleteUser : null;
    this[_auth] = new web.FBAuth.new();
    this[saveUser$] = saveUser;
    this[deleteUser$] = deleteUser;
    auth_bloc.AuthBloc.__proto__.new.call(this);
    ;
  }).prototype = auth_bloc.AuthBloc.prototype;
  dart.addTypeTests(auth_bloc.AuthBloc);
  const saveUser$ = Symbol("AuthBloc.saveUser");
  const deleteUser$ = Symbol("AuthBloc.deleteUser");
  dart.setMethodSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getMethods(auth_bloc.AuthBloc.__proto__),
    mapEventToState: dart.fnType(async.Stream$(auth_state.AuthState), [core.Object]),
    [_mapGuestToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.LoginGuest]),
    [_mapCheckToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.CheckUser]),
    [_mapCreateToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.CreateAccount]),
    [_mapLoginToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.LoginEvent]),
    [_mapLogoutToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.LogoutEvent]),
    [_mapVerifyToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.SendEmailVerification]),
    [_mapEditInfoToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.EditInfo]),
    [_mapUpdateToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.UpdateUser]),
    [_mapForgotPasswordToState]: dart.fnType(async.Stream$(auth_state.AuthState), [auth_event.ForgotPassword])
  }));
  dart.setGetterSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getGetters(auth_bloc.AuthBloc.__proto__),
    initialState: auth_state.AuthState
  }));
  dart.setLibraryUri(auth_bloc.AuthBloc, "package:fb_auth/data/blocs/auth/auth_bloc.dart");
  dart.setFieldSignature(auth_bloc.AuthBloc, () => ({
    __proto__: dart.getFields(auth_bloc.AuthBloc.__proto__),
    saveUser: dart.finalFieldType(dart.fnType(dart.dynamic, [auth_user.AuthUser])),
    deleteUser: dart.finalFieldType(dart.fnType(dart.dynamic, [])),
    [_auth]: dart.finalFieldType(web.FBAuth)
  }));
  dart.trackLibraries("packages/fb_auth/data/blocs/auth/auth_bloc", {
    "package:fb_auth/fb_auth.dart": fb_auth,
    "package:fb_auth/data/blocs/auth/auth_bloc.dart": auth_bloc,
    "package:fb_auth/data/blocs/blocs.dart": blocs,
    "package:fb_auth/data/blocs/auth/bloc.dart": bloc$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["auth_bloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAY2B;;;;;;IAGR;;;;;;;AAIa;IAAkB;oBAIpC;;AADqB;AAG/B,YAAU,wBAAN,KAAK;AACP,+BAAO,uBAAiB,KAAK;UAA7B;;AAEF,YAAU,yBAAN,KAAK;AACP,+BAAO,uBAAiB,KAAK;UAA7B;;AAEF,YAAU,0BAAN,KAAK;AACP,+BAAO,wBAAkB,KAAK;UAA9B;;AAEF,YAAU,4BAAN,KAAK;AACP,+BAAO,wBAAkB,KAAK;UAA9B;;AAEF,YAAU,yBAAN,KAAK;AACP,+BAAO,wBAAkB,KAAK;UAA9B;;AAEF,YAAU,uBAAN,KAAK;AACP,+BAAO,0BAAoB,KAAK;UAAhC;;AAEF,YAAU,6BAAN,KAAK;AACP,+BAAO,gCAA0B,KAAK;UAAtC;;AAEF,YAAU,oCAAN,KAAK;AACP,+BAAO,wBAAkB,KAAK;UAA9B;;AAEF,YAAU,yBAAN,KAAK;AACP,+BAAO,uBAAiB,KAAK;UAA7B;;MAEJ;;uBAE8C;AAAZ;AAChC,uBAAM;QAAN;AACM,qBAAQ,MAAM,AAAM;AAC1B,YAAI,KAAK,IAAI;AACX,cAAI,iBAAY,MAAM,cAAS,KAAK;AACpC,yBAAM,iCAAc,KAAK;UAAzB;;AAEA,yBAAM;UAAN;;MAEJ;;uBAE6C;AAAX;AAChC,uBAAM;QAAN;AACM,qBAAQ,MAAM,AAAM;AAC1B,YAAI,KAAK,IAAI;AACX,cAAI,iBAAY,MAAM,cAAS,KAAK;AACpC,yBAAM,iCAAc,KAAK;UAAzB;;AAEA,yBAAM;UAAN;;MAEJ;;wBAEkD;AAAf;;AACjC,uBAAM;QAAN;AACS,qBAAQ,MAAM,AAAM,0BAAc,AAAM,KAAD,WAAW,AAAM,KAAD,0BACxC,KAAP,KAAK,sBAAE,4BAA8B,MAAP,KAAK,uBAAE;AACtD,YAAI,KAAK,IAAI;AACX,cAAI,iBAAY,MAAM,cAAS,KAAK;AACpC,yBAAM,iCAAc,KAAK;UAAzB;;AAEA,yBAAM,kCAAe;UAArB;;MAEJ;;uBAE8C;AAAZ;AAChC,uBAAM;QAAN;AACM,qBAAQ,MAAM,AAAM,kBAAM,AAAM,KAAD,WAAW,AAAM,KAAD;AACrD,YAAI,KAAK,IAAI;AACX,cAAI,iBAAY,MAAM,cAAS,KAAK;AACpC,yBAAM,iCAAc,KAAK;UAAzB;;AAEA,yBAAM,kCAAe;UAArB;;MAEJ;;wBAEgD;AAAb;AACjC,uBAAM;QAAN;QACA,MAAM,AAAM;AACZ,YAAI,mBAAc,MAAM;AACxB,uBAAM;QAAN;MACF;;wBAE0D;AAAvB;QACjC,MAAM,AAAM;MACd;;0BAE+C;AAAV;;AACnC,uBAAM;QAAN;QACA,MAAM,AAAM,oCACY,KAAP,KAAK,sBAAE,4BAA8B,MAAP,KAAK,uBAAE;AAChD,qBAAQ,MAAM,AAAM;AAC1B,YAAI,iBAAY,MAAM,cAAS,KAAK;AACpC,uBAAM,iCAAc,KAAK;QAAzB;MACF;;wBAE+C;AAAZ;;AACjC,aAAW,KAAP,KAAK,sBAAE,YAAQ;AACjB,cAAI,iBAAY,MAAM,cAAS,AAAM,KAAD;AACpC,yBAAM,iCAAc,AAAM,KAAD;UAAzB;;AAEA,yBAAM;UAAN;;MAEJ;;gCAE2D;AAAhB;QACzC,MAAM,AAAM,2BAAe,AAAM,KAAD;MAClC;;uBAEyC;AACjC,iBAAoB,kDAAa,OAAO;AACxC,kBAAQ,AAAK,IAAD;AAClB,UAAU,4BAAN,KAAK;AACP,cAAO,AAAM,MAAD;;AAEd,YAAO;IACT;;;QA1He;QAAe;IAGxB,cAAQ;IAHC;IAAe;AAA9B;;EAA0C","file":"auth_bloc.ddc.js"}');
  // Exports:
  return {
    fb_auth: fb_auth,
    data__blocs__auth__auth_bloc: auth_bloc,
    data__blocs__blocs: blocs,
    data__blocs__auth__bloc: bloc$
  };
});

//# sourceMappingURL=auth_bloc.ddc.js.map

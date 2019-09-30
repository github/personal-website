define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/personal_website/ui/common/app_route_observer', 'packages/personal_website/data/blocs/settings/bloc', 'packages/fb_auth/data/blocs/auth/auth_bloc', 'packages/fb_auth/data/blocs/auth/auth_event', 'packages/personal_website/data/blocs/settings/settings_event', 'packages/flutter_bloc/flutter_bloc', 'packages/personal_website/data/blocs/blog/bloc', 'packages/bloc/bloc', 'packages/personal_website/data/blocs/settings/settings_state', 'packages/personal_website/generated/i18n', 'packages/fb_auth/data/blocs/auth/auth_state', 'packages/personal_website/data/blocs/blog/blog_event', 'packages/personal_website/data/blocs/blog/blog_state', 'packages/flutter/material', 'packages/personal_website/ui/theme', 'packages/flutter_localizations/flutter_localizations', 'packages/personal_website/ui/apps/screen'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__personal_website__ui__common__app_route_observer, packages__personal_website__data__blocs__settings__bloc, packages__fb_auth__data__blocs__auth__auth_bloc, packages__fb_auth__data__blocs__auth__auth_event, packages__personal_website__data__blocs__settings__settings_event, packages__flutter_bloc__flutter_bloc, packages__personal_website__data__blocs__blog__bloc, packages__bloc__bloc, packages__personal_website__data__blocs__settings__settings_state, packages__personal_website__generated__i18n, packages__fb_auth__data__blocs__auth__auth_state, packages__personal_website__data__blocs__blog__blog_event, packages__personal_website__data__blocs__blog__blog_state, packages__flutter__material, packages__personal_website__ui__theme, packages__flutter_localizations__flutter_localizations, packages__personal_website__ui__apps__screen) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const localizations = packages__flutter__src__widgets__actions.src__widgets__localizations;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const app_route_observer = packages__personal_website__ui__common__app_route_observer.ui__common__app_route_observer;
  const settings_bloc = packages__personal_website__data__blocs__settings__bloc.data__blocs__settings__settings_bloc;
  const auth_bloc = packages__fb_auth__data__blocs__auth__auth_bloc.data__blocs__auth__auth_bloc;
  const auth_event = packages__fb_auth__data__blocs__auth__auth_event.data__blocs__auth__auth_event;
  const settings_event = packages__personal_website__data__blocs__settings__settings_event.data__blocs__settings__settings_event;
  const multi_bloc_provider = packages__flutter_bloc__flutter_bloc.src__multi_bloc_provider;
  const bloc_provider = packages__flutter_bloc__flutter_bloc.src__bloc_provider;
  const bloc_listener = packages__flutter_bloc__flutter_bloc.src__bloc_listener;
  const bloc_builder = packages__flutter_bloc__flutter_bloc.src__bloc_builder;
  const blog_bloc = packages__personal_website__data__blocs__blog__bloc.data__blocs__blog__blog_bloc;
  const bloc = packages__bloc__bloc.src__bloc;
  const settings_state = packages__personal_website__data__blocs__settings__settings_state.data__blocs__settings__settings_state;
  const i18n = packages__personal_website__generated__i18n.generated__i18n;
  const auth_state = packages__fb_auth__data__blocs__auth__auth_state.data__blocs__auth__auth_state;
  const blog_event = packages__personal_website__data__blocs__blog__blog_event.data__blocs__blog__blog_event;
  const blog_state = packages__personal_website__data__blocs__blog__blog_state.data__blocs__blog__blog_state;
  const app = packages__flutter__material.src__material__app;
  const theme = packages__personal_website__ui__theme.ui__theme;
  const material_localizations = packages__flutter_localizations__flutter_localizations.src__material_localizations;
  const widgets_localizations = packages__flutter_localizations__flutter_localizations.src__widgets_localizations;
  const router = packages__personal_website__ui__apps__screen.ui__router;
  const main = Object.create(dart.library);
  let BlocProviderOfAuthBloc = () => (BlocProviderOfAuthBloc = dart.constFn(bloc_provider.BlocProvider$(auth_bloc.AuthBloc)))();
  let BuildContextToAuthBloc = () => (BuildContextToAuthBloc = dart.constFn(dart.fnType(auth_bloc.AuthBloc, [framework.BuildContext])))();
  let BlocProviderOfSettingsBloc = () => (BlocProviderOfSettingsBloc = dart.constFn(bloc_provider.BlocProvider$(settings_bloc.SettingsBloc)))();
  let BuildContextToSettingsBloc = () => (BuildContextToSettingsBloc = dart.constFn(dart.fnType(settings_bloc.SettingsBloc, [framework.BuildContext])))();
  let BlocProviderOfBlogBloc = () => (BlocProviderOfBlogBloc = dart.constFn(bloc_provider.BlocProvider$(blog_bloc.BlogBloc)))();
  let BuildContextToBlogBloc = () => (BuildContextToBlogBloc = dart.constFn(dart.fnType(blog_bloc.BlogBloc, [framework.BuildContext])))();
  let BlocProviderOfBloc = () => (BlocProviderOfBloc = dart.constFn(bloc_provider.BlocProvider$(bloc.Bloc)))();
  let JSArrayOfBlocProviderOfBloc = () => (JSArrayOfBlocProviderOfBloc = dart.constFn(_interceptors.JSArray$(BlocProviderOfBloc())))();
  let BlocListenerOfSettingsBloc$SettingsState = () => (BlocListenerOfSettingsBloc$SettingsState = dart.constFn(bloc_listener.BlocListener$(settings_bloc.SettingsBloc, settings_state.SettingsState)))();
  let BuildContextAndSettingsStateToNull = () => (BuildContextAndSettingsStateToNull = dart.constFn(dart.fnType(core.Null, [framework.BuildContext, settings_state.SettingsState])))();
  let BlocListenerOfAuthBloc$AuthState = () => (BlocListenerOfAuthBloc$AuthState = dart.constFn(bloc_listener.BlocListener$(auth_bloc.AuthBloc, auth_state.AuthState)))();
  let BuildContextAndAuthStateToNull = () => (BuildContextAndAuthStateToNull = dart.constFn(dart.fnType(core.Null, [framework.BuildContext, auth_state.AuthState])))();
  let BlocBuilderOfSettingsBloc$SettingsState = () => (BlocBuilderOfSettingsBloc$SettingsState = dart.constFn(bloc_builder.BlocBuilder$(settings_bloc.SettingsBloc, settings_state.SettingsState)))();
  let BlocBuilderOfBlogBloc$BlogState = () => (BlocBuilderOfBlogBloc$BlogState = dart.constFn(bloc_builder.BlocBuilder$(blog_bloc.BlogBloc, blog_state.BlogState)))();
  let JSArrayOfNavigatorObserver = () => (JSArrayOfNavigatorObserver = dart.constFn(_interceptors.JSArray$(navigator.NavigatorObserver)))();
  let BuildContextToString = () => (BuildContextToString = dart.constFn(dart.fnType(core.String, [framework.BuildContext])))();
  let JSArrayOfLocalizationsDelegate = () => (JSArrayOfLocalizationsDelegate = dart.constFn(_interceptors.JSArray$(localizations.LocalizationsDelegate)))();
  let RouteSettingsToRoute = () => (RouteSettingsToRoute = dart.constFn(dart.fnType(navigator.Route, [navigator.RouteSettings])))();
  let BuildContextAndBlogStateToMaterialApp = () => (BuildContextAndBlogStateToMaterialApp = dart.constFn(dart.fnType(app.MaterialApp, [framework.BuildContext, blog_state.BlogState])))();
  let BuildContextAndSettingsStateToBlocBuilderOfBlogBloc$BlogState = () => (BuildContextAndSettingsStateToBlocBuilderOfBlogBloc$BlogState = dart.constFn(dart.fnType(BlocBuilderOfBlogBloc$BlogState(), [framework.BuildContext, settings_state.SettingsState])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 32,
        line: 45,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 9,
        line: 45,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 36,
        line: 46,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 9,
        line: 46,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 32,
        line: 47,
        file: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C7 || CT.C7,
        name: null,
        column: 9,
        line: 47,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C9() {
      return C9 = dart.fn(router.Router.onUnknownRoute, RouteSettingsToRoute());
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "debugShowCheckedModeBanner",
        column: 17,
        line: 68,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "theme",
        column: 17,
        line: 69,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "darkTheme",
        column: 17,
        line: 73,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "navigatorObservers",
        column: 17,
        line: 77,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onGenerateTitle",
        column: 17,
        line: 78,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "locale",
        column: 17,
        line: 79,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "localizationsDelegates",
        column: 17,
        line: 82,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "supportedLocales",
        column: 17,
        line: 87,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "localeResolutionCallback",
        column: 17,
        line: 88,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onUnknownRoute",
        column: 17,
        line: 93,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialRoute",
        column: 17,
        line: 94,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "routes",
        column: 17,
        line: 95,
        file: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C11 || CT.C11,
        name: null,
        column: 48,
        line: 67,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 15,
        line: 67,
        file: null
      });
    },
    get C25() {
      return C25 = dart.constList([C26 || CT.C26], widget_inspector._Location);
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C25 || CT.C25,
        name: null,
        column: 17,
        line: 66,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 13,
        line: 65,
        file: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C28 || CT.C28,
        name: null,
        column: 18,
        line: 64,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "listener",
        column: 11,
        line: 56,
        file: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 64,
        file: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C31 || CT.C31,
        name: null,
        column: 16,
        line: 55,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "listener",
        column: 9,
        line: 50,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 55,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 14,
        line: 49,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "providers",
        column: 7,
        line: 44,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 49,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 12,
        line: 43,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    },
    get C43() {
      return C43 = dart.constList([], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C43 || CT.C43,
        name: null,
        column: 23,
        line: 15,
        file: "org-dartlang-app:///packages/personal_website/main.dart"
      });
    }
  });
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main._MyAppState, [])
  }));
  dart.setLibraryUri(main.MyApp, "package:personal_website/main.dart");
  const _observer = dart.privateName(main, "_observer");
  const _settingsBloc = dart.privateName(main, "_settingsBloc");
  const _auth = dart.privateName(main, "_auth");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C7;
  let C6;
  let C9;
  let C12;
  let C13;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C11;
  let C10;
  let C26;
  let C25;
  let C24;
  let C29;
  let C28;
  let C27;
  let C32;
  let C33;
  let C31;
  let C30;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  main._MyAppState = class _MyAppState extends framework.State$(main.MyApp) {
    initState() {
      this[_auth].dispatch(new auth_event.CheckUser.new());
      this[_settingsBloc].dispatch(new settings_event.CheckSettings.new());
      super.initState();
    }
    dispose() {
      this[_auth].dispose();
      this[_settingsBloc].dispose();
      super.dispose();
    }
    build(context) {
      return new multi_bloc_provider.MultiBlocProvider.new({providers: JSArrayOfBlocProviderOfBloc().of([new (BlocProviderOfAuthBloc()).new({builder: dart.fn(_ => this[_auth], BuildContextToAuthBloc()), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new (BlocProviderOfSettingsBloc()).new({builder: dart.fn(_ => this[_settingsBloc], BuildContextToSettingsBloc()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new (BlocProviderOfBlogBloc()).new({builder: dart.fn(_ => new blog_bloc.BlogBloc.new(), BuildContextToBlogBloc()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6})]), child: new (BlocListenerOfSettingsBloc$SettingsState()).new({listener: dart.fn((context, state) => {
            if (settings_state.SettingsReady.is(state)) {
              i18n.I18n.locale = state.settings.locale;
            }
          }, BuildContextAndSettingsStateToNull()), child: new (BlocListenerOfAuthBloc$AuthState()).new({listener: dart.fn((context, state) => {
              if (auth_state.LoggedInState.is(state)) {
                bloc_provider.BlocProvider.of(blog_bloc.BlogBloc, context).dispatch(new blog_event.LoadPosts.new());
              }
              if (auth_state.LoggedOutState.is(state)) {
                bloc_provider.BlocProvider.of(auth_bloc.AuthBloc, context).dispatch(new auth_event.LoginGuest.new());
              }
            }, BuildContextAndAuthStateToNull()), child: new (BlocBuilderOfSettingsBloc$SettingsState()).new({builder: dart.fn((context, settingState) => new (BlocBuilderOfBlogBloc$BlogState()).new({builder: dart.fn((context, blocState) => new app.MaterialApp.new({debugShowCheckedModeBanner: false, theme: settings_state.SettingsReady.is(settingState) && dart.test(settingState.settings.darkMode) ? theme.AppTheme.dark : theme.AppTheme.light, darkTheme: settings_state.SettingsReady.is(settingState) && dart.test(settingState.settings.useSystemSetting) ? theme.AppTheme.dark : null, navigatorObservers: JSArrayOfNavigatorObserver().of([this[_observer]]), onGenerateTitle: dart.fn(context => i18n.I18n.of(context).title, BuildContextToString()), locale: settings_state.SettingsReady.is(settingState) ? settingState.settings.locale : new ui.Locale.new("en", "US"), localizationsDelegates: JSArrayOfLocalizationsDelegate().of([main.i18n, material_localizations.GlobalMaterialLocalizations.delegate, widgets_localizations.GlobalWidgetsLocalizations.delegate]), supportedLocales: main.i18n.supportedLocales, localeResolutionCallback: main.i18n.resolution({fallback: settings_state.SettingsReady.is(settingState) ? settingState.settings.locale : new ui.Locale.new("en", "US")}), onUnknownRoute: C9 || CT.C9, initialRoute: router.Router.initialRoute, routes: router.Router.routes(blocState), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), BuildContextAndBlogStateToMaterialApp()), $creationLocationd_0dea112b090073317d4: C24 || CT.C24}), BuildContextAndSettingsStateToBlocBuilderOfBlogBloc$BlogState()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), $creationLocationd_0dea112b090073317d4: C30 || CT.C30}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
    }
  };
  (main._MyAppState.new = function() {
    this[_observer] = app_route_observer.AppRouteObserver.new();
    this[_settingsBloc] = new settings_bloc.SettingsBloc.new();
    this[_auth] = new auth_bloc.AuthBloc.new();
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyAppState, "package:personal_website/main.dart");
  dart.setFieldSignature(main._MyAppState, () => ({
    __proto__: dart.getFields(main._MyAppState.__proto__),
    [_observer]: dart.finalFieldType(app_route_observer.AppRouteObserver),
    [_settingsBloc]: dart.finalFieldType(settings_bloc.SettingsBloc),
    [_auth]: dart.finalFieldType(auth_bloc.AuthBloc)
  }));
  let C43;
  let C42;
  main.main = function main$() {
    return binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C42 || CT.C42}));
  };
  dart.defineLazy(main, {
    /*main.i18n*/get i18n() {
      return i18n.I18n.delegate;
    }
  });
  dart.trackLibraries("packages/personal_website/main", {
    "package:personal_website/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkB+B;IAAa;;;;;;EAC5C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MASI,AAAM,qBAAS;MACf,AAAc,6BAAS;MACjB;IACR;;MAIE,AAAM;MACN,AAAc;MACR;IACR;UAG0B;AACxB,YAAO,2DACM,kCACT,6CAAgC,QAAC,KAAM,+FACvC,iDAAoC,QAAC,KAAM,2GAC3C,6CAAgC,QAAC,KAAM,yHAElC,gEACK,SAAC,SAAS;AAClB,gBAAU,gCAAN,KAAK;cACF,mBAAS,AAAM,AAAS,KAAV;;2DAGhB,wDACK,SAAC,SAAS;AAClB,kBAAU,4BAAN,KAAK;gBACM,AAAsB,kDAAT,OAAO,WAAW;;AAE9C,kBAAU,6BAAN,KAAK;gBACM,AAAsB,kDAAT,OAAO,WAAW;;yDAGzC,8DACI,SAAC,SAAS,iBACf,sDACO,SAAC,SAAS,cAAc,qDACH,cACR,AAAiB,gCAA9B,YAAY,eACX,AAAa,AAAS,YAAV,sBACL,sBACA,iCACS,AAAiB,gCAA9B,YAAY,eACf,AAAa,AAAS,YAAV,8BACL,sBACT,0BACc,iCAAC,oCACJ,QAAC,WAAiB,AAAY,aAAT,OAAO,0CACxB,gCAAb,YAAY,IACd,AAAa,AAAS,YAAV,mBACZ,kBAAO,MAAM,+BACK,qCACtB,WAC4B,6DACD,+EAEX,AAAK,sDACG,AAAK,gCACN,gCAAb,YAAY,IAChB,AAAa,AAAS,YAAV,mBACZ,kBAAO,MAAM,oDAGA,oCACN,qBAAO,SAAS;IAO7C;;;IA/EM,kBAAY;IACZ,sBAAgB;IAEhB,cAAQ;;;EA6EhB;;;;;;;;;;;;;;;;AAxFe,0BAAO;EAAQ;;MAFxB,SAAI;YAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map

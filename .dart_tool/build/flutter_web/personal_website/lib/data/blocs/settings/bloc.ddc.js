define(['dart_sdk', 'packages/personal_website/data/blocs/settings/settings_state', 'packages/personal_website/data/blocs/settings/settings_event', 'packages/personal_website/data/blocs/settings/settings', 'packages/bloc/bloc'], function(dart_sdk, packages__personal_website__data__blocs__settings__settings_state, packages__personal_website__data__blocs__settings__settings_event, packages__personal_website__data__blocs__settings__settings, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const settings_state = packages__personal_website__data__blocs__settings__settings_state.data__blocs__settings__settings_state;
  const settings_event = packages__personal_website__data__blocs__settings__settings_event.data__blocs__settings__settings_event;
  const settings = packages__personal_website__data__blocs__settings__settings.data__blocs__settings__settings;
  const bloc = packages__bloc__bloc.src__bloc;
  const bloc$ = Object.create(dart.library);
  const settings_bloc = Object.create(dart.library);
  let _AsyncStarImplOfSettingsState = () => (_AsyncStarImplOfSettingsState = dart.constFn(async._AsyncStarImpl$(settings_state.SettingsState)))();
  const CT = Object.create(null);
  settings_bloc.SettingsBloc = class SettingsBloc extends bloc.Bloc$(settings_event.SettingsEvent, settings_state.SettingsState) {
    get initialState() {
      return new settings_state.InitialSettingsState.new();
    }
    mapEventToState(event) {
      settings_event.SettingsEvent._check(event);
      return new (_AsyncStarImplOfSettingsState()).new(function* mapEventToState(stream) {
        if (settings_event.CheckSettings.is(event)) {
          if (stream.add(new settings_state.SettingsReady.new(new settings.Settings.new()))) return;
          yield;
        }
        if (settings_event.ChangeSettings.is(event)) {
          if (stream.add(new settings_state.SettingsReady.new(event.settings))) return;
          yield;
        }
      }).stream;
    }
  };
  (settings_bloc.SettingsBloc.new = function() {
    settings_bloc.SettingsBloc.__proto__.new.call(this);
    ;
  }).prototype = settings_bloc.SettingsBloc.prototype;
  dart.addTypeTests(settings_bloc.SettingsBloc);
  dart.setMethodSignature(settings_bloc.SettingsBloc, () => ({
    __proto__: dart.getMethods(settings_bloc.SettingsBloc.__proto__),
    mapEventToState: dart.fnType(async.Stream$(settings_state.SettingsState), [core.Object])
  }));
  dart.setGetterSignature(settings_bloc.SettingsBloc, () => ({
    __proto__: dart.getGetters(settings_bloc.SettingsBloc.__proto__),
    initialState: settings_state.SettingsState
  }));
  dart.setLibraryUri(settings_bloc.SettingsBloc, "package:personal_website/data/blocs/settings/settings_bloc.dart");
  dart.trackLibraries("packages/personal_website/data/blocs/settings/bloc", {
    "package:personal_website/data/blocs/settings/bloc.dart": bloc$,
    "package:personal_website/data/blocs/settings/settings_bloc.dart": settings_bloc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings_bloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;AASoC;IAAsB;oBAIxC;;AADqB;AAGnC,YAAU,gCAAN,KAAK;AACP,yBAAM,qCAAc;UAApB;;AAEF,YAAU,iCAAN,KAAK;AACP,yBAAM,qCAAc,AAAM,KAAD;UAAzB;;MAEJ;;;;;;EACF","file":"bloc.ddc.js"}');
  // Exports:
  return {
    data__blocs__settings__bloc: bloc$,
    data__blocs__settings__settings_bloc: settings_bloc
  };
});

//# sourceMappingURL=bloc.ddc.js.map

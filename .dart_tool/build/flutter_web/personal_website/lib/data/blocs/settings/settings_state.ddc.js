define(['dart_sdk', 'packages/personal_website/data/blocs/settings/settings'], function(dart_sdk, packages__personal_website__data__blocs__settings__settings) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const settings = packages__personal_website__data__blocs__settings__settings.data__blocs__settings__settings;
  const settings_state = Object.create(dart.library);
  const CT = Object.create(null);
  settings_state.SettingsState = class SettingsState extends core.Object {};
  (settings_state.SettingsState.new = function() {
    ;
  }).prototype = settings_state.SettingsState.prototype;
  dart.addTypeTests(settings_state.SettingsState);
  dart.setLibraryUri(settings_state.SettingsState, "package:personal_website/data/blocs/settings/settings_state.dart");
  settings_state.InitialSettingsState = class InitialSettingsState extends settings_state.SettingsState {};
  (settings_state.InitialSettingsState.new = function() {
    ;
  }).prototype = settings_state.InitialSettingsState.prototype;
  dart.addTypeTests(settings_state.InitialSettingsState);
  dart.setLibraryUri(settings_state.InitialSettingsState, "package:personal_website/data/blocs/settings/settings_state.dart");
  const SettingsReady_settings = dart.privateName(settings_state, "SettingsReady.settings");
  settings_state.SettingsReady = class SettingsReady extends settings_state.SettingsState {
    get settings() {
      return this[settings$];
    }
    set settings(value) {
      super.settings = value;
    }
  };
  (settings_state.SettingsReady.new = function(settings) {
    this[settings$] = settings;
    ;
  }).prototype = settings_state.SettingsReady.prototype;
  dart.addTypeTests(settings_state.SettingsReady);
  const settings$ = SettingsReady_settings;
  dart.setLibraryUri(settings_state.SettingsReady, "package:personal_website/data/blocs/settings/settings_state.dart");
  dart.setFieldSignature(settings_state.SettingsReady, () => ({
    __proto__: dart.getFields(settings_state.SettingsReady.__proto__),
    settings: dart.finalFieldType(settings.Settings)
  }));
  dart.trackLibraries("packages/personal_website/data/blocs/settings/settings_state", {
    "package:personal_website/data/blocs/settings/settings_state.dart": settings_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings_state.dart"],"names":[],"mappings":";;;;;;;;;;;EAK8B;;;;;;EAEoB;;;;;IAKjC;;;;;;;;IAFI;;EAAS","file":"settings_state.ddc.js"}');
  // Exports:
  return {
    data__blocs__settings__settings_state: settings_state
  };
});

//# sourceMappingURL=settings_state.ddc.js.map

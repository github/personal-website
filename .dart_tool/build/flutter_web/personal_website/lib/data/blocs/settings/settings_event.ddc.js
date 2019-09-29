define(['dart_sdk', 'packages/personal_website/data/blocs/settings/settings'], function(dart_sdk, packages__personal_website__data__blocs__settings__settings) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const settings = packages__personal_website__data__blocs__settings__settings.data__blocs__settings__settings;
  const settings_event = Object.create(dart.library);
  const CT = Object.create(null);
  settings_event.SettingsEvent = class SettingsEvent extends core.Object {};
  (settings_event.SettingsEvent.new = function() {
    ;
  }).prototype = settings_event.SettingsEvent.prototype;
  dart.addTypeTests(settings_event.SettingsEvent);
  dart.setLibraryUri(settings_event.SettingsEvent, "package:personal_website/data/blocs/settings/settings_event.dart");
  settings_event.ChangeSettings = class ChangeSettings extends settings_event.SettingsEvent {
    get settings() {
      return this[settings$];
    }
    set settings(value) {
      super.settings = value;
    }
  };
  (settings_event.ChangeSettings.new = function(settings) {
    this[settings$] = settings;
    ;
  }).prototype = settings_event.ChangeSettings.prototype;
  dart.addTypeTests(settings_event.ChangeSettings);
  const settings$ = Symbol("ChangeSettings.settings");
  dart.setLibraryUri(settings_event.ChangeSettings, "package:personal_website/data/blocs/settings/settings_event.dart");
  dart.setFieldSignature(settings_event.ChangeSettings, () => ({
    __proto__: dart.getFields(settings_event.ChangeSettings.__proto__),
    settings: dart.finalFieldType(settings.Settings)
  }));
  settings_event.CheckSettings = class CheckSettings extends settings_event.SettingsEvent {};
  (settings_event.CheckSettings.new = function() {
    ;
  }).prototype = settings_event.CheckSettings.prototype;
  dart.addTypeTests(settings_event.CheckSettings);
  dart.setLibraryUri(settings_event.CheckSettings, "package:personal_website/data/blocs/settings/settings_event.dart");
  dart.trackLibraries("packages/personal_website/data/blocs/settings/settings_event", {
    "package:personal_website/data/blocs/settings/settings_event.dart": settings_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings_event.dart"],"names":[],"mappings":";;;;;;;;;;;EAK8B;;;;IAKb;;;;;;;;IAFK;;EAAS;;;;;;;;;;;EAKY","file":"settings_event.ddc.js"}');
  // Exports:
  return {
    data__blocs__settings__settings_event: settings_event
  };
});

//# sourceMappingURL=settings_event.ddc.js.map

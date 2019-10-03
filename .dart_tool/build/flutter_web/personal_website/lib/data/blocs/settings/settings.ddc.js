define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const settings = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui.Locale.prototype,
        [Locale__countryCode]: "US",
        [Locale_scriptCode]: null,
        [Locale__languageCode]: "en"
      });
    }
  });
  const Locale__countryCode = dart.privateName(ui, "Locale._countryCode");
  const Locale_scriptCode = dart.privateName(ui, "Locale.scriptCode");
  const Locale__languageCode = dart.privateName(ui, "Locale._languageCode");
  let C0;
  const Settings_darkMode = dart.privateName(settings, "Settings.darkMode");
  const Settings_useSystemSetting = dart.privateName(settings, "Settings.useSystemSetting");
  const Settings_locale = dart.privateName(settings, "Settings.locale");
  settings.Settings = class Settings extends core.Object {
    get darkMode() {
      return this[darkMode$];
    }
    set darkMode(value) {
      this[darkMode$] = value;
    }
    get useSystemSetting() {
      return this[useSystemSetting$];
    }
    set useSystemSetting(value) {
      this[useSystemSetting$] = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      this[locale$] = value;
    }
  };
  (settings.Settings.new = function(opts) {
    let darkMode = opts && 'darkMode' in opts ? opts.darkMode : false;
    let useSystemSetting = opts && 'useSystemSetting' in opts ? opts.useSystemSetting : true;
    let locale = opts && 'locale' in opts ? opts.locale : C0 || CT.C0;
    this[darkMode$] = darkMode;
    this[useSystemSetting$] = useSystemSetting;
    this[locale$] = locale;
    ;
  }).prototype = settings.Settings.prototype;
  dart.addTypeTests(settings.Settings);
  const darkMode$ = Settings_darkMode;
  const useSystemSetting$ = Settings_useSystemSetting;
  const locale$ = Settings_locale;
  dart.setLibraryUri(settings.Settings, "package:personal_website/data/blocs/settings/settings.dart");
  dart.setFieldSignature(settings.Settings, () => ({
    __proto__: dart.getFields(settings.Settings.__proto__),
    darkMode: dart.fieldType(core.bool),
    useSystemSetting: dart.fieldType(core.bool),
    locale: dart.fieldType(ui.Locale)
  }));
  dart.trackLibraries("packages/personal_website/data/blocs/settings/settings", {
    "package:personal_website/data/blocs/settings/settings.dart": settings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;IASO;;;;;;IAAU;;;;;;IACR;;;;;;;;QANA;QACA;QACA;IAFA;IACA;IACA;;EACL","file":"settings.ddc.js"}');
  // Exports:
  return {
    data__blocs__settings__settings: settings
  };
});

//# sourceMappingURL=settings.ddc.js.map

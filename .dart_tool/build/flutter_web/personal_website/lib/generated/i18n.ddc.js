define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const localizations = packages__flutter__src__widgets__actions.src__widgets__localizations;
  const synchronous_future = packages__flutter__src__foundation___bitfield_web.src__foundation__synchronous_future;
  const i18n = Object.create(dart.library);
  const $first = dartx.first;
  const $length = dartx.length;
  const $_get = dartx._get;
  let IterableOfLocale = () => (IterableOfLocale = dart.constFn(core.Iterable$(ui.Locale)))();
  let LocaleAndIterableOfLocaleToLocale = () => (LocaleAndIterableOfLocaleToLocale = dart.constFn(dart.fnType(ui.Locale, [ui.Locale, IterableOfLocale()])))();
  let SynchronousFutureOfWidgetsLocalizations = () => (SynchronousFutureOfWidgetsLocalizations = dart.constFn(synchronous_future.SynchronousFuture$(localizations.WidgetsLocalizations)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: i18n.GeneratedLocalizationsDelegate.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.Locale.prototype,
        [_countryCode]: "US",
        scriptCode: null,
        [_languageCode]: "en"
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], ui.Locale);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: i18n._I18n_en_US.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: i18n.I18n.prototype
      });
    }
  });
  let C0;
  i18n.I18n = class I18n extends core.Object {
    static set locale(_newLocale) {
      i18n.I18n._shouldReload = true;
      i18n.I18n._locale = _newLocale;
    }
    static of(context) {
      return localizations.Localizations.of(i18n.I18n, context, dart.wrapType(localizations.WidgetsLocalizations));
    }
    get textDirection() {
      return ui.TextDirection.ltr;
    }
    get title() {
      return "Rody Davis";
    }
    get ok() {
      return "Ok";
    }
    get cancel() {
      return "Cancel";
    }
    get settingsTitle() {
      return "Settings";
    }
    get settingsDarkMode() {
      return "Dark Mode";
    }
    get settingsUseSystem() {
      return "System Brightness";
    }
    get aboutTitle() {
      return "About";
    }
    get appsTitle() {
      return "Apps";
    }
    get projectsTitle() {
      return "Projects";
    }
    get blogTitle() {
      return "Blog";
    }
    get blogImage_source() {
      return "Image Source";
    }
    get homeTitle() {
      return "Home";
    }
    get privacy_policy() {
      return "Privacy Policy";
    }
  };
  (i18n.I18n.new = function() {
    ;
  }).prototype = i18n.I18n.prototype;
  dart.addTypeTests(i18n.I18n);
  i18n.I18n[dart.implements] = () => [localizations.WidgetsLocalizations];
  dart.setGetterSignature(i18n.I18n, () => ({
    __proto__: dart.getGetters(i18n.I18n.__proto__),
    textDirection: ui.TextDirection,
    title: core.String,
    ok: core.String,
    cancel: core.String,
    settingsTitle: core.String,
    settingsDarkMode: core.String,
    settingsUseSystem: core.String,
    aboutTitle: core.String,
    appsTitle: core.String,
    projectsTitle: core.String,
    blogTitle: core.String,
    blogImage_source: core.String,
    homeTitle: core.String,
    privacy_policy: core.String
  }));
  dart.setLibraryUri(i18n.I18n, "package:personal_website/generated/i18n.dart");
  dart.defineLazy(i18n.I18n, {
    /*i18n.I18n._locale*/get _locale() {
      return null;
    },
    set _locale(_) {},
    /*i18n.I18n._shouldReload*/get _shouldReload() {
      return false;
    },
    set _shouldReload(_) {},
    /*i18n.I18n.delegate*/get delegate() {
      return C0 || CT.C0;
    },
    /*i18n.I18n.onLocaleChanged*/get onLocaleChanged() {
      return null;
    },
    set onLocaleChanged(_) {}
  });
  i18n._I18n_en_US = class _I18n_en_US extends i18n.I18n {
    get textDirection() {
      return ui.TextDirection.ltr;
    }
  };
  (i18n._I18n_en_US.new = function() {
    i18n._I18n_en_US.__proto__.new.call(this);
    ;
  }).prototype = i18n._I18n_en_US.prototype;
  dart.addTypeTests(i18n._I18n_en_US);
  dart.setLibraryUri(i18n._I18n_en_US, "package:personal_website/generated/i18n.dart");
  const _countryCode = dart.privateName(ui, "_countryCode");
  const _languageCode = dart.privateName(ui, "_languageCode");
  let C2;
  let C1;
  let C3;
  let C4;
  i18n.GeneratedLocalizationsDelegate = class GeneratedLocalizationsDelegate extends localizations.LocalizationsDelegate$(localizations.WidgetsLocalizations) {
    get supportedLocales() {
      return C1 || CT.C1;
    }
    resolution(opts) {
      let fallback = opts && 'fallback' in opts ? opts.fallback : null;
      return dart.fn((locale, supported) => {
        let t0;
        if (dart.test(this.isSupported(locale))) {
          return locale;
        }
        let fallbackLocale = (t0 = fallback, t0 == null ? supported[$first] : t0);
        return fallbackLocale;
      }, LocaleAndIterableOfLocaleToLocale());
    }
    load(_locale) {
      i18n.I18n._locale == null ? i18n.I18n._locale = _locale : null;
      i18n.I18n._shouldReload = false;
      let locale = i18n.I18n._locale;
      let lang = locale != null ? dart.toString(locale) : "";
      let languageCode = locale != null ? locale.languageCode : "";
      if ("en_US" === lang) {
        return new (SynchronousFutureOfWidgetsLocalizations()).new(C3 || CT.C3);
      } else if ("en" === languageCode) {
        return new (SynchronousFutureOfWidgetsLocalizations()).new(C3 || CT.C3);
      }
      return new (SynchronousFutureOfWidgetsLocalizations()).new(C4 || CT.C4);
    }
    isSupported(locale) {
      for (let i = 0; i < dart.notNull(this.supportedLocales[$length]) && locale != null; i = i + 1) {
        let l = this.supportedLocales[$_get](i);
        if (l.languageCode == locale.languageCode) {
          return true;
        }
      }
      return false;
    }
    shouldReload(old) {
      i18n.GeneratedLocalizationsDelegate._check(old);
      return i18n.I18n._shouldReload;
    }
  };
  (i18n.GeneratedLocalizationsDelegate.new = function() {
    i18n.GeneratedLocalizationsDelegate.__proto__.new.call(this);
    ;
  }).prototype = i18n.GeneratedLocalizationsDelegate.prototype;
  dart.addTypeTests(i18n.GeneratedLocalizationsDelegate);
  dart.setMethodSignature(i18n.GeneratedLocalizationsDelegate, () => ({
    __proto__: dart.getMethods(i18n.GeneratedLocalizationsDelegate.__proto__),
    resolution: dart.fnType(dart.fnType(ui.Locale, [ui.Locale, core.Iterable$(ui.Locale)]), [], {fallback: ui.Locale}),
    load: dart.fnType(async.Future$(localizations.WidgetsLocalizations), [ui.Locale]),
    isSupported: dart.fnType(core.bool, [ui.Locale]),
    shouldReload: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(i18n.GeneratedLocalizationsDelegate, () => ({
    __proto__: dart.getGetters(i18n.GeneratedLocalizationsDelegate.__proto__),
    supportedLocales: core.List$(ui.Locale)
  }));
  dart.setLibraryUri(i18n.GeneratedLocalizationsDelegate, "package:personal_website/generated/i18n.dart");
  dart.trackLibraries("packages/personal_website/generated/i18n", {
    "package:personal_website/generated/i18n.dart": i18n
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["i18n.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;sBAkB2B;MACvB,0BAAgB;MACX,oBAAU,UAAU;IAC3B;cAQ4B;AAC1B,YAAc,2CAAS,OAAO,EAAE;IAAqB;;AAGpB,YAAc;IAAG;;AAGhC;IAAY;;AAEf;IAAI;;AAEA;IAAQ;;AAED;IAAU;;AAEP;IAAW;;AAEV;IAAmB;;AAE1B;IAAO;;AAER;IAAM;;AAEF;IAAU;;AAEd;IAAM;;AAEC;IAAc;;AAErB;IAAM;;AAED;IAAgB;;;;EA9CjC;;;;;;;;;;;;;;;;;;;;;;MACE,iBAAO;;;;MACT,uBAAa;YAAG;;;MAOgB,kBAAQ;;;MAIxB,yBAAe;;;;;;;AAwCR,YAAc;IAAG;;;AAH9C;;EAAa;;;;;;;;;;;AASjB;IAGF;;UAE4C;AAC1C,YAAO,UAAQ,QAAyB;;AACtC,sBAAS,iBAAY,MAAM;AACzB,gBAAO,OAAM;;AAEF,8BAA0B,KAAT,QAAQ,QAAC,OAAG,AAAU,SAAD;AACnD,cAAO,eAAc;;IAEzB;SAGyC;MAClC,AAAQ,qBAAA,OAAR,oBAAY,OAAO,GAAX;MACR,0BAAgB;AACR,mBAAc;AACd,iBAAO,AAAe,MAAT,IAAI,OAAc,cAAP,MAAM,IAAc;AAC5C,yBAAe,AAAe,MAAT,IAAI,OAAO,AAAO,MAAD,gBAAgB;AACnE,UAAI,AAAQ,YAAG,IAAI;AACjB,cAAW;YAER,KAAI,AAAK,SAAG,YAAY;AAC3B,cAAW;;AAGb,YAAW;IACb;gBAGwB;AACtB,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,AAAiB,mCAAU,MAAM,IAAI,MAAM,IAAA,AAAC,CAAA;AACxD,gBAAI,AAAgB,6BAAC,CAAC;AAC5B,YAAI,AAAE,AAAa,CAAd,iBAAiB,AAAO,MAAD;AAC1B,gBAAO;;;AAGX,YAAO;IACT;iBAGiD;;AAAQ,YAAK;IAAa;;;AA9CrE;;EAAgC","file":"i18n.ddc.js"}');
  // Exports:
  return {
    generated__i18n: i18n
  };
});

//# sourceMappingURL=i18n.ddc.js.map

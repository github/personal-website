define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const plural_rules = Object.create(dart.library);
  const $round = dartx.round;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $indexOf = dartx.indexOf;
  const $modulo = dartx['%'];
  const $floor = dartx.floor;
  const $containsKey = dartx.containsKey;
  let VoidToPluralCase = () => (VoidToPluralCase = dart.constFn(dart.fnType(plural_rules.PluralCase, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.ZERO",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.ONE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.TWO",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.FEW",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.MANY",
        index: 4
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: plural_rules.PluralCase.prototype,
        [_name$]: "PluralCase.OTHER",
        index: 5
      });
    },
    get C6() {
      return C6 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5], plural_rules.PluralCase);
    },
    get C7() {
      return C7 = dart.fn(plural_rules._es_rule, VoidToPluralCase());
    },
    get C8() {
      return C8 = dart.fn(plural_rules._hi_rule, VoidToPluralCase());
    },
    get C9() {
      return C9 = dart.fn(plural_rules._ar_rule, VoidToPluralCase());
    },
    get C10() {
      return C10 = dart.fn(plural_rules._be_rule, VoidToPluralCase());
    },
    get C11() {
      return C11 = dart.fn(plural_rules._br_rule, VoidToPluralCase());
    },
    get C12() {
      return C12 = dart.fn(plural_rules._sr_rule, VoidToPluralCase());
    },
    get C13() {
      return C13 = dart.fn(plural_rules._en_rule, VoidToPluralCase());
    },
    get C14() {
      return C14 = dart.fn(plural_rules._cs_rule, VoidToPluralCase());
    },
    get C15() {
      return C15 = dart.fn(plural_rules._cy_rule, VoidToPluralCase());
    },
    get C16() {
      return C16 = dart.fn(plural_rules._da_rule, VoidToPluralCase());
    },
    get C17() {
      return C17 = dart.fn(plural_rules._fil_rule, VoidToPluralCase());
    },
    get C18() {
      return C18 = dart.fn(plural_rules._fr_rule, VoidToPluralCase());
    },
    get C19() {
      return C19 = dart.fn(plural_rules._ga_rule, VoidToPluralCase());
    },
    get C20() {
      return C20 = dart.fn(plural_rules._he_rule, VoidToPluralCase());
    },
    get C21() {
      return C21 = dart.fn(plural_rules._default_rule, VoidToPluralCase());
    },
    get C22() {
      return C22 = dart.fn(plural_rules._is_rule, VoidToPluralCase());
    },
    get C23() {
      return C23 = dart.fn(plural_rules._ak_rule, VoidToPluralCase());
    },
    get C24() {
      return C24 = dart.fn(plural_rules._lt_rule, VoidToPluralCase());
    },
    get C25() {
      return C25 = dart.fn(plural_rules._lv_rule, VoidToPluralCase());
    },
    get C26() {
      return C26 = dart.fn(plural_rules._mk_rule, VoidToPluralCase());
    },
    get C27() {
      return C27 = dart.fn(plural_rules._ro_rule, VoidToPluralCase());
    },
    get C28() {
      return C28 = dart.fn(plural_rules._mt_rule, VoidToPluralCase());
    },
    get C29() {
      return C29 = dart.fn(plural_rules._pl_rule, VoidToPluralCase());
    },
    get C30() {
      return C30 = dart.fn(plural_rules._pt_rule, VoidToPluralCase());
    },
    get C31() {
      return C31 = dart.fn(plural_rules._pt_PT_rule, VoidToPluralCase());
    },
    get C32() {
      return C32 = dart.fn(plural_rules._ru_rule, VoidToPluralCase());
    },
    get C33() {
      return C33 = dart.fn(plural_rules._si_rule, VoidToPluralCase());
    },
    get C34() {
      return C34 = dart.fn(plural_rules._sl_rule, VoidToPluralCase());
    }
  });
  const _name$ = dart.privateName(plural_rules, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  plural_rules.PluralCase = class PluralCase extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (plural_rules.PluralCase.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = plural_rules.PluralCase.prototype;
  dart.addTypeTests(plural_rules.PluralCase);
  dart.setLibraryUri(plural_rules.PluralCase, "package:intl/src/plural_rules.dart");
  dart.setFieldSignature(plural_rules.PluralCase, () => ({
    __proto__: dart.getFields(plural_rules.PluralCase.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(plural_rules.PluralCase, ['toString']);
  plural_rules.PluralCase.ZERO = C0 || CT.C0;
  plural_rules.PluralCase.ONE = C1 || CT.C1;
  plural_rules.PluralCase.TWO = C2 || CT.C2;
  plural_rules.PluralCase.FEW = C3 || CT.C3;
  plural_rules.PluralCase.MANY = C4 || CT.C4;
  plural_rules.PluralCase.OTHER = C5 || CT.C5;
  plural_rules.PluralCase.values = C6 || CT.C6;
  plural_rules._default_rule = function _default_rule() {
    return plural_rules.OTHER;
  };
  plural_rules.startRuleEvaluation = function startRuleEvaluation(howMany, precision) {
    if (precision === void 0) precision = 0;
    plural_rules._n = howMany;
    plural_rules._precision = precision;
    plural_rules._i = plural_rules._n[$round]();
    plural_rules._updateVF(plural_rules._n, plural_rules._precision);
    plural_rules._updateWT(plural_rules._f, plural_rules._v);
  };
  plural_rules._decimals = function _decimals(n, precision) {
    let str = plural_rules._precision == null ? dart.str(n) : n[$toStringAsFixed](precision);
    let result = str[$indexOf](".");
    return result === -1 ? 0 : str.length - result - 1;
  };
  plural_rules._updateVF = function _updateVF(n, precision) {
    let t0;
    let defaultDigits = 3;
    plural_rules._v = (t0 = precision, t0 == null ? math.min(core.int, plural_rules._decimals(n, precision), defaultDigits) : t0);
    let base = dart.asInt(math.pow(10, plural_rules._v));
    plural_rules._f = (dart.notNull(n) * base)[$floor]()[$modulo](base);
  };
  plural_rules._updateWT = function _updateWT(v, f) {
    if (f === 0) {
      plural_rules._t = 0;
      return;
    }
    while (f[$modulo](10) === 0) {
      f = (dart.notNull(f) / 10)[$floor]();
      v = dart.notNull(v) - 1;
    }
    plural_rules._t = f;
  };
  plural_rules._fil_rule = function _fil_rule() {
    if (plural_rules._v === 0 && (plural_rules._i === 1 || plural_rules._i === 2 || plural_rules._i === 3) || plural_rules._v === 0 && plural_rules._i[$modulo](10) !== 4 && plural_rules._i[$modulo](10) !== 6 && plural_rules._i[$modulo](10) !== 9 || plural_rules._v !== 0 && plural_rules._f[$modulo](10) !== 4 && plural_rules._f[$modulo](10) !== 6 && plural_rules._f[$modulo](10) !== 9) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._pt_PT_rule = function _pt_PT_rule() {
    if (plural_rules._n === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._br_rule = function _br_rule() {
    if (plural_rules._n[$modulo](10) === 1 && plural_rules._n[$modulo](100) !== 11 && plural_rules._n[$modulo](100) !== 71 && plural_rules._n[$modulo](100) !== 91) {
      return plural_rules.ONE;
    }
    if (plural_rules._n[$modulo](10) === 2 && plural_rules._n[$modulo](100) !== 12 && plural_rules._n[$modulo](100) !== 72 && plural_rules._n[$modulo](100) !== 92) {
      return plural_rules.TWO;
    }
    if ((plural_rules._n[$modulo](10) >= 3 && plural_rules._n[$modulo](10) <= 4 || plural_rules._n[$modulo](10) === 9) && (plural_rules._n[$modulo](100) < 10 || plural_rules._n[$modulo](100) > 19) && (plural_rules._n[$modulo](100) < 70 || plural_rules._n[$modulo](100) > 79) && (plural_rules._n[$modulo](100) < 90 || plural_rules._n[$modulo](100) > 99)) {
      return plural_rules.FEW;
    }
    if (plural_rules._n !== 0 && plural_rules._n[$modulo](1000000) === 0) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._sr_rule = function _sr_rule() {
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) === 1 && plural_rules._i[$modulo](100) !== 11 || plural_rules._f[$modulo](10) === 1 && plural_rules._f[$modulo](100) !== 11) {
      return plural_rules.ONE;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) >= 2 && plural_rules._i[$modulo](10) <= 4 && (plural_rules._i[$modulo](100) < 12 || plural_rules._i[$modulo](100) > 14) || plural_rules._f[$modulo](10) >= 2 && plural_rules._f[$modulo](10) <= 4 && (plural_rules._f[$modulo](100) < 12 || plural_rules._f[$modulo](100) > 14)) {
      return plural_rules.FEW;
    }
    return plural_rules.OTHER;
  };
  plural_rules._ro_rule = function _ro_rule() {
    if (plural_rules._i === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    if (plural_rules._v !== 0 || plural_rules._n === 0 || plural_rules._n !== 1 && plural_rules._n[$modulo](100) >= 1 && plural_rules._n[$modulo](100) <= 19) {
      return plural_rules.FEW;
    }
    return plural_rules.OTHER;
  };
  plural_rules._hi_rule = function _hi_rule() {
    if (plural_rules._i === 0 || plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._fr_rule = function _fr_rule() {
    if (plural_rules._i === 0 || plural_rules._i === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._cs_rule = function _cs_rule() {
    if (plural_rules._i === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    if (dart.notNull(plural_rules._i) >= 2 && dart.notNull(plural_rules._i) <= 4 && plural_rules._v === 0) {
      return plural_rules.FEW;
    }
    if (plural_rules._v !== 0) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._pl_rule = function _pl_rule() {
    if (plural_rules._i === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) >= 2 && plural_rules._i[$modulo](10) <= 4 && (plural_rules._i[$modulo](100) < 12 || plural_rules._i[$modulo](100) > 14)) {
      return plural_rules.FEW;
    }
    if (plural_rules._v === 0 && plural_rules._i !== 1 && plural_rules._i[$modulo](10) >= 0 && plural_rules._i[$modulo](10) <= 1 || plural_rules._v === 0 && plural_rules._i[$modulo](10) >= 5 && plural_rules._i[$modulo](10) <= 9 || plural_rules._v === 0 && plural_rules._i[$modulo](100) >= 12 && plural_rules._i[$modulo](100) <= 14) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._lv_rule = function _lv_rule() {
    if (plural_rules._n[$modulo](10) === 0 || plural_rules._n[$modulo](100) >= 11 && plural_rules._n[$modulo](100) <= 19 || plural_rules._v === 2 && plural_rules._f[$modulo](100) >= 11 && plural_rules._f[$modulo](100) <= 19) {
      return plural_rules.ZERO;
    }
    if (plural_rules._n[$modulo](10) === 1 && plural_rules._n[$modulo](100) !== 11 || plural_rules._v === 2 && plural_rules._f[$modulo](10) === 1 && plural_rules._f[$modulo](100) !== 11 || plural_rules._v !== 2 && plural_rules._f[$modulo](10) === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._he_rule = function _he_rule() {
    if (plural_rules._i === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    if (plural_rules._i === 2 && plural_rules._v === 0) {
      return plural_rules.TWO;
    }
    if (plural_rules._v === 0 && (dart.notNull(plural_rules._n) < 0 || dart.notNull(plural_rules._n) > 10) && plural_rules._n[$modulo](10) === 0) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._mt_rule = function _mt_rule() {
    if (plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    if (plural_rules._n === 0 || plural_rules._n[$modulo](100) >= 2 && plural_rules._n[$modulo](100) <= 10) {
      return plural_rules.FEW;
    }
    if (plural_rules._n[$modulo](100) >= 11 && plural_rules._n[$modulo](100) <= 19) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._si_rule = function _si_rule() {
    if (plural_rules._n === 0 || plural_rules._n === 1 || plural_rules._i === 0 && plural_rules._f === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._cy_rule = function _cy_rule() {
    if (plural_rules._n === 0) {
      return plural_rules.ZERO;
    }
    if (plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    if (plural_rules._n === 2) {
      return plural_rules.TWO;
    }
    if (plural_rules._n === 3) {
      return plural_rules.FEW;
    }
    if (plural_rules._n === 6) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._da_rule = function _da_rule() {
    if (plural_rules._n === 1 || plural_rules._t !== 0 && (plural_rules._i === 0 || plural_rules._i === 1)) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._ru_rule = function _ru_rule() {
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) === 1 && plural_rules._i[$modulo](100) !== 11) {
      return plural_rules.ONE;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) >= 2 && plural_rules._i[$modulo](10) <= 4 && (plural_rules._i[$modulo](100) < 12 || plural_rules._i[$modulo](100) > 14)) {
      return plural_rules.FEW;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) === 0 || plural_rules._v === 0 && plural_rules._i[$modulo](10) >= 5 && plural_rules._i[$modulo](10) <= 9 || plural_rules._v === 0 && plural_rules._i[$modulo](100) >= 11 && plural_rules._i[$modulo](100) <= 14) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._be_rule = function _be_rule() {
    if (plural_rules._n[$modulo](10) === 1 && plural_rules._n[$modulo](100) !== 11) {
      return plural_rules.ONE;
    }
    if (plural_rules._n[$modulo](10) >= 2 && plural_rules._n[$modulo](10) <= 4 && (plural_rules._n[$modulo](100) < 12 || plural_rules._n[$modulo](100) > 14)) {
      return plural_rules.FEW;
    }
    if (plural_rules._n[$modulo](10) === 0 || plural_rules._n[$modulo](10) >= 5 && plural_rules._n[$modulo](10) <= 9 || plural_rules._n[$modulo](100) >= 11 && plural_rules._n[$modulo](100) <= 14) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._mk_rule = function _mk_rule() {
    if (plural_rules._v === 0 && plural_rules._i[$modulo](10) === 1 || plural_rules._f[$modulo](10) === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._ga_rule = function _ga_rule() {
    if (plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    if (plural_rules._n === 2) {
      return plural_rules.TWO;
    }
    if (dart.notNull(plural_rules._n) >= 3 && dart.notNull(plural_rules._n) <= 6) {
      return plural_rules.FEW;
    }
    if (dart.notNull(plural_rules._n) >= 7 && dart.notNull(plural_rules._n) <= 10) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._pt_rule = function _pt_rule() {
    if (dart.notNull(plural_rules._n) >= 0 && dart.notNull(plural_rules._n) <= 2 && plural_rules._n !== 2) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._es_rule = function _es_rule() {
    if (plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._is_rule = function _is_rule() {
    if (plural_rules._t === 0 && plural_rules._i[$modulo](10) === 1 && plural_rules._i[$modulo](100) !== 11 || plural_rules._t !== 0) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._ar_rule = function _ar_rule() {
    if (plural_rules._n === 0) {
      return plural_rules.ZERO;
    }
    if (plural_rules._n === 1) {
      return plural_rules.ONE;
    }
    if (plural_rules._n === 2) {
      return plural_rules.TWO;
    }
    if (plural_rules._n[$modulo](100) >= 3 && plural_rules._n[$modulo](100) <= 10) {
      return plural_rules.FEW;
    }
    if (plural_rules._n[$modulo](100) >= 11 && plural_rules._n[$modulo](100) <= 99) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._sl_rule = function _sl_rule() {
    if (plural_rules._v === 0 && plural_rules._i[$modulo](100) === 1) {
      return plural_rules.ONE;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](100) === 2) {
      return plural_rules.TWO;
    }
    if (plural_rules._v === 0 && plural_rules._i[$modulo](100) >= 3 && plural_rules._i[$modulo](100) <= 4 || plural_rules._v !== 0) {
      return plural_rules.FEW;
    }
    return plural_rules.OTHER;
  };
  plural_rules._lt_rule = function _lt_rule() {
    if (plural_rules._n[$modulo](10) === 1 && (plural_rules._n[$modulo](100) < 11 || plural_rules._n[$modulo](100) > 19)) {
      return plural_rules.ONE;
    }
    if (plural_rules._n[$modulo](10) >= 2 && plural_rules._n[$modulo](10) <= 9 && (plural_rules._n[$modulo](100) < 11 || plural_rules._n[$modulo](100) > 19)) {
      return plural_rules.FEW;
    }
    if (plural_rules._f !== 0) {
      return plural_rules.MANY;
    }
    return plural_rules.OTHER;
  };
  plural_rules._en_rule = function _en_rule() {
    if (plural_rules._i === 1 && plural_rules._v === 0) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules._ak_rule = function _ak_rule() {
    if (dart.notNull(plural_rules._n) >= 0 && dart.notNull(plural_rules._n) <= 1) {
      return plural_rules.ONE;
    }
    return plural_rules.OTHER;
  };
  plural_rules.localeHasPluralRules = function localeHasPluralRules(locale) {
    return plural_rules.pluralRules[$containsKey](locale);
  };
  dart.copyProperties(plural_rules, {
    get ZERO() {
      return plural_rules.PluralCase.ZERO;
    },
    get ONE() {
      return plural_rules.PluralCase.ONE;
    },
    get TWO() {
      return plural_rules.PluralCase.TWO;
    },
    get FEW() {
      return plural_rules.PluralCase.FEW;
    },
    get MANY() {
      return plural_rules.PluralCase.MANY;
    },
    get OTHER() {
      return plural_rules.PluralCase.OTHER;
    }
  });
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
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
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  dart.defineLazy(plural_rules, {
    /*plural_rules._n*/get _n() {
      return null;
    },
    set _n(_) {},
    /*plural_rules._i*/get _i() {
      return null;
    },
    set _i(_) {},
    /*plural_rules._precision*/get _precision() {
      return null;
    },
    set _precision(_) {},
    /*plural_rules._v*/get _v() {
      return 0;
    },
    set _v(_) {},
    /*plural_rules._f*/get _f() {
      return 0;
    },
    set _f(_) {},
    /*plural_rules._t*/get _t() {
      return 0;
    },
    set _t(_) {},
    /*plural_rules.pluralRules*/get pluralRules() {
      return new _js_helper.LinkedMap.from(["af", C7 || CT.C7, "am", C8 || CT.C8, "ar", C9 || CT.C9, "az", C7 || CT.C7, "be", C10 || CT.C10, "bg", C7 || CT.C7, "bn", C8 || CT.C8, "br", C11 || CT.C11, "bs", C12 || CT.C12, "ca", C13 || CT.C13, "chr", C7 || CT.C7, "cs", C14 || CT.C14, "cy", C15 || CT.C15, "da", C16 || CT.C16, "de", C13 || CT.C13, "de_AT", C13 || CT.C13, "de_CH", C13 || CT.C13, "el", C7 || CT.C7, "en", C13 || CT.C13, "en_AU", C13 || CT.C13, "en_CA", C13 || CT.C13, "en_GB", C13 || CT.C13, "en_IE", C13 || CT.C13, "en_IN", C13 || CT.C13, "en_SG", C13 || CT.C13, "en_US", C13 || CT.C13, "en_ZA", C13 || CT.C13, "es", C7 || CT.C7, "es_419", C7 || CT.C7, "es_ES", C7 || CT.C7, "es_MX", C7 || CT.C7, "es_US", C7 || CT.C7, "et", C13 || CT.C13, "eu", C7 || CT.C7, "fa", C8 || CT.C8, "fi", C13 || CT.C13, "fil", C17 || CT.C17, "fr", C18 || CT.C18, "fr_CA", C18 || CT.C18, "ga", C19 || CT.C19, "gl", C13 || CT.C13, "gsw", C7 || CT.C7, "gu", C8 || CT.C8, "haw", C7 || CT.C7, "he", C20 || CT.C20, "hi", C8 || CT.C8, "hr", C12 || CT.C12, "hu", C7 || CT.C7, "hy", C18 || CT.C18, "id", C21 || CT.C21, "in", C21 || CT.C21, "is", C22 || CT.C22, "it", C13 || CT.C13, "iw", C20 || CT.C20, "ja", C21 || CT.C21, "ka", C7 || CT.C7, "kk", C7 || CT.C7, "km", C21 || CT.C21, "kn", C8 || CT.C8, "ko", C21 || CT.C21, "ky", C7 || CT.C7, "ln", C23 || CT.C23, "lo", C21 || CT.C21, "lt", C24 || CT.C24, "lv", C25 || CT.C25, "mk", C26 || CT.C26, "ml", C7 || CT.C7, "mn", C7 || CT.C7, "mo", C27 || CT.C27, "mr", C8 || CT.C8, "ms", C21 || CT.C21, "mt", C28 || CT.C28, "my", C21 || CT.C21, "nb", C7 || CT.C7, "ne", C7 || CT.C7, "nl", C13 || CT.C13, "no", C7 || CT.C7, "no_NO", C7 || CT.C7, "or", C7 || CT.C7, "pa", C23 || CT.C23, "pl", C29 || CT.C29, "pt", C30 || CT.C30, "pt_BR", C30 || CT.C30, "pt_PT", C31 || CT.C31, "ro", C27 || CT.C27, "ru", C32 || CT.C32, "sh", C12 || CT.C12, "si", C33 || CT.C33, "sk", C14 || CT.C14, "sl", C34 || CT.C34, "sq", C7 || CT.C7, "sr", C12 || CT.C12, "sr_Latn", C12 || CT.C12, "sv", C13 || CT.C13, "sw", C13 || CT.C13, "ta", C7 || CT.C7, "te", C7 || CT.C7, "th", C21 || CT.C21, "tl", C17 || CT.C17, "tr", C7 || CT.C7, "uk", C32 || CT.C32, "ur", C13 || CT.C13, "uz", C7 || CT.C7, "vi", C21 || CT.C21, "zh", C21 || CT.C21, "zh_CN", C21 || CT.C21, "zh_HK", C21 || CT.C21, "zh_TW", C21 || CT.C21, "zu", C8 || CT.C8, "default", C21 || CT.C21]);
    }
  });
  dart.trackLibraries("packages/intl/src/plural_rules", {
    "package:intl/src/plural_rules.dart": plural_rules
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["plural_rules.dart"],"names":[],"mappings":"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yBAAH,OAAM,MAAM,AAAG,AAAM,yBAAJ,OAAM,MAAM,AAAG,AAAM,yBAAJ,OAAM;AAC/D,YAAO;;AAET,QAAI,oBAAM;AACR,YAAO;;AAET,UAAO;EACT;;AAGE,QAAI,AAAG,oBAAG,KAAK,AAAG,oBAAG;AACnB,YAAO;;AAET,UAAO;EACT;;AAGE,QAAO,aAAH,oBAAM,KAAQ,aAAH,oBAAM;AACnB,YAAO;;AAET,UAAO;EACT;oEAqHiC;AAAW,UAAA,AAAY,wCAAY,MAAM;EAAC;;;AApbpD,YAAW;IAAI;;AAChB,YAAW;IAAG;;AACd,YAAW;IAAG;;AACd,YAAW;IAAG;;AACb,YAAW;IAAI;;AACd,YAAW;IAAK;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAjFpC,eAAE;;;;MAGF,eAAE;;;;MACF,uBAAU;;;;MAoDV,eAAE;YAAG;;;MAML,eAAE;YAAG;;;MAGL,eAAE;YAAG;;;MA6UC,wBAAW;YAAG,gCACtB,mBACA,mBACA,mBACA,mBACA,qBACA,mBACA,mBACA,qBACA,qBACA,qBACA,oBACA,qBACA,qBACA,qBACA,qBACA,wBACA,wBACA,mBACA,qBACA,wBACA,wBACA,wBACA,wBACA,wBACA,wBACA,wBACA,wBACA,mBACA,uBACA,sBACA,sBACA,sBACA,qBACA,mBACA,mBACA,qBACA,sBACA,qBACA,wBACA,qBACA,qBACA,oBACA,mBACA,oBACA,qBACA,mBACA,qBACA,mBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,mBACA,mBACA,qBACA,mBACA,qBACA,mBACA,qBACA,qBACA,qBACA,qBACA,qBACA,mBACA,mBACA,qBACA,mBACA,qBACA,qBACA,qBACA,mBACA,mBACA,qBACA,mBACA,sBACA,mBACA,qBACA,qBACA,qBACA,wBACA,wBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,mBACA,qBACA,0BACA,qBACA,qBACA,mBACA,mBACA,qBACA,qBACA,mBACA,qBACA,qBACA,mBACA,qBACA,qBACA,wBACA,wBACA,wBACA,mBACA","file":"plural_rules.ddc.js"}');
  // Exports:
  return {
    src__plural_rules: plural_rules
  };
});

//# sourceMappingURL=plural_rules.ddc.js.map

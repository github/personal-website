define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const number_symbols = Object.create(dart.library);
  const CT = Object.create(null);
  const NumberSymbols_NAME = dart.privateName(number_symbols, "NumberSymbols.NAME");
  const NumberSymbols_DECIMAL_SEP = dart.privateName(number_symbols, "NumberSymbols.DECIMAL_SEP");
  const NumberSymbols_GROUP_SEP = dart.privateName(number_symbols, "NumberSymbols.GROUP_SEP");
  const NumberSymbols_PERCENT = dart.privateName(number_symbols, "NumberSymbols.PERCENT");
  const NumberSymbols_ZERO_DIGIT = dart.privateName(number_symbols, "NumberSymbols.ZERO_DIGIT");
  const NumberSymbols_PLUS_SIGN = dart.privateName(number_symbols, "NumberSymbols.PLUS_SIGN");
  const NumberSymbols_MINUS_SIGN = dart.privateName(number_symbols, "NumberSymbols.MINUS_SIGN");
  const NumberSymbols_EXP_SYMBOL = dart.privateName(number_symbols, "NumberSymbols.EXP_SYMBOL");
  const NumberSymbols_PERMILL = dart.privateName(number_symbols, "NumberSymbols.PERMILL");
  const NumberSymbols_INFINITY = dart.privateName(number_symbols, "NumberSymbols.INFINITY");
  const NumberSymbols_NAN = dart.privateName(number_symbols, "NumberSymbols.NAN");
  const NumberSymbols_DECIMAL_PATTERN = dart.privateName(number_symbols, "NumberSymbols.DECIMAL_PATTERN");
  const NumberSymbols_SCIENTIFIC_PATTERN = dart.privateName(number_symbols, "NumberSymbols.SCIENTIFIC_PATTERN");
  const NumberSymbols_PERCENT_PATTERN = dart.privateName(number_symbols, "NumberSymbols.PERCENT_PATTERN");
  const NumberSymbols_CURRENCY_PATTERN = dart.privateName(number_symbols, "NumberSymbols.CURRENCY_PATTERN");
  const NumberSymbols_DEF_CURRENCY_CODE = dart.privateName(number_symbols, "NumberSymbols.DEF_CURRENCY_CODE");
  number_symbols.NumberSymbols = class NumberSymbols extends core.Object {
    get NAME() {
      return this[NAME$];
    }
    set NAME(value) {
      super.NAME = value;
    }
    get DECIMAL_SEP() {
      return this[DECIMAL_SEP$];
    }
    set DECIMAL_SEP(value) {
      super.DECIMAL_SEP = value;
    }
    get GROUP_SEP() {
      return this[GROUP_SEP$];
    }
    set GROUP_SEP(value) {
      super.GROUP_SEP = value;
    }
    get PERCENT() {
      return this[PERCENT$];
    }
    set PERCENT(value) {
      super.PERCENT = value;
    }
    get ZERO_DIGIT() {
      return this[ZERO_DIGIT$];
    }
    set ZERO_DIGIT(value) {
      super.ZERO_DIGIT = value;
    }
    get PLUS_SIGN() {
      return this[PLUS_SIGN$];
    }
    set PLUS_SIGN(value) {
      super.PLUS_SIGN = value;
    }
    get MINUS_SIGN() {
      return this[MINUS_SIGN$];
    }
    set MINUS_SIGN(value) {
      super.MINUS_SIGN = value;
    }
    get EXP_SYMBOL() {
      return this[EXP_SYMBOL$];
    }
    set EXP_SYMBOL(value) {
      super.EXP_SYMBOL = value;
    }
    get PERMILL() {
      return this[PERMILL$];
    }
    set PERMILL(value) {
      super.PERMILL = value;
    }
    get INFINITY() {
      return this[INFINITY$];
    }
    set INFINITY(value) {
      super.INFINITY = value;
    }
    get NAN() {
      return this[NAN$];
    }
    set NAN(value) {
      super.NAN = value;
    }
    get DECIMAL_PATTERN() {
      return this[DECIMAL_PATTERN$];
    }
    set DECIMAL_PATTERN(value) {
      super.DECIMAL_PATTERN = value;
    }
    get SCIENTIFIC_PATTERN() {
      return this[SCIENTIFIC_PATTERN$];
    }
    set SCIENTIFIC_PATTERN(value) {
      super.SCIENTIFIC_PATTERN = value;
    }
    get PERCENT_PATTERN() {
      return this[PERCENT_PATTERN$];
    }
    set PERCENT_PATTERN(value) {
      super.PERCENT_PATTERN = value;
    }
    get CURRENCY_PATTERN() {
      return this[CURRENCY_PATTERN$];
    }
    set CURRENCY_PATTERN(value) {
      super.CURRENCY_PATTERN = value;
    }
    get DEF_CURRENCY_CODE() {
      return this[DEF_CURRENCY_CODE$];
    }
    set DEF_CURRENCY_CODE(value) {
      super.DEF_CURRENCY_CODE = value;
    }
    toString() {
      return this.NAME;
    }
  };
  (number_symbols.NumberSymbols.new = function(opts) {
    let NAME = opts && 'NAME' in opts ? opts.NAME : null;
    let DECIMAL_SEP = opts && 'DECIMAL_SEP' in opts ? opts.DECIMAL_SEP : null;
    let GROUP_SEP = opts && 'GROUP_SEP' in opts ? opts.GROUP_SEP : null;
    let PERCENT = opts && 'PERCENT' in opts ? opts.PERCENT : null;
    let ZERO_DIGIT = opts && 'ZERO_DIGIT' in opts ? opts.ZERO_DIGIT : null;
    let PLUS_SIGN = opts && 'PLUS_SIGN' in opts ? opts.PLUS_SIGN : null;
    let MINUS_SIGN = opts && 'MINUS_SIGN' in opts ? opts.MINUS_SIGN : null;
    let EXP_SYMBOL = opts && 'EXP_SYMBOL' in opts ? opts.EXP_SYMBOL : null;
    let PERMILL = opts && 'PERMILL' in opts ? opts.PERMILL : null;
    let INFINITY = opts && 'INFINITY' in opts ? opts.INFINITY : null;
    let NAN = opts && 'NAN' in opts ? opts.NAN : null;
    let DECIMAL_PATTERN = opts && 'DECIMAL_PATTERN' in opts ? opts.DECIMAL_PATTERN : null;
    let SCIENTIFIC_PATTERN = opts && 'SCIENTIFIC_PATTERN' in opts ? opts.SCIENTIFIC_PATTERN : null;
    let PERCENT_PATTERN = opts && 'PERCENT_PATTERN' in opts ? opts.PERCENT_PATTERN : null;
    let CURRENCY_PATTERN = opts && 'CURRENCY_PATTERN' in opts ? opts.CURRENCY_PATTERN : null;
    let DEF_CURRENCY_CODE = opts && 'DEF_CURRENCY_CODE' in opts ? opts.DEF_CURRENCY_CODE : null;
    this[NAME$] = NAME;
    this[DECIMAL_SEP$] = DECIMAL_SEP;
    this[GROUP_SEP$] = GROUP_SEP;
    this[PERCENT$] = PERCENT;
    this[ZERO_DIGIT$] = ZERO_DIGIT;
    this[PLUS_SIGN$] = PLUS_SIGN;
    this[MINUS_SIGN$] = MINUS_SIGN;
    this[EXP_SYMBOL$] = EXP_SYMBOL;
    this[PERMILL$] = PERMILL;
    this[INFINITY$] = INFINITY;
    this[NAN$] = NAN;
    this[DECIMAL_PATTERN$] = DECIMAL_PATTERN;
    this[SCIENTIFIC_PATTERN$] = SCIENTIFIC_PATTERN;
    this[PERCENT_PATTERN$] = PERCENT_PATTERN;
    this[CURRENCY_PATTERN$] = CURRENCY_PATTERN;
    this[DEF_CURRENCY_CODE$] = DEF_CURRENCY_CODE;
    ;
  }).prototype = number_symbols.NumberSymbols.prototype;
  dart.addTypeTests(number_symbols.NumberSymbols);
  const NAME$ = NumberSymbols_NAME;
  const DECIMAL_SEP$ = NumberSymbols_DECIMAL_SEP;
  const GROUP_SEP$ = NumberSymbols_GROUP_SEP;
  const PERCENT$ = NumberSymbols_PERCENT;
  const ZERO_DIGIT$ = NumberSymbols_ZERO_DIGIT;
  const PLUS_SIGN$ = NumberSymbols_PLUS_SIGN;
  const MINUS_SIGN$ = NumberSymbols_MINUS_SIGN;
  const EXP_SYMBOL$ = NumberSymbols_EXP_SYMBOL;
  const PERMILL$ = NumberSymbols_PERMILL;
  const INFINITY$ = NumberSymbols_INFINITY;
  const NAN$ = NumberSymbols_NAN;
  const DECIMAL_PATTERN$ = NumberSymbols_DECIMAL_PATTERN;
  const SCIENTIFIC_PATTERN$ = NumberSymbols_SCIENTIFIC_PATTERN;
  const PERCENT_PATTERN$ = NumberSymbols_PERCENT_PATTERN;
  const CURRENCY_PATTERN$ = NumberSymbols_CURRENCY_PATTERN;
  const DEF_CURRENCY_CODE$ = NumberSymbols_DEF_CURRENCY_CODE;
  dart.setLibraryUri(number_symbols.NumberSymbols, "package:intl/number_symbols.dart");
  dart.setFieldSignature(number_symbols.NumberSymbols, () => ({
    __proto__: dart.getFields(number_symbols.NumberSymbols.__proto__),
    NAME: dart.finalFieldType(core.String),
    DECIMAL_SEP: dart.finalFieldType(core.String),
    GROUP_SEP: dart.finalFieldType(core.String),
    PERCENT: dart.finalFieldType(core.String),
    ZERO_DIGIT: dart.finalFieldType(core.String),
    PLUS_SIGN: dart.finalFieldType(core.String),
    MINUS_SIGN: dart.finalFieldType(core.String),
    EXP_SYMBOL: dart.finalFieldType(core.String),
    PERMILL: dart.finalFieldType(core.String),
    INFINITY: dart.finalFieldType(core.String),
    NAN: dart.finalFieldType(core.String),
    DECIMAL_PATTERN: dart.finalFieldType(core.String),
    SCIENTIFIC_PATTERN: dart.finalFieldType(core.String),
    PERCENT_PATTERN: dart.finalFieldType(core.String),
    CURRENCY_PATTERN: dart.finalFieldType(core.String),
    DEF_CURRENCY_CODE: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(number_symbols.NumberSymbols, ['toString']);
  const CompactNumberSymbols_COMPACT_DECIMAL_SHORT_PATTERN = dart.privateName(number_symbols, "CompactNumberSymbols.COMPACT_DECIMAL_SHORT_PATTERN");
  const CompactNumberSymbols_COMPACT_DECIMAL_LONG_PATTERN = dart.privateName(number_symbols, "CompactNumberSymbols.COMPACT_DECIMAL_LONG_PATTERN");
  const CompactNumberSymbols_COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN = dart.privateName(number_symbols, "CompactNumberSymbols.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN");
  number_symbols.CompactNumberSymbols = class CompactNumberSymbols extends core.Object {
    get COMPACT_DECIMAL_SHORT_PATTERN() {
      return this[COMPACT_DECIMAL_SHORT_PATTERN$];
    }
    set COMPACT_DECIMAL_SHORT_PATTERN(value) {
      super.COMPACT_DECIMAL_SHORT_PATTERN = value;
    }
    get COMPACT_DECIMAL_LONG_PATTERN() {
      return this[COMPACT_DECIMAL_LONG_PATTERN$];
    }
    set COMPACT_DECIMAL_LONG_PATTERN(value) {
      super.COMPACT_DECIMAL_LONG_PATTERN = value;
    }
    get COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN() {
      return this[COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN$];
    }
    set COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN(value) {
      super.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN = value;
    }
  };
  (number_symbols.CompactNumberSymbols.new = function(opts) {
    let COMPACT_DECIMAL_SHORT_PATTERN = opts && 'COMPACT_DECIMAL_SHORT_PATTERN' in opts ? opts.COMPACT_DECIMAL_SHORT_PATTERN : null;
    let COMPACT_DECIMAL_LONG_PATTERN = opts && 'COMPACT_DECIMAL_LONG_PATTERN' in opts ? opts.COMPACT_DECIMAL_LONG_PATTERN : null;
    let COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN = opts && 'COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN' in opts ? opts.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN : null;
    this[COMPACT_DECIMAL_SHORT_PATTERN$] = COMPACT_DECIMAL_SHORT_PATTERN;
    this[COMPACT_DECIMAL_LONG_PATTERN$] = COMPACT_DECIMAL_LONG_PATTERN;
    this[COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN$] = COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN;
    ;
  }).prototype = number_symbols.CompactNumberSymbols.prototype;
  dart.addTypeTests(number_symbols.CompactNumberSymbols);
  const COMPACT_DECIMAL_SHORT_PATTERN$ = CompactNumberSymbols_COMPACT_DECIMAL_SHORT_PATTERN;
  const COMPACT_DECIMAL_LONG_PATTERN$ = CompactNumberSymbols_COMPACT_DECIMAL_LONG_PATTERN;
  const COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN$ = CompactNumberSymbols_COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN;
  dart.setLibraryUri(number_symbols.CompactNumberSymbols, "package:intl/number_symbols.dart");
  dart.setFieldSignature(number_symbols.CompactNumberSymbols, () => ({
    __proto__: dart.getFields(number_symbols.CompactNumberSymbols.__proto__),
    COMPACT_DECIMAL_SHORT_PATTERN: dart.finalFieldType(core.Map$(core.int, core.String)),
    COMPACT_DECIMAL_LONG_PATTERN: dart.finalFieldType(core.Map$(core.int, core.String)),
    COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN: dart.finalFieldType(core.Map$(core.int, core.String))
  }));
  dart.trackLibraries("packages/intl/number_symbols", {
    "package:intl/number_symbols.dart": number_symbols
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["number_symbols.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IAUe;;;;;;IACA;;;;;;IACT;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAoBU;IAAI;;;QAjBR;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAfC;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAmB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAML;;;;;;IACA;;;;;;IACA;;;;;;;;QAEb;QACD;QACA;IAFC;IACD;IACA;;EAAwC","file":"number_symbols.ddc.js"}');
  // Exports:
  return {
    number_symbols: number_symbols
  };
});

//# sourceMappingURL=number_symbols.ddc.js.map

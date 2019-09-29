define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const number_symbols = Object.create(dart.library);
  const CT = Object.create(null);
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
  const NAME$ = Symbol("NumberSymbols.NAME");
  const DECIMAL_SEP$ = Symbol("NumberSymbols.DECIMAL_SEP");
  const GROUP_SEP$ = Symbol("NumberSymbols.GROUP_SEP");
  const PERCENT$ = Symbol("NumberSymbols.PERCENT");
  const ZERO_DIGIT$ = Symbol("NumberSymbols.ZERO_DIGIT");
  const PLUS_SIGN$ = Symbol("NumberSymbols.PLUS_SIGN");
  const MINUS_SIGN$ = Symbol("NumberSymbols.MINUS_SIGN");
  const EXP_SYMBOL$ = Symbol("NumberSymbols.EXP_SYMBOL");
  const PERMILL$ = Symbol("NumberSymbols.PERMILL");
  const INFINITY$ = Symbol("NumberSymbols.INFINITY");
  const NAN$ = Symbol("NumberSymbols.NAN");
  const DECIMAL_PATTERN$ = Symbol("NumberSymbols.DECIMAL_PATTERN");
  const SCIENTIFIC_PATTERN$ = Symbol("NumberSymbols.SCIENTIFIC_PATTERN");
  const PERCENT_PATTERN$ = Symbol("NumberSymbols.PERCENT_PATTERN");
  const CURRENCY_PATTERN$ = Symbol("NumberSymbols.CURRENCY_PATTERN");
  const DEF_CURRENCY_CODE$ = Symbol("NumberSymbols.DEF_CURRENCY_CODE");
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
  const COMPACT_DECIMAL_SHORT_PATTERN$ = Symbol("CompactNumberSymbols.COMPACT_DECIMAL_SHORT_PATTERN");
  const COMPACT_DECIMAL_LONG_PATTERN$ = Symbol("CompactNumberSymbols.COMPACT_DECIMAL_LONG_PATTERN");
  const COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN$ = Symbol("CompactNumberSymbols.COMPACT_DECIMAL_SHORT_CURRENCY_PATTERN");
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
  }, '{"version":3,"sourceRoot":"","sources":["number_symbols.dart"],"names":[],"mappings":";;;;;;;;IAUe;;;;;;IACA;;;;;;IACT;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;;AAoBU;IAAI;;;QAjBR;QACD;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAfC;IACD;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EAAmB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAML;;;;;;IACA;;;;;;IACA;;;;;;;;QAEb;QACD;QACA;IAFC;IACD;IACA;;EAAwC","file":"number_symbols.ddc.js"}');
  // Exports:
  return {
    number_symbols: number_symbols
  };
});

//# sourceMappingURL=number_symbols.ddc.js.map

define(['dart_sdk', 'packages/intl/intl', 'packages/intl/date_symbols'], function(dart_sdk, packages__intl__intl, packages__intl__date_symbols) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const date_format_internal = packages__intl__intl.src__date_format_internal;
  const date_symbols = packages__intl__date_symbols.date_symbols;
  const date_symbol_data_custom = Object.create(dart.library);
  let MapOfString$DateSymbols = () => (MapOfString$DateSymbols = dart.constFn(core.Map$(core.String, date_symbols.DateSymbols)))();
  let VoidToMapOfString$DateSymbols = () => (VoidToMapOfString$DateSymbols = dart.constFn(dart.fnType(MapOfString$DateSymbols(), [])))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$MapOfString$String = () => (MapOfString$MapOfString$String = dart.constFn(core.Map$(core.String, MapOfString$String())))();
  let VoidToMapOfString$MapOfString$String = () => (VoidToMapOfString$MapOfString$String = dart.constFn(dart.fnType(MapOfString$MapOfString$String(), [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let IdentityMapOfString$DateSymbols = () => (IdentityMapOfString$DateSymbols = dart.constFn(_js_helper.IdentityMap$(core.String, date_symbols.DateSymbols)))();
  let IdentityMapOfString$MapOfString$String = () => (IdentityMapOfString$MapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, MapOfString$String())))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(date_symbol_data_custom._emptySymbols, VoidToMapOfString$DateSymbols());
    },
    get C1() {
      return C1 = dart.fn(date_symbol_data_custom._emptyPatterns, VoidToMapOfString$MapOfString$String());
    }
  });
  let C0;
  let C1;
  date_symbol_data_custom.initializeDateFormattingCustom = function initializeDateFormattingCustom(opts) {
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let symbols = opts && 'symbols' in opts ? opts.symbols : null;
    let patterns = opts && 'patterns' in opts ? opts.patterns : null;
    date_format_internal.initializeDateSymbols(C0 || CT.C0);
    date_format_internal.initializeDatePatterns(C1 || CT.C1);
    if (symbols == null) dart.throw(new core.ArgumentError.new("Missing DateTime formatting symbols"));
    if (patterns == null) dart.throw(new core.ArgumentError.new("Missing DateTime formatting patterns"));
    if (locale != symbols.NAME) dart.throw(new core.ArgumentError.value(JSArrayOfString().of([locale, symbols.NAME]), "Locale does not match symbols.NAME"));
    dart.dsend(date_format_internal.dateTimeSymbols, '_set', [symbols.NAME, symbols]);
    dart.dsend(date_format_internal.dateTimePatterns, '_set', [symbols.NAME, patterns]);
  };
  date_symbol_data_custom._emptySymbols = function _emptySymbols() {
    return new (IdentityMapOfString$DateSymbols()).new();
  };
  date_symbol_data_custom._emptyPatterns = function _emptyPatterns() {
    return new (IdentityMapOfString$MapOfString$String()).new();
  };
  dart.trackLibraries("packages/intl/date_symbol_data_custom", {
    "package:intl/date_symbol_data_custom.dart": date_symbol_data_custom
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["date_symbol_data_custom.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAsBY;QAAoB;QAA6B;IAC3D;IACA;AACA,QAAI,AAAQ,OAAD,IAAI,MACb,WAAU,2BAAc;AAC1B,QAAI,AAAS,QAAD,IAAI,MACd,WAAU,2BAAc;AAC1B,QAAI,MAAM,IAAI,AAAQ,OAAD,OACnB,WAAU,6BACN,sBAAC,MAAM,EAAE,AAAQ,OAAD,SAAQ;IACf,WAAf,+CAAgB,AAAQ,OAAD,OAAS,OAAO;IACvB,WAAhB,gDAAiB,AAAQ,OAAD,OAAS,QAAQ;EAC3C;;AAE4C;EAAE;;AACO;EAAE","file":"date_symbol_data_custom.ddc.js"}');
  // Exports:
  return {
    date_symbol_data_custom: date_symbol_data_custom
  };
});

//# sourceMappingURL=date_symbol_data_custom.ddc.js.map

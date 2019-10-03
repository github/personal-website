define(['dart_sdk', 'packages/source_span/source_span'], function(dart_sdk, packages__source_span__source_span) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const file$ = packages__source_span__source_span.src__file;
  const span = packages__source_span__source_span.src__span;
  const preprocessor_options = Object.create(dart.library);
  const parser = Object.create(dart.library);
  const messages = Object.create(dart.library);
  const visitor = Object.create(dart.library);
  const $add = dartx.add;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trim = dartx.trim;
  const $any = dartx.any;
  const $forEach = dartx.forEach;
  const $insertAll = dartx.insertAll;
  const $clear = dartx.clear;
  const $isEmpty = dartx.isEmpty;
  const $_get = dartx._get;
  const $toLowerCase = dartx.toLowerCase;
  const $first = dartx.first;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $contains = dartx.contains;
  const $toString = dartx.toString;
  const $where = dartx.where;
  const $sublist = dartx.sublist;
  const $codeUnitAt = dartx.codeUnitAt;
  const $toList = dartx.toList;
  const $removeWhere = dartx.removeWhere;
  const $addAll = dartx.addAll;
  const $last = dartx.last;
  const $skip = dartx.skip;
  const $insert = dartx.insert;
  const $indexOf = dartx.indexOf;
  const $containsKey = dartx.containsKey;
  const $removeAt = dartx.removeAt;
  const $replaceRange = dartx.replaceRange;
  const $putIfAbsent = dartx.putIfAbsent;
  const $every = dartx.every;
  const $remove = dartx.remove;
  const $substring = dartx.substring;
  const $toStringAsPrecision = dartx.toStringAsPrecision;
  const $hashCode = dartx.hashCode;
  const $round = dartx.round;
  const $replaceAll = dartx.replaceAll;
  const $split = dartx.split;
  const $toInt = dartx.toInt;
  const $toRadixString = dartx.toRadixString;
  const $modulo = dartx['%'];
  const $firstWhere = dartx.firstWhere;
  const $rightShift = dartx['>>'];
  const $codeUnits = dartx.codeUnits;
  const $map = dartx.map;
  const $toUpperCase = dartx.toUpperCase;
  const $expand = dartx.expand;
  let JSArrayOfTreeNode = () => (JSArrayOfTreeNode = dart.constFn(_interceptors.JSArray$(visitor.TreeNode)))();
  let JSArrayOfMediaQuery = () => (JSArrayOfMediaQuery = dart.constFn(_interceptors.JSArray$(visitor.MediaQuery)))();
  let JSArrayOfMediaExpression = () => (JSArrayOfMediaExpression = dart.constFn(_interceptors.JSArray$(visitor.MediaExpression)))();
  let TreeNodeTobool = () => (TreeNodeTobool = dart.constFn(dart.fnType(core.bool, [visitor.TreeNode])))();
  let JSArrayOfDeclaration = () => (JSArrayOfDeclaration = dart.constFn(_interceptors.JSArray$(visitor.Declaration)))();
  let TreeNodeToNull = () => (TreeNodeToNull = dart.constFn(dart.fnType(core.Null, [visitor.TreeNode])))();
  let ListOfExpression = () => (ListOfExpression = dart.constFn(core.List$(visitor.Expression)))();
  let JSArrayOfListOfExpression = () => (JSArrayOfListOfExpression = dart.constFn(_interceptors.JSArray$(ListOfExpression())))();
  let JSArrayOfExpression = () => (JSArrayOfExpression = dart.constFn(_interceptors.JSArray$(visitor.Expression)))();
  let JSArrayOfLiteralTerm = () => (JSArrayOfLiteralTerm = dart.constFn(_interceptors.JSArray$(visitor.LiteralTerm)))();
  let JSArrayOfSupportsConditionInParens = () => (JSArrayOfSupportsConditionInParens = dart.constFn(_interceptors.JSArray$(visitor.SupportsConditionInParens)))();
  let JSArrayOfDartStyleExpression = () => (JSArrayOfDartStyleExpression = dart.constFn(_interceptors.JSArray$(visitor.DartStyleExpression)))();
  let JSArrayOfDeclarationGroup = () => (JSArrayOfDeclarationGroup = dart.constFn(_interceptors.JSArray$(visitor.DeclarationGroup)))();
  let JSArrayOfSelector = () => (JSArrayOfSelector = dart.constFn(_interceptors.JSArray$(visitor.Selector)))();
  let JSArrayOfSimpleSelectorSequence = () => (JSArrayOfSimpleSelectorSequence = dart.constFn(_interceptors.JSArray$(visitor.SimpleSelectorSequence)))();
  let ExpressionTobool = () => (ExpressionTobool = dart.constFn(dart.fnType(core.bool, [visitor.Expression])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StyleSheetTovoid = () => (StyleSheetTovoid = dart.constFn(dart.fnType(dart.void, [visitor.StyleSheet])))();
  let StyleSheetToExpandNestedSelectors = () => (StyleSheetToExpandNestedSelectors = dart.constFn(dart.fnType(parser.ExpandNestedSelectors, [visitor.StyleSheet])))();
  let StyleSheetToNull = () => (StyleSheetToNull = dart.constFn(dart.fnType(core.Null, [visitor.StyleSheet])))();
  let JSArrayOfRuleSet = () => (JSArrayOfRuleSet = dart.constFn(_interceptors.JSArray$(visitor.RuleSet)))();
  let ListOfRuleSet = () => (ListOfRuleSet = dart.constFn(core.List$(visitor.RuleSet)))();
  let LinkedMapOfRuleSet$ListOfRuleSet = () => (LinkedMapOfRuleSet$ListOfRuleSet = dart.constFn(_js_helper.LinkedMap$(visitor.RuleSet, ListOfRuleSet())))();
  let SimpleSelectorSequenceTobool = () => (SimpleSelectorSequenceTobool = dart.constFn(dart.fnType(core.bool, [visitor.SimpleSelectorSequence])))();
  let RuleSetAndListOfRuleSetToNull = () => (RuleSetAndListOfRuleSetToNull = dart.constFn(dart.fnType(core.Null, [visitor.RuleSet, ListOfRuleSet()])))();
  let LinkedMapOfString$MixinDefinition = () => (LinkedMapOfString$MixinDefinition = dart.constFn(_js_helper.LinkedMap$(core.String, visitor.MixinDefinition)))();
  let SetOfint = () => (SetOfint = dart.constFn(core.Set$(core.int)))();
  let MapOfExpressions$SetOfint = () => (MapOfExpressions$SetOfint = dart.constFn(core.Map$(visitor.Expressions, SetOfint())))();
  let LinkedMapOfString$MapOfExpressions$SetOfint = () => (LinkedMapOfString$MapOfExpressions$SetOfint = dart.constFn(_js_helper.LinkedMap$(core.String, MapOfExpressions$SetOfint())))();
  let ExpressionsAndSetOfintToNull = () => (ExpressionsAndSetOfintToNull = dart.constFn(dart.fnType(core.Null, [visitor.Expressions, SetOfint()])))();
  let _IdentityHashSetOfint = () => (_IdentityHashSetOfint = dart.constFn(collection._IdentityHashSet$(core.int)))();
  let LinkedMapOfExpressions$SetOfint = () => (LinkedMapOfExpressions$SetOfint = dart.constFn(_js_helper.LinkedMap$(visitor.Expressions, SetOfint())))();
  let LinkedMapOfString$CallMixin = () => (LinkedMapOfString$CallMixin = dart.constFn(_js_helper.LinkedMap$(core.String, parser.CallMixin)))();
  let LinkedMapOfString$VarDefinition = () => (LinkedMapOfString$VarDefinition = dart.constFn(_js_helper.LinkedMap$(core.String, visitor.VarDefinition)))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let VoidToCallMixin = () => (VoidToCallMixin = dart.constFn(dart.fnType(parser.CallMixin, [])))();
  let ListOfSelectorGroup = () => (ListOfSelectorGroup = dart.constFn(core.List$(visitor.SelectorGroup)))();
  let LinkedMapOfString$ListOfSelectorGroup = () => (LinkedMapOfString$ListOfSelectorGroup = dart.constFn(_js_helper.LinkedMap$(core.String, ListOfSelectorGroup())))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfSelectorGroup = () => (JSArrayOfSelectorGroup = dart.constFn(_interceptors.JSArray$(visitor.SelectorGroup)))();
  let _HashSetOfStyleSheet = () => (_HashSetOfStyleSheet = dart.constFn(collection._HashSet$(visitor.StyleSheet)))();
  let StringAndVarDefinitionToNull = () => (StringAndVarDefinitionToNull = dart.constFn(dart.fnType(core.Null, [core.String, visitor.VarDefinition])))();
  let JSArrayOfnum = () => (JSArrayOfnum = dart.constFn(_interceptors.JSArray$(core.num)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let MapTobool = () => (MapTobool = dart.constFn(dart.fnType(core.bool, [core.Map])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let JSArrayOfMessage = () => (JSArrayOfMessage = dart.constFn(_interceptors.JSArray$(messages.Message)))();
  let JSArrayOfStyleSheet = () => (JSArrayOfStyleSheet = dart.constFn(_interceptors.JSArray$(visitor.StyleSheet)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let ObjectTovoid = () => (ObjectTovoid = dart.constFn(dart.fnType(dart.void, [core.Object])))();
  let MessageTobool = () => (MessageTobool = dart.constFn(dart.fnType(core.bool, [messages.Message])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let SimpleSelectorSequenceToSimpleSelectorSequence = () => (SimpleSelectorSequenceToSimpleSelectorSequence = dart.constFn(dart.fnType(visitor.SimpleSelectorSequence, [visitor.SimpleSelectorSequence])))();
  let ExpressionToTreeNode = () => (ExpressionToTreeNode = dart.constFn(dart.fnType(visitor.TreeNode, [visitor.Expression])))();
  let TreeNodeToTreeNode = () => (TreeNodeToTreeNode = dart.constFn(dart.fnType(visitor.TreeNode, [visitor.TreeNode])))();
  let JSArrayOfKeyFrameBlock = () => (JSArrayOfKeyFrameBlock = dart.constFn(_interceptors.JSArray$(visitor.KeyFrameBlock)))();
  let JSArrayOfVarDefinition = () => (JSArrayOfVarDefinition = dart.constFn(_interceptors.JSArray$(visitor.VarDefinition)))();
  let ListOfExpressionToListOfExpression = () => (ListOfExpressionToListOfExpression = dart.constFn(dart.fnType(ListOfExpression(), [ListOfExpression()])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: parser.ClauseType.prototype,
        [_name$]: "ClauseType.none",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: parser.ClauseType.prototype,
        [_name$]: "ClauseType.conjunction",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: parser.ClauseType.prototype,
        [_name$]: "ClauseType.disjunction",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], parser.ClauseType);
    },
    get C4() {
      return C4 = dart.constMap(core.String, core.int, ["font", 0, "font-family", 4, "font-size", 3, "font-style", 5, "font-variant", 1, "font-weight", 2, "line-height", 11, "margin", 6, "margin-left", 7, "margin-right", 9, "margin-top", 8, "margin-bottom", 10, "border", 12, "border-left", 13, "border-right", 15, "border-top", 14, "border-bottom", 16, "border-width", 17, "border-left-width", 18, "border-top-width", 19, "border-right-width", 20, "border-bottom-width", 21, "height", 22, "width", 23, "padding", 24, "padding-left", 25, "padding-top", 26, "padding-right", 27, "padding-bottom", 28]);
    },
    get C5() {
      return C5 = dart.constMap(core.String, core.int, ["bold", 700, "normal", 400]);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00ffffff"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "0f08ff"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "0faebd7"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00ffff"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "7fffd4"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f0ffff"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f5f5dc"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffe4c4"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "000000"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffebcd"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "0000ff"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "8a2be2"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "a52a2a"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "deb887"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "5f9ea0"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "7fff00"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "d2691e"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff7f50"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "6495ed"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fff8dc"
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "dc143c"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00008b"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "008b8b"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "b8860b"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "a9a9a9"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "006400"
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "bdb76b"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "8b008b"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "556b2f"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff8c00"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "9932cc"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "8b0000"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "e9967a"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "8fbc8f"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "483d8b"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "2f4f4f"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00ced1"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "9400d3"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff1493"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00bfff"
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "696969"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "1e90ff"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "b22222"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fffaf0"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "228b22"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff00ff"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "dcdcdc"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f8f8ff"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffd700"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "daa520"
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "808080"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "008000"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "adff2f"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f0fff0"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff69b4"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "cd5c5c"
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "4b0082"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fffff0"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f0e68c"
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "e6e6fa"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fff0f5"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "7cfc00"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fffacd"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "add8e6"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f08080"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "e0ffff"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fafad2"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "d3d3d3"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "90ee90"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffb6c1"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffa07a"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "20b2aa"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "87cefa"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "778899"
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "b0c4de"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffffe0"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00ff00"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "32cd32"
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "faf0e6"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "800000"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "66cdaa"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "0000cd"
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ba55d3"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "9370db"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "3cb371"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "7b68ee"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00fa9a"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "48d1cc"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "c71585"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "191970"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f5fffa"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffe4e1"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffe4b5"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffdead"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "000080"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fdf5e6"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "808000"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "6b8e23"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffa500"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff4500"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "da70d6"
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "eee8aa"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "98fb98"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "afeeee"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "db7093"
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffefd5"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffdab9"
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "cd85ef"
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffc0cb"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "dda0dd"
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "b0e0e6"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "800080"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff0000"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "bc8f8f"
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "4169e1"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "8b4513"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fa8072"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f4a460"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "2e8b57"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fff5ee"
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "a0522d"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "c0c0c0"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "87ceeb"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "6a5acd"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "708090"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "fffafa"
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "00ff7f"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "4682b4"
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "d2b48c"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "008080"
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "d8bfd8"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ff6347"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "40e0d0"
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ee82ee"
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f5deb3"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffffff"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "f5f5f5"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "ffff00"
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: parser.Color.prototype,
        [Color__argb]: "9acd32"
      });
    },
    get C145() {
      return C145 = dart.constList(["arial", "verdana", "geneva", "helvetica", "sans-serif"], core.String);
    },
    get C146() {
      return C146 = dart.constList(["georgia", "times new roman", "times", "serif"], core.String);
    },
    get C147() {
      return C147 = dart.constList(["courier new", "courier", "monospace"], core.String);
    },
    get C148() {
      return C148 = dart.constList(["textile", "apple chancery", "zaph chancery", "fantasy"], core.String);
    },
    get C149() {
      return C149 = dart.constList(["comic sans ms", "impact", "webdings", "fantasy"], core.String);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: parser.BoxEdge.prototype,
        [BoxEdge_bottom]: 0,
        [BoxEdge_right]: 0,
        [BoxEdge_top]: 0,
        [BoxEdge_left]: 0
      });
    },
    get C152() {
      return C152 = dart.constMap(core.String, dart.dynamic, ["type", 641, "value", "import"]);
    },
    get C153() {
      return C153 = dart.constMap(core.String, dart.dynamic, ["type", 642, "value", "media"]);
    },
    get C154() {
      return C154 = dart.constMap(core.String, dart.dynamic, ["type", 643, "value", "page"]);
    },
    get C155() {
      return C155 = dart.constMap(core.String, dart.dynamic, ["type", 644, "value", "charset"]);
    },
    get C156() {
      return C156 = dart.constMap(core.String, dart.dynamic, ["type", 645, "value", "stylet"]);
    },
    get C157() {
      return C157 = dart.constMap(core.String, dart.dynamic, ["type", 646, "value", "keyframes"]);
    },
    get C158() {
      return C158 = dart.constMap(core.String, dart.dynamic, ["type", 647, "value", "-webkit-keyframes"]);
    },
    get C159() {
      return C159 = dart.constMap(core.String, dart.dynamic, ["type", 648, "value", "-moz-keyframes"]);
    },
    get C160() {
      return C160 = dart.constMap(core.String, dart.dynamic, ["type", 649, "value", "-ms-keyframes"]);
    },
    get C161() {
      return C161 = dart.constMap(core.String, dart.dynamic, ["type", 650, "value", "-o-keyframes"]);
    },
    get C162() {
      return C162 = dart.constMap(core.String, dart.dynamic, ["type", 651, "value", "font-face"]);
    },
    get C163() {
      return C163 = dart.constMap(core.String, dart.dynamic, ["type", 652, "value", "namespace"]);
    },
    get C164() {
      return C164 = dart.constMap(core.String, dart.dynamic, ["type", 653, "value", "host"]);
    },
    get C165() {
      return C165 = dart.constMap(core.String, dart.dynamic, ["type", 654, "value", "mixin"]);
    },
    get C166() {
      return C166 = dart.constMap(core.String, dart.dynamic, ["type", 655, "value", "include"]);
    },
    get C167() {
      return C167 = dart.constMap(core.String, dart.dynamic, ["type", 656, "value", "content"]);
    },
    get C168() {
      return C168 = dart.constMap(core.String, dart.dynamic, ["type", 657, "value", "extend"]);
    },
    get C169() {
      return C169 = dart.constMap(core.String, dart.dynamic, ["type", 658, "value", "-moz-document"]);
    },
    get C170() {
      return C170 = dart.constMap(core.String, dart.dynamic, ["type", 659, "value", "supports"]);
    },
    get C171() {
      return C171 = dart.constMap(core.String, dart.dynamic, ["type", 660, "value", "viewport"]);
    },
    get C172() {
      return C172 = dart.constMap(core.String, dart.dynamic, ["type", 661, "value", "-ms-viewport"]);
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153, C154 || CT.C154, C155 || CT.C155, C156 || CT.C156, C157 || CT.C157, C158 || CT.C158, C159 || CT.C159, C160 || CT.C160, C161 || CT.C161, C162 || CT.C162, C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169, C170 || CT.C170, C171 || CT.C171, C172 || CT.C172], MapOfString$dynamic());
    },
    get C174() {
      return C174 = dart.constMap(core.String, dart.dynamic, ["type", 665, "value", "only"]);
    },
    get C175() {
      return C175 = dart.constMap(core.String, dart.dynamic, ["type", 666, "value", "not"]);
    },
    get C176() {
      return C176 = dart.constMap(core.String, dart.dynamic, ["type", 667, "value", "and"]);
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175, C176 || CT.C176], MapOfString$dynamic());
    },
    get C178() {
      return C178 = dart.constMap(core.String, dart.dynamic, ["type", 670, "value", "top-left-corner"]);
    },
    get C179() {
      return C179 = dart.constMap(core.String, dart.dynamic, ["type", 671, "value", "top-left"]);
    },
    get C180() {
      return C180 = dart.constMap(core.String, dart.dynamic, ["type", 672, "value", "top-center"]);
    },
    get C181() {
      return C181 = dart.constMap(core.String, dart.dynamic, ["type", 673, "value", "top-right"]);
    },
    get C182() {
      return C182 = dart.constMap(core.String, dart.dynamic, ["type", 674, "value", "top-right-corner"]);
    },
    get C183() {
      return C183 = dart.constMap(core.String, dart.dynamic, ["type", 675, "value", "bottom-left-corner"]);
    },
    get C184() {
      return C184 = dart.constMap(core.String, dart.dynamic, ["type", 676, "value", "bottom-left"]);
    },
    get C185() {
      return C185 = dart.constMap(core.String, dart.dynamic, ["type", 677, "value", "bottom-center"]);
    },
    get C186() {
      return C186 = dart.constMap(core.String, dart.dynamic, ["type", 678, "value", "bottom-right"]);
    },
    get C187() {
      return C187 = dart.constMap(core.String, dart.dynamic, ["type", 679, "value", "bottom-right-corner"]);
    },
    get C188() {
      return C188 = dart.constMap(core.String, dart.dynamic, ["type", 680, "value", "left-top"]);
    },
    get C189() {
      return C189 = dart.constMap(core.String, dart.dynamic, ["type", 681, "value", "left-middle"]);
    },
    get C190() {
      return C190 = dart.constMap(core.String, dart.dynamic, ["type", 682, "value", "right-bottom"]);
    },
    get C191() {
      return C191 = dart.constMap(core.String, dart.dynamic, ["type", 683, "value", "right-top"]);
    },
    get C192() {
      return C192 = dart.constMap(core.String, dart.dynamic, ["type", 684, "value", "right-middle"]);
    },
    get C193() {
      return C193 = dart.constMap(core.String, dart.dynamic, ["type", 685, "value", "right-bottom"]);
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179, C180 || CT.C180, C181 || CT.C181, C182 || CT.C182, C183 || CT.C183, C184 || CT.C184, C185 || CT.C185, C186 || CT.C186, C187 || CT.C187, C188 || CT.C188, C189 || CT.C189, C190 || CT.C190, C191 || CT.C191, C192 || CT.C192, C193 || CT.C193], MapOfString$dynamic());
    },
    get C195() {
      return C195 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 600, "value", "em"]);
    },
    get C196() {
      return C196 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 601, "value", "ex"]);
    },
    get C197() {
      return C197 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 602, "value", "px"]);
    },
    get C198() {
      return C198 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 603, "value", "cm"]);
    },
    get C199() {
      return C199 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 604, "value", "mm"]);
    },
    get C200() {
      return C200 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 605, "value", "in"]);
    },
    get C201() {
      return C201 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 606, "value", "pt"]);
    },
    get C202() {
      return C202 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 607, "value", "pc"]);
    },
    get C203() {
      return C203 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 608, "value", "deg"]);
    },
    get C204() {
      return C204 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 609, "value", "rad"]);
    },
    get C205() {
      return C205 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 610, "value", "grad"]);
    },
    get C206() {
      return C206 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 611, "value", "turn"]);
    },
    get C207() {
      return C207 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 612, "value", "ms"]);
    },
    get C208() {
      return C208 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 613, "value", "s"]);
    },
    get C209() {
      return C209 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 614, "value", "hz"]);
    },
    get C210() {
      return C210 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 615, "value", "khz"]);
    },
    get C211() {
      return C211 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 617, "value", "fr"]);
    },
    get C212() {
      return C212 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 618, "value", "dpi"]);
    },
    get C213() {
      return C213 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 619, "value", "dpcm"]);
    },
    get C214() {
      return C214 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 620, "value", "dppx"]);
    },
    get C215() {
      return C215 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 621, "value", "ch"]);
    },
    get C216() {
      return C216 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 622, "value", "rem"]);
    },
    get C217() {
      return C217 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 623, "value", "vw"]);
    },
    get C218() {
      return C218 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 624, "value", "vh"]);
    },
    get C219() {
      return C219 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 625, "value", "vmin"]);
    },
    get C220() {
      return C220 = dart.constMap(dart.dynamic, dart.dynamic, ["unit", 626, "value", "vmax"]);
    },
    get C194() {
      return C194 = dart.constList([C195 || CT.C195, C196 || CT.C196, C197 || CT.C197, C198 || CT.C198, C199 || CT.C199, C200 || CT.C200, C201 || CT.C201, C202 || CT.C202, C203 || CT.C203, C204 || CT.C204, C205 || CT.C205, C206 || CT.C206, C207 || CT.C207, C208 || CT.C208, C209 || CT.C209, C210 || CT.C210, C211 || CT.C211, C212 || CT.C212, C213 || CT.C213, C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217, C218 || CT.C218, C219 || CT.C219, C220 || CT.C220], core.Map);
    },
    get C222() {
      return C222 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "aliceblue", "value", 985343]);
    },
    get C223() {
      return C223 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "antiquewhite", "value", 16444375]);
    },
    get C224() {
      return C224 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "aqua", "value", 65535]);
    },
    get C225() {
      return C225 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "aquamarine", "value", 8388564]);
    },
    get C226() {
      return C226 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "azure", "value", 15794175]);
    },
    get C227() {
      return C227 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "beige", "value", 16119260]);
    },
    get C228() {
      return C228 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "bisque", "value", 16770244]);
    },
    get C229() {
      return C229 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "black", "value", 0]);
    },
    get C230() {
      return C230 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "blanchedalmond", "value", 16772045]);
    },
    get C231() {
      return C231 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "blue", "value", 255]);
    },
    get C232() {
      return C232 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "blueviolet", "value", 9055202]);
    },
    get C233() {
      return C233 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "brown", "value", 10824234]);
    },
    get C234() {
      return C234 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "burlywood", "value", 14596231]);
    },
    get C235() {
      return C235 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "cadetblue", "value", 6266528]);
    },
    get C236() {
      return C236 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "chartreuse", "value", 8388352]);
    },
    get C237() {
      return C237 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "chocolate", "value", 13789470]);
    },
    get C238() {
      return C238 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "coral", "value", 16744272]);
    },
    get C239() {
      return C239 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "cornflowerblue", "value", 6591981]);
    },
    get C240() {
      return C240 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "cornsilk", "value", 16775388]);
    },
    get C241() {
      return C241 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "crimson", "value", 14423100]);
    },
    get C242() {
      return C242 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "cyan", "value", 65535]);
    },
    get C243() {
      return C243 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkblue", "value", 139]);
    },
    get C244() {
      return C244 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkcyan", "value", 35723]);
    },
    get C245() {
      return C245 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkgoldenrod", "value", 12092939]);
    },
    get C246() {
      return C246 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkgray", "value", 11119017]);
    },
    get C247() {
      return C247 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkgreen", "value", 25600]);
    },
    get C248() {
      return C248 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkgrey", "value", 11119017]);
    },
    get C249() {
      return C249 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkkhaki", "value", 12433259]);
    },
    get C250() {
      return C250 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkmagenta", "value", 9109643]);
    },
    get C251() {
      return C251 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkolivegreen", "value", 5597999]);
    },
    get C252() {
      return C252 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkorange", "value", 16747520]);
    },
    get C253() {
      return C253 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkorchid", "value", 10040012]);
    },
    get C254() {
      return C254 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkred", "value", 9109504]);
    },
    get C255() {
      return C255 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darksalmon", "value", 15308410]);
    },
    get C256() {
      return C256 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkseagreen", "value", 9419919]);
    },
    get C257() {
      return C257 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkslateblue", "value", 4734347]);
    },
    get C258() {
      return C258 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkslategray", "value", 3100495]);
    },
    get C259() {
      return C259 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkslategrey", "value", 3100495]);
    },
    get C260() {
      return C260 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkturquoise", "value", 52945]);
    },
    get C261() {
      return C261 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "darkviolet", "value", 9699539]);
    },
    get C262() {
      return C262 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "deeppink", "value", 16716947]);
    },
    get C263() {
      return C263 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "deepskyblue", "value", 49151]);
    },
    get C264() {
      return C264 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "dimgray", "value", 6908265]);
    },
    get C265() {
      return C265 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "dimgrey", "value", 6908265]);
    },
    get C266() {
      return C266 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "dodgerblue", "value", 2003199]);
    },
    get C267() {
      return C267 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "firebrick", "value", 11674146]);
    },
    get C268() {
      return C268 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "floralwhite", "value", 16775920]);
    },
    get C269() {
      return C269 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "forestgreen", "value", 2263842]);
    },
    get C270() {
      return C270 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "fuchsia", "value", 16711935]);
    },
    get C271() {
      return C271 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "gainsboro", "value", 14474460]);
    },
    get C272() {
      return C272 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "ghostwhite", "value", 16316671]);
    },
    get C273() {
      return C273 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "gold", "value", 16766720]);
    },
    get C274() {
      return C274 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "goldenrod", "value", 14329120]);
    },
    get C275() {
      return C275 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "gray", "value", 8421504]);
    },
    get C276() {
      return C276 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "green", "value", 32768]);
    },
    get C277() {
      return C277 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "greenyellow", "value", 11403055]);
    },
    get C278() {
      return C278 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "grey", "value", 8421504]);
    },
    get C279() {
      return C279 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "honeydew", "value", 15794160]);
    },
    get C280() {
      return C280 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "hotpink", "value", 16738740]);
    },
    get C281() {
      return C281 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "indianred", "value", 13458524]);
    },
    get C282() {
      return C282 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "indigo", "value", 4915330]);
    },
    get C283() {
      return C283 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "ivory", "value", 16777200]);
    },
    get C284() {
      return C284 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "khaki", "value", 15787660]);
    },
    get C285() {
      return C285 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lavender", "value", 15132410]);
    },
    get C286() {
      return C286 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lavenderblush", "value", 16773365]);
    },
    get C287() {
      return C287 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lawngreen", "value", 8190976]);
    },
    get C288() {
      return C288 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lemonchiffon", "value", 16775885]);
    },
    get C289() {
      return C289 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightblue", "value", 11393254]);
    },
    get C290() {
      return C290 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightcoral", "value", 15761536]);
    },
    get C291() {
      return C291 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightcyan", "value", 14745599]);
    },
    get C292() {
      return C292 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightgoldenrodyellow", "value", 16448210]);
    },
    get C293() {
      return C293 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightgray", "value", 13882323]);
    },
    get C294() {
      return C294 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightgreen", "value", 9498256]);
    },
    get C295() {
      return C295 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightgrey", "value", 13882323]);
    },
    get C296() {
      return C296 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightpink", "value", 16758465]);
    },
    get C297() {
      return C297 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightsalmon", "value", 16752762]);
    },
    get C298() {
      return C298 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightseagreen", "value", 2142890]);
    },
    get C299() {
      return C299 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightskyblue", "value", 8900346]);
    },
    get C300() {
      return C300 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightslategray", "value", 7833753]);
    },
    get C301() {
      return C301 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightslategrey", "value", 7833753]);
    },
    get C302() {
      return C302 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightsteelblue", "value", 11584734]);
    },
    get C303() {
      return C303 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lightyellow", "value", 16777184]);
    },
    get C304() {
      return C304 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "lime", "value", 65280]);
    },
    get C305() {
      return C305 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "limegreen", "value", 3329330]);
    },
    get C306() {
      return C306 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "linen", "value", 16445670]);
    },
    get C307() {
      return C307 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "magenta", "value", 16711935]);
    },
    get C308() {
      return C308 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "maroon", "value", 8388608]);
    },
    get C309() {
      return C309 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumaquamarine", "value", 6737322]);
    },
    get C310() {
      return C310 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumblue", "value", 205]);
    },
    get C311() {
      return C311 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumorchid", "value", 12211667]);
    },
    get C312() {
      return C312 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumpurple", "value", 9662683]);
    },
    get C313() {
      return C313 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumseagreen", "value", 3978097]);
    },
    get C314() {
      return C314 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumslateblue", "value", 8087790]);
    },
    get C315() {
      return C315 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumspringgreen", "value", 64154]);
    },
    get C316() {
      return C316 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumturquoise", "value", 4772300]);
    },
    get C317() {
      return C317 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mediumvioletred", "value", 13047173]);
    },
    get C318() {
      return C318 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "midnightblue", "value", 1644912]);
    },
    get C319() {
      return C319 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mintcream", "value", 16121850]);
    },
    get C320() {
      return C320 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "mistyrose", "value", 16770273]);
    },
    get C321() {
      return C321 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "moccasin", "value", 16770229]);
    },
    get C322() {
      return C322 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "navajowhite", "value", 16768685]);
    },
    get C323() {
      return C323 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "navy", "value", 128]);
    },
    get C324() {
      return C324 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "oldlace", "value", 16643558]);
    },
    get C325() {
      return C325 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "olive", "value", 8421376]);
    },
    get C326() {
      return C326 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "olivedrab", "value", 7048739]);
    },
    get C327() {
      return C327 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "orange", "value", 16753920]);
    },
    get C328() {
      return C328 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "orangered", "value", 16729344]);
    },
    get C329() {
      return C329 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "orchid", "value", 14315734]);
    },
    get C330() {
      return C330 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "palegoldenrod", "value", 15657130]);
    },
    get C331() {
      return C331 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "palegreen", "value", 10025880]);
    },
    get C332() {
      return C332 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "paleturquoise", "value", 11529966]);
    },
    get C333() {
      return C333 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "palevioletred", "value", 14381203]);
    },
    get C334() {
      return C334 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "papayawhip", "value", 16773077]);
    },
    get C335() {
      return C335 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "peachpuff", "value", 16767673]);
    },
    get C336() {
      return C336 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "peru", "value", 13468991]);
    },
    get C337() {
      return C337 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "pink", "value", 16761035]);
    },
    get C338() {
      return C338 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "plum", "value", 14524637]);
    },
    get C339() {
      return C339 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "powderblue", "value", 11591910]);
    },
    get C340() {
      return C340 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "purple", "value", 8388736]);
    },
    get C341() {
      return C341 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "red", "value", 16711680]);
    },
    get C342() {
      return C342 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "rosybrown", "value", 12357519]);
    },
    get C343() {
      return C343 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "royalblue", "value", 4286945]);
    },
    get C344() {
      return C344 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "saddlebrown", "value", 9127187]);
    },
    get C345() {
      return C345 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "salmon", "value", 16416882]);
    },
    get C346() {
      return C346 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "sandybrown", "value", 16032864]);
    },
    get C347() {
      return C347 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "seagreen", "value", 3050327]);
    },
    get C348() {
      return C348 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "seashell", "value", 16774638]);
    },
    get C349() {
      return C349 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "sienna", "value", 10506797]);
    },
    get C350() {
      return C350 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "silver", "value", 12632256]);
    },
    get C351() {
      return C351 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "skyblue", "value", 8900331]);
    },
    get C352() {
      return C352 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "slateblue", "value", 6970061]);
    },
    get C353() {
      return C353 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "slategray", "value", 7372944]);
    },
    get C354() {
      return C354 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "slategrey", "value", 7372944]);
    },
    get C355() {
      return C355 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "snow", "value", 16775930]);
    },
    get C356() {
      return C356 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "springgreen", "value", 65407]);
    },
    get C357() {
      return C357 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "steelblue", "value", 4620980]);
    },
    get C358() {
      return C358 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "tan", "value", 13808780]);
    },
    get C359() {
      return C359 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "teal", "value", 32896]);
    },
    get C360() {
      return C360 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "thistle", "value", 14204888]);
    },
    get C361() {
      return C361 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "tomato", "value", 16737095]);
    },
    get C362() {
      return C362 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "turquoise", "value", 4251856]);
    },
    get C363() {
      return C363 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "violet", "value", 15631086]);
    },
    get C364() {
      return C364 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "wheat", "value", 16113331]);
    },
    get C365() {
      return C365 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "white", "value", 16777215]);
    },
    get C366() {
      return C366 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "whitesmoke", "value", 16119285]);
    },
    get C367() {
      return C367 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "yellow", "value", 16776960]);
    },
    get C368() {
      return C368 = dart.constMap(dart.dynamic, dart.dynamic, ["name", "yellowgreen", "value", 10145074]);
    },
    get C221() {
      return C221 = dart.constList([C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225, C226 || CT.C226, C227 || CT.C227, C228 || CT.C228, C229 || CT.C229, C230 || CT.C230, C231 || CT.C231, C232 || CT.C232, C233 || CT.C233, C234 || CT.C234, C235 || CT.C235, C236 || CT.C236, C237 || CT.C237, C238 || CT.C238, C239 || CT.C239, C240 || CT.C240, C241 || CT.C241, C242 || CT.C242, C243 || CT.C243, C244 || CT.C244, C245 || CT.C245, C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249, C250 || CT.C250, C251 || CT.C251, C252 || CT.C252, C253 || CT.C253, C254 || CT.C254, C255 || CT.C255, C256 || CT.C256, C257 || CT.C257, C258 || CT.C258, C259 || CT.C259, C260 || CT.C260, C261 || CT.C261, C262 || CT.C262, C263 || CT.C263, C264 || CT.C264, C265 || CT.C265, C266 || CT.C266, C267 || CT.C267, C268 || CT.C268, C269 || CT.C269, C270 || CT.C270, C271 || CT.C271, C272 || CT.C272, C273 || CT.C273, C274 || CT.C274, C275 || CT.C275, C276 || CT.C276, C277 || CT.C277, C278 || CT.C278, C279 || CT.C279, C280 || CT.C280, C281 || CT.C281, C282 || CT.C282, C283 || CT.C283, C284 || CT.C284, C285 || CT.C285, C286 || CT.C286, C287 || CT.C287, C288 || CT.C288, C289 || CT.C289, C290 || CT.C290, C291 || CT.C291, C292 || CT.C292, C293 || CT.C293, C294 || CT.C294, C295 || CT.C295, C296 || CT.C296, C297 || CT.C297, C298 || CT.C298, C299 || CT.C299, C300 || CT.C300, C301 || CT.C301, C302 || CT.C302, C303 || CT.C303, C304 || CT.C304, C305 || CT.C305, C306 || CT.C306, C307 || CT.C307, C308 || CT.C308, C309 || CT.C309, C310 || CT.C310, C311 || CT.C311, C312 || CT.C312, C313 || CT.C313, C314 || CT.C314, C315 || CT.C315, C316 || CT.C316, C317 || CT.C317, C318 || CT.C318, C319 || CT.C319, C320 || CT.C320, C321 || CT.C321, C322 || CT.C322, C323 || CT.C323, C324 || CT.C324, C325 || CT.C325, C326 || CT.C326, C327 || CT.C327, C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331, C332 || CT.C332, C333 || CT.C333, C334 || CT.C334, C335 || CT.C335, C336 || CT.C336, C337 || CT.C337, C338 || CT.C338, C339 || CT.C339, C340 || CT.C340, C341 || CT.C341, C342 || CT.C342, C343 || CT.C343, C344 || CT.C344, C345 || CT.C345, C346 || CT.C346, C347 || CT.C347, C348 || CT.C348, C349 || CT.C349, C350 || CT.C350, C351 || CT.C351, C352 || CT.C352, C353 || CT.C353, C354 || CT.C354, C355 || CT.C355, C356 || CT.C356, C357 || CT.C357, C358 || CT.C358, C359 || CT.C359, C360 || CT.C360, C361 || CT.C361, C362 || CT.C362, C363 || CT.C363, C364 || CT.C364, C365 || CT.C365, C366 || CT.C366, C367 || CT.C367, C368 || CT.C368], core.Map);
    },
    get C369() {
      return C369 = dart.constList(["after", "before", "first-letter", "first-line"], dart.dynamic);
    },
    get C370() {
      return C370 = dart.const({
        __proto__: messages.MessageLevel.prototype,
        [_name$1]: "MessageLevel.info",
        index: 0
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: messages.MessageLevel.prototype,
        [_name$1]: "MessageLevel.warning",
        index: 1
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: messages.MessageLevel.prototype,
        [_name$1]: "MessageLevel.severe",
        index: 2
      });
    },
    get C373() {
      return C373 = dart.constList([C370 || CT.C370, C371 || CT.C371, C372 || CT.C372], messages.MessageLevel);
    },
    get C374() {
      return C374 = dart.fn(core.print, ObjectTovoid());
    },
    get C375() {
      return C375 = dart.constMap(messages.MessageLevel, core.String, [C372 || CT.C372, "[31m", C371 || CT.C371, "[35m", C370 || CT.C370, "[32m"]);
    },
    get C376() {
      return C376 = dart.constMap(messages.MessageLevel, core.String, [C372 || CT.C372, "error", C371 || CT.C371, "warning", C370 || CT.C370, "info"]);
    }
  });
  const PreprocessorOptions_polyfill = dart.privateName(preprocessor_options, "PreprocessorOptions.polyfill");
  const PreprocessorOptions_warningsAsErrors = dart.privateName(preprocessor_options, "PreprocessorOptions.warningsAsErrors");
  const PreprocessorOptions_throwOnWarnings = dart.privateName(preprocessor_options, "PreprocessorOptions.throwOnWarnings");
  const PreprocessorOptions_throwOnErrors = dart.privateName(preprocessor_options, "PreprocessorOptions.throwOnErrors");
  const PreprocessorOptions_verbose = dart.privateName(preprocessor_options, "PreprocessorOptions.verbose");
  const PreprocessorOptions_checked = dart.privateName(preprocessor_options, "PreprocessorOptions.checked");
  const PreprocessorOptions_lessSupport = dart.privateName(preprocessor_options, "PreprocessorOptions.lessSupport");
  const PreprocessorOptions_useColors = dart.privateName(preprocessor_options, "PreprocessorOptions.useColors");
  const PreprocessorOptions_inputFile = dart.privateName(preprocessor_options, "PreprocessorOptions.inputFile");
  preprocessor_options.PreprocessorOptions = class PreprocessorOptions extends core.Object {
    get polyfill() {
      return this[polyfill$];
    }
    set polyfill(value) {
      super.polyfill = value;
    }
    get warningsAsErrors() {
      return this[warningsAsErrors$];
    }
    set warningsAsErrors(value) {
      super.warningsAsErrors = value;
    }
    get throwOnWarnings() {
      return this[throwOnWarnings$];
    }
    set throwOnWarnings(value) {
      super.throwOnWarnings = value;
    }
    get throwOnErrors() {
      return this[throwOnErrors$];
    }
    set throwOnErrors(value) {
      super.throwOnErrors = value;
    }
    get verbose() {
      return this[verbose$];
    }
    set verbose(value) {
      super.verbose = value;
    }
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get lessSupport() {
      return this[lessSupport$];
    }
    set lessSupport(value) {
      super.lessSupport = value;
    }
    get useColors() {
      return this[useColors$];
    }
    set useColors(value) {
      super.useColors = value;
    }
    get inputFile() {
      return this[inputFile$];
    }
    set inputFile(value) {
      super.inputFile = value;
    }
  };
  (preprocessor_options.PreprocessorOptions.new = function(opts) {
    let verbose = opts && 'verbose' in opts ? opts.verbose : false;
    let checked = opts && 'checked' in opts ? opts.checked : false;
    let lessSupport = opts && 'lessSupport' in opts ? opts.lessSupport : true;
    let warningsAsErrors = opts && 'warningsAsErrors' in opts ? opts.warningsAsErrors : false;
    let throwOnErrors = opts && 'throwOnErrors' in opts ? opts.throwOnErrors : false;
    let throwOnWarnings = opts && 'throwOnWarnings' in opts ? opts.throwOnWarnings : false;
    let useColors = opts && 'useColors' in opts ? opts.useColors : true;
    let polyfill = opts && 'polyfill' in opts ? opts.polyfill : false;
    let inputFile = opts && 'inputFile' in opts ? opts.inputFile : null;
    this[verbose$] = verbose;
    this[checked$] = checked;
    this[lessSupport$] = lessSupport;
    this[warningsAsErrors$] = warningsAsErrors;
    this[throwOnErrors$] = throwOnErrors;
    this[throwOnWarnings$] = throwOnWarnings;
    this[useColors$] = useColors;
    this[polyfill$] = polyfill;
    this[inputFile$] = inputFile;
    ;
  }).prototype = preprocessor_options.PreprocessorOptions.prototype;
  dart.addTypeTests(preprocessor_options.PreprocessorOptions);
  const polyfill$ = PreprocessorOptions_polyfill;
  const warningsAsErrors$ = PreprocessorOptions_warningsAsErrors;
  const throwOnWarnings$ = PreprocessorOptions_throwOnWarnings;
  const throwOnErrors$ = PreprocessorOptions_throwOnErrors;
  const verbose$ = PreprocessorOptions_verbose;
  const checked$ = PreprocessorOptions_checked;
  const lessSupport$ = PreprocessorOptions_lessSupport;
  const useColors$ = PreprocessorOptions_useColors;
  const inputFile$ = PreprocessorOptions_inputFile;
  dart.setLibraryUri(preprocessor_options.PreprocessorOptions, "package:csslib/src/preprocessor_options.dart");
  dart.setFieldSignature(preprocessor_options.PreprocessorOptions, () => ({
    __proto__: dart.getFields(preprocessor_options.PreprocessorOptions.__proto__),
    polyfill: dart.finalFieldType(core.bool),
    warningsAsErrors: dart.finalFieldType(core.bool),
    throwOnWarnings: dart.finalFieldType(core.bool),
    throwOnErrors: dart.finalFieldType(core.bool),
    verbose: dart.finalFieldType(core.bool),
    checked: dart.finalFieldType(core.bool),
    lessSupport: dart.finalFieldType(core.bool),
    useColors: dart.finalFieldType(core.bool),
    inputFile: dart.finalFieldType(core.String)
  }));
  const _name$ = dart.privateName(parser, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  parser.ClauseType = class ClauseType extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (parser.ClauseType.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = parser.ClauseType.prototype;
  dart.addTypeTests(parser.ClauseType);
  dart.setLibraryUri(parser.ClauseType, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.ClauseType, () => ({
    __proto__: dart.getFields(parser.ClauseType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(parser.ClauseType, ['toString']);
  parser.ClauseType.none = C0 || CT.C0;
  parser.ClauseType.conjunction = C1 || CT.C1;
  parser.ClauseType.disjunction = C2 || CT.C2;
  parser.ClauseType.values = C3 || CT.C3;
  const _index$ = dart.privateName(parser, "_index");
  const _startIndex = dart.privateName(parser, "_startIndex");
  const TokenizerState_index = dart.privateName(parser, "TokenizerState.index");
  const TokenizerState_startIndex = dart.privateName(parser, "TokenizerState.startIndex");
  const TokenizerState_inSelectorExpression = dart.privateName(parser, "TokenizerState.inSelectorExpression");
  const TokenizerState_inSelector = dart.privateName(parser, "TokenizerState.inSelector");
  parser.TokenizerState = class TokenizerState extends core.Object {
    get index() {
      return this[index];
    }
    set index(value) {
      super.index = value;
    }
    get startIndex() {
      return this[startIndex];
    }
    set startIndex(value) {
      super.startIndex = value;
    }
    get inSelectorExpression() {
      return this[inSelectorExpression];
    }
    set inSelectorExpression(value) {
      super.inSelectorExpression = value;
    }
    get inSelector() {
      return this[inSelector];
    }
    set inSelector(value) {
      super.inSelector = value;
    }
  };
  (parser.TokenizerState.new = function(base) {
    this[index] = base[_index$];
    this[startIndex] = base[_startIndex];
    this[inSelectorExpression] = base.inSelectorExpression;
    this[inSelector] = base.inSelector;
    ;
  }).prototype = parser.TokenizerState.prototype;
  dart.addTypeTests(parser.TokenizerState);
  const index = TokenizerState_index;
  const startIndex = TokenizerState_startIndex;
  const inSelectorExpression = TokenizerState_inSelectorExpression;
  const inSelector = TokenizerState_inSelector;
  dart.setLibraryUri(parser.TokenizerState, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.TokenizerState, () => ({
    __proto__: dart.getFields(parser.TokenizerState.__proto__),
    index: dart.finalFieldType(core.int),
    startIndex: dart.finalFieldType(core.int),
    inSelectorExpression: dart.finalFieldType(core.bool),
    inSelector: dart.finalFieldType(core.bool)
  }));
  const ParserState_peekToken = dart.privateName(parser, "ParserState.peekToken");
  const ParserState_previousToken = dart.privateName(parser, "ParserState.previousToken");
  parser.ParserState = class ParserState extends parser.TokenizerState {
    get peekToken() {
      return this[peekToken$];
    }
    set peekToken(value) {
      super.peekToken = value;
    }
    get previousToken() {
      return this[previousToken$];
    }
    set previousToken(value) {
      super.previousToken = value;
    }
  };
  (parser.ParserState.new = function(peekToken, previousToken, tokenizer) {
    this[peekToken$] = peekToken;
    this[previousToken$] = previousToken;
    parser.ParserState.__proto__.new.call(this, tokenizer);
    ;
  }).prototype = parser.ParserState.prototype;
  dart.addTypeTests(parser.ParserState);
  const peekToken$ = ParserState_peekToken;
  const previousToken$ = ParserState_previousToken;
  dart.setLibraryUri(parser.ParserState, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.ParserState, () => ({
    __proto__: dart.getFields(parser.ParserState.__proto__),
    peekToken: dart.finalFieldType(parser.Token),
    previousToken: dart.finalFieldType(parser.Token)
  }));
  const _parser = dart.privateName(parser, "_parser");
  parser.Parser = class Parser extends core.Object {
    parse() {
      return this[_parser].parse();
    }
  };
  (parser.Parser.new = function(file, text, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let baseUrl = opts && 'baseUrl' in opts ? opts.baseUrl : null;
    this[_parser] = new parser._Parser.new(file, text, {start: start});
    ;
  }).prototype = parser.Parser.prototype;
  dart.addTypeTests(parser.Parser);
  dart.setMethodSignature(parser.Parser, () => ({
    __proto__: dart.getMethods(parser.Parser.__proto__),
    parse: dart.fnType(visitor.StyleSheet, [])
  }));
  dart.setLibraryUri(parser.Parser, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Parser, () => ({
    __proto__: dart.getFields(parser.Parser.__proto__),
    [_parser]: dart.finalFieldType(parser._Parser)
  }));
  const _previousToken = dart.privateName(parser, "_previousToken");
  const _peekToken = dart.privateName(parser, "_peekToken");
  const _maybeEat = dart.privateName(parser, "_maybeEat");
  const _peekKind = dart.privateName(parser, "_peekKind");
  const _makeSpan = dart.privateName(parser, "_makeSpan");
  const _error = dart.privateName(parser, "_error");
  const _peek = dart.privateName(parser, "_peek");
  const _next = dart.privateName(parser, "_next");
  const _peekIdentifier = dart.privateName(parser, "_peekIdentifier");
  const _mark = dart.privateName(parser, "_mark");
  const _restore = dart.privateName(parser, "_restore");
  const _errorExpected = dart.privateName(parser, "_errorExpected");
  const _eat = dart.privateName(parser, "_eat");
  const _warning = dart.privateName(parser, "_warning");
  const _nestedSelector = dart.privateName(parser, "_nestedSelector");
  const _anyWhiteSpaceBeforePeekToken = dart.privateName(parser, "_anyWhiteSpaceBeforePeekToken");
  const _styleForDart = dart.privateName(parser, "_styleForDart");
  const _mergeFontStyles = dart.privateName(parser, "_mergeFontStyles");
  const _parseHex = dart.privateName(parser, "_parseHex");
  const _inString$ = dart.privateName(parser, "_inString");
  let C4;
  let C5;
  parser._Parser = class _Parser extends core.Object {
    parse() {
      let productions = JSArrayOfTreeNode().of([]);
      let start = this[_peekToken].span;
      while (!dart.test(this[_maybeEat](1)) && !dart.test(this[_peekKind](7))) {
        let rule = this.processRule();
        if (rule != null) {
          productions[$add](rule);
        } else {
          break;
        }
      }
      this.checkEndOfFile();
      return new visitor.StyleSheet.new(productions, this[_makeSpan](start));
    }
    parseSelector() {
      let productions = JSArrayOfTreeNode().of([]);
      let start = this[_peekToken].span;
      while (!dart.test(this[_maybeEat](1)) && !dart.test(this[_peekKind](7))) {
        let selector = this.processSelector();
        if (selector != null) {
          productions[$add](selector);
        } else {
          break;
        }
      }
      this.checkEndOfFile();
      return new visitor.StyleSheet.selector(productions, this[_makeSpan](start));
    }
    checkEndOfFile() {
      if (!(dart.test(this[_peekKind](1)) || dart.test(this[_peekKind](67)))) {
        this[_error]("premature end of file unknown CSS", this[_peekToken].span);
      }
    }
    isPrematureEndOfFile() {
      if (dart.test(this[_maybeEat](1))) {
        this[_error]("unexpected end of file", this[_peekToken].span);
        return true;
      } else {
        return false;
      }
    }
    [_peek]() {
      return this[_peekToken].kind;
    }
    [_next](opts) {
      let unicodeRange = opts && 'unicodeRange' in opts ? opts.unicodeRange : false;
      this[_previousToken] = this[_peekToken];
      this[_peekToken] = this.tokenizer.next({unicodeRange: unicodeRange});
      return this[_previousToken];
    }
    [_peekKind](kind) {
      return this[_peekToken].kind == kind;
    }
    [_peekIdentifier]() {
      return parser.TokenKind.isIdentifier(this[_peekToken].kind);
    }
    get [_mark]() {
      return new parser.ParserState.new(this[_peekToken], this[_previousToken], this.tokenizer);
    }
    [_restore](markedData) {
      this.tokenizer.restore(markedData);
      this[_peekToken] = markedData.peekToken;
      this[_previousToken] = markedData.previousToken;
    }
    [_maybeEat](kind, opts) {
      let unicodeRange = opts && 'unicodeRange' in opts ? opts.unicodeRange : false;
      if (this[_peekToken].kind == kind) {
        this[_previousToken] = this[_peekToken];
        this[_peekToken] = this.tokenizer.next({unicodeRange: unicodeRange});
        return true;
      } else {
        return false;
      }
    }
    [_eat](kind, opts) {
      let unicodeRange = opts && 'unicodeRange' in opts ? opts.unicodeRange : false;
      if (!dart.test(this[_maybeEat](kind, {unicodeRange: unicodeRange}))) {
        this[_errorExpected](parser.TokenKind.kindToString(kind));
      }
    }
    [_errorExpected](expected) {
      let tok = this[_next]();
      let message = null;
      try {
        message = "expected " + dart.str(expected) + ", but found " + dart.str(tok);
      } catch (e$) {
        let e = dart.getThrown(e$);
        message = "parsing error expected " + dart.str(expected);
      }
      this[_error](message, tok.span);
    }
    [_error](message, location) {
      if (location == null) {
        location = this[_peekToken].span;
      }
      messages.messages.error(message, location);
    }
    [_warning](message, location) {
      if (location == null) {
        location = this[_peekToken].span;
      }
      messages.messages.warning(message, location);
    }
    [_makeSpan](start) {
      if (this[_previousToken] == null || dart.notNull(this[_previousToken].span.compareTo(start)) < 0) {
        return start;
      }
      return start.expand(this[_previousToken].span);
    }
    processMediaQueryList() {
      let mediaQueries = JSArrayOfMediaQuery().of([]);
      do {
        let mediaQuery = this.processMediaQuery();
        if (mediaQuery != null) {
          mediaQueries[$add](mediaQuery);
        } else {
          break;
        }
      } while (dart.test(this[_maybeEat](19)));
      return mediaQueries;
    }
    processMediaQuery() {
      let start = this[_peekToken].span;
      let op = this[_peekToken].text;
      let opLen = op.length;
      let unaryOp = parser.TokenKind.matchMediaOperator(op, 0, opLen);
      if (unaryOp !== -1) {
        if (dart.test(parser.isChecked)) {
          if (unaryOp !== 666 || unaryOp !== 665) {
            this[_warning]("Only the unary operators NOT and ONLY allowed", this[_makeSpan](start));
          }
        }
        this[_next]();
        start = this[_peekToken].span;
      }
      let type = null;
      if (dart.test(this[_peekIdentifier]())) type = this.identifier();
      let exprs = JSArrayOfMediaExpression().of([]);
      while (true) {
        let andOp = dart.test(exprs[$isNotEmpty]) || type != null;
        if (andOp) {
          op = this[_peekToken].text;
          opLen = op.length;
          if (parser.TokenKind.matchMediaOperator(op, 0, opLen) !== 667) {
            break;
          }
          this[_next]();
        }
        let expr = this.processMediaExpression(andOp);
        if (expr == null) break;
        exprs[$add](expr);
      }
      if (unaryOp !== -1 || type != null || dart.test(exprs[$isNotEmpty])) {
        return new visitor.MediaQuery.new(unaryOp, type, exprs, this[_makeSpan](start));
      }
      return null;
    }
    processMediaExpression(andOperator) {
      if (andOperator === void 0) andOperator = false;
      let start = this[_peekToken].span;
      if (dart.test(this[_maybeEat](2))) {
        if (dart.test(this[_peekIdentifier]())) {
          let feature = this.identifier();
          let exprs = dart.test(this[_maybeEat](17)) ? this.processExpr() : new visitor.Expressions.new(this[_makeSpan](this[_peekToken].span));
          if (dart.test(this[_maybeEat](3))) {
            return new visitor.MediaExpression.new(andOperator, feature, exprs, this[_makeSpan](start));
          } else if (dart.test(parser.isChecked)) {
            this[_warning]("Missing parenthesis around media expression", this[_makeSpan](start));
            return null;
          }
        } else if (dart.test(parser.isChecked)) {
          this[_warning]("Missing media feature in media expression", this[_makeSpan](start));
        }
      }
      return null;
    }
    processDirective() {
      let start = this[_peekToken].span;
      let tokId = this.processVariableOrDirective();
      if (visitor.VarDefinitionDirective.is(tokId)) return tokId;
      switch (tokId) {
        case 641:
        {
          this[_next]();
          let importStr = null;
          if (dart.test(this[_peekIdentifier]())) {
            let func = this.processFunction(this.identifier());
            if (visitor.UriTerm.is(func)) {
              importStr = func.text;
            }
          } else {
            importStr = this.processQuotedString(false);
          }
          let medias = this.processMediaQueryList();
          if (importStr == null) {
            this[_error]("missing import string", this[_peekToken].span);
          }
          return new visitor.ImportDirective.new(importStr[$trim](), medias, this[_makeSpan](start));
        }
        case 642:
        {
          this[_next]();
          let media = this.processMediaQueryList();
          let rules = JSArrayOfTreeNode().of([]);
          if (dart.test(this[_maybeEat](6))) {
            while (!dart.test(this[_maybeEat](1))) {
              let rule = this.processRule();
              if (rule == null) break;
              rules[$add](rule);
            }
            if (!dart.test(this[_maybeEat](7))) {
              this[_error]("expected } after ruleset for @media", this[_peekToken].span);
            }
          } else {
            this[_error]("expected { after media before ruleset", this[_peekToken].span);
          }
          return new visitor.MediaDirective.new(media, rules, this[_makeSpan](start));
        }
        case 653:
        {
          this[_next]();
          let rules = JSArrayOfTreeNode().of([]);
          if (dart.test(this[_maybeEat](6))) {
            while (!dart.test(this[_maybeEat](1))) {
              let rule = this.processRule();
              if (rule == null) break;
              rules[$add](rule);
            }
            if (!dart.test(this[_maybeEat](7))) {
              this[_error]("expected } after ruleset for @host", this[_peekToken].span);
            }
          } else {
            this[_error]("expected { after host before ruleset", this[_peekToken].span);
          }
          return new visitor.HostDirective.new(rules, this[_makeSpan](start));
        }
        case 643:
        {
          this[_next]();
          let name = null;
          if (dart.test(this[_peekIdentifier]())) {
            name = this.identifier();
          }
          let pseudoPage = null;
          if (dart.test(this[_maybeEat](17))) {
            if (dart.test(this[_peekIdentifier]())) {
              pseudoPage = this.identifier();
              if (dart.test(parser.isChecked) && !(pseudoPage.name === "left" || pseudoPage.name === "right" || pseudoPage.name === "first")) {
                this[_warning]("Pseudo page must be left, top or first", pseudoPage.span);
                return null;
              }
            }
          }
          let pseudoName = visitor.Identifier.is(pseudoPage) ? pseudoPage.name : "";
          let ident = visitor.Identifier.is(name) ? name.name : "";
          return new visitor.PageDirective.new(ident, pseudoName, this.processMarginsDeclarations(), this[_makeSpan](start));
        }
        case 644:
        {
          this[_next]();
          let charEncoding = this.processQuotedString(false);
          if (dart.test(parser.isChecked) && charEncoding == null) {
            this[_warning]("missing character encoding string", this[_makeSpan](start));
          }
          return new visitor.CharsetDirective.new(charEncoding, this[_makeSpan](start));
        }
        case 646:
        case 647:
        case 648:
        case 650:
        case 649:
        {
          if (dart.equals(tokId, 649) && dart.test(parser.isChecked)) {
            this[_warning]("@-ms-keyframes should be @keyframes", this[_makeSpan](start));
          }
          this[_next]();
          let name = null;
          if (dart.test(this[_peekIdentifier]())) {
            name = this.identifier();
          }
          this[_eat](6);
          let keyframe = new visitor.KeyFrameDirective.new(core.int._check(tokId), name, this[_makeSpan](start));
          do {
            let selectors = new visitor.Expressions.new(this[_makeSpan](start));
            do {
              let term = this.processTerm();
              selectors.add(visitor.Expression._check(term));
            } while (dart.test(this[_maybeEat](19)));
            keyframe.add(new visitor.KeyFrameBlock.new(selectors, this.processDeclarations(), this[_makeSpan](start)));
          } while (!dart.test(this[_maybeEat](7)) && !dart.test(this.isPrematureEndOfFile()));
          return keyframe;
        }
        case 651:
        {
          this[_next]();
          return new visitor.FontFaceDirective.new(this.processDeclarations(), this[_makeSpan](start));
        }
        case 645:
        {
          this[_next]();
          let name = null;
          if (dart.test(this[_peekIdentifier]())) {
            name = this.identifier();
          }
          this[_eat](6);
          let productions = JSArrayOfTreeNode().of([]);
          start = this[_peekToken].span;
          while (!dart.test(this[_maybeEat](1))) {
            let rule = this.processRule();
            if (rule == null) {
              break;
            }
            productions[$add](rule);
          }
          this[_eat](7);
          return new visitor.StyletDirective.new(core.String._check(name), productions, this[_makeSpan](start));
        }
        case 652:
        {
          this[_next]();
          let prefix = null;
          if (dart.test(this[_peekIdentifier]())) {
            prefix = this.identifier();
          }
          let namespaceUri = null;
          if (dart.test(this[_peekIdentifier]())) {
            let func = this.processFunction(this.identifier());
            if (visitor.UriTerm.is(func)) {
              namespaceUri = func.text;
            }
          } else {
            if (prefix != null && prefix.name === "url") {
              let func = this.processFunction(prefix);
              if (visitor.UriTerm.is(func)) {
                namespaceUri = func.text;
                prefix = null;
              }
            } else {
              namespaceUri = this.processQuotedString(false);
            }
          }
          return new visitor.NamespaceDirective.new(prefix != null ? prefix.name : "", namespaceUri, this[_makeSpan](start));
        }
        case 654:
        {
          return this.processMixin();
        }
        case 655:
        {
          return this.processInclude(this[_makeSpan](start));
        }
        case 656:
        {
          this[_warning]("@content not implemented.", this[_makeSpan](start));
          return null;
        }
        case 658:
        {
          return this.processDocumentDirective();
        }
        case 659:
        {
          return this.processSupportsDirective();
        }
        case 660:
        case 661:
        {
          return this.processViewportDirective();
        }
      }
      return null;
    }
    processMixin() {
      this[_next]();
      let name = this.identifier();
      let params = JSArrayOfTreeNode().of([]);
      if (dart.test(this[_maybeEat](2))) {
        let mustHaveParam = false;
        let keepGoing = true;
        while (keepGoing) {
          let varDef = this.processVariableOrDirective({mixinParameter: true});
          if (visitor.VarDefinitionDirective.is(varDef) || visitor.VarDefinition.is(varDef)) {
            params[$add](visitor.TreeNode._check(varDef));
          } else if (mustHaveParam) {
            this[_warning]("Expecting parameter", this[_makeSpan](this[_peekToken].span));
            keepGoing = false;
          }
          if (dart.test(this[_maybeEat](19))) {
            mustHaveParam = true;
            continue;
          }
          keepGoing = !dart.test(this[_maybeEat](3));
        }
      }
      this[_eat](6);
      let productions = JSArrayOfTreeNode().of([]);
      let mixinDirective = null;
      let start = this[_peekToken].span;
      while (!dart.test(this[_maybeEat](1))) {
        let directive = this.processDirective();
        if (directive != null) {
          productions[$add](directive);
          continue;
        }
        let declGroup = this.processDeclarations({checkBrace: false});
        if (dart.test(declGroup.declarations[$any](dart.fn(decl => visitor.Declaration.is(decl) && !visitor.IncludeMixinAtDeclaration.is(decl), TreeNodeTobool())))) {
          let newDecls = JSArrayOfDeclaration().of([]);
          productions[$forEach](dart.fn(include => {
            if (visitor.IncludeDirective.is(include)) {
              newDecls[$add](new visitor.IncludeMixinAtDeclaration.new(include, include.span));
            } else {
              this[_warning]("Error mixing of top-level vs declarations mixins", this[_makeSpan](file$.FileSpan._check(include.span)));
            }
          }, TreeNodeToNull()));
          declGroup.declarations[$insertAll](0, newDecls);
          productions = JSArrayOfTreeNode().of([]);
        } else {
          for (let decl of declGroup.declarations) {
            productions[$add](visitor.IncludeMixinAtDeclaration.is(decl) ? decl.include : decl);
          }
          ;
          declGroup.declarations[$clear]();
        }
        if (dart.test(declGroup.declarations[$isNotEmpty])) {
          if (dart.test(productions[$isEmpty])) {
            mixinDirective = new visitor.MixinDeclarationDirective.new(name.name, params, false, declGroup, this[_makeSpan](start));
            break;
          } else {
            for (let decl of declGroup.declarations) {
              productions[$add](visitor.IncludeMixinAtDeclaration.is(decl) ? decl.include : decl);
            }
          }
        } else {
          mixinDirective = new visitor.MixinRulesetDirective.new(name.name, params, false, productions, this[_makeSpan](start));
          break;
        }
      }
      if (dart.test(productions[$isNotEmpty])) {
        mixinDirective = new visitor.MixinRulesetDirective.new(name.name, params, false, productions, this[_makeSpan](start));
      }
      this[_eat](7);
      return mixinDirective;
    }
    processVariableOrDirective(opts) {
      let mixinParameter = opts && 'mixinParameter' in opts ? opts.mixinParameter : false;
      let start = this[_peekToken].span;
      let tokId = this[_peek]();
      if (tokId === 10) {
        this[_next]();
        tokId = this[_peek]();
        if (dart.test(this[_peekIdentifier]())) {
          let directive = this[_peekToken].text;
          let directiveLen = directive.length;
          tokId = parser.TokenKind.matchDirectives(directive, 0, directiveLen);
          if (tokId === -1) {
            tokId = parser.TokenKind.matchMarginDirectives(directive, 0, directiveLen);
          }
        }
        if (tokId === -1) {
          if (dart.test(messages.messages.options.lessSupport)) {
            let name = null;
            if (dart.test(this[_peekIdentifier]())) {
              name = this.identifier();
            }
            let exprs = null;
            if (dart.test(mixinParameter) && dart.test(this[_maybeEat](17))) {
              exprs = this.processExpr();
            } else if (!dart.test(mixinParameter)) {
              this[_eat](17);
              exprs = this.processExpr();
            }
            let span = this[_makeSpan](start);
            return new visitor.VarDefinitionDirective.new(new visitor.VarDefinition.new(name, exprs, span), span);
          } else if (dart.test(parser.isChecked)) {
            this[_error]("unexpected directive @" + dart.str(this[_peekToken]), this[_peekToken].span);
          }
        }
      } else if (dart.test(mixinParameter) && this[_peekToken].kind === 400) {
        this[_next]();
        let definedName = null;
        if (dart.test(this[_peekIdentifier]())) definedName = this.identifier();
        let exprs = null;
        if (dart.test(this[_maybeEat](17))) {
          exprs = this.processExpr();
        }
        return new visitor.VarDefinition.new(visitor.Identifier._check(definedName), exprs, this[_makeSpan](start));
      }
      return tokId;
    }
    processInclude(span, opts) {
      let eatSemiColon = opts && 'eatSemiColon' in opts ? opts.eatSemiColon : true;
      this[_next]();
      let name = null;
      if (dart.test(this[_peekIdentifier]())) {
        name = this.identifier();
      }
      let params = JSArrayOfListOfExpression().of([]);
      if (dart.test(this[_maybeEat](2))) {
        let terms = JSArrayOfExpression().of([]);
        let expr = null;
        let keepGoing = true;
        while (keepGoing && (expr = this.processTerm()) != null) {
          terms[$add](visitor.Expression._check(core.List.is(expr) ? expr[$_get](0) : expr));
          keepGoing = !dart.test(this[_peekKind](3));
          if (keepGoing) {
            if (dart.test(this[_maybeEat](19))) {
              params[$add](terms);
              terms = JSArrayOfExpression().of([]);
            }
          }
        }
        params[$add](terms);
        this[_maybeEat](3);
      }
      if (dart.test(eatSemiColon)) {
        this[_eat](9);
      }
      return new visitor.IncludeDirective.new(core.String._check(dart.dload(name, 'name')), params, span);
    }
    processDocumentDirective() {
      let t1;
      let start = this[_peekToken].span;
      this[_next]();
      let functions = JSArrayOfLiteralTerm().of([]);
      do {
        let $function = null;
        let ident = this.identifier();
        this[_eat](2);
        if (ident.name === "url-prefix" || ident.name === "domain") {
          let argumentStart = this[_peekToken].span;
          let value = this.processQuotedString(true);
          let argument = value[$isNotEmpty] ? "\"" + dart.str(value) + "\"" : "";
          let argumentSpan = this[_makeSpan](argumentStart);
          this[_eat](3);
          let $arguments = (t1 = new visitor.Expressions.new(this[_makeSpan](file$.FileSpan._check(argumentSpan))), t1.add(new visitor.LiteralTerm.new(argument, argument, argumentSpan)), t1);
          $function = new visitor.FunctionTerm.new(ident.name, ident.name, $arguments, this[_makeSpan](file$.FileSpan._check(ident.span)));
        } else {
          $function = this.processFunction(ident);
        }
        functions[$add](visitor.LiteralTerm._check($function));
      } while (dart.test(this[_maybeEat](19)));
      this[_eat](6);
      let groupRuleBody = this.processGroupRuleBody();
      this[_eat](7);
      return new visitor.DocumentDirective.new(functions, groupRuleBody, this[_makeSpan](start));
    }
    processSupportsDirective() {
      let start = this[_peekToken].span;
      this[_next]();
      let condition = this.processSupportsCondition();
      this[_eat](6);
      let groupRuleBody = this.processGroupRuleBody();
      this[_eat](7);
      return new visitor.SupportsDirective.new(condition, groupRuleBody, this[_makeSpan](start));
    }
    processSupportsCondition() {
      if (dart.test(this[_peekKind](511))) {
        return this.processSupportsNegation();
      }
      let start = this[_peekToken].span;
      let conditions = JSArrayOfSupportsConditionInParens().of([]);
      let clauseType = parser.ClauseType.none;
      while (true) {
        conditions[$add](this.processSupportsConditionInParens());
        let type = null;
        let text = this[_peekToken].text[$toLowerCase]();
        if (text === "and") {
          type = parser.ClauseType.conjunction;
        } else if (text === "or") {
          type = parser.ClauseType.disjunction;
        } else {
          break;
        }
        if (dart.equals(clauseType, parser.ClauseType.none)) {
          clauseType = type;
        } else if (!dart.equals(clauseType, type)) {
          this[_error]("Operators can't be mixed without a layer of parentheses", this[_peekToken].span);
          break;
        }
        this[_next]();
      }
      if (dart.equals(clauseType, parser.ClauseType.conjunction)) {
        return new visitor.SupportsConjunction.new(conditions, this[_makeSpan](start));
      } else if (dart.equals(clauseType, parser.ClauseType.disjunction)) {
        return new visitor.SupportsDisjunction.new(conditions, this[_makeSpan](start));
      } else {
        return conditions[$first];
      }
    }
    processSupportsNegation() {
      let start = this[_peekToken].span;
      let text = this[_peekToken].text[$toLowerCase]();
      if (text !== "not") return null;
      this[_next]();
      let condition = this.processSupportsConditionInParens();
      return new visitor.SupportsNegation.new(condition, this[_makeSpan](start));
    }
    processSupportsConditionInParens() {
      let start = this[_peekToken].span;
      this[_eat](2);
      let condition = this.processSupportsCondition();
      if (condition != null) {
        this[_eat](3);
        return new visitor.SupportsConditionInParens.nested(condition, this[_makeSpan](start));
      }
      let declaration = this.processDeclaration(JSArrayOfDartStyleExpression().of([]));
      this[_eat](3);
      return new visitor.SupportsConditionInParens.new(declaration, this[_makeSpan](start));
    }
    processViewportDirective() {
      let start = this[_peekToken].span;
      let name = this[_next]().text;
      let declarations = this.processDeclarations();
      return new visitor.ViewportDirective.new(name, declarations, this[_makeSpan](start));
    }
    processRule(selectorGroup) {
      if (selectorGroup === void 0) selectorGroup = null;
      if (selectorGroup == null) {
        let directive = this.processDirective();
        if (directive != null) {
          this[_maybeEat](9);
          return directive;
        }
        selectorGroup = this.processSelectorGroup();
      }
      if (selectorGroup != null) {
        return new visitor.RuleSet.new(selectorGroup, this.processDeclarations(), selectorGroup.span);
      }
      return null;
    }
    processGroupRuleBody() {
      let nodes = JSArrayOfTreeNode().of([]);
      while (!(dart.test(this[_peekKind](7)) || dart.test(this[_peekKind](1)))) {
        let rule = this.processRule();
        if (rule != null) {
          nodes[$add](rule);
          continue;
        }
        break;
      }
      return nodes;
    }
    [_nestedSelector]() {
      let oldMessages = messages.messages;
      parser._createMessages();
      let markedData = this[_mark];
      let selGroup = this.processSelectorGroup();
      let nestedSelector = selGroup != null && dart.test(this[_peekKind](6)) && dart.test(messages.messages.messages[$isEmpty]);
      if (!nestedSelector) {
        this[_restore](markedData);
        messages.messages = oldMessages;
        return null;
      } else {
        oldMessages.mergeMessages(messages.messages);
        messages.messages = oldMessages;
        return selGroup;
      }
    }
    processDeclarations(opts) {
      let checkBrace = opts && 'checkBrace' in opts ? opts.checkBrace : true;
      let start = this[_peekToken].span;
      if (dart.test(checkBrace)) this[_eat](6);
      let decls = JSArrayOfTreeNode().of([]);
      let dartStyles = JSArrayOfDartStyleExpression().of([]);
      do {
        let selectorGroup = this[_nestedSelector]();
        while (selectorGroup != null) {
          let ruleset = this.processRule(selectorGroup);
          decls[$add](ruleset);
          selectorGroup = this[_nestedSelector]();
        }
        let decl = this.processDeclaration(dartStyles);
        if (decl != null) {
          if (dart.test(decl.hasDartStyle)) {
            let newDartStyle = decl.dartStyle;
            let replaced = false;
            for (let i = 0; i < dart.notNull(dartStyles[$length]); i = i + 1) {
              let dartStyle = dartStyles[$_get](i);
              if (dart.test(dartStyle.isSame(newDartStyle))) {
                dartStyles[$_set](i, newDartStyle);
                replaced = true;
                break;
              }
            }
            if (!replaced) {
              dartStyles[$add](newDartStyle);
            }
          }
          decls[$add](decl);
        }
      } while (dart.test(this[_maybeEat](9)));
      if (dart.test(checkBrace)) this[_eat](7);
      for (let decl of decls) {
        if (visitor.Declaration.is(decl)) {
          if (dart.test(decl.hasDartStyle) && !dart.test(dartStyles[$contains](decl.dartStyle))) {
            decl.dartStyle = null;
          }
        }
      }
      return new visitor.DeclarationGroup.new(decls, this[_makeSpan](start));
    }
    processMarginsDeclarations() {
      let groups = JSArrayOfDeclarationGroup().of([]);
      let start = this[_peekToken].span;
      this[_eat](6);
      let decls = JSArrayOfDeclaration().of([]);
      let dartStyles = JSArrayOfDartStyleExpression().of([]);
      do {
        switch (this[_peek]()) {
          case 670:
          case 671:
          case 672:
          case 673:
          case 674:
          case 675:
          case 676:
          case 677:
          case 678:
          case 679:
          case 680:
          case 681:
          case 682:
          case 683:
          case 684:
          case 685:
          {
            let marginSym = this[_peek]();
            this[_next]();
            let declGroup = this.processDeclarations();
            if (declGroup != null) {
              groups[$add](new visitor.MarginGroup.new(marginSym, declGroup.declarations, this[_makeSpan](start)));
            }
            break;
          }
          default:
          {
            let decl = this.processDeclaration(dartStyles);
            if (decl != null) {
              if (dart.test(decl.hasDartStyle)) {
                let newDartStyle = decl.dartStyle;
                let replaced = false;
                for (let i = 0; i < dart.notNull(dartStyles[$length]); i = i + 1) {
                  let dartStyle = dartStyles[$_get](i);
                  if (dart.test(dartStyle.isSame(newDartStyle))) {
                    dartStyles[$_set](i, newDartStyle);
                    replaced = true;
                    break;
                  }
                }
                if (!replaced) {
                  dartStyles[$add](newDartStyle);
                }
              }
              decls[$add](decl);
            }
            this[_maybeEat](9);
            break;
          }
        }
      } while (!dart.test(this[_maybeEat](7)) && !dart.test(this.isPrematureEndOfFile()));
      for (let decl of decls) {
        if (dart.test(decl.hasDartStyle) && !dart.test(dartStyles[$contains](decl.dartStyle))) {
          decl.dartStyle = null;
        }
      }
      if (dart.test(decls[$isNotEmpty])) {
        groups[$add](new visitor.DeclarationGroup.new(decls, this[_makeSpan](start)));
      }
      return groups;
    }
    processSelectorGroup() {
      let selectors = JSArrayOfSelector().of([]);
      let start = this[_peekToken].span;
      do {
        let selector = this.processSelector();
        if (selector != null) {
          selectors[$add](selector);
        }
      } while (dart.test(this[_maybeEat](19)));
      if (dart.test(selectors[$isNotEmpty])) {
        return new visitor.SelectorGroup.new(selectors, this[_makeSpan](start));
      }
      return null;
    }
    processSelector() {
      let simpleSequences = JSArrayOfSimpleSelectorSequence().of([]);
      let start = this[_peekToken].span;
      while (true) {
        let selectorItem = this.simpleSelectorSequence(simpleSequences[$isEmpty]);
        if (selectorItem != null) {
          simpleSequences[$add](selectorItem);
        } else {
          break;
        }
      }
      if (dart.test(simpleSequences[$isEmpty])) return null;
      return new visitor.Selector.new(simpleSequences, this[_makeSpan](start));
    }
    processCompoundSelector() {
      let selector = this.processSelector();
      if (selector != null) {
        for (let sequence of selector.simpleSelectorSequences) {
          if (!dart.test(sequence.isCombinatorNone)) {
            this[_error]("compound selector can not contain combinator", sequence.span);
          }
        }
      }
      return selector;
    }
    simpleSelectorSequence(forceCombinatorNone) {
      let start = this[_peekToken].span;
      let combinatorType = 513;
      let thisOperator = false;
      switch (this[_peek]()) {
        case 12:
        {
          this[_eat](12);
          combinatorType = 515;
          break;
        }
        case 13:
        {
          this[_eat](13);
          combinatorType = 516;
          break;
        }
        case 14:
        {
          this[_eat](14);
          combinatorType = 517;
          break;
        }
        case 36:
        {
          this[_eat](36);
          thisOperator = true;
          break;
        }
      }
      if (combinatorType === 513 && !dart.test(forceCombinatorNone)) {
        if (this[_previousToken] != null && this[_previousToken].end != this[_peekToken].start) {
          combinatorType = 514;
        }
      }
      let span = this[_makeSpan](start);
      let simpleSel = thisOperator ? new visitor.ElementSelector.new(new visitor.ThisOperator.new(span), span) : this.simpleSelector();
      if (simpleSel == null && (combinatorType === 515 || combinatorType === 516 || combinatorType === 517)) {
        simpleSel = new visitor.ElementSelector.new(new visitor.Identifier.new("", span), span);
      }
      if (simpleSel != null) {
        return new visitor.SimpleSelectorSequence.new(simpleSel, span, combinatorType);
      }
      return null;
    }
    simpleSelector() {
      let first = null;
      let start = this[_peekToken].span;
      switch (this[_peek]()) {
        case 15:
        {
          let tok = this[_next]();
          first = new visitor.Wildcard.new(this[_makeSpan](tok.span));
          break;
        }
        case 511:
        {
          first = this.identifier();
          break;
        }
        default:
        {
          if (dart.test(parser.TokenKind.isKindIdentifier(this[_peek]()))) {
            first = this.identifier();
          } else if (dart.test(this[_peekKind](9))) {
            return null;
          }
          break;
        }
      }
      if (dart.test(this[_maybeEat](16))) {
        let element = null;
        switch (this[_peek]()) {
          case 15:
          {
            let tok = this[_next]();
            element = new visitor.Wildcard.new(this[_makeSpan](tok.span));
            break;
          }
          case 511:
          {
            element = this.identifier();
            break;
          }
          default:
          {
            this[_error]("expected element name or universal(*), but found " + dart.str(this[_peekToken]), this[_peekToken].span);
            break;
          }
        }
        return new visitor.NamespaceSelector.new(first, new visitor.ElementSelector.new(element, element.span), this[_makeSpan](start));
      } else if (first != null) {
        return new visitor.ElementSelector.new(first, this[_makeSpan](start));
      } else {
        return this.simpleSelectorTail();
      }
    }
    [_anyWhiteSpaceBeforePeekToken](kind) {
      if (this[_previousToken] != null && this[_peekToken] != null && this[_previousToken].kind == kind) {
        return this[_previousToken].end != this[_peekToken].start;
      }
      return false;
    }
    simpleSelectorTail() {
      let start = this[_peekToken].span;
      switch (this[_peek]()) {
        case 11:
        {
          this[_eat](11);
          let hasWhiteSpace = false;
          if (dart.test(this[_anyWhiteSpaceBeforePeekToken](11))) {
            this[_warning]("Not a valid ID selector expected #id", this[_makeSpan](start));
            hasWhiteSpace = true;
          }
          if (dart.test(this[_peekIdentifier]())) {
            let id = this.identifier();
            if (hasWhiteSpace) {
              id.name = " " + dart.str(id.name);
            }
            return new visitor.IdSelector.new(id, this[_makeSpan](start));
          }
          return null;
        }
        case 8:
        {
          this[_eat](8);
          let hasWhiteSpace = false;
          if (dart.test(this[_anyWhiteSpaceBeforePeekToken](8))) {
            this[_warning]("Not a valid class selector expected .className", this[_makeSpan](start));
            hasWhiteSpace = true;
          }
          let id = this.identifier();
          if (hasWhiteSpace) {
            id.name = " " + dart.str(id.name);
          }
          return new visitor.ClassSelector.new(id, this[_makeSpan](start));
        }
        case 17:
        {
          return this.processPseudoSelector(start);
        }
        case 4:
        {
          return this.processAttribute();
        }
        case 62:
        {
          this[_error]("name must start with a alpha character, but found a number", this[_peekToken].span);
          this[_next]();
          break;
        }
      }
      return null;
    }
    processPseudoSelector(start) {
      this[_eat](17);
      let pseudoElement = this[_maybeEat](17);
      let pseudoName = null;
      if (dart.test(this[_peekIdentifier]())) {
        pseudoName = this.identifier();
      } else {
        return null;
      }
      let name = pseudoName.name[$toLowerCase]();
      if (this[_peekToken].kind === 2) {
        if (!dart.test(pseudoElement) && name === "not") {
          this[_eat](2);
          let negArg = this.simpleSelector();
          this[_eat](3);
          return new visitor.NegationSelector.new(negArg, this[_makeSpan](start));
        } else if (!dart.test(pseudoElement) && (name === "host" || name === "host-context")) {
          this[_eat](2);
          let selector = this.processCompoundSelector();
          if (selector == null) {
            this[_errorExpected]("a selector argument");
            return null;
          }
          this[_eat](3);
          let span = this[_makeSpan](start);
          return new visitor.PseudoClassFunctionSelector.new(pseudoName, selector, span);
        } else {
          this.tokenizer.inSelectorExpression = true;
          this[_eat](2);
          let span = this[_makeSpan](start);
          let expr = this.processSelectorExpression();
          this.tokenizer.inSelectorExpression = false;
          if (visitor.SelectorExpression.is(expr)) {
            this[_eat](3);
            return dart.test(pseudoElement) ? new visitor.PseudoElementFunctionSelector.new(pseudoName, expr, span) : new visitor.PseudoClassFunctionSelector.new(pseudoName, expr, span);
          } else {
            this[_errorExpected]("CSS expression");
            return null;
          }
        }
      }
      return dart.test(pseudoElement) || dart.test(parser._legacyPseudoElements.contains(name)) ? new visitor.PseudoElementSelector.new(pseudoName, this[_makeSpan](start), {isLegacy: !dart.test(pseudoElement)}) : new visitor.PseudoClassSelector.new(pseudoName, this[_makeSpan](start));
    }
    processSelectorExpression() {
      let start = this[_peekToken].span;
      let expressions = JSArrayOfExpression().of([]);
      let termToken = null;
      let value = null;
      let keepParsing = true;
      while (keepParsing) {
        switch (this[_peek]()) {
          case 12:
          {
            start = this[_peekToken].span;
            termToken = this[_next]();
            expressions[$add](new visitor.OperatorPlus.new(this[_makeSpan](start)));
            break;
          }
          case 34:
          {
            start = this[_peekToken].span;
            termToken = this[_next]();
            expressions[$add](new visitor.OperatorMinus.new(this[_makeSpan](start)));
            break;
          }
          case 60:
          {
            termToken = this[_next]();
            value = core.int.parse(termToken.text);
            break;
          }
          case 62:
          {
            termToken = this[_next]();
            value = core.double.parse(termToken.text);
            break;
          }
          case 25:
          {
            value = this.processQuotedString(false);
            value = "'" + dart.str(parser._escapeString(core.String._check(value), {single: true})) + "'";
            return new visitor.LiteralTerm.new(value, core.String._check(value), this[_makeSpan](start));
          }
          case 26:
          {
            value = this.processQuotedString(false);
            value = "\"" + dart.str(parser._escapeString(core.String._check(value))) + "\"";
            return new visitor.LiteralTerm.new(value, core.String._check(value), this[_makeSpan](start));
          }
          case 511:
          {
            value = this.identifier();
            break;
          }
          default:
          {
            keepParsing = false;
          }
        }
        if (keepParsing && value != null) {
          let unitTerm = this.processDimension(termToken, value, this[_makeSpan](start));
          expressions[$add](unitTerm);
          value = null;
        }
      }
      return new visitor.SelectorExpression.new(expressions, this[_makeSpan](start));
    }
    processAttribute() {
      let start = this[_peekToken].span;
      if (dart.test(this[_maybeEat](4))) {
        let attrName = this.identifier();
        let op = null;
        switch (this[_peek]()) {
          case 28:
          case 530:
          case 531:
          case 532:
          case 533:
          case 534:
          {
            op = this[_peek]();
            this[_next]();
            break;
          }
          default:
          {
            op = 535;
          }
        }
        let value = null;
        if (op !== 535) {
          if (dart.test(this[_peekIdentifier]())) {
            value = this.identifier();
          } else {
            value = this.processQuotedString(false);
          }
          if (value == null) {
            this[_error]("expected attribute value string or ident", this[_peekToken].span);
          }
        }
        this[_eat](5);
        return new visitor.AttributeSelector.new(attrName, op, value, this[_makeSpan](start));
      }
      return null;
    }
    processDeclaration(dartStyles) {
      let decl = null;
      let start = this[_peekToken].span;
      let ie7 = this[_peekKind](15);
      if (dart.test(ie7)) {
        this[_next]();
      }
      if (dart.test(parser.TokenKind.isIdentifier(this[_peekToken].kind))) {
        let propertyIdent = this.identifier();
        let ieFilterProperty = propertyIdent.name[$toLowerCase]() === "filter";
        this[_eat](17);
        let exprs = this.processExpr(ieFilterProperty);
        let dartComposite = this[_styleForDart](propertyIdent, exprs, dartStyles);
        let importantPriority = this[_maybeEat](505);
        decl = new visitor.Declaration.new(propertyIdent, exprs, dartComposite, this[_makeSpan](start), {important: importantPriority, ie7: ie7});
      } else if (this[_peekToken].kind === 400) {
        this[_next]();
        let definedName = null;
        if (dart.test(this[_peekIdentifier]())) definedName = this.identifier();
        this[_eat](17);
        let exprs = this.processExpr();
        decl = new visitor.VarDefinition.new(definedName, exprs, this[_makeSpan](start));
      } else if (this[_peekToken].kind === 655) {
        let span = this[_makeSpan](start);
        let include = this.processInclude(span, {eatSemiColon: false});
        decl = new visitor.IncludeMixinAtDeclaration.new(include, span);
      } else if (this[_peekToken].kind === 657) {
        let simpleSequences = JSArrayOfTreeNode().of([]);
        this[_next]();
        let span = this[_makeSpan](start);
        let selector = this.simpleSelector();
        if (selector == null) {
          this[_warning]("@extends expecting simple selector name", span);
        } else {
          simpleSequences[$add](selector);
        }
        if (dart.test(this[_peekKind](17))) {
          let pseudoSelector = this.processPseudoSelector(this[_peekToken].span);
          if (visitor.PseudoElementSelector.is(pseudoSelector) || visitor.PseudoClassSelector.is(pseudoSelector)) {
            simpleSequences[$add](pseudoSelector);
          } else {
            this[_warning]("not a valid selector", span);
          }
        }
        decl = new visitor.ExtendDeclaration.new(simpleSequences, span);
      }
      return decl;
    }
    static _findStyle(styleName) {
      return parser._Parser._stylesToDart[$_get](styleName);
    }
    [_styleForDart](property, exprs, dartStyles) {
      let styleType = parser._Parser._findStyle(property.name[$toLowerCase]());
      if (styleType != null) {
        return this.buildDartStyleNode(styleType, exprs, dartStyles);
      }
      return null;
    }
    [_mergeFontStyles](fontExpr, dartStyles) {
      for (let dartStyle of dartStyles) {
        if (dart.test(dartStyle.isFont)) {
          fontExpr = visitor.FontExpression.merge(visitor.FontExpression._check(dartStyle), fontExpr);
        }
      }
      return fontExpr;
    }
    buildDartStyleNode(styleType, exprs, dartStyles) {
      switch (styleType) {
        case 0:
        {
          let processor = new parser.ExpressionsProcessor.new(exprs);
          return this[_mergeFontStyles](processor.processFont(), dartStyles);
        }
        case 4:
        {
          let processor = new parser.ExpressionsProcessor.new(exprs);
          try {
            return this[_mergeFontStyles](processor.processFontFamily(), dartStyles);
          } catch (e) {
            let fontException = dart.getThrown(e);
            this[_error](core.String._check(fontException), this[_peekToken].span);
          }
          break;
        }
        case 3:
        {
          let processor = new parser.ExpressionsProcessor.new(exprs);
          return this[_mergeFontStyles](processor.processFontSize(), dartStyles);
        }
        case 5:
        {
          break;
        }
        case 1:
        {
          break;
        }
        case 2:
        {
          let expr = exprs.expressions[$_get](0);
          if (visitor.NumberTerm.is(expr)) {
            let fontExpr = new visitor.FontExpression.new(expr.span, {weight: core.int._check(expr.value)});
            return this[_mergeFontStyles](fontExpr, dartStyles);
          } else if (visitor.LiteralTerm.is(expr)) {
            let weight = parser._Parser._nameToFontWeight[$_get](dart.toString(expr.value));
            if (weight != null) {
              let fontExpr = new visitor.FontExpression.new(expr.span, {weight: weight});
              return this[_mergeFontStyles](fontExpr, dartStyles);
            }
          }
          break;
        }
        case 11:
        {
          if (exprs.expressions[$length] === 1) {
            let expr = exprs.expressions[$_get](0);
            if (visitor.UnitTerm.is(expr)) {
              let unitTerm = expr;
              if (unitTerm.unit === 602 || unitTerm.unit === 606) {
                let fontExpr = new visitor.FontExpression.new(expr.span, {lineHeight: new parser.LineHeight.new(core.num._check(expr.value), {inPixels: true})});
                return this[_mergeFontStyles](fontExpr, dartStyles);
              } else if (dart.test(parser.isChecked)) {
                this[_warning]("Unexpected unit for line-height", expr.span);
              }
            } else if (visitor.NumberTerm.is(expr)) {
              let fontExpr = new visitor.FontExpression.new(expr.span, {lineHeight: new parser.LineHeight.new(core.num._check(expr.value), {inPixels: false})});
              return this[_mergeFontStyles](fontExpr, dartStyles);
            } else if (dart.test(parser.isChecked)) {
              this[_warning]("Unexpected value for line-height", expr.span);
            }
          }
          break;
        }
        case 6:
        {
          return new visitor.MarginExpression.boxEdge(exprs.span, this.processFourNums(exprs));
        }
        case 12:
        {
          for (let expr of exprs.expressions) {
            let v = this.marginValue(expr);
            if (v != null) {
              let box = new parser.BoxEdge.uniform(v);
              return new visitor.BorderExpression.boxEdge(exprs.span, box);
            }
          }
          break;
        }
        case 17:
        {
          let v = this.marginValue(exprs.expressions[$_get](0));
          if (v != null) {
            let box = new parser.BoxEdge.uniform(v);
            return new visitor.BorderExpression.boxEdge(exprs.span, box);
          }
          break;
        }
        case 24:
        {
          return new visitor.PaddingExpression.boxEdge(exprs.span, this.processFourNums(exprs));
        }
        case 7:
        case 8:
        case 9:
        case 10:
        case 13:
        case 14:
        case 15:
        case 16:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 25:
        case 26:
        case 27:
        case 28:
        {
          if (dart.test(exprs.expressions[$isNotEmpty])) {
            return this.processOneNumber(exprs, styleType);
          }
          break;
        }
      }
      return null;
    }
    processOneNumber(exprs, part) {
      let value = this.marginValue(exprs.expressions[$_get](0));
      if (value != null) {
        switch (part) {
          case 7:
          {
            return new visitor.MarginExpression.new(exprs.span, {left: value});
          }
          case 8:
          {
            return new visitor.MarginExpression.new(exprs.span, {top: value});
          }
          case 9:
          {
            return new visitor.MarginExpression.new(exprs.span, {right: value});
          }
          case 10:
          {
            return new visitor.MarginExpression.new(exprs.span, {bottom: value});
          }
          case 13:
          case 18:
          {
            return new visitor.BorderExpression.new(exprs.span, {left: value});
          }
          case 14:
          case 19:
          {
            return new visitor.BorderExpression.new(exprs.span, {top: value});
          }
          case 15:
          case 20:
          {
            return new visitor.BorderExpression.new(exprs.span, {right: value});
          }
          case 16:
          case 21:
          {
            return new visitor.BorderExpression.new(exprs.span, {bottom: value});
          }
          case 22:
          {
            return new visitor.HeightExpression.new(exprs.span, value);
          }
          case 23:
          {
            return new visitor.WidthExpression.new(exprs.span, value);
          }
          case 25:
          {
            return new visitor.PaddingExpression.new(exprs.span, {left: value});
          }
          case 26:
          {
            return new visitor.PaddingExpression.new(exprs.span, {top: value});
          }
          case 27:
          {
            return new visitor.PaddingExpression.new(exprs.span, {right: value});
          }
          case 28:
          {
            return new visitor.PaddingExpression.new(exprs.span, {bottom: value});
          }
        }
      }
      return null;
    }
    processFourNums(exprs) {
      let top = null;
      let right = null;
      let bottom = null;
      let left = null;
      let totalExprs = exprs.expressions[$length];
      switch (totalExprs) {
        case 1:
        {
          top = this.marginValue(exprs.expressions[$_get](0));
          right = top;
          bottom = top;
          left = top;
          break;
        }
        case 2:
        {
          top = this.marginValue(exprs.expressions[$_get](0));
          bottom = top;
          right = this.marginValue(exprs.expressions[$_get](1));
          left = right;
          break;
        }
        case 3:
        {
          top = this.marginValue(exprs.expressions[$_get](0));
          right = this.marginValue(exprs.expressions[$_get](1));
          left = right;
          bottom = this.marginValue(exprs.expressions[$_get](2));
          break;
        }
        case 4:
        {
          top = this.marginValue(exprs.expressions[$_get](0));
          right = this.marginValue(exprs.expressions[$_get](1));
          bottom = this.marginValue(exprs.expressions[$_get](2));
          left = this.marginValue(exprs.expressions[$_get](3));
          break;
        }
        default:
        {
          return null;
        }
      }
      return new parser.BoxEdge.clockwiseFromTop(top, right, bottom, left);
    }
    marginValue(exprTerm) {
      if (visitor.UnitTerm.is(exprTerm)) {
        return core.num.as(exprTerm.value);
      } else if (visitor.NumberTerm.is(exprTerm)) {
        return core.num.as(exprTerm.value);
      }
      return null;
    }
    processExpr(ieFilter) {
      if (ieFilter === void 0) ieFilter = false;
      let start = this[_peekToken].span;
      let expressions = new visitor.Expressions.new(this[_makeSpan](start));
      let keepGoing = true;
      let expr = null;
      while (keepGoing && (expr = this.processTerm(ieFilter)) != null) {
        let op = null;
        let opStart = this[_peekToken].span;
        switch (this[_peek]()) {
          case 27:
          {
            op = new visitor.OperatorSlash.new(this[_makeSpan](opStart));
            break;
          }
          case 19:
          {
            op = new visitor.OperatorComma.new(this[_makeSpan](opStart));
            break;
          }
          case 35:
          {
            let ie8Start = this[_peekToken].span;
            this[_next]();
            if (dart.test(this[_peekKind](60))) {
              let numToken = this[_next]();
              let value = core.int.parse(numToken.text);
              if (value === 9) {
                op = new visitor.IE8Term.new(this[_makeSpan](ie8Start));
              } else if (dart.test(parser.isChecked)) {
                this[_warning]("$value is not valid in an expression", this[_makeSpan](start));
              }
            }
            break;
          }
        }
        if (expr != null) {
          if (ListOfExpression().is(expr)) {
            for (let exprItem of expr) {
              expressions.add(exprItem);
            }
          } else {
            expressions.add(visitor.Expression._check(expr));
          }
        } else {
          keepGoing = false;
        }
        if (op != null) {
          expressions.add(op);
          if (visitor.IE8Term.is(op)) {
            keepGoing = false;
          } else {
            this[_next]();
          }
        }
      }
      return expressions;
    }
    processTerm(ieFilter) {
      if (ieFilter === void 0) ieFilter = false;
      let start = this[_peekToken].span;
      let t = null;
      let value = null;
      let unary = "";
      switch (this[_peek]()) {
        case 11:
        {
          this[_eat](11);
          if (!dart.test(this[_anyWhiteSpaceBeforePeekToken](11))) {
            let hexText = null;
            if (dart.test(this[_peekKind](60))) {
              let hexText1 = this[_peekToken].text;
              this[_next]();
              if (dart.test(this[_peekIdentifier]()) && this[_previousToken].end == this[_peekToken].start) {
                hexText = dart.str(hexText1) + dart.str(this.identifier().name);
              } else {
                hexText = hexText1;
              }
            } else if (dart.test(this[_peekIdentifier]())) {
              hexText = this.identifier().name;
            }
            if (hexText != null) {
              return this[_parseHex](hexText, this[_makeSpan](start));
            }
          }
          if (dart.test(parser.isChecked)) {
            this[_warning]("Expected hex number", this[_makeSpan](start));
          }
          return this[_parseHex](" " + dart.str(dart.dload(this.processTerm(), 'text')), this[_makeSpan](start));
        }
        case 60:
        {
          t = this[_next]();
          value = core.int.parse(unary + dart.str(t.text));
          break;
        }
        case 62:
        {
          t = this[_next]();
          value = core.double.parse(unary + dart.str(t.text));
          break;
        }
        case 25:
        {
          value = this.processQuotedString(false);
          value = "'" + dart.str(parser._escapeString(core.String._check(value), {single: true})) + "'";
          return new visitor.LiteralTerm.new(value, core.String._check(value), this[_makeSpan](start));
        }
        case 26:
        {
          value = this.processQuotedString(false);
          value = "\"" + dart.str(parser._escapeString(core.String._check(value))) + "\"";
          return new visitor.LiteralTerm.new(value, core.String._check(value), this[_makeSpan](start));
        }
        case 2:
        {
          this[_next]();
          let group = new visitor.GroupTerm.new(this[_makeSpan](start));
          let term = null;
          do {
            term = this.processTerm();
            if (term != null && visitor.LiteralTerm.is(term)) {
              group.add(term);
            }
          } while (term != null && !dart.test(this[_maybeEat](3)) && !dart.test(this.isPrematureEndOfFile()));
          return group;
        }
        case 4:
        {
          this[_next]();
          let term = this.processTerm();
          if (!visitor.NumberTerm.is(term)) {
            this[_error]("Expecting a positive number", this[_makeSpan](start));
          }
          this[_eat](5);
          return new visitor.ItemTerm.new(dart.dload(term, 'value'), core.String._check(dart.dload(term, 'text')), this[_makeSpan](start));
        }
        case 511:
        {
          let nameValue = this.identifier();
          if (!dart.test(ieFilter) && dart.test(this[_maybeEat](2))) {
            let calc = this.processCalc(nameValue);
            if (calc != null) return calc;
            return this.processFunction(nameValue);
          }
          if (dart.test(ieFilter)) {
            if (dart.test(this[_maybeEat](17)) && nameValue.name[$toLowerCase]() === "progid") {
              return this.processIEFilter(start);
            } else {
              return this.processIEFilter(start);
            }
          }
          if (nameValue.name === "from") {
            return new visitor.LiteralTerm.new(nameValue, nameValue.name, this[_makeSpan](start));
          }
          let colorEntry = parser.TokenKind.matchColorName(nameValue.name);
          if (colorEntry == null) {
            if (dart.test(parser.isChecked)) {
              let propName = nameValue.name;
              let errMsg = dart.test(parser.TokenKind.isPredefinedName(propName)) ? "Improper use of property value " + dart.str(propName) : "Unknown property value " + dart.str(propName);
              this[_warning](errMsg, this[_makeSpan](start));
            }
            return new visitor.LiteralTerm.new(nameValue, nameValue.name, this[_makeSpan](start));
          }
          let rgbColor = parser.TokenKind.decimalToHex(parser.TokenKind.colorValue(colorEntry), 6);
          return this[_parseHex](rgbColor, this[_makeSpan](start));
        }
        case 508:
        {
          let first = null;
          let second = null;
          let firstNumber = null;
          let secondNumber = null;
          this[_eat](508, {unicodeRange: true});
          if (dart.test(this[_maybeEat](61, {unicodeRange: true}))) {
            first = this[_previousToken].text;
            firstNumber = core.int.parse("0x" + dart.str(first));
            if (dart.notNull(firstNumber) > 1114111) {
              this[_error]("unicode range must be less than 10FFFF", this[_makeSpan](start));
            }
            if (dart.test(this[_maybeEat](34, {unicodeRange: true}))) {
              if (dart.test(this[_maybeEat](61, {unicodeRange: true}))) {
                second = this[_previousToken].text;
                secondNumber = core.int.parse("0x" + dart.str(second));
                if (dart.notNull(secondNumber) > 1114111) {
                  this[_error]("unicode range must be less than 10FFFF", this[_makeSpan](start));
                }
                if (dart.notNull(firstNumber) > dart.notNull(secondNumber)) {
                  this[_error]("unicode first range can not be greater than last", this[_makeSpan](start));
                }
              }
            }
          } else if (dart.test(this[_maybeEat](509, {unicodeRange: true}))) {
            first = this[_previousToken].text;
          }
          return new visitor.UnicodeRangeTerm.new(first, second, this[_makeSpan](start));
        }
        case 10:
        {
          if (dart.test(messages.messages.options.lessSupport)) {
            this[_next]();
            let expr = this.processExpr();
            if (dart.test(parser.isChecked) && dart.notNull(expr.expressions[$length]) > 1) {
              this[_error]("only @name for Less syntax", this[_peekToken].span);
            }
            let param = expr.expressions[$_get](0);
            let varUsage = new visitor.VarUsage.new(visitor.LiteralTerm.as(param).text, JSArrayOfExpression().of([]), this[_makeSpan](start));
            expr.expressions[$_set](0, varUsage);
            return expr.expressions;
          }
          break;
        }
      }
      return t != null ? this.processDimension(t, value, this[_makeSpan](start)) : null;
    }
    processDimension(t, value, span) {
      let term = null;
      let unitType = this[_peek]();
      switch (unitType) {
        case 600:
        {
          term = new visitor.EmTerm.new(value, t.text, span);
          this[_next]();
          break;
        }
        case 601:
        {
          term = new visitor.ExTerm.new(value, t.text, span);
          this[_next]();
          break;
        }
        case 602:
        case 603:
        case 604:
        case 605:
        case 606:
        case 607:
        {
          term = new visitor.LengthTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 608:
        case 609:
        case 610:
        case 611:
        {
          term = new visitor.AngleTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 612:
        case 613:
        {
          term = new visitor.TimeTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 614:
        case 615:
        {
          term = new visitor.FreqTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 24:
        {
          term = new visitor.PercentageTerm.new(value, t.text, span);
          this[_next]();
          break;
        }
        case 617:
        {
          term = new visitor.FractionTerm.new(value, t.text, span);
          this[_next]();
          break;
        }
        case 618:
        case 619:
        case 620:
        {
          term = new visitor.ResolutionTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 621:
        {
          term = new visitor.ChTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 622:
        {
          term = new visitor.RemTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        case 623:
        case 624:
        case 625:
        case 626:
        {
          term = new visitor.ViewportTerm.new(value, t.text, span, unitType);
          this[_next]();
          break;
        }
        default:
        {
          if (value != null) {
            if (visitor.Identifier.is(value)) {
              term = new visitor.LiteralTerm.new(value, value.name, span);
            } else if (t != null) {
              term = new visitor.NumberTerm.new(value, t.text, span);
            }
          }
        }
      }
      return term;
    }
    processQuotedString(urlString) {
      if (urlString === void 0) urlString = false;
      let start = this[_peekToken].span;
      let stopToken = dart.test(urlString) ? 3 : -1;
      let inString = this.tokenizer[_inString$];
      this.tokenizer[_inString$] = false;
      switch (this[_peek]()) {
        case 25:
        {
          stopToken = 25;
          this[_next]();
          start = this[_peekToken].span;
          break;
        }
        case 26:
        {
          stopToken = 26;
          this[_next]();
          start = this[_peekToken].span;
          break;
        }
        default:
        {
          if (dart.test(urlString)) {
            if (this[_peek]() === 2) {
              this[_next]();
              start = this[_peekToken].span;
            }
            stopToken = 3;
          } else {
            this[_error]("unexpected string", this[_makeSpan](start));
          }
          break;
        }
      }
      let stringValue = new core.StringBuffer.new();
      while (this[_peek]() !== stopToken && this[_peek]() !== 1) {
        stringValue.write(this[_next]().text);
      }
      this.tokenizer[_inString$] = inString;
      if (stopToken !== 3) {
        this[_next]();
      }
      return stringValue.toString();
    }
    processIEFilter(startAfterProgidColon) {
      let kind = this[_peek]();
      if (kind === 9 || kind === 7) {
        let tok = this.tokenizer.makeIEFilter(startAfterProgidColon.start.offset, this[_peekToken].start);
        return new visitor.LiteralTerm.new(tok.text, tok.text, tok.span);
      }
      let parens = 0;
      while (this[_peek]() !== 1) {
        switch (this[_peek]()) {
          case 2:
          {
            this[_eat](2);
            parens = parens + 1;
            break;
          }
          case 3:
          {
            this[_eat](3);
            if ((parens = parens - 1) === 0) {
              let tok = this.tokenizer.makeIEFilter(startAfterProgidColon.start.offset, this[_peekToken].start);
              return new visitor.LiteralTerm.new(tok.text, tok.text, tok.span);
            }
            break;
          }
          default:
          {
            this[_eat](this[_peek]());
          }
        }
      }
    }
    processCalcExpression() {
      let inString = this.tokenizer[_inString$];
      this.tokenizer[_inString$] = false;
      let stringValue = new core.StringBuffer.new();
      let left = 1;
      let matchingParens = false;
      while (this[_peek]() !== 1 && !matchingParens) {
        let token = this[_peek]();
        if (token === 2)
          left = left + 1;
        else if (token === 3) left = left - 1;
        matchingParens = left === 0;
        if (!matchingParens) stringValue.write(this[_next]().text);
      }
      if (!matchingParens) {
        this[_error]("problem parsing function expected ), ", this[_peekToken].span);
      }
      this.tokenizer[_inString$] = inString;
      return stringValue.toString();
    }
    processCalc(func) {
      let start = this[_peekToken].span;
      let name = func.name;
      if (name === "calc" || name === "-webkit-calc" || name === "-moz-calc") {
        let expression = this.processCalcExpression();
        let calcExpr = new visitor.LiteralTerm.new(expression, expression, this[_makeSpan](start));
        if (!dart.test(this[_maybeEat](3))) {
          this[_error]("problem parsing function expected ), ", this[_peekToken].span);
        }
        return new visitor.CalcTerm.new(name, name, calcExpr, this[_makeSpan](start));
      }
      return null;
    }
    processFunction(func) {
      let start = this[_peekToken].span;
      let name = func.name;
      switch (name) {
        case "url":
        {
          let urlParam = this.processQuotedString(true);
          if (this[_peek]() === 1) {
            this[_error]("problem parsing URI", this[_peekToken].span);
          }
          if (this[_peek]() === 3) {
            this[_next]();
          }
          return new visitor.UriTerm.new(urlParam, this[_makeSpan](start));
        }
        case "var":
        {
          let expr = this.processExpr();
          if (!dart.test(this[_maybeEat](3))) {
            this[_error]("problem parsing var expected ), ", this[_peekToken].span);
          }
          if (dart.test(parser.isChecked) && dart.notNull(expr.expressions[$where](dart.fn(e => visitor.OperatorComma.is(e), ExpressionTobool()))[$length]) > 1) {
            this[_error]("too many parameters to var()", this[_peekToken].span);
          }
          let paramName = visitor.LiteralTerm.as(expr.expressions[$_get](0)).text;
          let defaultValues = dart.notNull(expr.expressions[$length]) >= 3 ? expr.expressions[$sublist](2) : JSArrayOfExpression().of([]);
          return new visitor.VarUsage.new(paramName, defaultValues, this[_makeSpan](start));
        }
        default:
        {
          let expr = this.processExpr();
          if (!dart.test(this[_maybeEat](3))) {
            this[_error]("problem parsing function expected ), ", this[_peekToken].span);
          }
          return new visitor.FunctionTerm.new(name, name, expr, this[_makeSpan](start));
        }
      }
    }
    identifier() {
      let tok = this[_next]();
      if (!dart.test(parser.TokenKind.isIdentifier(tok.kind)) && !dart.test(parser.TokenKind.isKindIdentifier(tok.kind))) {
        if (dart.test(parser.isChecked)) {
          this[_warning]("expected identifier, but found " + dart.str(tok), tok.span);
        }
        return new visitor.Identifier.new("", this[_makeSpan](tok.span));
      }
      return new visitor.Identifier.new(tok.text, this[_makeSpan](tok.span));
    }
    static _hexDigit(c) {
      if (dart.notNull(c) >= 48 && dart.notNull(c) <= 57) {
        return dart.notNull(c) - 48;
      } else if (dart.notNull(c) >= 97 && dart.notNull(c) <= 102) {
        return dart.notNull(c) - 87;
      } else if (dart.notNull(c) >= 65 && dart.notNull(c) <= 70) {
        return dart.notNull(c) - 55;
      } else {
        return -1;
      }
    }
    [_parseHex](hexText, span) {
      let hexValue = 0;
      for (let i = 0; i < hexText.length; i = i + 1) {
        let digit = parser._Parser._hexDigit(hexText[$codeUnitAt](i));
        if (dart.notNull(digit) < 0) {
          this[_warning]("Bad hex number", span);
          return new visitor.HexColorTerm.new(new visitor.BAD_HEX_VALUE.new(), hexText, span);
        }
        hexValue = (hexValue << 4 >>> 0) + dart.notNull(digit);
      }
      if (hexText.length === 6 && hexText[$_get](0) === hexText[$_get](1) && hexText[$_get](2) === hexText[$_get](3) && hexText[$_get](4) === hexText[$_get](5)) {
        hexText = hexText[$_get](0) + hexText[$_get](2) + hexText[$_get](4);
      } else if (hexText.length === 4 && hexText[$_get](0) === hexText[$_get](1) && hexText[$_get](2) === hexText[$_get](3)) {
        hexText = hexText[$_get](0) + hexText[$_get](2);
      } else if (hexText.length === 2 && hexText[$_get](0) === hexText[$_get](1)) {
        hexText = hexText[$_get](0);
      }
      return new visitor.HexColorTerm.new(hexValue, hexText, span);
    }
  };
  (parser._Parser.new = function(file, text, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    this[_previousToken] = null;
    this[_peekToken] = null;
    this.file = file;
    this.tokenizer = new parser.Tokenizer.new(file, text, true, start);
    this[_peekToken] = this.tokenizer.next();
  }).prototype = parser._Parser.prototype;
  dart.addTypeTests(parser._Parser);
  dart.setMethodSignature(parser._Parser, () => ({
    __proto__: dart.getMethods(parser._Parser.__proto__),
    parse: dart.fnType(visitor.StyleSheet, []),
    parseSelector: dart.fnType(visitor.StyleSheet, []),
    checkEndOfFile: dart.fnType(dart.void, []),
    isPrematureEndOfFile: dart.fnType(core.bool, []),
    [_peek]: dart.fnType(core.int, []),
    [_next]: dart.fnType(parser.Token, [], {unicodeRange: core.bool}),
    [_peekKind]: dart.fnType(core.bool, [core.int]),
    [_peekIdentifier]: dart.fnType(core.bool, []),
    [_restore]: dart.fnType(dart.void, [parser.ParserState]),
    [_maybeEat]: dart.fnType(core.bool, [core.int], {unicodeRange: core.bool}),
    [_eat]: dart.fnType(dart.void, [core.int], {unicodeRange: core.bool}),
    [_errorExpected]: dart.fnType(dart.void, [core.String]),
    [_error]: dart.fnType(dart.void, [core.String, span.SourceSpan]),
    [_warning]: dart.fnType(dart.void, [core.String, span.SourceSpan]),
    [_makeSpan]: dart.fnType(span.SourceSpan, [file$.FileSpan]),
    processMediaQueryList: dart.fnType(core.List$(visitor.MediaQuery), []),
    processMediaQuery: dart.fnType(visitor.MediaQuery, []),
    processMediaExpression: dart.fnType(visitor.MediaExpression, [], [core.bool]),
    processDirective: dart.fnType(visitor.Directive, []),
    processMixin: dart.fnType(visitor.MixinDefinition, []),
    processVariableOrDirective: dart.fnType(dart.dynamic, [], {mixinParameter: core.bool}),
    processInclude: dart.fnType(visitor.IncludeDirective, [span.SourceSpan], {eatSemiColon: core.bool}),
    processDocumentDirective: dart.fnType(visitor.DocumentDirective, []),
    processSupportsDirective: dart.fnType(visitor.SupportsDirective, []),
    processSupportsCondition: dart.fnType(visitor.SupportsCondition, []),
    processSupportsNegation: dart.fnType(visitor.SupportsNegation, []),
    processSupportsConditionInParens: dart.fnType(visitor.SupportsConditionInParens, []),
    processViewportDirective: dart.fnType(visitor.ViewportDirective, []),
    processRule: dart.fnType(visitor.TreeNode, [], [visitor.SelectorGroup]),
    processGroupRuleBody: dart.fnType(core.List$(visitor.TreeNode), []),
    [_nestedSelector]: dart.fnType(visitor.SelectorGroup, []),
    processDeclarations: dart.fnType(visitor.DeclarationGroup, [], {checkBrace: core.bool}),
    processMarginsDeclarations: dart.fnType(core.List$(visitor.DeclarationGroup), []),
    processSelectorGroup: dart.fnType(visitor.SelectorGroup, []),
    processSelector: dart.fnType(visitor.Selector, []),
    processCompoundSelector: dart.fnType(visitor.Selector, []),
    simpleSelectorSequence: dart.fnType(visitor.SimpleSelectorSequence, [core.bool]),
    simpleSelector: dart.fnType(visitor.SimpleSelector, []),
    [_anyWhiteSpaceBeforePeekToken]: dart.fnType(core.bool, [core.int]),
    simpleSelectorTail: dart.fnType(visitor.SimpleSelector, []),
    processPseudoSelector: dart.fnType(visitor.SimpleSelector, [file$.FileSpan]),
    processSelectorExpression: dart.fnType(visitor.TreeNode, []),
    processAttribute: dart.fnType(visitor.AttributeSelector, []),
    processDeclaration: dart.fnType(visitor.Declaration, [core.List$(visitor.DartStyleExpression)]),
    [_styleForDart]: dart.fnType(visitor.DartStyleExpression, [visitor.Identifier, visitor.Expressions, core.List$(visitor.DartStyleExpression)]),
    [_mergeFontStyles]: dart.fnType(visitor.FontExpression, [visitor.FontExpression, core.List$(visitor.DartStyleExpression)]),
    buildDartStyleNode: dart.fnType(visitor.DartStyleExpression, [core.int, visitor.Expressions, core.List$(visitor.DartStyleExpression)]),
    processOneNumber: dart.fnType(visitor.DartStyleExpression, [visitor.Expressions, core.int]),
    processFourNums: dart.fnType(parser.BoxEdge, [visitor.Expressions]),
    marginValue: dart.fnType(core.num, [visitor.Expression]),
    processExpr: dart.fnType(visitor.Expressions, [], [core.bool]),
    processTerm: dart.fnType(dart.dynamic, [], [core.bool]),
    processDimension: dart.fnType(visitor.LiteralTerm, [parser.Token, dart.dynamic, span.SourceSpan]),
    processQuotedString: dart.fnType(core.String, [], [core.bool]),
    processIEFilter: dart.fnType(dart.dynamic, [file$.FileSpan]),
    processCalcExpression: dart.fnType(core.String, []),
    processCalc: dart.fnType(visitor.CalcTerm, [visitor.Identifier]),
    processFunction: dart.fnType(visitor.TreeNode, [visitor.Identifier]),
    identifier: dart.fnType(visitor.Identifier, []),
    [_parseHex]: dart.fnType(visitor.HexColorTerm, [core.String, span.SourceSpan])
  }));
  dart.setGetterSignature(parser._Parser, () => ({
    __proto__: dart.getGetters(parser._Parser.__proto__),
    [_mark]: parser.ParserState
  }));
  dart.setLibraryUri(parser._Parser, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._Parser, () => ({
    __proto__: dart.getFields(parser._Parser.__proto__),
    tokenizer: dart.finalFieldType(parser.Tokenizer),
    file: dart.finalFieldType(file$.SourceFile),
    [_previousToken]: dart.fieldType(parser.Token),
    [_peekToken]: dart.fieldType(parser.Token)
  }));
  dart.defineLazy(parser._Parser, {
    /*parser._Parser._fontPartFont*/get _fontPartFont() {
      return 0;
    },
    /*parser._Parser._fontPartVariant*/get _fontPartVariant() {
      return 1;
    },
    /*parser._Parser._fontPartWeight*/get _fontPartWeight() {
      return 2;
    },
    /*parser._Parser._fontPartSize*/get _fontPartSize() {
      return 3;
    },
    /*parser._Parser._fontPartFamily*/get _fontPartFamily() {
      return 4;
    },
    /*parser._Parser._fontPartStyle*/get _fontPartStyle() {
      return 5;
    },
    /*parser._Parser._marginPartMargin*/get _marginPartMargin() {
      return 6;
    },
    /*parser._Parser._marginPartLeft*/get _marginPartLeft() {
      return 7;
    },
    /*parser._Parser._marginPartTop*/get _marginPartTop() {
      return 8;
    },
    /*parser._Parser._marginPartRight*/get _marginPartRight() {
      return 9;
    },
    /*parser._Parser._marginPartBottom*/get _marginPartBottom() {
      return 10;
    },
    /*parser._Parser._lineHeightPart*/get _lineHeightPart() {
      return 11;
    },
    /*parser._Parser._borderPartBorder*/get _borderPartBorder() {
      return 12;
    },
    /*parser._Parser._borderPartLeft*/get _borderPartLeft() {
      return 13;
    },
    /*parser._Parser._borderPartTop*/get _borderPartTop() {
      return 14;
    },
    /*parser._Parser._borderPartRight*/get _borderPartRight() {
      return 15;
    },
    /*parser._Parser._borderPartBottom*/get _borderPartBottom() {
      return 16;
    },
    /*parser._Parser._borderPartWidth*/get _borderPartWidth() {
      return 17;
    },
    /*parser._Parser._borderPartLeftWidth*/get _borderPartLeftWidth() {
      return 18;
    },
    /*parser._Parser._borderPartTopWidth*/get _borderPartTopWidth() {
      return 19;
    },
    /*parser._Parser._borderPartRightWidth*/get _borderPartRightWidth() {
      return 20;
    },
    /*parser._Parser._borderPartBottomWidth*/get _borderPartBottomWidth() {
      return 21;
    },
    /*parser._Parser._heightPart*/get _heightPart() {
      return 22;
    },
    /*parser._Parser._widthPart*/get _widthPart() {
      return 23;
    },
    /*parser._Parser._paddingPartPadding*/get _paddingPartPadding() {
      return 24;
    },
    /*parser._Parser._paddingPartLeft*/get _paddingPartLeft() {
      return 25;
    },
    /*parser._Parser._paddingPartTop*/get _paddingPartTop() {
      return 26;
    },
    /*parser._Parser._paddingPartRight*/get _paddingPartRight() {
      return 27;
    },
    /*parser._Parser._paddingPartBottom*/get _paddingPartBottom() {
      return 28;
    },
    /*parser._Parser._stylesToDart*/get _stylesToDart() {
      return C4 || CT.C4;
    },
    /*parser._Parser._nameToFontWeight*/get _nameToFontWeight() {
      return C5 || CT.C5;
    },
    /*parser._Parser.MAX_UNICODE*/get MAX_UNICODE() {
      return 1114111;
    }
  });
  const _exprs$ = dart.privateName(parser, "_exprs");
  parser.ExpressionsProcessor = class ExpressionsProcessor extends core.Object {
    processFontSize() {
      let size = null;
      let lineHt = null;
      let nextIsLineHeight = false;
      for (; dart.notNull(this[_index$]) < dart.notNull(this[_exprs$].expressions[$length]); this[_index$] = dart.notNull(this[_index$]) + 1) {
        let expr = this[_exprs$].expressions[$_get](this[_index$]);
        if (size == null && visitor.LengthTerm.is(expr)) {
          size = expr;
        } else if (size != null) {
          if (visitor.OperatorSlash.is(expr)) {
            nextIsLineHeight = true;
          } else if (nextIsLineHeight && visitor.LengthTerm.is(expr)) {
            if (!(expr.unit === 602)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/parser.dart", 2805, 18, "expr.unit == TokenKind.UNIT_LENGTH_PX");
            lineHt = new parser.LineHeight.new(core.num._check(expr.value), {inPixels: true});
            nextIsLineHeight = false;
            this[_index$] = dart.notNull(this[_index$]) + 1;
            break;
          } else {
            break;
          }
        } else {
          break;
        }
      }
      return new visitor.FontExpression.new(this[_exprs$].span, {size: size, lineHeight: lineHt});
    }
    processFontFamily() {
      let family = JSArrayOfString().of([]);
      let moreFamilies = false;
      for (; dart.notNull(this[_index$]) < dart.notNull(this[_exprs$].expressions[$length]); this[_index$] = dart.notNull(this[_index$]) + 1) {
        let expr = this[_exprs$].expressions[$_get](this[_index$]);
        if (visitor.LiteralTerm.is(expr)) {
          if (dart.test(family[$isEmpty]) || moreFamilies) {
            family[$add](dart.toString(expr));
            moreFamilies = false;
          } else if (dart.test(parser.isChecked)) {
            messages.messages.warning("Only font-family can be a list", this[_exprs$].span);
          }
        } else if (visitor.OperatorComma.is(expr) && dart.test(family[$isNotEmpty])) {
          moreFamilies = true;
        } else {
          break;
        }
      }
      return new visitor.FontExpression.new(this[_exprs$].span, {family: family});
    }
    processFont() {
      let fontSize = null;
      let fontFamily = null;
      for (; dart.notNull(this[_index$]) < dart.notNull(this[_exprs$].expressions[$length]); this[_index$] = dart.notNull(this[_index$]) + 1) {
        if (fontSize == null) {
          fontSize = this.processFontSize();
        }
        if (fontFamily == null) {
          fontFamily = this.processFontFamily();
        }
      }
      return new visitor.FontExpression.new(this[_exprs$].span, {size: fontSize.font.size, lineHeight: fontSize.font.lineHeight, family: fontFamily.font.family});
    }
  };
  (parser.ExpressionsProcessor.new = function(_exprs) {
    this[_index$] = 0;
    this[_exprs$] = _exprs;
    ;
  }).prototype = parser.ExpressionsProcessor.prototype;
  dart.addTypeTests(parser.ExpressionsProcessor);
  dart.setMethodSignature(parser.ExpressionsProcessor, () => ({
    __proto__: dart.getMethods(parser.ExpressionsProcessor.__proto__),
    processFontSize: dart.fnType(visitor.FontExpression, []),
    processFontFamily: dart.fnType(visitor.FontExpression, []),
    processFont: dart.fnType(visitor.FontExpression, [])
  }));
  dart.setLibraryUri(parser.ExpressionsProcessor, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.ExpressionsProcessor, () => ({
    __proto__: dart.getFields(parser.ExpressionsProcessor.__proto__),
    [_exprs$]: dart.finalFieldType(visitor.Expressions),
    [_index$]: dart.fieldType(core.int)
  }));
  const _styleSheets$ = dart.privateName(parser, "_styleSheets");
  const _messages$ = dart.privateName(parser, "_messages");
  parser.Analyzer = class Analyzer extends core.Object {
    run() {
      this[_styleSheets$][$forEach](dart.fn(styleSheet => parser.TopLevelIncludes.expand(this[_messages$], this[_styleSheets$]), StyleSheetTovoid()));
      this[_styleSheets$][$forEach](dart.fn(styleSheet => parser.DeclarationIncludes.expand(this[_messages$], this[_styleSheets$]), StyleSheetTovoid()));
      this[_styleSheets$][$forEach](dart.fn(styleSheet => parser.MixinsAndIncludes.remove(styleSheet), StyleSheetTovoid()));
      this[_styleSheets$][$forEach](dart.fn(styleSheet => {
        let t2;
        t2 = new parser.ExpandNestedSelectors.new();
        t2.visitStyleSheet(styleSheet);
        t2.flatten(styleSheet);
        return t2;
      }, StyleSheetToExpandNestedSelectors()));
      this[_styleSheets$][$forEach](dart.fn(styleSheet => {
        let t2, t2$;
        let allExtends = (t2 = new parser.AllExtends.new(), t2.visitStyleSheet(styleSheet), t2);
        t2$ = new parser.InheritExtends.new(this[_messages$], allExtends);
        t2$.visitStyleSheet(styleSheet);
        t2$;
      }, StyleSheetToNull()));
    }
  };
  (parser.Analyzer.new = function(_styleSheets, _messages) {
    this[_styleSheets$] = _styleSheets;
    this[_messages$] = _messages;
    ;
  }).prototype = parser.Analyzer.prototype;
  dart.addTypeTests(parser.Analyzer);
  dart.setMethodSignature(parser.Analyzer, () => ({
    __proto__: dart.getMethods(parser.Analyzer.__proto__),
    run: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(parser.Analyzer, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Analyzer, () => ({
    __proto__: dart.getFields(parser.Analyzer.__proto__),
    [_styleSheets$]: dart.finalFieldType(core.List$(visitor.StyleSheet)),
    [_messages$]: dart.finalFieldType(messages.Messages)
  }));
  const _parentRuleSet = dart.privateName(parser, "_parentRuleSet");
  const _topLevelSelectorGroup = dart.privateName(parser, "_topLevelSelectorGroup");
  const _nestedSelectorGroup = dart.privateName(parser, "_nestedSelectorGroup");
  const _flatDeclarationGroup = dart.privateName(parser, "_flatDeclarationGroup");
  const _expandedRuleSets = dart.privateName(parser, "_expandedRuleSets");
  const _expansions = dart.privateName(parser, "_expansions");
  const _mergeToFlatten = dart.privateName(parser, "_mergeToFlatten");
  const _mergeNestedSelector = dart.privateName(parser, "_mergeNestedSelector");
  const _convertToDescendentSequence = dart.privateName(parser, "_convertToDescendentSequence");
  const _visitNodeList = dart.privateName(visitor, "_visitNodeList");
  const _declsMargin$ = dart.privateName(visitor, "_declsMargin");
  const _blocks = dart.privateName(visitor, "_blocks");
  const _blockSelectors$ = dart.privateName(visitor, "_blockSelectors");
  const _declarations$ = dart.privateName(visitor, "_declarations");
  const _selectorGroup$ = dart.privateName(visitor, "_selectorGroup");
  const _declarationGroup$ = dart.privateName(visitor, "_declarationGroup");
  const _property$ = dart.privateName(visitor, "_property");
  const _expression$ = dart.privateName(visitor, "_expression");
  const _name$0 = dart.privateName(visitor, "_name");
  const _namespace$ = dart.privateName(visitor, "_namespace");
  const _params$ = dart.privateName(visitor, "_params");
  const _terms = dart.privateName(visitor, "_terms");
  visitor.Visitor = class Visitor extends core.Object {
    [_visitNodeList](list) {
      for (let index = 0; index < dart.notNull(list[$length]); index = index + 1) {
        list[$_get](index).visit(this);
      }
    }
    visitTree(tree) {
      return this.visitStyleSheet(tree);
    }
    visitStyleSheet(ss) {
      this[_visitNodeList](ss.topLevels);
    }
    visitNoOp(node) {
    }
    visitTopLevelProduction(node) {
    }
    visitDirective(node) {
    }
    visitCalcTerm(node) {
      this.visitLiteralTerm(node);
      this.visitLiteralTerm(node.expr);
    }
    visitCssComment(node) {
    }
    visitCommentDefinition(node) {
    }
    visitMediaExpression(node) {
      this.visitExpressions(node.exprs);
    }
    visitMediaQuery(node) {
      for (let mediaExpr of node.expressions) {
        this.visitMediaExpression(mediaExpr);
      }
    }
    visitDocumentDirective(node) {
      this[_visitNodeList](node.functions);
      this[_visitNodeList](node.groupRuleBody);
    }
    visitSupportsDirective(node) {
      node.condition.visit(this);
      this[_visitNodeList](node.groupRuleBody);
    }
    visitSupportsConditionInParens(node) {
      node.condition.visit(this);
    }
    visitSupportsNegation(node) {
      node.condition.visit(this);
    }
    visitSupportsConjunction(node) {
      this[_visitNodeList](node.conditions);
    }
    visitSupportsDisjunction(node) {
      this[_visitNodeList](node.conditions);
    }
    visitViewportDirective(node) {
      node.declarations.visit(this);
    }
    visitMediaDirective(node) {
      this[_visitNodeList](node.mediaQueries);
      this[_visitNodeList](node.rules);
    }
    visitHostDirective(node) {
      this[_visitNodeList](node.rules);
    }
    visitPageDirective(node) {
      for (let declGroup of node[_declsMargin$]) {
        if (visitor.MarginGroup.is(declGroup)) {
          this.visitMarginGroup(declGroup);
        } else {
          this.visitDeclarationGroup(declGroup);
        }
      }
    }
    visitCharsetDirective(node) {
    }
    visitImportDirective(node) {
      for (let mediaQuery of node.mediaQueries) {
        this.visitMediaQuery(mediaQuery);
      }
    }
    visitKeyFrameDirective(node) {
      this.visitIdentifier(node.name);
      this[_visitNodeList](node[_blocks]);
    }
    visitKeyFrameBlock(node) {
      this.visitExpressions(node[_blockSelectors$]);
      this.visitDeclarationGroup(node[_declarations$]);
    }
    visitFontFaceDirective(node) {
      this.visitDeclarationGroup(node[_declarations$]);
    }
    visitStyletDirective(node) {
      this[_visitNodeList](node.rules);
    }
    visitNamespaceDirective(node) {
    }
    visitVarDefinitionDirective(node) {
      this.visitVarDefinition(node.def);
    }
    visitMixinRulesetDirective(node) {
      this[_visitNodeList](node.rulesets);
    }
    visitMixinDefinition(node) {
    }
    visitMixinDeclarationDirective(node) {
      this.visitDeclarationGroup(node.declarations);
    }
    visitIncludeDirective(node) {
      for (let index = 0; index < dart.notNull(node.args[$length]); index = index + 1) {
        let param = node.args[$_get](index);
        this[_visitNodeList](param);
      }
    }
    visitContentDirective(node) {
    }
    visitRuleSet(node) {
      this.visitSelectorGroup(node[_selectorGroup$]);
      this.visitDeclarationGroup(node[_declarationGroup$]);
    }
    visitDeclarationGroup(node) {
      this[_visitNodeList](node.declarations);
    }
    visitMarginGroup(node) {
      return this.visitDeclarationGroup(node);
    }
    visitDeclaration(node) {
      this.visitIdentifier(node[_property$]);
      if (node[_expression$] != null) node[_expression$].visit(this);
    }
    visitVarDefinition(node) {
      this.visitIdentifier(node[_property$]);
      if (node[_expression$] != null) node[_expression$].visit(this);
    }
    visitIncludeMixinAtDeclaration(node) {
      this.visitIncludeDirective(node.include);
    }
    visitExtendDeclaration(node) {
      this[_visitNodeList](node.selectors);
    }
    visitSelectorGroup(node) {
      this[_visitNodeList](node.selectors);
    }
    visitSelector(node) {
      this[_visitNodeList](node.simpleSelectorSequences);
    }
    visitSimpleSelectorSequence(node) {
      node.simpleSelector.visit(this);
    }
    visitSimpleSelector(node) {
      return dart.dsend(node[_name$0], 'visit', [this]);
    }
    visitNamespaceSelector(node) {
      if (node[_namespace$] != null) dart.dsend(node[_namespace$], 'visit', [this]);
      if (node.nameAsSimpleSelector != null) {
        node.nameAsSimpleSelector.visit(this);
      }
    }
    visitElementSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitAttributeSelector(node) {
      this.visitSimpleSelector(node);
    }
    visitIdSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitClassSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitPseudoClassSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitPseudoElementSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitPseudoClassFunctionSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitPseudoElementFunctionSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitNegationSelector(node) {
      return this.visitSimpleSelector(node);
    }
    visitSelectorExpression(node) {
      this[_visitNodeList](node.expressions);
    }
    visitUnicodeRangeTerm(node) {
    }
    visitLiteralTerm(node) {
    }
    visitHexColorTerm(node) {
    }
    visitNumberTerm(node) {
    }
    visitUnitTerm(node) {
    }
    visitLengthTerm(node) {
      this.visitUnitTerm(node);
    }
    visitPercentageTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitEmTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitExTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitAngleTerm(node) {
      this.visitUnitTerm(node);
    }
    visitTimeTerm(node) {
      this.visitUnitTerm(node);
    }
    visitFreqTerm(node) {
      this.visitUnitTerm(node);
    }
    visitFractionTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitUriTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitResolutionTerm(node) {
      this.visitUnitTerm(node);
    }
    visitChTerm(node) {
      this.visitUnitTerm(node);
    }
    visitRemTerm(node) {
      this.visitUnitTerm(node);
    }
    visitViewportTerm(node) {
      this.visitUnitTerm(node);
    }
    visitFunctionTerm(node) {
      this.visitLiteralTerm(node);
      this.visitExpressions(node[_params$]);
    }
    visitGroupTerm(node) {
      for (let term of node[_terms]) {
        term.visit(this);
      }
    }
    visitItemTerm(node) {
      this.visitNumberTerm(node);
    }
    visitIE8Term(node) {
    }
    visitOperatorSlash(node) {
    }
    visitOperatorComma(node) {
    }
    visitOperatorPlus(node) {
    }
    visitOperatorMinus(node) {
    }
    visitVarUsage(node) {
      this[_visitNodeList](node.defaultValues);
    }
    visitExpressions(node) {
      this[_visitNodeList](node.expressions);
    }
    visitBinaryExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitUnaryExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitIdentifier(node) {
    }
    visitWildcard(node) {
    }
    visitThisOperator(node) {
    }
    visitNegation(node) {
    }
    visitDartStyleExpression(node) {
    }
    visitFontExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitBoxExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitMarginExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitBorderExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitHeightExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitPaddingExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
    visitWidthExpression(node) {
      dart.throw(new core.UnimplementedError.new());
    }
  };
  (visitor.Visitor.new = function() {
    ;
  }).prototype = visitor.Visitor.prototype;
  dart.addTypeTests(visitor.Visitor);
  visitor.Visitor[dart.implements] = () => [visitor.VisitorBase];
  dart.setMethodSignature(visitor.Visitor, () => ({
    __proto__: dart.getMethods(visitor.Visitor.__proto__),
    [_visitNodeList]: dart.fnType(dart.void, [core.List$(visitor.TreeNode)]),
    visitTree: dart.fnType(dart.dynamic, [visitor.StyleSheet]),
    visitStyleSheet: dart.fnType(dart.dynamic, [visitor.StyleSheet]),
    visitNoOp: dart.fnType(dart.dynamic, [visitor.NoOp]),
    visitTopLevelProduction: dart.fnType(dart.dynamic, [visitor.TopLevelProduction]),
    visitDirective: dart.fnType(dart.dynamic, [visitor.Directive]),
    visitCalcTerm: dart.fnType(dart.dynamic, [visitor.CalcTerm]),
    visitCssComment: dart.fnType(dart.dynamic, [visitor.CssComment]),
    visitCommentDefinition: dart.fnType(dart.dynamic, [visitor.CommentDefinition]),
    visitMediaExpression: dart.fnType(dart.dynamic, [visitor.MediaExpression]),
    visitMediaQuery: dart.fnType(dart.dynamic, [visitor.MediaQuery]),
    visitDocumentDirective: dart.fnType(dart.dynamic, [visitor.DocumentDirective]),
    visitSupportsDirective: dart.fnType(dart.dynamic, [visitor.SupportsDirective]),
    visitSupportsConditionInParens: dart.fnType(dart.dynamic, [visitor.SupportsConditionInParens]),
    visitSupportsNegation: dart.fnType(dart.dynamic, [visitor.SupportsNegation]),
    visitSupportsConjunction: dart.fnType(dart.dynamic, [visitor.SupportsConjunction]),
    visitSupportsDisjunction: dart.fnType(dart.dynamic, [visitor.SupportsDisjunction]),
    visitViewportDirective: dart.fnType(dart.dynamic, [visitor.ViewportDirective]),
    visitMediaDirective: dart.fnType(dart.dynamic, [visitor.MediaDirective]),
    visitHostDirective: dart.fnType(dart.dynamic, [visitor.HostDirective]),
    visitPageDirective: dart.fnType(dart.dynamic, [visitor.PageDirective]),
    visitCharsetDirective: dart.fnType(dart.dynamic, [visitor.CharsetDirective]),
    visitImportDirective: dart.fnType(dart.dynamic, [visitor.ImportDirective]),
    visitKeyFrameDirective: dart.fnType(dart.dynamic, [visitor.KeyFrameDirective]),
    visitKeyFrameBlock: dart.fnType(dart.dynamic, [visitor.KeyFrameBlock]),
    visitFontFaceDirective: dart.fnType(dart.dynamic, [visitor.FontFaceDirective]),
    visitStyletDirective: dart.fnType(dart.dynamic, [visitor.StyletDirective]),
    visitNamespaceDirective: dart.fnType(dart.dynamic, [visitor.NamespaceDirective]),
    visitVarDefinitionDirective: dart.fnType(dart.dynamic, [visitor.VarDefinitionDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.dynamic, [visitor.MixinRulesetDirective]),
    visitMixinDefinition: dart.fnType(dart.dynamic, [visitor.MixinDefinition]),
    visitMixinDeclarationDirective: dart.fnType(dart.dynamic, [visitor.MixinDeclarationDirective]),
    visitIncludeDirective: dart.fnType(dart.dynamic, [visitor.IncludeDirective]),
    visitContentDirective: dart.fnType(dart.dynamic, [visitor.ContentDirective]),
    visitRuleSet: dart.fnType(dart.dynamic, [visitor.RuleSet]),
    visitDeclarationGroup: dart.fnType(dart.dynamic, [visitor.DeclarationGroup]),
    visitMarginGroup: dart.fnType(dart.dynamic, [visitor.MarginGroup]),
    visitDeclaration: dart.fnType(dart.dynamic, [visitor.Declaration]),
    visitVarDefinition: dart.fnType(dart.dynamic, [visitor.VarDefinition]),
    visitIncludeMixinAtDeclaration: dart.fnType(dart.dynamic, [visitor.IncludeMixinAtDeclaration]),
    visitExtendDeclaration: dart.fnType(dart.dynamic, [visitor.ExtendDeclaration]),
    visitSelectorGroup: dart.fnType(dart.dynamic, [visitor.SelectorGroup]),
    visitSelector: dart.fnType(dart.dynamic, [visitor.Selector]),
    visitSimpleSelectorSequence: dart.fnType(dart.dynamic, [visitor.SimpleSelectorSequence]),
    visitSimpleSelector: dart.fnType(dart.dynamic, [visitor.SimpleSelector]),
    visitNamespaceSelector: dart.fnType(dart.dynamic, [visitor.NamespaceSelector]),
    visitElementSelector: dart.fnType(dart.dynamic, [visitor.ElementSelector]),
    visitAttributeSelector: dart.fnType(dart.dynamic, [visitor.AttributeSelector]),
    visitIdSelector: dart.fnType(dart.dynamic, [visitor.IdSelector]),
    visitClassSelector: dart.fnType(dart.dynamic, [visitor.ClassSelector]),
    visitPseudoClassSelector: dart.fnType(dart.dynamic, [visitor.PseudoClassSelector]),
    visitPseudoElementSelector: dart.fnType(dart.dynamic, [visitor.PseudoElementSelector]),
    visitPseudoClassFunctionSelector: dart.fnType(dart.dynamic, [visitor.PseudoClassFunctionSelector]),
    visitPseudoElementFunctionSelector: dart.fnType(dart.dynamic, [visitor.PseudoElementFunctionSelector]),
    visitNegationSelector: dart.fnType(dart.dynamic, [visitor.NegationSelector]),
    visitSelectorExpression: dart.fnType(dart.dynamic, [visitor.SelectorExpression]),
    visitUnicodeRangeTerm: dart.fnType(dart.dynamic, [visitor.UnicodeRangeTerm]),
    visitLiteralTerm: dart.fnType(dart.dynamic, [visitor.LiteralTerm]),
    visitHexColorTerm: dart.fnType(dart.dynamic, [visitor.HexColorTerm]),
    visitNumberTerm: dart.fnType(dart.dynamic, [visitor.NumberTerm]),
    visitUnitTerm: dart.fnType(dart.dynamic, [visitor.UnitTerm]),
    visitLengthTerm: dart.fnType(dart.dynamic, [visitor.LengthTerm]),
    visitPercentageTerm: dart.fnType(dart.dynamic, [visitor.PercentageTerm]),
    visitEmTerm: dart.fnType(dart.dynamic, [visitor.EmTerm]),
    visitExTerm: dart.fnType(dart.dynamic, [visitor.ExTerm]),
    visitAngleTerm: dart.fnType(dart.dynamic, [visitor.AngleTerm]),
    visitTimeTerm: dart.fnType(dart.dynamic, [visitor.TimeTerm]),
    visitFreqTerm: dart.fnType(dart.dynamic, [visitor.FreqTerm]),
    visitFractionTerm: dart.fnType(dart.dynamic, [visitor.FractionTerm]),
    visitUriTerm: dart.fnType(dart.dynamic, [visitor.UriTerm]),
    visitResolutionTerm: dart.fnType(dart.dynamic, [visitor.ResolutionTerm]),
    visitChTerm: dart.fnType(dart.dynamic, [visitor.ChTerm]),
    visitRemTerm: dart.fnType(dart.dynamic, [visitor.RemTerm]),
    visitViewportTerm: dart.fnType(dart.dynamic, [visitor.ViewportTerm]),
    visitFunctionTerm: dart.fnType(dart.dynamic, [visitor.FunctionTerm]),
    visitGroupTerm: dart.fnType(dart.dynamic, [visitor.GroupTerm]),
    visitItemTerm: dart.fnType(dart.dynamic, [visitor.ItemTerm]),
    visitIE8Term: dart.fnType(dart.dynamic, [visitor.IE8Term]),
    visitOperatorSlash: dart.fnType(dart.dynamic, [visitor.OperatorSlash]),
    visitOperatorComma: dart.fnType(dart.dynamic, [visitor.OperatorComma]),
    visitOperatorPlus: dart.fnType(dart.dynamic, [visitor.OperatorPlus]),
    visitOperatorMinus: dart.fnType(dart.dynamic, [visitor.OperatorMinus]),
    visitVarUsage: dart.fnType(dart.dynamic, [visitor.VarUsage]),
    visitExpressions: dart.fnType(dart.dynamic, [visitor.Expressions]),
    visitBinaryExpression: dart.fnType(dart.dynamic, [visitor.BinaryExpression]),
    visitUnaryExpression: dart.fnType(dart.dynamic, [visitor.UnaryExpression]),
    visitIdentifier: dart.fnType(dart.dynamic, [visitor.Identifier]),
    visitWildcard: dart.fnType(dart.dynamic, [visitor.Wildcard]),
    visitThisOperator: dart.fnType(dart.dynamic, [visitor.ThisOperator]),
    visitNegation: dart.fnType(dart.dynamic, [visitor.Negation]),
    visitDartStyleExpression: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    visitFontExpression: dart.fnType(dart.dynamic, [visitor.FontExpression]),
    visitBoxExpression: dart.fnType(dart.dynamic, [visitor.BoxExpression]),
    visitMarginExpression: dart.fnType(dart.dynamic, [visitor.MarginExpression]),
    visitBorderExpression: dart.fnType(dart.dynamic, [visitor.BorderExpression]),
    visitHeightExpression: dart.fnType(dart.dynamic, [visitor.HeightExpression]),
    visitPaddingExpression: dart.fnType(dart.dynamic, [visitor.PaddingExpression]),
    visitWidthExpression: dart.fnType(dart.dynamic, [visitor.WidthExpression])
  }));
  dart.setLibraryUri(visitor.Visitor, "package:csslib/visitor.dart");
  parser.ExpandNestedSelectors = class ExpandNestedSelectors extends visitor.Visitor {
    visitRuleSet(node) {
      let oldParent = this[_parentRuleSet];
      let oldNestedSelectorGroups = this[_nestedSelectorGroup];
      if (this[_nestedSelectorGroup] == null) {
        let newSelectors = node.selectorGroup.selectors[$toList]();
        this[_topLevelSelectorGroup] = new visitor.SelectorGroup.new(newSelectors, node.span);
        this[_nestedSelectorGroup] = this[_topLevelSelectorGroup];
      } else {
        this[_nestedSelectorGroup] = this[_mergeToFlatten](node);
      }
      this[_parentRuleSet] = node;
      super.visitRuleSet(node);
      this[_parentRuleSet] = oldParent;
      node.declarationGroup.declarations[$removeWhere](dart.fn(declaration => visitor.RuleSet.is(declaration), TreeNodeTobool()));
      this[_nestedSelectorGroup] = oldNestedSelectorGroups;
      if (this[_parentRuleSet] == null) {
        if (dart.test(this[_expandedRuleSets][$isNotEmpty])) {
          this[_expansions][$_set](node, this[_expandedRuleSets]);
          this[_expandedRuleSets] = JSArrayOfRuleSet().of([]);
        }
        if (!(this[_flatDeclarationGroup] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 226, 14, "_flatDeclarationGroup == null");
        if (!(this[_nestedSelectorGroup] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 227, 14, "_nestedSelectorGroup == null");
      }
    }
    [_mergeToFlatten](node) {
      let nestedSelectors = this[_nestedSelectorGroup].selectors;
      let selectors = node.selectorGroup.selectors;
      let newSelectors = JSArrayOfSelector().of([]);
      for (let selector of selectors) {
        for (let nestedSelector of nestedSelectors) {
          let seq = this[_mergeNestedSelector](nestedSelector.simpleSelectorSequences, selector.simpleSelectorSequences);
          newSelectors[$add](new visitor.Selector.new(seq, node.span));
        }
      }
      return new visitor.SelectorGroup.new(newSelectors, node.span);
    }
    [_mergeNestedSelector](parent, current) {
      let hasThis = current[$any](dart.fn(s => s.simpleSelector.isThis, SimpleSelectorSequenceTobool()));
      let newSequence = JSArrayOfSimpleSelectorSequence().of([]);
      if (!dart.test(hasThis)) {
        newSequence[$addAll](parent);
        newSequence[$addAll](this[_convertToDescendentSequence](current));
      } else {
        for (let sequence of current) {
          if (dart.test(sequence.simpleSelector.isThis)) {
            let hasPrefix = dart.test(newSequence[$isNotEmpty]) && newSequence[$last].simpleSelector.name[$isNotEmpty];
            newSequence[$addAll](hasPrefix ? this[_convertToDescendentSequence](parent) : parent);
          } else {
            newSequence[$add](sequence);
          }
        }
      }
      return newSequence;
    }
    [_convertToDescendentSequence](sequences) {
      if (dart.test(sequences[$isEmpty])) return sequences;
      let newSequences = JSArrayOfSimpleSelectorSequence().of([]);
      let first = sequences[$first];
      newSequences[$add](new visitor.SimpleSelectorSequence.new(first.simpleSelector, first.span, 514));
      newSequences[$addAll](sequences[$skip](1));
      return newSequences;
    }
    visitDeclarationGroup(node) {
      let span = node.span;
      let currentGroup = new visitor.DeclarationGroup.new(JSArrayOfTreeNode().of([]), span);
      let oldGroup = this[_flatDeclarationGroup];
      this[_flatDeclarationGroup] = currentGroup;
      let expandedLength = this[_expandedRuleSets][$length];
      super.visitDeclarationGroup(node);
      this[_flatDeclarationGroup] = oldGroup;
      if (dart.equals(this[_nestedSelectorGroup], this[_topLevelSelectorGroup])) return;
      if (dart.test(currentGroup.declarations[$isEmpty])) return;
      let selectorGroup = this[_nestedSelectorGroup];
      let newRuleSet = new visitor.RuleSet.new(selectorGroup, currentGroup, span);
      if (expandedLength == this[_expandedRuleSets][$length]) {
        this[_expandedRuleSets][$add](newRuleSet);
      } else {
        this[_expandedRuleSets][$insert](expandedLength, newRuleSet);
      }
    }
    visitDeclaration(node) {
      if (this[_parentRuleSet] != null) {
        this[_flatDeclarationGroup].declarations[$add](node);
      }
      super.visitDeclaration(node);
    }
    visitVarDefinition(node) {
      if (this[_parentRuleSet] != null) {
        this[_flatDeclarationGroup].declarations[$add](node);
      }
      super.visitVarDefinition(node);
    }
    visitExtendDeclaration(node) {
      if (this[_parentRuleSet] != null) {
        this[_flatDeclarationGroup].declarations[$add](node);
      }
      super.visitExtendDeclaration(node);
    }
    visitMarginGroup(node) {
      if (this[_parentRuleSet] != null) {
        this[_flatDeclarationGroup].declarations[$add](node);
      }
      super.visitMarginGroup(node);
    }
    flatten(styleSheet) {
      this[_expansions][$forEach](dart.fn((ruleSet, newRules) => {
        let index = styleSheet.topLevels[$indexOf](ruleSet);
        if (index === -1) {
          let found = parser._MediaRulesReplacer.replace(styleSheet, ruleSet, newRules);
          if (!dart.test(found)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 379, 16, "found");
        } else {
          styleSheet.topLevels[$insertAll](dart.notNull(index) + 1, newRules);
        }
      }, RuleSetAndListOfRuleSetToNull()));
      this[_expansions][$clear]();
    }
  };
  (parser.ExpandNestedSelectors.new = function() {
    this[_parentRuleSet] = null;
    this[_topLevelSelectorGroup] = null;
    this[_nestedSelectorGroup] = null;
    this[_flatDeclarationGroup] = null;
    this[_expandedRuleSets] = JSArrayOfRuleSet().of([]);
    this[_expansions] = new (LinkedMapOfRuleSet$ListOfRuleSet()).new();
    ;
  }).prototype = parser.ExpandNestedSelectors.prototype;
  dart.addTypeTests(parser.ExpandNestedSelectors);
  dart.setMethodSignature(parser.ExpandNestedSelectors, () => ({
    __proto__: dart.getMethods(parser.ExpandNestedSelectors.__proto__),
    visitRuleSet: dart.fnType(dart.void, [visitor.RuleSet]),
    [_mergeToFlatten]: dart.fnType(visitor.SelectorGroup, [visitor.RuleSet]),
    [_mergeNestedSelector]: dart.fnType(core.List$(visitor.SimpleSelectorSequence), [core.List$(visitor.SimpleSelectorSequence), core.List$(visitor.SimpleSelectorSequence)]),
    [_convertToDescendentSequence]: dart.fnType(core.List$(visitor.SimpleSelectorSequence), [core.List$(visitor.SimpleSelectorSequence)]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup]),
    visitDeclaration: dart.fnType(dart.void, [visitor.Declaration]),
    visitVarDefinition: dart.fnType(dart.void, [visitor.VarDefinition]),
    visitExtendDeclaration: dart.fnType(dart.void, [visitor.ExtendDeclaration]),
    visitMarginGroup: dart.fnType(dart.void, [visitor.MarginGroup]),
    flatten: dart.fnType(dart.void, [visitor.StyleSheet])
  }));
  dart.setLibraryUri(parser.ExpandNestedSelectors, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.ExpandNestedSelectors, () => ({
    __proto__: dart.getFields(parser.ExpandNestedSelectors.__proto__),
    [_parentRuleSet]: dart.fieldType(visitor.RuleSet),
    [_topLevelSelectorGroup]: dart.fieldType(visitor.SelectorGroup),
    [_nestedSelectorGroup]: dart.fieldType(visitor.SelectorGroup),
    [_flatDeclarationGroup]: dart.fieldType(visitor.DeclarationGroup),
    [_expandedRuleSets]: dart.fieldType(core.List$(visitor.RuleSet)),
    [_expansions]: dart.finalFieldType(core.Map$(visitor.RuleSet, core.List$(visitor.RuleSet)))
  }));
  const _foundAndReplaced = dart.privateName(parser, "_foundAndReplaced");
  const _ruleSet$ = dart.privateName(parser, "_ruleSet");
  const _newRules$ = dart.privateName(parser, "_newRules");
  parser._MediaRulesReplacer = class _MediaRulesReplacer extends visitor.Visitor {
    static replace(styleSheet, ruleSet, newRules) {
      let visitor = new parser._MediaRulesReplacer.new(ruleSet, newRules);
      visitor.visitStyleSheet(styleSheet);
      return visitor[_foundAndReplaced];
    }
    visitMediaDirective(node) {
      let index = node.rules[$indexOf](this[_ruleSet$]);
      if (index !== -1) {
        node.rules[$insertAll](dart.notNull(index) + 1, this[_newRules$]);
        this[_foundAndReplaced] = true;
      }
    }
  };
  (parser._MediaRulesReplacer.new = function(_ruleSet, _newRules) {
    this[_foundAndReplaced] = false;
    this[_ruleSet$] = _ruleSet;
    this[_newRules$] = _newRules;
    ;
  }).prototype = parser._MediaRulesReplacer.prototype;
  dart.addTypeTests(parser._MediaRulesReplacer);
  dart.setLibraryUri(parser._MediaRulesReplacer, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._MediaRulesReplacer, () => ({
    __proto__: dart.getFields(parser._MediaRulesReplacer.__proto__),
    [_ruleSet$]: dart.fieldType(visitor.RuleSet),
    [_newRules$]: dart.fieldType(core.List$(visitor.RuleSet)),
    [_foundAndReplaced]: dart.fieldType(core.bool)
  }));
  const _styleSheet = dart.privateName(parser, "_styleSheet");
  const _anyRulesets = dart.privateName(parser, "_anyRulesets");
  const TopLevelIncludes_map = dart.privateName(parser, "TopLevelIncludes.map");
  const TopLevelIncludes_currDef = dart.privateName(parser, "TopLevelIncludes.currDef");
  parser.TopLevelIncludes = class TopLevelIncludes extends visitor.Visitor {
    get map() {
      return this[map];
    }
    set map(value) {
      super.map = value;
    }
    get currDef() {
      return this[currDef];
    }
    set currDef(value) {
      this[currDef] = value;
    }
    static expand(messages, styleSheets) {
      new parser.TopLevelIncludes.new(messages, styleSheets);
    }
    [_anyRulesets](def) {
      return def.rulesets[$any](dart.fn(rule => visitor.RuleSet.is(rule), TreeNodeTobool()));
    }
    visitStyleSheet(ss) {
      this[_styleSheet] = ss;
      super.visitStyleSheet(ss);
      this[_styleSheet] = null;
    }
    visitIncludeDirective(node) {
      if (dart.test(this.map[$containsKey](node.name))) {
        let mixinDef = this.map[$_get](node.name);
        if (visitor.MixinRulesetDirective.is(mixinDef)) {
          parser._TopLevelIncludeReplacer.replace(this[_messages$], this[_styleSheet], node, mixinDef.rulesets);
        } else if (visitor.MixinRulesetDirective.is(this.currDef) && dart.test(this[_anyRulesets](visitor.MixinRulesetDirective._check(this.currDef)))) {
          let mixinRuleset = visitor.MixinRulesetDirective._check(this.currDef);
          let index = mixinRuleset.rulesets[$indexOf](node);
          mixinRuleset.rulesets[$removeAt](index);
          this[_messages$].warning("Using declaration mixin " + dart.str(node.name) + " as top-level mixin", node.span);
        }
      } else {
        if (visitor.MixinRulesetDirective.is(this.currDef)) {
          let rulesetDirect = visitor.MixinRulesetDirective.as(this.currDef);
          rulesetDirect.rulesets[$removeWhere](dart.fn(entry => {
            if (dart.equals(entry, node)) {
              this[_messages$].warning("Undefined mixin " + dart.str(node.name), node.span);
              return true;
            }
            return false;
          }, TreeNodeTobool()));
        }
      }
      super.visitIncludeDirective(node);
    }
    visitMixinRulesetDirective(node) {
      this.currDef = node;
      super.visitMixinRulesetDirective(node);
      this.map[$_set](node.name, node);
      this.currDef = null;
    }
    visitMixinDeclarationDirective(node) {
      this.currDef = node;
      super.visitMixinDeclarationDirective(node);
      this.map[$_set](node.name, node);
      this.currDef = null;
    }
  };
  (parser.TopLevelIncludes.new = function(_messages, styleSheets) {
    this[_styleSheet] = null;
    this[map] = new (LinkedMapOfString$MixinDefinition()).new();
    this[currDef] = null;
    this[_messages$] = _messages;
    for (let styleSheet of styleSheets) {
      this.visitTree(styleSheet);
    }
  }).prototype = parser.TopLevelIncludes.prototype;
  dart.addTypeTests(parser.TopLevelIncludes);
  const map = TopLevelIncludes_map;
  const currDef = TopLevelIncludes_currDef;
  dart.setMethodSignature(parser.TopLevelIncludes, () => ({
    __proto__: dart.getMethods(parser.TopLevelIncludes.__proto__),
    [_anyRulesets]: dart.fnType(core.bool, [visitor.MixinRulesetDirective]),
    visitStyleSheet: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitIncludeDirective: dart.fnType(dart.void, [visitor.IncludeDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective]),
    visitMixinDeclarationDirective: dart.fnType(dart.void, [visitor.MixinDeclarationDirective])
  }));
  dart.setLibraryUri(parser.TopLevelIncludes, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.TopLevelIncludes, () => ({
    __proto__: dart.getFields(parser.TopLevelIncludes.__proto__),
    [_styleSheet]: dart.fieldType(visitor.StyleSheet),
    [_messages$]: dart.finalFieldType(messages.Messages),
    map: dart.finalFieldType(core.Map$(core.String, visitor.MixinDefinition)),
    currDef: dart.fieldType(visitor.MixinDefinition)
  }));
  const _include$ = dart.privateName(parser, "_include");
  parser._TopLevelIncludeReplacer = class _TopLevelIncludeReplacer extends visitor.Visitor {
    static replace(messages, styleSheet, include, newRules) {
      let visitor = new parser._TopLevelIncludeReplacer.new(messages, include, newRules);
      visitor.visitStyleSheet(styleSheet);
      return visitor[_foundAndReplaced];
    }
    visitStyleSheet(node) {
      let index = node.topLevels[$indexOf](this[_include$]);
      if (index !== -1) {
        node.topLevels[$insertAll](dart.notNull(index) + 1, this[_newRules$]);
        node.topLevels[$replaceRange](index, dart.notNull(index) + 1, JSArrayOfTreeNode().of([new visitor.NoOp.new()]));
        this[_foundAndReplaced] = true;
      }
      super.visitStyleSheet(node);
    }
    visitMixinRulesetDirective(node) {
      let index = node.rulesets[$indexOf](visitor.TreeNode._check(this[_include$]));
      if (index !== -1) {
        node.rulesets[$insertAll](dart.notNull(index) + 1, this[_newRules$]);
        node.rulesets[$replaceRange](index, dart.notNull(index) + 1, JSArrayOfTreeNode().of([new visitor.NoOp.new()]));
        this[_foundAndReplaced] = true;
      }
      super.visitMixinRulesetDirective(node);
    }
  };
  (parser._TopLevelIncludeReplacer.new = function(_messages, _include, _newRules) {
    this[_foundAndReplaced] = false;
    this[_messages$] = _messages;
    this[_include$] = _include;
    this[_newRules$] = _newRules;
    ;
  }).prototype = parser._TopLevelIncludeReplacer.prototype;
  dart.addTypeTests(parser._TopLevelIncludeReplacer);
  dart.setMethodSignature(parser._TopLevelIncludeReplacer, () => ({
    __proto__: dart.getMethods(parser._TopLevelIncludeReplacer.__proto__),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective])
  }));
  dart.setLibraryUri(parser._TopLevelIncludeReplacer, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._TopLevelIncludeReplacer, () => ({
    __proto__: dart.getFields(parser._TopLevelIncludeReplacer.__proto__),
    [_messages$]: dart.finalFieldType(messages.Messages),
    [_include$]: dart.finalFieldType(visitor.IncludeDirective),
    [_newRules$]: dart.finalFieldType(core.List$(visitor.TreeNode)),
    [_foundAndReplaced]: dart.fieldType(core.bool)
  }));
  const _definedArgs = dart.privateName(parser, "_definedArgs");
  const _currExpressions = dart.privateName(parser, "_currExpressions");
  const _currIndex = dart.privateName(parser, "_currIndex");
  const _varDefsAsCallArgs = dart.privateName(parser, "_varDefsAsCallArgs");
  const _addExpression = dart.privateName(parser, "_addExpression");
  const CallMixin_mixinDef = dart.privateName(parser, "CallMixin.mixinDef");
  const CallMixin_varUsages = dart.privateName(parser, "CallMixin.varUsages");
  const CallMixin_varDefs = dart.privateName(parser, "CallMixin.varDefs");
  parser.CallMixin = class CallMixin extends visitor.Visitor {
    get mixinDef() {
      return this[mixinDef$];
    }
    set mixinDef(value) {
      super.mixinDef = value;
    }
    get varUsages() {
      return this[varUsages];
    }
    set varUsages(value) {
      super.varUsages = value;
    }
    get varDefs() {
      return this[varDefs$];
    }
    set varDefs(value) {
      super.varDefs = value;
    }
    transform(callArgs) {
      for (let index = 0; index < dart.notNull(this[_definedArgs][$length]); index = index + 1) {
        let definedArg = this[_definedArgs][$_get](index);
        let varDef = null;
        if (visitor.VarDefinition.is(definedArg)) {
          varDef = definedArg;
        } else if (visitor.VarDefinitionDirective.is(definedArg)) {
          let varDirective = definedArg;
          varDef = varDirective.def;
        }
        let callArg = callArgs[$_get](index);
        let defArgs = this[_varDefsAsCallArgs](callArg);
        if (dart.test(defArgs[$isNotEmpty])) {
          callArgs[$insertAll](index, defArgs);
          callArgs[$removeAt](index + dart.notNull(defArgs[$length]));
          callArg = callArgs[$_get](index);
        }
        let expressions = this.varUsages[$_get](varDef.definedName);
        expressions[$forEach](dart.fn((k, v) => {
          for (let usagesIndex of v) {
            k.expressions[$replaceRange](usagesIndex, dart.notNull(usagesIndex) + 1, callArg);
          }
        }, ExpressionsAndSetOfintToNull()));
      }
      return this.mixinDef.clone();
    }
    [_varDefsAsCallArgs](callArg) {
      let defArgs = JSArrayOfListOfExpression().of([]);
      if (core.List.is(callArg) && visitor.VarUsage.is(callArg[$_get](0))) {
        let varDef = this.varDefs[$_get](dart.dload(callArg[$_get](0), 'name'));
        let expressions = visitor.Expressions.as(varDef.expression).expressions;
        if (!(dart.notNull(expressions[$length]) > 1)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 615, 14, "expressions.length > 1");
        for (let expr of expressions) {
          if (!visitor.OperatorComma.is(expr)) {
            defArgs[$add](JSArrayOfExpression().of([expr]));
          }
        }
      }
      return defArgs;
    }
    visitExpressions(node) {
      let oldExpressions = this[_currExpressions];
      let oldIndex = this[_currIndex];
      this[_currExpressions] = node;
      for (let t2 = this[_currIndex] = 0; dart.notNull(this[_currIndex]) < dart.notNull(node.expressions[$length]); this[_currIndex] = dart.notNull(this[_currIndex]) + 1) {
        node.expressions[$_get](this[_currIndex]).visit(this);
      }
      this[_currIndex] = oldIndex;
      this[_currExpressions] = oldExpressions;
    }
    [_addExpression](expressions) {
      let indexSet = new (_IdentityHashSetOfint()).new();
      indexSet.add(this[_currIndex]);
      expressions[$_set](this[_currExpressions], indexSet);
    }
    visitVarUsage(node) {
      if (!(this[_currIndex] !== -1)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 645, 12, "_currIndex != -1");
      if (!(this[_currExpressions] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/analyzer.dart", 646, 12, "_currExpressions != null");
      if (dart.test(this.varUsages[$containsKey](node.name))) {
        let expressions = this.varUsages[$_get](node.name);
        let allIndexes = expressions[$_get](this[_currExpressions]);
        if (allIndexes == null) {
          this[_addExpression](expressions);
        } else {
          allIndexes.add(this[_currIndex]);
        }
      } else {
        let newExpressions = new (LinkedMapOfExpressions$SetOfint()).new();
        this[_addExpression](newExpressions);
        this.varUsages[$_set](node.name, newExpressions);
      }
      super.visitVarUsage(node);
    }
    visitMixinDeclarationDirective(node) {
      this[_definedArgs] = node.definedArgs;
      super.visitMixinDeclarationDirective(node);
    }
    visitMixinRulesetDirective(node) {
      this[_definedArgs] = node.definedArgs;
      super.visitMixinRulesetDirective(node);
    }
  };
  (parser.CallMixin.new = function(mixinDef, varDefs) {
    if (varDefs === void 0) varDefs = null;
    this[_definedArgs] = null;
    this[_currExpressions] = null;
    this[_currIndex] = -1;
    this[varUsages] = new (LinkedMapOfString$MapOfExpressions$SetOfint()).new();
    this[mixinDef$] = mixinDef;
    this[varDefs$] = varDefs;
    if (visitor.MixinRulesetDirective.is(this.mixinDef)) {
      this.visitMixinRulesetDirective(visitor.MixinRulesetDirective._check(this.mixinDef));
    } else {
      this.visitMixinDeclarationDirective(visitor.MixinDeclarationDirective._check(this.mixinDef));
    }
  }).prototype = parser.CallMixin.prototype;
  dart.addTypeTests(parser.CallMixin);
  const mixinDef$ = CallMixin_mixinDef;
  const varUsages = CallMixin_varUsages;
  const varDefs$ = CallMixin_varDefs;
  dart.setMethodSignature(parser.CallMixin, () => ({
    __proto__: dart.getMethods(parser.CallMixin.__proto__),
    transform: dart.fnType(visitor.MixinDefinition, [core.List$(core.List$(visitor.Expression))]),
    [_varDefsAsCallArgs]: dart.fnType(core.List$(core.List$(visitor.Expression)), [dart.dynamic]),
    visitExpressions: dart.fnType(dart.void, [visitor.Expressions]),
    [_addExpression]: dart.fnType(dart.void, [core.Map$(visitor.Expressions, core.Set$(core.int))]),
    visitVarUsage: dart.fnType(dart.void, [visitor.VarUsage]),
    visitMixinDeclarationDirective: dart.fnType(dart.void, [visitor.MixinDeclarationDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective])
  }));
  dart.setLibraryUri(parser.CallMixin, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.CallMixin, () => ({
    __proto__: dart.getFields(parser.CallMixin.__proto__),
    mixinDef: dart.finalFieldType(visitor.MixinDefinition),
    [_definedArgs]: dart.fieldType(core.List),
    [_currExpressions]: dart.fieldType(visitor.Expressions),
    [_currIndex]: dart.fieldType(core.int),
    varUsages: dart.finalFieldType(core.Map$(core.String, core.Map$(visitor.Expressions, core.Set$(core.int)))),
    varDefs: dart.finalFieldType(core.Map$(core.String, visitor.VarDefinition))
  }));
  const _allIncludes = dart.privateName(parser, "_allIncludes");
  const _createCallDeclMixin = dart.privateName(parser, "_createCallDeclMixin");
  const DeclarationIncludes_map = dart.privateName(parser, "DeclarationIncludes.map");
  const DeclarationIncludes_callMap = dart.privateName(parser, "DeclarationIncludes.callMap");
  const DeclarationIncludes_currDef = dart.privateName(parser, "DeclarationIncludes.currDef");
  const DeclarationIncludes_currDeclGroup = dart.privateName(parser, "DeclarationIncludes.currDeclGroup");
  const DeclarationIncludes_varDefs = dart.privateName(parser, "DeclarationIncludes.varDefs");
  parser.DeclarationIncludes = class DeclarationIncludes extends visitor.Visitor {
    get map() {
      return this[map$];
    }
    set map(value) {
      super.map = value;
    }
    get callMap() {
      return this[callMap];
    }
    set callMap(value) {
      super.callMap = value;
    }
    get currDef() {
      return this[currDef$];
    }
    set currDef(value) {
      this[currDef$] = value;
    }
    get currDeclGroup() {
      return this[currDeclGroup];
    }
    set currDeclGroup(value) {
      this[currDeclGroup] = value;
    }
    get varDefs() {
      return this[varDefs];
    }
    set varDefs(value) {
      super.varDefs = value;
    }
    static expand(messages, styleSheets) {
      new parser.DeclarationIncludes.new(messages, styleSheets);
    }
    [_allIncludes](rulesets) {
      return core.bool._check(dart.dsend(rulesets, 'every', [dart.fn(rule => visitor.IncludeDirective.is(rule) || visitor.NoOp.is(rule), dynamicTobool())]));
    }
    [_createCallDeclMixin](mixinDef) {
      this.callMap[$putIfAbsent](mixinDef.name, dart.fn(() => {
        let t5, t4, t3;
        t3 = this.callMap;
        t4 = mixinDef.name;
        t5 = new parser.CallMixin.new(mixinDef, this.varDefs);
        t3[$_set](t4, t5);
        return t5;
      }, VoidToCallMixin()));
      return this.callMap[$_get](mixinDef.name);
    }
    visitStyleSheet(ss) {
      this[_styleSheet] = ss;
      super.visitStyleSheet(ss);
      this[_styleSheet] = null;
    }
    visitDeclarationGroup(node) {
      this.currDeclGroup = node;
      super.visitDeclarationGroup(node);
      this.currDeclGroup = null;
    }
    visitIncludeMixinAtDeclaration(node) {
      if (dart.test(this.map[$containsKey](node.include.name))) {
        let mixinDef = this.map[$_get](node.include.name);
        if (visitor.MixinRulesetDirective.is(mixinDef)) {
          if (!dart.test(this[_allIncludes](mixinDef.rulesets)) && this.currDeclGroup != null) {
            let index = parser._findInclude(this.currDeclGroup.declarations, node);
            if (index !== -1) {
              this.currDeclGroup.declarations[$replaceRange](index, dart.notNull(index) + 1, JSArrayOfTreeNode().of([new visitor.NoOp.new()]));
            }
            this[_messages$].warning("Using top-level mixin " + dart.str(node.include.name) + " as a declaration", node.span);
          } else {
            let origRulesets = mixinDef.rulesets;
            let rulesets = JSArrayOfDeclaration().of([]);
            if (dart.test(origRulesets[$every](dart.fn(ruleset => visitor.IncludeDirective.is(ruleset), TreeNodeTobool())))) {
              origRulesets[$forEach](dart.fn(ruleset => {
                rulesets[$add](new visitor.IncludeMixinAtDeclaration.new(visitor.IncludeDirective.as(ruleset), ruleset.span));
              }, TreeNodeToNull()));
              parser._IncludeReplacer.replace(this[_styleSheet], node, rulesets);
            }
          }
        }
        if (dart.test(mixinDef.definedArgs[$isNotEmpty]) && dart.test(node.include.args[$isNotEmpty])) {
          let callMixin = this[_createCallDeclMixin](mixinDef);
          mixinDef = callMixin.transform(node.include.args);
        }
        if (visitor.MixinDeclarationDirective.is(mixinDef)) {
          parser._IncludeReplacer.replace(this[_styleSheet], node, mixinDef.declarations.declarations);
        }
      } else {
        this[_messages$].warning("Undefined mixin " + dart.str(node.include.name), node.span);
      }
      super.visitIncludeMixinAtDeclaration(node);
    }
    visitIncludeDirective(node) {
      if (dart.test(this.map[$containsKey](node.name))) {
        let mixinDef = this.map[$_get](node.name);
        if (visitor.MixinDeclarationDirective.is(this.currDef) && visitor.MixinDeclarationDirective.is(mixinDef)) {
          parser._IncludeReplacer.replace(this[_styleSheet], node, mixinDef.declarations.declarations);
        } else if (visitor.MixinDeclarationDirective.is(this.currDef)) {
          let decls = visitor.MixinDeclarationDirective.as(this.currDef).declarations.declarations;
          let index = parser._findInclude(decls, node);
          if (index !== -1) {
            decls[$replaceRange](index, dart.notNull(index) + 1, JSArrayOfTreeNode().of([new visitor.NoOp.new()]));
          }
        }
      }
      super.visitIncludeDirective(node);
    }
    visitMixinRulesetDirective(node) {
      this.currDef = node;
      super.visitMixinRulesetDirective(node);
      this.map[$_set](node.name, node);
      this.currDef = null;
    }
    visitMixinDeclarationDirective(node) {
      this.currDef = node;
      super.visitMixinDeclarationDirective(node);
      this.map[$_set](node.name, node);
      this.currDef = null;
    }
    visitVarDefinition(node) {
      let exprs = visitor.Expressions.as(node.expression).expressions;
      if (dart.notNull(exprs[$length]) > 1) {
        this.varDefs[$_set](node.definedName, node);
      }
      super.visitVarDefinition(node);
    }
    visitVarDefinitionDirective(node) {
      this.visitVarDefinition(node.def);
    }
  };
  (parser.DeclarationIncludes.new = function(_messages, styleSheets) {
    this[_styleSheet] = null;
    this[map$] = new (LinkedMapOfString$MixinDefinition()).new();
    this[callMap] = new (LinkedMapOfString$CallMixin()).new();
    this[currDef$] = null;
    this[currDeclGroup] = null;
    this[varDefs] = new (LinkedMapOfString$VarDefinition()).new();
    this[_messages$] = _messages;
    for (let styleSheet of styleSheets) {
      this.visitTree(styleSheet);
    }
  }).prototype = parser.DeclarationIncludes.prototype;
  dart.addTypeTests(parser.DeclarationIncludes);
  const map$ = DeclarationIncludes_map;
  const callMap = DeclarationIncludes_callMap;
  const currDef$ = DeclarationIncludes_currDef;
  const currDeclGroup = DeclarationIncludes_currDeclGroup;
  const varDefs = DeclarationIncludes_varDefs;
  dart.setMethodSignature(parser.DeclarationIncludes, () => ({
    __proto__: dart.getMethods(parser.DeclarationIncludes.__proto__),
    [_allIncludes]: dart.fnType(core.bool, [dart.dynamic]),
    [_createCallDeclMixin]: dart.fnType(parser.CallMixin, [visitor.MixinDefinition]),
    visitStyleSheet: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup]),
    visitIncludeMixinAtDeclaration: dart.fnType(dart.void, [visitor.IncludeMixinAtDeclaration]),
    visitIncludeDirective: dart.fnType(dart.void, [visitor.IncludeDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective]),
    visitMixinDeclarationDirective: dart.fnType(dart.void, [visitor.MixinDeclarationDirective]),
    visitVarDefinition: dart.fnType(dart.void, [visitor.VarDefinition]),
    visitVarDefinitionDirective: dart.fnType(dart.void, [visitor.VarDefinitionDirective])
  }));
  dart.setLibraryUri(parser.DeclarationIncludes, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.DeclarationIncludes, () => ({
    __proto__: dart.getFields(parser.DeclarationIncludes.__proto__),
    [_styleSheet]: dart.fieldType(visitor.StyleSheet),
    [_messages$]: dart.finalFieldType(messages.Messages),
    map: dart.finalFieldType(core.Map$(core.String, visitor.MixinDefinition)),
    callMap: dart.finalFieldType(core.Map$(core.String, parser.CallMixin)),
    currDef: dart.fieldType(visitor.MixinDefinition),
    currDeclGroup: dart.fieldType(visitor.DeclarationGroup),
    varDefs: dart.finalFieldType(core.Map$(core.String, visitor.VarDefinition))
  }));
  const _newDeclarations$ = dart.privateName(parser, "_newDeclarations");
  parser._IncludeReplacer = class _IncludeReplacer extends visitor.Visitor {
    static replace(ss, include, newDeclarations) {
      let visitor = new parser._IncludeReplacer.new(include, newDeclarations);
      visitor.visitStyleSheet(ss);
    }
    visitDeclarationGroup(node) {
      let index = parser._findInclude(node.declarations, this[_include$]);
      if (index !== -1) {
        node.declarations[$insertAll](dart.notNull(index) + 1, this[_newDeclarations$]);
        node.declarations[$replaceRange](index, dart.notNull(index) + 1, JSArrayOfTreeNode().of([new visitor.NoOp.new()]));
        this[_foundAndReplaced] = true;
      }
      super.visitDeclarationGroup(node);
    }
  };
  (parser._IncludeReplacer.new = function(_include, _newDeclarations) {
    this[_foundAndReplaced] = false;
    this[_include$] = _include;
    this[_newDeclarations$] = _newDeclarations;
    ;
  }).prototype = parser._IncludeReplacer.prototype;
  dart.addTypeTests(parser._IncludeReplacer);
  dart.setMethodSignature(parser._IncludeReplacer, () => ({
    __proto__: dart.getMethods(parser._IncludeReplacer.__proto__),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup])
  }));
  dart.setLibraryUri(parser._IncludeReplacer, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._IncludeReplacer, () => ({
    __proto__: dart.getFields(parser._IncludeReplacer.__proto__),
    [_include$]: dart.finalFieldType(dart.dynamic),
    [_newDeclarations$]: dart.finalFieldType(core.List$(visitor.TreeNode)),
    [_foundAndReplaced]: dart.fieldType(core.bool)
  }));
  const _nodesToRemove = dart.privateName(parser, "_nodesToRemove");
  parser.MixinsAndIncludes = class MixinsAndIncludes extends visitor.Visitor {
    static remove(styleSheet) {
      let t3;
      t3 = new parser.MixinsAndIncludes.new();
      t3.visitStyleSheet(styleSheet);
      t3;
    }
    [_nodesToRemove](node) {
      return visitor.IncludeDirective.is(node) || visitor.MixinDefinition.is(node) || visitor.NoOp.is(node);
    }
    visitStyleSheet(ss) {
      let index = ss.topLevels[$length];
      while ((index = dart.notNull(index) - 1) >= 0) {
        if (dart.test(this[_nodesToRemove](ss.topLevels[$_get](index)))) {
          ss.topLevels[$removeAt](index);
        }
      }
      super.visitStyleSheet(ss);
    }
    visitDeclarationGroup(node) {
      let index = node.declarations[$length];
      while ((index = dart.notNull(index) - 1) >= 0) {
        if (dart.test(this[_nodesToRemove](node.declarations[$_get](index)))) {
          node.declarations[$removeAt](index);
        }
      }
      super.visitDeclarationGroup(node);
    }
  };
  (parser.MixinsAndIncludes.new = function() {
    ;
  }).prototype = parser.MixinsAndIncludes.prototype;
  dart.addTypeTests(parser.MixinsAndIncludes);
  dart.setMethodSignature(parser.MixinsAndIncludes, () => ({
    __proto__: dart.getMethods(parser.MixinsAndIncludes.__proto__),
    [_nodesToRemove]: dart.fnType(core.bool, [dart.dynamic]),
    visitStyleSheet: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup])
  }));
  dart.setLibraryUri(parser.MixinsAndIncludes, "package:csslib/parser.dart");
  const _currSelectorGroup = dart.privateName(parser, "_currSelectorGroup");
  const _currDeclIndex = dart.privateName(parser, "_currDeclIndex");
  const _extendsToRemove = dart.privateName(parser, "_extendsToRemove");
  const AllExtends_inherits = dart.privateName(parser, "AllExtends.inherits");
  parser.AllExtends = class AllExtends extends visitor.Visitor {
    get inherits() {
      return this[inherits];
    }
    set inherits(value) {
      super.inherits = value;
    }
    visitRuleSet(node) {
      let oldSelectorGroup = this[_currSelectorGroup];
      this[_currSelectorGroup] = node.selectorGroup;
      super.visitRuleSet(node);
      this[_currSelectorGroup] = oldSelectorGroup;
    }
    visitExtendDeclaration(node) {
      let inheritName = "";
      for (let selector of node.selectors) {
        inheritName = inheritName + dart.notNull(dart.toString(selector));
      }
      if (dart.test(this.inherits[$containsKey](inheritName))) {
        this.inherits[$_get](inheritName)[$add](this[_currSelectorGroup]);
      } else {
        this.inherits[$_set](inheritName, JSArrayOfSelectorGroup().of([this[_currSelectorGroup]]));
      }
      this[_extendsToRemove][$add](this[_currDeclIndex]);
      super.visitExtendDeclaration(node);
    }
    visitDeclarationGroup(node) {
      let oldDeclIndex = this[_currDeclIndex];
      let decls = node.declarations;
      for (let t3 = this[_currDeclIndex] = 0; dart.notNull(this[_currDeclIndex]) < dart.notNull(decls[$length]); this[_currDeclIndex] = dart.notNull(this[_currDeclIndex]) + 1) {
        decls[$_get](this[_currDeclIndex]).visit(this);
      }
      if (dart.test(this[_extendsToRemove][$isNotEmpty])) {
        let removeTotal = dart.notNull(this[_extendsToRemove][$length]) - 1;
        for (let index = removeTotal; index >= 0; index = index - 1) {
          decls[$removeAt](this[_extendsToRemove][$_get](index));
        }
        this[_extendsToRemove][$clear]();
      }
      this[_currDeclIndex] = oldDeclIndex;
    }
  };
  (parser.AllExtends.new = function() {
    this[inherits] = new (LinkedMapOfString$ListOfSelectorGroup()).new();
    this[_currSelectorGroup] = null;
    this[_currDeclIndex] = null;
    this[_extendsToRemove] = JSArrayOfint().of([]);
    ;
  }).prototype = parser.AllExtends.prototype;
  dart.addTypeTests(parser.AllExtends);
  const inherits = AllExtends_inherits;
  dart.setMethodSignature(parser.AllExtends, () => ({
    __proto__: dart.getMethods(parser.AllExtends.__proto__),
    visitRuleSet: dart.fnType(dart.void, [visitor.RuleSet]),
    visitExtendDeclaration: dart.fnType(dart.void, [visitor.ExtendDeclaration]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup])
  }));
  dart.setLibraryUri(parser.AllExtends, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.AllExtends, () => ({
    __proto__: dart.getFields(parser.AllExtends.__proto__),
    inherits: dart.finalFieldType(core.Map$(core.String, core.List$(visitor.SelectorGroup))),
    [_currSelectorGroup]: dart.fieldType(visitor.SelectorGroup),
    [_currDeclIndex]: dart.fieldType(core.int),
    [_extendsToRemove]: dart.finalFieldType(core.List$(core.int))
  }));
  const _allExtends$ = dart.privateName(parser, "_allExtends");
  parser.InheritExtends = class InheritExtends extends visitor.Visitor {
    visitSelectorGroup(node) {
      for (let selectorsIndex = 0; selectorsIndex < dart.notNull(node.selectors[$length]); selectorsIndex = selectorsIndex + 1) {
        let selectors = node.selectors[$_get](selectorsIndex);
        let isLastNone = false;
        let selectorName = "";
        for (let index = 0; index < dart.notNull(selectors.simpleSelectorSequences[$length]); index = index + 1) {
          let simpleSeq = selectors.simpleSelectorSequences[$_get](index);
          let namePart = dart.toString(simpleSeq.simpleSelector);
          selectorName = dart.test(isLastNone) ? dart.notNull(selectorName) + dart.notNull(namePart) : namePart;
          let matches = this[_allExtends$].inherits[$_get](selectorName);
          if (matches != null) {
            for (let match of matches) {
              let newSelectors = selectors.clone();
              let newSeq = match.selectors[$_get](0).clone();
              if (dart.test(isLastNone)) {
                node.selectors[$add](newSeq);
              } else {
                let orgCombinator = newSelectors.simpleSelectorSequences[$_get](index).combinator;
                newSeq.simpleSelectorSequences[$_get](0).combinator = orgCombinator;
                newSelectors.simpleSelectorSequences[$replaceRange](index, index + 1, newSeq.simpleSelectorSequences);
                node.selectors[$add](newSelectors);
              }
              isLastNone = false;
            }
          } else {
            isLastNone = simpleSeq.isCombinatorNone;
          }
        }
      }
      super.visitSelectorGroup(node);
    }
  };
  (parser.InheritExtends.new = function(_messages, _allExtends) {
    this[_messages$] = _messages;
    this[_allExtends$] = _allExtends;
    ;
  }).prototype = parser.InheritExtends.prototype;
  dart.addTypeTests(parser.InheritExtends);
  dart.setMethodSignature(parser.InheritExtends, () => ({
    __proto__: dart.getMethods(parser.InheritExtends.__proto__),
    visitSelectorGroup: dart.fnType(dart.void, [visitor.SelectorGroup])
  }));
  dart.setLibraryUri(parser.InheritExtends, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.InheritExtends, () => ({
    __proto__: dart.getFields(parser.InheritExtends.__proto__),
    [_messages$]: dart.finalFieldType(messages.Messages),
    [_allExtends$]: dart.finalFieldType(parser.AllExtends)
  }));
  const _allVarDefinitions = dart.privateName(parser, "_allVarDefinitions");
  const PolyFill_allStyleSheets = dart.privateName(parser, "PolyFill.allStyleSheets");
  parser.PolyFill = class PolyFill extends core.Object {
    get allStyleSheets() {
      return this[allStyleSheets];
    }
    set allStyleSheets(value) {
      this[allStyleSheets] = value;
    }
    process(styleSheet, opts) {
      let includes = opts && 'includes' in opts ? opts.includes : null;
      if (includes != null) {
        this.processVarDefinitions(includes);
      }
      this.processVars(styleSheet);
      new parser._RemoveVarDefinitions.new().visitTree(styleSheet);
    }
    processVarDefinitions(includes) {
      let t4;
      for (let include of includes) {
        this[_allVarDefinitions] = (t4 = new parser._VarDefinitionsIncludes.new(this[_allVarDefinitions]), t4.visitTree(include), t4).varDefs;
      }
    }
    processVars(styleSheet) {
      let t4;
      let mainStyleSheetVarDefs = (t4 = new parser._VarDefAndUsage.new(this[_messages$], this[_allVarDefinitions]), t4.visitTree(styleSheet), t4).varDefs;
      mainStyleSheetVarDefs[$forEach](dart.fn((key, value) => {
        for (let _ of visitor.Expressions.as(value.expression).expressions) {
          mainStyleSheetVarDefs[$_set](key, parser._findTerminalVarDefinition(this[_allVarDefinitions], value));
        }
      }, StringAndVarDefinitionToNull()));
    }
  };
  (parser.PolyFill.new = function(_messages) {
    this[_allVarDefinitions] = new (LinkedMapOfString$VarDefinition()).new();
    this[allStyleSheets] = new (_HashSetOfStyleSheet()).new();
    this[_messages$] = _messages;
    ;
  }).prototype = parser.PolyFill.prototype;
  dart.addTypeTests(parser.PolyFill);
  const allStyleSheets = PolyFill_allStyleSheets;
  dart.setMethodSignature(parser.PolyFill, () => ({
    __proto__: dart.getMethods(parser.PolyFill.__proto__),
    process: dart.fnType(dart.void, [visitor.StyleSheet], {includes: core.List$(visitor.StyleSheet)}),
    processVarDefinitions: dart.fnType(dart.void, [core.List$(visitor.StyleSheet)]),
    processVars: dart.fnType(dart.void, [visitor.StyleSheet])
  }));
  dart.setLibraryUri(parser.PolyFill, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.PolyFill, () => ({
    __proto__: dart.getFields(parser.PolyFill.__proto__),
    [_messages$]: dart.finalFieldType(messages.Messages),
    [_allVarDefinitions]: dart.fieldType(core.Map$(core.String, visitor.VarDefinition)),
    allStyleSheets: dart.fieldType(core.Set$(visitor.StyleSheet))
  }));
  parser._VarDefinitionsIncludes = class _VarDefinitionsIncludes extends visitor.Visitor {
    visitTree(tree) {
      this.visitStyleSheet(tree);
    }
    visitVarDefinition(node) {
      this.varDefs[$_set](node.definedName, node);
      super.visitVarDefinition(node);
    }
    visitVarDefinitionDirective(node) {
      this.visitVarDefinition(node.def);
    }
  };
  (parser._VarDefinitionsIncludes.new = function(varDefs) {
    this.varDefs = varDefs;
    ;
  }).prototype = parser._VarDefinitionsIncludes.prototype;
  dart.addTypeTests(parser._VarDefinitionsIncludes);
  dart.setMethodSignature(parser._VarDefinitionsIncludes, () => ({
    __proto__: dart.getMethods(parser._VarDefinitionsIncludes.__proto__),
    visitTree: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitVarDefinitionDirective: dart.fnType(dart.void, [visitor.VarDefinitionDirective])
  }));
  dart.setLibraryUri(parser._VarDefinitionsIncludes, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._VarDefinitionsIncludes, () => ({
    __proto__: dart.getFields(parser._VarDefinitionsIncludes.__proto__),
    varDefs: dart.finalFieldType(core.Map$(core.String, visitor.VarDefinition))
  }));
  const _knownVarDefs$ = dart.privateName(parser, "_knownVarDefs");
  const _resolveVarUsage = dart.privateName(parser, "_resolveVarUsage");
  parser._VarDefAndUsage = class _VarDefAndUsage extends visitor.Visitor {
    visitTree(tree) {
      this.visitStyleSheet(tree);
    }
    visitVarDefinition(node) {
      this.currVarDefinition = node;
      this[_knownVarDefs$][$_set](node.definedName, node);
      this.varDefs[$_set](node.definedName, node);
      super.visitVarDefinition(node);
      this.currVarDefinition = null;
    }
    visitVarDefinitionDirective(node) {
      this.visitVarDefinition(node.def);
    }
    visitExpressions(node) {
      this.currentExpressions = node.expressions;
      super.visitExpressions(node);
      this.currentExpressions = null;
    }
    visitVarUsage(node) {
      if (this.currVarDefinition != null && dart.test(this.currVarDefinition.badUsage)) return;
      let expressions = this.currentExpressions;
      let index = expressions[$indexOf](node);
      if (!(dart.notNull(index) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/polyfill.dart", 126, 12, "index >= 0");
      let def = this[_knownVarDefs$][$_get](node.name);
      if (def != null) {
        if (dart.test(def.badUsage)) {
          expressions[$removeAt](index);
          return;
        }
        this[_resolveVarUsage](this.currentExpressions, index, parser._findTerminalVarDefinition(this[_knownVarDefs$], def));
      } else if (dart.test(node.defaultValues[$any](dart.fn(e => visitor.VarUsage.is(e), ExpressionTobool())))) {
        let terminalDefaults = JSArrayOfExpression().of([]);
        for (let defaultValue of node.defaultValues) {
          terminalDefaults[$addAll](this.resolveUsageTerminal(visitor.VarUsage._check(defaultValue)));
        }
        expressions[$replaceRange](index, dart.notNull(index) + 1, terminalDefaults);
      } else if (dart.test(node.defaultValues[$isNotEmpty])) {
        expressions[$replaceRange](index, dart.notNull(index) + 1, node.defaultValues);
      } else {
        if (this.currVarDefinition != null) {
          this.currVarDefinition.badUsage = true;
          let mainStyleSheetDef = this.varDefs[$_get](node.name);
          if (mainStyleSheetDef != null) {
            this.varDefs[$remove](this.currVarDefinition.property);
          }
        }
        expressions[$removeAt](index);
        this[_messages$].warning("Variable is not defined.", node.span);
      }
      let oldExpressions = this.currentExpressions;
      this.currentExpressions = node.defaultValues;
      super.visitVarUsage(node);
      this.currentExpressions = oldExpressions;
    }
    resolveUsageTerminal(usage) {
      let result = JSArrayOfExpression().of([]);
      let varDef = this[_knownVarDefs$][$_get](usage.name);
      let expressions = null;
      if (varDef == null) {
        expressions = usage.defaultValues;
      } else {
        expressions = visitor.Expressions.as(varDef.expression).expressions;
      }
      for (let expr of core.Iterable._check(expressions)) {
        if (visitor.VarUsage.is(expr)) {
          result[$addAll](this.resolveUsageTerminal(expr));
        }
      }
      if (dart.test(result[$isEmpty]) && varDef != null) {
        result = visitor.Expressions.as(varDef.expression).expressions;
      }
      return result;
    }
    [_resolveVarUsage](expressions, index, def) {
      let defExpressions = visitor.Expressions.as(def.expression).expressions;
      expressions[$replaceRange](index, dart.notNull(index) + 1, defExpressions);
    }
  };
  (parser._VarDefAndUsage.new = function(_messages, _knownVarDefs) {
    this.varDefs = new (LinkedMapOfString$VarDefinition()).new();
    this.currVarDefinition = null;
    this.currentExpressions = null;
    this[_messages$] = _messages;
    this[_knownVarDefs$] = _knownVarDefs;
    ;
  }).prototype = parser._VarDefAndUsage.prototype;
  dart.addTypeTests(parser._VarDefAndUsage);
  dart.setMethodSignature(parser._VarDefAndUsage, () => ({
    __proto__: dart.getMethods(parser._VarDefAndUsage.__proto__),
    visitTree: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitVarDefinitionDirective: dart.fnType(dart.void, [visitor.VarDefinitionDirective]),
    visitExpressions: dart.fnType(dart.void, [visitor.Expressions]),
    visitVarUsage: dart.fnType(dart.void, [visitor.VarUsage]),
    resolveUsageTerminal: dart.fnType(core.List$(visitor.Expression), [visitor.VarUsage]),
    [_resolveVarUsage]: dart.fnType(dart.dynamic, [core.List$(visitor.Expression), core.int, visitor.VarDefinition])
  }));
  dart.setLibraryUri(parser._VarDefAndUsage, "package:csslib/parser.dart");
  dart.setFieldSignature(parser._VarDefAndUsage, () => ({
    __proto__: dart.getFields(parser._VarDefAndUsage.__proto__),
    [_messages$]: dart.finalFieldType(messages.Messages),
    [_knownVarDefs$]: dart.finalFieldType(core.Map$(core.String, visitor.VarDefinition)),
    varDefs: dart.finalFieldType(core.Map$(core.String, visitor.VarDefinition)),
    currVarDefinition: dart.fieldType(visitor.VarDefinition),
    currentExpressions: dart.fieldType(core.List$(visitor.Expression))
  }));
  parser._RemoveVarDefinitions = class _RemoveVarDefinitions extends visitor.Visitor {
    visitTree(tree) {
      this.visitStyleSheet(tree);
    }
    visitStyleSheet(ss) {
      ss.topLevels[$removeWhere](dart.fn(e => visitor.VarDefinitionDirective.is(e), TreeNodeTobool()));
      super.visitStyleSheet(ss);
    }
    visitDeclarationGroup(node) {
      node.declarations[$removeWhere](dart.fn(e => visitor.VarDefinition.is(e), TreeNodeTobool()));
      super.visitDeclarationGroup(node);
    }
  };
  (parser._RemoveVarDefinitions.new = function() {
    ;
  }).prototype = parser._RemoveVarDefinitions.prototype;
  dart.addTypeTests(parser._RemoveVarDefinitions);
  dart.setMethodSignature(parser._RemoveVarDefinitions, () => ({
    __proto__: dart.getMethods(parser._RemoveVarDefinitions.__proto__),
    visitTree: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitStyleSheet: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup])
  }));
  dart.setLibraryUri(parser._RemoveVarDefinitions, "package:csslib/parser.dart");
  parser._StyleProperty = class _StyleProperty extends core.Object {};
  (parser._StyleProperty.new = function() {
    ;
  }).prototype = parser._StyleProperty.prototype;
  dart.addTypeTests(parser._StyleProperty);
  dart.setLibraryUri(parser._StyleProperty, "package:csslib/parser.dart");
  parser.ColorBase = class ColorBase extends core.Object {};
  (parser.ColorBase.new = function() {
    ;
  }).prototype = parser.ColorBase.prototype;
  dart.addTypeTests(parser.ColorBase);
  dart.setLibraryUri(parser.ColorBase, "package:csslib/parser.dart");
  const _argb = dart.privateName(parser, "_argb");
  const Color__argb = dart.privateName(parser, "Color._argb");
  let C6;
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
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C47;
  let C48;
  let C49;
  let C50;
  let C51;
  let C52;
  let C53;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C79;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C85;
  let C86;
  let C87;
  let C88;
  let C89;
  let C90;
  let C91;
  let C92;
  let C93;
  let C94;
  let C95;
  let C96;
  let C97;
  let C98;
  let C99;
  let C100;
  let C101;
  let C102;
  let C103;
  let C104;
  let C105;
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  let C111;
  let C112;
  let C113;
  let C114;
  let C115;
  let C116;
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C122;
  let C123;
  let C124;
  let C125;
  let C126;
  let C127;
  let C128;
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C135;
  let C136;
  let C137;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  parser.Color = class Color extends core.Object {
    get [_argb]() {
      return this[_argb$];
    }
    set [_argb](value) {
      super[_argb] = value;
    }
    toString() {
      return this.cssExpression;
    }
    get cssExpression() {
      if (this[_argb].length === 6) {
        return "#" + dart.str(this[_argb]);
      } else {
        let alpha = parser.Color.hexToInt(this[_argb][$substring](0, 2));
        let a = (dart.notNull(alpha) / 255)[$toStringAsPrecision](2);
        let r = parser.Color.hexToInt(this[_argb][$substring](2, 4));
        let g = parser.Color.hexToInt(this[_argb][$substring](4, 6));
        let b = parser.Color.hexToInt(this[_argb][$substring](6, 8));
        return "rgba(" + dart.str(r) + "," + dart.str(g) + "," + dart.str(b) + "," + a + ")";
      }
    }
    get rgba() {
      let nextIndex = 0;
      let a = null;
      if (this[_argb].length === 8) {
        let alpha = parser.Color.hexToInt(this[_argb][$substring](nextIndex, nextIndex + 2));
        a = core.double.parse((dart.notNull(alpha) / 255)[$toStringAsPrecision](2));
        nextIndex = nextIndex + 2;
      }
      let r = parser.Color.hexToInt(this[_argb][$substring](nextIndex, nextIndex + 2));
      nextIndex = nextIndex + 2;
      let g = parser.Color.hexToInt(this[_argb][$substring](nextIndex, nextIndex + 2));
      nextIndex = nextIndex + 2;
      let b = parser.Color.hexToInt(this[_argb][$substring](nextIndex, nextIndex + 2));
      return new parser.Rgba.new(r, g, b, a);
    }
    get hsla() {
      return parser.Hsla.fromRgba(this.rgba);
    }
    get argbValue() {
      return parser.Color.hexToInt(this[_argb]);
    }
    _equals(other) {
      if (other == null) return false;
      return parser.Color.equal(this, other);
    }
    toHexArgbString() {
      return this[_argb];
    }
    darker(amount) {
      let newRgba = parser.Color._createNewTintShadeFromRgba(this.rgba, -dart.notNull(amount));
      return new parser.Color.hex(dart.str(newRgba.toHexArgbString()));
    }
    lighter(amount) {
      let newRgba = parser.Color._createNewTintShadeFromRgba(this.rgba, amount);
      return new parser.Color.hex(dart.str(newRgba.toHexArgbString()));
    }
    static equal(curr, other) {
      if (parser.Color.is(other)) {
        let o = other;
        return o.toHexArgbString() == curr.toHexArgbString();
      } else if (parser.Rgba.is(other)) {
        let rgb = other;
        return rgb.toHexArgbString() == curr.toHexArgbString();
      } else if (parser.Hsla.is(other)) {
        let hsla = other;
        return hsla.toHexArgbString() == curr.toHexArgbString();
      } else {
        return false;
      }
    }
    get hashCode() {
      return dart.hashCode(this[_argb]);
    }
    static _rgbToArgbString(rgba, alpha) {
      let a = null;
      if (alpha != null) {
        a = (dart.notNull(parser.Color._clamp(alpha, 0, 1)) * 255)[$round]();
      }
      let r = (dart.notNull(rgba) & 16711680) >> 16;
      let g = (dart.notNull(rgba) & 65280) >> 8;
      let b = dart.notNull(rgba) & 255;
      return parser.Color.convertToHexString(r, g, b, a);
    }
    static _convertCssToArgb(value) {
      let color = value[$trim]()[$replaceAll]("\\s", "");
      if (color[$_get](0) === "#") {
        let v = color[$substring](1);
        parser.Color.hexToInt(v);
        return v;
      } else if (color[$isNotEmpty] && color[$_get](color.length - 1) === ")") {
        let type = null;
        if (color[$indexOf]("rgb(") === 0 || color[$indexOf]("RGB(") === 0) {
          color = color[$substring](4);
          type = 1;
        } else if (color[$indexOf]("rgba(") === 0 || color[$indexOf]("RGBA(") === 0) {
          type = 2;
          color = color[$substring](5);
        } else if (color[$indexOf]("hsl(") === 0 || color[$indexOf]("HSL(") === 0) {
          type = 3;
          color = color[$substring](4);
        } else if (color[$indexOf]("hsla(") === 0 || color[$indexOf]("HSLA(") === 0) {
          type = 4;
          color = color[$substring](5);
        } else {
          dart.throw(new core.UnsupportedError.new("CSS property not implemented"));
        }
        color = color[$substring](0, color.length - 1);
        let args = JSArrayOfnum().of([]);
        let params = color[$split](",");
        for (let param of params) {
          args[$add](core.double.parse(param));
        }
        switch (type) {
          case 1:
          {
            return parser.Color.convertToHexString(dart.asInt(args[$_get](0)), dart.asInt(args[$_get](1)), dart.asInt(args[$_get](2)));
          }
          case 2:
          {
            return parser.Color.convertToHexString(dart.asInt(args[$_get](0)), dart.asInt(args[$_get](1)), dart.asInt(args[$_get](2)), args[$_get](3));
          }
          case 3:
          {
            return new parser.Hsla.new(args[$_get](0), args[$_get](1), args[$_get](2)).toHexArgbString();
          }
          case 4:
          {
            return new parser.Hsla.new(args[$_get](0), args[$_get](1), args[$_get](2), args[$_get](3)).toHexArgbString();
          }
          default:
          {
            if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/property.dart", 263, 18, "false");
            break;
          }
        }
      }
      return null;
    }
    static hexToInt(hex) {
      return core.int.parse(hex, {radix: 16});
    }
    static convertToHexString(r, g, b, a) {
      if (a === void 0) a = null;
      let rHex = parser.Color._numAs2DigitHex(parser.Color._clamp(r, 0, 255));
      let gHex = parser.Color._numAs2DigitHex(parser.Color._clamp(g, 0, 255));
      let bHex = parser.Color._numAs2DigitHex(parser.Color._clamp(b, 0, 255));
      let aHex = a != null ? parser.Color._numAs2DigitHex((dart.notNull(parser.Color._clamp(a, 0, 1)) * 255)[$round]()) : "";
      return (dart.str(aHex) + dart.str(rHex) + dart.str(gHex) + dart.str(bHex))[$toLowerCase]();
    }
    static _numAs2DigitHex(v) {
      let hex = v[$toInt]()[$toRadixString](16);
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return hex;
    }
    static _clamp(value, min, max) {
      return math.max(core.num, math.min(core.num, max, value), min);
    }
    static _createNewTintShadeFromRgba(rgba, amount) {
      let r = null;
      let g = null;
      let b = null;
      let tintShade = parser.Color._clamp(amount, -1, 1);
      if (dart.notNull(amount) < 0 && rgba.r === 255 && rgba.g === 255 && rgba.b === 255) {
        r = dart.asInt(parser.Color._clamp((255 + 255 * dart.notNull(tintShade))[$round]()[$toInt](), 0, 255));
        g = dart.asInt(parser.Color._clamp((255 + 255 * dart.notNull(tintShade))[$round]()[$toInt](), 0, 255));
        b = dart.asInt(parser.Color._clamp((255 + 255 * dart.notNull(tintShade))[$round]()[$toInt](), 0, 255));
      } else {
        r = parser.Color._changeTintShadeColor(rgba.r, tintShade)[$round]()[$toInt]();
        g = parser.Color._changeTintShadeColor(rgba.g, tintShade)[$round]()[$toInt]();
        b = parser.Color._changeTintShadeColor(rgba.b, tintShade)[$round]()[$toInt]();
      }
      return new parser.Rgba.new(r, g, b, rgba.a);
    }
    static _changeTintShadeColor(v, delta) {
      return parser.Color._clamp(((1 - dart.notNull(delta)) * dart.notNull(v) + dart.notNull(delta) * 255)[$round](), 0, 255);
    }
  };
  (parser.Color.new = function(rgb, alpha) {
    if (alpha === void 0) alpha = null;
    this[_argb$] = parser.Color._rgbToArgbString(rgb, alpha);
    ;
  }).prototype = parser.Color.prototype;
  (parser.Color.createRgba = function(red, green, blue, alpha) {
    if (alpha === void 0) alpha = null;
    this[_argb$] = parser.Color.convertToHexString(dart.asInt(parser.Color._clamp(red, 0, 255)), dart.asInt(parser.Color._clamp(green, 0, 255)), dart.asInt(parser.Color._clamp(blue, 0, 255)), alpha != null ? parser.Color._clamp(alpha, 0, 1) : alpha);
    ;
  }).prototype = parser.Color.prototype;
  (parser.Color.css = function(color) {
    this[_argb$] = parser.Color._convertCssToArgb(color);
    ;
  }).prototype = parser.Color.prototype;
  (parser.Color.createHsla = function(hueDegree, saturationPercent, lightnessPercent, alpha) {
    if (alpha === void 0) alpha = null;
    this[_argb$] = new parser.Hsla.new(dart.notNull(parser.Color._clamp(hueDegree, 0, 360)) / 360, dart.notNull(parser.Color._clamp(saturationPercent, 0, 100)) / 100, dart.notNull(parser.Color._clamp(lightnessPercent, 0, 100)) / 100, alpha != null ? parser.Color._clamp(alpha, 0, 1) : alpha).toHexArgbString();
    ;
  }).prototype = parser.Color.prototype;
  (parser.Color.hslaRaw = function(hue, saturation, lightness, alpha) {
    if (alpha === void 0) alpha = null;
    this[_argb$] = new parser.Hsla.new(parser.Color._clamp(hue, 0, 1), parser.Color._clamp(saturation, 0, 1), parser.Color._clamp(lightness, 0, 1), alpha != null ? parser.Color._clamp(alpha, 0, 1) : alpha).toHexArgbString();
    ;
  }).prototype = parser.Color.prototype;
  (parser.Color.hex = function(_argb) {
    this[_argb$] = _argb;
    ;
  }).prototype = parser.Color.prototype;
  dart.addTypeTests(parser.Color);
  const _argb$ = Color__argb;
  parser.Color[dart.implements] = () => [parser._StyleProperty, parser.ColorBase];
  dart.setMethodSignature(parser.Color, () => ({
    __proto__: dart.getMethods(parser.Color.__proto__),
    toHexArgbString: dart.fnType(core.String, []),
    darker: dart.fnType(parser.Color, [core.num]),
    lighter: dart.fnType(parser.Color, [core.num])
  }));
  dart.setGetterSignature(parser.Color, () => ({
    __proto__: dart.getGetters(parser.Color.__proto__),
    cssExpression: core.String,
    rgba: parser.Rgba,
    hsla: parser.Hsla,
    argbValue: core.int
  }));
  dart.setLibraryUri(parser.Color, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Color, () => ({
    __proto__: dart.getFields(parser.Color.__proto__),
    [_argb]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(parser.Color, ['toString', '_equals']);
  dart.defineExtensionAccessors(parser.Color, ['hashCode']);
  dart.defineLazy(parser.Color, {
    /*parser.Color._rgbCss*/get _rgbCss() {
      return 1;
    },
    /*parser.Color._rgbaCss*/get _rgbaCss() {
      return 2;
    },
    /*parser.Color._hslCss*/get _hslCss() {
      return 3;
    },
    /*parser.Color._hslaCss*/get _hslaCss() {
      return 4;
    },
    /*parser.Color.transparent*/get transparent() {
      return C6 || CT.C6;
    },
    /*parser.Color.aliceBlue*/get aliceBlue() {
      return C7 || CT.C7;
    },
    /*parser.Color.antiqueWhite*/get antiqueWhite() {
      return C8 || CT.C8;
    },
    /*parser.Color.aqua*/get aqua() {
      return C9 || CT.C9;
    },
    /*parser.Color.aquaMarine*/get aquaMarine() {
      return C10 || CT.C10;
    },
    /*parser.Color.azure*/get azure() {
      return C11 || CT.C11;
    },
    /*parser.Color.beige*/get beige() {
      return C12 || CT.C12;
    },
    /*parser.Color.bisque*/get bisque() {
      return C13 || CT.C13;
    },
    /*parser.Color.black*/get black() {
      return C14 || CT.C14;
    },
    /*parser.Color.blanchedAlmond*/get blanchedAlmond() {
      return C15 || CT.C15;
    },
    /*parser.Color.blue*/get blue() {
      return C16 || CT.C16;
    },
    /*parser.Color.blueViolet*/get blueViolet() {
      return C17 || CT.C17;
    },
    /*parser.Color.brown*/get brown() {
      return C18 || CT.C18;
    },
    /*parser.Color.burlyWood*/get burlyWood() {
      return C19 || CT.C19;
    },
    /*parser.Color.cadetBlue*/get cadetBlue() {
      return C20 || CT.C20;
    },
    /*parser.Color.chartreuse*/get chartreuse() {
      return C21 || CT.C21;
    },
    /*parser.Color.chocolate*/get chocolate() {
      return C22 || CT.C22;
    },
    /*parser.Color.coral*/get coral() {
      return C23 || CT.C23;
    },
    /*parser.Color.cornFlowerBlue*/get cornFlowerBlue() {
      return C24 || CT.C24;
    },
    /*parser.Color.cornSilk*/get cornSilk() {
      return C25 || CT.C25;
    },
    /*parser.Color.crimson*/get crimson() {
      return C26 || CT.C26;
    },
    /*parser.Color.cyan*/get cyan() {
      return C9 || CT.C9;
    },
    /*parser.Color.darkBlue*/get darkBlue() {
      return C27 || CT.C27;
    },
    /*parser.Color.darkCyan*/get darkCyan() {
      return C28 || CT.C28;
    },
    /*parser.Color.darkGoldenRod*/get darkGoldenRod() {
      return C29 || CT.C29;
    },
    /*parser.Color.darkGray*/get darkGray() {
      return C30 || CT.C30;
    },
    /*parser.Color.darkGreen*/get darkGreen() {
      return C31 || CT.C31;
    },
    /*parser.Color.darkGrey*/get darkGrey() {
      return C30 || CT.C30;
    },
    /*parser.Color.darkKhaki*/get darkKhaki() {
      return C32 || CT.C32;
    },
    /*parser.Color.darkMagenta*/get darkMagenta() {
      return C33 || CT.C33;
    },
    /*parser.Color.darkOliveGreen*/get darkOliveGreen() {
      return C34 || CT.C34;
    },
    /*parser.Color.darkOrange*/get darkOrange() {
      return C35 || CT.C35;
    },
    /*parser.Color.darkOrchid*/get darkOrchid() {
      return C36 || CT.C36;
    },
    /*parser.Color.darkRed*/get darkRed() {
      return C37 || CT.C37;
    },
    /*parser.Color.darkSalmon*/get darkSalmon() {
      return C38 || CT.C38;
    },
    /*parser.Color.darkSeaGreen*/get darkSeaGreen() {
      return C39 || CT.C39;
    },
    /*parser.Color.darkSlateBlue*/get darkSlateBlue() {
      return C40 || CT.C40;
    },
    /*parser.Color.darkSlateGray*/get darkSlateGray() {
      return C41 || CT.C41;
    },
    /*parser.Color.darkSlateGrey*/get darkSlateGrey() {
      return C41 || CT.C41;
    },
    /*parser.Color.darkTurquoise*/get darkTurquoise() {
      return C42 || CT.C42;
    },
    /*parser.Color.darkViolet*/get darkViolet() {
      return C43 || CT.C43;
    },
    /*parser.Color.deepPink*/get deepPink() {
      return C44 || CT.C44;
    },
    /*parser.Color.deepSkyBlue*/get deepSkyBlue() {
      return C45 || CT.C45;
    },
    /*parser.Color.dimGray*/get dimGray() {
      return C46 || CT.C46;
    },
    /*parser.Color.dimGrey*/get dimGrey() {
      return C46 || CT.C46;
    },
    /*parser.Color.dodgerBlue*/get dodgerBlue() {
      return C47 || CT.C47;
    },
    /*parser.Color.fireBrick*/get fireBrick() {
      return C48 || CT.C48;
    },
    /*parser.Color.floralWhite*/get floralWhite() {
      return C49 || CT.C49;
    },
    /*parser.Color.forestGreen*/get forestGreen() {
      return C50 || CT.C50;
    },
    /*parser.Color.fuchsia*/get fuchsia() {
      return C51 || CT.C51;
    },
    /*parser.Color.gainsboro*/get gainsboro() {
      return C52 || CT.C52;
    },
    /*parser.Color.ghostWhite*/get ghostWhite() {
      return C53 || CT.C53;
    },
    /*parser.Color.gold*/get gold() {
      return C54 || CT.C54;
    },
    /*parser.Color.goldenRod*/get goldenRod() {
      return C55 || CT.C55;
    },
    /*parser.Color.gray*/get gray() {
      return C56 || CT.C56;
    },
    /*parser.Color.green*/get green() {
      return C57 || CT.C57;
    },
    /*parser.Color.greenYellow*/get greenYellow() {
      return C58 || CT.C58;
    },
    /*parser.Color.grey*/get grey() {
      return C56 || CT.C56;
    },
    /*parser.Color.honeydew*/get honeydew() {
      return C59 || CT.C59;
    },
    /*parser.Color.hotPink*/get hotPink() {
      return C60 || CT.C60;
    },
    /*parser.Color.indianRed*/get indianRed() {
      return C61 || CT.C61;
    },
    /*parser.Color.indigo*/get indigo() {
      return C62 || CT.C62;
    },
    /*parser.Color.ivory*/get ivory() {
      return C63 || CT.C63;
    },
    /*parser.Color.khaki*/get khaki() {
      return C64 || CT.C64;
    },
    /*parser.Color.lavender*/get lavender() {
      return C65 || CT.C65;
    },
    /*parser.Color.lavenderBlush*/get lavenderBlush() {
      return C66 || CT.C66;
    },
    /*parser.Color.lawnGreen*/get lawnGreen() {
      return C67 || CT.C67;
    },
    /*parser.Color.lemonChiffon*/get lemonChiffon() {
      return C68 || CT.C68;
    },
    /*parser.Color.lightBlue*/get lightBlue() {
      return C69 || CT.C69;
    },
    /*parser.Color.lightCoral*/get lightCoral() {
      return C70 || CT.C70;
    },
    /*parser.Color.lightCyan*/get lightCyan() {
      return C71 || CT.C71;
    },
    /*parser.Color.lightGoldenRodYellow*/get lightGoldenRodYellow() {
      return C72 || CT.C72;
    },
    /*parser.Color.lightGray*/get lightGray() {
      return C73 || CT.C73;
    },
    /*parser.Color.lightGreen*/get lightGreen() {
      return C74 || CT.C74;
    },
    /*parser.Color.lightGrey*/get lightGrey() {
      return C73 || CT.C73;
    },
    /*parser.Color.lightPink*/get lightPink() {
      return C75 || CT.C75;
    },
    /*parser.Color.lightSalmon*/get lightSalmon() {
      return C76 || CT.C76;
    },
    /*parser.Color.lightSeaGreen*/get lightSeaGreen() {
      return C77 || CT.C77;
    },
    /*parser.Color.lightSkyBlue*/get lightSkyBlue() {
      return C78 || CT.C78;
    },
    /*parser.Color.lightSlateGray*/get lightSlateGray() {
      return C79 || CT.C79;
    },
    /*parser.Color.lightSlateGrey*/get lightSlateGrey() {
      return C79 || CT.C79;
    },
    /*parser.Color.lightSteelBlue*/get lightSteelBlue() {
      return C80 || CT.C80;
    },
    /*parser.Color.lightYellow*/get lightYellow() {
      return C81 || CT.C81;
    },
    /*parser.Color.lime*/get lime() {
      return C82 || CT.C82;
    },
    /*parser.Color.limeGreen*/get limeGreen() {
      return C83 || CT.C83;
    },
    /*parser.Color.linen*/get linen() {
      return C84 || CT.C84;
    },
    /*parser.Color.magenta*/get magenta() {
      return C51 || CT.C51;
    },
    /*parser.Color.maroon*/get maroon() {
      return C85 || CT.C85;
    },
    /*parser.Color.mediumAquaMarine*/get mediumAquaMarine() {
      return C86 || CT.C86;
    },
    /*parser.Color.mediumBlue*/get mediumBlue() {
      return C87 || CT.C87;
    },
    /*parser.Color.mediumOrchid*/get mediumOrchid() {
      return C88 || CT.C88;
    },
    /*parser.Color.mediumPurple*/get mediumPurple() {
      return C89 || CT.C89;
    },
    /*parser.Color.mediumSeaGreen*/get mediumSeaGreen() {
      return C90 || CT.C90;
    },
    /*parser.Color.mediumSlateBlue*/get mediumSlateBlue() {
      return C91 || CT.C91;
    },
    /*parser.Color.mediumSpringGreen*/get mediumSpringGreen() {
      return C92 || CT.C92;
    },
    /*parser.Color.mediumTurquoise*/get mediumTurquoise() {
      return C93 || CT.C93;
    },
    /*parser.Color.mediumVioletRed*/get mediumVioletRed() {
      return C94 || CT.C94;
    },
    /*parser.Color.midnightBlue*/get midnightBlue() {
      return C95 || CT.C95;
    },
    /*parser.Color.mintCream*/get mintCream() {
      return C96 || CT.C96;
    },
    /*parser.Color.mistyRose*/get mistyRose() {
      return C97 || CT.C97;
    },
    /*parser.Color.moccasin*/get moccasin() {
      return C98 || CT.C98;
    },
    /*parser.Color.navajoWhite*/get navajoWhite() {
      return C99 || CT.C99;
    },
    /*parser.Color.navy*/get navy() {
      return C100 || CT.C100;
    },
    /*parser.Color.oldLace*/get oldLace() {
      return C101 || CT.C101;
    },
    /*parser.Color.olive*/get olive() {
      return C102 || CT.C102;
    },
    /*parser.Color.oliveDrab*/get oliveDrab() {
      return C103 || CT.C103;
    },
    /*parser.Color.orange*/get orange() {
      return C104 || CT.C104;
    },
    /*parser.Color.orangeRed*/get orangeRed() {
      return C105 || CT.C105;
    },
    /*parser.Color.orchid*/get orchid() {
      return C106 || CT.C106;
    },
    /*parser.Color.paleGoldenRod*/get paleGoldenRod() {
      return C107 || CT.C107;
    },
    /*parser.Color.paleGreen*/get paleGreen() {
      return C108 || CT.C108;
    },
    /*parser.Color.paleTurquoise*/get paleTurquoise() {
      return C109 || CT.C109;
    },
    /*parser.Color.paleVioletRed*/get paleVioletRed() {
      return C110 || CT.C110;
    },
    /*parser.Color.papayaWhip*/get papayaWhip() {
      return C111 || CT.C111;
    },
    /*parser.Color.peachPuff*/get peachPuff() {
      return C112 || CT.C112;
    },
    /*parser.Color.peru*/get peru() {
      return C113 || CT.C113;
    },
    /*parser.Color.pink*/get pink() {
      return C114 || CT.C114;
    },
    /*parser.Color.plum*/get plum() {
      return C115 || CT.C115;
    },
    /*parser.Color.powderBlue*/get powderBlue() {
      return C116 || CT.C116;
    },
    /*parser.Color.purple*/get purple() {
      return C117 || CT.C117;
    },
    /*parser.Color.red*/get red() {
      return C118 || CT.C118;
    },
    /*parser.Color.rosyBrown*/get rosyBrown() {
      return C119 || CT.C119;
    },
    /*parser.Color.royalBlue*/get royalBlue() {
      return C120 || CT.C120;
    },
    /*parser.Color.saddleBrown*/get saddleBrown() {
      return C121 || CT.C121;
    },
    /*parser.Color.salmon*/get salmon() {
      return C122 || CT.C122;
    },
    /*parser.Color.sandyBrown*/get sandyBrown() {
      return C123 || CT.C123;
    },
    /*parser.Color.seaGreen*/get seaGreen() {
      return C124 || CT.C124;
    },
    /*parser.Color.seashell*/get seashell() {
      return C125 || CT.C125;
    },
    /*parser.Color.sienna*/get sienna() {
      return C126 || CT.C126;
    },
    /*parser.Color.silver*/get silver() {
      return C127 || CT.C127;
    },
    /*parser.Color.skyBlue*/get skyBlue() {
      return C128 || CT.C128;
    },
    /*parser.Color.slateBlue*/get slateBlue() {
      return C129 || CT.C129;
    },
    /*parser.Color.slateGray*/get slateGray() {
      return C130 || CT.C130;
    },
    /*parser.Color.slateGrey*/get slateGrey() {
      return C130 || CT.C130;
    },
    /*parser.Color.snow*/get snow() {
      return C131 || CT.C131;
    },
    /*parser.Color.springGreen*/get springGreen() {
      return C132 || CT.C132;
    },
    /*parser.Color.steelBlue*/get steelBlue() {
      return C133 || CT.C133;
    },
    /*parser.Color.tan*/get tan() {
      return C134 || CT.C134;
    },
    /*parser.Color.teal*/get teal() {
      return C135 || CT.C135;
    },
    /*parser.Color.thistle*/get thistle() {
      return C136 || CT.C136;
    },
    /*parser.Color.tomato*/get tomato() {
      return C137 || CT.C137;
    },
    /*parser.Color.turquoise*/get turquoise() {
      return C138 || CT.C138;
    },
    /*parser.Color.violet*/get violet() {
      return C139 || CT.C139;
    },
    /*parser.Color.wheat*/get wheat() {
      return C140 || CT.C140;
    },
    /*parser.Color.white*/get white() {
      return C141 || CT.C141;
    },
    /*parser.Color.whiteSmoke*/get whiteSmoke() {
      return C142 || CT.C142;
    },
    /*parser.Color.yellow*/get yellow() {
      return C143 || CT.C143;
    },
    /*parser.Color.yellowGreen*/get yellowGreen() {
      return C144 || CT.C144;
    }
  });
  const Rgba_r = dart.privateName(parser, "Rgba.r");
  const Rgba_g = dart.privateName(parser, "Rgba.g");
  const Rgba_b = dart.privateName(parser, "Rgba.b");
  const Rgba_a = dart.privateName(parser, "Rgba.a");
  parser.Rgba = class Rgba extends core.Object {
    get r() {
      return this[r];
    }
    set r(value) {
      super.r = value;
    }
    get g() {
      return this[g];
    }
    set g(value) {
      super.g = value;
    }
    get b() {
      return this[b];
    }
    set b(value) {
      super.b = value;
    }
    get a() {
      return this[a];
    }
    set a(value) {
      super.a = value;
    }
    static fromString(hexValue) {
      return new parser.Color.css("#" + dart.str(parser.Color._convertCssToArgb(hexValue))).rgba;
    }
    static fromColor(color) {
      return color.rgba;
    }
    static fromArgbValue(value) {
      return new parser.Rgba.new((value[$toInt]() & 4278190080) >>> 24, (value[$toInt]() & 16711680) >> 16, (value[$toInt]() & 65280) >> 8, value[$toInt]() & 255);
    }
    static fromHsla(hsla) {
      let h = hsla.hue;
      let s = hsla.saturation;
      let l = hsla.lightness;
      let a = hsla.alpha;
      let r = null;
      let g = null;
      let b = null;
      if (s === 0) {
        r = (dart.notNull(l) * 255)[$round]()[$toInt]();
        g = r;
        b = r;
      } else {
        let var2 = null;
        if (dart.notNull(l) < 0.5) {
          var2 = dart.notNull(l) * (1 + dart.notNull(s));
        } else {
          var2 = dart.notNull(l) + dart.notNull(s) - dart.notNull(s) * dart.notNull(l);
        }
        let var1 = 2 * dart.notNull(l) - dart.notNull(var2);
        r = (255 * dart.notNull(parser.Rgba._hueToRGB(var1, var2, dart.notNull(h) + 1 / 3)))[$round]()[$toInt]();
        g = (255 * dart.notNull(parser.Rgba._hueToRGB(var1, var2, h)))[$round]()[$toInt]();
        b = (255 * dart.notNull(parser.Rgba._hueToRGB(var1, var2, dart.notNull(h) - 1 / 3)))[$round]()[$toInt]();
      }
      return new parser.Rgba.new(r, g, b, a);
    }
    static _hueToRGB(v1, v2, vH) {
      if (dart.notNull(vH) < 0) {
        vH = dart.notNull(vH) + 1;
      }
      if (dart.notNull(vH) > 1) {
        vH = dart.notNull(vH) - 1;
      }
      if (6 * dart.notNull(vH) < 1) {
        return dart.notNull(v1) + (dart.notNull(v2) - dart.notNull(v1)) * 6 * dart.notNull(vH);
      }
      if (2 * dart.notNull(vH) < 1) {
        return v2;
      }
      if (3 * dart.notNull(vH) < 2) {
        return dart.notNull(v1) + (dart.notNull(v2) - dart.notNull(v1)) * ((2 / 3 - dart.notNull(vH)) * 6);
      }
      return v1;
    }
    _equals(other) {
      if (other == null) return false;
      return parser.Color.equal(this, other);
    }
    get cssExpression() {
      if (this.a == null) {
        return "#" + dart.str(parser.Color.convertToHexString(this.r, this.g, this.b));
      } else {
        return "rgba(" + dart.str(this.r) + "," + dart.str(this.g) + "," + dart.str(this.b) + "," + dart.str(this.a) + ")";
      }
    }
    toHexArgbString() {
      return parser.Color.convertToHexString(this.r, this.g, this.b, this.a);
    }
    get argbValue() {
      let value = 0;
      if (this.a != null) {
        value = this.a[$toInt]() << 24 >>> 0;
      }
      value = value + (dart.notNull(this.r) << 16 >>> 0);
      value = value + (dart.notNull(this.g) << 8 >>> 0);
      value = value + dart.notNull(this.b);
      return value;
    }
    get color() {
      return new parser.Color.createRgba(this.r, this.g, this.b, this.a);
    }
    get hsla() {
      return parser.Hsla.fromRgba(this);
    }
    darker(amount) {
      return parser.Color._createNewTintShadeFromRgba(this, -dart.notNull(amount));
    }
    lighter(amount) {
      return parser.Color._createNewTintShadeFromRgba(this, amount);
    }
    get hashCode() {
      return dart.hashCode(this.toHexArgbString());
    }
  };
  (parser.Rgba.new = function(red, green, blue, alpha) {
    if (alpha === void 0) alpha = null;
    this[r] = dart.asInt(parser.Color._clamp(red, 0, 255));
    this[g] = dart.asInt(parser.Color._clamp(green, 0, 255));
    this[b] = dart.asInt(parser.Color._clamp(blue, 0, 255));
    this[a] = alpha != null ? parser.Color._clamp(alpha, 0, 1) : alpha;
    ;
  }).prototype = parser.Rgba.prototype;
  dart.addTypeTests(parser.Rgba);
  const r = Rgba_r;
  const g = Rgba_g;
  const b = Rgba_b;
  const a = Rgba_a;
  parser.Rgba[dart.implements] = () => [parser._StyleProperty, parser.ColorBase];
  dart.setMethodSignature(parser.Rgba, () => ({
    __proto__: dart.getMethods(parser.Rgba.__proto__),
    toHexArgbString: dart.fnType(core.String, []),
    darker: dart.fnType(parser.Rgba, [core.num]),
    lighter: dart.fnType(parser.Rgba, [core.num])
  }));
  dart.setGetterSignature(parser.Rgba, () => ({
    __proto__: dart.getGetters(parser.Rgba.__proto__),
    cssExpression: core.String,
    argbValue: core.int,
    color: parser.Color,
    hsla: parser.Hsla
  }));
  dart.setLibraryUri(parser.Rgba, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Rgba, () => ({
    __proto__: dart.getFields(parser.Rgba.__proto__),
    r: dart.finalFieldType(core.int),
    g: dart.finalFieldType(core.int),
    b: dart.finalFieldType(core.int),
    a: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(parser.Rgba, ['_equals']);
  dart.defineExtensionAccessors(parser.Rgba, ['hashCode']);
  const _h = dart.privateName(parser, "_h");
  const _s = dart.privateName(parser, "_s");
  const _l = dart.privateName(parser, "_l");
  const _a = dart.privateName(parser, "_a");
  parser.Hsla = class Hsla extends core.Object {
    static fromString(hexValue) {
      let rgba = new parser.Color.css("#" + dart.str(parser.Color._convertCssToArgb(hexValue))).rgba;
      return parser.Hsla._createFromRgba(rgba.r, rgba.g, rgba.b, rgba.a);
    }
    static fromColor(color) {
      let rgba = color.rgba;
      return parser.Hsla._createFromRgba(rgba.r, rgba.g, rgba.b, rgba.a);
    }
    static fromArgbValue(value) {
      let a = (value[$toInt]() & 4278190080) >>> 24;
      let r = (value[$toInt]() & 16711680) >> 16;
      let g = (value[$toInt]() & 65280) >> 8;
      let b = value[$toInt]() & 255;
      if (a != null) {
        a = core.double.parse((dart.notNull(a) / 255)[$toStringAsPrecision](2));
      }
      return parser.Hsla._createFromRgba(r, g, b, a);
    }
    static fromRgba(rgba) {
      return parser.Hsla._createFromRgba(rgba.r, rgba.g, rgba.b, rgba.a);
    }
    static _createFromRgba(r, g, b, a) {
      r = dart.notNull(r) / 255;
      g = dart.notNull(g) / 255;
      b = dart.notNull(b) / 255;
      let h = null;
      let s = null;
      let l = null;
      let minRgb = math.min(core.num, r, math.min(core.num, g, b));
      let maxRgb = math.max(core.num, r, math.max(core.num, g, b));
      l = (maxRgb + minRgb) / 2;
      if (dart.notNull(l) <= 0) {
        return new parser.Hsla.new(0, 0, l);
      }
      let vm = maxRgb - minRgb;
      s = vm;
      if (dart.notNull(s) > 0) {
        s = dart.notNull(s) / (dart.notNull(l) < 0.5 ? maxRgb + minRgb : 2 - maxRgb - minRgb);
      } else {
        return new parser.Hsla.new(0, 0, l);
      }
      let r2 = null;
      let g2 = null;
      let b2 = null;
      r2 = (maxRgb - dart.notNull(r)) / vm;
      g2 = (maxRgb - dart.notNull(g)) / vm;
      b2 = (maxRgb - dart.notNull(b)) / vm;
      if (r === maxRgb) {
        h = g === minRgb ? 5.0 + dart.notNull(b2) : 1 - dart.notNull(g2);
      } else if (g === maxRgb) {
        h = b === minRgb ? 1 + dart.notNull(r2) : 3 - dart.notNull(b2);
      } else {
        h = r === minRgb ? 3 + dart.notNull(g2) : 5 - dart.notNull(r2);
      }
      h = dart.notNull(h) / 6;
      return new parser.Hsla.new(h, s, l, a);
    }
    get hue() {
      return this[_h];
    }
    get saturation() {
      return this[_s];
    }
    get lightness() {
      return this[_l];
    }
    get hueDegrees() {
      return (dart.notNull(this[_h]) * 360)[$round]();
    }
    get saturationPercentage() {
      return (dart.notNull(this[_s]) * 100)[$round]();
    }
    get lightnessPercentage() {
      return (dart.notNull(this[_l]) * 100)[$round]();
    }
    get alpha() {
      return this[_a];
    }
    _equals(other) {
      if (other == null) return false;
      return parser.Color.equal(this, other);
    }
    get cssExpression() {
      return this[_a] == null ? "hsl(" + dart.str(this.hueDegrees) + "," + dart.str(this.saturationPercentage) + "," + dart.str(this.lightnessPercentage) + ")" : "hsla(" + dart.str(this.hueDegrees) + "," + dart.str(this.saturationPercentage) + "," + dart.str(this.lightnessPercentage) + "," + dart.str(this[_a]) + ")";
    }
    toHexArgbString() {
      return parser.Rgba.fromHsla(this).toHexArgbString();
    }
    get argbValue() {
      return parser.Color.hexToInt(this.toHexArgbString());
    }
    get color() {
      return new parser.Color.createHsla(this[_h], this[_s], this[_l], this[_a]);
    }
    get rgba() {
      return parser.Rgba.fromHsla(this);
    }
    darker(amount) {
      return parser.Hsla.fromRgba(parser.Rgba.fromHsla(this).darker(amount));
    }
    lighter(amount) {
      return parser.Hsla.fromRgba(parser.Rgba.fromHsla(this).lighter(amount));
    }
    get hashCode() {
      return dart.hashCode(this.toHexArgbString());
    }
  };
  (parser.Hsla.new = function(hue, saturation, lightness, alpha) {
    if (alpha === void 0) alpha = null;
    this[_h] = hue === 1 ? 0 : parser.Color._clamp(hue, 0, 1);
    this[_s] = parser.Color._clamp(saturation, 0, 1);
    this[_l] = parser.Color._clamp(lightness, 0, 1);
    this[_a] = alpha != null ? parser.Color._clamp(alpha, 0, 1) : alpha;
    ;
  }).prototype = parser.Hsla.prototype;
  dart.addTypeTests(parser.Hsla);
  parser.Hsla[dart.implements] = () => [parser._StyleProperty, parser.ColorBase];
  dart.setMethodSignature(parser.Hsla, () => ({
    __proto__: dart.getMethods(parser.Hsla.__proto__),
    toHexArgbString: dart.fnType(core.String, []),
    darker: dart.fnType(parser.Hsla, [core.num]),
    lighter: dart.fnType(parser.Hsla, [core.num])
  }));
  dart.setGetterSignature(parser.Hsla, () => ({
    __proto__: dart.getGetters(parser.Hsla.__proto__),
    hue: core.num,
    saturation: core.num,
    lightness: core.num,
    hueDegrees: core.num,
    saturationPercentage: core.num,
    lightnessPercentage: core.num,
    alpha: core.num,
    cssExpression: core.String,
    argbValue: core.int,
    color: parser.Color,
    rgba: parser.Rgba
  }));
  dart.setLibraryUri(parser.Hsla, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Hsla, () => ({
    __proto__: dart.getFields(parser.Hsla.__proto__),
    [_h]: dart.finalFieldType(core.num),
    [_s]: dart.finalFieldType(core.num),
    [_l]: dart.finalFieldType(core.num),
    [_a]: dart.finalFieldType(core.num)
  }));
  dart.defineExtensionMethods(parser.Hsla, ['_equals']);
  dart.defineExtensionAccessors(parser.Hsla, ['hashCode']);
  const PointXY_x = dart.privateName(parser, "PointXY.x");
  const PointXY_y = dart.privateName(parser, "PointXY.y");
  parser.PointXY = class PointXY extends core.Object {
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    get cssExpression() {
      return null;
    }
  };
  (parser.PointXY.new = function(x, y) {
    this[x$] = x;
    this[y$] = y;
    ;
  }).prototype = parser.PointXY.prototype;
  dart.addTypeTests(parser.PointXY);
  const x$ = PointXY_x;
  const y$ = PointXY_y;
  parser.PointXY[dart.implements] = () => [parser._StyleProperty];
  dart.setGetterSignature(parser.PointXY, () => ({
    __proto__: dart.getGetters(parser.PointXY.__proto__),
    cssExpression: core.String
  }));
  dart.setLibraryUri(parser.PointXY, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.PointXY, () => ({
    __proto__: dart.getFields(parser.PointXY.__proto__),
    x: dart.finalFieldType(core.num),
    y: dart.finalFieldType(core.num)
  }));
  const Border_top = dart.privateName(parser, "Border.top");
  const Border_left = dart.privateName(parser, "Border.left");
  const Border_bottom = dart.privateName(parser, "Border.bottom");
  const Border_right = dart.privateName(parser, "Border.right");
  parser.Border = class Border extends core.Object {
    get top() {
      return this[top$];
    }
    set top(value) {
      super.top = value;
    }
    get left() {
      return this[left$];
    }
    set left(value) {
      super.left = value;
    }
    get bottom() {
      return this[bottom$];
    }
    set bottom(value) {
      super.bottom = value;
    }
    get right() {
      return this[right$];
    }
    set right(value) {
      super.right = value;
    }
    get width() {
      return dart.notNull(this.left) + dart.notNull(this.right);
    }
    get height() {
      return dart.notNull(this.top) + dart.notNull(this.bottom);
    }
    get cssExpression() {
      return this.top == this.left && this.bottom == this.right && this.top == this.right ? dart.str(this.left) + "px" : (this.top != null ? dart.str(this.top) : "0") + "px " + (this.right != null ? dart.str(this.right) : "0") + "px " + (this.bottom != null ? dart.str(this.bottom) : "0") + "px " + (this.left != null ? dart.str(this.left) : "0") + "px";
    }
  };
  (parser.Border.new = function(top, left, bottom, right) {
    if (top === void 0) top = null;
    if (left === void 0) left = null;
    if (bottom === void 0) bottom = null;
    if (right === void 0) right = null;
    this[top$] = top;
    this[left$] = left;
    this[bottom$] = bottom;
    this[right$] = right;
    ;
  }).prototype = parser.Border.prototype;
  (parser.Border.uniform = function(amount) {
    this[top$] = dart.asInt(amount);
    this[left$] = dart.asInt(amount);
    this[bottom$] = dart.asInt(amount);
    this[right$] = dart.asInt(amount);
    ;
  }).prototype = parser.Border.prototype;
  dart.addTypeTests(parser.Border);
  const top$ = Border_top;
  const left$ = Border_left;
  const bottom$ = Border_bottom;
  const right$ = Border_right;
  parser.Border[dart.implements] = () => [parser._StyleProperty];
  dart.setGetterSignature(parser.Border, () => ({
    __proto__: dart.getGetters(parser.Border.__proto__),
    width: core.int,
    height: core.int,
    cssExpression: core.String
  }));
  dart.setLibraryUri(parser.Border, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Border, () => ({
    __proto__: dart.getFields(parser.Border.__proto__),
    top: dart.finalFieldType(core.int),
    left: dart.finalFieldType(core.int),
    bottom: dart.finalFieldType(core.int),
    right: dart.finalFieldType(core.int)
  }));
  parser.FontStyle = class FontStyle extends core.Object {};
  (parser.FontStyle.new = function() {
    ;
  }).prototype = parser.FontStyle.prototype;
  dart.addTypeTests(parser.FontStyle);
  dart.setLibraryUri(parser.FontStyle, "package:csslib/parser.dart");
  dart.defineLazy(parser.FontStyle, {
    /*parser.FontStyle.normal*/get normal() {
      return "normal";
    },
    /*parser.FontStyle.italic*/get italic() {
      return "italic";
    },
    /*parser.FontStyle.oblique*/get oblique() {
      return "oblique";
    }
  });
  parser.FontVariant = class FontVariant extends core.Object {};
  (parser.FontVariant.new = function() {
    ;
  }).prototype = parser.FontVariant.prototype;
  dart.addTypeTests(parser.FontVariant);
  dart.setLibraryUri(parser.FontVariant, "package:csslib/parser.dart");
  dart.defineLazy(parser.FontVariant, {
    /*parser.FontVariant.normal*/get normal() {
      return "normal";
    },
    /*parser.FontVariant.smallCaps*/get smallCaps() {
      return "small-caps";
    }
  });
  parser.FontWeight = class FontWeight extends core.Object {};
  (parser.FontWeight.new = function() {
    ;
  }).prototype = parser.FontWeight.prototype;
  dart.addTypeTests(parser.FontWeight);
  dart.setLibraryUri(parser.FontWeight, "package:csslib/parser.dart");
  dart.defineLazy(parser.FontWeight, {
    /*parser.FontWeight.normal*/get normal() {
      return 400;
    },
    /*parser.FontWeight.bold*/get bold() {
      return 700;
    },
    /*parser.FontWeight.wt100*/get wt100() {
      return 100;
    },
    /*parser.FontWeight.wt200*/get wt200() {
      return 200;
    },
    /*parser.FontWeight.wt300*/get wt300() {
      return 300;
    },
    /*parser.FontWeight.wt400*/get wt400() {
      return 400;
    },
    /*parser.FontWeight.wt500*/get wt500() {
      return 500;
    },
    /*parser.FontWeight.wt600*/get wt600() {
      return 600;
    },
    /*parser.FontWeight.wt700*/get wt700() {
      return 700;
    },
    /*parser.FontWeight.wt800*/get wt800() {
      return 800;
    },
    /*parser.FontWeight.wt900*/get wt900() {
      return 900;
    }
  });
  parser.FontGeneric = class FontGeneric extends core.Object {};
  (parser.FontGeneric.new = function() {
    ;
  }).prototype = parser.FontGeneric.prototype;
  dart.addTypeTests(parser.FontGeneric);
  dart.setLibraryUri(parser.FontGeneric, "package:csslib/parser.dart");
  dart.defineLazy(parser.FontGeneric, {
    /*parser.FontGeneric.sansSerif*/get sansSerif() {
      return "sans-serif";
    },
    /*parser.FontGeneric.serif*/get serif() {
      return "serif";
    },
    /*parser.FontGeneric.monospace*/get monospace() {
      return "monospace";
    },
    /*parser.FontGeneric.cursive*/get cursive() {
      return "cursive";
    },
    /*parser.FontGeneric.fantasy*/get fantasy() {
      return "fantasy";
    }
  });
  parser.FontFamily = class FontFamily extends core.Object {};
  (parser.FontFamily.new = function() {
    ;
  }).prototype = parser.FontFamily.prototype;
  dart.addTypeTests(parser.FontFamily);
  dart.setLibraryUri(parser.FontFamily, "package:csslib/parser.dart");
  dart.defineLazy(parser.FontFamily, {
    /*parser.FontFamily.arial*/get arial() {
      return "arial";
    },
    /*parser.FontFamily.arialBlack*/get arialBlack() {
      return "arial black";
    },
    /*parser.FontFamily.geneva*/get geneva() {
      return "geneva";
    },
    /*parser.FontFamily.verdana*/get verdana() {
      return "verdana";
    },
    /*parser.FontFamily.helvetica*/get helvetica() {
      return "helvetica";
    },
    /*parser.FontFamily.georgia*/get georgia() {
      return "georgia";
    },
    /*parser.FontFamily.times*/get times() {
      return "times";
    },
    /*parser.FontFamily.timesNewRoman*/get timesNewRoman() {
      return "times new roman";
    },
    /*parser.FontFamily.courier*/get courier() {
      return "courier";
    },
    /*parser.FontFamily.courierNew*/get courierNew() {
      return "courier new";
    },
    /*parser.FontFamily.comicSansMs*/get comicSansMs() {
      return "comic sans ms";
    },
    /*parser.FontFamily.textile*/get textile() {
      return "textile";
    },
    /*parser.FontFamily.appleChancery*/get appleChancery() {
      return "apple chancery";
    },
    /*parser.FontFamily.zaphChancery*/get zaphChancery() {
      return "zaph chancery";
    },
    /*parser.FontFamily.impact*/get impact() {
      return "impact";
    },
    /*parser.FontFamily.webdings*/get webdings() {
      return "webdings";
    }
  });
  const LineHeight_height = dart.privateName(parser, "LineHeight.height");
  const LineHeight_inPixels = dart.privateName(parser, "LineHeight.inPixels");
  parser.LineHeight = class LineHeight extends core.Object {
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get inPixels() {
      return this[inPixels$];
    }
    set inPixels(value) {
      super.inPixels = value;
    }
  };
  (parser.LineHeight.new = function(height, opts) {
    let inPixels = opts && 'inPixels' in opts ? opts.inPixels : true;
    this[height$] = height;
    this[inPixels$] = inPixels;
    ;
  }).prototype = parser.LineHeight.prototype;
  dart.addTypeTests(parser.LineHeight);
  const height$ = LineHeight_height;
  const inPixels$ = LineHeight_inPixels;
  dart.setLibraryUri(parser.LineHeight, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.LineHeight, () => ({
    __proto__: dart.getFields(parser.LineHeight.__proto__),
    height: dart.finalFieldType(core.num),
    inPixels: dart.finalFieldType(core.bool)
  }));
  const _fontsAsString = dart.privateName(parser, "_fontsAsString");
  const Font_size = dart.privateName(parser, "Font.size");
  const Font_family = dart.privateName(parser, "Font.family");
  const Font_weight = dart.privateName(parser, "Font.weight");
  const Font_style = dart.privateName(parser, "Font.style");
  const Font_variant = dart.privateName(parser, "Font.variant");
  const Font_lineHeight = dart.privateName(parser, "Font.lineHeight");
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  parser.Font = class Font extends core.Object {
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get family() {
      return this[family$];
    }
    set family(value) {
      super.family = value;
    }
    get weight() {
      return this[weight$];
    }
    set weight(value) {
      super.weight = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get variant() {
      return this[variant$];
    }
    set variant(value) {
      super.variant = value;
    }
    get lineHeight() {
      return this[lineHeight$];
    }
    set lineHeight(value) {
      super.lineHeight = value;
    }
    static merge(a, b) {
      if (a == null) return b;
      if (b == null) return a;
      return new parser.Font._merge(a, b);
    }
    get cssExpression() {
      if (this.weight != null) {
        if (this.lineHeight != null) {
          return dart.str(this.weight) + " " + dart.str(this.size) + "px/" + dart.str(this.lineHeightInPixels) + " " + dart.str(this[_fontsAsString]);
        }
        return dart.str(this.weight) + " " + dart.str(this.size) + "px " + dart.str(this[_fontsAsString]);
      }
      return dart.str(this.size) + "px " + dart.str(this[_fontsAsString]);
    }
    scale(ratio) {
      return new parser.Font.new({size: dart.notNull(this.size) * dart.notNull(ratio), family: this.family, weight: this.weight, style: this.style, variant: this.variant});
    }
    get lineHeightInPixels() {
      if (this.lineHeight != null) {
        if (dart.test(this.lineHeight.inPixels)) {
          return this.lineHeight.height;
        } else {
          return this.size != null ? dart.notNull(this.lineHeight.height) * dart.notNull(this.size) : null;
        }
      } else {
        return this.size != null ? dart.notNull(this.size) * 1.2 : null;
      }
    }
    get hashCode() {
      return this.size[$toInt]()[$modulo](dart.hashCode(this.family[$_get](0)));
    }
    _equals(other) {
      if (other == null) return false;
      if (!parser.Font.is(other)) return false;
      let o = parser.Font._check(other);
      return o.size == this.size && dart.equals(o.family, this.family) && o.weight == this.weight && dart.equals(o.lineHeight, this.lineHeight) && o.style == this.style && o.variant == this.variant;
    }
    get [_fontsAsString]() {
      let fonts = dart.toString(this.family);
      return fonts.length > 2 ? fonts[$substring](1, fonts.length - 1) : "";
    }
  };
  (parser.Font.new = function(opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let family = opts && 'family' in opts ? opts.family : null;
    let weight = opts && 'weight' in opts ? opts.weight : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let variant = opts && 'variant' in opts ? opts.variant : null;
    let lineHeight = opts && 'lineHeight' in opts ? opts.lineHeight : null;
    this[size$] = size;
    this[family$] = family;
    this[weight$] = weight;
    this[style$] = style;
    this[variant$] = variant;
    this[lineHeight$] = lineHeight;
    ;
  }).prototype = parser.Font.prototype;
  (parser.Font._merge = function(a, b) {
    this[size$] = parser._mergeVal(core.num, a.size, b.size);
    this[family$] = parser._mergeVal(ListOfString(), a.family, b.family);
    this[weight$] = parser._mergeVal(core.int, a.weight, b.weight);
    this[style$] = parser._mergeVal(core.String, a.style, b.style);
    this[variant$] = parser._mergeVal(core.String, a.variant, b.variant);
    this[lineHeight$] = parser._mergeVal(parser.LineHeight, a.lineHeight, b.lineHeight);
    ;
  }).prototype = parser.Font.prototype;
  dart.addTypeTests(parser.Font);
  const size$ = Font_size;
  const family$ = Font_family;
  const weight$ = Font_weight;
  const style$ = Font_style;
  const variant$ = Font_variant;
  const lineHeight$ = Font_lineHeight;
  parser.Font[dart.implements] = () => [parser._StyleProperty];
  dart.setMethodSignature(parser.Font, () => ({
    __proto__: dart.getMethods(parser.Font.__proto__),
    scale: dart.fnType(parser.Font, [core.num])
  }));
  dart.setGetterSignature(parser.Font, () => ({
    __proto__: dart.getGetters(parser.Font.__proto__),
    cssExpression: core.String,
    lineHeightInPixels: core.num,
    [_fontsAsString]: core.String
  }));
  dart.setLibraryUri(parser.Font, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Font, () => ({
    __proto__: dart.getFields(parser.Font.__proto__),
    size: dart.finalFieldType(core.num),
    family: dart.finalFieldType(core.List$(core.String)),
    weight: dart.finalFieldType(core.int),
    style: dart.finalFieldType(core.String),
    variant: dart.finalFieldType(core.String),
    lineHeight: dart.finalFieldType(parser.LineHeight)
  }));
  dart.defineExtensionMethods(parser.Font, ['_equals']);
  dart.defineExtensionAccessors(parser.Font, ['hashCode']);
  dart.defineLazy(parser.Font, {
    /*parser.Font.sansSerif*/get sansSerif() {
      return C145 || CT.C145;
    },
    /*parser.Font.serif*/get serif() {
      return C146 || CT.C146;
    },
    /*parser.Font.monospace*/get monospace() {
      return C147 || CT.C147;
    },
    /*parser.Font.cursive*/get cursive() {
      return C148 || CT.C148;
    },
    /*parser.Font.fantasy*/get fantasy() {
      return C149 || CT.C149;
    }
  });
  const BoxEdge_bottom = dart.privateName(parser, "BoxEdge.bottom");
  const BoxEdge_right = dart.privateName(parser, "BoxEdge.right");
  const BoxEdge_top = dart.privateName(parser, "BoxEdge.top");
  const BoxEdge_left = dart.privateName(parser, "BoxEdge.left");
  let C150;
  parser.BoxEdge = class BoxEdge extends core.Object {
    get left() {
      return this[left$0];
    }
    set left(value) {
      super.left = value;
    }
    get top() {
      return this[top$0];
    }
    set top(value) {
      super.top = value;
    }
    get right() {
      return this[right$0];
    }
    set right(value) {
      super.right = value;
    }
    get bottom() {
      return this[bottom$0];
    }
    set bottom(value) {
      super.bottom = value;
    }
    static nonNull(other) {
      if (other == null) return C150 || CT.C150;
      let left = other.left;
      let top = other.top;
      let right = other.right;
      let bottom = other.bottom;
      let make = false;
      if (left == null) {
        make = true;
        left = 0;
      }
      if (top == null) {
        make = true;
        top = 0;
      }
      if (right == null) {
        make = true;
        right = 0;
      }
      if (bottom == null) {
        make = true;
        bottom = 0;
      }
      return make ? new parser.BoxEdge.new(left, top, right, bottom) : other;
    }
    static merge(x, y) {
      if (x == null) return y;
      if (y == null) return x;
      return new parser.BoxEdge._merge(x, y);
    }
    get width() {
      return dart.notNull(this.left != null ? this.left : 0) + dart.notNull(this.right != null ? this.right : 0);
    }
    get height() {
      return dart.notNull(this.top != null ? this.top : 0) + dart.notNull(this.bottom != null ? this.bottom : 0);
    }
  };
  (parser.BoxEdge.new = function(left, top, right, bottom) {
    if (left === void 0) left = null;
    if (top === void 0) top = null;
    if (right === void 0) right = null;
    if (bottom === void 0) bottom = null;
    this[left$0] = left;
    this[top$0] = top;
    this[right$0] = right;
    this[bottom$0] = bottom;
    ;
  }).prototype = parser.BoxEdge.prototype;
  (parser.BoxEdge.clockwiseFromTop = function(top, right, bottom, left) {
    this[top$0] = top;
    this[right$0] = right;
    this[bottom$0] = bottom;
    this[left$0] = left;
    ;
  }).prototype = parser.BoxEdge.prototype;
  (parser.BoxEdge.uniform = function(size) {
    this[top$0] = size;
    this[left$0] = size;
    this[bottom$0] = size;
    this[right$0] = size;
    ;
  }).prototype = parser.BoxEdge.prototype;
  (parser.BoxEdge._merge = function(x, y) {
    this[left$0] = parser._mergeVal(core.num, x.left, y.left);
    this[top$0] = parser._mergeVal(core.num, x.top, y.top);
    this[right$0] = parser._mergeVal(core.num, x.right, y.right);
    this[bottom$0] = parser._mergeVal(core.num, x.bottom, y.bottom);
    ;
  }).prototype = parser.BoxEdge.prototype;
  dart.addTypeTests(parser.BoxEdge);
  const left$0 = BoxEdge_left;
  const top$0 = BoxEdge_top;
  const right$0 = BoxEdge_right;
  const bottom$0 = BoxEdge_bottom;
  dart.setGetterSignature(parser.BoxEdge, () => ({
    __proto__: dart.getGetters(parser.BoxEdge.__proto__),
    width: core.num,
    height: core.num
  }));
  dart.setLibraryUri(parser.BoxEdge, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.BoxEdge, () => ({
    __proto__: dart.getFields(parser.BoxEdge.__proto__),
    left: dart.finalFieldType(core.num),
    top: dart.finalFieldType(core.num),
    right: dart.finalFieldType(core.num),
    bottom: dart.finalFieldType(core.num)
  }));
  const Token_kind = dart.privateName(parser, "Token.kind");
  const Token_span = dart.privateName(parser, "Token.span");
  parser.Token = class Token extends core.Object {
    get kind() {
      return this[kind$];
    }
    set kind(value) {
      super.kind = value;
    }
    get span() {
      return this[span$];
    }
    set span(value) {
      super.span = value;
    }
    get start() {
      return this.span.start.offset;
    }
    get end() {
      return this.span.end.offset;
    }
    get text() {
      return this.span.text;
    }
    toString() {
      let kindText = parser.TokenKind.kindToString(this.kind);
      let actualText = this.text[$trim]();
      if (kindText !== actualText) {
        if (actualText.length > 10) {
          actualText = actualText[$substring](0, 8) + "...";
        }
        return dart.str(kindText) + "(" + actualText + ")";
      } else {
        return kindText;
      }
    }
  };
  (parser.Token.new = function(kind, span) {
    this[kind$] = kind;
    this[span$] = span;
    ;
  }).prototype = parser.Token.prototype;
  dart.addTypeTests(parser.Token);
  const kind$ = Token_kind;
  const span$ = Token_span;
  dart.setGetterSignature(parser.Token, () => ({
    __proto__: dart.getGetters(parser.Token.__proto__),
    start: core.int,
    end: core.int,
    text: core.String
  }));
  dart.setLibraryUri(parser.Token, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Token, () => ({
    __proto__: dart.getFields(parser.Token.__proto__),
    kind: dart.finalFieldType(core.int),
    span: dart.finalFieldType(file$.FileSpan)
  }));
  dart.defineExtensionMethods(parser.Token, ['toString']);
  const LiteralToken_value = dart.privateName(parser, "LiteralToken.value");
  parser.LiteralToken = class LiteralToken extends parser.Token {
    get value() {
      return this[value$];
    }
    set value(value) {
      this[value$] = value;
    }
  };
  (parser.LiteralToken.new = function(kind, span, value) {
    this[value$] = value;
    parser.LiteralToken.__proto__.new.call(this, kind, span);
    ;
  }).prototype = parser.LiteralToken.prototype;
  dart.addTypeTests(parser.LiteralToken);
  const value$ = LiteralToken_value;
  dart.setLibraryUri(parser.LiteralToken, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.LiteralToken, () => ({
    __proto__: dart.getFields(parser.LiteralToken.__proto__),
    value: dart.fieldType(dart.dynamic)
  }));
  const ErrorToken_message = dart.privateName(parser, "ErrorToken.message");
  parser.ErrorToken = class ErrorToken extends parser.Token {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
  };
  (parser.ErrorToken.new = function(kind, span, message) {
    this[message$] = message;
    parser.ErrorToken.__proto__.new.call(this, kind, span);
    ;
  }).prototype = parser.ErrorToken.prototype;
  dart.addTypeTests(parser.ErrorToken);
  const message$ = ErrorToken_message;
  dart.setLibraryUri(parser.ErrorToken, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.ErrorToken, () => ({
    __proto__: dart.getFields(parser.ErrorToken.__proto__),
    message: dart.fieldType(core.String)
  }));
  const IdentifierToken_text = dart.privateName(parser, "IdentifierToken.text");
  parser.IdentifierToken = class IdentifierToken extends parser.Token {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
  };
  (parser.IdentifierToken.new = function(text, kind, span) {
    this[text$] = text;
    parser.IdentifierToken.__proto__.new.call(this, kind, span);
    ;
  }).prototype = parser.IdentifierToken.prototype;
  dart.addTypeTests(parser.IdentifierToken);
  const text$ = IdentifierToken_text;
  dart.setLibraryUri(parser.IdentifierToken, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.IdentifierToken, () => ({
    __proto__: dart.getFields(parser.IdentifierToken.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  let C152;
  let C153;
  let C154;
  let C155;
  let C156;
  let C157;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C170;
  let C171;
  let C172;
  let C151;
  let C174;
  let C175;
  let C176;
  let C173;
  let C178;
  let C179;
  let C180;
  let C181;
  let C182;
  let C183;
  let C184;
  let C185;
  let C186;
  let C187;
  let C188;
  let C189;
  let C190;
  let C191;
  let C192;
  let C193;
  let C177;
  let C195;
  let C196;
  let C197;
  let C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C194;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C245;
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  let C319;
  let C320;
  let C321;
  let C322;
  let C323;
  let C324;
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C332;
  let C333;
  let C334;
  let C335;
  let C336;
  let C337;
  let C338;
  let C339;
  let C340;
  let C341;
  let C342;
  let C343;
  let C344;
  let C345;
  let C346;
  let C347;
  let C348;
  let C349;
  let C350;
  let C351;
  let C352;
  let C353;
  let C354;
  let C355;
  let C356;
  let C357;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C365;
  let C366;
  let C367;
  let C368;
  let C221;
  parser.TokenKind = class TokenKind extends core.Object {
    static isPredefinedName(name) {
      let nameLen = name.length;
      if (parser.TokenKind.matchUnits(name, 0, nameLen) === -1 || parser.TokenKind.matchDirectives(name, 0, nameLen) === -1 || parser.TokenKind.matchMarginDirectives(name, 0, nameLen) === -1 || parser.TokenKind.matchColorName(name) == null) {
        return false;
      }
      return true;
    }
    static matchList(identList, tokenField, text, offset, length) {
      let t4;
      for (let entry of core.Iterable._check(identList)) {
        let ident = core.String._check(dart.dsend(entry, '_get', ["value"]));
        if (length === ident.length) {
          let idx = offset;
          let match = true;
          for (let i = 0; i < ident.length; i = i + 1) {
            let identChar = ident[$codeUnitAt](i);
            let char = text[$codeUnitAt]((t4 = idx, idx = dart.notNull(t4) + 1, t4));
            match = match && (char === identChar || char >= 65 && char <= 90 && char + 32 === identChar);
            if (!match) {
              break;
            }
          }
          if (match) {
            return core.int._check(dart.dsend(entry, '_get', [tokenField]));
          }
        }
      }
      return -1;
    }
    static matchUnits(text, offset, length) {
      return parser.TokenKind.matchList(parser.TokenKind._UNITS, "unit", text, offset, length);
    }
    static matchDirectives(text, offset, length) {
      return parser.TokenKind.matchList(parser.TokenKind._DIRECTIVES, "type", text, offset, length);
    }
    static matchMarginDirectives(text, offset, length) {
      return parser.TokenKind.matchList(parser.TokenKind.MARGIN_DIRECTIVES, "type", text, offset, length);
    }
    static matchMediaOperator(text, offset, length) {
      return parser.TokenKind.matchList(parser.TokenKind.MEDIA_OPERATORS, "type", text, offset, length);
    }
    static idToValue(identList, tokenId) {
      for (let entry of core.Iterable._check(identList)) {
        if (core.identical(tokenId, dart.dsend(entry, '_get', ["type"]))) {
          return core.String._check(dart.dsend(entry, '_get', ["value"]));
        }
      }
      return null;
    }
    static unitToString(unitTokenToFind) {
      if (unitTokenToFind === 24) {
        return "%";
      } else {
        for (let entry of parser.TokenKind._UNITS) {
          let unit = core.int._check(entry[$_get]("unit"));
          if (unit == unitTokenToFind) {
            return core.String._check(entry[$_get]("value"));
          }
        }
      }
      return "<BAD UNIT>";
    }
    static matchColorName(text) {
      let name = text[$toLowerCase]();
      return parser.TokenKind._EXTENDED_COLOR_NAMES[$firstWhere](dart.fn(e => dart.equals(e[$_get]("name"), name), MapTobool()), {orElse: dart.fn(() => null, VoidToNull())});
    }
    static colorValue(entry) {
      if (!(entry != null)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/token_kind.dart", 557, 12, "ert(entry != ");
      return core.int._check(entry[$_get]("value"));
    }
    static hexToColorName(hexValue) {
      for (let entry of parser.TokenKind._EXTENDED_COLOR_NAMES) {
        if (dart.equals(entry[$_get]("value"), hexValue)) {
          return core.String._check(entry[$_get]("name"));
        }
      }
      return null;
    }
    static decimalToHex(number, minDigits) {
      let t4;
      if (minDigits === void 0) minDigits = 1;
      let _HEX_DIGITS = "0123456789abcdef";
      let result = JSArrayOfString().of([]);
      let dividend = number[$rightShift](4);
      let remain = number[$modulo](16);
      result[$add](_HEX_DIGITS[$_get](remain));
      while (dividend !== 0) {
        remain = dividend[$modulo](16);
        dividend = dividend[$rightShift](4);
        result[$add](_HEX_DIGITS[$_get](remain));
      }
      let invertResult = new core.StringBuffer.new();
      let paddings = dart.notNull(minDigits) - dart.notNull(result[$length]);
      while ((t4 = paddings, paddings = t4 - 1, t4) > 0) {
        invertResult.write("0");
      }
      for (let i = dart.notNull(result[$length]) - 1; i >= 0; i = i - 1) {
        invertResult.write(result[$_get](i));
      }
      return invertResult.toString();
    }
    static kindToString(kind) {
      switch (kind) {
        case 0:
        {
          return "ERROR";
        }
        case 1:
        {
          return "end of file";
        }
        case 2:
        {
          return "(";
        }
        case 3:
        {
          return ")";
        }
        case 4:
        {
          return "[";
        }
        case 5:
        {
          return "]";
        }
        case 6:
        {
          return "{";
        }
        case 7:
        {
          return "}";
        }
        case 8:
        {
          return ".";
        }
        case 9:
        {
          return ";";
        }
        case 10:
        {
          return "@";
        }
        case 11:
        {
          return "#";
        }
        case 12:
        {
          return "+";
        }
        case 13:
        {
          return ">";
        }
        case 14:
        {
          return "~";
        }
        case 15:
        {
          return "*";
        }
        case 16:
        {
          return "|";
        }
        case 17:
        {
          return ":";
        }
        case 18:
        {
          return "_";
        }
        case 19:
        {
          return ",";
        }
        case 20:
        {
          return " ";
        }
        case 21:
        {
          return "\t";
        }
        case 22:
        {
          return "\n";
        }
        case 23:
        {
          return "\r";
        }
        case 24:
        {
          return "%";
        }
        case 25:
        {
          return "'";
        }
        case 26:
        {
          return "\"";
        }
        case 27:
        {
          return "/";
        }
        case 28:
        {
          return "=";
        }
        case 30:
        {
          return "^";
        }
        case 31:
        {
          return "$";
        }
        case 32:
        {
          return "<";
        }
        case 33:
        {
          return "!";
        }
        case 34:
        {
          return "-";
        }
        case 35:
        {
          return "\\";
        }
        default:
        {
          dart.throw("Unknown TOKEN");
        }
      }
    }
    static isKindIdentifier(kind) {
      switch (kind) {
        case 641:
        case 642:
        case 643:
        case 644:
        case 645:
        case 646:
        case 647:
        case 648:
        case 649:
        case 650:
        case 651:
        case 652:
        case 653:
        case 654:
        case 655:
        case 656:
        case 600:
        case 601:
        case 602:
        case 603:
        case 604:
        case 605:
        case 606:
        case 607:
        case 608:
        case 609:
        case 610:
        case 612:
        case 613:
        case 614:
        case 615:
        case 617:
        {
          return true;
        }
        default:
        {
          return false;
        }
      }
    }
    static isIdentifier(kind) {
      return kind === 511;
    }
  };
  (parser.TokenKind.new = function() {
    ;
  }).prototype = parser.TokenKind.prototype;
  dart.addTypeTests(parser.TokenKind);
  dart.setLibraryUri(parser.TokenKind, "package:csslib/parser.dart");
  dart.defineLazy(parser.TokenKind, {
    /*parser.TokenKind.UNUSED*/get UNUSED() {
      return 0;
    },
    /*parser.TokenKind.END_OF_FILE*/get END_OF_FILE() {
      return 1;
    },
    /*parser.TokenKind.LPAREN*/get LPAREN() {
      return 2;
    },
    /*parser.TokenKind.RPAREN*/get RPAREN() {
      return 3;
    },
    /*parser.TokenKind.LBRACK*/get LBRACK() {
      return 4;
    },
    /*parser.TokenKind.RBRACK*/get RBRACK() {
      return 5;
    },
    /*parser.TokenKind.LBRACE*/get LBRACE() {
      return 6;
    },
    /*parser.TokenKind.RBRACE*/get RBRACE() {
      return 7;
    },
    /*parser.TokenKind.DOT*/get DOT() {
      return 8;
    },
    /*parser.TokenKind.SEMICOLON*/get SEMICOLON() {
      return 9;
    },
    /*parser.TokenKind.AT*/get AT() {
      return 10;
    },
    /*parser.TokenKind.HASH*/get HASH() {
      return 11;
    },
    /*parser.TokenKind.PLUS*/get PLUS() {
      return 12;
    },
    /*parser.TokenKind.GREATER*/get GREATER() {
      return 13;
    },
    /*parser.TokenKind.TILDE*/get TILDE() {
      return 14;
    },
    /*parser.TokenKind.ASTERISK*/get ASTERISK() {
      return 15;
    },
    /*parser.TokenKind.NAMESPACE*/get NAMESPACE() {
      return 16;
    },
    /*parser.TokenKind.COLON*/get COLON() {
      return 17;
    },
    /*parser.TokenKind.PRIVATE_NAME*/get PRIVATE_NAME() {
      return 18;
    },
    /*parser.TokenKind.COMMA*/get COMMA() {
      return 19;
    },
    /*parser.TokenKind.SPACE*/get SPACE() {
      return 20;
    },
    /*parser.TokenKind.TAB*/get TAB() {
      return 21;
    },
    /*parser.TokenKind.NEWLINE*/get NEWLINE() {
      return 22;
    },
    /*parser.TokenKind.RETURN*/get RETURN() {
      return 23;
    },
    /*parser.TokenKind.PERCENT*/get PERCENT() {
      return 24;
    },
    /*parser.TokenKind.SINGLE_QUOTE*/get SINGLE_QUOTE() {
      return 25;
    },
    /*parser.TokenKind.DOUBLE_QUOTE*/get DOUBLE_QUOTE() {
      return 26;
    },
    /*parser.TokenKind.SLASH*/get SLASH() {
      return 27;
    },
    /*parser.TokenKind.EQUALS*/get EQUALS() {
      return 28;
    },
    /*parser.TokenKind.CARET*/get CARET() {
      return 30;
    },
    /*parser.TokenKind.DOLLAR*/get DOLLAR() {
      return 31;
    },
    /*parser.TokenKind.LESS*/get LESS() {
      return 32;
    },
    /*parser.TokenKind.BANG*/get BANG() {
      return 33;
    },
    /*parser.TokenKind.MINUS*/get MINUS() {
      return 34;
    },
    /*parser.TokenKind.BACKSLASH*/get BACKSLASH() {
      return 35;
    },
    /*parser.TokenKind.AMPERSAND*/get AMPERSAND() {
      return 36;
    },
    /*parser.TokenKind.INTEGER*/get INTEGER() {
      return 60;
    },
    /*parser.TokenKind.HEX_INTEGER*/get HEX_INTEGER() {
      return 61;
    },
    /*parser.TokenKind.DOUBLE*/get DOUBLE() {
      return 62;
    },
    /*parser.TokenKind.WHITESPACE*/get WHITESPACE() {
      return 63;
    },
    /*parser.TokenKind.COMMENT*/get COMMENT() {
      return 64;
    },
    /*parser.TokenKind.ERROR*/get ERROR() {
      return 65;
    },
    /*parser.TokenKind.INCOMPLETE_STRING*/get INCOMPLETE_STRING() {
      return 66;
    },
    /*parser.TokenKind.INCOMPLETE_COMMENT*/get INCOMPLETE_COMMENT() {
      return 67;
    },
    /*parser.TokenKind.VAR_DEFINITION*/get VAR_DEFINITION() {
      return 400;
    },
    /*parser.TokenKind.VAR_USAGE*/get VAR_USAGE() {
      return 401;
    },
    /*parser.TokenKind.STRING*/get STRING() {
      return 500;
    },
    /*parser.TokenKind.STRING_PART*/get STRING_PART() {
      return 501;
    },
    /*parser.TokenKind.NUMBER*/get NUMBER() {
      return 502;
    },
    /*parser.TokenKind.HEX_NUMBER*/get HEX_NUMBER() {
      return 503;
    },
    /*parser.TokenKind.HTML_COMMENT*/get HTML_COMMENT() {
      return 504;
    },
    /*parser.TokenKind.IMPORTANT*/get IMPORTANT() {
      return 505;
    },
    /*parser.TokenKind.CDATA_START*/get CDATA_START() {
      return 506;
    },
    /*parser.TokenKind.CDATA_END*/get CDATA_END() {
      return 507;
    },
    /*parser.TokenKind.UNICODE_RANGE*/get UNICODE_RANGE() {
      return 508;
    },
    /*parser.TokenKind.HEX_RANGE*/get HEX_RANGE() {
      return 509;
    },
    /*parser.TokenKind.IDENTIFIER*/get IDENTIFIER() {
      return 511;
    },
    /*parser.TokenKind.SELECTOR_EXPRESSION*/get SELECTOR_EXPRESSION() {
      return 512;
    },
    /*parser.TokenKind.COMBINATOR_NONE*/get COMBINATOR_NONE() {
      return 513;
    },
    /*parser.TokenKind.COMBINATOR_DESCENDANT*/get COMBINATOR_DESCENDANT() {
      return 514;
    },
    /*parser.TokenKind.COMBINATOR_PLUS*/get COMBINATOR_PLUS() {
      return 515;
    },
    /*parser.TokenKind.COMBINATOR_GREATER*/get COMBINATOR_GREATER() {
      return 516;
    },
    /*parser.TokenKind.COMBINATOR_TILDE*/get COMBINATOR_TILDE() {
      return 517;
    },
    /*parser.TokenKind.UNARY_OP_NONE*/get UNARY_OP_NONE() {
      return 518;
    },
    /*parser.TokenKind.INCLUDES*/get INCLUDES() {
      return 530;
    },
    /*parser.TokenKind.DASH_MATCH*/get DASH_MATCH() {
      return 531;
    },
    /*parser.TokenKind.PREFIX_MATCH*/get PREFIX_MATCH() {
      return 532;
    },
    /*parser.TokenKind.SUFFIX_MATCH*/get SUFFIX_MATCH() {
      return 533;
    },
    /*parser.TokenKind.SUBSTRING_MATCH*/get SUBSTRING_MATCH() {
      return 534;
    },
    /*parser.TokenKind.NO_MATCH*/get NO_MATCH() {
      return 535;
    },
    /*parser.TokenKind.UNIT_EM*/get UNIT_EM() {
      return 600;
    },
    /*parser.TokenKind.UNIT_EX*/get UNIT_EX() {
      return 601;
    },
    /*parser.TokenKind.UNIT_LENGTH_PX*/get UNIT_LENGTH_PX() {
      return 602;
    },
    /*parser.TokenKind.UNIT_LENGTH_CM*/get UNIT_LENGTH_CM() {
      return 603;
    },
    /*parser.TokenKind.UNIT_LENGTH_MM*/get UNIT_LENGTH_MM() {
      return 604;
    },
    /*parser.TokenKind.UNIT_LENGTH_IN*/get UNIT_LENGTH_IN() {
      return 605;
    },
    /*parser.TokenKind.UNIT_LENGTH_PT*/get UNIT_LENGTH_PT() {
      return 606;
    },
    /*parser.TokenKind.UNIT_LENGTH_PC*/get UNIT_LENGTH_PC() {
      return 607;
    },
    /*parser.TokenKind.UNIT_ANGLE_DEG*/get UNIT_ANGLE_DEG() {
      return 608;
    },
    /*parser.TokenKind.UNIT_ANGLE_RAD*/get UNIT_ANGLE_RAD() {
      return 609;
    },
    /*parser.TokenKind.UNIT_ANGLE_GRAD*/get UNIT_ANGLE_GRAD() {
      return 610;
    },
    /*parser.TokenKind.UNIT_ANGLE_TURN*/get UNIT_ANGLE_TURN() {
      return 611;
    },
    /*parser.TokenKind.UNIT_TIME_MS*/get UNIT_TIME_MS() {
      return 612;
    },
    /*parser.TokenKind.UNIT_TIME_S*/get UNIT_TIME_S() {
      return 613;
    },
    /*parser.TokenKind.UNIT_FREQ_HZ*/get UNIT_FREQ_HZ() {
      return 614;
    },
    /*parser.TokenKind.UNIT_FREQ_KHZ*/get UNIT_FREQ_KHZ() {
      return 615;
    },
    /*parser.TokenKind.UNIT_PERCENT*/get UNIT_PERCENT() {
      return 616;
    },
    /*parser.TokenKind.UNIT_FRACTION*/get UNIT_FRACTION() {
      return 617;
    },
    /*parser.TokenKind.UNIT_RESOLUTION_DPI*/get UNIT_RESOLUTION_DPI() {
      return 618;
    },
    /*parser.TokenKind.UNIT_RESOLUTION_DPCM*/get UNIT_RESOLUTION_DPCM() {
      return 619;
    },
    /*parser.TokenKind.UNIT_RESOLUTION_DPPX*/get UNIT_RESOLUTION_DPPX() {
      return 620;
    },
    /*parser.TokenKind.UNIT_CH*/get UNIT_CH() {
      return 621;
    },
    /*parser.TokenKind.UNIT_REM*/get UNIT_REM() {
      return 622;
    },
    /*parser.TokenKind.UNIT_VIEWPORT_VW*/get UNIT_VIEWPORT_VW() {
      return 623;
    },
    /*parser.TokenKind.UNIT_VIEWPORT_VH*/get UNIT_VIEWPORT_VH() {
      return 624;
    },
    /*parser.TokenKind.UNIT_VIEWPORT_VMIN*/get UNIT_VIEWPORT_VMIN() {
      return 625;
    },
    /*parser.TokenKind.UNIT_VIEWPORT_VMAX*/get UNIT_VIEWPORT_VMAX() {
      return 626;
    },
    /*parser.TokenKind.DIRECTIVE_NONE*/get DIRECTIVE_NONE() {
      return 640;
    },
    /*parser.TokenKind.DIRECTIVE_IMPORT*/get DIRECTIVE_IMPORT() {
      return 641;
    },
    /*parser.TokenKind.DIRECTIVE_MEDIA*/get DIRECTIVE_MEDIA() {
      return 642;
    },
    /*parser.TokenKind.DIRECTIVE_PAGE*/get DIRECTIVE_PAGE() {
      return 643;
    },
    /*parser.TokenKind.DIRECTIVE_CHARSET*/get DIRECTIVE_CHARSET() {
      return 644;
    },
    /*parser.TokenKind.DIRECTIVE_STYLET*/get DIRECTIVE_STYLET() {
      return 645;
    },
    /*parser.TokenKind.DIRECTIVE_KEYFRAMES*/get DIRECTIVE_KEYFRAMES() {
      return 646;
    },
    /*parser.TokenKind.DIRECTIVE_WEB_KIT_KEYFRAMES*/get DIRECTIVE_WEB_KIT_KEYFRAMES() {
      return 647;
    },
    /*parser.TokenKind.DIRECTIVE_MOZ_KEYFRAMES*/get DIRECTIVE_MOZ_KEYFRAMES() {
      return 648;
    },
    /*parser.TokenKind.DIRECTIVE_MS_KEYFRAMES*/get DIRECTIVE_MS_KEYFRAMES() {
      return 649;
    },
    /*parser.TokenKind.DIRECTIVE_O_KEYFRAMES*/get DIRECTIVE_O_KEYFRAMES() {
      return 650;
    },
    /*parser.TokenKind.DIRECTIVE_FONTFACE*/get DIRECTIVE_FONTFACE() {
      return 651;
    },
    /*parser.TokenKind.DIRECTIVE_NAMESPACE*/get DIRECTIVE_NAMESPACE() {
      return 652;
    },
    /*parser.TokenKind.DIRECTIVE_HOST*/get DIRECTIVE_HOST() {
      return 653;
    },
    /*parser.TokenKind.DIRECTIVE_MIXIN*/get DIRECTIVE_MIXIN() {
      return 654;
    },
    /*parser.TokenKind.DIRECTIVE_INCLUDE*/get DIRECTIVE_INCLUDE() {
      return 655;
    },
    /*parser.TokenKind.DIRECTIVE_CONTENT*/get DIRECTIVE_CONTENT() {
      return 656;
    },
    /*parser.TokenKind.DIRECTIVE_EXTEND*/get DIRECTIVE_EXTEND() {
      return 657;
    },
    /*parser.TokenKind.DIRECTIVE_MOZ_DOCUMENT*/get DIRECTIVE_MOZ_DOCUMENT() {
      return 658;
    },
    /*parser.TokenKind.DIRECTIVE_SUPPORTS*/get DIRECTIVE_SUPPORTS() {
      return 659;
    },
    /*parser.TokenKind.DIRECTIVE_VIEWPORT*/get DIRECTIVE_VIEWPORT() {
      return 660;
    },
    /*parser.TokenKind.DIRECTIVE_MS_VIEWPORT*/get DIRECTIVE_MS_VIEWPORT() {
      return 661;
    },
    /*parser.TokenKind.MEDIA_OP_ONLY*/get MEDIA_OP_ONLY() {
      return 665;
    },
    /*parser.TokenKind.MEDIA_OP_NOT*/get MEDIA_OP_NOT() {
      return 666;
    },
    /*parser.TokenKind.MEDIA_OP_AND*/get MEDIA_OP_AND() {
      return 667;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_TOPLEFTCORNER*/get MARGIN_DIRECTIVE_TOPLEFTCORNER() {
      return 670;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_TOPLEFT*/get MARGIN_DIRECTIVE_TOPLEFT() {
      return 671;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_TOPCENTER*/get MARGIN_DIRECTIVE_TOPCENTER() {
      return 672;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_TOPRIGHT*/get MARGIN_DIRECTIVE_TOPRIGHT() {
      return 673;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_TOPRIGHTCORNER*/get MARGIN_DIRECTIVE_TOPRIGHTCORNER() {
      return 674;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_BOTTOMLEFTCORNER*/get MARGIN_DIRECTIVE_BOTTOMLEFTCORNER() {
      return 675;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_BOTTOMLEFT*/get MARGIN_DIRECTIVE_BOTTOMLEFT() {
      return 676;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_BOTTOMCENTER*/get MARGIN_DIRECTIVE_BOTTOMCENTER() {
      return 677;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_BOTTOMRIGHT*/get MARGIN_DIRECTIVE_BOTTOMRIGHT() {
      return 678;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_BOTTOMRIGHTCORNER*/get MARGIN_DIRECTIVE_BOTTOMRIGHTCORNER() {
      return 679;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_LEFTTOP*/get MARGIN_DIRECTIVE_LEFTTOP() {
      return 680;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_LEFTMIDDLE*/get MARGIN_DIRECTIVE_LEFTMIDDLE() {
      return 681;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_LEFTBOTTOM*/get MARGIN_DIRECTIVE_LEFTBOTTOM() {
      return 682;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_RIGHTTOP*/get MARGIN_DIRECTIVE_RIGHTTOP() {
      return 683;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_RIGHTMIDDLE*/get MARGIN_DIRECTIVE_RIGHTMIDDLE() {
      return 684;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVE_RIGHTBOTTOM*/get MARGIN_DIRECTIVE_RIGHTBOTTOM() {
      return 685;
    },
    /*parser.TokenKind.CLASS_NAME*/get CLASS_NAME() {
      return 700;
    },
    /*parser.TokenKind.ELEMENT_NAME*/get ELEMENT_NAME() {
      return 701;
    },
    /*parser.TokenKind.HASH_NAME*/get HASH_NAME() {
      return 702;
    },
    /*parser.TokenKind.ATTRIBUTE_NAME*/get ATTRIBUTE_NAME() {
      return 703;
    },
    /*parser.TokenKind.PSEUDO_ELEMENT_NAME*/get PSEUDO_ELEMENT_NAME() {
      return 704;
    },
    /*parser.TokenKind.PSEUDO_CLASS_NAME*/get PSEUDO_CLASS_NAME() {
      return 705;
    },
    /*parser.TokenKind.NEGATION*/get NEGATION() {
      return 706;
    },
    /*parser.TokenKind._DIRECTIVES*/get _DIRECTIVES() {
      return C151 || CT.C151;
    },
    /*parser.TokenKind.MEDIA_OPERATORS*/get MEDIA_OPERATORS() {
      return C173 || CT.C173;
    },
    /*parser.TokenKind.MARGIN_DIRECTIVES*/get MARGIN_DIRECTIVES() {
      return C177 || CT.C177;
    },
    /*parser.TokenKind._UNITS*/get _UNITS() {
      return C194 || CT.C194;
    },
    /*parser.TokenKind.ASCII_UPPER_A*/get ASCII_UPPER_A() {
      return 65;
    },
    /*parser.TokenKind.ASCII_UPPER_Z*/get ASCII_UPPER_Z() {
      return 90;
    },
    /*parser.TokenKind._EXTENDED_COLOR_NAMES*/get _EXTENDED_COLOR_NAMES() {
      return C221 || CT.C221;
    }
  });
  parser.TokenChar = class TokenChar extends core.Object {};
  (parser.TokenChar.new = function() {
    ;
  }).prototype = parser.TokenChar.prototype;
  dart.addTypeTests(parser.TokenChar);
  dart.setLibraryUri(parser.TokenChar, "package:csslib/parser.dart");
  dart.defineLazy(parser.TokenChar, {
    /*parser.TokenChar.UNUSED*/get UNUSED() {
      return -1;
    },
    /*parser.TokenChar.END_OF_FILE*/get END_OF_FILE() {
      return 0;
    },
    /*parser.TokenChar.LPAREN*/get LPAREN() {
      return 40;
    },
    /*parser.TokenChar.RPAREN*/get RPAREN() {
      return 41;
    },
    /*parser.TokenChar.LBRACK*/get LBRACK() {
      return 91;
    },
    /*parser.TokenChar.RBRACK*/get RBRACK() {
      return 93;
    },
    /*parser.TokenChar.LBRACE*/get LBRACE() {
      return 123;
    },
    /*parser.TokenChar.RBRACE*/get RBRACE() {
      return 125;
    },
    /*parser.TokenChar.DOT*/get DOT() {
      return 46;
    },
    /*parser.TokenChar.SEMICOLON*/get SEMICOLON() {
      return 59;
    },
    /*parser.TokenChar.AT*/get AT() {
      return 64;
    },
    /*parser.TokenChar.HASH*/get HASH() {
      return 35;
    },
    /*parser.TokenChar.PLUS*/get PLUS() {
      return 43;
    },
    /*parser.TokenChar.GREATER*/get GREATER() {
      return 62;
    },
    /*parser.TokenChar.TILDE*/get TILDE() {
      return 126;
    },
    /*parser.TokenChar.ASTERISK*/get ASTERISK() {
      return 42;
    },
    /*parser.TokenChar.NAMESPACE*/get NAMESPACE() {
      return 124;
    },
    /*parser.TokenChar.COLON*/get COLON() {
      return 58;
    },
    /*parser.TokenChar.PRIVATE_NAME*/get PRIVATE_NAME() {
      return 95;
    },
    /*parser.TokenChar.COMMA*/get COMMA() {
      return 44;
    },
    /*parser.TokenChar.SPACE*/get SPACE() {
      return 32;
    },
    /*parser.TokenChar.TAB*/get TAB() {
      return 9;
    },
    /*parser.TokenChar.NEWLINE*/get NEWLINE() {
      return 10;
    },
    /*parser.TokenChar.RETURN*/get RETURN() {
      return 13;
    },
    /*parser.TokenChar.BACKSPACE*/get BACKSPACE() {
      return 8;
    },
    /*parser.TokenChar.FF*/get FF() {
      return 12;
    },
    /*parser.TokenChar.VT*/get VT() {
      return 11;
    },
    /*parser.TokenChar.PERCENT*/get PERCENT() {
      return 37;
    },
    /*parser.TokenChar.SINGLE_QUOTE*/get SINGLE_QUOTE() {
      return 39;
    },
    /*parser.TokenChar.DOUBLE_QUOTE*/get DOUBLE_QUOTE() {
      return 34;
    },
    /*parser.TokenChar.SLASH*/get SLASH() {
      return 47;
    },
    /*parser.TokenChar.EQUALS*/get EQUALS() {
      return 61;
    },
    /*parser.TokenChar.OR*/get OR() {
      return 124;
    },
    /*parser.TokenChar.CARET*/get CARET() {
      return 94;
    },
    /*parser.TokenChar.DOLLAR*/get DOLLAR() {
      return 36;
    },
    /*parser.TokenChar.LESS*/get LESS() {
      return 60;
    },
    /*parser.TokenChar.BANG*/get BANG() {
      return 33;
    },
    /*parser.TokenChar.MINUS*/get MINUS() {
      return 45;
    },
    /*parser.TokenChar.BACKSLASH*/get BACKSLASH() {
      return 92;
    },
    /*parser.TokenChar.AMPERSAND*/get AMPERSAND() {
      return 38;
    }
  });
  const _nextChar = dart.privateName(parser, "_nextChar");
  const _finishToken = dart.privateName(parser, "_finishToken");
  const _peekChar = dart.privateName(parser, "_peekChar");
  const _text$ = dart.privateName(parser, "_text");
  const _errorToken = dart.privateName(parser, "_errorToken");
  const _maybeEatChar = dart.privateName(parser, "_maybeEatChar");
  const _nextCharsAreNumber = dart.privateName(parser, "_nextCharsAreNumber");
  const _file$ = dart.privateName(parser, "_file");
  const _makeStringToken = dart.privateName(parser, "_makeStringToken");
  const _makeRawStringToken = dart.privateName(parser, "_makeRawStringToken");
  const TokenizerBase_inSelectorExpression = dart.privateName(parser, "TokenizerBase.inSelectorExpression");
  const TokenizerBase_inSelector = dart.privateName(parser, "TokenizerBase.inSelector");
  parser.TokenizerBase = class TokenizerBase extends core.Object {
    get inSelectorExpression() {
      return this[inSelectorExpression$];
    }
    set inSelectorExpression(value) {
      this[inSelectorExpression$] = value;
    }
    get inSelector() {
      return this[inSelector$];
    }
    set inSelector(value) {
      this[inSelector$] = value;
    }
    get mark() {
      return new parser.TokenizerState.new(this);
    }
    restore(markedData) {
      this[_index$] = markedData.index;
      this[_startIndex] = markedData.startIndex;
      this.inSelectorExpression = markedData.inSelectorExpression;
      this.inSelector = markedData.inSelector;
    }
    [_nextChar]() {
      let t4;
      if (dart.notNull(this[_index$]) < this[_text$].length) {
        return this[_text$][$codeUnitAt]((t4 = this[_index$], this[_index$] = dart.notNull(t4) + 1, t4));
      } else {
        return 0;
      }
    }
    [_peekChar](offset) {
      if (offset === void 0) offset = 0;
      if (dart.notNull(this[_index$]) + dart.notNull(offset) < this[_text$].length) {
        return this[_text$][$codeUnitAt](dart.notNull(this[_index$]) + dart.notNull(offset));
      } else {
        return 0;
      }
    }
    [_maybeEatChar](ch) {
      if (dart.notNull(this[_index$]) < this[_text$].length) {
        if (this[_text$][$codeUnitAt](this[_index$]) === ch) {
          this[_index$] = dart.notNull(this[_index$]) + 1;
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    [_nextCharsAreNumber](first) {
      if (dart.test(parser.TokenizerHelpers.isDigit(first))) return true;
      let second = this[_peekChar]();
      if (first === 46) return parser.TokenizerHelpers.isDigit(second);
      if (first === 43 || first === 45) {
        return dart.test(parser.TokenizerHelpers.isDigit(second)) || second === 46 && dart.test(parser.TokenizerHelpers.isDigit(this[_peekChar](1)));
      }
      return false;
    }
    [_finishToken](kind) {
      return new parser.Token.new(kind, this[_file$].span(this[_startIndex], this[_index$]));
    }
    [_errorToken](message) {
      if (message === void 0) message = null;
      return new parser.ErrorToken.new(65, this[_file$].span(this[_startIndex], this[_index$]), message);
    }
    finishWhitespace() {
      let t4;
      this[_index$] = dart.notNull(this[_index$]) - 1;
      while (dart.notNull(this[_index$]) < this[_text$].length) {
        let ch = this[_text$][$codeUnitAt]((t4 = this[_index$], this[_index$] = dart.notNull(t4) + 1, t4));
        if (ch === 32 || ch === 9 || ch === 13) {
        } else if (ch === 10) {
          if (!dart.test(this[_inString$])) {
            return this[_finishToken](63);
          }
        } else {
          this[_index$] = dart.notNull(this[_index$]) - 1;
          if (dart.test(this[_inString$])) {
            return this.next();
          } else {
            return this[_finishToken](63);
          }
        }
      }
      return this[_finishToken](1);
    }
    finishMultiLineComment() {
      let nesting = 1;
      do {
        let ch = this[_nextChar]();
        if (ch === 0) {
          return this[_errorToken]();
        } else if (ch === 42) {
          if (dart.test(this[_maybeEatChar](47))) {
            nesting = nesting - 1;
          }
        } else if (ch === 47) {
          if (dart.test(this[_maybeEatChar](42))) {
            nesting = nesting + 1;
          }
        }
      } while (nesting > 0);
      if (dart.test(this[_inString$])) {
        return this.next();
      } else {
        return this[_finishToken](64);
      }
    }
    eatDigits() {
      while (dart.notNull(this[_index$]) < this[_text$].length) {
        if (dart.test(parser.TokenizerHelpers.isDigit(this[_text$][$codeUnitAt](this[_index$])))) {
          this[_index$] = dart.notNull(this[_index$]) + 1;
        } else {
          return;
        }
      }
    }
    static _hexDigit(c) {
      if (dart.notNull(c) >= 48 && dart.notNull(c) <= 57) {
        return dart.notNull(c) - 48;
      } else if (dart.notNull(c) >= 97 && dart.notNull(c) <= 102) {
        return dart.notNull(c) - 87;
      } else if (dart.notNull(c) >= 65 && dart.notNull(c) <= 70) {
        return dart.notNull(c) - 55;
      } else {
        return -1;
      }
    }
    readHex(hexLength) {
      if (hexLength === void 0) hexLength = null;
      let maxIndex = null;
      if (hexLength == null) {
        maxIndex = this[_text$].length - 1;
      } else {
        maxIndex = dart.notNull(this[_index$]) + dart.notNull(hexLength);
        if (dart.notNull(maxIndex) >= this[_text$].length) return -1;
      }
      let result = 0;
      while (dart.notNull(this[_index$]) < dart.notNull(maxIndex)) {
        let digit = parser.TokenizerBase._hexDigit(this[_text$][$codeUnitAt](this[_index$]));
        if (digit === -1) {
          if (hexLength == null) {
            return result;
          } else {
            return -1;
          }
        }
        parser.TokenizerBase._hexDigit(this[_text$][$codeUnitAt](this[_index$]));
        result = result * 16 + dart.notNull(digit);
        this[_index$] = dart.notNull(this[_index$]) + 1;
      }
      return result;
    }
    finishNumber() {
      this.eatDigits();
      if (this[_peekChar]() === 46) {
        this[_nextChar]();
        if (dart.test(parser.TokenizerHelpers.isDigit(this[_peekChar]()))) {
          this.eatDigits();
          return this.finishNumberExtra(62);
        } else {
          this[_index$] = dart.notNull(this[_index$]) - 1;
        }
      }
      return this.finishNumberExtra(60);
    }
    finishNumberExtra(kind) {
      if (dart.test(this[_maybeEatChar](101)) || dart.test(this[_maybeEatChar](69))) {
        kind = 62;
        this[_maybeEatChar](34);
        this[_maybeEatChar](12);
        this.eatDigits();
      }
      if (this[_peekChar]() !== 0 && dart.test(parser.TokenizerHelpers.isIdentifierStart(this[_peekChar]()))) {
        this[_nextChar]();
        return this[_errorToken]("illegal character in number");
      }
      return this[_finishToken](kind);
    }
    [_makeStringToken](buf, isPart) {
      let s = core.String.fromCharCodes(buf);
      let kind = dart.test(isPart) ? 501 : 500;
      return new parser.LiteralToken.new(kind, this[_file$].span(this[_startIndex], this[_index$]), s);
    }
    makeIEFilter(start, end) {
      let filter = this[_text$][$substring](start, end);
      return new parser.LiteralToken.new(500, this[_file$].span(start, end), filter);
    }
    [_makeRawStringToken](isMultiline) {
      let s = null;
      if (dart.test(isMultiline)) {
        let start = dart.notNull(this[_startIndex]) + 4;
        if (this[_text$][$_get](start) === "\n") start = start + 1;
        s = this[_text$][$substring](start, dart.notNull(this[_index$]) - 3);
      } else {
        s = this[_text$][$substring](dart.notNull(this[_startIndex]) + 2, dart.notNull(this[_index$]) - 1);
      }
      return new parser.LiteralToken.new(500, this[_file$].span(this[_startIndex], this[_index$]), s);
    }
    finishMultilineString(quote) {
      let buf = JSArrayOfint().of([]);
      while (true) {
        let ch = this[_nextChar]();
        if (ch === 0) {
          return this[_errorToken]();
        } else if (ch == quote) {
          if (dart.test(this[_maybeEatChar](quote))) {
            if (dart.test(this[_maybeEatChar](quote))) {
              return this[_makeStringToken](buf, false);
            }
            buf[$add](quote);
          }
          buf[$add](quote);
        } else if (ch === 92) {
          let escapeVal = this.readEscapeSequence();
          if (escapeVal === -1) {
            return this[_errorToken]("invalid hex escape sequence");
          } else {
            buf[$add](escapeVal);
          }
        } else {
          buf[$add](ch);
        }
      }
    }
    finishString(quote) {
      if (dart.test(this[_maybeEatChar](quote))) {
        if (dart.test(this[_maybeEatChar](quote))) {
          this[_maybeEatChar](10);
          return this.finishMultilineString(quote);
        } else {
          return this[_makeStringToken](JSArrayOfint().of([]), false);
        }
      }
      return this.finishStringBody(quote);
    }
    finishRawString(quote) {
      if (dart.test(this[_maybeEatChar](quote))) {
        if (dart.test(this[_maybeEatChar](quote))) {
          return this.finishMultilineRawString(quote);
        } else {
          return this[_makeStringToken](JSArrayOfint().of([]), false);
        }
      }
      while (true) {
        let ch = this[_nextChar]();
        if (ch == quote) {
          return this[_makeRawStringToken](false);
        } else if (ch === 0) {
          return this[_errorToken]();
        }
      }
    }
    finishMultilineRawString(quote) {
      while (true) {
        let ch = this[_nextChar]();
        if (ch === 0) {
          return this[_errorToken]();
        } else if (ch == quote && dart.test(this[_maybeEatChar](quote)) && dart.test(this[_maybeEatChar](quote))) {
          return this[_makeRawStringToken](true);
        }
      }
    }
    finishStringBody(quote) {
      let buf = JSArrayOfint().of([]);
      while (true) {
        let ch = this[_nextChar]();
        if (ch == quote) {
          return this[_makeStringToken](buf, false);
        } else if (ch === 0) {
          return this[_errorToken]();
        } else if (ch === 92) {
          let escapeVal = this.readEscapeSequence();
          if (escapeVal === -1) {
            return this[_errorToken]("invalid hex escape sequence");
          } else {
            buf[$add](escapeVal);
          }
        } else {
          buf[$add](ch);
        }
      }
    }
    readEscapeSequence() {
      let ch = this[_nextChar]();
      let hexValue = null;
      switch (ch) {
        case 110:
        {
          return 10;
        }
        case 114:
        {
          return 13;
        }
        case 102:
        {
          return 12;
        }
        case 98:
        {
          return 8;
        }
        case 116:
        {
          return 9;
        }
        case 118:
        {
          return 12;
        }
        case 120:
        {
          hexValue = this.readHex(2);
          break;
        }
        case 117:
        {
          if (dart.test(this[_maybeEatChar](123))) {
            hexValue = this.readHex();
            if (!dart.test(this[_maybeEatChar](125))) {
              return -1;
            }
          } else {
            hexValue = this.readHex(4);
          }
          break;
        }
        default:
        {
          return ch;
        }
      }
      if (hexValue === -1) return -1;
      if (dart.notNull(hexValue) < 55296 || dart.notNull(hexValue) > 57343 && dart.notNull(hexValue) <= 65535) {
        return hexValue;
      } else if (dart.notNull(hexValue) <= 1114111) {
        messages.messages.error("unicode values greater than 2 bytes not implemented yet", this[_file$].span(this[_startIndex], dart.notNull(this[_startIndex]) + 1));
        return -1;
      } else {
        return -1;
      }
    }
    finishDot() {
      if (dart.test(parser.TokenizerHelpers.isDigit(this[_peekChar]()))) {
        this.eatDigits();
        return this.finishNumberExtra(62);
      } else {
        return this[_finishToken](8);
      }
    }
  };
  (parser.TokenizerBase.new = function(_file, _text, _inString, _index) {
    if (_index === void 0) _index = 0;
    this[inSelectorExpression$] = false;
    this[inSelector$] = false;
    this[_index$] = 0;
    this[_startIndex] = 0;
    this[_file$] = _file;
    this[_text$] = _text;
    this[_inString$] = _inString;
    this[_index$] = _index;
    ;
  }).prototype = parser.TokenizerBase.prototype;
  dart.addTypeTests(parser.TokenizerBase);
  const inSelectorExpression$ = TokenizerBase_inSelectorExpression;
  const inSelector$ = TokenizerBase_inSelector;
  dart.setMethodSignature(parser.TokenizerBase, () => ({
    __proto__: dart.getMethods(parser.TokenizerBase.__proto__),
    restore: dart.fnType(dart.void, [parser.TokenizerState]),
    [_nextChar]: dart.fnType(core.int, []),
    [_peekChar]: dart.fnType(core.int, [], [core.int]),
    [_maybeEatChar]: dart.fnType(core.bool, [core.int]),
    [_nextCharsAreNumber]: dart.fnType(core.bool, [core.int]),
    [_finishToken]: dart.fnType(parser.Token, [core.int]),
    [_errorToken]: dart.fnType(parser.Token, [], [core.String]),
    finishWhitespace: dart.fnType(parser.Token, []),
    finishMultiLineComment: dart.fnType(parser.Token, []),
    eatDigits: dart.fnType(dart.void, []),
    readHex: dart.fnType(core.int, [], [core.int]),
    finishNumber: dart.fnType(parser.Token, []),
    finishNumberExtra: dart.fnType(parser.Token, [core.int]),
    [_makeStringToken]: dart.fnType(parser.Token, [core.List$(core.int), core.bool]),
    makeIEFilter: dart.fnType(parser.Token, [core.int, core.int]),
    [_makeRawStringToken]: dart.fnType(parser.Token, [core.bool]),
    finishMultilineString: dart.fnType(parser.Token, [core.int]),
    finishString: dart.fnType(parser.Token, [core.int]),
    finishRawString: dart.fnType(parser.Token, [core.int]),
    finishMultilineRawString: dart.fnType(parser.Token, [core.int]),
    finishStringBody: dart.fnType(parser.Token, [core.int]),
    readEscapeSequence: dart.fnType(core.int, []),
    finishDot: dart.fnType(parser.Token, [])
  }));
  dart.setGetterSignature(parser.TokenizerBase, () => ({
    __proto__: dart.getGetters(parser.TokenizerBase.__proto__),
    mark: parser.TokenizerState
  }));
  dart.setLibraryUri(parser.TokenizerBase, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.TokenizerBase, () => ({
    __proto__: dart.getFields(parser.TokenizerBase.__proto__),
    [_file$]: dart.finalFieldType(file$.SourceFile),
    [_text$]: dart.finalFieldType(core.String),
    [_inString$]: dart.fieldType(core.bool),
    inSelectorExpression: dart.fieldType(core.bool),
    inSelector: dart.fieldType(core.bool),
    [_index$]: dart.fieldType(core.int),
    [_startIndex]: dart.fieldType(core.int)
  }));
  const Tokenizer_UNICODE_U = dart.privateName(parser, "Tokenizer.UNICODE_U");
  const Tokenizer_UNICODE_LOWER_U = dart.privateName(parser, "Tokenizer.UNICODE_LOWER_U");
  const Tokenizer_UNICODE_PLUS = dart.privateName(parser, "Tokenizer.UNICODE_PLUS");
  const Tokenizer_QUESTION_MARK = dart.privateName(parser, "Tokenizer.QUESTION_MARK");
  const Tokenizer_CDATA_NAME = dart.privateName(parser, "Tokenizer.CDATA_NAME");
  parser.Tokenizer = class Tokenizer extends parser.TokenizerBase {
    get UNICODE_U() {
      return this[UNICODE_U];
    }
    set UNICODE_U(value) {
      super.UNICODE_U = value;
    }
    get UNICODE_LOWER_U() {
      return this[UNICODE_LOWER_U];
    }
    set UNICODE_LOWER_U(value) {
      super.UNICODE_LOWER_U = value;
    }
    get UNICODE_PLUS() {
      return this[UNICODE_PLUS];
    }
    set UNICODE_PLUS(value) {
      super.UNICODE_PLUS = value;
    }
    get QUESTION_MARK() {
      return this[QUESTION_MARK];
    }
    set QUESTION_MARK(value) {
      super.QUESTION_MARK = value;
    }
    get CDATA_NAME() {
      return this[CDATA_NAME];
    }
    set CDATA_NAME(value) {
      super.CDATA_NAME = value;
    }
    next(opts) {
      let unicodeRange = opts && 'unicodeRange' in opts ? opts.unicodeRange : false;
      this[_startIndex] = this[_index$];
      let ch = null;
      ch = this[_nextChar]();
      switch (ch) {
        case 10:
        case 13:
        case 32:
        case 9:
        {
          return this.finishWhitespace();
        }
        case 0:
        {
          return this[_finishToken](1);
        }
        case 64:
        {
          let peekCh = this[_peekChar]();
          if (dart.test(parser.TokenizerHelpers.isIdentifierStart(peekCh))) {
            let oldIndex = this[_index$];
            let oldStartIndex = this[_startIndex];
            this[_startIndex] = this[_index$];
            ch = this[_nextChar]();
            this.finishIdentifier();
            let tokId = parser.TokenKind.matchDirectives(this[_text$], this[_startIndex], dart.notNull(this[_index$]) - dart.notNull(this[_startIndex]));
            if (tokId === -1) {
              tokId = parser.TokenKind.matchMarginDirectives(this[_text$], this[_startIndex], dart.notNull(this[_index$]) - dart.notNull(this[_startIndex]));
            }
            if (tokId !== -1) {
              return this[_finishToken](tokId);
            } else {
              this[_startIndex] = oldStartIndex;
              this[_index$] = oldIndex;
            }
          }
          return this[_finishToken](10);
        }
        case 46:
        {
          let start = this[_startIndex];
          if (dart.test(this.maybeEatDigit())) {
            let number = this.finishNumber();
            if (number.kind === 60) {
              this[_startIndex] = start;
              return this[_finishToken](62);
            } else {
              return this[_errorToken]();
            }
          }
          return this[_finishToken](8);
        }
        case 40:
        {
          return this[_finishToken](2);
        }
        case 41:
        {
          return this[_finishToken](3);
        }
        case 123:
        {
          return this[_finishToken](6);
        }
        case 125:
        {
          return this[_finishToken](7);
        }
        case 91:
        {
          return this[_finishToken](4);
        }
        case 93:
        {
          if (dart.test(this[_maybeEatChar](93)) && dart.test(this[_maybeEatChar](62))) {
            return this.next();
          }
          return this[_finishToken](5);
        }
        case 35:
        {
          return this[_finishToken](11);
        }
        case 43:
        {
          if (dart.test(this[_nextCharsAreNumber](ch))) return this.finishNumber();
          return this[_finishToken](12);
        }
        case 45:
        {
          if (dart.test(this.inSelectorExpression) || dart.test(unicodeRange)) {
            return this[_finishToken](34);
          } else if (dart.test(this[_nextCharsAreNumber](ch))) {
            return this.finishNumber();
          } else if (dart.test(parser.TokenizerHelpers.isIdentifierStart(ch))) {
            return this.finishIdentifier();
          }
          return this[_finishToken](34);
        }
        case 62:
        {
          return this[_finishToken](13);
        }
        case 126:
        {
          if (dart.test(this[_maybeEatChar](61))) {
            return this[_finishToken](530);
          }
          return this[_finishToken](14);
        }
        case 42:
        {
          if (dart.test(this[_maybeEatChar](61))) {
            return this[_finishToken](534);
          }
          return this[_finishToken](15);
        }
        case 38:
        {
          return this[_finishToken](36);
        }
        case 124:
        {
          if (dart.test(this[_maybeEatChar](61))) {
            return this[_finishToken](531);
          }
          return this[_finishToken](16);
        }
        case 58:
        {
          return this[_finishToken](17);
        }
        case 44:
        {
          return this[_finishToken](19);
        }
        case 59:
        {
          return this[_finishToken](9);
        }
        case 37:
        {
          return this[_finishToken](24);
        }
        case 39:
        {
          return this[_finishToken](25);
        }
        case 34:
        {
          return this[_finishToken](26);
        }
        case 47:
        {
          if (dart.test(this[_maybeEatChar](42))) return this.finishMultiLineComment();
          return this[_finishToken](27);
        }
        case 60:
        {
          if (dart.test(this[_maybeEatChar](33))) {
            if (dart.test(this[_maybeEatChar](45)) && dart.test(this[_maybeEatChar](45))) {
              return this.finishHtmlComment();
            } else if (dart.test(this[_maybeEatChar](91)) && dart.test(this[_maybeEatChar](this.CDATA_NAME[$_get](0))) && dart.test(this[_maybeEatChar](this.CDATA_NAME[$_get](1))) && dart.test(this[_maybeEatChar](this.CDATA_NAME[$_get](2))) && dart.test(this[_maybeEatChar](this.CDATA_NAME[$_get](3))) && dart.test(this[_maybeEatChar](this.CDATA_NAME[$_get](4))) && dart.test(this[_maybeEatChar](91))) {
              return this.next();
            }
          }
          return this[_finishToken](32);
        }
        case 61:
        {
          return this[_finishToken](28);
        }
        case 94:
        {
          if (dart.test(this[_maybeEatChar](61))) {
            return this[_finishToken](532);
          }
          return this[_finishToken](30);
        }
        case 36:
        {
          if (dart.test(this[_maybeEatChar](61))) {
            return this[_finishToken](533);
          }
          return this[_finishToken](31);
        }
        case 33:
        {
          let tok = this.finishIdentifier();
          return tok == null ? this[_finishToken](33) : tok;
        }
        default:
        {
          if (!dart.test(this.inSelector) && ch === 92) {
            return this[_finishToken](35);
          }
          if (dart.test(unicodeRange)) {
            if (dart.test(this.maybeEatHexDigit())) {
              let t = this.finishHexNumber();
              if (dart.test(this.maybeEatQuestionMark())) this.finishUnicodeRange();
              return t;
            } else if (dart.test(this.maybeEatQuestionMark())) {
              return this.finishUnicodeRange();
            } else {
              return this[_errorToken]();
            }
          } else if (dart.test(this[_inString$]) && (ch == this.UNICODE_U || ch == this.UNICODE_LOWER_U) && this[_peekChar]() == this.UNICODE_PLUS) {
            this[_nextChar]();
            this[_startIndex] = this[_index$];
            return this[_finishToken](508);
          } else if (dart.test(this.varDef(ch))) {
            return this[_finishToken](400);
          } else if (dart.test(this.varUsage(ch))) {
            return this[_finishToken](401);
          } else if (dart.test(parser.TokenizerHelpers.isIdentifierStart(ch))) {
            return this.finishIdentifier();
          } else if (dart.test(parser.TokenizerHelpers.isDigit(ch))) {
            return this.finishNumber();
          }
          return this[_errorToken]();
        }
      }
    }
    varDef(ch) {
      return ch === "v"[$codeUnitAt](0) && dart.test(this[_maybeEatChar]("a"[$codeUnitAt](0))) && dart.test(this[_maybeEatChar]("r"[$codeUnitAt](0))) && dart.test(this[_maybeEatChar]("-"[$codeUnitAt](0)));
    }
    varUsage(ch) {
      return ch === "v"[$codeUnitAt](0) && dart.test(this[_maybeEatChar]("a"[$codeUnitAt](0))) && dart.test(this[_maybeEatChar]("r"[$codeUnitAt](0))) && this[_peekChar]() === "-"[$codeUnitAt](0);
    }
    [_errorToken](message) {
      if (message === void 0) message = null;
      return this[_finishToken](65);
    }
    getIdentifierKind() {
      let tokId = -1;
      if (!dart.test(this.inSelectorExpression) && !dart.test(this.inSelector)) {
        tokId = parser.TokenKind.matchUnits(this[_text$], this[_startIndex], dart.notNull(this[_index$]) - dart.notNull(this[_startIndex]));
      }
      if (tokId === -1) {
        tokId = this[_text$][$substring](this[_startIndex], this[_index$]) === "!important" ? 505 : -1;
      }
      return dart.notNull(tokId) >= 0 ? tokId : 511;
    }
    finishIdentifier() {
      let t4;
      let chars = JSArrayOfint().of([]);
      let validateFrom = this[_index$];
      this[_index$] = this[_startIndex];
      while (dart.notNull(this[_index$]) < this[_text$].length) {
        let ch = this[_text$][$codeUnitAt](this[_index$]);
        if (ch === 92 && dart.test(this[_inString$])) {
          let startHex = this[_index$] = dart.notNull(this[_index$]) + 1;
          this.eatHexDigits(startHex + 6);
          if (this[_index$] !== startHex) {
            chars[$add](core.int.parse("0x" + this[_text$][$substring](startHex, this[_index$])));
            if (this[_index$] === this[_text$].length) break;
            ch = this[_text$][$codeUnitAt](this[_index$]);
            if (dart.notNull(this[_index$]) - startHex !== 6 && (ch === 32 || ch === 9 || ch === 13 || ch === 10)) {
              this[_index$] = dart.notNull(this[_index$]) + 1;
            }
          } else {
            if (this[_index$] === this[_text$].length) break;
            chars[$add](this[_text$][$codeUnitAt]((t4 = this[_index$], this[_index$] = dart.notNull(t4) + 1, t4)));
          }
        } else if (dart.notNull(this[_index$]) < dart.notNull(validateFrom) || dart.test(dart.test(this.inSelectorExpression) ? parser.TokenizerHelpers.isIdentifierPartExpr(ch) : parser.TokenizerHelpers.isIdentifierPart(ch))) {
          chars[$add](ch);
          this[_index$] = dart.notNull(this[_index$]) + 1;
        } else {
          break;
        }
      }
      let span = this[_file$].span(this[_startIndex], this[_index$]);
      let text = core.String.fromCharCodes(chars);
      return new parser.IdentifierToken.new(text, this.getIdentifierKind(), span);
    }
    finishNumber() {
      this.eatDigits();
      if (this[_peekChar]() === 46) {
        this[_nextChar]();
        if (dart.test(parser.TokenizerHelpers.isDigit(this[_peekChar]()))) {
          this.eatDigits();
          return this[_finishToken](62);
        } else {
          this[_index$] = dart.notNull(this[_index$]) - 1;
        }
      }
      return this[_finishToken](60);
    }
    maybeEatDigit() {
      if (dart.notNull(this[_index$]) < this[_text$].length && dart.test(parser.TokenizerHelpers.isDigit(this[_text$][$codeUnitAt](this[_index$])))) {
        this[_index$] = dart.notNull(this[_index$]) + 1;
        return true;
      }
      return false;
    }
    finishHexNumber() {
      this.eatHexDigits(this[_text$].length);
      return this[_finishToken](61);
    }
    eatHexDigits(end) {
      end = math.min(core.int, end, this[_text$].length);
      while (dart.notNull(this[_index$]) < dart.notNull(end)) {
        if (dart.test(parser.TokenizerHelpers.isHexDigit(this[_text$][$codeUnitAt](this[_index$])))) {
          this[_index$] = dart.notNull(this[_index$]) + 1;
        } else {
          return;
        }
      }
    }
    maybeEatHexDigit() {
      if (dart.notNull(this[_index$]) < this[_text$].length && dart.test(parser.TokenizerHelpers.isHexDigit(this[_text$][$codeUnitAt](this[_index$])))) {
        this[_index$] = dart.notNull(this[_index$]) + 1;
        return true;
      }
      return false;
    }
    maybeEatQuestionMark() {
      if (dart.notNull(this[_index$]) < this[_text$].length && this[_text$][$codeUnitAt](this[_index$]) === this.QUESTION_MARK) {
        this[_index$] = dart.notNull(this[_index$]) + 1;
        return true;
      }
      return false;
    }
    eatQuestionMarks() {
      while (dart.notNull(this[_index$]) < this[_text$].length) {
        if (this[_text$][$codeUnitAt](this[_index$]) === this.QUESTION_MARK) {
          this[_index$] = dart.notNull(this[_index$]) + 1;
        } else {
          return;
        }
      }
    }
    finishUnicodeRange() {
      this.eatQuestionMarks();
      return this[_finishToken](509);
    }
    finishHtmlComment() {
      while (true) {
        let ch = this[_nextChar]();
        if (ch === 0) {
          return this[_finishToken](67);
        } else if (ch === 45) {
          if (dart.test(this[_maybeEatChar](45))) {
            if (dart.test(this[_maybeEatChar](62))) {
              if (dart.test(this[_inString$])) {
                return this.next();
              } else {
                return this[_finishToken](504);
              }
            }
          }
        }
      }
    }
    finishMultiLineComment() {
      while (true) {
        let ch = this[_nextChar]();
        if (ch === 0) {
          return this[_finishToken](67);
        } else if (ch === 42) {
          if (dart.test(this[_maybeEatChar](47))) {
            if (dart.test(this[_inString$])) {
              return this.next();
            } else {
              return this[_finishToken](64);
            }
          }
        }
      }
    }
  };
  (parser.Tokenizer.new = function(file, text, skipWhitespace, index) {
    if (index === void 0) index = 0;
    this[UNICODE_U] = "U"[$codeUnitAt](0);
    this[UNICODE_LOWER_U] = "u"[$codeUnitAt](0);
    this[UNICODE_PLUS] = "+"[$codeUnitAt](0);
    this[QUESTION_MARK] = "?"[$codeUnitAt](0);
    this[CDATA_NAME] = "CDATA"[$codeUnits];
    parser.Tokenizer.__proto__.new.call(this, file, text, skipWhitespace, index);
    ;
  }).prototype = parser.Tokenizer.prototype;
  dart.addTypeTests(parser.Tokenizer);
  const UNICODE_U = Tokenizer_UNICODE_U;
  const UNICODE_LOWER_U = Tokenizer_UNICODE_LOWER_U;
  const UNICODE_PLUS = Tokenizer_UNICODE_PLUS;
  const QUESTION_MARK = Tokenizer_QUESTION_MARK;
  const CDATA_NAME = Tokenizer_CDATA_NAME;
  dart.setMethodSignature(parser.Tokenizer, () => ({
    __proto__: dart.getMethods(parser.Tokenizer.__proto__),
    next: dart.fnType(parser.Token, [], {unicodeRange: core.bool}),
    varDef: dart.fnType(core.bool, [core.int]),
    varUsage: dart.fnType(core.bool, [core.int]),
    getIdentifierKind: dart.fnType(core.int, []),
    finishIdentifier: dart.fnType(parser.Token, []),
    maybeEatDigit: dart.fnType(core.bool, []),
    finishHexNumber: dart.fnType(parser.Token, []),
    eatHexDigits: dart.fnType(dart.void, [core.int]),
    maybeEatHexDigit: dart.fnType(core.bool, []),
    maybeEatQuestionMark: dart.fnType(core.bool, []),
    eatQuestionMarks: dart.fnType(dart.void, []),
    finishUnicodeRange: dart.fnType(parser.Token, []),
    finishHtmlComment: dart.fnType(parser.Token, [])
  }));
  dart.setLibraryUri(parser.Tokenizer, "package:csslib/parser.dart");
  dart.setFieldSignature(parser.Tokenizer, () => ({
    __proto__: dart.getFields(parser.Tokenizer.__proto__),
    UNICODE_U: dart.finalFieldType(core.int),
    UNICODE_LOWER_U: dart.finalFieldType(core.int),
    UNICODE_PLUS: dart.finalFieldType(core.int),
    QUESTION_MARK: dart.finalFieldType(core.int),
    CDATA_NAME: dart.finalFieldType(core.List$(core.int))
  }));
  parser.TokenizerHelpers = class TokenizerHelpers extends core.Object {
    static isIdentifierStart(c) {
      return dart.test(parser.TokenizerHelpers.isIdentifierStartExpr(c)) || c === 45;
    }
    static isDigit(c) {
      return dart.notNull(c) >= 48 && dart.notNull(c) <= 57;
    }
    static isHexDigit(c) {
      return dart.test(parser.TokenizerHelpers.isDigit(c)) || dart.notNull(c) >= 97 && dart.notNull(c) <= 102 || dart.notNull(c) >= 65 && dart.notNull(c) <= 70;
    }
    static isIdentifierPart(c) {
      return dart.test(parser.TokenizerHelpers.isIdentifierPartExpr(c)) || c === 45;
    }
    static isIdentifierStartExpr(c) {
      return dart.notNull(c) >= 97 && dart.notNull(c) <= 122 || dart.notNull(c) >= 65 && dart.notNull(c) <= 90 || c === 95 || dart.notNull(c) >= 160 || c === 92;
    }
    static isIdentifierPartExpr(c) {
      return dart.test(parser.TokenizerHelpers.isIdentifierStartExpr(c)) || dart.test(parser.TokenizerHelpers.isDigit(c));
    }
  };
  (parser.TokenizerHelpers.new = function() {
    ;
  }).prototype = parser.TokenizerHelpers.prototype;
  dart.addTypeTests(parser.TokenizerHelpers);
  dart.setLibraryUri(parser.TokenizerHelpers, "package:csslib/parser.dart");
  parser._createMessages = function _createMessages(opts) {
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let options = opts && 'options' in opts ? opts.options : null;
    if (errors == null) errors = JSArrayOfMessage().of([]);
    if (options == null) {
      options = new preprocessor_options.PreprocessorOptions.new({useColors: false, inputFile: "memory"});
    }
    messages.messages = new messages.Messages.new({options: options, printHandler: dart.bind(errors, $add)});
  };
  parser.compile = function compile(input, opts) {
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let nested = opts && 'nested' in opts ? opts.nested : true;
    let polyfill = opts && 'polyfill' in opts ? opts.polyfill : false;
    let includes = opts && 'includes' in opts ? opts.includes : null;
    if (includes == null) {
      includes = JSArrayOfStyleSheet().of([]);
    }
    let source = parser._inputAsString(input);
    parser._createMessages({errors: errors, options: options});
    let file = new file$.SourceFile.fromString(source);
    let tree = new parser._Parser.new(file, source).parse();
    parser.analyze(JSArrayOfStyleSheet().of([tree]), {errors: errors, options: options});
    if (dart.test(polyfill)) {
      let processCss = new parser.PolyFill.new(messages.messages);
      processCss.process(tree, {includes: includes});
    }
    return tree;
  };
  parser.analyze = function analyze(styleSheets, opts) {
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let options = opts && 'options' in opts ? opts.options : null;
    parser._createMessages({errors: errors, options: options});
    new parser.Analyzer.new(styleSheets, messages.messages).run();
  };
  parser.parse = function parse(input, opts) {
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let options = opts && 'options' in opts ? opts.options : null;
    let source = parser._inputAsString(input);
    parser._createMessages({errors: errors, options: options});
    let file = new file$.SourceFile.fromString(source);
    return new parser._Parser.new(file, source).parse();
  };
  parser.selector = function selector(input, opts) {
    let t4;
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let source = parser._inputAsString(input);
    parser._createMessages({errors: errors});
    let file = new file$.SourceFile.fromString(source);
    return (t4 = new parser._Parser.new(file, source), t4.tokenizer.inSelector = true, t4).parseSelector();
  };
  parser.parseSelectorGroup = function parseSelectorGroup(input, opts) {
    let t4;
    let errors = opts && 'errors' in opts ? opts.errors : null;
    let source = parser._inputAsString(input);
    parser._createMessages({errors: errors});
    let file = new file$.SourceFile.fromString(source);
    return (t4 = new parser._Parser.new(file, source), t4.tokenizer.inSelector = true, t4).processSelectorGroup();
  };
  parser._inputAsString = function _inputAsString(input) {
    let source = null;
    if (typeof input == 'string') {
      source = input;
    } else if (core.List.is(input)) {
      source = core.String.fromCharCodes(ListOfint().as(input));
    } else {
      dart.throw(new core.ArgumentError.new("'source' must be a String or " + "List<int> (of bytes). RandomAccessFile not supported from this " + "simple interface"));
    }
    return source;
  };
  parser._escapeString = function _escapeString(text, opts) {
    let single = opts && 'single' in opts ? opts.single : false;
    let result = null;
    for (let i = 0; i < text.length; i = i + 1) {
      let code = text[$codeUnitAt](i);
      let replace = null;
      switch (code) {
        case 34:
        {
          if (!dart.test(single)) replace = "\\\"";
          break;
        }
        case 39:
        {
          if (dart.test(single)) replace = "\\'";
          break;
        }
      }
      if (replace != null && result == null) {
        result = new core.StringBuffer.new(text[$substring](0, i));
      }
      if (result != null) result.write(replace != null ? replace : text[$_get](i));
    }
    return result == null ? text : dart.toString(result);
  };
  parser._findInclude = function _findInclude(list, node) {
    let matchNode = visitor.IncludeDirective._check(visitor.IncludeMixinAtDeclaration.is(node) ? node.include : node);
    let index = 0;
    for (let item of list) {
      let includeNode = visitor.IncludeMixinAtDeclaration.is(item) ? item.include : item;
      if (dart.equals(includeNode, matchNode)) return index;
      index = index + 1;
    }
    return -1;
  };
  parser._findTerminalVarDefinition = function _findTerminalVarDefinition(varDefs, varDef) {
    let expressions = visitor.Expressions.as(varDef.expression);
    for (let expr of expressions.expressions) {
      if (visitor.VarUsage.is(expr)) {
        let usageName = expr.name;
        let foundDef = varDefs[$_get](usageName);
        if (foundDef == null) {
          let defaultValues = expr.defaultValues;
          let replaceExprs = expressions.expressions;
          if (!(replaceExprs[$length] === 1)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/polyfill.dart", 234, 16, "replaceExprs.length == 1");
          replaceExprs[$replaceRange](0, 1, defaultValues);
          return varDef;
        }
        if (visitor.VarDefinition.is(foundDef)) {
          return parser._findTerminalVarDefinition(varDefs, foundDef);
        }
      } else {
        return varDef;
      }
    }
    return varDef;
  };
  parser._mergeVal = function _mergeVal(T, x, y) {
    return y != null ? y : x;
  };
  dart.copyProperties(parser, {
    get isChecked() {
      return messages.messages.options.checked;
    }
  });
  let C369;
  dart.defineLazy(parser, {
    /*parser._legacyPseudoElements*/get _legacyPseudoElements() {
      return LinkedHashSetOfString().from(C369 || CT.C369);
    }
  });
  const _name$1 = dart.privateName(messages, "_name");
  let C370;
  let C371;
  let C372;
  let C373;
  messages.MessageLevel = class MessageLevel extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (messages.MessageLevel.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = messages.MessageLevel.prototype;
  dart.addTypeTests(messages.MessageLevel);
  dart.setLibraryUri(messages.MessageLevel, "package:csslib/src/messages.dart");
  dart.setFieldSignature(messages.MessageLevel, () => ({
    __proto__: dart.getFields(messages.MessageLevel.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(messages.MessageLevel, ['toString']);
  messages.MessageLevel.info = C370 || CT.C370;
  messages.MessageLevel.warning = C371 || CT.C371;
  messages.MessageLevel.severe = C372 || CT.C372;
  messages.MessageLevel.values = C373 || CT.C373;
  const Message_level = dart.privateName(messages, "Message.level");
  const Message_message = dart.privateName(messages, "Message.message");
  const Message_span = dart.privateName(messages, "Message.span");
  const Message_useColors = dart.privateName(messages, "Message.useColors");
  messages.Message = class Message extends core.Object {
    get level() {
      return this[level$];
    }
    set level(value) {
      super.level = value;
    }
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    get span() {
      return this[span$0];
    }
    set span(value) {
      super.span = value;
    }
    get useColors() {
      return this[useColors$0];
    }
    set useColors(value) {
      super.useColors = value;
    }
    toString() {
      let t4;
      let output = new core.StringBuffer.new();
      let colors = dart.test(this.useColors) && dart.test(messages._errorColors[$containsKey](this.level));
      let levelColor = colors ? messages._errorColors[$_get](this.level) : null;
      if (colors) output.write(levelColor);
      t4 = output;
      t4.write(messages._errorLabel[$_get](this.level));
      t4.write(" ");
      t4;
      if (colors) output.write("[0m");
      if (this.span == null) {
        output.write(this.message);
      } else {
        output.write("on ");
        output.write(this.span.message(this.message, {color: levelColor}));
      }
      return output.toString();
    }
  };
  (messages.Message.new = function(level, message, opts) {
    let span = opts && 'span' in opts ? opts.span : null;
    let useColors = opts && 'useColors' in opts ? opts.useColors : false;
    this[level$] = level;
    this[message$0] = message;
    this[span$0] = span;
    this[useColors$0] = useColors;
    ;
  }).prototype = messages.Message.prototype;
  dart.addTypeTests(messages.Message);
  const level$ = Message_level;
  const message$0 = Message_message;
  const span$0 = Message_span;
  const useColors$0 = Message_useColors;
  dart.setLibraryUri(messages.Message, "package:csslib/src/messages.dart");
  dart.setFieldSignature(messages.Message, () => ({
    __proto__: dart.getFields(messages.Message.__proto__),
    level: dart.finalFieldType(messages.MessageLevel),
    message: dart.finalFieldType(core.String),
    span: dart.finalFieldType(span.SourceSpan),
    useColors: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(messages.Message, ['toString']);
  let C374;
  const Messages_printHandler = dart.privateName(messages, "Messages.printHandler");
  const Messages_options = dart.privateName(messages, "Messages.options");
  const Messages_messages = dart.privateName(messages, "Messages.messages");
  messages.Messages = class Messages extends core.Object {
    get printHandler() {
      return this[printHandler$];
    }
    set printHandler(value) {
      super.printHandler = value;
    }
    get options() {
      return this[options$];
    }
    set options(value) {
      super.options = value;
    }
    get messages() {
      return this[messages$];
    }
    set messages(value) {
      super.messages = value;
    }
    error(message, span) {
      let msg = new messages.Message.new(messages.MessageLevel.severe, message, {span: span, useColors: this.options.useColors});
      this.messages[$add](msg);
      this.printHandler(msg);
    }
    warning(message, span) {
      if (dart.test(this.options.warningsAsErrors)) {
        this.error(message, span);
      } else {
        let msg = new messages.Message.new(messages.MessageLevel.warning, message, {span: span, useColors: this.options.useColors});
        this.messages[$add](msg);
      }
    }
    info(message, span) {
      let msg = new messages.Message.new(messages.MessageLevel.info, message, {span: span, useColors: this.options.useColors});
      this.messages[$add](msg);
      if (dart.test(this.options.verbose)) this.printHandler(msg);
    }
    mergeMessages(newMessages) {
      this.messages[$addAll](newMessages.messages);
      newMessages.messages[$where](dart.fn(message => dart.equals(message.level, messages.MessageLevel.severe) || dart.test(this.options.verbose), MessageTobool()))[$forEach](this.printHandler);
    }
  };
  (messages.Messages.new = function(opts) {
    let options = opts && 'options' in opts ? opts.options : null;
    let printHandler = opts && 'printHandler' in opts ? opts.printHandler : C374 || CT.C374;
    this[messages$] = JSArrayOfMessage().of([]);
    this[printHandler$] = printHandler;
    this[options$] = options != null ? options : new preprocessor_options.PreprocessorOptions.new();
    ;
  }).prototype = messages.Messages.prototype;
  dart.addTypeTests(messages.Messages);
  const printHandler$ = Messages_printHandler;
  const options$ = Messages_options;
  const messages$ = Messages_messages;
  dart.setMethodSignature(messages.Messages, () => ({
    __proto__: dart.getMethods(messages.Messages.__proto__),
    error: dart.fnType(dart.void, [core.String, span.SourceSpan]),
    warning: dart.fnType(dart.void, [core.String, span.SourceSpan]),
    info: dart.fnType(dart.void, [core.String, span.SourceSpan]),
    mergeMessages: dart.fnType(dart.void, [messages.Messages])
  }));
  dart.setLibraryUri(messages.Messages, "package:csslib/src/messages.dart");
  dart.setFieldSignature(messages.Messages, () => ({
    __proto__: dart.getFields(messages.Messages.__proto__),
    printHandler: dart.finalFieldType(dart.fnType(dart.void, [messages.Message])),
    options: dart.finalFieldType(preprocessor_options.PreprocessorOptions),
    messages: dart.finalFieldType(core.List$(messages.Message))
  }));
  let C375;
  let C376;
  dart.defineLazy(messages, {
    /*messages.messages*/get messages() {
      return null;
    },
    set messages(_) {},
    /*messages._greenColor*/get _greenColor() {
      return "[32m";
    },
    /*messages._redColor*/get _redColor() {
      return "[31m";
    },
    /*messages._magentaColor*/get _magentaColor() {
      return "[35m";
    },
    /*messages._noColor*/get _noColor() {
      return "[0m";
    },
    /*messages._errorColors*/get _errorColors() {
      return C375 || CT.C375;
    },
    /*messages._errorLabel*/get _errorLabel() {
      return C376 || CT.C376;
    }
  });
  visitor.VisitorBase = class VisitorBase extends core.Object {};
  (visitor.VisitorBase.new = function() {
    ;
  }).prototype = visitor.VisitorBase.prototype;
  dart.addTypeTests(visitor.VisitorBase);
  dart.setLibraryUri(visitor.VisitorBase, "package:csslib/visitor.dart");
  const _buff = dart.privateName(visitor, "_buff");
  const _newLine = dart.privateName(visitor, "_newLine");
  const _sp = dart.privateName(visitor, "_sp");
  const _isTesting = dart.privateName(visitor, "_isTesting");
  const _ident$ = dart.privateName(visitor, "_ident");
  const _pseudoPage$ = dart.privateName(visitor, "_pseudoPage");
  const _uri$ = dart.privateName(visitor, "_uri");
  const _combinatorToString = dart.privateName(visitor, "_combinatorToString");
  const CssPrinter_prettyPrint = dart.privateName(visitor, "CssPrinter.prettyPrint");
  visitor.CssPrinter = class CssPrinter extends visitor.Visitor {
    get prettyPrint() {
      return this[prettyPrint];
    }
    set prettyPrint(value) {
      this[prettyPrint] = value;
    }
    visitTree(tree, opts) {
      let pretty = opts && 'pretty' in opts ? opts.pretty : false;
      this.prettyPrint = pretty;
      this[_buff] = new core.StringBuffer.new();
      this.visitStyleSheet(tree);
    }
    emit(str) {
      this[_buff].write(str);
    }
    toString() {
      return dart.toString(this[_buff])[$trim]();
    }
    get [_newLine]() {
      return dart.test(this.prettyPrint) ? "\n" : "";
    }
    get [_sp]() {
      return dart.test(this.prettyPrint) ? " " : "";
    }
    get [_isTesting]() {
      return !dart.test(this.prettyPrint);
    }
    visitCalcTerm(node) {
      this.emit(dart.str(node.text) + "(");
      node.expr.visit(this);
      this.emit(")");
    }
    visitCssComment(node) {
      this.emit("/* " + dart.str(node.comment) + " */");
    }
    visitCommentDefinition(node) {
      this.emit("<!-- " + dart.str(node.comment) + " -->");
    }
    visitMediaExpression(node) {
      this.emit(dart.test(node.andOperator) ? " AND " : " ");
      this.emit("(" + dart.str(node.mediaFeature));
      if (dart.test(node.exprs.expressions[$isNotEmpty])) {
        this.emit(":");
        this.visitExpressions(node.exprs);
      }
      this.emit(")");
    }
    visitMediaQuery(query) {
      let unary = dart.test(query.hasUnary) ? " " + dart.str(query.unary) : "";
      let mediaType = dart.test(query.hasMediaType) ? " " + dart.str(query.mediaType) : "";
      this.emit(unary + mediaType);
      for (let expression of query.expressions) {
        this.visitMediaExpression(expression);
      }
    }
    emitMediaQueries(queries) {
      let queriesLen = queries[$length];
      for (let i = 0; i < dart.notNull(queriesLen); i = i + 1) {
        let query = queries[$_get](i);
        if (i > 0) this.emit(",");
        this.visitMediaQuery(query);
      }
    }
    visitDocumentDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@-moz-document ");
      node.functions[$first].visit(this);
      for (let $function of node.functions[$skip](1)) {
        this.emit("," + dart.str(this[_sp]));
        $function.visit(this);
      }
      this.emit(dart.str(this[_sp]) + "{");
      for (let ruleSet of node.groupRuleBody) {
        ruleSet.visit(this);
      }
      this.emit(dart.str(this[_newLine]) + "}");
    }
    visitSupportsDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@supports ");
      node.condition.visit(this);
      this.emit(dart.str(this[_sp]) + "{");
      for (let rule of node.groupRuleBody) {
        rule.visit(this);
      }
      this.emit(dart.str(this[_newLine]) + "}");
    }
    visitSupportsConditionInParens(node) {
      this.emit("(");
      node.condition.visit(this);
      this.emit(")");
    }
    visitSupportsNegation(node) {
      this.emit("not" + dart.str(this[_sp]));
      node.condition.visit(this);
    }
    visitSupportsConjunction(node) {
      node.conditions[$first].visit(this);
      for (let condition of node.conditions[$skip](1)) {
        this.emit(dart.str(this[_sp]) + "and" + dart.str(this[_sp]));
        condition.visit(this);
      }
    }
    visitSupportsDisjunction(node) {
      node.conditions[$first].visit(this);
      for (let condition of node.conditions[$skip](1)) {
        this.emit(dart.str(this[_sp]) + "or" + dart.str(this[_sp]));
        condition.visit(this);
      }
    }
    visitViewportDirective(node) {
      this.emit("@" + dart.str(node.name) + dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      node.declarations.visit(this);
      this.emit("}");
    }
    visitMediaDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@media");
      this.emitMediaQueries(node.mediaQueries);
      this.emit(dart.str(this[_sp]) + "{");
      for (let ruleset of node.rules) {
        ruleset.visit(this);
      }
      this.emit(dart.str(this[_newLine]) + "}");
    }
    visitHostDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@host" + dart.str(this[_sp]) + "{");
      for (let ruleset of node.rules) {
        ruleset.visit(this);
      }
      this.emit(dart.str(this[_newLine]) + "}");
    }
    visitPageDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@page");
      if (dart.test(node.hasIdent) || dart.test(node.hasPseudoPage)) {
        if (dart.test(node.hasIdent)) this.emit(" ");
        this.emit(node[_ident$]);
        this.emit(dart.test(node.hasPseudoPage) ? ":" + dart.str(node[_pseudoPage$]) : "");
      }
      let declsMargin = node[_declsMargin$];
      let declsMarginLength = declsMargin[$length];
      this.emit(dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      for (let i = 0; i < dart.notNull(declsMarginLength); i = i + 1) {
        declsMargin[$_get](i).visit(this);
      }
      this.emit("}");
    }
    visitCharsetDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@charset \"" + dart.str(node.charEncoding) + "\";");
    }
    visitImportDirective(node) {
      function isStartingQuote(ch) {
        return "'\""[$contains](ch[$_get](0));
      }
      dart.fn(isStartingQuote, StringTobool());
      if (dart.test(this[_isTesting])) {
        this.emit(" @import url(" + dart.str(node.import) + ")");
      } else if (dart.test(isStartingQuote(node.import))) {
        this.emit(" @import " + dart.str(node.import));
      } else {
        this.emit(" @import \"" + dart.str(node.import) + "\"");
      }
      this.emitMediaQueries(node.mediaQueries);
      this.emit(";");
    }
    visitKeyFrameDirective(node) {
      this.emit(dart.str(this[_newLine]) + dart.str(node.keyFrameName) + " ");
      node.name.visit(this);
      this.emit(dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      for (let block of node[_blocks]) {
        block.visit(this);
      }
      this.emit("}");
    }
    visitFontFaceDirective(node) {
      this.emit(dart.str(this[_newLine]) + "@font-face ");
      this.emit(dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      node[_declarations$].visit(this);
      this.emit("}");
    }
    visitKeyFrameBlock(node) {
      this.emit(dart.str(this[_sp]) + dart.str(this[_sp]));
      node[_blockSelectors$].visit(this);
      this.emit(dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      node[_declarations$].visit(this);
      this.emit(dart.str(this[_sp]) + dart.str(this[_sp]) + "}" + dart.str(this[_newLine]));
    }
    visitStyletDirective(node) {
      this.emit("/* @stylet export as " + dart.str(node.dartClassName) + " */\n");
    }
    visitNamespaceDirective(node) {
      function isStartingQuote(ch) {
        return "'\""[$contains](ch);
      }
      dart.fn(isStartingQuote, StringTobool());
      if (dart.test(isStartingQuote(node[_uri$]))) {
        this.emit(" @namespace " + dart.str(node.prefix) + "\"" + dart.str(node[_uri$]) + "\"");
      } else {
        if (dart.test(this[_isTesting])) {
          this.emit(" @namespace " + dart.str(node.prefix) + "url(" + dart.str(node[_uri$]) + ")");
        } else {
          this.emit(" @namespace " + dart.str(node.prefix) + dart.str(node[_uri$]));
        }
      }
      this.emit(";");
    }
    visitVarDefinitionDirective(node) {
      this.visitVarDefinition(node.def);
      this.emit(";" + dart.str(this[_newLine]));
    }
    visitMixinRulesetDirective(node) {
      this.emit("@mixin " + dart.str(node.name) + " {");
      for (let ruleset of node.rulesets) {
        ruleset.visit(this);
      }
      this.emit("}");
    }
    visitMixinDeclarationDirective(node) {
      this.emit("@mixin " + dart.str(node.name) + " {\n");
      this.visitDeclarationGroup(node.declarations);
      this.emit("}");
    }
    visitIncludeDirective(node, topLevel) {
      if (topLevel === void 0) topLevel = true;
      if (dart.test(topLevel)) this.emit(this[_newLine]);
      this.emit("@include " + dart.str(node.name));
      this.emit(";");
    }
    visitContentDirective(node) {
    }
    visitRuleSet(node) {
      this.emit(dart.str(this[_newLine]));
      node[_selectorGroup$].visit(this);
      this.emit(dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      node[_declarationGroup$].visit(this);
      this.emit("}");
    }
    visitDeclarationGroup(node) {
      let declarations = node.declarations;
      let declarationsLength = declarations[$length];
      for (let i = 0; i < dart.notNull(declarationsLength); i = i + 1) {
        if (i > 0) this.emit(this[_newLine]);
        this.emit(dart.str(this[_sp]) + dart.str(this[_sp]));
        declarations[$_get](i).visit(this);
        if (dart.test(this.prettyPrint) || i < dart.notNull(declarationsLength) - 1) {
          this.emit(";");
        }
      }
      if (dart.notNull(declarationsLength) > 0) this.emit(this[_newLine]);
    }
    visitMarginGroup(node) {
      let margin_sym_name = parser.TokenKind.idToValue(parser.TokenKind.MARGIN_DIRECTIVES, node.margin_sym);
      this.emit("@" + dart.str(margin_sym_name) + dart.str(this[_sp]) + "{" + dart.str(this[_newLine]));
      this.visitDeclarationGroup(node);
      this.emit("}" + dart.str(this[_newLine]));
    }
    visitDeclaration(node) {
      this.emit(dart.str(node.property) + ":" + dart.str(this[_sp]));
      node[_expression$].visit(this);
      if (dart.test(node.important)) {
        this.emit(dart.str(this[_sp]) + "!important");
      }
    }
    visitVarDefinition(node) {
      this.emit("var-" + dart.str(node.definedName) + ": ");
      node[_expression$].visit(this);
    }
    visitIncludeMixinAtDeclaration(node) {
      this.visitIncludeDirective(node.include, false);
    }
    visitExtendDeclaration(node) {
      this.emit("@extend ");
      for (let selector of node.selectors) {
        selector.visit(this);
      }
    }
    visitSelectorGroup(node) {
      let selectors = node.selectors;
      let selectorsLength = selectors[$length];
      for (let i = 0; i < dart.notNull(selectorsLength); i = i + 1) {
        if (i > 0) this.emit("," + dart.str(this[_sp]));
        selectors[$_get](i).visit(this);
      }
    }
    visitSimpleSelectorSequence(node) {
      this.emit(dart.str(node[_combinatorToString]));
      node.simpleSelector.visit(this);
    }
    visitSimpleSelector(node) {
      this.emit(node.name);
    }
    visitNamespaceSelector(node) {
      this.emit(dart.toString(node));
    }
    visitElementSelector(node) {
      this.emit(dart.toString(node));
    }
    visitAttributeSelector(node) {
      this.emit(dart.toString(node));
    }
    visitIdSelector(node) {
      this.emit(dart.toString(node));
    }
    visitClassSelector(node) {
      this.emit(dart.toString(node));
    }
    visitPseudoClassSelector(node) {
      this.emit(dart.toString(node));
    }
    visitPseudoElementSelector(node) {
      this.emit(dart.toString(node));
    }
    visitPseudoClassFunctionSelector(node) {
      this.emit(":" + dart.str(node.name) + "(");
      node.argument.visit(this);
      this.emit(")");
    }
    visitPseudoElementFunctionSelector(node) {
      this.emit("::" + dart.str(node.name) + "(");
      node.expression.visit(this);
      this.emit(")");
    }
    visitNegationSelector(node) {
      this.emit(":not(");
      node.negationArg.visit(this);
      this.emit(")");
    }
    visitSelectorExpression(node) {
      let expressions = node.expressions;
      let expressionsLength = expressions[$length];
      for (let i = 0; i < dart.notNull(expressionsLength); i = i + 1) {
        let expression = expressions[$_get](i);
        expression.visit(this);
      }
    }
    visitUnicodeRangeTerm(node) {
      if (dart.test(node.hasSecond)) {
        this.emit("U+" + dart.str(node.first) + "-" + dart.str(node.second));
      } else {
        this.emit("U+" + dart.str(node.first));
      }
    }
    visitLiteralTerm(node) {
      this.emit(node.text);
    }
    visitHexColorTerm(node) {
      let mappedName = null;
      if (dart.test(this[_isTesting]) && !visitor.BAD_HEX_VALUE.is(node.value)) {
        mappedName = parser.TokenKind.hexToColorName(node.value);
      }
      if (mappedName == null) {
        mappedName = "#" + dart.str(node.text);
      }
      this.emit(mappedName);
    }
    visitNumberTerm(node) {
      this.visitLiteralTerm(node);
    }
    visitUnitTerm(node) {
      this.emit(dart.toString(node));
    }
    visitLengthTerm(node) {
      this.emit(dart.toString(node));
    }
    visitPercentageTerm(node) {
      this.emit(dart.str(node.text) + "%");
    }
    visitEmTerm(node) {
      this.emit(dart.str(node.text) + "em");
    }
    visitExTerm(node) {
      this.emit(dart.str(node.text) + "ex");
    }
    visitAngleTerm(node) {
      this.emit(dart.toString(node));
    }
    visitTimeTerm(node) {
      this.emit(dart.toString(node));
    }
    visitFreqTerm(node) {
      this.emit(dart.toString(node));
    }
    visitFractionTerm(node) {
      this.emit(dart.str(node.text) + "fr");
    }
    visitUriTerm(node) {
      this.emit("url(\"" + dart.str(node.text) + "\")");
    }
    visitResolutionTerm(node) {
      this.emit(dart.toString(node));
    }
    visitViewportTerm(node) {
      this.emit(dart.toString(node));
    }
    visitFunctionTerm(node) {
      this.emit(dart.str(node.text) + "(");
      node[_params$].visit(this);
      this.emit(")");
    }
    visitGroupTerm(node) {
      this.emit("(");
      let terms = node[_terms];
      let termsLength = terms[$length];
      for (let i = 0; i < dart.notNull(termsLength); i = i + 1) {
        if (i > 0) this.emit(dart.str(this[_sp]));
        terms[$_get](i).visit(this);
      }
      this.emit(")");
    }
    visitItemTerm(node) {
      this.emit("[" + dart.str(node.text) + "]");
    }
    visitIE8Term(node) {
      this.visitLiteralTerm(node);
    }
    visitOperatorSlash(node) {
      this.emit("/");
    }
    visitOperatorComma(node) {
      this.emit(",");
    }
    visitOperatorPlus(node) {
      this.emit("+");
    }
    visitOperatorMinus(node) {
      this.emit("-");
    }
    visitVarUsage(node) {
      this.emit("var(" + dart.str(node.name));
      if (dart.test(node.defaultValues[$isNotEmpty])) {
        this.emit(",");
        for (let defaultValue of node.defaultValues) {
          this.emit(" ");
          defaultValue.visit(this);
        }
      }
      this.emit(")");
    }
    visitExpressions(node) {
      let expressions = node.expressions;
      let expressionsLength = expressions[$length];
      for (let i = 0; i < dart.notNull(expressionsLength); i = i + 1) {
        let expression = expressions[$_get](i);
        if (i > 0 && !(visitor.OperatorComma.is(expression) || visitor.OperatorSlash.is(expression))) {
          let previous = expressions[$_get](i - 1);
          if (visitor.OperatorComma.is(previous) || visitor.OperatorSlash.is(previous)) {
            this.emit(this[_sp]);
          } else {
            this.emit(" ");
          }
        }
        expression.visit(this);
      }
    }
    visitBinaryExpression(node) {
      dart.throw(dart.wrapType(core.UnimplementedError));
    }
    visitUnaryExpression(node) {
      dart.throw(dart.wrapType(core.UnimplementedError));
    }
    visitIdentifier(node) {
      this.emit(node.name);
    }
    visitWildcard(node) {
      this.emit("*");
    }
    visitDartStyleExpression(node) {
      dart.throw(dart.wrapType(core.UnimplementedError));
    }
  };
  (visitor.CssPrinter.new = function() {
    this[_buff] = new core.StringBuffer.new();
    this[prettyPrint] = true;
    ;
  }).prototype = visitor.CssPrinter.prototype;
  dart.addTypeTests(visitor.CssPrinter);
  const prettyPrint = CssPrinter_prettyPrint;
  dart.setMethodSignature(visitor.CssPrinter, () => ({
    __proto__: dart.getMethods(visitor.CssPrinter.__proto__),
    visitTree: dart.fnType(dart.void, [visitor.StyleSheet], {pretty: core.bool}),
    emit: dart.fnType(dart.void, [core.String]),
    visitCalcTerm: dart.fnType(dart.void, [visitor.CalcTerm]),
    visitCssComment: dart.fnType(dart.void, [visitor.CssComment]),
    visitCommentDefinition: dart.fnType(dart.void, [visitor.CommentDefinition]),
    visitMediaExpression: dart.fnType(dart.void, [visitor.MediaExpression]),
    visitMediaQuery: dart.fnType(dart.void, [visitor.MediaQuery]),
    emitMediaQueries: dart.fnType(dart.void, [core.List$(visitor.MediaQuery)]),
    visitDocumentDirective: dart.fnType(dart.void, [visitor.DocumentDirective]),
    visitSupportsDirective: dart.fnType(dart.void, [visitor.SupportsDirective]),
    visitSupportsConditionInParens: dart.fnType(dart.void, [visitor.SupportsConditionInParens]),
    visitSupportsNegation: dart.fnType(dart.void, [visitor.SupportsNegation]),
    visitSupportsConjunction: dart.fnType(dart.void, [visitor.SupportsConjunction]),
    visitSupportsDisjunction: dart.fnType(dart.void, [visitor.SupportsDisjunction]),
    visitViewportDirective: dart.fnType(dart.void, [visitor.ViewportDirective]),
    visitMediaDirective: dart.fnType(dart.void, [visitor.MediaDirective]),
    visitHostDirective: dart.fnType(dart.void, [visitor.HostDirective]),
    visitPageDirective: dart.fnType(dart.void, [visitor.PageDirective]),
    visitCharsetDirective: dart.fnType(dart.void, [visitor.CharsetDirective]),
    visitImportDirective: dart.fnType(dart.void, [visitor.ImportDirective]),
    visitKeyFrameDirective: dart.fnType(dart.void, [visitor.KeyFrameDirective]),
    visitFontFaceDirective: dart.fnType(dart.void, [visitor.FontFaceDirective]),
    visitKeyFrameBlock: dart.fnType(dart.void, [visitor.KeyFrameBlock]),
    visitStyletDirective: dart.fnType(dart.void, [visitor.StyletDirective]),
    visitNamespaceDirective: dart.fnType(dart.void, [visitor.NamespaceDirective]),
    visitVarDefinitionDirective: dart.fnType(dart.void, [visitor.VarDefinitionDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective]),
    visitMixinDeclarationDirective: dart.fnType(dart.void, [visitor.MixinDeclarationDirective]),
    visitIncludeDirective: dart.fnType(dart.void, [visitor.IncludeDirective], [core.bool]),
    visitContentDirective: dart.fnType(dart.void, [visitor.ContentDirective]),
    visitRuleSet: dart.fnType(dart.void, [visitor.RuleSet]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup]),
    visitMarginGroup: dart.fnType(dart.void, [visitor.MarginGroup]),
    visitDeclaration: dart.fnType(dart.void, [visitor.Declaration]),
    visitVarDefinition: dart.fnType(dart.void, [visitor.VarDefinition]),
    visitIncludeMixinAtDeclaration: dart.fnType(dart.void, [visitor.IncludeMixinAtDeclaration]),
    visitExtendDeclaration: dart.fnType(dart.void, [visitor.ExtendDeclaration]),
    visitSelectorGroup: dart.fnType(dart.void, [visitor.SelectorGroup]),
    visitSimpleSelectorSequence: dart.fnType(dart.void, [visitor.SimpleSelectorSequence]),
    visitSimpleSelector: dart.fnType(dart.void, [visitor.SimpleSelector]),
    visitNamespaceSelector: dart.fnType(dart.void, [visitor.NamespaceSelector]),
    visitElementSelector: dart.fnType(dart.void, [visitor.ElementSelector]),
    visitAttributeSelector: dart.fnType(dart.void, [visitor.AttributeSelector]),
    visitIdSelector: dart.fnType(dart.void, [visitor.IdSelector]),
    visitClassSelector: dart.fnType(dart.void, [visitor.ClassSelector]),
    visitPseudoClassSelector: dart.fnType(dart.void, [visitor.PseudoClassSelector]),
    visitPseudoElementSelector: dart.fnType(dart.void, [visitor.PseudoElementSelector]),
    visitPseudoClassFunctionSelector: dart.fnType(dart.void, [visitor.PseudoClassFunctionSelector]),
    visitPseudoElementFunctionSelector: dart.fnType(dart.void, [visitor.PseudoElementFunctionSelector]),
    visitNegationSelector: dart.fnType(dart.void, [visitor.NegationSelector]),
    visitSelectorExpression: dart.fnType(dart.void, [visitor.SelectorExpression]),
    visitUnicodeRangeTerm: dart.fnType(dart.void, [visitor.UnicodeRangeTerm]),
    visitLiteralTerm: dart.fnType(dart.void, [visitor.LiteralTerm]),
    visitHexColorTerm: dart.fnType(dart.void, [visitor.HexColorTerm]),
    visitNumberTerm: dart.fnType(dart.void, [visitor.NumberTerm]),
    visitUnitTerm: dart.fnType(dart.void, [visitor.UnitTerm]),
    visitLengthTerm: dart.fnType(dart.void, [visitor.LengthTerm]),
    visitPercentageTerm: dart.fnType(dart.void, [visitor.PercentageTerm]),
    visitEmTerm: dart.fnType(dart.void, [visitor.EmTerm]),
    visitExTerm: dart.fnType(dart.void, [visitor.ExTerm]),
    visitAngleTerm: dart.fnType(dart.void, [visitor.AngleTerm]),
    visitTimeTerm: dart.fnType(dart.void, [visitor.TimeTerm]),
    visitFreqTerm: dart.fnType(dart.void, [visitor.FreqTerm]),
    visitFractionTerm: dart.fnType(dart.void, [visitor.FractionTerm]),
    visitUriTerm: dart.fnType(dart.void, [visitor.UriTerm]),
    visitResolutionTerm: dart.fnType(dart.void, [visitor.ResolutionTerm]),
    visitViewportTerm: dart.fnType(dart.void, [visitor.ViewportTerm]),
    visitFunctionTerm: dart.fnType(dart.void, [visitor.FunctionTerm]),
    visitGroupTerm: dart.fnType(dart.void, [visitor.GroupTerm]),
    visitItemTerm: dart.fnType(dart.void, [visitor.ItemTerm]),
    visitIE8Term: dart.fnType(dart.void, [visitor.IE8Term]),
    visitOperatorSlash: dart.fnType(dart.void, [visitor.OperatorSlash]),
    visitOperatorComma: dart.fnType(dart.void, [visitor.OperatorComma]),
    visitOperatorPlus: dart.fnType(dart.void, [visitor.OperatorPlus]),
    visitOperatorMinus: dart.fnType(dart.void, [visitor.OperatorMinus]),
    visitVarUsage: dart.fnType(dart.void, [visitor.VarUsage]),
    visitExpressions: dart.fnType(dart.void, [visitor.Expressions]),
    visitBinaryExpression: dart.fnType(dart.void, [visitor.BinaryExpression]),
    visitUnaryExpression: dart.fnType(dart.void, [visitor.UnaryExpression]),
    visitIdentifier: dart.fnType(dart.void, [visitor.Identifier]),
    visitWildcard: dart.fnType(dart.void, [visitor.Wildcard]),
    visitDartStyleExpression: dart.fnType(dart.void, [visitor.DartStyleExpression])
  }));
  dart.setGetterSignature(visitor.CssPrinter, () => ({
    __proto__: dart.getGetters(visitor.CssPrinter.__proto__),
    [_newLine]: core.String,
    [_sp]: core.String,
    [_isTesting]: core.bool
  }));
  dart.setLibraryUri(visitor.CssPrinter, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.CssPrinter, () => ({
    __proto__: dart.getFields(visitor.CssPrinter.__proto__),
    [_buff]: dart.fieldType(core.StringBuffer),
    prettyPrint: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(visitor.CssPrinter, ['toString']);
  const TreeNode_span = dart.privateName(visitor, "TreeNode.span");
  visitor.TreeNode = class TreeNode extends core.Object {
    get span() {
      return this[span$1];
    }
    set span(value) {
      super.span = value;
    }
    toDebugString() {
      let to = new visitor.TreeOutput.new();
      let tp = new visitor._TreePrinter.new(to, true);
      this.visit(tp);
      return dart.toString(to.buf);
    }
  };
  (visitor.TreeNode.new = function(span) {
    this[span$1] = span;
    ;
  }).prototype = visitor.TreeNode.prototype;
  dart.addTypeTests(visitor.TreeNode);
  const span$1 = TreeNode_span;
  dart.setMethodSignature(visitor.TreeNode, () => ({
    __proto__: dart.getMethods(visitor.TreeNode.__proto__),
    toDebugString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(visitor.TreeNode, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.TreeNode, () => ({
    __proto__: dart.getFields(visitor.TreeNode.__proto__),
    span: dart.finalFieldType(span.SourceSpan)
  }));
  const Identifier_name = dart.privateName(visitor, "Identifier.name");
  visitor.Identifier = class Identifier extends visitor.TreeNode {
    get name() {
      return this[name$];
    }
    set name(value) {
      this[name$] = value;
    }
    clone() {
      return new visitor.Identifier.new(this.name, this.span);
    }
    visit(visitor) {
      return visitor.visitIdentifier(this);
    }
    toString() {
      return this.name;
    }
  };
  (visitor.Identifier.new = function(name, span) {
    this[name$] = name;
    visitor.Identifier.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Identifier.prototype;
  dart.addTypeTests(visitor.Identifier);
  const name$ = Identifier_name;
  dart.setMethodSignature(visitor.Identifier, () => ({
    __proto__: dart.getMethods(visitor.Identifier.__proto__),
    clone: dart.fnType(visitor.Identifier, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.Identifier, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.Identifier, () => ({
    __proto__: dart.getFields(visitor.Identifier.__proto__),
    name: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(visitor.Identifier, ['toString']);
  visitor.Wildcard = class Wildcard extends visitor.TreeNode {
    clone() {
      return new visitor.Wildcard.new(this.span);
    }
    visit(visitor) {
      return visitor.visitWildcard(this);
    }
    get name() {
      return "*";
    }
  };
  (visitor.Wildcard.new = function(span) {
    visitor.Wildcard.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Wildcard.prototype;
  dart.addTypeTests(visitor.Wildcard);
  dart.setMethodSignature(visitor.Wildcard, () => ({
    __proto__: dart.getMethods(visitor.Wildcard.__proto__),
    clone: dart.fnType(visitor.Wildcard, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.Wildcard, () => ({
    __proto__: dart.getGetters(visitor.Wildcard.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(visitor.Wildcard, "package:csslib/visitor.dart");
  visitor.ThisOperator = class ThisOperator extends visitor.TreeNode {
    clone() {
      return new visitor.ThisOperator.new(this.span);
    }
    visit(visitor) {
      return visitor.visitThisOperator(this);
    }
    get name() {
      return "&";
    }
  };
  (visitor.ThisOperator.new = function(span) {
    visitor.ThisOperator.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.ThisOperator.prototype;
  dart.addTypeTests(visitor.ThisOperator);
  dart.setMethodSignature(visitor.ThisOperator, () => ({
    __proto__: dart.getMethods(visitor.ThisOperator.__proto__),
    clone: dart.fnType(visitor.ThisOperator, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.ThisOperator, () => ({
    __proto__: dart.getGetters(visitor.ThisOperator.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(visitor.ThisOperator, "package:csslib/visitor.dart");
  visitor.Negation = class Negation extends visitor.TreeNode {
    clone() {
      return new visitor.Negation.new(this.span);
    }
    visit(visitor) {
      return visitor.visitNegation(this);
    }
    get name() {
      return "not";
    }
  };
  (visitor.Negation.new = function(span) {
    visitor.Negation.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Negation.prototype;
  dart.addTypeTests(visitor.Negation);
  dart.setMethodSignature(visitor.Negation, () => ({
    __proto__: dart.getMethods(visitor.Negation.__proto__),
    clone: dart.fnType(visitor.Negation, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.Negation, () => ({
    __proto__: dart.getGetters(visitor.Negation.__proto__),
    name: core.String
  }));
  dart.setLibraryUri(visitor.Negation, "package:csslib/visitor.dart");
  visitor.Expression = class Expression extends visitor.TreeNode {};
  (visitor.Expression.new = function(span) {
    visitor.Expression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Expression.prototype;
  dart.addTypeTests(visitor.Expression);
  dart.setLibraryUri(visitor.Expression, "package:csslib/visitor.dart");
  const LiteralTerm_value = dart.privateName(visitor, "LiteralTerm.value");
  const LiteralTerm_text = dart.privateName(visitor, "LiteralTerm.text");
  visitor.LiteralTerm = class LiteralTerm extends visitor.Expression {
    get value() {
      return this[value$0];
    }
    set value(value) {
      this[value$0] = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      this[text$0] = value;
    }
    clone() {
      return new visitor.LiteralTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitLiteralTerm(this);
    }
  };
  (visitor.LiteralTerm.new = function(value, text, span) {
    this[value$0] = value;
    this[text$0] = text;
    visitor.LiteralTerm.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.LiteralTerm.prototype;
  dart.addTypeTests(visitor.LiteralTerm);
  const value$0 = LiteralTerm_value;
  const text$0 = LiteralTerm_text;
  dart.setMethodSignature(visitor.LiteralTerm, () => ({
    __proto__: dart.getMethods(visitor.LiteralTerm.__proto__),
    clone: dart.fnType(visitor.LiteralTerm, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.LiteralTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.LiteralTerm, () => ({
    __proto__: dart.getFields(visitor.LiteralTerm.__proto__),
    value: dart.fieldType(dart.dynamic),
    text: dart.fieldType(core.String)
  }));
  const CalcTerm_expr = dart.privateName(visitor, "CalcTerm.expr");
  visitor.CalcTerm = class CalcTerm extends visitor.LiteralTerm {
    get expr() {
      return this[expr$];
    }
    set expr(value) {
      super.expr = value;
    }
    clone() {
      return new visitor.CalcTerm.new(this.value, this.text, this.expr.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitCalcTerm(this);
    }
    toString() {
      return dart.str(this.text) + "(" + dart.str(this.expr) + ")";
    }
  };
  (visitor.CalcTerm.new = function(value, t, expr, span) {
    this[expr$] = expr;
    visitor.CalcTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.CalcTerm.prototype;
  dart.addTypeTests(visitor.CalcTerm);
  const expr$ = CalcTerm_expr;
  dart.setMethodSignature(visitor.CalcTerm, () => ({
    __proto__: dart.getMethods(visitor.CalcTerm.__proto__),
    clone: dart.fnType(visitor.CalcTerm, [])
  }));
  dart.setLibraryUri(visitor.CalcTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.CalcTerm, () => ({
    __proto__: dart.getFields(visitor.CalcTerm.__proto__),
    expr: dart.finalFieldType(visitor.LiteralTerm)
  }));
  dart.defineExtensionMethods(visitor.CalcTerm, ['toString']);
  const CssComment_comment = dart.privateName(visitor, "CssComment.comment");
  visitor.CssComment = class CssComment extends visitor.TreeNode {
    get comment() {
      return this[comment$];
    }
    set comment(value) {
      super.comment = value;
    }
    clone() {
      return new visitor.CssComment.new(this.comment, this.span);
    }
    visit(visitor) {
      return visitor.visitCssComment(this);
    }
  };
  (visitor.CssComment.new = function(comment, span) {
    this[comment$] = comment;
    visitor.CssComment.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.CssComment.prototype;
  dart.addTypeTests(visitor.CssComment);
  const comment$ = CssComment_comment;
  dart.setMethodSignature(visitor.CssComment, () => ({
    __proto__: dart.getMethods(visitor.CssComment.__proto__),
    clone: dart.fnType(visitor.CssComment, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.CssComment, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.CssComment, () => ({
    __proto__: dart.getFields(visitor.CssComment.__proto__),
    comment: dart.finalFieldType(core.String)
  }));
  visitor.CommentDefinition = class CommentDefinition extends visitor.CssComment {
    clone() {
      return new visitor.CommentDefinition.new(this.comment, this.span);
    }
    visit(visitor) {
      return visitor.visitCommentDefinition(this);
    }
  };
  (visitor.CommentDefinition.new = function(comment, span) {
    visitor.CommentDefinition.__proto__.new.call(this, comment, span);
    ;
  }).prototype = visitor.CommentDefinition.prototype;
  dart.addTypeTests(visitor.CommentDefinition);
  dart.setMethodSignature(visitor.CommentDefinition, () => ({
    __proto__: dart.getMethods(visitor.CommentDefinition.__proto__),
    clone: dart.fnType(visitor.CommentDefinition, [])
  }));
  dart.setLibraryUri(visitor.CommentDefinition, "package:csslib/visitor.dart");
  const SelectorGroup_selectors = dart.privateName(visitor, "SelectorGroup.selectors");
  visitor.SelectorGroup = class SelectorGroup extends visitor.TreeNode {
    get selectors() {
      return this[selectors$];
    }
    set selectors(value) {
      super.selectors = value;
    }
    clone() {
      return new visitor.SelectorGroup.new(this.selectors, this.span);
    }
    visit(visitor) {
      return visitor.visitSelectorGroup(this);
    }
  };
  (visitor.SelectorGroup.new = function(selectors, span) {
    this[selectors$] = selectors;
    visitor.SelectorGroup.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SelectorGroup.prototype;
  dart.addTypeTests(visitor.SelectorGroup);
  const selectors$ = SelectorGroup_selectors;
  dart.setMethodSignature(visitor.SelectorGroup, () => ({
    __proto__: dart.getMethods(visitor.SelectorGroup.__proto__),
    clone: dart.fnType(visitor.SelectorGroup, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SelectorGroup, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SelectorGroup, () => ({
    __proto__: dart.getFields(visitor.SelectorGroup.__proto__),
    selectors: dart.finalFieldType(core.List$(visitor.Selector))
  }));
  const Selector_simpleSelectorSequences = dart.privateName(visitor, "Selector.simpleSelectorSequences");
  visitor.Selector = class Selector extends visitor.TreeNode {
    get simpleSelectorSequences() {
      return this[simpleSelectorSequences$];
    }
    set simpleSelectorSequences(value) {
      super.simpleSelectorSequences = value;
    }
    add(seq) {
      return this.simpleSelectorSequences[$add](seq);
    }
    get length() {
      return this.simpleSelectorSequences[$length];
    }
    clone() {
      let simpleSequences = this.simpleSelectorSequences[$map](visitor.SimpleSelectorSequence, dart.fn(ss => ss.clone(), SimpleSelectorSequenceToSimpleSelectorSequence()))[$toList]();
      return new visitor.Selector.new(simpleSequences, this.span);
    }
    visit(visitor) {
      return visitor.visitSelector(this);
    }
  };
  (visitor.Selector.new = function(simpleSelectorSequences, span) {
    this[simpleSelectorSequences$] = simpleSelectorSequences;
    visitor.Selector.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Selector.prototype;
  dart.addTypeTests(visitor.Selector);
  const simpleSelectorSequences$ = Selector_simpleSelectorSequences;
  dart.setMethodSignature(visitor.Selector, () => ({
    __proto__: dart.getMethods(visitor.Selector.__proto__),
    add: dart.fnType(dart.void, [visitor.SimpleSelectorSequence]),
    clone: dart.fnType(visitor.Selector, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.Selector, () => ({
    __proto__: dart.getGetters(visitor.Selector.__proto__),
    length: core.int
  }));
  dart.setLibraryUri(visitor.Selector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.Selector, () => ({
    __proto__: dart.getFields(visitor.Selector.__proto__),
    simpleSelectorSequences: dart.finalFieldType(core.List$(visitor.SimpleSelectorSequence))
  }));
  const SimpleSelectorSequence_combinator = dart.privateName(visitor, "SimpleSelectorSequence.combinator");
  const SimpleSelectorSequence_simpleSelector = dart.privateName(visitor, "SimpleSelectorSequence.simpleSelector");
  visitor.SimpleSelectorSequence = class SimpleSelectorSequence extends visitor.TreeNode {
    get combinator() {
      return this[combinator$];
    }
    set combinator(value) {
      this[combinator$] = value;
    }
    get simpleSelector() {
      return this[simpleSelector$];
    }
    set simpleSelector(value) {
      super.simpleSelector = value;
    }
    get isCombinatorNone() {
      return this.combinator === 513;
    }
    get isCombinatorPlus() {
      return this.combinator === 515;
    }
    get isCombinatorGreater() {
      return this.combinator === 516;
    }
    get isCombinatorTilde() {
      return this.combinator === 517;
    }
    get isCombinatorDescendant() {
      return this.combinator === 514;
    }
    get [_combinatorToString]() {
      switch (this.combinator) {
        case 514:
        {
          return " ";
        }
        case 516:
        {
          return " > ";
        }
        case 515:
        {
          return " + ";
        }
        case 517:
        {
          return " ~ ";
        }
        default:
        {
          return "";
        }
      }
    }
    clone() {
      return new visitor.SimpleSelectorSequence.new(this.simpleSelector, this.span, this.combinator);
    }
    visit(visitor) {
      return visitor.visitSimpleSelectorSequence(this);
    }
    toString() {
      return this.simpleSelector.name;
    }
  };
  (visitor.SimpleSelectorSequence.new = function(simpleSelector, span, combinator) {
    if (combinator === void 0) combinator = 513;
    this[simpleSelector$] = simpleSelector;
    this[combinator$] = combinator;
    visitor.SimpleSelectorSequence.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SimpleSelectorSequence.prototype;
  dart.addTypeTests(visitor.SimpleSelectorSequence);
  const combinator$ = SimpleSelectorSequence_combinator;
  const simpleSelector$ = SimpleSelectorSequence_simpleSelector;
  dart.setMethodSignature(visitor.SimpleSelectorSequence, () => ({
    __proto__: dart.getMethods(visitor.SimpleSelectorSequence.__proto__),
    clone: dart.fnType(visitor.SimpleSelectorSequence, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.SimpleSelectorSequence, () => ({
    __proto__: dart.getGetters(visitor.SimpleSelectorSequence.__proto__),
    isCombinatorNone: core.bool,
    isCombinatorPlus: core.bool,
    isCombinatorGreater: core.bool,
    isCombinatorTilde: core.bool,
    isCombinatorDescendant: core.bool,
    [_combinatorToString]: core.String
  }));
  dart.setLibraryUri(visitor.SimpleSelectorSequence, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SimpleSelectorSequence, () => ({
    __proto__: dart.getFields(visitor.SimpleSelectorSequence.__proto__),
    combinator: dart.fieldType(core.int),
    simpleSelector: dart.finalFieldType(visitor.SimpleSelector)
  }));
  dart.defineExtensionMethods(visitor.SimpleSelectorSequence, ['toString']);
  visitor.SimpleSelector = class SimpleSelector extends visitor.TreeNode {
    get name() {
      return core.String._check(dart.dload(this[_name$0], 'name'));
    }
    get isWildcard() {
      return visitor.Wildcard.is(this[_name$0]);
    }
    get isThis() {
      return visitor.ThisOperator.is(this[_name$0]);
    }
    visit(visitor) {
      return visitor.visitSimpleSelector(this);
    }
  };
  (visitor.SimpleSelector.new = function(_name, span) {
    this[_name$0] = _name;
    visitor.SimpleSelector.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SimpleSelector.prototype;
  dart.addTypeTests(visitor.SimpleSelector);
  dart.setMethodSignature(visitor.SimpleSelector, () => ({
    __proto__: dart.getMethods(visitor.SimpleSelector.__proto__),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.SimpleSelector, () => ({
    __proto__: dart.getGetters(visitor.SimpleSelector.__proto__),
    name: core.String,
    isWildcard: core.bool,
    isThis: core.bool
  }));
  dart.setLibraryUri(visitor.SimpleSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SimpleSelector, () => ({
    __proto__: dart.getFields(visitor.SimpleSelector.__proto__),
    [_name$0]: dart.finalFieldType(dart.dynamic)
  }));
  visitor.ElementSelector = class ElementSelector extends visitor.SimpleSelector {
    visit(visitor) {
      return visitor.visitElementSelector(this);
    }
    clone() {
      return new visitor.ElementSelector.new(this[_name$0], this.span);
    }
    toString() {
      return this.name;
    }
  };
  (visitor.ElementSelector.new = function(name, span) {
    visitor.ElementSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.ElementSelector.prototype;
  dart.addTypeTests(visitor.ElementSelector);
  dart.setMethodSignature(visitor.ElementSelector, () => ({
    __proto__: dart.getMethods(visitor.ElementSelector.__proto__),
    clone: dart.fnType(visitor.ElementSelector, [])
  }));
  dart.setLibraryUri(visitor.ElementSelector, "package:csslib/visitor.dart");
  dart.defineExtensionMethods(visitor.ElementSelector, ['toString']);
  visitor.NamespaceSelector = class NamespaceSelector extends visitor.SimpleSelector {
    get namespace() {
      return core.String._check(visitor.Wildcard.is(this[_namespace$]) ? "*" : this[_namespace$] == null ? "" : dart.dload(this[_namespace$], 'name'));
    }
    get isNamespaceWildcard() {
      return visitor.Wildcard.is(this[_namespace$]);
    }
    get nameAsSimpleSelector() {
      return visitor.SimpleSelector._check(this[_name$0]);
    }
    clone() {
      return new visitor.NamespaceSelector.new(this[_namespace$], "", this.span);
    }
    visit(visitor) {
      return visitor.visitNamespaceSelector(this);
    }
    toString() {
      return dart.str(this.namespace) + "|" + dart.str(this.nameAsSimpleSelector.name);
    }
  };
  (visitor.NamespaceSelector.new = function(_namespace, name, span) {
    this[_namespace$] = _namespace;
    visitor.NamespaceSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.NamespaceSelector.prototype;
  dart.addTypeTests(visitor.NamespaceSelector);
  dart.setMethodSignature(visitor.NamespaceSelector, () => ({
    __proto__: dart.getMethods(visitor.NamespaceSelector.__proto__),
    clone: dart.fnType(visitor.NamespaceSelector, [])
  }));
  dart.setGetterSignature(visitor.NamespaceSelector, () => ({
    __proto__: dart.getGetters(visitor.NamespaceSelector.__proto__),
    namespace: core.String,
    isNamespaceWildcard: core.bool,
    nameAsSimpleSelector: visitor.SimpleSelector
  }));
  dart.setLibraryUri(visitor.NamespaceSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.NamespaceSelector, () => ({
    __proto__: dart.getFields(visitor.NamespaceSelector.__proto__),
    [_namespace$]: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(visitor.NamespaceSelector, ['toString']);
  const _op$ = dart.privateName(visitor, "_op");
  const _value$ = dart.privateName(visitor, "_value");
  visitor.AttributeSelector = class AttributeSelector extends visitor.SimpleSelector {
    get operatorKind() {
      return this[_op$];
    }
    get value() {
      return this[_value$];
    }
    matchOperator() {
      switch (this[_op$]) {
        case 28:
        {
          return "=";
        }
        case 530:
        {
          return "~=";
        }
        case 531:
        {
          return "|=";
        }
        case 532:
        {
          return "^=";
        }
        case 533:
        {
          return "$=";
        }
        case 534:
        {
          return "*=";
        }
        case 535:
        {
          return "";
        }
      }
      return null;
    }
    matchOperatorAsTokenString() {
      switch (this[_op$]) {
        case 28:
        {
          return "EQUALS";
        }
        case 530:
        {
          return "INCLUDES";
        }
        case 531:
        {
          return "DASH_MATCH";
        }
        case 532:
        {
          return "PREFIX_MATCH";
        }
        case 533:
        {
          return "SUFFIX_MATCH";
        }
        case 534:
        {
          return "SUBSTRING_MATCH";
        }
      }
      return null;
    }
    valueToString() {
      if (this[_value$] != null) {
        if (visitor.Identifier.is(this[_value$])) {
          return core.String._check(dart.dload(this[_value$], 'name'));
        } else {
          return "\"" + dart.str(this[_value$]) + "\"";
        }
      } else {
        return "";
      }
    }
    clone() {
      return new visitor.AttributeSelector.new(visitor.Identifier._check(this[_name$0]), this[_op$], this[_value$], this.span);
    }
    visit(visitor) {
      return visitor.visitAttributeSelector(this);
    }
    toString() {
      return "[" + dart.str(this.name) + dart.str(this.matchOperator()) + dart.str(this.valueToString()) + "]";
    }
  };
  (visitor.AttributeSelector.new = function(name, _op, _value, span) {
    this[_op$] = _op;
    this[_value$] = _value;
    visitor.AttributeSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.AttributeSelector.prototype;
  dart.addTypeTests(visitor.AttributeSelector);
  dart.setMethodSignature(visitor.AttributeSelector, () => ({
    __proto__: dart.getMethods(visitor.AttributeSelector.__proto__),
    matchOperator: dart.fnType(core.String, []),
    matchOperatorAsTokenString: dart.fnType(core.String, []),
    valueToString: dart.fnType(core.String, []),
    clone: dart.fnType(visitor.AttributeSelector, [])
  }));
  dart.setGetterSignature(visitor.AttributeSelector, () => ({
    __proto__: dart.getGetters(visitor.AttributeSelector.__proto__),
    operatorKind: core.int,
    value: dart.dynamic
  }));
  dart.setLibraryUri(visitor.AttributeSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.AttributeSelector, () => ({
    __proto__: dart.getFields(visitor.AttributeSelector.__proto__),
    [_op$]: dart.finalFieldType(core.int),
    [_value$]: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(visitor.AttributeSelector, ['toString']);
  visitor.IdSelector = class IdSelector extends visitor.SimpleSelector {
    clone() {
      return new visitor.IdSelector.new(visitor.Identifier._check(this[_name$0]), this.span);
    }
    visit(visitor) {
      return visitor.visitIdSelector(this);
    }
    toString() {
      return "#" + dart.str(this[_name$0]);
    }
  };
  (visitor.IdSelector.new = function(name, span) {
    visitor.IdSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.IdSelector.prototype;
  dart.addTypeTests(visitor.IdSelector);
  dart.setMethodSignature(visitor.IdSelector, () => ({
    __proto__: dart.getMethods(visitor.IdSelector.__proto__),
    clone: dart.fnType(visitor.IdSelector, [])
  }));
  dart.setLibraryUri(visitor.IdSelector, "package:csslib/visitor.dart");
  dart.defineExtensionMethods(visitor.IdSelector, ['toString']);
  visitor.ClassSelector = class ClassSelector extends visitor.SimpleSelector {
    clone() {
      return new visitor.ClassSelector.new(visitor.Identifier._check(this[_name$0]), this.span);
    }
    visit(visitor) {
      return visitor.visitClassSelector(this);
    }
    toString() {
      return "." + dart.str(this[_name$0]);
    }
  };
  (visitor.ClassSelector.new = function(name, span) {
    visitor.ClassSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.ClassSelector.prototype;
  dart.addTypeTests(visitor.ClassSelector);
  dart.setMethodSignature(visitor.ClassSelector, () => ({
    __proto__: dart.getMethods(visitor.ClassSelector.__proto__),
    clone: dart.fnType(visitor.ClassSelector, [])
  }));
  dart.setLibraryUri(visitor.ClassSelector, "package:csslib/visitor.dart");
  dart.defineExtensionMethods(visitor.ClassSelector, ['toString']);
  visitor.PseudoClassSelector = class PseudoClassSelector extends visitor.SimpleSelector {
    visit(visitor) {
      return visitor.visitPseudoClassSelector(this);
    }
    clone() {
      return new visitor.PseudoClassSelector.new(visitor.Identifier._check(this[_name$0]), this.span);
    }
    toString() {
      return ":" + dart.str(this.name);
    }
  };
  (visitor.PseudoClassSelector.new = function(name, span) {
    visitor.PseudoClassSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.PseudoClassSelector.prototype;
  dart.addTypeTests(visitor.PseudoClassSelector);
  dart.setMethodSignature(visitor.PseudoClassSelector, () => ({
    __proto__: dart.getMethods(visitor.PseudoClassSelector.__proto__),
    clone: dart.fnType(visitor.PseudoClassSelector, [])
  }));
  dart.setLibraryUri(visitor.PseudoClassSelector, "package:csslib/visitor.dart");
  dart.defineExtensionMethods(visitor.PseudoClassSelector, ['toString']);
  const PseudoElementSelector_isLegacy = dart.privateName(visitor, "PseudoElementSelector.isLegacy");
  visitor.PseudoElementSelector = class PseudoElementSelector extends visitor.SimpleSelector {
    get isLegacy() {
      return this[isLegacy$];
    }
    set isLegacy(value) {
      super.isLegacy = value;
    }
    visit(visitor) {
      return visitor.visitPseudoElementSelector(this);
    }
    clone() {
      return new visitor.PseudoElementSelector.new(visitor.Identifier._check(this[_name$0]), this.span);
    }
    toString() {
      return (dart.test(this.isLegacy) ? ":" : "::") + dart.str(this.name);
    }
  };
  (visitor.PseudoElementSelector.new = function(name, span, opts) {
    let isLegacy = opts && 'isLegacy' in opts ? opts.isLegacy : false;
    this[isLegacy$] = isLegacy;
    visitor.PseudoElementSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.PseudoElementSelector.prototype;
  dart.addTypeTests(visitor.PseudoElementSelector);
  const isLegacy$ = PseudoElementSelector_isLegacy;
  dart.setMethodSignature(visitor.PseudoElementSelector, () => ({
    __proto__: dart.getMethods(visitor.PseudoElementSelector.__proto__),
    clone: dart.fnType(visitor.PseudoElementSelector, [])
  }));
  dart.setLibraryUri(visitor.PseudoElementSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.PseudoElementSelector, () => ({
    __proto__: dart.getFields(visitor.PseudoElementSelector.__proto__),
    isLegacy: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(visitor.PseudoElementSelector, ['toString']);
  const _argument$ = dart.privateName(visitor, "_argument");
  visitor.PseudoClassFunctionSelector = class PseudoClassFunctionSelector extends visitor.PseudoClassSelector {
    clone() {
      return new visitor.PseudoClassFunctionSelector.new(visitor.Identifier._check(this[_name$0]), this[_argument$], this.span);
    }
    get argument() {
      return this[_argument$];
    }
    get selector() {
      return visitor.Selector.as(this[_argument$]);
    }
    get expression() {
      return visitor.SelectorExpression.as(this[_argument$]);
    }
    visit(visitor) {
      return visitor.visitPseudoClassFunctionSelector(this);
    }
  };
  (visitor.PseudoClassFunctionSelector.new = function(name, _argument, span) {
    this[_argument$] = _argument;
    visitor.PseudoClassFunctionSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.PseudoClassFunctionSelector.prototype;
  dart.addTypeTests(visitor.PseudoClassFunctionSelector);
  dart.setMethodSignature(visitor.PseudoClassFunctionSelector, () => ({
    __proto__: dart.getMethods(visitor.PseudoClassFunctionSelector.__proto__),
    clone: dart.fnType(visitor.PseudoClassFunctionSelector, [])
  }));
  dart.setGetterSignature(visitor.PseudoClassFunctionSelector, () => ({
    __proto__: dart.getGetters(visitor.PseudoClassFunctionSelector.__proto__),
    argument: visitor.TreeNode,
    selector: visitor.Selector,
    expression: visitor.SelectorExpression
  }));
  dart.setLibraryUri(visitor.PseudoClassFunctionSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.PseudoClassFunctionSelector, () => ({
    __proto__: dart.getFields(visitor.PseudoClassFunctionSelector.__proto__),
    [_argument$]: dart.finalFieldType(visitor.TreeNode)
  }));
  const PseudoElementFunctionSelector_expression = dart.privateName(visitor, "PseudoElementFunctionSelector.expression");
  visitor.PseudoElementFunctionSelector = class PseudoElementFunctionSelector extends visitor.PseudoElementSelector {
    get expression() {
      return this[expression$];
    }
    set expression(value) {
      super.expression = value;
    }
    clone() {
      return new visitor.PseudoElementFunctionSelector.new(visitor.Identifier._check(this[_name$0]), this.expression, this.span);
    }
    visit(visitor) {
      return visitor.visitPseudoElementFunctionSelector(this);
    }
  };
  (visitor.PseudoElementFunctionSelector.new = function(name, expression, span) {
    this[expression$] = expression;
    visitor.PseudoElementFunctionSelector.__proto__.new.call(this, name, span);
    ;
  }).prototype = visitor.PseudoElementFunctionSelector.prototype;
  dart.addTypeTests(visitor.PseudoElementFunctionSelector);
  const expression$ = PseudoElementFunctionSelector_expression;
  dart.setMethodSignature(visitor.PseudoElementFunctionSelector, () => ({
    __proto__: dart.getMethods(visitor.PseudoElementFunctionSelector.__proto__),
    clone: dart.fnType(visitor.PseudoElementFunctionSelector, [])
  }));
  dart.setLibraryUri(visitor.PseudoElementFunctionSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.PseudoElementFunctionSelector, () => ({
    __proto__: dart.getFields(visitor.PseudoElementFunctionSelector.__proto__),
    expression: dart.finalFieldType(visitor.SelectorExpression)
  }));
  const SelectorExpression_expressions = dart.privateName(visitor, "SelectorExpression.expressions");
  visitor.SelectorExpression = class SelectorExpression extends visitor.TreeNode {
    get expressions() {
      return this[expressions$];
    }
    set expressions(value) {
      super.expressions = value;
    }
    clone() {
      return new visitor.SelectorExpression.new(ListOfExpression()._check(this.expressions[$map](visitor.TreeNode, dart.fn(e => e.clone(), ExpressionToTreeNode()))[$toList]()), this.span);
    }
    visit(visitor) {
      return visitor.visitSelectorExpression(this);
    }
  };
  (visitor.SelectorExpression.new = function(expressions, span) {
    this[expressions$] = expressions;
    visitor.SelectorExpression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SelectorExpression.prototype;
  dart.addTypeTests(visitor.SelectorExpression);
  const expressions$ = SelectorExpression_expressions;
  dart.setMethodSignature(visitor.SelectorExpression, () => ({
    __proto__: dart.getMethods(visitor.SelectorExpression.__proto__),
    clone: dart.fnType(visitor.SelectorExpression, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SelectorExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SelectorExpression, () => ({
    __proto__: dart.getFields(visitor.SelectorExpression.__proto__),
    expressions: dart.finalFieldType(core.List$(visitor.Expression))
  }));
  const NegationSelector_negationArg = dart.privateName(visitor, "NegationSelector.negationArg");
  visitor.NegationSelector = class NegationSelector extends visitor.SimpleSelector {
    get negationArg() {
      return this[negationArg$];
    }
    set negationArg(value) {
      super.negationArg = value;
    }
    clone() {
      return new visitor.NegationSelector.new(this.negationArg, this.span);
    }
    visit(visitor) {
      return visitor.visitNegationSelector(this);
    }
  };
  (visitor.NegationSelector.new = function(negationArg, span) {
    this[negationArg$] = negationArg;
    visitor.NegationSelector.__proto__.new.call(this, new visitor.Negation.new(span), span);
    ;
  }).prototype = visitor.NegationSelector.prototype;
  dart.addTypeTests(visitor.NegationSelector);
  const negationArg$ = NegationSelector_negationArg;
  dart.setMethodSignature(visitor.NegationSelector, () => ({
    __proto__: dart.getMethods(visitor.NegationSelector.__proto__),
    clone: dart.fnType(visitor.NegationSelector, [])
  }));
  dart.setLibraryUri(visitor.NegationSelector, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.NegationSelector, () => ({
    __proto__: dart.getFields(visitor.NegationSelector.__proto__),
    negationArg: dart.finalFieldType(visitor.SimpleSelector)
  }));
  visitor.NoOp = class NoOp extends visitor.TreeNode {
    clone() {
      return new visitor.NoOp.new();
    }
    visit(visitor) {
      return visitor.visitNoOp(this);
    }
  };
  (visitor.NoOp.new = function() {
    visitor.NoOp.__proto__.new.call(this, null);
    ;
  }).prototype = visitor.NoOp.prototype;
  dart.addTypeTests(visitor.NoOp);
  dart.setMethodSignature(visitor.NoOp, () => ({
    __proto__: dart.getMethods(visitor.NoOp.__proto__),
    clone: dart.fnType(visitor.NoOp, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.NoOp, "package:csslib/visitor.dart");
  const StyleSheet_topLevels = dart.privateName(visitor, "StyleSheet.topLevels");
  visitor.StyleSheet = class StyleSheet extends visitor.TreeNode {
    get topLevels() {
      return this[topLevels$];
    }
    set topLevels(value) {
      super.topLevels = value;
    }
    clone() {
      let clonedTopLevels = this.topLevels[$map](visitor.TreeNode, dart.fn(e => e.clone(), TreeNodeToTreeNode()))[$toList]();
      return new visitor.StyleSheet.new(clonedTopLevels, this.span);
    }
    visit(visitor) {
      return visitor.visitStyleSheet(this);
    }
  };
  (visitor.StyleSheet.new = function(topLevels, span) {
    this[topLevels$] = topLevels;
    visitor.StyleSheet.__proto__.new.call(this, span);
    for (let node of this.topLevels) {
      if (!(visitor.TopLevelProduction.is(node) || visitor.Directive.is(node))) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 377, 14, "node is TopLevelProduction || node is Directive");
    }
  }).prototype = visitor.StyleSheet.prototype;
  (visitor.StyleSheet.selector = function(topLevels, span) {
    this[topLevels$] = topLevels;
    visitor.StyleSheet.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.StyleSheet.prototype;
  dart.addTypeTests(visitor.StyleSheet);
  const topLevels$ = StyleSheet_topLevels;
  dart.setMethodSignature(visitor.StyleSheet, () => ({
    __proto__: dart.getMethods(visitor.StyleSheet.__proto__),
    clone: dart.fnType(visitor.StyleSheet, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.StyleSheet, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.StyleSheet, () => ({
    __proto__: dart.getFields(visitor.StyleSheet.__proto__),
    topLevels: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  visitor.TopLevelProduction = class TopLevelProduction extends visitor.TreeNode {
    clone() {
      return new visitor.TopLevelProduction.new(this.span);
    }
    visit(visitor) {
      return visitor.visitTopLevelProduction(this);
    }
  };
  (visitor.TopLevelProduction.new = function(span) {
    visitor.TopLevelProduction.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.TopLevelProduction.prototype;
  dart.addTypeTests(visitor.TopLevelProduction);
  dart.setMethodSignature(visitor.TopLevelProduction, () => ({
    __proto__: dart.getMethods(visitor.TopLevelProduction.__proto__),
    clone: dart.fnType(visitor.TopLevelProduction, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.TopLevelProduction, "package:csslib/visitor.dart");
  visitor.RuleSet = class RuleSet extends visitor.TopLevelProduction {
    get selectorGroup() {
      return this[_selectorGroup$];
    }
    get declarationGroup() {
      return this[_declarationGroup$];
    }
    clone() {
      let cloneSelectorGroup = this[_selectorGroup$].clone();
      let cloneDeclarationGroup = this[_declarationGroup$].clone();
      return new visitor.RuleSet.new(cloneSelectorGroup, cloneDeclarationGroup, this.span);
    }
    visit(visitor) {
      return visitor.visitRuleSet(this);
    }
  };
  (visitor.RuleSet.new = function(_selectorGroup, _declarationGroup, span) {
    this[_selectorGroup$] = _selectorGroup;
    this[_declarationGroup$] = _declarationGroup;
    visitor.RuleSet.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.RuleSet.prototype;
  dart.addTypeTests(visitor.RuleSet);
  dart.setMethodSignature(visitor.RuleSet, () => ({
    __proto__: dart.getMethods(visitor.RuleSet.__proto__),
    clone: dart.fnType(visitor.RuleSet, [])
  }));
  dart.setGetterSignature(visitor.RuleSet, () => ({
    __proto__: dart.getGetters(visitor.RuleSet.__proto__),
    selectorGroup: visitor.SelectorGroup,
    declarationGroup: visitor.DeclarationGroup
  }));
  dart.setLibraryUri(visitor.RuleSet, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.RuleSet, () => ({
    __proto__: dart.getFields(visitor.RuleSet.__proto__),
    [_selectorGroup$]: dart.finalFieldType(visitor.SelectorGroup),
    [_declarationGroup$]: dart.finalFieldType(visitor.DeclarationGroup)
  }));
  visitor.Directive = class Directive extends visitor.TreeNode {
    get isBuiltIn() {
      return true;
    }
    get isExtension() {
      return false;
    }
    clone() {
      return new visitor.Directive.new(this.span);
    }
    visit(visitor) {
      return visitor.visitDirective(this);
    }
  };
  (visitor.Directive.new = function(span) {
    visitor.Directive.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Directive.prototype;
  dart.addTypeTests(visitor.Directive);
  dart.setMethodSignature(visitor.Directive, () => ({
    __proto__: dart.getMethods(visitor.Directive.__proto__),
    clone: dart.fnType(visitor.Directive, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.Directive, () => ({
    __proto__: dart.getGetters(visitor.Directive.__proto__),
    isBuiltIn: core.bool,
    isExtension: core.bool
  }));
  dart.setLibraryUri(visitor.Directive, "package:csslib/visitor.dart");
  const DocumentDirective_functions = dart.privateName(visitor, "DocumentDirective.functions");
  const DocumentDirective_groupRuleBody = dart.privateName(visitor, "DocumentDirective.groupRuleBody");
  visitor.DocumentDirective = class DocumentDirective extends visitor.Directive {
    get functions() {
      return this[functions$];
    }
    set functions(value) {
      super.functions = value;
    }
    get groupRuleBody() {
      return this[groupRuleBody$];
    }
    set groupRuleBody(value) {
      super.groupRuleBody = value;
    }
    clone() {
      let clonedFunctions = JSArrayOfLiteralTerm().of([]);
      for (let $function of this.functions) {
        clonedFunctions[$add]($function.clone());
      }
      let clonedGroupRuleBody = JSArrayOfTreeNode().of([]);
      for (let rule of this.groupRuleBody) {
        clonedGroupRuleBody[$add](rule.clone());
      }
      return new visitor.DocumentDirective.new(clonedFunctions, clonedGroupRuleBody, this.span);
    }
    visit(visitor) {
      return visitor.visitDocumentDirective(this);
    }
  };
  (visitor.DocumentDirective.new = function(functions, groupRuleBody, span) {
    this[functions$] = functions;
    this[groupRuleBody$] = groupRuleBody;
    visitor.DocumentDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.DocumentDirective.prototype;
  dart.addTypeTests(visitor.DocumentDirective);
  const functions$ = DocumentDirective_functions;
  const groupRuleBody$ = DocumentDirective_groupRuleBody;
  dart.setMethodSignature(visitor.DocumentDirective, () => ({
    __proto__: dart.getMethods(visitor.DocumentDirective.__proto__),
    clone: dart.fnType(visitor.DocumentDirective, [])
  }));
  dart.setLibraryUri(visitor.DocumentDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.DocumentDirective, () => ({
    __proto__: dart.getFields(visitor.DocumentDirective.__proto__),
    functions: dart.finalFieldType(core.List$(visitor.LiteralTerm)),
    groupRuleBody: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const SupportsDirective_condition = dart.privateName(visitor, "SupportsDirective.condition");
  const SupportsDirective_groupRuleBody = dart.privateName(visitor, "SupportsDirective.groupRuleBody");
  visitor.SupportsDirective = class SupportsDirective extends visitor.Directive {
    get condition() {
      return this[condition$];
    }
    set condition(value) {
      super.condition = value;
    }
    get groupRuleBody() {
      return this[groupRuleBody$0];
    }
    set groupRuleBody(value) {
      super.groupRuleBody = value;
    }
    clone() {
      let clonedCondition = this.condition.clone();
      let clonedGroupRuleBody = JSArrayOfTreeNode().of([]);
      for (let rule of this.groupRuleBody) {
        clonedGroupRuleBody[$add](rule.clone());
      }
      return new visitor.SupportsDirective.new(visitor.SupportsCondition._check(clonedCondition), clonedGroupRuleBody, this.span);
    }
    visit(visitor) {
      return visitor.visitSupportsDirective(this);
    }
  };
  (visitor.SupportsDirective.new = function(condition, groupRuleBody, span) {
    this[condition$] = condition;
    this[groupRuleBody$0] = groupRuleBody;
    visitor.SupportsDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsDirective.prototype;
  dart.addTypeTests(visitor.SupportsDirective);
  const condition$ = SupportsDirective_condition;
  const groupRuleBody$0 = SupportsDirective_groupRuleBody;
  dart.setMethodSignature(visitor.SupportsDirective, () => ({
    __proto__: dart.getMethods(visitor.SupportsDirective.__proto__),
    clone: dart.fnType(visitor.SupportsDirective, [])
  }));
  dart.setLibraryUri(visitor.SupportsDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SupportsDirective, () => ({
    __proto__: dart.getFields(visitor.SupportsDirective.__proto__),
    condition: dart.finalFieldType(visitor.SupportsCondition),
    groupRuleBody: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  visitor.SupportsCondition = class SupportsCondition extends visitor.TreeNode {};
  (visitor.SupportsCondition.new = function(span) {
    visitor.SupportsCondition.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsCondition.prototype;
  dart.addTypeTests(visitor.SupportsCondition);
  dart.setLibraryUri(visitor.SupportsCondition, "package:csslib/visitor.dart");
  const SupportsConditionInParens_condition = dart.privateName(visitor, "SupportsConditionInParens.condition");
  visitor.SupportsConditionInParens = class SupportsConditionInParens extends visitor.SupportsCondition {
    get condition() {
      return this[condition$0];
    }
    set condition(value) {
      super.condition = value;
    }
    clone() {
      return new visitor.SupportsConditionInParens.new(visitor.Declaration._check(this.condition.clone()), this.span);
    }
    visit(visitor) {
      return visitor.visitSupportsConditionInParens(this);
    }
  };
  (visitor.SupportsConditionInParens.new = function(declaration, span) {
    this[condition$0] = declaration;
    visitor.SupportsConditionInParens.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsConditionInParens.prototype;
  (visitor.SupportsConditionInParens.nested = function(condition, span) {
    this[condition$0] = condition;
    visitor.SupportsConditionInParens.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsConditionInParens.prototype;
  dart.addTypeTests(visitor.SupportsConditionInParens);
  const condition$0 = SupportsConditionInParens_condition;
  dart.setMethodSignature(visitor.SupportsConditionInParens, () => ({
    __proto__: dart.getMethods(visitor.SupportsConditionInParens.__proto__),
    clone: dart.fnType(visitor.SupportsConditionInParens, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SupportsConditionInParens, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SupportsConditionInParens, () => ({
    __proto__: dart.getFields(visitor.SupportsConditionInParens.__proto__),
    condition: dart.finalFieldType(visitor.TreeNode)
  }));
  const SupportsNegation_condition = dart.privateName(visitor, "SupportsNegation.condition");
  visitor.SupportsNegation = class SupportsNegation extends visitor.SupportsCondition {
    get condition() {
      return this[condition$1];
    }
    set condition(value) {
      super.condition = value;
    }
    clone() {
      return new visitor.SupportsNegation.new(this.condition.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitSupportsNegation(this);
    }
  };
  (visitor.SupportsNegation.new = function(condition, span) {
    this[condition$1] = condition;
    visitor.SupportsNegation.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsNegation.prototype;
  dart.addTypeTests(visitor.SupportsNegation);
  const condition$1 = SupportsNegation_condition;
  dart.setMethodSignature(visitor.SupportsNegation, () => ({
    __proto__: dart.getMethods(visitor.SupportsNegation.__proto__),
    clone: dart.fnType(visitor.SupportsNegation, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SupportsNegation, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SupportsNegation, () => ({
    __proto__: dart.getFields(visitor.SupportsNegation.__proto__),
    condition: dart.finalFieldType(visitor.SupportsConditionInParens)
  }));
  const SupportsConjunction_conditions = dart.privateName(visitor, "SupportsConjunction.conditions");
  visitor.SupportsConjunction = class SupportsConjunction extends visitor.SupportsCondition {
    get conditions() {
      return this[conditions$];
    }
    set conditions(value) {
      super.conditions = value;
    }
    clone() {
      let clonedConditions = JSArrayOfSupportsConditionInParens().of([]);
      for (let condition of this.conditions) {
        clonedConditions[$add](condition.clone());
      }
      return new visitor.SupportsConjunction.new(clonedConditions, this.span);
    }
    visit(visitor) {
      return visitor.visitSupportsConjunction(this);
    }
  };
  (visitor.SupportsConjunction.new = function(conditions, span) {
    this[conditions$] = conditions;
    visitor.SupportsConjunction.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsConjunction.prototype;
  dart.addTypeTests(visitor.SupportsConjunction);
  const conditions$ = SupportsConjunction_conditions;
  dart.setMethodSignature(visitor.SupportsConjunction, () => ({
    __proto__: dart.getMethods(visitor.SupportsConjunction.__proto__),
    clone: dart.fnType(visitor.SupportsConjunction, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SupportsConjunction, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SupportsConjunction, () => ({
    __proto__: dart.getFields(visitor.SupportsConjunction.__proto__),
    conditions: dart.finalFieldType(core.List$(visitor.SupportsConditionInParens))
  }));
  const SupportsDisjunction_conditions = dart.privateName(visitor, "SupportsDisjunction.conditions");
  visitor.SupportsDisjunction = class SupportsDisjunction extends visitor.SupportsCondition {
    get conditions() {
      return this[conditions$0];
    }
    set conditions(value) {
      super.conditions = value;
    }
    clone() {
      let clonedConditions = JSArrayOfSupportsConditionInParens().of([]);
      for (let condition of this.conditions) {
        clonedConditions[$add](condition.clone());
      }
      return new visitor.SupportsDisjunction.new(clonedConditions, this.span);
    }
    visit(visitor) {
      return visitor.visitSupportsDisjunction(this);
    }
  };
  (visitor.SupportsDisjunction.new = function(conditions, span) {
    this[conditions$0] = conditions;
    visitor.SupportsDisjunction.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.SupportsDisjunction.prototype;
  dart.addTypeTests(visitor.SupportsDisjunction);
  const conditions$0 = SupportsDisjunction_conditions;
  dart.setMethodSignature(visitor.SupportsDisjunction, () => ({
    __proto__: dart.getMethods(visitor.SupportsDisjunction.__proto__),
    clone: dart.fnType(visitor.SupportsDisjunction, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.SupportsDisjunction, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.SupportsDisjunction, () => ({
    __proto__: dart.getFields(visitor.SupportsDisjunction.__proto__),
    conditions: dart.finalFieldType(core.List$(visitor.SupportsConditionInParens))
  }));
  const ViewportDirective_name = dart.privateName(visitor, "ViewportDirective.name");
  const ViewportDirective_declarations = dart.privateName(visitor, "ViewportDirective.declarations");
  visitor.ViewportDirective = class ViewportDirective extends visitor.Directive {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get declarations() {
      return this[declarations$];
    }
    set declarations(value) {
      super.declarations = value;
    }
    clone() {
      return new visitor.ViewportDirective.new(this.name, this.declarations.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitViewportDirective(this);
    }
  };
  (visitor.ViewportDirective.new = function(name, declarations, span) {
    this[name$0] = name;
    this[declarations$] = declarations;
    visitor.ViewportDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.ViewportDirective.prototype;
  dart.addTypeTests(visitor.ViewportDirective);
  const name$0 = ViewportDirective_name;
  const declarations$ = ViewportDirective_declarations;
  dart.setMethodSignature(visitor.ViewportDirective, () => ({
    __proto__: dart.getMethods(visitor.ViewportDirective.__proto__),
    clone: dart.fnType(visitor.ViewportDirective, [])
  }));
  dart.setLibraryUri(visitor.ViewportDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.ViewportDirective, () => ({
    __proto__: dart.getFields(visitor.ViewportDirective.__proto__),
    name: dart.finalFieldType(core.String),
    declarations: dart.finalFieldType(visitor.DeclarationGroup)
  }));
  const ImportDirective_import = dart.privateName(visitor, "ImportDirective.import");
  const ImportDirective_mediaQueries = dart.privateName(visitor, "ImportDirective.mediaQueries");
  visitor.ImportDirective = class ImportDirective extends visitor.Directive {
    get import() {
      return this[import$];
    }
    set import(value) {
      super.import = value;
    }
    get mediaQueries() {
      return this[mediaQueries$];
    }
    set mediaQueries(value) {
      super.mediaQueries = value;
    }
    clone() {
      let cloneMediaQueries = JSArrayOfMediaQuery().of([]);
      for (let mediaQuery of this.mediaQueries) {
        cloneMediaQueries[$add](mediaQuery.clone());
      }
      return new visitor.ImportDirective.new(this.import, cloneMediaQueries, this.span);
    }
    visit(visitor) {
      return visitor.visitImportDirective(this);
    }
  };
  (visitor.ImportDirective.new = function($import, mediaQueries, span) {
    this[import$] = $import;
    this[mediaQueries$] = mediaQueries;
    visitor.ImportDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.ImportDirective.prototype;
  dart.addTypeTests(visitor.ImportDirective);
  const import$ = ImportDirective_import;
  const mediaQueries$ = ImportDirective_mediaQueries;
  dart.setMethodSignature(visitor.ImportDirective, () => ({
    __proto__: dart.getMethods(visitor.ImportDirective.__proto__),
    clone: dart.fnType(visitor.ImportDirective, [])
  }));
  dart.setLibraryUri(visitor.ImportDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.ImportDirective, () => ({
    __proto__: dart.getFields(visitor.ImportDirective.__proto__),
    import: dart.finalFieldType(core.String),
    mediaQueries: dart.finalFieldType(core.List$(visitor.MediaQuery))
  }));
  const _mediaFeature$ = dart.privateName(visitor, "_mediaFeature");
  const MediaExpression_andOperator = dart.privateName(visitor, "MediaExpression.andOperator");
  const MediaExpression_exprs = dart.privateName(visitor, "MediaExpression.exprs");
  visitor.MediaExpression = class MediaExpression extends visitor.TreeNode {
    get andOperator() {
      return this[andOperator$];
    }
    set andOperator(value) {
      super.andOperator = value;
    }
    get exprs() {
      return this[exprs$];
    }
    set exprs(value) {
      super.exprs = value;
    }
    get mediaFeature() {
      return this[_mediaFeature$].name;
    }
    clone() {
      let clonedExprs = this.exprs.clone();
      return new visitor.MediaExpression.new(this.andOperator, this[_mediaFeature$], clonedExprs, this.span);
    }
    visit(visitor) {
      return visitor.visitMediaExpression(this);
    }
  };
  (visitor.MediaExpression.new = function(andOperator, _mediaFeature, exprs, span) {
    this[andOperator$] = andOperator;
    this[_mediaFeature$] = _mediaFeature;
    this[exprs$] = exprs;
    visitor.MediaExpression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.MediaExpression.prototype;
  dart.addTypeTests(visitor.MediaExpression);
  const andOperator$ = MediaExpression_andOperator;
  const exprs$ = MediaExpression_exprs;
  dart.setMethodSignature(visitor.MediaExpression, () => ({
    __proto__: dart.getMethods(visitor.MediaExpression.__proto__),
    clone: dart.fnType(visitor.MediaExpression, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.MediaExpression, () => ({
    __proto__: dart.getGetters(visitor.MediaExpression.__proto__),
    mediaFeature: core.String
  }));
  dart.setLibraryUri(visitor.MediaExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MediaExpression, () => ({
    __proto__: dart.getFields(visitor.MediaExpression.__proto__),
    andOperator: dart.finalFieldType(core.bool),
    [_mediaFeature$]: dart.finalFieldType(visitor.Identifier),
    exprs: dart.finalFieldType(visitor.Expressions)
  }));
  const _mediaUnary$ = dart.privateName(visitor, "_mediaUnary");
  const _mediaType$ = dart.privateName(visitor, "_mediaType");
  const MediaQuery_expressions = dart.privateName(visitor, "MediaQuery.expressions");
  visitor.MediaQuery = class MediaQuery extends visitor.TreeNode {
    get expressions() {
      return this[expressions$0];
    }
    set expressions(value) {
      super.expressions = value;
    }
    get hasMediaType() {
      return this[_mediaType$] != null;
    }
    get mediaType() {
      return this[_mediaType$].name;
    }
    get hasUnary() {
      return this[_mediaUnary$] !== -1;
    }
    get unary() {
      return parser.TokenKind.idToValue(parser.TokenKind.MEDIA_OPERATORS, this[_mediaUnary$])[$toUpperCase]();
    }
    clone() {
      let cloneExpressions = JSArrayOfMediaExpression().of([]);
      for (let expr of this.expressions) {
        cloneExpressions[$add](expr.clone());
      }
      return new visitor.MediaQuery.new(this[_mediaUnary$], this[_mediaType$], cloneExpressions, this.span);
    }
    visit(visitor) {
      return visitor.visitMediaQuery(this);
    }
  };
  (visitor.MediaQuery.new = function(_mediaUnary, _mediaType, expressions, span) {
    this[_mediaUnary$] = _mediaUnary;
    this[_mediaType$] = _mediaType;
    this[expressions$0] = expressions;
    visitor.MediaQuery.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.MediaQuery.prototype;
  dart.addTypeTests(visitor.MediaQuery);
  const expressions$0 = MediaQuery_expressions;
  dart.setMethodSignature(visitor.MediaQuery, () => ({
    __proto__: dart.getMethods(visitor.MediaQuery.__proto__),
    clone: dart.fnType(visitor.MediaQuery, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.MediaQuery, () => ({
    __proto__: dart.getGetters(visitor.MediaQuery.__proto__),
    hasMediaType: core.bool,
    mediaType: core.String,
    hasUnary: core.bool,
    unary: core.String
  }));
  dart.setLibraryUri(visitor.MediaQuery, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MediaQuery, () => ({
    __proto__: dart.getFields(visitor.MediaQuery.__proto__),
    [_mediaUnary$]: dart.finalFieldType(core.int),
    [_mediaType$]: dart.finalFieldType(visitor.Identifier),
    expressions: dart.finalFieldType(core.List$(visitor.MediaExpression))
  }));
  const MediaDirective_mediaQueries = dart.privateName(visitor, "MediaDirective.mediaQueries");
  const MediaDirective_rules = dart.privateName(visitor, "MediaDirective.rules");
  visitor.MediaDirective = class MediaDirective extends visitor.Directive {
    get mediaQueries() {
      return this[mediaQueries$0];
    }
    set mediaQueries(value) {
      super.mediaQueries = value;
    }
    get rules() {
      return this[rules$];
    }
    set rules(value) {
      super.rules = value;
    }
    clone() {
      let cloneQueries = JSArrayOfMediaQuery().of([]);
      for (let mediaQuery of this.mediaQueries) {
        cloneQueries[$add](mediaQuery.clone());
      }
      let cloneRules = JSArrayOfTreeNode().of([]);
      for (let rule of this.rules) {
        cloneRules[$add](rule.clone());
      }
      return new visitor.MediaDirective.new(cloneQueries, cloneRules, this.span);
    }
    visit(visitor) {
      return visitor.visitMediaDirective(this);
    }
  };
  (visitor.MediaDirective.new = function(mediaQueries, rules, span) {
    this[mediaQueries$0] = mediaQueries;
    this[rules$] = rules;
    visitor.MediaDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.MediaDirective.prototype;
  dart.addTypeTests(visitor.MediaDirective);
  const mediaQueries$0 = MediaDirective_mediaQueries;
  const rules$ = MediaDirective_rules;
  dart.setMethodSignature(visitor.MediaDirective, () => ({
    __proto__: dart.getMethods(visitor.MediaDirective.__proto__),
    clone: dart.fnType(visitor.MediaDirective, [])
  }));
  dart.setLibraryUri(visitor.MediaDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MediaDirective, () => ({
    __proto__: dart.getFields(visitor.MediaDirective.__proto__),
    mediaQueries: dart.finalFieldType(core.List$(visitor.MediaQuery)),
    rules: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const HostDirective_rules = dart.privateName(visitor, "HostDirective.rules");
  visitor.HostDirective = class HostDirective extends visitor.Directive {
    get rules() {
      return this[rules$0];
    }
    set rules(value) {
      super.rules = value;
    }
    clone() {
      let cloneRules = JSArrayOfTreeNode().of([]);
      for (let rule of this.rules) {
        cloneRules[$add](rule.clone());
      }
      return new visitor.HostDirective.new(cloneRules, this.span);
    }
    visit(visitor) {
      return visitor.visitHostDirective(this);
    }
  };
  (visitor.HostDirective.new = function(rules, span) {
    this[rules$0] = rules;
    visitor.HostDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.HostDirective.prototype;
  dart.addTypeTests(visitor.HostDirective);
  const rules$0 = HostDirective_rules;
  dart.setMethodSignature(visitor.HostDirective, () => ({
    __proto__: dart.getMethods(visitor.HostDirective.__proto__),
    clone: dart.fnType(visitor.HostDirective, [])
  }));
  dart.setLibraryUri(visitor.HostDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.HostDirective, () => ({
    __proto__: dart.getFields(visitor.HostDirective.__proto__),
    rules: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  visitor.PageDirective = class PageDirective extends visitor.Directive {
    clone() {
      let cloneDeclsMargin = JSArrayOfDeclarationGroup().of([]);
      for (let declMargin of this[_declsMargin$]) {
        cloneDeclsMargin[$add](declMargin.clone());
      }
      return new visitor.PageDirective.new(this[_ident$], this[_pseudoPage$], cloneDeclsMargin, this.span);
    }
    visit(visitor) {
      return visitor.visitPageDirective(this);
    }
    get hasIdent() {
      return this[_ident$] != null && this[_ident$][$isNotEmpty];
    }
    get hasPseudoPage() {
      return this[_pseudoPage$] != null && this[_pseudoPage$][$isNotEmpty];
    }
  };
  (visitor.PageDirective.new = function(_ident, _pseudoPage, _declsMargin, span) {
    this[_ident$] = _ident;
    this[_pseudoPage$] = _pseudoPage;
    this[_declsMargin$] = _declsMargin;
    visitor.PageDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.PageDirective.prototype;
  dart.addTypeTests(visitor.PageDirective);
  dart.setMethodSignature(visitor.PageDirective, () => ({
    __proto__: dart.getMethods(visitor.PageDirective.__proto__),
    clone: dart.fnType(visitor.PageDirective, [])
  }));
  dart.setGetterSignature(visitor.PageDirective, () => ({
    __proto__: dart.getGetters(visitor.PageDirective.__proto__),
    hasIdent: core.bool,
    hasPseudoPage: core.bool
  }));
  dart.setLibraryUri(visitor.PageDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.PageDirective, () => ({
    __proto__: dart.getFields(visitor.PageDirective.__proto__),
    [_ident$]: dart.finalFieldType(core.String),
    [_pseudoPage$]: dart.finalFieldType(core.String),
    [_declsMargin$]: dart.finalFieldType(core.List$(visitor.DeclarationGroup))
  }));
  const CharsetDirective_charEncoding = dart.privateName(visitor, "CharsetDirective.charEncoding");
  visitor.CharsetDirective = class CharsetDirective extends visitor.Directive {
    get charEncoding() {
      return this[charEncoding$];
    }
    set charEncoding(value) {
      super.charEncoding = value;
    }
    clone() {
      return new visitor.CharsetDirective.new(this.charEncoding, this.span);
    }
    visit(visitor) {
      return visitor.visitCharsetDirective(this);
    }
  };
  (visitor.CharsetDirective.new = function(charEncoding, span) {
    this[charEncoding$] = charEncoding;
    visitor.CharsetDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.CharsetDirective.prototype;
  dart.addTypeTests(visitor.CharsetDirective);
  const charEncoding$ = CharsetDirective_charEncoding;
  dart.setMethodSignature(visitor.CharsetDirective, () => ({
    __proto__: dart.getMethods(visitor.CharsetDirective.__proto__),
    clone: dart.fnType(visitor.CharsetDirective, [])
  }));
  dart.setLibraryUri(visitor.CharsetDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.CharsetDirective, () => ({
    __proto__: dart.getFields(visitor.CharsetDirective.__proto__),
    charEncoding: dart.finalFieldType(core.String)
  }));
  const _keyframeName$ = dart.privateName(visitor, "_keyframeName");
  const KeyFrameDirective_name = dart.privateName(visitor, "KeyFrameDirective.name");
  visitor.KeyFrameDirective = class KeyFrameDirective extends visitor.Directive {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    add(block) {
      this[_blocks][$add](block);
    }
    get keyFrameName() {
      switch (this[_keyframeName$]) {
        case 646:
        case 649:
        {
          return "@keyframes";
        }
        case 647:
        {
          return "@-webkit-keyframes";
        }
        case 648:
        {
          return "@-moz-keyframes";
        }
        case 650:
        {
          return "@-o-keyframes";
        }
      }
      return null;
    }
    clone() {
      let directive = new visitor.KeyFrameDirective.new(this[_keyframeName$], this.name.clone(), this.span);
      for (let block of this[_blocks]) {
        directive.add(block.clone());
      }
      return directive;
    }
    visit(visitor) {
      return visitor.visitKeyFrameDirective(this);
    }
  };
  (visitor.KeyFrameDirective.new = function(_keyframeName, name, span) {
    this[_keyframeName$] = _keyframeName;
    this[name$1] = name;
    this[_blocks] = JSArrayOfKeyFrameBlock().of([]);
    visitor.KeyFrameDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.KeyFrameDirective.prototype;
  dart.addTypeTests(visitor.KeyFrameDirective);
  const name$1 = KeyFrameDirective_name;
  dart.setMethodSignature(visitor.KeyFrameDirective, () => ({
    __proto__: dart.getMethods(visitor.KeyFrameDirective.__proto__),
    add: dart.fnType(dart.dynamic, [visitor.KeyFrameBlock]),
    clone: dart.fnType(visitor.KeyFrameDirective, [])
  }));
  dart.setGetterSignature(visitor.KeyFrameDirective, () => ({
    __proto__: dart.getGetters(visitor.KeyFrameDirective.__proto__),
    keyFrameName: core.String
  }));
  dart.setLibraryUri(visitor.KeyFrameDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.KeyFrameDirective, () => ({
    __proto__: dart.getFields(visitor.KeyFrameDirective.__proto__),
    [_keyframeName$]: dart.finalFieldType(core.int),
    name: dart.finalFieldType(visitor.Identifier),
    [_blocks]: dart.finalFieldType(core.List$(visitor.KeyFrameBlock))
  }));
  visitor.KeyFrameBlock = class KeyFrameBlock extends visitor.Expression {
    clone() {
      return new visitor.KeyFrameBlock.new(this[_blockSelectors$].clone(), this[_declarations$].clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitKeyFrameBlock(this);
    }
  };
  (visitor.KeyFrameBlock.new = function(_blockSelectors, _declarations, span) {
    this[_blockSelectors$] = _blockSelectors;
    this[_declarations$] = _declarations;
    visitor.KeyFrameBlock.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.KeyFrameBlock.prototype;
  dart.addTypeTests(visitor.KeyFrameBlock);
  dart.setMethodSignature(visitor.KeyFrameBlock, () => ({
    __proto__: dart.getMethods(visitor.KeyFrameBlock.__proto__),
    clone: dart.fnType(visitor.KeyFrameBlock, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.KeyFrameBlock, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.KeyFrameBlock, () => ({
    __proto__: dart.getFields(visitor.KeyFrameBlock.__proto__),
    [_blockSelectors$]: dart.finalFieldType(visitor.Expressions),
    [_declarations$]: dart.finalFieldType(visitor.DeclarationGroup)
  }));
  visitor.FontFaceDirective = class FontFaceDirective extends visitor.Directive {
    clone() {
      return new visitor.FontFaceDirective.new(this[_declarations$].clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitFontFaceDirective(this);
    }
  };
  (visitor.FontFaceDirective.new = function(_declarations, span) {
    this[_declarations$] = _declarations;
    visitor.FontFaceDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.FontFaceDirective.prototype;
  dart.addTypeTests(visitor.FontFaceDirective);
  dart.setMethodSignature(visitor.FontFaceDirective, () => ({
    __proto__: dart.getMethods(visitor.FontFaceDirective.__proto__),
    clone: dart.fnType(visitor.FontFaceDirective, [])
  }));
  dart.setLibraryUri(visitor.FontFaceDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.FontFaceDirective, () => ({
    __proto__: dart.getFields(visitor.FontFaceDirective.__proto__),
    [_declarations$]: dart.finalFieldType(visitor.DeclarationGroup)
  }));
  const StyletDirective_dartClassName = dart.privateName(visitor, "StyletDirective.dartClassName");
  const StyletDirective_rules = dart.privateName(visitor, "StyletDirective.rules");
  visitor.StyletDirective = class StyletDirective extends visitor.Directive {
    get dartClassName() {
      return this[dartClassName$];
    }
    set dartClassName(value) {
      super.dartClassName = value;
    }
    get rules() {
      return this[rules$1];
    }
    set rules(value) {
      super.rules = value;
    }
    get isBuiltIn() {
      return false;
    }
    get isExtension() {
      return true;
    }
    clone() {
      let cloneRules = JSArrayOfTreeNode().of([]);
      for (let rule of this.rules) {
        cloneRules[$add](rule.clone());
      }
      return new visitor.StyletDirective.new(this.dartClassName, cloneRules, this.span);
    }
    visit(visitor) {
      return visitor.visitStyletDirective(this);
    }
  };
  (visitor.StyletDirective.new = function(dartClassName, rules, span) {
    this[dartClassName$] = dartClassName;
    this[rules$1] = rules;
    visitor.StyletDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.StyletDirective.prototype;
  dart.addTypeTests(visitor.StyletDirective);
  const dartClassName$ = StyletDirective_dartClassName;
  const rules$1 = StyletDirective_rules;
  dart.setMethodSignature(visitor.StyletDirective, () => ({
    __proto__: dart.getMethods(visitor.StyletDirective.__proto__),
    clone: dart.fnType(visitor.StyletDirective, [])
  }));
  dart.setLibraryUri(visitor.StyletDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.StyletDirective, () => ({
    __proto__: dart.getFields(visitor.StyletDirective.__proto__),
    dartClassName: dart.finalFieldType(core.String),
    rules: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const _prefix$ = dart.privateName(visitor, "_prefix");
  visitor.NamespaceDirective = class NamespaceDirective extends visitor.Directive {
    clone() {
      return new visitor.NamespaceDirective.new(this[_prefix$], this[_uri$], this.span);
    }
    visit(visitor) {
      return visitor.visitNamespaceDirective(this);
    }
    get prefix() {
      return this[_prefix$][$isNotEmpty] ? dart.str(this[_prefix$]) + " " : "";
    }
  };
  (visitor.NamespaceDirective.new = function(_prefix, _uri, span) {
    this[_prefix$] = _prefix;
    this[_uri$] = _uri;
    visitor.NamespaceDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.NamespaceDirective.prototype;
  dart.addTypeTests(visitor.NamespaceDirective);
  dart.setMethodSignature(visitor.NamespaceDirective, () => ({
    __proto__: dart.getMethods(visitor.NamespaceDirective.__proto__),
    clone: dart.fnType(visitor.NamespaceDirective, [])
  }));
  dart.setGetterSignature(visitor.NamespaceDirective, () => ({
    __proto__: dart.getGetters(visitor.NamespaceDirective.__proto__),
    prefix: core.String
  }));
  dart.setLibraryUri(visitor.NamespaceDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.NamespaceDirective, () => ({
    __proto__: dart.getFields(visitor.NamespaceDirective.__proto__),
    [_prefix$]: dart.finalFieldType(core.String),
    [_uri$]: dart.finalFieldType(core.String)
  }));
  const VarDefinitionDirective_def = dart.privateName(visitor, "VarDefinitionDirective.def");
  visitor.VarDefinitionDirective = class VarDefinitionDirective extends visitor.Directive {
    get def() {
      return this[def$];
    }
    set def(value) {
      super.def = value;
    }
    clone() {
      return new visitor.VarDefinitionDirective.new(this.def.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitVarDefinitionDirective(this);
    }
  };
  (visitor.VarDefinitionDirective.new = function(def, span) {
    this[def$] = def;
    visitor.VarDefinitionDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.VarDefinitionDirective.prototype;
  dart.addTypeTests(visitor.VarDefinitionDirective);
  const def$ = VarDefinitionDirective_def;
  dart.setMethodSignature(visitor.VarDefinitionDirective, () => ({
    __proto__: dart.getMethods(visitor.VarDefinitionDirective.__proto__),
    clone: dart.fnType(visitor.VarDefinitionDirective, [])
  }));
  dart.setLibraryUri(visitor.VarDefinitionDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.VarDefinitionDirective, () => ({
    __proto__: dart.getFields(visitor.VarDefinitionDirective.__proto__),
    def: dart.finalFieldType(visitor.VarDefinition)
  }));
  const MixinDefinition_name = dart.privateName(visitor, "MixinDefinition.name");
  const MixinDefinition_definedArgs = dart.privateName(visitor, "MixinDefinition.definedArgs");
  const MixinDefinition_varArgs = dart.privateName(visitor, "MixinDefinition.varArgs");
  visitor.MixinDefinition = class MixinDefinition extends visitor.Directive {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    get definedArgs() {
      return this[definedArgs$];
    }
    set definedArgs(value) {
      super.definedArgs = value;
    }
    get varArgs() {
      return this[varArgs$];
    }
    set varArgs(value) {
      super.varArgs = value;
    }
    clone() {
      let cloneDefinedArgs = JSArrayOfTreeNode().of([]);
      for (let definedArg of this.definedArgs) {
        cloneDefinedArgs[$add](definedArg.clone());
      }
      return new visitor.MixinDefinition.new(this.name, cloneDefinedArgs, this.varArgs, this.span);
    }
    visit(visitor) {
      return visitor.visitMixinDefinition(this);
    }
  };
  (visitor.MixinDefinition.new = function(name, definedArgs, varArgs, span) {
    this[name$2] = name;
    this[definedArgs$] = definedArgs;
    this[varArgs$] = varArgs;
    visitor.MixinDefinition.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.MixinDefinition.prototype;
  dart.addTypeTests(visitor.MixinDefinition);
  const name$2 = MixinDefinition_name;
  const definedArgs$ = MixinDefinition_definedArgs;
  const varArgs$ = MixinDefinition_varArgs;
  dart.setMethodSignature(visitor.MixinDefinition, () => ({
    __proto__: dart.getMethods(visitor.MixinDefinition.__proto__),
    clone: dart.fnType(visitor.MixinDefinition, [])
  }));
  dart.setLibraryUri(visitor.MixinDefinition, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MixinDefinition, () => ({
    __proto__: dart.getFields(visitor.MixinDefinition.__proto__),
    name: dart.finalFieldType(core.String),
    definedArgs: dart.finalFieldType(core.List$(visitor.TreeNode)),
    varArgs: dart.finalFieldType(core.bool)
  }));
  const MixinRulesetDirective_rulesets = dart.privateName(visitor, "MixinRulesetDirective.rulesets");
  visitor.MixinRulesetDirective = class MixinRulesetDirective extends visitor.MixinDefinition {
    get rulesets() {
      return this[rulesets$];
    }
    set rulesets(value) {
      super.rulesets = value;
    }
    clone() {
      let clonedArgs = JSArrayOfVarDefinition().of([]);
      for (let arg of this.definedArgs) {
        clonedArgs[$add](visitor.VarDefinition._check(arg.clone()));
      }
      let clonedRulesets = JSArrayOfTreeNode().of([]);
      for (let ruleset of this.rulesets) {
        clonedRulesets[$add](ruleset.clone());
      }
      return new visitor.MixinRulesetDirective.new(this.name, clonedArgs, this.varArgs, clonedRulesets, this.span);
    }
    visit(visitor) {
      return visitor.visitMixinRulesetDirective(this);
    }
  };
  (visitor.MixinRulesetDirective.new = function(name, args, varArgs, rulesets, span) {
    this[rulesets$] = rulesets;
    visitor.MixinRulesetDirective.__proto__.new.call(this, name, args, varArgs, span);
    ;
  }).prototype = visitor.MixinRulesetDirective.prototype;
  dart.addTypeTests(visitor.MixinRulesetDirective);
  const rulesets$ = MixinRulesetDirective_rulesets;
  dart.setMethodSignature(visitor.MixinRulesetDirective, () => ({
    __proto__: dart.getMethods(visitor.MixinRulesetDirective.__proto__),
    clone: dart.fnType(visitor.MixinRulesetDirective, [])
  }));
  dart.setLibraryUri(visitor.MixinRulesetDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MixinRulesetDirective, () => ({
    __proto__: dart.getFields(visitor.MixinRulesetDirective.__proto__),
    rulesets: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const MixinDeclarationDirective_declarations = dart.privateName(visitor, "MixinDeclarationDirective.declarations");
  visitor.MixinDeclarationDirective = class MixinDeclarationDirective extends visitor.MixinDefinition {
    get declarations() {
      return this[declarations$0];
    }
    set declarations(value) {
      super.declarations = value;
    }
    clone() {
      let clonedArgs = JSArrayOfTreeNode().of([]);
      for (let arg of this.definedArgs) {
        clonedArgs[$add](arg.clone());
      }
      return new visitor.MixinDeclarationDirective.new(this.name, clonedArgs, this.varArgs, this.declarations.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitMixinDeclarationDirective(this);
    }
  };
  (visitor.MixinDeclarationDirective.new = function(name, args, varArgs, declarations, span) {
    this[declarations$0] = declarations;
    visitor.MixinDeclarationDirective.__proto__.new.call(this, name, args, varArgs, span);
    ;
  }).prototype = visitor.MixinDeclarationDirective.prototype;
  dart.addTypeTests(visitor.MixinDeclarationDirective);
  const declarations$0 = MixinDeclarationDirective_declarations;
  dart.setMethodSignature(visitor.MixinDeclarationDirective, () => ({
    __proto__: dart.getMethods(visitor.MixinDeclarationDirective.__proto__),
    clone: dart.fnType(visitor.MixinDeclarationDirective, [])
  }));
  dart.setLibraryUri(visitor.MixinDeclarationDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MixinDeclarationDirective, () => ({
    __proto__: dart.getFields(visitor.MixinDeclarationDirective.__proto__),
    declarations: dart.finalFieldType(visitor.DeclarationGroup)
  }));
  const IncludeDirective_name = dart.privateName(visitor, "IncludeDirective.name");
  const IncludeDirective_args = dart.privateName(visitor, "IncludeDirective.args");
  visitor.IncludeDirective = class IncludeDirective extends visitor.Directive {
    get name() {
      return this[name$3];
    }
    set name(value) {
      super.name = value;
    }
    get args() {
      return this[args$];
    }
    set args(value) {
      super.args = value;
    }
    clone() {
      let cloneArgs = JSArrayOfListOfExpression().of([]);
      for (let arg of this.args) {
        cloneArgs[$add](ListOfExpression()._check(arg[$map](visitor.TreeNode, dart.fn(term => term.clone(), ExpressionToTreeNode()))[$toList]()));
      }
      return new visitor.IncludeDirective.new(this.name, cloneArgs, this.span);
    }
    visit(visitor) {
      return visitor.visitIncludeDirective(this);
    }
  };
  (visitor.IncludeDirective.new = function(name, args, span) {
    this[name$3] = name;
    this[args$] = args;
    visitor.IncludeDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.IncludeDirective.prototype;
  dart.addTypeTests(visitor.IncludeDirective);
  const name$3 = IncludeDirective_name;
  const args$ = IncludeDirective_args;
  dart.setMethodSignature(visitor.IncludeDirective, () => ({
    __proto__: dart.getMethods(visitor.IncludeDirective.__proto__),
    clone: dart.fnType(visitor.IncludeDirective, [])
  }));
  dart.setLibraryUri(visitor.IncludeDirective, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.IncludeDirective, () => ({
    __proto__: dart.getFields(visitor.IncludeDirective.__proto__),
    name: dart.finalFieldType(core.String),
    args: dart.finalFieldType(core.List$(core.List$(visitor.Expression)))
  }));
  visitor.ContentDirective = class ContentDirective extends visitor.Directive {
    visit(visitor) {
      return visitor.visitContentDirective(this);
    }
  };
  (visitor.ContentDirective.new = function(span) {
    visitor.ContentDirective.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.ContentDirective.prototype;
  dart.addTypeTests(visitor.ContentDirective);
  dart.setLibraryUri(visitor.ContentDirective, "package:csslib/visitor.dart");
  const Declaration_dartStyle = dart.privateName(visitor, "Declaration.dartStyle");
  const Declaration_important = dart.privateName(visitor, "Declaration.important");
  const Declaration_isIE7 = dart.privateName(visitor, "Declaration.isIE7");
  visitor.Declaration = class Declaration extends visitor.TreeNode {
    get dartStyle() {
      return this[dartStyle$];
    }
    set dartStyle(value) {
      this[dartStyle$] = value;
    }
    get important() {
      return this[important$];
    }
    set important(value) {
      super.important = value;
    }
    get isIE7() {
      return this[isIE7];
    }
    set isIE7(value) {
      super.isIE7 = value;
    }
    get property() {
      return dart.test(this.isIE7) ? "*" + dart.str(this[_property$].name) : this[_property$].name;
    }
    get expression() {
      return this[_expression$];
    }
    get hasDartStyle() {
      return this.dartStyle != null;
    }
    clone() {
      return new visitor.Declaration.new(this[_property$].clone(), visitor.Expression._check(this[_expression$].clone()), this.dartStyle, this.span, {important: this.important});
    }
    visit(visitor) {
      return visitor.visitDeclaration(this);
    }
  };
  (visitor.Declaration.new = function(_property, _expression, dartStyle, span, opts) {
    let important = opts && 'important' in opts ? opts.important : false;
    let ie7 = opts && 'ie7' in opts ? opts.ie7 : false;
    this[_property$] = _property;
    this[_expression$] = _expression;
    this[dartStyle$] = dartStyle;
    this[important$] = important;
    this[isIE7] = ie7;
    visitor.Declaration.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Declaration.prototype;
  dart.addTypeTests(visitor.Declaration);
  const dartStyle$ = Declaration_dartStyle;
  const important$ = Declaration_important;
  const isIE7 = Declaration_isIE7;
  dart.setMethodSignature(visitor.Declaration, () => ({
    __proto__: dart.getMethods(visitor.Declaration.__proto__),
    clone: dart.fnType(visitor.Declaration, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.Declaration, () => ({
    __proto__: dart.getGetters(visitor.Declaration.__proto__),
    property: core.String,
    expression: visitor.Expression,
    hasDartStyle: core.bool
  }));
  dart.setLibraryUri(visitor.Declaration, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.Declaration, () => ({
    __proto__: dart.getFields(visitor.Declaration.__proto__),
    [_property$]: dart.finalFieldType(visitor.Identifier),
    [_expression$]: dart.finalFieldType(visitor.Expression),
    dartStyle: dart.fieldType(visitor.DartStyleExpression),
    important: dart.finalFieldType(core.bool),
    isIE7: dart.finalFieldType(core.bool)
  }));
  const VarDefinition_badUsage = dart.privateName(visitor, "VarDefinition.badUsage");
  visitor.VarDefinition = class VarDefinition extends visitor.Declaration {
    get badUsage() {
      return this[badUsage];
    }
    set badUsage(value) {
      this[badUsage] = value;
    }
    get definedName() {
      return this[_property$].name;
    }
    clone() {
      return new visitor.VarDefinition.new(this[_property$].clone(), visitor.Expression._check(this.expression != null ? this.expression.clone() : null), this.span);
    }
    visit(visitor) {
      return visitor.visitVarDefinition(this);
    }
  };
  (visitor.VarDefinition.new = function(definedName, expr, span) {
    this[badUsage] = false;
    visitor.VarDefinition.__proto__.new.call(this, definedName, expr, null, span);
    ;
  }).prototype = visitor.VarDefinition.prototype;
  dart.addTypeTests(visitor.VarDefinition);
  const badUsage = VarDefinition_badUsage;
  dart.setMethodSignature(visitor.VarDefinition, () => ({
    __proto__: dart.getMethods(visitor.VarDefinition.__proto__),
    clone: dart.fnType(visitor.VarDefinition, [])
  }));
  dart.setGetterSignature(visitor.VarDefinition, () => ({
    __proto__: dart.getGetters(visitor.VarDefinition.__proto__),
    definedName: core.String
  }));
  dart.setLibraryUri(visitor.VarDefinition, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.VarDefinition, () => ({
    __proto__: dart.getFields(visitor.VarDefinition.__proto__),
    badUsage: dart.fieldType(core.bool)
  }));
  const IncludeMixinAtDeclaration_include = dart.privateName(visitor, "IncludeMixinAtDeclaration.include");
  visitor.IncludeMixinAtDeclaration = class IncludeMixinAtDeclaration extends visitor.Declaration {
    get include() {
      return this[include$];
    }
    set include(value) {
      super.include = value;
    }
    clone() {
      return new visitor.IncludeMixinAtDeclaration.new(this.include.clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitIncludeMixinAtDeclaration(this);
    }
  };
  (visitor.IncludeMixinAtDeclaration.new = function(include, span) {
    this[include$] = include;
    visitor.IncludeMixinAtDeclaration.__proto__.new.call(this, null, null, null, span);
    ;
  }).prototype = visitor.IncludeMixinAtDeclaration.prototype;
  dart.addTypeTests(visitor.IncludeMixinAtDeclaration);
  const include$ = IncludeMixinAtDeclaration_include;
  dart.setMethodSignature(visitor.IncludeMixinAtDeclaration, () => ({
    __proto__: dart.getMethods(visitor.IncludeMixinAtDeclaration.__proto__),
    clone: dart.fnType(visitor.IncludeMixinAtDeclaration, [])
  }));
  dart.setLibraryUri(visitor.IncludeMixinAtDeclaration, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.IncludeMixinAtDeclaration, () => ({
    __proto__: dart.getFields(visitor.IncludeMixinAtDeclaration.__proto__),
    include: dart.finalFieldType(visitor.IncludeDirective)
  }));
  const ExtendDeclaration_selectors = dart.privateName(visitor, "ExtendDeclaration.selectors");
  visitor.ExtendDeclaration = class ExtendDeclaration extends visitor.Declaration {
    get selectors() {
      return this[selectors$0];
    }
    set selectors(value) {
      super.selectors = value;
    }
    clone() {
      let newSelector = this.selectors[$map](visitor.TreeNode, dart.fn(s => s.clone(), TreeNodeToTreeNode()))[$toList]();
      return new visitor.ExtendDeclaration.new(newSelector, this.span);
    }
    visit(visitor) {
      return visitor.visitExtendDeclaration(this);
    }
  };
  (visitor.ExtendDeclaration.new = function(selectors, span) {
    this[selectors$0] = selectors;
    visitor.ExtendDeclaration.__proto__.new.call(this, null, null, null, span);
    ;
  }).prototype = visitor.ExtendDeclaration.prototype;
  dart.addTypeTests(visitor.ExtendDeclaration);
  const selectors$0 = ExtendDeclaration_selectors;
  dart.setMethodSignature(visitor.ExtendDeclaration, () => ({
    __proto__: dart.getMethods(visitor.ExtendDeclaration.__proto__),
    clone: dart.fnType(visitor.ExtendDeclaration, [])
  }));
  dart.setLibraryUri(visitor.ExtendDeclaration, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.ExtendDeclaration, () => ({
    __proto__: dart.getFields(visitor.ExtendDeclaration.__proto__),
    selectors: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const DeclarationGroup_declarations = dart.privateName(visitor, "DeclarationGroup.declarations");
  visitor.DeclarationGroup = class DeclarationGroup extends visitor.TreeNode {
    get declarations() {
      return this[declarations$1];
    }
    set declarations(value) {
      super.declarations = value;
    }
    clone() {
      let clonedDecls = this.declarations[$map](visitor.TreeNode, dart.fn(d => d.clone(), TreeNodeToTreeNode()))[$toList]();
      return new visitor.DeclarationGroup.new(clonedDecls, this.span);
    }
    visit(visitor) {
      return visitor.visitDeclarationGroup(this);
    }
  };
  (visitor.DeclarationGroup.new = function(declarations, span) {
    this[declarations$1] = declarations;
    visitor.DeclarationGroup.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.DeclarationGroup.prototype;
  dart.addTypeTests(visitor.DeclarationGroup);
  const declarations$1 = DeclarationGroup_declarations;
  dart.setMethodSignature(visitor.DeclarationGroup, () => ({
    __proto__: dart.getMethods(visitor.DeclarationGroup.__proto__),
    clone: dart.fnType(visitor.DeclarationGroup, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.DeclarationGroup, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.DeclarationGroup, () => ({
    __proto__: dart.getFields(visitor.DeclarationGroup.__proto__),
    declarations: dart.finalFieldType(core.List$(visitor.TreeNode))
  }));
  const MarginGroup_margin_sym = dart.privateName(visitor, "MarginGroup.margin_sym");
  visitor.MarginGroup = class MarginGroup extends visitor.DeclarationGroup {
    get margin_sym() {
      return this[margin_sym$];
    }
    set margin_sym(value) {
      super.margin_sym = value;
    }
    clone() {
      return new visitor.MarginGroup.new(this.margin_sym, super.clone().declarations, this.span);
    }
    visit(visitor) {
      return visitor.visitMarginGroup(this);
    }
  };
  (visitor.MarginGroup.new = function(margin_sym, decls, span) {
    this[margin_sym$] = margin_sym;
    visitor.MarginGroup.__proto__.new.call(this, decls, span);
    ;
  }).prototype = visitor.MarginGroup.prototype;
  dart.addTypeTests(visitor.MarginGroup);
  const margin_sym$ = MarginGroup_margin_sym;
  dart.setMethodSignature(visitor.MarginGroup, () => ({
    __proto__: dart.getMethods(visitor.MarginGroup.__proto__),
    clone: dart.fnType(visitor.MarginGroup, [])
  }));
  dart.setLibraryUri(visitor.MarginGroup, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.MarginGroup, () => ({
    __proto__: dart.getFields(visitor.MarginGroup.__proto__),
    margin_sym: dart.finalFieldType(core.int)
  }));
  const VarUsage_name = dart.privateName(visitor, "VarUsage.name");
  const VarUsage_defaultValues = dart.privateName(visitor, "VarUsage.defaultValues");
  visitor.VarUsage = class VarUsage extends visitor.Expression {
    get name() {
      return this[name$4];
    }
    set name(value) {
      super.name = value;
    }
    get defaultValues() {
      return this[defaultValues$];
    }
    set defaultValues(value) {
      super.defaultValues = value;
    }
    clone() {
      let clonedValues = JSArrayOfExpression().of([]);
      for (let expr of this.defaultValues) {
        clonedValues[$add](visitor.Expression._check(expr.clone()));
      }
      return new visitor.VarUsage.new(this.name, clonedValues, this.span);
    }
    visit(visitor) {
      return visitor.visitVarUsage(this);
    }
  };
  (visitor.VarUsage.new = function(name, defaultValues, span) {
    this[name$4] = name;
    this[defaultValues$] = defaultValues;
    visitor.VarUsage.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.VarUsage.prototype;
  dart.addTypeTests(visitor.VarUsage);
  const name$4 = VarUsage_name;
  const defaultValues$ = VarUsage_defaultValues;
  dart.setMethodSignature(visitor.VarUsage, () => ({
    __proto__: dart.getMethods(visitor.VarUsage.__proto__),
    clone: dart.fnType(visitor.VarUsage, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.VarUsage, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.VarUsage, () => ({
    __proto__: dart.getFields(visitor.VarUsage.__proto__),
    name: dart.finalFieldType(core.String),
    defaultValues: dart.finalFieldType(core.List$(visitor.Expression))
  }));
  visitor.OperatorSlash = class OperatorSlash extends visitor.Expression {
    clone() {
      return new visitor.OperatorSlash.new(this.span);
    }
    visit(visitor) {
      return visitor.visitOperatorSlash(this);
    }
  };
  (visitor.OperatorSlash.new = function(span) {
    visitor.OperatorSlash.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.OperatorSlash.prototype;
  dart.addTypeTests(visitor.OperatorSlash);
  dart.setMethodSignature(visitor.OperatorSlash, () => ({
    __proto__: dart.getMethods(visitor.OperatorSlash.__proto__),
    clone: dart.fnType(visitor.OperatorSlash, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.OperatorSlash, "package:csslib/visitor.dart");
  visitor.OperatorComma = class OperatorComma extends visitor.Expression {
    clone() {
      return new visitor.OperatorComma.new(this.span);
    }
    visit(visitor) {
      return visitor.visitOperatorComma(this);
    }
  };
  (visitor.OperatorComma.new = function(span) {
    visitor.OperatorComma.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.OperatorComma.prototype;
  dart.addTypeTests(visitor.OperatorComma);
  dart.setMethodSignature(visitor.OperatorComma, () => ({
    __proto__: dart.getMethods(visitor.OperatorComma.__proto__),
    clone: dart.fnType(visitor.OperatorComma, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.OperatorComma, "package:csslib/visitor.dart");
  visitor.OperatorPlus = class OperatorPlus extends visitor.Expression {
    clone() {
      return new visitor.OperatorPlus.new(this.span);
    }
    visit(visitor) {
      return visitor.visitOperatorPlus(this);
    }
  };
  (visitor.OperatorPlus.new = function(span) {
    visitor.OperatorPlus.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.OperatorPlus.prototype;
  dart.addTypeTests(visitor.OperatorPlus);
  dart.setMethodSignature(visitor.OperatorPlus, () => ({
    __proto__: dart.getMethods(visitor.OperatorPlus.__proto__),
    clone: dart.fnType(visitor.OperatorPlus, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.OperatorPlus, "package:csslib/visitor.dart");
  visitor.OperatorMinus = class OperatorMinus extends visitor.Expression {
    clone() {
      return new visitor.OperatorMinus.new(this.span);
    }
    visit(visitor) {
      return visitor.visitOperatorMinus(this);
    }
  };
  (visitor.OperatorMinus.new = function(span) {
    visitor.OperatorMinus.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.OperatorMinus.prototype;
  dart.addTypeTests(visitor.OperatorMinus);
  dart.setMethodSignature(visitor.OperatorMinus, () => ({
    __proto__: dart.getMethods(visitor.OperatorMinus.__proto__),
    clone: dart.fnType(visitor.OperatorMinus, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.OperatorMinus, "package:csslib/visitor.dart");
  const UnicodeRangeTerm_first = dart.privateName(visitor, "UnicodeRangeTerm.first");
  const UnicodeRangeTerm_second = dart.privateName(visitor, "UnicodeRangeTerm.second");
  visitor.UnicodeRangeTerm = class UnicodeRangeTerm extends visitor.Expression {
    get first() {
      return this[first$];
    }
    set first(value) {
      super.first = value;
    }
    get second() {
      return this[second$];
    }
    set second(value) {
      super.second = value;
    }
    get hasSecond() {
      return this.second != null;
    }
    clone() {
      return new visitor.UnicodeRangeTerm.new(this.first, this.second, this.span);
    }
    visit(visitor) {
      return visitor.visitUnicodeRangeTerm(this);
    }
  };
  (visitor.UnicodeRangeTerm.new = function(first, second, span) {
    this[first$] = first;
    this[second$] = second;
    visitor.UnicodeRangeTerm.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.UnicodeRangeTerm.prototype;
  dart.addTypeTests(visitor.UnicodeRangeTerm);
  const first$ = UnicodeRangeTerm_first;
  const second$ = UnicodeRangeTerm_second;
  dart.setMethodSignature(visitor.UnicodeRangeTerm, () => ({
    __proto__: dart.getMethods(visitor.UnicodeRangeTerm.__proto__),
    clone: dart.fnType(visitor.UnicodeRangeTerm, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.UnicodeRangeTerm, () => ({
    __proto__: dart.getGetters(visitor.UnicodeRangeTerm.__proto__),
    hasSecond: core.bool
  }));
  dart.setLibraryUri(visitor.UnicodeRangeTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.UnicodeRangeTerm, () => ({
    __proto__: dart.getFields(visitor.UnicodeRangeTerm.__proto__),
    first: dart.finalFieldType(core.String),
    second: dart.finalFieldType(core.String)
  }));
  visitor.NumberTerm = class NumberTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.NumberTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitNumberTerm(this);
    }
  };
  (visitor.NumberTerm.new = function(value, t, span) {
    visitor.NumberTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.NumberTerm.prototype;
  dart.addTypeTests(visitor.NumberTerm);
  dart.setMethodSignature(visitor.NumberTerm, () => ({
    __proto__: dart.getMethods(visitor.NumberTerm.__proto__),
    clone: dart.fnType(visitor.NumberTerm, [])
  }));
  dart.setLibraryUri(visitor.NumberTerm, "package:csslib/visitor.dart");
  const UnitTerm_unit = dart.privateName(visitor, "UnitTerm.unit");
  visitor.UnitTerm = class UnitTerm extends visitor.LiteralTerm {
    get unit() {
      return this[unit$];
    }
    set unit(value) {
      super.unit = value;
    }
    clone() {
      return new visitor.UnitTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitUnitTerm(this);
    }
    unitToString() {
      return parser.TokenKind.unitToString(this.unit);
    }
    toString() {
      return dart.str(this.text) + dart.str(this.unitToString());
    }
  };
  (visitor.UnitTerm.new = function(value, t, span, unit) {
    this[unit$] = unit;
    visitor.UnitTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.UnitTerm.prototype;
  dart.addTypeTests(visitor.UnitTerm);
  const unit$ = UnitTerm_unit;
  dart.setMethodSignature(visitor.UnitTerm, () => ({
    __proto__: dart.getMethods(visitor.UnitTerm.__proto__),
    clone: dart.fnType(visitor.UnitTerm, []),
    unitToString: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(visitor.UnitTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.UnitTerm, () => ({
    __proto__: dart.getFields(visitor.UnitTerm.__proto__),
    unit: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(visitor.UnitTerm, ['toString']);
  visitor.LengthTerm = class LengthTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.LengthTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitLengthTerm(this);
    }
  };
  (visitor.LengthTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.LengthTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(this.unit === 602 || this.unit === 603 || this.unit === 604 || this.unit === 605 || this.unit === 606 || this.unit === 607)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1093, 12, "this.unit == TokenKind.UNIT_LENGTH_PX ||\n        this.unit == TokenKind.UNIT_LENGTH_CM ||\n        this.unit == TokenKind.UNIT_LENGTH_MM ||\n        this.unit == TokenKind.UNIT_LENGTH_IN ||\n        this.unit == TokenKind.UNIT_LENGTH_PT ||\n        this.unit == TokenKind.UNIT_LENGTH_PC");
  }).prototype = visitor.LengthTerm.prototype;
  dart.addTypeTests(visitor.LengthTerm);
  dart.setMethodSignature(visitor.LengthTerm, () => ({
    __proto__: dart.getMethods(visitor.LengthTerm.__proto__),
    clone: dart.fnType(visitor.LengthTerm, [])
  }));
  dart.setLibraryUri(visitor.LengthTerm, "package:csslib/visitor.dart");
  visitor.PercentageTerm = class PercentageTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.PercentageTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitPercentageTerm(this);
    }
  };
  (visitor.PercentageTerm.new = function(value, t, span) {
    visitor.PercentageTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.PercentageTerm.prototype;
  dart.addTypeTests(visitor.PercentageTerm);
  dart.setMethodSignature(visitor.PercentageTerm, () => ({
    __proto__: dart.getMethods(visitor.PercentageTerm.__proto__),
    clone: dart.fnType(visitor.PercentageTerm, [])
  }));
  dart.setLibraryUri(visitor.PercentageTerm, "package:csslib/visitor.dart");
  visitor.EmTerm = class EmTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.EmTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitEmTerm(this);
    }
  };
  (visitor.EmTerm.new = function(value, t, span) {
    visitor.EmTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.EmTerm.prototype;
  dart.addTypeTests(visitor.EmTerm);
  dart.setMethodSignature(visitor.EmTerm, () => ({
    __proto__: dart.getMethods(visitor.EmTerm.__proto__),
    clone: dart.fnType(visitor.EmTerm, [])
  }));
  dart.setLibraryUri(visitor.EmTerm, "package:csslib/visitor.dart");
  visitor.ExTerm = class ExTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.ExTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitExTerm(this);
    }
  };
  (visitor.ExTerm.new = function(value, t, span) {
    visitor.ExTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.ExTerm.prototype;
  dart.addTypeTests(visitor.ExTerm);
  dart.setMethodSignature(visitor.ExTerm, () => ({
    __proto__: dart.getMethods(visitor.ExTerm.__proto__),
    clone: dart.fnType(visitor.ExTerm, [])
  }));
  dart.setLibraryUri(visitor.ExTerm, "package:csslib/visitor.dart");
  visitor.AngleTerm = class AngleTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.AngleTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitAngleTerm(this);
    }
  };
  (visitor.AngleTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.AngleTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(this.unit === 608 || this.unit === 609 || this.unit === 610 || this.unit === 611)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1126, 12, "this.unit == TokenKind.UNIT_ANGLE_DEG ||\n        this.unit == TokenKind.UNIT_ANGLE_RAD ||\n        this.unit == TokenKind.UNIT_ANGLE_GRAD ||\n        this.unit == TokenKind.UNIT_ANGLE_TURN");
  }).prototype = visitor.AngleTerm.prototype;
  dart.addTypeTests(visitor.AngleTerm);
  dart.setMethodSignature(visitor.AngleTerm, () => ({
    __proto__: dart.getMethods(visitor.AngleTerm.__proto__),
    clone: dart.fnType(visitor.AngleTerm, [])
  }));
  dart.setLibraryUri(visitor.AngleTerm, "package:csslib/visitor.dart");
  visitor.TimeTerm = class TimeTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.TimeTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitTimeTerm(this);
    }
  };
  (visitor.TimeTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.TimeTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(this.unit === 608 || this.unit === 612 || this.unit === 613)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1140, 12, "this.unit == TokenKind.UNIT_ANGLE_DEG ||\n        this.unit == TokenKind.UNIT_TIME_MS ||\n        this.unit == TokenKind.UNIT_TIME_S");
  }).prototype = visitor.TimeTerm.prototype;
  dart.addTypeTests(visitor.TimeTerm);
  dart.setMethodSignature(visitor.TimeTerm, () => ({
    __proto__: dart.getMethods(visitor.TimeTerm.__proto__),
    clone: dart.fnType(visitor.TimeTerm, [])
  }));
  dart.setLibraryUri(visitor.TimeTerm, "package:csslib/visitor.dart");
  visitor.FreqTerm = class FreqTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.FreqTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitFreqTerm(this);
    }
  };
  (visitor.FreqTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.FreqTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(unit === 614 || unit === 615)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1153, 12, "unit == TokenKind.UNIT_FREQ_HZ || unit == TokenKind.UNIT_FREQ_KHZ");
  }).prototype = visitor.FreqTerm.prototype;
  dart.addTypeTests(visitor.FreqTerm);
  dart.setMethodSignature(visitor.FreqTerm, () => ({
    __proto__: dart.getMethods(visitor.FreqTerm.__proto__),
    clone: dart.fnType(visitor.FreqTerm, [])
  }));
  dart.setLibraryUri(visitor.FreqTerm, "package:csslib/visitor.dart");
  visitor.FractionTerm = class FractionTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.FractionTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitFractionTerm(this);
    }
  };
  (visitor.FractionTerm.new = function(value, t, span) {
    visitor.FractionTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.FractionTerm.prototype;
  dart.addTypeTests(visitor.FractionTerm);
  dart.setMethodSignature(visitor.FractionTerm, () => ({
    __proto__: dart.getMethods(visitor.FractionTerm.__proto__),
    clone: dart.fnType(visitor.FractionTerm, [])
  }));
  dart.setLibraryUri(visitor.FractionTerm, "package:csslib/visitor.dart");
  visitor.UriTerm = class UriTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.UriTerm.new(core.String._check(this.value), this.span);
    }
    visit(visitor) {
      return visitor.visitUriTerm(this);
    }
  };
  (visitor.UriTerm.new = function(value, span) {
    visitor.UriTerm.__proto__.new.call(this, value, value, span);
    ;
  }).prototype = visitor.UriTerm.prototype;
  dart.addTypeTests(visitor.UriTerm);
  dart.setMethodSignature(visitor.UriTerm, () => ({
    __proto__: dart.getMethods(visitor.UriTerm.__proto__),
    clone: dart.fnType(visitor.UriTerm, [])
  }));
  dart.setLibraryUri(visitor.UriTerm, "package:csslib/visitor.dart");
  visitor.ResolutionTerm = class ResolutionTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.ResolutionTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitResolutionTerm(this);
    }
  };
  (visitor.ResolutionTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.ResolutionTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(unit === 618 || unit === 619 || unit === 620)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1178, 12, "unit == TokenKind.UNIT_RESOLUTION_DPI ||\n        unit == TokenKind.UNIT_RESOLUTION_DPCM ||\n        unit == TokenKind.UNIT_RESOLUTION_DPPX");
  }).prototype = visitor.ResolutionTerm.prototype;
  dart.addTypeTests(visitor.ResolutionTerm);
  dart.setMethodSignature(visitor.ResolutionTerm, () => ({
    __proto__: dart.getMethods(visitor.ResolutionTerm.__proto__),
    clone: dart.fnType(visitor.ResolutionTerm, [])
  }));
  dart.setLibraryUri(visitor.ResolutionTerm, "package:csslib/visitor.dart");
  visitor.ChTerm = class ChTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.ChTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitChTerm(this);
    }
  };
  (visitor.ChTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.ChTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(unit === 621)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1191, 12, "unit == TokenKind.UNIT_CH");
  }).prototype = visitor.ChTerm.prototype;
  dart.addTypeTests(visitor.ChTerm);
  dart.setMethodSignature(visitor.ChTerm, () => ({
    __proto__: dart.getMethods(visitor.ChTerm.__proto__),
    clone: dart.fnType(visitor.ChTerm, [])
  }));
  dart.setLibraryUri(visitor.ChTerm, "package:csslib/visitor.dart");
  visitor.RemTerm = class RemTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.RemTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitRemTerm(this);
    }
  };
  (visitor.RemTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.RemTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(unit === 622)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1202, 12, "unit == TokenKind.UNIT_REM");
  }).prototype = visitor.RemTerm.prototype;
  dart.addTypeTests(visitor.RemTerm);
  dart.setMethodSignature(visitor.RemTerm, () => ({
    __proto__: dart.getMethods(visitor.RemTerm.__proto__),
    clone: dart.fnType(visitor.RemTerm, [])
  }));
  dart.setLibraryUri(visitor.RemTerm, "package:csslib/visitor.dart");
  visitor.ViewportTerm = class ViewportTerm extends visitor.UnitTerm {
    clone() {
      return new visitor.ViewportTerm.new(this.value, this.text, this.span, this.unit);
    }
    visit(visitor) {
      return visitor.visitViewportTerm(this);
    }
  };
  (visitor.ViewportTerm.new = function(value, t, span, unit) {
    if (unit === void 0) unit = 602;
    visitor.ViewportTerm.__proto__.new.call(this, value, t, span, unit);
    if (!(unit === 623 || unit === 624 || unit === 625 || unit === 626)) dart.assertFailed(null, "org-dartlang-app:///packages/csslib/src/tree.dart", 1213, 12, "unit == TokenKind.UNIT_VIEWPORT_VW ||\n        unit == TokenKind.UNIT_VIEWPORT_VH ||\n        unit == TokenKind.UNIT_VIEWPORT_VMIN ||\n        unit == TokenKind.UNIT_VIEWPORT_VMAX");
  }).prototype = visitor.ViewportTerm.prototype;
  dart.addTypeTests(visitor.ViewportTerm);
  dart.setMethodSignature(visitor.ViewportTerm, () => ({
    __proto__: dart.getMethods(visitor.ViewportTerm.__proto__),
    clone: dart.fnType(visitor.ViewportTerm, [])
  }));
  dart.setLibraryUri(visitor.ViewportTerm, "package:csslib/visitor.dart");
  visitor.BAD_HEX_VALUE = class BAD_HEX_VALUE extends core.Object {};
  (visitor.BAD_HEX_VALUE.new = function() {
    ;
  }).prototype = visitor.BAD_HEX_VALUE.prototype;
  dart.addTypeTests(visitor.BAD_HEX_VALUE);
  dart.setLibraryUri(visitor.BAD_HEX_VALUE, "package:csslib/visitor.dart");
  visitor.HexColorTerm = class HexColorTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.HexColorTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitHexColorTerm(this);
    }
  };
  (visitor.HexColorTerm.new = function(value, t, span) {
    visitor.HexColorTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.HexColorTerm.prototype;
  dart.addTypeTests(visitor.HexColorTerm);
  dart.setMethodSignature(visitor.HexColorTerm, () => ({
    __proto__: dart.getMethods(visitor.HexColorTerm.__proto__),
    clone: dart.fnType(visitor.HexColorTerm, [])
  }));
  dart.setLibraryUri(visitor.HexColorTerm, "package:csslib/visitor.dart");
  visitor.FunctionTerm = class FunctionTerm extends visitor.LiteralTerm {
    clone() {
      return new visitor.FunctionTerm.new(this.value, this.text, this[_params$].clone(), this.span);
    }
    visit(visitor) {
      return visitor.visitFunctionTerm(this);
    }
  };
  (visitor.FunctionTerm.new = function(value, t, _params, span) {
    this[_params$] = _params;
    visitor.FunctionTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.FunctionTerm.prototype;
  dart.addTypeTests(visitor.FunctionTerm);
  dart.setMethodSignature(visitor.FunctionTerm, () => ({
    __proto__: dart.getMethods(visitor.FunctionTerm.__proto__),
    clone: dart.fnType(visitor.FunctionTerm, [])
  }));
  dart.setLibraryUri(visitor.FunctionTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.FunctionTerm, () => ({
    __proto__: dart.getFields(visitor.FunctionTerm.__proto__),
    [_params$]: dart.finalFieldType(visitor.Expressions)
  }));
  visitor.IE8Term = class IE8Term extends visitor.LiteralTerm {
    clone() {
      return new visitor.IE8Term.new(this.span);
    }
    visit(visitor) {
      return visitor.visitIE8Term(this);
    }
  };
  (visitor.IE8Term.new = function(span) {
    visitor.IE8Term.__proto__.new.call(this, "\\9", "\\9", span);
    ;
  }).prototype = visitor.IE8Term.prototype;
  dart.addTypeTests(visitor.IE8Term);
  dart.setMethodSignature(visitor.IE8Term, () => ({
    __proto__: dart.getMethods(visitor.IE8Term.__proto__),
    clone: dart.fnType(visitor.IE8Term, [])
  }));
  dart.setLibraryUri(visitor.IE8Term, "package:csslib/visitor.dart");
  visitor.GroupTerm = class GroupTerm extends visitor.Expression {
    add(term) {
      this[_terms][$add](term);
    }
    clone() {
      return new visitor.GroupTerm.new(this.span);
    }
    visit(visitor) {
      return visitor.visitGroupTerm(this);
    }
  };
  (visitor.GroupTerm.new = function(span) {
    this[_terms] = JSArrayOfLiteralTerm().of([]);
    visitor.GroupTerm.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.GroupTerm.prototype;
  dart.addTypeTests(visitor.GroupTerm);
  dart.setMethodSignature(visitor.GroupTerm, () => ({
    __proto__: dart.getMethods(visitor.GroupTerm.__proto__),
    add: dart.fnType(dart.void, [visitor.LiteralTerm]),
    clone: dart.fnType(visitor.GroupTerm, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.GroupTerm, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.GroupTerm, () => ({
    __proto__: dart.getFields(visitor.GroupTerm.__proto__),
    [_terms]: dart.finalFieldType(core.List$(visitor.LiteralTerm))
  }));
  visitor.ItemTerm = class ItemTerm extends visitor.NumberTerm {
    clone() {
      return new visitor.ItemTerm.new(this.value, this.text, this.span);
    }
    visit(visitor) {
      return visitor.visitItemTerm(this);
    }
  };
  (visitor.ItemTerm.new = function(value, t, span) {
    visitor.ItemTerm.__proto__.new.call(this, value, t, span);
    ;
  }).prototype = visitor.ItemTerm.prototype;
  dart.addTypeTests(visitor.ItemTerm);
  dart.setMethodSignature(visitor.ItemTerm, () => ({
    __proto__: dart.getMethods(visitor.ItemTerm.__proto__),
    clone: dart.fnType(visitor.ItemTerm, [])
  }));
  dart.setLibraryUri(visitor.ItemTerm, "package:csslib/visitor.dart");
  const Expressions_expressions = dart.privateName(visitor, "Expressions.expressions");
  visitor.Expressions = class Expressions extends visitor.Expression {
    get expressions() {
      return this[expressions];
    }
    set expressions(value) {
      super.expressions = value;
    }
    add(expression) {
      this.expressions[$add](expression);
    }
    clone() {
      let clonedExprs = new visitor.Expressions.new(this.span);
      for (let expr of this.expressions) {
        clonedExprs.add(visitor.Expression._check(expr.clone()));
      }
      return clonedExprs;
    }
    visit(visitor) {
      return visitor.visitExpressions(this);
    }
  };
  (visitor.Expressions.new = function(span) {
    this[expressions] = JSArrayOfExpression().of([]);
    visitor.Expressions.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.Expressions.prototype;
  dart.addTypeTests(visitor.Expressions);
  const expressions = Expressions_expressions;
  dart.setMethodSignature(visitor.Expressions, () => ({
    __proto__: dart.getMethods(visitor.Expressions.__proto__),
    add: dart.fnType(dart.void, [visitor.Expression]),
    clone: dart.fnType(visitor.Expressions, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.Expressions, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.Expressions, () => ({
    __proto__: dart.getFields(visitor.Expressions.__proto__),
    expressions: dart.finalFieldType(core.List$(visitor.Expression))
  }));
  const BinaryExpression_op = dart.privateName(visitor, "BinaryExpression.op");
  const BinaryExpression_x = dart.privateName(visitor, "BinaryExpression.x");
  const BinaryExpression_y = dart.privateName(visitor, "BinaryExpression.y");
  visitor.BinaryExpression = class BinaryExpression extends visitor.Expression {
    get op() {
      return this[op$];
    }
    set op(value) {
      super.op = value;
    }
    get x() {
      return this[x$0];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$0];
    }
    set y(value) {
      super.y = value;
    }
    clone() {
      return new visitor.BinaryExpression.new(this.op, visitor.Expression._check(this.x.clone()), visitor.Expression._check(this.y.clone()), this.span);
    }
    visit(visitor) {
      return visitor.visitBinaryExpression(this);
    }
  };
  (visitor.BinaryExpression.new = function(op, x, y, span) {
    this[op$] = op;
    this[x$0] = x;
    this[y$0] = y;
    visitor.BinaryExpression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.BinaryExpression.prototype;
  dart.addTypeTests(visitor.BinaryExpression);
  const op$ = BinaryExpression_op;
  const x$0 = BinaryExpression_x;
  const y$0 = BinaryExpression_y;
  dart.setMethodSignature(visitor.BinaryExpression, () => ({
    __proto__: dart.getMethods(visitor.BinaryExpression.__proto__),
    clone: dart.fnType(visitor.BinaryExpression, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.BinaryExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.BinaryExpression, () => ({
    __proto__: dart.getFields(visitor.BinaryExpression.__proto__),
    op: dart.finalFieldType(parser.Token),
    x: dart.finalFieldType(visitor.Expression),
    y: dart.finalFieldType(visitor.Expression)
  }));
  const UnaryExpression_op = dart.privateName(visitor, "UnaryExpression.op");
  const UnaryExpression_self = dart.privateName(visitor, "UnaryExpression.self");
  visitor.UnaryExpression = class UnaryExpression extends visitor.Expression {
    get op() {
      return this[op$0];
    }
    set op(value) {
      super.op = value;
    }
    get self() {
      return this[self$];
    }
    set self(value) {
      super.self = value;
    }
    clone() {
      return new visitor.UnaryExpression.new(this.op, visitor.Expression._check(this.self.clone()), this.span);
    }
    visit(visitor) {
      return visitor.visitUnaryExpression(this);
    }
  };
  (visitor.UnaryExpression.new = function(op, self, span) {
    this[op$0] = op;
    this[self$] = self;
    visitor.UnaryExpression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.UnaryExpression.prototype;
  dart.addTypeTests(visitor.UnaryExpression);
  const op$0 = UnaryExpression_op;
  const self$ = UnaryExpression_self;
  dart.setMethodSignature(visitor.UnaryExpression, () => ({
    __proto__: dart.getMethods(visitor.UnaryExpression.__proto__),
    clone: dart.fnType(visitor.UnaryExpression, []),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setLibraryUri(visitor.UnaryExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.UnaryExpression, () => ({
    __proto__: dart.getFields(visitor.UnaryExpression.__proto__),
    op: dart.finalFieldType(parser.Token),
    self: dart.finalFieldType(visitor.Expression)
  }));
  const _styleType$ = dart.privateName(visitor, "_styleType");
  const DartStyleExpression_priority = dart.privateName(visitor, "DartStyleExpression.priority");
  visitor.DartStyleExpression = class DartStyleExpression extends visitor.TreeNode {
    get priority() {
      return this[priority];
    }
    set priority(value) {
      this[priority] = value;
    }
    get isUnknown() {
      return this[_styleType$] === 0 || this[_styleType$] == null;
    }
    get isFont() {
      return this[_styleType$] === 1;
    }
    get isMargin() {
      return this[_styleType$] === 2;
    }
    get isBorder() {
      return this[_styleType$] === 3;
    }
    get isPadding() {
      return this[_styleType$] === 4;
    }
    get isHeight() {
      return this[_styleType$] === 5;
    }
    get isWidth() {
      return this[_styleType$] === 6;
    }
    get isBoxExpression() {
      return dart.test(this.isMargin) || dart.test(this.isBorder) || dart.test(this.isPadding);
    }
    isSame(other) {
      return this[_styleType$] == other[_styleType$];
    }
    visit(visitor) {
      return visitor.visitDartStyleExpression(this);
    }
  };
  (visitor.DartStyleExpression.new = function(_styleType, span) {
    this[priority] = null;
    this[_styleType$] = _styleType;
    visitor.DartStyleExpression.__proto__.new.call(this, span);
    ;
  }).prototype = visitor.DartStyleExpression.prototype;
  dart.addTypeTests(visitor.DartStyleExpression);
  const priority = DartStyleExpression_priority;
  dart.setMethodSignature(visitor.DartStyleExpression, () => ({
    __proto__: dart.getMethods(visitor.DartStyleExpression.__proto__),
    isSame: dart.fnType(core.bool, [visitor.DartStyleExpression]),
    visit: dart.fnType(dart.dynamic, [visitor.VisitorBase])
  }));
  dart.setGetterSignature(visitor.DartStyleExpression, () => ({
    __proto__: dart.getGetters(visitor.DartStyleExpression.__proto__),
    isUnknown: core.bool,
    isFont: core.bool,
    isMargin: core.bool,
    isBorder: core.bool,
    isPadding: core.bool,
    isHeight: core.bool,
    isWidth: core.bool,
    isBoxExpression: core.bool
  }));
  dart.setLibraryUri(visitor.DartStyleExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.DartStyleExpression, () => ({
    __proto__: dart.getFields(visitor.DartStyleExpression.__proto__),
    [_styleType$]: dart.finalFieldType(core.int),
    priority: dart.fieldType(core.int)
  }));
  dart.defineLazy(visitor.DartStyleExpression, {
    /*visitor.DartStyleExpression.unknownType*/get unknownType() {
      return 0;
    },
    /*visitor.DartStyleExpression.fontStyle*/get fontStyle() {
      return 1;
    },
    /*visitor.DartStyleExpression.marginStyle*/get marginStyle() {
      return 2;
    },
    /*visitor.DartStyleExpression.borderStyle*/get borderStyle() {
      return 3;
    },
    /*visitor.DartStyleExpression.paddingStyle*/get paddingStyle() {
      return 4;
    },
    /*visitor.DartStyleExpression.heightStyle*/get heightStyle() {
      return 5;
    },
    /*visitor.DartStyleExpression.widthStyle*/get widthStyle() {
      return 6;
    }
  });
  const FontExpression_font = dart.privateName(visitor, "FontExpression.font");
  visitor.FontExpression = class FontExpression extends visitor.DartStyleExpression {
    get font() {
      return this[font];
    }
    set font(value) {
      super.font = value;
    }
    merged(newFontExpr) {
      if (visitor.FontExpression.is(newFontExpr) && dart.test(this.isFont) && dart.test(newFontExpr.isFont)) {
        return visitor.FontExpression.merge(this, newFontExpr);
      }
      return null;
    }
    static merge(x, y) {
      return new visitor.FontExpression._merge(x, y, y.span);
    }
    clone() {
      return new visitor.FontExpression.new(this.span, {size: this.font.size, family: this.font.family, weight: this.font.weight, style: this.font.style, variant: this.font.variant, lineHeight: this.font.lineHeight});
    }
    visit(visitor) {
      return visitor.visitFontExpression(this);
    }
  };
  (visitor.FontExpression.new = function(span, opts) {
    let size = opts && 'size' in opts ? opts.size : null;
    let family = opts && 'family' in opts ? opts.family : null;
    let weight = opts && 'weight' in opts ? opts.weight : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let variant = opts && 'variant' in opts ? opts.variant : null;
    let lineHeight = opts && 'lineHeight' in opts ? opts.lineHeight : null;
    this[font] = new parser.Font.new({size: core.num._check(visitor.LengthTerm.is(size) ? size.value : core.num.as(size)), family: family, weight: weight, style: style, variant: variant, lineHeight: lineHeight});
    visitor.FontExpression.__proto__.new.call(this, 1, span);
    ;
  }).prototype = visitor.FontExpression.prototype;
  (visitor.FontExpression._merge = function(x, y, span) {
    this[font] = parser.Font.merge(x.font, y.font);
    visitor.FontExpression.__proto__.new.call(this, 1, span);
    ;
  }).prototype = visitor.FontExpression.prototype;
  dart.addTypeTests(visitor.FontExpression);
  const font = FontExpression_font;
  dart.setMethodSignature(visitor.FontExpression, () => ({
    __proto__: dart.getMethods(visitor.FontExpression.__proto__),
    merged: dart.fnType(visitor.FontExpression, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.FontExpression, [])
  }));
  dart.setLibraryUri(visitor.FontExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.FontExpression, () => ({
    __proto__: dart.getFields(visitor.FontExpression.__proto__),
    font: dart.finalFieldType(parser.Font)
  }));
  const BoxExpression_box = dart.privateName(visitor, "BoxExpression.box");
  visitor.BoxExpression = class BoxExpression extends visitor.DartStyleExpression {
    get box() {
      return this[box$];
    }
    set box(value) {
      super.box = value;
    }
    visit(visitor) {
      return visitor.visitBoxExpression(this);
    }
    get formattedBoxEdge() {
      if (this.box.top == this.box.left && this.box.top == this.box.bottom && this.box.top == this.box.right) {
        return ".uniform(" + dart.str(this.box.top) + ")";
      } else {
        let left = this.box.left == null ? 0 : this.box.left;
        let top = this.box.top == null ? 0 : this.box.top;
        let right = this.box.right == null ? 0 : this.box.right;
        let bottom = this.box.bottom == null ? 0 : this.box.bottom;
        return ".clockwiseFromTop(" + dart.str(top) + "," + dart.str(right) + "," + dart.str(bottom) + "," + dart.str(left) + ")";
      }
    }
  };
  (visitor.BoxExpression.new = function(styleType, span, box) {
    this[box$] = box;
    visitor.BoxExpression.__proto__.new.call(this, styleType, span);
    ;
  }).prototype = visitor.BoxExpression.prototype;
  dart.addTypeTests(visitor.BoxExpression);
  const box$ = BoxExpression_box;
  dart.setGetterSignature(visitor.BoxExpression, () => ({
    __proto__: dart.getGetters(visitor.BoxExpression.__proto__),
    formattedBoxEdge: core.String
  }));
  dart.setLibraryUri(visitor.BoxExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.BoxExpression, () => ({
    __proto__: dart.getFields(visitor.BoxExpression.__proto__),
    box: dart.finalFieldType(parser.BoxEdge)
  }));
  visitor.MarginExpression = class MarginExpression extends visitor.BoxExpression {
    merged(newMarginExpr) {
      if (visitor.MarginExpression.is(newMarginExpr) && dart.test(this.isMargin) && dart.test(newMarginExpr.isMargin)) {
        return visitor.MarginExpression.merge(this, newMarginExpr);
      }
      return null;
    }
    static merge(x, y) {
      return new visitor.MarginExpression._merge(x, y, y.span);
    }
    clone() {
      return new visitor.MarginExpression.new(this.span, {top: this.box.top, right: this.box.right, bottom: this.box.bottom, left: this.box.left});
    }
    visit(visitor) {
      return visitor.visitMarginExpression(this);
    }
  };
  (visitor.MarginExpression.new = function(span, opts) {
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let left = opts && 'left' in opts ? opts.left : null;
    visitor.MarginExpression.__proto__.new.call(this, 2, span, new parser.BoxEdge.new(left, top, right, bottom));
    ;
  }).prototype = visitor.MarginExpression.prototype;
  (visitor.MarginExpression.boxEdge = function(span, box) {
    visitor.MarginExpression.__proto__.new.call(this, 2, span, box);
    ;
  }).prototype = visitor.MarginExpression.prototype;
  (visitor.MarginExpression._merge = function(x, y, span) {
    visitor.MarginExpression.__proto__.new.call(this, x[_styleType$], span, parser.BoxEdge.merge(x.box, y.box));
    ;
  }).prototype = visitor.MarginExpression.prototype;
  dart.addTypeTests(visitor.MarginExpression);
  dart.setMethodSignature(visitor.MarginExpression, () => ({
    __proto__: dart.getMethods(visitor.MarginExpression.__proto__),
    merged: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.MarginExpression, [])
  }));
  dart.setLibraryUri(visitor.MarginExpression, "package:csslib/visitor.dart");
  visitor.BorderExpression = class BorderExpression extends visitor.BoxExpression {
    merged(newBorderExpr) {
      if (visitor.BorderExpression.is(newBorderExpr) && dart.test(this.isBorder) && dart.test(newBorderExpr.isBorder)) {
        return visitor.BorderExpression.merge(this, newBorderExpr);
      }
      return null;
    }
    static merge(x, y) {
      return new visitor.BorderExpression._merge(x, y, y.span);
    }
    clone() {
      return new visitor.BorderExpression.new(this.span, {top: this.box.top, right: this.box.right, bottom: this.box.bottom, left: this.box.left});
    }
    visit(visitor) {
      return visitor.visitBorderExpression(this);
    }
  };
  (visitor.BorderExpression.new = function(span, opts) {
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let left = opts && 'left' in opts ? opts.left : null;
    visitor.BorderExpression.__proto__.new.call(this, 3, span, new parser.BoxEdge.new(left, top, right, bottom));
    ;
  }).prototype = visitor.BorderExpression.prototype;
  (visitor.BorderExpression.boxEdge = function(span, box) {
    visitor.BorderExpression.__proto__.new.call(this, 3, span, box);
    ;
  }).prototype = visitor.BorderExpression.prototype;
  (visitor.BorderExpression._merge = function(x, y, span) {
    visitor.BorderExpression.__proto__.new.call(this, 3, span, parser.BoxEdge.merge(x.box, y.box));
    ;
  }).prototype = visitor.BorderExpression.prototype;
  dart.addTypeTests(visitor.BorderExpression);
  dart.setMethodSignature(visitor.BorderExpression, () => ({
    __proto__: dart.getMethods(visitor.BorderExpression.__proto__),
    merged: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.BorderExpression, [])
  }));
  dart.setLibraryUri(visitor.BorderExpression, "package:csslib/visitor.dart");
  const HeightExpression_height = dart.privateName(visitor, "HeightExpression.height");
  visitor.HeightExpression = class HeightExpression extends visitor.DartStyleExpression {
    get height() {
      return this[height$0];
    }
    set height(value) {
      super.height = value;
    }
    merged(newHeightExpr) {
      if (visitor.DartStyleExpression.is(newHeightExpr) && dart.test(this.isHeight) && dart.test(newHeightExpr.isHeight)) {
        return newHeightExpr;
      }
      return null;
    }
    clone() {
      return new visitor.HeightExpression.new(this.span, this.height);
    }
    visit(visitor) {
      return visitor.visitHeightExpression(this);
    }
  };
  (visitor.HeightExpression.new = function(span, height) {
    this[height$0] = height;
    visitor.HeightExpression.__proto__.new.call(this, 5, span);
    ;
  }).prototype = visitor.HeightExpression.prototype;
  dart.addTypeTests(visitor.HeightExpression);
  const height$0 = HeightExpression_height;
  dart.setMethodSignature(visitor.HeightExpression, () => ({
    __proto__: dart.getMethods(visitor.HeightExpression.__proto__),
    merged: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.HeightExpression, [])
  }));
  dart.setLibraryUri(visitor.HeightExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.HeightExpression, () => ({
    __proto__: dart.getFields(visitor.HeightExpression.__proto__),
    height: dart.finalFieldType(dart.dynamic)
  }));
  const WidthExpression_width = dart.privateName(visitor, "WidthExpression.width");
  visitor.WidthExpression = class WidthExpression extends visitor.DartStyleExpression {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    merged(newWidthExpr) {
      if (visitor.WidthExpression.is(newWidthExpr) && dart.test(this.isWidth) && dart.test(newWidthExpr.isWidth)) {
        return newWidthExpr;
      }
      return null;
    }
    clone() {
      return new visitor.WidthExpression.new(this.span, this.width);
    }
    visit(visitor) {
      return visitor.visitWidthExpression(this);
    }
  };
  (visitor.WidthExpression.new = function(span, width) {
    this[width$] = width;
    visitor.WidthExpression.__proto__.new.call(this, 6, span);
    ;
  }).prototype = visitor.WidthExpression.prototype;
  dart.addTypeTests(visitor.WidthExpression);
  const width$ = WidthExpression_width;
  dart.setMethodSignature(visitor.WidthExpression, () => ({
    __proto__: dart.getMethods(visitor.WidthExpression.__proto__),
    merged: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.WidthExpression, [])
  }));
  dart.setLibraryUri(visitor.WidthExpression, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.WidthExpression, () => ({
    __proto__: dart.getFields(visitor.WidthExpression.__proto__),
    width: dart.finalFieldType(dart.dynamic)
  }));
  visitor.PaddingExpression = class PaddingExpression extends visitor.BoxExpression {
    merged(newPaddingExpr) {
      if (visitor.PaddingExpression.is(newPaddingExpr) && dart.test(this.isPadding) && dart.test(newPaddingExpr.isPadding)) {
        return visitor.PaddingExpression.merge(this, newPaddingExpr);
      }
      return null;
    }
    static merge(x, y) {
      return new visitor.PaddingExpression._merge(x, y, y.span);
    }
    clone() {
      return new visitor.PaddingExpression.new(this.span, {top: this.box.top, right: this.box.right, bottom: this.box.bottom, left: this.box.left});
    }
    visit(visitor) {
      return visitor.visitPaddingExpression(this);
    }
  };
  (visitor.PaddingExpression.new = function(span, opts) {
    let top = opts && 'top' in opts ? opts.top : null;
    let right = opts && 'right' in opts ? opts.right : null;
    let bottom = opts && 'bottom' in opts ? opts.bottom : null;
    let left = opts && 'left' in opts ? opts.left : null;
    visitor.PaddingExpression.__proto__.new.call(this, 4, span, new parser.BoxEdge.new(left, top, right, bottom));
    ;
  }).prototype = visitor.PaddingExpression.prototype;
  (visitor.PaddingExpression.boxEdge = function(span, box) {
    visitor.PaddingExpression.__proto__.new.call(this, 4, span, box);
    ;
  }).prototype = visitor.PaddingExpression.prototype;
  (visitor.PaddingExpression._merge = function(x, y, span) {
    visitor.PaddingExpression.__proto__.new.call(this, 4, span, parser.BoxEdge.merge(x.box, y.box));
    ;
  }).prototype = visitor.PaddingExpression.prototype;
  dart.addTypeTests(visitor.PaddingExpression);
  dart.setMethodSignature(visitor.PaddingExpression, () => ({
    __proto__: dart.getMethods(visitor.PaddingExpression.__proto__),
    merged: dart.fnType(dart.dynamic, [visitor.DartStyleExpression]),
    clone: dart.fnType(visitor.PaddingExpression, [])
  }));
  dart.setLibraryUri(visitor.PaddingExpression, "package:csslib/visitor.dart");
  const TreeOutput_depth = dart.privateName(visitor, "TreeOutput.depth");
  const TreeOutput_buf = dart.privateName(visitor, "TreeOutput.buf");
  const TreeOutput_printer = dart.privateName(visitor, "TreeOutput.printer");
  visitor.TreeOutput = class TreeOutput extends core.Object {
    get depth() {
      return this[depth];
    }
    set depth(value) {
      this[depth] = value;
    }
    get buf() {
      return this[buf];
    }
    set buf(value) {
      super.buf = value;
    }
    get printer() {
      return this[printer];
    }
    set printer(value) {
      this[printer] = value;
    }
    write(s) {
      for (let i = 0; i < dart.notNull(this.depth); i = i + 1) {
        this.buf.write(" ");
      }
      this.buf.write(s);
    }
    writeln(s) {
      this.write(s);
      this.buf.write("\n");
    }
    heading(name, span) {
      if (span === void 0) span = null;
      this.write(name);
      if (span != null) {
        this.buf.write("  (" + dart.str(dart.dsend(span, 'message', [""])) + ")");
      }
      this.buf.write("\n");
    }
    toValue(value) {
      if (value == null) {
        return "null";
      } else if (visitor.Identifier.is(value)) {
        return value.name;
      } else {
        return dart.toString(value);
      }
    }
    writeNode(label, node) {
      this.write(dart.str(label) + ": ");
      this.depth = dart.notNull(this.depth) + 1;
      if (node != null) {
        node.visit(this.printer);
      } else {
        this.writeln("null");
      }
      this.depth = dart.notNull(this.depth) - 1;
    }
    writeValue(label, value) {
      let v = this.toValue(value);
      this.writeln(dart.str(label) + ": " + dart.str(v));
    }
    writeNodeList(label, list) {
      this.writeln(dart.str(label) + " [");
      if (list != null) {
        this.depth = dart.notNull(this.depth) + 1;
        for (let node of list) {
          if (node != null) {
            node.visit(this.printer);
          } else {
            this.writeln("null");
          }
        }
        this.depth = dart.notNull(this.depth) - 1;
        this.writeln("]");
      }
    }
    toString() {
      return dart.toString(this.buf);
    }
  };
  (visitor.TreeOutput.new = function() {
    this[depth] = 0;
    this[buf] = new core.StringBuffer.new();
    this[printer] = null;
    ;
  }).prototype = visitor.TreeOutput.prototype;
  dart.addTypeTests(visitor.TreeOutput);
  const depth = TreeOutput_depth;
  const buf = TreeOutput_buf;
  const printer = TreeOutput_printer;
  dart.setMethodSignature(visitor.TreeOutput, () => ({
    __proto__: dart.getMethods(visitor.TreeOutput.__proto__),
    write: dart.fnType(dart.void, [core.String]),
    writeln: dart.fnType(dart.void, [core.String]),
    heading: dart.fnType(dart.void, [core.String], [dart.dynamic]),
    toValue: dart.fnType(core.String, [dart.dynamic]),
    writeNode: dart.fnType(dart.void, [core.String, visitor.TreeNode]),
    writeValue: dart.fnType(dart.void, [core.String, dart.dynamic]),
    writeNodeList: dart.fnType(dart.void, [core.String, core.List$(visitor.TreeNode)])
  }));
  dart.setLibraryUri(visitor.TreeOutput, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor.TreeOutput, () => ({
    __proto__: dart.getFields(visitor.TreeOutput.__proto__),
    depth: dart.fieldType(core.int),
    buf: dart.finalFieldType(core.StringBuffer),
    printer: dart.fieldType(visitor.VisitorBase)
  }));
  dart.defineExtensionMethods(visitor.TreeOutput, ['toString']);
  visitor._TreePrinter = class _TreePrinter extends visitor.Visitor {
    visitTree(tree) {
      return this.visitStylesheet(tree);
    }
    heading(heading, node) {
      if (dart.test(this.useSpan)) {
        this.output.heading(heading, dart.dload(node, 'span'));
      } else {
        this.output.heading(heading);
      }
    }
    visitStylesheet(node) {
      let t4, t4$;
      this.heading("Stylesheet", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitStyleSheet(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitTopLevelProduction(node) {
      this.heading("TopLevelProduction", node);
    }
    visitDirective(node) {
      this.heading("Directive", node);
    }
    visitCalcTerm(node) {
      let t4, t4$;
      this.heading("CalcTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitCalcTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitCssComment(node) {
      let t4, t4$;
      this.heading("Comment", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("comment value", node.comment);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitCommentDefinition(node) {
      let t4, t4$;
      this.heading("CommentDefinition (CDO/CDC)", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("comment value", node.comment);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitMediaExpression(node) {
      this.heading("MediaExpression", node);
      this.output.writeValue("feature", node.mediaFeature);
      if (dart.test(node.andOperator)) this.output.writeValue("AND operator", "");
      this.visitExpressions(node.exprs);
    }
    visitMediaQueries(query) {
      this.output.heading("MediaQueries");
      this.output.writeValue("unary", query.unary);
      this.output.writeValue("media type", query.mediaType);
      this.output.writeNodeList("media expressions", query.expressions);
    }
    visitMediaDirective(node) {
      let t4, t4$;
      this.heading("MediaDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("media queries", node.mediaQueries);
      this.output.writeNodeList("rule sets", node.rules);
      super.visitMediaDirective(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitDocumentDirective(node) {
      let t4, t4$;
      this.heading("DocumentDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("functions", node.functions);
      this.output.writeNodeList("group rule body", node.groupRuleBody);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSupportsDirective(node) {
      let t4, t4$;
      this.heading("SupportsDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNode("condition", node.condition);
      this.output.writeNodeList("group rule body", node.groupRuleBody);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSupportsConditionInParens(node) {
      let t4, t4$;
      this.heading("SupportsConditionInParens", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNode("condition", node.condition);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSupportsNegation(node) {
      let t4, t4$;
      this.heading("SupportsNegation", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNode("condition", node.condition);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSupportsConjunction(node) {
      let t4, t4$;
      this.heading("SupportsConjunction", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("conditions", node.conditions);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSupportsDisjunction(node) {
      let t4, t4$;
      this.heading("SupportsDisjunction", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("conditions", node.conditions);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitViewportDirective(node) {
      let t4, t4$;
      this.heading("ViewportDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitViewportDirective(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitPageDirective(node) {
      let t4;
      this.heading("PageDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("pseudo page", node[_pseudoPage$]);
      super.visitPageDirective(node);
      this.output.depth;
    }
    visitCharsetDirective(node) {
      this.heading("Charset Directive", node);
      this.output.writeValue("charset encoding", node.charEncoding);
    }
    visitImportDirective(node) {
      let t4, t4$;
      this.heading("ImportDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("import", node.import);
      super.visitImportDirective(node);
      this.output.writeNodeList("media", node.mediaQueries);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitContentDirective(node) {
      core.print("ContentDirective not implemented");
    }
    visitKeyFrameDirective(node) {
      let t4, t4$;
      this.heading("KeyFrameDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("keyframe", node.keyFrameName);
      this.output.writeValue("name", node.name);
      this.output.writeNodeList("blocks", node[_blocks]);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitKeyFrameBlock(node) {
      let t4, t4$;
      this.heading("KeyFrameBlock", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitKeyFrameBlock(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitFontFaceDirective(node) {
    }
    visitStyletDirective(node) {
      let t4, t4$;
      this.heading("StyletDirective", node);
      this.output.writeValue("dartClassName", node.dartClassName);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("rulesets", node.rules);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitNamespaceDirective(node) {
      let t4, t4$;
      this.heading("NamespaceDirective", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("prefix", node[_prefix$]);
      this.output.writeValue("uri", node[_uri$]);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitVarDefinitionDirective(node) {
      let t4, t4$;
      this.heading("Less variable definition", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.visitVarDefinition(node.def);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitMixinRulesetDirective(node) {
      let t4, t4$;
      this.heading("Mixin top-level " + dart.str(node.name), node);
      this.output.writeNodeList("parameters", node.definedArgs);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this[_visitNodeList](node.rulesets);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitMixinDeclarationDirective(node) {
      let t4, t4$;
      this.heading("Mixin declaration " + dart.str(node.name), node);
      this.output.writeNodeList("parameters", node.definedArgs);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.visitDeclarationGroup(node.declarations);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitIncludeDirective(node) {
      this.heading("IncludeDirective " + dart.str(node.name), node);
      let flattened = node.args[$expand](visitor.Expression, dart.fn(e => e, ListOfExpressionToListOfExpression()))[$toList]();
      this.output.writeNodeList("parameters", flattened);
    }
    visitIncludeMixinAtDeclaration(node) {
      let t4, t4$;
      this.heading("IncludeMixinAtDeclaration " + dart.str(node.include.name), node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.visitIncludeDirective(node.include);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitExtendDeclaration(node) {
      let t4, t4$;
      this.heading("ExtendDeclaration", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this[_visitNodeList](node.selectors);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitRuleSet(node) {
      let t4, t4$;
      this.heading("Ruleset", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitRuleSet(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitDeclarationGroup(node) {
      let t4, t4$;
      this.heading("DeclarationGroup", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("declarations", node.declarations);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitMarginGroup(node) {
      let t4, t4$;
      this.heading("MarginGroup", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("@directive", node.margin_sym);
      this.output.writeNodeList("declarations", node.declarations);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitDeclaration(node) {
      let t4, t4$;
      this.heading("Declaration", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      if (dart.test(node.isIE7)) this.output.write("IE7 property");
      this.output.write("property");
      super.visitDeclaration(node);
      this.output.writeNode("expression", node[_expression$]);
      if (dart.test(node.important)) {
        this.output.writeValue("!important", "true");
      }
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitVarDefinition(node) {
      let t4, t4$;
      this.heading("Var", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.write("defintion");
      super.visitVarDefinition(node);
      this.output.writeNode("expression", node[_expression$]);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSelectorGroup(node) {
      let t4, t4$;
      this.heading("Selector Group", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("selectors", node.selectors);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSelector(node) {
      let t4, t4$;
      this.heading("Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("simpleSelectorsSequences", node.simpleSelectorSequences);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSimpleSelectorSequence(node) {
      let t4, t4$;
      this.heading("SimpleSelectorSequence", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      if (dart.test(node.isCombinatorNone)) {
        this.output.writeValue("combinator", "NONE");
      } else if (dart.test(node.isCombinatorDescendant)) {
        this.output.writeValue("combinator", "descendant");
      } else if (dart.test(node.isCombinatorPlus)) {
        this.output.writeValue("combinator", "+");
      } else if (dart.test(node.isCombinatorGreater)) {
        this.output.writeValue("combinator", ">");
      } else if (dart.test(node.isCombinatorTilde)) {
        this.output.writeValue("combinator", "~");
      } else {
        this.output.writeValue("combinator", "ERROR UNKNOWN");
      }
      super.visitSimpleSelectorSequence(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitNamespaceSelector(node) {
      let t4, t4$;
      this.heading("Namespace Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitNamespaceSelector(node);
      this.visitSimpleSelector(node.nameAsSimpleSelector);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitElementSelector(node) {
      let t4, t4$;
      this.heading("Element Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitElementSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitAttributeSelector(node) {
      let t4, t4$;
      this.heading("AttributeSelector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitAttributeSelector(node);
      let tokenStr = node.matchOperatorAsTokenString();
      this.output.writeValue("operator", dart.str(node.matchOperator()) + " (" + dart.str(tokenStr) + ")");
      this.output.writeValue("value", node.valueToString());
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitIdSelector(node) {
      let t4, t4$;
      this.heading("Id Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitIdSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitClassSelector(node) {
      let t4, t4$;
      this.heading("Class Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitClassSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitPseudoClassSelector(node) {
      let t4, t4$;
      this.heading("Pseudo Class Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitPseudoClassSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitPseudoElementSelector(node) {
      let t4, t4$;
      this.heading("Pseudo Element Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitPseudoElementSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitPseudoClassFunctionSelector(node) {
      let t4, t4$;
      this.heading("Pseudo Class Function Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      node.argument.visit(this);
      super.visitPseudoClassFunctionSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitPseudoElementFunctionSelector(node) {
      let t4, t4$;
      this.heading("Pseudo Element Function Selector", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.visitSelectorExpression(node.expression);
      super.visitPseudoElementFunctionSelector(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitSelectorExpression(node) {
      let t4, t4$;
      this.heading("Selector Expression", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("expressions", node.expressions);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitNegationSelector(node) {
      let t4, t4$;
      super.visitNegationSelector(node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.heading("Negation Selector", node);
      this.output.writeNode("Negation arg", node.negationArg);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitUnicodeRangeTerm(node) {
      let t4, t4$;
      this.heading("UnicodeRangeTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("1st value", node.first);
      this.output.writeValue("2nd value", node.second);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitLiteralTerm(node) {
      let t4, t4$;
      this.heading("LiteralTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("value", node.text);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitHexColorTerm(node) {
      let t4, t4$;
      this.heading("HexColorTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("hex value", node.text);
      this.output.writeValue("decimal value", node.value);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitNumberTerm(node) {
      let t4, t4$;
      this.heading("NumberTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("value", node.text);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitUnitTerm(node) {
      let t4, t4$;
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeValue("value", node.text);
      this.output.writeValue("unit", node.unitToString());
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitLengthTerm(node) {
      this.heading("LengthTerm", node);
      super.visitLengthTerm(node);
    }
    visitPercentageTerm(node) {
      let t4, t4$;
      this.heading("PercentageTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitPercentageTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitEmTerm(node) {
      let t4, t4$;
      this.heading("EmTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitEmTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitExTerm(node) {
      let t4, t4$;
      this.heading("ExTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitExTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitAngleTerm(node) {
      this.heading("AngleTerm", node);
      super.visitAngleTerm(node);
    }
    visitTimeTerm(node) {
      this.heading("TimeTerm", node);
      super.visitTimeTerm(node);
    }
    visitFreqTerm(node) {
      this.heading("FreqTerm", node);
      super.visitFreqTerm(node);
    }
    visitFractionTerm(node) {
      let t4, t4$;
      this.heading("FractionTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitFractionTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitUriTerm(node) {
      let t4, t4$;
      this.heading("UriTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitUriTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitFunctionTerm(node) {
      let t4, t4$;
      this.heading("FunctionTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      super.visitFunctionTerm(node);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitGroupTerm(node) {
      let t4, t4$;
      this.heading("GroupTerm", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("grouped terms", node[_terms]);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitItemTerm(node) {
      this.heading("ItemTerm", node);
      super.visitItemTerm(node);
    }
    visitIE8Term(node) {
      this.heading("IE8Term", node);
      this.visitLiteralTerm(node);
    }
    visitOperatorSlash(node) {
      this.heading("OperatorSlash", node);
    }
    visitOperatorComma(node) {
      this.heading("OperatorComma", node);
    }
    visitOperatorPlus(node) {
      this.heading("OperatorPlus", node);
    }
    visitOperatorMinus(node) {
      this.heading("OperatorMinus", node);
    }
    visitVarUsage(node) {
      let t4, t4$;
      this.heading("Var", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.write("usage " + dart.str(node.name));
      this.output.writeNodeList("default values", node.defaultValues);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitExpressions(node) {
      let t4, t4$;
      this.heading("Expressions", node);
      t4 = this.output;
      t4.depth = dart.notNull(t4.depth) + 1;
      this.output.writeNodeList("expressions", node.expressions);
      t4$ = this.output;
      t4$.depth = dart.notNull(t4$.depth) - 1;
    }
    visitBinaryExpression(node) {
      this.heading("BinaryExpression", node);
    }
    visitUnaryExpression(node) {
      this.heading("UnaryExpression", node);
    }
    visitIdentifier(node) {
      this.heading("Identifier(" + dart.str(this.output.toValue(node.name)) + ")", node);
    }
    visitWildcard(node) {
      this.heading("Wildcard(*)", node);
    }
    visitDartStyleExpression(node) {
      this.heading("DartStyleExpression", node);
    }
    visitFontExpression(node) {
      this.heading("Dart Style FontExpression", node);
    }
    visitBoxExpression(node) {
      this.heading("Dart Style BoxExpression", node);
    }
    visitMarginExpression(node) {
      this.heading("Dart Style MarginExpression", node);
    }
    visitBorderExpression(node) {
      this.heading("Dart Style BorderExpression", node);
    }
    visitHeightExpression(node) {
      this.heading("Dart Style HeightExpression", node);
    }
    visitPaddingExpression(node) {
      this.heading("Dart Style PaddingExpression", node);
    }
    visitWidthExpression(node) {
      this.heading("Dart Style WidthExpression", node);
    }
  };
  (visitor._TreePrinter.new = function(output, useSpan) {
    this.output = output;
    this.useSpan = useSpan;
    this.output.printer = this;
  }).prototype = visitor._TreePrinter.prototype;
  dart.addTypeTests(visitor._TreePrinter);
  dart.setMethodSignature(visitor._TreePrinter, () => ({
    __proto__: dart.getMethods(visitor._TreePrinter.__proto__),
    visitTree: dart.fnType(dart.void, [visitor.StyleSheet]),
    heading: dart.fnType(dart.void, [core.String, dart.dynamic]),
    visitStylesheet: dart.fnType(dart.void, [visitor.StyleSheet]),
    visitTopLevelProduction: dart.fnType(dart.void, [visitor.TopLevelProduction]),
    visitDirective: dart.fnType(dart.void, [visitor.Directive]),
    visitCalcTerm: dart.fnType(dart.void, [visitor.CalcTerm]),
    visitCssComment: dart.fnType(dart.void, [visitor.CssComment]),
    visitCommentDefinition: dart.fnType(dart.void, [visitor.CommentDefinition]),
    visitMediaExpression: dart.fnType(dart.void, [visitor.MediaExpression]),
    visitMediaQueries: dart.fnType(dart.void, [visitor.MediaQuery]),
    visitMediaDirective: dart.fnType(dart.void, [visitor.MediaDirective]),
    visitDocumentDirective: dart.fnType(dart.void, [visitor.DocumentDirective]),
    visitSupportsDirective: dart.fnType(dart.void, [visitor.SupportsDirective]),
    visitSupportsConditionInParens: dart.fnType(dart.void, [visitor.SupportsConditionInParens]),
    visitSupportsNegation: dart.fnType(dart.void, [visitor.SupportsNegation]),
    visitSupportsConjunction: dart.fnType(dart.void, [visitor.SupportsConjunction]),
    visitSupportsDisjunction: dart.fnType(dart.void, [visitor.SupportsDisjunction]),
    visitViewportDirective: dart.fnType(dart.void, [visitor.ViewportDirective]),
    visitPageDirective: dart.fnType(dart.void, [visitor.PageDirective]),
    visitCharsetDirective: dart.fnType(dart.void, [visitor.CharsetDirective]),
    visitImportDirective: dart.fnType(dart.void, [visitor.ImportDirective]),
    visitContentDirective: dart.fnType(dart.void, [visitor.ContentDirective]),
    visitKeyFrameDirective: dart.fnType(dart.void, [visitor.KeyFrameDirective]),
    visitKeyFrameBlock: dart.fnType(dart.void, [visitor.KeyFrameBlock]),
    visitFontFaceDirective: dart.fnType(dart.void, [visitor.FontFaceDirective]),
    visitStyletDirective: dart.fnType(dart.void, [visitor.StyletDirective]),
    visitNamespaceDirective: dart.fnType(dart.void, [visitor.NamespaceDirective]),
    visitVarDefinitionDirective: dart.fnType(dart.void, [visitor.VarDefinitionDirective]),
    visitMixinRulesetDirective: dart.fnType(dart.void, [visitor.MixinRulesetDirective]),
    visitMixinDeclarationDirective: dart.fnType(dart.void, [visitor.MixinDeclarationDirective]),
    visitIncludeDirective: dart.fnType(dart.void, [visitor.IncludeDirective]),
    visitIncludeMixinAtDeclaration: dart.fnType(dart.void, [visitor.IncludeMixinAtDeclaration]),
    visitExtendDeclaration: dart.fnType(dart.void, [visitor.ExtendDeclaration]),
    visitRuleSet: dart.fnType(dart.void, [visitor.RuleSet]),
    visitDeclarationGroup: dart.fnType(dart.void, [visitor.DeclarationGroup]),
    visitMarginGroup: dart.fnType(dart.void, [visitor.MarginGroup]),
    visitDeclaration: dart.fnType(dart.void, [visitor.Declaration]),
    visitVarDefinition: dart.fnType(dart.void, [visitor.VarDefinition]),
    visitSelectorGroup: dart.fnType(dart.void, [visitor.SelectorGroup]),
    visitSelector: dart.fnType(dart.void, [visitor.Selector]),
    visitSimpleSelectorSequence: dart.fnType(dart.void, [visitor.SimpleSelectorSequence]),
    visitNamespaceSelector: dart.fnType(dart.void, [visitor.NamespaceSelector]),
    visitElementSelector: dart.fnType(dart.void, [visitor.ElementSelector]),
    visitAttributeSelector: dart.fnType(dart.void, [visitor.AttributeSelector]),
    visitIdSelector: dart.fnType(dart.void, [visitor.IdSelector]),
    visitClassSelector: dart.fnType(dart.void, [visitor.ClassSelector]),
    visitPseudoClassSelector: dart.fnType(dart.void, [visitor.PseudoClassSelector]),
    visitPseudoElementSelector: dart.fnType(dart.void, [visitor.PseudoElementSelector]),
    visitPseudoClassFunctionSelector: dart.fnType(dart.void, [visitor.PseudoClassFunctionSelector]),
    visitPseudoElementFunctionSelector: dart.fnType(dart.void, [visitor.PseudoElementFunctionSelector]),
    visitSelectorExpression: dart.fnType(dart.void, [visitor.SelectorExpression]),
    visitNegationSelector: dart.fnType(dart.void, [visitor.NegationSelector]),
    visitUnicodeRangeTerm: dart.fnType(dart.void, [visitor.UnicodeRangeTerm]),
    visitLiteralTerm: dart.fnType(dart.void, [visitor.LiteralTerm]),
    visitHexColorTerm: dart.fnType(dart.void, [visitor.HexColorTerm]),
    visitNumberTerm: dart.fnType(dart.void, [visitor.NumberTerm]),
    visitUnitTerm: dart.fnType(dart.void, [visitor.UnitTerm]),
    visitLengthTerm: dart.fnType(dart.void, [visitor.LengthTerm]),
    visitPercentageTerm: dart.fnType(dart.void, [visitor.PercentageTerm]),
    visitEmTerm: dart.fnType(dart.void, [visitor.EmTerm]),
    visitExTerm: dart.fnType(dart.void, [visitor.ExTerm]),
    visitAngleTerm: dart.fnType(dart.void, [visitor.AngleTerm]),
    visitTimeTerm: dart.fnType(dart.void, [visitor.TimeTerm]),
    visitFreqTerm: dart.fnType(dart.void, [visitor.FreqTerm]),
    visitFractionTerm: dart.fnType(dart.void, [visitor.FractionTerm]),
    visitUriTerm: dart.fnType(dart.void, [visitor.UriTerm]),
    visitFunctionTerm: dart.fnType(dart.void, [visitor.FunctionTerm]),
    visitGroupTerm: dart.fnType(dart.void, [visitor.GroupTerm]),
    visitItemTerm: dart.fnType(dart.void, [visitor.ItemTerm]),
    visitIE8Term: dart.fnType(dart.void, [visitor.IE8Term]),
    visitOperatorSlash: dart.fnType(dart.void, [visitor.OperatorSlash]),
    visitOperatorComma: dart.fnType(dart.void, [visitor.OperatorComma]),
    visitOperatorPlus: dart.fnType(dart.void, [visitor.OperatorPlus]),
    visitOperatorMinus: dart.fnType(dart.void, [visitor.OperatorMinus]),
    visitVarUsage: dart.fnType(dart.void, [visitor.VarUsage]),
    visitExpressions: dart.fnType(dart.void, [visitor.Expressions]),
    visitBinaryExpression: dart.fnType(dart.void, [visitor.BinaryExpression]),
    visitUnaryExpression: dart.fnType(dart.void, [visitor.UnaryExpression]),
    visitIdentifier: dart.fnType(dart.void, [visitor.Identifier]),
    visitWildcard: dart.fnType(dart.void, [visitor.Wildcard]),
    visitDartStyleExpression: dart.fnType(dart.void, [visitor.DartStyleExpression]),
    visitFontExpression: dart.fnType(dart.void, [visitor.FontExpression]),
    visitBoxExpression: dart.fnType(dart.void, [visitor.BoxExpression]),
    visitMarginExpression: dart.fnType(dart.void, [visitor.MarginExpression]),
    visitBorderExpression: dart.fnType(dart.void, [visitor.BorderExpression]),
    visitHeightExpression: dart.fnType(dart.void, [visitor.HeightExpression]),
    visitPaddingExpression: dart.fnType(dart.void, [visitor.PaddingExpression]),
    visitWidthExpression: dart.fnType(dart.void, [visitor.WidthExpression])
  }));
  dart.setLibraryUri(visitor._TreePrinter, "package:csslib/visitor.dart");
  dart.setFieldSignature(visitor._TreePrinter, () => ({
    __proto__: dart.getFields(visitor._TreePrinter.__proto__),
    output: dart.finalFieldType(visitor.TreeOutput),
    useSpan: dart.finalFieldType(core.bool)
  }));
  visitor.treeToDebugString = function treeToDebugString(styleSheet, useSpan) {
    let t4;
    if (useSpan === void 0) useSpan = false;
    let to = new visitor.TreeOutput.new();
    t4 = new visitor._TreePrinter.new(to, useSpan);
    t4.visitTree(styleSheet);
    t4;
    return to.toString();
  };
  dart.trackLibraries("packages/csslib/parser", {
    "package:csslib/src/preprocessor_options.dart": preprocessor_options,
    "package:csslib/parser.dart": parser,
    "package:csslib/src/messages.dart": messages,
    "package:csslib/visitor.dart": visitor
  }, {
    "package:csslib/parser.dart": ["src/analyzer.dart", "src/polyfill.dart", "src/property.dart", "src/token.dart", "src/token_kind.dart", "src/tokenizer.dart", "src/tokenizer_base.dart"],
    "package:csslib/visitor.dart": ["src/css_printer.dart", "src/tree.dart", "src/tree_base.dart", "src/tree_printer.dart"]
  }, '{"version":3,"sourceRoot":"","sources":["src/preprocessor_options.dart","parser.dart","src/tokenizer_base.dart","src/analyzer.dart","visitor.dart","src/polyfill.dart","src/property.dart","src/token.dart","src/token_kind.dart","src/tokenizer.dart","src/messages.dart","src/css_printer.dart","src/tree_base.dart","src/tree.dart","src/tree_printer.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"parser.ddc.js"}');
  // Exports:
  return {
    src__preprocessor_options: preprocessor_options,
    parser: parser,
    src__messages: messages,
    visitor: visitor
  };
});

//# sourceMappingURL=parser.ddc.js.map

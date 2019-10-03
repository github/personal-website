define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const collections = packages__flutter__src__foundation___bitfield_web.src__foundation__collections;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const node = packages__flutter__src__foundation___bitfield_web.src__foundation__node;
  const key = packages__flutter__src__foundation___bitfield_web.src__foundation__key;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const binding = packages__flutter__src__foundation___bitfield_web.src__foundation__binding;
  const matrix_utils = packages__flutter__src__painting___network_image_web.src__painting__matrix_utils;
  const text_editing = packages__flutter__src__gestures__arena.src__services__text_editing;
  const system_channels = packages__flutter__src__gestures__arena.src__services__system_channels;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const debug = Object.create(dart.library);
  const semantics = Object.create(dart.library);
  const semantics_event = Object.create(dart.library);
  const binding$ = Object.create(dart.library);
  const semantics_service = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $_get = dartx._get;
  const $_set = dartx._set;
  const $values = dartx.values;
  const $add = dartx.add;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $modulo = dartx['%'];
  const $any = dartx.any;
  const $isNotEmpty = dartx.isNotEmpty;
  const $forEach = dartx.forEach;
  const $containsKey = dartx.containsKey;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $_equals = dartx._equals;
  const $keys = dartx.keys;
  const $sort = dartx.sort;
  const $addAll = dartx.addAll;
  const $clear = dartx.clear;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $split = dartx.split;
  const $take = dartx.take;
  const $substring = dartx.substring;
  const $join = dartx.join;
  const $where = dartx.where;
  const $isFinite = dartx.isFinite;
  const $sign = dartx.sign;
  const $toInt = dartx.toInt;
  const $compareTo = dartx.compareTo;
  const $reversed = dartx.reversed;
  const $expand = dartx.expand;
  let IdentityMapOfint$CustomSemanticsAction = () => (IdentityMapOfint$CustomSemanticsAction = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.CustomSemanticsAction)))();
  let LinkedMapOfCustomSemanticsAction$int = () => (LinkedMapOfCustomSemanticsAction$int = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, core.int)))();
  let DiagnosticsPropertyOfRect = () => (DiagnosticsPropertyOfRect = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Rect)))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let IterablePropertyOfString = () => (IterablePropertyOfString = dart.constFn(diagnostics.IterableProperty$(core.String)))();
  let EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  let SemanticsNodeTobool = () => (SemanticsNodeTobool = dart.constFn(dart.fnType(core.bool, [semantics.SemanticsNode])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  let ListOfSemanticsNode = () => (ListOfSemanticsNode = dart.constFn(core.List$(semantics.SemanticsNode)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let LinkedHashSetOfSemanticsNode = () => (LinkedHashSetOfSemanticsNode = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsNode)))();
  let dynamicTovoid = () => (dynamicTovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic])))();
  let LinkedHashMapOfSemanticsAction$dynamicTovoid = () => (LinkedHashMapOfSemanticsAction$dynamicTovoid = dart.constFn(collection.LinkedHashMap$(ui.SemanticsAction, dynamicTovoid())))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let LinkedHashMapOfCustomSemanticsAction$VoidTovoid = () => (LinkedHashMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(collection.LinkedHashMap$(semantics.CustomSemanticsAction, VoidTovoid())))();
  let LinkedHashSetOfSemanticsTag = () => (LinkedHashSetOfSemanticsTag = dart.constFn(collection.LinkedHashSet$(semantics.SemanticsTag)))();
  let LinkedHashSetOfint = () => (LinkedHashSetOfint = dart.constFn(collection.LinkedHashSet$(core.int)))();
  let JSArrayOf_TraversalSortNode = () => (JSArrayOf_TraversalSortNode = dart.constFn(_interceptors.JSArray$(semantics._TraversalSortNode)))();
  let _TraversalSortNodeToSemanticsNode = () => (_TraversalSortNodeToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [semantics._TraversalSortNode])))();
  let DiagnosticsPropertyOfSemanticsOwner = () => (DiagnosticsPropertyOfSemanticsOwner = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsOwner)))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let SemanticsTagToString = () => (SemanticsTagToString = dart.constFn(dart.fnType(core.String, [semantics.SemanticsTag])))();
  let SemanticsActionToString = () => (SemanticsActionToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsAction])))();
  let CustomSemanticsActionToString = () => (CustomSemanticsActionToString = dart.constFn(dart.fnType(core.String, [semantics.CustomSemanticsAction])))();
  let SemanticsFlagTobool = () => (SemanticsFlagTobool = dart.constFn(dart.fnType(core.bool, [ui.SemanticsFlag])))();
  let SemanticsFlagToString = () => (SemanticsFlagToString = dart.constFn(dart.fnType(core.String, [ui.SemanticsFlag])))();
  let DiagnosticsPropertyOfSemanticsSortKey = () => (DiagnosticsPropertyOfSemanticsSortKey = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsSortKey)))();
  let SemanticsNodeToDiagnosticsNode = () => (SemanticsNodeToDiagnosticsNode = dart.constFn(dart.fnType(diagnostics.DiagnosticsNode, [semantics.SemanticsNode])))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let DiagnosticsPropertyOfSemanticsHintOverrides = () => (DiagnosticsPropertyOfSemanticsHintOverrides = dart.constFn(diagnostics.DiagnosticsProperty$(semantics.SemanticsHintOverrides)))();
  let JSArrayOfSemanticsNode = () => (JSArrayOfSemanticsNode = dart.constFn(_interceptors.JSArray$(semantics.SemanticsNode)))();
  let JSArrayOf_BoxEdge = () => (JSArrayOf_BoxEdge = dart.constFn(_interceptors.JSArray$(semantics._BoxEdge)))();
  let JSArrayOf_SemanticsSortGroup = () => (JSArrayOf_SemanticsSortGroup = dart.constFn(_interceptors.JSArray$(semantics._SemanticsSortGroup)))();
  let _SemanticsSortGroupToListOfSemanticsNode = () => (_SemanticsSortGroupToListOfSemanticsNode = dart.constFn(dart.fnType(ListOfSemanticsNode(), [semantics._SemanticsSortGroup])))();
  let IdentityMapOfint$SemanticsNode = () => (IdentityMapOfint$SemanticsNode = dart.constFn(_js_helper.IdentityMap$(core.int, semantics.SemanticsNode)))();
  let IdentityMapOfint$int = () => (IdentityMapOfint$int = dart.constFn(_js_helper.IdentityMap$(core.int, core.int)))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let SemanticsNodeAndSemanticsNodeToint = () => (SemanticsNodeAndSemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode, semantics.SemanticsNode])))();
  let intTovoid = () => (intTovoid = dart.constFn(dart.fnType(dart.void, [core.int])))();
  let SemanticsNodeToint = () => (SemanticsNodeToint = dart.constFn(dart.fnType(core.int, [semantics.SemanticsNode])))();
  let intToSemanticsNode = () => (intToSemanticsNode = dart.constFn(dart.fnType(semantics.SemanticsNode, [core.int])))();
  let LinkedMapOfSemanticsAction$dynamicTovoid = () => (LinkedMapOfSemanticsAction$dynamicTovoid = dart.constFn(_js_helper.LinkedMap$(ui.SemanticsAction, dynamicTovoid())))();
  let LinkedMapOfCustomSemanticsAction$VoidTovoid = () => (LinkedMapOfCustomSemanticsAction$VoidTovoid = dart.constFn(_js_helper.LinkedMap$(semantics.CustomSemanticsAction, VoidTovoid())))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let MapOfString$int = () => (MapOfString$int = dart.constFn(core.Map$(core.String, core.int)))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList([], diagnostics.DiagnosticsNode);
    },
    get C1() {
      return C1 = dart.constList([], semantics.SemanticsNode);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: diagnostics.DiagnosticLevel.prototype,
        [_name]: "DiagnosticLevel.debug",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_name$]: "DebugSemanticsDumpOrder.traversalOrder",
        index: 1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: diagnostics.DiagnosticsTreeStyle.prototype,
        [_name]: "DiagnosticsTreeStyle.sparse",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: semantics.DebugSemanticsDumpOrder.prototype,
        [_name$]: "DebugSemanticsDumpOrder.inverseHitTest",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.constList([C5 || CT.C5, C3 || CT.C3], semantics.DebugSemanticsDumpOrder);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.rtl",
        index: 0
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.ltr",
        index: 1
      });
    },
    get C9() {
      return C9 = dart.constMap(core.String, dart.dynamic, []);
    }
  });
  dart.defineLazy(debug, {
    /*debug.debugSemanticsDisableAnimations*/get debugSemanticsDisableAnimations() {
      return null;
    },
    set debugSemanticsDisableAnimations(_) {}
  });
  const SemanticsTag_name = dart.privateName(semantics, "SemanticsTag.name");
  semantics.SemanticsTag = class SemanticsTag extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.name) + ")";
    }
  };
  (semantics.SemanticsTag.new = function(name) {
    this[name$] = name;
    ;
  }).prototype = semantics.SemanticsTag.prototype;
  dart.addTypeTests(semantics.SemanticsTag);
  const name$ = SemanticsTag_name;
  dart.setLibraryUri(semantics.SemanticsTag, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsTag, () => ({
    __proto__: dart.getFields(semantics.SemanticsTag.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsTag, ['toString']);
  const CustomSemanticsAction_label = dart.privateName(semantics, "CustomSemanticsAction.label");
  const CustomSemanticsAction_hint = dart.privateName(semantics, "CustomSemanticsAction.hint");
  const CustomSemanticsAction_action = dart.privateName(semantics, "CustomSemanticsAction.action");
  semantics.CustomSemanticsAction = class CustomSemanticsAction extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get hint() {
      return this[hint$];
    }
    set hint(value) {
      super.hint = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get hashCode() {
      return ui.hashValues(this.label, this.hint, this.action);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = semantics.CustomSemanticsAction._check(other);
      return typedOther.label == this.label && typedOther.hint == this.hint && dart.equals(typedOther.action, this.action);
    }
    toString() {
      return "CustomSemanticsAction(" + dart.str(semantics.CustomSemanticsAction._ids[$_get](this)) + ", label:" + dart.str(this.label) + ", hint:" + dart.str(this.hint) + ", action:" + dart.str(this.action) + ")";
    }
    static getIdentifier(action) {
      let t0;
      let result = semantics.CustomSemanticsAction._ids[$_get](action);
      if (result == null) {
        result = (t0 = semantics.CustomSemanticsAction._nextId, semantics.CustomSemanticsAction._nextId = dart.notNull(t0) + 1, t0);
        semantics.CustomSemanticsAction._ids[$_set](action, result);
        semantics.CustomSemanticsAction._actions[$_set](result, action);
      }
      return result;
    }
    static getAction(id) {
      return semantics.CustomSemanticsAction._actions[$_get](id);
    }
  };
  (semantics.CustomSemanticsAction.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    this[label$] = label;
    if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 101, 14, "label != null");
    if (!(label !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 102, 14, "label != ''");
    this[hint$] = null;
    this[action$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  (semantics.CustomSemanticsAction.overridingAction = function(opts) {
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let action = opts && 'action' in opts ? opts.action : null;
    this[hint$] = hint;
    this[action$] = action;
    if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 111, 14, "hint != null");
    if (!(hint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 112, 14, "hint != ''");
    if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 113, 14, "action != null");
    this[label$] = null;
    ;
  }).prototype = semantics.CustomSemanticsAction.prototype;
  dart.addTypeTests(semantics.CustomSemanticsAction);
  const label$ = CustomSemanticsAction_label;
  const hint$ = CustomSemanticsAction_hint;
  const action$ = CustomSemanticsAction_action;
  dart.setLibraryUri(semantics.CustomSemanticsAction, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.CustomSemanticsAction, () => ({
    __proto__: dart.getFields(semantics.CustomSemanticsAction.__proto__),
    label: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    action: dart.finalFieldType(ui.SemanticsAction)
  }));
  dart.defineExtensionMethods(semantics.CustomSemanticsAction, ['_equals', 'toString']);
  dart.defineExtensionAccessors(semantics.CustomSemanticsAction, ['hashCode']);
  dart.defineLazy(semantics.CustomSemanticsAction, {
    /*semantics.CustomSemanticsAction._nextId*/get _nextId() {
      return 0;
    },
    set _nextId(_) {},
    /*semantics.CustomSemanticsAction._actions*/get _actions() {
      return new (IdentityMapOfint$CustomSemanticsAction()).new();
    },
    /*semantics.CustomSemanticsAction._ids*/get _ids() {
      return new (LinkedMapOfCustomSemanticsAction$int()).new();
    }
  });
  const SemanticsData_flags = dart.privateName(semantics, "SemanticsData.flags");
  const SemanticsData_actions = dart.privateName(semantics, "SemanticsData.actions");
  const SemanticsData_label = dart.privateName(semantics, "SemanticsData.label");
  const SemanticsData_value = dart.privateName(semantics, "SemanticsData.value");
  const SemanticsData_increasedValue = dart.privateName(semantics, "SemanticsData.increasedValue");
  const SemanticsData_decreasedValue = dart.privateName(semantics, "SemanticsData.decreasedValue");
  const SemanticsData_hint = dart.privateName(semantics, "SemanticsData.hint");
  const SemanticsData_textDirection = dart.privateName(semantics, "SemanticsData.textDirection");
  const SemanticsData_textSelection = dart.privateName(semantics, "SemanticsData.textSelection");
  const SemanticsData_scrollChildCount = dart.privateName(semantics, "SemanticsData.scrollChildCount");
  const SemanticsData_scrollIndex = dart.privateName(semantics, "SemanticsData.scrollIndex");
  const SemanticsData_scrollPosition = dart.privateName(semantics, "SemanticsData.scrollPosition");
  const SemanticsData_scrollExtentMax = dart.privateName(semantics, "SemanticsData.scrollExtentMax");
  const SemanticsData_scrollExtentMin = dart.privateName(semantics, "SemanticsData.scrollExtentMin");
  const SemanticsData_platformViewId = dart.privateName(semantics, "SemanticsData.platformViewId");
  const SemanticsData_maxValueLength = dart.privateName(semantics, "SemanticsData.maxValueLength");
  const SemanticsData_currentValueLength = dart.privateName(semantics, "SemanticsData.currentValueLength");
  const SemanticsData_rect = dart.privateName(semantics, "SemanticsData.rect");
  const SemanticsData_tags = dart.privateName(semantics, "SemanticsData.tags");
  const SemanticsData_transform = dart.privateName(semantics, "SemanticsData.transform");
  const SemanticsData_elevation = dart.privateName(semantics, "SemanticsData.elevation");
  const SemanticsData_thickness = dart.privateName(semantics, "SemanticsData.thickness");
  const SemanticsData_customSemanticsActionIds = dart.privateName(semantics, "SemanticsData.customSemanticsActionIds");
  semantics.SemanticsData = class SemanticsData extends diagnostics.Diagnosticable {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get label() {
      return this[label$0];
    }
    set label(value) {
      super.label = value;
    }
    get value() {
      return this[value$];
    }
    set value(value) {
      super.value = value;
    }
    get increasedValue() {
      return this[increasedValue$];
    }
    set increasedValue(value) {
      super.increasedValue = value;
    }
    get decreasedValue() {
      return this[decreasedValue$];
    }
    set decreasedValue(value) {
      super.decreasedValue = value;
    }
    get hint() {
      return this[hint$0];
    }
    set hint(value) {
      super.hint = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get textSelection() {
      return this[textSelection$];
    }
    set textSelection(value) {
      super.textSelection = value;
    }
    get scrollChildCount() {
      return this[scrollChildCount$];
    }
    set scrollChildCount(value) {
      super.scrollChildCount = value;
    }
    get scrollIndex() {
      return this[scrollIndex$];
    }
    set scrollIndex(value) {
      super.scrollIndex = value;
    }
    get scrollPosition() {
      return this[scrollPosition$];
    }
    set scrollPosition(value) {
      super.scrollPosition = value;
    }
    get scrollExtentMax() {
      return this[scrollExtentMax$];
    }
    set scrollExtentMax(value) {
      super.scrollExtentMax = value;
    }
    get scrollExtentMin() {
      return this[scrollExtentMin$];
    }
    set scrollExtentMin(value) {
      super.scrollExtentMin = value;
    }
    get platformViewId() {
      return this[platformViewId$];
    }
    set platformViewId(value) {
      super.platformViewId = value;
    }
    get maxValueLength() {
      return this[maxValueLength$];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get rect() {
      return this[rect$];
    }
    set rect(value) {
      super.rect = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get transform() {
      return this[transform$];
    }
    set transform(value) {
      super.transform = value;
    }
    get elevation() {
      return this[elevation$];
    }
    set elevation(value) {
      super.elevation = value;
    }
    get thickness() {
      return this[thickness$];
    }
    set thickness(value) {
      super.thickness = value;
    }
    get customSemanticsActionIds() {
      return this[customSemanticsActionIds$];
    }
    set customSemanticsActionIds(value) {
      super.customSemanticsActionIds = value;
    }
    hasFlag(flag) {
      return (dart.notNull(this.flags) & dart.notNull(flag.index)) !== 0;
    }
    hasAction(action) {
      return (dart.notNull(this.actions) & dart.notNull(action.index)) !== 0;
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
    debugFillProperties(properties) {
      let t2;
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect, {showName: false}));
      properties.add(new matrix_utils.TransformProperty.new("transform", this.transform, {showName: false, defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
      let actionSummary = (() => {
        let t0 = JSArrayOfString().of([]);
        for (let action of ui.SemanticsAction.values[$values])
          if ((dart.notNull(this.actions) & dart.notNull(action.index)) !== 0) t0[$add](diagnostics.describeEnum(action));
        return t0;
      })();
      let customSemanticsActionSummary = this.customSemanticsActionIds[$map](core.String, dart.fn(actionId => semantics.CustomSemanticsAction.getAction(actionId).label, intToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("actions", actionSummary, {ifEmpty: null}));
      properties.add(new (IterablePropertyOfString()).new("customActions", customSemanticsActionSummary, {ifEmpty: null}));
      let flagSummary = (() => {
        let t1 = JSArrayOfString().of([]);
        for (let flag of ui.SemanticsFlag.values[$values])
          if ((dart.notNull(this.flags) & dart.notNull(flag.index)) !== 0) t1[$add](diagnostics.describeEnum(flag));
        return t1;
      })();
      properties.add(new (IterablePropertyOfString()).new("flags", flagSummary, {ifEmpty: null}));
      properties.add(new diagnostics.StringProperty.new("label", this.label, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this.value, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("increasedValue", this.increasedValue, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("decreasedValue", this.decreasedValue, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("hint", this.hint, {defaultValue: ""}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      if (dart.equals((t2 = this.textSelection, t2 == null ? null : t2.isValid), true)) properties.add(new diagnostics.MessageProperty.new("textSelection", "[" + dart.str(this.textSelection.start) + ", " + dart.str(this.textSelection.end) + "]"));
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
    }
    _equals(other) {
      if (other == null) return false;
      if (!semantics.SemanticsData.is(other)) return false;
      let typedOther = semantics.SemanticsData._check(other);
      return typedOther.flags == this.flags && typedOther.actions == this.actions && typedOther.label == this.label && typedOther.value == this.value && typedOther.increasedValue == this.increasedValue && typedOther.decreasedValue == this.decreasedValue && typedOther.hint == this.hint && dart.equals(typedOther.textDirection, this.textDirection) && dart.equals(typedOther.rect, this.rect) && dart.test(collections.setEquals(semantics.SemanticsTag, typedOther.tags, this.tags)) && typedOther.scrollChildCount == this.scrollChildCount && typedOther.scrollIndex == this.scrollIndex && dart.equals(typedOther.textSelection, this.textSelection) && typedOther.scrollPosition == this.scrollPosition && typedOther.scrollExtentMax == this.scrollExtentMax && typedOther.scrollExtentMin == this.scrollExtentMin && typedOther.platformViewId == this.platformViewId && typedOther.maxValueLength == this.maxValueLength && typedOther.currentValueLength == this.currentValueLength && dart.equals(typedOther.transform, this.transform) && typedOther.elevation == this.elevation && typedOther.thickness == this.thickness && dart.test(semantics.SemanticsData._sortedListsEqual(typedOther.customSemanticsActionIds, this.customSemanticsActionIds));
    }
    get hashCode() {
      return ui.hashValues(ui.hashValues(this.flags, this.actions, this.label, this.value, this.increasedValue, this.decreasedValue, this.hint, this.textDirection, this.rect, this.tags, this.textSelection, this.scrollChildCount, this.scrollIndex, this.scrollPosition, this.scrollExtentMax, this.scrollExtentMin, this.platformViewId, this.maxValueLength, this.currentValueLength, this.transform), this.elevation, this.thickness, ui.hashList(this.customSemanticsActionIds));
    }
    static _sortedListsEqual(left, right) {
      if (left == null && right == null) return true;
      if (left != null && right != null) {
        if (left[$length] != right[$length]) return false;
        for (let i = 0; i < dart.notNull(left[$length]); i = i + 1)
          if (left[$_get](i) != right[$_get](i)) return false;
        return true;
      }
      return false;
    }
  };
  (semantics.SemanticsData.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let rect = opts && 'rect' in opts ? opts.rect : null;
    let elevation = opts && 'elevation' in opts ? opts.elevation : null;
    let thickness = opts && 'thickness' in opts ? opts.thickness : null;
    let textSelection = opts && 'textSelection' in opts ? opts.textSelection : null;
    let scrollIndex = opts && 'scrollIndex' in opts ? opts.scrollIndex : null;
    let scrollChildCount = opts && 'scrollChildCount' in opts ? opts.scrollChildCount : null;
    let scrollPosition = opts && 'scrollPosition' in opts ? opts.scrollPosition : null;
    let scrollExtentMax = opts && 'scrollExtentMax' in opts ? opts.scrollExtentMax : null;
    let scrollExtentMin = opts && 'scrollExtentMin' in opts ? opts.scrollExtentMin : null;
    let platformViewId = opts && 'platformViewId' in opts ? opts.platformViewId : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let transform = opts && 'transform' in opts ? opts.transform : null;
    let customSemanticsActionIds = opts && 'customSemanticsActionIds' in opts ? opts.customSemanticsActionIds : null;
    this[flags$] = flags;
    this[actions$] = actions;
    this[label$0] = label;
    this[increasedValue$] = increasedValue;
    this[value$] = value;
    this[decreasedValue$] = decreasedValue;
    this[hint$0] = hint;
    this[textDirection$] = textDirection;
    this[rect$] = rect;
    this[elevation$] = elevation;
    this[thickness$] = thickness;
    this[textSelection$] = textSelection;
    this[scrollIndex$] = scrollIndex;
    this[scrollChildCount$] = scrollChildCount;
    this[scrollPosition$] = scrollPosition;
    this[scrollExtentMax$] = scrollExtentMax;
    this[scrollExtentMin$] = scrollExtentMin;
    this[platformViewId$] = platformViewId;
    this[maxValueLength$] = maxValueLength;
    this[currentValueLength$] = currentValueLength;
    this[tags$] = tags;
    this[transform$] = transform;
    this[customSemanticsActionIds$] = customSemanticsActionIds;
    if (!(flags != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 205, 15, "flags != null");
    if (!(actions != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 206, 15, "actions != null");
    if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 207, 15, "label != null");
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 208, 15, "value != null");
    if (!(decreasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 209, 15, "decreasedValue != null");
    if (!(increasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 210, 15, "increasedValue != null");
    if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 211, 15, "hint != null");
    if (!(label === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with label \"" + dart.str(label) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 212, 15, "label == '' || textDirection != null");
    if (!(value === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with value \"" + dart.str(value) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 213, 15, "value == '' || textDirection != null");
    if (!(hint === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with hint \"" + dart.str(hint) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 214, 15, "hint == '' || textDirection != null");
    if (!(decreasedValue === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with decreasedValue \"" + dart.str(decreasedValue) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 215, 15, "decreasedValue == '' || textDirection != null");
    if (!(increasedValue === "" || textDirection != null)) dart.assertFailed("A SemanticsData object with increasedValue \"" + dart.str(increasedValue) + "\" had a null textDirection.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 216, 15, "increasedValue == '' || textDirection != null");
    if (!(rect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 217, 15, "rect != null");
    semantics.SemanticsData.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsData.prototype;
  dart.addTypeTests(semantics.SemanticsData);
  const flags$ = SemanticsData_flags;
  const actions$ = SemanticsData_actions;
  const label$0 = SemanticsData_label;
  const value$ = SemanticsData_value;
  const increasedValue$ = SemanticsData_increasedValue;
  const decreasedValue$ = SemanticsData_decreasedValue;
  const hint$0 = SemanticsData_hint;
  const textDirection$ = SemanticsData_textDirection;
  const textSelection$ = SemanticsData_textSelection;
  const scrollChildCount$ = SemanticsData_scrollChildCount;
  const scrollIndex$ = SemanticsData_scrollIndex;
  const scrollPosition$ = SemanticsData_scrollPosition;
  const scrollExtentMax$ = SemanticsData_scrollExtentMax;
  const scrollExtentMin$ = SemanticsData_scrollExtentMin;
  const platformViewId$ = SemanticsData_platformViewId;
  const maxValueLength$ = SemanticsData_maxValueLength;
  const currentValueLength$ = SemanticsData_currentValueLength;
  const rect$ = SemanticsData_rect;
  const tags$ = SemanticsData_tags;
  const transform$ = SemanticsData_transform;
  const elevation$ = SemanticsData_elevation;
  const thickness$ = SemanticsData_thickness;
  const customSemanticsActionIds$ = SemanticsData_customSemanticsActionIds;
  dart.setMethodSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getMethods(semantics.SemanticsData.__proto__),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    hasAction: dart.fnType(core.bool, [ui.SemanticsAction])
  }));
  dart.setLibraryUri(semantics.SemanticsData, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsData, () => ({
    __proto__: dart.getFields(semantics.SemanticsData.__proto__),
    flags: dart.finalFieldType(core.int),
    actions: dart.finalFieldType(core.int),
    label: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    increasedValue: dart.finalFieldType(core.String),
    decreasedValue: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection),
    textSelection: dart.finalFieldType(text_editing.TextSelection),
    scrollChildCount: dart.finalFieldType(core.int),
    scrollIndex: dart.finalFieldType(core.int),
    scrollPosition: dart.finalFieldType(core.double),
    scrollExtentMax: dart.finalFieldType(core.double),
    scrollExtentMin: dart.finalFieldType(core.double),
    platformViewId: dart.finalFieldType(core.int),
    maxValueLength: dart.finalFieldType(core.int),
    currentValueLength: dart.finalFieldType(core.int),
    rect: dart.finalFieldType(ui.Rect),
    tags: dart.finalFieldType(core.Set$(semantics.SemanticsTag)),
    transform: dart.finalFieldType(vector_math_64.Matrix4),
    elevation: dart.finalFieldType(core.double),
    thickness: dart.finalFieldType(core.double),
    customSemanticsActionIds: dart.finalFieldType(core.List$(core.int))
  }));
  dart.defineExtensionMethods(semantics.SemanticsData, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsData, ['hashCode']);
  let C0;
  const _transform = dart.privateName(semantics, "_transform");
  const _rect = dart.privateName(semantics, "_rect");
  const _isMergedIntoParent = dart.privateName(semantics, "_isMergedIntoParent");
  const _mergeAllDescendantsIntoThisNode = dart.privateName(semantics, "_mergeAllDescendantsIntoThisNode");
  const _children = dart.privateName(semantics, "_children");
  const _debugPreviousSnapshot = dart.privateName(semantics, "_debugPreviousSnapshot");
  const _dead = dart.privateName(semantics, "_dead");
  const _dirty = dart.privateName(semantics, "_dirty");
  const _actions = dart.privateName(semantics, "_actions");
  const _customSemanticsActions = dart.privateName(semantics, "_customSemanticsActions");
  const _actionsAsBits = dart.privateName(semantics, "_actionsAsBits");
  const _flags = dart.privateName(semantics, "_flags");
  const _label = dart.privateName(semantics, "_label");
  const _value = dart.privateName(semantics, "_value");
  const _decreasedValue = dart.privateName(semantics, "_decreasedValue");
  const _increasedValue = dart.privateName(semantics, "_increasedValue");
  const _hint = dart.privateName(semantics, "_hint");
  const _elevation = dart.privateName(semantics, "_elevation");
  const _thickness = dart.privateName(semantics, "_thickness");
  const _hintOverrides = dart.privateName(semantics, "_hintOverrides");
  const _textDirection = dart.privateName(semantics, "_textDirection");
  const _sortKey = dart.privateName(semantics, "_sortKey");
  const _textSelection = dart.privateName(semantics, "_textSelection");
  const _isMultiline = dart.privateName(semantics, "_isMultiline");
  const _scrollChildCount = dart.privateName(semantics, "_scrollChildCount");
  const _scrollIndex = dart.privateName(semantics, "_scrollIndex");
  const _scrollPosition = dart.privateName(semantics, "_scrollPosition");
  const _scrollExtentMax = dart.privateName(semantics, "_scrollExtentMax");
  const _scrollExtentMin = dart.privateName(semantics, "_scrollExtentMin");
  const _platformViewId = dart.privateName(semantics, "_platformViewId");
  const _maxValueLength = dart.privateName(semantics, "_maxValueLength");
  const _currentValueLength = dart.privateName(semantics, "_currentValueLength");
  const _showOnScreen = dart.privateName(semantics, "_showOnScreen");
  const _markDirty = dart.privateName(semantics, "_markDirty");
  const _replaceChildren = dart.privateName(semantics, "_replaceChildren");
  const _visitDescendants = dart.privateName(semantics, "_visitDescendants");
  const _nodes = dart.privateName(semantics, "_nodes");
  const _detachedNodes = dart.privateName(semantics, "_detachedNodes");
  const _dirtyNodes = dart.privateName(semantics, "_dirtyNodes");
  const _isDifferentFromCurrentSemanticAnnotation = dart.privateName(semantics, "_isDifferentFromCurrentSemanticAnnotation");
  const _canPerformAction = dart.privateName(semantics, "_canPerformAction");
  let C1;
  const _childrenInTraversalOrder = dart.privateName(semantics, "_childrenInTraversalOrder");
  const _addToUpdate = dart.privateName(semantics, "_addToUpdate");
  const _name = dart.privateName(diagnostics, "_name");
  let C2;
  const _name$ = dart.privateName(semantics, "_name");
  let C3;
  let C4;
  let C5;
  const SemanticsNode_key = dart.privateName(semantics, "SemanticsNode.key");
  const SemanticsNode_id = dart.privateName(semantics, "SemanticsNode.id");
  const SemanticsNode_parentSemanticsClipRect = dart.privateName(semantics, "SemanticsNode.parentSemanticsClipRect");
  const SemanticsNode_parentPaintClipRect = dart.privateName(semantics, "SemanticsNode.parentPaintClipRect");
  const SemanticsNode_elevationAdjustment = dart.privateName(semantics, "SemanticsNode.elevationAdjustment");
  const SemanticsNode_indexInParent = dart.privateName(semantics, "SemanticsNode.indexInParent");
  const SemanticsNode_tags = dart.privateName(semantics, "SemanticsNode.tags");
  const AbstractNode_DiagnosticableTreeMixin$36 = class AbstractNode_DiagnosticableTreeMixin extends node.AbstractNode {};
  (AbstractNode_DiagnosticableTreeMixin$36.new = function() {
    AbstractNode_DiagnosticableTreeMixin$36.__proto__.new.call(this);
  }).prototype = AbstractNode_DiagnosticableTreeMixin$36.prototype;
  dart.applyMixin(AbstractNode_DiagnosticableTreeMixin$36, diagnostics.DiagnosticableTreeMixin);
  semantics.SemanticsNode = class SemanticsNode extends AbstractNode_DiagnosticableTreeMixin$36 {
    get key() {
      return this[key$];
    }
    set key(value) {
      super.key = value;
    }
    get id() {
      return this[id];
    }
    set id(value) {
      super.id = value;
    }
    get parentSemanticsClipRect() {
      return this[parentSemanticsClipRect];
    }
    set parentSemanticsClipRect(value) {
      this[parentSemanticsClipRect] = value;
    }
    get parentPaintClipRect() {
      return this[parentPaintClipRect];
    }
    set parentPaintClipRect(value) {
      this[parentPaintClipRect] = value;
    }
    get elevationAdjustment() {
      return this[elevationAdjustment];
    }
    set elevationAdjustment(value) {
      this[elevationAdjustment] = value;
    }
    get indexInParent() {
      return this[indexInParent];
    }
    set indexInParent(value) {
      this[indexInParent] = value;
    }
    get tags() {
      return this[tags];
    }
    set tags(value) {
      this[tags] = value;
    }
    static _generateNewId() {
      semantics.SemanticsNode._lastIdentifier = (dart.notNull(semantics.SemanticsNode._lastIdentifier) + 1)[$modulo](65535);
      return semantics.SemanticsNode._lastIdentifier;
    }
    get transform() {
      return this[_transform];
    }
    set transform(value) {
      if (!dart.test(matrix_utils.MatrixUtils.matrixEquals(this[_transform], value))) {
        this[_transform] = dart.test(matrix_utils.MatrixUtils.isIdentity(value)) ? null : value;
        this[_markDirty]();
      }
    }
    get rect() {
      return this[_rect];
    }
    set rect(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1224, 12, "value != null");
      if (!dart.test(value.isFinite)) dart.assertFailed(dart.str(this) + " (with " + dart.str(this.owner) + ") tried to set a non-finite rect.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1225, 12, "value.isFinite");
      if (!dart.equals(this[_rect], value)) {
        this[_rect] = value;
        this[_markDirty]();
      }
    }
    get isInvisible() {
      return !dart.test(this.isMergedIntoParent) && dart.test(this.rect.isEmpty);
    }
    get isMergedIntoParent() {
      return this[_isMergedIntoParent];
    }
    set isMergedIntoParent(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1309, 12, "ert(value != ");
      if (dart.equals(this[_isMergedIntoParent], value)) return;
      this[_isMergedIntoParent] = value;
      this[_markDirty]();
    }
    get isPartOfNodeMerging() {
      return dart.test(this.mergeAllDescendantsIntoThisNode) || dart.test(this.isMergedIntoParent);
    }
    get mergeAllDescendantsIntoThisNode() {
      return this[_mergeAllDescendantsIntoThisNode];
    }
    [_replaceChildren](newChildren) {
      let t4;
      if (!!dart.test(newChildren[$any](dart.fn(child => dart.equals(child, this), SemanticsNodeTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1343, 12, "ert(!newChildren.any((SemanticsNode child) => child == t");
      if (!dart.test(dart.fn(() => {
        if (newChildren == this[_children]) {
          let mutationErrors = JSArrayOfDiagnosticsNode().of([]);
          if (newChildren[$length] != this[_debugPreviousSnapshot][$length]) {
            mutationErrors[$add](new assertions.ErrorDescription.new("The list's length has changed from " + dart.str(this[_debugPreviousSnapshot][$length]) + " " + "to " + dart.str(newChildren[$length]) + "."));
          } else {
            for (let i = 0; i < dart.notNull(newChildren[$length]); i = i + 1) {
              if (newChildren[$_get](i) != this[_debugPreviousSnapshot][$_get](i)) {
                if (dart.test(mutationErrors[$isNotEmpty])) {
                  mutationErrors[$add](new assertions.ErrorSpacer.new());
                }
                mutationErrors[$add](new assertions.ErrorDescription.new("Child node at position " + dart.str(i) + " was replaced:"));
                mutationErrors[$add](newChildren[$_get](i).toDiagnosticsNode({name: "Previous child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
                mutationErrors[$add](this[_debugPreviousSnapshot][$_get](i).toDiagnosticsNode({name: "New child", style: diagnostics.DiagnosticsTreeStyle.singleLine}));
              }
            }
          }
          if (dart.test(mutationErrors[$isNotEmpty])) {
            dart.throw(new assertions.FlutterError.fromParts((() => {
              let t2 = JSArrayOfDiagnosticsNode().of([]);
              t2[$add](new assertions.ErrorSummary.new("Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated."));
              t2[$add](new assertions.ErrorHint.new("Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s."));
              t2[$add](new assertions.ErrorDescription.new("Error details:"));
              for (let t3 of mutationErrors)
                t2[$add](t3);
              return t2;
            })()));
          }
        }
        if (!(!dart.test(newChildren[$any](dart.fn(node => node.isMergedIntoParent, SemanticsNodeTobool()))) || dart.test(this.isPartOfNodeMerging))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1373, 14, "ert(!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMer");
        this[_debugPreviousSnapshot] = ListOfSemanticsNode().from(newChildren);
        let ancestor = this;
        while (semantics.SemanticsNode.is(ancestor.parent))
          ancestor = ancestor.parent;
        if (!!dart.test(newChildren[$any](dart.fn(child => dart.equals(child, ancestor), SemanticsNodeTobool())))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1380, 14, "ert(!newChildren.any((SemanticsNode child) => child == ances");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1344, 12, "ert(() {\n      if (identical(newChildren, _children)) {\n        final List<DiagnosticsNode> mutationErrors = <DiagnosticsNode>[];\n        if (newChildren.length != _debugPreviousSnapshot.length) {\n          mutationErrors.add(ErrorDescription(\n            'The list\\'s length has changed from ${_debugPreviousSnapshot.length} '\n            'to ${newChildren.length}.'\n          ));\n        } else {\n          for (int i = 0; i < newChildren.length; i++) {\n            if (!identical(newChildren[i], _debugPreviousSnapshot[i])) {\n              if (mutationErrors.isNotEmpty) {\n                mutationErrors.add(ErrorSpacer());\n              }\n              mutationErrors.add(ErrorDescription('Child node at position $i was replaced:'));\n              mutationErrors.add(newChildren[i].toDiagnosticsNode(name: 'Previous child', style: DiagnosticsTreeStyle.singleLine));\n              mutationErrors.add(_debugPreviousSnapshot[i].toDiagnosticsNode(name: 'New child', style: DiagnosticsTreeStyle.singleLine));\n            }\n          }\n        }\n        if (mutationErrors.isNotEmpty) {\n          throw FlutterError.fromParts(<DiagnosticsNode>[\n            ErrorSummary('Failed to replace child semantics nodes because the list of `SemanticsNode`s was mutated.'),\n            ErrorHint('Instead of mutating the existing list, create a new list containing the desired `SemanticsNode`s.'),\n            ErrorDescription('Error details:'),\n            ...mutationErrors,\n          ]);\n        }\n      }\n      assert(!newChildren.any((SemanticsNode node) => node.isMergedIntoParent) || isPartOfNodeMerging);\n\n      _debugPreviousSnapshot = List<SemanticsNode>.from(newChildren);\n\n      SemanticsNode ancestor = this;\n      while (ancestor.parent is SemanticsNode)\n        ancestor = ancestor.parent;\n      assert(!newChildren.any((SemanticsNode child) => child == ancestor));\n      return true;\n   ");
      if (!dart.test(dart.fn(() => {
        let seenChildren = LinkedHashSetOfSemanticsNode().new();
        for (let child of newChildren)
          if (!dart.test(seenChildren.add(child))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1386, 16, "ert(seenChildren.add(ch");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1383, 12, "ert(() {\n      final Set<SemanticsNode> seenChildren = <SemanticsNode>{};\n      for (SemanticsNode child in newChildren)\n        assert(seenChildren.add(child)); // check for duplicate adds\n      return true;\n   ");
      if (this[_children] != null) {
        for (let child of this[_children])
          child[_dead] = true;
      }
      if (newChildren != null) {
        for (let child of newChildren) {
          if (!!dart.test(child.isInvisible)) dart.assertFailed("Child " + dart.str(child) + " is invisible and should not be added as a child of " + dart.str(this) + ".", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1397, 16, "ert(!child.isInvis");
          child[_dead] = false;
        }
      }
      let sawChange = false;
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.test(child[_dead])) {
            if (dart.equals(child.parent, this)) {
              this.dropChild(child);
            }
            sawChange = true;
          }
        }
      }
      if (newChildren != null) {
        for (let child of newChildren) {
          if (!dart.equals(child.parent, this)) {
            if (child.parent != null) {
              t4 = child.parent;
              t4 == null ? null : t4.dropChild(child);
            }
            if (!!dart.test(child.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1425, 18, "ert(!child.atta");
            this.adoptChild(child);
            sawChange = true;
          }
        }
      }
      if (!sawChange && this[_children] != null) {
        if (!(newChildren != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1432, 14, "ert(newChildren != ");
        if (!(newChildren[$length] == this[_children][$length])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1433, 14, "ert(newChildren.length == _children.le");
        for (let i = 0; i < dart.notNull(this[_children][$length]); i = i + 1) {
          if (this[_children][$_get](i).id != newChildren[$_get](i).id) {
            sawChange = true;
            break;
          }
        }
      }
      this[_children] = newChildren;
      if (sawChange) this[_markDirty]();
    }
    get hasChildren() {
      let t4, t4$;
      t4$ = (t4 = this[_children], t4 == null ? null : t4[$isNotEmpty]);
      return t4$ == null ? false : t4$;
    }
    get childrenCount() {
      return dart.test(this.hasChildren) ? this[_children][$length] : 0;
    }
    visitChildren(visitor) {
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (!dart.test(visitor(child))) return;
        }
      }
    }
    [_visitDescendants](visitor) {
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (!dart.test(visitor(child)) || !dart.test(child[_visitDescendants](visitor))) return false;
        }
      }
      return true;
    }
    get owner() {
      return semantics.SemanticsOwner._check(super.owner);
    }
    get parent() {
      return semantics.SemanticsNode._check(super.parent);
    }
    redepthChildren() {
      let t4;
      t4 = this[_children];
      t4 == null ? null : t4[$forEach](dart.bind(this, 'redepthChild'));
    }
    attach(owner) {
      semantics.SemanticsOwner._check(owner);
      super.attach(owner);
      if (!!dart.test(owner[_nodes][$containsKey](this.id))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1499, 12, "ert(!owner._nodes.containsKey");
      owner[_nodes][$_set](this.id, this);
      owner[_detachedNodes].remove(this);
      if (dart.test(this[_dirty])) {
        this[_dirty] = false;
        this[_markDirty]();
      }
      if (this[_children] != null) {
        for (let child of this[_children])
          child.attach(owner);
      }
    }
    detach() {
      if (!dart.test(this.owner[_nodes][$containsKey](this.id))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1514, 12, "ert(owner._nodes.containsKey");
      if (!!dart.test(this.owner[_detachedNodes].contains(this))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1515, 12, "ert(!owner._detachedNodes.contains(t");
      this.owner[_nodes][$remove](this.id);
      this.owner[_detachedNodes].add(this);
      super.detach();
      if (!(this.owner == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1519, 12, "ert(owner == ");
      if (this[_children] != null) {
        for (let child of this[_children]) {
          if (dart.equals(child.parent, this)) child.detach();
        }
      }
      this[_markDirty]();
    }
    [_markDirty]() {
      if (dart.test(this[_dirty])) return;
      this[_dirty] = true;
      if (dart.test(this.attached)) {
        if (!!dart.test(this.owner[_detachedNodes].contains(this))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1542, 14, "ert(!owner._detachedNodes.contains(t");
        this.owner[_dirtyNodes].add(this);
      }
    }
    [_isDifferentFromCurrentSemanticAnnotation](config) {
      return this[_label] != config.label || this[_hint] != config.hint || this[_elevation] != config.elevation || this[_thickness] != config.thickness || this[_decreasedValue] != config.decreasedValue || this[_value] != config.value || this[_increasedValue] != config.increasedValue || this[_flags] != config[_flags] || !dart.equals(this[_textDirection], config.textDirection) || !dart.equals(this[_sortKey], config[_sortKey]) || !dart.equals(this[_textSelection], config[_textSelection]) || this[_scrollPosition] != config[_scrollPosition] || this[_scrollExtentMax] != config[_scrollExtentMax] || this[_scrollExtentMin] != config[_scrollExtentMin] || this[_actionsAsBits] != config[_actionsAsBits] || this.indexInParent != config.indexInParent || this.platformViewId != config.platformViewId || this[_maxValueLength] != config[_maxValueLength] || this[_currentValueLength] != config[_currentValueLength] || !dart.equals(this[_mergeAllDescendantsIntoThisNode], config.isMergingSemanticsOfDescendants);
    }
    isTagged(tag) {
      return this.tags != null && dart.test(this.tags.contains(tag));
    }
    hasFlag(flag) {
      return (dart.notNull(this[_flags]) & dart.notNull(flag.index)) !== 0;
    }
    get label() {
      return this[_label];
    }
    get value() {
      return this[_value];
    }
    get decreasedValue() {
      return this[_decreasedValue];
    }
    get increasedValue() {
      return this[_increasedValue];
    }
    get hint() {
      return this[_hint];
    }
    get elevation() {
      return this[_elevation];
    }
    get thickness() {
      return this[_thickness];
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    get textDirection() {
      return this[_textDirection];
    }
    get sortKey() {
      return this[_sortKey];
    }
    get textSelection() {
      return this[_textSelection];
    }
    get isMultiline() {
      return this[_isMultiline];
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    [_canPerformAction](action) {
      return this[_actions][$containsKey](action);
    }
    updateWith(opts) {
      let t4;
      let config = opts && 'config' in opts ? opts.config : null;
      let childrenInInversePaintOrder = opts && 'childrenInInversePaintOrder' in opts ? opts.childrenInInversePaintOrder : null;
      config == null ? config = semantics.SemanticsNode._kEmptyConfig : null;
      if (dart.test(this[_isDifferentFromCurrentSemanticAnnotation](config))) this[_markDirty]();
      if (!(config.platformViewId == null || dart.test(childrenInInversePaintOrder[$isEmpty]))) dart.assertFailed("SemanticsNodes with children must not specify a platformViewId.", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1828, 7, "    config.platformViewId == null || childrenInInversePaintOrder.isE");
      this[_label] = config.label;
      this[_decreasedValue] = config.decreasedValue;
      this[_value] = config.value;
      this[_increasedValue] = config.increasedValue;
      this[_hint] = config.hint;
      this[_hintOverrides] = config.hintOverrides;
      this[_elevation] = config.elevation;
      this[_thickness] = config.thickness;
      this[_flags] = config[_flags];
      this[_textDirection] = config.textDirection;
      this[_sortKey] = config.sortKey;
      this[_actions] = LinkedHashMapOfSemanticsAction$dynamicTovoid().from(config[_actions]);
      this[_customSemanticsActions] = LinkedHashMapOfCustomSemanticsAction$VoidTovoid().from(config[_customSemanticsActions]);
      this[_actionsAsBits] = config[_actionsAsBits];
      this[_textSelection] = config[_textSelection];
      this[_isMultiline] = config.isMultiline;
      this[_scrollPosition] = config[_scrollPosition];
      this[_scrollExtentMax] = config[_scrollExtentMax];
      this[_scrollExtentMin] = config[_scrollExtentMin];
      this[_mergeAllDescendantsIntoThisNode] = config.isMergingSemanticsOfDescendants;
      this[_scrollChildCount] = config.scrollChildCount;
      this[_scrollIndex] = config.scrollIndex;
      this.indexInParent = config.indexInParent;
      this[_platformViewId] = config[_platformViewId];
      this[_maxValueLength] = config[_maxValueLength];
      this[_currentValueLength] = config[_currentValueLength];
      this[_replaceChildren]((t4 = childrenInInversePaintOrder, t4 == null ? C1 || CT.C1 : t4));
      if (!(!dart.test(this[_canPerformAction](ui.SemanticsAction.increase)) || (this[_value] === "")[$_equals](this[_increasedValue] === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"increasedValue\" or neither", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1861, 7, "    !_canPerformAction(SemanticsAction.increase) || (_value == '') == (_increasedValue ==");
      if (!(!dart.test(this[_canPerformAction](ui.SemanticsAction.decrease)) || (this[_value] === "")[$_equals](this[_decreasedValue] === ""))) dart.assertFailed("A SemanticsNode with action \"increase\" needs to be annotated with either both \"value\" and \"decreasedValue\" or neither", "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1865, 7, "    !_canPerformAction(SemanticsAction.decrease) || (_value == '') == (_decreasedValue ==");
    }
    getSemanticsData() {
      let t4;
      let flags = this[_flags];
      let actions = this[_actionsAsBits];
      let label = this[_label];
      let hint = this[_hint];
      let value = this[_value];
      let increasedValue = this[_increasedValue];
      let decreasedValue = this[_decreasedValue];
      let textDirection = this[_textDirection];
      let mergedTags = this.tags == null ? null : LinkedHashSetOfSemanticsTag().from(this.tags);
      let textSelection = this[_textSelection];
      let scrollChildCount = this[_scrollChildCount];
      let scrollIndex = this[_scrollIndex];
      let scrollPosition = this[_scrollPosition];
      let scrollExtentMax = this[_scrollExtentMax];
      let scrollExtentMin = this[_scrollExtentMin];
      let platformViewId = this[_platformViewId];
      let maxValueLength = this[_maxValueLength];
      let currentValueLength = this[_currentValueLength];
      let elevation = this[_elevation];
      let thickness = this[_thickness];
      let customSemanticsActionIds = LinkedHashSetOfint().new();
      for (let action of this[_customSemanticsActions][$keys])
        customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
      if (this.hintOverrides != null) {
        if (this.hintOverrides.onTapHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onTapHint, action: ui.SemanticsAction.tap});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
        if (this.hintOverrides.onLongPressHint != null) {
          let action = new semantics.CustomSemanticsAction.overridingAction({hint: this.hintOverrides.onLongPressHint, action: ui.SemanticsAction.longPress});
          customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
        }
      }
      if (dart.test(this.mergeAllDescendantsIntoThisNode)) {
        this[_visitDescendants](dart.fn(node => {
          if (!dart.test(node.isMergedIntoParent)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 1919, 16, "ert(node.isMergedIntoPa");
          flags = (dart.notNull(flags) | dart.notNull(node[_flags])) >>> 0;
          actions = (dart.notNull(actions) | dart.notNull(node[_actionsAsBits])) >>> 0;
          textDirection == null ? textDirection = node[_textDirection] : null;
          textSelection == null ? textSelection = node[_textSelection] : null;
          scrollChildCount == null ? scrollChildCount = node[_scrollChildCount] : null;
          scrollIndex == null ? scrollIndex = node[_scrollIndex] : null;
          scrollPosition == null ? scrollPosition = node[_scrollPosition] : null;
          scrollExtentMax == null ? scrollExtentMax = node[_scrollExtentMax] : null;
          scrollExtentMin == null ? scrollExtentMin = node[_scrollExtentMin] : null;
          platformViewId == null ? platformViewId = node[_platformViewId] : null;
          maxValueLength == null ? maxValueLength = node[_maxValueLength] : null;
          currentValueLength == null ? currentValueLength = node[_currentValueLength] : null;
          if (value === "" || value == null) value = node[_value];
          if (increasedValue === "" || increasedValue == null) increasedValue = node[_increasedValue];
          if (decreasedValue === "" || decreasedValue == null) decreasedValue = node[_decreasedValue];
          if (node.tags != null) {
            mergedTags == null ? mergedTags = LinkedHashSetOfSemanticsTag().new() : null;
            mergedTags.addAll(node.tags);
          }
          if (node[_customSemanticsActions] != null) {
            for (let action of this[_customSemanticsActions][$keys])
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
          }
          if (node.hintOverrides != null) {
            if (node.hintOverrides.onTapHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: node.hintOverrides.onTapHint, action: ui.SemanticsAction.tap});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
            if (node.hintOverrides.onLongPressHint != null) {
              let action = new semantics.CustomSemanticsAction.overridingAction({hint: node.hintOverrides.onLongPressHint, action: ui.SemanticsAction.longPress});
              customSemanticsActionIds.add(semantics.CustomSemanticsAction.getIdentifier(action));
            }
          }
          label = semantics._concatStrings({thisString: label, thisTextDirection: textDirection, otherString: node[_label], otherTextDirection: node[_textDirection]});
          hint = semantics._concatStrings({thisString: hint, thisTextDirection: textDirection, otherString: node[_hint], otherTextDirection: node[_textDirection]});
          thickness = math.max(core.double, thickness, dart.notNull(node[_thickness]) + dart.notNull(node[_elevation]));
          return true;
        }, SemanticsNodeTobool()));
      }
      return new semantics.SemanticsData.new({flags: flags, actions: actions, label: label, value: value, increasedValue: increasedValue, decreasedValue: decreasedValue, hint: hint, textDirection: textDirection, rect: this.rect, transform: this.transform, elevation: elevation, thickness: thickness, tags: mergedTags, textSelection: textSelection, scrollChildCount: scrollChildCount, scrollIndex: scrollIndex, scrollPosition: scrollPosition, scrollExtentMax: scrollExtentMax, scrollExtentMin: scrollExtentMin, platformViewId: platformViewId, maxValueLength: maxValueLength, currentValueLength: currentValueLength, customSemanticsActionIds: (t4 = customSemanticsActionIds[$toList](), t4[$sort](), t4)});
    }
    static _initIdentityTransform() {
      return vector_math_64.Matrix4.identity().storage;
    }
    [_addToUpdate](builder, customSemanticsActionIdsUpdate) {
      let t4, t4$, t4$0, t4$1, t4$2, t4$3, t4$4, t4$5, t4$6, t4$7, t4$8, t4$9;
      if (!dart.test(this[_dirty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2017, 12, "ert(_d");
      let data = this.getSemanticsData();
      let childrenInTraversalOrder = null;
      let childrenInHitTestOrder = null;
      if (!dart.test(this.hasChildren) || dart.test(this.mergeAllDescendantsIntoThisNode)) {
        childrenInTraversalOrder = semantics.SemanticsNode._kEmptyChildList;
        childrenInHitTestOrder = semantics.SemanticsNode._kEmptyChildList;
      } else {
        let childCount = this[_children][$length];
        let sortedChildren = this[_childrenInTraversalOrder]();
        childrenInTraversalOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = 0; i < dart.notNull(childCount); i = i + 1) {
          childrenInTraversalOrder[$_set](i, sortedChildren[$_get](i).id);
        }
        childrenInHitTestOrder = _native_typed_data.NativeInt32List.new(childCount);
        for (let i = dart.notNull(childCount) - 1; i >= 0; i = i - 1) {
          childrenInHitTestOrder[$_set](i, this[_children][$_get](dart.notNull(childCount) - i - 1).id);
        }
      }
      let customSemanticsActionIds = null;
      if (dart.equals((t4 = data.customSemanticsActionIds, t4 == null ? null : t4[$isNotEmpty]), true)) {
        customSemanticsActionIds = _native_typed_data.NativeInt32List.new(data.customSemanticsActionIds[$length]);
        for (let i = 0; i < dart.notNull(data.customSemanticsActionIds[$length]); i = i + 1) {
          customSemanticsActionIds[$_set](i, data.customSemanticsActionIds[$_get](i));
          customSemanticsActionIdsUpdate.add(data.customSemanticsActionIds[$_get](i));
        }
      }
      builder.updateNode({id: this.id, flags: data.flags, actions: data.actions, rect: data.rect, label: data.label, value: data.value, decreasedValue: data.decreasedValue, increasedValue: data.increasedValue, hint: data.hint, textDirection: data.textDirection, textSelectionBase: data.textSelection != null ? data.textSelection.baseOffset : -1, textSelectionExtent: data.textSelection != null ? data.textSelection.extentOffset : -1, platformViewId: (t4$ = data.platformViewId, t4$ == null ? -1 : t4$), maxValueLength: (t4$0 = data.maxValueLength, t4$0 == null ? -1 : t4$0), currentValueLength: (t4$1 = data.currentValueLength, t4$1 == null ? -1 : t4$1), scrollChildren: (t4$2 = data.scrollChildCount, t4$2 == null ? 0 : t4$2), scrollIndex: (t4$3 = data.scrollIndex, t4$3 == null ? 0 : t4$3), scrollPosition: (t4$4 = data.scrollPosition, t4$4 == null ? 0 / 0 : t4$4), scrollExtentMax: (t4$5 = data.scrollExtentMax, t4$5 == null ? 0 / 0 : t4$5), scrollExtentMin: (t4$6 = data.scrollExtentMin, t4$6 == null ? 0 / 0 : t4$6), transform: (t4$8 = (t4$7 = data.transform, t4$7 == null ? null : t4$7.storage), t4$8 == null ? semantics.SemanticsNode._kIdentityTransform : t4$8), elevation: data.elevation, thickness: data.thickness, childrenInTraversalOrder: childrenInTraversalOrder, childrenInHitTestOrder: childrenInHitTestOrder, additionalActions: (t4$9 = customSemanticsActionIds, t4$9 == null ? semantics.SemanticsNode._kEmptyCustomSemanticsActionsList : t4$9)});
      this[_dirty] = false;
    }
    [_childrenInTraversalOrder]() {
      let inheritedTextDirection = this.textDirection;
      let ancestor = this.parent;
      while (inheritedTextDirection == null && ancestor != null) {
        inheritedTextDirection = ancestor.textDirection;
        ancestor = ancestor.parent;
      }
      let childrenInDefaultOrder = null;
      if (inheritedTextDirection != null) {
        childrenInDefaultOrder = semantics._childrenInDefaultOrder(this[_children], inheritedTextDirection);
      } else {
        childrenInDefaultOrder = this[_children];
      }
      let everythingSorted = JSArrayOf_TraversalSortNode().of([]);
      let sortNodes = JSArrayOf_TraversalSortNode().of([]);
      let lastSortKey = null;
      for (let position = 0; position < dart.notNull(childrenInDefaultOrder[$length]); position = position + 1) {
        let child = childrenInDefaultOrder[$_get](position);
        let sortKey = child.sortKey;
        lastSortKey = position > 0 ? childrenInDefaultOrder[$_get](position - 1).sortKey : null;
        let isCompatibleWithPreviousSortKey = position === 0 || dart.equals(dart.runtimeType(sortKey), dart.runtimeType(lastSortKey)) && (sortKey == null || sortKey.name == lastSortKey.name);
        if (!isCompatibleWithPreviousSortKey && dart.test(sortNodes[$isNotEmpty])) {
          if (lastSortKey != null) {
            sortNodes[$sort]();
          }
          everythingSorted[$addAll](sortNodes);
          sortNodes[$clear]();
        }
        sortNodes[$add](new semantics._TraversalSortNode.new({node: child, sortKey: sortKey, position: position}));
      }
      if (lastSortKey != null) {
        sortNodes[$sort]();
      }
      everythingSorted[$addAll](sortNodes);
      return everythingSorted[$map](semantics.SemanticsNode, dart.fn(sortNode => sortNode.node, _TraversalSortNodeToSemanticsNode()))[$toList]();
    }
    sendEvent(event) {
      if (!dart.test(this.attached)) return;
      system_channels.SystemChannels.accessibility.send(event.toMap({nodeId: this.id}));
    }
    toStringShort() {
      return dart.str(this[$runtimeType]) + "#" + dart.str(this.id);
    }
    debugFillProperties(properties) {
      let t4, t4$, t4$0;
      super.debugFillProperties(properties);
      let hideOwner = true;
      if (dart.test(this[_dirty])) {
        let inDirtyNodes = this.owner != null && dart.test(this.owner[_dirtyNodes].contains(this));
        properties.add(new diagnostics.FlagProperty.new("inDirtyNodes", {value: inDirtyNodes, ifTrue: "dirty", ifFalse: "STALE"}));
        hideOwner = inDirtyNodes;
      }
      properties.add(new (DiagnosticsPropertyOfSemanticsOwner()).new("owner", this.owner, {level: hideOwner ? diagnostics.DiagnosticLevel.hidden : diagnostics.DiagnosticLevel.info}));
      properties.add(new diagnostics.FlagProperty.new("isMergedIntoParent", {value: this.isMergedIntoParent, ifTrue: "merged up ⬆️"}));
      properties.add(new diagnostics.FlagProperty.new("mergeAllDescendantsIntoThisNode", {value: this.mergeAllDescendantsIntoThisNode, ifTrue: "merge boundary ⛔️"}));
      let offset = this.transform != null ? matrix_utils.MatrixUtils.getAsTranslation(this.transform) : null;
      if (offset != null) {
        properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect.shift(offset), {showName: false}));
      } else {
        let scale = this.transform != null ? matrix_utils.MatrixUtils.getAsScale(this.transform) : null;
        let description = null;
        if (scale != null) {
          description = dart.str(this.rect) + " scaled by " + scale[$toStringAsFixed](1) + "x";
        } else if (this.transform != null && !dart.test(matrix_utils.MatrixUtils.isIdentity(this.transform))) {
          let matrix = dart.toString(this.transform)[$split]("\n")[$take](4)[$map](core.String, dart.fn(line => line[$substring](4), StringToString()))[$join]("; ");
          description = dart.str(this.rect) + " with transform [" + dart.str(matrix) + "]";
        }
        properties.add(new (DiagnosticsPropertyOfRect()).new("rect", this.rect, {description: description, showName: false}));
      }
      properties.add(new (IterablePropertyOfString()).new("tags", (t4 = this.tags, t4 == null ? null : t4[$map](core.String, dart.fn(tag => tag.name, SemanticsTagToString()))), {defaultValue: null}));
      let actions = (t4$ = this[_actions][$keys][$map](core.String, dart.fn(action => diagnostics.describeEnum(action), SemanticsActionToString()))[$toList](), t4$[$sort](), t4$);
      let customSemanticsActions = this[_customSemanticsActions][$keys][$map](core.String, dart.fn(action => action.label, CustomSemanticsActionToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("actions", actions, {ifEmpty: null}));
      properties.add(new (IterablePropertyOfString()).new("customActions", customSemanticsActions, {ifEmpty: null}));
      let flags = ui.SemanticsFlag.values[$values][$where](dart.fn(flag => this.hasFlag(flag), SemanticsFlagTobool()))[$map](core.String, dart.fn(flag => dart.toString(flag)[$substring]("SemanticsFlag.".length), SemanticsFlagToString()))[$toList]();
      properties.add(new (IterablePropertyOfString()).new("flags", flags, {ifEmpty: null}));
      properties.add(new diagnostics.FlagProperty.new("isInvisible", {value: this.isInvisible, ifTrue: "invisible"}));
      properties.add(new diagnostics.FlagProperty.new("isHidden", {value: this.hasFlag(ui.SemanticsFlag.isHidden), ifTrue: "HIDDEN"}));
      properties.add(new diagnostics.StringProperty.new("label", this[_label], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this[_value], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("increasedValue", this[_increasedValue], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("decreasedValue", this[_decreasedValue], {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("hint", this[_hint], {defaultValue: ""}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this[_textDirection], {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      if (dart.equals((t4$0 = this[_textSelection], t4$0 == null ? null : t4$0.isValid), true)) properties.add(new diagnostics.MessageProperty.new("text selection", "[" + dart.str(this[_textSelection].start) + ", " + dart.str(this[_textSelection].end) + "]"));
      properties.add(new diagnostics.IntProperty.new("platformViewId", this.platformViewId, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxValueLength", this.maxValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("currentValueLength", this.currentValueLength, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollChildren", this.scrollChildCount, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("scrollIndex", this.scrollIndex, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMin", this.scrollExtentMin, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollPosition", this.scrollPosition, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("scrollExtentMax", this.scrollExtentMax, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("elevation", this.elevation, {defaultValue: 0.0}));
      properties.add(new diagnostics.DoubleProperty.new("thickness", this.thickness, {defaultValue: 0.0}));
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : C2 || CT.C2;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C3 || CT.C3;
      if (!(childOrder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2227, 12, "\n    assert(childO");
      return this.toDiagnosticsNode({childOrder: childOrder}).toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : C4 || CT.C4;
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C3 || CT.C3;
      return new semantics._SemanticsDiagnosticableNode.new({name: name, value: this, style: style, childOrder: childOrder});
    }
    debugDescribeChildren(opts) {
      let childOrder = opts && 'childOrder' in opts ? opts.childOrder : C5 || CT.C5;
      return this.debugListChildrenInOrder(childOrder)[$map](diagnostics.DiagnosticsNode, dart.fn(node => node.toDiagnosticsNode({childOrder: childOrder}), SemanticsNodeToDiagnosticsNode()))[$toList]();
    }
    debugListChildrenInOrder(childOrder) {
      if (!(childOrder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2254, 12, "\n    assert(childO");
      if (this[_children] == null) return C1 || CT.C1;
      switch (childOrder) {
        case C5 || CT.C5:
        {
          return this[_children];
        }
        case C3 || CT.C3:
        {
          return this[_childrenInTraversalOrder]();
        }
      }
      if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2264, 12, "\n    ");
      return null;
    }
  };
  (semantics.SemanticsNode.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[_debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_label] = semantics.SemanticsNode._kEmptyConfig.label;
    this[_value] = semantics.SemanticsNode._kEmptyConfig.value;
    this[_decreasedValue] = semantics.SemanticsNode._kEmptyConfig.decreasedValue;
    this[_increasedValue] = semantics.SemanticsNode._kEmptyConfig.increasedValue;
    this[_hint] = semantics.SemanticsNode._kEmptyConfig.hint;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[id] = semantics.SemanticsNode._generateNewId();
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsNode.prototype;
  (semantics.SemanticsNode.root = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let showOnScreen = opts && 'showOnScreen' in opts ? opts.showOnScreen : null;
    let owner = opts && 'owner' in opts ? opts.owner : null;
    this[_transform] = null;
    this[_rect] = ui.Rect.zero;
    this[parentSemanticsClipRect] = null;
    this[parentPaintClipRect] = null;
    this[elevationAdjustment] = null;
    this[indexInParent] = null;
    this[_isMergedIntoParent] = false;
    this[_mergeAllDescendantsIntoThisNode] = semantics.SemanticsNode._kEmptyConfig.isMergingSemanticsOfDescendants;
    this[_children] = null;
    this[_debugPreviousSnapshot] = null;
    this[_dead] = false;
    this[_dirty] = false;
    this[_actions] = semantics.SemanticsNode._kEmptyConfig[_actions];
    this[_customSemanticsActions] = semantics.SemanticsNode._kEmptyConfig[_customSemanticsActions];
    this[_actionsAsBits] = semantics.SemanticsNode._kEmptyConfig[_actionsAsBits];
    this[tags] = null;
    this[_flags] = semantics.SemanticsNode._kEmptyConfig[_flags];
    this[_label] = semantics.SemanticsNode._kEmptyConfig.label;
    this[_value] = semantics.SemanticsNode._kEmptyConfig.value;
    this[_decreasedValue] = semantics.SemanticsNode._kEmptyConfig.decreasedValue;
    this[_increasedValue] = semantics.SemanticsNode._kEmptyConfig.increasedValue;
    this[_hint] = semantics.SemanticsNode._kEmptyConfig.hint;
    this[_elevation] = semantics.SemanticsNode._kEmptyConfig.elevation;
    this[_thickness] = semantics.SemanticsNode._kEmptyConfig.thickness;
    this[_hintOverrides] = null;
    this[_textDirection] = semantics.SemanticsNode._kEmptyConfig.textDirection;
    this[_sortKey] = null;
    this[_textSelection] = null;
    this[_isMultiline] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[key$] = key;
    this[id] = 0;
    this[_showOnScreen] = showOnScreen;
    semantics.SemanticsNode.__proto__.new.call(this);
    this.attach(owner);
  }).prototype = semantics.SemanticsNode.prototype;
  dart.addTypeTests(semantics.SemanticsNode);
  const key$ = SemanticsNode_key;
  const id = SemanticsNode_id;
  const parentSemanticsClipRect = SemanticsNode_parentSemanticsClipRect;
  const parentPaintClipRect = SemanticsNode_parentPaintClipRect;
  const elevationAdjustment = SemanticsNode_elevationAdjustment;
  const indexInParent = SemanticsNode_indexInParent;
  const tags = SemanticsNode_tags;
  dart.setMethodSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getMethods(semantics.SemanticsNode.__proto__),
    [_replaceChildren]: dart.fnType(dart.void, [core.List$(semantics.SemanticsNode)]),
    visitChildren: dart.fnType(dart.void, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_visitDescendants]: dart.fnType(core.bool, [dart.fnType(core.bool, [semantics.SemanticsNode])]),
    [_markDirty]: dart.fnType(dart.void, []),
    [_isDifferentFromCurrentSemanticAnnotation]: dart.fnType(core.bool, [semantics.SemanticsConfiguration]),
    isTagged: dart.fnType(core.bool, [semantics.SemanticsTag]),
    hasFlag: dart.fnType(core.bool, [ui.SemanticsFlag]),
    [_canPerformAction]: dart.fnType(core.bool, [ui.SemanticsAction]),
    updateWith: dart.fnType(dart.void, [], {childrenInInversePaintOrder: core.List$(semantics.SemanticsNode), config: semantics.SemanticsConfiguration}),
    getSemanticsData: dart.fnType(semantics.SemanticsData, []),
    [_addToUpdate]: dart.fnType(dart.void, [ui.SemanticsUpdateBuilder, core.Set$(core.int)]),
    [_childrenInTraversalOrder]: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sendEvent: dart.fnType(dart.void, [semantics_event.SemanticsEvent]),
    toStringDeep: dart.fnType(core.String, [], {childOrder: semantics.DebugSemanticsDumpOrder, minLevel: diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}),
    toDiagnosticsNode: dart.fnType(diagnostics.DiagnosticsNode, [], {childOrder: semantics.DebugSemanticsDumpOrder, name: core.String, style: diagnostics.DiagnosticsTreeStyle}),
    debugDescribeChildren: dart.fnType(core.List$(diagnostics.DiagnosticsNode), [], {childOrder: semantics.DebugSemanticsDumpOrder}),
    debugListChildrenInOrder: dart.fnType(core.List$(semantics.SemanticsNode), [semantics.DebugSemanticsDumpOrder])
  }));
  dart.setGetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getGetters(semantics.SemanticsNode.__proto__),
    transform: vector_math_64.Matrix4,
    rect: ui.Rect,
    isInvisible: core.bool,
    isMergedIntoParent: core.bool,
    isPartOfNodeMerging: core.bool,
    mergeAllDescendantsIntoThisNode: core.bool,
    hasChildren: core.bool,
    childrenCount: core.int,
    owner: semantics.SemanticsOwner,
    parent: semantics.SemanticsNode,
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    elevation: core.double,
    thickness: core.double,
    hintOverrides: semantics.SemanticsHintOverrides,
    textDirection: ui.TextDirection,
    sortKey: semantics.SemanticsSortKey,
    textSelection: text_editing.TextSelection,
    isMultiline: core.bool,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int
  }));
  dart.setSetterSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getSetters(semantics.SemanticsNode.__proto__),
    transform: vector_math_64.Matrix4,
    rect: ui.Rect,
    isMergedIntoParent: core.bool
  }));
  dart.setLibraryUri(semantics.SemanticsNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsNode, () => ({
    __proto__: dart.getFields(semantics.SemanticsNode.__proto__),
    key: dart.finalFieldType(key.Key),
    id: dart.finalFieldType(core.int),
    [_showOnScreen]: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_transform]: dart.fieldType(vector_math_64.Matrix4),
    [_rect]: dart.fieldType(ui.Rect),
    parentSemanticsClipRect: dart.fieldType(ui.Rect),
    parentPaintClipRect: dart.fieldType(ui.Rect),
    elevationAdjustment: dart.fieldType(core.double),
    indexInParent: dart.fieldType(core.int),
    [_isMergedIntoParent]: dart.fieldType(core.bool),
    [_mergeAllDescendantsIntoThisNode]: dart.fieldType(core.bool),
    [_children]: dart.fieldType(core.List$(semantics.SemanticsNode)),
    [_debugPreviousSnapshot]: dart.fieldType(core.List$(semantics.SemanticsNode)),
    [_dead]: dart.fieldType(core.bool),
    [_dirty]: dart.fieldType(core.bool),
    [_actions]: dart.fieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic]))),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_actionsAsBits]: dart.fieldType(core.int),
    tags: dart.fieldType(core.Set$(semantics.SemanticsTag)),
    [_flags]: dart.fieldType(core.int),
    [_label]: dart.fieldType(core.String),
    [_value]: dart.fieldType(core.String),
    [_decreasedValue]: dart.fieldType(core.String),
    [_increasedValue]: dart.fieldType(core.String),
    [_hint]: dart.fieldType(core.String),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_hintOverrides]: dart.fieldType(semantics.SemanticsHintOverrides),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_sortKey]: dart.fieldType(semantics.SemanticsSortKey),
    [_textSelection]: dart.fieldType(text_editing.TextSelection),
    [_isMultiline]: dart.fieldType(core.bool),
    [_scrollChildCount]: dart.fieldType(core.int),
    [_scrollIndex]: dart.fieldType(core.int),
    [_scrollPosition]: dart.fieldType(core.double),
    [_scrollExtentMax]: dart.fieldType(core.double),
    [_scrollExtentMin]: dart.fieldType(core.double),
    [_platformViewId]: dart.fieldType(core.int),
    [_maxValueLength]: dart.fieldType(core.int),
    [_currentValueLength]: dart.fieldType(core.int)
  }));
  dart.defineLazy(semantics.SemanticsNode, {
    /*semantics.SemanticsNode._maxFrameworkAccessibilityIdentifier*/get _maxFrameworkAccessibilityIdentifier() {
      return 65535;
    },
    /*semantics.SemanticsNode._lastIdentifier*/get _lastIdentifier() {
      return 0;
    },
    set _lastIdentifier(_) {},
    /*semantics.SemanticsNode._kEmptyConfig*/get _kEmptyConfig() {
      return new semantics.SemanticsConfiguration.new();
    },
    /*semantics.SemanticsNode._kEmptyChildList*/get _kEmptyChildList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kEmptyCustomSemanticsActionsList*/get _kEmptyCustomSemanticsActionsList() {
      return _native_typed_data.NativeInt32List.new(0);
    },
    /*semantics.SemanticsNode._kIdentityTransform*/get _kIdentityTransform() {
      return semantics.SemanticsNode._initIdentityTransform();
    }
  });
  semantics._SemanticsDiagnosticableNode = class _SemanticsDiagnosticableNode extends diagnostics.DiagnosticableNode$(semantics.SemanticsNode) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren({childOrder: this.childOrder});
      return C0 || CT.C0;
    }
  };
  (semantics._SemanticsDiagnosticableNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let childOrder = opts && 'childOrder' in opts ? opts.childOrder : null;
    this.childOrder = childOrder;
    semantics._SemanticsDiagnosticableNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = semantics._SemanticsDiagnosticableNode.prototype;
  dart.addTypeTests(semantics._SemanticsDiagnosticableNode);
  dart.setLibraryUri(semantics._SemanticsDiagnosticableNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._SemanticsDiagnosticableNode, () => ({
    __proto__: dart.getFields(semantics._SemanticsDiagnosticableNode.__proto__),
    childOrder: dart.finalFieldType(semantics.DebugSemanticsDumpOrder)
  }));
  const SemanticsHintOverrides_onTapHint = dart.privateName(semantics, "SemanticsHintOverrides.onTapHint");
  const SemanticsHintOverrides_onLongPressHint = dart.privateName(semantics, "SemanticsHintOverrides.onLongPressHint");
  semantics.SemanticsHintOverrides = class SemanticsHintOverrides extends diagnostics.DiagnosticableTree {
    get onTapHint() {
      return this[onTapHint$];
    }
    set onTapHint(value) {
      super.onTapHint = value;
    }
    get onLongPressHint() {
      return this[onLongPressHint$];
    }
    set onLongPressHint(value) {
      super.onLongPressHint = value;
    }
    get isNotEmpty() {
      return this.onTapHint != null || this.onLongPressHint != null;
    }
    get hashCode() {
      return ui.hashValues(this.onTapHint, this.onLongPressHint);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = semantics.SemanticsHintOverrides._check(other);
      return typedOther.onTapHint == this.onTapHint && typedOther.onLongPressHint == this.onLongPressHint;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("onTapHint", this.onTapHint, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("onLongPressHint", this.onLongPressHint, {defaultValue: null}));
    }
  };
  (semantics.SemanticsHintOverrides.new = function(opts) {
    let onTapHint = opts && 'onTapHint' in opts ? opts.onTapHint : null;
    let onLongPressHint = opts && 'onLongPressHint' in opts ? opts.onLongPressHint : null;
    this[onTapHint$] = onTapHint;
    this[onLongPressHint$] = onLongPressHint;
    if (!(onTapHint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 532, 15, "onTapHint != ''");
    if (!(onLongPressHint !== "")) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 533, 15, "onLongPressHint != ''");
    semantics.SemanticsHintOverrides.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsHintOverrides.prototype;
  dart.addTypeTests(semantics.SemanticsHintOverrides);
  const onTapHint$ = SemanticsHintOverrides_onTapHint;
  const onLongPressHint$ = SemanticsHintOverrides_onLongPressHint;
  dart.setGetterSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getGetters(semantics.SemanticsHintOverrides.__proto__),
    isNotEmpty: core.bool
  }));
  dart.setLibraryUri(semantics.SemanticsHintOverrides, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsHintOverrides, () => ({
    __proto__: dart.getFields(semantics.SemanticsHintOverrides.__proto__),
    onTapHint: dart.finalFieldType(core.String),
    onLongPressHint: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsHintOverrides, ['_equals']);
  dart.defineExtensionAccessors(semantics.SemanticsHintOverrides, ['hashCode']);
  const SemanticsProperties_enabled = dart.privateName(semantics, "SemanticsProperties.enabled");
  const SemanticsProperties_checked = dart.privateName(semantics, "SemanticsProperties.checked");
  const SemanticsProperties_toggled = dart.privateName(semantics, "SemanticsProperties.toggled");
  const SemanticsProperties_selected = dart.privateName(semantics, "SemanticsProperties.selected");
  const SemanticsProperties_button = dart.privateName(semantics, "SemanticsProperties.button");
  const SemanticsProperties_header = dart.privateName(semantics, "SemanticsProperties.header");
  const SemanticsProperties_textField = dart.privateName(semantics, "SemanticsProperties.textField");
  const SemanticsProperties_readOnly = dart.privateName(semantics, "SemanticsProperties.readOnly");
  const SemanticsProperties_focused = dart.privateName(semantics, "SemanticsProperties.focused");
  const SemanticsProperties_inMutuallyExclusiveGroup = dart.privateName(semantics, "SemanticsProperties.inMutuallyExclusiveGroup");
  const SemanticsProperties_hidden = dart.privateName(semantics, "SemanticsProperties.hidden");
  const SemanticsProperties_obscured = dart.privateName(semantics, "SemanticsProperties.obscured");
  const SemanticsProperties_multiline = dart.privateName(semantics, "SemanticsProperties.multiline");
  const SemanticsProperties_scopesRoute = dart.privateName(semantics, "SemanticsProperties.scopesRoute");
  const SemanticsProperties_namesRoute = dart.privateName(semantics, "SemanticsProperties.namesRoute");
  const SemanticsProperties_image = dart.privateName(semantics, "SemanticsProperties.image");
  const SemanticsProperties_liveRegion = dart.privateName(semantics, "SemanticsProperties.liveRegion");
  const SemanticsProperties_maxValueLength = dart.privateName(semantics, "SemanticsProperties.maxValueLength");
  const SemanticsProperties_currentValueLength = dart.privateName(semantics, "SemanticsProperties.currentValueLength");
  const SemanticsProperties_label = dart.privateName(semantics, "SemanticsProperties.label");
  const SemanticsProperties_value = dart.privateName(semantics, "SemanticsProperties.value");
  const SemanticsProperties_increasedValue = dart.privateName(semantics, "SemanticsProperties.increasedValue");
  const SemanticsProperties_decreasedValue = dart.privateName(semantics, "SemanticsProperties.decreasedValue");
  const SemanticsProperties_hint = dart.privateName(semantics, "SemanticsProperties.hint");
  const SemanticsProperties_hintOverrides = dart.privateName(semantics, "SemanticsProperties.hintOverrides");
  const SemanticsProperties_textDirection = dart.privateName(semantics, "SemanticsProperties.textDirection");
  const SemanticsProperties_sortKey = dart.privateName(semantics, "SemanticsProperties.sortKey");
  const SemanticsProperties_onTap = dart.privateName(semantics, "SemanticsProperties.onTap");
  const SemanticsProperties_onLongPress = dart.privateName(semantics, "SemanticsProperties.onLongPress");
  const SemanticsProperties_onScrollLeft = dart.privateName(semantics, "SemanticsProperties.onScrollLeft");
  const SemanticsProperties_onScrollRight = dart.privateName(semantics, "SemanticsProperties.onScrollRight");
  const SemanticsProperties_onScrollUp = dart.privateName(semantics, "SemanticsProperties.onScrollUp");
  const SemanticsProperties_onScrollDown = dart.privateName(semantics, "SemanticsProperties.onScrollDown");
  const SemanticsProperties_onIncrease = dart.privateName(semantics, "SemanticsProperties.onIncrease");
  const SemanticsProperties_onDecrease = dart.privateName(semantics, "SemanticsProperties.onDecrease");
  const SemanticsProperties_onCopy = dart.privateName(semantics, "SemanticsProperties.onCopy");
  const SemanticsProperties_onCut = dart.privateName(semantics, "SemanticsProperties.onCut");
  const SemanticsProperties_onPaste = dart.privateName(semantics, "SemanticsProperties.onPaste");
  const SemanticsProperties_onMoveCursorForwardByCharacter = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByCharacter");
  const SemanticsProperties_onMoveCursorBackwardByCharacter = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByCharacter");
  const SemanticsProperties_onMoveCursorForwardByWord = dart.privateName(semantics, "SemanticsProperties.onMoveCursorForwardByWord");
  const SemanticsProperties_onMoveCursorBackwardByWord = dart.privateName(semantics, "SemanticsProperties.onMoveCursorBackwardByWord");
  const SemanticsProperties_onSetSelection = dart.privateName(semantics, "SemanticsProperties.onSetSelection");
  const SemanticsProperties_onDidGainAccessibilityFocus = dart.privateName(semantics, "SemanticsProperties.onDidGainAccessibilityFocus");
  const SemanticsProperties_onDidLoseAccessibilityFocus = dart.privateName(semantics, "SemanticsProperties.onDidLoseAccessibilityFocus");
  const SemanticsProperties_onDismiss = dart.privateName(semantics, "SemanticsProperties.onDismiss");
  const SemanticsProperties_customSemanticsActions = dart.privateName(semantics, "SemanticsProperties.customSemanticsActions");
  semantics.SemanticsProperties = class SemanticsProperties extends diagnostics.DiagnosticableTree {
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get checked() {
      return this[checked$];
    }
    set checked(value) {
      super.checked = value;
    }
    get toggled() {
      return this[toggled$];
    }
    set toggled(value) {
      super.toggled = value;
    }
    get selected() {
      return this[selected$];
    }
    set selected(value) {
      super.selected = value;
    }
    get button() {
      return this[button$];
    }
    set button(value) {
      super.button = value;
    }
    get header() {
      return this[header$];
    }
    set header(value) {
      super.header = value;
    }
    get textField() {
      return this[textField$];
    }
    set textField(value) {
      super.textField = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get focused() {
      return this[focused$];
    }
    set focused(value) {
      super.focused = value;
    }
    get inMutuallyExclusiveGroup() {
      return this[inMutuallyExclusiveGroup$];
    }
    set inMutuallyExclusiveGroup(value) {
      super.inMutuallyExclusiveGroup = value;
    }
    get hidden() {
      return this[hidden$];
    }
    set hidden(value) {
      super.hidden = value;
    }
    get obscured() {
      return this[obscured$];
    }
    set obscured(value) {
      super.obscured = value;
    }
    get multiline() {
      return this[multiline$];
    }
    set multiline(value) {
      super.multiline = value;
    }
    get scopesRoute() {
      return this[scopesRoute$];
    }
    set scopesRoute(value) {
      super.scopesRoute = value;
    }
    get namesRoute() {
      return this[namesRoute$];
    }
    set namesRoute(value) {
      super.namesRoute = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get liveRegion() {
      return this[liveRegion$];
    }
    set liveRegion(value) {
      super.liveRegion = value;
    }
    get maxValueLength() {
      return this[maxValueLength$0];
    }
    set maxValueLength(value) {
      super.maxValueLength = value;
    }
    get currentValueLength() {
      return this[currentValueLength$0];
    }
    set currentValueLength(value) {
      super.currentValueLength = value;
    }
    get label() {
      return this[label$1];
    }
    set label(value) {
      super.label = value;
    }
    get value() {
      return this[value$0];
    }
    set value(value) {
      super.value = value;
    }
    get increasedValue() {
      return this[increasedValue$0];
    }
    set increasedValue(value) {
      super.increasedValue = value;
    }
    get decreasedValue() {
      return this[decreasedValue$0];
    }
    set decreasedValue(value) {
      super.decreasedValue = value;
    }
    get hint() {
      return this[hint$1];
    }
    set hint(value) {
      super.hint = value;
    }
    get hintOverrides() {
      return this[hintOverrides$];
    }
    set hintOverrides(value) {
      super.hintOverrides = value;
    }
    get textDirection() {
      return this[textDirection$0];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get sortKey() {
      return this[sortKey$];
    }
    set sortKey(value) {
      super.sortKey = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get onLongPress() {
      return this[onLongPress$];
    }
    set onLongPress(value) {
      super.onLongPress = value;
    }
    get onScrollLeft() {
      return this[onScrollLeft$];
    }
    set onScrollLeft(value) {
      super.onScrollLeft = value;
    }
    get onScrollRight() {
      return this[onScrollRight$];
    }
    set onScrollRight(value) {
      super.onScrollRight = value;
    }
    get onScrollUp() {
      return this[onScrollUp$];
    }
    set onScrollUp(value) {
      super.onScrollUp = value;
    }
    get onScrollDown() {
      return this[onScrollDown$];
    }
    set onScrollDown(value) {
      super.onScrollDown = value;
    }
    get onIncrease() {
      return this[onIncrease$];
    }
    set onIncrease(value) {
      super.onIncrease = value;
    }
    get onDecrease() {
      return this[onDecrease$];
    }
    set onDecrease(value) {
      super.onDecrease = value;
    }
    get onCopy() {
      return this[onCopy$];
    }
    set onCopy(value) {
      super.onCopy = value;
    }
    get onCut() {
      return this[onCut$];
    }
    set onCut(value) {
      super.onCut = value;
    }
    get onPaste() {
      return this[onPaste$];
    }
    set onPaste(value) {
      super.onPaste = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[onMoveCursorForwardByCharacter$];
    }
    set onMoveCursorForwardByCharacter(value) {
      super.onMoveCursorForwardByCharacter = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[onMoveCursorBackwardByCharacter$];
    }
    set onMoveCursorBackwardByCharacter(value) {
      super.onMoveCursorBackwardByCharacter = value;
    }
    get onMoveCursorForwardByWord() {
      return this[onMoveCursorForwardByWord$];
    }
    set onMoveCursorForwardByWord(value) {
      super.onMoveCursorForwardByWord = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[onMoveCursorBackwardByWord$];
    }
    set onMoveCursorBackwardByWord(value) {
      super.onMoveCursorBackwardByWord = value;
    }
    get onSetSelection() {
      return this[onSetSelection$];
    }
    set onSetSelection(value) {
      super.onSetSelection = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[onDidGainAccessibilityFocus$];
    }
    set onDidGainAccessibilityFocus(value) {
      super.onDidGainAccessibilityFocus = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[onDidLoseAccessibilityFocus$];
    }
    set onDidLoseAccessibilityFocus(value) {
      super.onDidLoseAccessibilityFocus = value;
    }
    get onDismiss() {
      return this[onDismiss$];
    }
    set onDismiss(value) {
      super.onDismiss = value;
    }
    get customSemanticsActions() {
      return this[customSemanticsActions$];
    }
    set customSemanticsActions(value) {
      super.customSemanticsActions = value;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfbool()).new("checked", this.checked, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("selected", this.selected, {defaultValue: null}));
      properties.add(new diagnostics.StringProperty.new("label", this.label, {defaultValue: ""}));
      properties.add(new diagnostics.StringProperty.new("value", this.value));
      properties.add(new diagnostics.StringProperty.new("hint", this.hint));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsSortKey()).new("sortKey", this.sortKey, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfSemanticsHintOverrides()).new("hintOverrides", this.hintOverrides));
    }
    toStringShort() {
      return dart.str(this[$runtimeType]);
    }
  };
  (semantics.SemanticsProperties.new = function(opts) {
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let checked = opts && 'checked' in opts ? opts.checked : null;
    let selected = opts && 'selected' in opts ? opts.selected : null;
    let toggled = opts && 'toggled' in opts ? opts.toggled : null;
    let button = opts && 'button' in opts ? opts.button : null;
    let header = opts && 'header' in opts ? opts.header : null;
    let textField = opts && 'textField' in opts ? opts.textField : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : null;
    let focused = opts && 'focused' in opts ? opts.focused : null;
    let inMutuallyExclusiveGroup = opts && 'inMutuallyExclusiveGroup' in opts ? opts.inMutuallyExclusiveGroup : null;
    let hidden = opts && 'hidden' in opts ? opts.hidden : null;
    let obscured = opts && 'obscured' in opts ? opts.obscured : null;
    let multiline = opts && 'multiline' in opts ? opts.multiline : null;
    let scopesRoute = opts && 'scopesRoute' in opts ? opts.scopesRoute : null;
    let namesRoute = opts && 'namesRoute' in opts ? opts.namesRoute : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let liveRegion = opts && 'liveRegion' in opts ? opts.liveRegion : null;
    let maxValueLength = opts && 'maxValueLength' in opts ? opts.maxValueLength : null;
    let currentValueLength = opts && 'currentValueLength' in opts ? opts.currentValueLength : null;
    let label = opts && 'label' in opts ? opts.label : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let increasedValue = opts && 'increasedValue' in opts ? opts.increasedValue : null;
    let decreasedValue = opts && 'decreasedValue' in opts ? opts.decreasedValue : null;
    let hint = opts && 'hint' in opts ? opts.hint : null;
    let hintOverrides = opts && 'hintOverrides' in opts ? opts.hintOverrides : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let onLongPress = opts && 'onLongPress' in opts ? opts.onLongPress : null;
    let onScrollLeft = opts && 'onScrollLeft' in opts ? opts.onScrollLeft : null;
    let onScrollRight = opts && 'onScrollRight' in opts ? opts.onScrollRight : null;
    let onScrollUp = opts && 'onScrollUp' in opts ? opts.onScrollUp : null;
    let onScrollDown = opts && 'onScrollDown' in opts ? opts.onScrollDown : null;
    let onIncrease = opts && 'onIncrease' in opts ? opts.onIncrease : null;
    let onDecrease = opts && 'onDecrease' in opts ? opts.onDecrease : null;
    let onCopy = opts && 'onCopy' in opts ? opts.onCopy : null;
    let onCut = opts && 'onCut' in opts ? opts.onCut : null;
    let onPaste = opts && 'onPaste' in opts ? opts.onPaste : null;
    let onMoveCursorForwardByCharacter = opts && 'onMoveCursorForwardByCharacter' in opts ? opts.onMoveCursorForwardByCharacter : null;
    let onMoveCursorBackwardByCharacter = opts && 'onMoveCursorBackwardByCharacter' in opts ? opts.onMoveCursorBackwardByCharacter : null;
    let onMoveCursorForwardByWord = opts && 'onMoveCursorForwardByWord' in opts ? opts.onMoveCursorForwardByWord : null;
    let onMoveCursorBackwardByWord = opts && 'onMoveCursorBackwardByWord' in opts ? opts.onMoveCursorBackwardByWord : null;
    let onSetSelection = opts && 'onSetSelection' in opts ? opts.onSetSelection : null;
    let onDidGainAccessibilityFocus = opts && 'onDidGainAccessibilityFocus' in opts ? opts.onDidGainAccessibilityFocus : null;
    let onDidLoseAccessibilityFocus = opts && 'onDidLoseAccessibilityFocus' in opts ? opts.onDidLoseAccessibilityFocus : null;
    let onDismiss = opts && 'onDismiss' in opts ? opts.onDismiss : null;
    let customSemanticsActions = opts && 'customSemanticsActions' in opts ? opts.customSemanticsActions : null;
    this[enabled$] = enabled;
    this[checked$] = checked;
    this[selected$] = selected;
    this[toggled$] = toggled;
    this[button$] = button;
    this[header$] = header;
    this[textField$] = textField;
    this[readOnly$] = readOnly;
    this[focused$] = focused;
    this[inMutuallyExclusiveGroup$] = inMutuallyExclusiveGroup;
    this[hidden$] = hidden;
    this[obscured$] = obscured;
    this[multiline$] = multiline;
    this[scopesRoute$] = scopesRoute;
    this[namesRoute$] = namesRoute;
    this[image$] = image;
    this[liveRegion$] = liveRegion;
    this[maxValueLength$0] = maxValueLength;
    this[currentValueLength$0] = currentValueLength;
    this[label$1] = label;
    this[value$0] = value;
    this[increasedValue$0] = increasedValue;
    this[decreasedValue$0] = decreasedValue;
    this[hint$1] = hint;
    this[hintOverrides$] = hintOverrides;
    this[textDirection$0] = textDirection;
    this[sortKey$] = sortKey;
    this[onTap$] = onTap;
    this[onLongPress$] = onLongPress;
    this[onScrollLeft$] = onScrollLeft;
    this[onScrollRight$] = onScrollRight;
    this[onScrollUp$] = onScrollUp;
    this[onScrollDown$] = onScrollDown;
    this[onIncrease$] = onIncrease;
    this[onDecrease$] = onDecrease;
    this[onCopy$] = onCopy;
    this[onCut$] = onCut;
    this[onPaste$] = onPaste;
    this[onMoveCursorForwardByCharacter$] = onMoveCursorForwardByCharacter;
    this[onMoveCursorBackwardByCharacter$] = onMoveCursorBackwardByCharacter;
    this[onMoveCursorForwardByWord$] = onMoveCursorForwardByWord;
    this[onMoveCursorBackwardByWord$] = onMoveCursorBackwardByWord;
    this[onSetSelection$] = onSetSelection;
    this[onDidGainAccessibilityFocus$] = onDidGainAccessibilityFocus;
    this[onDidLoseAccessibilityFocus$] = onDidLoseAccessibilityFocus;
    this[onDismiss$] = onDismiss;
    this[customSemanticsActions$] = customSemanticsActions;
    semantics.SemanticsProperties.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsProperties.prototype;
  dart.addTypeTests(semantics.SemanticsProperties);
  const enabled$ = SemanticsProperties_enabled;
  const checked$ = SemanticsProperties_checked;
  const toggled$ = SemanticsProperties_toggled;
  const selected$ = SemanticsProperties_selected;
  const button$ = SemanticsProperties_button;
  const header$ = SemanticsProperties_header;
  const textField$ = SemanticsProperties_textField;
  const readOnly$ = SemanticsProperties_readOnly;
  const focused$ = SemanticsProperties_focused;
  const inMutuallyExclusiveGroup$ = SemanticsProperties_inMutuallyExclusiveGroup;
  const hidden$ = SemanticsProperties_hidden;
  const obscured$ = SemanticsProperties_obscured;
  const multiline$ = SemanticsProperties_multiline;
  const scopesRoute$ = SemanticsProperties_scopesRoute;
  const namesRoute$ = SemanticsProperties_namesRoute;
  const image$ = SemanticsProperties_image;
  const liveRegion$ = SemanticsProperties_liveRegion;
  const maxValueLength$0 = SemanticsProperties_maxValueLength;
  const currentValueLength$0 = SemanticsProperties_currentValueLength;
  const label$1 = SemanticsProperties_label;
  const value$0 = SemanticsProperties_value;
  const increasedValue$0 = SemanticsProperties_increasedValue;
  const decreasedValue$0 = SemanticsProperties_decreasedValue;
  const hint$1 = SemanticsProperties_hint;
  const hintOverrides$ = SemanticsProperties_hintOverrides;
  const textDirection$0 = SemanticsProperties_textDirection;
  const sortKey$ = SemanticsProperties_sortKey;
  const onTap$ = SemanticsProperties_onTap;
  const onLongPress$ = SemanticsProperties_onLongPress;
  const onScrollLeft$ = SemanticsProperties_onScrollLeft;
  const onScrollRight$ = SemanticsProperties_onScrollRight;
  const onScrollUp$ = SemanticsProperties_onScrollUp;
  const onScrollDown$ = SemanticsProperties_onScrollDown;
  const onIncrease$ = SemanticsProperties_onIncrease;
  const onDecrease$ = SemanticsProperties_onDecrease;
  const onCopy$ = SemanticsProperties_onCopy;
  const onCut$ = SemanticsProperties_onCut;
  const onPaste$ = SemanticsProperties_onPaste;
  const onMoveCursorForwardByCharacter$ = SemanticsProperties_onMoveCursorForwardByCharacter;
  const onMoveCursorBackwardByCharacter$ = SemanticsProperties_onMoveCursorBackwardByCharacter;
  const onMoveCursorForwardByWord$ = SemanticsProperties_onMoveCursorForwardByWord;
  const onMoveCursorBackwardByWord$ = SemanticsProperties_onMoveCursorBackwardByWord;
  const onSetSelection$ = SemanticsProperties_onSetSelection;
  const onDidGainAccessibilityFocus$ = SemanticsProperties_onDidGainAccessibilityFocus;
  const onDidLoseAccessibilityFocus$ = SemanticsProperties_onDidLoseAccessibilityFocus;
  const onDismiss$ = SemanticsProperties_onDismiss;
  const customSemanticsActions$ = SemanticsProperties_customSemanticsActions;
  dart.setLibraryUri(semantics.SemanticsProperties, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsProperties, () => ({
    __proto__: dart.getFields(semantics.SemanticsProperties.__proto__),
    enabled: dart.finalFieldType(core.bool),
    checked: dart.finalFieldType(core.bool),
    toggled: dart.finalFieldType(core.bool),
    selected: dart.finalFieldType(core.bool),
    button: dart.finalFieldType(core.bool),
    header: dart.finalFieldType(core.bool),
    textField: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    focused: dart.finalFieldType(core.bool),
    inMutuallyExclusiveGroup: dart.finalFieldType(core.bool),
    hidden: dart.finalFieldType(core.bool),
    obscured: dart.finalFieldType(core.bool),
    multiline: dart.finalFieldType(core.bool),
    scopesRoute: dart.finalFieldType(core.bool),
    namesRoute: dart.finalFieldType(core.bool),
    image: dart.finalFieldType(core.bool),
    liveRegion: dart.finalFieldType(core.bool),
    maxValueLength: dart.finalFieldType(core.int),
    currentValueLength: dart.finalFieldType(core.int),
    label: dart.finalFieldType(core.String),
    value: dart.finalFieldType(core.String),
    increasedValue: dart.finalFieldType(core.String),
    decreasedValue: dart.finalFieldType(core.String),
    hint: dart.finalFieldType(core.String),
    hintOverrides: dart.finalFieldType(semantics.SemanticsHintOverrides),
    textDirection: dart.finalFieldType(ui.TextDirection),
    sortKey: dart.finalFieldType(semantics.SemanticsSortKey),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    onLongPress: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollLeft: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollRight: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollUp: dart.finalFieldType(dart.fnType(dart.void, [])),
    onScrollDown: dart.finalFieldType(dart.fnType(dart.void, [])),
    onIncrease: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDecrease: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCopy: dart.finalFieldType(dart.fnType(dart.void, [])),
    onCut: dart.finalFieldType(dart.fnType(dart.void, [])),
    onPaste: dart.finalFieldType(dart.fnType(dart.void, [])),
    onMoveCursorForwardByCharacter: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByCharacter: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorForwardByWord: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onMoveCursorBackwardByWord: dart.finalFieldType(dart.fnType(dart.void, [core.bool])),
    onSetSelection: dart.finalFieldType(dart.fnType(dart.void, [text_editing.TextSelection])),
    onDidGainAccessibilityFocus: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDidLoseAccessibilityFocus: dart.finalFieldType(dart.fnType(dart.void, [])),
    onDismiss: dart.finalFieldType(dart.fnType(dart.void, [])),
    customSemanticsActions: dart.finalFieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])))
  }));
  semantics._BoxEdge = class _BoxEdge extends core.Object {
    compareTo(other) {
      semantics._BoxEdge._check(other);
      return (dart.notNull(this.offset) - dart.notNull(other.offset))[$sign][$toInt]();
    }
  };
  (semantics._BoxEdge.new = function(opts) {
    let isLeadingEdge = opts && 'isLeadingEdge' in opts ? opts.isLeadingEdge : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this.isLeadingEdge = isLeadingEdge;
    this.offset = offset;
    this.node = node;
    if (!(isLeadingEdge != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2282, 15, "}) : assert(isLeading");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2283, 15, "     assert(of");
    if (!offset[$isFinite]) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2284, 15, "     assert(off");
    if (!(node != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2285, 15, "     assert(");
    ;
  }).prototype = semantics._BoxEdge.prototype;
  dart.addTypeTests(semantics._BoxEdge);
  semantics._BoxEdge[dart.implements] = () => [core.Comparable$(semantics._BoxEdge)];
  dart.setMethodSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getMethods(semantics._BoxEdge.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics._BoxEdge, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._BoxEdge, () => ({
    __proto__: dart.getFields(semantics._BoxEdge.__proto__),
    isLeadingEdge: dart.finalFieldType(core.bool),
    offset: dart.finalFieldType(core.double),
    node: dart.finalFieldType(semantics.SemanticsNode)
  }));
  dart.defineExtensionMethods(semantics._BoxEdge, ['compareTo']);
  semantics._SemanticsSortGroup = class _SemanticsSortGroup extends core.Comparable {
    compareTo(other) {
      semantics._SemanticsSortGroup._check(other);
      return (dart.notNull(this.startOffset) - dart.notNull(other.startOffset))[$sign][$toInt]();
    }
    sortedWithinVerticalGroup() {
      let edges = JSArrayOf_BoxEdge().of([]);
      for (let child of this.nodes) {
        let childRect = child.rect.deflate(0.1);
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dx, node: child}));
        edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dx, node: child}));
      }
      edges[$sort]();
      let horizontalGroups = JSArrayOf_SemanticsSortGroup().of([]);
      let group = null;
      let depth = 0;
      for (let edge of edges) {
        if (dart.test(edge.isLeadingEdge)) {
          depth = depth + 1;
          group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: this.textDirection}) : null;
          group.nodes[$add](edge.node);
        } else {
          depth = depth - 1;
        }
        if (depth === 0) {
          horizontalGroups[$add](group);
          group = null;
        }
      }
      horizontalGroups[$sort]();
      if (dart.equals(this.textDirection, ui.TextDirection.rtl)) {
        horizontalGroups = horizontalGroups[$reversed][$toList]();
      }
      return horizontalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinKnot(), _SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
    }
    sortedWithinKnot() {
      let t4;
      if (dart.notNull(this.nodes[$length]) <= 1) {
        return this.nodes;
      }
      let nodeMap = new (IdentityMapOfint$SemanticsNode()).new();
      let edges = new (IdentityMapOfint$int()).new();
      for (let node of this.nodes) {
        nodeMap[$_set](node.id, node);
        let center = semantics._pointInParentCoordinates(node, node.rect.center);
        for (let nextNode of this.nodes) {
          if (node == nextNode || edges[$_get](nextNode.id) == node.id) {
            continue;
          }
          let nextCenter = semantics._pointInParentCoordinates(nextNode, nextNode.rect.center);
          let centerDelta = nextCenter['-'](center);
          let direction = centerDelta.direction;
          let isLtrAndForward = dart.equals(this.textDirection, ui.TextDirection.ltr) && -3.141592653589793 / 4 < dart.notNull(direction) && dart.notNull(direction) < 3 * 3.141592653589793 / 4;
          let isRtlAndForward = dart.equals(this.textDirection, ui.TextDirection.rtl) && (dart.notNull(direction) < -3 * 3.141592653589793 / 4 || dart.notNull(direction) > 3 * 3.141592653589793 / 4);
          if (isLtrAndForward || isRtlAndForward) {
            edges[$_set](node.id, nextNode.id);
          }
        }
      }
      let sortedIds = JSArrayOfint().of([]);
      let visitedIds = LinkedHashSetOfint().new();
      let startNodes = (t4 = this.nodes[$toList](), t4[$sort](dart.fn((a, b) => {
        let aTopLeft = semantics._pointInParentCoordinates(a, a.rect.topLeft);
        let bTopLeft = semantics._pointInParentCoordinates(b, b.rect.topLeft);
        let verticalDiff = aTopLeft.dy[$compareTo](bTopLeft.dy);
        if (verticalDiff !== 0) {
          return -verticalDiff;
        }
        return -aTopLeft.dx[$compareTo](bTopLeft.dx);
      }, SemanticsNodeAndSemanticsNodeToint())), t4);
      function search(id) {
        if (dart.test(visitedIds.contains(id))) {
          return;
        }
        visitedIds.add(id);
        if (dart.test(edges[$containsKey](id))) {
          search(edges[$_get](id));
        }
        sortedIds[$add](id);
      }
      dart.fn(search, intTovoid());
      startNodes[$map](core.int, dart.fn(node => node.id, SemanticsNodeToint()))[$forEach](search);
      return sortedIds[$map](semantics.SemanticsNode, dart.fn(id => nodeMap[$_get](id), intToSemanticsNode()))[$toList]()[$reversed][$toList]();
    }
  };
  (semantics._SemanticsSortGroup.new = function(opts) {
    let startOffset = opts && 'startOffset' in opts ? opts.startOffset : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    this.nodes = JSArrayOfSemanticsNode().of([]);
    this.startOffset = startOffset;
    this.textDirection = textDirection;
    if (!(startOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2319, 15, "}) : assert(startOf");
    ;
  }).prototype = semantics._SemanticsSortGroup.prototype;
  dart.addTypeTests(semantics._SemanticsSortGroup);
  dart.setMethodSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getMethods(semantics._SemanticsSortGroup.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object]),
    sortedWithinVerticalGroup: dart.fnType(core.List$(semantics.SemanticsNode), []),
    sortedWithinKnot: dart.fnType(core.List$(semantics.SemanticsNode), [])
  }));
  dart.setLibraryUri(semantics._SemanticsSortGroup, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._SemanticsSortGroup, () => ({
    __proto__: dart.getFields(semantics._SemanticsSortGroup.__proto__),
    startOffset: dart.finalFieldType(core.double),
    textDirection: dart.finalFieldType(ui.TextDirection),
    nodes: dart.finalFieldType(core.List$(semantics.SemanticsNode))
  }));
  dart.defineExtensionMethods(semantics._SemanticsSortGroup, ['compareTo']);
  semantics._TraversalSortNode = class _TraversalSortNode extends core.Object {
    compareTo(other) {
      let t4;
      semantics._TraversalSortNode._check(other);
      if (this.sortKey == null || (t4 = other, t4 == null ? null : t4.sortKey) == null) {
        return dart.notNull(this.position) - dart.notNull(other.position);
      }
      return this.sortKey.compareTo(other.sortKey);
    }
  };
  (semantics._TraversalSortNode.new = function(opts) {
    let node = opts && 'node' in opts ? opts.node : null;
    let sortKey = opts && 'sortKey' in opts ? opts.sortKey : null;
    let position = opts && 'position' in opts ? opts.position : null;
    this.node = node;
    this.sortKey = sortKey;
    this.position = position;
    if (!(node != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2543, 14, "   : assert(");
    if (!(position != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2544, 14, "     assert(posi");
    ;
  }).prototype = semantics._TraversalSortNode.prototype;
  dart.addTypeTests(semantics._TraversalSortNode);
  semantics._TraversalSortNode[dart.implements] = () => [core.Comparable$(semantics._TraversalSortNode)];
  dart.setMethodSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getMethods(semantics._TraversalSortNode.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics._TraversalSortNode, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics._TraversalSortNode, () => ({
    __proto__: dart.getFields(semantics._TraversalSortNode.__proto__),
    node: dart.finalFieldType(semantics.SemanticsNode),
    sortKey: dart.finalFieldType(semantics.SemanticsSortKey),
    position: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(semantics._TraversalSortNode, ['compareTo']);
  const _getSemanticsActionHandlerForId = dart.privateName(semantics, "_getSemanticsActionHandlerForId");
  const _getSemanticsActionHandlerForPosition = dart.privateName(semantics, "_getSemanticsActionHandlerForPosition");
  semantics.SemanticsOwner = class SemanticsOwner extends change_notifier.ChangeNotifier {
    get rootSemanticsNode() {
      return this[_nodes][$_get](0);
    }
    dispose() {
      this[_dirtyNodes].clear();
      this[_nodes][$clear]();
      this[_detachedNodes].clear();
      super.dispose();
    }
    sendSemanticsUpdate() {
      let t4, t4$, t4$0;
      if (dart.test(this[_dirtyNodes][$isEmpty])) return;
      let customSemanticsActionIds = LinkedHashSetOfint().new();
      let visitedNodes = JSArrayOfSemanticsNode().of([]);
      while (dart.test(this[_dirtyNodes][$isNotEmpty])) {
        let localDirtyNodes = this[_dirtyNodes][$where](dart.fn(node => !dart.test(this[_detachedNodes].contains(node)), SemanticsNodeTobool()))[$toList]();
        this[_dirtyNodes].clear();
        this[_detachedNodes].clear();
        localDirtyNodes[$sort](dart.fn((a, b) => dart.notNull(a.depth) - dart.notNull(b.depth), SemanticsNodeAndSemanticsNodeToint()));
        visitedNodes[$addAll](localDirtyNodes);
        for (let node of localDirtyNodes) {
          if (!dart.test(node[_dirty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2606, 16, "     assert");
          if (!(node.parent == null || !dart.test(node.parent.isPartOfNodeMerging) || dart.test(node.isMergedIntoParent))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2607, 16, "     assert(node.parent == null || !node.parent.isPartOfNodeMerging || node.isMerg");
          if (dart.test(node.isPartOfNodeMerging)) {
            if (!(dart.test(node.mergeAllDescendantsIntoThisNode) || node.parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2609, 18, "     assert(node.mergeAllDescendantsIntoThisNode || node.pa");
            if (node.parent != null && dart.test(node.parent.isPartOfNodeMerging)) node.parent[_markDirty]();
          }
        }
      }
      visitedNodes[$sort](dart.fn((a, b) => dart.notNull(a.depth) - dart.notNull(b.depth), SemanticsNodeAndSemanticsNodeToint()));
      let builder = new ui.SemanticsUpdateBuilder.new();
      for (let node of visitedNodes) {
        if (!!dart.equals((t4 = node.parent, t4 == null ? null : t4[_dirty]), true)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2619, 14, "     assert(node.parent?._d");
        if (dart.test(node[_dirty]) && dart.test(node.attached)) node[_addToUpdate](builder, customSemanticsActionIds);
      }
      this[_dirtyNodes].clear();
      for (let actionId of customSemanticsActionIds) {
        let action = semantics.CustomSemanticsAction.getAction(actionId);
        builder.updateCustomAction({id: actionId, label: action.label, hint: action.hint, overrideId: (t4$0 = (t4$ = action.action, t4$ == null ? null : t4$.index), t4$0 == null ? -1 : t4$0)});
      }
      binding$.SemanticsBinding.instance.window.updateSemantics(builder.build());
      this.notifyListeners();
    }
    [_getSemanticsActionHandlerForId](id, action) {
      let result = this[_nodes][$_get](id);
      if (result != null && dart.test(result.isPartOfNodeMerging) && !dart.test(result[_canPerformAction](action))) {
        result[_visitDescendants](dart.fn(node => {
          if (dart.test(node[_canPerformAction](action))) {
            result = node;
            return false;
          }
          return true;
        }, SemanticsNodeTobool()));
      }
      if (result == null || !dart.test(result[_canPerformAction](action))) return null;
      return result[_actions][$_get](action);
    }
    performAction(id, action, args) {
      if (args === void 0) args = null;
      if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2666, 12, "\n    assert(ac");
      let handler = this[_getSemanticsActionHandlerForId](id, action);
      if (handler != null) {
        handler(args);
        return;
      }
      if (dart.equals(action, ui.SemanticsAction.showOnScreen) && this[_nodes][$_get](id)[_showOnScreen] != null) this[_nodes][$_get](id)[_showOnScreen]();
    }
    [_getSemanticsActionHandlerForPosition](node, position, action) {
      let t4;
      if (node.transform != null) {
        let inverse = vector_math_64.Matrix4.identity();
        if (inverse.copyInverse(node.transform) === 0.0) return null;
        position = matrix_utils.MatrixUtils.transformPoint(inverse, position);
      }
      if (!dart.test(node.rect.contains(position))) return null;
      if (dart.test(node.mergeAllDescendantsIntoThisNode)) {
        let result = null;
        node[_visitDescendants](dart.fn(child => {
          if (dart.test(child[_canPerformAction](action))) {
            result = child;
            return false;
          }
          return true;
        }, SemanticsNodeTobool()));
        return (t4 = result, t4 == null ? null : t4[_actions])[$_get](action);
      }
      if (dart.test(node.hasChildren)) {
        for (let child of node[_children][$reversed]) {
          let handler = this[_getSemanticsActionHandlerForPosition](child, position, action);
          if (handler != null) return handler;
        }
      }
      return node[_actions][$_get](action);
    }
    performActionAt(position, action, args) {
      if (args === void 0) args = null;
      if (!(action != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2716, 12, "\n    assert(ac");
      let node = this.rootSemanticsNode;
      if (node == null) return;
      let handler = this[_getSemanticsActionHandlerForPosition](node, position, action);
      if (handler != null) handler(args);
    }
    toString() {
      return diagnostics.describeIdentity(this);
    }
  };
  (semantics.SemanticsOwner.new = function() {
    this[_dirtyNodes] = LinkedHashSetOfSemanticsNode().new();
    this[_nodes] = new (IdentityMapOfint$SemanticsNode()).new();
    this[_detachedNodes] = LinkedHashSetOfSemanticsNode().new();
    this[_actions] = new (IdentityMapOfint$CustomSemanticsAction()).new();
    semantics.SemanticsOwner.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsOwner.prototype;
  dart.addTypeTests(semantics.SemanticsOwner);
  dart.setMethodSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getMethods(semantics.SemanticsOwner.__proto__),
    sendSemanticsUpdate: dart.fnType(dart.void, []),
    [_getSemanticsActionHandlerForId]: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [core.int, ui.SemanticsAction]),
    performAction: dart.fnType(dart.void, [core.int, ui.SemanticsAction], [dart.dynamic]),
    [_getSemanticsActionHandlerForPosition]: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [semantics.SemanticsNode, ui.Offset, ui.SemanticsAction]),
    performActionAt: dart.fnType(dart.void, [ui.Offset, ui.SemanticsAction], [dart.dynamic])
  }));
  dart.setGetterSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getGetters(semantics.SemanticsOwner.__proto__),
    rootSemanticsNode: semantics.SemanticsNode
  }));
  dart.setLibraryUri(semantics.SemanticsOwner, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsOwner, () => ({
    __proto__: dart.getFields(semantics.SemanticsOwner.__proto__),
    [_dirtyNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode)),
    [_nodes]: dart.finalFieldType(core.Map$(core.int, semantics.SemanticsNode)),
    [_detachedNodes]: dart.finalFieldType(core.Set$(semantics.SemanticsNode)),
    [_actions]: dart.finalFieldType(core.Map$(core.int, semantics.CustomSemanticsAction))
  }));
  dart.defineExtensionMethods(semantics.SemanticsOwner, ['toString']);
  const _isSemanticBoundary = dart.privateName(semantics, "_isSemanticBoundary");
  const _hasBeenAnnotated = dart.privateName(semantics, "_hasBeenAnnotated");
  const _onTap = dart.privateName(semantics, "_onTap");
  const _onLongPress = dart.privateName(semantics, "_onLongPress");
  const _onScrollLeft = dart.privateName(semantics, "_onScrollLeft");
  const _onDismiss = dart.privateName(semantics, "_onDismiss");
  const _onScrollRight = dart.privateName(semantics, "_onScrollRight");
  const _onScrollUp = dart.privateName(semantics, "_onScrollUp");
  const _onScrollDown = dart.privateName(semantics, "_onScrollDown");
  const _onIncrease = dart.privateName(semantics, "_onIncrease");
  const _onDecrease = dart.privateName(semantics, "_onDecrease");
  const _onCopy = dart.privateName(semantics, "_onCopy");
  const _onCut = dart.privateName(semantics, "_onCut");
  const _onPaste = dart.privateName(semantics, "_onPaste");
  const _onShowOnScreen = dart.privateName(semantics, "_onShowOnScreen");
  const _onMoveCursorForwardByCharacter = dart.privateName(semantics, "_onMoveCursorForwardByCharacter");
  const _onMoveCursorBackwardByCharacter = dart.privateName(semantics, "_onMoveCursorBackwardByCharacter");
  const _onMoveCursorForwardByWord = dart.privateName(semantics, "_onMoveCursorForwardByWord");
  const _onMoveCursorBackwardByWord = dart.privateName(semantics, "_onMoveCursorBackwardByWord");
  const _onSetSelection = dart.privateName(semantics, "_onSetSelection");
  const _onDidGainAccessibilityFocus = dart.privateName(semantics, "_onDidGainAccessibilityFocus");
  const _onDidLoseAccessibilityFocus = dart.privateName(semantics, "_onDidLoseAccessibilityFocus");
  const _indexInParent = dart.privateName(semantics, "_indexInParent");
  const _isMergingSemanticsOfDescendants = dart.privateName(semantics, "_isMergingSemanticsOfDescendants");
  const _tagsForChildren = dart.privateName(semantics, "_tagsForChildren");
  const _addAction = dart.privateName(semantics, "_addAction");
  const _addArgumentlessAction = dart.privateName(semantics, "_addArgumentlessAction");
  const _onCustomSemanticsAction = dart.privateName(semantics, "_onCustomSemanticsAction");
  const _hasFlag = dart.privateName(semantics, "_hasFlag");
  const _setFlag = dart.privateName(semantics, "_setFlag");
  const SemanticsConfiguration_explicitChildNodes = dart.privateName(semantics, "SemanticsConfiguration.explicitChildNodes");
  const SemanticsConfiguration_isBlockingSemanticsOfPreviouslyPaintedNodes = dart.privateName(semantics, "SemanticsConfiguration.isBlockingSemanticsOfPreviouslyPaintedNodes");
  semantics.SemanticsConfiguration = class SemanticsConfiguration extends core.Object {
    get explicitChildNodes() {
      return this[explicitChildNodes];
    }
    set explicitChildNodes(value) {
      this[explicitChildNodes] = value;
    }
    get isBlockingSemanticsOfPreviouslyPaintedNodes() {
      return this[isBlockingSemanticsOfPreviouslyPaintedNodes];
    }
    set isBlockingSemanticsOfPreviouslyPaintedNodes(value) {
      this[isBlockingSemanticsOfPreviouslyPaintedNodes] = value;
    }
    get isSemanticBoundary() {
      return this[_isSemanticBoundary];
    }
    set isSemanticBoundary(value) {
      if (!(!dart.test(this.isMergingSemanticsOfDescendants) || dart.test(value))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2754, 12, "\n    assert(!isMergingSemanticsOfDescenda");
      this[_isSemanticBoundary] = value;
    }
    get hasBeenAnnotated() {
      return this[_hasBeenAnnotated];
    }
    [_addAction](action, handler) {
      if (!(handler != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2816, 12, "\n    assert(han");
      this[_actions][$_set](action, handler);
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(action.index)) >>> 0;
      this[_hasBeenAnnotated] = true;
    }
    [_addArgumentlessAction](action, handler) {
      if (!(handler != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2828, 12, "\n    assert(han");
      this[_addAction](action, dart.fn(args => {
        if (!(args == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2830, 14, "     assert(");
        handler();
      }, dynamicToNull()));
    }
    get onTap() {
      return this[_onTap];
    }
    set onTap(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.tap, value);
      this[_onTap] = value;
    }
    get onLongPress() {
      return this[_onLongPress];
    }
    set onLongPress(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.longPress, value);
      this[_onLongPress] = value;
    }
    get onScrollLeft() {
      return this[_onScrollLeft];
    }
    set onScrollLeft(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollLeft, value);
      this[_onScrollLeft] = value;
    }
    get onDismiss() {
      return this[_onDismiss];
    }
    set onDismiss(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.dismiss, value);
      this[_onDismiss] = value;
    }
    get onScrollRight() {
      return this[_onScrollRight];
    }
    set onScrollRight(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollRight, value);
      this[_onScrollRight] = value;
    }
    get onScrollUp() {
      return this[_onScrollUp];
    }
    set onScrollUp(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollUp, value);
      this[_onScrollUp] = value;
    }
    get onScrollDown() {
      return this[_onScrollDown];
    }
    set onScrollDown(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.scrollDown, value);
      this[_onScrollDown] = value;
    }
    get onIncrease() {
      return this[_onIncrease];
    }
    set onIncrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.increase, value);
      this[_onIncrease] = value;
    }
    get onDecrease() {
      return this[_onDecrease];
    }
    set onDecrease(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.decrease, value);
      this[_onDecrease] = value;
    }
    get onCopy() {
      return this[_onCopy];
    }
    set onCopy(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.copy, value);
      this[_onCopy] = value;
    }
    get onCut() {
      return this[_onCut];
    }
    set onCut(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.cut, value);
      this[_onCut] = value;
    }
    get onPaste() {
      return this[_onPaste];
    }
    set onPaste(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.paste, value);
      this[_onPaste] = value;
    }
    get onShowOnScreen() {
      return this[_onShowOnScreen];
    }
    set onShowOnScreen(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.showOnScreen, value);
      this[_onShowOnScreen] = value;
    }
    get onMoveCursorForwardByCharacter() {
      return this[_onMoveCursorForwardByCharacter];
    }
    set onMoveCursorForwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3065, 12, "\n    assert(v");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByCharacter, dart.fn(args => {
        let extentSelection = core.bool._check(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3068, 14, "     assert(extentSelec");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByCharacter() {
      return this[_onMoveCursorBackwardByCharacter];
    }
    set onMoveCursorBackwardByCharacter(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3084, 12, "\n    assert(v");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByCharacter, dart.fn(args => {
        let extentSelection = core.bool._check(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3087, 14, "     assert(extentSelec");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onMoveCursorForwardByWord() {
      return this[_onMoveCursorForwardByWord];
    }
    set onMoveCursorForwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3103, 12, "\n    assert(v");
      this[_addAction](ui.SemanticsAction.moveCursorForwardByWord, dart.fn(args => {
        let extentSelection = core.bool._check(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3106, 14, "     assert(extentSelec");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorForwardByCharacter] = value;
    }
    get onMoveCursorBackwardByWord() {
      return this[_onMoveCursorBackwardByWord];
    }
    set onMoveCursorBackwardByWord(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3122, 12, "\n    assert(v");
      this[_addAction](ui.SemanticsAction.moveCursorBackwardByWord, dart.fn(args => {
        let extentSelection = core.bool._check(args);
        if (!(extentSelection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3125, 14, "     assert(extentSelec");
        value(extentSelection);
      }, dynamicToNull()));
      this[_onMoveCursorBackwardByCharacter] = value;
    }
    get onSetSelection() {
      return this[_onSetSelection];
    }
    set onSetSelection(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3141, 12, "\n    assert(v");
      this[_addAction](ui.SemanticsAction.setSelection, dart.fn(args => {
        if (!(args != null && core.Map.is(args))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3143, 14, "     assert(args != null &&");
        let selection = MapOfString$int()._check(dart.dgsend(args, [core.String, core.int], 'cast', []));
        if (!(selection != null && selection[$_get]("base") != null && selection[$_get]("extent") != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3145, 14, "     assert(selection != null && selection['base'] != null && selection['exte");
        value(new text_editing.TextSelection.new({baseOffset: selection[$_get]("base"), extentOffset: selection[$_get]("extent")}));
      }, dynamicToNull()));
      this[_onSetSelection] = value;
    }
    get onDidGainAccessibilityFocus() {
      return this[_onDidGainAccessibilityFocus];
    }
    set onDidGainAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didGainAccessibilityFocus, value);
      this[_onDidGainAccessibilityFocus] = value;
    }
    get onDidLoseAccessibilityFocus() {
      return this[_onDidLoseAccessibilityFocus];
    }
    set onDidLoseAccessibilityFocus(value) {
      this[_addArgumentlessAction](ui.SemanticsAction.didLoseAccessibilityFocus, value);
      this[_onDidLoseAccessibilityFocus] = value;
    }
    getActionHandler(action) {
      return this[_actions][$_get](action);
    }
    get sortKey() {
      return this[_sortKey];
    }
    set sortKey(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3224, 12, "\n    assert(v");
      this[_sortKey] = value;
      this[_hasBeenAnnotated] = true;
    }
    get indexInParent() {
      return this[_indexInParent];
    }
    set indexInParent(value) {
      this[_indexInParent] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollChildCount() {
      return this[_scrollChildCount];
    }
    set scrollChildCount(value) {
      if (value == this.scrollChildCount) return;
      this[_scrollChildCount] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollIndex() {
      return this[_scrollIndex];
    }
    set scrollIndex(value) {
      if (value == this.scrollIndex) return;
      this[_scrollIndex] = value;
      this[_hasBeenAnnotated] = true;
    }
    get platformViewId() {
      return this[_platformViewId];
    }
    set platformViewId(value) {
      if (value == this.platformViewId) return;
      this[_platformViewId] = value;
      this[_hasBeenAnnotated] = true;
    }
    get maxValueLength() {
      return this[_maxValueLength];
    }
    set maxValueLength(value) {
      if (value == this.maxValueLength) return;
      this[_maxValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get currentValueLength() {
      return this[_currentValueLength];
    }
    set currentValueLength(value) {
      if (value == this.currentValueLength) return;
      this[_currentValueLength] = value;
      this[_hasBeenAnnotated] = true;
    }
    get isMergingSemanticsOfDescendants() {
      return this[_isMergingSemanticsOfDescendants];
    }
    set isMergingSemanticsOfDescendants(value) {
      if (!dart.test(this.isSemanticBoundary)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3322, 12, "\n    assert(isSema");
      this[_isMergingSemanticsOfDescendants] = value;
      this[_hasBeenAnnotated] = true;
    }
    get customSemanticsActions() {
      return this[_customSemanticsActions];
    }
    set customSemanticsActions(value) {
      this[_hasBeenAnnotated] = true;
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(ui.SemanticsAction.customAction.index)) >>> 0;
      this[_customSemanticsActions] = value;
      this[_actions][$_set](ui.SemanticsAction.customAction, dart.bind(this, _onCustomSemanticsAction));
    }
    [_onCustomSemanticsAction](args) {
      let action = semantics.CustomSemanticsAction.getAction(core.int._check(args));
      if (action == null) return;
      let callback = this[_customSemanticsActions][$_get](action);
      if (callback != null) callback();
    }
    get label() {
      return this[_label];
    }
    set label(label) {
      if (!(label != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3362, 12, "\n    assert(l");
      this[_label] = label;
      this[_hasBeenAnnotated] = true;
    }
    get value() {
      return this[_value];
    }
    set value(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3385, 12, "\n    assert(v");
      this[_value] = value;
      this[_hasBeenAnnotated] = true;
    }
    get decreasedValue() {
      return this[_decreasedValue];
    }
    set decreasedValue(decreasedValue) {
      if (!(decreasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3400, 12, "\n    assert(decreasedV");
      this[_decreasedValue] = decreasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get increasedValue() {
      return this[_increasedValue];
    }
    set increasedValue(increasedValue) {
      if (!(increasedValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3415, 12, "\n    assert(increasedV");
      this[_increasedValue] = increasedValue;
      this[_hasBeenAnnotated] = true;
    }
    get hint() {
      return this[_hint];
    }
    set hint(hint) {
      if (!(hint != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3431, 12, "\n    assert(");
      this[_hint] = hint;
      this[_hasBeenAnnotated] = true;
    }
    get hintOverrides() {
      return this[_hintOverrides];
    }
    set hintOverrides(value) {
      if (value == null) return;
      this[_hintOverrides] = value;
      this[_hasBeenAnnotated] = true;
    }
    get elevation() {
      return this[_elevation];
    }
    set elevation(value) {
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3452, 12, "\n    assert(value != null && ");
      if (value == this[_elevation]) {
        return;
      }
      this[_elevation] = value;
      this[_hasBeenAnnotated] = true;
    }
    get thickness() {
      return this[_thickness];
    }
    set thickness(value) {
      if (!(value != null && dart.notNull(value) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3469, 12, "\n    assert(value != null && ");
      if (value == this[_thickness]) {
        return;
      }
      this[_thickness] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scopesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.scopesRoute);
    }
    set scopesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.scopesRoute, value);
    }
    get namesRoute() {
      return this[_hasFlag](ui.SemanticsFlag.namesRoute);
    }
    set namesRoute(value) {
      this[_setFlag](ui.SemanticsFlag.namesRoute, value);
    }
    get isImage() {
      return this[_hasFlag](ui.SemanticsFlag.isImage);
    }
    set isImage(value) {
      this[_setFlag](ui.SemanticsFlag.isImage, value);
    }
    get liveRegion() {
      return this[_hasFlag](ui.SemanticsFlag.isLiveRegion);
    }
    set liveRegion(value) {
      this[_setFlag](ui.SemanticsFlag.isLiveRegion, value);
    }
    get textDirection() {
      return this[_textDirection];
    }
    set textDirection(textDirection) {
      this[_textDirection] = textDirection;
      this[_hasBeenAnnotated] = true;
    }
    get isSelected() {
      return this[_hasFlag](ui.SemanticsFlag.isSelected);
    }
    set isSelected(value) {
      this[_setFlag](ui.SemanticsFlag.isSelected, value);
    }
    get isEnabled() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasEnabledState)) ? this[_hasFlag](ui.SemanticsFlag.isEnabled) : null;
    }
    set isEnabled(value) {
      this[_setFlag](ui.SemanticsFlag.hasEnabledState, true);
      this[_setFlag](ui.SemanticsFlag.isEnabled, value);
    }
    get isChecked() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasCheckedState)) ? this[_hasFlag](ui.SemanticsFlag.isChecked) : null;
    }
    set isChecked(value) {
      this[_setFlag](ui.SemanticsFlag.hasCheckedState, true);
      this[_setFlag](ui.SemanticsFlag.isChecked, value);
    }
    get isToggled() {
      return dart.test(this[_hasFlag](ui.SemanticsFlag.hasToggledState)) ? this[_hasFlag](ui.SemanticsFlag.isToggled) : null;
    }
    set isToggled(value) {
      this[_setFlag](ui.SemanticsFlag.hasToggledState, true);
      this[_setFlag](ui.SemanticsFlag.isToggled, value);
    }
    get isInMutuallyExclusiveGroup() {
      return this[_hasFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup);
    }
    set isInMutuallyExclusiveGroup(value) {
      this[_setFlag](ui.SemanticsFlag.isInMutuallyExclusiveGroup, value);
    }
    get isFocused() {
      return this[_hasFlag](ui.SemanticsFlag.isFocused);
    }
    set isFocused(value) {
      this[_setFlag](ui.SemanticsFlag.isFocused, value);
    }
    get isButton() {
      return this[_hasFlag](ui.SemanticsFlag.isButton);
    }
    set isButton(value) {
      this[_setFlag](ui.SemanticsFlag.isButton, value);
    }
    get isHeader() {
      return this[_hasFlag](ui.SemanticsFlag.isHeader);
    }
    set isHeader(value) {
      this[_setFlag](ui.SemanticsFlag.isHeader, value);
    }
    get isHidden() {
      return this[_hasFlag](ui.SemanticsFlag.isHidden);
    }
    set isHidden(value) {
      this[_setFlag](ui.SemanticsFlag.isHidden, value);
    }
    get isTextField() {
      return this[_hasFlag](ui.SemanticsFlag.isTextField);
    }
    set isTextField(value) {
      this[_setFlag](ui.SemanticsFlag.isTextField, value);
    }
    get isReadOnly() {
      return this[_hasFlag](ui.SemanticsFlag.isReadOnly);
    }
    set isReadOnly(value) {
      this[_setFlag](ui.SemanticsFlag.isReadOnly, value);
    }
    get isObscured() {
      return this[_hasFlag](ui.SemanticsFlag.isObscured);
    }
    set isObscured(value) {
      this[_setFlag](ui.SemanticsFlag.isObscured, value);
    }
    get isMultiline() {
      return this[_hasFlag](ui.SemanticsFlag.isMultiline);
    }
    set isMultiline(value) {
      this[_setFlag](ui.SemanticsFlag.isMultiline, value);
    }
    get hasImplicitScrolling() {
      return this[_hasFlag](ui.SemanticsFlag.hasImplicitScrolling);
    }
    set hasImplicitScrolling(value) {
      this[_setFlag](ui.SemanticsFlag.hasImplicitScrolling, value);
    }
    get textSelection() {
      return this[_textSelection];
    }
    set textSelection(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3695, 12, "\n    assert(v");
      this[_textSelection] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollPosition() {
      return this[_scrollPosition];
    }
    set scrollPosition(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3713, 12, "\n    assert(v");
      this[_scrollPosition] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMax() {
      return this[_scrollExtentMax];
    }
    set scrollExtentMax(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3729, 12, "\n    assert(v");
      this[_scrollExtentMax] = value;
      this[_hasBeenAnnotated] = true;
    }
    get scrollExtentMin() {
      return this[_scrollExtentMin];
    }
    set scrollExtentMin(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3745, 12, "\n    assert(v");
      this[_scrollExtentMin] = value;
      this[_hasBeenAnnotated] = true;
    }
    get tagsForChildren() {
      return this[_tagsForChildren];
    }
    addTagForChildren(tag) {
      this[_tagsForChildren] == null ? this[_tagsForChildren] = LinkedHashSetOfSemanticsTag().new() : null;
      this[_tagsForChildren].add(tag);
    }
    [_setFlag](flag, value) {
      if (dart.test(value)) {
        this[_flags] = (dart.notNull(this[_flags]) | dart.notNull(flag.index)) >>> 0;
      } else {
        this[_flags] = (dart.notNull(this[_flags]) & ~dart.notNull(flag.index) >>> 0) >>> 0;
      }
      this[_hasBeenAnnotated] = true;
    }
    [_hasFlag](flag) {
      return (dart.notNull(this[_flags]) & dart.notNull(flag.index)) !== 0;
    }
    isCompatibleWith(other) {
      if (other == null || !dart.test(other.hasBeenAnnotated) || !dart.test(this.hasBeenAnnotated)) return true;
      if ((dart.notNull(this[_actionsAsBits]) & dart.notNull(other[_actionsAsBits])) !== 0) return false;
      if ((dart.notNull(this[_flags]) & dart.notNull(other[_flags])) !== 0) return false;
      if (this[_platformViewId] != null && other[_platformViewId] != null) {
        return false;
      }
      if (this[_maxValueLength] != null && other[_maxValueLength] != null) {
        return false;
      }
      if (this[_currentValueLength] != null && other[_currentValueLength] != null) {
        return false;
      }
      if (this[_value] != null && this[_value][$isNotEmpty] && other[_value] != null && other[_value][$isNotEmpty]) return false;
      return true;
    }
    absorb(child) {
      if (!!dart.test(this.explicitChildNodes)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 3836, 12, "\n    assert(!explic");
      if (!dart.test(child.hasBeenAnnotated)) return;
      this[_actions][$addAll](child[_actions]);
      this[_customSemanticsActions][$addAll](child[_customSemanticsActions]);
      this[_actionsAsBits] = (dart.notNull(this[_actionsAsBits]) | dart.notNull(child[_actionsAsBits])) >>> 0;
      this[_flags] = (dart.notNull(this[_flags]) | dart.notNull(child[_flags])) >>> 0;
      this[_textSelection] == null ? this[_textSelection] = child[_textSelection] : null;
      this[_scrollPosition] == null ? this[_scrollPosition] = child[_scrollPosition] : null;
      this[_scrollExtentMax] == null ? this[_scrollExtentMax] = child[_scrollExtentMax] : null;
      this[_scrollExtentMin] == null ? this[_scrollExtentMin] = child[_scrollExtentMin] : null;
      this[_hintOverrides] == null ? this[_hintOverrides] = child[_hintOverrides] : null;
      this[_indexInParent] == null ? this[_indexInParent] = child.indexInParent : null;
      this[_scrollIndex] == null ? this[_scrollIndex] = child[_scrollIndex] : null;
      this[_scrollChildCount] == null ? this[_scrollChildCount] = child[_scrollChildCount] : null;
      this[_platformViewId] == null ? this[_platformViewId] = child[_platformViewId] : null;
      this[_maxValueLength] == null ? this[_maxValueLength] = child[_maxValueLength] : null;
      this[_currentValueLength] == null ? this[_currentValueLength] = child[_currentValueLength] : null;
      this.textDirection == null ? this.textDirection = child.textDirection : null;
      this[_sortKey] == null ? this[_sortKey] = child[_sortKey] : null;
      this[_label] = semantics._concatStrings({thisString: this[_label], thisTextDirection: this.textDirection, otherString: child[_label], otherTextDirection: child.textDirection});
      if (this[_decreasedValue] === "" || this[_decreasedValue] == null) this[_decreasedValue] = child[_decreasedValue];
      if (this[_value] === "" || this[_value] == null) this[_value] = child[_value];
      if (this[_increasedValue] === "" || this[_increasedValue] == null) this[_increasedValue] = child[_increasedValue];
      this[_hint] = semantics._concatStrings({thisString: this[_hint], thisTextDirection: this.textDirection, otherString: child[_hint], otherTextDirection: child.textDirection});
      this[_thickness] = math.max(core.double, this[_thickness], dart.notNull(child[_thickness]) + dart.notNull(child[_elevation]));
      this[_hasBeenAnnotated] = dart.test(this[_hasBeenAnnotated]) || dart.test(child[_hasBeenAnnotated]);
    }
    copy() {
      let t4;
      t4 = new semantics.SemanticsConfiguration.new();
      t4[_isSemanticBoundary] = this[_isSemanticBoundary];
      t4.explicitChildNodes = this.explicitChildNodes;
      t4.isBlockingSemanticsOfPreviouslyPaintedNodes = this.isBlockingSemanticsOfPreviouslyPaintedNodes;
      t4[_hasBeenAnnotated] = this[_hasBeenAnnotated];
      t4[_isMergingSemanticsOfDescendants] = this[_isMergingSemanticsOfDescendants];
      t4[_textDirection] = this[_textDirection];
      t4[_sortKey] = this[_sortKey];
      t4[_label] = this[_label];
      t4[_increasedValue] = this[_increasedValue];
      t4[_value] = this[_value];
      t4[_decreasedValue] = this[_decreasedValue];
      t4[_hint] = this[_hint];
      t4[_hintOverrides] = this[_hintOverrides];
      t4[_elevation] = this[_elevation];
      t4[_thickness] = this[_thickness];
      t4[_flags] = this[_flags];
      t4[_tagsForChildren] = this[_tagsForChildren];
      t4[_textSelection] = this[_textSelection];
      t4[_scrollPosition] = this[_scrollPosition];
      t4[_scrollExtentMax] = this[_scrollExtentMax];
      t4[_scrollExtentMin] = this[_scrollExtentMin];
      t4[_actionsAsBits] = this[_actionsAsBits];
      t4[_indexInParent] = this.indexInParent;
      t4[_scrollIndex] = this[_scrollIndex];
      t4[_scrollChildCount] = this[_scrollChildCount];
      t4[_platformViewId] = this[_platformViewId];
      t4[_maxValueLength] = this[_maxValueLength];
      t4[_currentValueLength] = this[_currentValueLength];
      t4[_actions][$addAll](this[_actions]);
      t4[_customSemanticsActions][$addAll](this[_customSemanticsActions]);
      return t4;
    }
  };
  (semantics.SemanticsConfiguration.new = function() {
    this[_isSemanticBoundary] = false;
    this[explicitChildNodes] = false;
    this[isBlockingSemanticsOfPreviouslyPaintedNodes] = false;
    this[_hasBeenAnnotated] = false;
    this[_actions] = new (LinkedMapOfSemanticsAction$dynamicTovoid()).new();
    this[_actionsAsBits] = 0;
    this[_onTap] = null;
    this[_onLongPress] = null;
    this[_onScrollLeft] = null;
    this[_onDismiss] = null;
    this[_onScrollRight] = null;
    this[_onScrollUp] = null;
    this[_onScrollDown] = null;
    this[_onIncrease] = null;
    this[_onDecrease] = null;
    this[_onCopy] = null;
    this[_onCut] = null;
    this[_onPaste] = null;
    this[_onShowOnScreen] = null;
    this[_onMoveCursorForwardByCharacter] = null;
    this[_onMoveCursorBackwardByCharacter] = null;
    this[_onMoveCursorForwardByWord] = null;
    this[_onMoveCursorBackwardByWord] = null;
    this[_onSetSelection] = null;
    this[_onDidGainAccessibilityFocus] = null;
    this[_onDidLoseAccessibilityFocus] = null;
    this[_sortKey] = null;
    this[_indexInParent] = null;
    this[_scrollChildCount] = null;
    this[_scrollIndex] = null;
    this[_platformViewId] = null;
    this[_maxValueLength] = null;
    this[_currentValueLength] = null;
    this[_isMergingSemanticsOfDescendants] = false;
    this[_customSemanticsActions] = new (LinkedMapOfCustomSemanticsAction$VoidTovoid()).new();
    this[_label] = "";
    this[_value] = "";
    this[_decreasedValue] = "";
    this[_increasedValue] = "";
    this[_hint] = "";
    this[_hintOverrides] = null;
    this[_elevation] = 0.0;
    this[_thickness] = 0.0;
    this[_textDirection] = null;
    this[_textSelection] = null;
    this[_scrollPosition] = null;
    this[_scrollExtentMax] = null;
    this[_scrollExtentMin] = null;
    this[_tagsForChildren] = null;
    this[_flags] = 0;
    ;
  }).prototype = semantics.SemanticsConfiguration.prototype;
  dart.addTypeTests(semantics.SemanticsConfiguration);
  const explicitChildNodes = SemanticsConfiguration_explicitChildNodes;
  const isBlockingSemanticsOfPreviouslyPaintedNodes = SemanticsConfiguration_isBlockingSemanticsOfPreviouslyPaintedNodes;
  dart.setMethodSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getMethods(semantics.SemanticsConfiguration.__proto__),
    [_addAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic])]),
    [_addArgumentlessAction]: dart.fnType(dart.void, [ui.SemanticsAction, dart.fnType(dart.void, [])]),
    getActionHandler: dart.fnType(dart.fnType(dart.void, [dart.dynamic]), [ui.SemanticsAction]),
    [_onCustomSemanticsAction]: dart.fnType(dart.void, [dart.dynamic]),
    addTagForChildren: dart.fnType(dart.void, [semantics.SemanticsTag]),
    [_setFlag]: dart.fnType(dart.void, [ui.SemanticsFlag, core.bool]),
    [_hasFlag]: dart.fnType(core.bool, [ui.SemanticsFlag]),
    isCompatibleWith: dart.fnType(core.bool, [semantics.SemanticsConfiguration]),
    absorb: dart.fnType(dart.void, [semantics.SemanticsConfiguration]),
    copy: dart.fnType(semantics.SemanticsConfiguration, [])
  }));
  dart.setGetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getGetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    hasBeenAnnotated: core.bool,
    onTap: dart.fnType(dart.void, []),
    onLongPress: dart.fnType(dart.void, []),
    onScrollLeft: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    onScrollRight: dart.fnType(dart.void, []),
    onScrollUp: dart.fnType(dart.void, []),
    onScrollDown: dart.fnType(dart.void, []),
    onIncrease: dart.fnType(dart.void, []),
    onDecrease: dart.fnType(dart.void, []),
    onCopy: dart.fnType(dart.void, []),
    onCut: dart.fnType(dart.void, []),
    onPaste: dart.fnType(dart.void, []),
    onShowOnScreen: dart.fnType(dart.void, []),
    onMoveCursorForwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorForwardByWord: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByWord: dart.fnType(dart.void, [core.bool]),
    onSetSelection: dart.fnType(dart.void, [text_editing.TextSelection]),
    onDidGainAccessibilityFocus: dart.fnType(dart.void, []),
    onDidLoseAccessibilityFocus: dart.fnType(dart.void, []),
    sortKey: semantics.SemanticsSortKey,
    indexInParent: core.int,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int,
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    hintOverrides: semantics.SemanticsHintOverrides,
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: ui.TextDirection,
    isSelected: core.bool,
    isEnabled: core.bool,
    isChecked: core.bool,
    isToggled: core.bool,
    isInMutuallyExclusiveGroup: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isHeader: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: text_editing.TextSelection,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double,
    tagsForChildren: core.Iterable$(semantics.SemanticsTag)
  }));
  dart.setSetterSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getSetters(semantics.SemanticsConfiguration.__proto__),
    isSemanticBoundary: core.bool,
    onTap: dart.fnType(dart.void, []),
    onLongPress: dart.fnType(dart.void, []),
    onScrollLeft: dart.fnType(dart.void, []),
    onDismiss: dart.fnType(dart.void, []),
    onScrollRight: dart.fnType(dart.void, []),
    onScrollUp: dart.fnType(dart.void, []),
    onScrollDown: dart.fnType(dart.void, []),
    onIncrease: dart.fnType(dart.void, []),
    onDecrease: dart.fnType(dart.void, []),
    onCopy: dart.fnType(dart.void, []),
    onCut: dart.fnType(dart.void, []),
    onPaste: dart.fnType(dart.void, []),
    onShowOnScreen: dart.fnType(dart.void, []),
    onMoveCursorForwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByCharacter: dart.fnType(dart.void, [core.bool]),
    onMoveCursorForwardByWord: dart.fnType(dart.void, [core.bool]),
    onMoveCursorBackwardByWord: dart.fnType(dart.void, [core.bool]),
    onSetSelection: dart.fnType(dart.void, [text_editing.TextSelection]),
    onDidGainAccessibilityFocus: dart.fnType(dart.void, []),
    onDidLoseAccessibilityFocus: dart.fnType(dart.void, []),
    sortKey: semantics.SemanticsSortKey,
    indexInParent: core.int,
    scrollChildCount: core.int,
    scrollIndex: core.int,
    platformViewId: core.int,
    maxValueLength: core.int,
    currentValueLength: core.int,
    isMergingSemanticsOfDescendants: core.bool,
    customSemanticsActions: core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, [])),
    label: core.String,
    value: core.String,
    decreasedValue: core.String,
    increasedValue: core.String,
    hint: core.String,
    hintOverrides: semantics.SemanticsHintOverrides,
    elevation: core.double,
    thickness: core.double,
    scopesRoute: core.bool,
    namesRoute: core.bool,
    isImage: core.bool,
    liveRegion: core.bool,
    textDirection: ui.TextDirection,
    isSelected: core.bool,
    isEnabled: core.bool,
    isChecked: core.bool,
    isToggled: core.bool,
    isInMutuallyExclusiveGroup: core.bool,
    isFocused: core.bool,
    isButton: core.bool,
    isHeader: core.bool,
    isHidden: core.bool,
    isTextField: core.bool,
    isReadOnly: core.bool,
    isObscured: core.bool,
    isMultiline: core.bool,
    hasImplicitScrolling: core.bool,
    textSelection: text_editing.TextSelection,
    scrollPosition: core.double,
    scrollExtentMax: core.double,
    scrollExtentMin: core.double
  }));
  dart.setLibraryUri(semantics.SemanticsConfiguration, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsConfiguration, () => ({
    __proto__: dart.getFields(semantics.SemanticsConfiguration.__proto__),
    [_isSemanticBoundary]: dart.fieldType(core.bool),
    explicitChildNodes: dart.fieldType(core.bool),
    isBlockingSemanticsOfPreviouslyPaintedNodes: dart.fieldType(core.bool),
    [_hasBeenAnnotated]: dart.fieldType(core.bool),
    [_actions]: dart.finalFieldType(core.Map$(ui.SemanticsAction, dart.fnType(dart.void, [dart.dynamic]))),
    [_actionsAsBits]: dart.fieldType(core.int),
    [_onTap]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onLongPress]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollLeft]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDismiss]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollRight]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollUp]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onScrollDown]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onIncrease]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDecrease]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onCopy]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onCut]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onPaste]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onShowOnScreen]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onMoveCursorForwardByCharacter]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorBackwardByCharacter]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorForwardByWord]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onMoveCursorBackwardByWord]: dart.fieldType(dart.fnType(dart.void, [core.bool])),
    [_onSetSelection]: dart.fieldType(dart.fnType(dart.void, [text_editing.TextSelection])),
    [_onDidGainAccessibilityFocus]: dart.fieldType(dart.fnType(dart.void, [])),
    [_onDidLoseAccessibilityFocus]: dart.fieldType(dart.fnType(dart.void, [])),
    [_sortKey]: dart.fieldType(semantics.SemanticsSortKey),
    [_indexInParent]: dart.fieldType(core.int),
    [_scrollChildCount]: dart.fieldType(core.int),
    [_scrollIndex]: dart.fieldType(core.int),
    [_platformViewId]: dart.fieldType(core.int),
    [_maxValueLength]: dart.fieldType(core.int),
    [_currentValueLength]: dart.fieldType(core.int),
    [_isMergingSemanticsOfDescendants]: dart.fieldType(core.bool),
    [_customSemanticsActions]: dart.fieldType(core.Map$(semantics.CustomSemanticsAction, dart.fnType(dart.void, []))),
    [_label]: dart.fieldType(core.String),
    [_value]: dart.fieldType(core.String),
    [_decreasedValue]: dart.fieldType(core.String),
    [_increasedValue]: dart.fieldType(core.String),
    [_hint]: dart.fieldType(core.String),
    [_hintOverrides]: dart.fieldType(semantics.SemanticsHintOverrides),
    [_elevation]: dart.fieldType(core.double),
    [_thickness]: dart.fieldType(core.double),
    [_textDirection]: dart.fieldType(ui.TextDirection),
    [_textSelection]: dart.fieldType(text_editing.TextSelection),
    [_scrollPosition]: dart.fieldType(core.double),
    [_scrollExtentMax]: dart.fieldType(core.double),
    [_scrollExtentMin]: dart.fieldType(core.double),
    [_tagsForChildren]: dart.fieldType(core.Set$(semantics.SemanticsTag)),
    [_flags]: dart.fieldType(core.int)
  }));
  let C6;
  semantics.DebugSemanticsDumpOrder = class DebugSemanticsDumpOrder extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (semantics.DebugSemanticsDumpOrder.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = semantics.DebugSemanticsDumpOrder.prototype;
  dart.addTypeTests(semantics.DebugSemanticsDumpOrder);
  dart.setLibraryUri(semantics.DebugSemanticsDumpOrder, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.DebugSemanticsDumpOrder, () => ({
    __proto__: dart.getFields(semantics.DebugSemanticsDumpOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.DebugSemanticsDumpOrder, ['toString']);
  semantics.DebugSemanticsDumpOrder.inverseHitTest = C5 || CT.C5;
  semantics.DebugSemanticsDumpOrder.traversalOrder = C3 || CT.C3;
  semantics.DebugSemanticsDumpOrder.values = C6 || CT.C6;
  const SemanticsSortKey_name = dart.privateName(semantics, "SemanticsSortKey.name");
  semantics.SemanticsSortKey = class SemanticsSortKey extends diagnostics.Diagnosticable {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    compareTo(other) {
      semantics.SemanticsSortKey._check(other);
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4001, 12, "\n    assert(runtimeType == other");
      if (!(this.name == other.name)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4002, 12, "\n    assert(name =");
      return this.doCompare(other);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.StringProperty.new("name", this.name, {defaultValue: null}));
    }
  };
  (semantics.SemanticsSortKey.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[name$0] = name;
    semantics.SemanticsSortKey.__proto__.new.call(this);
    ;
  }).prototype = semantics.SemanticsSortKey.prototype;
  dart.addTypeTests(semantics.SemanticsSortKey);
  const name$0 = SemanticsSortKey_name;
  semantics.SemanticsSortKey[dart.implements] = () => [core.Comparable$(semantics.SemanticsSortKey)];
  dart.setMethodSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getMethods(semantics.SemanticsSortKey.__proto__),
    compareTo: dart.fnType(core.int, [core.Object]),
    [$compareTo]: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics.SemanticsSortKey, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.SemanticsSortKey, () => ({
    __proto__: dart.getFields(semantics.SemanticsSortKey.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics.SemanticsSortKey, ['compareTo']);
  const OrdinalSortKey_order = dart.privateName(semantics, "OrdinalSortKey.order");
  semantics.OrdinalSortKey = class OrdinalSortKey extends semantics.SemanticsSortKey {
    get order() {
      return this[order$];
    }
    set order(value) {
      super.order = value;
    }
    doCompare(other) {
      semantics.OrdinalSortKey._check(other);
      if (other.order == null || this.order == null || other.order == this.order) return 0;
      return this.order[$compareTo](other.order);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new diagnostics.DoubleProperty.new("order", this.order, {defaultValue: null}));
    }
  };
  (semantics.OrdinalSortKey.new = function(order, opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    this[order$] = order;
    if (!(order != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4042, 15, "}) : assert(o");
    if (!(order !== 0 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4043, 15, "     assert(order !");
    if (!(dart.notNull(order) > -1 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4044, 15, "     assert(order > double.nega");
    if (!(dart.notNull(order) < 1 / 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 4045, 15, "     assert(order < dou");
    semantics.OrdinalSortKey.__proto__.new.call(this, {name: name});
    ;
  }).prototype = semantics.OrdinalSortKey.prototype;
  dart.addTypeTests(semantics.OrdinalSortKey);
  const order$ = OrdinalSortKey_order;
  dart.setMethodSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getMethods(semantics.OrdinalSortKey.__proto__),
    doCompare: dart.fnType(core.int, [core.Object])
  }));
  dart.setLibraryUri(semantics.OrdinalSortKey, "package:flutter/src/semantics/semantics.dart");
  dart.setFieldSignature(semantics.OrdinalSortKey, () => ({
    __proto__: dart.getFields(semantics.OrdinalSortKey.__proto__),
    order: dart.finalFieldType(core.double)
  }));
  const _name$0 = dart.privateName(ui, "_name");
  let C7;
  let C8;
  semantics.debugResetSemanticsIdCounter = function debugResetSemanticsIdCounter() {
    semantics.SemanticsNode._lastIdentifier = 0;
  };
  semantics._pointInParentCoordinates = function _pointInParentCoordinates(node, point) {
    if (node.transform == null) {
      return point;
    }
    let vector = vector_math_64.Vector3.new(point.dx, point.dy, 0.0);
    node.transform.transform3(vector);
    return new ui.Offset.new(vector.x, vector.y);
  };
  semantics._childrenInDefaultOrder = function _childrenInDefaultOrder(children, textDirection) {
    let edges = JSArrayOf_BoxEdge().of([]);
    for (let child of children) {
      if (!dart.test(child.rect.isFinite)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics.dart", 2488, 12, "\n    assert(child.r");
      let childRect = child.rect.deflate(0.1);
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: true, offset: semantics._pointInParentCoordinates(child, childRect.topLeft).dy, node: child}));
      edges[$add](new semantics._BoxEdge.new({isLeadingEdge: false, offset: semantics._pointInParentCoordinates(child, childRect.bottomRight).dy, node: child}));
    }
    edges[$sort]();
    let verticalGroups = JSArrayOf_SemanticsSortGroup().of([]);
    let group = null;
    let depth = 0;
    for (let edge of edges) {
      if (dart.test(edge.isLeadingEdge)) {
        depth = depth + 1;
        group == null ? group = new semantics._SemanticsSortGroup.new({startOffset: edge.offset, textDirection: textDirection}) : null;
        group.nodes[$add](edge.node);
      } else {
        depth = depth - 1;
      }
      if (depth === 0) {
        verticalGroups[$add](group);
        group = null;
      }
    }
    verticalGroups[$sort]();
    return verticalGroups[$expand](semantics.SemanticsNode, dart.fn(group => group.sortedWithinVerticalGroup(), _SemanticsSortGroupToListOfSemanticsNode()))[$toList]();
  };
  semantics._concatStrings = function _concatStrings(opts) {
    let thisString = opts && 'thisString' in opts ? opts.thisString : null;
    let otherString = opts && 'otherString' in opts ? opts.otherString : null;
    let thisTextDirection = opts && 'thisTextDirection' in opts ? opts.thisTextDirection : null;
    let otherTextDirection = opts && 'otherTextDirection' in opts ? opts.otherTextDirection : null;
    if (otherString[$isEmpty]) return thisString;
    let nestedLabel = otherString;
    if (!dart.equals(thisTextDirection, otherTextDirection) && otherTextDirection != null) {
      switch (otherTextDirection) {
        case C7 || CT.C7:
        {
          nestedLabel = "‫" + dart.str(nestedLabel) + "‬";
          break;
        }
        case C8 || CT.C8:
        {
          nestedLabel = "‪" + dart.str(nestedLabel) + "‬";
          break;
        }
      }
    }
    if (thisString[$isEmpty]) return nestedLabel;
    return dart.str(thisString) + "\n" + dart.str(nestedLabel);
  };
  const SemanticsEvent_type = dart.privateName(semantics_event, "SemanticsEvent.type");
  semantics_event.SemanticsEvent = class SemanticsEvent extends core.Object {
    get type() {
      return this[type$];
    }
    set type(value) {
      super.type = value;
    }
    toMap(opts) {
      let nodeId = opts && 'nodeId' in opts ? opts.nodeId : null;
      let event = new (IdentityMapOfString$dynamic()).from(["type", this.type, "data", this.getDataMap()]);
      if (nodeId != null) event[$_set]("nodeId", nodeId);
      return event;
    }
    toString() {
      let t4;
      let pairs = JSArrayOfString().of([]);
      let dataMap = this.getDataMap();
      let sortedKeys = (t4 = dataMap[$keys][$toList](), t4[$sort](), t4);
      for (let key of sortedKeys)
        pairs[$add](dart.str(key) + ": " + dart.str(dataMap[$_get](key)));
      return dart.str(this[$runtimeType]) + "(" + dart.str(pairs[$join](", ")) + ")";
    }
  };
  (semantics_event.SemanticsEvent.new = function(type) {
    this[type$] = type;
    ;
  }).prototype = semantics_event.SemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.SemanticsEvent);
  const type$ = SemanticsEvent_type;
  dart.setMethodSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.SemanticsEvent.__proto__),
    toMap: dart.fnType(core.Map$(core.String, dart.dynamic), [], {nodeId: core.int})
  }));
  dart.setLibraryUri(semantics_event.SemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.SemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.SemanticsEvent.__proto__),
    type: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(semantics_event.SemanticsEvent, ['toString']);
  const AnnounceSemanticsEvent_message = dart.privateName(semantics_event, "AnnounceSemanticsEvent.message");
  const AnnounceSemanticsEvent_textDirection = dart.privateName(semantics_event, "AnnounceSemanticsEvent.textDirection");
  semantics_event.AnnounceSemanticsEvent = class AnnounceSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get textDirection() {
      return this[textDirection$1];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message, "textDirection", this.textDirection.index]);
    }
  };
  (semantics_event.AnnounceSemanticsEvent.new = function(message, textDirection) {
    this[message$] = message;
    this[textDirection$1] = textDirection;
    if (!(message != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics_event.dart", 69, 14, "message != null");
    if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/semantics_event.dart", 70, 14, "textDirection != null");
    semantics_event.AnnounceSemanticsEvent.__proto__.new.call(this, "announce");
    ;
  }).prototype = semantics_event.AnnounceSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.AnnounceSemanticsEvent);
  const message$ = AnnounceSemanticsEvent_message;
  const textDirection$1 = AnnounceSemanticsEvent_textDirection;
  dart.setMethodSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.AnnounceSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.AnnounceSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.AnnounceSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.AnnounceSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String),
    textDirection: dart.finalFieldType(ui.TextDirection)
  }));
  const TooltipSemanticsEvent_message = dart.privateName(semantics_event, "TooltipSemanticsEvent.message");
  semantics_event.TooltipSemanticsEvent = class TooltipSemanticsEvent extends semantics_event.SemanticsEvent {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    getDataMap() {
      return new (IdentityMapOfString$dynamic()).from(["message", this.message]);
    }
  };
  (semantics_event.TooltipSemanticsEvent.new = function(message) {
    this[message$0] = message;
    semantics_event.TooltipSemanticsEvent.__proto__.new.call(this, "tooltip");
    ;
  }).prototype = semantics_event.TooltipSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.TooltipSemanticsEvent);
  const message$0 = TooltipSemanticsEvent_message;
  dart.setMethodSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TooltipSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TooltipSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  dart.setFieldSignature(semantics_event.TooltipSemanticsEvent, () => ({
    __proto__: dart.getFields(semantics_event.TooltipSemanticsEvent.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  let C9;
  semantics_event.LongPressSemanticsEvent = class LongPressSemanticsEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.LongPressSemanticsEvent.new = function() {
    semantics_event.LongPressSemanticsEvent.__proto__.new.call(this, "longPress");
    ;
  }).prototype = semantics_event.LongPressSemanticsEvent.prototype;
  dart.addTypeTests(semantics_event.LongPressSemanticsEvent);
  dart.setMethodSignature(semantics_event.LongPressSemanticsEvent, () => ({
    __proto__: dart.getMethods(semantics_event.LongPressSemanticsEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.LongPressSemanticsEvent, "package:flutter/src/semantics/semantics_event.dart");
  semantics_event.TapSemanticEvent = class TapSemanticEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.TapSemanticEvent.new = function() {
    semantics_event.TapSemanticEvent.__proto__.new.call(this, "tap");
    ;
  }).prototype = semantics_event.TapSemanticEvent.prototype;
  dart.addTypeTests(semantics_event.TapSemanticEvent);
  dart.setMethodSignature(semantics_event.TapSemanticEvent, () => ({
    __proto__: dart.getMethods(semantics_event.TapSemanticEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.TapSemanticEvent, "package:flutter/src/semantics/semantics_event.dart");
  semantics_event.UpdateLiveRegionEvent = class UpdateLiveRegionEvent extends semantics_event.SemanticsEvent {
    getDataMap() {
      return C9 || CT.C9;
    }
  };
  (semantics_event.UpdateLiveRegionEvent.new = function() {
    semantics_event.UpdateLiveRegionEvent.__proto__.new.call(this, "updateLiveRegion");
    ;
  }).prototype = semantics_event.UpdateLiveRegionEvent.prototype;
  dart.addTypeTests(semantics_event.UpdateLiveRegionEvent);
  dart.setMethodSignature(semantics_event.UpdateLiveRegionEvent, () => ({
    __proto__: dart.getMethods(semantics_event.UpdateLiveRegionEvent.__proto__),
    getDataMap: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(semantics_event.UpdateLiveRegionEvent, "package:flutter/src/semantics/semantics_event.dart");
  const _accessibilityFeatures = dart.privateName(binding$, "_accessibilityFeatures");
  binding$.SemanticsBinding = class SemanticsBinding extends binding.BindingBase {
    static get instance() {
      return binding$.SemanticsBinding._instance;
    }
  };
  binding$.SemanticsBinding[dart.mixinOn] = BindingBase => class SemanticsBinding extends BindingBase {
    initInstances() {
      super.initInstances();
      binding$.SemanticsBinding._instance = this;
      this[_accessibilityFeatures] = this.window.accessibilityFeatures;
    }
    handleAccessibilityFeaturesChanged() {
      this[_accessibilityFeatures] = this.window.accessibilityFeatures;
    }
    get accessibilityFeatures() {
      return this[_accessibilityFeatures];
    }
    get disableAnimations() {
      let value = this[_accessibilityFeatures].disableAnimations;
      if (!dart.test(dart.fn(() => {
        if (debug.debugSemanticsDisableAnimations != null) value = debug.debugSemanticsDisableAnimations;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/semantics/binding.dart", 51, 12, "() {\n      if (debugSemanticsDisableAnimations != null)\n        value = debugSemanticsDisableAnimations;\n      return true;\n    }()");
      return value;
    }
  };
  (binding$.SemanticsBinding[dart.mixinNew] = function() {
    this[_accessibilityFeatures] = null;
  }).prototype = binding$.SemanticsBinding.prototype;
  dart.addTypeTests(binding$.SemanticsBinding);
  binding$.SemanticsBinding[dart.implements] = () => [binding.BindingBase];
  dart.setMethodSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getMethods(binding$.SemanticsBinding.__proto__),
    handleAccessibilityFeaturesChanged: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getGetters(binding$.SemanticsBinding.__proto__),
    accessibilityFeatures: ui.AccessibilityFeatures,
    disableAnimations: core.bool
  }));
  dart.setLibraryUri(binding$.SemanticsBinding, "package:flutter/src/semantics/binding.dart");
  dart.setFieldSignature(binding$.SemanticsBinding, () => ({
    __proto__: dart.getFields(binding$.SemanticsBinding.__proto__),
    [_accessibilityFeatures]: dart.fieldType(ui.AccessibilityFeatures)
  }));
  dart.defineLazy(binding$.SemanticsBinding, {
    /*binding$.SemanticsBinding._instance*/get _instance() {
      return null;
    },
    set _instance(_) {}
  });
  semantics_service.SemanticsService = class SemanticsService extends core.Object {
    static announce(message, textDirection) {
      return async.async(dart.void, function* announce() {
        let event = new semantics_event.AnnounceSemanticsEvent.new(message, textDirection);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
    static tooltip(message) {
      return async.async(dart.void, function* tooltip() {
        let event = new semantics_event.TooltipSemanticsEvent.new(message);
        yield system_channels.SystemChannels.accessibility.send(event.toMap());
      });
    }
  };
  (semantics_service.SemanticsService.__ = function() {
    ;
  }).prototype = semantics_service.SemanticsService.prototype;
  dart.addTypeTests(semantics_service.SemanticsService);
  dart.setLibraryUri(semantics_service.SemanticsService, "package:flutter/src/semantics/semantics_service.dart");
  dart.setBaseClass(semantics._SemanticsSortGroup, core.Comparable$(semantics._SemanticsSortGroup));
  dart.trackLibraries("packages/flutter/src/semantics/binding", {
    "package:flutter/src/semantics/debug.dart": debug,
    "package:flutter/src/semantics/semantics.dart": semantics,
    "package:flutter/src/semantics/semantics_event.dart": semantics_event,
    "package:flutter/src/semantics/binding.dart": binding$,
    "package:flutter/src/semantics/semantics_service.dart": semantics_service
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["debug.dart","semantics.dart","semantics_event.dart","binding.dart","semantics_service.dart"],"names":[],"mappings":"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","file":"binding.ddc.js"}');
  // Exports:
  return {
    src__semantics__debug: debug,
    src__semantics__semantics: semantics,
    src__semantics__semantics_event: semantics_event,
    src__semantics__binding: binding$,
    src__semantics__semantics_service: semantics_service
  };
});

//# sourceMappingURL=binding.ddc.js.map

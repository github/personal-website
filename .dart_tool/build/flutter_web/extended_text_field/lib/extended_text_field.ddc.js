define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/extended_text_library/extended_text_library', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/cupertino/action_sheet', 'packages/flutter/src/animation/animation', 'packages/flutter/gestures', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__material, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__extended_text_library__extended_text_library, packages__flutter__src__rendering__animated_size, packages__flutter__src__cupertino__action_sheet, packages__flutter__src__animation__animation, packages__flutter__gestures, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _internal = dart_sdk._internal;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const theme = packages__flutter__material.src__material__theme;
  const material = packages__flutter__material.src__material__material;
  const feedback = packages__flutter__material.src__material__feedback;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const debug = packages__flutter__material.src__material__debug;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const text_formatter = packages__flutter__src__gestures__arena.src__services__text_formatter;
  const text_editing = packages__flutter__src__gestures__arena.src__services__text_editing;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const force_press = packages__flutter__src__gestures__arena.src__gestures__force_press;
  const long_press = packages__flutter__src__gestures__arena.src__gestures__long_press;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const events = packages__flutter__src__gestures__arena.src__gestures__events;
  const raw_keyboard = packages__flutter__src__gestures__arena.src__services__raw_keyboard;
  const raw_keyboard_android = packages__flutter__src__gestures__arena.src__services__raw_keyboard_android;
  const clipboard = packages__flutter__src__gestures__arena.src__services__clipboard;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const strut_style = packages__flutter__src__painting___network_image_web.src__painting__strut_style;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const scroll_controller = packages__flutter__src__widgets__actions.src__widgets__scroll_controller;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text_selection = packages__flutter__src__widgets__actions.src__widgets__text_selection;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const debug$ = packages__flutter__src__widgets__actions.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const automatic_keep_alive = packages__flutter__src__widgets__actions.src__widgets__automatic_keep_alive;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const binding = packages__flutter__src__widgets__actions.src__widgets__binding;
  const scrollable = packages__flutter__src__widgets__actions.src__widgets__scrollable;
  const scroll_position = packages__flutter__src__widgets__actions.src__widgets__scroll_position;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const widget_span = packages__flutter__src__widgets__actions.src__widgets__widget_span;
  const localizations = packages__flutter__src__widgets__actions.src__widgets__localizations;
  const special_text_span_builder = packages__extended_text_library__extended_text_library.src__special_text_span_builder;
  const cupertino_text_selection_controls = packages__extended_text_library__extended_text_library.src__selection__cupertino_text_selection_controls;
  const material_text_selection_controls = packages__extended_text_library__extended_text_library.src__selection__material_text_selection_controls;
  const extended_text_utils = packages__extended_text_library__extended_text_library.src__extended_text_utils;
  const extended_text_selection_overlay = packages__extended_text_library__extended_text_library.src__selection__extended_text_selection_overlay;
  const background_text_span = packages__extended_text_library__extended_text_library.src__background_text_span;
  const extended_text_render_box = packages__extended_text_library__extended_text_library.src__render_object__extended_text_render_box;
  const extended_text_selection_render_object = packages__extended_text_library__extended_text_library.src__render_object__extended_text_selection_render_object;
  const editable = packages__flutter__src__rendering__animated_size.src__rendering__editable;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const layer = packages__flutter__src__rendering__animated_size.src__rendering__layer;
  const viewport_offset = packages__flutter__src__rendering__animated_size.src__rendering__viewport_offset;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const theme$ = packages__flutter__src__cupertino__action_sheet.src__cupertino__theme;
  const colors$ = packages__flutter__src__cupertino__action_sheet.src__cupertino__colors;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const binding$ = packages__flutter__gestures.src__scheduler__binding;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const extended_text_field = Object.create(dart.library);
  const extended_editable_text = Object.create(dart.library);
  const extended_render_editable = Object.create(dart.library);
  const extended_text_field$ = Object.create(dart.library);
  const $length = dartx.length;
  const $runes = dartx.runes;
  const $clamp = dartx.clamp;
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $addAll = dartx.addAll;
  const $runtimeType = dartx.runtimeType;
  const $times = dartx['*'];
  const $substring = dartx.substring;
  const $replaceRange = dartx.replaceRange;
  const $first = dartx.first;
  const $last = dartx.last;
  const $codeUnitAt = dartx.codeUnitAt;
  const $abs = dartx.abs;
  const $round = dartx.round;
  let DiagnosticsPropertyOfTextEditingController = () => (DiagnosticsPropertyOfTextEditingController = dart.constFn(diagnostics.DiagnosticsProperty$(editable_text.TextEditingController)))();
  let DiagnosticsPropertyOfFocusNode = () => (DiagnosticsPropertyOfFocusNode = dart.constFn(diagnostics.DiagnosticsProperty$(focus_manager.FocusNode)))();
  let DiagnosticsPropertyOfbool = () => (DiagnosticsPropertyOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(core.bool)))();
  let DiagnosticsPropertyOfInputDecoration = () => (DiagnosticsPropertyOfInputDecoration = dart.constFn(diagnostics.DiagnosticsProperty$(input_decorator.InputDecoration)))();
  let DiagnosticsPropertyOfTextInputType = () => (DiagnosticsPropertyOfTextInputType = dart.constFn(diagnostics.DiagnosticsProperty$(text_input.TextInputType)))();
  let DiagnosticsPropertyOfTextStyle = () => (DiagnosticsPropertyOfTextStyle = dart.constFn(diagnostics.DiagnosticsProperty$(text_style.TextStyle)))();
  let EnumPropertyOfTextInputAction = () => (EnumPropertyOfTextInputAction = dart.constFn(diagnostics.EnumProperty$(text_input.TextInputAction)))();
  let EnumPropertyOfTextCapitalization = () => (EnumPropertyOfTextCapitalization = dart.constFn(diagnostics.EnumProperty$(text_input.TextCapitalization)))();
  let EnumPropertyOfTextAlign = () => (EnumPropertyOfTextAlign = dart.constFn(diagnostics.EnumProperty$(ui.TextAlign)))();
  let DiagnosticsPropertyOfTextAlignVertical = () => (DiagnosticsPropertyOfTextAlignVertical = dart.constFn(diagnostics.DiagnosticsProperty$(alignment.TextAlignVertical)))();
  let EnumPropertyOfTextDirection = () => (EnumPropertyOfTextDirection = dart.constFn(diagnostics.EnumProperty$(ui.TextDirection)))();
  let DiagnosticsPropertyOfRadius = () => (DiagnosticsPropertyOfRadius = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Radius)))();
  let DiagnosticsPropertyOfBrightness = () => (DiagnosticsPropertyOfBrightness = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Brightness)))();
  let DiagnosticsPropertyOfEdgeInsetsGeometry = () => (DiagnosticsPropertyOfEdgeInsetsGeometry = dart.constFn(diagnostics.DiagnosticsProperty$(edge_insets.EdgeInsetsGeometry)))();
  let DiagnosticsPropertyOfScrollController = () => (DiagnosticsPropertyOfScrollController = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_controller.ScrollController)))();
  let DiagnosticsPropertyOfScrollPhysics = () => (DiagnosticsPropertyOfScrollPhysics = dart.constFn(diagnostics.DiagnosticsProperty$(scroll_physics.ScrollPhysics)))();
  let GlobalKeyOfExtendedEditableTextState = () => (GlobalKeyOfExtendedEditableTextState = dart.constFn(framework.GlobalKey$(extended_editable_text.ExtendedEditableTextState)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let _HashSetOfInteractiveInkFeature = () => (_HashSetOfInteractiveInkFeature = dart.constFn(collection._HashSet$(ink_well.InteractiveInkFeature)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfTextInputFormatter = () => (JSArrayOfTextInputFormatter = dart.constFn(_interceptors.JSArray$(text_formatter.TextInputFormatter)))();
  let JSArrayOfListenable = () => (JSArrayOfListenable = dart.constFn(_interceptors.JSArray$(change_notifier.Listenable)))();
  let BuildContextAndWidgetToInputDecorator = () => (BuildContextAndWidgetToInputDecorator = dart.constFn(dart.fnType(input_decorator.InputDecorator, [framework.BuildContext, framework.Widget])))();
  let EmptyIterableOfTextInputFormatter = () => (EmptyIterableOfTextInputFormatter = dart.constFn(_internal.EmptyIterable$(text_formatter.TextInputFormatter)))();
  let DiagnosticsPropertyOfLocale = () => (DiagnosticsPropertyOfLocale = dart.constFn(diagnostics.DiagnosticsProperty$(ui.Locale)))();
  let ValueNotifierOfbool = () => (ValueNotifierOfbool = dart.constFn(change_notifier.ValueNotifier$(core.bool)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(framework.State$(framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(framework.GlobalKey$(StateOfStatefulWidget())))();
  let DurationToNull = () => (DurationToNull = dart.constFn(dart.fnType(core.Null, [core.Duration])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let BuildContextAndViewportOffsetToCompositedTransformTarget = () => (BuildContextAndViewportOffsetToCompositedTransformTarget = dart.constFn(dart.fnType(basic.CompositedTransformTarget, [framework.BuildContext, viewport_offset.ViewportOffset])))();
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let InlineSpanTobool = () => (InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))();
  let doubleToNull = () => (doubleToNull = dart.constFn(dart.fnType(core.Null, [core.double])))();
  let JSArrayOfTextSelectionPoint = () => (JSArrayOfTextSelectionPoint = dart.constFn(_interceptors.JSArray$(editable.TextSelectionPoint)))();
  let BoxHitTestResultAndOffsetTobool = () => (BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [box.BoxHitTestResult, ui.Offset])))();
  let DiagnosticsPropertyOfValueNotifierOfbool = () => (DiagnosticsPropertyOfValueNotifierOfbool = dart.constFn(diagnostics.DiagnosticsProperty$(ValueNotifierOfbool())))();
  let DiagnosticsPropertyOfTextSelection = () => (DiagnosticsPropertyOfTextSelection = dart.constFn(diagnostics.DiagnosticsProperty$(text_editing.TextSelection)))();
  let DiagnosticsPropertyOfViewportOffset = () => (DiagnosticsPropertyOfViewportOffset = dart.constFn(diagnostics.DiagnosticsProperty$(viewport_offset.ViewportOffset)))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: input_decorator.InputDecoration.prototype,
        alignLabelWithHint: null,
        semanticCounterText: null,
        enabled: true,
        border: null,
        enabledBorder: null,
        disabledBorder: null,
        focusedErrorBorder: null,
        focusedBorder: null,
        errorBorder: null,
        hoverColor: null,
        focusColor: null,
        fillColor: null,
        filled: null,
        counterStyle: null,
        counter: null,
        counterText: null,
        suffixStyle: null,
        suffixText: null,
        suffix: null,
        suffixIcon: null,
        prefixStyle: null,
        prefixText: null,
        prefix: null,
        prefixIcon: null,
        isCollapsed: false,
        contentPadding: null,
        isDense: null,
        hasFloatingPlaceholder: true,
        errorMaxLines: null,
        errorStyle: null,
        errorText: null,
        hintMaxLines: null,
        hintStyle: null,
        hintText: null,
        helperStyle: null,
        helperText: null,
        labelStyle: null,
        labelText: null,
        icon: null
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: text_input.TextCapitalization.prototype,
        [_name]: "TextCapitalization.none",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.TextAlign.prototype,
        [_name$]: "TextAlign.start",
        index: 4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 20,
        right: 20,
        top: 20,
        left: 20
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name$0]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "container",
        column: 9,
        line: 620,
        file: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "liveRegion",
        column: 9,
        line: 621,
        file: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 622,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 17,
        line: 619,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$1]: "TargetPlatform.iOS",
        index: 2
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$1]: "TargetPlatform.android",
        index: 0
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: platform.TargetPlatform.prototype,
        [_name$1]: "TargetPlatform.fuchsia",
        index: 1
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: ui.Radius.prototype,
        y: 2,
        x: 2
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 9,
        line: 1026,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "readOnly",
        column: 9,
        line: 1027,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showCursor",
        column: 9,
        line: 1028,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showSelectionHandles",
        column: 9,
        line: 1029,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "controller",
        column: 9,
        line: 1030,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "focusNode",
        column: 9,
        line: 1031,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "keyboardType",
        column: 9,
        line: 1032,
        file: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textInputAction",
        column: 9,
        line: 1033,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textCapitalization",
        column: 9,
        line: 1034,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 9,
        line: 1035,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "strutStyle",
        column: 9,
        line: 1036,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 9,
        line: 1037,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textDirection",
        column: 9,
        line: 1038,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autofocus",
        column: 9,
        line: 1039,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "obscureText",
        column: 9,
        line: 1040,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autocorrect",
        column: 9,
        line: 1041,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "maxLines",
        column: 9,
        line: 1042,
        file: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "minLines",
        column: 9,
        line: 1043,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "expands",
        column: 9,
        line: 1044,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectionColor",
        column: 9,
        line: 1045,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectionControls",
        column: 9,
        line: 1046,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onChanged",
        column: 9,
        line: 1048,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelectionChanged",
        column: 9,
        line: 1049,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onEditingComplete",
        column: 9,
        line: 1050,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSubmitted",
        column: 9,
        line: 1051,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelectionHandleTapped",
        column: 9,
        line: 1052,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "inputFormatters",
        column: 9,
        line: 1053,
        file: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "rendererIgnoresPointer",
        column: 9,
        line: 1054,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorWidth",
        column: 9,
        line: 1055,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorRadius",
        column: 9,
        line: 1056,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorColor",
        column: 9,
        line: 1057,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorOpacityAnimates",
        column: 9,
        line: 1058,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorOffset",
        column: 9,
        line: 1059,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "paintCursorAboveText",
        column: 9,
        line: 1060,
        file: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundCursorColor",
        column: 9,
        line: 1061,
        file: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "scrollPadding",
        column: 9,
        line: 1062,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "keyboardAppearance",
        column: 9,
        line: 1063,
        file: null
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "enableInteractiveSelection",
        column: 9,
        line: 1064,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dragStartBehavior",
        column: 9,
        line: 1065,
        file: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "scrollController",
        column: 9,
        line: 1066,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "scrollPhysics",
        column: 9,
        line: 1067,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "specialTextSpanBuilder",
        column: 9,
        line: 1068,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48, C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52, C53 || CT.C53, C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 14,
        line: 1025,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 1025,
        file: null
      });
    },
    get C59() {
      return C59 = dart.constList([C60 || CT.C60], widget_inspector._Location);
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C59 || CT.C59,
        name: null,
        column: 20,
        line: 1024,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 13,
        line: 1077,
        file: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "baseStyle",
        column: 13,
        line: 1078,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 13,
        line: 1079,
        file: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlignVertical",
        column: 13,
        line: 1080,
        file: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "isHovering",
        column: 13,
        line: 1081,
        file: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "isFocused",
        column: 13,
        line: 1082,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "isEmpty",
        column: 13,
        line: 1083,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "expands",
        column: 13,
        line: 1084,
        file: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 1085,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 18,
        line: 1076,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "animation",
        column: 9,
        line: 1074,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 9,
        line: 1075,
        file: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 1088,
        file: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75, C76 || CT.C76], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C73 || CT.C73,
        name: null,
        column: 15,
        line: 1073,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTapDown",
        column: 13,
        line: 1105,
        file: null
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onForcePressStart",
        column: 13,
        line: 1106,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSingleTapUp",
        column: 13,
        line: 1108,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSingleTapCancel",
        column: 13,
        line: 1109,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSingleLongTapStart",
        column: 13,
        line: 1110,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSingleLongTapMoveUpdate",
        column: 13,
        line: 1111,
        file: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSingleLongTapEnd",
        column: 13,
        line: 1112,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onDoubleTapDown",
        column: 13,
        line: 1113,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onDragSelectionStart",
        column: 13,
        line: 1114,
        file: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onDragSelectionUpdate",
        column: 13,
        line: 1115,
        file: null
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "behavior",
        column: 13,
        line: 1116,
        file: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 1117,
        file: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79, C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84, C85 || CT.C85, C86 || CT.C86, C87 || CT.C87, C88 || CT.C88, C89 || CT.C89, C90 || CT.C90], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C78 || CT.C78,
        name: null,
        column: 18,
        line: 1104,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "ignoring",
        column: 11,
        line: 1103,
        file: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 1104,
        file: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C92 || CT.C92,
        name: null,
        column: 16,
        line: 1102,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPointerEnter",
        column: 9,
        line: 1100,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPointerExit",
        column: 9,
        line: 1101,
        file: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 1102,
        file: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C96 || CT.C96,
        name: null,
        column: 14,
        line: 1099,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 7,
        line: 1093,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 1099,
        file: null
      });
    },
    get C101() {
      return C101 = dart.constList([C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C101 || CT.C101,
        name: null,
        column: 12,
        line: 1092,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: ui.Brightness.prototype,
        [_name$]: "Brightness.light",
        index: 1
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: EmptyIterableOfTextInputFormatter().prototype
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name]: "TextInputAction.newline",
        index: 12
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name]: "TextInputAction.done",
        index: 2
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name]: "TextInputAction.go",
        index: 3
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name]: "TextInputAction.send",
        index: 5
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: text_input.TextInputAction.prototype,
        [_name]: "TextInputAction.search",
        index: 4
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name]: "FloatingCursorDragState.Start",
        index: 0
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name]: "FloatingCursorDragState.Update",
        index: 1
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: text_input.FloatingCursorDragState.prototype,
        [_name]: "FloatingCursorDragState.End",
        index: 2
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 15,
        line: 1553,
        file: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textSpan",
        column: 15,
        line: 1554,
        file: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 15,
        line: 1555,
        file: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorColor",
        column: 15,
        line: 1556,
        file: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundCursorColor",
        column: 15,
        line: 1557,
        file: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showCursor",
        column: 15,
        line: 1558,
        file: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "hasFocus",
        column: 15,
        line: 1561,
        file: null
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "maxLines",
        column: 15,
        line: 1562,
        file: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "minLines",
        column: 15,
        line: 1563,
        file: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "expands",
        column: 15,
        line: 1564,
        file: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "strutStyle",
        column: 15,
        line: 1565,
        file: null
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectionColor",
        column: 15,
        line: 1566,
        file: null
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textScaleFactor",
        column: 15,
        line: 1567,
        file: null
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textAlign",
        column: 15,
        line: 1569,
        file: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textDirection",
        column: 15,
        line: 1570,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "locale",
        column: 15,
        line: 1571,
        file: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "obscureText",
        column: 15,
        line: 1572,
        file: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autocorrect",
        column: 15,
        line: 1573,
        file: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 15,
        line: 1574,
        file: null
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelectionChanged",
        column: 15,
        line: 1575,
        file: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onCaretChanged",
        column: 15,
        line: 1576,
        file: null
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "rendererIgnoresPointer",
        column: 15,
        line: 1577,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorWidth",
        column: 15,
        line: 1578,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorRadius",
        column: 15,
        line: 1579,
        file: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "cursorOffset",
        column: 15,
        line: 1580,
        file: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "paintCursorAboveText",
        column: 15,
        line: 1581,
        file: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "enableInteractiveSelection",
        column: 15,
        line: 1582,
        file: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textSelectionDelegate",
        column: 15,
        line: 1583,
        file: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "devicePixelRatio",
        column: 15,
        line: 1584,
        file: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "supportSpecialText",
        column: 15,
        line: 1585,
        file: null
      });
    },
    get C115() {
      return C115 = dart.constList([C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122, C123 || CT.C123, C124 || CT.C124, C125 || CT.C125, C126 || CT.C126, C127 || CT.C127, C128 || CT.C128, C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134, C135 || CT.C135, C136 || CT.C136, C137 || CT.C137, C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145], widget_inspector._Location);
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C115 || CT.C115,
        name: null,
        column: 20,
        line: 1552,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart"
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onCopy",
        column: 13,
        line: 1549,
        file: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onCut",
        column: 13,
        line: 1550,
        file: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPaste",
        column: 13,
        line: 1551,
        file: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 1552,
        file: null
      });
    },
    get C147() {
      return C147 = dart.constList([C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151], widget_inspector._Location);
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C147 || CT.C147,
        name: null,
        column: 18,
        line: 1548,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart"
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "link",
        column: 11,
        line: 1547,
        file: null
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 1548,
        file: null
      });
    },
    get C153() {
      return C153 = dart.constList([C154 || CT.C154, C155 || CT.C155], widget_inspector._Location);
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C153 || CT.C153,
        name: null,
        column: 16,
        line: 1546,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart"
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "excludeFromSemantics",
        column: 7,
        line: 1528,
        file: null
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "axisDirection",
        column: 7,
        line: 1529,
        file: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "controller",
        column: 7,
        line: 1530,
        file: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "physics",
        column: 7,
        line: 1531,
        file: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dragStartBehavior",
        column: 7,
        line: 1532,
        file: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "viewportBuilder",
        column: 7,
        line: 1533,
        file: null
      });
    },
    get C157() {
      return C157 = dart.constList([C158 || CT.C158, C159 || CT.C159, C160 || CT.C160, C161 || CT.C161, C162 || CT.C162, C163 || CT.C163], widget_inspector._Location);
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C157 || CT.C157,
        name: null,
        column: 12,
        line: 1527,
        file: "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [_mask]: 1
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: null,
        decorationColor: null,
        decoration: C165 || CT.C165,
        background: null,
        foreground: null,
        locale: null,
        height: null,
        textBaseline: null,
        wordSpacing: null,
        letterSpacing: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 250000
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 125000
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 100000
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: curves.Cubic.prototype,
        d: 1,
        c: 0.2,
        b: 0,
        a: 0.4
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 500000
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 150000
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 5,
        right: 4,
        top: 4,
        left: 4
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$2]: "Axis.horizontal",
        index: 0
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name$2]: "Axis.vertical",
        index: 1
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: ui.Radius.prototype,
        y: 1,
        x: 1
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 1,
        [_dx]: 0.5
      });
    }
  });
  let C0;
  const _name = dart.privateName(text_input, "_name");
  let C1;
  const _name$ = dart.privateName(ui, "_name");
  let C2;
  let C3;
  const _name$0 = dart.privateName(recognizer, "_name");
  let C4;
  extended_text_field.ExtendedTextField = class ExtendedTextField extends framework.StatefulWidget {
    get textSelectionControls() {
      return this[textSelectionControls$];
    }
    set textSelectionControls(value) {
      super.textSelectionControls = value;
    }
    get specialTextSpanBuilder() {
      return this[specialTextSpanBuilder$];
    }
    set specialTextSpanBuilder(value) {
      super.specialTextSpanBuilder = value;
    }
    get controller() {
      return this[controller$];
    }
    set controller(value) {
      super.controller = value;
    }
    get focusNode() {
      return this[focusNode$];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get keyboardType() {
      return this[keyboardType$];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get textInputAction() {
      return this[textInputAction$];
    }
    set textInputAction(value) {
      super.textInputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    get strutStyle() {
      return this[strutStyle$];
    }
    set strutStyle(value) {
      super.strutStyle = value;
    }
    get textAlign() {
      return this[textAlign$];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textAlignVertical() {
      return this[textAlignVertical$];
    }
    set textAlignVertical(value) {
      super.textAlignVertical = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get autofocus() {
      return this[autofocus$];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get maxLines() {
      return this[maxLines$];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get minLines() {
      return this[minLines$];
    }
    set minLines(value) {
      super.minLines = value;
    }
    get expands() {
      return this[expands$];
    }
    set expands(value) {
      super.expands = value;
    }
    get readOnly() {
      return this[readOnly$];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get showCursor() {
      return this[showCursor$];
    }
    set showCursor(value) {
      super.showCursor = value;
    }
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    get maxLengthEnforced() {
      return this[maxLengthEnforced$];
    }
    set maxLengthEnforced(value) {
      super.maxLengthEnforced = value;
    }
    get onChanged() {
      return this[onChanged$];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onEditingComplete() {
      return this[onEditingComplete$];
    }
    set onEditingComplete(value) {
      super.onEditingComplete = value;
    }
    get onSubmitted() {
      return this[onSubmitted$];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get inputFormatters() {
      return this[inputFormatters$];
    }
    set inputFormatters(value) {
      super.inputFormatters = value;
    }
    get enabled() {
      return this[enabled$];
    }
    set enabled(value) {
      super.enabled = value;
    }
    get cursorWidth() {
      return this[cursorWidth$];
    }
    set cursorWidth(value) {
      super.cursorWidth = value;
    }
    get cursorRadius() {
      return this[cursorRadius$];
    }
    set cursorRadius(value) {
      super.cursorRadius = value;
    }
    get cursorColor() {
      return this[cursorColor$];
    }
    set cursorColor(value) {
      super.cursorColor = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get scrollPadding() {
      return this[scrollPadding$];
    }
    set scrollPadding(value) {
      super.scrollPadding = value;
    }
    get enableInteractiveSelection() {
      return this[enableInteractiveSelection$];
    }
    set enableInteractiveSelection(value) {
      super.enableInteractiveSelection = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    get buildCounter() {
      return this[buildCounter$];
    }
    set buildCounter(value) {
      super.buildCounter = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get scrollController() {
      return this[scrollController$];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get selectionEnabled() {
      let t0;
      t0 = this.enableInteractiveSelection;
      return t0 == null ? !dart.test(this.obscureText) : t0;
    }
    createState() {
      return new extended_text_field._ExtendedTextFieldState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfTextEditingController()).new("controller", this.controller, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfFocusNode()).new("focusNode", this.focusNode, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("enabled", this.enabled, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfInputDecoration()).new("decoration", this.decoration, {defaultValue: C0 || CT.C0}));
      properties.add(new (DiagnosticsPropertyOfTextInputType()).new("keyboardType", this.keyboardType, {defaultValue: text_input.TextInputType.text}));
      properties.add(new (DiagnosticsPropertyOfTextStyle()).new("style", this.style, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autofocus", this.autofocus, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("obscureText", this.obscureText, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autocorrect", this.autocorrect, {defaultValue: true}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: 1}));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new diagnostics.IntProperty.new("maxLength", this.maxLength, {defaultValue: null}));
      properties.add(new diagnostics.FlagProperty.new("maxLengthEnforced", {value: this.maxLengthEnforced, defaultValue: true, ifFalse: "maxLength not enforced"}));
      properties.add(new (EnumPropertyOfTextInputAction()).new("textInputAction", this.textInputAction, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextCapitalization()).new("textCapitalization", this.textCapitalization, {defaultValue: text_input.TextCapitalization.none}));
      properties.add(new (EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: ui.TextAlign.start}));
      properties.add(new (DiagnosticsPropertyOfTextAlignVertical()).new("textAlignVertical", this.textAlignVertical, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("cursorWidth", this.cursorWidth, {defaultValue: 2.0}));
      properties.add(new (DiagnosticsPropertyOfRadius()).new("cursorRadius", this.cursorRadius, {defaultValue: null}));
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfBrightness()).new("keyboardAppearance", this.keyboardAppearance, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfEdgeInsetsGeometry()).new("scrollPadding", this.scrollPadding, {defaultValue: C3 || CT.C3}));
      properties.add(new diagnostics.FlagProperty.new("selectionEnabled", {value: this.selectionEnabled, defaultValue: true, ifFalse: "selection disabled"}));
      properties.add(new (DiagnosticsPropertyOfScrollController()).new("scrollController", this.scrollController, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfScrollPhysics()).new("scrollPhysics", this.scrollPhysics, {defaultValue: null}));
    }
  };
  (extended_text_field.ExtendedTextField.new = function(opts) {
    let t0;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : C0 || CT.C0;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C1 || CT.C1;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C2 || CT.C2;
    let textAlignVertical = opts && 'textAlignVertical' in opts ? opts.textAlignVertical : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let maxLength = opts && 'maxLength' in opts ? opts.maxLength : null;
    let maxLengthEnforced = opts && 'maxLengthEnforced' in opts ? opts.maxLengthEnforced : true;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
    let enabled = opts && 'enabled' in opts ? opts.enabled : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : null;
    let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C3 || CT.C3;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let buildCounter = opts && 'buildCounter' in opts ? opts.buildCounter : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let specialTextSpanBuilder = opts && 'specialTextSpanBuilder' in opts ? opts.specialTextSpanBuilder : null;
    let textSelectionControls = opts && 'textSelectionControls' in opts ? opts.textSelectionControls : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$] = controller;
    this[focusNode$] = focusNode;
    this[decoration$] = decoration;
    this[textInputAction$] = textInputAction;
    this[textCapitalization$] = textCapitalization;
    this[style$] = style;
    this[strutStyle$] = strutStyle;
    this[textAlign$] = textAlign;
    this[textAlignVertical$] = textAlignVertical;
    this[textDirection$] = textDirection;
    this[readOnly$] = readOnly;
    this[showCursor$] = showCursor;
    this[autofocus$] = autofocus;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[maxLines$] = maxLines;
    this[minLines$] = minLines;
    this[expands$] = expands;
    this[maxLength$] = maxLength;
    this[maxLengthEnforced$] = maxLengthEnforced;
    this[onChanged$] = onChanged;
    this[onEditingComplete$] = onEditingComplete;
    this[onSubmitted$] = onSubmitted;
    this[inputFormatters$] = inputFormatters;
    this[enabled$] = enabled;
    this[cursorWidth$] = cursorWidth;
    this[cursorRadius$] = cursorRadius;
    this[cursorColor$] = cursorColor;
    this[keyboardAppearance$] = keyboardAppearance;
    this[scrollPadding$] = scrollPadding;
    this[dragStartBehavior$] = dragStartBehavior;
    this[enableInteractiveSelection$] = enableInteractiveSelection;
    this[onTap$] = onTap;
    this[buildCounter$] = buildCounter;
    this[scrollController$] = scrollController;
    this[scrollPhysics$] = scrollPhysics;
    this[specialTextSpanBuilder$] = specialTextSpanBuilder;
    this[textSelectionControls$] = textSelectionControls;
    if (!(textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 177, 16, "textAlign != null");
    if (!(readOnly != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 178, 16, "readOnly != null");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 179, 16, "autofocus != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 180, 16, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 181, 16, "autocorrect != null");
    if (!(maxLengthEnforced != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 182, 16, "maxLengthEnforced != null");
    if (!(scrollPadding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 183, 16, "scrollPadding != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 184, 16, "dragStartBehavior != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 185, 16, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 186, 16, "minLines == null || minLines > 0");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 188, 11, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 191, 16, "expands != null");
    if (!(!dart.test(expands) || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 193, 11, "!expands || (maxLines == null && minLines == null)");
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 196, 16, "maxLength == null ||\r\n            maxLength == TextField.noMaxLength ||\r\n            maxLength > 0");
    this[keyboardType$] = (t0 = keyboardType, t0 == null ? maxLines === 1 ? text_input.TextInputType.text : text_input.TextInputType.multiline : t0);
    extended_text_field.ExtendedTextField.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = extended_text_field.ExtendedTextField.prototype;
  dart.addTypeTests(extended_text_field.ExtendedTextField);
  const textSelectionControls$ = Symbol("ExtendedTextField.textSelectionControls");
  const specialTextSpanBuilder$ = Symbol("ExtendedTextField.specialTextSpanBuilder");
  const controller$ = Symbol("ExtendedTextField.controller");
  const focusNode$ = Symbol("ExtendedTextField.focusNode");
  const decoration$ = Symbol("ExtendedTextField.decoration");
  const keyboardType$ = Symbol("ExtendedTextField.keyboardType");
  const textInputAction$ = Symbol("ExtendedTextField.textInputAction");
  const textCapitalization$ = Symbol("ExtendedTextField.textCapitalization");
  const style$ = Symbol("ExtendedTextField.style");
  const strutStyle$ = Symbol("ExtendedTextField.strutStyle");
  const textAlign$ = Symbol("ExtendedTextField.textAlign");
  const textAlignVertical$ = Symbol("ExtendedTextField.textAlignVertical");
  const textDirection$ = Symbol("ExtendedTextField.textDirection");
  const autofocus$ = Symbol("ExtendedTextField.autofocus");
  const obscureText$ = Symbol("ExtendedTextField.obscureText");
  const autocorrect$ = Symbol("ExtendedTextField.autocorrect");
  const maxLines$ = Symbol("ExtendedTextField.maxLines");
  const minLines$ = Symbol("ExtendedTextField.minLines");
  const expands$ = Symbol("ExtendedTextField.expands");
  const readOnly$ = Symbol("ExtendedTextField.readOnly");
  const showCursor$ = Symbol("ExtendedTextField.showCursor");
  const maxLength$ = Symbol("ExtendedTextField.maxLength");
  const maxLengthEnforced$ = Symbol("ExtendedTextField.maxLengthEnforced");
  const onChanged$ = Symbol("ExtendedTextField.onChanged");
  const onEditingComplete$ = Symbol("ExtendedTextField.onEditingComplete");
  const onSubmitted$ = Symbol("ExtendedTextField.onSubmitted");
  const inputFormatters$ = Symbol("ExtendedTextField.inputFormatters");
  const enabled$ = Symbol("ExtendedTextField.enabled");
  const cursorWidth$ = Symbol("ExtendedTextField.cursorWidth");
  const cursorRadius$ = Symbol("ExtendedTextField.cursorRadius");
  const cursorColor$ = Symbol("ExtendedTextField.cursorColor");
  const keyboardAppearance$ = Symbol("ExtendedTextField.keyboardAppearance");
  const scrollPadding$ = Symbol("ExtendedTextField.scrollPadding");
  const enableInteractiveSelection$ = Symbol("ExtendedTextField.enableInteractiveSelection");
  const dragStartBehavior$ = Symbol("ExtendedTextField.dragStartBehavior");
  const onTap$ = Symbol("ExtendedTextField.onTap");
  const buildCounter$ = Symbol("ExtendedTextField.buildCounter");
  const scrollPhysics$ = Symbol("ExtendedTextField.scrollPhysics");
  const scrollController$ = Symbol("ExtendedTextField.scrollController");
  dart.setMethodSignature(extended_text_field.ExtendedTextField, () => ({
    __proto__: dart.getMethods(extended_text_field.ExtendedTextField.__proto__),
    createState: dart.fnType(extended_text_field._ExtendedTextFieldState, [])
  }));
  dart.setGetterSignature(extended_text_field.ExtendedTextField, () => ({
    __proto__: dart.getGetters(extended_text_field.ExtendedTextField.__proto__),
    selectionEnabled: core.bool
  }));
  dart.setLibraryUri(extended_text_field.ExtendedTextField, "package:extended_text_field/src/extended_text_field.dart");
  dart.setFieldSignature(extended_text_field.ExtendedTextField, () => ({
    __proto__: dart.getFields(extended_text_field.ExtendedTextField.__proto__),
    textSelectionControls: dart.finalFieldType(text_selection.TextSelectionControls),
    specialTextSpanBuilder: dart.finalFieldType(special_text_span_builder.SpecialTextSpanBuilder),
    controller: dart.finalFieldType(editable_text.TextEditingController),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    decoration: dart.finalFieldType(input_decorator.InputDecoration),
    keyboardType: dart.finalFieldType(text_input.TextInputType),
    textInputAction: dart.finalFieldType(text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    style: dart.finalFieldType(text_style.TextStyle),
    strutStyle: dart.finalFieldType(strut_style.StrutStyle),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textAlignVertical: dart.finalFieldType(alignment.TextAlignVertical),
    textDirection: dart.finalFieldType(ui.TextDirection),
    autofocus: dart.finalFieldType(core.bool),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    maxLines: dart.finalFieldType(core.int),
    minLines: dart.finalFieldType(core.int),
    expands: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    showCursor: dart.finalFieldType(core.bool),
    maxLength: dart.finalFieldType(core.int),
    maxLengthEnforced: dart.finalFieldType(core.bool),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    onEditingComplete: dart.finalFieldType(dart.fnType(dart.void, [])),
    onSubmitted: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    inputFormatters: dart.finalFieldType(core.List$(text_formatter.TextInputFormatter)),
    enabled: dart.finalFieldType(core.bool),
    cursorWidth: dart.finalFieldType(core.double),
    cursorRadius: dart.finalFieldType(ui.Radius),
    cursorColor: dart.finalFieldType(ui.Color),
    keyboardAppearance: dart.finalFieldType(ui.Brightness),
    scrollPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [])),
    buildCounter: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext], {currentLength: core.int, isFocused: core.bool, maxLength: core.int})),
    scrollPhysics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    scrollController: dart.finalFieldType(scroll_controller.ScrollController)
  }));
  dart.defineLazy(extended_text_field.ExtendedTextField, {
    /*extended_text_field.ExtendedTextField.noMaxLength*/get noMaxLength() {
      return -1;
    }
  });
  const _editableTextKey = dart.privateName(extended_text_field, "_editableTextKey");
  const _splashes = dart.privateName(extended_text_field, "_splashes");
  const _currentSplash = dart.privateName(extended_text_field, "_currentSplash");
  const _controller = dart.privateName(extended_text_field, "_controller");
  const _focusNode = dart.privateName(extended_text_field, "_focusNode");
  const _isHovering = dart.privateName(extended_text_field, "_isHovering");
  const _shouldShowSelectionToolbar = dart.privateName(extended_text_field, "_shouldShowSelectionToolbar");
  const _showSelectionHandles = dart.privateName(extended_text_field, "_showSelectionHandles");
  const _effectiveController = dart.privateName(extended_text_field, "_effectiveController");
  const _effectiveFocusNode = dart.privateName(extended_text_field, "_effectiveFocusNode");
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  const _getEffectiveDecoration = dart.privateName(extended_text_field, "_getEffectiveDecoration");
  const _editableText = dart.privateName(extended_text_field, "_editableText");
  const _requestKeyboard = dart.privateName(extended_text_field, "_requestKeyboard");
  const _shouldShowSelectionHandles = dart.privateName(extended_text_field, "_shouldShowSelectionHandles");
  const _name$1 = dart.privateName(platform, "_name");
  let C10;
  let C11;
  let C12;
  const _handleSelectionChanged = dart.privateName(extended_text_field, "_handleSelectionChanged");
  const _handleSelectionHandleTapped = dart.privateName(extended_text_field, "_handleSelectionHandleTapped");
  const _createInkFeature = dart.privateName(extended_text_field, "_createInkFeature");
  const _renderEditable = dart.privateName(extended_text_field, "_renderEditable");
  const _startSplash = dart.privateName(extended_text_field, "_startSplash");
  const _handleTapDown = dart.privateName(extended_text_field, "_handleTapDown");
  const _handleForcePressStarted = dart.privateName(extended_text_field, "_handleForcePressStarted");
  const _confirmCurrentSplash = dart.privateName(extended_text_field, "_confirmCurrentSplash");
  const _handleSingleTapUp = dart.privateName(extended_text_field, "_handleSingleTapUp");
  const _cancelCurrentSplash = dart.privateName(extended_text_field, "_cancelCurrentSplash");
  const _handleSingleTapCancel = dart.privateName(extended_text_field, "_handleSingleTapCancel");
  const _handleSingleLongTapStart = dart.privateName(extended_text_field, "_handleSingleLongTapStart");
  const _handleSingleLongTapMoveUpdate = dart.privateName(extended_text_field, "_handleSingleLongTapMoveUpdate");
  const _showToolbarForLongTapAndDoubleTap = dart.privateName(extended_text_field, "_showToolbarForLongTapAndDoubleTap");
  const _handleSingleLongTapEnd = dart.privateName(extended_text_field, "_handleSingleLongTapEnd");
  const _handleDoubleTapDown = dart.privateName(extended_text_field, "_handleDoubleTapDown");
  const _handleMouseDragSelectionStart = dart.privateName(extended_text_field, "_handleMouseDragSelectionStart");
  const _handleMouseDragSelectionUpdate = dart.privateName(extended_text_field, "_handleMouseDragSelectionUpdate");
  const _handleHover = dart.privateName(extended_text_field, "_handleHover");
  const _handlePointerEnter = dart.privateName(extended_text_field, "_handlePointerEnter");
  const _handlePointerExit = dart.privateName(extended_text_field, "_handlePointerExit");
  let C13;
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
  let C15;
  let C14;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C62;
  let C61;
  let C74;
  let C75;
  let C76;
  let C73;
  let C72;
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
  let C78;
  let C77;
  let C93;
  let C94;
  let C92;
  let C91;
  let C97;
  let C98;
  let C99;
  let C96;
  let C95;
  let C102;
  let C103;
  let C101;
  let C100;
  const State_AutomaticKeepAliveClientMixin$ = class State_AutomaticKeepAliveClientMixin extends framework.State$(extended_text_field.ExtendedTextField) {};
  (State_AutomaticKeepAliveClientMixin$.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(extended_text_field.ExtendedTextField)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$, automatic_keep_alive.AutomaticKeepAliveClientMixin$(extended_text_field.ExtendedTextField));
  extended_text_field._ExtendedTextFieldState = class _ExtendedTextFieldState extends State_AutomaticKeepAliveClientMixin$ {
    get [_effectiveController]() {
      let t0;
      t0 = this.widget.controller;
      return t0 == null ? this[_controller] : t0;
    }
    get [_effectiveFocusNode]() {
      let t1, t0;
      t0 = this.widget.focusNode;
      return t0 == null ? (t1 = this[_focusNode], t1 == null ? this[_focusNode] = new focus_manager.FocusNode.new() : t1) : t0;
    }
    get needsCounter() {
      return this.widget.maxLength != null && this.widget.decoration != null && this.widget.decoration.counterText == null;
    }
    [_getEffectiveDecoration]() {
      let t0, t0$, t0$0, t0$1, t0$2;
      let localizations = material_localizations.MaterialLocalizations.of(this.context);
      let themeData = theme.Theme.of(this.context);
      let effectiveDecoration = (t0 = this.widget.decoration, t0 == null ? C0 || CT.C0 : t0).applyDefaults(themeData.inputDecorationTheme).copyWith({enabled: this.widget.enabled, hintMaxLines: (t0$0 = (t0$ = this.widget.decoration, t0$ == null ? null : t0$.hintMaxLines), t0$0 == null ? this.widget.maxLines : t0$0)});
      if (effectiveDecoration.counter != null || effectiveDecoration.counterText != null) return effectiveDecoration;
      let counter = null;
      let currentLength = this[_effectiveController].value.text[$runes][$length];
      if (effectiveDecoration.counter == null && effectiveDecoration.counterText == null && this.widget.buildCounter != null) {
        let isFocused = this[_effectiveFocusNode].hasFocus;
        counter = new basic.Semantics.new({container: true, liveRegion: isFocused, child: this.widget.buildCounter(this.context, {currentLength: currentLength, maxLength: this.widget.maxLength, isFocused: isFocused}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5});
        return effectiveDecoration.copyWith({counter: counter});
      }
      if (this.widget.maxLength == null) return effectiveDecoration;
      let counterText = dart.str(currentLength);
      let semanticCounterText = "";
      if (dart.notNull(this.widget.maxLength) > 0) {
        counterText = counterText + ("/" + dart.str(this.widget.maxLength));
        let remaining = dart.asInt((dart.notNull(this.widget.maxLength) - dart.notNull(currentLength))[$clamp](0, this.widget.maxLength));
        semanticCounterText = localizations.remainingTextFieldCharacterCount(remaining);
        if (dart.notNull(this[_effectiveController].value.text[$runes][$length]) > dart.notNull(this.widget.maxLength)) {
          return effectiveDecoration.copyWith({errorText: (t0$1 = effectiveDecoration.errorText, t0$1 == null ? "" : t0$1), counterStyle: (t0$2 = effectiveDecoration.errorStyle, t0$2 == null ? themeData.textTheme.caption.copyWith({color: themeData.errorColor}) : t0$2), counterText: counterText, semanticCounterText: semanticCounterText});
        }
      }
      return effectiveDecoration.copyWith({counterText: counterText, semanticCounterText: semanticCounterText});
    }
    initState() {
      super.initState();
      if (this.widget.controller == null) this[_controller] = new editable_text.TextEditingController.new();
    }
    didUpdateWidget(oldWidget) {
      let t1, t0, t0$, t1$, t0$0, t0$1;
      extended_text_field.ExtendedTextField._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (this.widget.controller == null && oldWidget.controller != null)
        this[_controller] = new editable_text.TextEditingController.fromValue(oldWidget.controller.value);
      else if (this.widget.controller != null && oldWidget.controller == null) this[_controller] = null;
      let isEnabled = (t0$ = (t0 = this.widget.enabled, t0 == null ? (t1 = this.widget.decoration, t1 == null ? null : t1.enabled) : t0), t0$ == null ? true : t0$);
      let wasEnabled = (t0$1 = (t0$0 = oldWidget.enabled, t0$0 == null ? (t1$ = oldWidget.decoration, t1$ == null ? null : t1$.enabled) : t0$0), t0$1 == null ? true : t0$1);
      if (dart.test(wasEnabled) && !dart.test(isEnabled)) {
        this[_effectiveFocusNode].unfocus();
      }
      if (dart.test(this[_effectiveFocusNode].hasFocus) && !dart.equals(this.widget.readOnly, oldWidget.readOnly)) {
        if (dart.test(this[_effectiveController].selection.isCollapsed)) {
          this[_showSelectionHandles] = !dart.test(this.widget.readOnly);
        }
      }
    }
    dispose() {
      let t0;
      t0 = this[_focusNode];
      t0 == null ? null : t0.dispose();
      super.dispose();
    }
    get [_editableText]() {
      return this[_editableTextKey].currentState;
    }
    [_requestKeyboard]() {
      let t0;
      t0 = this[_editableText];
      t0 == null ? null : t0.requestKeyboard();
    }
    [_shouldShowSelectionHandles](cause) {
      if (!dart.test(this[_shouldShowSelectionToolbar])) return false;
      if (dart.equals(cause, editable.SelectionChangedCause.keyboard)) return false;
      if (dart.test(this.widget.readOnly) && dart.test(this[_effectiveController].selection.isCollapsed)) return false;
      if (dart.equals(cause, editable.SelectionChangedCause.longPress)) return true;
      if (this[_effectiveController].text[$isNotEmpty]) return true;
      return false;
    }
    [_handleSelectionChanged](selection, cause) {
      let t0;
      let willShowSelectionHandles = this[_shouldShowSelectionHandles](cause);
      if (!dart.equals(willShowSelectionHandles, this[_showSelectionHandles])) {
        this.setState(dart.fn(() => {
          this[_showSelectionHandles] = willShowSelectionHandles;
        }, VoidToNull()));
      }
      switch (theme.Theme.of(this.context).platform) {
        case C10 || CT.C10:
        {
          if (dart.equals(cause, editable.SelectionChangedCause.longPress)) {
            t0 = this[_editableText];
            t0 == null ? null : t0.bringIntoView(selection.base);
          }
          return;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
      }
    }
    [_handleSelectionHandleTapped]() {
      if (dart.test(this[_effectiveController].selection.isCollapsed)) {
        this[_editableText].toggleToolbar();
      }
    }
    [_createInkFeature](globalPosition) {
      let t0;
      let inkController = material.Material.of(this.context);
      let themeData = theme.Theme.of(this.context);
      let editableContext = this[_editableTextKey].currentContext;
      let referenceBox = box.RenderBox._check((t0 = input_decorator.InputDecorator.containerOf(editableContext), t0 == null ? editableContext.findRenderObject() : t0));
      let position = referenceBox.globalToLocal(globalPosition);
      let color = themeData.splashColor;
      let splash = null;
      const handleRemoved = () => {
        if (this[_splashes] != null) {
          if (!dart.test(this[_splashes].contains(splash))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 760, 16, "   assert(_splashes.contai");
          this[_splashes].remove(splash);
          if (dart.equals(this[_currentSplash], splash)) this[_currentSplash] = null;
          this.updateKeepAlive();
        }
      };
      dart.fn(handleRemoved, VoidTovoid());
      splash = themeData.splashFactory.create({controller: inkController, referenceBox: referenceBox, position: position, color: color, containedInkWell: true, borderRadius: border_radius.BorderRadius.zero, onRemoved: handleRemoved, textDirection: basic.Directionality.of(this.context)});
      return splash;
    }
    get [_renderEditable]() {
      return this[_editableTextKey].currentState.renderEditable;
    }
    [_handleTapDown](details) {
      this[_renderEditable].handleTapDown(details);
      this[_startSplash](details.globalPosition);
      let kind = details.kind;
      this[_shouldShowSelectionToolbar] = kind == null || dart.equals(kind, ui.PointerDeviceKind.touch) || dart.equals(kind, ui.PointerDeviceKind.stylus);
    }
    [_handleForcePressStarted](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        this[_renderEditable].selectWordsInRange({from: details.globalPosition, cause: editable.SelectionChangedCause.forcePress});
        if (dart.test(this[_shouldShowSelectionToolbar])) {
          this[_editableTextKey].currentState.showToolbar();
        }
      }
    }
    [_handleSingleTapUp](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        switch (theme.Theme.of(this.context).platform) {
          case C10 || CT.C10:
          {
            this[_renderEditable].selectWordEdge({cause: editable.SelectionChangedCause.tap});
            break;
          }
          case C11 || CT.C11:
          case C12 || CT.C12:
          {
            this[_renderEditable].selectPosition({cause: editable.SelectionChangedCause.tap});
            break;
          }
        }
      }
      this[_requestKeyboard]();
      this[_confirmCurrentSplash]();
      if (this.widget.onTap != null) this.widget.onTap();
    }
    [_handleSingleTapCancel]() {
      this[_cancelCurrentSplash]();
    }
    [_handleSingleLongTapStart](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        switch (theme.Theme.of(this.context).platform) {
          case C10 || CT.C10:
          {
            this[_renderEditable].selectPositionAt({from: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
          case C11 || CT.C11:
          case C12 || CT.C12:
          {
            this[_renderEditable].selectWord({cause: editable.SelectionChangedCause.longPress});
            feedback.Feedback.forLongPress(this.context);
            break;
          }
        }
      }
      this[_confirmCurrentSplash]();
    }
    [_handleSingleLongTapMoveUpdate](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        switch (theme.Theme.of(this.context).platform) {
          case C10 || CT.C10:
          {
            this[_renderEditable].selectPositionAt({from: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
          case C11 || CT.C11:
          case C12 || CT.C12:
          {
            this[_renderEditable].selectWordsInRange({from: details.globalPosition['-'](details.offsetFromOrigin), to: details.globalPosition, cause: editable.SelectionChangedCause.longPress});
            break;
          }
        }
      }
    }
    [_handleSingleLongTapEnd](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        this[_showToolbarForLongTapAndDoubleTap]();
      }
    }
    [_showToolbarForLongTapAndDoubleTap]() {
      if (dart.test(this[_shouldShowSelectionToolbar])) {
        if (this[_editableText].selectionOverlay == null) {
          let showHandles = this[_editableText].textEditingValue.text != null && this[_editableText].textEditingValue.text !== "";
          this[_editableTextKey].currentState.createSelectionOverlay({showHandles: showHandles});
        }
        this[_editableText].showToolbar();
      }
    }
    [_handleDoubleTapDown](details) {
      if (dart.test(this.widget.selectionEnabled)) {
        this[_renderEditable].selectWord({cause: editable.SelectionChangedCause.doubleTap});
        this[_showToolbarForLongTapAndDoubleTap]();
      }
    }
    [_handleMouseDragSelectionStart](details) {
      this[_renderEditable].selectPositionAt({from: details.globalPosition, cause: editable.SelectionChangedCause.drag});
      this[_startSplash](details.globalPosition);
    }
    [_handleMouseDragSelectionUpdate](startDetails, updateDetails) {
      this[_renderEditable].selectPositionAt({from: startDetails.globalPosition, to: updateDetails.globalPosition, cause: editable.SelectionChangedCause.drag});
    }
    [_startSplash](globalPosition) {
      if (dart.test(this[_effectiveFocusNode].hasFocus)) return;
      let splash = this[_createInkFeature](globalPosition);
      this[_splashes] == null ? this[_splashes] = new (_HashSetOfInteractiveInkFeature()).new() : null;
      this[_splashes].add(splash);
      this[_currentSplash] = splash;
      this.updateKeepAlive();
    }
    [_confirmCurrentSplash]() {
      let t0;
      t0 = this[_currentSplash];
      t0 == null ? null : t0.confirm();
      this[_currentSplash] = null;
    }
    [_cancelCurrentSplash]() {
      let t0;
      t0 = this[_currentSplash];
      t0 == null ? null : t0.cancel();
    }
    get wantKeepAlive() {
      return this[_splashes] != null && dart.test(this[_splashes][$isNotEmpty]);
    }
    deactivate() {
      if (this[_splashes] != null) {
        let splashes = this[_splashes];
        this[_splashes] = null;
        for (let splash of splashes)
          splash.dispose();
        this[_currentSplash] = null;
      }
      if (!(this[_currentSplash] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 947, 12, "   assert(_currentSpla");
      super.deactivate();
    }
    [_handlePointerEnter](event) {
      return this[_handleHover](true);
    }
    [_handlePointerExit](event) {
      return this[_handleHover](false);
    }
    [_handleHover](hovering) {
      if (!dart.equals(hovering, this[_isHovering])) {
        this.setState(dart.fn(() => this[_isHovering] = hovering, VoidTobool()));
      }
    }
    build(context) {
      let t0, t0$, t1, t0$0, t0$1;
      super.build(context);
      if (!dart.test(debug.debugCheckHasMaterial(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 965, 12, "   assert(debugCheckHasMateria");
      if (!dart.test(debug$.debugCheckHasDirectionality(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 968, 12, "   assert(debugCheckHasDirectionalit");
      if (!!(this.widget.style != null && dart.equals(this.widget.style.inherit, false) && (this.widget.style.fontSize == null || this.widget.style.textBaseline == null))) dart.assertFailed("inherit false style must supply fontSize and textBaseline", "org-dartlang-app:///packages/extended_text_field/src/extended_text_field.dart", 970, 7, "t(\r\n      !(widget.style != null &&\r\n          widget.style.inherit == false &&\r\n          (widget.style.fontSize == null || widget.style.textBaseline");
      let themeData = theme.Theme.of(context);
      let style = themeData.textTheme.subhead.merge(this.widget.style);
      let keyboardAppearance = (t0 = this.widget.keyboardAppearance, t0 == null ? themeData.primaryColorBrightness : t0);
      let controller = this[_effectiveController];
      let focusNode = this[_effectiveFocusNode];
      let formatters = (t0$ = this.widget.inputFormatters, t0$ == null ? JSArrayOfTextInputFormatter().of([]) : t0$);
      if (this.widget.maxLength != null && dart.test(this.widget.maxLengthEnforced)) formatters[$add](new text_formatter.LengthLimitingTextInputFormatter.new(this.widget.maxLength));
      let forcePressEnabled = null;
      let textSelectionControls = this.widget.textSelectionControls;
      let paintCursorAboveText = null;
      let cursorOpacityAnimates = null;
      let cursorOffset = null;
      let cursorColor = this.widget.cursorColor;
      let cursorRadius = this.widget.cursorRadius;
      switch (themeData.platform) {
        case C10 || CT.C10:
        {
          forcePressEnabled = true;
          textSelectionControls == null ? textSelectionControls = cupertino_text_selection_controls.cupertinoExtendedTextSelectionControls : null;
          paintCursorAboveText = true;
          cursorOpacityAnimates = true;
          cursorColor == null ? cursorColor = theme$.CupertinoTheme.of(context).primaryColor : null;
          cursorRadius == null ? cursorRadius = C13 || CT.C13 : null;
          cursorOffset = new ui.Offset.new(-2 / dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio), 0.0);
          break;
        }
        case C11 || CT.C11:
        case C12 || CT.C12:
        {
          forcePressEnabled = false;
          textSelectionControls == null ? textSelectionControls = material_text_selection_controls.materialExtendedTextSelectionControls : null;
          paintCursorAboveText = false;
          cursorOpacityAnimates = false;
          cursorColor == null ? cursorColor = themeData.cursorColor : null;
          break;
        }
      }
      let child = new basic.RepaintBoundary.new({child: new extended_editable_text.ExtendedEditableText.new({key: this[_editableTextKey], readOnly: this.widget.readOnly, showCursor: this.widget.showCursor, showSelectionHandles: this[_showSelectionHandles], controller: controller, focusNode: focusNode, keyboardType: this.widget.keyboardType, textInputAction: this.widget.textInputAction, textCapitalization: this.widget.textCapitalization, style: style, strutStyle: this.widget.strutStyle, textAlign: this.widget.textAlign, textDirection: this.widget.textDirection, autofocus: this.widget.autofocus, obscureText: this.widget.obscureText, autocorrect: this.widget.autocorrect, maxLines: this.widget.maxLines, minLines: this.widget.minLines, expands: this.widget.expands, selectionColor: themeData.textSelectionColor, selectionControls: dart.test(this.widget.selectionEnabled) ? textSelectionControls : null, onChanged: this.widget.onChanged, onSelectionChanged: dart.bind(this, _handleSelectionChanged), onEditingComplete: this.widget.onEditingComplete, onSubmitted: this.widget.onSubmitted, onSelectionHandleTapped: dart.bind(this, _handleSelectionHandleTapped), inputFormatters: formatters, rendererIgnoresPointer: true, cursorWidth: this.widget.cursorWidth, cursorRadius: cursorRadius, cursorColor: cursorColor, cursorOpacityAnimates: cursorOpacityAnimates, cursorOffset: cursorOffset, paintCursorAboveText: paintCursorAboveText, backgroundCursorColor: colors$.CupertinoColors.inactiveGray, scrollPadding: this.widget.scrollPadding, keyboardAppearance: keyboardAppearance, enableInteractiveSelection: this.widget.enableInteractiveSelection, dragStartBehavior: this.widget.dragStartBehavior, scrollController: this.widget.scrollController, scrollPhysics: this.widget.scrollPhysics, specialTextSpanBuilder: this.widget.specialTextSpanBuilder, $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58});
      if (this.widget.decoration != null) {
        child = new transitions.AnimatedBuilder.new({animation: new change_notifier._MergingListenable.new(JSArrayOfListenable().of([focusNode, controller])), builder: dart.fn((context, child) => new input_decorator.InputDecorator.new({decoration: this[_getEffectiveDecoration](), baseStyle: this.widget.style, textAlign: this.widget.textAlign, textAlignVertical: this.widget.textAlignVertical, isHovering: this[_isHovering], isFocused: focusNode.hasFocus, isEmpty: controller.value.text[$isEmpty], expands: this.widget.expands, child: child, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), BuildContextAndWidgetToInputDecorator()), child: child, $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
      }
      return new basic.Semantics.new({onTap: dart.fn(() => {
          if (!dart.test(this[_effectiveController].selection.isValid)) this[_effectiveController].selection = new text_editing.TextSelection.collapsed({offset: this[_effectiveController].text.length});
          this[_requestKeyboard]();
        }, VoidToNull()), child: new basic.Listener.new({onPointerEnter: dart.bind(this, _handlePointerEnter), onPointerExit: dart.bind(this, _handlePointerExit), child: new basic.IgnorePointer.new({ignoring: !dart.test((t0$1 = (t0$0 = this.widget.enabled, t0$0 == null ? (t1 = this.widget.decoration, t1 == null ? null : t1.enabled) : t0$0), t0$1 == null ? true : t0$1)), child: new text_selection.TextSelectionGestureDetector.new({onTapDown: dart.bind(this, _handleTapDown), onForcePressStart: dart.test(forcePressEnabled) ? dart.bind(this, _handleForcePressStarted) : null, onSingleTapUp: dart.bind(this, _handleSingleTapUp), onSingleTapCancel: dart.bind(this, _handleSingleTapCancel), onSingleLongTapStart: dart.bind(this, _handleSingleLongTapStart), onSingleLongTapMoveUpdate: dart.bind(this, _handleSingleLongTapMoveUpdate), onSingleLongTapEnd: dart.bind(this, _handleSingleLongTapEnd), onDoubleTapDown: dart.bind(this, _handleDoubleTapDown), onDragSelectionStart: dart.bind(this, _handleMouseDragSelectionStart), onDragSelectionUpdate: dart.bind(this, _handleMouseDragSelectionUpdate), behavior: proxy_box.HitTestBehavior.translucent, child: child, $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C100 || CT.C100});
    }
  };
  (extended_text_field._ExtendedTextFieldState.new = function() {
    this[_editableTextKey] = GlobalKeyOfExtendedEditableTextState().new();
    this[_splashes] = null;
    this[_currentSplash] = null;
    this[_controller] = null;
    this[_focusNode] = null;
    this[_isHovering] = false;
    this[_shouldShowSelectionToolbar] = true;
    this[_showSelectionHandles] = false;
    extended_text_field._ExtendedTextFieldState.__proto__.new.call(this);
    ;
  }).prototype = extended_text_field._ExtendedTextFieldState.prototype;
  dart.addTypeTests(extended_text_field._ExtendedTextFieldState);
  dart.setMethodSignature(extended_text_field._ExtendedTextFieldState, () => ({
    __proto__: dart.getMethods(extended_text_field._ExtendedTextFieldState.__proto__),
    [_getEffectiveDecoration]: dart.fnType(input_decorator.InputDecoration, []),
    [_requestKeyboard]: dart.fnType(dart.void, []),
    [_shouldShowSelectionHandles]: dart.fnType(core.bool, [editable.SelectionChangedCause]),
    [_handleSelectionChanged]: dart.fnType(dart.void, [text_editing.TextSelection, editable.SelectionChangedCause]),
    [_handleSelectionHandleTapped]: dart.fnType(dart.void, []),
    [_createInkFeature]: dart.fnType(ink_well.InteractiveInkFeature, [ui.Offset]),
    [_handleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleForcePressStarted]: dart.fnType(dart.void, [force_press.ForcePressDetails]),
    [_handleSingleTapUp]: dart.fnType(dart.void, [tap.TapUpDetails]),
    [_handleSingleTapCancel]: dart.fnType(dart.void, []),
    [_handleSingleLongTapStart]: dart.fnType(dart.void, [long_press.LongPressStartDetails]),
    [_handleSingleLongTapMoveUpdate]: dart.fnType(dart.void, [long_press.LongPressMoveUpdateDetails]),
    [_handleSingleLongTapEnd]: dart.fnType(dart.void, [long_press.LongPressEndDetails]),
    [_showToolbarForLongTapAndDoubleTap]: dart.fnType(dart.void, []),
    [_handleDoubleTapDown]: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleMouseDragSelectionStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_handleMouseDragSelectionUpdate]: dart.fnType(dart.void, [drag_details.DragStartDetails, drag_details.DragUpdateDetails]),
    [_startSplash]: dart.fnType(dart.void, [ui.Offset]),
    [_confirmCurrentSplash]: dart.fnType(dart.void, []),
    [_cancelCurrentSplash]: dart.fnType(dart.void, []),
    [_handlePointerEnter]: dart.fnType(dart.void, [events.PointerEnterEvent]),
    [_handlePointerExit]: dart.fnType(dart.void, [events.PointerExitEvent]),
    [_handleHover]: dart.fnType(dart.void, [core.bool])
  }));
  dart.setGetterSignature(extended_text_field._ExtendedTextFieldState, () => ({
    __proto__: dart.getGetters(extended_text_field._ExtendedTextFieldState.__proto__),
    [_effectiveController]: editable_text.TextEditingController,
    [_effectiveFocusNode]: focus_manager.FocusNode,
    needsCounter: core.bool,
    [_editableText]: extended_editable_text.ExtendedEditableTextState,
    [_renderEditable]: extended_render_editable.ExtendedRenderEditable,
    wantKeepAlive: core.bool
  }));
  dart.setLibraryUri(extended_text_field._ExtendedTextFieldState, "package:extended_text_field/src/extended_text_field.dart");
  dart.setFieldSignature(extended_text_field._ExtendedTextFieldState, () => ({
    __proto__: dart.getFields(extended_text_field._ExtendedTextFieldState.__proto__),
    [_editableTextKey]: dart.finalFieldType(framework.GlobalKey$(extended_editable_text.ExtendedEditableTextState)),
    [_splashes]: dart.fieldType(core.Set$(ink_well.InteractiveInkFeature)),
    [_currentSplash]: dart.fieldType(ink_well.InteractiveInkFeature),
    [_controller]: dart.fieldType(editable_text.TextEditingController),
    [_focusNode]: dart.fieldType(focus_manager.FocusNode),
    [_isHovering]: dart.fieldType(core.bool),
    [_shouldShowSelectionToolbar]: dart.fieldType(core.bool),
    [_showSelectionHandles]: dart.fieldType(core.bool)
  }));
  let C104;
  const _strutStyle = dart.privateName(extended_editable_text, "_strutStyle");
  let C105;
  extended_editable_text.ExtendedEditableText = class ExtendedEditableText extends framework.StatefulWidget {
    get specialTextSpanBuilder() {
      return this[specialTextSpanBuilder$0];
    }
    set specialTextSpanBuilder(value) {
      super.specialTextSpanBuilder = value;
    }
    get controller() {
      return this[controller$0];
    }
    set controller(value) {
      super.controller = value;
    }
    get focusNode() {
      return this[focusNode$0];
    }
    set focusNode(value) {
      super.focusNode = value;
    }
    get obscureText() {
      return this[obscureText$0];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get readOnly() {
      return this[readOnly$0];
    }
    set readOnly(value) {
      super.readOnly = value;
    }
    get showSelectionHandles() {
      return this[showSelectionHandles$];
    }
    set showSelectionHandles(value) {
      super.showSelectionHandles = value;
    }
    get showCursor() {
      return this[showCursor$0];
    }
    set showCursor(value) {
      super.showCursor = value;
    }
    get autocorrect() {
      return this[autocorrect$0];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get style() {
      return this[style$0];
    }
    set style(value) {
      super.style = value;
    }
    get textAlign() {
      return this[textAlign$0];
    }
    set textAlign(value) {
      super.textAlign = value;
    }
    get textDirection() {
      return this[textDirection$0];
    }
    set textDirection(value) {
      super.textDirection = value;
    }
    get textCapitalization() {
      return this[textCapitalization$0];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get textScaleFactor() {
      return this[textScaleFactor$];
    }
    set textScaleFactor(value) {
      super.textScaleFactor = value;
    }
    get cursorColor() {
      return this[cursorColor$0];
    }
    set cursorColor(value) {
      super.cursorColor = value;
    }
    get backgroundCursorColor() {
      return this[backgroundCursorColor$];
    }
    set backgroundCursorColor(value) {
      super.backgroundCursorColor = value;
    }
    get maxLines() {
      return this[maxLines$0];
    }
    set maxLines(value) {
      super.maxLines = value;
    }
    get minLines() {
      return this[minLines$0];
    }
    set minLines(value) {
      super.minLines = value;
    }
    get expands() {
      return this[expands$0];
    }
    set expands(value) {
      super.expands = value;
    }
    get autofocus() {
      return this[autofocus$0];
    }
    set autofocus(value) {
      super.autofocus = value;
    }
    get selectionColor() {
      return this[selectionColor$];
    }
    set selectionColor(value) {
      super.selectionColor = value;
    }
    get selectionControls() {
      return this[selectionControls$];
    }
    set selectionControls(value) {
      super.selectionControls = value;
    }
    get keyboardType() {
      return this[keyboardType$0];
    }
    set keyboardType(value) {
      super.keyboardType = value;
    }
    get textInputAction() {
      return this[textInputAction$0];
    }
    set textInputAction(value) {
      super.textInputAction = value;
    }
    get onChanged() {
      return this[onChanged$0];
    }
    set onChanged(value) {
      super.onChanged = value;
    }
    get onEditingComplete() {
      return this[onEditingComplete$0];
    }
    set onEditingComplete(value) {
      super.onEditingComplete = value;
    }
    get onSubmitted() {
      return this[onSubmitted$0];
    }
    set onSubmitted(value) {
      super.onSubmitted = value;
    }
    get onSelectionChanged() {
      return this[onSelectionChanged$];
    }
    set onSelectionChanged(value) {
      super.onSelectionChanged = value;
    }
    get onSelectionHandleTapped() {
      return this[onSelectionHandleTapped$];
    }
    set onSelectionHandleTapped(value) {
      super.onSelectionHandleTapped = value;
    }
    get inputFormatters() {
      return this[inputFormatters$0];
    }
    set inputFormatters(value) {
      super.inputFormatters = value;
    }
    get rendererIgnoresPointer() {
      return this[rendererIgnoresPointer$];
    }
    set rendererIgnoresPointer(value) {
      super.rendererIgnoresPointer = value;
    }
    get cursorWidth() {
      return this[cursorWidth$0];
    }
    set cursorWidth(value) {
      super.cursorWidth = value;
    }
    get cursorRadius() {
      return this[cursorRadius$0];
    }
    set cursorRadius(value) {
      super.cursorRadius = value;
    }
    get cursorOpacityAnimates() {
      return this[cursorOpacityAnimates$];
    }
    set cursorOpacityAnimates(value) {
      super.cursorOpacityAnimates = value;
    }
    get cursorOffset() {
      return this[cursorOffset$];
    }
    set cursorOffset(value) {
      super.cursorOffset = value;
    }
    get paintCursorAboveText() {
      return this[paintCursorAboveText$];
    }
    set paintCursorAboveText(value) {
      super.paintCursorAboveText = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$0];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    get scrollPadding() {
      return this[scrollPadding$0];
    }
    set scrollPadding(value) {
      super.scrollPadding = value;
    }
    get enableInteractiveSelection() {
      return this[enableInteractiveSelection$0];
    }
    set enableInteractiveSelection(value) {
      super.enableInteractiveSelection = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$0];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get scrollController() {
      return this[scrollController$0];
    }
    set scrollController(value) {
      super.scrollController = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$0];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get strutStyle() {
      return this[_strutStyle];
    }
    get selectionEnabled() {
      let t0;
      t0 = this.enableInteractiveSelection;
      return t0 == null ? !dart.test(this.obscureText) : t0;
    }
    createState() {
      return new extended_editable_text.ExtendedEditableTextState.new();
    }
    debugFillProperties(properties) {
      let t0;
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfTextEditingController()).new("controller", this.controller));
      properties.add(new (DiagnosticsPropertyOfFocusNode()).new("focusNode", this.focusNode));
      properties.add(new (DiagnosticsPropertyOfbool()).new("obscureText", this.obscureText, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autocorrect", this.autocorrect, {defaultValue: true}));
      t0 = this.style;
      t0 == null ? null : t0.debugFillProperties(properties);
      properties.add(new (EnumPropertyOfTextAlign()).new("textAlign", this.textAlign, {defaultValue: null}));
      properties.add(new (EnumPropertyOfTextDirection()).new("textDirection", this.textDirection, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor, {defaultValue: null}));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines, {defaultValue: 1}));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfbool()).new("autofocus", this.autofocus, {defaultValue: false}));
      properties.add(new (DiagnosticsPropertyOfTextInputType()).new("keyboardType", this.keyboardType, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfScrollController()).new("scrollController", this.scrollController, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfScrollPhysics()).new("scrollPhysics", this.scrollPhysics, {defaultValue: null}));
    }
  };
  (extended_editable_text.ExtendedEditableText.new = function(opts) {
    let t0, t1, t0$, t0$0;
    let key = opts && 'key' in opts ? opts.key : null;
    let controller = opts && 'controller' in opts ? opts.controller : null;
    let focusNode = opts && 'focusNode' in opts ? opts.focusNode : null;
    let readOnly = opts && 'readOnly' in opts ? opts.readOnly : false;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let style = opts && 'style' in opts ? opts.style : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C2 || CT.C2;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let autofocus = opts && 'autofocus' in opts ? opts.autofocus : false;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let showSelectionHandles = opts && 'showSelectionHandles' in opts ? opts.showSelectionHandles : false;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
    let keyboardType = opts && 'keyboardType' in opts ? opts.keyboardType : null;
    let textInputAction = opts && 'textInputAction' in opts ? opts.textInputAction : null;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : C1 || CT.C1;
    let onChanged = opts && 'onChanged' in opts ? opts.onChanged : null;
    let onEditingComplete = opts && 'onEditingComplete' in opts ? opts.onEditingComplete : null;
    let onSubmitted = opts && 'onSubmitted' in opts ? opts.onSubmitted : null;
    let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
    let onSelectionHandleTapped = opts && 'onSelectionHandleTapped' in opts ? opts.onSelectionHandleTapped : null;
    let inputFormatters = opts && 'inputFormatters' in opts ? opts.inputFormatters : null;
    let rendererIgnoresPointer = opts && 'rendererIgnoresPointer' in opts ? opts.rendererIgnoresPointer : false;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 2;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorOpacityAnimates = opts && 'cursorOpacityAnimates' in opts ? opts.cursorOpacityAnimates : false;
    let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : null;
    let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : false;
    let scrollPadding = opts && 'scrollPadding' in opts ? opts.scrollPadding : C3 || CT.C3;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : C104 || CT.C104;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C4 || CT.C4;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let specialTextSpanBuilder = opts && 'specialTextSpanBuilder' in opts ? opts.specialTextSpanBuilder : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[controller$0] = controller;
    this[focusNode$0] = focusNode;
    this[readOnly$0] = readOnly;
    this[obscureText$0] = obscureText;
    this[autocorrect$0] = autocorrect;
    this[style$0] = style;
    this[cursorColor$0] = cursorColor;
    this[backgroundCursorColor$] = backgroundCursorColor;
    this[textAlign$0] = textAlign;
    this[textDirection$0] = textDirection;
    this[locale$] = locale;
    this[textScaleFactor$] = textScaleFactor;
    this[maxLines$0] = maxLines;
    this[minLines$0] = minLines;
    this[expands$0] = expands;
    this[autofocus$0] = autofocus;
    this[showSelectionHandles$] = showSelectionHandles;
    this[selectionColor$] = selectionColor;
    this[selectionControls$] = selectionControls;
    this[textInputAction$0] = textInputAction;
    this[textCapitalization$0] = textCapitalization;
    this[onChanged$0] = onChanged;
    this[onEditingComplete$0] = onEditingComplete;
    this[onSubmitted$0] = onSubmitted;
    this[onSelectionChanged$] = onSelectionChanged;
    this[onSelectionHandleTapped$] = onSelectionHandleTapped;
    this[rendererIgnoresPointer$] = rendererIgnoresPointer;
    this[cursorWidth$0] = cursorWidth;
    this[cursorRadius$0] = cursorRadius;
    this[cursorOpacityAnimates$] = cursorOpacityAnimates;
    this[cursorOffset$] = cursorOffset;
    this[paintCursorAboveText$] = paintCursorAboveText;
    this[scrollPadding$0] = scrollPadding;
    this[keyboardAppearance$0] = keyboardAppearance;
    this[dragStartBehavior$0] = dragStartBehavior;
    this[enableInteractiveSelection$0] = enableInteractiveSelection;
    this[scrollController$0] = scrollController;
    this[scrollPhysics$0] = scrollPhysics;
    this[specialTextSpanBuilder$0] = specialTextSpanBuilder;
    if (!(controller != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 156, 16, "controller != null");
    if (!(focusNode != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 157, 16, "focusNode != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 158, 16, "obscureText != null");
    if (!(autocorrect != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 159, 16, "autocorrect != null");
    if (!(showSelectionHandles != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 160, 16, "showSelectionHandles != null");
    if (!(readOnly != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 161, 16, "readOnly != null");
    if (!(style != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 162, 16, "style != null");
    if (!(cursorColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 163, 16, "cursorColor != null");
    if (!(cursorOpacityAnimates != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 164, 16, "cursorOpacityAnimates != null");
    if (!(paintCursorAboveText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 165, 16, "paintCursorAboveText != null");
    if (!(backgroundCursorColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 166, 16, "backgroundCursorColor != null");
    if (!(textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 167, 16, "textAlign != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 168, 16, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 169, 16, "minLines == null || minLines > 0");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 171, 11, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 174, 16, "expands != null");
    if (!(!dart.test(expands) || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 176, 11, "!expands || (maxLines == null && minLines == null)");
    if (!(autofocus != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 179, 16, "autofocus != null");
    if (!(rendererIgnoresPointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 180, 16, "rendererIgnoresPointer != null");
    if (!(scrollPadding != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 181, 16, "scrollPadding != null");
    if (!(dragStartBehavior != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 182, 16, "dragStartBehavior != null");
    this[_strutStyle] = strutStyle;
    this[keyboardType$0] = (t0 = keyboardType, t0 == null ? maxLines === 1 ? text_input.TextInputType.text : text_input.TextInputType.multiline : t0);
    this[inputFormatters$0] = maxLines === 1 ? (t0$ = JSArrayOfTextInputFormatter().of([text_formatter.BlacklistingTextInputFormatter.singleLineFormatter]), t0$[$addAll]((t1 = inputFormatters, t1 == null ? C105 || CT.C105 : t1)), t0$) : inputFormatters;
    this[showCursor$0] = (t0$0 = showCursor, t0$0 == null ? !dart.test(readOnly) : t0$0);
    extended_editable_text.ExtendedEditableText.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = extended_editable_text.ExtendedEditableText.prototype;
  dart.addTypeTests(extended_editable_text.ExtendedEditableText);
  const specialTextSpanBuilder$0 = Symbol("ExtendedEditableText.specialTextSpanBuilder");
  const controller$0 = Symbol("ExtendedEditableText.controller");
  const focusNode$0 = Symbol("ExtendedEditableText.focusNode");
  const obscureText$0 = Symbol("ExtendedEditableText.obscureText");
  const readOnly$0 = Symbol("ExtendedEditableText.readOnly");
  const showSelectionHandles$ = Symbol("ExtendedEditableText.showSelectionHandles");
  const showCursor$0 = Symbol("ExtendedEditableText.showCursor");
  const autocorrect$0 = Symbol("ExtendedEditableText.autocorrect");
  const style$0 = Symbol("ExtendedEditableText.style");
  const textAlign$0 = Symbol("ExtendedEditableText.textAlign");
  const textDirection$0 = Symbol("ExtendedEditableText.textDirection");
  const textCapitalization$0 = Symbol("ExtendedEditableText.textCapitalization");
  const locale$ = Symbol("ExtendedEditableText.locale");
  const textScaleFactor$ = Symbol("ExtendedEditableText.textScaleFactor");
  const cursorColor$0 = Symbol("ExtendedEditableText.cursorColor");
  const backgroundCursorColor$ = Symbol("ExtendedEditableText.backgroundCursorColor");
  const maxLines$0 = Symbol("ExtendedEditableText.maxLines");
  const minLines$0 = Symbol("ExtendedEditableText.minLines");
  const expands$0 = Symbol("ExtendedEditableText.expands");
  const autofocus$0 = Symbol("ExtendedEditableText.autofocus");
  const selectionColor$ = Symbol("ExtendedEditableText.selectionColor");
  const selectionControls$ = Symbol("ExtendedEditableText.selectionControls");
  const keyboardType$0 = Symbol("ExtendedEditableText.keyboardType");
  const textInputAction$0 = Symbol("ExtendedEditableText.textInputAction");
  const onChanged$0 = Symbol("ExtendedEditableText.onChanged");
  const onEditingComplete$0 = Symbol("ExtendedEditableText.onEditingComplete");
  const onSubmitted$0 = Symbol("ExtendedEditableText.onSubmitted");
  const onSelectionChanged$ = Symbol("ExtendedEditableText.onSelectionChanged");
  const onSelectionHandleTapped$ = Symbol("ExtendedEditableText.onSelectionHandleTapped");
  const inputFormatters$0 = Symbol("ExtendedEditableText.inputFormatters");
  const rendererIgnoresPointer$ = Symbol("ExtendedEditableText.rendererIgnoresPointer");
  const cursorWidth$0 = Symbol("ExtendedEditableText.cursorWidth");
  const cursorRadius$0 = Symbol("ExtendedEditableText.cursorRadius");
  const cursorOpacityAnimates$ = Symbol("ExtendedEditableText.cursorOpacityAnimates");
  const cursorOffset$ = Symbol("ExtendedEditableText.cursorOffset");
  const paintCursorAboveText$ = Symbol("ExtendedEditableText.paintCursorAboveText");
  const keyboardAppearance$0 = Symbol("ExtendedEditableText.keyboardAppearance");
  const scrollPadding$0 = Symbol("ExtendedEditableText.scrollPadding");
  const enableInteractiveSelection$0 = Symbol("ExtendedEditableText.enableInteractiveSelection");
  const dragStartBehavior$0 = Symbol("ExtendedEditableText.dragStartBehavior");
  const scrollController$0 = Symbol("ExtendedEditableText.scrollController");
  const scrollPhysics$0 = Symbol("ExtendedEditableText.scrollPhysics");
  dart.setMethodSignature(extended_editable_text.ExtendedEditableText, () => ({
    __proto__: dart.getMethods(extended_editable_text.ExtendedEditableText.__proto__),
    createState: dart.fnType(extended_editable_text.ExtendedEditableTextState, [])
  }));
  dart.setGetterSignature(extended_editable_text.ExtendedEditableText, () => ({
    __proto__: dart.getGetters(extended_editable_text.ExtendedEditableText.__proto__),
    strutStyle: strut_style.StrutStyle,
    selectionEnabled: core.bool
  }));
  dart.setLibraryUri(extended_editable_text.ExtendedEditableText, "package:extended_text_field/src/extended_editable_text.dart");
  dart.setFieldSignature(extended_editable_text.ExtendedEditableText, () => ({
    __proto__: dart.getFields(extended_editable_text.ExtendedEditableText.__proto__),
    specialTextSpanBuilder: dart.finalFieldType(special_text_span_builder.SpecialTextSpanBuilder),
    controller: dart.finalFieldType(editable_text.TextEditingController),
    focusNode: dart.finalFieldType(focus_manager.FocusNode),
    obscureText: dart.finalFieldType(core.bool),
    readOnly: dart.finalFieldType(core.bool),
    showSelectionHandles: dart.finalFieldType(core.bool),
    showCursor: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    style: dart.finalFieldType(text_style.TextStyle),
    [_strutStyle]: dart.finalFieldType(strut_style.StrutStyle),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textDirection: dart.finalFieldType(ui.TextDirection),
    textCapitalization: dart.finalFieldType(text_input.TextCapitalization),
    locale: dart.finalFieldType(ui.Locale),
    textScaleFactor: dart.finalFieldType(core.double),
    cursorColor: dart.finalFieldType(ui.Color),
    backgroundCursorColor: dart.finalFieldType(ui.Color),
    maxLines: dart.finalFieldType(core.int),
    minLines: dart.finalFieldType(core.int),
    expands: dart.finalFieldType(core.bool),
    autofocus: dart.finalFieldType(core.bool),
    selectionColor: dart.finalFieldType(ui.Color),
    selectionControls: dart.finalFieldType(text_selection.TextSelectionControls),
    keyboardType: dart.finalFieldType(text_input.TextInputType),
    textInputAction: dart.finalFieldType(text_input.TextInputAction),
    onChanged: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    onEditingComplete: dart.finalFieldType(dart.fnType(dart.void, [])),
    onSubmitted: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    onSelectionChanged: dart.finalFieldType(dart.fnType(dart.void, [text_editing.TextSelection, editable.SelectionChangedCause])),
    onSelectionHandleTapped: dart.finalFieldType(dart.fnType(dart.void, [])),
    inputFormatters: dart.finalFieldType(core.List$(text_formatter.TextInputFormatter)),
    rendererIgnoresPointer: dart.finalFieldType(core.bool),
    cursorWidth: dart.finalFieldType(core.double),
    cursorRadius: dart.finalFieldType(ui.Radius),
    cursorOpacityAnimates: dart.finalFieldType(core.bool),
    cursorOffset: dart.finalFieldType(ui.Offset),
    paintCursorAboveText: dart.finalFieldType(core.bool),
    keyboardAppearance: dart.finalFieldType(ui.Brightness),
    scrollPadding: dart.finalFieldType(edge_insets.EdgeInsets),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    scrollController: dart.finalFieldType(scroll_controller.ScrollController),
    scrollPhysics: dart.finalFieldType(scroll_physics.ScrollPhysics)
  }));
  dart.defineLazy(extended_editable_text.ExtendedEditableText, {
    /*extended_editable_text.ExtendedEditableText.debugDeterministicCursor*/get debugDeterministicCursor() {
      return false;
    },
    set debugDeterministicCursor(_) {}
  });
  const _cursorTimer = dart.privateName(extended_editable_text, "_cursorTimer");
  const _targetCursorVisibility = dart.privateName(extended_editable_text, "_targetCursorVisibility");
  const _cursorVisibilityNotifier = dart.privateName(extended_editable_text, "_cursorVisibilityNotifier");
  const _editableKey = dart.privateName(extended_editable_text, "_editableKey");
  const _textInputConnection = dart.privateName(extended_editable_text, "_textInputConnection");
  const _selectionOverlay = dart.privateName(extended_editable_text, "_selectionOverlay");
  const _scrollController = dart.privateName(extended_editable_text, "_scrollController");
  const _cursorBlinkOpacityController = dart.privateName(extended_editable_text, "_cursorBlinkOpacityController");
  const _layerLink = dart.privateName(extended_editable_text, "_layerLink");
  const _didAutoFocus = dart.privateName(extended_editable_text, "_didAutoFocus");
  const _focusAttachment = dart.privateName(extended_editable_text, "_focusAttachment");
  const _floatingCursorResetController = dart.privateName(extended_editable_text, "_floatingCursorResetController");
  const _lastKnownRemoteTextEditingValue = dart.privateName(extended_editable_text, "_lastKnownRemoteTextEditingValue");
  const _startCaretRect = dart.privateName(extended_editable_text, "_startCaretRect");
  const _lastTextPosition = dart.privateName(extended_editable_text, "_lastTextPosition");
  const _pointOffsetOrigin = dart.privateName(extended_editable_text, "_pointOffsetOrigin");
  const _lastBoundedOffset = dart.privateName(extended_editable_text, "_lastBoundedOffset");
  const _textChangedSinceLastCaretUpdate = dart.privateName(extended_editable_text, "_textChangedSinceLastCaretUpdate");
  const _currentCaretRect = dart.privateName(extended_editable_text, "_currentCaretRect");
  const _showCaretOnScreenScheduled = dart.privateName(extended_editable_text, "_showCaretOnScreenScheduled");
  const _lastBottomViewInset = dart.privateName(extended_editable_text, "_lastBottomViewInset");
  const _obscureShowCharTicksPending = dart.privateName(extended_editable_text, "_obscureShowCharTicksPending");
  const _obscureLatestCharIndex = dart.privateName(extended_editable_text, "_obscureLatestCharIndex");
  const _textDirection = dart.privateName(extended_editable_text, "_textDirection");
  const _cursorColor = dart.privateName(extended_editable_text, "_cursorColor");
  const _didChangeTextEditingValue = dart.privateName(extended_editable_text, "_didChangeTextEditingValue");
  const _handleFocusChanged = dart.privateName(extended_editable_text, "_handleFocusChanged");
  const _onCursorColorTick = dart.privateName(extended_editable_text, "_onCursorColorTick");
  const _onFloatingCursorResetTick = dart.privateName(extended_editable_text, "_onFloatingCursorResetTick");
  const _updateRemoteEditingValueIfNeeded = dart.privateName(extended_editable_text, "_updateRemoteEditingValueIfNeeded");
  const _value = dart.privateName(extended_editable_text, "_value");
  const _closeInputConnectionIfNeeded = dart.privateName(extended_editable_text, "_closeInputConnectionIfNeeded");
  const _hasFocus = dart.privateName(extended_editable_text, "_hasFocus");
  const _openInputConnection = dart.privateName(extended_editable_text, "_openInputConnection");
  const _hasInputConnection = dart.privateName(extended_editable_text, "_hasInputConnection");
  const _stopCursorTimer = dart.privateName(extended_editable_text, "_stopCursorTimer");
  const _handleSpecialTextSpan = dart.privateName(extended_editable_text, "_handleSpecialTextSpan");
  const _hideSelectionOverlayIfNeeded = dart.privateName(extended_editable_text, "_hideSelectionOverlayIfNeeded");
  const _showCaretOnScreen = dart.privateName(extended_editable_text, "_showCaretOnScreen");
  const _formatAndSetValue = dart.privateName(extended_editable_text, "_formatAndSetValue");
  const _startCursorTimer = dart.privateName(extended_editable_text, "_startCursorTimer");
  const _isMultiline = dart.privateName(extended_editable_text, "_isMultiline");
  const _finalizeEditing = dart.privateName(extended_editable_text, "_finalizeEditing");
  let C106;
  let C107;
  let C108;
  let C109;
  let C110;
  const _floatingCursorOffset = dart.privateName(extended_editable_text, "_floatingCursorOffset");
  let C111;
  let C112;
  let C113;
  const _handleSelectionChanged$ = dart.privateName(extended_editable_text, "_handleSelectionChanged");
  const _getScrollOffsetForCaret = dart.privateName(extended_editable_text, "_getScrollOffsetForCaret");
  const _getCaretRectAtScrollOffset = dart.privateName(extended_editable_text, "_getCaretRectAtScrollOffset");
  const _openOrCloseInputConnectionIfNeeded = dart.privateName(extended_editable_text, "_openOrCloseInputConnectionIfNeeded");
  const _updateOrDisposeSelectionOverlayIfNeeded = dart.privateName(extended_editable_text, "_updateOrDisposeSelectionOverlayIfNeeded");
  const _handleCaretChanged = dart.privateName(extended_editable_text, "_handleCaretChanged");
  const _cursorTick = dart.privateName(extended_editable_text, "_cursorTick");
  const _cursorWaitForStart = dart.privateName(extended_editable_text, "_cursorWaitForStart");
  const _startOrStopCursorTimerIfNeeded = dart.privateName(extended_editable_text, "_startOrStopCursorTimerIfNeeded");
  const _devicePixelRatio = dart.privateName(extended_editable_text, "_devicePixelRatio");
  const _semanticsOnCopy = dart.privateName(extended_editable_text, "_semanticsOnCopy");
  const _semanticsOnCut = dart.privateName(extended_editable_text, "_semanticsOnCut");
  const _semanticsOnPaste = dart.privateName(extended_editable_text, "_semanticsOnPaste");
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
  let C145;
  let C115;
  let C114;
  let C148;
  let C149;
  let C150;
  let C151;
  let C147;
  let C146;
  let C154;
  let C155;
  let C153;
  let C152;
  let C158;
  let C159;
  let C160;
  let C161;
  let C162;
  let C163;
  let C157;
  let C156;
  const _mask = dart.privateName(ui, "_mask");
  let C165;
  const _package = dart.privateName(text_style, "_package");
  const _fontFamilyFallback = dart.privateName(text_style, "_fontFamilyFallback");
  let C164;
  const _duration = dart.privateName(core, "_duration");
  let C166;
  let C167;
  let C168;
  let C169;
  const State_AutomaticKeepAliveClientMixin$$ = class State_AutomaticKeepAliveClientMixin extends framework.State$(extended_editable_text.ExtendedEditableText) {};
  (State_AutomaticKeepAliveClientMixin$$.new = function() {
    automatic_keep_alive.AutomaticKeepAliveClientMixin$(extended_editable_text.ExtendedEditableText)[dart.mixinNew].call(this);
    State_AutomaticKeepAliveClientMixin$$.__proto__.new.call(this);
  }).prototype = State_AutomaticKeepAliveClientMixin$$.prototype;
  dart.applyMixin(State_AutomaticKeepAliveClientMixin$$, automatic_keep_alive.AutomaticKeepAliveClientMixin$(extended_editable_text.ExtendedEditableText));
  const State_WidgetsBindingObserver$ = class State_WidgetsBindingObserver extends State_AutomaticKeepAliveClientMixin$$ {};
  (State_WidgetsBindingObserver$.new = function() {
    State_WidgetsBindingObserver$.__proto__.new.call(this);
  }).prototype = State_WidgetsBindingObserver$.prototype;
  dart.applyMixin(State_WidgetsBindingObserver$, binding.WidgetsBindingObserver);
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends State_WidgetsBindingObserver$ {};
  (State_TickerProviderStateMixin$.new = function() {
    ticker_provider.TickerProviderStateMixin$(extended_editable_text.ExtendedEditableText)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, ticker_provider.TickerProviderStateMixin$(extended_editable_text.ExtendedEditableText));
  extended_editable_text.ExtendedEditableTextState = class ExtendedEditableTextState extends State_TickerProviderStateMixin$ {
    get supportSpecialText() {
      return this.widget.specialTextSpanBuilder != null && !dart.test(this.widget.obscureText) && dart.equals(this[_textDirection], ui.TextDirection.ltr);
    }
    get wantKeepAlive() {
      return this.widget.focusNode.hasFocus;
    }
    get [_cursorColor]() {
      return this.widget.cursorColor.withOpacity(this[_cursorBlinkOpacityController].value);
    }
    get cutEnabled() {
      return !dart.test(this.widget.readOnly);
    }
    get copyEnabled() {
      return true;
    }
    get pasteEnabled() {
      return !dart.test(this.widget.readOnly);
    }
    get selectAllEnabled() {
      return true;
    }
    initState() {
      let t0;
      super.initState();
      this.widget.controller.addListener(dart.bind(this, _didChangeTextEditingValue));
      this[_focusAttachment] = this.widget.focusNode.attach(this.context);
      this.widget.focusNode.addListener(dart.bind(this, _handleFocusChanged));
      this[_scrollController] = (t0 = this.widget.scrollController, t0 == null ? new scroll_controller.ScrollController.new() : t0);
      this[_scrollController].addListener(dart.fn(() => {
        let t0;
        t0 = this[_selectionOverlay];
        t0 == null ? null : t0.updateForScroll();
      }, VoidToNull()));
      this[_cursorBlinkOpacityController] = new animation_controller.AnimationController.new({vsync: this, duration: extended_editable_text.ExtendedEditableTextState._fadeDuration});
      this[_cursorBlinkOpacityController].addListener(dart.bind(this, _onCursorColorTick));
      this[_floatingCursorResetController] = new animation_controller.AnimationController.new({vsync: this});
      this[_floatingCursorResetController].addListener(dart.bind(this, _onFloatingCursorResetTick));
      this[_cursorVisibilityNotifier].value = this.widget.showCursor;
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      if (!dart.test(this[_didAutoFocus]) && dart.test(this.widget.autofocus)) {
        focus_scope.FocusScope.of(this.context).autofocus(this.widget.focusNode);
        this[_didAutoFocus] = true;
      }
    }
    didUpdateWidget(oldWidget) {
      let t0, t0$, t0$0;
      extended_editable_text.ExtendedEditableText._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.controller, oldWidget.controller)) {
        oldWidget.controller.removeListener(dart.bind(this, _didChangeTextEditingValue));
        this.widget.controller.addListener(dart.bind(this, _didChangeTextEditingValue));
        this[_updateRemoteEditingValueIfNeeded]();
      }
      if (!dart.equals(this.widget.controller.selection, oldWidget.controller.selection)) {
        t0 = this[_selectionOverlay];
        t0 == null ? null : t0.update(this[_value]);
      }
      t0$ = this[_selectionOverlay];
      t0$ == null ? null : t0$.handlesVisible = this.widget.showSelectionHandles;
      if (!dart.equals(this.widget.focusNode, oldWidget.focusNode)) {
        oldWidget.focusNode.removeListener(dart.bind(this, _handleFocusChanged));
        t0$0 = this[_focusAttachment];
        t0$0 == null ? null : t0$0.detach();
        this[_focusAttachment] = this.widget.focusNode.attach(this.context);
        this.widget.focusNode.addListener(dart.bind(this, _handleFocusChanged));
        this.updateKeepAlive();
      }
      if (dart.test(this.widget.readOnly)) {
        this[_closeInputConnectionIfNeeded]();
      } else {
        if (dart.test(oldWidget.readOnly) && dart.test(this[_hasFocus])) this[_openInputConnection]();
      }
    }
    dispose() {
      let t0;
      this.widget.controller.removeListener(dart.bind(this, _didChangeTextEditingValue));
      this[_cursorBlinkOpacityController].removeListener(dart.bind(this, _onCursorColorTick));
      this[_floatingCursorResetController].removeListener(dart.bind(this, _onFloatingCursorResetTick));
      this[_closeInputConnectionIfNeeded]();
      if (!!dart.test(this[_hasInputConnection])) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 815, 12, "t(!_hasInputConnecti");
      this[_stopCursorTimer]();
      if (!(this[_cursorTimer] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 817, 12, "t(_cursorTimer == nu");
      t0 = this[_selectionOverlay];
      t0 == null ? null : t0.dispose();
      this[_selectionOverlay] = null;
      this[_focusAttachment].detach();
      this.widget.focusNode.removeListener(dart.bind(this, _handleFocusChanged));
      super.dispose();
    }
    updateEditingValue(value) {
      if (dart.test(this.widget.readOnly)) {
        return;
      }
      value = this[_handleSpecialTextSpan](value);
      if (value.text != this[_value].text) {
        this[_hideSelectionOverlayIfNeeded]();
        this[_showCaretOnScreen]();
        if (dart.test(this.widget.obscureText) && value.text.length === this[_value].text.length + 1) {
          this[_obscureShowCharTicksPending] = 3;
          this[_obscureLatestCharIndex] = this[_value].selection.baseOffset;
        }
      }
      this[_lastKnownRemoteTextEditingValue] = value;
      this[_formatAndSetValue](value);
      this[_stopCursorTimer]({resetCharTicks: false});
      this[_startCursorTimer]();
    }
    [_handleSpecialTextSpan](value) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      if (dart.test(this.supportSpecialText)) {
        let textChanged = (t0 = this[_value], t0 == null ? null : t0.text) != (t0$ = value, t0$ == null ? null : t0$.text);
        let selectionChanged = !dart.equals((t0$0 = this[_value], t0$0 == null ? null : t0$0.selection), (t0$1 = value, t0$1 == null ? null : t0$1.selection));
        if (textChanged) {
          let newTextSpan = this.widget.specialTextSpanBuilder.build((t0$2 = value, t0$2 == null ? null : t0$2.text));
          if (newTextSpan == null) return value;
          let oldTextSpan = this.widget.specialTextSpanBuilder.build((t0$3 = this[_value], t0$3 == null ? null : t0$3.text));
          value = extended_text_utils.handleSpecialTextSpanDelete(value, this[_value], oldTextSpan, this[_textInputConnection]);
          if (newTextSpan != null) {
            let text = newTextSpan.toPlainText();
            if (text != value.text || selectionChanged) {
              value = extended_text_utils.correctCaretOffset(value, newTextSpan, this[_textInputConnection]);
            }
          }
        }
      }
      return value;
    }
    performAction(action) {
      switch (action) {
        case C106 || CT.C106:
        {
          if (!dart.test(this[_isMultiline])) this[_finalizeEditing](true);
          break;
        }
        case C107 || CT.C107:
        case C108 || CT.C108:
        case C109 || CT.C109:
        case C110 || CT.C110:
        {
          this[_finalizeEditing](true);
          break;
        }
        default:
        {
          this[_finalizeEditing](false);
          break;
        }
      }
    }
    get [_floatingCursorOffset]() {
      return new ui.Offset.new(0.0, dart.notNull(this.renderEditable.preferredLineHeight) / 2);
    }
    updateFloatingCursor(point) {
      let t0, t0$;
      switch (point.state) {
        case C111 || CT.C111:
        {
          if (dart.test(this[_floatingCursorResetController].isAnimating)) {
            this[_floatingCursorResetController].stop();
            this[_onFloatingCursorResetTick]();
          }
          let currentTextPosition = null;
          if (dart.test(this.supportSpecialText)) {
            currentTextPosition = extended_text_utils.convertTextInputPostionToTextPainterPostion(this.renderEditable.text, this.renderEditable.selection.base);
          } else {
            currentTextPosition = new ui.TextPosition.new({offset: this.renderEditable.selection.baseOffset});
          }
          this[_startCaretRect] = this.renderEditable.getLocalRectForCaret(currentTextPosition);
          this.renderEditable.setFloatingCursor(point.state, this[_startCaretRect].center['-'](this[_floatingCursorOffset]), currentTextPosition);
          break;
        }
        case C112 || CT.C112:
        {
          if (this[_pointOffsetOrigin] != null) {
            let centeredPoint = point.offset['-'](this[_pointOffsetOrigin]);
            let rawCursorOffset = this[_startCaretRect].center['+'](centeredPoint)['-'](this[_floatingCursorOffset]);
            this[_lastBoundedOffset] = this.renderEditable.calculateBoundedFloatingCursorOffset(rawCursorOffset);
            this[_lastTextPosition] = this.renderEditable.getPositionForPoint(this.renderEditable.localToGlobal(this[_lastBoundedOffset]['+'](this[_floatingCursorOffset])));
            if (dart.test((t0$ = (t0 = this.renderEditable, t0 == null ? null : t0.handleSpecialText), t0$ == null ? false : t0$))) {
              this[_lastTextPosition] = extended_text_utils.makeSureCaretNotInSpecialText(this.renderEditable.text, this[_lastTextPosition]);
            }
            this.renderEditable.setFloatingCursor(point.state, this[_lastBoundedOffset], this[_lastTextPosition]);
          } else {
            this[_pointOffsetOrigin] = point.offset;
          }
          break;
        }
        case C113 || CT.C113:
        {
          this[_floatingCursorResetController].value = 0.0;
          this[_floatingCursorResetController].animateTo(1.0, {duration: extended_editable_text.ExtendedEditableTextState._floatingCursorResetTime, curve: curves.Curves.decelerate});
          break;
        }
      }
    }
    [_onFloatingCursorResetTick]() {
      let finalPosition = this.renderEditable.getLocalRectForCaret(this[_lastTextPosition]).centerLeft['-'](this[_floatingCursorOffset]);
      if (dart.test(this[_floatingCursorResetController].isCompleted)) {
        this.renderEditable.setFloatingCursor(text_input.FloatingCursorDragState.End, finalPosition, this[_lastTextPosition]);
        if (this[_lastTextPosition].offset != this.renderEditable.selection.baseOffset) this[_handleSelectionChanged$](new text_editing.TextSelection.collapsed({offset: this[_lastTextPosition].offset}), this.renderEditable, editable.SelectionChangedCause.forcePress);
        this[_startCaretRect] = null;
        this[_lastTextPosition] = null;
        this[_pointOffsetOrigin] = null;
        this[_lastBoundedOffset] = null;
      } else {
        let lerpValue = this[_floatingCursorResetController].value;
        let lerpX = ui.lerpDouble(this[_lastBoundedOffset].dx, finalPosition.dx, lerpValue);
        let lerpY = ui.lerpDouble(this[_lastBoundedOffset].dy, finalPosition.dy, lerpValue);
        this.renderEditable.setFloatingCursor(text_input.FloatingCursorDragState.Update, new ui.Offset.new(lerpX, lerpY), this[_lastTextPosition], {resetLerpValue: lerpValue});
      }
    }
    [_finalizeEditing](shouldUnfocus) {
      if (this.widget.onEditingComplete != null) {
        this.widget.onEditingComplete();
      } else {
        this.widget.controller.clearComposing();
        if (dart.test(shouldUnfocus)) this.widget.focusNode.unfocus();
      }
      if (this.widget.onSubmitted != null) this.widget.onSubmitted(this[_value].text);
    }
    [_updateRemoteEditingValueIfNeeded]() {
      if (!dart.test(this[_hasInputConnection])) return;
      let localValue = this[_value];
      if (dart.equals(localValue, this[_lastKnownRemoteTextEditingValue])) return;
      this[_lastKnownRemoteTextEditingValue] = localValue;
      this[_textInputConnection].setEditingState(localValue);
    }
    get [_value]() {
      return this.widget.controller.value;
    }
    set [_value](value) {
      this.widget.controller.value = value;
    }
    get [_hasFocus]() {
      return this.widget.focusNode.hasFocus;
    }
    get [_isMultiline]() {
      return this.widget.maxLines !== 1;
    }
    [_getScrollOffsetForCaret](caretRect) {
      let caretStart = null;
      let caretEnd = null;
      if (dart.test(this[_isMultiline])) {
        let lineHeight = this.renderEditable.preferredLineHeight;
        let caretOffset = (dart.notNull(lineHeight) - dart.notNull(caretRect.height)) / 2;
        caretStart = dart.notNull(caretRect.top) - caretOffset;
        caretEnd = dart.notNull(caretRect.bottom) + caretOffset;
      } else {
        caretStart = caretRect.left;
        caretEnd = caretRect.right;
      }
      let scrollOffset = this[_scrollController].offset;
      let viewportExtent = this[_scrollController].position.viewportDimension;
      if (dart.notNull(caretStart) < 0.0)
        scrollOffset = dart.notNull(scrollOffset) + dart.notNull(caretStart);
      else if (dart.notNull(caretEnd) >= dart.notNull(viewportExtent)) scrollOffset = dart.notNull(scrollOffset) + (dart.notNull(caretEnd) - dart.notNull(viewportExtent));
      return scrollOffset;
    }
    [_getCaretRectAtScrollOffset](caretRect, scrollOffset) {
      let offsetDiff = dart.notNull(this[_scrollController].offset) - dart.notNull(scrollOffset);
      return dart.test(this[_isMultiline]) ? caretRect.translate(0.0, offsetDiff) : caretRect.translate(offsetDiff, 0.0);
    }
    get [_hasInputConnection]() {
      return this[_textInputConnection] != null && dart.test(this[_textInputConnection].attached);
    }
    [_openInputConnection]() {
      let t0, t0$;
      if (dart.test(this.widget.readOnly)) {
        return;
      }
      if (!dart.test(this[_hasInputConnection])) {
        let localValue = this[_value];
        this[_lastKnownRemoteTextEditingValue] = localValue;
        this[_textInputConnection] = (t0$ = text_input.TextInput.attach(this, new text_input.TextInputConfiguration.new({inputType: this.widget.keyboardType, obscureText: this.widget.obscureText, autocorrect: this.widget.autocorrect, inputAction: (t0 = this.widget.textInputAction, t0 == null ? dart.equals(this.widget.keyboardType, text_input.TextInputType.multiline) ? text_input.TextInputAction.newline : text_input.TextInputAction.done : t0), textCapitalization: this.widget.textCapitalization, keyboardAppearance: this.widget.keyboardAppearance})), t0$.setEditingState(localValue), t0$);
      }
      this[_textInputConnection].show();
    }
    [_closeInputConnectionIfNeeded]() {
      if (dart.test(this[_hasInputConnection])) {
        this[_textInputConnection].close();
        this[_textInputConnection] = null;
        this[_lastKnownRemoteTextEditingValue] = null;
      }
    }
    [_openOrCloseInputConnectionIfNeeded]() {
      if (dart.test(this[_hasFocus]) && dart.test(this.widget.focusNode.consumeKeyboardToken())) {
        this[_openInputConnection]();
      } else if (!dart.test(this[_hasFocus])) {
        this[_closeInputConnectionIfNeeded]();
        this.widget.controller.clearComposing();
      }
    }
    requestKeyboard() {
      if (dart.test(this[_hasFocus])) {
        this[_openInputConnection]();
      } else {
        this.widget.focusNode.requestFocus();
      }
    }
    [_hideSelectionOverlayIfNeeded]() {
      let t0;
      t0 = this[_selectionOverlay];
      t0 == null ? null : t0.hide();
      this[_selectionOverlay] = null;
    }
    [_updateOrDisposeSelectionOverlayIfNeeded]() {
      if (this[_selectionOverlay] != null) {
        if (dart.test(this[_hasFocus])) {
          this[_selectionOverlay].update(this[_value]);
        } else {
          this[_selectionOverlay].dispose();
          this[_selectionOverlay] = null;
        }
      }
    }
    [_handleSelectionChanged$](selection, renderObject, cause) {
      let t0, t0$, t0$0;
      if (dart.test((t0$ = (t0 = this.renderEditable, t0 == null ? null : t0.handleSpecialText), t0$ == null ? false : t0$))) {
        let value = extended_text_utils.correctCaretOffset(this[_value], (t0$0 = this.renderEditable, t0$0 == null ? null : t0$0.text), this[_textInputConnection], {newSelection: selection});
        if (!dart.equals(value, this[_value])) {
          selection = value.selection;
          this[_value] = value;
        }
      }
      this.widget.controller.selection = selection;
      this.requestKeyboard();
      this[_hideSelectionOverlayIfNeeded]();
      if (this.widget.selectionControls != null) {
        this.createSelectionOverlay({renderObject: renderObject});
        if (this.widget.onSelectionChanged != null) this.widget.onSelectionChanged(selection, cause);
      }
    }
    createSelectionOverlay(opts) {
      let t0;
      let renderObject = opts && 'renderObject' in opts ? opts.renderObject : null;
      let showHandles = opts && 'showHandles' in opts ? opts.showHandles : true;
      this[_selectionOverlay] = new extended_text_selection_overlay.ExtendedTextSelectionOverlay.new({context: this.context, value: this[_value], debugRequiredFor: this.widget, layerLink: this[_layerLink], renderObject: (t0 = renderObject, t0 == null ? this.renderEditable : t0), selectionControls: this.widget.selectionControls, selectionDelegate: this, dragStartBehavior: this.widget.dragStartBehavior, onSelectionHandleTapped: this.widget.onSelectionHandleTapped, handlesVisible: this.widget.showSelectionHandles});
      if (dart.test(showHandles)) {
        this[_selectionOverlay].showHandles();
      }
    }
    [_handleCaretChanged](caretRect) {
      this[_currentCaretRect] = caretRect;
      if (dart.test(this[_textChangedSinceLastCaretUpdate])) {
        this[_textChangedSinceLastCaretUpdate] = false;
        this[_showCaretOnScreen]();
      }
    }
    [_showCaretOnScreen]() {
      if (dart.test(this[_showCaretOnScreenScheduled])) {
        return;
      }
      this[_showCaretOnScreenScheduled] = true;
      binding$.SchedulerBinding.instance.addPostFrameCallback(dart.fn(_ => {
        let t0;
        this[_showCaretOnScreenScheduled] = false;
        if (this[_currentCaretRect] == null || !dart.test(this[_scrollController].hasClients)) {
          return;
        }
        let scrollOffsetForCaret = this[_getScrollOffsetForCaret](this[_currentCaretRect]);
        this[_scrollController].animateTo(scrollOffsetForCaret, {duration: extended_editable_text.ExtendedEditableTextState._caretAnimationDuration, curve: extended_editable_text.ExtendedEditableTextState._caretAnimationCurve});
        let newCaretRect = this[_getCaretRectAtScrollOffset](this[_currentCaretRect], scrollOffsetForCaret);
        let bottomSpacing = this.widget.scrollPadding.bottom;
        if ((t0 = this[_selectionOverlay], t0 == null ? null : t0.selectionControls) != null) {
          let handleHeight = this[_selectionOverlay].selectionControls.getHandleSize(this.renderEditable.preferredLineHeight).height;
          let interactiveHandleHeight = math.max(core.double, handleHeight, 48);
          let anchor = this[_selectionOverlay].selectionControls.getHandleAnchor(text_selection.TextSelectionHandleType.collapsed, this.renderEditable.preferredLineHeight);
          let handleCenter = dart.notNull(handleHeight) / 2 - dart.notNull(anchor.dy);
          bottomSpacing = math.max(core.double, handleCenter + interactiveHandleHeight / 2, bottomSpacing);
        }
        let inflatedRect = new ui.Rect.fromLTRB(dart.notNull(newCaretRect.left) - dart.notNull(this.widget.scrollPadding.left), dart.notNull(newCaretRect.top) - dart.notNull(this.widget.scrollPadding.top), dart.notNull(newCaretRect.right) + dart.notNull(this.widget.scrollPadding.right), dart.notNull(newCaretRect.bottom) + dart.notNull(bottomSpacing));
        this[_editableKey].currentContext.findRenderObject().showOnScreen({rect: inflatedRect, duration: extended_editable_text.ExtendedEditableTextState._caretAnimationDuration, curve: extended_editable_text.ExtendedEditableTextState._caretAnimationCurve});
      }, DurationToNull()));
    }
    didChangeMetrics() {
      if (dart.notNull(this[_lastBottomViewInset]) < dart.notNull(binding.WidgetsBinding.instance.window.viewInsets.bottom)) {
        this[_showCaretOnScreen]();
      }
      this[_lastBottomViewInset] = binding.WidgetsBinding.instance.window.viewInsets.bottom;
    }
    [_formatAndSetValue](value, opts) {
      let t0, t0$;
      let set = opts && 'set' in opts ? opts.set : false;
      let textChanged = (t0 = this[_value], t0 == null ? null : t0.text) != (t0$ = value, t0$ == null ? null : t0$.text);
      if (textChanged) {
        this[_hideSelectionOverlayIfNeeded]();
      }
      if (textChanged && this.widget.inputFormatters != null && dart.test(this.widget.inputFormatters[$isNotEmpty])) {
        for (let formatter of this.widget.inputFormatters)
          value = formatter.formatEditUpdate(this[_value], value);
        this[_value] = value;
        this[_updateRemoteEditingValueIfNeeded]();
      } else {
        this[_value] = value;
      }
      if (textChanged && this.widget.onChanged != null) this.widget.onChanged(value.text);
    }
    [_onCursorColorTick]() {
      this.renderEditable.cursorColor = this.widget.cursorColor.withOpacity(this[_cursorBlinkOpacityController].value);
      this[_cursorVisibilityNotifier].value = dart.test(this.widget.showCursor) && dart.notNull(this[_cursorBlinkOpacityController].value) > 0;
    }
    get cursorCurrentlyVisible() {
      return dart.notNull(this[_cursorBlinkOpacityController].value) > 0;
    }
    get cursorBlinkInterval() {
      return extended_editable_text._kCursorBlinkHalfPeriod;
    }
    get selectionOverlay() {
      return this[_selectionOverlay];
    }
    [_cursorTick](timer) {
      this[_targetCursorVisibility] = !dart.test(this[_targetCursorVisibility]);
      let targetOpacity = dart.test(this[_targetCursorVisibility]) ? 1.0 : 0.0;
      if (dart.test(this.widget.cursorOpacityAnimates)) {
        this[_cursorBlinkOpacityController].animateTo(targetOpacity, {curve: curves.Curves.easeOut});
      } else {
        this[_cursorBlinkOpacityController].value = targetOpacity;
      }
      if (dart.notNull(this[_obscureShowCharTicksPending]) > 0) {
        this.setState(dart.fn(() => {
          this[_obscureShowCharTicksPending] = dart.notNull(this[_obscureShowCharTicksPending]) - 1;
        }, VoidToNull()));
      }
    }
    [_cursorWaitForStart](timer) {
      let t0;
      if (!dart.test(extended_editable_text._kCursorBlinkHalfPeriod['>'](extended_editable_text.ExtendedEditableTextState._fadeDuration))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1359, 12, "t(_kCursorBlinkHalfPeriod > _fadeDurati");
      t0 = this[_cursorTimer];
      t0 == null ? null : t0.cancel();
      this[_cursorTimer] = async.Timer.periodic(extended_editable_text._kCursorBlinkHalfPeriod, dart.bind(this, _cursorTick));
    }
    [_startCursorTimer]() {
      this[_targetCursorVisibility] = true;
      this[_cursorBlinkOpacityController].value = 1.0;
      if (dart.test(extended_editable_text.ExtendedEditableText.debugDeterministicCursor)) return;
      if (dart.test(this.widget.cursorOpacityAnimates)) {
        this[_cursorTimer] = async.Timer.periodic(extended_editable_text._kCursorBlinkWaitForStart, dart.bind(this, _cursorWaitForStart));
      } else {
        this[_cursorTimer] = async.Timer.periodic(extended_editable_text._kCursorBlinkHalfPeriod, dart.bind(this, _cursorTick));
      }
    }
    [_stopCursorTimer](opts) {
      let t0;
      let resetCharTicks = opts && 'resetCharTicks' in opts ? opts.resetCharTicks : true;
      t0 = this[_cursorTimer];
      t0 == null ? null : t0.cancel();
      this[_cursorTimer] = null;
      this[_targetCursorVisibility] = false;
      this[_cursorBlinkOpacityController].value = 0.0;
      if (dart.test(extended_editable_text.ExtendedEditableText.debugDeterministicCursor)) return;
      if (dart.test(resetCharTicks)) this[_obscureShowCharTicksPending] = 0;
      if (dart.test(this.widget.cursorOpacityAnimates)) {
        this[_cursorBlinkOpacityController].stop();
        this[_cursorBlinkOpacityController].value = 0.0;
      }
    }
    [_startOrStopCursorTimerIfNeeded]() {
      if (this[_cursorTimer] == null && dart.test(this[_hasFocus]) && dart.test(this[_value].selection.isCollapsed))
        this[_startCursorTimer]();
      else if (this[_cursorTimer] != null && (!dart.test(this[_hasFocus]) || !dart.test(this[_value].selection.isCollapsed))) this[_stopCursorTimer]();
    }
    [_didChangeTextEditingValue]() {
      let t0, t0$;
      let textChanged = (t0 = this[_value], t0 == null ? null : t0.text) != (t0$ = this[_lastKnownRemoteTextEditingValue], t0$ == null ? null : t0$.text);
      if (textChanged) {
        this[_hideSelectionOverlayIfNeeded]();
      }
      this[_updateRemoteEditingValueIfNeeded]();
      this[_startOrStopCursorTimerIfNeeded]();
      this[_updateOrDisposeSelectionOverlayIfNeeded]();
      this[_textChangedSinceLastCaretUpdate] = true;
      this.setState(dart.fn(() => {
      }, VoidToNull()));
    }
    [_handleFocusChanged]() {
      this[_openOrCloseInputConnectionIfNeeded]();
      this[_startOrStopCursorTimerIfNeeded]();
      this[_updateOrDisposeSelectionOverlayIfNeeded]();
      if (dart.test(this[_hasFocus])) {
        binding.WidgetsBinding.instance.addObserver(this);
        this[_lastBottomViewInset] = binding.WidgetsBinding.instance.window.viewInsets.bottom;
        this[_showCaretOnScreen]();
        if (!dart.test(this[_value].selection.isValid)) {
          this.widget.controller.selection = new text_editing.TextSelection.collapsed({offset: this[_value].text.length});
        }
      } else {
        binding.WidgetsBinding.instance.removeObserver(this);
        this[_value] = new text_input.TextEditingValue.new({text: this[_value].text});
      }
      this.updateKeepAlive();
    }
    get [_textDirection]() {
      let t0;
      let result = (t0 = this.widget.textDirection, t0 == null ? basic.Directionality.of(this.context) : t0);
      if (!(result != null)) dart.assertFailed(dart.str(this[$runtimeType]) + " created without a textDirection and with no ambient Directionality.", "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1437, 12, "t(result != nu");
      return result;
    }
    get renderEditable() {
      return extended_render_editable.ExtendedRenderEditable._check(this[_editableKey].currentContext.findRenderObject());
    }
    get textEditingValue() {
      return this[_value];
    }
    get [_devicePixelRatio]() {
      let t0;
      t0 = media_query.MediaQuery.of(this.context).devicePixelRatio;
      return t0 == null ? 1.0 : t0;
    }
    set textEditingValue(value) {
      let t0;
      value = this[_handleSpecialTextSpan](value);
      t0 = this[_selectionOverlay];
      t0 == null ? null : t0.update(value);
      this[_formatAndSetValue](value);
    }
    bringIntoView(position) {
      this[_scrollController].jumpTo(this[_getScrollOffsetForCaret](this.renderEditable.getLocalRectForCaret(position)));
    }
    showToolbar() {
      if (this[_selectionOverlay] == null || dart.test(this[_selectionOverlay].toolbarIsVisible)) {
        return false;
      }
      this[_selectionOverlay].showToolbar();
      return true;
    }
    hideToolbar() {
      let t0;
      t0 = this[_selectionOverlay];
      t0 == null ? null : t0.hide();
    }
    toggleToolbar() {
      if (!(this[_selectionOverlay] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1488, 12, "t(_selectionOverlay != nu");
      if (dart.test(this[_selectionOverlay].toolbarIsVisible)) {
        this.hideToolbar();
      } else {
        this.showToolbar();
      }
    }
    [_semanticsOnCopy](controls) {
      let t0;
      return dart.test(this.widget.selectionEnabled) && dart.test(this[_hasFocus]) && dart.equals((t0 = controls, t0 == null ? null : t0.canCopy(this)), true) ? dart.fn(() => controls.handleCopy(this), VoidTovoid()) : null;
    }
    [_semanticsOnCut](controls) {
      let t0;
      return dart.test(this.widget.selectionEnabled) && dart.test(this[_hasFocus]) && dart.equals((t0 = controls, t0 == null ? null : t0.canCut(this)), true) ? dart.fn(() => controls.handleCut(this), VoidTovoid()) : null;
    }
    [_semanticsOnPaste](controls) {
      let t0;
      return dart.test(this.widget.selectionEnabled) && dart.test(this[_hasFocus]) && dart.equals((t0 = controls, t0 == null ? null : t0.canPaste(this)), true) ? dart.fn(() => controls.handlePaste(this), VoidToFutureOfvoid()) : null;
    }
    build(context) {
      if (!dart.test(debug$.debugCheckHasMediaQuery(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1522, 12, "t(debugCheckHasMediaQuery(contex");
      this[_focusAttachment].reparent();
      super.build(context);
      let controls = this.widget.selectionControls;
      return new scrollable.Scrollable.new({excludeFromSemantics: true, axisDirection: dart.test(this[_isMultiline]) ? basic_types.AxisDirection.down : basic_types.AxisDirection.right, controller: this[_scrollController], physics: this.widget.scrollPhysics, dragStartBehavior: this.widget.dragStartBehavior, viewportBuilder: dart.fn((context, offset) => {
          let t0;
          if (offset != null && scroll_position.ScrollPosition.is(offset)) {
            let sp = offset;
            if (sp.minScrollExtent != null && sp.maxScrollExtent != null) {
              if (dart.notNull(sp.pixels) < dart.notNull(sp.minScrollExtent) || dart.notNull(sp.pixels) > dart.notNull(sp.maxScrollExtent)) {
                offset = new viewport_offset._FixedViewportOffset.zero();
              }
            }
          }
          return new basic.CompositedTransformTarget.new({link: this[_layerLink], child: new basic.Semantics.new({onCopy: this[_semanticsOnCopy](controls), onCut: this[_semanticsOnCut](controls), onPaste: this[_semanticsOnPaste](controls), child: new extended_editable_text._Editable.new({key: this[_editableKey], textSpan: this.buildTextSpan(context), value: this[_value], cursorColor: this[_cursorColor], backgroundCursorColor: this.widget.backgroundCursorColor, showCursor: dart.test(extended_editable_text.ExtendedEditableText.debugDeterministicCursor) ? new (ValueNotifierOfbool()).new(this.widget.showCursor) : this[_cursorVisibilityNotifier], hasFocus: this[_hasFocus], maxLines: this.widget.maxLines, minLines: this.widget.minLines, expands: this.widget.expands, strutStyle: this.widget.strutStyle, selectionColor: this.widget.selectionColor, textScaleFactor: (t0 = this.widget.textScaleFactor, t0 == null ? media_query.MediaQuery.textScaleFactorOf(context) : t0), textAlign: this.widget.textAlign, textDirection: this[_textDirection], locale: this.widget.locale, obscureText: this.widget.obscureText, autocorrect: this.widget.autocorrect, offset: offset, onSelectionChanged: dart.bind(this, _handleSelectionChanged$), onCaretChanged: dart.bind(this, _handleCaretChanged), rendererIgnoresPointer: this.widget.rendererIgnoresPointer, cursorWidth: this.widget.cursorWidth, cursorRadius: this.widget.cursorRadius, cursorOffset: this.widget.cursorOffset, paintCursorAboveText: this.widget.paintCursorAboveText, enableInteractiveSelection: this.widget.enableInteractiveSelection, textSelectionDelegate: this, devicePixelRatio: this[_devicePixelRatio], supportSpecialText: this.supportSpecialText, $creationLocationd_0dea112b090073317d4: C114 || CT.C114}), $creationLocationd_0dea112b090073317d4: C146 || CT.C146}), $creationLocationd_0dea112b090073317d4: C152 || CT.C152});
        }, BuildContextAndViewportOffsetToCompositedTransformTarget()), $creationLocationd_0dea112b090073317d4: C156 || CT.C156});
    }
    buildTextSpan(context) {
      let t0;
      if (!dart.test(this.widget.obscureText) && dart.test(this[_value].composing.isValid) && !dart.test(this.widget.readOnly)) {
        let composingStyle = this.widget.style.merge(C164 || CT.C164);
        let beforeText = this[_value].composing.textBefore(this[_value].text);
        let insideText = this[_value].composing.textInside(this[_value].text);
        let afterText = this[_value].composing.textAfter(this[_value].text);
        if (dart.test(this.supportSpecialText)) {
          let before = this.widget.specialTextSpanBuilder.build(beforeText, {textStyle: this.widget.style});
          let after = this.widget.specialTextSpanBuilder.build(afterText, {textStyle: this.widget.style});
          let children = JSArrayOfInlineSpan().of([]);
          if (before != null) {
            children[$add](before);
          }
          children[$add](new text_span.TextSpan.new({style: composingStyle, text: insideText}));
          if (after != null) {
            children[$add](after);
          }
          return new text_span.TextSpan.new({style: this.widget.style, children: children});
        }
        return new text_span.TextSpan.new({style: this.widget.style, children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: beforeText}), new text_span.TextSpan.new({style: composingStyle, text: insideText}), new text_span.TextSpan.new({text: afterText})])});
      }
      let text = this[_value].text;
      if (dart.test(this.widget.obscureText)) {
        text = "•"[$times](text.length);
        let o = dart.notNull(this[_obscureShowCharTicksPending]) > 0 ? this[_obscureLatestCharIndex] : null;
        if (o != null && dart.notNull(o) >= 0 && dart.notNull(o) < text.length) text = text[$replaceRange](o, dart.notNull(o) + 1, this[_value].text[$substring](o, dart.notNull(o) + 1));
      }
      if (dart.test(this.supportSpecialText)) {
        let specialTextSpan = (t0 = this.widget.specialTextSpanBuilder, t0 == null ? null : t0.build(text, {textStyle: this.widget.style}));
        if (specialTextSpan != null) {
          return specialTextSpan;
        }
      }
      return new text_span.TextSpan.new({style: this.widget.style, text: text});
    }
  };
  (extended_editable_text.ExtendedEditableTextState.new = function() {
    this[_cursorTimer] = null;
    this[_targetCursorVisibility] = false;
    this[_cursorVisibilityNotifier] = new (ValueNotifierOfbool()).new(true);
    this[_editableKey] = GlobalKeyOfStateOfStatefulWidget().new();
    this[_textInputConnection] = null;
    this[_selectionOverlay] = null;
    this[_scrollController] = new scroll_controller.ScrollController.new();
    this[_cursorBlinkOpacityController] = null;
    this[_layerLink] = new layer.LayerLink.new();
    this[_didAutoFocus] = false;
    this[_focusAttachment] = null;
    this[_floatingCursorResetController] = null;
    this[_lastKnownRemoteTextEditingValue] = null;
    this[_startCaretRect] = null;
    this[_lastTextPosition] = null;
    this[_pointOffsetOrigin] = null;
    this[_lastBoundedOffset] = null;
    this[_textChangedSinceLastCaretUpdate] = false;
    this[_currentCaretRect] = null;
    this[_showCaretOnScreenScheduled] = false;
    this[_lastBottomViewInset] = null;
    this[_obscureShowCharTicksPending] = 0;
    this[_obscureLatestCharIndex] = null;
    extended_editable_text.ExtendedEditableTextState.__proto__.new.call(this);
    ;
  }).prototype = extended_editable_text.ExtendedEditableTextState.prototype;
  dart.addTypeTests(extended_editable_text.ExtendedEditableTextState);
  extended_editable_text.ExtendedEditableTextState[dart.implements] = () => [text_input.TextInputClient, text_input.TextSelectionDelegate];
  dart.setMethodSignature(extended_editable_text.ExtendedEditableTextState, () => ({
    __proto__: dart.getMethods(extended_editable_text.ExtendedEditableTextState.__proto__),
    updateEditingValue: dart.fnType(dart.void, [text_input.TextEditingValue]),
    [_handleSpecialTextSpan]: dart.fnType(text_input.TextEditingValue, [text_input.TextEditingValue]),
    performAction: dart.fnType(dart.void, [text_input.TextInputAction]),
    updateFloatingCursor: dart.fnType(dart.void, [text_input.RawFloatingCursorPoint]),
    [_onFloatingCursorResetTick]: dart.fnType(dart.void, []),
    [_finalizeEditing]: dart.fnType(dart.void, [core.bool]),
    [_updateRemoteEditingValueIfNeeded]: dart.fnType(dart.void, []),
    [_getScrollOffsetForCaret]: dart.fnType(core.double, [ui.Rect]),
    [_getCaretRectAtScrollOffset]: dart.fnType(ui.Rect, [ui.Rect, core.double]),
    [_openInputConnection]: dart.fnType(dart.void, []),
    [_closeInputConnectionIfNeeded]: dart.fnType(dart.void, []),
    [_openOrCloseInputConnectionIfNeeded]: dart.fnType(dart.void, []),
    requestKeyboard: dart.fnType(dart.void, []),
    [_hideSelectionOverlayIfNeeded]: dart.fnType(dart.void, []),
    [_updateOrDisposeSelectionOverlayIfNeeded]: dart.fnType(dart.void, []),
    [_handleSelectionChanged$]: dart.fnType(dart.void, [text_editing.TextSelection, extended_render_editable.ExtendedRenderEditable, editable.SelectionChangedCause]),
    createSelectionOverlay: dart.fnType(dart.void, [], {renderObject: extended_render_editable.ExtendedRenderEditable, showHandles: core.bool}),
    [_handleCaretChanged]: dart.fnType(dart.void, [ui.Rect]),
    [_showCaretOnScreen]: dart.fnType(dart.void, []),
    [_formatAndSetValue]: dart.fnType(dart.void, [text_input.TextEditingValue], {set: core.bool}),
    [_onCursorColorTick]: dart.fnType(dart.void, []),
    [_cursorTick]: dart.fnType(dart.void, [async.Timer]),
    [_cursorWaitForStart]: dart.fnType(dart.void, [async.Timer]),
    [_startCursorTimer]: dart.fnType(dart.void, []),
    [_stopCursorTimer]: dart.fnType(dart.void, [], {resetCharTicks: core.bool}),
    [_startOrStopCursorTimerIfNeeded]: dart.fnType(dart.void, []),
    [_didChangeTextEditingValue]: dart.fnType(dart.void, []),
    [_handleFocusChanged]: dart.fnType(dart.void, []),
    bringIntoView: dart.fnType(dart.void, [ui.TextPosition]),
    showToolbar: dart.fnType(core.bool, []),
    hideToolbar: dart.fnType(dart.void, []),
    toggleToolbar: dart.fnType(dart.void, []),
    [_semanticsOnCopy]: dart.fnType(dart.fnType(dart.void, []), [text_selection.TextSelectionControls]),
    [_semanticsOnCut]: dart.fnType(dart.fnType(dart.void, []), [text_selection.TextSelectionControls]),
    [_semanticsOnPaste]: dart.fnType(dart.fnType(dart.void, []), [text_selection.TextSelectionControls]),
    buildTextSpan: dart.fnType(inline_span.InlineSpan, [framework.BuildContext])
  }));
  dart.setGetterSignature(extended_editable_text.ExtendedEditableTextState, () => ({
    __proto__: dart.getGetters(extended_editable_text.ExtendedEditableTextState.__proto__),
    supportSpecialText: core.bool,
    wantKeepAlive: core.bool,
    [_cursorColor]: ui.Color,
    cutEnabled: core.bool,
    copyEnabled: core.bool,
    pasteEnabled: core.bool,
    selectAllEnabled: core.bool,
    [_floatingCursorOffset]: ui.Offset,
    [_value]: text_input.TextEditingValue,
    [_hasFocus]: core.bool,
    [_isMultiline]: core.bool,
    [_hasInputConnection]: core.bool,
    cursorCurrentlyVisible: core.bool,
    cursorBlinkInterval: core.Duration,
    selectionOverlay: extended_text_selection_overlay.ExtendedTextSelectionOverlay,
    [_textDirection]: ui.TextDirection,
    renderEditable: extended_render_editable.ExtendedRenderEditable,
    textEditingValue: text_input.TextEditingValue,
    [_devicePixelRatio]: core.double
  }));
  dart.setSetterSignature(extended_editable_text.ExtendedEditableTextState, () => ({
    __proto__: dart.getSetters(extended_editable_text.ExtendedEditableTextState.__proto__),
    [_value]: text_input.TextEditingValue,
    textEditingValue: text_input.TextEditingValue
  }));
  dart.setLibraryUri(extended_editable_text.ExtendedEditableTextState, "package:extended_text_field/src/extended_editable_text.dart");
  dart.setFieldSignature(extended_editable_text.ExtendedEditableTextState, () => ({
    __proto__: dart.getFields(extended_editable_text.ExtendedEditableTextState.__proto__),
    [_cursorTimer]: dart.fieldType(async.Timer),
    [_targetCursorVisibility]: dart.fieldType(core.bool),
    [_cursorVisibilityNotifier]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_editableKey]: dart.finalFieldType(framework.GlobalKey$(framework.State$(framework.StatefulWidget))),
    [_textInputConnection]: dart.fieldType(text_input.TextInputConnection),
    [_selectionOverlay]: dart.fieldType(extended_text_selection_overlay.ExtendedTextSelectionOverlay),
    [_scrollController]: dart.fieldType(scroll_controller.ScrollController),
    [_cursorBlinkOpacityController]: dart.fieldType(animation_controller.AnimationController),
    [_layerLink]: dart.finalFieldType(layer.LayerLink),
    [_didAutoFocus]: dart.fieldType(core.bool),
    [_focusAttachment]: dart.fieldType(focus_manager.FocusAttachment),
    [_floatingCursorResetController]: dart.fieldType(animation_controller.AnimationController),
    [_lastKnownRemoteTextEditingValue]: dart.fieldType(text_input.TextEditingValue),
    [_startCaretRect]: dart.fieldType(ui.Rect),
    [_lastTextPosition]: dart.fieldType(ui.TextPosition),
    [_pointOffsetOrigin]: dart.fieldType(ui.Offset),
    [_lastBoundedOffset]: dart.fieldType(ui.Offset),
    [_textChangedSinceLastCaretUpdate]: dart.fieldType(core.bool),
    [_currentCaretRect]: dart.fieldType(ui.Rect),
    [_showCaretOnScreenScheduled]: dart.fieldType(core.bool),
    [_lastBottomViewInset]: dart.fieldType(core.double),
    [_obscureShowCharTicksPending]: dart.fieldType(core.int),
    [_obscureLatestCharIndex]: dart.fieldType(core.int)
  }));
  dart.defineLazy(extended_editable_text.ExtendedEditableTextState, {
    /*extended_editable_text.ExtendedEditableTextState._fadeDuration*/get _fadeDuration() {
      return C166 || CT.C166;
    },
    /*extended_editable_text.ExtendedEditableTextState._floatingCursorResetTime*/get _floatingCursorResetTime() {
      return C167 || CT.C167;
    },
    /*extended_editable_text.ExtendedEditableTextState._caretAnimationDuration*/get _caretAnimationDuration() {
      return C168 || CT.C168;
    },
    /*extended_editable_text.ExtendedEditableTextState._caretAnimationCurve*/get _caretAnimationCurve() {
      return C169 || CT.C169;
    }
  });
  extended_editable_text._Editable = class _Editable extends framework.MultiChildRenderObjectWidget {
    static _extractChildren(span) {
      let result = JSArrayOfWidget().of([]);
      span.visitChildren(dart.fn(span => {
        if (widget_span.WidgetSpan.is(span)) {
          result[$add](span.child);
        }
        return true;
      }, InlineSpanTobool()));
      return result;
    }
    createRenderObject(context) {
      let t0;
      return new extended_render_editable.ExtendedRenderEditable.new({supportSpecialText: this.supportSpecialText, text: this.textSpan, cursorColor: this.cursorColor, backgroundCursorColor: this.backgroundCursorColor, showCursor: this.showCursor, hasFocus: this.hasFocus, maxLines: this.maxLines, minLines: this.minLines, expands: this.expands, strutStyle: this.strutStyle, selectionColor: this.selectionColor, textScaleFactor: this.textScaleFactor, textAlign: this.textAlign, textDirection: this.textDirection, locale: (t0 = this.locale, t0 == null ? localizations.Localizations.localeOf(context, {nullOk: true}) : t0), selection: this.value.selection, offset: this.offset, onSelectionChanged: this.onSelectionChanged, onCaretChanged: this.onCaretChanged, ignorePointer: this.rendererIgnoresPointer, obscureText: this.obscureText, cursorWidth: this.cursorWidth, cursorRadius: this.cursorRadius, cursorOffset: this.cursorOffset, paintCursorAboveText: this.paintCursorAboveText, enableInteractiveSelection: this.enableInteractiveSelection, textSelectionDelegate: this.textSelectionDelegate, devicePixelRatio: this.devicePixelRatio});
    }
    updateRenderObject(context, renderObject) {
      let t1, t0;
      extended_render_editable.ExtendedRenderEditable._check(renderObject);
      t0 = renderObject;
      t0.supportSpecialText = this.supportSpecialText;
      t0.text = this.textSpan;
      t0.cursorColor = this.cursorColor;
      t0.showCursor = this.showCursor;
      t0.hasFocus = this.hasFocus;
      t0.maxLines = this.maxLines;
      t0.minLines = this.minLines;
      t0.expands = this.expands;
      t0.strutStyle = this.strutStyle;
      t0.selectionColor = this.selectionColor;
      t0.textScaleFactor = this.textScaleFactor;
      t0.textAlign = this.textAlign;
      t0.textDirection = this.textDirection;
      t0.locale = (t1 = this.locale, t1 == null ? localizations.Localizations.localeOf(context, {nullOk: true}) : t1);
      t0.selection = this.value.selection;
      t0.offset = this.offset;
      t0.onSelectionChanged = this.onSelectionChanged;
      t0.onCaretChanged = this.onCaretChanged;
      t0.ignorePointer = this.rendererIgnoresPointer;
      t0.obscureText = this.obscureText;
      t0.cursorWidth = this.cursorWidth;
      t0.cursorRadius = this.cursorRadius;
      t0.cursorOffset = this.cursorOffset;
      t0.textSelectionDelegate = this.textSelectionDelegate;
      t0.devicePixelRatio = this.devicePixelRatio;
      t0.paintCursorAboveText = this.paintCursorAboveText;
      t0;
    }
  };
  (extended_editable_text._Editable.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let textSpan = opts && 'textSpan' in opts ? opts.textSpan : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let hasFocus = opts && 'hasFocus' in opts ? opts.hasFocus : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : null;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : null;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : null;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
    let onCaretChanged = opts && 'onCaretChanged' in opts ? opts.onCaretChanged : null;
    let rendererIgnoresPointer = opts && 'rendererIgnoresPointer' in opts ? opts.rendererIgnoresPointer : false;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : null;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : null;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : true;
    let textSelectionDelegate = opts && 'textSelectionDelegate' in opts ? opts.textSelectionDelegate : null;
    let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : null;
    let supportSpecialText = opts && 'supportSpecialText' in opts ? opts.supportSpecialText : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.textSpan = textSpan;
    this.value = value;
    this.cursorColor = cursorColor;
    this.backgroundCursorColor = backgroundCursorColor;
    this.showCursor = showCursor;
    this.hasFocus = hasFocus;
    this.maxLines = maxLines;
    this.minLines = minLines;
    this.expands = expands;
    this.strutStyle = strutStyle;
    this.selectionColor = selectionColor;
    this.textScaleFactor = textScaleFactor;
    this.textAlign = textAlign;
    this.textDirection = textDirection;
    this.locale = locale;
    this.obscureText = obscureText;
    this.autocorrect = autocorrect;
    this.offset = offset;
    this.onSelectionChanged = onSelectionChanged;
    this.onCaretChanged = onCaretChanged;
    this.rendererIgnoresPointer = rendererIgnoresPointer;
    this.cursorWidth = cursorWidth;
    this.cursorRadius = cursorRadius;
    this.cursorOffset = cursorOffset;
    this.enableInteractiveSelection = enableInteractiveSelection;
    this.textSelectionDelegate = textSelectionDelegate;
    this.paintCursorAboveText = paintCursorAboveText;
    this.devicePixelRatio = devicePixelRatio;
    this.supportSpecialText = supportSpecialText;
    if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1693, 16, "t(textDirection != nu");
    if (!(rendererIgnoresPointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_editable_text.dart", 1694, 16, "t(rendererIgnoresPointer != nu");
    extended_editable_text._Editable.__proto__.new.call(this, {key: key, children: extended_editable_text._Editable._extractChildren(textSpan), $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = extended_editable_text._Editable.prototype;
  dart.addTypeTests(extended_editable_text._Editable);
  dart.setMethodSignature(extended_editable_text._Editable, () => ({
    __proto__: dart.getMethods(extended_editable_text._Editable.__proto__),
    createRenderObject: dart.fnType(extended_render_editable.ExtendedRenderEditable, [framework.BuildContext])
  }));
  dart.setLibraryUri(extended_editable_text._Editable, "package:extended_text_field/src/extended_editable_text.dart");
  dart.setFieldSignature(extended_editable_text._Editable, () => ({
    __proto__: dart.getFields(extended_editable_text._Editable.__proto__),
    textSpan: dart.finalFieldType(inline_span.InlineSpan),
    value: dart.finalFieldType(text_input.TextEditingValue),
    cursorColor: dart.finalFieldType(ui.Color),
    backgroundCursorColor: dart.finalFieldType(ui.Color),
    showCursor: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    hasFocus: dart.finalFieldType(core.bool),
    maxLines: dart.finalFieldType(core.int),
    minLines: dart.finalFieldType(core.int),
    expands: dart.finalFieldType(core.bool),
    strutStyle: dart.finalFieldType(strut_style.StrutStyle),
    selectionColor: dart.finalFieldType(ui.Color),
    textScaleFactor: dart.finalFieldType(core.double),
    textAlign: dart.finalFieldType(ui.TextAlign),
    textDirection: dart.finalFieldType(ui.TextDirection),
    locale: dart.finalFieldType(ui.Locale),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    offset: dart.finalFieldType(viewport_offset.ViewportOffset),
    onSelectionChanged: dart.finalFieldType(dart.fnType(dart.void, [text_editing.TextSelection, extended_render_editable.ExtendedRenderEditable, editable.SelectionChangedCause])),
    onCaretChanged: dart.finalFieldType(dart.fnType(dart.void, [ui.Rect])),
    rendererIgnoresPointer: dart.finalFieldType(core.bool),
    cursorWidth: dart.finalFieldType(core.double),
    cursorRadius: dart.finalFieldType(ui.Radius),
    cursorOffset: dart.finalFieldType(ui.Offset),
    enableInteractiveSelection: dart.finalFieldType(core.bool),
    textSelectionDelegate: dart.finalFieldType(text_input.TextSelectionDelegate),
    devicePixelRatio: dart.finalFieldType(core.double),
    paintCursorAboveText: dart.finalFieldType(core.bool),
    supportSpecialText: dart.finalFieldType(core.bool)
  }));
  let C170;
  let C171;
  dart.defineLazy(extended_editable_text, {
    /*extended_editable_text._kCursorBlinkHalfPeriod*/get _kCursorBlinkHalfPeriod() {
      return C170 || CT.C170;
    },
    /*extended_editable_text._kCursorBlinkWaitForStart*/get _kCursorBlinkWaitForStart() {
      return C171 || CT.C171;
    },
    /*extended_editable_text._kObscureShowLatestCharCursorTicks*/get _kObscureShowLatestCharCursorTicks() {
      return 3;
    }
  });
  let C172;
  const _handleSpecialText = dart.privateName(extended_render_editable, "_handleSpecialText");
  const _textLayoutLastWidth = dart.privateName(extended_render_editable, "_textLayoutLastWidth");
  const _lastCaretRect = dart.privateName(extended_render_editable, "_lastCaretRect");
  const _selectionStartInViewport = dart.privateName(extended_render_editable, "_selectionStartInViewport");
  const _selectionEndInViewport = dart.privateName(extended_render_editable, "_selectionEndInViewport");
  const _visibleRegionMinY = dart.privateName(extended_render_editable, "_visibleRegionMinY");
  const _extentOffset = dart.privateName(extended_render_editable, "_extentOffset");
  const _baseOffset = dart.privateName(extended_render_editable, "_baseOffset");
  const _previousCursorLocation = dart.privateName(extended_render_editable, "_previousCursorLocation");
  const _resetCursor = dart.privateName(extended_render_editable, "_resetCursor");
  const _hasFocus$ = dart.privateName(extended_render_editable, "_hasFocus");
  const _listenerAttached = dart.privateName(extended_render_editable, "_listenerAttached");
  const _selectionRects = dart.privateName(extended_render_editable, "_selectionRects");
  const _cursorWidth = dart.privateName(extended_render_editable, "_cursorWidth");
  const _floatingCursorOn = dart.privateName(extended_render_editable, "_floatingCursorOn");
  const _floatingCursorOffset$ = dart.privateName(extended_render_editable, "_floatingCursorOffset");
  const _floatingCursorTextPosition = dart.privateName(extended_render_editable, "_floatingCursorTextPosition");
  const _maxScrollExtent = dart.privateName(extended_render_editable, "_maxScrollExtent");
  const _tap = dart.privateName(extended_render_editable, "_tap");
  const _longPress = dart.privateName(extended_render_editable, "_longPress");
  const _lastTapDownPosition = dart.privateName(extended_render_editable, "_lastTapDownPosition");
  const _caretPrototype = dart.privateName(extended_render_editable, "_caretPrototype");
  const _relativeOrigin = dart.privateName(extended_render_editable, "_relativeOrigin");
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C173;
  const _previousOffset = dart.privateName(extended_render_editable, "_previousOffset");
  const _resetOriginOnLeft = dart.privateName(extended_render_editable, "_resetOriginOnLeft");
  const _resetOriginOnRight = dart.privateName(extended_render_editable, "_resetOriginOnRight");
  const _resetOriginOnTop = dart.privateName(extended_render_editable, "_resetOriginOnTop");
  const _resetOriginOnBottom = dart.privateName(extended_render_editable, "_resetOriginOnBottom");
  const _resetFloatingCursorAnimationValue = dart.privateName(extended_render_editable, "_resetFloatingCursorAnimationValue");
  const _initialOffset = dart.privateName(extended_render_editable, "_initialOffset");
  const _textPainter = dart.privateName(extended_render_editable, "_textPainter");
  const _cursorColor$ = dart.privateName(extended_render_editable, "_cursorColor");
  const _backgroundCursorColor = dart.privateName(extended_render_editable, "_backgroundCursorColor");
  const _showCursor = dart.privateName(extended_render_editable, "_showCursor");
  const _maxLines = dart.privateName(extended_render_editable, "_maxLines");
  const _minLines = dart.privateName(extended_render_editable, "_minLines");
  const _expands = dart.privateName(extended_render_editable, "_expands");
  const _selectionColor = dart.privateName(extended_render_editable, "_selectionColor");
  const _selection = dart.privateName(extended_render_editable, "_selection");
  const _offset = dart.privateName(extended_render_editable, "_offset");
  const _cursorRadius = dart.privateName(extended_render_editable, "_cursorRadius");
  const _paintCursorOnTop = dart.privateName(extended_render_editable, "_paintCursorOnTop");
  const _cursorOffset = dart.privateName(extended_render_editable, "_cursorOffset");
  const _floatingCursorAddedMargin = dart.privateName(extended_render_editable, "_floatingCursorAddedMargin");
  const _enableInteractiveSelection = dart.privateName(extended_render_editable, "_enableInteractiveSelection");
  const _devicePixelRatio$ = dart.privateName(extended_render_editable, "_devicePixelRatio");
  const _obscureText = dart.privateName(extended_render_editable, "_obscureText");
  const _handleTapDown$ = dart.privateName(extended_render_editable, "_handleTapDown");
  const _handleTap = dart.privateName(extended_render_editable, "_handleTap");
  const _handleLongPress = dart.privateName(extended_render_editable, "_handleLongPress");
  const _updateSelectionExtentsVisibility = dart.privateName(extended_render_editable, "_updateSelectionExtentsVisibility");
  const _updateVisibleRegionMinY = dart.privateName(extended_render_editable, "_updateVisibleRegionMinY");
  const _handlePotentialSelectionChange = dart.privateName(extended_render_editable, "_handlePotentialSelectionChange");
  const _handleControl = dart.privateName(extended_render_editable, "_handleControl");
  const _handleHorizontalArrows = dart.privateName(extended_render_editable, "_handleHorizontalArrows");
  const _handleVerticalArrows = dart.privateName(extended_render_editable, "_handleVerticalArrows");
  const _handleShift = dart.privateName(extended_render_editable, "_handleShift");
  const _handleShortcuts = dart.privateName(extended_render_editable, "_handleShortcuts");
  const _handleDelete = dart.privateName(extended_render_editable, "_handleDelete");
  const _handleKeyEvent = dart.privateName(extended_render_editable, "_handleKeyEvent");
  const _selectWordAtOffset = dart.privateName(extended_render_editable, "_selectWordAtOffset");
  const _handleSetSelection = dart.privateName(extended_render_editable, "_handleSetSelection");
  const _handleMoveCursorBackwardByWord = dart.privateName(extended_render_editable, "_handleMoveCursorBackwardByWord");
  const _handleMoveCursorBackwardByCharacter = dart.privateName(extended_render_editable, "_handleMoveCursorBackwardByCharacter");
  const _handleMoveCursorForwardByWord = dart.privateName(extended_render_editable, "_handleMoveCursorForwardByWord");
  const _handleMoveCursorForwardByCharacter = dart.privateName(extended_render_editable, "_handleMoveCursorForwardByCharacter");
  const _getNextWord = dart.privateName(extended_render_editable, "_getNextWord");
  const _getPreviousWord = dart.privateName(extended_render_editable, "_getPreviousWord");
  const _onlyWhitespace = dart.privateName(extended_render_editable, "_onlyWhitespace");
  const _isMultiline$ = dart.privateName(extended_render_editable, "_isMultiline");
  const _viewportAxis = dart.privateName(extended_render_editable, "_viewportAxis");
  const _name$2 = dart.privateName(basic_types, "_name");
  let C174;
  let C175;
  const _paintOffset = dart.privateName(extended_render_editable, "_paintOffset");
  const _viewportExtent = dart.privateName(extended_render_editable, "_viewportExtent");
  const _getMaxScrollExtent = dart.privateName(extended_render_editable, "_getMaxScrollExtent");
  const _hasVisualOverflow = dart.privateName(extended_render_editable, "_hasVisualOverflow");
  const _layoutText = dart.privateName(extended_render_editable, "_layoutText");
  const _effectiveOffset = dart.privateName(extended_render_editable, "_effectiveOffset");
  const _getPixelPerfectCursorOffset = dart.privateName(extended_render_editable, "_getPixelPerfectCursorOffset");
  const _preferredHeight = dart.privateName(extended_render_editable, "_preferredHeight");
  const _getCaretPrototype = dart.privateName(extended_render_editable, "_getCaretPrototype");
  const _paintCaret = dart.privateName(extended_render_editable, "_paintCaret");
  let C176;
  const _paintFloatingCaret = dart.privateName(extended_render_editable, "_paintFloatingCaret");
  const _paintSelection = dart.privateName(extended_render_editable, "_paintSelection");
  const _paintSpecialText = dart.privateName(extended_render_editable, "_paintSpecialText");
  const _paintContents = dart.privateName(extended_render_editable, "_paintContents");
  const _paintSpecialTextChildren = dart.privateName(extended_render_editable, "_paintSpecialTextChildren");
  const _findEndOffset = dart.privateName(extended_render_editable, "_findEndOffset");
  const ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$ = class ExtendedTextRenderBox_ExtendedTextSelectionRenderObject extends extended_text_render_box.ExtendedTextRenderBox {};
  (ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$.new = function() {
    ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$.__proto__.new.call(this);
  }).prototype = ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$.prototype;
  dart.applyMixin(ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$, extended_text_selection_render_object.ExtendedTextSelectionRenderObject);
  extended_render_editable.ExtendedRenderEditable = class ExtendedRenderEditable extends ExtendedTextRenderBox_ExtendedTextSelectionRenderObject$ {
    get supportSpecialText() {
      return this[supportSpecialText$];
    }
    set supportSpecialText(value) {
      this[supportSpecialText$] = value;
    }
    get onSelectionChanged() {
      return this[onSelectionChanged$0];
    }
    set onSelectionChanged(value) {
      this[onSelectionChanged$0] = value;
    }
    get onCaretChanged() {
      return this[onCaretChanged$];
    }
    set onCaretChanged(value) {
      this[onCaretChanged$] = value;
    }
    get ignorePointer() {
      return this[ignorePointer$];
    }
    set ignorePointer(value) {
      this[ignorePointer$] = value;
    }
    get textSelectionDelegate() {
      return this[textSelectionDelegate$];
    }
    set textSelectionDelegate(value) {
      this[textSelectionDelegate$] = value;
    }
    get handleSpecialText() {
      return dart.test(this.supportSpecialText) && dart.test(this[_handleSpecialText]);
    }
    get isComposingText() {
      return extended_text_utils.textSpanToActualText(this.text) == null;
    }
    get devicePixelRatio() {
      return this[_devicePixelRatio$];
    }
    set devicePixelRatio(value) {
      if (this.devicePixelRatio == value) return;
      this[_devicePixelRatio$] = value;
      this.markNeedsTextLayout();
    }
    get obscureText() {
      return this[_obscureText];
    }
    set obscureText(value) {
      if (dart.equals(this[_obscureText], value)) return;
      this[_obscureText] = value;
      this.markNeedsSemanticsUpdate();
    }
    get selectionStartInViewport() {
      return this[_selectionStartInViewport];
    }
    get selectionEndInViewport() {
      return this[_selectionEndInViewport];
    }
    [_updateSelectionExtentsVisibility](effectiveOffset, selection) {
      let visibleRegion = new ui.Offset.new(0.0, this[_visibleRegionMinY])['&'](this.size);
      let startOffset = this.getCaretOffset(new ui.TextPosition.new({offset: selection.start, affinity: selection.affinity}), {effectiveOffset: effectiveOffset, caretPrototype: this[_caretPrototype], handleSpecialText: this.handleSpecialText});
      this[_selectionStartInViewport].value = visibleRegion.inflate(0.5).contains(startOffset['+'](effectiveOffset));
      let endOffset = this.getCaretOffset(new ui.TextPosition.new({offset: selection.end, affinity: selection.affinity}), {effectiveOffset: effectiveOffset, caretPrototype: this[_caretPrototype], handleSpecialText: this.handleSpecialText});
      this[_selectionEndInViewport].value = visibleRegion.inflate(0.5).contains(endOffset['+'](effectiveOffset));
    }
    [_updateVisibleRegionMinY]() {
    }
    [_handlePotentialSelectionChange](nextSelection, cause) {
      if (dart.equals(nextSelection, this.selection)) {
        return;
      }
      this.onSelectionChanged(nextSelection, this, cause);
    }
    [_handleKeyEvent](keyEvent) {
      switch (platform.defaultTargetPlatform) {
        case C11 || CT.C11:
        {
          break;
        }
        case C10 || CT.C10:
        case C12 || CT.C12:
        {
          return;
        }
      }
      if (raw_keyboard.RawKeyUpEvent.is(keyEvent)) return;
      let rawAndroidEvent = raw_keyboard_android.RawKeyEventDataAndroid._check(keyEvent.data);
      let pressedKeyCode = rawAndroidEvent.keyCode;
      let pressedKeyMetaState = rawAndroidEvent.metaState;
      if (dart.test(this.selection.isCollapsed)) {
        this[_extentOffset] = this.selection.extentOffset;
        this[_baseOffset] = this.selection.baseOffset;
      }
      let shift = (dart.notNull(pressedKeyMetaState) & 1) >>> 0 > 0;
      let ctrl = (dart.notNull(pressedKeyMetaState) & 4096) >>> 0 > 0;
      let rightArrow = pressedKeyCode === 22;
      let leftArrow = pressedKeyCode === 21;
      let upArrow = pressedKeyCode === 19;
      let downArrow = pressedKeyCode === 20;
      let arrow = leftArrow || rightArrow || upArrow || downArrow;
      let aKey = pressedKeyCode === 29;
      let xKey = pressedKeyCode === 52;
      let vKey = pressedKeyCode === 50;
      let cKey = pressedKeyCode === 31;
      let del = pressedKeyCode === 112;
      if (arrow) {
        let newOffset = this[_extentOffset];
        if (ctrl) newOffset = this[_handleControl](rightArrow, leftArrow, ctrl, newOffset);
        newOffset = this[_handleHorizontalArrows](rightArrow, leftArrow, shift, newOffset);
        if (downArrow || upArrow) newOffset = this[_handleVerticalArrows](upArrow, downArrow, shift, newOffset);
        newOffset = this[_handleShift](rightArrow, leftArrow, shift, newOffset);
        this[_extentOffset] = newOffset;
      } else if (ctrl && (xKey || vKey || cKey || aKey)) {
        this[_handleShortcuts](pressedKeyCode);
      }
      if (del) this[_handleDelete]();
    }
    [_handleControl](rightArrow, leftArrow, ctrl, newOffset) {
      if (dart.test(leftArrow) && dart.notNull(this[_extentOffset]) > 2) {
        let textSelection = this[_selectWordAtOffset](new ui.TextPosition.new({offset: dart.notNull(this[_extentOffset]) - 2}));
        newOffset = dart.notNull(textSelection.baseOffset) + 1;
      } else if (dart.test(rightArrow) && dart.notNull(this[_extentOffset]) < extended_text_utils.textSpanToActualText(this.text).length - 2) {
        let textSelection = this[_selectWordAtOffset](new ui.TextPosition.new({offset: dart.notNull(this[_extentOffset]) + 1}));
        newOffset = dart.notNull(textSelection.extentOffset) - 1;
      }
      return newOffset;
    }
    [_handleHorizontalArrows](rightArrow, leftArrow, shift, newOffset) {
      if (dart.test(rightArrow) && dart.notNull(this[_extentOffset]) < extended_text_utils.textSpanToActualText(this.text).length) {
        newOffset = dart.notNull(newOffset) + 1;
        if (dart.test(shift)) this[_previousCursorLocation] = dart.notNull(this[_previousCursorLocation]) + 1;
      }
      if (dart.test(leftArrow) && dart.notNull(this[_extentOffset]) > 0) {
        newOffset = dart.notNull(newOffset) - 1;
        if (dart.test(shift)) this[_previousCursorLocation] = dart.notNull(this[_previousCursorLocation]) - 1;
      }
      return newOffset;
    }
    [_handleVerticalArrows](upArrow, downArrow, shift, newOffset) {
      let plh = this[_textPainter].preferredLineHeight;
      let verticalOffset = dart.test(upArrow) ? -0.5 * dart.notNull(plh) : 1.5 * dart.notNull(plh);
      let caretOffset = this[_textPainter].getOffsetForCaret(new ui.TextPosition.new({offset: this[_extentOffset]}), this[_caretPrototype]);
      let caretOffsetTranslated = caretOffset.translate(0.0, verticalOffset);
      let position = this[_textPainter].getPositionForOffset(caretOffsetTranslated);
      if (position.offset == this[_extentOffset]) {
        if (dart.test(downArrow))
          newOffset = extended_text_utils.textSpanToActualText(this.text).length;
        else if (dart.test(upArrow)) newOffset = 0;
        this[_resetCursor] = shift;
      } else if (dart.test(this[_resetCursor]) && dart.test(shift)) {
        newOffset = this[_previousCursorLocation];
        this[_resetCursor] = false;
      } else {
        newOffset = position.offset;
        this[_previousCursorLocation] = newOffset;
      }
      return newOffset;
    }
    [_handleShift](rightArrow, leftArrow, shift, newOffset) {
      if (this.onSelectionChanged == null) return newOffset;
      if (dart.test(shift)) {
        if (dart.notNull(this[_baseOffset]) < dart.notNull(newOffset)) {
          this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: this[_baseOffset], extentOffset: newOffset}), editable.SelectionChangedCause.keyboard);
        } else {
          this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: newOffset, extentOffset: this[_baseOffset]}), editable.SelectionChangedCause.keyboard);
        }
      } else {
        if (!dart.test(this.selection.isCollapsed)) {
          if (dart.test(leftArrow))
            newOffset = dart.notNull(this[_baseOffset]) < dart.notNull(this[_extentOffset]) ? this[_baseOffset] : this[_extentOffset];
          else if (dart.test(rightArrow)) newOffset = dart.notNull(this[_baseOffset]) > dart.notNull(this[_extentOffset]) ? this[_baseOffset] : this[_extentOffset];
        }
        this[_handlePotentialSelectionChange](new text_editing.TextSelection.fromPosition(new ui.TextPosition.new({offset: newOffset})), editable.SelectionChangedCause.keyboard);
      }
      return newOffset;
    }
    [_handleShortcuts](pressedKeyCode) {
      return async.async(dart.void, (function* _handleShortcuts() {
        switch (pressedKeyCode) {
          case 31:
          {
            if (!dart.test(this.selection.isCollapsed)) {
              clipboard.Clipboard.setData(new clipboard.ClipboardData.new({text: this.selection.textInside(extended_text_utils.textSpanToActualText(this.text))}));
            }
            break;
          }
          case 52:
          {
            if (!dart.test(this.selection.isCollapsed)) {
              let actualText = extended_text_utils.textSpanToActualText(this.text);
              clipboard.Clipboard.setData(new clipboard.ClipboardData.new({text: this.selection.textInside(actualText)}));
              this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(this.selection.textBefore(actualText)) + dart.notNull(this.selection.textAfter(actualText)), selection: new text_editing.TextSelection.collapsed({offset: this.selection.start})});
            }
            break;
          }
          case 50:
          {
            let value = this.textSelectionDelegate.textEditingValue;
            let data = (yield clipboard.Clipboard.getData("text/plain"));
            if (data != null) {
              this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(value.selection.textBefore(value.text)) + dart.notNull(data.text) + dart.notNull(value.selection.textAfter(value.text)), selection: new text_editing.TextSelection.collapsed({offset: dart.notNull(value.selection.start) + data.text.length})});
            }
            break;
          }
          case 29:
          {
            this[_baseOffset] = 0;
            this[_extentOffset] = this.textSelectionDelegate.textEditingValue.text.length;
            this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: 0, extentOffset: this.textSelectionDelegate.textEditingValue.text.length}), editable.SelectionChangedCause.keyboard);
            break;
          }
          default:
          {
            if (!false) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 598, 16, "t(fal");
          }
        }
      }).bind(this));
    }
    [_handleDelete]() {
      let actualText = extended_text_utils.textSpanToActualText(this.text);
      if (this.selection.textAfter(actualText)[$isNotEmpty]) {
        this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: dart.notNull(this.selection.textBefore(actualText)) + this.selection.textAfter(actualText)[$substring](1), selection: new text_editing.TextSelection.collapsed({offset: this.selection.start})});
      } else {
        this.textSelectionDelegate.textEditingValue = new text_input.TextEditingValue.new({text: this.selection.textBefore(actualText), selection: new text_editing.TextSelection.collapsed({offset: this.selection.start})});
      }
    }
    markNeedsTextLayout() {
      this[_textLayoutLastWidth] = null;
      this.markNeedsLayout();
    }
    get text() {
      return this[_textPainter].text;
    }
    set text(value) {
      if (dart.equals(this[_textPainter].text, value)) return;
      this[_textPainter].text = value;
      this.extractPlaceholderSpans(value);
      this[_handleSpecialText] = extended_text_utils.hasSpecialText(value);
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get textAlign() {
      return this[_textPainter].textAlign;
    }
    set textAlign(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 646, 12, "t(value != nu");
      if (dart.equals(this[_textPainter].textAlign, value)) return;
      this[_textPainter].textAlign = value;
      this.markNeedsPaint();
    }
    get textDirection() {
      return this[_textPainter].textDirection;
    }
    set textDirection(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 667, 12, "t(value != nu");
      if (dart.equals(this[_textPainter].textDirection, value)) return;
      this[_textPainter].textDirection = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get locale() {
      return this[_textPainter].locale;
    }
    set locale(value) {
      if (dart.equals(this[_textPainter].locale, value)) return;
      this[_textPainter].locale = value;
      this.markNeedsTextLayout();
    }
    get strutStyle() {
      return this[_textPainter].strutStyle;
    }
    set strutStyle(value) {
      if (dart.equals(this[_textPainter].strutStyle, value)) return;
      this[_textPainter].strutStyle = value;
      this.markNeedsTextLayout();
    }
    get cursorColor() {
      return this[_cursorColor$];
    }
    set cursorColor(value) {
      if (dart.equals(this[_cursorColor$], value)) return;
      this[_cursorColor$] = value;
      this.markNeedsPaint();
    }
    get backgroundCursorColor() {
      return this[_backgroundCursorColor];
    }
    set backgroundCursorColor(value) {
      if (dart.equals(this.backgroundCursorColor, value)) return;
      this[_backgroundCursorColor] = value;
      this.markNeedsPaint();
    }
    get showCursor() {
      return this[_showCursor];
    }
    set showCursor(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 725, 12, "ert(value != ");
      if (dart.equals(this[_showCursor], value)) return;
      if (dart.test(this.attached)) this[_showCursor].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor] = value;
      if (dart.test(this.attached)) this[_showCursor].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsPaint();
    }
    get hasFocus() {
      return this[_hasFocus$];
    }
    set hasFocus(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 738, 12, "ert(value != ");
      if (dart.equals(this[_hasFocus$], value)) return;
      this[_hasFocus$] = value;
      if (dart.test(this[_hasFocus$])) {
        if (!!dart.test(this[_listenerAttached])) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 742, 14, "ert(!_listenerAtta");
        raw_keyboard.RawKeyboard.instance.addListener(dart.bind(this, _handleKeyEvent));
        this[_listenerAttached] = true;
      } else {
        if (!dart.test(this[_listenerAttached])) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 746, 14, "ert(_listenerAtta");
        raw_keyboard.RawKeyboard.instance.removeListener(dart.bind(this, _handleKeyEvent));
        this[_listenerAttached] = false;
      }
      this.markNeedsSemanticsUpdate();
    }
    get maxLines() {
      return this[_maxLines];
    }
    set maxLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 768, 12, "ert(value == null || value");
      if (this.maxLines == value) return;
      this[_maxLines] = value;
      this.markNeedsTextLayout();
    }
    get minLines() {
      return this[_minLines];
    }
    set minLines(value) {
      if (!(value == null || dart.notNull(value) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 780, 12, "ert(value == null || value");
      if (this.minLines == value) return;
      this[_minLines] = value;
      this.markNeedsTextLayout();
    }
    get expands() {
      return this[_expands];
    }
    set expands(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 790, 12, "ert(value != ");
      if (dart.equals(this.expands, value)) return;
      this[_expands] = value;
      this.markNeedsTextLayout();
    }
    get selectionColor() {
      return this[_selectionColor];
    }
    set selectionColor(value) {
      if (dart.equals(this[_selectionColor], value)) return;
      this[_selectionColor] = value;
      this.markNeedsPaint();
    }
    get textScaleFactor() {
      return this[_textPainter].textScaleFactor;
    }
    set textScaleFactor(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 811, 12, "ert(value != ");
      if (this[_textPainter].textScaleFactor == value) return;
      this[_textPainter].textScaleFactor = value;
      this.markNeedsTextLayout();
    }
    get selection() {
      return this[_selection];
    }
    set selection(value) {
      if (dart.equals(this[_selection], value)) return;
      this[_selection] = value;
      this[_selectionRects] = null;
      this.markNeedsPaint();
      this.markNeedsSemanticsUpdate();
    }
    get offset() {
      return this[_offset];
    }
    set offset(value) {
      if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 838, 12, "ert(value != ");
      if (dart.equals(this[_offset], value)) return;
      if (dart.test(this.attached)) this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_offset] = value;
      if (dart.test(this.attached)) this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this.markNeedsLayout();
    }
    get cursorWidth() {
      return this[_cursorWidth];
    }
    set cursorWidth(value) {
      if (this[_cursorWidth] == value) return;
      this[_cursorWidth] = value;
      this.markNeedsLayout();
    }
    get paintCursorAboveText() {
      return this[_paintCursorOnTop];
    }
    set paintCursorAboveText(value) {
      if (dart.equals(this[_paintCursorOnTop], value)) return;
      this[_paintCursorOnTop] = value;
      this.markNeedsLayout();
    }
    get cursorOffset() {
      return this[_cursorOffset];
    }
    set cursorOffset(value) {
      if (dart.equals(this[_cursorOffset], value)) return;
      this[_cursorOffset] = value;
      this.markNeedsLayout();
    }
    get cursorRadius() {
      return this[_cursorRadius];
    }
    set cursorRadius(value) {
      if (dart.equals(this[_cursorRadius], value)) return;
      this[_cursorRadius] = value;
      this.markNeedsPaint();
    }
    get floatingCursorAddedMargin() {
      return this[_floatingCursorAddedMargin];
    }
    set floatingCursorAddedMargin(value) {
      if (dart.equals(this[_floatingCursorAddedMargin], value)) return;
      this[_floatingCursorAddedMargin] = value;
      this.markNeedsPaint();
    }
    get enableInteractiveSelection() {
      return this[_enableInteractiveSelection];
    }
    set enableInteractiveSelection(value) {
      if (dart.equals(this[_enableInteractiveSelection], value)) return;
      this[_enableInteractiveSelection] = value;
      this.markNeedsTextLayout();
      this.markNeedsSemanticsUpdate();
    }
    get selectionEnabled() {
      let t0;
      t0 = this.enableInteractiveSelection;
      return t0 == null ? !dart.test(this.obscureText) : t0;
    }
    describeSemanticsConfiguration(config) {
      let t0, t0$, t0$0, t0$1;
      super.describeSemanticsConfiguration(config);
      t0 = config;
      t0.value = dart.test(this.obscureText) ? "•"[$times](this.text.toPlainText().length) : this.text.toPlainText();
      t0.isObscured = this.obscureText;
      t0.textDirection = this.textDirection;
      t0.isFocused = this.hasFocus;
      t0.isTextField = true;
      t0;
      if (dart.test(this.hasFocus) && dart.test(this.selectionEnabled)) config.onSetSelection = dart.bind(this, _handleSetSelection);
      if (dart.test(this.selectionEnabled) && dart.equals((t0$ = this[_selection], t0$ == null ? null : t0$.isValid), true)) {
        config.textSelection = this[_selection];
        if (this[_textPainter].getOffsetBefore(this[_selection].extentOffset) != null) {
          t0$0 = config;
          t0$0.onMoveCursorBackwardByWord = dart.bind(this, _handleMoveCursorBackwardByWord);
          t0$0.onMoveCursorBackwardByCharacter = dart.bind(this, _handleMoveCursorBackwardByCharacter);
          t0$0;
        }
        if (this[_textPainter].getOffsetAfter(this[_selection].extentOffset) != null) {
          t0$1 = config;
          t0$1.onMoveCursorForwardByWord = dart.bind(this, _handleMoveCursorForwardByWord);
          t0$1.onMoveCursorForwardByCharacter = dart.bind(this, _handleMoveCursorForwardByCharacter);
          t0$1;
        }
      }
    }
    [_handleSetSelection](selection) {
      this[_handlePotentialSelectionChange](selection, editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByCharacter](extentSelection) {
      let extentOffset = this[_textPainter].getOffsetAfter(this[_selection].extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !dart.test(extentSelection) ? extentOffset : this[_selection].baseOffset;
      this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByCharacter](extentSelection) {
      let extentOffset = this[_textPainter].getOffsetBefore(this[_selection].extentOffset);
      if (extentOffset == null) return;
      let baseOffset = !dart.test(extentSelection) ? extentOffset : this[_selection].baseOffset;
      this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorForwardByWord](extentSelection) {
      let currentWord = this[_textPainter].getWordBoundary(this[_selection].extent);
      if (currentWord == null) return;
      let nextWord = this[_getNextWord](currentWord.end);
      if (nextWord == null) return;
      let baseOffset = dart.test(extentSelection) ? this[_selection].baseOffset : nextWord.start;
      this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: nextWord.start}), editable.SelectionChangedCause.keyboard);
    }
    [_handleMoveCursorBackwardByWord](extentSelection) {
      let currentWord = this[_textPainter].getWordBoundary(this[_selection].extent);
      if (currentWord == null) return;
      let previousWord = this[_getPreviousWord](dart.notNull(currentWord.start) - 1);
      if (previousWord == null) return;
      let baseOffset = dart.test(extentSelection) ? this[_selection].baseOffset : previousWord.start;
      this.onSelectionChanged(new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: previousWord.start}), this, editable.SelectionChangedCause.keyboard);
    }
    [_getNextWord](offset) {
      while (true) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range == null || !dart.test(range.isValid) || dart.test(range.isCollapsed)) return null;
        if (!dart.test(this[_onlyWhitespace](range))) return range;
        offset = range.end;
      }
    }
    [_getPreviousWord](offset) {
      while (dart.notNull(offset) >= 0) {
        let range = this[_textPainter].getWordBoundary(new ui.TextPosition.new({offset: offset}));
        if (range == null || !dart.test(range.isValid) || dart.test(range.isCollapsed)) return null;
        if (!dart.test(this[_onlyWhitespace](range))) return range;
        offset = dart.notNull(range.start) - 1;
      }
      return null;
    }
    [_onlyWhitespace](range) {
      for (let i = range.start; dart.notNull(i) < dart.notNull(range.end); i = dart.notNull(i) + 1) {
        let codeUnit = this.text.codeUnitAt(i);
        switch (codeUnit) {
          case 9:
          case 10:
          case 11:
          case 12:
          case 13:
          case 28:
          case 29:
          case 30:
          case 31:
          case 32:
          case 160:
          case 5760:
          case 8192:
          case 8193:
          case 8194:
          case 8195:
          case 8196:
          case 8197:
          case 8198:
          case 8199:
          case 8200:
          case 8201:
          case 8202:
          case 8239:
          case 8287:
          case 12288:
          {
            break;
          }
          default:
          {
            return false;
          }
        }
      }
      return true;
    }
    attach(owner) {
      object.PipelineOwner._check(owner);
      super.attach(owner);
      this[_offset].addListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor].addListener(dart.bind(this, 'markNeedsPaint'));
    }
    detach() {
      this[_offset].removeListener(dart.bind(this, 'markNeedsPaint'));
      this[_showCursor].removeListener(dart.bind(this, 'markNeedsPaint'));
      if (dart.test(this[_listenerAttached])) raw_keyboard.RawKeyboard.instance.removeListener(dart.bind(this, _handleKeyEvent));
      super.detach();
    }
    get [_isMultiline$]() {
      return this.maxLines !== 1;
    }
    get [_viewportAxis]() {
      return dart.test(this[_isMultiline$]) ? basic_types.Axis.vertical : basic_types.Axis.horizontal;
    }
    get [_paintOffset]() {
      switch (this[_viewportAxis]) {
        case C174 || CT.C174:
        {
          return new ui.Offset.new(-dart.notNull(this.offset.pixels), 0.0);
        }
        case C175 || CT.C175:
        {
          return new ui.Offset.new(0.0, -dart.notNull(this.offset.pixels));
        }
      }
      return null;
    }
    get [_viewportExtent]() {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1130, 12, "ert(has");
      switch (this[_viewportAxis]) {
        case C174 || CT.C174:
        {
          return this.size.width;
        }
        case C175 || CT.C175:
        {
          return this.size.height;
        }
      }
      return null;
    }
    [_getMaxScrollExtent](contentSize) {
      if (!dart.test(this.hasSize)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1141, 12, "ert(has");
      switch (this[_viewportAxis]) {
        case C174 || CT.C174:
        {
          return math.max(core.double, 0.0, dart.notNull(contentSize.width) - dart.notNull(this.size.width));
        }
        case C175 || CT.C175:
        {
          return math.max(core.double, 0.0, dart.notNull(contentSize.height) - dart.notNull(this.size.height));
        }
      }
      return null;
    }
    get [_hasVisualOverflow]() {
      return dart.notNull(this[_maxScrollExtent]) > 0 || !dart.equals(this[_paintOffset], ui.Offset.zero);
    }
    getEndpointsForSelection(selection) {
      let t0;
      if (!(this.constraints != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1171, 12, "ert(constraints != ");
      this[_layoutText](this.constraints.maxWidth);
      let effectiveOffset = this[_effectiveOffset];
      let textPainterSelection = selection;
      if (dart.test(this.handleSpecialText)) {
        textPainterSelection = extended_text_utils.convertTextInputSelectionToTextPainterSelection(this.text, selection);
      }
      if (dart.test(selection.isCollapsed)) {
        let caretHeight = null;
        let caretHeightCallBack = dart.fn(value => {
          caretHeight = value;
        }, doubleToNull());
        let caretOffset = this.getCaretOffset(new ui.TextPosition.new({offset: textPainterSelection.extentOffset, affinity: selection.affinity}), {caretHeightCallBack: caretHeightCallBack, effectiveOffset: effectiveOffset, caretPrototype: this[_caretPrototype], handleSpecialText: this.handleSpecialText});
        let start = new ui.Offset.new(0.0, (t0 = caretHeight, t0 == null ? this.preferredLineHeight : t0))['+'](caretOffset);
        return JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, null)]);
      } else {
        let boxes = this[_textPainter].getBoxesForSelection(textPainterSelection);
        let start = new ui.Offset.new(boxes[$first].start, boxes[$first].bottom)['+'](effectiveOffset);
        let end = new ui.Offset.new(boxes[$last].end, boxes[$last].bottom)['+'](effectiveOffset);
        return JSArrayOfTextSelectionPoint().of([new editable.TextSelectionPoint.new(start, boxes[$first].direction), new editable.TextSelectionPoint.new(end, boxes[$last].direction)]);
      }
    }
    getPositionForPoint(globalPosition) {
      this[_layoutText](this.constraints.maxWidth);
      globalPosition = globalPosition['+'](this[_paintOffset]._negate());
      return this[_textPainter].getPositionForOffset(this.globalToLocal(globalPosition));
    }
    getLocalRectForCaret(caretPosition) {
      this[_layoutText](this.constraints.maxWidth);
      let caretOffset = this[_textPainter].getOffsetForCaret(caretPosition, this[_caretPrototype]);
      let rect = new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, this.preferredLineHeight).shift(caretOffset['+'](this[_paintOffset]));
      if (this[_cursorOffset] != null) rect = rect.shift(this[_cursorOffset]);
      return rect.shift(this[_getPixelPerfectCursorOffset](rect));
    }
    get preferredLineHeight() {
      return this[_textPainter].preferredLineHeight;
    }
    [_preferredHeight](width) {
      let lockedMax = this.maxLines != null && this.minLines == null;
      let lockedBoth = this.minLines != null && this.minLines == this.maxLines;
      let singleLine = this.maxLines === 1;
      if (singleLine || lockedMax || lockedBoth) {
        return dart.notNull(this.preferredLineHeight) * dart.notNull(this.maxLines);
      }
      let minLimited = this.minLines != null && dart.notNull(this.minLines) > 1;
      let maxLimited = this.maxLines != null;
      if (minLimited || maxLimited) {
        this[_layoutText](width);
        if (minLimited && dart.notNull(this[_textPainter].height) < dart.notNull(this.preferredLineHeight) * dart.notNull(this.minLines)) {
          return dart.notNull(this.preferredLineHeight) * dart.notNull(this.minLines);
        }
        if (maxLimited && dart.notNull(this[_textPainter].height) > dart.notNull(this.preferredLineHeight) * dart.notNull(this.maxLines)) {
          return dart.notNull(this.preferredLineHeight) * dart.notNull(this.maxLines);
        }
      }
      if (width === 1 / 0) {
        let text = this[_textPainter].text.toPlainText();
        let lines = 1;
        for (let index = 0; index < text.length; index = index + 1) {
          if (text[$codeUnitAt](index) === 10) lines = lines + 1;
        }
        return dart.notNull(this.preferredLineHeight) * lines;
      }
      this[_layoutText](width);
      return math.max(core.double, this.preferredLineHeight, this[_textPainter].height);
    }
    computeDistanceToActualBaseline(baseline) {
      this[_layoutText](this.constraints.maxWidth);
      return this[_textPainter].computeDistanceToActualBaseline(baseline);
    }
    hitTestSelf(position) {
      return true;
    }
    hitTestChildren(result, opts) {
      let t0;
      let position = opts && 'position' in opts ? opts.position : null;
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(this[_textPainter].inlinePlaceholderBoxes[$length])) {
        let textParentData = paragraph.TextParentData._check(child.parentData);
        let transform = (t0 = vector_math_64.Matrix4.translationValues(dart.notNull(textParentData.offset.dx) + dart.notNull(this[_effectiveOffset].dx), dart.notNull(textParentData.offset.dy) + dart.notNull(this[_effectiveOffset].dy), 0.0), t0.scale(textParentData.scale, textParentData.scale, textParentData.scale), t0);
        let isHit = result.addWithPaintTransform({transform: transform, position: position, hitTest: dart.fn((result, transformed) => {
            if (!dart.test(dart.fn(() => {
              let manualPosition = position['-'](textParentData.offset)['-'](this[_effectiveOffset])['/'](textParentData.scale);
              return (dart.notNull(transformed.dx) - dart.notNull(manualPosition.dx))[$abs]() < 1e-10 && (dart.notNull(transformed.dy) - dart.notNull(manualPosition.dy))[$abs]() < 1e-10;
            }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1322, 18, "ert(() {\r\n            final Offset manualPosition =\r\n                (position - textParentData.offset - _effectiveOffset) /\r\n                    textParentData.scale;\r\n            return (transformed.dx - manualPosition.dx).abs() <\r\n                    precisionErrorTolerance &&\r\n                (transformed.dy - manualPosition.dy).abs() <\r\n                    precisionErrorTolerance;\r\n         ");
            return child.hitTest(result, {position: transformed});
          }, BoxHitTestResultAndOffsetTobool())});
        if (dart.test(isHit)) {
          return true;
        }
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      return false;
    }
    handleEvent(event, entry) {
      box.BoxHitTestEntry._check(entry);
      if (dart.test(this.ignorePointer)) return;
      if (!dart.test(this.debugHandleEvent(event, entry))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1349, 12, "ert(debugHandleEvent(event, en");
      if (events.PointerDownEvent.is(event) && this.onSelectionChanged != null) {
        this[_tap].addPointer(event);
        this[_longPress].addPointer(event);
      }
    }
    handleTapDown(details) {
      this[_lastTapDownPosition] = details.globalPosition;
    }
    [_handleTapDown$](details) {
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1369, 12, "ert(!ignorePoi");
      this.handleTapDown(details);
    }
    handleTap() {
      this.selectPosition({cause: editable.SelectionChangedCause.tap});
    }
    [_handleTap]() {
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1384, 12, "ert(!ignorePoi");
      this.handleTap();
    }
    handleDoubleTap() {
      this.selectWord({cause: editable.SelectionChangedCause.doubleTap});
    }
    handleLongPress() {
      this.selectWord({cause: editable.SelectionChangedCause.longPress});
    }
    [_handleLongPress]() {
      if (!!dart.test(this.ignorePointer)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1409, 12, "ert(!ignorePoi");
      this.handleLongPress();
    }
    selectPosition(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      this.selectPositionAt({from: this[_lastTapDownPosition], cause: cause});
    }
    selectPositionAt(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1432, 12, "ert(cause != ");
      if (!(from != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1433, 12, "ert(from != ");
      this[_layoutText](this.constraints.maxWidth);
      if (this.onSelectionChanged != null) {
        let fromPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
        let toPosition = to == null ? null : this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset])));
        if (dart.test(this.handleSpecialText)) {
          fromPosition = extended_text_utils.convertTextPainterPostionToTextInputPostion(this.text, fromPosition);
          toPosition = extended_text_utils.convertTextPainterPostionToTextInputPostion(this.text, toPosition);
        }
        let baseOffset = fromPosition.offset;
        let extentOffset = fromPosition.offset;
        if (toPosition != null) {
          baseOffset = math.min(core.int, fromPosition.offset, toPosition.offset);
          extentOffset = math.max(core.int, fromPosition.offset, toPosition.offset);
        }
        let newSelection = new text_editing.TextSelection.new({baseOffset: baseOffset, extentOffset: extentOffset, affinity: fromPosition.affinity});
        if (!newSelection._equals(this[_selection])) {
          this[_handlePotentialSelectionChange](newSelection, cause);
        }
      }
    }
    selectWord(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      this.selectWordsInRange({from: this[_lastTapDownPosition], cause: cause});
    }
    selectWordsInRange(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let to = opts && 'to' in opts ? opts.to : null;
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1487, 12, "ert(cause != ");
      if (!(from != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1488, 12, "ert(from != ");
      this[_layoutText](this.constraints.maxWidth);
      if (this.onSelectionChanged != null) {
        let firstPosition = this[_textPainter].getPositionForOffset(this.globalToLocal(from['-'](this[_paintOffset])));
        let firstWord = this[_selectWordAtOffset](firstPosition);
        let lastWord = to == null ? firstWord : this[_selectWordAtOffset](this[_textPainter].getPositionForOffset(this.globalToLocal(to['-'](this[_paintOffset]))));
        this[_handlePotentialSelectionChange](new text_editing.TextSelection.new({baseOffset: firstWord.base.offset, extentOffset: lastWord.extent.offset, affinity: firstWord.affinity}), cause);
      }
    }
    selectWordEdge(opts) {
      let cause = opts && 'cause' in opts ? opts.cause : null;
      if (!(cause != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1514, 12, "ert(cause != ");
      this[_layoutText](this.constraints.maxWidth);
      if (!(this[_lastTapDownPosition] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1516, 12, "ert(_lastTapDownPosition != ");
      if (this.onSelectionChanged != null) {
        let position = this[_textPainter].getPositionForOffset(this.globalToLocal(this[_lastTapDownPosition]['-'](this[_paintOffset])));
        let word = this[_textPainter].getWordBoundary(position);
        let selection = null;
        if (dart.notNull(position.offset) - dart.notNull(word.start) <= 1) {
          selection = dart.test(this.handleSpecialText) ? extended_text_utils.convertTextPainterSelectionToTextInputSelection(this.text, new text_editing.TextSelection.collapsed({offset: word.start, affinity: ui.TextAffinity.downstream})) : new text_editing.TextSelection.collapsed({offset: word.start, affinity: ui.TextAffinity.downstream});
        } else {
          selection = dart.test(this.handleSpecialText) ? extended_text_utils.convertTextPainterSelectionToTextInputSelection(this.text, new text_editing.TextSelection.collapsed({offset: word.end, affinity: ui.TextAffinity.upstream})) : new text_editing.TextSelection.collapsed({offset: word.end, affinity: ui.TextAffinity.upstream});
        }
        this[_handlePotentialSelectionChange](selection, cause);
      }
    }
    [_selectWordAtOffset](position) {
      if (!(this[_textLayoutLastWidth] == this.constraints.maxWidth)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1550, 12, "ert(_textLayoutLastWidth == constraints.maxW");
      let word = this[_textPainter].getWordBoundary(position);
      let selection = null;
      if (dart.notNull(position.offset) >= dart.notNull(word.end)) {
        selection = new text_editing.TextSelection.fromPosition(position);
      } else {
        selection = new text_editing.TextSelection.new({baseOffset: word.start, extentOffset: word.end});
      }
      return dart.test(this.handleSpecialText) ? extended_text_utils.convertTextPainterSelectionToTextInputSelection(this.text, selection, {selectWord: true}) : selection;
    }
    layoutText(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let constraintWidth = opts && 'constraintWidth' in opts ? opts.constraintWidth : 1 / 0;
      this[_layoutText](constraintWidth);
    }
    [_layoutText](constraintWidth, opts) {
      let forceLayout = opts && 'forceLayout' in opts ? opts.forceLayout : false;
      if (!(constraintWidth != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1579, 12, "ert(constraintWidth != ");
      if (this[_textLayoutLastWidth] == constraintWidth && !dart.test(forceLayout)) return;
      let caretMargin = 1 + dart.notNull(this.cursorWidth);
      let availableWidth = math.max(core.double, 0.0, dart.notNull(constraintWidth) - caretMargin);
      let maxWidth = dart.test(this[_isMultiline$]) ? availableWidth : 1 / 0;
      this[_textPainter].layout({minWidth: availableWidth, maxWidth: maxWidth});
      this[_textLayoutLastWidth] = constraintWidth;
      this[_updateVisibleRegionMinY]();
    }
    get [_getCaretPrototype]() {
      switch (platform.defaultTargetPlatform) {
        case C10 || CT.C10:
        {
          return new ui.Rect.fromLTWH(0.0, 0.0, this.cursorWidth, dart.notNull(this.preferredLineHeight) + 2);
        }
        default:
        {
          return new ui.Rect.fromLTWH(0.0, 0, this.cursorWidth, dart.notNull(this.preferredLineHeight) - 2.0 * 0);
        }
      }
    }
    performLayout() {
      this.layoutChildren(this.constraints);
      this[_layoutText](this.constraints.maxWidth, {forceLayout: true});
      this.setParentData();
      this[_caretPrototype] = this[_getCaretPrototype];
      this[_selectionRects] = null;
      let textPainterSize = this[_textPainter].size;
      this.size = new ui.Size.new(this.constraints.maxWidth, this.constraints.constrainHeight(this[_preferredHeight](this.constraints.maxWidth)));
      let contentSize = new ui.Size.new(dart.notNull(textPainterSize.width) + 1 + dart.notNull(this.cursorWidth), textPainterSize.height);
      this[_maxScrollExtent] = this[_getMaxScrollExtent](contentSize);
      this.offset.applyViewportDimension(this[_viewportExtent]);
      this.offset.applyContentDimensions(0.0, this[_maxScrollExtent]);
    }
    [_getPixelPerfectCursorOffset](caretRect) {
      let caretPosition = this.localToGlobal(caretRect.topLeft);
      let pixelMultiple = 1.0 / dart.notNull(this[_devicePixelRatio$]);
      let quotientX = (dart.notNull(caretPosition.dx) / pixelMultiple)[$round]();
      let quotientY = (dart.notNull(caretPosition.dy) / pixelMultiple)[$round]();
      let pixelPerfectOffsetX = quotientX * pixelMultiple - dart.notNull(caretPosition.dx);
      let pixelPerfectOffsetY = quotientY * pixelMultiple - dart.notNull(caretPosition.dy);
      return new ui.Offset.new(pixelPerfectOffsetX, pixelPerfectOffsetY);
    }
    [_paintCaret](canvas, effectiveOffset, textPosition, textInputPosition) {
      let t0, t0$;
      if (!(this[_textLayoutLastWidth] == this.constraints.maxWidth)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1650, 12, "ert(_textLayoutLastWidth == constraints.maxW");
      let paint = (t0 = new ui.Paint.new(), t0.color = dart.test(this[_floatingCursorOn]) ? this.backgroundCursorColor : this[_cursorColor$], t0);
      let caretHeight = null;
      let caretHeightCallBack = dart.fn(value => {
        caretHeight = value;
      }, doubleToNull());
      let caretOffset = this.getCaretOffset(textPosition, {caretHeightCallBack: caretHeightCallBack, effectiveOffset: effectiveOffset, caretPrototype: this[_caretPrototype], handleSpecialText: this.handleSpecialText});
      let caretRect = this[_caretPrototype].shift(caretOffset);
      if (this[_cursorOffset] != null) caretRect = caretRect.shift(this[_cursorOffset]);
      let fullHeight = (t0$ = this[_textPainter].getFullHeightForCaret(textPosition, this[_caretPrototype]), t0$ == null ? caretHeight : t0$);
      if (fullHeight != null) {
        switch (platform.defaultTargetPlatform) {
          case C10 || CT.C10:
          {
            {
              caretRect = new ui.Rect.fromLTWH(caretRect.left, caretRect.top, caretRect.width, fullHeight);
              break;
            }
          }
          default:
          {
            {
              caretRect = new ui.Rect.fromLTWH(caretRect.left, dart.notNull(caretRect.top) - 0, caretRect.width, fullHeight);
              break;
            }
          }
        }
      }
      caretRect = caretRect.shift(this[_getPixelPerfectCursorOffset](caretRect));
      if (this.cursorRadius == null) {
        canvas.drawRect(caretRect, paint);
      } else {
        let caretRRect = new ui.RRect.fromRectAndRadius(caretRect, this.cursorRadius);
        canvas.drawRRect(caretRRect, paint);
      }
      if (!dart.equals(caretRect, this[_lastCaretRect])) {
        this[_lastCaretRect] = caretRect;
        if (this.onCaretChanged != null) this.onCaretChanged(caretRect);
      }
    }
    setFloatingCursor(state, boundedOffset, lastTextPosition, opts) {
      let resetLerpValue = opts && 'resetLerpValue' in opts ? opts.resetLerpValue : null;
      if (!(state != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1731, 12, "ert(state != ");
      if (!(boundedOffset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1732, 12, "ert(boundedOffset != ");
      if (!(lastTextPosition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1733, 12, "ert(lastTextPosition != ");
      if (dart.equals(state, text_input.FloatingCursorDragState.Start)) {
        this[_relativeOrigin] = C173 || CT.C173;
        this[_previousOffset] = null;
        this[_resetOriginOnBottom] = false;
        this[_resetOriginOnTop] = false;
        this[_resetOriginOnRight] = false;
        this[_resetOriginOnBottom] = false;
      }
      this[_floatingCursorOn] = !dart.equals(state, text_input.FloatingCursorDragState.End);
      this[_resetFloatingCursorAnimationValue] = resetLerpValue;
      if (dart.test(this[_floatingCursorOn])) {
        this[_floatingCursorOffset$] = boundedOffset;
        this[_floatingCursorTextPosition] = lastTextPosition;
      }
      this.markNeedsPaint();
    }
    [_paintFloatingCaret](canvas, effectiveOffset) {
      let t0;
      if (!(this[_textLayoutLastWidth] == this.constraints.maxWidth)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1753, 12, "ert(_textLayoutLastWidth == constraints.maxW");
      if (!dart.test(this[_floatingCursorOn])) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1754, 12, "ert(_floatingCurs");
      let paint = (t0 = new ui.Paint.new(), t0.color = this[_cursorColor$].withOpacity(0.75), t0);
      let sizeAdjustmentX = extended_render_editable._kFloatingCaretSizeIncrease.dx;
      let sizeAdjustmentY = extended_render_editable._kFloatingCaretSizeIncrease.dy;
      if (this[_resetFloatingCursorAnimationValue] != null) {
        sizeAdjustmentX = ui.lerpDouble(sizeAdjustmentX, 0, this[_resetFloatingCursorAnimationValue]);
        sizeAdjustmentY = ui.lerpDouble(sizeAdjustmentY, 0, this[_resetFloatingCursorAnimationValue]);
      }
      let floatingCaretPrototype = new ui.Rect.fromLTRB(dart.notNull(this[_caretPrototype].left) - dart.notNull(sizeAdjustmentX), dart.notNull(this[_caretPrototype].top) - dart.notNull(sizeAdjustmentY), dart.notNull(this[_caretPrototype].right) + dart.notNull(sizeAdjustmentX), dart.notNull(this[_caretPrototype].bottom) + dart.notNull(sizeAdjustmentY));
      let caretRect = floatingCaretPrototype.shift(effectiveOffset);
      let floatingCursorRadius = C176 || CT.C176;
      let caretRRect = new ui.RRect.fromRectAndRadius(caretRect, floatingCursorRadius);
      canvas.drawRRect(caretRRect, paint);
    }
    calculateBoundedFloatingCursorOffset(rawCursorOffset) {
      let deltaPosition = C173 || CT.C173;
      let topBound = -dart.notNull(this.floatingCursorAddedMargin.top);
      let bottomBound = dart.notNull(this[_textPainter].height) - dart.notNull(this.preferredLineHeight) + dart.notNull(this.floatingCursorAddedMargin.bottom);
      let leftBound = -dart.notNull(this.floatingCursorAddedMargin.left);
      let rightBound = dart.notNull(this[_textPainter].width) + dart.notNull(this.floatingCursorAddedMargin.right);
      if (this[_previousOffset] != null) deltaPosition = rawCursorOffset['-'](this[_previousOffset]);
      if (dart.test(this[_resetOriginOnLeft]) && dart.notNull(deltaPosition.dx) > 0) {
        this[_relativeOrigin] = new ui.Offset.new(dart.notNull(rawCursorOffset.dx) - leftBound, this[_relativeOrigin].dy);
        this[_resetOriginOnLeft] = false;
      } else if (dart.test(this[_resetOriginOnRight]) && dart.notNull(deltaPosition.dx) < 0) {
        this[_relativeOrigin] = new ui.Offset.new(dart.notNull(rawCursorOffset.dx) - rightBound, this[_relativeOrigin].dy);
        this[_resetOriginOnRight] = false;
      }
      if (dart.test(this[_resetOriginOnTop]) && dart.notNull(deltaPosition.dy) > 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, dart.notNull(rawCursorOffset.dy) - topBound);
        this[_resetOriginOnTop] = false;
      } else if (dart.test(this[_resetOriginOnBottom]) && dart.notNull(deltaPosition.dy) < 0) {
        this[_relativeOrigin] = new ui.Offset.new(this[_relativeOrigin].dx, dart.notNull(rawCursorOffset.dy) - bottomBound);
        this[_resetOriginOnBottom] = false;
      }
      let currentX = dart.notNull(rawCursorOffset.dx) - dart.notNull(this[_relativeOrigin].dx);
      let currentY = dart.notNull(rawCursorOffset.dy) - dart.notNull(this[_relativeOrigin].dy);
      let adjustedX = math.min(core.double, math.max(core.double, currentX, leftBound), rightBound);
      let adjustedY = math.min(core.double, math.max(core.double, currentY, topBound), bottomBound);
      let adjustedOffset = new ui.Offset.new(adjustedX, adjustedY);
      if (currentX < leftBound && dart.notNull(deltaPosition.dx) < 0)
        this[_resetOriginOnLeft] = true;
      else if (currentX > rightBound && dart.notNull(deltaPosition.dx) > 0) this[_resetOriginOnRight] = true;
      if (currentY < topBound && dart.notNull(deltaPosition.dy) < 0)
        this[_resetOriginOnTop] = true;
      else if (currentY > bottomBound && dart.notNull(deltaPosition.dy) > 0) this[_resetOriginOnBottom] = true;
      this[_previousOffset] = rawCursorOffset;
      return adjustedOffset;
    }
    [_paintContents](context, offset) {
      if (!(this[_textLayoutLastWidth] == this.constraints.maxWidth)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1851, 12, "ert(_textLayoutLastWidth == constraints.maxW");
      let effectiveOffset = offset['+'](this[_paintOffset]);
      let showSelection = false;
      let showCaret = false;
      let actualSelection = dart.test(this.handleSpecialText) ? extended_text_utils.convertTextInputSelectionToTextPainterSelection(this.text, this[_selection]) : this[_selection];
      if (actualSelection != null && !dart.test(this[_floatingCursorOn])) {
        if (dart.test(actualSelection.isCollapsed) && dart.test(this[_showCursor].value) && this.cursorColor != null)
          showCaret = true;
        else if (!dart.test(actualSelection.isCollapsed) && this[_selectionColor] != null) showSelection = true;
        this[_updateSelectionExtentsVisibility](effectiveOffset, actualSelection);
      }
      if (showSelection) {
        this[_selectionRects] == null ? this[_selectionRects] = this[_textPainter].getBoxesForSelection(actualSelection) : null;
        this[_paintSelection](context.canvas, effectiveOffset);
      }
      this.paintWidgets(context, effectiveOffset);
      this[_paintSpecialText](context, effectiveOffset);
      if (dart.test(this.paintCursorAboveText)) this[_textPainter].paint(context.canvas, effectiveOffset);
      if (showCaret) this[_paintCaret](context.canvas, effectiveOffset, actualSelection.extent, this[_selection].extent);
      if (!dart.test(this.paintCursorAboveText)) this[_textPainter].paint(context.canvas, effectiveOffset);
      if (dart.test(this[_floatingCursorOn])) {
        if (this[_resetFloatingCursorAnimationValue] == null) {
          this[_paintCaret](context.canvas, effectiveOffset, extended_text_utils.convertTextInputPostionToTextPainterPostion(this.text, this[_floatingCursorTextPosition]), this[_floatingCursorTextPosition]);
        }
        this[_paintFloatingCaret](context.canvas, this[_floatingCursorOffset$]);
      }
    }
    [_paintSelection](canvas, effectiveOffset) {
      let t0;
      if (!(this[_textLayoutLastWidth] == this.constraints.maxWidth)) dart.assertFailed("Last width (" + dart.str(this[_textLayoutLastWidth]) + ") not the same as max width constraint (" + dart.str(this.constraints.maxWidth) + ").", "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1907, 12, "ert(_textLayoutLastWidth == constraints.maxW");
      if (!(this[_selectionRects] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1909, 12, "ert(_selectionRects != ");
      let paint = (t0 = new ui.Paint.new(), t0.color = this[_selectionColor], t0);
      for (let box of this[_selectionRects])
        canvas.drawRect(box.toRect().shift(effectiveOffset), paint);
    }
    get [_effectiveOffset]() {
      let t0;
      return (t0 = this[_initialOffset], t0 == null ? ui.Offset.zero : t0)['+'](this[_paintOffset]);
    }
    paint(context, offset) {
      this[_initialOffset] = offset;
      this[_layoutText](this.constraints.maxWidth);
      if (dart.test(this[_hasVisualOverflow]))
        context.pushClipRect(this.needsCompositing, offset, ui.Offset.zero['&'](this.size), dart.bind(this, _paintContents));
      else
        this[_paintContents](context, offset);
    }
    [_paintSpecialText](context, offset) {
      if (!dart.test(this.handleSpecialText)) return;
      let canvas = context.canvas;
      canvas.save();
      canvas.translate(offset.dx, offset.dy);
      let rect = new ui.Offset.new(0.0, 0.0)['&'](this.size);
      this[_paintSpecialTextChildren](JSArrayOfInlineSpan().of([this.text]), canvas, rect);
      canvas.restore();
    }
    [_paintSpecialTextChildren](textSpans, canvas, rect, opts) {
      let textOffset = opts && 'textOffset' in opts ? opts.textOffset : 0;
      if (textSpans == null) return;
      for (let ts of textSpans) {
        let topLeftOffset = this.getOffsetForCaret(new ui.TextPosition.new({offset: textOffset}), rect);
        if (topLeftOffset == null || textOffset !== 0 && dart.equals(topLeftOffset, ui.Offset.zero)) {
          return;
        }
        if (background_text_span.BackgroundTextSpan.is(ts)) {
          let painter = ts.layout(this[_textPainter]);
          let textRect = topLeftOffset['&'](painter.size);
          let endOffset = null;
          if (dart.notNull(textRect.right) > dart.notNull(rect.right)) {
            let endTextOffset = dart.notNull(textOffset) + ts.toPlainText().length;
            endOffset = this[_findEndOffset](rect, endTextOffset);
          }
          ts.paint(canvas, topLeftOffset, rect, {endOffset: endOffset, wholeTextPainter: this[_textPainter]});
        } else if (text_span.TextSpan.is(ts) && ts.children != null) {
          this[_paintSpecialTextChildren](ts.children, canvas, rect, {textOffset: textOffset});
        }
        textOffset = dart.notNull(textOffset) + ts.toPlainText().length;
      }
    }
    [_findEndOffset](rect, endTextOffset) {
      let endOffset = this.getOffsetForCaret(new ui.TextPosition.new({offset: endTextOffset, affinity: ui.TextAffinity.upstream}), rect);
      if (endOffset == null || endTextOffset !== 0 && dart.equals(endOffset, ui.Offset.zero)) {
        return this[_findEndOffset](rect, dart.notNull(endTextOffset) - 1);
      }
      return endOffset;
    }
    getOffsetForCaret(position, caretPrototype) {
      if (!!dart.test(this.debugNeedsLayout)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 1995, 12, "ert(!debugNeedsLa");
      this[_layoutText](this.constraints.maxWidth);
      return this[_textPainter].getOffsetForCaret(position, caretPrototype);
    }
    describeApproximatePaintClip(child) {
      object.RenderObject._check(child);
      return dart.test(this[_hasVisualOverflow]) ? ui.Offset.zero['&'](this.size) : null;
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new colors.ColorProperty.new("cursorColor", this.cursorColor));
      properties.add(new (DiagnosticsPropertyOfValueNotifierOfbool()).new("showCursor", this.showCursor));
      properties.add(new diagnostics.IntProperty.new("maxLines", this.maxLines));
      properties.add(new diagnostics.IntProperty.new("minLines", this.minLines));
      properties.add(new (DiagnosticsPropertyOfbool()).new("expands", this.expands, {defaultValue: false}));
      properties.add(new colors.ColorProperty.new("selectionColor", this.selectionColor));
      properties.add(new diagnostics.DoubleProperty.new("textScaleFactor", this.textScaleFactor));
      properties.add(new (DiagnosticsPropertyOfLocale()).new("locale", this.locale, {defaultValue: null}));
      properties.add(new (DiagnosticsPropertyOfTextSelection()).new("selection", this.selection));
      properties.add(new (DiagnosticsPropertyOfViewportOffset()).new("offset", this.offset));
    }
    debugDescribeChildren() {
      return JSArrayOfDiagnosticsNode().of([this.text.toDiagnosticsNode({name: "text", style: diagnostics.DiagnosticsTreeStyle.transition})]);
    }
    getSize() {
      return this.size;
    }
    get isAttached() {
      return this.attached;
    }
    getlocalToGlobal(point, opts) {
      let ancestor = opts && 'ancestor' in opts ? opts.ancestor : null;
      return this.localToGlobal(point, {ancestor: ancestor});
    }
    get overflow() {
      return paragraph.TextOverflow.visible;
    }
    get softWrap() {
      return false;
    }
    get textPainter() {
      return this[_textPainter];
    }
  };
  (extended_render_editable.ExtendedRenderEditable.new = function(opts) {
    let t0, t0$, t0$0, t0$1;
    let text = opts && 'text' in opts ? opts.text : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let textAlign = opts && 'textAlign' in opts ? opts.textAlign : C2 || CT.C2;
    let cursorColor = opts && 'cursorColor' in opts ? opts.cursorColor : null;
    let backgroundCursorColor = opts && 'backgroundCursorColor' in opts ? opts.backgroundCursorColor : null;
    let showCursor = opts && 'showCursor' in opts ? opts.showCursor : null;
    let hasFocus = opts && 'hasFocus' in opts ? opts.hasFocus : null;
    let maxLines = opts && 'maxLines' in opts ? opts.maxLines : 1;
    let minLines = opts && 'minLines' in opts ? opts.minLines : null;
    let expands = opts && 'expands' in opts ? opts.expands : false;
    let strutStyle = opts && 'strutStyle' in opts ? opts.strutStyle : null;
    let selectionColor = opts && 'selectionColor' in opts ? opts.selectionColor : null;
    let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let onSelectionChanged = opts && 'onSelectionChanged' in opts ? opts.onSelectionChanged : null;
    let onCaretChanged = opts && 'onCaretChanged' in opts ? opts.onCaretChanged : null;
    let ignorePointer = opts && 'ignorePointer' in opts ? opts.ignorePointer : false;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let cursorWidth = opts && 'cursorWidth' in opts ? opts.cursorWidth : 1;
    let cursorRadius = opts && 'cursorRadius' in opts ? opts.cursorRadius : null;
    let paintCursorAboveText = opts && 'paintCursorAboveText' in opts ? opts.paintCursorAboveText : false;
    let cursorOffset = opts && 'cursorOffset' in opts ? opts.cursorOffset : null;
    let devicePixelRatio = opts && 'devicePixelRatio' in opts ? opts.devicePixelRatio : 1;
    let enableInteractiveSelection = opts && 'enableInteractiveSelection' in opts ? opts.enableInteractiveSelection : null;
    let floatingCursorAddedMargin = opts && 'floatingCursorAddedMargin' in opts ? opts.floatingCursorAddedMargin : C172 || CT.C172;
    let textSelectionDelegate = opts && 'textSelectionDelegate' in opts ? opts.textSelectionDelegate : null;
    let supportSpecialText = opts && 'supportSpecialText' in opts ? opts.supportSpecialText : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[supportSpecialText$] = false;
    this[_handleSpecialText] = false;
    this[_textLayoutLastWidth] = null;
    this[_lastCaretRect] = null;
    this[_selectionStartInViewport] = new (ValueNotifierOfbool()).new(true);
    this[_selectionEndInViewport] = new (ValueNotifierOfbool()).new(true);
    this[_visibleRegionMinY] = -0;
    this[_extentOffset] = -1;
    this[_baseOffset] = -1;
    this[_previousCursorLocation] = -1;
    this[_resetCursor] = false;
    this[_hasFocus$] = false;
    this[_listenerAttached] = false;
    this[_selectionRects] = null;
    this[_cursorWidth] = 1.0;
    this[_floatingCursorOn] = false;
    this[_floatingCursorOffset$] = null;
    this[_floatingCursorTextPosition] = null;
    this[_maxScrollExtent] = 0.0;
    this[_tap] = null;
    this[_longPress] = null;
    this[_lastTapDownPosition] = null;
    this[_caretPrototype] = null;
    this[_relativeOrigin] = C173 || CT.C173;
    this[_previousOffset] = null;
    this[_resetOriginOnLeft] = false;
    this[_resetOriginOnRight] = false;
    this[_resetOriginOnTop] = false;
    this[_resetOriginOnBottom] = false;
    this[_resetFloatingCursorAnimationValue] = null;
    this[_initialOffset] = null;
    this[onSelectionChanged$0] = onSelectionChanged;
    this[onCaretChanged$] = onCaretChanged;
    this[ignorePointer$] = ignorePointer;
    this[textSelectionDelegate$] = textSelectionDelegate;
    this[supportSpecialText$] = supportSpecialText;
    if (!(textAlign != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 123, 16, "textAlign != null");
    if (!(textDirection != null)) dart.assertFailed("RenderEditable created without a textDirection.", "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 124, 16, "textDirection != null");
    if (!(maxLines == null || dart.notNull(maxLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 126, 16, "maxLines == null || maxLines > 0");
    if (!(minLines == null || dart.notNull(minLines) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 127, 16, "minLines == null || minLines > 0");
    if (!(maxLines == null || minLines == null || dart.notNull(maxLines) >= dart.notNull(minLines))) dart.assertFailed("minLines can't be greater than maxLines", "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 129, 11, "(maxLines == null) || (minLines == null) || (maxLines >= minLines)");
    if (!(expands != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 132, 16, "expands != null");
    if (!(!dart.test(expands) || maxLines == null && minLines == null)) dart.assertFailed("minLines and maxLines must be null when expands is true.", "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 134, 11, "!expands || (maxLines == null && minLines == null)");
    if (!(textScaleFactor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 137, 16, "textScaleFactor != null");
    if (!(offset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 138, 16, "offset != null");
    if (!(ignorePointer != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 139, 16, "ignorePointer != null");
    if (!(paintCursorAboveText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 140, 16, "paintCursorAboveText != null");
    if (!(obscureText != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 141, 16, "obscureText != null");
    if (!(textSelectionDelegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 142, 16, "textSelectionDelegate != null");
    if (!(cursorWidth != null && dart.notNull(cursorWidth) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 143, 16, "cursorWidth != null && cursorWidth >= 0.0");
    if (!(devicePixelRatio != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 144, 16, "devicePixelRatio != null");
    this[_handleSpecialText] = extended_text_utils.hasSpecialText(text);
    this[_textPainter] = new text_painter.TextPainter.new({text: text, textAlign: textAlign, textDirection: textDirection, textScaleFactor: textScaleFactor, locale: locale, strutStyle: strutStyle});
    this[_cursorColor$] = cursorColor;
    this[_backgroundCursorColor] = backgroundCursorColor;
    this[_showCursor] = (t0 = showCursor, t0 == null ? new (ValueNotifierOfbool()).new(false) : t0);
    this[_maxLines] = maxLines;
    this[_minLines] = minLines;
    this[_expands] = expands;
    this[_selectionColor] = selectionColor;
    this[_selection] = selection;
    this[_offset] = offset;
    this[_cursorWidth] = cursorWidth;
    this[_cursorRadius] = cursorRadius;
    this[_paintCursorOnTop] = paintCursorAboveText;
    this[_cursorOffset] = cursorOffset;
    this[_floatingCursorAddedMargin] = floatingCursorAddedMargin;
    this[_enableInteractiveSelection] = enableInteractiveSelection;
    this[_devicePixelRatio$] = devicePixelRatio;
    this[_obscureText] = obscureText;
    extended_render_editable.ExtendedRenderEditable.__proto__.new.call(this);
    if (!(this[_showCursor] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 172, 12, "_showCursor != null");
    if (!(!dart.test(this[_showCursor].value) || cursorColor != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_field/src/extended_render_editable.dart", 173, 12, "!_showCursor.value || cursorColor != null");
    this.hasFocus = (t0$ = hasFocus, t0$ == null ? false : t0$);
    this[_tap] = (t0$0 = new tap.TapGestureRecognizer.new({debugOwner: this}), t0$0.onTapDown = dart.bind(this, _handleTapDown$), t0$0.onTap = dart.bind(this, _handleTap), t0$0);
    this[_longPress] = (t0$1 = new long_press.LongPressGestureRecognizer.new({debugOwner: this}), t0$1.onLongPress = dart.bind(this, _handleLongPress), t0$1);
    this.addAll(children);
    this.extractPlaceholderSpans(text);
  }).prototype = extended_render_editable.ExtendedRenderEditable.prototype;
  dart.addTypeTests(extended_render_editable.ExtendedRenderEditable);
  const supportSpecialText$ = Symbol("ExtendedRenderEditable.supportSpecialText");
  const onSelectionChanged$0 = Symbol("ExtendedRenderEditable.onSelectionChanged");
  const onCaretChanged$ = Symbol("ExtendedRenderEditable.onCaretChanged");
  const ignorePointer$ = Symbol("ExtendedRenderEditable.ignorePointer");
  const textSelectionDelegate$ = Symbol("ExtendedRenderEditable.textSelectionDelegate");
  dart.setMethodSignature(extended_render_editable.ExtendedRenderEditable, () => ({
    __proto__: dart.getMethods(extended_render_editable.ExtendedRenderEditable.__proto__),
    [_updateSelectionExtentsVisibility]: dart.fnType(dart.void, [ui.Offset, text_editing.TextSelection]),
    [_updateVisibleRegionMinY]: dart.fnType(dart.void, []),
    [_handlePotentialSelectionChange]: dart.fnType(dart.void, [text_editing.TextSelection, editable.SelectionChangedCause]),
    [_handleKeyEvent]: dart.fnType(dart.void, [raw_keyboard.RawKeyEvent]),
    [_handleControl]: dart.fnType(core.int, [core.bool, core.bool, core.bool, core.int]),
    [_handleHorizontalArrows]: dart.fnType(core.int, [core.bool, core.bool, core.bool, core.int]),
    [_handleVerticalArrows]: dart.fnType(core.int, [core.bool, core.bool, core.bool, core.int]),
    [_handleShift]: dart.fnType(core.int, [core.bool, core.bool, core.bool, core.int]),
    [_handleShortcuts]: dart.fnType(async.Future$(dart.void), [core.int]),
    [_handleDelete]: dart.fnType(dart.void, []),
    markNeedsTextLayout: dart.fnType(dart.void, []),
    [_handleSetSelection]: dart.fnType(dart.void, [text_editing.TextSelection]),
    [_handleMoveCursorForwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByCharacter]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorForwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_handleMoveCursorBackwardByWord]: dart.fnType(dart.void, [core.bool]),
    [_getNextWord]: dart.fnType(text_editing.TextRange, [core.int]),
    [_getPreviousWord]: dart.fnType(text_editing.TextRange, [core.int]),
    [_onlyWhitespace]: dart.fnType(core.bool, [text_editing.TextRange]),
    [_getMaxScrollExtent]: dart.fnType(core.double, [ui.Size]),
    getEndpointsForSelection: dart.fnType(core.List$(editable.TextSelectionPoint), [text_editing.TextSelection]),
    getPositionForPoint: dart.fnType(ui.TextPosition, [ui.Offset]),
    getLocalRectForCaret: dart.fnType(ui.Rect, [ui.TextPosition]),
    [_preferredHeight]: dart.fnType(core.double, [core.double]),
    handleTapDown: dart.fnType(dart.void, [tap.TapDownDetails]),
    [_handleTapDown$]: dart.fnType(dart.void, [tap.TapDownDetails]),
    handleTap: dart.fnType(dart.void, []),
    [_handleTap]: dart.fnType(dart.void, []),
    handleDoubleTap: dart.fnType(dart.void, []),
    handleLongPress: dart.fnType(dart.void, []),
    [_handleLongPress]: dart.fnType(dart.void, []),
    selectPosition: dart.fnType(dart.void, [], {cause: editable.SelectionChangedCause}),
    selectPositionAt: dart.fnType(dart.void, [], {cause: editable.SelectionChangedCause, from: ui.Offset, to: ui.Offset}),
    selectWord: dart.fnType(dart.void, [], {cause: editable.SelectionChangedCause}),
    selectWordsInRange: dart.fnType(dart.void, [], {cause: editable.SelectionChangedCause, from: ui.Offset, to: ui.Offset}),
    selectWordEdge: dart.fnType(dart.void, [], {cause: editable.SelectionChangedCause}),
    [_selectWordAtOffset]: dart.fnType(text_editing.TextSelection, [ui.TextPosition]),
    [_layoutText]: dart.fnType(dart.void, [core.double], {forceLayout: core.bool}),
    [_getPixelPerfectCursorOffset]: dart.fnType(ui.Offset, [ui.Rect]),
    [_paintCaret]: dart.fnType(dart.void, [ui.Canvas, ui.Offset, ui.TextPosition, ui.TextPosition]),
    setFloatingCursor: dart.fnType(dart.void, [text_input.FloatingCursorDragState, ui.Offset, ui.TextPosition], {resetLerpValue: core.double}),
    [_paintFloatingCaret]: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    calculateBoundedFloatingCursorOffset: dart.fnType(ui.Offset, [ui.Offset]),
    [_paintContents]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintSelection]: dart.fnType(dart.void, [ui.Canvas, ui.Offset]),
    [_paintSpecialText]: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    [_paintSpecialTextChildren]: dart.fnType(dart.void, [core.List$(inline_span.InlineSpan), ui.Canvas, ui.Rect], {textOffset: core.int}),
    [_findEndOffset]: dart.fnType(ui.Offset, [ui.Rect, core.int]),
    getOffsetForCaret: dart.fnType(ui.Offset, [ui.TextPosition, ui.Rect]),
    getSize: dart.fnType(ui.Size, []),
    getlocalToGlobal: dart.fnType(ui.Offset, [ui.Offset], {ancestor: object.RenderObject})
  }));
  dart.setGetterSignature(extended_render_editable.ExtendedRenderEditable, () => ({
    __proto__: dart.getGetters(extended_render_editable.ExtendedRenderEditable.__proto__),
    handleSpecialText: core.bool,
    isComposingText: core.bool,
    devicePixelRatio: core.double,
    obscureText: core.bool,
    selectionStartInViewport: change_notifier.ValueListenable$(core.bool),
    selectionEndInViewport: change_notifier.ValueListenable$(core.bool),
    text: inline_span.InlineSpan,
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: ui.Locale,
    strutStyle: strut_style.StrutStyle,
    cursorColor: ui.Color,
    backgroundCursorColor: ui.Color,
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    maxLines: core.int,
    minLines: core.int,
    expands: core.bool,
    selectionColor: ui.Color,
    textScaleFactor: core.double,
    selection: text_editing.TextSelection,
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    paintCursorAboveText: core.bool,
    cursorOffset: ui.Offset,
    cursorRadius: ui.Radius,
    floatingCursorAddedMargin: edge_insets.EdgeInsets,
    enableInteractiveSelection: core.bool,
    selectionEnabled: core.bool,
    [_isMultiline$]: core.bool,
    [_viewportAxis]: basic_types.Axis,
    [_paintOffset]: ui.Offset,
    [_viewportExtent]: core.double,
    [_hasVisualOverflow]: core.bool,
    preferredLineHeight: core.double,
    [_getCaretPrototype]: ui.Rect,
    [_effectiveOffset]: ui.Offset,
    isAttached: core.bool,
    overflow: paragraph.TextOverflow,
    softWrap: core.bool,
    textPainter: text_painter.TextPainter
  }));
  dart.setSetterSignature(extended_render_editable.ExtendedRenderEditable, () => ({
    __proto__: dart.getSetters(extended_render_editable.ExtendedRenderEditable.__proto__),
    devicePixelRatio: core.double,
    obscureText: core.bool,
    text: inline_span.InlineSpan,
    textAlign: ui.TextAlign,
    textDirection: ui.TextDirection,
    locale: ui.Locale,
    strutStyle: strut_style.StrutStyle,
    cursorColor: ui.Color,
    backgroundCursorColor: ui.Color,
    showCursor: change_notifier.ValueNotifier$(core.bool),
    hasFocus: core.bool,
    maxLines: core.int,
    minLines: core.int,
    expands: core.bool,
    selectionColor: ui.Color,
    textScaleFactor: core.double,
    selection: text_editing.TextSelection,
    offset: viewport_offset.ViewportOffset,
    cursorWidth: core.double,
    paintCursorAboveText: core.bool,
    cursorOffset: ui.Offset,
    cursorRadius: ui.Radius,
    floatingCursorAddedMargin: edge_insets.EdgeInsets,
    enableInteractiveSelection: core.bool
  }));
  dart.setLibraryUri(extended_render_editable.ExtendedRenderEditable, "package:extended_text_field/src/extended_render_editable.dart");
  dart.setFieldSignature(extended_render_editable.ExtendedRenderEditable, () => ({
    __proto__: dart.getFields(extended_render_editable.ExtendedRenderEditable.__proto__),
    supportSpecialText: dart.fieldType(core.bool),
    [_handleSpecialText]: dart.fieldType(core.bool),
    onSelectionChanged: dart.fieldType(dart.fnType(dart.void, [text_editing.TextSelection, extended_render_editable.ExtendedRenderEditable, editable.SelectionChangedCause])),
    [_textLayoutLastWidth]: dart.fieldType(core.double),
    onCaretChanged: dart.fieldType(dart.fnType(dart.void, [ui.Rect])),
    ignorePointer: dart.fieldType(core.bool),
    [_devicePixelRatio$]: dart.fieldType(core.double),
    [_obscureText]: dart.fieldType(core.bool),
    textSelectionDelegate: dart.fieldType(text_input.TextSelectionDelegate),
    [_lastCaretRect]: dart.fieldType(ui.Rect),
    [_selectionStartInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_selectionEndInViewport]: dart.finalFieldType(change_notifier.ValueNotifier$(core.bool)),
    [_visibleRegionMinY]: dart.fieldType(core.double),
    [_extentOffset]: dart.fieldType(core.int),
    [_baseOffset]: dart.fieldType(core.int),
    [_previousCursorLocation]: dart.fieldType(core.int),
    [_resetCursor]: dart.fieldType(core.bool),
    [_textPainter]: dart.finalFieldType(text_painter.TextPainter),
    [_cursorColor$]: dart.fieldType(ui.Color),
    [_backgroundCursorColor]: dart.fieldType(ui.Color),
    [_showCursor]: dart.fieldType(change_notifier.ValueNotifier$(core.bool)),
    [_hasFocus$]: dart.fieldType(core.bool),
    [_listenerAttached]: dart.fieldType(core.bool),
    [_maxLines]: dart.fieldType(core.int),
    [_minLines]: dart.fieldType(core.int),
    [_expands]: dart.fieldType(core.bool),
    [_selectionColor]: dart.fieldType(ui.Color),
    [_selectionRects]: dart.fieldType(core.List$(ui.TextBox)),
    [_selection]: dart.fieldType(text_editing.TextSelection),
    [_offset]: dart.fieldType(viewport_offset.ViewportOffset),
    [_cursorWidth]: dart.fieldType(core.double),
    [_paintCursorOnTop]: dart.fieldType(core.bool),
    [_cursorOffset]: dart.fieldType(ui.Offset),
    [_cursorRadius]: dart.fieldType(ui.Radius),
    [_floatingCursorAddedMargin]: dart.fieldType(edge_insets.EdgeInsets),
    [_floatingCursorOn]: dart.fieldType(core.bool),
    [_floatingCursorOffset$]: dart.fieldType(ui.Offset),
    [_floatingCursorTextPosition]: dart.fieldType(ui.TextPosition),
    [_enableInteractiveSelection]: dart.fieldType(core.bool),
    [_maxScrollExtent]: dart.fieldType(core.double),
    [_tap]: dart.fieldType(tap.TapGestureRecognizer),
    [_longPress]: dart.fieldType(long_press.LongPressGestureRecognizer),
    [_lastTapDownPosition]: dart.fieldType(ui.Offset),
    [_caretPrototype]: dart.fieldType(ui.Rect),
    [_relativeOrigin]: dart.fieldType(ui.Offset),
    [_previousOffset]: dart.fieldType(ui.Offset),
    [_resetOriginOnLeft]: dart.fieldType(core.bool),
    [_resetOriginOnRight]: dart.fieldType(core.bool),
    [_resetOriginOnTop]: dart.fieldType(core.bool),
    [_resetOriginOnBottom]: dart.fieldType(core.bool),
    [_resetFloatingCursorAnimationValue]: dart.fieldType(core.double),
    [_initialOffset]: dart.fieldType(ui.Offset)
  }));
  dart.defineLazy(extended_render_editable.ExtendedRenderEditable, {
    /*extended_render_editable.ExtendedRenderEditable.obscuringCharacter*/get obscuringCharacter() {
      return "•";
    },
    /*extended_render_editable.ExtendedRenderEditable._kLeftArrowCode*/get _kLeftArrowCode() {
      return 21;
    },
    /*extended_render_editable.ExtendedRenderEditable._kRightArrowCode*/get _kRightArrowCode() {
      return 22;
    },
    /*extended_render_editable.ExtendedRenderEditable._kUpArrowCode*/get _kUpArrowCode() {
      return 19;
    },
    /*extended_render_editable.ExtendedRenderEditable._kDownArrowCode*/get _kDownArrowCode() {
      return 20;
    },
    /*extended_render_editable.ExtendedRenderEditable._kXKeyCode*/get _kXKeyCode() {
      return 52;
    },
    /*extended_render_editable.ExtendedRenderEditable._kCKeyCode*/get _kCKeyCode() {
      return 31;
    },
    /*extended_render_editable.ExtendedRenderEditable._kVKeyCode*/get _kVKeyCode() {
      return 50;
    },
    /*extended_render_editable.ExtendedRenderEditable._kAKeyCode*/get _kAKeyCode() {
      return 29;
    },
    /*extended_render_editable.ExtendedRenderEditable._kDelKeyCode*/get _kDelKeyCode() {
      return 112;
    },
    /*extended_render_editable.ExtendedRenderEditable._kShiftMask*/get _kShiftMask() {
      return 1;
    },
    /*extended_render_editable.ExtendedRenderEditable._kControlMask*/get _kControlMask() {
      return 4096;
    }
  });
  let C177;
  dart.defineLazy(extended_render_editable, {
    /*extended_render_editable._kCaretGap*/get _kCaretGap() {
      return 1;
    },
    /*extended_render_editable._kCaretHeightOffset*/get _kCaretHeightOffset() {
      return 0;
    },
    /*extended_render_editable._kFloatingCaretSizeIncrease*/get _kFloatingCaretSizeIncrease() {
      return C177 || CT.C177;
    },
    /*extended_render_editable._kFloatingCaretRadius*/get _kFloatingCaretRadius() {
      return 1;
    }
  });
  dart.trackLibraries("packages/extended_text_field/extended_text_field", {
    "package:extended_text_field/src/extended_text_field.dart": extended_text_field,
    "package:extended_text_field/src/extended_editable_text.dart": extended_editable_text,
    "package:extended_text_field/src/extended_render_editable.dart": extended_render_editable,
    "package:extended_text_field/extended_text_field.dart": extended_text_field$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/extended_text_field.dart","src/extended_editable_text.dart","src/extended_render_editable.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"extended_text_field.ddc.js"}');
  // Exports:
  return {
    src__extended_text_field: extended_text_field,
    src__extended_editable_text: extended_editable_text,
    src__extended_render_editable: extended_render_editable,
    extended_text_field: extended_text_field$
  };
});

//# sourceMappingURL=extended_text_field.ddc.js.map

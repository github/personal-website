define(['dart_sdk', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation', 'packages/flutter/gestures', 'packages/flutter/src/rendering/animated_size', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/material', 'packages/flutter/src/cupertino/action_sheet', 'packages/vector_math/vector_math_64'], function(dart_sdk, packages__flutter__src__gestures__arena, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation, packages__flutter__gestures, packages__flutter__src__rendering__animated_size, packages__flutter__src__foundation___bitfield_web, packages__flutter__material, packages__flutter__src__cupertino__action_sheet, packages__vector_math__vector_math_64) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_editing = packages__flutter__src__gestures__arena.src__services__text_editing;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const recognizer = packages__flutter__src__gestures__arena.src__gestures__recognizer;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const placeholder_span = packages__flutter__src__painting___network_image_web.src__painting__placeholder_span;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const overlay$ = packages__flutter__src__widgets__actions.src__widgets__overlay;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const visibility = packages__flutter__src__widgets__actions.src__widgets__visibility;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text_selection = packages__flutter__src__widgets__actions.src__widgets__text_selection;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const widget_span = packages__flutter__src__widgets__actions.src__widgets__widget_span;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const debug = packages__flutter__src__widgets__actions.src__widgets__debug;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const image$ = packages__flutter__src__widgets__actions.src__widgets__image;
  const animation_controller = packages__flutter__src__animation__animation.src__animation__animation_controller;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const binding = packages__flutter__gestures.src__scheduler__binding;
  const layer = packages__flutter__src__rendering__animated_size.src__rendering__layer;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const proxy_box = packages__flutter__src__rendering__animated_size.src__rendering__proxy_box;
  const editable = packages__flutter__src__rendering__animated_size.src__rendering__editable;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const shifted_box = packages__flutter__src__rendering__animated_size.src__rendering__shifted_box;
  const custom_paint = packages__flutter__src__rendering__animated_size.src__rendering__custom_paint;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const object = packages__flutter__src__rendering__animated_size.src__rendering__object;
  const paragraph = packages__flutter__src__rendering__animated_size.src__rendering__paragraph;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const material_localizations = packages__flutter__material.src__material__material_localizations;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const material = packages__flutter__material.src__material__material;
  const debug$ = packages__flutter__material.src__material__debug;
  const theme = packages__flutter__material.src__material__theme;
  const localizations$ = packages__flutter__src__cupertino__action_sheet.src__cupertino__localizations;
  const button = packages__flutter__src__cupertino__action_sheet.src__cupertino__button;
  const vector_math_64 = packages__vector_math__vector_math_64.vector_math_64;
  const special_text_span = Object.create(dart.library);
  const extended_text_utils = Object.create(dart.library);
  const special_text_span_builder = Object.create(dart.library);
  const extended_text_selection_overlay = Object.create(dart.library);
  const extended_text_typedef = Object.create(dart.library);
  const extended_widget_span = Object.create(dart.library);
  const background_text_span = Object.create(dart.library);
  const extended_text_library = Object.create(dart.library);
  const material_text_selection_controls = Object.create(dart.library);
  const extended_text_selection_render_object = Object.create(dart.library);
  const cupertino_text_selection_controls = Object.create(dart.library);
  const text_painter_helper = Object.create(dart.library);
  const special_inline_span_base = Object.create(dart.library);
  const extended_text_render_box = Object.create(dart.library);
  const image_span = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $length = dartx.length;
  const $where = dartx.where;
  const $_get = dartx._get;
  const $replaceRange = dartx.replaceRange;
  const $firstWhere = dartx.firstWhere;
  const $add = dartx.add;
  const $forEach = dartx.forEach;
  const $substring = dartx.substring;
  const $endsWith = dartx.endsWith;
  const $last = dartx.last;
  const $first = dartx.first;
  const $clamp = dartx.clamp;
  const $round = dartx.round;
  const $isEmpty = dartx.isEmpty;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_set = dartx._set;
  const $toList = dartx.toList;
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let InlineSpanTobool = () => (InlineSpanTobool = dart.constFn(dart.fnType(core.bool, [inline_span.InlineSpan])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let InlineSpanTovoid = () => (InlineSpanTovoid = dart.constFn(dart.fnType(dart.void, [inline_span.InlineSpan])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let JSArrayOfOverlayEntry = () => (JSArrayOfOverlayEntry = dart.constFn(_interceptors.JSArray$(overlay$.OverlayEntry)))();
  let TextSelectionToNull = () => (TextSelectionToNull = dart.constFn(dart.fnType(core.Null, [text_editing.TextSelection])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let PaintingContextAndOffsetTovoid = () => (PaintingContextAndOffsetTovoid = dart.constFn(dart.fnType(dart.void, [object.PaintingContext, ui.Offset])))();
  let JSArrayOfColor = () => (JSArrayOfColor = dart.constFn(_interceptors.JSArray$(ui.Color)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let TextSelectionDelegateTobool = () => (TextSelectionDelegateTobool = dart.constFn(dart.fnType(core.bool, [text_input.TextSelectionDelegate])))();
  let TextSelectionDelegateTovoid = () => (TextSelectionDelegateTovoid = dart.constFn(dart.fnType(dart.void, [text_input.TextSelectionDelegate])))();
  let StringAndFnAndFnTovoid = () => (StringAndFnAndFnTovoid = dart.constFn(dart.fnType(dart.void, [core.String, TextSelectionDelegateTobool(), TextSelectionDelegateTovoid()])))();
  let JSArrayOfPlaceholderSpan = () => (JSArrayOfPlaceholderSpan = dart.constFn(_interceptors.JSArray$(placeholder_span.PlaceholderSpan)))();
  let ListOfPlaceholderDimensions = () => (ListOfPlaceholderDimensions = dart.constFn(core.List$(text_painter.PlaceholderDimensions)))();
  let PaintingContextAndOffsetToNull = () => (PaintingContextAndOffsetToNull = dart.constFn(dart.fnType(core.Null, [object.PaintingContext, ui.Offset])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: extended_text_selection_overlay._TextSelectionHandlePosition.prototype,
        [_name$]: "_TextSelectionHandlePosition.start",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: extended_text_selection_overlay._TextSelectionHandlePosition.prototype,
        [_name$]: "_TextSelectionHandlePosition.end",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.constList([C0 || CT.C0, C1 || CT.C1], extended_text_selection_overlay._TextSelectionHandlePosition);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: recognizer.DragStartBehavior.prototype,
        [_name]: "DragStartBehavior.start",
        index: 1
      });
    },
    get C5() {
      return C5 = dart.constList([], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 14,
        line: 263,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelectionHandleChanged",
        column: 11,
        line: 267,
        file: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSelectionHandleTapped",
        column: 11,
        line: 270,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "layerLink",
        column: 11,
        line: 271,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "renderObject",
        column: 11,
        line: 272,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selection",
        column: 11,
        line: 273,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selectionControls",
        column: 11,
        line: 274,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "position",
        column: 11,
        line: 275,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dragStartBehavior",
        column: 11,
        line: 276,
        file: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C7 || CT.C7,
        name: null,
        column: 16,
        line: 266,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "visible",
        column: 9,
        line: 265,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 266,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 12,
        line: 264,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 43,
        line: 281,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 66,
        line: 283,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 35,
        line: 289,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "link",
        column: 9,
        line: 316,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showWhenUnlinked",
        column: 9,
        line: 317,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 9,
        line: 318,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 319,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 14,
        line: 315,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "opacity",
        column: 7,
        line: 314,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 315,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 12,
        line: 313,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 150000
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 35,
        line: 484,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 554,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 560,
        file: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C36 || CT.C36,
        name: null,
        column: 20,
        line: 553,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "behavior",
        column: 13,
        line: 548,
        file: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dragStartBehavior",
        column: 13,
        line: 549,
        file: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPanStart",
        column: 13,
        line: 550,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPanUpdate",
        column: 13,
        line: 551,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 13,
        line: 552,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 553,
        file: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C40 || CT.C40,
        name: null,
        column: 18,
        line: 547,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 11,
        line: 544,
        file: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 11,
        line: 545,
        file: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 11,
        line: 546,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 547,
        file: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C48 || CT.C48,
        name: null,
        column: 16,
        line: 543,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "opacity",
        column: 9,
        line: 542,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 543,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 14,
        line: 541,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "link",
        column: 7,
        line: 538,
        file: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "offset",
        column: 7,
        line: 539,
        file: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showWhenUnlinked",
        column: 7,
        line: 540,
        file: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 541,
        file: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C58 || CT.C58,
        name: null,
        column: 12,
        line: 537,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.ltr",
        index: 1
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: ui.TextDirection.prototype,
        [_name$0]: "TextDirection.rtl",
        index: 0
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.bottom",
        index: 4
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 44,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 18,
        line: 44,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 44,
        file: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 54,
        line: 44,
        file: null
      });
    },
    get C70() {
      return C70 = dart.constList([C71 || CT.C71, C72 || CT.C72], widget_inspector._Location);
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C70 || CT.C70,
        name: null,
        column: 17,
        line: 43,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 47,
        file: null
      });
    },
    get C74() {
      return C74 = dart.constList([C75 || CT.C75], widget_inspector._Location);
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C74 || CT.C74,
        name: null,
        column: 18,
        line: 47,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 47,
        file: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 55,
        line: 47,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 17,
        line: 46,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 35,
        line: 50,
        file: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C81 || CT.C81,
        name: null,
        column: 16,
        line: 50,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 50,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 51,
        file: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C84 || CT.C84,
        name: null,
        column: 17,
        line: 49,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 55,
        file: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C88 || CT.C88,
        name: null,
        column: 18,
        line: 55,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 55,
        file: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 11,
        line: 56,
        file: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C91 || CT.C91,
        name: null,
        column: 17,
        line: 54,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 24,
        line: 60,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 36,
        line: 60,
        file: null
      });
    },
    get C95() {
      return C95 = dart.constList([C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C95 || CT.C95,
        name: null,
        column: 14,
        line: 60,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 20,
        line: 67,
        file: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 52,
        line: 67,
        file: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C99 || CT.C99,
        name: null,
        column: 16,
        line: 67,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 9,
        line: 66,
        file: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 67,
        file: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C103 || CT.C103,
        name: null,
        column: 14,
        line: 65,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "elevation",
        column: 7,
        line: 64,
        file: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 65,
        file: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C107 || CT.C107,
        name: null,
        column: 12,
        line: 63,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: ui.Size.prototype,
        [_dy]: 22,
        [_dx]: 22
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "handleCut",
        column: 11,
        line: 191,
        file: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "handleCopy",
        column: 11,
        line: 192,
        file: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "handlePaste",
        column: 11,
        line: 193,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "handleSelectAll",
        column: 11,
        line: 194,
        file: null
      });
    },
    get C112() {
      return C112 = dart.constList([C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C112 || CT.C112,
        name: null,
        column: 16,
        line: 190,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 9,
        line: 185,
        file: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 190,
        file: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119, C120 || CT.C120], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C118 || CT.C118,
        name: null,
        column: 14,
        line: 184,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "constraints",
        column: 7,
        line: 183,
        file: null
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 184,
        file: null
      });
    },
    get C122() {
      return C122 = dart.constList([C123 || CT.C123, C124 || CT.C124], widget_inspector._Location);
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C122 || CT.C122,
        name: null,
        column: 12,
        line: 182,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "painter",
        column: 9,
        line: 209,
        file: null
      });
    },
    get C126() {
      return C126 = dart.constList([C127 || CT.C127], widget_inspector._Location);
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C126 || CT.C126,
        name: null,
        column: 14,
        line: 208,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 206,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 7,
        line: 207,
        file: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 208,
        file: null
      });
    },
    get C129() {
      return C129 = dart.constList([C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C129 || CT.C129,
        name: null,
        column: 27,
        line: 205,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "angle",
        column: 11,
        line: 220,
        file: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 221,
        file: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C134 || CT.C134,
        name: null,
        column: 26,
        line: 219,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$1]: "TextSelectionHandleType.left",
        index: 0
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$1]: "TextSelectionHandleType.right",
        index: 1
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "angle",
        column: 11,
        line: 227,
        file: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 228,
        file: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C140 || CT.C140,
        name: null,
        column: 26,
        line: 226,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: text_selection.TextSelectionHandleType.prototype,
        [_name$1]: "TextSelectionHandleType.collapsed",
        index: 2
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 22
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: -4,
        [_dx]: 11
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: box.BoxConstraints.prototype,
        maxHeight: 43,
        minHeight: 43,
        maxWidth: 1 / 0,
        minWidth: 0
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 0,
        right: 8,
        top: 0,
        left: 8
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 10,
        [_dx]: 10
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 0
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 4294902015.0
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 5.5,
        [_dx]: 5.5
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: ui.Offset.prototype,
        [_dy]: 9.5,
        [_dx]: 5.5
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 18,
        line: 355,
        file: null
      });
    },
    get C155() {
      return C155 = dart.constList([C156 || CT.C156], widget_inspector._Location);
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C155 || CT.C155,
        name: null,
        column: 9,
        line: 355,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 375,
        file: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 27,
        line: 375,
        file: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C158 || CT.C158,
        name: null,
        column: 16,
        line: 375,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 375,
        file: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 9,
        line: 376,
        file: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "minSize",
        column: 9,
        line: 377,
        file: null
      });
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 9,
        line: 378,
        file: null
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "borderRadius",
        column: 9,
        line: 379,
        file: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pressedOpacity",
        column: 9,
        line: 380,
        file: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 9,
        line: 381,
        file: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164, C165 || CT.C165, C166 || CT.C166, C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C162 || CT.C162,
        name: null,
        column: 17,
        line: 374,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: box_border.BoxShape.prototype,
        [_name$2]: "BoxShape.rectangle",
        index: 0
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 4286611584.0
      });
    },
    get C170() {
      return C170 = dart.const({
        __proto__: box_decoration.BoxDecoration.prototype,
        shape: C171 || CT.C171,
        backgroundBlendMode: null,
        gradient: null,
        boxShadow: null,
        borderRadius: null,
        border: null,
        image: null,
        color: C172 || CT.C172
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 26,
        line: 401,
        file: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 58,
        line: 401,
        file: null
      });
    },
    get C174() {
      return C174 = dart.constList([C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C174 || CT.C174,
        name: null,
        column: 22,
        line: 401,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 15,
        line: 400,
        file: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 401,
        file: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C178 || CT.C178,
        name: null,
        column: 13,
        line: 399,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "barTopY",
        column: 7,
        line: 394,
        file: null
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "arrowTipX",
        column: 7,
        line: 395,
        file: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "isArrowPointingDown",
        column: 7,
        line: 396,
        file: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 397,
        file: null
      });
    },
    get C182() {
      return C182 = dart.constList([C183 || CT.C183, C184 || CT.C184, C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C182 || CT.C182,
        name: null,
        column: 42,
        line: 393,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: ui.Size.prototype,
        [_dy]: 0,
        [_dx]: 0
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: cupertino_text_selection_controls._TextSelectionHandlePainter.prototype,
        [_repaint]: null
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: basic.CustomPaint.prototype,
        key: null,
        child: null,
        willChange: false,
        isComplex: false,
        size: C188 || CT.C188,
        foregroundPainter: null,
        painter: C189 || CT.C189
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "size",
        column: 7,
        line: 415,
        file: null
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 416,
        file: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192, C193 || CT.C193], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C191 || CT.C191,
        name: null,
        column: 36,
        line: 414,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "transform",
        column: 11,
        line: 430,
        file: null
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 434,
        file: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196, C197 || CT.C197], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C195 || CT.C195,
        name: null,
        column: 16,
        line: 429,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 16,
        line: 438,
        file: "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 4279463904.0
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 3944751136.0
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: ui.Size.prototype,
        [_dy]: 7,
        [_dx]: 14
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 10,
        right: 18,
        top: 10,
        left: 18
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: ui.Radius.prototype,
        y: 8,
        x: 8
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: ui.FontWeight.prototype,
        index: 3
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: ui.Color.prototype,
        [_value$]: 4294967295.0
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: null,
        decorationColor: null,
        decoration: null,
        background: null,
        foreground: null,
        locale: null,
        height: null,
        textBaseline: null,
        wordSpacing: null,
        letterSpacing: -0.15,
        fontStyle: null,
        fontWeight: C205 || CT.C205,
        fontSize: 14,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: C206 || CT.C206,
        inherit: false
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.baseline",
        index: 0
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.aboveBaseline",
        index: 1
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.belowBaseline",
        index: 2
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.top",
        index: 3
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: ui.PlaceholderAlignment.prototype,
        [_name$0]: "PlaceholderAlignment.middle",
        index: 5
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: ui.Rect.prototype,
        bottom: 0,
        right: 0,
        top: 0,
        left: 0
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: box_fit.BoxFit.prototype,
        [_name$3]: "BoxFit.scaleDown",
        index: 6
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: alignment.Alignment.prototype,
        y: 0,
        x: 0
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name$4]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name$0]: "FilterQuality.low",
        index: 1
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: proxy_box.HitTestBehavior.prototype,
        [_name$5]: "HitTestBehavior.deferToChild",
        index: 0
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 17,
        line: 49,
        file: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "image",
        column: 17,
        line: 50,
        file: null
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 51,
        file: null
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 17,
        line: 52,
        file: null
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 17,
        line: 53,
        file: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "loadingBuilder",
        column: 17,
        line: 54,
        file: null
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "frameBuilder",
        column: 17,
        line: 55,
        file: null
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "semanticLabel",
        column: 17,
        line: 56,
        file: null
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "excludeFromSemantics",
        column: 17,
        line: 57,
        file: null
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 17,
        line: 58,
        file: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "colorBlendMode",
        column: 17,
        line: 59,
        file: null
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 60,
        file: null
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "repeat",
        column: 17,
        line: 61,
        file: null
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "centerSlice",
        column: 17,
        line: 62,
        file: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "matchTextDirection",
        column: 17,
        line: 63,
        file: null
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "gaplessPlayback",
        column: 17,
        line: 64,
        file: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "filterQuality",
        column: 17,
        line: 65,
        file: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221, C222 || CT.C222, C223 || CT.C223, C224 || CT.C224, C225 || CT.C225, C226 || CT.C226, C227 || CT.C227, C228 || CT.C228, C229 || CT.C229, C230 || CT.C230, C231 || CT.C231, C232 || CT.C232, C233 || CT.C233, C234 || CT.C234, C235 || CT.C235, C236 || CT.C236], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C219 || CT.C219,
        name: null,
        column: 22,
        line: 48,
        file: "org-dartlang-app:///packages/extended_text_library/src/image_span.dart"
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 15,
        line: 46,
        file: null
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "behavior",
        column: 15,
        line: 47,
        file: null
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 48,
        file: null
      });
    },
    get C238() {
      return C238 = dart.constList([C239 || CT.C239, C240 || CT.C240, C241 || CT.C241], widget_inspector._Location);
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C238 || CT.C238,
        name: null,
        column: 20,
        line: 45,
        file: "org-dartlang-app:///packages/extended_text_library/src/image_span.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 44,
        file: null
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 45,
        file: null
      });
    },
    get C243() {
      return C243 = dart.constList([C244 || CT.C244, C245 || CT.C245], widget_inspector._Location);
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C243 || CT.C243,
        name: null,
        column: 18,
        line: 43,
        file: "org-dartlang-app:///packages/extended_text_library/src/image_span.dart"
      });
    }
  });
  special_inline_span_base.SpecialInlineSpanBase = class SpecialInlineSpanBase extends core.Object {
    get start() {
      return this.textRange.start;
    }
    get end() {
      return this.textRange.end;
    }
    equal(other) {
      return other.start == this.start && dart.equals(other.deleteAll, this.deleteAll) && other.actualText == this.actualText;
    }
    get baseHashCode() {
      return ui.hashValues(this.actualText, this.start, this.deleteAll);
    }
    baseCompareTo(other) {
      if (other.actualText != this.actualText) {
        return basic_types.RenderComparison.paint;
      }
      if (other.start != this.start) {
        return basic_types.RenderComparison.layout;
      }
      return basic_types.RenderComparison.identical;
    }
  };
  (special_inline_span_base.SpecialInlineSpanBase.new = function() {
    ;
  }).prototype = special_inline_span_base.SpecialInlineSpanBase.prototype;
  dart.addTypeTests(special_inline_span_base.SpecialInlineSpanBase);
  dart.setMethodSignature(special_inline_span_base.SpecialInlineSpanBase, () => ({
    __proto__: dart.getMethods(special_inline_span_base.SpecialInlineSpanBase.__proto__),
    equal: dart.fnType(core.bool, [special_inline_span_base.SpecialInlineSpanBase]),
    baseCompareTo: dart.fnType(basic_types.RenderComparison, [special_inline_span_base.SpecialInlineSpanBase])
  }));
  dart.setGetterSignature(special_inline_span_base.SpecialInlineSpanBase, () => ({
    __proto__: dart.getGetters(special_inline_span_base.SpecialInlineSpanBase.__proto__),
    start: core.int,
    end: core.int,
    baseHashCode: core.int
  }));
  dart.setLibraryUri(special_inline_span_base.SpecialInlineSpanBase, "package:extended_text_library/src/special_inline_span_base.dart");
  const TextSpan_SpecialInlineSpanBase$ = class TextSpan_SpecialInlineSpanBase extends text_span.TextSpan {};
  (TextSpan_SpecialInlineSpanBase$.new = function(opts) {
    TextSpan_SpecialInlineSpanBase$.__proto__.new.call(this, opts);
  }).prototype = TextSpan_SpecialInlineSpanBase$.prototype;
  dart.applyMixin(TextSpan_SpecialInlineSpanBase$, special_inline_span_base.SpecialInlineSpanBase);
  special_text_span.SpecialTextSpan = class SpecialTextSpan extends TextSpan_SpecialInlineSpanBase$ {
    get actualText() {
      return this[actualText$];
    }
    set actualText(value) {
      super.actualText = value;
    }
    get deleteAll() {
      return this[deleteAll$];
    }
    set deleteAll(value) {
      super.deleteAll = value;
    }
    get textRange() {
      return this[textRange];
    }
    set textRange(value) {
      super.textRange = value;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      if (!super._equals(other)) return false;
      return this.equal(special_inline_span_base.SpecialInlineSpanBase._check(other));
    }
    get hashCode() {
      return ui.hashValues(super.hashCode, this.baseHashCode);
    }
    compareTo(other) {
      let comparison = super.compareTo(other);
      if (dart.equals(comparison, basic_types.RenderComparison.identical)) {
        comparison = this.baseCompareTo(special_inline_span_base.SpecialInlineSpanBase.as(other));
      }
      return comparison;
    }
  };
  (special_text_span.SpecialTextSpan.new = function(opts) {
    let t0, t0$;
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let actualText = opts && 'actualText' in opts ? opts.actualText : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let deleteAll = opts && 'deleteAll' in opts ? opts.deleteAll : true;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/special_text_span.dart", 26, 16, "start != null");
    if (!(text != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/special_text_span.dart", 27, 16, "text != null");
    if (!(deleteAll != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/special_text_span.dart", 28, 16, "deleteAll != null");
    this[actualText$] = (t0 = actualText, t0 == null ? text : t0);
    this[deleteAll$] = deleteAll;
    this[textRange] = new text_editing.TextRange.new({start: start, end: dart.notNull(start) + (t0$ = actualText, t0$ == null ? text : t0$).length});
    special_text_span.SpecialTextSpan.__proto__.new.call(this, {style: style, text: text, recognizer: recognizer});
    ;
  }).prototype = special_text_span.SpecialTextSpan.prototype;
  dart.addTypeTests(special_text_span.SpecialTextSpan);
  const actualText$ = Symbol("SpecialTextSpan.actualText");
  const deleteAll$ = Symbol("SpecialTextSpan.deleteAll");
  const textRange = Symbol("SpecialTextSpan.textRange");
  dart.setLibraryUri(special_text_span.SpecialTextSpan, "package:extended_text_library/src/special_text_span.dart");
  dart.setFieldSignature(special_text_span.SpecialTextSpan, () => ({
    __proto__: dart.getFields(special_text_span.SpecialTextSpan.__proto__),
    actualText: dart.finalFieldType(core.String),
    deleteAll: dart.finalFieldType(core.bool),
    textRange: dart.finalFieldType(text_editing.TextRange)
  }));
  dart.defineExtensionMethods(special_text_span.SpecialTextSpan, ['_equals']);
  dart.defineExtensionAccessors(special_text_span.SpecialTextSpan, ['hashCode']);
  extended_text_utils.convertTextInputPostionToTextPainterPostion = function convertTextInputPostionToTextPainterPostion(text, textPosition) {
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(text, list);
    if (dart.notNull(list[$length]) > 0) {
      let caretOffset = textPosition.offset;
      let textOffset = 0;
      for (let ts of list) {
        if (special_inline_span_base.SpecialInlineSpanBase.is(ts)) {
          let length = special_inline_span_base.SpecialInlineSpanBase.as(ts).actualText.length;
          caretOffset = dart.notNull(caretOffset) - (length - dart.notNull(extended_text_utils.getInlineOffset(ts)));
          textOffset = textOffset + length;
        } else {
          textOffset = textOffset + dart.notNull(extended_text_utils.getInlineOffset(ts));
        }
        if (textOffset >= dart.notNull(textPosition.offset)) {
          break;
        }
      }
      if (caretOffset != textPosition.offset) {
        return new ui.TextPosition.new({offset: math.max(core.int, 0, caretOffset), affinity: textPosition.affinity});
      }
    }
    return textPosition;
  };
  extended_text_utils.convertTextInputSelectionToTextPainterSelection = function convertTextInputSelectionToTextPainterSelection(text, selection) {
    if (dart.test(selection.isValid)) {
      if (dart.test(selection.isCollapsed)) {
        let extent = extended_text_utils.convertTextInputPostionToTextPainterPostion(text, selection.extent);
        if (!dart.equals(selection.extent, extent)) {
          selection = selection.copyWith({baseOffset: extent.offset, extentOffset: extent.offset, affinity: selection.affinity, isDirectional: selection.isDirectional});
          return selection;
        }
      } else {
        let extent = extended_text_utils.convertTextInputPostionToTextPainterPostion(text, selection.extent);
        let base = extended_text_utils.convertTextInputPostionToTextPainterPostion(text, selection.base);
        if (!dart.equals(selection.extent, extent) || !dart.equals(selection.base, base)) {
          selection = selection.copyWith({baseOffset: base.offset, extentOffset: extent.offset, affinity: selection.affinity, isDirectional: selection.isDirectional});
          return selection;
        }
      }
    }
    return selection;
  };
  extended_text_utils.convertTextPainterPostionToTextInputPostion = function convertTextPainterPostionToTextInputPostion(text, textPosition, opts) {
    let end = opts && 'end' in opts ? opts.end : null;
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(text, list);
    if (dart.notNull(list[$length]) > 0 && textPosition != null) {
      let caretOffset = textPosition.offset;
      if (dart.notNull(caretOffset) <= 0) return textPosition;
      let textOffset = 0;
      for (let ts of list) {
        if (special_inline_span_base.SpecialInlineSpanBase.is(ts)) {
          let specialTs = special_inline_span_base.SpecialInlineSpanBase.as(ts);
          let length = specialTs.actualText.length;
          caretOffset = dart.notNull(caretOffset) + (length - dart.notNull(extended_text_utils.getInlineOffset(ts)));
          if (dart.test(specialTs.deleteAll) && dart.notNull(caretOffset) >= dart.notNull(specialTs.start) && dart.notNull(caretOffset) <= dart.notNull(specialTs.end)) {
            if (end != null) {
              caretOffset = dart.test(end) ? specialTs.end : specialTs.start;
            } else {
              if (dart.notNull(caretOffset) > (dart.notNull(specialTs.end) - dart.notNull(specialTs.start)) / 2.0 + dart.notNull(specialTs.start)) {
                caretOffset = specialTs.end;
              } else {
                caretOffset = specialTs.start;
              }
            }
            break;
          }
        }
        textOffset = textOffset + dart.notNull(extended_text_utils.getInlineOffset(ts));
        if (textOffset >= dart.notNull(textPosition.offset)) {
          break;
        }
      }
      if (caretOffset != textPosition.offset) {
        return new ui.TextPosition.new({offset: caretOffset, affinity: textPosition.affinity});
      }
    }
    return textPosition;
  };
  extended_text_utils.convertTextPainterSelectionToTextInputSelection = function convertTextPainterSelectionToTextInputSelection(text, selection, opts) {
    let selectWord = opts && 'selectWord' in opts ? opts.selectWord : false;
    if (dart.test(selection.isValid)) {
      if (dart.test(selection.isCollapsed)) {
        let extent = extended_text_utils.convertTextPainterPostionToTextInputPostion(text, selection.extent);
        if (!dart.equals(selection.extent, extent)) {
          selection = selection.copyWith({baseOffset: extent.offset, extentOffset: extent.offset, affinity: selection.affinity, isDirectional: selection.isDirectional});
          return selection;
        }
      } else {
        let extent = extended_text_utils.convertTextPainterPostionToTextInputPostion(text, selection.extent, {end: dart.test(selectWord) ? true : null});
        let base = extended_text_utils.convertTextPainterPostionToTextInputPostion(text, selection.base, {end: dart.test(selectWord) ? false : null});
        if (!dart.equals(selection.extent, extent) || !dart.equals(selection.base, base)) {
          selection = selection.copyWith({baseOffset: base.offset, extentOffset: extent.offset, affinity: selection.affinity, isDirectional: selection.isDirectional});
          return selection;
        }
      }
    }
    return selection;
  };
  extended_text_utils.makeSureCaretNotInSpecialText = function makeSureCaretNotInSpecialText(text, textPosition) {
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(text, list);
    if (dart.notNull(list[$length]) > 0 && textPosition != null) {
      let caretOffset = textPosition.offset;
      if (dart.notNull(caretOffset) <= 0) return textPosition;
      let textOffset = 0;
      for (let ts of list) {
        if (special_inline_span_base.SpecialInlineSpanBase.is(ts)) {
          let specialTs = special_inline_span_base.SpecialInlineSpanBase.as(ts);
          if (dart.test(specialTs.deleteAll) && dart.notNull(caretOffset) >= dart.notNull(specialTs.start) && dart.notNull(caretOffset) <= dart.notNull(specialTs.end)) {
            if (dart.notNull(caretOffset) > (dart.notNull(specialTs.end) - dart.notNull(specialTs.start)) / 2.0 + dart.notNull(specialTs.start)) {
              caretOffset = specialTs.end;
            } else {
              caretOffset = specialTs.start;
            }
            break;
          }
        }
        textOffset = textOffset + dart.notNull(extended_text_utils.getInlineOffset(ts));
        if (textOffset >= dart.notNull(textPosition.offset)) {
          break;
        }
      }
      if (caretOffset != textPosition.offset) {
        return new ui.TextPosition.new({offset: caretOffset, affinity: textPosition.affinity});
      }
    }
    return textPosition;
  };
  extended_text_utils.correctCaretOffset = function correctCaretOffset(value, textSpan, textInputConnection, opts) {
    let t0, t0$;
    let newSelection = opts && 'newSelection' in opts ? opts.newSelection : null;
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(textSpan, list);
    if (list[$length] === 0) return value;
    let selection = (t0 = newSelection, t0 == null ? value.selection : t0);
    if (dart.test(selection.isValid) && dart.test(selection.isCollapsed)) {
      let caretOffset = selection.extentOffset;
      let specialTextSpans = list[$where](dart.fn(x => special_inline_span_base.SpecialInlineSpanBase.is(x) && dart.test(special_inline_span_base.SpecialInlineSpanBase.as(x).deleteAll), InlineSpanTobool()));
      for (let ts of specialTextSpans) {
        let specialTs = special_inline_span_base.SpecialInlineSpanBase.as(ts);
        if (dart.notNull(caretOffset) >= dart.notNull(specialTs.start) && dart.notNull(caretOffset) <= dart.notNull(specialTs.end)) {
          if (dart.notNull(caretOffset) > (dart.notNull(specialTs.end) - dart.notNull(specialTs.start)) / 2.0 + dart.notNull(specialTs.start)) {
            caretOffset = specialTs.end;
          } else {
            caretOffset = specialTs.start;
          }
          break;
        }
      }
      if (caretOffset != selection.baseOffset) {
        value = value.copyWith({selection: selection.copyWith({baseOffset: caretOffset, extentOffset: caretOffset})});
        t0$ = textInputConnection;
        t0$ == null ? null : t0$.setEditingState(value);
      }
    }
    return value;
  };
  extended_text_utils.handleSpecialTextSpanDelete = function handleSpecialTextSpanDelete(value, oldValue, oldTextSpan, textInputConnection) {
    let t0, t0$, t0$0;
    let oldText = (t0 = oldValue, t0 == null ? null : t0.text);
    let newText = (t0$ = value, t0$ == null ? null : t0$.text);
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(oldTextSpan, list);
    if (dart.notNull(list[$length]) > 0) {
      let imageSpans = list[$where](dart.fn(x => special_inline_span_base.SpecialInlineSpanBase.is(x) && dart.test(special_inline_span_base.SpecialInlineSpanBase.as(x).deleteAll), InlineSpanTobool()));
      if (dart.notNull(imageSpans[$length]) > 0 && oldText != null && newText != null && oldText.length > newText.length) {
        let difStart = 0;
        for (; difStart < newText.length; difStart = difStart + 1) {
          if (oldText[$_get](difStart) !== newText[$_get](difStart)) {
            break;
          }
        }
        let caretOffset = value.selection.extentOffset;
        if (difStart > 0) {
          for (let ts of imageSpans) {
            let specialTs = special_inline_span_base.SpecialInlineSpanBase.as(ts);
            if (difStart > dart.notNull(specialTs.start) && difStart < dart.notNull(specialTs.end)) {
              newText = newText[$replaceRange](specialTs.start, difStart, "");
              caretOffset = dart.notNull(caretOffset) - (difStart - dart.notNull(specialTs.start));
              break;
            }
          }
          if (newText != value.text) {
            value = new text_input.TextEditingValue.new({text: newText, selection: value.selection.copyWith({baseOffset: caretOffset, extentOffset: caretOffset, affinity: value.selection.affinity, isDirectional: value.selection.isDirectional})});
            t0$0 = textInputConnection;
            t0$0 == null ? null : t0$0.setEditingState(value);
          }
        }
      }
    }
    return value;
  };
  extended_text_utils.hasSpecialText = function hasSpecialText(textSpan) {
    let list = JSArrayOfInlineSpan().of([]);
    extended_text_utils.textSpanNestToArray(textSpan, list);
    if (list[$length] === 0) return false;
    return list[$firstWhere](dart.fn(x => special_inline_span_base.SpecialInlineSpanBase.is(x), InlineSpanTobool()), {orElse: dart.fn(() => null, VoidToNull())}) != null;
  };
  extended_text_utils.textSpanNestToArray = function textSpanNestToArray(textSpan, list) {
    if (!(list != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_text_utils.dart", 323, 10, "list != null");
    if (textSpan == null) return;
    list[$add](textSpan);
    if (text_span.TextSpan.is(textSpan) && textSpan.children != null) textSpan.children[$forEach](dart.fn(ts => extended_text_utils.textSpanNestToArray(ts, list), InlineSpanTovoid()));
  };
  extended_text_utils.textSpanToActualText = function textSpanToActualText(textSpan) {
    let buffer = new core.StringBuffer.new();
    extended_text_utils._visitTextSpan(textSpan, dart.fn(span => {
      {
        let text = extended_text_utils.getInlineText(span);
        if (special_inline_span_base.SpecialInlineSpanBase.is(span)) {
          text = special_inline_span_base.SpecialInlineSpanBase.as(span).actualText;
        }
        buffer.write(text);
      }
      return true;
    }, InlineSpanTobool()));
    return buffer.toString();
  };
  extended_text_utils._visitTextSpan = function _visitTextSpan(textSpan, visitor) {
    let text = extended_text_utils.getInlineText(textSpan);
    if (special_inline_span_base.SpecialInlineSpanBase.is(textSpan)) {
      text = special_inline_span_base.SpecialInlineSpanBase.as(textSpan).actualText;
    }
    if (text != null) {
      if (!dart.test(visitor(textSpan))) return false;
    }
    if (text_span.TextSpan.is(textSpan) && textSpan.children != null) {
      for (let child of textSpan.children) {
        if (!dart.test(extended_text_utils._visitTextSpan(child, visitor))) return false;
      }
    }
    return true;
  };
  extended_text_utils.getInlineOffset = function getInlineOffset(inlineSpan) {
    if (text_span.TextSpan.is(inlineSpan) && inlineSpan.text != null) {
      return inlineSpan.text.length;
    }
    if (placeholder_span.PlaceholderSpan.is(inlineSpan)) {
      return 1;
    }
    return 0;
  };
  extended_text_utils.getInlineText = function getInlineText(inlineSpan) {
    if (text_span.TextSpan.is(inlineSpan) && inlineSpan.text != null) {
      return inlineSpan.text;
    }
    if (placeholder_span.PlaceholderSpan.is(inlineSpan)) {
      return "￼";
    }
    return "";
  };
  special_text_span_builder.SpecialTextSpanBuilder = class SpecialTextSpanBuilder extends core.Object {
    build(data, opts) {
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let onTap = opts && 'onTap' in opts ? opts.onTap : null;
      if (data == null || data === "") return null;
      let inlineList = JSArrayOfInlineSpan().of([]);
      if (data.length > 0) {
        let specialText = null;
        let textStack = "";
        for (let i = 0; i < data.length; i = i + 1) {
          let char = data[$_get](i);
          textStack = textStack + char;
          if (specialText != null) {
            if (!dart.test(specialText.isEnd(textStack))) {
              specialText.appendContent(char);
            } else {
              inlineList[$add](specialText.finishText());
              specialText = null;
              textStack = "";
            }
          } else {
            specialText = this.createSpecialText(textStack, {textStyle: textStyle, onTap: onTap, index: i});
            if (specialText != null) {
              if (textStack.length - specialText.startFlag.length >= 0) {
                textStack = textStack[$substring](0, textStack.length - specialText.startFlag.length);
                if (textStack.length > 0) {
                  inlineList[$add](new text_span.TextSpan.new({text: textStack, style: textStyle}));
                }
              }
              textStack = "";
            }
          }
        }
        if (specialText != null) {
          inlineList[$add](new text_span.TextSpan.new({text: dart.notNull(specialText.startFlag) + dart.notNull(specialText.getContent()), style: textStyle}));
        } else if (textStack.length > 0) {
          inlineList[$add](new text_span.TextSpan.new({text: textStack, style: textStyle}));
        }
      } else {
        inlineList[$add](new text_span.TextSpan.new({text: data, style: textStyle}));
      }
      return new text_span.TextSpan.new({children: inlineList, style: textStyle});
    }
    isStart(value, startFlag) {
      return value[$endsWith](startFlag);
    }
  };
  (special_text_span_builder.SpecialTextSpanBuilder.new = function() {
    ;
  }).prototype = special_text_span_builder.SpecialTextSpanBuilder.prototype;
  dart.addTypeTests(special_text_span_builder.SpecialTextSpanBuilder);
  dart.setMethodSignature(special_text_span_builder.SpecialTextSpanBuilder, () => ({
    __proto__: dart.getMethods(special_text_span_builder.SpecialTextSpanBuilder.__proto__),
    build: dart.fnType(text_span.TextSpan, [core.String], {onTap: dart.fnType(dart.void, [dart.dynamic]), textStyle: text_style.TextStyle}),
    isStart: dart.fnType(core.bool, [core.String, core.String])
  }));
  dart.setLibraryUri(special_text_span_builder.SpecialTextSpanBuilder, "package:extended_text_library/src/special_text_span_builder.dart");
  const _contetnt = dart.privateName(special_text_span_builder, "_contetnt");
  special_text_span_builder.SpecialText = class SpecialText extends core.Object {
    get startFlag() {
      return this[startFlag$];
    }
    set startFlag(value) {
      super.startFlag = value;
    }
    get endFlag() {
      return this[endFlag$];
    }
    set endFlag(value) {
      super.endFlag = value;
    }
    get textStyle() {
      return this[textStyle$];
    }
    set textStyle(value) {
      super.textStyle = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    isEnd(value) {
      return value[$endsWith](this.endFlag);
    }
    appendContent(value) {
      this[_contetnt].write(value);
    }
    getContent() {
      return dart.toString(this[_contetnt]);
    }
    toString() {
      return dart.notNull(this.startFlag) + dart.notNull(this.getContent()) + dart.notNull(this.endFlag);
    }
  };
  (special_text_span_builder.SpecialText.new = function(startFlag, endFlag, textStyle, opts) {
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    this[startFlag$] = startFlag;
    this[endFlag$] = endFlag;
    this[textStyle$] = textStyle;
    this[onTap$] = onTap;
    this[_contetnt] = new core.StringBuffer.new();
    ;
  }).prototype = special_text_span_builder.SpecialText.prototype;
  dart.addTypeTests(special_text_span_builder.SpecialText);
  const startFlag$ = Symbol("SpecialText.startFlag");
  const endFlag$ = Symbol("SpecialText.endFlag");
  const textStyle$ = Symbol("SpecialText.textStyle");
  const onTap$ = Symbol("SpecialText.onTap");
  dart.setMethodSignature(special_text_span_builder.SpecialText, () => ({
    __proto__: dart.getMethods(special_text_span_builder.SpecialText.__proto__),
    isEnd: dart.fnType(core.bool, [core.String]),
    appendContent: dart.fnType(dart.void, [core.String]),
    getContent: dart.fnType(core.String, [])
  }));
  dart.setLibraryUri(special_text_span_builder.SpecialText, "package:extended_text_library/src/special_text_span_builder.dart");
  dart.setFieldSignature(special_text_span_builder.SpecialText, () => ({
    __proto__: dart.getFields(special_text_span_builder.SpecialText.__proto__),
    [_contetnt]: dart.finalFieldType(core.StringBuffer),
    startFlag: dart.finalFieldType(core.String),
    endFlag: dart.finalFieldType(core.String),
    textStyle: dart.finalFieldType(text_style.TextStyle),
    onTap: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic]))
  }));
  dart.defineExtensionMethods(special_text_span_builder.SpecialText, ['toString']);
  const _name$ = dart.privateName(extended_text_selection_overlay, "_name");
  let C0;
  let C1;
  let C2;
  extended_text_selection_overlay._TextSelectionHandlePosition = class _TextSelectionHandlePosition extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (extended_text_selection_overlay._TextSelectionHandlePosition.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = extended_text_selection_overlay._TextSelectionHandlePosition.prototype;
  dart.addTypeTests(extended_text_selection_overlay._TextSelectionHandlePosition);
  dart.setLibraryUri(extended_text_selection_overlay._TextSelectionHandlePosition, "package:extended_text_library/src/selection/extended_text_selection_overlay.dart");
  dart.setFieldSignature(extended_text_selection_overlay._TextSelectionHandlePosition, () => ({
    __proto__: dart.getFields(extended_text_selection_overlay._TextSelectionHandlePosition.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(extended_text_selection_overlay._TextSelectionHandlePosition, ['toString']);
  extended_text_selection_overlay._TextSelectionHandlePosition.start = C0 || CT.C0;
  extended_text_selection_overlay._TextSelectionHandlePosition.end = C1 || CT.C1;
  extended_text_selection_overlay._TextSelectionHandlePosition.values = C2 || CT.C2;
  const _name = dart.privateName(recognizer, "_name");
  let C3;
  const _toolbarController = dart.privateName(extended_text_selection_overlay, "_toolbarController");
  const _handles = dart.privateName(extended_text_selection_overlay, "_handles");
  const _toolbar = dart.privateName(extended_text_selection_overlay, "_toolbar");
  const _handlesVisible = dart.privateName(extended_text_selection_overlay, "_handlesVisible");
  const _value = dart.privateName(extended_text_selection_overlay, "_value");
  const _toolbarOpacity = dart.privateName(extended_text_selection_overlay, "_toolbarOpacity");
  const _selection = dart.privateName(extended_text_selection_overlay, "_selection");
  const _markNeedsBuild = dart.privateName(extended_text_selection_overlay, "_markNeedsBuild");
  const _buildHandle = dart.privateName(extended_text_selection_overlay, "_buildHandle");
  const _buildToolbar = dart.privateName(extended_text_selection_overlay, "_buildToolbar");
  let C5;
  let C4;
  const _handleSelectionHandleChanged = dart.privateName(extended_text_selection_overlay, "_handleSelectionHandleChanged");
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  let C7;
  let C6;
  let C18;
  let C19;
  let C17;
  let C16;
  let C20;
  let C21;
  let C22;
  let C25;
  let C26;
  let C27;
  let C28;
  let C24;
  let C23;
  let C31;
  let C32;
  let C30;
  let C29;
  const _duration = dart.privateName(core, "_duration");
  let C33;
  extended_text_selection_overlay.ExtendedTextSelectionOverlay = class ExtendedTextSelectionOverlay extends core.Object {
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get debugRequiredFor() {
      return this[debugRequiredFor$];
    }
    set debugRequiredFor(value) {
      super.debugRequiredFor = value;
    }
    get layerLink() {
      return this[layerLink$];
    }
    set layerLink(value) {
      super.layerLink = value;
    }
    get renderObject() {
      return this[renderObject$];
    }
    set renderObject(value) {
      super.renderObject = value;
    }
    get selectionControls() {
      return this[selectionControls$];
    }
    set selectionControls(value) {
      super.selectionControls = value;
    }
    get selectionDelegate() {
      return this[selectionDelegate$];
    }
    set selectionDelegate(value) {
      super.selectionDelegate = value;
    }
    get dragStartBehavior() {
      return this[dragStartBehavior$];
    }
    set dragStartBehavior(value) {
      super.dragStartBehavior = value;
    }
    get onSelectionHandleTapped() {
      return this[onSelectionHandleTapped$];
    }
    set onSelectionHandleTapped(value) {
      super.onSelectionHandleTapped = value;
    }
    get [_toolbarOpacity]() {
      return this[_toolbarController].view;
    }
    get value() {
      return this[_value];
    }
    get [_selection]() {
      return this[_value].selection;
    }
    get handlesVisible() {
      return this[_handlesVisible];
    }
    set handlesVisible(visible) {
      if (!(visible != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 144, 12, "visible != null");
      if (dart.equals(this[_handlesVisible], visible)) return;
      this[_handlesVisible] = visible;
      if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.persistentCallbacks)) {
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.bind(this, _markNeedsBuild));
      } else {
        this[_markNeedsBuild]();
      }
    }
    showHandles() {
      if (!(this[_handles] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 159, 12, "_handles == null");
      this[_handles] = JSArrayOfOverlayEntry().of([new overlay$.OverlayEntry.new({builder: dart.fn(context => this[_buildHandle](context, extended_text_selection_overlay._TextSelectionHandlePosition.start), BuildContextToWidget())}), new overlay$.OverlayEntry.new({builder: dart.fn(context => this[_buildHandle](context, extended_text_selection_overlay._TextSelectionHandlePosition.end), BuildContextToWidget())})]);
      overlay$.Overlay.of(this.context, {debugRequiredFor: this.debugRequiredFor}).insertAll(this[_handles]);
    }
    hideHandles() {
      if (this[_handles] != null) {
        this[_handles][$_get](0).remove();
        this[_handles][$_get](1).remove();
        this[_handles] = null;
      }
    }
    showToolbar() {
      if (!(this[_toolbar] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 182, 12, "_toolbar == null");
      this[_toolbar] = new overlay$.OverlayEntry.new({builder: dart.bind(this, _buildToolbar)});
      overlay$.Overlay.of(this.context, {debugRequiredFor: this.debugRequiredFor}).insert(this[_toolbar]);
      this[_toolbarController].forward({from: 0.0});
    }
    update(newValue) {
      if (dart.equals(this[_value], newValue)) return;
      this[_value] = newValue;
      if (dart.equals(binding.SchedulerBinding.instance.schedulerPhase, binding.SchedulerPhase.persistentCallbacks)) {
        binding.SchedulerBinding.instance.addPostFrameCallback(dart.bind(this, _markNeedsBuild));
      } else {
        this[_markNeedsBuild]();
      }
    }
    updateForScroll() {
      this[_markNeedsBuild]();
    }
    [_markNeedsBuild](duration) {
      let t0;
      if (duration === void 0) duration = null;
      if (this[_handles] != null) {
        this[_handles][$_get](0).markNeedsBuild();
        this[_handles][$_get](1).markNeedsBuild();
      }
      t0 = this[_toolbar];
      t0 == null ? null : t0.markNeedsBuild();
    }
    get handlesAreVisible() {
      return this[_handles] != null && dart.test(this.handlesVisible);
    }
    get toolbarIsVisible() {
      return this[_toolbar] != null;
    }
    hide() {
      if (this[_handles] != null) {
        this[_handles][$_get](0).remove();
        this[_handles][$_get](1).remove();
        this[_handles] = null;
      }
      if (this[_toolbar] != null) {
        this.hideToolbar();
      }
    }
    hideToolbar() {
      if (!(this[_toolbar] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 246, 12, "_toolbar != null");
      this[_toolbarController].stop();
      this[_toolbar].remove();
      this[_toolbar] = null;
    }
    dispose() {
      this.hide();
      this[_toolbarController].dispose();
    }
    [_buildHandle](context, position) {
      if (dart.test(this[_selection].isCollapsed) && dart.equals(position, extended_text_selection_overlay._TextSelectionHandlePosition.end) || this.selectionControls == null) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4});
      return new visibility.Visibility.new({visible: this.handlesVisible, child: new extended_text_selection_overlay._TextSelectionHandleOverlay.new({onSelectionHandleChanged: dart.fn(newSelection => {
            this[_handleSelectionHandleChanged](newSelection, position);
          }, TextSelectionToNull()), onSelectionHandleTapped: this.onSelectionHandleTapped, layerLink: this.layerLink, renderObject: this.renderObject, selection: this[_selection], selectionControls: this.selectionControls, position: position, dragStartBehavior: this.dragStartBehavior, $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
    [_buildToolbar](context) {
      if (this.selectionControls == null) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C20 || CT.C20});
      if (this.renderObject == null || !dart.test(this.renderObject.isAttached)) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21});
      let endpoints = this.renderObject.getEndpointsForSelection(this[_selection]);
      if (endpoints == null) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C22 || CT.C22});
      let editingRegion = new ui.Rect.fromPoints(this.renderObject.getlocalToGlobal(ui.Offset.zero), this.renderObject.getlocalToGlobal(this.renderObject.getSize().bottomRight(ui.Offset.zero)));
      let isMultiline = dart.notNull(endpoints[$last].point.dy) - dart.notNull(endpoints[$first].point.dy) > dart.notNull(this.renderObject.preferredLineHeight) / 2;
      let midX = isMultiline ? dart.notNull(editingRegion.width) / 2 : (dart.notNull(endpoints[$first].point.dx) + dart.notNull(endpoints[$last].point.dx)) / 2;
      let midpoint = new ui.Offset.new(midX, dart.notNull(endpoints[$_get](0).point.dy) - dart.notNull(this.renderObject.preferredLineHeight));
      return new transitions.FadeTransition.new({opacity: this[_toolbarOpacity], child: new basic.CompositedTransformFollower.new({link: this.layerLink, showWhenUnlinked: false, offset: editingRegion.topLeft._negate(), child: this.selectionControls.buildToolbar(context, editingRegion, this.renderObject.preferredLineHeight, midpoint, endpoints, this.selectionDelegate), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
    [_handleSelectionHandleChanged](newSelection, position) {
      let textPosition = null;
      switch (position) {
        case C0 || CT.C0:
        {
          textPosition = newSelection.base;
          break;
        }
        case C1 || CT.C1:
        {
          textPosition = newSelection.extent;
          break;
        }
      }
      this.selectionDelegate.textEditingValue = this[_value].copyWith({selection: newSelection, composing: text_editing.TextRange.empty});
      this.selectionDelegate.bringIntoView(textPosition);
    }
  };
  (extended_text_selection_overlay.ExtendedTextSelectionOverlay.new = function(opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let debugRequiredFor = opts && 'debugRequiredFor' in opts ? opts.debugRequiredFor : null;
    let layerLink = opts && 'layerLink' in opts ? opts.layerLink : null;
    let renderObject = opts && 'renderObject' in opts ? opts.renderObject : null;
    let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
    let handlesVisible = opts && 'handlesVisible' in opts ? opts.handlesVisible : false;
    let selectionDelegate = opts && 'selectionDelegate' in opts ? opts.selectionDelegate : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C3 || CT.C3;
    let onSelectionHandleTapped = opts && 'onSelectionHandleTapped' in opts ? opts.onSelectionHandleTapped : null;
    this[_toolbarController] = null;
    this[_handles] = null;
    this[_toolbar] = null;
    this[_handlesVisible] = false;
    this[context$] = context;
    this[debugRequiredFor$] = debugRequiredFor;
    this[layerLink$] = layerLink;
    this[renderObject$] = renderObject;
    this[selectionControls$] = selectionControls;
    this[selectionDelegate$] = selectionDelegate;
    this[dragStartBehavior$] = dragStartBehavior;
    this[onSelectionHandleTapped$] = onSelectionHandleTapped;
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 41, 16, "value != null");
    if (!(context != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 42, 16, "context != null");
    if (!(handlesVisible != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 43, 16, "handlesVisible != null");
    this[_handlesVisible] = handlesVisible;
    this[_value] = value;
    let overlay = overlay$.Overlay.of(this.context);
    if (!(overlay != null)) dart.assertFailed("No Overlay widget exists above " + dart.str(this.context) + ".\n" + "Usually the Navigator created by WidgetsApp provides the overlay. Perhaps your " + "app content was created above the Navigator with the WidgetsApp builder parameter.", "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 48, 9, "overlay != null");
    this[_toolbarController] = new animation_controller.AnimationController.new({duration: extended_text_selection_overlay.ExtendedTextSelectionOverlay.fadeDuration, vsync: overlay});
  }).prototype = extended_text_selection_overlay.ExtendedTextSelectionOverlay.prototype;
  dart.addTypeTests(extended_text_selection_overlay.ExtendedTextSelectionOverlay);
  const context$ = Symbol("ExtendedTextSelectionOverlay.context");
  const debugRequiredFor$ = Symbol("ExtendedTextSelectionOverlay.debugRequiredFor");
  const layerLink$ = Symbol("ExtendedTextSelectionOverlay.layerLink");
  const renderObject$ = Symbol("ExtendedTextSelectionOverlay.renderObject");
  const selectionControls$ = Symbol("ExtendedTextSelectionOverlay.selectionControls");
  const selectionDelegate$ = Symbol("ExtendedTextSelectionOverlay.selectionDelegate");
  const dragStartBehavior$ = Symbol("ExtendedTextSelectionOverlay.dragStartBehavior");
  const onSelectionHandleTapped$ = Symbol("ExtendedTextSelectionOverlay.onSelectionHandleTapped");
  dart.setMethodSignature(extended_text_selection_overlay.ExtendedTextSelectionOverlay, () => ({
    __proto__: dart.getMethods(extended_text_selection_overlay.ExtendedTextSelectionOverlay.__proto__),
    showHandles: dart.fnType(dart.void, []),
    hideHandles: dart.fnType(dart.void, []),
    showToolbar: dart.fnType(dart.void, []),
    update: dart.fnType(dart.void, [text_input.TextEditingValue]),
    updateForScroll: dart.fnType(dart.void, []),
    [_markNeedsBuild]: dart.fnType(dart.void, [], [core.Duration]),
    hide: dart.fnType(dart.void, []),
    hideToolbar: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    [_buildHandle]: dart.fnType(framework.Widget, [framework.BuildContext, extended_text_selection_overlay._TextSelectionHandlePosition]),
    [_buildToolbar]: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_handleSelectionHandleChanged]: dart.fnType(dart.void, [text_editing.TextSelection, extended_text_selection_overlay._TextSelectionHandlePosition])
  }));
  dart.setGetterSignature(extended_text_selection_overlay.ExtendedTextSelectionOverlay, () => ({
    __proto__: dart.getGetters(extended_text_selection_overlay.ExtendedTextSelectionOverlay.__proto__),
    [_toolbarOpacity]: animation.Animation$(core.double),
    value: text_input.TextEditingValue,
    [_selection]: text_editing.TextSelection,
    handlesVisible: core.bool,
    handlesAreVisible: core.bool,
    toolbarIsVisible: core.bool
  }));
  dart.setSetterSignature(extended_text_selection_overlay.ExtendedTextSelectionOverlay, () => ({
    __proto__: dart.getSetters(extended_text_selection_overlay.ExtendedTextSelectionOverlay.__proto__),
    handlesVisible: core.bool
  }));
  dart.setLibraryUri(extended_text_selection_overlay.ExtendedTextSelectionOverlay, "package:extended_text_library/src/selection/extended_text_selection_overlay.dart");
  dart.setFieldSignature(extended_text_selection_overlay.ExtendedTextSelectionOverlay, () => ({
    __proto__: dart.getFields(extended_text_selection_overlay.ExtendedTextSelectionOverlay.__proto__),
    context: dart.finalFieldType(framework.BuildContext),
    debugRequiredFor: dart.finalFieldType(framework.Widget),
    layerLink: dart.finalFieldType(layer.LayerLink),
    renderObject: dart.finalFieldType(extended_text_selection_render_object.ExtendedTextSelectionRenderObject),
    selectionControls: dart.finalFieldType(text_selection.TextSelectionControls),
    selectionDelegate: dart.finalFieldType(text_input.TextSelectionDelegate),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior),
    onSelectionHandleTapped: dart.finalFieldType(dart.fnType(dart.void, [])),
    [_toolbarController]: dart.fieldType(animation_controller.AnimationController),
    [_value]: dart.fieldType(text_input.TextEditingValue),
    [_handles]: dart.fieldType(core.List$(overlay$.OverlayEntry)),
    [_toolbar]: dart.fieldType(overlay$.OverlayEntry),
    [_handlesVisible]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(extended_text_selection_overlay.ExtendedTextSelectionOverlay, {
    /*extended_text_selection_overlay.ExtendedTextSelectionOverlay.fadeDuration*/get fadeDuration() {
      return C33 || CT.C33;
    }
  });
  const _visibility = dart.privateName(extended_text_selection_overlay, "_visibility");
  extended_text_selection_overlay._TextSelectionHandleOverlay = class _TextSelectionHandleOverlay extends framework.StatefulWidget {
    createState() {
      return new extended_text_selection_overlay._TextSelectionHandleOverlayState.new();
    }
    get [_visibility]() {
      switch (this.position) {
        case C0 || CT.C0:
        {
          return this.renderObject.selectionStartInViewport;
        }
        case C1 || CT.C1:
        {
          return this.renderObject.selectionEndInViewport;
        }
      }
      return null;
    }
  };
  (extended_text_selection_overlay._TextSelectionHandleOverlay.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let selection = opts && 'selection' in opts ? opts.selection : null;
    let position = opts && 'position' in opts ? opts.position : null;
    let layerLink = opts && 'layerLink' in opts ? opts.layerLink : null;
    let renderObject = opts && 'renderObject' in opts ? opts.renderObject : null;
    let onSelectionHandleChanged = opts && 'onSelectionHandleChanged' in opts ? opts.onSelectionHandleChanged : null;
    let onSelectionHandleTapped = opts && 'onSelectionHandleTapped' in opts ? opts.onSelectionHandleTapped : null;
    let selectionControls = opts && 'selectionControls' in opts ? opts.selectionControls : null;
    let dragStartBehavior = opts && 'dragStartBehavior' in opts ? opts.dragStartBehavior : C3 || CT.C3;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.selection = selection;
    this.position = position;
    this.layerLink = layerLink;
    this.renderObject = renderObject;
    this.onSelectionHandleChanged = onSelectionHandleChanged;
    this.onSelectionHandleTapped = onSelectionHandleTapped;
    this.selectionControls = selectionControls;
    this.dragStartBehavior = dragStartBehavior;
    extended_text_selection_overlay._TextSelectionHandleOverlay.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = extended_text_selection_overlay._TextSelectionHandleOverlay.prototype;
  dart.addTypeTests(extended_text_selection_overlay._TextSelectionHandleOverlay);
  dart.setMethodSignature(extended_text_selection_overlay._TextSelectionHandleOverlay, () => ({
    __proto__: dart.getMethods(extended_text_selection_overlay._TextSelectionHandleOverlay.__proto__),
    createState: dart.fnType(extended_text_selection_overlay._TextSelectionHandleOverlayState, [])
  }));
  dart.setGetterSignature(extended_text_selection_overlay._TextSelectionHandleOverlay, () => ({
    __proto__: dart.getGetters(extended_text_selection_overlay._TextSelectionHandleOverlay.__proto__),
    [_visibility]: change_notifier.ValueListenable$(core.bool)
  }));
  dart.setLibraryUri(extended_text_selection_overlay._TextSelectionHandleOverlay, "package:extended_text_library/src/selection/extended_text_selection_overlay.dart");
  dart.setFieldSignature(extended_text_selection_overlay._TextSelectionHandleOverlay, () => ({
    __proto__: dart.getFields(extended_text_selection_overlay._TextSelectionHandleOverlay.__proto__),
    selection: dart.finalFieldType(text_editing.TextSelection),
    position: dart.finalFieldType(extended_text_selection_overlay._TextSelectionHandlePosition),
    layerLink: dart.finalFieldType(layer.LayerLink),
    renderObject: dart.finalFieldType(extended_text_selection_render_object.ExtendedTextSelectionRenderObject),
    onSelectionHandleChanged: dart.finalFieldType(dart.fnType(dart.void, [text_editing.TextSelection])),
    onSelectionHandleTapped: dart.finalFieldType(dart.fnType(dart.void, [])),
    selectionControls: dart.finalFieldType(text_selection.TextSelectionControls),
    dragStartBehavior: dart.finalFieldType(recognizer.DragStartBehavior)
  }));
  const _dragPosition = dart.privateName(extended_text_selection_overlay, "_dragPosition");
  const _controller = dart.privateName(extended_text_selection_overlay, "_controller");
  const _opacity = dart.privateName(extended_text_selection_overlay, "_opacity");
  const _handleVisibilityChanged = dart.privateName(extended_text_selection_overlay, "_handleVisibilityChanged");
  const _handleDragStart = dart.privateName(extended_text_selection_overlay, "_handleDragStart");
  const _handleDragUpdate = dart.privateName(extended_text_selection_overlay, "_handleDragUpdate");
  const _handleTap = dart.privateName(extended_text_selection_overlay, "_handleTap");
  let C34;
  const _chooseType = dart.privateName(extended_text_selection_overlay, "_chooseType");
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C46;
  let C40;
  let C39;
  let C49;
  let C50;
  let C51;
  let C52;
  let C48;
  let C47;
  let C55;
  let C56;
  let C54;
  let C53;
  let C59;
  let C60;
  let C61;
  let C62;
  let C58;
  let C57;
  const _name$0 = dart.privateName(ui, "_name");
  let C63;
  let C64;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends framework.State$(extended_text_selection_overlay._TextSelectionHandleOverlay) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    ticker_provider.SingleTickerProviderStateMixin$(extended_text_selection_overlay._TextSelectionHandleOverlay)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, ticker_provider.SingleTickerProviderStateMixin$(extended_text_selection_overlay._TextSelectionHandleOverlay));
  extended_text_selection_overlay._TextSelectionHandleOverlayState = class _TextSelectionHandleOverlayState extends State_SingleTickerProviderStateMixin$ {
    get [_opacity]() {
      return this[_controller].view;
    }
    initState() {
      super.initState();
      this[_controller] = new animation_controller.AnimationController.new({duration: extended_text_selection_overlay.ExtendedTextSelectionOverlay.fadeDuration, vsync: this});
      this[_handleVisibilityChanged]();
      this.widget[_visibility].addListener(dart.bind(this, _handleVisibilityChanged));
    }
    [_handleVisibilityChanged]() {
      if (dart.test(this.widget[_visibility].value)) {
        this[_controller].forward();
      } else {
        this[_controller].reverse();
      }
    }
    didUpdateWidget(oldWidget) {
      extended_text_selection_overlay._TextSelectionHandleOverlay._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      oldWidget[_visibility].removeListener(dart.bind(this, _handleVisibilityChanged));
      this[_handleVisibilityChanged]();
      this.widget[_visibility].addListener(dart.bind(this, _handleVisibilityChanged));
    }
    dispose() {
      this.widget[_visibility].removeListener(dart.bind(this, _handleVisibilityChanged));
      this[_controller].dispose();
      super.dispose();
    }
    [_handleDragStart](details) {
      let handleSize = this.widget.selectionControls.getHandleSize(this.widget.renderObject.preferredLineHeight);
      this[_dragPosition] = details.globalPosition['+'](new ui.Offset.new(0.0, -dart.notNull(handleSize.height)));
    }
    [_handleDragUpdate](details) {
      this[_dragPosition] = this[_dragPosition]['+'](details.delta);
      let position = this.widget.renderObject.getPositionForPoint(this[_dragPosition]);
      if (dart.test(this.widget.renderObject.handleSpecialText)) {
        position = extended_text_utils.convertTextPainterPostionToTextInputPostion(this.widget.renderObject.text, position);
      }
      if (dart.test(this.widget.selection.isCollapsed)) {
        this.widget.onSelectionHandleChanged(new text_editing.TextSelection.fromPosition(position));
        return;
      }
      let newSelection = null;
      switch (this.widget.position) {
        case C0 || CT.C0:
        {
          newSelection = new text_editing.TextSelection.new({baseOffset: position.offset, extentOffset: this.widget.selection.extentOffset});
          break;
        }
        case C1 || CT.C1:
        {
          newSelection = new text_editing.TextSelection.new({baseOffset: this.widget.selection.baseOffset, extentOffset: position.offset});
          break;
        }
      }
      if (dart.notNull(newSelection.baseOffset) >= dart.notNull(newSelection.extentOffset)) return;
      this.widget.onSelectionHandleChanged(newSelection);
    }
    [_handleTap]() {
      if (this.widget.onSelectionHandleTapped != null) this.widget.onSelectionHandleTapped();
    }
    build(context) {
      let endpoints = this.widget.renderObject.getEndpointsForSelection(this.widget.selection);
      if (endpoints == null) return new container.Container.new({$creationLocationd_0dea112b090073317d4: C34 || CT.C34});
      let point = null;
      let type = null;
      switch (this.widget.position) {
        case C0 || CT.C0:
        {
          point = endpoints[$_get](0).point;
          type = this[_chooseType](endpoints[$_get](0), text_selection.TextSelectionHandleType.left, text_selection.TextSelectionHandleType.right);
          break;
        }
        case C1 || CT.C1:
        {
          if (!(endpoints[$length] === 2)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 497, 16, "endpoints.length == 2");
          point = endpoints[$_get](1).point;
          type = this[_chooseType](endpoints[$_get](1), text_selection.TextSelectionHandleType.right, text_selection.TextSelectionHandleType.left);
          break;
        }
      }
      let viewport = this.widget.renderObject.getSize();
      point = new ui.Offset.new(point.dx[$clamp](0.0, viewport.width), point.dy[$clamp](0.0, viewport.height));
      let handleAnchor = this.widget.selectionControls.getHandleAnchor(type, this.widget.renderObject.preferredLineHeight);
      let handleSize = this.widget.selectionControls.getHandleSize(this.widget.renderObject.preferredLineHeight);
      let handleRect = new ui.Rect.fromLTWH(dart.notNull(point.dx) - dart.notNull(handleAnchor.dx), dart.notNull(point.dy) - dart.notNull(handleAnchor.dy), handleSize.width, handleSize.height);
      let interactiveRect = handleRect.expandToInclude(new ui.Rect.fromCircle({center: handleRect.center, radius: 48 / 2}));
      let padding = new stack.RelativeRect.fromLTRB(math.max(core.double, (dart.notNull(interactiveRect.width) - dart.notNull(handleRect.width)) / 2, 0.0), math.max(core.double, (dart.notNull(interactiveRect.height) - dart.notNull(handleRect.height)) / 2, 0.0), math.max(core.double, (dart.notNull(interactiveRect.width) - dart.notNull(handleRect.width)) / 2, 0.0), math.max(core.double, (dart.notNull(interactiveRect.height) - dart.notNull(handleRect.height)) / 2, 0.0));
      return new basic.CompositedTransformFollower.new({link: this.widget.layerLink, offset: interactiveRect.topLeft, showWhenUnlinked: false, child: new transitions.FadeTransition.new({opacity: this[_opacity], child: new container.Container.new({alignment: alignment.Alignment.topLeft, width: interactiveRect.width, height: interactiveRect.height, child: new gesture_detector.GestureDetector.new({behavior: proxy_box.HitTestBehavior.translucent, dragStartBehavior: this.widget.dragStartBehavior, onPanStart: dart.bind(this, _handleDragStart), onPanUpdate: dart.bind(this, _handleDragUpdate), onTap: dart.bind(this, _handleTap), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: padding.left, top: padding.top, right: padding.right, bottom: padding.bottom}), child: this.widget.selectionControls.buildHandle(context, type, this.widget.renderObject.preferredLineHeight), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
    }
    [_chooseType](endpoint, ltrType, rtlType) {
      if (dart.test(this.widget.selection.isCollapsed)) return text_selection.TextSelectionHandleType.collapsed;
      if (!(endpoint.direction != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/extended_text_selection_overlay.dart", 579, 12, "endpoint.direction != null");
      switch (endpoint.direction) {
        case C63 || CT.C63:
        {
          return ltrType;
        }
        case C64 || CT.C64:
        {
          return rtlType;
        }
      }
      return null;
    }
  };
  (extended_text_selection_overlay._TextSelectionHandleOverlayState.new = function() {
    this[_dragPosition] = null;
    this[_controller] = null;
    extended_text_selection_overlay._TextSelectionHandleOverlayState.__proto__.new.call(this);
    ;
  }).prototype = extended_text_selection_overlay._TextSelectionHandleOverlayState.prototype;
  dart.addTypeTests(extended_text_selection_overlay._TextSelectionHandleOverlayState);
  dart.setMethodSignature(extended_text_selection_overlay._TextSelectionHandleOverlayState, () => ({
    __proto__: dart.getMethods(extended_text_selection_overlay._TextSelectionHandleOverlayState.__proto__),
    [_handleVisibilityChanged]: dart.fnType(dart.void, []),
    [_handleDragStart]: dart.fnType(dart.void, [drag_details.DragStartDetails]),
    [_handleDragUpdate]: dart.fnType(dart.void, [drag_details.DragUpdateDetails]),
    [_handleTap]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_chooseType]: dart.fnType(text_selection.TextSelectionHandleType, [editable.TextSelectionPoint, text_selection.TextSelectionHandleType, text_selection.TextSelectionHandleType])
  }));
  dart.setGetterSignature(extended_text_selection_overlay._TextSelectionHandleOverlayState, () => ({
    __proto__: dart.getGetters(extended_text_selection_overlay._TextSelectionHandleOverlayState.__proto__),
    [_opacity]: animation.Animation$(core.double)
  }));
  dart.setLibraryUri(extended_text_selection_overlay._TextSelectionHandleOverlayState, "package:extended_text_library/src/selection/extended_text_selection_overlay.dart");
  dart.setFieldSignature(extended_text_selection_overlay._TextSelectionHandleOverlayState, () => ({
    __proto__: dart.getFields(extended_text_selection_overlay._TextSelectionHandleOverlayState.__proto__),
    [_dragPosition]: dart.fieldType(ui.Offset),
    [_controller]: dart.fieldType(animation_controller.AnimationController)
  }));
  dart.defineLazy(extended_text_selection_overlay, {
    /*extended_text_selection_overlay.kExtendedMinInteractiveSize*/get kExtendedMinInteractiveSize() {
      return 48;
    }
  });
  let C65;
  const WidgetSpan_SpecialInlineSpanBase$ = class WidgetSpan_SpecialInlineSpanBase extends widget_span.WidgetSpan {};
  (WidgetSpan_SpecialInlineSpanBase$.new = function(opts) {
    WidgetSpan_SpecialInlineSpanBase$.__proto__.new.call(this, opts);
  }).prototype = WidgetSpan_SpecialInlineSpanBase$.prototype;
  dart.applyMixin(WidgetSpan_SpecialInlineSpanBase$, special_inline_span_base.SpecialInlineSpanBase);
  extended_widget_span.ExtendedWidgetSpan = class ExtendedWidgetSpan extends WidgetSpan_SpecialInlineSpanBase$ {
    get actualText() {
      return this[actualText$0];
    }
    set actualText(value) {
      super.actualText = value;
    }
    get deleteAll() {
      return this[deleteAll$0];
    }
    set deleteAll(value) {
      super.deleteAll = value;
    }
    get textRange() {
      return this[textRange$];
    }
    set textRange(value) {
      super.textRange = value;
    }
    get widgetSpanSize() {
      return this[widgetSpanSize];
    }
    set widgetSpanSize(value) {
      super.widgetSpanSize = value;
    }
    get size() {
      return this.widgetSpanSize.size;
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      if (!super._equals(other)) return false;
      if (!dart.equals(this.widgetSpanSize.size, dart.dload(dart.dload(other, 'widgetSpanSize'), 'size'))) {
        return false;
      }
      return this.equal(special_inline_span_base.SpecialInlineSpanBase._check(other));
    }
    get hashCode() {
      return ui.hashValues(super.hashCode, this.baseHashCode, this.widgetSpanSize.size);
    }
    compareTo(other) {
      let comparison = super.compareTo(other);
      if (dart.equals(comparison, basic_types.RenderComparison.identical)) {
        if (!dart.equals(this.widgetSpanSize.size, extended_widget_span.ExtendedWidgetSpan.as(other).widgetSpanSize.size)) {
          return basic_types.RenderComparison.layout;
        }
      }
      if (dart.equals(comparison, basic_types.RenderComparison.identical)) {
        comparison = this.baseCompareTo(special_inline_span_base.SpecialInlineSpanBase.as(other));
      }
      return comparison;
    }
    build(builder, opts) {
      let textScaleFactor = opts && 'textScaleFactor' in opts ? opts.textScaleFactor : 1;
      let dimensions = opts && 'dimensions' in opts ? opts.dimensions : null;
      if (!dart.test(this.debugAssertIsValid())) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_widget_span.dart", 80, 12, "debugAssertIsValid()");
      if (!(dimensions != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_widget_span.dart", 81, 12, "dimensions != null");
      let hasStyle = this.style != null;
      if (hasStyle) {
        builder.pushStyle(this.style.getTextStyle({textScaleFactor: textScaleFactor}));
      }
      if (!(dart.notNull(builder.placeholderCount) < dart.notNull(dimensions[$length]))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_widget_span.dart", 86, 12, "builder.placeholderCount < dimensions.length");
      let currentDimensions = dimensions[$_get](builder.placeholderCount);
      this.widgetSpanSize.size = currentDimensions.size;
      builder.addPlaceholder(currentDimensions.size.width, currentDimensions.size.height, this.alignment, {scale: textScaleFactor, baseline: currentDimensions.baseline, baselineOffset: currentDimensions.baselineOffset});
      if (hasStyle) {
        builder.pop();
      }
    }
    getSpanForPositionVisitor(position, offset) {
      let affinity = position.affinity;
      let targetOffset = position.offset;
      let endOffset = dart.notNull(offset.value) + 1;
      if (offset.value == targetOffset && dart.equals(affinity, ui.TextAffinity.downstream) || dart.notNull(offset.value) < dart.notNull(targetOffset) && dart.notNull(targetOffset) < endOffset || endOffset === targetOffset && dart.equals(affinity, ui.TextAffinity.upstream)) {
        return this;
      }
      offset.increment(1);
      return null;
    }
    getSpanForPosition(position) {
      return this;
    }
  };
  (extended_widget_span.ExtendedWidgetSpan.new = function(opts) {
    let t0, t0$, t0$0;
    let child = opts && 'child' in opts ? opts.child : null;
    let actualText = opts && 'actualText' in opts ? opts.actualText : "￼";
    let start = opts && 'start' in opts ? opts.start : 0;
    let deleteAll = opts && 'deleteAll' in opts ? opts.deleteAll : true;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C65 || CT.C65;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let style = opts && 'style' in opts ? opts.style : null;
    if (!(start != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_widget_span.dart", 35, 16, "start != null");
    if (!(deleteAll != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/extended_widget_span.dart", 36, 16, "deleteAll != null");
    this[actualText$0] = (t0 = actualText, t0 == null ? "￼" : t0);
    this[deleteAll$0] = deleteAll;
    this[textRange$] = new text_editing.TextRange.new({start: start, end: dart.notNull(start) + (t0$ = actualText, t0$ == null ? "￼" : t0$).length});
    this[widgetSpanSize] = (t0$0 = new extended_widget_span.WidgetSpanSize.new(), t0$0.size = ui.Size.zero, t0$0);
    extended_widget_span.ExtendedWidgetSpan.__proto__.new.call(this, {child: child, alignment: alignment, baseline: baseline});
    ;
  }).prototype = extended_widget_span.ExtendedWidgetSpan.prototype;
  dart.addTypeTests(extended_widget_span.ExtendedWidgetSpan);
  const actualText$0 = Symbol("ExtendedWidgetSpan.actualText");
  const deleteAll$0 = Symbol("ExtendedWidgetSpan.deleteAll");
  const textRange$ = Symbol("ExtendedWidgetSpan.textRange");
  const widgetSpanSize = Symbol("ExtendedWidgetSpan.widgetSpanSize");
  dart.setGetterSignature(extended_widget_span.ExtendedWidgetSpan, () => ({
    __proto__: dart.getGetters(extended_widget_span.ExtendedWidgetSpan.__proto__),
    size: ui.Size
  }));
  dart.setLibraryUri(extended_widget_span.ExtendedWidgetSpan, "package:extended_text_library/src/extended_widget_span.dart");
  dart.setFieldSignature(extended_widget_span.ExtendedWidgetSpan, () => ({
    __proto__: dart.getFields(extended_widget_span.ExtendedWidgetSpan.__proto__),
    actualText: dart.finalFieldType(core.String),
    deleteAll: dart.finalFieldType(core.bool),
    textRange: dart.finalFieldType(text_editing.TextRange),
    widgetSpanSize: dart.finalFieldType(extended_widget_span.WidgetSpanSize)
  }));
  dart.defineExtensionMethods(extended_widget_span.ExtendedWidgetSpan, ['_equals']);
  dart.defineExtensionAccessors(extended_widget_span.ExtendedWidgetSpan, ['hashCode']);
  extended_widget_span.WidgetSpanSize = class WidgetSpanSize extends core.Object {
    get size() {
      return this[size];
    }
    set size(value) {
      this[size] = value;
    }
  };
  (extended_widget_span.WidgetSpanSize.new = function() {
    this[size] = null;
    ;
  }).prototype = extended_widget_span.WidgetSpanSize.prototype;
  dart.addTypeTests(extended_widget_span.WidgetSpanSize);
  const size = Symbol("WidgetSpanSize.size");
  dart.setLibraryUri(extended_widget_span.WidgetSpanSize, "package:extended_text_library/src/extended_widget_span.dart");
  dart.setFieldSignature(extended_widget_span.WidgetSpanSize, () => ({
    __proto__: dart.getFields(extended_widget_span.WidgetSpanSize.__proto__),
    size: dart.fieldType(ui.Size)
  }));
  const _textPainterHelper = dart.privateName(background_text_span, "_textPainterHelper");
  background_text_span.BackgroundTextSpan = class BackgroundTextSpan extends special_text_span.SpecialTextSpan {
    get background() {
      return this[background$];
    }
    set background(value) {
      super.background = value;
    }
    get clipBorderRadius() {
      return this[clipBorderRadius$];
    }
    set clipBorderRadius(value) {
      super.clipBorderRadius = value;
    }
    get paintBackground() {
      return this[paintBackground$];
    }
    set paintBackground(value) {
      super.paintBackground = value;
    }
    layout(painter) {
      return this[_textPainterHelper].layout(painter, this, {compareChildren: false});
    }
    paint(canvas, offset, rect, opts) {
      let t0, t0$, t0$0, t0$1;
      let endOffset = opts && 'endOffset' in opts ? opts.endOffset : null;
      let wholeTextPainter = opts && 'wholeTextPainter' in opts ? opts.wholeTextPainter : null;
      if (!(this[_textPainterHelper].painter != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/background_text_span.dart", 56, 12, "_textPainterHelper.painter != null");
      if (this.paintBackground != null) {
        let handle = (t0 = this.paintBackground(this, canvas, offset, this[_textPainterHelper].painter, rect, {endOffset: endOffset, wholeTextPainter: wholeTextPainter}), t0 == null ? false : t0);
        if (dart.test(handle)) return;
      }
      let textRect = offset['&'](this[_textPainterHelper].painter.size);
      if (endOffset != null) {
        let firstLineRect = offset['&'](new ui.Size.new(dart.notNull(rect.right) - dart.notNull(offset.dx), this[_textPainterHelper].painter.height));
        if (this.clipBorderRadius != null) {
          canvas.save();
          canvas.clipPath((t0$ = ui.Path.new(), t0$.addRRect(new border_radius.BorderRadius.only({topLeft: this.clipBorderRadius.topLeft, bottomLeft: this.clipBorderRadius.bottomLeft}).resolve(this[_textPainterHelper].painter.textDirection).toRRect(firstLineRect)), t0$));
        }
        canvas.drawRect(firstLineRect, this.background);
        if (this.clipBorderRadius != null) {
          canvas.restore();
        }
        let fullLinesAndLastLine = ((dart.notNull(endOffset.dy) - dart.notNull(offset.dy)) / dart.notNull(this[_textPainterHelper].painter.height))[$round]();
        let y = offset.dy;
        for (let i = 0; i < fullLinesAndLastLine; i = i + 1) {
          y = dart.notNull(y) + dart.notNull(this[_textPainterHelper].painter.height);
          if (i === fullLinesAndLastLine - 1) {
            let lastLineRect = new ui.Offset.new(0.0, y)['&'](new ui.Size.new(endOffset.dx, this[_textPainterHelper].painter.height));
            if (this.clipBorderRadius != null) {
              canvas.save();
              canvas.clipPath((t0$0 = ui.Path.new(), t0$0.addRRect(new border_radius.BorderRadius.only({topRight: this.clipBorderRadius.topRight, bottomRight: this.clipBorderRadius.bottomRight}).resolve(this[_textPainterHelper].painter.textDirection).toRRect(lastLineRect)), t0$0));
            }
            canvas.drawRect(lastLineRect, this.background);
            if (this.clipBorderRadius != null) {
              canvas.restore();
            }
          } else {
            canvas.drawRect(new ui.Offset.new(0.0, y)['&'](new ui.Size.new(rect.width, this[_textPainterHelper].painter.height)), this.background);
          }
        }
      } else {
        if (this.clipBorderRadius != null) {
          canvas.save();
          canvas.clipPath((t0$1 = ui.Path.new(), t0$1.addRRect(this.clipBorderRadius.resolve(this[_textPainterHelper].painter.textDirection).toRRect(textRect)), t0$1));
        }
        canvas.drawRect(textRect, this.background);
        if (this.clipBorderRadius != null) {
          canvas.restore();
        }
      }
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = background_text_span.BackgroundTextSpan._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.style, this.style) && dart.equals(typedOther.recognizer, this.recognizer) && dart.equals(typedOther.background, this.background) && dart.equals(typedOther.clipBorderRadius, this.clipBorderRadius) && dart.equals(typedOther.paintBackground, this.paintBackground);
    }
    get hashCode() {
      return ui.hashValues(this.style, this.text, this.recognizer, this.background, this.clipBorderRadius, this.paintBackground);
    }
    compareTo(other) {
      if (background_text_span.BackgroundTextSpan.is(other)) {
        if (!dart.equals(other.background, this.background) || !dart.equals(other.clipBorderRadius, this.clipBorderRadius) || !dart.equals(other.paintBackground, this.paintBackground)) {
          return basic_types.RenderComparison.paint;
        }
      }
      return super.compareTo(other);
    }
  };
  (background_text_span.BackgroundTextSpan.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let recognizer = opts && 'recognizer' in opts ? opts.recognizer : null;
    let background = opts && 'background' in opts ? opts.background : null;
    let clipBorderRadius = opts && 'clipBorderRadius' in opts ? opts.clipBorderRadius : null;
    let paintBackground = opts && 'paintBackground' in opts ? opts.paintBackground : null;
    let actualText = opts && 'actualText' in opts ? opts.actualText : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let deleteAll = opts && 'deleteAll' in opts ? opts.deleteAll : false;
    this[background$] = background;
    this[clipBorderRadius$] = clipBorderRadius;
    this[paintBackground$] = paintBackground;
    if (!(background != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/background_text_span.dart", 39, 16, "background != null");
    this[_textPainterHelper] = new text_painter_helper.TextPainterHelper.new();
    background_text_span.BackgroundTextSpan.__proto__.new.call(this, {style: style, text: text, recognizer: recognizer, actualText: actualText, start: start, deleteAll: deleteAll});
    ;
  }).prototype = background_text_span.BackgroundTextSpan.prototype;
  dart.addTypeTests(background_text_span.BackgroundTextSpan);
  const background$ = Symbol("BackgroundTextSpan.background");
  const clipBorderRadius$ = Symbol("BackgroundTextSpan.clipBorderRadius");
  const paintBackground$ = Symbol("BackgroundTextSpan.paintBackground");
  dart.setMethodSignature(background_text_span.BackgroundTextSpan, () => ({
    __proto__: dart.getMethods(background_text_span.BackgroundTextSpan.__proto__),
    layout: dart.fnType(text_painter.TextPainter, [text_painter.TextPainter]),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Offset, ui.Rect], {endOffset: ui.Offset, wholeTextPainter: text_painter.TextPainter})
  }));
  dart.setLibraryUri(background_text_span.BackgroundTextSpan, "package:extended_text_library/src/background_text_span.dart");
  dart.setFieldSignature(background_text_span.BackgroundTextSpan, () => ({
    __proto__: dart.getFields(background_text_span.BackgroundTextSpan.__proto__),
    background: dart.finalFieldType(ui.Paint),
    clipBorderRadius: dart.finalFieldType(border_radius.BorderRadius),
    paintBackground: dart.finalFieldType(dart.fnType(core.bool, [background_text_span.BackgroundTextSpan, ui.Canvas, ui.Offset, text_painter.TextPainter, ui.Rect], {endOffset: ui.Offset, wholeTextPainter: text_painter.TextPainter})),
    [_textPainterHelper]: dart.finalFieldType(text_painter_helper.TextPainterHelper)
  }));
  dart.defineExtensionMethods(background_text_span.BackgroundTextSpan, ['_equals']);
  dart.defineExtensionAccessors(background_text_span.BackgroundTextSpan, ['hashCode']);
  let C68;
  let C67;
  let C66;
  let C71;
  let C72;
  let C70;
  let C69;
  let C75;
  let C74;
  let C73;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C81;
  let C80;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C91;
  let C90;
  let C96;
  let C97;
  let C95;
  let C94;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C105;
  let C103;
  let C102;
  let C108;
  let C109;
  let C107;
  let C106;
  material_text_selection_controls._TextSelectionToolbar = class _TextSelectionToolbar extends framework.StatelessWidget {
    build(context) {
      let items = JSArrayOfWidget().of([]);
      let localizations = material_localizations.MaterialLocalizations.of(context);
      if (this.handleCut != null) items[$add](new flat_button.FlatButton.new({child: new text$.Text.new(localizations.cutButtonLabel, {$creationLocationd_0dea112b090073317d4: C66 || CT.C66}), onPressed: this.handleCut, $creationLocationd_0dea112b090073317d4: C69 || CT.C69}));
      if (this.handleCopy != null) items[$add](new flat_button.FlatButton.new({child: new text$.Text.new(localizations.copyButtonLabel, {$creationLocationd_0dea112b090073317d4: C73 || CT.C73}), onPressed: this.handleCopy, $creationLocationd_0dea112b090073317d4: C76 || CT.C76}));
      if (this.handlePaste != null) items[$add](new flat_button.FlatButton.new({child: new text$.Text.new(localizations.pasteButtonLabel, {$creationLocationd_0dea112b090073317d4: C80 || CT.C80}), onPressed: this.handlePaste, $creationLocationd_0dea112b090073317d4: C83 || CT.C83}));
      if (this.handleSelectAll != null) items[$add](new flat_button.FlatButton.new({child: new text$.Text.new(localizations.selectAllButtonLabel, {$creationLocationd_0dea112b090073317d4: C87 || CT.C87}), onPressed: this.handleSelectAll, $creationLocationd_0dea112b090073317d4: C90 || CT.C90}));
      if (dart.test(items[$isEmpty])) {
        return new container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: C94 || CT.C94});
      }
      return new material.Material.new({elevation: 1.0, child: new container.Container.new({height: 44, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: items, $creationLocationd_0dea112b090073317d4: C98 || CT.C98}), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106});
    }
  };
  (material_text_selection_controls._TextSelectionToolbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let handleCut = opts && 'handleCut' in opts ? opts.handleCut : null;
    let handleCopy = opts && 'handleCopy' in opts ? opts.handleCopy : null;
    let handlePaste = opts && 'handlePaste' in opts ? opts.handlePaste : null;
    let handleSelectAll = opts && 'handleSelectAll' in opts ? opts.handleSelectAll : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.handleCut = handleCut;
    this.handleCopy = handleCopy;
    this.handlePaste = handlePaste;
    this.handleSelectAll = handleSelectAll;
    material_text_selection_controls._TextSelectionToolbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = material_text_selection_controls._TextSelectionToolbar.prototype;
  dart.addTypeTests(material_text_selection_controls._TextSelectionToolbar);
  dart.setMethodSignature(material_text_selection_controls._TextSelectionToolbar, () => ({
    __proto__: dart.getMethods(material_text_selection_controls._TextSelectionToolbar.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(material_text_selection_controls._TextSelectionToolbar, "package:extended_text_library/src/selection/material_text_selection_controls.dart");
  dart.setFieldSignature(material_text_selection_controls._TextSelectionToolbar, () => ({
    __proto__: dart.getFields(material_text_selection_controls._TextSelectionToolbar.__proto__),
    handleCut: dart.finalFieldType(dart.fnType(dart.void, [])),
    handleCopy: dart.finalFieldType(dart.fnType(dart.void, [])),
    handlePaste: dart.finalFieldType(dart.fnType(dart.void, [])),
    handleSelectAll: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout = class MaterialExtendedTextSelectionToolbarLayout extends shifted_box.SingleChildLayoutDelegate {
    get screenSize() {
      return this[screenSize$];
    }
    set screenSize(value) {
      super.screenSize = value;
    }
    get globalEditableRegion() {
      return this[globalEditableRegion$];
    }
    set globalEditableRegion(value) {
      super.globalEditableRegion = value;
    }
    get position() {
      return this[position$];
    }
    set position(value) {
      super.position = value;
    }
    getConstraintsForChild(constraints) {
      return constraints.loosen();
    }
    getPositionForChild(size, childSize) {
      let globalPosition = this.globalEditableRegion.topLeft['+'](this.position);
      let x = dart.notNull(globalPosition.dx) - dart.notNull(childSize.width) / 2.0;
      let y = dart.notNull(globalPosition.dy) - dart.notNull(childSize.height);
      if (x < 8)
        x = 8;
      else if (x + dart.notNull(childSize.width) > dart.notNull(this.screenSize.width) - 8) x = dart.notNull(this.screenSize.width) - dart.notNull(childSize.width) - 8;
      if (y < 8)
        y = 8;
      else if (y + dart.notNull(childSize.height) > dart.notNull(this.screenSize.height) - 8) y = dart.notNull(this.screenSize.height) - dart.notNull(childSize.height) - 8;
      return new ui.Offset.new(x, y);
    }
    shouldRelayout(oldDelegate) {
      material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout._check(oldDelegate);
      return !dart.equals(this.position, oldDelegate.position);
    }
  };
  (material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.new = function(screenSize, globalEditableRegion, position) {
    this[screenSize$] = screenSize;
    this[globalEditableRegion$] = globalEditableRegion;
    this[position$] = position;
    material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.__proto__.new.call(this);
    ;
  }).prototype = material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.prototype;
  dart.addTypeTests(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout);
  const screenSize$ = Symbol("MaterialExtendedTextSelectionToolbarLayout.screenSize");
  const globalEditableRegion$ = Symbol("MaterialExtendedTextSelectionToolbarLayout.globalEditableRegion");
  const position$ = Symbol("MaterialExtendedTextSelectionToolbarLayout.position");
  dart.setMethodSignature(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout, () => ({
    __proto__: dart.getMethods(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.__proto__),
    shouldRelayout: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout, "package:extended_text_library/src/selection/material_text_selection_controls.dart");
  dart.setFieldSignature(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout, () => ({
    __proto__: dart.getFields(material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.__proto__),
    screenSize: dart.finalFieldType(ui.Size),
    globalEditableRegion: dart.finalFieldType(ui.Rect),
    position: dart.finalFieldType(ui.Offset)
  }));
  material_text_selection_controls._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t0;
      let paint = (t0 = new ui.Paint.new(), t0.color = this.color, t0);
      let radius = dart.notNull(size.width) / 2.0;
      canvas.drawCircle(new ui.Offset.new(radius, radius), radius, paint);
      canvas.drawRect(new ui.Rect.fromLTWH(0.0, 0.0, radius, radius), paint);
    }
    shouldRepaint(oldPainter) {
      material_text_selection_controls._TextSelectionHandlePainter._check(oldPainter);
      return !dart.equals(this.color, oldPainter.color);
    }
  };
  (material_text_selection_controls._TextSelectionHandlePainter.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    this.color = color;
    material_text_selection_controls._TextSelectionHandlePainter.__proto__.new.call(this);
    ;
  }).prototype = material_text_selection_controls._TextSelectionHandlePainter.prototype;
  dart.addTypeTests(material_text_selection_controls._TextSelectionHandlePainter);
  dart.setMethodSignature(material_text_selection_controls._TextSelectionHandlePainter, () => ({
    __proto__: dart.getMethods(material_text_selection_controls._TextSelectionHandlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(material_text_selection_controls._TextSelectionHandlePainter, "package:extended_text_library/src/selection/material_text_selection_controls.dart");
  dart.setFieldSignature(material_text_selection_controls._TextSelectionHandlePainter, () => ({
    __proto__: dart.getFields(material_text_selection_controls._TextSelectionHandlePainter.__proto__),
    color: dart.finalFieldType(ui.Color)
  }));
  const _dy = dart.privateName(ui, "_dy");
  const _dx = dart.privateName(ui, "_dx");
  let C110;
  let C113;
  let C114;
  let C115;
  let C116;
  let C112;
  let C111;
  let C119;
  let C120;
  let C118;
  let C117;
  let C123;
  let C124;
  let C122;
  let C121;
  let C127;
  let C126;
  let C125;
  let C130;
  let C131;
  let C132;
  let C129;
  let C128;
  let C135;
  let C136;
  let C134;
  let C133;
  const _name$1 = dart.privateName(text_selection, "_name");
  let C137;
  let C138;
  let C141;
  let C142;
  let C140;
  let C139;
  let C143;
  let C144;
  let C145;
  material_text_selection_controls.MaterialExtendedTextSelectionControls = class MaterialExtendedTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return C110 || CT.C110;
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, position, endpoints, delegate) {
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart", 158, 12, "debugCheckHasMediaQuery(context)");
      if (!dart.test(debug$.debugCheckHasMaterialLocalizations(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart", 159, 12, "debugCheckHasMaterialLocalizations(context)");
      let startTextSelectionPoint = endpoints[$_get](0);
      let endTextSelectionPoint = dart.notNull(endpoints[$length]) > 1 ? endpoints[$_get](1) : null;
      let x = endTextSelectionPoint == null ? startTextSelectionPoint.point.dx : (dart.notNull(startTextSelectionPoint.point.dx) + dart.notNull(endTextSelectionPoint.point.dx)) / 2.0;
      let availableHeight = dart.notNull(globalEditableRegion.top) - dart.notNull(media_query.MediaQuery.of(context).padding.top) - 8;
      let y = availableHeight < 44 ? dart.notNull(startTextSelectionPoint.point.dy) + dart.notNull(globalEditableRegion.height) + 44 + 8 : dart.notNull(startTextSelectionPoint.point.dy) - dart.notNull(textLineHeight) * 2.0;
      let preciseMidpoint = new ui.Offset.new(x, y);
      return new basic.ConstrainedBox.new({constraints: new box.BoxConstraints.tight(globalEditableRegion.size), child: new basic.CustomSingleChildLayout.new({delegate: new material_text_selection_controls.MaterialExtendedTextSelectionToolbarLayout.new(media_query.MediaQuery.of(context).size, globalEditableRegion, preciseMidpoint), child: new material_text_selection_controls._TextSelectionToolbar.new({handleCut: dart.test(this.canCut(delegate)) ? dart.fn(() => this.handleCut(delegate), VoidTovoid()) : null, handleCopy: dart.test(this.canCopy(delegate)) ? dart.fn(() => this.handleCopy(delegate), VoidTovoid()) : null, handlePaste: dart.test(this.canPaste(delegate)) ? dart.fn(() => this.handlePaste(delegate), VoidToFutureOfvoid()) : null, handleSelectAll: dart.test(this.canSelectAll(delegate)) ? dart.fn(() => this.handleSelectAll(delegate), VoidTovoid()) : null, $creationLocationd_0dea112b090073317d4: C111 || CT.C111}), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), $creationLocationd_0dea112b090073317d4: C121 || CT.C121});
    }
    buildHandle(context, type, textHeight) {
      let handle = new basic.SizedBox.new({width: 22, height: 22, child: new basic.CustomPaint.new({painter: new material_text_selection_controls._TextSelectionHandlePainter.new({color: theme.Theme.of(context).textSelectionHandleColor}), $creationLocationd_0dea112b090073317d4: C125 || CT.C125}), $creationLocationd_0dea112b090073317d4: C128 || CT.C128});
      switch (type) {
        case C137 || CT.C137:
        {
          return new basic.Transform.rotate({angle: 3.141592653589793 / 2.0, child: handle, $creationLocationd_0dea112b090073317d4: C133 || CT.C133});
        }
        case C138 || CT.C138:
        {
          return handle;
        }
        case C143 || CT.C143:
        {
          return new basic.Transform.rotate({angle: 3.141592653589793 / 4.0, child: handle, $creationLocationd_0dea112b090073317d4: C139 || CT.C139});
        }
      }
      if (!(type != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/material_text_selection_controls.dart", 231, 12, "type != null");
      return null;
    }
    getHandleAnchor(type, textLineHeight) {
      switch (type) {
        case C137 || CT.C137:
        {
          return C144 || CT.C144;
        }
        case C138 || CT.C138:
        {
          return ui.Offset.zero;
        }
        default:
        {
          return C145 || CT.C145;
        }
      }
    }
    canSelectAll(delegate) {
      let value = delegate.textEditingValue;
      return value.text[$isNotEmpty] && !(value.selection.start === 0 && value.selection.end === value.text.length);
    }
  };
  (material_text_selection_controls.MaterialExtendedTextSelectionControls.new = function() {
    ;
  }).prototype = material_text_selection_controls.MaterialExtendedTextSelectionControls.prototype;
  dart.addTypeTests(material_text_selection_controls.MaterialExtendedTextSelectionControls);
  dart.setMethodSignature(material_text_selection_controls.MaterialExtendedTextSelectionControls, () => ({
    __proto__: dart.getMethods(material_text_selection_controls.MaterialExtendedTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, text_selection.TextSelectionHandleType, core.double]),
    getHandleAnchor: dart.fnType(ui.Offset, [text_selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(material_text_selection_controls.MaterialExtendedTextSelectionControls, "package:extended_text_library/src/selection/material_text_selection_controls.dart");
  dart.defineLazy(material_text_selection_controls, {
    /*material_text_selection_controls.materialExtendedTextSelectionControls*/get materialExtendedTextSelectionControls() {
      return new material_text_selection_controls.MaterialExtendedTextSelectionControls.new();
    },
    /*material_text_selection_controls._kHandleSize*/get _kHandleSize() {
      return 22;
    },
    /*material_text_selection_controls._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*material_text_selection_controls._kToolbarHeight*/get _kToolbarHeight() {
      return 44;
    }
  });
  extended_text_selection_render_object.ExtendedTextSelectionRenderObject = class ExtendedTextSelectionRenderObject extends core.Object {};
  (extended_text_selection_render_object.ExtendedTextSelectionRenderObject.new = function() {
    ;
  }).prototype = extended_text_selection_render_object.ExtendedTextSelectionRenderObject.prototype;
  dart.addTypeTests(extended_text_selection_render_object.ExtendedTextSelectionRenderObject);
  dart.setLibraryUri(extended_text_selection_render_object.ExtendedTextSelectionRenderObject, "package:extended_text_library/src/render_object/extended_text_selection_render_object.dart");
  const _barTopY$ = dart.privateName(cupertino_text_selection_controls, "_barTopY");
  const _arrowTipX$ = dart.privateName(cupertino_text_selection_controls, "_arrowTipX");
  const _isArrowPointingDown$ = dart.privateName(cupertino_text_selection_controls, "_isArrowPointingDown");
  cupertino_text_selection_controls.CupertinoTextSelectionToolbar = class CupertinoTextSelectionToolbar extends framework.SingleChildRenderObjectWidget {
    createRenderObject(context) {
      return new cupertino_text_selection_controls._ToolbarRenderBox.new(this[_barTopY$], this[_arrowTipX$], this[_isArrowPointingDown$], null);
    }
    updateRenderObject(context, renderObject) {
      let t0;
      cupertino_text_selection_controls._ToolbarRenderBox._check(renderObject);
      t0 = renderObject;
      t0.barTopY = this[_barTopY$];
      t0.arrowTipX = this[_arrowTipX$];
      t0.isArrowPointingDown = this[_isArrowPointingDown$];
      t0;
    }
  };
  (cupertino_text_selection_controls.CupertinoTextSelectionToolbar.__ = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let barTopY = opts && 'barTopY' in opts ? opts.barTopY : null;
    let arrowTipX = opts && 'arrowTipX' in opts ? opts.arrowTipX : null;
    let isArrowPointingDown = opts && 'isArrowPointingDown' in opts ? opts.isArrowPointingDown : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_barTopY$] = barTopY;
    this[_arrowTipX$] = arrowTipX;
    this[_isArrowPointingDown$] = isArrowPointingDown;
    cupertino_text_selection_controls.CupertinoTextSelectionToolbar.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = cupertino_text_selection_controls.CupertinoTextSelectionToolbar.prototype;
  dart.addTypeTests(cupertino_text_selection_controls.CupertinoTextSelectionToolbar);
  dart.setMethodSignature(cupertino_text_selection_controls.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getMethods(cupertino_text_selection_controls.CupertinoTextSelectionToolbar.__proto__),
    createRenderObject: dart.fnType(cupertino_text_selection_controls._ToolbarRenderBox, [framework.BuildContext])
  }));
  dart.setLibraryUri(cupertino_text_selection_controls.CupertinoTextSelectionToolbar, "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart");
  dart.setFieldSignature(cupertino_text_selection_controls.CupertinoTextSelectionToolbar, () => ({
    __proto__: dart.getFields(cupertino_text_selection_controls.CupertinoTextSelectionToolbar.__proto__),
    [_barTopY$]: dart.finalFieldType(core.double),
    [_arrowTipX$]: dart.finalFieldType(core.double),
    [_isArrowPointingDown$]: dart.finalFieldType(core.bool)
  }));
  cupertino_text_selection_controls._ToolbarParentData = class _ToolbarParentData extends box.BoxParentData {
    toString() {
      return "offset=" + dart.str(this.offset) + ", arrowXOffsetFromCenter=" + dart.str(this.arrowXOffsetFromCenter);
    }
  };
  (cupertino_text_selection_controls._ToolbarParentData.new = function() {
    this.arrowXOffsetFromCenter = null;
    cupertino_text_selection_controls._ToolbarParentData.__proto__.new.call(this);
    ;
  }).prototype = cupertino_text_selection_controls._ToolbarParentData.prototype;
  dart.addTypeTests(cupertino_text_selection_controls._ToolbarParentData);
  dart.setLibraryUri(cupertino_text_selection_controls._ToolbarParentData, "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart");
  dart.setFieldSignature(cupertino_text_selection_controls._ToolbarParentData, () => ({
    __proto__: dart.getFields(cupertino_text_selection_controls._ToolbarParentData.__proto__),
    arrowXOffsetFromCenter: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(cupertino_text_selection_controls._ToolbarParentData, ['toString']);
  let C146;
  const _debugPaint = dart.privateName(cupertino_text_selection_controls, "_debugPaint");
  let C147;
  const _clipPath = dart.privateName(cupertino_text_selection_controls, "_clipPath");
  let C148;
  let C149;
  const _value$ = dart.privateName(ui, "_value");
  let C150;
  let C151;
  cupertino_text_selection_controls._ToolbarRenderBox = class _ToolbarRenderBox extends shifted_box.RenderShiftedBox {
    get isRepaintBoundary() {
      return true;
    }
    set barTopY(value) {
      if (this[_barTopY$] == value) {
        return;
      }
      this[_barTopY$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    set arrowTipX(value) {
      if (this[_arrowTipX$] == value) {
        return;
      }
      this[_arrowTipX$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    set isArrowPointingDown(value) {
      if (dart.equals(this[_isArrowPointingDown$], value)) {
        return;
      }
      this[_isArrowPointingDown$] = value;
      this.markNeedsLayout();
      this.markNeedsSemanticsUpdate();
    }
    setupParentData(child) {
      object.RenderObject._check(child);
      if (!cupertino_text_selection_controls._ToolbarParentData.is(child.parentData)) {
        child.parentData = new cupertino_text_selection_controls._ToolbarParentData.new();
      }
    }
    performLayout() {
      this.size = this.constraints.biggest;
      if (this.child == null) {
        return;
      }
      let enforcedConstraint = this.constraints.deflate(C147 || CT.C147).loosen();
      this.child.layout(this.heightConstraint.enforce(enforcedConstraint), {parentUsesSize: true});
      let childParentData = cupertino_text_selection_controls._ToolbarParentData._check(this.child.parentData);
      let localTopCenter = this.globalToLocal(new ui.Offset.new(this[_arrowTipX$], this[_barTopY$]));
      let lowerBound = dart.notNull(this.child.size.width) / 2 + 8;
      let upperBound = dart.notNull(this.size.width) - dart.notNull(this.child.size.width) / 2 - 8;
      let adjustedCenterX = localTopCenter.dx[$clamp](lowerBound, upperBound);
      childParentData.offset = new ui.Offset.new(adjustedCenterX - dart.notNull(this.child.size.width) / 2, localTopCenter.dy);
      childParentData.arrowXOffsetFromCenter = dart.notNull(localTopCenter.dx) - adjustedCenterX;
    }
    [_clipPath]() {
      let t0, t0$;
      let childParentData = cupertino_text_selection_controls._ToolbarParentData._check(this.child.parentData);
      let rrect = (t0 = ui.Path.new(), t0.addRRect(new ui.RRect.fromRectAndRadius(new ui.Offset.new(0.0, dart.test(this[_isArrowPointingDown$]) ? 0.0 : cupertino_text_selection_controls._kToolbarArrowSize.height)['&'](new ui.Size.new(this.child.size.width, dart.notNull(this.child.size.height) - dart.notNull(cupertino_text_selection_controls._kToolbarArrowSize.height))), cupertino_text_selection_controls._kToolbarBorderRadius)), t0);
      let arrowTipX = dart.notNull(this.child.size.width) / 2 + dart.notNull(childParentData.arrowXOffsetFromCenter);
      let arrowBottomY = dart.test(this[_isArrowPointingDown$]) ? dart.notNull(this.child.size.height) - dart.notNull(cupertino_text_selection_controls._kToolbarArrowSize.height) : cupertino_text_selection_controls._kToolbarArrowSize.height;
      let arrowTipY = dart.test(this[_isArrowPointingDown$]) ? this.child.size.height : 0.0;
      let arrow = (t0$ = ui.Path.new(), t0$.moveTo(arrowTipX, arrowTipY), t0$.lineTo(arrowTipX - dart.notNull(cupertino_text_selection_controls._kToolbarArrowSize.width) / 2, arrowBottomY), t0$.lineTo(arrowTipX + dart.notNull(cupertino_text_selection_controls._kToolbarArrowSize.width) / 2, arrowBottomY), t0$.close(), t0$);
      return ui.Path.combine(ui.PathOperation.union, rrect, arrow);
    }
    paint(context, offset) {
      if (this.child == null) {
        return;
      }
      let childParentData = cupertino_text_selection_controls._ToolbarParentData._check(this.child.parentData);
      context.pushClipPath(this.needsCompositing, offset['+'](childParentData.offset), ui.Offset.zero['&'](this.child.size), this[_clipPath](), dart.fn((innerContext, innerOffset) => innerContext.paintChild(this.child, innerOffset), PaintingContextAndOffsetTovoid()));
    }
    debugPaintSize(context, offset) {
      if (!dart.test(dart.fn(() => {
        let t0;
        if (this.child == null) {
          return true;
        }
        this[_debugPaint] == null ? this[_debugPaint] = (t0 = new ui.Paint.new(), t0.shader = ui.Gradient.linear(C148 || CT.C148, C149 || CT.C149, JSArrayOfColor().of([C150 || CT.C150, C151 || CT.C151, C151 || CT.C151, C150 || CT.C150]), JSArrayOfdouble().of([0.25, 0.25, 0.75, 0.75]), ui.TileMode.repeated), t0.strokeWidth = 2.0, t0.style = ui.PaintingStyle.stroke, t0) : null;
        let childParentData = cupertino_text_selection_controls._ToolbarParentData._check(this.child.parentData);
        context.canvas.drawPath(this[_clipPath]().shift(offset['+'](childParentData.offset)), this[_debugPaint]);
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart", 245, 12, "() {\r\n      if (child == null) {\r\n        return true;\r\n      }\r\n\r\n      _debugPaint ??= Paint()\r\n        ..shader = ui.Gradient.linear(\r\n          const Offset(0.0, 0.0),\r\n          const Offset(10.0, 10.0),\r\n          <Color>[\r\n            const Color(0x00000000),\r\n            const Color(0xFFFF00FF),\r\n            const Color(0xFFFF00FF),\r\n            const Color(0x00000000)\r\n          ],\r\n          <double>[0.25, 0.25, 0.75, 0.75],\r\n          TileMode.repeated,\r\n        )\r\n        ..strokeWidth = 2.0\r\n        ..style = PaintingStyle.stroke;\r\n\r\n      final _ToolbarParentData childParentData = child.parentData;\r\n      context.canvas.drawPath(\r\n          _clipPath().shift(offset + childParentData.offset), _debugPaint);\r\n      return true;\r\n    }()");
    }
  };
  (cupertino_text_selection_controls._ToolbarRenderBox.new = function(_barTopY, _arrowTipX, _isArrowPointingDown, child) {
    this.heightConstraint = C146 || CT.C146;
    this[_debugPaint] = null;
    this[_barTopY$] = _barTopY;
    this[_arrowTipX$] = _arrowTipX;
    this[_isArrowPointingDown$] = _isArrowPointingDown;
    cupertino_text_selection_controls._ToolbarRenderBox.__proto__.new.call(this, child);
    ;
  }).prototype = cupertino_text_selection_controls._ToolbarRenderBox.prototype;
  dart.addTypeTests(cupertino_text_selection_controls._ToolbarRenderBox);
  dart.setMethodSignature(cupertino_text_selection_controls._ToolbarRenderBox, () => ({
    __proto__: dart.getMethods(cupertino_text_selection_controls._ToolbarRenderBox.__proto__),
    [_clipPath]: dart.fnType(ui.Path, [])
  }));
  dart.setSetterSignature(cupertino_text_selection_controls._ToolbarRenderBox, () => ({
    __proto__: dart.getSetters(cupertino_text_selection_controls._ToolbarRenderBox.__proto__),
    barTopY: core.double,
    arrowTipX: core.double,
    isArrowPointingDown: core.bool
  }));
  dart.setLibraryUri(cupertino_text_selection_controls._ToolbarRenderBox, "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart");
  dart.setFieldSignature(cupertino_text_selection_controls._ToolbarRenderBox, () => ({
    __proto__: dart.getFields(cupertino_text_selection_controls._ToolbarRenderBox.__proto__),
    [_barTopY$]: dart.fieldType(core.double),
    [_arrowTipX$]: dart.fieldType(core.double),
    [_isArrowPointingDown$]: dart.fieldType(core.bool),
    heightConstraint: dart.finalFieldType(box.BoxConstraints),
    [_debugPaint]: dart.fieldType(ui.Paint)
  }));
  let C152;
  let C153;
  cupertino_text_selection_controls._TextSelectionHandlePainter = class _TextSelectionHandlePainter extends custom_paint.CustomPainter {
    paint(canvas, size) {
      let t0;
      let paint = (t0 = new ui.Paint.new(), t0.color = cupertino_text_selection_controls._kHandlesColor, t0.strokeWidth = 2.0, t0);
      canvas.drawCircle(C152 || CT.C152, 5.5, paint);
      canvas.drawLine(C153 || CT.C153, new ui.Offset.new(5.5, size.height), paint);
    }
    shouldRepaint(oldPainter) {
      cupertino_text_selection_controls._TextSelectionHandlePainter._check(oldPainter);
      return false;
    }
  };
  (cupertino_text_selection_controls._TextSelectionHandlePainter.new = function() {
    cupertino_text_selection_controls._TextSelectionHandlePainter.__proto__.new.call(this);
    ;
  }).prototype = cupertino_text_selection_controls._TextSelectionHandlePainter.prototype;
  dart.addTypeTests(cupertino_text_selection_controls._TextSelectionHandlePainter);
  dart.setMethodSignature(cupertino_text_selection_controls._TextSelectionHandlePainter, () => ({
    __proto__: dart.getMethods(cupertino_text_selection_controls._TextSelectionHandlePainter.__proto__),
    paint: dart.fnType(dart.void, [ui.Canvas, ui.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(cupertino_text_selection_controls._TextSelectionHandlePainter, "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart");
  let C156;
  let C155;
  let C154;
  let C159;
  let C160;
  let C158;
  let C157;
  let C163;
  let C164;
  let C165;
  let C166;
  let C167;
  let C168;
  let C169;
  let C162;
  let C161;
  const _name$2 = dart.privateName(box_border, "_name");
  let C171;
  let C172;
  let C170;
  let C175;
  let C176;
  let C174;
  let C173;
  let C179;
  let C180;
  let C178;
  let C177;
  let C183;
  let C184;
  let C185;
  let C186;
  let C182;
  let C181;
  let C188;
  const _repaint = dart.privateName(custom_paint, "_repaint");
  let C189;
  let C187;
  let C192;
  let C193;
  let C191;
  let C190;
  let C196;
  let C197;
  let C195;
  let C194;
  let C198;
  cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls = class CupertinoExtendedTextSelectionControls extends text_selection.TextSelectionControls {
    getHandleSize(textLineHeight) {
      return new ui.Size.new(5.5 * 2, dart.notNull(textLineHeight) + 5.5 * 2 - 1.5);
    }
    buildToolbar(context, globalEditableRegion, textLineHeight, position, endpoints, delegate) {
      if (!dart.test(debug.debugCheckHasMediaQuery(context))) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart", 326, 12, "debugCheckHasMediaQuery(context)");
      let mediaQuery = media_query.MediaQuery.of(context);
      let isArrowPointingDown = dart.notNull(mediaQuery.padding.top) + 8 + 43 + 8 <= dart.notNull(globalEditableRegion.top) + dart.notNull(endpoints[$first].point.dy) - dart.notNull(textLineHeight);
      let arrowTipX = (dart.notNull(position.dx) + dart.notNull(globalEditableRegion.left))[$clamp](26 + dart.notNull(mediaQuery.padding.left), dart.notNull(mediaQuery.size.width) - dart.notNull(mediaQuery.padding.right) - 26);
      let localBarTopY = isArrowPointingDown ? dart.notNull(endpoints[$first].point.dy) - dart.notNull(textLineHeight) - 8 - 43 : dart.notNull(endpoints[$last].point.dy) + 8;
      let items = JSArrayOfWidget().of([]);
      let onePhysicalPixelVerticalDivider = new basic.SizedBox.new({width: 1.0 / dart.notNull(media_query.MediaQuery.of(context).devicePixelRatio), $creationLocationd_0dea112b090073317d4: C154 || CT.C154});
      let localizations = localizations$.CupertinoLocalizations.of(context);
      let arrowPadding = isArrowPointingDown ? new edge_insets.EdgeInsets.only({bottom: cupertino_text_selection_controls._kToolbarArrowSize.height}) : new edge_insets.EdgeInsets.only({top: cupertino_text_selection_controls._kToolbarArrowSize.height});
      function addToolbarButtonIfNeeded(text, predicate, onPressed) {
        if (!dart.test(predicate(delegate))) {
          return;
        }
        if (dart.test(items[$isNotEmpty])) {
          items[$add](onePhysicalPixelVerticalDivider);
        }
        items[$add](new button.CupertinoButton.new({child: new text$.Text.new(text, {style: cupertino_text_selection_controls._kToolbarButtonFontStyle, $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), color: cupertino_text_selection_controls._kToolbarBackgroundColor, minSize: 43, padding: cupertino_text_selection_controls._kToolbarButtonPadding.add(arrowPadding), borderRadius: null, pressedOpacity: 0.7, onPressed: dart.fn(() => onPressed(delegate), VoidTovoid()), $creationLocationd_0dea112b090073317d4: C161 || CT.C161}));
      }
      dart.fn(addToolbarButtonIfNeeded, StringAndFnAndFnTovoid());
      addToolbarButtonIfNeeded(localizations.cutButtonLabel, dart.bind(this, 'canCut'), dart.bind(this, 'handleCut'));
      addToolbarButtonIfNeeded(localizations.copyButtonLabel, dart.bind(this, 'canCopy'), dart.bind(this, 'handleCopy'));
      addToolbarButtonIfNeeded(localizations.pasteButtonLabel, dart.bind(this, 'canPaste'), dart.bind(this, 'handlePaste'));
      addToolbarButtonIfNeeded(localizations.selectAllButtonLabel, dart.bind(this, 'canSelectAll'), dart.bind(this, 'handleSelectAll'));
      return new cupertino_text_selection_controls.CupertinoTextSelectionToolbar.__({barTopY: localBarTopY + dart.notNull(globalEditableRegion.top), arrowTipX: arrowTipX, isArrowPointingDown: isArrowPointingDown, child: dart.test(items[$isEmpty]) ? null : new container.DecoratedBox.new({decoration: C170 || CT.C170, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: items, $creationLocationd_0dea112b090073317d4: C173 || CT.C173}), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C181 || CT.C181});
    }
    buildHandle(context, type, textLineHeight) {
      let t0;
      let desiredSize = this.getHandleSize(textLineHeight);
      let handle = new basic.SizedBox.fromSize({size: desiredSize, child: C187 || CT.C187, $creationLocationd_0dea112b090073317d4: C190 || CT.C190});
      switch (type) {
        case C137 || CT.C137:
        {
          return handle;
        }
        case C138 || CT.C138:
        {
          return new basic.Transform.new({transform: (t0 = vector_math_64.Matrix4.identity(), t0.translate(dart.notNull(desiredSize.width) / 2, dart.notNull(desiredSize.height) / 2), t0.rotateZ(3.141592653589793), t0.translate(-dart.notNull(desiredSize.width) / 2, -dart.notNull(desiredSize.height) / 2), t0), child: handle, $creationLocationd_0dea112b090073317d4: C194 || CT.C194});
        }
        case C143 || CT.C143:
        {
          return new container.Container.new({$creationLocationd_0dea112b090073317d4: C198 || CT.C198});
        }
      }
      if (!(type != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/selection/cupertino_text_selection_controls.dart", 440, 12, "type != null");
      return null;
    }
    getHandleAnchor(type, textLineHeight) {
      let handleSize = this.getHandleSize(textLineHeight);
      switch (type) {
        case C137 || CT.C137:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, handleSize.height);
        }
        case C138 || CT.C138:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, dart.notNull(handleSize.height) - 2 * 5.5 + 1.5);
        }
        default:
        {
          return new ui.Offset.new(dart.notNull(handleSize.width) / 2, dart.notNull(textLineHeight) + (dart.notNull(handleSize.height) - dart.notNull(textLineHeight)) / 2);
        }
      }
    }
  };
  (cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls.new = function() {
    ;
  }).prototype = cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls.prototype;
  dart.addTypeTests(cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls);
  dart.setMethodSignature(cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls, () => ({
    __proto__: dart.getMethods(cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls.__proto__),
    getHandleSize: dart.fnType(ui.Size, [core.double]),
    buildToolbar: dart.fnType(framework.Widget, [framework.BuildContext, ui.Rect, core.double, ui.Offset, core.List$(editable.TextSelectionPoint), text_input.TextSelectionDelegate]),
    buildHandle: dart.fnType(framework.Widget, [framework.BuildContext, text_selection.TextSelectionHandleType, core.double]),
    getHandleAnchor: dart.fnType(ui.Offset, [text_selection.TextSelectionHandleType, core.double])
  }));
  dart.setLibraryUri(cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls, "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart");
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
  let C205;
  const _package = dart.privateName(text_style, "_package");
  const _fontFamilyFallback = dart.privateName(text_style, "_fontFamilyFallback");
  let C206;
  let C204;
  dart.defineLazy(cupertino_text_selection_controls, {
    /*cupertino_text_selection_controls.cupertinoExtendedTextSelectionControls*/get cupertinoExtendedTextSelectionControls() {
      return new cupertino_text_selection_controls.CupertinoExtendedTextSelectionControls.new();
    },
    /*cupertino_text_selection_controls._kHandlesColor*/get _kHandlesColor() {
      return C199 || CT.C199;
    },
    /*cupertino_text_selection_controls._kSelectionHandleOverlap*/get _kSelectionHandleOverlap() {
      return 1.5;
    },
    /*cupertino_text_selection_controls._kSelectionHandleRadius*/get _kSelectionHandleRadius() {
      return 5.5;
    },
    /*cupertino_text_selection_controls._kToolbarScreenPadding*/get _kToolbarScreenPadding() {
      return 8;
    },
    /*cupertino_text_selection_controls._kArrowScreenPadding*/get _kArrowScreenPadding() {
      return 26;
    },
    /*cupertino_text_selection_controls._kToolbarContentDistance*/get _kToolbarContentDistance() {
      return 8;
    },
    /*cupertino_text_selection_controls._kToolbarHeight*/get _kToolbarHeight() {
      return 43;
    },
    /*cupertino_text_selection_controls._kToolbarBackgroundColor*/get _kToolbarBackgroundColor() {
      return C200 || CT.C200;
    },
    /*cupertino_text_selection_controls._kToolbarDividerColor*/get _kToolbarDividerColor() {
      return C172 || CT.C172;
    },
    /*cupertino_text_selection_controls._kToolbarArrowSize*/get _kToolbarArrowSize() {
      return C201 || CT.C201;
    },
    /*cupertino_text_selection_controls._kToolbarButtonPadding*/get _kToolbarButtonPadding() {
      return C202 || CT.C202;
    },
    /*cupertino_text_selection_controls._kToolbarBorderRadius*/get _kToolbarBorderRadius() {
      return C203 || CT.C203;
    },
    /*cupertino_text_selection_controls._kToolbarButtonFontStyle*/get _kToolbarButtonFontStyle() {
      return C204 || CT.C204;
    }
  });
  const _painter = dart.privateName(text_painter_helper, "_painter");
  const _offset = dart.privateName(text_painter_helper, "_offset");
  text_painter_helper.TextPainterHelper = class TextPainterHelper extends core.Object {
    get painter() {
      return this[_painter];
    }
    layout(painter, textSpan, opts) {
      let compareChildren = opts && 'compareChildren' in opts ? opts.compareChildren : true;
      if (this[_painter] == null || (dart.test(compareChildren) ? !dart.equals(this[_painter].text, textSpan) : text_span.TextSpan.as(this[_painter].text).text != textSpan.text) || !dart.equals(this[_painter].textAlign, painter.textAlign) || this[_painter].textScaleFactor != painter.textScaleFactor || !dart.equals(this[_painter].locale, painter.locale)) {
        this[_painter] = new text_painter.TextPainter.new({text: textSpan, textAlign: painter.textAlign, textScaleFactor: painter.textScaleFactor, textDirection: painter.textDirection, locale: painter.locale});
      }
      this[_painter].layout();
      return this[_painter];
    }
    get offset() {
      return this[_offset];
    }
    saveOffset(offset) {
      this[_offset] = offset;
    }
    getPositionForOffset(offset) {
      return this.painter.getPositionForOffset(offset['-'](this[_offset]));
    }
    getSpanForPosition(position) {
      return this.painter.text.getSpanForPosition(position);
    }
  };
  (text_painter_helper.TextPainterHelper.new = function() {
    this[_painter] = null;
    this[_offset] = null;
    ;
  }).prototype = text_painter_helper.TextPainterHelper.prototype;
  dart.addTypeTests(text_painter_helper.TextPainterHelper);
  dart.setMethodSignature(text_painter_helper.TextPainterHelper, () => ({
    __proto__: dart.getMethods(text_painter_helper.TextPainterHelper.__proto__),
    layout: dart.fnType(text_painter.TextPainter, [text_painter.TextPainter, text_span.TextSpan], {compareChildren: core.bool}),
    saveOffset: dart.fnType(dart.void, [ui.Offset]),
    getPositionForOffset: dart.fnType(ui.TextPosition, [ui.Offset]),
    getSpanForPosition: dart.fnType(inline_span.InlineSpan, [ui.TextPosition])
  }));
  dart.setGetterSignature(text_painter_helper.TextPainterHelper, () => ({
    __proto__: dart.getGetters(text_painter_helper.TextPainterHelper.__proto__),
    painter: text_painter.TextPainter,
    offset: ui.Offset
  }));
  dart.setLibraryUri(text_painter_helper.TextPainterHelper, "package:extended_text_library/src/text_painter_helper.dart");
  dart.setFieldSignature(text_painter_helper.TextPainterHelper, () => ({
    __proto__: dart.getFields(text_painter_helper.TextPainterHelper.__proto__),
    [_painter]: dart.fieldType(text_painter.TextPainter),
    [_offset]: dart.fieldType(ui.Offset)
  }));
  const _placeholderSpans = dart.privateName(extended_text_render_box, "_placeholderSpans");
  let C207;
  let C208;
  let C209;
  let C210;
  let C211;
  const _canComputeIntrinsics = dart.privateName(extended_text_render_box, "_canComputeIntrinsics");
  const _computeChildrenWidthWithMaxIntrinsics = dart.privateName(extended_text_render_box, "_computeChildrenWidthWithMaxIntrinsics");
  const _computeChildrenWidthWithMinIntrinsics = dart.privateName(extended_text_render_box, "_computeChildrenWidthWithMinIntrinsics");
  const _computeChildrenHeightWithMinIntrinsics = dart.privateName(extended_text_render_box, "_computeChildrenHeightWithMinIntrinsics");
  const _computeIntrinsicHeight = dart.privateName(extended_text_render_box, "_computeIntrinsicHeight");
  let C212;
  const RenderBox_ContainerRenderObjectMixin$ = class RenderBox_ContainerRenderObjectMixin extends box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$.new = function() {
    object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$, object.ContainerRenderObjectMixin$(box.RenderBox, paragraph.TextParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$ = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$ {};
  (RenderBox_RenderBoxContainerDefaultsMixin$.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$, box.RenderBoxContainerDefaultsMixin$(box.RenderBox, paragraph.TextParentData));
  extended_text_render_box.ExtendedTextRenderBox = class ExtendedTextRenderBox extends RenderBox_RenderBoxContainerDefaultsMixin$ {
    extractPlaceholderSpans(span) {
      this[_placeholderSpans] = JSArrayOfPlaceholderSpan().of([]);
      span.visitChildren(dart.fn(span => {
        if (placeholder_span.PlaceholderSpan.is(span)) {
          let placeholderSpan = span;
          this[_placeholderSpans][$add](placeholderSpan);
        }
        return true;
      }, InlineSpanTobool()));
    }
    [_canComputeIntrinsics]() {
      for (let span of this[_placeholderSpans]) {
        switch (span.alignment) {
          case C207 || CT.C207:
          case C208 || CT.C208:
          case C209 || CT.C209:
          {
            {
              if (!dart.test(object.RenderObject.debugCheckingIntrinsics)) dart.assertFailed("Intrinsics are not available for PlaceholderAlignment.baseline, " + "PlaceholderAlignment.aboveBaseline, or PlaceholderAlignment.belowBaseline,", "org-dartlang-app:///packages/extended_text_library/src/render_object/extended_text_render_box.dart", 41, 17, "RenderObject.debugCheckingIntrinsics");
              return false;
            }
          }
          case C210 || CT.C210:
          case C211 || CT.C211:
          case C65 || CT.C65:
          {
            {
              continue;
            }
          }
        }
      }
      return true;
    }
    [_computeChildrenWidthWithMaxIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().new(this.childCount);
      let childIndex = 0;
      while (child != null) {
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(child.getMaxIntrinsicWidth(height), height), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this.textPainter.setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenWidthWithMinIntrinsics](height) {
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().new(this.childCount);
      let childIndex = 0;
      while (child != null) {
        let intrinsicWidth = child.getMinIntrinsicWidth(height);
        let intrinsicHeight = child.getMinIntrinsicHeight(intrinsicWidth);
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(intrinsicWidth, intrinsicHeight), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this.textPainter.setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeChildrenHeightWithMinIntrinsics](width) {
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().new(this.childCount);
      let childIndex = 0;
      while (child != null) {
        let intrinsicHeight = child.getMinIntrinsicHeight(width);
        let intrinsicWidth = child.getMinIntrinsicWidth(intrinsicHeight);
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: new ui.Size.new(intrinsicWidth, intrinsicHeight), alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this.textPainter.setPlaceholderDimensions(placeholderDimensions);
    }
    [_computeIntrinsicHeight](width) {
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenHeightWithMinIntrinsics](width);
      this.layoutText({minWidth: width, maxWidth: width});
      return this.textPainter.height;
    }
    layoutChildren(constraints) {
      if (this.childCount === 0) {
        return;
      }
      let child = this.firstChild;
      let placeholderDimensions = ListOfPlaceholderDimensions().new(this.childCount);
      let childIndex = 0;
      while (child != null) {
        child.layout(new box.BoxConstraints.new({maxWidth: constraints.maxWidth}), {parentUsesSize: true});
        let baselineOffset = null;
        switch (this[_placeholderSpans][$_get](childIndex).alignment) {
          case C207 || CT.C207:
          {
            {
              baselineOffset = child.getDistanceToBaseline(this[_placeholderSpans][$_get](childIndex).baseline);
              break;
            }
          }
          default:
          {
            {
              baselineOffset = null;
              break;
            }
          }
        }
        placeholderDimensions[$_set](childIndex, new text_painter.PlaceholderDimensions.new({size: child.size, alignment: this[_placeholderSpans][$_get](childIndex).alignment, baseline: this[_placeholderSpans][$_get](childIndex).baseline, baselineOffset: baselineOffset}));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
      this.textPainter.setPlaceholderDimensions(placeholderDimensions);
    }
    setParentData() {
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(this.textPainter.inlinePlaceholderBoxes[$length])) {
        let textParentData = paragraph.TextParentData._check(child.parentData);
        textParentData.offset = new ui.Offset.new(this.textPainter.inlinePlaceholderBoxes[$_get](childIndex).left, this.textPainter.inlinePlaceholderBoxes[$_get](childIndex).top);
        textParentData.scale = this.textPainter.inlinePlaceholderScales[$_get](childIndex);
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
    }
    layoutText(opts) {
      let minWidth = opts && 'minWidth' in opts ? opts.minWidth : 0;
      let maxWidth = opts && 'maxWidth' in opts ? opts.maxWidth : 1 / 0;
      let constraintWidth = opts && 'constraintWidth' in opts ? opts.constraintWidth : 1 / 0;
      let widthMatters = dart.test(this.softWrap) || dart.equals(this.overflow, paragraph.TextOverflow.ellipsis);
      this.textPainter.layout({minWidth: minWidth, maxWidth: widthMatters ? maxWidth : 1 / 0});
    }
    paintWidgets(context, offset) {
      let child = this.firstChild;
      let childIndex = 0;
      while (child != null && childIndex < dart.notNull(this.textPainter.inlinePlaceholderBoxes[$length])) {
        let textParentData = paragraph.TextParentData._check(child.parentData);
        let scale = textParentData.scale;
        context.pushTransform(this.needsCompositing, offset['+'](textParentData.offset), vector_math_64.Matrix4.diagonal3Values(scale, scale, scale), dart.fn((context, offset) => {
          context.paintChild(child, offset);
        }, PaintingContextAndOffsetToNull()));
        child = this.childAfter(child);
        childIndex = childIndex + 1;
      }
    }
    getCaretOffset(textPosition, opts) {
      let t0, t0$;
      let caretHeightCallBack = opts && 'caretHeightCallBack' in opts ? opts.caretHeightCallBack : null;
      let effectiveOffset = opts && 'effectiveOffset' in opts ? opts.effectiveOffset : null;
      let handleSpecialText = opts && 'handleSpecialText' in opts ? opts.handleSpecialText : true;
      let caretPrototype = opts && 'caretPrototype' in opts ? opts.caretPrototype : C212 || CT.C212;
      effectiveOffset == null ? effectiveOffset = ui.Offset.zero : null;
      if (dart.test(handleSpecialText)) {
        let offset = textPosition.offset;
        let boxs = this.textPainter.getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: offset, extentOffset: dart.notNull(offset) + 1, affinity: textPosition.affinity}));
        if (dart.notNull(boxs[$length]) > 0) {
          let rect = boxs[$toList]()[$last].toRect();
          t0 = caretHeightCallBack;
          t0 == null ? null : t0(rect.height);
          return rect.topLeft['+'](effectiveOffset);
        } else {
          if (dart.notNull(offset) <= 0) {
            offset = 1;
          }
          boxs = this.textPainter.getBoxesForSelection(new text_editing.TextSelection.new({baseOffset: dart.notNull(offset) - 1, extentOffset: offset, affinity: textPosition.affinity}));
          if (dart.notNull(boxs[$length]) > 0) {
            let rect = boxs[$toList]()[$last].toRect();
            t0$ = caretHeightCallBack;
            t0$ == null ? null : t0$(rect.height);
            if (dart.notNull(textPosition.offset) <= 0) {
              return rect.topLeft['+'](effectiveOffset);
            } else {
              return rect.topRight['+'](effectiveOffset);
            }
          }
        }
      }
      let caretOffset = this.textPainter.getOffsetForCaret(textPosition, caretPrototype)['+'](effectiveOffset);
      return caretOffset;
    }
    setupParentData(child) {
      box.RenderBox._check(child);
      if (!paragraph.TextParentData.is(child.parentData)) child.parentData = new paragraph.TextParentData.new();
    }
    computeMinIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeMaxIntrinsicHeight(width) {
      return this[_computeIntrinsicHeight](width);
    }
    computeMinIntrinsicWidth(height) {
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMinIntrinsics](height);
      this.layoutText();
      return this.textPainter.minIntrinsicWidth;
    }
    computeMaxIntrinsicWidth(height) {
      if (!dart.test(this[_canComputeIntrinsics]())) {
        return 0.0;
      }
      this[_computeChildrenWidthWithMaxIntrinsics](height);
      this.layoutText();
      return this.textPainter.maxIntrinsicWidth;
    }
  };
  (extended_text_render_box.ExtendedTextRenderBox.new = function() {
    this[_placeholderSpans] = null;
    extended_text_render_box.ExtendedTextRenderBox.__proto__.new.call(this);
    ;
  }).prototype = extended_text_render_box.ExtendedTextRenderBox.prototype;
  dart.addTypeTests(extended_text_render_box.ExtendedTextRenderBox);
  dart.setMethodSignature(extended_text_render_box.ExtendedTextRenderBox, () => ({
    __proto__: dart.getMethods(extended_text_render_box.ExtendedTextRenderBox.__proto__),
    extractPlaceholderSpans: dart.fnType(dart.void, [inline_span.InlineSpan]),
    [_canComputeIntrinsics]: dart.fnType(core.bool, []),
    [_computeChildrenWidthWithMaxIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenWidthWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeChildrenHeightWithMinIntrinsics]: dart.fnType(dart.void, [core.double]),
    [_computeIntrinsicHeight]: dart.fnType(core.double, [core.double]),
    layoutChildren: dart.fnType(dart.void, [box.BoxConstraints]),
    setParentData: dart.fnType(dart.void, []),
    layoutText: dart.fnType(dart.void, [], {constraintWidth: core.double, maxWidth: core.double, minWidth: core.double}),
    paintWidgets: dart.fnType(dart.void, [object.PaintingContext, ui.Offset]),
    getCaretOffset: dart.fnType(ui.Offset, [ui.TextPosition], {caretHeightCallBack: dart.fnType(dart.void, [core.double]), caretPrototype: ui.Rect, effectiveOffset: ui.Offset, handleSpecialText: core.bool})
  }));
  dart.setLibraryUri(extended_text_render_box.ExtendedTextRenderBox, "package:extended_text_library/src/render_object/extended_text_render_box.dart");
  dart.setFieldSignature(extended_text_render_box.ExtendedTextRenderBox, () => ({
    __proto__: dart.getFields(extended_text_render_box.ExtendedTextRenderBox.__proto__),
    [_placeholderSpans]: dart.fieldType(core.List$(placeholder_span.PlaceholderSpan))
  }));
  const _name$3 = dart.privateName(box_fit, "_name");
  let C213;
  let C214;
  const _name$4 = dart.privateName(decoration_image, "_name");
  let C215;
  let C216;
  const _name$5 = dart.privateName(proxy_box, "_name");
  let C217;
  let C220;
  let C221;
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
  let C219;
  let C218;
  let C239;
  let C240;
  let C241;
  let C238;
  let C237;
  let C244;
  let C245;
  let C243;
  let C242;
  image_span.ImageSpan = class ImageSpan extends extended_widget_span.ExtendedWidgetSpan {
    get width() {
      return this[width];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height];
    }
    set height(value) {
      super.height = value;
    }
  };
  (image_span.ImageSpan.new = function(image, opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let imageWidth = opts && 'imageWidth' in opts ? opts.imageWidth : null;
    let imageHeight = opts && 'imageHeight' in opts ? opts.imageHeight : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C65 || CT.C65;
    let actualText = opts && 'actualText' in opts ? opts.actualText : null;
    let baseline = opts && 'baseline' in opts ? opts.baseline : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let fit = opts && 'fit' in opts ? opts.fit : C213 || CT.C213;
    let loadingBuilder = opts && 'loadingBuilder' in opts ? opts.loadingBuilder : null;
    let frameBuilder = opts && 'frameBuilder' in opts ? opts.frameBuilder : null;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let color = opts && 'color' in opts ? opts.color : null;
    let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
    let imageAlignment = opts && 'imageAlignment' in opts ? opts.imageAlignment : C214 || CT.C214;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C215 || CT.C215;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let gaplessPlayback = opts && 'gaplessPlayback' in opts ? opts.gaplessPlayback : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C216 || CT.C216;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let behavior = opts && 'behavior' in opts ? opts.behavior : C217 || CT.C217;
    if (!(image != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/image_span.dart", 36, 16, "image != null");
    if (!(imageWidth != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/image_span.dart", 37, 16, "imageWidth != null");
    if (!(imageHeight != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/image_span.dart", 38, 16, "imageHeight != null");
    if (!(fit != null)) dart.assertFailed(null, "org-dartlang-app:///packages/extended_text_library/src/image_span.dart", 39, 16, "fit != null");
    this[width] = dart.notNull(imageWidth) + dart.notNull(margin == null ? 0 : margin.horizontal);
    this[height] = dart.notNull(imageHeight) + dart.notNull(margin == null ? 0 : margin.vertical);
    image_span.ImageSpan.__proto__.new.call(this, {child: new container.Container.new({padding: margin, child: new gesture_detector.GestureDetector.new({onTap: onTap, behavior: behavior, child: new image$.Image.new({key: key, image: image, width: imageWidth, height: imageHeight, fit: fit, loadingBuilder: loadingBuilder, frameBuilder: frameBuilder, semanticLabel: semanticLabel, excludeFromSemantics: excludeFromSemantics, color: color, colorBlendMode: colorBlendMode, alignment: imageAlignment, repeat: repeat, centerSlice: centerSlice, matchTextDirection: matchTextDirection, gaplessPlayback: gaplessPlayback, filterQuality: filterQuality, $creationLocationd_0dea112b090073317d4: C218 || CT.C218}), $creationLocationd_0dea112b090073317d4: C237 || CT.C237}), $creationLocationd_0dea112b090073317d4: C242 || CT.C242}), style: style, baseline: baseline, alignment: alignment, start: start, deleteAll: true, actualText: actualText});
    ;
  }).prototype = image_span.ImageSpan.prototype;
  dart.addTypeTests(image_span.ImageSpan);
  const width = Symbol("ImageSpan.width");
  const height = Symbol("ImageSpan.height");
  dart.setLibraryUri(image_span.ImageSpan, "package:extended_text_library/src/image_span.dart");
  dart.setFieldSignature(image_span.ImageSpan, () => ({
    __proto__: dart.getFields(image_span.ImageSpan.__proto__),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/extended_text_library/extended_text_library", {
    "package:extended_text_library/src/special_text_span.dart": special_text_span,
    "package:extended_text_library/src/extended_text_utils.dart": extended_text_utils,
    "package:extended_text_library/src/special_text_span_builder.dart": special_text_span_builder,
    "package:extended_text_library/src/selection/extended_text_selection_overlay.dart": extended_text_selection_overlay,
    "package:extended_text_library/src/extended_text_typedef.dart": extended_text_typedef,
    "package:extended_text_library/src/extended_widget_span.dart": extended_widget_span,
    "package:extended_text_library/src/background_text_span.dart": background_text_span,
    "package:extended_text_library/extended_text_library.dart": extended_text_library,
    "package:extended_text_library/src/selection/material_text_selection_controls.dart": material_text_selection_controls,
    "package:extended_text_library/src/render_object/extended_text_selection_render_object.dart": extended_text_selection_render_object,
    "package:extended_text_library/src/selection/cupertino_text_selection_controls.dart": cupertino_text_selection_controls,
    "package:extended_text_library/src/text_painter_helper.dart": text_painter_helper,
    "package:extended_text_library/src/special_inline_span_base.dart": special_inline_span_base,
    "package:extended_text_library/src/render_object/extended_text_render_box.dart": extended_text_render_box,
    "package:extended_text_library/src/image_span.dart": image_span
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/special_inline_span_base.dart","src/special_text_span.dart","src/extended_text_utils.dart","src/special_text_span_builder.dart","src/selection/extended_text_selection_overlay.dart","src/extended_widget_span.dart","src/background_text_span.dart","src/selection/material_text_selection_controls.dart","src/render_object/extended_text_selection_render_object.dart","src/selection/cupertino_text_selection_controls.dart","src/text_painter_helper.dart","src/render_object/extended_text_render_box.dart","src/image_span.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"extended_text_library.ddc.js"}');
  // Exports:
  return {
    src__special_text_span: special_text_span,
    src__extended_text_utils: extended_text_utils,
    src__special_text_span_builder: special_text_span_builder,
    src__selection__extended_text_selection_overlay: extended_text_selection_overlay,
    src__extended_text_typedef: extended_text_typedef,
    src__extended_widget_span: extended_widget_span,
    src__background_text_span: background_text_span,
    extended_text_library: extended_text_library,
    src__selection__material_text_selection_controls: material_text_selection_controls,
    src__render_object__extended_text_selection_render_object: extended_text_selection_render_object,
    src__selection__cupertino_text_selection_controls: cupertino_text_selection_controls,
    src__text_painter_helper: text_painter_helper,
    src__special_inline_span_base: special_inline_span_base,
    src__render_object__extended_text_render_box: extended_text_render_box,
    src__image_span: image_span
  };
});

//# sourceMappingURL=extended_text_library.ddc.js.map

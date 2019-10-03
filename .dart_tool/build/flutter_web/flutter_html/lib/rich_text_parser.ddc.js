define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/gestures/arena', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/html/dom', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_html/image_properties'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__src__gestures__arena, packages__flutter__src__widgets__actions, packages__flutter__material, packages__html__dom, packages__flutter__src__rendering__animated_size, packages__flutter_html__image_properties) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const decoration = packages__flutter__src__painting___network_image_web.src__painting__decoration;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const tap = packages__flutter__src__gestures__arena.src__gestures__tap;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text$ = packages__flutter__src__widgets__actions.src__widgets__text;
  const placeholder = packages__flutter__src__widgets__actions.src__widgets__placeholder;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const colors$ = packages__flutter__material.src__material__colors;
  const divider = packages__flutter__material.src__material__divider;
  const dom = packages__html__dom.dom;
  const parser = packages__html__dom.parser;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const image_properties = packages__flutter_html__image_properties.image_properties;
  const rich_text_parser = Object.create(dart.library);
  const $addAll = dartx.addAll;
  const $contains = dartx.contains;
  const $forEach = dartx.forEach;
  const $replaceAll = dartx.replaceAll;
  const $isEmpty = dartx.isEmpty;
  const $add = dartx.add;
  const $trim = dartx.trim;
  const $indexOf = dartx.indexOf;
  const $trimLeft = dartx.trimLeft;
  const $endsWith = dartx.endsWith;
  const $_get = dartx._get;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $toString = dartx.toString;
  let JSArrayOfTextSpan = () => (JSArrayOfTextSpan = dart.constFn(_interceptors.JSArray$(text_span.TextSpan)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let NodeToNull = () => (NodeToNull = dart.constFn(dart.fnType(core.Null, [dom.Node])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let BuildContextAndWidgetAndint__ToWidget = () => (BuildContextAndWidgetAndint__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, core.int, core.bool])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 75,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 13,
        [_Location_line]: 72,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 18,
        [_Location_line]: 71,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 100,
        [_Location_file]: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 101,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 7,
        [_Location_line]: 102,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 7,
        [_Location_line]: 103,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 104,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 99,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4286755327.0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282682111.0
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280908287.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280902399.0
      });
    },
    get C16() {
      return C16 = dart.constMap(core.int, ui.Color, [100, C17 || CT.C17, 200, C18 || CT.C18, 400, C19 || CT.C19, 700, C20 || CT.C20]);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: colors$.MaterialAccentColor.prototype,
        [Color__value]: 4282682111.0,
        [ColorSwatch__swatch]: C16 || CT.C16
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 1
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: C15 || CT.C15,
        [TextStyle_decoration]: C21 || CT.C21,
        [TextStyle_background]: null,
        [TextStyle_foreground]: null,
        [TextStyle_locale]: null,
        [TextStyle_height]: null,
        [TextStyle_textBaseline]: null,
        [TextStyle_wordSpacing]: null,
        [TextStyle_letterSpacing]: null,
        [TextStyle_fontStyle]: null,
        [TextStyle_fontWeight]: null,
        [TextStyle_fontSize]: null,
        [TextStyle__package]: null,
        [TextStyle__fontFamilyFallback]: null,
        [TextStyle_fontFamily]: null,
        [TextStyle_backgroundColor]: null,
        [TextStyle_color]: C15 || CT.C15,
        [TextStyle_inherit]: true
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 7,
        [_Location_line]: 343,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 342,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 15,
        [_Location_line]: 438,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 15,
        [_Location_line]: 439,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 437,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 13,
        [_Location_line]: 430,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 13,
        [_Location_line]: 431,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 13,
        [_Location_line]: 435,
        [_Location_file]: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 13,
        [_Location_line]: 436,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 437,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34, C35 || CT.C35], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 33,
        [_Location_line]: 429,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 29,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C37 || CT.C37,
        [_Location_name]: null,
        [_Location_column]: 20,
        [_Location_line]: 445,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 13,
        [_Location_line]: 445,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 13,
        [_Location_line]: 446,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C40 || CT.C40,
        [_Location_name]: null,
        [_Location_column]: 43,
        [_Location_line]: 444,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "url",
        [_Location_column]: 17,
        [_Location_line]: 593,
        [_Location_file]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 594,
        [_Location_file]: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLinkTap",
        [_Location_column]: 17,
        [_Location_line]: 596,
        [_Location_file]: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 17,
        [_Location_line]: 597,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C44 || CT.C44,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 592,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 35,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C50 || CT.C50,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 617,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 19,
        [_Location_line]: 614,
        [_Location_file]: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 19,
        [_Location_line]: 615,
        [_Location_file]: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 617,
        [_Location_file]: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C53 || CT.C53,
        [_Location_name]: null,
        [_Location_column]: 42,
        [_Location_line]: 613,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 639,
        [_Location_file]: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 640,
        [_Location_file]: null
      });
    },
    get C58() {
      return C58 = dart.constList([C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C58 || CT.C58,
        [_Location_name]: null,
        [_Location_column]: 41,
        [_Location_line]: 638,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 17,
        [_Location_line]: 643,
        [_Location_file]: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 17,
        [_Location_line]: 644,
        [_Location_file]: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C62 || CT.C62,
        [_Location_name]: null,
        [_Location_column]: 44,
        [_Location_line]: 642,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 26,
        [_Location_line]: 664,
        [_Location_file]: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C66 || CT.C66,
        [_Location_name]: null,
        [_Location_column]: 17,
        [_Location_line]: 664,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 32,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 62,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70, C71 || CT.C71], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C69 || CT.C69,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 667,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "flex",
        [_Location_column]: 15,
        [_Location_line]: 666,
        [_Location_file]: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 667,
        [_Location_file]: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C73 || CT.C73,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 665,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 675,
        [_Location_file]: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 676,
        [_Location_file]: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78, C79 || CT.C79], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C77 || CT.C77,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 674,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "crossAxisAlignment",
        [_Location_column]: 15,
        [_Location_line]: 686,
        [_Location_file]: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "children",
        [_Location_column]: 15,
        [_Location_line]: 687,
        [_Location_file]: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C81 || CT.C81,
        [_Location_name]: null,
        [_Location_column]: 23,
        [_Location_line]: 685,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 692,
        [_Location_file]: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textScaleFactor",
        [_Location_column]: 17,
        [_Location_line]: 693,
        [_Location_file]: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 17,
        [_Location_line]: 694,
        [_Location_file]: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C85 || CT.C85,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 691,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 32,
        [_Location_line]: 696,
        [_Location_file]: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 62,
        [_Location_line]: 696,
        [_Location_file]: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C90 || CT.C90,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 696,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 696,
        [_Location_file]: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C94 || CT.C94,
        [_Location_name]: null,
        [_Location_column]: 29,
        [_Location_line]: 695,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 30,
        [_Location_line]: 743,
        [_Location_file]: null
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 43,
        [_Location_line]: 743,
        [_Location_file]: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98, C99 || CT.C99], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C97 || CT.C97,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 743,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C101() {
      return C101 = dart.constList([], widget_inspector._Location);
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 764,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 15,
        [_Location_line]: 768,
        [_Location_file]: null
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 15,
        [_Location_line]: 769,
        [_Location_file]: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 770,
        [_Location_file]: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104, C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C103 || CT.C103,
        [_Location_name]: null,
        [_Location_column]: 45,
        [_Location_line]: 767,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bytes",
        [_Location_column]: 30,
        [_Location_line]: 798,
        [_Location_file]: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 800,
        [_Location_file]: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 801,
        [_Location_file]: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 23,
        [_Location_line]: 802,
        [_Location_file]: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "matchTextDirection",
        [_Location_column]: 23,
        [_Location_line]: 803,
        [_Location_file]: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerSlice",
        [_Location_column]: 23,
        [_Location_line]: 805,
        [_Location_file]: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "filterQuality",
        [_Location_column]: 23,
        [_Location_line]: 806,
        [_Location_file]: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 808,
        [_Location_file]: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colorBlendMode",
        [_Location_column]: 23,
        [_Location_line]: 809,
        [_Location_file]: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 810,
        [_Location_file]: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 811,
        [_Location_file]: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "repeat",
        [_Location_column]: 23,
        [_Location_line]: 812,
        [_Location_file]: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 23,
        [_Location_line]: 813,
        [_Location_file]: null
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "excludeFromSemantics",
        [_Location_column]: 23,
        [_Location_line]: 814,
        [_Location_file]: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111, C112 || CT.C112, C113 || CT.C113, C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121, C122 || CT.C122], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C108 || CT.C108,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 797,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 797,
        [_Location_file]: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 819,
        [_Location_file]: null
      });
    },
    get C124() {
      return C124 = dart.constList([C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C123() {
      return C123 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C124 || CT.C124,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 796,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 31,
        [_Location_line]: 838,
        [_Location_file]: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 31,
        [_Location_line]: 839,
        [_Location_file]: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C128 || CT.C128,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 837,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 837,
        [_Location_file]: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 29,
        [_Location_line]: 844,
        [_Location_file]: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C132 || CT.C132,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 836,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C101 || CT.C101,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 850,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "src",
        [_Location_column]: 38,
        [_Location_line]: 833,
        [_Location_file]: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "frameBuilder",
        [_Location_column]: 23,
        [_Location_line]: 834,
        [_Location_file]: null
      });
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 852,
        [_Location_file]: null
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 23,
        [_Location_line]: 853,
        [_Location_file]: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scale",
        [_Location_column]: 23,
        [_Location_line]: 854,
        [_Location_file]: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "matchTextDirection",
        [_Location_column]: 23,
        [_Location_line]: 855,
        [_Location_file]: null
      });
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "centerSlice",
        [_Location_column]: 23,
        [_Location_line]: 857,
        [_Location_file]: null
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "filterQuality",
        [_Location_column]: 23,
        [_Location_line]: 858,
        [_Location_file]: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "alignment",
        [_Location_column]: 23,
        [_Location_line]: 860,
        [_Location_file]: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "colorBlendMode",
        [_Location_column]: 23,
        [_Location_line]: 861,
        [_Location_file]: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "fit",
        [_Location_column]: 23,
        [_Location_line]: 862,
        [_Location_file]: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 23,
        [_Location_line]: 863,
        [_Location_file]: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "repeat",
        [_Location_column]: 23,
        [_Location_line]: 864,
        [_Location_file]: null
      });
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "semanticLabel",
        [_Location_column]: 23,
        [_Location_line]: 865,
        [_Location_file]: null
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "excludeFromSemantics",
        [_Location_column]: 23,
        [_Location_line]: 866,
        [_Location_file]: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139, C140 || CT.C140, C141 || CT.C141, C142 || CT.C142, C143 || CT.C143, C144 || CT.C144, C145 || CT.C145, C146 || CT.C146, C147 || CT.C147, C148 || CT.C148, C149 || CT.C149, C150 || CT.C150, C151 || CT.C151, C152 || CT.C152], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C137 || CT.C137,
        [_Location_name]: null,
        [_Location_column]: 34,
        [_Location_line]: 832,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 21,
        [_Location_line]: 832,
        [_Location_file]: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onTap",
        [_Location_column]: 21,
        [_Location_line]: 871,
        [_Location_file]: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C154 || CT.C154,
        [_Location_name]: null,
        [_Location_column]: 51,
        [_Location_line]: 831,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 17,
        [_Location_line]: 894,
        [_Location_file]: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C158 || CT.C158,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 893,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 15,
        [_Location_line]: 890,
        [_Location_file]: null
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 891,
        [_Location_file]: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 893,
        [_Location_file]: null
      });
    },
    get C161() {
      return C161 = dart.constList([C162 || CT.C162, C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C161 || CT.C161,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 889,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "textAlign",
        [_Location_column]: 17,
        [_Location_line]: 973,
        [_Location_file]: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "text",
        [_Location_column]: 17,
        [_Location_line]: 974,
        [_Location_file]: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C166 || CT.C166,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 972,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 15,
        [_Location_line]: 962,
        [_Location_file]: null
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "margin",
        [_Location_column]: 15,
        [_Location_line]: 963,
        [_Location_file]: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 15,
        [_Location_line]: 970,
        [_Location_file]: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 15,
        [_Location_line]: 971,
        [_Location_file]: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 15,
        [_Location_line]: 972,
        [_Location_file]: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171, C172 || CT.C172, C173 || CT.C173, C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C170 || CT.C170,
        [_Location_name]: null,
        [_Location_column]: 35,
        [_Location_line]: 961,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/rich_text_parser.dart"
      });
    },
    get C176() {
      return C176 = dart.constList(["b", "i", "address", "cite", "var", "em", "strong", "kbd", "samp", "tt", "code", "ins", "u", "small", "abbr", "acronym", "mark", "ol", "ul", "blockquote", "del", "s", "strike", "ruby", "rp", "rt", "bdi", "data", "time", "span", "big", "sub"], core.String);
    },
    get C177() {
      return C177 = dart.constList(["a", "br", "table", "tbody", "caption", "td", "tfoot", "th", "thead", "tr", "q"], core.String);
    },
    get C178() {
      return C178 = dart.constList(["article", "aside", "body", "center", "dd", "dfn", "div", "dl", "dt", "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "img", "li", "main", "nav", "noscript", "p", "pre", "section", "flutter_widget"], core.String);
    }
  });
  const LinkTextSpan_url = dart.privateName(rich_text_parser, "LinkTextSpan.url");
  rich_text_parser.LinkTextSpan = class LinkTextSpan extends text_span.TextSpan {
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
  };
  (rich_text_parser.LinkTextSpan.new = function(opts) {
    let t0, t0$;
    let style = opts && 'style' in opts ? opts.style : null;
    let url = opts && 'url' in opts ? opts.url : null;
    let text = opts && 'text' in opts ? opts.text : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let children = opts && 'children' in opts ? opts.children : null;
    this[url$] = url;
    rich_text_parser.LinkTextSpan.__proto__.new.call(this, {style: style, text: text, children: (t0 = children, t0 == null ? JSArrayOfTextSpan().of([]) : t0), recognizer: (t0$ = new tap.TapGestureRecognizer.new(), t0$.onTap = dart.fn(() => {
        let t1;
        t1 = onLinkTap;
        t1 == null ? null : t1(url);
      }, VoidToNull()), t0$)});
    ;
  }).prototype = rich_text_parser.LinkTextSpan.prototype;
  dart.addTypeTests(rich_text_parser.LinkTextSpan);
  const url$ = LinkTextSpan_url;
  dart.setLibraryUri(rich_text_parser.LinkTextSpan, "package:flutter_html/rich_text_parser.dart");
  dart.setFieldSignature(rich_text_parser.LinkTextSpan, () => ({
    __proto__: dart.getFields(rich_text_parser.LinkTextSpan.__proto__),
    url: dart.finalFieldType(core.String)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  const LinkBlock_children = dart.privateName(rich_text_parser, "LinkBlock.children");
  rich_text_parser.LinkBlock = class LinkBlock extends container.Container {
    get children() {
      return this[children$];
    }
    set children(value) {
      super.children = value;
    }
  };
  (rich_text_parser.LinkBlock.new = function(opts) {
    let url = opts && 'url' in opts ? opts.url : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$] = children;
    rich_text_parser.LinkBlock.__proto__.new.call(this, {padding: padding, margin: margin, child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
          onLinkTap(url);
        }, VoidToNull()), child: new basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rich_text_parser.LinkBlock.prototype;
  dart.addTypeTests(rich_text_parser.LinkBlock);
  const children$ = LinkBlock_children;
  dart.setLibraryUri(rich_text_parser.LinkBlock, "package:flutter_html/rich_text_parser.dart");
  dart.setFieldSignature(rich_text_parser.LinkBlock, () => ({
    __proto__: dart.getFields(rich_text_parser.LinkBlock.__proto__),
    children: dart.finalFieldType(core.List$(framework.Widget))
  }));
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C8;
  let C7;
  const BlockText_child = dart.privateName(rich_text_parser, "BlockText.child");
  const BlockText_padding = dart.privateName(rich_text_parser, "BlockText.padding");
  const BlockText_margin = dart.privateName(rich_text_parser, "BlockText.margin");
  const BlockText_decoration = dart.privateName(rich_text_parser, "BlockText.decoration");
  const BlockText_shrinkToFit = dart.privateName(rich_text_parser, "BlockText.shrinkToFit");
  rich_text_parser.BlockText = class BlockText extends framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      super.margin = value;
    }
    get decoration() {
      return this[decoration$];
    }
    set decoration(value) {
      super.decoration = value;
    }
    get shrinkToFit() {
      return this[shrinkToFit$];
    }
    set shrinkToFit(value) {
      super.shrinkToFit = value;
    }
    build(context) {
      return new container.Container.new({width: dart.test(this.shrinkToFit) ? null : 1 / 0, padding: this.padding, margin: this.margin, decoration: this.decoration, child: this.child, $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (rich_text_parser.BlockText.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let shrinkToFit = opts && 'shrinkToFit' in opts ? opts.shrinkToFit : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let decoration = opts && 'decoration' in opts ? opts.decoration : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    this[shrinkToFit$] = shrinkToFit;
    this[padding$] = padding;
    this[margin$] = margin;
    this[decoration$] = decoration;
    rich_text_parser.BlockText.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rich_text_parser.BlockText.prototype;
  dart.addTypeTests(rich_text_parser.BlockText);
  const child$ = BlockText_child;
  const padding$ = BlockText_padding;
  const margin$ = BlockText_margin;
  const decoration$ = BlockText_decoration;
  const shrinkToFit$ = BlockText_shrinkToFit;
  dart.setMethodSignature(rich_text_parser.BlockText, () => ({
    __proto__: dart.getMethods(rich_text_parser.BlockText.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(rich_text_parser.BlockText, "package:flutter_html/rich_text_parser.dart");
  dart.setFieldSignature(rich_text_parser.BlockText, () => ({
    __proto__: dart.getFields(rich_text_parser.BlockText.__proto__),
    child: dart.finalFieldType(basic.RichText),
    padding: dart.finalFieldType(edge_insets.EdgeInsets),
    margin: dart.finalFieldType(edge_insets.EdgeInsets),
    decoration: dart.finalFieldType(decoration.Decoration),
    shrinkToFit: dart.finalFieldType(core.bool)
  }));
  const ParseContext_rootWidgetList = dart.privateName(rich_text_parser, "ParseContext.rootWidgetList");
  const ParseContext_parentElement = dart.privateName(rich_text_parser, "ParseContext.parentElement");
  const ParseContext_indentLevel = dart.privateName(rich_text_parser, "ParseContext.indentLevel");
  const ParseContext_listCount = dart.privateName(rich_text_parser, "ParseContext.listCount");
  const ParseContext_listChar = dart.privateName(rich_text_parser, "ParseContext.listChar");
  const ParseContext_blockType = dart.privateName(rich_text_parser, "ParseContext.blockType");
  const ParseContext_condenseWhitespace = dart.privateName(rich_text_parser, "ParseContext.condenseWhitespace");
  const ParseContext_spansOnly = dart.privateName(rich_text_parser, "ParseContext.spansOnly");
  const ParseContext_inBlock = dart.privateName(rich_text_parser, "ParseContext.inBlock");
  const ParseContext_childStyle = dart.privateName(rich_text_parser, "ParseContext.childStyle");
  const ParseContext_routes = dart.privateName(rich_text_parser, "ParseContext.routes");
  rich_text_parser.ParseContext = class ParseContext extends core.Object {
    get rootWidgetList() {
      return this[rootWidgetList$];
    }
    set rootWidgetList(value) {
      this[rootWidgetList$] = value;
    }
    get parentElement() {
      return this[parentElement$];
    }
    set parentElement(value) {
      this[parentElement$] = value;
    }
    get indentLevel() {
      return this[indentLevel$];
    }
    set indentLevel(value) {
      this[indentLevel$] = value;
    }
    get listCount() {
      return this[listCount$];
    }
    set listCount(value) {
      this[listCount$] = value;
    }
    get listChar() {
      return this[listChar$];
    }
    set listChar(value) {
      this[listChar$] = value;
    }
    get blockType() {
      return this[blockType$];
    }
    set blockType(value) {
      this[blockType$] = value;
    }
    get condenseWhitespace() {
      return this[condenseWhitespace$];
    }
    set condenseWhitespace(value) {
      this[condenseWhitespace$] = value;
    }
    get spansOnly() {
      return this[spansOnly$];
    }
    set spansOnly(value) {
      this[spansOnly$] = value;
    }
    get inBlock() {
      return this[inBlock$];
    }
    set inBlock(value) {
      this[inBlock$] = value;
    }
    get childStyle() {
      return this[childStyle$];
    }
    set childStyle(value) {
      this[childStyle$] = value;
    }
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      this[routes$] = value;
    }
  };
  (rich_text_parser.ParseContext.new = function(opts) {
    let t0;
    let rootWidgetList = opts && 'rootWidgetList' in opts ? opts.rootWidgetList : null;
    let parentElement = opts && 'parentElement' in opts ? opts.parentElement : null;
    let indentLevel = opts && 'indentLevel' in opts ? opts.indentLevel : 0;
    let listCount = opts && 'listCount' in opts ? opts.listCount : 0;
    let listChar = opts && 'listChar' in opts ? opts.listChar : "•";
    let blockType = opts && 'blockType' in opts ? opts.blockType : null;
    let condenseWhitespace = opts && 'condenseWhitespace' in opts ? opts.condenseWhitespace : true;
    let spansOnly = opts && 'spansOnly' in opts ? opts.spansOnly : false;
    let inBlock = opts && 'inBlock' in opts ? opts.inBlock : false;
    let childStyle = opts && 'childStyle' in opts ? opts.childStyle : null;
    let routes = opts && 'routes' in opts ? opts.routes : null;
    this[indentLevel$] = 0;
    this[listCount$] = 0;
    this[listChar$] = "•";
    this[condenseWhitespace$] = true;
    this[spansOnly$] = false;
    this[inBlock$] = false;
    this[rootWidgetList$] = rootWidgetList;
    this[parentElement$] = parentElement;
    this[indentLevel$] = indentLevel;
    this[listCount$] = listCount;
    this[listChar$] = listChar;
    this[blockType$] = blockType;
    this[condenseWhitespace$] = condenseWhitespace;
    this[spansOnly$] = spansOnly;
    this[inBlock$] = inBlock;
    this[childStyle$] = childStyle;
    this[routes$] = routes;
    this.childStyle = (t0 = this.childStyle, t0 == null ? new text_style.TextStyle.new() : t0);
  }).prototype = rich_text_parser.ParseContext.prototype;
  (rich_text_parser.ParseContext.fromContext = function(parseContext) {
    let t0;
    this[indentLevel$] = 0;
    this[listCount$] = 0;
    this[listChar$] = "•";
    this[condenseWhitespace$] = true;
    this[spansOnly$] = false;
    this[inBlock$] = false;
    this[routes$] = null;
    this[childStyle$] = null;
    this[blockType$] = null;
    this[parentElement$] = null;
    this[rootWidgetList$] = null;
    this.rootWidgetList = parseContext.rootWidgetList;
    this.parentElement = parseContext.parentElement;
    this.indentLevel = parseContext.indentLevel;
    this.listCount = parseContext.listCount;
    this.listChar = parseContext.listChar;
    this.blockType = parseContext.blockType;
    this.condenseWhitespace = parseContext.condenseWhitespace;
    this.spansOnly = parseContext.spansOnly;
    this.inBlock = parseContext.inBlock;
    this.childStyle = (t0 = parseContext.childStyle, t0 == null ? new text_style.TextStyle.new() : t0);
    this.routes = parseContext.routes;
  }).prototype = rich_text_parser.ParseContext.prototype;
  dart.addTypeTests(rich_text_parser.ParseContext);
  const rootWidgetList$ = ParseContext_rootWidgetList;
  const parentElement$ = ParseContext_parentElement;
  const indentLevel$ = ParseContext_indentLevel;
  const listCount$ = ParseContext_listCount;
  const listChar$ = ParseContext_listChar;
  const blockType$ = ParseContext_blockType;
  const condenseWhitespace$ = ParseContext_condenseWhitespace;
  const spansOnly$ = ParseContext_spansOnly;
  const inBlock$ = ParseContext_inBlock;
  const childStyle$ = ParseContext_childStyle;
  const routes$ = ParseContext_routes;
  dart.setLibraryUri(rich_text_parser.ParseContext, "package:flutter_html/rich_text_parser.dart");
  dart.setFieldSignature(rich_text_parser.ParseContext, () => ({
    __proto__: dart.getFields(rich_text_parser.ParseContext.__proto__),
    rootWidgetList: dart.fieldType(core.List$(framework.Widget)),
    parentElement: dart.fieldType(dart.dynamic),
    indentLevel: dart.fieldType(core.int),
    listCount: dart.fieldType(core.int),
    listChar: dart.fieldType(core.String),
    blockType: dart.fieldType(core.String),
    condenseWhitespace: dart.fieldType(core.bool),
    spansOnly: dart.fieldType(core.bool),
    inBlock: dart.fieldType(core.bool),
    childStyle: dart.fieldType(text_style.TextStyle),
    routes: dart.fieldType(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])))
  }));
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const Color__value = dart.privateName(ui, "Color._value");
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C15;
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  let C21;
  const TextStyle_decoration = dart.privateName(text_style, "TextStyle.decoration");
  const TextStyle_background = dart.privateName(text_style, "TextStyle.background");
  const TextStyle_foreground = dart.privateName(text_style, "TextStyle.foreground");
  const TextStyle_locale = dart.privateName(text_style, "TextStyle.locale");
  const TextStyle_height = dart.privateName(text_style, "TextStyle.height");
  const TextStyle_textBaseline = dart.privateName(text_style, "TextStyle.textBaseline");
  const TextStyle_wordSpacing = dart.privateName(text_style, "TextStyle.wordSpacing");
  const TextStyle_letterSpacing = dart.privateName(text_style, "TextStyle.letterSpacing");
  const TextStyle_fontStyle = dart.privateName(text_style, "TextStyle.fontStyle");
  const TextStyle_fontWeight = dart.privateName(text_style, "TextStyle.fontWeight");
  const TextStyle_fontSize = dart.privateName(text_style, "TextStyle.fontSize");
  const TextStyle__package = dart.privateName(text_style, "TextStyle._package");
  const TextStyle__fontFamilyFallback = dart.privateName(text_style, "TextStyle._fontFamilyFallback");
  const TextStyle_fontFamily = dart.privateName(text_style, "TextStyle.fontFamily");
  const TextStyle_backgroundColor = dart.privateName(text_style, "TextStyle.backgroundColor");
  const TextStyle_color = dart.privateName(text_style, "TextStyle.color");
  const TextStyle_inherit = dart.privateName(text_style, "TextStyle.inherit");
  let C14;
  const _hasBlockChild = dart.privateName(rich_text_parser, "_hasBlockChild");
  const _parseNode = dart.privateName(rich_text_parser, "_parseNode");
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C30;
  let C29;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C46;
  let C47;
  let C48;
  let C44;
  let C43;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C56;
  let C53;
  let C52;
  let C59;
  let C60;
  let C58;
  let C57;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C66;
  let C65;
  let C70;
  let C71;
  let C69;
  let C68;
  let C74;
  let C75;
  let C73;
  let C72;
  let C78;
  let C79;
  let C77;
  let C76;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C87;
  let C88;
  let C85;
  let C84;
  let C91;
  let C92;
  let C90;
  let C89;
  let C95;
  let C94;
  let C93;
  let C98;
  let C99;
  let C97;
  let C96;
  let C101;
  let C100;
  let C104;
  let C105;
  let C106;
  let C103;
  let C102;
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
  let C108;
  let C107;
  let C125;
  let C126;
  let C124;
  let C123;
  let C129;
  let C130;
  let C128;
  let C127;
  let C133;
  let C134;
  let C132;
  let C131;
  let C135;
  let C138;
  let C139;
  let C140;
  let C141;
  let C142;
  let C143;
  let C144;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C150;
  let C151;
  let C152;
  let C137;
  let C136;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C158;
  let C157;
  let C162;
  let C163;
  let C164;
  let C161;
  let C160;
  let C167;
  let C168;
  let C166;
  let C165;
  let C171;
  let C172;
  let C173;
  let C174;
  let C175;
  let C170;
  let C169;
  const HtmlRichTextParser_indentSize = dart.privateName(rich_text_parser, "HtmlRichTextParser.indentSize");
  const HtmlRichTextParser_shrinkToFit = dart.privateName(rich_text_parser, "HtmlRichTextParser.shrinkToFit");
  const HtmlRichTextParser_onLinkTap = dart.privateName(rich_text_parser, "HtmlRichTextParser.onLinkTap");
  const HtmlRichTextParser_renderNewlines = dart.privateName(rich_text_parser, "HtmlRichTextParser.renderNewlines");
  const HtmlRichTextParser_html = dart.privateName(rich_text_parser, "HtmlRichTextParser.html");
  const HtmlRichTextParser_customEdgeInsets = dart.privateName(rich_text_parser, "HtmlRichTextParser.customEdgeInsets");
  const HtmlRichTextParser_customTextStyle = dart.privateName(rich_text_parser, "HtmlRichTextParser.customTextStyle");
  const HtmlRichTextParser_customTextAlign = dart.privateName(rich_text_parser, "HtmlRichTextParser.customTextAlign");
  const HtmlRichTextParser_onImageError = dart.privateName(rich_text_parser, "HtmlRichTextParser.onImageError");
  const HtmlRichTextParser_linkStyle = dart.privateName(rich_text_parser, "HtmlRichTextParser.linkStyle");
  const HtmlRichTextParser_imageProperties = dart.privateName(rich_text_parser, "HtmlRichTextParser.imageProperties");
  const HtmlRichTextParser_onImageTap = dart.privateName(rich_text_parser, "HtmlRichTextParser.onImageTap");
  const HtmlRichTextParser_showImages = dart.privateName(rich_text_parser, "HtmlRichTextParser.showImages");
  const HtmlRichTextParser_routes = dart.privateName(rich_text_parser, "HtmlRichTextParser.routes");
  let C176;
  let C177;
  let C178;
  rich_text_parser.HtmlRichTextParser = class HtmlRichTextParser extends framework.StatelessWidget {
    get indentSize() {
      return this[indentSize];
    }
    set indentSize(value) {
      super.indentSize = value;
    }
    get shrinkToFit() {
      return this[shrinkToFit$0];
    }
    set shrinkToFit(value) {
      super.shrinkToFit = value;
    }
    get onLinkTap() {
      return this[onLinkTap$];
    }
    set onLinkTap(value) {
      super.onLinkTap = value;
    }
    get renderNewlines() {
      return this[renderNewlines$];
    }
    set renderNewlines(value) {
      super.renderNewlines = value;
    }
    get html() {
      return this[html$];
    }
    set html(value) {
      super.html = value;
    }
    get customEdgeInsets() {
      return this[customEdgeInsets$];
    }
    set customEdgeInsets(value) {
      super.customEdgeInsets = value;
    }
    get customTextStyle() {
      return this[customTextStyle$];
    }
    set customTextStyle(value) {
      super.customTextStyle = value;
    }
    get customTextAlign() {
      return this[customTextAlign$];
    }
    set customTextAlign(value) {
      super.customTextAlign = value;
    }
    get onImageError() {
      return this[onImageError$];
    }
    set onImageError(value) {
      super.onImageError = value;
    }
    get linkStyle() {
      return this[linkStyle$];
    }
    set linkStyle(value) {
      super.linkStyle = value;
    }
    get imageProperties() {
      return this[imageProperties$];
    }
    set imageProperties(value) {
      super.imageProperties = value;
    }
    get onImageTap() {
      return this[onImageTap$];
    }
    set onImageTap(value) {
      super.onImageTap = value;
    }
    get showImages() {
      return this[showImages$];
    }
    set showImages(value) {
      super.showImages = value;
    }
    get routes() {
      return this[routes$0];
    }
    set routes(value) {
      super.routes = value;
    }
    static get _supportedElements() {
      let t0;
      t0 = [];
      t0[$addAll](rich_text_parser.HtmlRichTextParser._supportedStyleElements);
      t0[$addAll](rich_text_parser.HtmlRichTextParser._supportedSpecialtyElements);
      t0[$addAll](rich_text_parser.HtmlRichTextParser._supportedBlockElements);
      return t0;
    }
    [_hasBlockChild](node, opts) {
      let ignoreSelf = opts && 'ignoreSelf' in opts ? opts.ignoreSelf : true;
      let retval = false;
      if (dom.Element.is(node)) {
        if (dart.test(rich_text_parser.HtmlRichTextParser._supportedBlockElements[$contains](node.localName)) && !dart.test(ignoreSelf)) return true;
        node.nodes[$forEach](dart.fn(node => {
          if (dart.test(this[_hasBlockChild](node, {ignoreSelf: false}))) retval = true;
        }, NodeToNull()));
      }
      return retval;
    }
    build(context) {
      let data = this.html;
      if (dart.test(this.renderNewlines)) {
        data = data[$replaceAll]("\n", "<br />");
      }
      let document = parser.parse(data);
      let body = document.body;
      let widgetList = JSArrayOfWidget().of([]);
      let parseContext = new rich_text_parser.ParseContext.new({rootWidgetList: widgetList, childStyle: text$.DefaultTextStyle.of(context).style, routes: this.routes});
      this[_parseNode](body, parseContext, context);
      let children = JSArrayOfWidget().of([]);
      widgetList[$forEach](dart.fn(w => {
        if (rich_text_parser.BlockText.is(w)) {
          if (w.child.text == null) return;
          let childTextSpan = text_span.TextSpan._check(w.child.text);
          if ((childTextSpan.text == null || childTextSpan.text[$isEmpty]) && (childTextSpan.children == null || dart.test(childTextSpan.children[$isEmpty]))) return;
        } else if (rich_text_parser.LinkBlock.is(w)) {
          if (dart.test(w.children[$isEmpty])) return;
        } else if (rich_text_parser.LinkTextSpan.is(w)) {
          if (w.text[$isEmpty] && dart.test(w.children[$isEmpty])) return;
        }
        children[$add](framework.Widget._check(w));
      }, dynamicToNull()));
      return new basic.Column.new({children: children, $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
    [_parseNode](node, parseContext, buildContext) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14, t0$15, t0$16, t0$17, t0$18, t0$19, t0$20, t0$21, t0$22, t0$23, t0$24, t0$25, t0$26, t0$27, t0$28, t0$29, t0$30, t0$31, t0$32, t0$33, t0$34, t0$35, t0$36, t0$37, t0$38, t0$39, t0$40, t0$41, t0$42, t0$43, t0$44, t0$45, t0$46, t0$47, t0$48, t0$49, t0$50, t0$51, t0$52, t0$53;
      if (dom.Text.is(node)) {
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") === -1) {
          return;
        }
        let finalText = node.text;
        if (dart.test(parseContext.condenseWhitespace)) {
          finalText = this.condenseHtmlWhitespace(node.text);
          if (parseContext.parentElement == null)
            finalText = finalText[$trimLeft]();
          else if (text_span.TextSpan.is(parseContext.parentElement) || rich_text_parser.LinkTextSpan.is(parseContext.parentElement)) {
            let lastString = core.String._check((t0 = dart.dload(parseContext.parentElement, 'text'), t0 == null ? "" : t0));
            if (!dart.dtest(dart.dload(dart.dload(parseContext.parentElement, 'children'), 'isEmpty'))) {
              lastString = core.String._check((t0$ = dart.dload(dart.dload(dart.dload(parseContext.parentElement, 'children'), 'last'), 'text'), t0$ == null ? "" : t0$));
            }
            if (lastString[$endsWith](" ") || lastString[$endsWith]("\n")) {
              finalText = finalText[$trimLeft]();
            }
          }
        }
        if (finalText[$trim]()[$isEmpty] && finalText !== " ") return;
        let span = new text_span.TextSpan.new({text: finalText, children: JSArrayOfTextSpan().of([]), style: parseContext.childStyle});
        let treatLikeBlock = JSArrayOfString().of(["blockquote", "ul", "ol"])[$indexOf](parseContext.blockType) !== -1;
        if (parseContext.parentElement == null) {
          if (treatLikeBlock) {
            let decoration = null;
            if (parseContext.blockType === "blockquote") {
              decoration = new box_decoration.BoxDecoration.new({border: new box_border.Border.new({left: new borders.BorderSide.new({color: colors$.Colors.black38, width: 2.0})})});
              parseContext.childStyle = parseContext.childStyle.merge(new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic}));
            }
            let blockText = new rich_text_parser.BlockText.new({shrinkToFit: this.shrinkToFit, margin: new edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0, left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}), padding: new edge_insets.EdgeInsets.all(2.0), decoration: decoration, child: new basic.RichText.new({textAlign: ui.TextAlign.left, text: span, $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
            parseContext.rootWidgetList[$add](blockText);
          } else {
            parseContext.rootWidgetList[$add](new rich_text_parser.BlockText.new({child: new basic.RichText.new({text: span, $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), shrinkToFit: this.shrinkToFit, $creationLocationd_0dea112b090073317d4: C39 || CT.C39}));
          }
          parseContext.parentElement = span;
        } else if (rich_text_parser.LinkTextSpan.is(parseContext.parentElement)) {
          dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new rich_text_parser.LinkTextSpan.new({style: text_style.TextStyle._check(dart.dsend(dart.dload(parseContext.parentElement, 'style'), 'merge', [parseContext.childStyle])), url: core.String._check(dart.dload(parseContext.parentElement, 'url')), text: finalText, onLinkTap: StringTovoid()._check(this.onLinkTap)})]);
        } else if (!ListOfWidget().is(dart.dload(parseContext.parentElement, 'children'))) {
          dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [span]);
        } else {
        }
        return;
      } else if (dom.Element.is(node)) {
        if (!dart.dtest(dart.dsend(rich_text_parser.HtmlRichTextParser._supportedElements, 'contains', [node.localName]))) {
          return;
        }
        let nextContext = new rich_text_parser.ParseContext.fromContext(parseContext);
        if (dart.test(rich_text_parser.HtmlRichTextParser._supportedStyleElements[$contains](node.localName))) {
          let childStyle = (t0$0 = parseContext.childStyle, t0$0 == null ? new text_style.TextStyle.new() : t0$0);
          switch (node.localName) {
            case "b":
            case "strong":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontWeight: ui.FontWeight.bold}));
              break;
            }
            case "i":
            case "address":
            case "cite":
            case "var":
            case "em":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic}));
              break;
            }
            case "kbd":
            case "samp":
            case "tt":
            case "code":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontFamily: "monospace"}));
              break;
            }
            case "ins":
            case "u":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({decoration: ui.TextDecoration.underline}));
              break;
            }
            case "abbr":
            case "acronym":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({decoration: ui.TextDecoration.underline, decorationStyle: ui.TextDecorationStyle.dotted}));
              break;
            }
            case "big":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontSize: 20.0}));
              break;
            }
            case "small":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontSize: 10.0}));
              break;
            }
            case "mark":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({backgroundColor: colors$.Colors.yellow, color: colors$.Colors.black}));
              break;
            }
            case "sub":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({fontSize: dart.notNull(childStyle.fontSize) * 0.7}));
              break;
            }
            case "del":
            case "s":
            case "strike":
            {
              childStyle = childStyle.merge(new text_style.TextStyle.new({decoration: ui.TextDecoration.lineThrough}));
              break;
            }
            case "ol":
            {
              t0$1 = nextContext;
              t0$1.indentLevel = dart.notNull(t0$1.indentLevel) + 1;
              nextContext.listChar = "#";
              nextContext.listCount = 0;
              nextContext.blockType = "ol";
              break;
            }
            case "ul":
            {
              t0$2 = nextContext;
              t0$2.indentLevel = dart.notNull(t0$2.indentLevel) + 1;
              nextContext.listChar = "•";
              nextContext.listCount = 0;
              nextContext.blockType = "ul";
              break;
            }
            case "blockquote":
            {
              t0$3 = nextContext;
              t0$3.indentLevel = dart.notNull(t0$3.indentLevel) + 1;
              nextContext.blockType = "blockquote";
              break;
            }
            case "ruby":
            case "rt":
            case "rp":
            case "bdi":
            case "data":
            case "time":
            case "span":
            {
              break;
            }
          }
          if (this.customTextStyle != null) {
            let customStyle = this.customTextStyle(node, childStyle);
            if (customStyle != null) {
              childStyle = customStyle;
            }
          }
          nextContext.childStyle = childStyle;
        } else if (dart.test(rich_text_parser.HtmlRichTextParser._supportedSpecialtyElements[$contains](node.localName))) {
          switch (node.localName) {
            case "a":
            {
              let url = (t0$4 = node.attributes[$_get]("href"), t0$4 == null ? null : t0$4);
              if (dart.test(this[_hasBlockChild](node))) {
                let linkContainer = new rich_text_parser.LinkBlock.new({url: url, margin: new edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}), onLinkTap: StringTovoid()._check(this.onLinkTap), children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43});
                nextContext.parentElement = linkContainer;
                nextContext.rootWidgetList[$add](linkContainer);
              } else {
                let _linkStyle = parseContext.childStyle.merge(this.linkStyle);
                let span = new rich_text_parser.LinkTextSpan.new({style: _linkStyle, url: url, onLinkTap: StringTovoid()._check(this.onLinkTap), children: JSArrayOfTextSpan().of([])});
                if (text_span.TextSpan.is(parseContext.parentElement)) {
                  dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [span]);
                } else {
                  let blockElement = new rich_text_parser.BlockText.new({shrinkToFit: this.shrinkToFit, margin: new edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize), top: 10.0}), child: new basic.RichText.new({text: span, $creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
                  parseContext.rootWidgetList[$add](blockElement);
                  nextContext.inBlock = true;
                }
                nextContext.childStyle = this.linkStyle;
                nextContext.parentElement = span;
              }
              break;
            }
            case "br":
            {
              if (parseContext.parentElement != null && text_span.TextSpan.is(parseContext.parentElement)) {
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new text_span.TextSpan.new({text: "\n", children: JSArrayOfInlineSpan().of([])})]);
              }
              break;
            }
            case "table":
            {
              parseContext.parentElement = null;
              nextContext.parentElement = new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C57 || CT.C57});
              nextContext.rootWidgetList[$add](new container.Container.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 12.0}), child: framework.Widget._check(nextContext.parentElement), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}));
              break;
            }
            case "tbody":
            case "thead":
            case "tfoot":
            {
              break;
            }
            case "td":
            case "th":
            {
              let colspan = 1;
              if (node.attributes[$_get]("colspan") != null) {
                colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
              }
              nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontWeight: node.localName === "th" ? ui.FontWeight.bold : ui.FontWeight.normal}));
              let text = new basic.RichText.new({text: new text_span.TextSpan.new({text: "", children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
              let cell = new basic.Expanded.new({flex: colspan, child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(1.0), child: text, $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), $creationLocationd_0dea112b090073317d4: C72 || CT.C72});
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [cell]);
              nextContext.parentElement = text.text;
              break;
            }
            case "tr":
            {
              let row = new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C76 || CT.C76});
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [row]);
              nextContext.parentElement = row;
              break;
            }
            case "caption":
            {
              let row = new basic.Row.new({crossAxisAlignment: flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([]), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
              let text = new basic.RichText.new({textAlign: ui.TextAlign.center, textScaleFactor: 1.2, text: new text_span.TextSpan.new({text: "", children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
              let cell = new basic.Expanded.new({child: new container.Container.new({padding: new edge_insets.EdgeInsets.all(2.0), child: text, $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
              row.children[$add](cell);
              dart.dsend(dart.dload(nextContext.parentElement, 'children'), 'add', [row]);
              nextContext.parentElement = text.text;
              break;
            }
            case "q":
            {
              if (parseContext.parentElement != null && text_span.TextSpan.is(parseContext.parentElement)) {
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new text_span.TextSpan.new({text: "\"", children: JSArrayOfInlineSpan().of([])})]);
                let content = new text_span.TextSpan.new({text: "", children: JSArrayOfInlineSpan().of([])});
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [content]);
                dart.dsend(dart.dload(parseContext.parentElement, 'children'), 'add', [new text_span.TextSpan.new({text: "\"", children: JSArrayOfInlineSpan().of([])})]);
                nextContext.parentElement = content;
              }
              break;
            }
          }
          if (this.customTextStyle != null) {
            let customStyle = this.customTextStyle(node, nextContext.childStyle);
            if (customStyle != null) {
              nextContext.childStyle = customStyle;
            }
          }
        } else if (dart.test(rich_text_parser.HtmlRichTextParser._supportedBlockElements[$contains](node.localName))) {
          parseContext.parentElement = null;
          let textAlign = ui.TextAlign.left;
          if (this.customTextAlign != null) {
            textAlign = (t0$5 = this.customTextAlign(node), t0$5 == null ? textAlign : t0$5);
          }
          let _customEdgeInsets = null;
          if (this.customEdgeInsets != null) {
            _customEdgeInsets = this.customEdgeInsets(node);
          }
          let labelState = node.localName;
          SL0:
            while (true) {
              switch (labelState) {
                case "hr":
                {
                  parseContext.rootWidgetList[$add](new divider.Divider.new({height: 1.0, color: colors$.Colors.black38, $creationLocationd_0dea112b090073317d4: C96 || CT.C96}));
                  break SL0;
                }
                case "flutter_widget":
                {
                  let width = (t0$7 = (t0$6 = this.imageProperties, t0$6 == null ? null : t0$6.width), t0$7 == null ? node.attributes[$_get]("width") != null ? core.double.tryParse(node.attributes[$_get]("width")) : null : t0$7);
                  let height = (t0$9 = (t0$8 = this.imageProperties, t0$8 == null ? null : t0$8.height), t0$9 == null ? node.attributes[$_get]("height") != null ? core.double.tryParse(node.attributes[$_get]("height")) : null : t0$9);
                  let _child = null;
                  if (node.attributes[$_get]("src") != null) {
                    let _routes = parseContext.routes;
                    if (_routes != null) {
                      let _widget = _routes[$_get](node.attributes[$_get]("src"));
                      if (_widget != null) {
                        _child = _widget(buildContext);
                      }
                    }
                    if (_child == null) {
                      _child = new placeholder.Placeholder.new({$creationLocationd_0dea112b090073317d4: C100 || CT.C100});
                    }
                  }
                  parseContext.rootWidgetList[$add](new container.Container.new({width: width, height: height, child: _child, $creationLocationd_0dea112b090073317d4: C102 || CT.C102}));
                  break SL0;
                }
                case "img":
                {
                  if (dart.test(this.showImages)) {
                    if (node.attributes[$_get]("src") != null) {
                      let width = (t0$11 = (t0$10 = this.imageProperties, t0$10 == null ? null : t0$10.width), t0$11 == null ? node.attributes[$_get]("width") != null ? core.double.tryParse(node.attributes[$_get]("width")) : null : t0$11);
                      let height = (t0$13 = (t0$12 = this.imageProperties, t0$12 == null ? null : t0$12.height), t0$13 == null ? node.attributes[$_get]("height") != null ? core.double.tryParse(node.attributes[$_get]("height")) : null : t0$13);
                      if (node.attributes[$_get]("src")[$startsWith]("data:image") && node.attributes[$_get]("src")[$contains]("base64,")) {
                        image.precacheImage(new image_provider.MemoryImage.new(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]())), buildContext, {onError: (t0$14 = this.onImageError, t0$14 == null ? dart.fn((_, __) => {
                          }, dynamicAndStackTraceToNull()) : t0$14)});
                        parseContext.rootWidgetList[$add](new gesture_detector.GestureDetector.new({child: new image.Image.memory(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]()), {width: dart.notNull((t0$15 = width, t0$15 == null ? -1.0 : t0$15)) > 0 ? width : null, height: dart.notNull((t0$16 = height, t0$16 == null ? -1.0 : t0$16)) > 0 ? width : null, scale: (t0$18 = (t0$17 = this.imageProperties, t0$17 == null ? null : t0$17.scale), t0$18 == null ? 1.0 : t0$18), matchTextDirection: (t0$20 = (t0$19 = this.imageProperties, t0$19 == null ? null : t0$19.matchTextDirection), t0$20 == null ? false : t0$20), centerSlice: (t0$21 = this.imageProperties, t0$21 == null ? null : t0$21.centerSlice), filterQuality: (t0$23 = (t0$22 = this.imageProperties, t0$22 == null ? null : t0$22.filterQuality), t0$23 == null ? ui.FilterQuality.low : t0$23), alignment: (t0$25 = (t0$24 = this.imageProperties, t0$24 == null ? null : t0$24.alignment), t0$25 == null ? alignment.Alignment.center : t0$25), colorBlendMode: (t0$26 = this.imageProperties, t0$26 == null ? null : t0$26.colorBlendMode), fit: (t0$27 = this.imageProperties, t0$27 == null ? null : t0$27.fit), color: (t0$28 = this.imageProperties, t0$28 == null ? null : t0$28.color), repeat: (t0$30 = (t0$29 = this.imageProperties, t0$29 == null ? null : t0$29.repeat), t0$30 == null ? decoration_image.ImageRepeat.noRepeat : t0$30), semanticLabel: (t0$31 = this.imageProperties, t0$31 == null ? null : t0$31.semanticLabel), excludeFromSemantics: (t0$32 = this.imageProperties, t0$32 == null ? null : t0$32.semanticLabel) == null ? true : false, $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), onTap: dart.fn(() => {
                            if (this.onImageTap != null) {
                              this.onImageTap(node.attributes[$_get]("src"));
                            }
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C123 || CT.C123}));
                      } else {
                        image.precacheImage(new _network_image_web.NetworkImage.new(node.attributes[$_get]("src")), buildContext, {onError: (t0$33 = this.onImageError, t0$33 == null ? dart.fn((_, __) => {
                          }, dynamicAndStackTraceToNull()) : t0$33)});
                        parseContext.rootWidgetList[$add](new gesture_detector.GestureDetector.new({child: new image.Image.network(node.attributes[$_get]("src"), {frameBuilder: dart.fn((context, child, frame, _) => {
                              if (node.attributes[$_get]("alt") != null && frame == null) {
                                return new rich_text_parser.BlockText.new({child: new basic.RichText.new({textAlign: ui.TextAlign.center, text: new text_span.TextSpan.new({text: node.attributes[$_get]("alt"), style: nextContext.childStyle}), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), shrinkToFit: this.shrinkToFit, $creationLocationd_0dea112b090073317d4: C131 || CT.C131});
                              }
                              if (frame != null) {
                                return child;
                              }
                              return new container.Container.new({$creationLocationd_0dea112b090073317d4: C135 || CT.C135});
                            }, BuildContextAndWidgetAndint__ToWidget()), width: dart.notNull((t0$34 = width, t0$34 == null ? -1.0 : t0$34)) > 0 ? width : null, height: dart.notNull((t0$35 = height, t0$35 == null ? -1.0 : t0$35)) > 0 ? height : null, scale: (t0$37 = (t0$36 = this.imageProperties, t0$36 == null ? null : t0$36.scale), t0$37 == null ? 1.0 : t0$37), matchTextDirection: (t0$39 = (t0$38 = this.imageProperties, t0$38 == null ? null : t0$38.matchTextDirection), t0$39 == null ? false : t0$39), centerSlice: (t0$40 = this.imageProperties, t0$40 == null ? null : t0$40.centerSlice), filterQuality: (t0$42 = (t0$41 = this.imageProperties, t0$41 == null ? null : t0$41.filterQuality), t0$42 == null ? ui.FilterQuality.low : t0$42), alignment: (t0$44 = (t0$43 = this.imageProperties, t0$43 == null ? null : t0$43.alignment), t0$44 == null ? alignment.Alignment.center : t0$44), colorBlendMode: (t0$45 = this.imageProperties, t0$45 == null ? null : t0$45.colorBlendMode), fit: (t0$46 = this.imageProperties, t0$46 == null ? null : t0$46.fit), color: (t0$47 = this.imageProperties, t0$47 == null ? null : t0$47.color), repeat: (t0$49 = (t0$48 = this.imageProperties, t0$48 == null ? null : t0$48.repeat), t0$49 == null ? decoration_image.ImageRepeat.noRepeat : t0$49), semanticLabel: (t0$50 = this.imageProperties, t0$50 == null ? null : t0$50.semanticLabel), excludeFromSemantics: (t0$51 = this.imageProperties, t0$51 == null ? null : t0$51.semanticLabel) == null ? true : false, $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), onTap: dart.fn(() => {
                            if (this.onImageTap != null) {
                              this.onImageTap(node.attributes[$_get]("src"));
                            }
                          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C153 || CT.C153}));
                      }
                    }
                  }
                  break SL0;
                }
                case "li":
                {
                  let leadingChar = parseContext.listChar;
                  if (parseContext.blockType === "ol") {
                    t0$52 = parseContext;
                    t0$52.listCount = dart.notNull(t0$52.listCount) + 1;
                    leadingChar = dart.toString(parseContext.listCount) + ".";
                  }
                  let blockText = new rich_text_parser.BlockText.new({shrinkToFit: this.shrinkToFit, margin: new edge_insets.EdgeInsets.only({left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize), top: 3.0}), child: new basic.RichText.new({text: new text_span.TextSpan.new({text: dart.str(leadingChar) + "  ", style: text$.DefaultTextStyle.of(buildContext).style, children: JSArrayOfTextSpan().of([new text_span.TextSpan.new({text: "", style: nextContext.childStyle})])}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), $creationLocationd_0dea112b090073317d4: C160 || CT.C160});
                  parseContext.rootWidgetList[$add](blockText);
                  nextContext.parentElement = blockText.child.text;
                  nextContext.spansOnly = true;
                  nextContext.inBlock = true;
                  break SL0;
                }
                case "h1":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 26.0, fontWeight: ui.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h2":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 24.0, fontWeight: ui.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h3":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 22.0, fontWeight: ui.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h4":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 20.0, fontWeight: ui.FontWeight.w100}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h5":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.bold}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "h6":
                {
                  nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontSize: 18.0, fontWeight: ui.FontWeight.w100}));
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "pre":
                {
                  nextContext.condenseWhitespace = false;
                  labelState = Symbol('_default');
                  continue SL0;
                }
                case "center":
                {
                  textAlign = ui.TextAlign.center;
                  labelState = Symbol('_default');
                  continue SL0;
                }
                default:
                {
                  let decoration = null;
                  if (parseContext.blockType === "blockquote") {
                    decoration = new box_decoration.BoxDecoration.new({border: new box_border.Border.new({left: new borders.BorderSide.new({color: colors$.Colors.black38, width: 2.0})})});
                    nextContext.childStyle = nextContext.childStyle.merge(new text_style.TextStyle.new({fontStyle: ui.FontStyle.italic}));
                  }
                  let blockText = new rich_text_parser.BlockText.new({shrinkToFit: this.shrinkToFit, margin: node.localName !== "body" ? (t0$53 = _customEdgeInsets, t0$53 == null ? new edge_insets.EdgeInsets.only({top: 8.0, bottom: 8.0, left: dart.notNull(parseContext.indentLevel) * dart.notNull(this.indentSize)}) : t0$53) : edge_insets.EdgeInsets.zero, padding: new edge_insets.EdgeInsets.all(2.0), decoration: decoration, child: new basic.RichText.new({textAlign: textAlign, text: new text_span.TextSpan.new({text: "", style: nextContext.childStyle, children: JSArrayOfTextSpan().of([])}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C169 || CT.C169});
                  parseContext.rootWidgetList[$add](blockText);
                  nextContext.parentElement = blockText.child.text;
                  nextContext.spansOnly = true;
                  nextContext.inBlock = true;
                  break SL0;
                }
              }
              break;
            }
          if (this.customTextStyle != null) {
            let customStyle = this.customTextStyle(node, nextContext.childStyle);
            if (customStyle != null) {
              nextContext.childStyle = customStyle;
            }
          }
        }
        node.nodes[$forEach](dart.fn(childNode => {
          this[_parseNode](childNode, nextContext, buildContext);
        }, NodeToNull()));
      }
    }
    condenseHtmlWhitespace(stringToTrim) {
      stringToTrim = stringToTrim[$replaceAll]("\n", " ");
      while (stringToTrim[$indexOf]("  ") !== -1) {
        stringToTrim = stringToTrim[$replaceAll]("  ", " ");
      }
      return stringToTrim;
    }
  };
  (rich_text_parser.HtmlRichTextParser.new = function(opts) {
    let routes = opts && 'routes' in opts ? opts.routes : null;
    let shrinkToFit = opts && 'shrinkToFit' in opts ? opts.shrinkToFit : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let html = opts && 'html' in opts ? opts.html : null;
    let customEdgeInsets = opts && 'customEdgeInsets' in opts ? opts.customEdgeInsets : null;
    let customTextStyle = opts && 'customTextStyle' in opts ? opts.customTextStyle : null;
    let customTextAlign = opts && 'customTextAlign' in opts ? opts.customTextAlign : null;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : C14 || CT.C14;
    let imageProperties = opts && 'imageProperties' in opts ? opts.imageProperties : null;
    let onImageTap = opts && 'onImageTap' in opts ? opts.onImageTap : null;
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[indentSize] = 10.0;
    this[routes$0] = routes;
    this[shrinkToFit$0] = shrinkToFit;
    this[onLinkTap$] = onLinkTap;
    this[renderNewlines$] = renderNewlines;
    this[html$] = html;
    this[customEdgeInsets$] = customEdgeInsets;
    this[customTextStyle$] = customTextStyle;
    this[customTextAlign$] = customTextAlign;
    this[onImageError$] = onImageError;
    this[linkStyle$] = linkStyle;
    this[imageProperties$] = imageProperties;
    this[onImageTap$] = onImageTap;
    this[showImages$] = showImages;
    rich_text_parser.HtmlRichTextParser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = rich_text_parser.HtmlRichTextParser.prototype;
  dart.addTypeTests(rich_text_parser.HtmlRichTextParser);
  const indentSize = HtmlRichTextParser_indentSize;
  const shrinkToFit$0 = HtmlRichTextParser_shrinkToFit;
  const onLinkTap$ = HtmlRichTextParser_onLinkTap;
  const renderNewlines$ = HtmlRichTextParser_renderNewlines;
  const html$ = HtmlRichTextParser_html;
  const customEdgeInsets$ = HtmlRichTextParser_customEdgeInsets;
  const customTextStyle$ = HtmlRichTextParser_customTextStyle;
  const customTextAlign$ = HtmlRichTextParser_customTextAlign;
  const onImageError$ = HtmlRichTextParser_onImageError;
  const linkStyle$ = HtmlRichTextParser_linkStyle;
  const imageProperties$ = HtmlRichTextParser_imageProperties;
  const onImageTap$ = HtmlRichTextParser_onImageTap;
  const showImages$ = HtmlRichTextParser_showImages;
  const routes$0 = HtmlRichTextParser_routes;
  dart.setMethodSignature(rich_text_parser.HtmlRichTextParser, () => ({
    __proto__: dart.getMethods(rich_text_parser.HtmlRichTextParser.__proto__),
    [_hasBlockChild]: dart.fnType(core.bool, [dom.Node], {ignoreSelf: core.bool}),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_parseNode]: dart.fnType(dart.void, [dom.Node, rich_text_parser.ParseContext, framework.BuildContext]),
    condenseHtmlWhitespace: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(rich_text_parser.HtmlRichTextParser, "package:flutter_html/rich_text_parser.dart");
  dart.setFieldSignature(rich_text_parser.HtmlRichTextParser, () => ({
    __proto__: dart.getFields(rich_text_parser.HtmlRichTextParser.__proto__),
    indentSize: dart.finalFieldType(core.double),
    shrinkToFit: dart.finalFieldType(core.bool),
    onLinkTap: dart.finalFieldType(dart.dynamic),
    renderNewlines: dart.finalFieldType(core.bool),
    html: dart.finalFieldType(core.String),
    customEdgeInsets: dart.finalFieldType(dart.fnType(edge_insets.EdgeInsets, [dom.Node])),
    customTextStyle: dart.finalFieldType(dart.fnType(text_style.TextStyle, [dom.Node, text_style.TextStyle])),
    customTextAlign: dart.finalFieldType(dart.fnType(ui.TextAlign, [dom.Element])),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(text_style.TextStyle),
    imageProperties: dart.finalFieldType(image_properties.ImageProperties),
    onImageTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    showImages: dart.finalFieldType(core.bool),
    routes: dart.finalFieldType(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])))
  }));
  dart.defineLazy(rich_text_parser.HtmlRichTextParser, {
    /*rich_text_parser.HtmlRichTextParser._supportedStyleElements*/get _supportedStyleElements() {
      return C176 || CT.C176;
    },
    /*rich_text_parser.HtmlRichTextParser._supportedSpecialtyElements*/get _supportedSpecialtyElements() {
      return C177 || CT.C177;
    },
    /*rich_text_parser.HtmlRichTextParser._supportedBlockElements*/get _supportedBlockElements() {
      return C178 || CT.C178;
    }
  });
  dart.defineLazy(rich_text_parser, {
    /*rich_text_parser.OFFSET_TAGS_FONT_SIZE_FACTOR*/get OFFSET_TAGS_FONT_SIZE_FACTOR() {
      return 0.7;
    }
  });
  dart.trackLibraries("packages/flutter_html/rich_text_parser", {
    "package:flutter_html/rich_text_parser.dart": rich_text_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["rich_text_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmCe;;;;;;;;;QAGE;QACN;QACE;QACG;QACK;IAHV;AAIH,mEACS,KAAK,QACN,IAAI,aACS,KAAT,QAAQ,QAAR,OAAsB,qDACpB,oCACR,YAAQ;;aACR,SAAS;qBAAT,OAAW,GAAK,GAAG;;;EAExB;;;;;;;;;;;;;;;;;;;;;;IAQY;;;;;;;;QAGV;QACI;QACA;QACD;QACL;;;AACF,kEACY,OAAO,UACR,MAAM,SACP,iDACE;UACL,AAAS,SAAA,CAAC,GAAG;iCAER,gCACK,QAAQ;;EAGvB;;;;;;;;;;;;;;;;;;;;;IAIQ;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;IACN;;;;;;UAWe;AACxB,YAAO,+CACE,oBAAc,uBACP,sBACD,yBACI,wBACV;IAEX;;;QAhBiB;QACA;QACV;QACA;QACA;;IAJU;IACA;IACV;IACA;IACA;AALP;;EAME;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAeW;;;;;;IACL;;;;;;IACJ;;;;;;IACA;;;;;;IACG;;;;;;IACA;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACK;;;;;;IACiB;;;;;;;;;QAGpB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACU;IArBb,qBAAc;IACd,mBAAY;IACT,kBAAW;IAEb,4BAAqB;IACrB,mBAAY;IACZ,iBAAU;IAKR;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACU;IAEf,mBAAwB,4BAAX,OAAc;EAC7B;wDAEsC;;IA1BlC,qBAAc;IACd,mBAAY;IACT,kBAAW;IAEb,4BAAqB;IACrB,mBAAY;IACZ,iBAAU;;;;;;IAqBb,sBAAiB,AAAa,YAAD;IAC7B,qBAAgB,AAAa,YAAD;IAC5B,mBAAc,AAAa,YAAD;IAC1B,iBAAY,AAAa,YAAD;IACxB,gBAAW,AAAa,YAAD;IACvB,iBAAY,AAAa,YAAD;IACxB,0BAAqB,AAAa,YAAD;IACjC,iBAAY,AAAa,YAAD;IACxB,eAAU,AAAa,YAAD;IACtB,mBAAqC,KAAxB,AAAa,YAAD,mBAAC,OAAc;IACxC,cAAS,AAAa,YAAD;EACvB;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwBa;;;;;;IAEF;;;;;;IACL;;;;;;IACK;;;;;;IACE;;;;;;IACU;;;;;;IACD;;;;;;IACA;;;;;;IACG;;;;;;IACT;;;;;;IACM;;;;;;IACL;;;;;;IACN;;;;;;IACsB;;;;;;;;AA8FA;MAC7B,YAAO;MACP,YAAO;MACP,YAAO;;IAAwB;qBAMN;UAAY;AAClC,mBAAS;AACd,UAAS,eAAL,IAAI;AACN,sBAAI,AAAwB,uEAAS,AAAK,IAAD,2BAAgB,UAAU,GACjE,MAAO;QACT,AAAK,AAAM,IAAP,iBAAe,QAAU;AAC3B,wBAAI,qBAAe,IAAI,eAAc,UAAQ,SAAS;;;AAG1D,YAAO,OAAM;IACf;UAK0B;AACjB,iBAAO;AAEd,oBAAI;QACF,OAAO,AAAK,IAAD,cAAY,MAAM;;AAElB,qBAAW,aAAa,IAAI;AAChC,iBAAO,AAAS,QAAD;AAEX,uBAAiB;AACjB,yBAAe,uDACV,UAAU,cACG,AAAY,0BAAT,OAAO,iBAC/B;MAIV,iBAAW,IAAI,EAAE,YAAY,EAAE,OAAO;AAGzB,qBAAW;MACxB,AAAW,UAAD,WAAS,QAAS;AAC1B,YAAM,8BAAF,CAAC;AACH,cAAI,AAAE,AAAM,AAAK,CAAZ,eAAe,MAAM;AACjB,wDAAgB,AAAE,AAAM,CAAP;AAC1B,eAAK,AAAc,AAAK,aAAN,SAAS,QAAQ,AAAc,AAAK,aAAN,qBAC3C,AAAc,AAAS,aAAV,aAAa,kBAAQ,AAAc,AAAS,aAAV,uBAClD;cACG,KAAM,8BAAF,CAAC;AACV,wBAAI,AAAE,AAAS,CAAV,sBAAmB;cACnB,KAAM,iCAAF,CAAC;AACV,cAAI,AAAE,AAAK,CAAN,6BAAiB,AAAE,AAAS,CAAV,sBAAmB;;QAE5C,AAAS,QAAD,+BAAK,CAAC;;AAGhB,YAAO,iCACK,QAAQ;IAEtB;iBAgBa,MAAmB,cAA2B;;AAGzD,UAAS,YAAL,IAAI;AAGN,YAAI,AAAK,AAAK,AAAO,IAAb,mBAAgB,MAAM,AAAK,AAAK,AAAa,IAAnB,gBAAc,SAAQ,CAAC;AACvD;;AAKK,wBAAY,AAAK,IAAD;AACvB,sBAAI,AAAa,YAAD;UACd,YAAY,4BAAuB,AAAK,IAAD;AAIvC,cAAI,AAAa,AAAc,YAAf,kBAAkB;YAChC,YAAY,AAAU,SAAD;cAClB,KAA+B,sBAA3B,AAAa,YAAD,mBACU,iCAA3B,AAAa,YAAD;AACP,iDAA6C,KAAL,WAA3B,AAAa,YAAD,+BAAe,OAAQ;AACvD,4BAAyC,WAAT,WAA3B,AAAa,YAAD;2BACf,oBAA2D,MAAL,WAAL,WAAT,WAA3B,AAAa,YAAD,sDAA6B,OAAQ;;AAEhE,gBAAI,AAAW,UAAD,YAAU,QAAQ,AAAW,UAAD,YAAU;cAClD,YAAY,AAAU,SAAD;;;;AAM3B,YAAI,AAAU,AAAO,SAAR,uBAAmB,SAAS,KAAI,KAAK;AAMzC,mBAAO,kCACN,SAAS,YACK,mCACb,AAAa,YAAD;AAOlB,6BACD,AAA2B,sBAA1B,cAAc,MAAM,iBAAc,AAAa,YAAD,gBAAe,CAAC;AAGnE,YAAI,AAAa,AAAc,YAAf,kBAAkB;AAIhC,cAAI,cAAc;AACL;AACX,gBAAI,AAAa,AAAU,YAAX,eAAc;cAC5B,aAAa,8CAEP,iCAAa,mCAAyB,+BAAgB;cAE5D,AAAa,YAAD,cAAc,AAAa,AAAW,YAAZ,kBAAkB,yCACjC;;AAGf,4BAAY,iDACP,0BACM,sCACV,aACG,WACuB,aAAzB,AAAa,YAAD,6BAAe,6BACjB,+BAAI,kBACZ,UAAU,SACf,mCACgB,yBACf,IAAI;YAGd,AAAa,AAAe,YAAhB,sBAAoB,SAAS;;YAEzC,AAAa,AAAe,YAAhB,sBAAoB,2CACvB,8BAAe,IAAI,wEACb;;UAKjB,AAAa,YAAD,iBAAiB,IAAI;cAG5B,KAA+B,iCAA3B,AAAa,YAAD;UAEe,WAAT,WAA3B,AAAa,YAAD,qCAA4B,0EAED,WAAN,WAA3B,AAAa,YAAD,oCAA2B,AAAa,YAAD,wCACvB,WAA3B,AAAa,YAAD,+BACX,SAAS,mCACJ;cAIR,MAA0C,kBAAT,WAA3B,AAAa,YAAD;UACa,WAAT,WAA3B,AAAa,YAAD,qCAA4B,IAAI;;;AAI9C;YAIG,KAAS,eAAL,IAAI;AACX,wBAAwB,WAAnB,qEAA4B,AAAK,IAAD;AACnC;;AAKW,0BAAkB,8CAAyB,YAAY;AAGpE,sBAAI,AAAwB,uEAAS,AAAK,IAAD;AAC7B,4BAAqC,OAAxB,AAAa,YAAD,qBAAC,OAAc;kBAE1C,AAAK,IAAD;;;;cAIR,aACI,AAAW,UAAD,OAAO,0CAAiC;AACtD;;;;;;;;cAMA,aACI,AAAW,UAAD,OAAO,yCAA+B;AACpD;;;;;;;cAKA,aAAa,AAAW,UAAD,OAAO,0CAAsB;AACpD;;;;;cAGA,aAAa,AACR,UADkB,OACZ,0CAAqC;AAChD;;;;;cAGA,aAAa,AAAW,UAAD,OAAO,0CACD,8CACU;AAEvC;;;;cAEA,aAAa,AAAW,UAAD,OAAO,wCAAoB;AAClD;;;;cAEA,aAAa,AAAW,UAAD,OAAO,wCAAoB;AAClD;;;;cAEA,aAAa,AAAW,UAAD,OACnB,+CAAkC,8BAAsB;AAC5D;;;;cAEA,aAAa,AAAW,UAAD,OACrB,wCACgC,aAApB,AAAW,UAAD;AAGxB;;;;;;cAIA,aAAa,AACR,UADkB,OACZ,0CAAqC;AAChD;;;;qBAEA,WAAW;cAAC,mBAAY,aAAZ,oBAAe;cAC3B,AAAY,WAAD,YAAY;cACvB,AAAY,WAAD,aAAa;cACxB,AAAY,WAAD,aAAa;AACxB;;;;qBAEA,WAAW;cAAC,mBAAY,aAAZ,oBAAe;cAC3B,AAAY,WAAD,YAAY;cACvB,AAAY,WAAD,aAAa;cACxB,AAAY,WAAD,aAAa;AACxB;;;;qBAEA,WAAW;cAAC,mBAAY,aAAZ,oBAAe;cAC3B,AAAY,WAAD,aAAa;AACxB;;;;;;;;;;AASA;;;AAGJ,cAAI,wBAAmB;AACL,8BAAc,qBAAgB,IAAI,EAAE,UAAU;AAC9D,gBAAI,WAAW,IAAI;cACjB,aAAa,WAAW;;;UAI5B,AAAY,WAAD,cAAc,UAAU;cAIhC,eAAI,AAA4B,2EAAS,AAAK,IAAD;kBAGxC,AAAK,IAAD;;;AAKD,yBAA8B,OAAxB,AAAK,AAAU,IAAX,mBAAY,iBAAD,OAAY;AAExC,4BAAI,qBAAe,IAAI;AACX,oCAAgB,yCACnB,GAAG,UACW,uCACgB,aAAzB,AAAa,YAAD,6BAAe,qDAC1B,2BACO;gBAEpB,AAAY,WAAD,iBAAiB,aAAa;gBACzC,AAAY,AAAe,WAAhB,sBAAoB,aAAa;;AAElC,iCAAa,AAAa,AAAW,YAAZ,kBAAkB;AACxC,2BAAO,8CACX,UAAU,OACZ,GAAG,mCACG,2BACS;AAEtB,oBAA+B,sBAA3B,AAAa,YAAD;kBACqB,WAAT,WAA1B,AAAY,WAAD,qCAA4B,IAAI;;AAGjC,qCAAe,iDACV,0BACM,uCACgB,aAAzB,AAAa,YAAD,6BAAe,uBAAiB,eAC/C,8BAAe,IAAI;kBAE5B,AAAa,AAAe,YAAhB,sBAAoB,YAAY;kBAC5C,AAAY,WAAD,WAAW;;gBAExB,AAAY,WAAD,cAAc;gBACzB,AAAY,WAAD,iBAAiB,IAAI;;AAElC;;;;AAGA,kBAAI,AAAa,YAAD,kBAAkB,QACH,sBAA3B,AAAa,YAAD;gBAET,WADsB,WAA3B,AAAa,YAAD,qCACH,kCAAe,gBAAgB;;AAE1C;;;;cAIA,AAAa,YAAD,iBAAiB;cAC7B,AAAY,WAAD,iBAAiB,0CACa,yCACrB;cAEpB,AAAY,AAAe,WAAhB,sBAAoB,qCACR,gDAAoB,uCAChC,AAAY,WAAD;AACtB;;;;;;AAMA;;;;;AAII,4BAAU;AACd,kBAAI,AAAK,AAAU,IAAX,mBAAY,cAAc;gBAChC,UAAc,kBAAS,AAAK,AAAU,IAAX,mBAAY;;cAEzC,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAAkB,0CACrC,AAAK,AAAU,IAAX,eAAc,OACd,qBACA;AACZ,yBACL,8BAAe,kCAAe,cAAwB;AACjD,yBAAO,8BACR,OAAO,SACN,sCAA8B,+BAAI,aAAa,IAAI;cAEzB,WAAT,WAA1B,AAAY,WAAD,qCAA4B,IAAI;cAC3C,AAAY,WAAD,iBAAiB,AAAK,IAAD;AAChC;;;;AAGI,wBAAM,uCAC+B,0CACrB;cAEe,WAAT,WAA1B,AAAY,WAAD,qCAA4B,GAAG;cAC1C,AAAY,WAAD,iBAAiB,GAAG;AAC/B;;;;AAKI,wBAAM,uCAC+B,0CACrB;AAIX,yBAAO,mCACS,sCACJ,WACX,kCAAe,cAAwB;AACxC,yBAAO,+BACP,sCAA8B,+BAAI,aAAa,IAAI;cAE5D,AAAI,AAAS,GAAV,gBAAc,IAAI;cACc,WAAT,WAA1B,AAAY,WAAD,qCAA4B,GAAG;cAC1C,AAAY,WAAD,iBAAiB,AAAK,IAAD;AAChC;;;;AAEA,kBAAI,AAAa,YAAD,kBAAkB,QACH,sBAA3B,AAAa,YAAD;gBAET,WADsB,WAA3B,AAAa,YAAD,qCACH,kCAAe,gBAAe;AAC9B,8BAAU,kCAAe,cAAc;gBACZ,WAAT,WAA3B,AAAa,YAAD,qCAA4B,OAAO;gBAE1C,WADsB,WAA3B,AAAa,YAAD,qCACH,kCAAe,gBAAe;gBACvC,AAAY,WAAD,iBAAiB,OAAO;;AAErC;;;AAGJ,cAAI,wBAAmB;AACL,8BACZ,qBAAgB,IAAI,EAAE,AAAY,WAAD;AACrC,gBAAI,WAAW,IAAI;cACjB,AAAY,WAAD,cAAc,WAAW;;;cAMrC,eAAI,AAAwB,uEAAS,AAAK,IAAD;UAG5C,AAAa,YAAD,iBAAiB;AACnB,0BAAsB;AAChC,cAAI,wBAAmB;YACrB,aAAkC,OAAtB,qBAAgB,IAAI,WAApB,OAAyB,SAAS;;AAGrC;AACX,cAAI,yBAAoB;YACtB,oBAAoB,sBAAiB,IAAI;;2BAGnC,AAAK,IAAD;;;;;;kBAER,AAAa,AACR,YADO,sBACH,iCAAgB,YAAmB;AAC5C;;;;AAEM,+BAA+B,oDAAvB,OAAiB,qBAAjB,OACR,AAAK,AAAU,AACb,IADE,mBAAY,YAAY,OACjB,qBAAS,AAAK,AAAU,IAAX,mBAAY,YAChC;AACJ,gCAAiC,oDAAxB,OAAiB,sBAAjB,OACT,AAAK,AAAU,AACb,IADE,mBAAY,aAAa,OAClB,qBAAS,AAAK,AAAU,IAAX,mBAAY,aAChC;AACH;AACP,sBAAI,AAAK,AAAU,IAAX,mBAAY,UAAU;AACtB,kCAAU,AAAa,YAAD;AAC5B,wBAAI,OAAO,IAAI;AACP,oCAAU,AAAO,OAAA,QAAC,AAAK,AAAU,IAAX,mBAAY;AACxC,0BAAI,OAAO,IAAI;wBACb,SAAS,AAAO,OAAA,CAAC,YAAY;;;AAGjC,wBAAI,AAAO,MAAD,IAAI;sBACZ,SAAS;;;kBAGb,AAAa,AAAe,YAAhB,sBAAoB,oCACvB,KAAK,UACJ,MAAM,SACP,MAAM;AAEf;;;;AAEA,gCAAI;AACF,wBAAI,AAAK,AAAU,IAAX,mBAAY,UAAU;AACtB,mCAA+B,uDAAvB,OAAiB,uBAAjB,OACR,AAAK,AAAU,AACb,IADE,mBAAY,YAAY,OACjB,qBAAS,AAAK,AAAU,IAAX,mBAAY,YAChC;AACJ,oCAAiC,uDAAxB,OAAiB,wBAAjB,OACT,AAAK,AAAU,AACb,IADE,mBAAY,aAAa,OAClB,qBAAS,AAAK,AAAU,IAAX,mBAAY,aAChC;AAEV,0BAAI,AAAK,AAAU,AAAQ,IAAnB,mBAAY,oBAAkB,iBAClC,AAAK,AAAU,AAAQ,IAAnB,mBAAY,kBAAgB;wBAClC,oBACE,mCACE,AAAO,sBACL,AAAK,AAAU,AAAQ,AAAgB,AAAI,IAAvC,mBAAY,eAAa,kBAAW,eAG5C,YAAY,aACU,oCAAb,OAAgB,SAAC,GAAG;;wBAE/B,AAAa,AAAe,YAAhB,sBAAoB,iDACjB,uBACX,AAAO,sBACH,AAAK,AAAU,AAAQ,AAAgB,AAAI,IAAvC,mBAAY,eAAa,kBAAW,sBACvB,cAAP,QAAN,KAAK,WAAL,OAAS,iBAAM,IAAI,KAAK,GAAG,cACZ,cAAP,QAAP,MAAM,WAAN,OAAU,iBAAM,IAAI,KAAK,GAAG,cACP,uDAAvB,OAAiB,uBAAjB,OAA0B,mCAEO,uDAApC,OAAiB,oCAAjB,OAAuC,4EAC9B,OAAiB,oCAEK,uDAA/B,OAAiB,+BAAjB,OAAgD,2CACd,uDAA3B,OAAiB,2BAAjB,OAAwC,oGACnC,OAAiB,2EAC5B,OAAiB,kEACf,OAAiB,uBACQ,uDAAxB,OAAiB,wBAAjB,OAAuC,8GAChC,OAAiB,4CAEI,+CAA/B,OAAiB,wBAAiB,OAC7B,OACA,yEAEL;AACL,gCAAI,mBAAc;8BAChB,gBAAW,AAAK,AAAU,IAAX,mBAAY;;;;wBAKjC,oBACE,wCAAa,AAAK,AAAU,IAAX,mBAAY,SAC7B,YAAY,aACU,oCAAb,OAAgB,SAAC,GAAG;;wBAE/B,AAAa,AAAe,YAAhB,sBAAoB,iDACjB,wBACX,AAAK,AAAU,IAAX,mBAAY,uBACF,SAAC,SAAS,OAAO,OAAO;AACpC,kCAAI,AAAK,AAAU,IAAX,mBAAY,UAAU,QAAQ,AAAM,KAAD,IAAI;AAC7C,sCAAO,4CACE,mCACgB,2BACf,kCACE,AAAK,AAAU,IAAX,mBAAY,eACf,AAAY,WAAD,uFAGT;;AAGjB,kCAAI,KAAK,IAAI;AACX,sCAAO,MAAK;;AAEd,oCAAO;gFAEY,cAAP,QAAN,KAAK,WAAL,OAAS,iBAAM,IAAI,KAAK,GAAG,cACZ,cAAP,QAAP,MAAM,WAAN,OAAU,iBAAM,IAAI,MAAM,GAAG,cACR,uDAAvB,OAAiB,uBAAjB,OAA0B,mCAEO,uDAApC,OAAiB,oCAAjB,OAAuC,4EAC9B,OAAiB,oCAEK,uDAA/B,OAAiB,+BAAjB,OAAgD,2CACd,uDAA3B,OAAiB,2BAAjB,OAAwC,oGACnC,OAAiB,2EAC5B,OAAiB,kEACf,OAAiB,uBACQ,uDAAxB,OAAiB,wBAAjB,OAAuC,8GAChC,OAAiB,4CAEI,+CAA/B,OAAiB,wBAAiB,OAC7B,OACA,yEAEL;AACL,gCAAI,mBAAc;8BAChB,gBAAW,AAAK,AAAU,IAAX,mBAAY;;;;;;AAOvC;;;;AAEO,oCAAc,AAAa,YAAD;AACjC,sBAAI,AAAa,AAAU,YAAX,eAAc;4BAG5B,YAAY;oBAAC,kBAAU,aAAV,mBAAa;oBAC1B,cAAqC,AAAW,cAAlC,AAAa,YAAD,cAAwB;;AAE1C,kCAAY,iDACP,0BACM,uCACgB,aAAzB,AAAa,YAAD,6BAAe,uBAAiB,cAC/C,8BACC,kCACkB,SAAd,WAAW,iBACK,AAAiB,0BAAd,YAAY,mBACnB,wBAClB,kCAAe,WAAW,AAAY,WAAD;kBAK7C,AAAa,AAAe,YAAhB,sBAAoB,SAAS;kBACzC,AAAY,WAAD,iBAAiB,AAAU,AAAM,SAAP;kBACrC,AAAY,WAAD,aAAa;kBACxB,AAAY,WAAD,WAAW;AACtB;;;;kBAGA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAEA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAEA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAEA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAEA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAEA,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAClC,wCAAoB,kBAA6B;AAEnD;;;;;kBAGA,AAAY,WAAD,sBAAsB;AACjC;;;;;kBAGA,YAAsB;AAEtB;;;;;AAIW;AACX,sBAAI,AAAa,AAAU,YAAX,eAAc;oBAC5B,aAAa,8CAEP,iCAAa,mCAAyB,+BAAgB;oBAE5D,AAAY,WAAD,cAAc,AAAY,AAAW,WAAZ,kBAAkB,yCAC/B;;AAGf,kCAAY,iDACP,0BACL,AAAK,AACT,IADQ,eAAc,UACF,QAAlB,iBAAiB,WAAjB,OACa,sCACF,aACG,WACuB,aAAzB,AAAa,YAAD,6BAAe,8BAC5B,sCACG,+BAAI,kBACZ,UAAU,SACf,mCACM,SAAS,QACd,kCACE,WACC,AAAY,WAAD,uBACE;kBAI1B,AAAa,AAAe,YAAhB,sBAAoB,SAAS;kBACzC,AAAY,WAAD,iBAAiB,AAAU,AAAM,SAAP;kBACrC,AAAY,WAAD,aAAa;kBACxB,AAAY,WAAD,WAAW;;;;;;AAG1B,cAAI,wBAAmB;AACL,8BACZ,qBAAgB,IAAI,EAAE,AAAY,WAAD;AACrC,gBAAI,WAAW,IAAI;cACjB,AAAY,WAAD,cAAc,WAAW;;;;QAK1C,AAAK,AAAM,IAAP,iBAAe,QAAU;UAC3B,iBAAW,SAAS,EAAE,WAAW,EAAE,YAAY;;;IAGrD;2BAEqC;MACnC,eAAe,AAAa,YAAD,cAAY,MAAM;AAC7C,aAAO,AAAa,YAAD,WAAS,UAAS,CAAC;QACpC,eAAe,AAAa,YAAD,cAAY,MAAM;;AAE/C,YAAO,aAAY;IACrB;;;QAr1BiB;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAKA;QACA;QACA;;IAGM,mBAAa;IAnBT;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAKA;IACA;IACA;AAjBP;;EAkBE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAqBW,2DAAuB;;;MAuCvB,+DAA2B;;;MAkB3B,2DAAuB;;;;;MAtOhC,6CAA4B","file":"rich_text_parser.ddc.js"}');
  // Exports:
  return {
    rich_text_parser: rich_text_parser
  };
});

//# sourceMappingURL=rich_text_parser.ddc.js.map

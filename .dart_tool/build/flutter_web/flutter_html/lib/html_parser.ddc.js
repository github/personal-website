define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/html/dom'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__html__dom) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const image_provider = packages__flutter__src__painting___network_image_web.src__painting__image_provider;
  const _network_image_web = packages__flutter__src__painting___network_image_web.src__painting___network_image_web;
  const text_painter = packages__flutter__src__painting___network_image_web.src__painting__text_painter;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const colors$ = packages__flutter__material.src__material__colors;
  const divider = packages__flutter__material.src__material__divider;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const wrap = packages__flutter__src__rendering__animated_size.src__rendering__wrap;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const stack = packages__flutter__src__rendering__animated_size.src__rendering__stack;
  const parser = packages__html__dom.parser;
  const dom = packages__html__dom.dom;
  const html_parser = Object.create(dart.library);
  const $replaceAll = dartx.replaceAll;
  const $add = dartx.add;
  const $contains = dartx.contains;
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $trim = dartx.trim;
  const $endsWith = dartx.endsWith;
  const $indexOf = dartx.indexOf;
  const $addAll = dartx.addAll;
  const $map = dartx.map;
  const $toList = dartx.toList;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let NodeToWidget = () => (NodeToWidget = dart.constFn(dart.fnType(framework.Widget, [dom.Node])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C3() {
      return C3 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4286755327.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4282682111.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4280908287.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4280902399.0
      });
    },
    get C2() {
      return C2 = dart.constMap(core.int, ui.Color, [100, C3 || CT.C3, 200, C4 || CT.C4, 400, C5 || CT.C5, 700, C6 || CT.C6]);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: colors$.MaterialAccentColor.prototype,
        [_value]: 4282682111.0,
        [_swatch]: C2 || CT.C2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [_mask]: 1
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: null,
        decorationColor: C1 || CT.C1,
        decoration: C7 || CT.C7,
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
        color: C1 || CT.C1,
        inherit: true
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 7,
        line: 115,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 116,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 12,
        line: 114,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C13() {
      return C13 = dart.constList([], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 16,
        line: 143,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 151,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 24,
        line: 150,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 149,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 15,
        line: 155,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 18,
        line: 148,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 164,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 20,
        line: 163,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: ui.TextDecorationStyle.prototype,
        [_name]: "TextDecorationStyle.dotted",
        index: 2
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: C25 || CT.C25,
        decorationColor: null,
        decoration: C7 || CT.C7,
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
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 174,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 20,
        line: 173,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 184,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 20,
        line: 183,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ui.FontStyle.prototype,
        [_name]: "FontStyle.italic",
        index: 1
      });
    },
    get C32() {
      return C32 = dart.const({
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
        letterSpacing: null,
        fontStyle: C33 || CT.C33,
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
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 194,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 195,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 20,
        line: 193,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 192,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 193,
        file: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C39 || CT.C39,
        name: null,
        column: 18,
        line: 191,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 202,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 203,
        file: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C43 || CT.C43,
        name: null,
        column: 20,
        line: 201,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 200,
        file: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 201,
        file: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48, C49 || CT.C49], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C47 || CT.C47,
        name: null,
        column: 18,
        line: 199,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 209,
        file: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C51 || CT.C51,
        name: null,
        column: 20,
        line: 208,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: ui.FontWeight.prototype,
        index: 6
      });
    },
    get C53() {
      return C53 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: null,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 217,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 18,
        line: 216,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 223,
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
        column: 22,
        line: 222,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 222,
        file: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "textDirection",
        column: 15,
        line: 225,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 20,
        line: 221,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 232,
        file: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C66 || CT.C66,
        name: null,
        column: 18,
        line: 231,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 237,
        file: null
      });
    },
    get C69() {
      return C69 = dart.constList([C70 || CT.C70], widget_inspector._Location);
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C69 || CT.C69,
        name: null,
        column: 20,
        line: 236,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C71() {
      return C71 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: 20,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 250,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 251,
        file: null
      });
    },
    get C73() {
      return C73 = dart.constList([C74 || CT.C74, C75 || CT.C75], widget_inspector._Location);
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C73 || CT.C73,
        name: null,
        column: 22,
        line: 249,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 248,
        file: null
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 249,
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
        column: 20,
        line: 247,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 245,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 247,
        file: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C81 || CT.C81,
        name: null,
        column: 18,
        line: 244,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 259,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 260,
        file: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C85 || CT.C85,
        name: null,
        column: 20,
        line: 258,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 257,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 258,
        file: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C89 || CT.C89,
        name: null,
        column: 18,
        line: 256,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 30,
        line: 265,
        file: null
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 44,
        line: 265,
        file: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94, C95 || CT.C95], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C93 || CT.C93,
        name: null,
        column: 20,
        line: 265,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 28,
        line: 267,
        file: null
      });
    },
    get C97() {
      return C97 = dart.constList([C98 || CT.C98], widget_inspector._Location);
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C97 || CT.C97,
        name: null,
        column: 18,
        line: 267,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 272,
        file: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 15,
        line: 273,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 274,
        file: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102, C103 || CT.C103], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C100 || CT.C100,
        name: null,
        column: 20,
        line: 271,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 270,
        file: null
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 271,
        file: null
      });
    },
    get C105() {
      return C105 = dart.constList([C106 || CT.C106, C107 || CT.C107], widget_inspector._Location);
    },
    get C104() {
      return C104 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C105 || CT.C105,
        name: null,
        column: 18,
        line: 269,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 281,
        file: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 282,
        file: null
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 283,
        file: null
      });
    },
    get C109() {
      return C109 = dart.constList([C110 || CT.C110, C111 || CT.C111, C112 || CT.C112], widget_inspector._Location);
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C109 || CT.C109,
        name: null,
        column: 22,
        line: 280,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 279,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 280,
        file: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 18,
        line: 278,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 288,
        file: null
      });
    },
    get C118() {
      return C118 = dart.constList([C119 || CT.C119], widget_inspector._Location);
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C118 || CT.C118,
        name: null,
        column: 20,
        line: 287,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 297,
        file: null
      });
    },
    get C121() {
      return C121 = dart.constList([C122 || CT.C122], widget_inspector._Location);
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C121 || CT.C121,
        name: null,
        column: 20,
        line: 296,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C123() {
      return C123 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: "monospace",
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 305,
        file: null
      });
    },
    get C125() {
      return C125 = dart.constList([C126 || CT.C126], widget_inspector._Location);
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C125 || CT.C125,
        name: null,
        column: 18,
        line: 304,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 19,
        line: 313,
        file: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 314,
        file: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C128 || CT.C128,
        name: null,
        column: 24,
        line: 312,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 311,
        file: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 312,
        file: null
      });
    },
    get C132() {
      return C132 = dart.constList([C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C132 || CT.C132,
        name: null,
        column: 22,
        line: 310,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 309,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 310,
        file: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C136 || CT.C136,
        name: null,
        column: 18,
        line: 308,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 320,
        file: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141], widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C140 || CT.C140,
        name: null,
        column: 20,
        line: 319,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [_mask]: 4
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: null,
        decorationColor: null,
        decoration: C143 || CT.C143,
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
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 329,
        file: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C145 || CT.C145,
        name: null,
        column: 20,
        line: 328,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 339,
        file: null
      });
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 340,
        file: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149, C150 || CT.C150], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C148 || CT.C148,
        name: null,
        column: 20,
        line: 338,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 337,
        file: null
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 338,
        file: null
      });
    },
    get C152() {
      return C152 = dart.constList([C153 || CT.C153, C154 || CT.C154], widget_inspector._Location);
    },
    get C151() {
      return C151 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C152 || CT.C152,
        name: null,
        column: 18,
        line: 336,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 347,
        file: null
      });
    },
    get C158() {
      return C158 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 348,
        file: null
      });
    },
    get C156() {
      return C156 = dart.constList([C157 || CT.C157, C158 || CT.C158], widget_inspector._Location);
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C156 || CT.C156,
        name: null,
        column: 22,
        line: 346,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 345,
        file: null
      });
    },
    get C162() {
      return C162 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 346,
        file: null
      });
    },
    get C160() {
      return C160 = dart.constList([C161 || CT.C161, C162 || CT.C162], widget_inspector._Location);
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C160 || CT.C160,
        name: null,
        column: 18,
        line: 344,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 352,
        file: null
      });
    },
    get C164() {
      return C164 = dart.constList([C165 || CT.C165], widget_inspector._Location);
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C164 || CT.C164,
        name: null,
        column: 18,
        line: 351,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 357,
        file: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168], widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C167 || CT.C167,
        name: null,
        column: 20,
        line: 356,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C171() {
      return C171 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 365,
        file: null
      });
    },
    get C170() {
      return C170 = dart.constList([C171 || CT.C171], widget_inspector._Location);
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C170 || CT.C170,
        name: null,
        column: 18,
        line: 364,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 372,
        file: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 373,
        file: null
      });
    },
    get C173() {
      return C173 = dart.constList([C174 || CT.C174, C175 || CT.C175], widget_inspector._Location);
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C173 || CT.C173,
        name: null,
        column: 22,
        line: 371,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C178() {
      return C178 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 15,
        line: 369,
        file: null
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 371,
        file: null
      });
    },
    get C177() {
      return C177 = dart.constList([C178 || CT.C178, C179 || CT.C179], widget_inspector._Location);
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C177 || CT.C177,
        name: null,
        column: 18,
        line: 368,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 377,
        file: null
      });
    },
    get C181() {
      return C181 = dart.constList([C182 || CT.C182], widget_inspector._Location);
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C181 || CT.C181,
        name: null,
        column: 18,
        line: 376,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 383,
        file: null
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 384,
        file: null
      });
    },
    get C184() {
      return C184 = dart.constList([C185 || CT.C185, C186 || CT.C186], widget_inspector._Location);
    },
    get C183() {
      return C183 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C184 || CT.C184,
        name: null,
        column: 20,
        line: 382,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 381,
        file: null
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 382,
        file: null
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190], widget_inspector._Location);
    },
    get C187() {
      return C187 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C188 || CT.C188,
        name: null,
        column: 18,
        line: 380,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 392,
        file: null
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 393,
        file: null
      });
    },
    get C192() {
      return C192 = dart.constList([C193 || CT.C193, C194 || CT.C194], widget_inspector._Location);
    },
    get C191() {
      return C191 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C192 || CT.C192,
        name: null,
        column: 22,
        line: 391,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 390,
        file: null
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 391,
        file: null
      });
    },
    get C196() {
      return C196 = dart.constList([C197 || CT.C197, C198 || CT.C198], widget_inspector._Location);
    },
    get C195() {
      return C195 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C196 || CT.C196,
        name: null,
        column: 20,
        line: 389,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C199() {
      return C199 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 28,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 406,
        file: null
      });
    },
    get C203() {
      return C203 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 407,
        file: null
      });
    },
    get C201() {
      return C201 = dart.constList([C202 || CT.C202, C203 || CT.C203], widget_inspector._Location);
    },
    get C200() {
      return C200 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C201 || CT.C201,
        name: null,
        column: 22,
        line: 405,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 404,
        file: null
      });
    },
    get C207() {
      return C207 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 405,
        file: null
      });
    },
    get C205() {
      return C205 = dart.constList([C206 || CT.C206, C207 || CT.C207], widget_inspector._Location);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C205 || CT.C205,
        name: null,
        column: 20,
        line: 403,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 21,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 420,
        file: null
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 421,
        file: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211, C212 || CT.C212], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C210 || CT.C210,
        name: null,
        column: 22,
        line: 419,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 418,
        file: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 419,
        file: null
      });
    },
    get C214() {
      return C214 = dart.constList([C215 || CT.C215, C216 || CT.C216], widget_inspector._Location);
    },
    get C213() {
      return C213 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C214 || CT.C214,
        name: null,
        column: 20,
        line: 417,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C217() {
      return C217 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 16,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 434,
        file: null
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 435,
        file: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220, C221 || CT.C221], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C219 || CT.C219,
        name: null,
        column: 22,
        line: 433,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 432,
        file: null
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 433,
        file: null
      });
    },
    get C223() {
      return C223 = dart.constList([C224 || CT.C224, C225 || CT.C225], widget_inspector._Location);
    },
    get C222() {
      return C222 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C223 || CT.C223,
        name: null,
        column: 20,
        line: 431,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 14,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 448,
        file: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 449,
        file: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C228 || CT.C228,
        name: null,
        column: 22,
        line: 447,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 446,
        file: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 447,
        file: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C232 || CT.C232,
        name: null,
        column: 20,
        line: 445,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C235() {
      return C235 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 12,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 462,
        file: null
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 463,
        file: null
      });
    },
    get C237() {
      return C237 = dart.constList([C238 || CT.C238, C239 || CT.C239], widget_inspector._Location);
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C237 || CT.C237,
        name: null,
        column: 22,
        line: 461,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 460,
        file: null
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 461,
        file: null
      });
    },
    get C241() {
      return C241 = dart.constList([C242 || CT.C242, C243 || CT.C243], widget_inspector._Location);
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C241 || CT.C241,
        name: null,
        column: 20,
        line: 459,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C244() {
      return C244 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: C54 || CT.C54,
        fontSize: 10,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 475,
        file: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 476,
        file: null
      });
    },
    get C246() {
      return C246 = dart.constList([C247 || CT.C247, C248 || CT.C248], widget_inspector._Location);
    },
    get C245() {
      return C245 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C246 || CT.C246,
        name: null,
        column: 20,
        line: 474,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 473,
        file: null
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 474,
        file: null
      });
    },
    get C250() {
      return C250 = dart.constList([C251 || CT.C251, C252 || CT.C252], widget_inspector._Location);
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C250 || CT.C250,
        name: null,
        column: 18,
        line: 472,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 28,
        line: 482,
        file: null
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 41,
        line: 482,
        file: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255, C256 || CT.C256], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C254 || CT.C254,
        name: null,
        column: 20,
        line: 482,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 481,
        file: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 482,
        file: null
      });
    },
    get C258() {
      return C258 = dart.constList([C259 || CT.C259, C260 || CT.C260], widget_inspector._Location);
    },
    get C257() {
      return C257 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C258 || CT.C258,
        name: null,
        column: 18,
        line: 480,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 487,
        file: null
      });
    },
    get C262() {
      return C262 = dart.constList([C263 || CT.C263], widget_inspector._Location);
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C262 || CT.C262,
        name: null,
        column: 20,
        line: 486,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bytes",
        column: 48,
        line: 506,
        file: null
      });
    },
    get C265() {
      return C265 = dart.constList([C266 || CT.C266], widget_inspector._Location);
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C265 || CT.C265,
        name: null,
        column: 34,
        line: 506,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 55,
        line: 514,
        file: null
      });
    },
    get C268() {
      return C268 = dart.constList([C269 || CT.C269], widget_inspector._Location);
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C268 || CT.C268,
        name: null,
        column: 32,
        line: 514,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 520,
        file: null
      });
    },
    get C271() {
      return C271 = dart.constList([C272 || CT.C272], widget_inspector._Location);
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C271 || CT.C271,
        name: null,
        column: 32,
        line: 520,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 25,
        line: 519,
        file: null
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 520,
        file: null
      });
    },
    get C274() {
      return C274 = dart.constList([C275 || CT.C275, C276 || CT.C276], widget_inspector._Location);
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C274 || CT.C274,
        name: null,
        column: 28,
        line: 518,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 48,
        line: 522,
        file: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C278 || CT.C278,
        name: null,
        column: 28,
        line: 522,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 22,
        line: 526,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 13,
        line: 495,
        file: null
      });
    },
    get C282() {
      return C282 = dart.constList([C283 || CT.C283], widget_inspector._Location);
    },
    get C281() {
      return C281 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C282 || CT.C282,
        name: null,
        column: 18,
        line: 494,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 532,
        file: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C285 || CT.C285,
        name: null,
        column: 20,
        line: 531,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        fontFeatures: null,
        shadows: null,
        debugLabel: null,
        decorationThickness: null,
        decorationStyle: null,
        decorationColor: null,
        decoration: C7 || CT.C7,
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
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 541,
        file: null
      });
    },
    get C289() {
      return C289 = dart.constList([C290 || CT.C290], widget_inspector._Location);
    },
    get C288() {
      return C288 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C289 || CT.C289,
        name: null,
        column: 20,
        line: 540,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 0,
        right: 4,
        top: 0,
        left: 4
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 44,
        line: 553,
        file: null
      });
    },
    get C293() {
      return C293 = dart.constList([C294 || CT.C294], widget_inspector._Location);
    },
    get C292() {
      return C292 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C293 || CT.C293,
        name: null,
        column: 39,
        line: 553,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 32,
        line: 553,
        file: null
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 50,
        line: 553,
        file: null
      });
    },
    get C296() {
      return C296 = dart.constList([C297 || CT.C297, C298 || CT.C298], widget_inspector._Location);
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C296 || CT.C296,
        name: null,
        column: 22,
        line: 553,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 53,
        line: 557,
        file: null
      });
    },
    get C300() {
      return C300 = dart.constList([C301 || CT.C301], widget_inspector._Location);
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C300 || CT.C300,
        name: null,
        column: 39,
        line: 557,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 32,
        line: 557,
        file: null
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 56,
        line: 557,
        file: null
      });
    },
    get C303() {
      return C303 = dart.constList([C304 || CT.C304, C305 || CT.C305], widget_inspector._Location);
    },
    get C302() {
      return C302 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C303 || CT.C303,
        name: null,
        column: 22,
        line: 557,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 32,
        line: 560,
        file: null
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 44,
        line: 560,
        file: null
      });
    },
    get C307() {
      return C307 = dart.constList([C308 || CT.C308, C309 || CT.C309], widget_inspector._Location);
    },
    get C306() {
      return C306 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C307 || CT.C307,
        name: null,
        column: 22,
        line: 560,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 21,
        line: 570,
        file: null
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 21,
        line: 571,
        file: null
      });
    },
    get C311() {
      return C311 = dart.constList([C312 || CT.C312, C313 || CT.C313], widget_inspector._Location);
    },
    get C310() {
      return C310 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C311 || CT.C311,
        name: null,
        column: 17,
        line: 569,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 566,
        file: null
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 567,
        file: null
      });
    },
    get C315() {
      return C315 = dart.constList([C316 || CT.C316, C317 || CT.C317], widget_inspector._Location);
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C315 || CT.C315,
        name: null,
        column: 20,
        line: 565,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 564,
        file: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 565,
        file: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320, C321 || CT.C321], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C319 || CT.C319,
        name: null,
        column: 18,
        line: 563,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C324() {
      return C324 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 579,
        file: null
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 580,
        file: null
      });
    },
    get C323() {
      return C323 = dart.constList([C324 || CT.C324, C325 || CT.C325], widget_inspector._Location);
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C323 || CT.C323,
        name: null,
        column: 20,
        line: 578,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 577,
        file: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 578,
        file: null
      });
    },
    get C327() {
      return C327 = dart.constList([C328 || CT.C328, C329 || CT.C329], widget_inspector._Location);
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C327 || CT.C327,
        name: null,
        column: 18,
        line: 576,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 586,
        file: null
      });
    },
    get C331() {
      return C331 = dart.constList([C332 || CT.C332], widget_inspector._Location);
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C331 || CT.C331,
        name: null,
        column: 20,
        line: 585,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 597,
        file: null
      });
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 598,
        file: null
      });
    },
    get C334() {
      return C334 = dart.constList([C335 || CT.C335, C336 || CT.C336], widget_inspector._Location);
    },
    get C333() {
      return C333 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C334 || CT.C334,
        name: null,
        column: 20,
        line: 596,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 595,
        file: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 596,
        file: null
      });
    },
    get C338() {
      return C338 = dart.constList([C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C337() {
      return C337 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C338 || CT.C338,
        name: null,
        column: 18,
        line: 594,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 605,
        file: null
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 15,
        line: 606,
        file: null
      });
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 607,
        file: null
      });
    },
    get C342() {
      return C342 = dart.constList([C343 || CT.C343, C344 || CT.C344, C345 || CT.C345], widget_inspector._Location);
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C342 || CT.C342,
        name: null,
        column: 20,
        line: 604,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 603,
        file: null
      });
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 604,
        file: null
      });
    },
    get C347() {
      return C347 = dart.constList([C348 || CT.C348, C349 || CT.C349], widget_inspector._Location);
    },
    get C346() {
      return C346 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C347 || CT.C347,
        name: null,
        column: 18,
        line: 602,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 612,
        file: null
      });
    },
    get C353() {
      return C353 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 613,
        file: null
      });
    },
    get C351() {
      return C351 = dart.constList([C352 || CT.C352, C353 || CT.C353], widget_inspector._Location);
    },
    get C350() {
      return C350 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C351 || CT.C351,
        name: null,
        column: 18,
        line: 611,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 621,
        file: null
      });
    },
    get C357() {
      return C357 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 622,
        file: null
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 623,
        file: null
      });
    },
    get C355() {
      return C355 = dart.constList([C356 || CT.C356, C357 || CT.C357, C358 || CT.C358], widget_inspector._Location);
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C355 || CT.C355,
        name: null,
        column: 22,
        line: 620,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 15,
        line: 619,
        file: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 620,
        file: null
      });
    },
    get C360() {
      return C360 = dart.constList([C361 || CT.C361, C362 || CT.C362], widget_inspector._Location);
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C360 || CT.C360,
        name: null,
        column: 20,
        line: 618,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 617,
        file: null
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 618,
        file: null
      });
    },
    get C364() {
      return C364 = dart.constList([C365 || CT.C365, C366 || CT.C366], widget_inspector._Location);
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C364 || CT.C364,
        name: null,
        column: 18,
        line: 616,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 32,
        line: 631,
        file: null
      });
    },
    get C368() {
      return C368 = dart.constList([C369 || CT.C369], widget_inspector._Location);
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C368 || CT.C368,
        name: null,
        column: 22,
        line: 631,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 629,
        file: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 630,
        file: null
      });
    },
    get C371() {
      return C371 = dart.constList([C372 || CT.C372, C373 || CT.C373], widget_inspector._Location);
    },
    get C370() {
      return C370 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C371 || CT.C371,
        name: null,
        column: 18,
        line: 628,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 639,
        file: null
      });
    },
    get C375() {
      return C375 = dart.constList([C376 || CT.C376], widget_inspector._Location);
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C375 || CT.C375,
        name: null,
        column: 24,
        line: 639,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C379() {
      return C379 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 29,
        line: 641,
        file: null
      });
    },
    get C378() {
      return C378 = dart.constList([C379 || CT.C379], widget_inspector._Location);
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C378 || CT.C378,
        name: null,
        column: 24,
        line: 641,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C382() {
      return C382 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 644,
        file: null
      });
    },
    get C381() {
      return C381 = dart.constList([C382 || CT.C382], widget_inspector._Location);
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C381 || CT.C381,
        name: null,
        column: 20,
        line: 643,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 652,
        file: null
      });
    },
    get C384() {
      return C384 = dart.constList([C385 || CT.C385], widget_inspector._Location);
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C384 || CT.C384,
        name: null,
        column: 18,
        line: 651,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C388() {
      return C388 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 656,
        file: null
      });
    },
    get C387() {
      return C387 = dart.constList([C388 || CT.C388], widget_inspector._Location);
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C387 || CT.C387,
        name: null,
        column: 18,
        line: 655,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C391() {
      return C391 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 660,
        file: null
      });
    },
    get C390() {
      return C390 = dart.constList([C391 || CT.C391], widget_inspector._Location);
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C390 || CT.C390,
        name: null,
        column: 18,
        line: 659,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 665,
        file: null
      });
    },
    get C393() {
      return C393 = dart.constList([C394 || CT.C394], widget_inspector._Location);
    },
    get C392() {
      return C392 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C393 || CT.C393,
        name: null,
        column: 20,
        line: 664,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C397() {
      return C397 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 674,
        file: null
      });
    },
    get C396() {
      return C396 = dart.constList([C397 || CT.C397], widget_inspector._Location);
    },
    get C395() {
      return C395 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C396 || CT.C396,
        name: null,
        column: 20,
        line: 673,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C400() {
      return C400 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 684,
        file: null
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 685,
        file: null
      });
    },
    get C399() {
      return C399 = dart.constList([C400 || CT.C400, C401 || CT.C401], widget_inspector._Location);
    },
    get C398() {
      return C398 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C399 || CT.C399,
        name: null,
        column: 20,
        line: 683,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 13,
        line: 682,
        file: null
      });
    },
    get C405() {
      return C405 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 683,
        file: null
      });
    },
    get C403() {
      return C403 = dart.constList([C404 || CT.C404, C405 || CT.C405], widget_inspector._Location);
    },
    get C402() {
      return C402 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C403 || CT.C403,
        name: null,
        column: 18,
        line: 681,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 691,
        file: null
      });
    },
    get C407() {
      return C407 = dart.constList([C408 || CT.C408], widget_inspector._Location);
    },
    get C406() {
      return C406 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C407 || CT.C407,
        name: null,
        column: 20,
        line: 690,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C409() {
      return C409 = dart.const({
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
        letterSpacing: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: 10,
        [_package]: null,
        [_fontFamilyFallback]: null,
        fontFamily: null,
        backgroundColor: null,
        color: null,
        inherit: true
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 699,
        file: null
      });
    },
    get C411() {
      return C411 = dart.constList([C412 || CT.C412], widget_inspector._Location);
    },
    get C410() {
      return C410 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C411 || CT.C411,
        name: null,
        column: 18,
        line: 698,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 704,
        file: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415], widget_inspector._Location);
    },
    get C413() {
      return C413 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C414 || CT.C414,
        name: null,
        column: 20,
        line: 703,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C418() {
      return C418 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 713,
        file: null
      });
    },
    get C417() {
      return C417 = dart.constList([C418 || CT.C418], widget_inspector._Location);
    },
    get C416() {
      return C416 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C417 || CT.C417,
        name: null,
        column: 20,
        line: 712,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 25,
        line: 765,
        file: null
      });
    },
    get C422() {
      return C422 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 25,
        line: 766,
        file: null
      });
    },
    get C420() {
      return C420 = dart.constList([C421 || CT.C421, C422 || CT.C422], widget_inspector._Location);
    },
    get C419() {
      return C419 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C420 || CT.C420,
        name: null,
        column: 23,
        line: 764,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C425() {
      return C425 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 39,
        line: 770,
        file: null
      });
    },
    get C424() {
      return C424 = dart.constList([C425 || CT.C425], widget_inspector._Location);
    },
    get C423() {
      return C423 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C424 || CT.C424,
        name: null,
        column: 34,
        line: 770,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 27,
        line: 770,
        file: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottom",
        column: 27,
        line: 771,
        file: null
      });
    },
    get C430() {
      return C430 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "top",
        column: 27,
        line: 772,
        file: null
      });
    },
    get C427() {
      return C427 = dart.constList([C428 || CT.C428, C429 || CT.C429, C430 || CT.C430], widget_inspector._Location);
    },
    get C426() {
      return C426 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C427 || CT.C427,
        name: null,
        column: 32,
        line: 769,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C433() {
      return C433 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 21,
        line: 760,
        file: null
      });
    },
    get C434() {
      return C434 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 21,
        line: 761,
        file: null
      });
    },
    get C432() {
      return C432 = dart.constList([C433 || CT.C433, C434 || CT.C434], widget_inspector._Location);
    },
    get C431() {
      return C431 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C432 || CT.C432,
        name: null,
        column: 19,
        line: 759,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C437() {
      return C437 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 757,
        file: null
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 758,
        file: null
      });
    },
    get C436() {
      return C436 = dart.constList([C437 || CT.C437, C438 || CT.C438], widget_inspector._Location);
    },
    get C435() {
      return C435 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C436 || CT.C436,
        name: null,
        column: 22,
        line: 756,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C441() {
      return C441 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 26,
        line: 722,
        file: null
      });
    },
    get C440() {
      return C440 = dart.constList([C441 || CT.C441], widget_inspector._Location);
    },
    get C439() {
      return C439 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C440 || CT.C440,
        name: null,
        column: 18,
        line: 722,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C444() {
      return C444 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 786,
        file: null
      });
    },
    get C445() {
      return C445 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 787,
        file: null
      });
    },
    get C443() {
      return C443 = dart.constList([C444 || CT.C444, C445 || CT.C445], widget_inspector._Location);
    },
    get C442() {
      return C442 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C443 || CT.C443,
        name: null,
        column: 18,
        line: 785,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C448() {
      return C448 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 791,
        file: null
      });
    },
    get C449() {
      return C449 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 792,
        file: null
      });
    },
    get C447() {
      return C447 = dart.constList([C448 || CT.C448, C449 || CT.C449], widget_inspector._Location);
    },
    get C446() {
      return C446 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C447 || CT.C447,
        name: null,
        column: 18,
        line: 790,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C452() {
      return C452 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 15,
        line: 802,
        file: null
      });
    },
    get C453() {
      return C453 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 803,
        file: null
      });
    },
    get C451() {
      return C451 = dart.constList([C452 || CT.C452, C453 || CT.C453], widget_inspector._Location);
    },
    get C450() {
      return C450 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C451 || CT.C451,
        name: null,
        column: 20,
        line: 801,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C456() {
      return C456 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 13,
        line: 800,
        file: null
      });
    },
    get C457() {
      return C457 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 801,
        file: null
      });
    },
    get C455() {
      return C455 = dart.constList([C456 || CT.C456, C457 || CT.C457], widget_inspector._Location);
    },
    get C454() {
      return C454 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C455 || CT.C455,
        name: null,
        column: 18,
        line: 799,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 18,
        line: 808,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C461() {
      return C461 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 811,
        file: null
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 812,
        file: null
      });
    },
    get C460() {
      return C460 = dart.constList([C461 || CT.C461, C462 || CT.C462], widget_inspector._Location);
    },
    get C459() {
      return C459 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C460 || CT.C460,
        name: null,
        column: 18,
        line: 810,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C465() {
      return C465 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 17,
        line: 823,
        file: null
      });
    },
    get C466() {
      return C466 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 17,
        line: 824,
        file: null
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 825,
        file: null
      });
    },
    get C464() {
      return C464 = dart.constList([C465 || CT.C465, C466 || CT.C466, C467 || CT.C467], widget_inspector._Location);
    },
    get C463() {
      return C463 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C464 || CT.C464,
        name: null,
        column: 22,
        line: 822,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C470() {
      return C470 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flex",
        column: 15,
        line: 821,
        file: null
      });
    },
    get C471() {
      return C471 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 822,
        file: null
      });
    },
    get C469() {
      return C469 = dart.constList([C470 || CT.C470, C471 || CT.C471], widget_inspector._Location);
    },
    get C468() {
      return C468 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C469 || CT.C469,
        name: null,
        column: 20,
        line: 820,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 834,
        file: null
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 835,
        file: null
      });
    },
    get C473() {
      return C473 = dart.constList([C474 || CT.C474, C475 || CT.C475], widget_inspector._Location);
    },
    get C472() {
      return C472 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C473 || CT.C473,
        name: null,
        column: 18,
        line: 833,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C478() {
      return C478 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 839,
        file: null
      });
    },
    get C477() {
      return C477 = dart.constList([C478 || CT.C478], widget_inspector._Location);
    },
    get C476() {
      return C476 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C477 || CT.C477,
        name: null,
        column: 18,
        line: 838,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 843,
        file: null
      });
    },
    get C482() {
      return C482 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 844,
        file: null
      });
    },
    get C480() {
      return C480 = dart.constList([C481 || CT.C481, C482 || CT.C482], widget_inspector._Location);
    },
    get C479() {
      return C479 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C480 || CT.C480,
        name: null,
        column: 18,
        line: 842,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 849,
        file: null
      });
    },
    get C484() {
      return C484 = dart.constList([C485 || CT.C485], widget_inspector._Location);
    },
    get C483() {
      return C483 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C484 || CT.C484,
        name: null,
        column: 20,
        line: 848,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C488() {
      return C488 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 858,
        file: null
      });
    },
    get C487() {
      return C487 = dart.constList([C488 || CT.C488], widget_inspector._Location);
    },
    get C486() {
      return C486 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C487 || CT.C487,
        name: null,
        column: 20,
        line: 857,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 866,
        file: null
      });
    },
    get C492() {
      return C492 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 13,
        line: 867,
        file: null
      });
    },
    get C490() {
      return C490 = dart.constList([C491 || CT.C491, C492 || CT.C492], widget_inspector._Location);
    },
    get C489() {
      return C489 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C490 || CT.C490,
        name: null,
        column: 18,
        line: 865,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 872,
        file: null
      });
    },
    get C494() {
      return C494 = dart.constList([C495 || CT.C495], widget_inspector._Location);
    },
    get C493() {
      return C493 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C494 || CT.C494,
        name: null,
        column: 20,
        line: 871,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C496() {
      return C496 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 16,
        line: 882,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 63,
        line: 892,
        file: null
      });
    },
    get C498() {
      return C498 = dart.constList([C499 || CT.C499], widget_inspector._Location);
    },
    get C497() {
      return C497 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C498 || CT.C498,
        name: null,
        column: 58,
        line: 892,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 13,
        line: 892,
        file: null
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 51,
        line: 892,
        file: null
      });
    },
    get C501() {
      return C501 = dart.constList([C502 || CT.C502, C503 || CT.C503], widget_inspector._Location);
    },
    get C500() {
      return C500 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C501 || CT.C501,
        name: null,
        column: 16,
        line: 891,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C506() {
      return C506 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 21,
        line: 894,
        file: null
      });
    },
    get C505() {
      return C505 = dart.constList([C506 || CT.C506], widget_inspector._Location);
    },
    get C504() {
      return C504 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C505 || CT.C505,
        name: null,
        column: 16,
        line: 894,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 12,
        line: 897,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C508() {
      return C508 = dart.constList(["a", "abbr", "acronym", "address", "article", "aside", "b", "bdi", "bdo", "big", "blockquote", "body", "br", "caption", "cite", "center", "code", "data", "dd", "del", "dfn", "div", "dl", "dt", "em", "figcaption", "figure", "font", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "i", "img", "ins", "kbd", "li", "main", "mark", "nav", "noscript", "ol", "p", "pre", "q", "rp", "rt", "ruby", "s", "samp", "section", "small", "span", "strike", "strong", "sub", "sup", "table", "tbody", "td", "template", "tfoot", "th", "thead", "time", "tr", "tt", "u", "ul", "var"], core.String);
    }
  });
  const _value = dart.privateName(ui, "_value");
  let C3;
  let C4;
  let C5;
  let C6;
  let C2;
  const _swatch = dart.privateName(colors, "_swatch");
  let C1;
  const _mask = dart.privateName(ui, "_mask");
  let C7;
  const _package = dart.privateName(text_style, "_package");
  const _fontFamilyFallback = dart.privateName(text_style, "_fontFamilyFallback");
  let C0;
  let C10;
  let C11;
  let C9;
  let C8;
  const _parseNode = dart.privateName(html_parser, "_parseNode");
  const _parseNodeList = dart.privateName(html_parser, "_parseNodeList");
  let C13;
  let C12;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C22;
  let C21;
  const _name = dart.privateName(ui, "_name");
  let C25;
  let C24;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  let C33;
  let C32;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C41;
  let C39;
  let C38;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C49;
  let C47;
  let C46;
  let C52;
  let C51;
  let C50;
  let C54;
  let C53;
  let C57;
  let C56;
  let C55;
  let C60;
  let C59;
  let C58;
  let C63;
  let C64;
  let C62;
  let C61;
  let C67;
  let C66;
  let C65;
  let C70;
  let C69;
  let C68;
  let C71;
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
  let C85;
  let C84;
  let C90;
  let C91;
  let C89;
  let C88;
  const _isNotFirstBreakTag = dart.privateName(html_parser, "_isNotFirstBreakTag");
  let C94;
  let C95;
  let C93;
  let C92;
  let C98;
  let C97;
  let C96;
  let C101;
  let C102;
  let C103;
  let C100;
  let C99;
  let C106;
  let C107;
  let C105;
  let C104;
  let C110;
  let C111;
  let C112;
  let C109;
  let C108;
  let C115;
  let C116;
  let C114;
  let C113;
  let C119;
  let C118;
  let C117;
  let C122;
  let C121;
  let C120;
  let C123;
  let C126;
  let C125;
  let C124;
  let C129;
  let C130;
  let C128;
  let C127;
  let C133;
  let C134;
  let C132;
  let C131;
  let C137;
  let C138;
  let C136;
  let C135;
  let C141;
  let C140;
  let C139;
  let C143;
  let C142;
  let C146;
  let C145;
  let C144;
  let C149;
  let C150;
  let C148;
  let C147;
  let C153;
  let C154;
  let C152;
  let C151;
  let C157;
  let C158;
  let C156;
  let C155;
  let C161;
  let C162;
  let C160;
  let C159;
  let C165;
  let C164;
  let C163;
  let C168;
  let C167;
  let C166;
  let C171;
  let C170;
  let C169;
  let C174;
  let C175;
  let C173;
  let C172;
  let C178;
  let C179;
  let C177;
  let C176;
  let C182;
  let C181;
  let C180;
  let C185;
  let C186;
  let C184;
  let C183;
  let C189;
  let C190;
  let C188;
  let C187;
  let C193;
  let C194;
  let C192;
  let C191;
  let C197;
  let C198;
  let C196;
  let C195;
  let C199;
  let C202;
  let C203;
  let C201;
  let C200;
  let C206;
  let C207;
  let C205;
  let C204;
  let C208;
  let C211;
  let C212;
  let C210;
  let C209;
  let C215;
  let C216;
  let C214;
  let C213;
  let C217;
  let C220;
  let C221;
  let C219;
  let C218;
  let C224;
  let C225;
  let C223;
  let C222;
  let C226;
  let C229;
  let C230;
  let C228;
  let C227;
  let C233;
  let C234;
  let C232;
  let C231;
  let C235;
  let C238;
  let C239;
  let C237;
  let C236;
  let C242;
  let C243;
  let C241;
  let C240;
  let C244;
  let C247;
  let C248;
  let C246;
  let C245;
  let C251;
  let C252;
  let C250;
  let C249;
  let C255;
  let C256;
  let C254;
  let C253;
  let C259;
  let C260;
  let C258;
  let C257;
  let C263;
  let C262;
  let C261;
  let C266;
  let C265;
  let C264;
  let C269;
  let C268;
  let C267;
  let C272;
  let C271;
  let C270;
  let C275;
  let C276;
  let C274;
  let C273;
  let C279;
  let C278;
  let C277;
  let C280;
  let C283;
  let C282;
  let C281;
  let C286;
  let C285;
  let C284;
  let C287;
  let C290;
  let C289;
  let C288;
  let C291;
  let C294;
  let C293;
  let C292;
  let C297;
  let C298;
  let C296;
  let C295;
  let C301;
  let C300;
  let C299;
  let C304;
  let C305;
  let C303;
  let C302;
  let C308;
  let C309;
  let C307;
  let C306;
  let C312;
  let C313;
  let C311;
  let C310;
  let C316;
  let C317;
  let C315;
  let C314;
  let C320;
  let C321;
  let C319;
  let C318;
  let C324;
  let C325;
  let C323;
  let C322;
  let C328;
  let C329;
  let C327;
  let C326;
  let C332;
  let C331;
  let C330;
  const _getPaint = dart.privateName(html_parser, "_getPaint");
  let C335;
  let C336;
  let C334;
  let C333;
  let C339;
  let C340;
  let C338;
  let C337;
  let C343;
  let C344;
  let C345;
  let C342;
  let C341;
  let C348;
  let C349;
  let C347;
  let C346;
  let C352;
  let C353;
  let C351;
  let C350;
  let C356;
  let C357;
  let C358;
  let C355;
  let C354;
  let C361;
  let C362;
  let C360;
  let C359;
  let C365;
  let C366;
  let C364;
  let C363;
  let C369;
  let C368;
  let C367;
  let C372;
  let C373;
  let C371;
  let C370;
  let C376;
  let C375;
  let C374;
  let C379;
  let C378;
  let C377;
  let C382;
  let C381;
  let C380;
  let C385;
  let C384;
  let C383;
  let C388;
  let C387;
  let C386;
  let C391;
  let C390;
  let C389;
  let C394;
  let C393;
  let C392;
  let C397;
  let C396;
  let C395;
  let C400;
  let C401;
  let C399;
  let C398;
  let C404;
  let C405;
  let C403;
  let C402;
  let C408;
  let C407;
  let C406;
  let C409;
  let C412;
  let C411;
  let C410;
  let C415;
  let C414;
  let C413;
  let C418;
  let C417;
  let C416;
  let C421;
  let C422;
  let C420;
  let C419;
  let C425;
  let C424;
  let C423;
  let C428;
  let C429;
  let C430;
  let C427;
  let C426;
  let C433;
  let C434;
  let C432;
  let C431;
  let C437;
  let C438;
  let C436;
  let C435;
  let C441;
  let C440;
  let C439;
  let C444;
  let C445;
  let C443;
  let C442;
  let C448;
  let C449;
  let C447;
  let C446;
  let C452;
  let C453;
  let C451;
  let C450;
  let C456;
  let C457;
  let C455;
  let C454;
  let C458;
  let C461;
  let C462;
  let C460;
  let C459;
  let C465;
  let C466;
  let C467;
  let C464;
  let C463;
  let C470;
  let C471;
  let C469;
  let C468;
  let C474;
  let C475;
  let C473;
  let C472;
  let C478;
  let C477;
  let C476;
  let C481;
  let C482;
  let C480;
  let C479;
  let C485;
  let C484;
  let C483;
  let C488;
  let C487;
  let C486;
  let C491;
  let C492;
  let C490;
  let C489;
  let C495;
  let C494;
  let C493;
  let C496;
  let C499;
  let C498;
  let C497;
  let C502;
  let C503;
  let C501;
  let C500;
  let C506;
  let C505;
  let C504;
  let C507;
  let C508;
  html_parser.HtmlOldParser = class HtmlOldParser extends framework.StatelessWidget {
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
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
    get customRender() {
      return this[customRender$];
    }
    set customRender(value) {
      super.customRender = value;
    }
    get blockSpacing() {
      return this[blockSpacing$];
    }
    set blockSpacing(value) {
      super.blockSpacing = value;
    }
    get html() {
      return this[html$];
    }
    set html(value) {
      super.html = value;
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
    get showImages() {
      return this[showImages$];
    }
    set showImages(value) {
      super.showImages = value;
    }
    build(context) {
      return new basic.Wrap.new({alignment: wrap.WrapAlignment.start, children: this.parse(this.html), $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
    parse(data) {
      let widgetList = JSArrayOfWidget().of([]);
      if (dart.test(this.renderNewlines)) {
        data = data[$replaceAll]("\n", "<br />");
      }
      let document = parser.parse(data);
      widgetList[$add](this[_parseNode](document.body));
      return widgetList;
    }
    [_parseNode](node) {
      if (this.customRender != null) {
        let customWidget = this.customRender(node, this[_parseNodeList](node.nodes));
        if (customWidget != null) {
          return customWidget;
        }
      }
      if (dom.Element.is(node)) {
        if (!dart.test(html_parser.HtmlOldParser._supportedElements[$contains](node.localName))) {
          return new container.Container.new({$creationLocationd_0dea112b090073317d4: C12 || CT.C12});
        }
        switch (node.localName) {
          case "a":
          {
            return new gesture_detector.GestureDetector.new({child: text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), style: this.linkStyle}), onTap: dart.fn(() => {
                if (dart.test(node.attributes[$containsKey]("href")) && this.onLinkTap != null) {
                  let url = node.attributes[$_get]("href");
                  this.onLinkTap(url);
                }
              }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
          }
          case "abbr":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), style: C24 || CT.C24});
          }
          case "acronym":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), style: C24 || CT.C24});
          }
          case "address":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C29 || CT.C29}), style: C32 || CT.C32});
          }
          case "article":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C38 || CT.C38});
          }
          case "aside":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
          }
          case "b":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C50 || CT.C50}), style: C53 || CT.C53});
          }
          case "bdi":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
          }
          case "bdo":
          {
            if (node.attributes[$_get]("dir") != null) {
              return new basic.Directionality.new({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), textDirection: node.attributes[$_get]("dir") === "rtl" ? ui.TextDirection.rtl : ui.TextDirection.ltr, $creationLocationd_0dea112b090073317d4: C61 || CT.C61});
            }
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
          }
          case "big":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C68 || CT.C68}), style: C71 || CT.C71});
          }
          case "blockquote":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(40.0, this.blockSpacing, 40.0, this.blockSpacing), child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C72 || CT.C72}), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80});
          }
          case "body":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88});
          }
          case "br":
          {
            if (dart.test(this[_isNotFirstBreakTag](node))) {
              return new container.Container.new({width: this.width, height: this.blockSpacing, $creationLocationd_0dea112b090073317d4: C92 || CT.C92});
            }
            return new container.Container.new({width: this.width, $creationLocationd_0dea112b090073317d4: C96 || CT.C96});
          }
          case "caption":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, alignment: wrap.WrapAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C104 || CT.C104});
          }
          case "center":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), alignment: wrap.WrapAlignment.center, $creationLocationd_0dea112b090073317d4: C108 || CT.C108}), $creationLocationd_0dea112b090073317d4: C113 || CT.C113});
          }
          case "cite":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C117 || CT.C117}), style: C32 || CT.C32});
          }
          case "code":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C120 || CT.C120}), style: C123 || CT.C123});
          }
          case "data":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C124 || CT.C124});
          }
          case "dd":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({left: 40.0}), child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C127 || CT.C127}), $creationLocationd_0dea112b090073317d4: C131 || CT.C131}), $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
          }
          case "del":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), style: C142 || CT.C142});
          }
          case "dfn":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), style: C32 || CT.C32});
          }
          case "div":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), $creationLocationd_0dea112b090073317d4: C151 || CT.C151});
          }
          case "dl":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: this.blockSpacing, bottom: this.blockSpacing}), child: new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C155 || CT.C155}), $creationLocationd_0dea112b090073317d4: C159 || CT.C159});
          }
          case "dt":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C163 || CT.C163});
          }
          case "em":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C166 || CT.C166}), style: C32 || CT.C32});
          }
          case "figcaption":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C169 || CT.C169});
          }
          case "figure":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.fromLTRB(40.0, this.blockSpacing, 40.0, this.blockSpacing), child: new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.center, $creationLocationd_0dea112b090073317d4: C172 || CT.C172}), $creationLocationd_0dea112b090073317d4: C176 || CT.C176});
          }
          case "font":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C180 || CT.C180});
          }
          case "footer":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C183 || CT.C183}), $creationLocationd_0dea112b090073317d4: C187 || CT.C187});
          }
          case "h1":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C191 || CT.C191}), $creationLocationd_0dea112b090073317d4: C195 || CT.C195}), style: C199 || CT.C199});
          }
          case "h2":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C200 || CT.C200}), $creationLocationd_0dea112b090073317d4: C204 || CT.C204}), style: C208 || CT.C208});
          }
          case "h3":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C209 || CT.C209}), $creationLocationd_0dea112b090073317d4: C213 || CT.C213}), style: C217 || CT.C217});
          }
          case "h4":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C218 || CT.C218}), $creationLocationd_0dea112b090073317d4: C222 || CT.C222}), style: C226 || CT.C226});
          }
          case "h5":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), style: C235 || CT.C235});
          }
          case "h6":
          {
            return text.DefaultTextStyle.merge({child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C236 || CT.C236}), $creationLocationd_0dea112b090073317d4: C240 || CT.C240}), style: C244 || CT.C244});
          }
          case "header":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C245 || CT.C245}), $creationLocationd_0dea112b090073317d4: C249 || CT.C249});
          }
          case "hr":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: 7.0, bottom: 7.0}), child: new divider.Divider.new({height: 1.0, color: colors$.Colors.black38, $creationLocationd_0dea112b090073317d4: C253 || CT.C253}), $creationLocationd_0dea112b090073317d4: C257 || CT.C257});
          }
          case "i":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C261 || CT.C261}), style: C32 || CT.C32});
          }
          case "img":
          {
            return new basic.Builder.new({builder: dart.fn(context => {
                if (dart.test(this.showImages)) {
                  if (node.attributes[$_get]("src") != null) {
                    if (node.attributes[$_get]("src")[$startsWith]("data:image") && node.attributes[$_get]("src")[$contains]("base64,")) {
                      image.precacheImage(new image_provider.MemoryImage.new(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]())), context, {onError: this.onImageError});
                      return new image.Image.memory(convert.base64.decode(node.attributes[$_get]("src")[$split]("base64,")[$_get](1)[$trim]()), {$creationLocationd_0dea112b090073317d4: C264 || CT.C264});
                    }
                    image.precacheImage(new _network_image_web.NetworkImage.new(node.attributes[$_get]("src")), context, {onError: this.onImageError});
                    return new image.Image.network(node.attributes[$_get]("src"), {$creationLocationd_0dea112b090073317d4: C267 || CT.C267});
                  } else if (node.attributes[$_get]("alt") != null) {
                    if (node.attributes[$_get]("alt")[$endsWith](" ")) {
                      return new container.Container.new({padding: new edge_insets.EdgeInsets.only({right: 2.0}), child: new text.Text.new(node.attributes[$_get]("alt"), {$creationLocationd_0dea112b090073317d4: C270 || CT.C270}), $creationLocationd_0dea112b090073317d4: C273 || CT.C273});
                    } else {
                      return new text.Text.new(node.attributes[$_get]("alt"), {$creationLocationd_0dea112b090073317d4: C277 || CT.C277});
                    }
                  }
                }
                return new container.Container.new({$creationLocationd_0dea112b090073317d4: C280 || CT.C280});
              }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C281 || CT.C281});
          }
          case "ins":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C284 || CT.C284}), style: C287 || CT.C287});
          }
          case "kbd":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C288 || CT.C288}), style: C123 || CT.C123});
          }
          case "li":
          {
            let type = node.parent.localName;
            let markPadding = C291 || CT.C291;
            let mark = null;
            switch (type) {
              case "ul":
              {
                mark = new container.Container.new({child: new text.Text.new("•", {$creationLocationd_0dea112b090073317d4: C292 || CT.C292}), padding: markPadding, $creationLocationd_0dea112b090073317d4: C295 || CT.C295});
                break;
              }
              case "ol":
              {
                let index = dart.notNull(node.parent.children[$indexOf](node)) + 1;
                mark = new container.Container.new({child: new text.Text.new(dart.str(index) + ".", {$creationLocationd_0dea112b090073317d4: C299 || CT.C299}), padding: markPadding, $creationLocationd_0dea112b090073317d4: C302 || CT.C302});
                break;
              }
              default:
              {
                mark = new container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: C306 || CT.C306});
                break;
              }
            }
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: JSArrayOfWidget().of([mark, new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C310 || CT.C310})]), $creationLocationd_0dea112b090073317d4: C314 || CT.C314}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318});
          }
          case "main":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C322 || CT.C322}), $creationLocationd_0dea112b090073317d4: C326 || CT.C326});
          }
          case "mark":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C330 || CT.C330}), style: new text_style.TextStyle.new({color: colors$.Colors.black, background: this[_getPaint](colors$.Colors.yellow)})});
          }
          case "nav":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C333 || CT.C333}), $creationLocationd_0dea112b090073317d4: C337 || CT.C337});
          }
          case "noscript":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, alignment: wrap.WrapAlignment.start, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C341 || CT.C341}), $creationLocationd_0dea112b090073317d4: C346 || CT.C346});
          }
          case "ol":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C350 || CT.C350});
          }
          case "p":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.only({top: this.blockSpacing, bottom: this.blockSpacing}), child: new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, alignment: wrap.WrapAlignment.start, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C354 || CT.C354}), $creationLocationd_0dea112b090073317d4: C359 || CT.C359}), $creationLocationd_0dea112b090073317d4: C363 || CT.C363});
          }
          case "pre":
          {
            return new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(this.blockSpacing), child: text.DefaultTextStyle.merge({child: new text.Text.new(node.innerHtml, {$creationLocationd_0dea112b090073317d4: C367 || CT.C367}), style: C123 || CT.C123}), $creationLocationd_0dea112b090073317d4: C370 || CT.C370});
          }
          case "q":
          {
            let children = JSArrayOfWidget().of([]);
            children[$add](new text.Text.new("\"", {$creationLocationd_0dea112b090073317d4: C374 || CT.C374}));
            children[$addAll](this[_parseNodeList](node.nodes));
            children[$add](new text.Text.new("\"", {$creationLocationd_0dea112b090073317d4: C377 || CT.C377}));
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: children, $creationLocationd_0dea112b090073317d4: C380 || CT.C380}), style: C32 || CT.C32});
          }
          case "rp":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C383 || CT.C383});
          }
          case "rt":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C386 || CT.C386});
          }
          case "ruby":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C389 || CT.C389});
          }
          case "s":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C392 || CT.C392}), style: C142 || CT.C142});
          }
          case "samp":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C395 || CT.C395}), style: C123 || CT.C123});
          }
          case "section":
          {
            return new container.Container.new({width: this.width, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C398 || CT.C398}), $creationLocationd_0dea112b090073317d4: C402 || CT.C402});
          }
          case "small":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C406 || CT.C406}), style: C409 || CT.C409});
          }
          case "span":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C410 || CT.C410});
          }
          case "strike":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C413 || CT.C413}), style: C142 || CT.C142});
          }
          case "strong":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C416 || CT.C416}), style: C53 || CT.C53});
          }
          case "sub":
          case "sup":
          {
            return new basic.Builder.new({builder: dart.fn(context => {
                let parent = text.DefaultTextStyle.of(context);
                let parentStyle = parent.style;
                let painter = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: node.text, style: parentStyle}), textDirection: ui.TextDirection.ltr});
                painter.layout();
                let height = dart.notNull(painter.size.height) * 1.35;
                painter = new text_painter.TextPainter.new({text: new text_span.TextSpan.new({text: node.text, style: parentStyle.merge(new text_style.TextStyle.new({fontSize: dart.notNull(parentStyle.fontSize) * 0.7}))}), textDirection: ui.TextDirection.ltr});
                painter.layout();
                let width = painter.size.width;
                return text.DefaultTextStyle.merge({child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: JSArrayOfWidget().of([new basic.Stack.new({fit: stack.StackFit.loose, children: JSArrayOfWidget().of([new basic.SizedBox.new({width: width, height: height, $creationLocationd_0dea112b090073317d4: C419 || CT.C419}), text.DefaultTextStyle.merge({child: new basic.Positioned.new({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C423 || CT.C423}), bottom: node.localName === "sub" ? 0.0 : null, top: node.localName === "sub" ? null : 0.0, $creationLocationd_0dea112b090073317d4: C426 || CT.C426}), style: new text_style.TextStyle.new({fontSize: dart.notNull(parentStyle.fontSize) * 0.7})})]), $creationLocationd_0dea112b090073317d4: C431 || CT.C431})]), $creationLocationd_0dea112b090073317d4: C435 || CT.C435})});
              }, BuildContextToWidget()), $creationLocationd_0dea112b090073317d4: C439 || CT.C439});
          }
          case "table":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C442 || CT.C442});
          }
          case "tbody":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C446 || CT.C446});
          }
          case "td":
          {
            let colspan = 1;
            if (node.attributes[$_get]("colspan") != null) {
              colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
            }
            return new basic.Expanded.new({flex: colspan, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C450 || CT.C450}), $creationLocationd_0dea112b090073317d4: C454 || CT.C454});
          }
          case "template":
          {
            return new container.Container.new({$creationLocationd_0dea112b090073317d4: C458 || CT.C458});
          }
          case "tfoot":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C459 || CT.C459});
          }
          case "th":
          {
            let colspan = 1;
            if (node.attributes[$_get]("colspan") != null) {
              colspan = core.int.tryParse(node.attributes[$_get]("colspan"));
            }
            return text.DefaultTextStyle.merge({child: new basic.Expanded.new({flex: colspan, child: new basic.Wrap.new({crossAxisAlignment: wrap.WrapCrossAlignment.center, alignment: wrap.WrapAlignment.center, children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C463 || CT.C463}), $creationLocationd_0dea112b090073317d4: C468 || CT.C468}), style: C53 || CT.C53});
          }
          case "thead":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C472 || CT.C472});
          }
          case "time":
          {
            return new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C476 || CT.C476});
          }
          case "tr":
          {
            return new basic.Row.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.center, $creationLocationd_0dea112b090073317d4: C479 || CT.C479});
          }
          case "tt":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C483 || CT.C483}), style: C123 || CT.C123});
          }
          case "u":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C486 || CT.C486}), style: C287 || CT.C287});
          }
          case "ul":
          {
            return new basic.Column.new({children: this[_parseNodeList](node.nodes), crossAxisAlignment: flex.CrossAxisAlignment.start, $creationLocationd_0dea112b090073317d4: C489 || CT.C489});
          }
          case "var":
          {
            return text.DefaultTextStyle.merge({child: new basic.Wrap.new({children: this[_parseNodeList](node.nodes), $creationLocationd_0dea112b090073317d4: C493 || CT.C493}), style: C32 || CT.C32});
          }
        }
      } else if (dom.Text.is(node)) {
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") === -1) {
          return new basic.Wrap.new({$creationLocationd_0dea112b090073317d4: C496 || CT.C496});
        }
        if (node.text[$trim]() === "" && node.text[$indexOf](" ") !== -1) {
          node.text = " ";
        }
        let finalText = this.trimStringHtml(node.text);
        if (finalText[$endsWith](" ")) {
          return new container.Container.new({padding: new edge_insets.EdgeInsets.only({right: 2.0}), child: new text.Text.new(finalText, {$creationLocationd_0dea112b090073317d4: C497 || CT.C497}), $creationLocationd_0dea112b090073317d4: C500 || CT.C500});
        } else {
          return new text.Text.new(finalText, {$creationLocationd_0dea112b090073317d4: C504 || CT.C504});
        }
      }
      return new basic.Wrap.new({$creationLocationd_0dea112b090073317d4: C507 || CT.C507});
    }
    [_parseNodeList](nodeList) {
      return nodeList[$map](framework.Widget, dart.fn(node => this[_parseNode](node), NodeToWidget()))[$toList]();
    }
    [_getPaint](color) {
      let paint = new ui.Paint.new();
      paint.color = color;
      return paint;
    }
    trimStringHtml(stringToTrim) {
      stringToTrim = stringToTrim[$replaceAll]("\n", "");
      while (stringToTrim[$indexOf]("  ") !== -1) {
        stringToTrim = stringToTrim[$replaceAll]("  ", " ");
      }
      return stringToTrim;
    }
    [_isNotFirstBreakTag](node) {
      let index = node.parentNode.nodes[$indexOf](node);
      if (index === 0) {
        if (node.parentNode == null) {
          return false;
        }
        return this[_isNotFirstBreakTag](node.parentNode);
      } else if (dom.Element.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom.Element.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).localName === "br") {
          return true;
        }
        return false;
      } else if (dom.Text.is(node.parentNode.nodes._get(dart.notNull(index) - 1))) {
        if (dom.Text.as(node.parentNode.nodes._get(dart.notNull(index) - 1)).text[$trim]() === "") {
          return this[_isNotFirstBreakTag](node.parentNode.nodes._get(dart.notNull(index) - 1));
        } else {
          return false;
        }
      }
      return false;
    }
  };
  (html_parser.HtmlOldParser.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let customRender = opts && 'customRender' in opts ? opts.customRender : null;
    let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : null;
    let html = opts && 'html' in opts ? opts.html : null;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : C0 || CT.C0;
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[width$] = width;
    this[onLinkTap$] = onLinkTap;
    this[renderNewlines$] = renderNewlines;
    this[customRender$] = customRender;
    this[blockSpacing$] = blockSpacing;
    this[html$] = html;
    this[onImageError$] = onImageError;
    this[linkStyle$] = linkStyle;
    this[showImages$] = showImages;
    html_parser.HtmlOldParser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.HtmlOldParser.prototype;
  dart.addTypeTests(html_parser.HtmlOldParser);
  const width$ = Symbol("HtmlOldParser.width");
  const onLinkTap$ = Symbol("HtmlOldParser.onLinkTap");
  const renderNewlines$ = Symbol("HtmlOldParser.renderNewlines");
  const customRender$ = Symbol("HtmlOldParser.customRender");
  const blockSpacing$ = Symbol("HtmlOldParser.blockSpacing");
  const html$ = Symbol("HtmlOldParser.html");
  const onImageError$ = Symbol("HtmlOldParser.onImageError");
  const linkStyle$ = Symbol("HtmlOldParser.linkStyle");
  const showImages$ = Symbol("HtmlOldParser.showImages");
  dart.setMethodSignature(html_parser.HtmlOldParser, () => ({
    __proto__: dart.getMethods(html_parser.HtmlOldParser.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    parse: dart.fnType(core.List$(framework.Widget), [core.String]),
    [_parseNode]: dart.fnType(framework.Widget, [dom.Node]),
    [_parseNodeList]: dart.fnType(core.List$(framework.Widget), [core.List$(dom.Node)]),
    [_getPaint]: dart.fnType(ui.Paint, [ui.Color]),
    trimStringHtml: dart.fnType(core.String, [core.String]),
    [_isNotFirstBreakTag]: dart.fnType(core.bool, [dom.Node])
  }));
  dart.setLibraryUri(html_parser.HtmlOldParser, "package:flutter_html/html_parser.dart");
  dart.setFieldSignature(html_parser.HtmlOldParser, () => ({
    __proto__: dart.getFields(html_parser.HtmlOldParser.__proto__),
    width: dart.finalFieldType(core.double),
    onLinkTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    renderNewlines: dart.finalFieldType(core.bool),
    customRender: dart.finalFieldType(dart.fnType(framework.Widget, [dom.Node, core.List$(framework.Widget)])),
    blockSpacing: dart.finalFieldType(core.double),
    html: dart.finalFieldType(core.String),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(text_style.TextStyle),
    showImages: dart.finalFieldType(core.bool)
  }));
  dart.defineLazy(html_parser.HtmlOldParser, {
    /*html_parser.HtmlOldParser._supportedElements*/get _supportedElements() {
      return C508 || CT.C508;
    }
  });
  dart.trackLibraries("packages/flutter_html/html_parser", {
    "package:flutter_html/html_parser.dart": html_parser
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["html_parser.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"html_parser.ddc.js"}');
  // Exports:
  return {
    html_parser: html_parser
  };
});

//# sourceMappingURL=html_parser.ddc.js.map

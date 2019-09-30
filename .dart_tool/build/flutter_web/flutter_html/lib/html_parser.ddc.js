define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/html/dom', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/csslib/parser'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__html__dom, packages__flutter__material, packages__flutter__src__widgets__actions, packages__csslib__parser) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const inline_span = packages__flutter__src__painting___network_image_web.src__painting__inline_span;
  const text_span = packages__flutter__src__painting___network_image_web.src__painting__text_span;
  const box_decoration = packages__flutter__src__painting___network_image_web.src__painting__box_decoration;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const box_border = packages__flutter__src__painting___network_image_web.src__painting__box_border;
  const borders = packages__flutter__src__painting___network_image_web.src__painting__borders;
  const query_selector = packages__html__dom.src__query_selector;
  const dom = packages__html__dom.dom;
  const parser = packages__html__dom.parser;
  const colors = packages__flutter__material.src__material__colors;
  const theme = packages__flutter__material.src__material__theme;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const widget_span = packages__flutter__src__widgets__actions.src__widgets__widget_span;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const parser$ = packages__csslib__parser.parser;
  const visitor = packages__csslib__parser.visitor;
  const style = Object.create(dart.library);
  const styled_element = Object.create(dart.library);
  const html_parser = Object.create(dart.library);
  const html_elements = Object.create(dart.library);
  const replaced_element = Object.create(dart.library);
  const block_element = Object.create(dart.library);
  const interactable_element = Object.create(dart.library);
  const $length = dartx.length;
  const $toString = dartx.toString;
  const $replaceAll = dartx.replaceAll;
  const $forEach = dartx.forEach;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $contains = dartx.contains;
  const $first = dartx.first;
  const $map = dartx.map;
  const $insert = dartx.insert;
  const $isEmpty = dartx.isEmpty;
  const $removeWhere = dartx.removeWhere;
  const $where = dartx.where;
  const $startsWith = dartx.startsWith;
  const $split = dartx.split;
  const $trim = dartx.trim;
  let StyledElementToNull = () => (StyledElementToNull = dart.constFn(dart.fnType(core.Null, [styled_element.StyledElement])))();
  let JSArrayOfStyledElement = () => (JSArrayOfStyledElement = dart.constFn(_interceptors.JSArray$(styled_element.StyledElement)))();
  let NodeToNull = () => (NodeToNull = dart.constFn(dart.fnType(core.Null, [dom.Node])))();
  let TreeNodeToNull = () => (TreeNodeToNull = dart.constFn(dart.fnType(core.Null, [visitor.TreeNode])))();
  let StringAndStyleToNull = () => (StringAndStyleToNull = dart.constFn(dart.fnType(core.Null, [core.String, style.Style])))();
  let StyledElementToInlineSpan = () => (StyledElementToInlineSpan = dart.constFn(dart.fnType(inline_span.InlineSpan, [styled_element.StyledElement])))();
  let JSArrayOfInlineSpan = () => (JSArrayOfInlineSpan = dart.constFn(_interceptors.JSArray$(inline_span.InlineSpan)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StyledElementToStyledElement = () => (StyledElementToStyledElement = dart.constFn(dart.fnType(styled_element.StyledElement, [styled_element.StyledElement])))();
  let StyledElementTobool = () => (StyledElementTobool = dart.constFn(dart.fnType(core.bool, [styled_element.StyledElement])))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [dom.Element])))();
  let ElementToString = () => (ElementToString = dart.constFn(dart.fnType(core.String, [dom.Element])))();
  let BuildContextAndWidgetAndint__ToWidget = () => (BuildContextAndWidgetAndint__ToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget, core.int, core.bool])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: style.Display.prototype,
        [_name$]: "Display.BLOCK",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: style.Display.prototype,
        [_name$]: "Display.INLINE",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: style.Display.prototype,
        [_name$]: "Display.INLINE_BLOCK",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], style.Display);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 21,
        line: 39,
        file: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C5 || CT.C5,
        name: null,
        column: 12,
        line: 39,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 11,
        line: 152,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "thisContext",
        column: 11,
        line: 153,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "newContext",
        column: 11,
        line: 154,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 155,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 16,
        line: 151,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 13,
        line: 176,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 18,
        line: 175,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 11,
        line: 174,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 175,
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
        column: 16,
        line: 173,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C20() {
      return C20 = dart.fn(html_parser.HtmlParser._processWhitespace, StyledElementToStyledElement());
    },
    get C21() {
      return C21 = dart.fn(html_parser.HtmlParser._processListCharacters, StyledElementToStyledElement());
    },
    get C22() {
      return C22 = dart.fn(html_parser.HtmlParser._processBeforesAndAfters, StyledElementToStyledElement());
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "text",
        column: 9,
        line: 314,
        file: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C24 || CT.C24,
        name: null,
        column: 14,
        line: 313,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 7,
        line: 304,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 7,
        line: 308,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 309,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 310,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "margin",
        column: 7,
        line: 311,
        file: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "alignment",
        column: 7,
        line: 312,
        file: null
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 313,
        file: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33, C34 || CT.C34], widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C27 || CT.C27,
        name: null,
        column: 12,
        line: 303,
        file: "org-dartlang-app:///packages/flutter_html/html_parser.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: html_elements.ElementType.prototype,
        [_name$0]: "ElementType.REPLACED",
        index: 0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: html_elements.ElementType.prototype,
        [_name$0]: "ElementType.INLINE",
        index: 1
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: html_elements.ElementType.prototype,
        [_name$0]: "ElementType.BLOCK",
        index: 2
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: html_elements.ElementType.prototype,
        [_name$0]: "ElementType.INTERACTABLE",
        index: 3
      });
    },
    get C39() {
      return C39 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], html_elements.ElementType);
    },
    get C40() {
      return C40 = dart.constList(["abbr", "acronym", "address", "b", "bdi", "bdo", "big", "cite", "code", "data", "del", "dfn", "em", "font", "i", "ins", "kbd", "mark", "q", "rp", "rt", "ruby", "s", "samp", "small", "span", "strike", "strong", "sub", "sup", "time", "tt", "u", "var", "wbr"], core.String);
    },
    get C41() {
      return C41 = dart.constList(["a"], core.String);
    },
    get C42() {
      return C42 = dart.constList(["article", "aside", "blockquote", "body", "center", "dd", "div", "dl", "dt", "figcaption", "figure", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "html", "li", "main", "nav", "noscript", "ol", "p", "pre", "section", "table", "tbody", "tfoot", "thead", "ul"], core.String);
    },
    get C43() {
      return C43 = dart.constList(["audio", "br", "head", "iframe", "img", "template", "video"], core.String);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 38,
        line: 64,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 45,
        line: 64,
        file: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46, C47 || CT.C47], widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C45 || CT.C45,
        name: null,
        column: 29,
        line: 64,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bytes",
        column: 34,
        line: 66,
        file: null
      });
    },
    get C49() {
      return C49 = dart.constList([C50 || CT.C50], widget_inspector._Location);
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C49 || CT.C49,
        name: null,
        column: 20,
        line: 66,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 27,
        line: 70,
        file: null
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 34,
        line: 70,
        file: null
      });
    },
    get C52() {
      return C52 = dart.constList([C53 || CT.C53, C54 || CT.C54], widget_inspector._Location);
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C52 || CT.C52,
        name: null,
        column: 18,
        line: 70,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 28,
        line: 68,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "frameBuilder",
        column: 33,
        line: 68,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 20,
        line: 68,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 66,
        line: 94,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 61,
        line: 94,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 22,
        line: 94,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 54,
        line: 94,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 12,
        line: 94,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 24,
        right: 24,
        top: 24,
        left: 24
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 69,
        line: 120,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 78,
        line: 120,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 64,
        line: 120,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 22,
        line: 120,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 57,
        line: 120,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 12,
        line: 120,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 69,
        line: 148,
        file: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 78,
        line: 148,
        file: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C76 || CT.C76,
        name: null,
        column: 64,
        line: 148,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 22,
        line: 148,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 57,
        line: 148,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 12,
        line: 148,
        file: "org-dartlang-app:///packages/flutter_html/src/replaced_element.dart"
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: alignment.Alignment.prototype,
        y: 0,
        x: -1
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 14,
        right: 40,
        top: 0,
        left: 40
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 14,
        right: 40,
        top: 14,
        left: 40
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: interactable_element.Gesture.prototype,
        [_name$1]: "Gesture.TAP",
        index: 0
      });
    },
    get C87() {
      return C87 = dart.constList([C86 || CT.C86], interactable_element.Gesture);
    }
  });
  style.Style = class Style extends core.Object {
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      this[backgroundColor$] = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      this[color$] = value;
    }
    get display() {
      return this[display$];
    }
    set display(value) {
      this[display$] = value;
    }
    get fontFamily() {
      return this[fontFamily$];
    }
    set fontFamily(value) {
      this[fontFamily$] = value;
    }
    get fontSize() {
      return this[fontSize$];
    }
    set fontSize(value) {
      this[fontSize$] = value;
    }
    get fontStyle() {
      return this[fontStyle$];
    }
    set fontStyle(value) {
      this[fontStyle$] = value;
    }
    get fontWeight() {
      return this[fontWeight$];
    }
    set fontWeight(value) {
      this[fontWeight$] = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      this[padding$] = value;
    }
    get margin() {
      return this[margin$];
    }
    set margin(value) {
      this[margin$] = value;
    }
    get textDecoration() {
      return this[textDecoration$];
    }
    set textDecoration(value) {
      this[textDecoration$] = value;
    }
    get textDecorationStyle() {
      return this[textDecorationStyle$];
    }
    set textDecorationStyle(value) {
      this[textDecorationStyle$] = value;
    }
    get preserveWhitespace() {
      return this[preserveWhitespace$];
    }
    set preserveWhitespace(value) {
      this[preserveWhitespace$] = value;
    }
    get baselineOffset() {
      return this[baselineOffset$];
    }
    set baselineOffset(value) {
      this[baselineOffset$] = value;
    }
    get before() {
      return this[before$];
    }
    set before(value) {
      this[before$] = value;
    }
    get after() {
      return this[after$];
    }
    set after(value) {
      this[after$] = value;
    }
    get textDirection() {
      return this[textDirection$];
    }
    set textDirection(value) {
      this[textDirection$] = value;
    }
    get block() {
      return this[block$];
    }
    set block(value) {
      this[block$] = value;
    }
    generateTextStyle() {
      return new text_style.TextStyle.new({backgroundColor: this.backgroundColor, color: this.color, decoration: this.textDecoration, decorationStyle: this.textDecorationStyle, fontFamily: this.fontFamily, fontSize: this.fontSize, fontStyle: this.fontStyle, fontWeight: this.fontWeight});
    }
    toString() {
      return "Instance of `Style`";
    }
    merge(other) {
      let t0;
      if (other == null) return this;
      let mergedBlock = (t0 = this.block, t0 == null ? null : t0.merge(other.block));
      return this.copyWith({backgroundColor: other.backgroundColor, color: this.color, display: other.display, fontFamily: this.fontFamily, fontSize: this.fontSize, fontStyle: this.fontStyle, fontWeight: this.fontWeight, padding: this.padding, margin: this.margin, textDecoration: this.textDecoration, textDecorationStyle: this.textDecorationStyle, preserveWhitespace: other.preserveWhitespace, baselineOffset: other.baselineOffset, before: other.before, after: other.after, textDirection: other.textDirection, block: mergedBlock});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9, t0$10, t0$11, t0$12, t0$13, t0$14;
      let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
      let color = opts && 'color' in opts ? opts.color : null;
      let display = opts && 'display' in opts ? opts.display : null;
      let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
      let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
      let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
      let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let margin = opts && 'margin' in opts ? opts.margin : null;
      let textDecoration = opts && 'textDecoration' in opts ? opts.textDecoration : null;
      let textDecorationStyle = opts && 'textDecorationStyle' in opts ? opts.textDecorationStyle : null;
      let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : null;
      let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
      let before = opts && 'before' in opts ? opts.before : null;
      let after = opts && 'after' in opts ? opts.after : null;
      let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
      let block = opts && 'block' in opts ? opts.block : null;
      return new style.Style.new({backgroundColor: (t0 = backgroundColor, t0 == null ? this.backgroundColor : t0), color: (t0$ = color, t0$ == null ? this.color : t0$), display: (t0$0 = display, t0$0 == null ? this.display : t0$0), fontFamily: (t0$1 = fontFamily, t0$1 == null ? this.fontFamily : t0$1), fontSize: (t0$2 = fontSize, t0$2 == null ? this.fontSize : t0$2), fontStyle: (t0$3 = fontStyle, t0$3 == null ? this.fontStyle : t0$3), fontWeight: (t0$4 = fontWeight, t0$4 == null ? this.fontWeight : t0$4), padding: (t0$5 = padding, t0$5 == null ? this.padding : t0$5), margin: (t0$6 = margin, t0$6 == null ? this.margin : t0$6), textDecoration: (t0$7 = textDecoration, t0$7 == null ? this.textDecoration : t0$7), textDecorationStyle: (t0$8 = textDecorationStyle, t0$8 == null ? this.textDecorationStyle : t0$8), preserveWhitespace: (t0$9 = preserveWhitespace, t0$9 == null ? this.preserveWhitespace : t0$9), baselineOffset: (t0$10 = baselineOffset, t0$10 == null ? this.baselineOffset : t0$10), before: (t0$11 = before, t0$11 == null ? this.before : t0$11), after: (t0$12 = after, t0$12 == null ? this.after : t0$12), textDirection: (t0$13 = textDirection, t0$13 == null ? this.textDirection : t0$13), block: (t0$14 = block, t0$14 == null ? this.block : t0$14)});
    }
  };
  (style.Style.new = function(opts) {
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let display = opts && 'display' in opts ? opts.display : null;
    let fontFamily = opts && 'fontFamily' in opts ? opts.fontFamily : null;
    let fontSize = opts && 'fontSize' in opts ? opts.fontSize : null;
    let fontStyle = opts && 'fontStyle' in opts ? opts.fontStyle : null;
    let fontWeight = opts && 'fontWeight' in opts ? opts.fontWeight : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let margin = opts && 'margin' in opts ? opts.margin : null;
    let textDecoration = opts && 'textDecoration' in opts ? opts.textDecoration : null;
    let textDecorationStyle = opts && 'textDecorationStyle' in opts ? opts.textDecorationStyle : null;
    let preserveWhitespace = opts && 'preserveWhitespace' in opts ? opts.preserveWhitespace : null;
    let baselineOffset = opts && 'baselineOffset' in opts ? opts.baselineOffset : null;
    let before = opts && 'before' in opts ? opts.before : null;
    let after = opts && 'after' in opts ? opts.after : null;
    let textDirection = opts && 'textDirection' in opts ? opts.textDirection : null;
    let block = opts && 'block' in opts ? opts.block : null;
    this[backgroundColor$] = backgroundColor;
    this[color$] = color;
    this[display$] = display;
    this[fontFamily$] = fontFamily;
    this[fontSize$] = fontSize;
    this[fontStyle$] = fontStyle;
    this[fontWeight$] = fontWeight;
    this[padding$] = padding;
    this[margin$] = margin;
    this[textDecoration$] = textDecoration;
    this[textDecorationStyle$] = textDecorationStyle;
    this[preserveWhitespace$] = preserveWhitespace;
    this[baselineOffset$] = baselineOffset;
    this[before$] = before;
    this[after$] = after;
    this[textDirection$] = textDirection;
    this[block$] = block;
    ;
  }).prototype = style.Style.prototype;
  dart.addTypeTests(style.Style);
  const backgroundColor$ = Symbol("Style.backgroundColor");
  const color$ = Symbol("Style.color");
  const display$ = Symbol("Style.display");
  const fontFamily$ = Symbol("Style.fontFamily");
  const fontSize$ = Symbol("Style.fontSize");
  const fontStyle$ = Symbol("Style.fontStyle");
  const fontWeight$ = Symbol("Style.fontWeight");
  const padding$ = Symbol("Style.padding");
  const margin$ = Symbol("Style.margin");
  const textDecoration$ = Symbol("Style.textDecoration");
  const textDecorationStyle$ = Symbol("Style.textDecorationStyle");
  const preserveWhitespace$ = Symbol("Style.preserveWhitespace");
  const baselineOffset$ = Symbol("Style.baselineOffset");
  const before$ = Symbol("Style.before");
  const after$ = Symbol("Style.after");
  const textDirection$ = Symbol("Style.textDirection");
  const block$ = Symbol("Style.block");
  dart.setMethodSignature(style.Style, () => ({
    __proto__: dart.getMethods(style.Style.__proto__),
    generateTextStyle: dart.fnType(text_style.TextStyle, []),
    merge: dart.fnType(style.Style, [style.Style]),
    copyWith: dart.fnType(style.Style, [], {after: core.String, backgroundColor: ui.Color, baselineOffset: core.int, before: core.String, block: block_element.Block, color: ui.Color, display: style.Display, fontFamily: core.String, fontSize: core.double, fontStyle: ui.FontStyle, fontWeight: ui.FontWeight, margin: edge_insets.EdgeInsets, padding: edge_insets.EdgeInsets, preserveWhitespace: core.bool, textDecoration: ui.TextDecoration, textDecorationStyle: ui.TextDecorationStyle, textDirection: ui.TextDirection})
  }));
  dart.setLibraryUri(style.Style, "package:flutter_html/style.dart");
  dart.setFieldSignature(style.Style, () => ({
    __proto__: dart.getFields(style.Style.__proto__),
    backgroundColor: dart.fieldType(ui.Color),
    color: dart.fieldType(ui.Color),
    display: dart.fieldType(style.Display),
    fontFamily: dart.fieldType(core.String),
    fontSize: dart.fieldType(core.double),
    fontStyle: dart.fieldType(ui.FontStyle),
    fontWeight: dart.fieldType(ui.FontWeight),
    padding: dart.fieldType(edge_insets.EdgeInsets),
    margin: dart.fieldType(edge_insets.EdgeInsets),
    textDecoration: dart.fieldType(ui.TextDecoration),
    textDecorationStyle: dart.fieldType(ui.TextDecorationStyle),
    preserveWhitespace: dart.fieldType(core.bool),
    baselineOffset: dart.fieldType(core.int),
    before: dart.fieldType(core.String),
    after: dart.fieldType(core.String),
    textDirection: dart.fieldType(ui.TextDirection),
    block: dart.fieldType(block_element.Block)
  }));
  dart.defineExtensionMethods(style.Style, ['toString']);
  const _name$ = dart.privateName(style, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  style.Display = class Display extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (style.Display.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = style.Display.prototype;
  dart.addTypeTests(style.Display);
  dart.setLibraryUri(style.Display, "package:flutter_html/style.dart");
  dart.setFieldSignature(style.Display, () => ({
    __proto__: dart.getFields(style.Display.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(style.Display, ['toString']);
  style.Display.BLOCK = C0 || CT.C0;
  style.Display.INLINE = C1 || CT.C1;
  style.Display.INLINE_BLOCK = C2 || CT.C2;
  style.Display.values = C3 || CT.C3;
  const _node = dart.privateName(styled_element, "_node");
  styled_element.StyledElement = class StyledElement extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get elementId() {
      return this[elementId$];
    }
    set elementId(value) {
      super.elementId = value;
    }
    get elementClasses() {
      return this[elementClasses$];
    }
    set elementClasses(value) {
      super.elementClasses = value;
    }
    get children() {
      return this[children$];
    }
    set children(value) {
      this[children$] = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      this[style$] = value;
    }
    matchesSelector(selector) {
      return this[_node] != null && dart.test(query_selector.matches(this[_node], selector));
    }
    toString() {
      let t0, t0$, t0$0;
      let selfData = dart.str(this.name) + " [Children: " + dart.str((t0$ = (t0 = this.children, t0 == null ? null : t0[$length]), t0$ == null ? 0 : t0$)) + "] [Classes: " + dart.str(dart.toString(this.elementClasses)) + "] [ID: " + dart.str(this.elementId) + "] <Style: " + dart.str(this.style) + ">";
      t0$0 = this.children;
      t0$0 == null ? null : t0$0[$forEach](dart.fn(child => {
        selfData = selfData + ("\n" + dart.str(dart.toString(child)))[$replaceAll](core.RegExp.new("^", {multiLine: true}), "-");
      }, StyledElementToNull()));
      return selfData;
    }
  };
  (styled_element.StyledElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : "[[No name]]";
    let elementId = opts && 'elementId' in opts ? opts.elementId : null;
    let elementClasses = opts && 'elementClasses' in opts ? opts.elementClasses : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this[name$] = name;
    this[elementId$] = elementId;
    this[elementClasses$] = elementClasses;
    this[children$] = children;
    this[style$] = style;
    this[_node] = node;
    ;
  }).prototype = styled_element.StyledElement.prototype;
  dart.addTypeTests(styled_element.StyledElement);
  const name$ = Symbol("StyledElement.name");
  const elementId$ = Symbol("StyledElement.elementId");
  const elementClasses$ = Symbol("StyledElement.elementClasses");
  const children$ = Symbol("StyledElement.children");
  const style$ = Symbol("StyledElement.style");
  dart.setMethodSignature(styled_element.StyledElement, () => ({
    __proto__: dart.getMethods(styled_element.StyledElement.__proto__),
    matchesSelector: dart.fnType(core.bool, [core.String])
  }));
  dart.setLibraryUri(styled_element.StyledElement, "package:flutter_html/src/styled_element.dart");
  dart.setFieldSignature(styled_element.StyledElement, () => ({
    __proto__: dart.getFields(styled_element.StyledElement.__proto__),
    name: dart.finalFieldType(core.String),
    elementId: dart.finalFieldType(core.String),
    elementClasses: dart.finalFieldType(core.List$(core.String)),
    children: dart.fieldType(core.List$(styled_element.StyledElement)),
    style: dart.fieldType(style.Style),
    [_node]: dart.finalFieldType(dom.Node)
  }));
  dart.defineExtensionMethods(styled_element.StyledElement, ['toString']);
  styled_element.parseStyledElement = function parseStyledElement(element, children) {
    let t0;
    let styledElement = new styled_element.StyledElement.new({name: element.localName, elementId: element.id, elementClasses: element.classes[$toList](), children: children, node: element});
    let labelState = element.localName;
    SL0:
      while (true) {
        switch (labelState) {
          case "abbr":
          case "acronym":
          {
            styledElement.style = new style.Style.new({textDecoration: ui.TextDecoration.underline, textDecorationStyle: ui.TextDecorationStyle.dotted});
            break SL0;
          }
          case "address":
          {
            labelState = "i";
            continue SL0;
          }
          case "b":
          {
            styledElement.style = new style.Style.new({fontWeight: ui.FontWeight.bold});
            break SL0;
          }
          case "bdo":
          {
            let textDirection = (t0 = element.attributes[$_get]("dir"), t0 == null ? "ltr" : t0) === "rtl" ? ui.TextDirection.rtl : ui.TextDirection.ltr;
            styledElement.style = new style.Style.new({textDirection: textDirection});
            break SL0;
          }
          case "big":
          {
            styledElement.style = new style.Style.new({fontSize: 20.0});
            break SL0;
          }
          case "cite":
          {
            labelState = "i";
            continue SL0;
          }
          case "code":
          {
            styledElement.style = new style.Style.new({fontFamily: "Monospace"});
            break SL0;
          }
          case "del":
          {
            styledElement.style = new style.Style.new({textDecoration: ui.TextDecoration.lineThrough});
            break SL0;
          }
          case "dfn":
          {
            labelState = "i";
            continue SL0;
          }
          case "em":
          {
            labelState = "i";
            continue SL0;
          }
          case "i":
          {
            styledElement.style = new style.Style.new({fontStyle: ui.FontStyle.italic});
            break SL0;
          }
          case "ins":
          {
            labelState = "u";
            continue SL0;
          }
          case "kbd":
          {
            labelState = "code";
            continue SL0;
          }
          case "mark":
          {
            styledElement.style = new style.Style.new({color: colors.Colors.black, backgroundColor: colors.Colors.yellow});
            break SL0;
          }
          case "q":
          {
            styledElement.style = new style.Style.new({before: "\"", after: "\""});
            break SL0;
          }
          case "s":
          {
            labelState = "del";
            continue SL0;
          }
          case "samp":
          {
            labelState = "code";
            continue SL0;
          }
          case "small":
          {
            styledElement.style = new style.Style.new({fontSize: 10.0});
            break SL0;
          }
          case "strike":
          {
            labelState = "del";
            continue SL0;
          }
          case "strong":
          {
            labelState = "b";
            continue SL0;
          }
          case "sub":
          {
            styledElement.style = new style.Style.new({fontSize: 10.0, baselineOffset: -1});
            break SL0;
          }
          case "sup":
          {
            styledElement.style = new style.Style.new({fontSize: 10.0, baselineOffset: 1});
            break SL0;
          }
          case "tt":
          {
            labelState = "code";
            continue SL0;
          }
          case "u":
          {
            styledElement.style = new style.Style.new({textDecoration: ui.TextDecoration.underline});
            break SL0;
          }
          case "var":
          {
            labelState = "i";
            continue SL0;
            break SL0;
          }
        }
        break;
      }
    return styledElement;
  };
  const _applyCustomStyles = dart.privateName(html_parser, "_applyCustomStyles");
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C11;
  let C12;
  let C8;
  let C7;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C17;
  let C16;
  let C20;
  let C21;
  let C22;
  html_parser.HtmlParser = class HtmlParser extends framework.StatelessWidget {
    get htmlData() {
      return this[htmlData$];
    }
    set htmlData(value) {
      super.htmlData = value;
    }
    get cssData() {
      return this[cssData$];
    }
    set cssData(value) {
      super.cssData = value;
    }
    get onLinkTap() {
      return this[onLinkTap$];
    }
    set onLinkTap(value) {
      super.onLinkTap = value;
    }
    get style() {
      return this[style$0];
    }
    set style(value) {
      super.style = value;
    }
    build(context) {
      let document = html_parser.HtmlParser.parseHTML(this.htmlData);
      let sheet = html_parser.HtmlParser.parseCSS(this.cssData);
      let lexedTree = html_parser.HtmlParser.lexDomTree(document);
      let styledTree = html_parser.HtmlParser.applyCSS(lexedTree, sheet);
      let inlineStyledTree = html_parser.HtmlParser.applyInlineStyles(styledTree);
      let customStyledTree = this[_applyCustomStyles](inlineStyledTree);
      let cleanedTree = html_parser.HtmlParser.cleanTree(customStyledTree);
      core.print(cleanedTree);
      let parsedTree = this.parseTree(new html_parser.RenderContext.new({style: theme.Theme.of(context).textTheme.body1}), cleanedTree);
      return new basic.RichText.new({text: parsedTree, $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
    static parseHTML(data) {
      return parser.parse(data);
    }
    static parseCSS(data) {
      return parser$.parse(data);
    }
    static lexDomTree(html) {
      let tree = new styled_element.StyledElement.new({name: "[Tree Root]", children: JSArrayOfStyledElement().of([]), node: html.documentElement});
      html.nodes[$forEach](dart.fn(node => {
        tree.children[$add](html_parser.HtmlParser._recursiveLexer(node));
      }, NodeToNull()));
      return tree;
    }
    static _recursiveLexer(node) {
      let children = JSArrayOfStyledElement().of([]);
      node.nodes[$forEach](dart.fn(childNode => {
        children[$add](html_parser.HtmlParser._recursiveLexer(childNode));
      }, NodeToNull()));
      if (dom.Element.is(node)) {
        if (dart.test(html_elements.STYLED_ELEMENTS[$contains](node.localName))) {
          return styled_element.parseStyledElement(node, children);
        } else if (dart.test(html_elements.INTERACTABLE_ELEMENTS[$contains](node.localName))) {
          return interactable_element.parseInteractableElement(node, children);
        } else if (dart.test(html_elements.BLOCK_ELEMENTS[$contains](node.localName))) {
          return block_element.parseBlockElement(node, children);
        } else if (dart.test(html_elements.REPLACED_ELEMENTS[$contains](node.localName))) {
          return replaced_element.parseReplacedElement(node);
        } else {
          return new replaced_element.EmptyContentElement.new();
        }
      } else if (dom.Text.is(node)) {
        return new replaced_element.TextContentElement.new({text: node.text});
      } else {
        return new replaced_element.EmptyContentElement.new();
      }
    }
    static applyCSS(tree, sheet) {
      sheet.topLevels[$forEach](dart.fn(treeNode => {
        if (visitor.RuleSet.is(treeNode)) {
          core.print(treeNode.selectorGroup.selectors[$first].simpleSelectorSequences[$first].simpleSelector.name);
        }
      }, TreeNodeToNull()));
      return tree;
    }
    static applyInlineStyles(tree) {
      return tree;
    }
    [_applyCustomStyles](tree) {
      let t0;
      if (this.style == null) return tree;
      this.style[$forEach](dart.fn((key, style) => {
        if (dart.test(tree.matchesSelector(key))) {
          if (tree.style == null) {
            tree.style = style;
          } else {
            tree.style = tree.style.merge(style);
          }
        }
      }, StringAndStyleToNull()));
      t0 = tree.children;
      t0 == null ? null : t0[$forEach](dart.bind(this, _applyCustomStyles));
      return tree;
    }
    static cleanTree(tree) {
      tree = html_parser.HtmlParser._processWhitespace(tree);
      tree = html_parser.HtmlParser._removeEmptyElements(tree);
      tree = html_parser.HtmlParser._processListCharacters(tree);
      tree = html_parser.HtmlParser._processBeforesAndAfters(tree);
      return tree;
    }
    parseTree(context, tree) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let newContext = new html_parser.RenderContext.new({style: context.style.merge((t0 = tree.style, t0 == null ? null : t0.generateTextStyle()))});
      if (dart.equals((t0$ = tree.style, t0$ == null ? null : t0$.display), style.Display.BLOCK)) {
        return new widget_span.WidgetSpan.new({child: new html_parser.ContainerSpan.new({style: tree.style, thisContext: context, newContext: newContext, children: (t0$2 = (t0$1 = (t0$0 = tree.children, t0$0 == null ? null : t0$0[$map](inline_span.InlineSpan, dart.fn(tree => this.parseTree(newContext, tree), StyledElementToInlineSpan()))), t0$1 == null ? null : t0$1[$toList]()), t0$2 == null ? JSArrayOfInlineSpan().of([]) : t0$2), $creationLocationd_0dea112b090073317d4: C7 || CT.C7})});
      } else if (replaced_element.ReplacedElement.is(tree)) {
        if (replaced_element.TextContentElement.is(tree)) {
          return new text_span.TextSpan.new({text: tree.text});
        } else {
          return new widget_span.WidgetSpan.new({alignment: ui.PlaceholderAlignment.aboveBaseline, baseline: ui.TextBaseline.alphabetic, child: tree.toWidget(context)});
        }
      } else if (interactable_element.InteractableElement.is(tree)) {
        return new widget_span.WidgetSpan.new({child: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => this.onLinkTap(tree.href), VoidTovoid()), child: new basic.RichText.new({text: new text_span.TextSpan.new({style: context.style.merge((t0$3 = tree.style, t0$3 == null ? null : t0$3.generateTextStyle())), children: (t0$4 = tree.children[$map](inline_span.InlineSpan, dart.fn(tree => this.parseTree(newContext, tree), StyledElementToInlineSpan()))[$toList](), t0$4 == null ? JSArrayOfInlineSpan().of([]) : t0$4)}), $creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})});
      } else {
        return new text_span.TextSpan.new({style: context.style.merge((t0$5 = tree.style, t0$5 == null ? null : t0$5.generateTextStyle())), children: tree.children[$map](inline_span.InlineSpan, dart.fn(tree => this.parseTree(newContext, tree), StyledElementToInlineSpan()))[$toList]()});
      }
    }
    static _processWhitespace(tree) {
      let t0, t0$, t0$0;
      if (dart.test((t0$ = (t0 = tree.style, t0 == null ? null : t0.preserveWhitespace), t0$ == null ? false : t0$))) {
      } else if (replaced_element.TextContentElement.is(tree)) {
        tree.text = html_parser.HtmlParser._removeUnnecessaryWhitespace(tree.text);
      } else {
        t0$0 = tree.children;
        t0$0 == null ? null : t0$0[$forEach](C20 || CT.C20);
      }
      return tree;
    }
    static _removeUnnecessaryWhitespace(text) {
      return text[$replaceAll](core.RegExp.new(" *(?=\n)"), "")[$replaceAll](core.RegExp.new("(?:\n) *"), "")[$replaceAll]("\n", " ")[$replaceAll]("\t", " ")[$replaceAll](core.RegExp.new(" {2,}"), " ");
    }
    static _processListCharacters(tree) {
      let t0, t0$, t0$0, t0$1;
      if (dart.equals((t0 = tree.style, t0 == null ? null : t0.display), style.Display.BLOCK) && (tree.name === "ol" || tree.name === "ul")) {
        for (let i = 0; i < dart.notNull((t0$ = tree.children, t0$ == null ? null : t0$[$length])); i = i + 1) {
          if (tree.children[$_get](i).name === "li") {
            t0$0 = tree.children[$_get](i).children;
            t0$0 == null ? null : t0$0[$insert](0, new replaced_element.TextContentElement.new({text: tree.name === "ol" ? dart.str(i + 1) + ".\t" : "•\t"}));
          }
        }
      }
      t0$1 = tree.children;
      t0$1 == null ? null : t0$1[$forEach](C21 || CT.C21);
      return tree;
    }
    static _processBeforesAndAfters(tree) {
      let t0, t0$, t0$0;
      if ((t0 = tree.style, t0 == null ? null : t0.before) != null) {
        tree.children[$insert](0, new replaced_element.TextContentElement.new({text: tree.style.before}));
      }
      if ((t0$ = tree.style, t0$ == null ? null : t0$.after) != null) {
        tree.children[$add](new replaced_element.TextContentElement.new({text: tree.style.after}));
      }
      t0$0 = tree.children;
      t0$0 == null ? null : t0$0[$forEach](C22 || CT.C22);
      return tree;
    }
    static _removeEmptyElements(tree) {
      let t0, t0$;
      let toRemove = JSArrayOfStyledElement().of([]);
      t0 = tree.children;
      t0 == null ? null : t0[$forEach](dart.fn(child => {
        if (replaced_element.EmptyContentElement.is(child)) {
          toRemove[$add](child);
        } else if (replaced_element.TextContentElement.is(child) && child.text[$isEmpty]) {
          toRemove[$add](child);
        } else {
          html_parser.HtmlParser._removeEmptyElements(child);
        }
      }, StyledElementToNull()));
      t0$ = tree.children;
      t0$ == null ? null : t0$[$removeWhere](dart.fn(element => toRemove[$contains](element), StyledElementTobool()));
      return tree;
    }
  };
  (html_parser.HtmlParser.new = function(opts) {
    let htmlData = opts && 'htmlData' in opts ? opts.htmlData : null;
    let cssData = opts && 'cssData' in opts ? opts.cssData : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[htmlData$] = htmlData;
    this[cssData$] = cssData;
    this[onLinkTap$] = onLinkTap;
    this[style$0] = style;
    html_parser.HtmlParser.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.HtmlParser.prototype;
  dart.addTypeTests(html_parser.HtmlParser);
  const htmlData$ = Symbol("HtmlParser.htmlData");
  const cssData$ = Symbol("HtmlParser.cssData");
  const onLinkTap$ = Symbol("HtmlParser.onLinkTap");
  const style$0 = Symbol("HtmlParser.style");
  dart.setMethodSignature(html_parser.HtmlParser, () => ({
    __proto__: dart.getMethods(html_parser.HtmlParser.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_applyCustomStyles]: dart.fnType(styled_element.StyledElement, [styled_element.StyledElement]),
    parseTree: dart.fnType(inline_span.InlineSpan, [html_parser.RenderContext, styled_element.StyledElement])
  }));
  dart.setLibraryUri(html_parser.HtmlParser, "package:flutter_html/html_parser.dart");
  dart.setFieldSignature(html_parser.HtmlParser, () => ({
    __proto__: dart.getFields(html_parser.HtmlParser.__proto__),
    htmlData: dart.finalFieldType(core.String),
    cssData: dart.finalFieldType(core.String),
    onLinkTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    style: dart.finalFieldType(core.Map$(core.String, style.Style))
  }));
  html_parser.CustomRenderer = class CustomRenderer extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get render() {
      return this[render$];
    }
    set render(value) {
      super.render = value;
    }
    get renderAs() {
      return this[renderAs$];
    }
    set renderAs(value) {
      super.renderAs = value;
    }
  };
  (html_parser.CustomRenderer.new = function(name, opts) {
    let render = opts && 'render' in opts ? opts.render : null;
    let renderAs = opts && 'renderAs' in opts ? opts.renderAs : null;
    this[name$0] = name;
    this[render$] = render;
    this[renderAs$] = renderAs;
    ;
  }).prototype = html_parser.CustomRenderer.prototype;
  dart.addTypeTests(html_parser.CustomRenderer);
  const name$0 = Symbol("CustomRenderer.name");
  const render$ = Symbol("CustomRenderer.render");
  const renderAs$ = Symbol("CustomRenderer.renderAs");
  dart.setLibraryUri(html_parser.CustomRenderer, "package:flutter_html/html_parser.dart");
  dart.setFieldSignature(html_parser.CustomRenderer, () => ({
    __proto__: dart.getFields(html_parser.CustomRenderer.__proto__),
    name: dart.finalFieldType(core.String),
    render: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext])),
    renderAs: dart.finalFieldType(html_elements.ElementType)
  }));
  html_parser.RenderContext = class RenderContext extends core.Object {
    get style() {
      return this[style$1];
    }
    set style(value) {
      this[style$1] = value;
    }
  };
  (html_parser.RenderContext.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    this[style$1] = style;
    ;
  }).prototype = html_parser.RenderContext.prototype;
  dart.addTypeTests(html_parser.RenderContext);
  const style$1 = Symbol("RenderContext.style");
  dart.setLibraryUri(html_parser.RenderContext, "package:flutter_html/html_parser.dart");
  dart.setFieldSignature(html_parser.RenderContext, () => ({
    __proto__: dart.getFields(html_parser.RenderContext.__proto__),
    style: dart.fieldType(text_style.TextStyle)
  }));
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C27;
  let C26;
  html_parser.ContainerSpan = class ContainerSpan extends framework.StatelessWidget {
    get children() {
      return this[children$0];
    }
    set children(value) {
      super.children = value;
    }
    get style() {
      return this[style$2];
    }
    set style(value) {
      super.style = value;
    }
    get thisContext() {
      return this[thisContext$];
    }
    set thisContext(value) {
      super.thisContext = value;
    }
    get newContext() {
      return this[newContext$];
    }
    set newContext(value) {
      super.newContext = value;
    }
    build(context) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      return new container.Container.new({decoration: new box_decoration.BoxDecoration.new({border: (t0$ = (t0 = this.style, t0 == null ? null : t0.block), t0$ == null ? null : t0$.border), color: (t0$0 = this.style, t0$0 == null ? null : t0$0.backgroundColor)}), height: (t0$2 = (t0$1 = this.style, t0$1 == null ? null : t0$1.block), t0$2 == null ? null : t0$2.height), width: (t0$4 = (t0$3 = this.style, t0$3 == null ? null : t0$3.block), t0$4 == null ? null : t0$4.width), padding: (t0$5 = this.style, t0$5 == null ? null : t0$5.padding), margin: (t0$6 = this.style, t0$6 == null ? null : t0$6.margin), alignment: (t0$8 = (t0$7 = this.style, t0$7 == null ? null : t0$7.block), t0$8 == null ? null : t0$8.alignment), child: new basic.RichText.new({text: new text_span.TextSpan.new({style: this.thisContext.style.merge((t0$9 = this.style, t0$9 == null ? null : t0$9.generateTextStyle())), children: this.children}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26});
    }
  };
  (html_parser.ContainerSpan.new = function(opts) {
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let thisContext = opts && 'thisContext' in opts ? opts.thisContext : null;
    let newContext = opts && 'newContext' in opts ? opts.newContext : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[children$0] = children;
    this[style$2] = style;
    this[thisContext$] = thisContext;
    this[newContext$] = newContext;
    html_parser.ContainerSpan.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = html_parser.ContainerSpan.prototype;
  dart.addTypeTests(html_parser.ContainerSpan);
  const children$0 = Symbol("ContainerSpan.children");
  const style$2 = Symbol("ContainerSpan.style");
  const thisContext$ = Symbol("ContainerSpan.thisContext");
  const newContext$ = Symbol("ContainerSpan.newContext");
  dart.setMethodSignature(html_parser.ContainerSpan, () => ({
    __proto__: dart.getMethods(html_parser.ContainerSpan.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(html_parser.ContainerSpan, "package:flutter_html/html_parser.dart");
  dart.setFieldSignature(html_parser.ContainerSpan, () => ({
    __proto__: dart.getFields(html_parser.ContainerSpan.__proto__),
    children: dart.finalFieldType(core.List$(inline_span.InlineSpan)),
    style: dart.finalFieldType(style.Style),
    thisContext: dart.finalFieldType(html_parser.RenderContext),
    newContext: dart.finalFieldType(html_parser.RenderContext)
  }));
  const _name$0 = dart.privateName(html_elements, "_name");
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  html_elements.ElementType = class ElementType extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (html_elements.ElementType.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = html_elements.ElementType.prototype;
  dart.addTypeTests(html_elements.ElementType);
  dart.setLibraryUri(html_elements.ElementType, "package:flutter_html/src/html_elements.dart");
  dart.setFieldSignature(html_elements.ElementType, () => ({
    __proto__: dart.getFields(html_elements.ElementType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(html_elements.ElementType, ['toString']);
  html_elements.ElementType.REPLACED = C35 || CT.C35;
  html_elements.ElementType.INLINE = C36 || CT.C36;
  html_elements.ElementType.BLOCK = C37 || CT.C37;
  html_elements.ElementType.INTERACTABLE = C38 || CT.C38;
  html_elements.ElementType.values = C39 || CT.C39;
  let C40;
  let C41;
  let C42;
  let C43;
  dart.defineLazy(html_elements, {
    /*html_elements.STYLED_ELEMENTS*/get STYLED_ELEMENTS() {
      return C40 || CT.C40;
    },
    /*html_elements.INTERACTABLE_ELEMENTS*/get INTERACTABLE_ELEMENTS() {
      return C41 || CT.C41;
    },
    /*html_elements.BLOCK_ELEMENTS*/get BLOCK_ELEMENTS() {
      return C42 || CT.C42;
    },
    /*html_elements.REPLACED_ELEMENTS*/get REPLACED_ELEMENTS() {
      return C43 || CT.C43;
    }
  });
  replaced_element.ReplacedElement = class ReplacedElement extends styled_element.StyledElement {
    static parseContentSources(elements) {
      return elements[$where](dart.fn(element => element.localName === "source", ElementTobool()))[$map](core.String, dart.fn(element => element.attributes[$_get]("src"), ElementToString()))[$toList]();
    }
  };
  (replaced_element.ReplacedElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let node = opts && 'node' in opts ? opts.node : null;
    replaced_element.ReplacedElement.__proto__.new.call(this, {name: name, children: null, style: style, node: node});
    ;
  }).prototype = replaced_element.ReplacedElement.prototype;
  dart.addTypeTests(replaced_element.ReplacedElement);
  dart.setLibraryUri(replaced_element.ReplacedElement, "package:flutter_html/src/replaced_element.dart");
  replaced_element.TextContentElement = class TextContentElement extends replaced_element.ReplacedElement {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    toString() {
      return "\"" + this.text[$replaceAll]("\n", "\\n") + "\"";
    }
    toWidget(_) {
      return null;
    }
  };
  (replaced_element.TextContentElement.new = function(opts) {
    let style = opts && 'style' in opts ? opts.style : null;
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$] = text;
    replaced_element.TextContentElement.__proto__.new.call(this, {name: "text", style: style});
    ;
  }).prototype = replaced_element.TextContentElement.prototype;
  dart.addTypeTests(replaced_element.TextContentElement);
  const text$ = Symbol("TextContentElement.text");
  dart.setMethodSignature(replaced_element.TextContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.TextContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.TextContentElement, "package:flutter_html/src/replaced_element.dart");
  dart.setFieldSignature(replaced_element.TextContentElement, () => ({
    __proto__: dart.getFields(replaced_element.TextContentElement.__proto__),
    text: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(replaced_element.TextContentElement, ['toString']);
  let C46;
  let C47;
  let C45;
  let C44;
  let C50;
  let C49;
  let C48;
  let C53;
  let C54;
  let C52;
  let C51;
  let C57;
  let C58;
  let C56;
  let C55;
  replaced_element.ImageContentElement = class ImageContentElement extends replaced_element.ReplacedElement {
    get src() {
      return this[src$];
    }
    set src(value) {
      super.src = value;
    }
    get alt() {
      return this[alt$];
    }
    set alt(value) {
      super.alt = value;
    }
    toWidget(context) {
      let t0;
      if (this.src == null) return new text.Text.new((t0 = this.alt, t0 == null ? "" : t0), {style: context.style, $creationLocationd_0dea112b090073317d4: C44 || CT.C44});
      if (this.src[$startsWith]("data:image") && this.src[$contains]("base64,")) {
        return new image.Image.memory(convert.base64.decode(this.src[$split]("base64,")[$_get](1)[$trim]()), {$creationLocationd_0dea112b090073317d4: C48 || CT.C48});
      } else {
        return new image.Image.network(this.src, {frameBuilder: dart.fn((ctx, child, frame, something) => {
            let t0;
            if (frame == null) {
              return new text.Text.new((t0 = this.alt, t0 == null ? "" : t0), {style: context.style, $creationLocationd_0dea112b090073317d4: C51 || CT.C51});
            }
            return child;
          }, BuildContextAndWidgetAndint__ToWidget()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55});
      }
    }
  };
  (replaced_element.ImageContentElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let src = opts && 'src' in opts ? opts.src : null;
    let alt = opts && 'alt' in opts ? opts.alt : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this[src$] = src;
    this[alt$] = alt;
    replaced_element.ImageContentElement.__proto__.new.call(this, {name: name, style: style, node: node});
    ;
  }).prototype = replaced_element.ImageContentElement.prototype;
  dart.addTypeTests(replaced_element.ImageContentElement);
  const src$ = Symbol("ImageContentElement.src");
  const alt$ = Symbol("ImageContentElement.alt");
  dart.setMethodSignature(replaced_element.ImageContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.ImageContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.ImageContentElement, "package:flutter_html/src/replaced_element.dart");
  dart.setFieldSignature(replaced_element.ImageContentElement, () => ({
    __proto__: dart.getFields(replaced_element.ImageContentElement.__proto__),
    src: dart.finalFieldType(core.String),
    alt: dart.finalFieldType(core.String)
  }));
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  replaced_element.IframeContentElement = class IframeContentElement extends replaced_element.ReplacedElement {
    get src() {
      return this[src$0];
    }
    set src(value) {
      super.src = value;
    }
    toWidget(context) {
      return new container.Container.new({color: colors.Colors.deepOrangeAccent, child: new text.Text.new(this.src, {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), $creationLocationd_0dea112b090073317d4: C62 || CT.C62});
    }
  };
  (replaced_element.IframeContentElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let src = opts && 'src' in opts ? opts.src : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this[src$0] = src;
    replaced_element.IframeContentElement.__proto__.new.call(this, {name: name, style: style, node: node});
    ;
  }).prototype = replaced_element.IframeContentElement.prototype;
  dart.addTypeTests(replaced_element.IframeContentElement);
  const src$0 = Symbol("IframeContentElement.src");
  dart.setMethodSignature(replaced_element.IframeContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.IframeContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.IframeContentElement, "package:flutter_html/src/replaced_element.dart");
  dart.setFieldSignature(replaced_element.IframeContentElement, () => ({
    __proto__: dart.getFields(replaced_element.IframeContentElement.__proto__),
    src: dart.finalFieldType(core.String)
  }));
  let C66;
  let C69;
  let C70;
  let C68;
  let C67;
  let C73;
  let C74;
  let C72;
  let C71;
  replaced_element.AudioContentElement = class AudioContentElement extends replaced_element.ReplacedElement {
    get src() {
      return this[src$1];
    }
    set src(value) {
      super.src = value;
    }
    get showControls() {
      return this[showControls$];
    }
    set showControls(value) {
      super.showControls = value;
    }
    get autoplay() {
      return this[autoplay$];
    }
    set autoplay(value) {
      super.autoplay = value;
    }
    get loop() {
      return this[loop$];
    }
    set loop(value) {
      super.loop = value;
    }
    get muted() {
      return this[muted$];
    }
    set muted(value) {
      super.muted = value;
    }
    toWidget(context) {
      return new container.Container.new({padding: C66 || CT.C66, child: new text.Text.new("AUDIO", {style: context.style, $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
    }
  };
  (replaced_element.AudioContentElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let src = opts && 'src' in opts ? opts.src : null;
    let showControls = opts && 'showControls' in opts ? opts.showControls : null;
    let autoplay = opts && 'autoplay' in opts ? opts.autoplay : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let muted = opts && 'muted' in opts ? opts.muted : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this[src$1] = src;
    this[showControls$] = showControls;
    this[autoplay$] = autoplay;
    this[loop$] = loop;
    this[muted$] = muted;
    replaced_element.AudioContentElement.__proto__.new.call(this, {name: name, style: style, node: node});
    ;
  }).prototype = replaced_element.AudioContentElement.prototype;
  dart.addTypeTests(replaced_element.AudioContentElement);
  const src$1 = Symbol("AudioContentElement.src");
  const showControls$ = Symbol("AudioContentElement.showControls");
  const autoplay$ = Symbol("AudioContentElement.autoplay");
  const loop$ = Symbol("AudioContentElement.loop");
  const muted$ = Symbol("AudioContentElement.muted");
  dart.setMethodSignature(replaced_element.AudioContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.AudioContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.AudioContentElement, "package:flutter_html/src/replaced_element.dart");
  dart.setFieldSignature(replaced_element.AudioContentElement, () => ({
    __proto__: dart.getFields(replaced_element.AudioContentElement.__proto__),
    src: dart.finalFieldType(core.List$(core.String)),
    showControls: dart.finalFieldType(core.bool),
    autoplay: dart.finalFieldType(core.bool),
    loop: dart.finalFieldType(core.bool),
    muted: dart.finalFieldType(core.bool)
  }));
  let C77;
  let C78;
  let C76;
  let C75;
  let C81;
  let C82;
  let C80;
  let C79;
  replaced_element.VideoContentElement = class VideoContentElement extends replaced_element.ReplacedElement {
    get src() {
      return this[src$2];
    }
    set src(value) {
      super.src = value;
    }
    get poster() {
      return this[poster$];
    }
    set poster(value) {
      super.poster = value;
    }
    get showControls() {
      return this[showControls$0];
    }
    set showControls(value) {
      super.showControls = value;
    }
    get autoplay() {
      return this[autoplay$0];
    }
    set autoplay(value) {
      super.autoplay = value;
    }
    get loop() {
      return this[loop$0];
    }
    set loop(value) {
      super.loop = value;
    }
    get muted() {
      return this[muted$0];
    }
    set muted(value) {
      super.muted = value;
    }
    toWidget(context) {
      return new container.Container.new({padding: C66 || CT.C66, child: new text.Text.new("AUDIO", {style: context.style, $creationLocationd_0dea112b090073317d4: C75 || CT.C75}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79});
    }
  };
  (replaced_element.VideoContentElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let src = opts && 'src' in opts ? opts.src : null;
    let poster = opts && 'poster' in opts ? opts.poster : null;
    let showControls = opts && 'showControls' in opts ? opts.showControls : null;
    let autoplay = opts && 'autoplay' in opts ? opts.autoplay : null;
    let loop = opts && 'loop' in opts ? opts.loop : null;
    let muted = opts && 'muted' in opts ? opts.muted : null;
    let node = opts && 'node' in opts ? opts.node : null;
    this[src$2] = src;
    this[poster$] = poster;
    this[showControls$0] = showControls;
    this[autoplay$0] = autoplay;
    this[loop$0] = loop;
    this[muted$0] = muted;
    replaced_element.VideoContentElement.__proto__.new.call(this, {name: name, style: style, node: node});
    ;
  }).prototype = replaced_element.VideoContentElement.prototype;
  dart.addTypeTests(replaced_element.VideoContentElement);
  const src$2 = Symbol("VideoContentElement.src");
  const poster$ = Symbol("VideoContentElement.poster");
  const showControls$0 = Symbol("VideoContentElement.showControls");
  const autoplay$0 = Symbol("VideoContentElement.autoplay");
  const loop$0 = Symbol("VideoContentElement.loop");
  const muted$0 = Symbol("VideoContentElement.muted");
  dart.setMethodSignature(replaced_element.VideoContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.VideoContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.VideoContentElement, "package:flutter_html/src/replaced_element.dart");
  dart.setFieldSignature(replaced_element.VideoContentElement, () => ({
    __proto__: dart.getFields(replaced_element.VideoContentElement.__proto__),
    src: dart.finalFieldType(core.List$(core.String)),
    poster: dart.finalFieldType(core.String),
    showControls: dart.finalFieldType(core.bool),
    autoplay: dart.finalFieldType(core.bool),
    loop: dart.finalFieldType(core.bool),
    muted: dart.finalFieldType(core.bool)
  }));
  replaced_element.EmptyContentElement = class EmptyContentElement extends replaced_element.ReplacedElement {
    toWidget(_) {
      return null;
    }
  };
  (replaced_element.EmptyContentElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : "empty";
    replaced_element.EmptyContentElement.__proto__.new.call(this, {name: name});
    ;
  }).prototype = replaced_element.EmptyContentElement.prototype;
  dart.addTypeTests(replaced_element.EmptyContentElement);
  dart.setMethodSignature(replaced_element.EmptyContentElement, () => ({
    __proto__: dart.getMethods(replaced_element.EmptyContentElement.__proto__),
    toWidget: dart.fnType(framework.Widget, [html_parser.RenderContext])
  }));
  dart.setLibraryUri(replaced_element.EmptyContentElement, "package:flutter_html/src/replaced_element.dart");
  replaced_element.parseReplacedElement = function parseReplacedElement(element) {
    switch (element.localName) {
      case "audio":
      {
        return new replaced_element.AudioContentElement.new({name: "audio", src: replaced_element.ReplacedElement.parseContentSources(element.children), showControls: element.attributes[$_get]("controls") != null, loop: element.attributes[$_get]("loop") != null, autoplay: element.attributes[$_get]("autoplay") != null, muted: element.attributes[$_get]("muted") != null, node: element});
      }
      case "br":
      {
        return new replaced_element.TextContentElement.new({text: "\n", style: new style.Style.new({preserveWhitespace: true})});
      }
      case "iframe":
      {
        return new replaced_element.IframeContentElement.new({name: "iframe", src: element.attributes[$_get]("src")});
      }
      case "img":
      {
        return new replaced_element.ImageContentElement.new({name: "img", src: element.attributes[$_get]("src"), alt: element.attributes[$_get]("alt"), node: element});
      }
      case "video":
      {
        return new replaced_element.VideoContentElement.new({name: "video", src: replaced_element.ReplacedElement.parseContentSources(element.children), poster: element.attributes[$_get]("poster"), showControls: element.attributes[$_get]("controls") != null, loop: element.attributes[$_get]("loop") != null, autoplay: element.attributes[$_get]("autoplay") != null, muted: element.attributes[$_get]("muted") != null, node: element});
      }
      default:
      {
        return new replaced_element.EmptyContentElement.new({name: element.localName});
      }
    }
  };
  let C83;
  block_element.Block = class Block extends core.Object {
    get width() {
      return this[width$];
    }
    set width(value) {
      this[width$] = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      this[height$] = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      this[border$] = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      this[alignment$] = value;
    }
    toString() {
      return "(" + (this.width != null ? "Width: " + dart.str(this.width) : "") + ", " + (this.height != null ? "Height: " + dart.str(this.height) : "") + ")";
    }
    merge(other) {
      if (other == null) return this;
      return this.copyWith({width: other.width, height: other.height, border: other.border, alignment: other.alignment});
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1;
      let width = opts && 'width' in opts ? opts.width : null;
      let height = opts && 'height' in opts ? opts.height : null;
      let border = opts && 'border' in opts ? opts.border : null;
      let alignment = opts && 'alignment' in opts ? opts.alignment : null;
      return new block_element.Block.new({width: (t0 = width, t0 == null ? this.width : t0), height: (t0$ = height, t0$ == null ? this.height : t0$), border: (t0$0 = border, t0$0 == null ? this.border : t0$0), alignment: (t0$1 = alignment, t0$1 == null ? this.alignment : t0$1)});
    }
  };
  (block_element.Block.new = function(opts) {
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C83 || CT.C83;
    this[width$] = width;
    this[height$] = height;
    this[border$] = border;
    this[alignment$] = alignment;
    ;
  }).prototype = block_element.Block.prototype;
  dart.addTypeTests(block_element.Block);
  const width$ = Symbol("Block.width");
  const height$ = Symbol("Block.height");
  const border$ = Symbol("Block.border");
  const alignment$ = Symbol("Block.alignment");
  dart.setMethodSignature(block_element.Block, () => ({
    __proto__: dart.getMethods(block_element.Block.__proto__),
    merge: dart.fnType(block_element.Block, [block_element.Block]),
    copyWith: dart.fnType(block_element.Block, [], {alignment: alignment.Alignment, border: box_border.Border, height: core.double, width: core.double})
  }));
  dart.setLibraryUri(block_element.Block, "package:flutter_html/src/block_element.dart");
  dart.setFieldSignature(block_element.Block, () => ({
    __proto__: dart.getFields(block_element.Block.__proto__),
    width: dart.fieldType(core.double),
    height: dart.fieldType(core.double),
    border: dart.fieldType(box_border.Border),
    alignment: dart.fieldType(alignment.Alignment)
  }));
  dart.defineExtensionMethods(block_element.Block, ['toString']);
  let C84;
  let C85;
  block_element.parseBlockElement = function parseBlockElement(node, children) {
    let blockElement = new styled_element.StyledElement.new({name: node.localName, children: children, node: node});
    switch (node.localName) {
      case "blockquote":
      {
        if (node.parent.localName === "blockquote") {
          blockElement.style = new style.Style.new({margin: C84 || CT.C84});
        } else {
          blockElement.style = new style.Style.new({margin: C85 || CT.C85});
        }
        break;
      }
      case "body":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.all(8.0)});
        break;
      }
      case "dd":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.only({left: 40.0})});
        break;
      }
      case "div":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.all(0.0)});
        break;
      }
      case "dl":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 14.0})});
        break;
      }
      case "figure":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 14.0, horizontal: 40.0})});
        break;
      }
      case "h1":
      {
        blockElement.style = new style.Style.new({fontSize: 28.0, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 18.67})});
        break;
      }
      case "h2":
      {
        blockElement.style = new style.Style.new({fontSize: 21.0, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 17.5})});
        break;
      }
      case "h3":
      {
        blockElement.style = new style.Style.new({fontSize: 16.5, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 16.5})});
        break;
      }
      case "h4":
      {
        blockElement.style = new style.Style.new({fontSize: 14.0, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 18.5})});
        break;
      }
      case "h5":
      {
        blockElement.style = new style.Style.new({fontSize: 11.5, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 19.25})});
        break;
      }
      case "h6":
      {
        blockElement.style = new style.Style.new({fontSize: 9.5, fontWeight: ui.FontWeight.bold, margin: new edge_insets.EdgeInsets.symmetric({vertical: 22.0})});
        break;
      }
      case "hr":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 7.0})});
        break;
      }
      case "ol":
      case "ul":
      {
        if (node.parent.localName === "li") {
          blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.only({left: 30.0})});
        } else {
          blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.only({left: 30.0, top: 14.0, bottom: 14.0})});
        }
        break;
      }
      case "p":
      {
        blockElement.style = new style.Style.new({margin: new edge_insets.EdgeInsets.symmetric({vertical: 14.0})});
        break;
      }
      case "pre":
      {
        blockElement.style = new style.Style.new({fontFamily: "Monospace", margin: new edge_insets.EdgeInsets.symmetric({vertical: 14.0}), preserveWhitespace: true});
        break;
      }
      default:
      {
        blockElement.style = new style.Style.new();
      }
    }
    blockElement.style.block = block_element.parseBlockElementBlock(node);
    blockElement.style.display = style.Display.BLOCK;
    return blockElement;
  };
  block_element.parseBlockElementBlock = function parseBlockElementBlock(element) {
    switch (element.localName) {
      case "center":
      {
        return new block_element.Block.new({alignment: alignment.Alignment.center});
      }
      case "hr":
      {
        return new block_element.Block.new({width: 1 / 0, border: new box_border.Border.new({bottom: new borders.BorderSide.new({width: 1.0})})});
      }
      default:
      {
        return new block_element.Block.new();
      }
    }
  };
  interactable_element.InteractableElement = class InteractableElement extends styled_element.StyledElement {
    get href() {
      return this[href$];
    }
    set href(value) {
      this[href$] = value;
    }
  };
  (interactable_element.InteractableElement.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let href = opts && 'href' in opts ? opts.href : null;
    this[href$] = href;
    interactable_element.InteractableElement.__proto__.new.call(this, {name: name, children: children, style: style});
    ;
  }).prototype = interactable_element.InteractableElement.prototype;
  dart.addTypeTests(interactable_element.InteractableElement);
  const href$ = Symbol("InteractableElement.href");
  dart.setLibraryUri(interactable_element.InteractableElement, "package:flutter_html/src/interactable_element.dart");
  dart.setFieldSignature(interactable_element.InteractableElement, () => ({
    __proto__: dart.getFields(interactable_element.InteractableElement.__proto__),
    href: dart.fieldType(core.String)
  }));
  const _name$1 = dart.privateName(interactable_element, "_name");
  let C86;
  let C87;
  interactable_element.Gesture = class Gesture extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (interactable_element.Gesture.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = interactable_element.Gesture.prototype;
  dart.addTypeTests(interactable_element.Gesture);
  dart.setLibraryUri(interactable_element.Gesture, "package:flutter_html/src/interactable_element.dart");
  dart.setFieldSignature(interactable_element.Gesture, () => ({
    __proto__: dart.getFields(interactable_element.Gesture.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(interactable_element.Gesture, ['toString']);
  interactable_element.Gesture.TAP = C86 || CT.C86;
  interactable_element.Gesture.values = C87 || CT.C87;
  interactable_element.parseInteractableElement = function parseInteractableElement(element, children) {
    let interactableElement = new interactable_element.InteractableElement.new({name: element.localName, children: children});
    switch (element.localName) {
      case "a":
      {
        interactableElement.href = element.attributes[$_get]("href");
        interactableElement.style = new style.Style.new({color: colors.Colors.blue, textDecoration: ui.TextDecoration.underline});
        break;
      }
    }
    return interactableElement;
  };
  dart.trackLibraries("packages/flutter_html/html_parser", {
    "package:flutter_html/style.dart": style,
    "package:flutter_html/src/styled_element.dart": styled_element,
    "package:flutter_html/html_parser.dart": html_parser,
    "package:flutter_html/src/html_elements.dart": html_elements,
    "package:flutter_html/src/replaced_element.dart": replaced_element,
    "package:flutter_html/src/block_element.dart": block_element,
    "package:flutter_html/src/interactable_element.dart": interactable_element
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["style.dart","src/styled_element.dart","html_parser.dart","src/html_elements.dart","src/replaced_element.dart","src/block_element.dart","src/interactable_element.dart"],"names":[],"mappings":"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","file":"html_parser.ddc.js"}');
  // Exports:
  return {
    style: style,
    src__styled_element: styled_element,
    html_parser: html_parser,
    src__html_elements: html_elements,
    src__replaced_element: replaced_element,
    src__block_element: block_element,
    src__interactable_element: interactable_element
  };
});

//# sourceMappingURL=html_parser.ddc.js.map

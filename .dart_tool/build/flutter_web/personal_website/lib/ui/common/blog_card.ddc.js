define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/rendering/animated_size', 'packages/intl/intl'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__rendering__animated_size, packages__intl__intl) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const ink_well = packages__flutter__material.src__material__ink_well;
  const card = packages__flutter__material.src__material__card;
  const icons = packages__flutter__material.src__material__icons;
  const theme = packages__flutter__material.src__material__theme;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const intl = packages__intl__intl.intl;
  const blog_card = Object.create(dart.library);
  const $join = dartx.join;
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BuildContextAndBoxConstraintsToContainer = () => (BuildContextAndBoxConstraintsToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, box.BoxConstraints])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 8,
        right: 8,
        top: 8,
        left: 8
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 35,
        line: 45,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 35,
        line: 46,
        file: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C2 || CT.C2,
        name: null,
        column: 46,
        line: 44,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 33,
        line: 44,
        file: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C6 || CT.C6,
        name: null,
        column: 38,
        line: 43,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 31,
        line: 43,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 29,
        line: 42,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 42,
        line: 41,
        file: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C12 || CT.C12,
        name: null,
        column: 38,
        line: 41,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 31,
        line: 41,
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
        column: 27,
        line: 40,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 59,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 37,
        line: 60,
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
        column: 42,
        line: 58,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 35,
        line: 57,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 35,
        line: 58,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 33,
        line: 56,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 50,
        line: 69,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 39,
        line: 69,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 50,
        line: 73,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 39,
        line: 73,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 50,
        line: 77,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 39,
        line: 77,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 35,
        line: 67,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 33,
        line: 66,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 85,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 37,
        line: 86,
        file: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C38 || CT.C38,
        name: null,
        column: 42,
        line: 84,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 35,
        line: 83,
        file: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 35,
        line: 84,
        file: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43, C44 || CT.C44], widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C42 || CT.C42,
        name: null,
        column: 33,
        line: 82,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 31,
        line: 54,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 31,
        line: 55,
        file: null
      });
    },
    get C46() {
      return C46 = dart.constList([C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C46 || CT.C46,
        name: null,
        column: 36,
        line: 53,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 29,
        line: 52,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 29,
        line: 53,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 27,
        line: 51,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisAlignment",
        column: 25,
        line: 37,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "crossAxisAlignment",
        column: 25,
        line: 38,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 25,
        line: 39,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 30,
        line: 36,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 36,
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
        column: 28,
        line: 35,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 35,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 26,
        line: 34,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 34,
        file: null
      });
    },
    get C65() {
      return C65 = dart.constList([C66 || CT.C66], widget_inspector._Location);
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C65 || CT.C65,
        name: null,
        column: 17,
        line: 33,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 27,
        line: 97,
        file: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C68 || CT.C68,
        name: null,
        column: 17,
        line: 97,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 15,
        line: 32,
        file: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C71 || CT.C71,
        name: null,
        column: 20,
        line: 31,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 31,
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
        column: 41,
        line: 30,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 11,
        line: 30,
        file: null
      });
    },
    get C77() {
      return C77 = dart.constList([C78 || CT.C78], widget_inspector._Location);
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C77 || CT.C77,
        name: null,
        column: 16,
        line: 29,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 9,
        line: 28,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 29,
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
        column: 14,
        line: 27,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 26,
        file: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 27,
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
        column: 12,
        line: 25,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 44,
        line: 111,
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
        column: 34,
        line: 111,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 63,
        line: 111,
        file: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92], widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C91 || CT.C91,
        name: null,
        column: 58,
        line: 111,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 110,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 111,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 14,
        line: 109,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 108,
        file: null
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 109,
        file: null
      });
    },
    get C98() {
      return C98 = dart.constList([C99 || CT.C99, C100 || CT.C100], widget_inspector._Location);
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C98 || CT.C98,
        name: null,
        column: 12,
        line: 107,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_card.dart"
      });
    }
  });
  let C0;
  let C3;
  let C4;
  let C2;
  let C1;
  let C7;
  let C6;
  let C5;
  let C10;
  let C9;
  let C8;
  let C13;
  let C12;
  let C11;
  let C16;
  let C15;
  let C14;
  let C19;
  let C20;
  let C18;
  let C17;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C29;
  let C28;
  let C33;
  let C32;
  let C31;
  let C36;
  let C35;
  let C34;
  let C39;
  let C40;
  let C38;
  let C37;
  let C43;
  let C44;
  let C42;
  let C41;
  let C47;
  let C48;
  let C46;
  let C45;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C56;
  let C57;
  let C54;
  let C53;
  let C60;
  let C59;
  let C58;
  let C63;
  let C62;
  let C61;
  let C66;
  let C65;
  let C64;
  let C69;
  let C68;
  let C67;
  let C72;
  let C71;
  let C70;
  let C75;
  let C74;
  let C73;
  let C78;
  let C77;
  let C76;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C84;
  let C83;
  let C89;
  let C88;
  let C87;
  let C92;
  let C91;
  let C90;
  let C95;
  let C96;
  let C94;
  let C93;
  let C99;
  let C100;
  let C98;
  let C97;
  blog_card.BlogCard = class BlogCard extends framework.StatelessWidget {
    get author() {
      return this[author$];
    }
    set author(value) {
      super.author = value;
    }
    get datePublished() {
      return this[datePublished$];
    }
    set datePublished(value) {
      super.datePublished = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      super.image = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      super.tags = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      super.description = value;
    }
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    build(context) {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new ink_well.InkWell.new({onTap: this.onTap, child: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, dimens) => new container.Container.new({child: new basic.Column.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new card.Card.new({child: new container.Container.new({child: new basic.Column.new({mainAxisAlignment: flex.MainAxisAlignment.start, crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new container.Container.new({child: new image.Image.network(this.image, {fit: box_fit.BoxFit.fitWidth, $creationLocationd_0dea112b090073317d4: C1 || CT.C1}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), $creationLocationd_0dea112b090073317d4: C8 || CT.C8})]), $creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new container.Container.new({padding: new edge_insets.EdgeInsets.all(8.0), child: new basic.Column.new({crossAxisAlignment: flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new basic.Padding.new({padding: C0 || CT.C0, child: new text.Text.new(this.title, {style: new text_style.TextStyle.new({fontWeight: ui.FontWeight.w500, fontSize: 20.0}), $creationLocationd_0dea112b090073317d4: C17 || CT.C17}), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new basic.Wrap.new({children: JSArrayOfWidget().of([this.buildMeta(new icon.Icon.new(icons.Icons.event, {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), new intl.DateFormat.yMMMd().format(this.datePublished)), this.buildMeta(new icon.Icon.new(icons.Icons.person, {$creationLocationd_0dea112b090073317d4: C28 || CT.C28}), this.author), this.buildMeta(new icon.Icon.new(icons.Icons.folder, {$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), this.tags[$join](", "))]), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), new basic.Padding.new({padding: C0 || CT.C0, child: new text.Text.new(this.description, {style: theme.Theme.of(context).textTheme.caption, $creationLocationd_0dea112b090073317d4: C37 || CT.C37}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41})]), $creationLocationd_0dea112b090073317d4: C45 || CT.C45}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C58 || CT.C58}), $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), $creationLocationd_0dea112b090073317d4: C64 || CT.C64}), new container.Container.new({height: 30.0, $creationLocationd_0dea112b090073317d4: C67 || CT.C67})]), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C73 || CT.C73}), BuildContextAndBoxConstraintsToContainer()), $creationLocationd_0dea112b090073317d4: C76 || CT.C76}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
    buildMeta(icon, label) {
      return new basic.Padding.new({padding: C0 || CT.C0, child: new basic.Row.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([icon, new container.Container.new({width: 10.0, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), new text.Text.new(label, {$creationLocationd_0dea112b090073317d4: C90 || CT.C90})]), $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C97 || CT.C97});
    }
  };
  (blog_card.BlogCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let datePublished = opts && 'datePublished' in opts ? opts.datePublished : null;
    let author = opts && 'author' in opts ? opts.author : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[title$] = title;
    this[datePublished$] = datePublished;
    this[author$] = author;
    this[tags$] = tags;
    this[description$] = description;
    this[onTap$] = onTap;
    blog_card.BlogCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = blog_card.BlogCard.prototype;
  dart.addTypeTests(blog_card.BlogCard);
  const author$ = Symbol("BlogCard.author");
  const datePublished$ = Symbol("BlogCard.datePublished");
  const image$ = Symbol("BlogCard.image");
  const tags$ = Symbol("BlogCard.tags");
  const title$ = Symbol("BlogCard.title");
  const description$ = Symbol("BlogCard.description");
  const onTap$ = Symbol("BlogCard.onTap");
  dart.setMethodSignature(blog_card.BlogCard, () => ({
    __proto__: dart.getMethods(blog_card.BlogCard.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    buildMeta: dart.fnType(framework.Widget, [icon.Icon, core.String])
  }));
  dart.setLibraryUri(blog_card.BlogCard, "package:personal_website/ui/common/blog_card.dart");
  dart.setFieldSignature(blog_card.BlogCard, () => ({
    __proto__: dart.getFields(blog_card.BlogCard.__proto__),
    author: dart.finalFieldType(core.String),
    datePublished: dart.finalFieldType(core.DateTime),
    image: dart.finalFieldType(core.String),
    tags: dart.finalFieldType(core.List$(core.String)),
    title: dart.finalFieldType(core.String),
    description: dart.finalFieldType(core.String),
    onTap: dart.finalFieldType(dart.fnType(dart.void, []))
  }));
  dart.trackLibraries("packages/personal_website/ui/common/blog_card", {
    "package:personal_website/ui/common/blog_card.dart": blog_card
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAee;;;;;;IACE;;;;;;IACF;;;;;;IACM;;;;;;IACN;;;;;;IAAO;;;;;;IACD;;;;;;UAGO;AACxB,YAAO,qDAEE,iCACE,mBACA,+CACI,SAAC,SAAS,WAAW,oCACrB,gCACa,sBAChB,+BACS,0BACE,oCACE,yCACgC,kDACE,yCACrB,sBAChB,+BACW,6BAAsB,sBAC/B,+BACS,oCACQ,wBACX,kBACY,kTAKpB,sCACsB,+BAAI,aACjB,0CACkC,yCACrB,sBAChB,oDAES,kBACL,oBACO,0CACkB,8BACb,0HAIhB,8BACoB,sBAChB,eACE,kBAAW,6EACA,AAAQ,mCAAO,sBAE5B,eACE,kBAAW,8EACX,cAEF,eACE,kBAAW,8EACX,AAAK,iBAAK,mEAIhB,oDAES,kBACL,0BACa,AAAY,AAAU,eAAnB,OAAO,ieAW3C,qCAAkB;IAOhC;cAEsB,MAAa;AACjC,YAAO,qDAEE,iCACsB,iCACT,sBAAC,IAAI,EAAE,oCAAiB,+DAAO,kBAAK,KAAK;IAGjE;;;QA5GM;QACW;QACA;QACA;QACA;QACA;QACA;QACV;;IANU;IACA;IACA;IACA;IACA;IACA;IACV;AACF,sDAAW,GAAG;;EAAC","file":"blog_card.ddc.js"}');
  // Exports:
  return {
    ui__common__blog_card: blog_card
  };
});

//# sourceMappingURL=blog_card.ddc.js.map

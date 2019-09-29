define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter_html/flutter_html', 'packages/markdown/markdown', 'packages/flutter/src/painting/_network_image_web', 'packages/personal_website/plugins/url_launcher/web', 'packages/html/dom'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter_html__flutter_html, packages__markdown__markdown, packages__flutter__src__painting___network_image_web, packages__personal_website__plugins__url_launcher__web, packages__html__dom) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const scrollbar = packages__flutter__material.src__material__scrollbar;
  const theme = packages__flutter__material.src__material__theme;
  const colors = packages__flutter__material.src__material__colors;
  const flutter_html = packages__flutter_html__flutter_html.flutter_html;
  const html_renderer = packages__markdown__markdown.src__html_renderer;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors$ = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const web = packages__personal_website__plugins__url_launcher__web.plugins__url_launcher__web;
  const dom = packages__html__dom.dom;
  const md_render = Object.create(dart.library);
  let StringTovoid = () => (StringTovoid = dart.constFn(dart.fnType(dart.void, [core.String])))();
  let NodeToTextAlign = () => (NodeToTextAlign = dart.constFn(dart.fnType(ui.TextAlign, [dom.Node])))();
  let NodeAndTextStyleToTextStyle = () => (NodeAndTextStyleToTextStyle = dart.constFn(dart.fnType(text_style.TextStyle, [dom.Node, text_style.TextStyle])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 27,
        line: 22,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 20,
        line: 22,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 13,
        line: 22,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4294937216.0
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4294922834.0
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4294907716.0
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: ui.Color.prototype,
        [_value]: 4292149248.0
      });
    },
    get C7() {
      return C7 = dart.constMap(core.int, ui.Color, [100, C8 || CT.C8, 200, C9 || CT.C9, 400, C10 || CT.C10, 700, C11 || CT.C11]);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: colors.MaterialAccentColor.prototype,
        [_value]: 4294922834.0,
        [_swatch]: C7 || CT.C7
      });
    },
    get C5() {
      return C5 = dart.const({
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
        fontFamily: null,
        backgroundColor: null,
        color: C6 || CT.C6,
        inherit: true
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 19,
        line: 26,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 19,
        line: 28,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "backgroundColor",
        column: 19,
        line: 29,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "defaultTextStyle",
        column: 19,
        line: 30,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "linkStyle",
        column: 19,
        line: 31,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onLinkTap",
        column: 19,
        line: 32,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onImageTap",
        column: 19,
        line: 33,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customTextAlign",
        column: 19,
        line: 44,
        file: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customTextStyle",
        column: 19,
        line: 52,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 24,
        line: 25,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 25,
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
        column: 22,
        line: 24,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 24,
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
        column: 13,
        line: 23,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 21,
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
        column: 12,
        line: 20,
        file: "org-dartlang-app:///packages/personal_website/ui/common/md_render.dart"
      });
    }
  });
  const _html = dart.privateName(md_render, "_html");
  let C1;
  let C0;
  let C4;
  let C3;
  let C2;
  const _package = dart.privateName(text_style, "_package");
  const _fontFamilyFallback = dart.privateName(text_style, "_fontFamilyFallback");
  const _value = dart.privateName(ui, "_value");
  let C8;
  let C9;
  let C10;
  let C11;
  let C7;
  const _swatch = dart.privateName(colors$, "_swatch");
  let C6;
  let C5;
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C13;
  let C12;
  let C25;
  let C24;
  let C23;
  let C28;
  let C27;
  let C26;
  let C31;
  let C30;
  let C29;
  md_render.MarkdownRender = class MarkdownRender extends framework.StatelessWidget {
    get UriUtils() {
      return null;
    }
    build(context) {
      return new safe_area.SafeArea.new({child: this[_html] == null ? new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}) : new scrollbar.Scrollbar.new({child: new single_child_scroll_view.SingleChildScrollView.new({child: new flutter_html.Html.new({data: html_renderer.markdownToHtml(this[_html]), padding: new edge_insets.EdgeInsets.all(8.0), backgroundColor: theme.Theme.of(context).scaffoldBackgroundColor, defaultTextStyle: new text_style.TextStyle.new({fontFamily: "serif"}), linkStyle: C5 || CT.C5, onLinkTap: dart.fn(url => web.UrlUtils.open(url, {name: "Info"}), StringTovoid()), onImageTap: dart.fn(src => web.UrlUtils.open(src, {name: "Preview"}), StringTovoid()), customTextAlign: dart.fn(node => {
                if (dom.Element.is(node)) {
                  switch (node.localName) {
                    case "p":
                    {
                      return ui.TextAlign.justify;
                    }
                  }
                }
              }, NodeToTextAlign()), customTextStyle: dart.fn((node, baseStyle) => {
                if (dom.Element.is(node)) {
                  switch (node.localName) {
                    case "p":
                    {
                      return baseStyle.merge(new text_style.TextStyle.new({height: 2.0, fontSize: 20.0}));
                    }
                  }
                }
                return baseStyle;
              }, NodeAndTextStyleToTextStyle()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C23 || CT.C23}), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (md_render.MarkdownRender.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let html = opts && 'html' in opts ? opts.html : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_html] = html;
    md_render.MarkdownRender.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = md_render.MarkdownRender.prototype;
  dart.addTypeTests(md_render.MarkdownRender);
  dart.setMethodSignature(md_render.MarkdownRender, () => ({
    __proto__: dart.getMethods(md_render.MarkdownRender.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setGetterSignature(md_render.MarkdownRender, () => ({
    __proto__: dart.getGetters(md_render.MarkdownRender.__proto__),
    UriUtils: dart.dynamic
  }));
  dart.setLibraryUri(md_render.MarkdownRender, "package:personal_website/ui/common/md_render.dart");
  dart.setFieldSignature(md_render.MarkdownRender, () => ({
    __proto__: dart.getFields(md_render.MarkdownRender.__proto__),
    [_html]: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/personal_website/ui/common/md_render", {
    "package:personal_website/ui/common/md_render.dart": md_render
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["md_render.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAekB;IAAI;UAGM;AACxB,YAAO,oCACE,AAAM,eAAG,OACV,6BAAc,qKACd,oCACS,+DACE,iCACC,6BAAkB,uBAEJ,+BAAI,uBACD,AAAY,eAAT,OAAO,6CACf,0CAAsB,8CAE7B,QAAC,OAAiB,kBAAK,GAAG,SAAQ,uCACjC,QAAC,OAAiB,kBAAK,GAAG,SAAQ,+CAW7B,QAAU;AACzB,oBAAS,eAAL,IAAI;AACN,0BAAQ,AAAK,IAAD;;;AAER,4BAAiB;;;;sDAIR,SAAU,MAAgB;AACzC,oBAAS,eAAL,IAAI;AACN,0BAAQ,AAAK,IAAD;;;AAER,4BAAO,AACF,UADW,OACL,sCAAkB,eAAa;;;;AAGhD,sBAAO,UAAS;;IAMlC;;;QAzDM;QACa;;IACP,cAAE,IAAI;AACZ,4DAAW,GAAG;;EAAC","file":"md_render.ddc.js"}');
  // Exports:
  return {
    ui__common__md_render: md_render
  };
});

//# sourceMappingURL=md_render.ddc.js.map

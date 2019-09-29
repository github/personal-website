define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/material', 'packages/flutter/src/widgets/actions', 'packages/flutter_html/rich_text_parser', 'packages/flutter_html/html_parser', 'packages/flutter_html/image_properties', 'packages/html/dom'], function(dart_sdk, packages__flutter__src__painting___network_image_web, packages__flutter__material, packages__flutter__src__widgets__actions, packages__flutter_html__rich_text_parser, packages__flutter_html__html_parser, packages__flutter_html__image_properties, packages__html__dom) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const colors = packages__flutter__src__painting___network_image_web.src__painting__colors;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const colors$ = packages__flutter__material.src__material__colors;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const rich_text_parser = packages__flutter_html__rich_text_parser.rich_text_parser;
  const html_parser = packages__flutter_html__html_parser.html_parser;
  const image_properties = packages__flutter_html__image_properties.image_properties;
  const dom = packages__html__dom.dom;
  const flutter_html = Object.create(dart.library);
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
        name: "shrinkToFit",
        column: 17,
        line: 71,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onLinkTap",
        column: 17,
        line: 72,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "renderNewlines",
        column: 17,
        line: 73,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customEdgeInsets",
        column: 17,
        line: 74,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customTextStyle",
        column: 17,
        line: 75,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customTextAlign",
        column: 17,
        line: 76,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "html",
        column: 17,
        line: 77,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onImageError",
        column: 17,
        line: 78,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "linkStyle",
        column: 17,
        line: 79,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "imageProperties",
        column: 17,
        line: 80,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onImageTap",
        column: 17,
        line: 81,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showImages",
        column: 17,
        line: 82,
        file: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 15,
        line: 70,
        file: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 17,
        line: 85,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onLinkTap",
        column: 17,
        line: 86,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "renderNewlines",
        column: 17,
        line: 87,
        file: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "customRender",
        column: 17,
        line: 88,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "html",
        column: 17,
        line: 89,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "blockSpacing",
        column: 17,
        line: 90,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onImageError",
        column: 17,
        line: 91,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "linkStyle",
        column: 17,
        line: 92,
        file: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "showImages",
        column: 17,
        line: 93,
        file: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C23 || CT.C23,
        name: null,
        column: 15,
        line: 84,
        file: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 7,
        line: 64,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 7,
        line: 65,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 66,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 67,
        file: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C34 || CT.C34,
        name: null,
        column: 12,
        line: 63,
        file: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
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
  let C9;
  let C8;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C23;
  let C22;
  let C35;
  let C36;
  let C37;
  let C38;
  let C34;
  let C33;
  flutter_html.Html = class Html extends framework.StatelessWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get defaultTextStyle() {
      return this[defaultTextStyle$];
    }
    set defaultTextStyle(value) {
      super.defaultTextStyle = value;
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
    get blockSpacing() {
      return this[blockSpacing$];
    }
    set blockSpacing(value) {
      super.blockSpacing = value;
    }
    get useRichText() {
      return this[useRichText$];
    }
    set useRichText(value) {
      super.useRichText = value;
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
    get shrinkToFit() {
      return this[shrinkToFit$];
    }
    set shrinkToFit(value) {
      super.shrinkToFit = value;
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
    get customRender() {
      return this[customRender$];
    }
    set customRender(value) {
      super.customRender = value;
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
    build(context) {
      let t0;
      let width = dart.test(this.shrinkToFit) ? null : media_query.MediaQuery.of(context).size.width;
      return new container.Container.new({padding: this.padding, color: this.backgroundColor, width: width, child: text.DefaultTextStyle.merge({style: (t0 = this.defaultTextStyle, t0 == null ? text.DefaultTextStyle.of(context).style : t0), child: dart.test(this.useRichText) ? new rich_text_parser.HtmlRichTextParser.new({shrinkToFit: this.shrinkToFit, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customEdgeInsets: this.customEdgeInsets, customTextStyle: this.customTextStyle, customTextAlign: this.customTextAlign, html: this.data, onImageError: this.onImageError, linkStyle: this.linkStyle, imageProperties: this.imageProperties, onImageTap: this.onImageTap, showImages: this.showImages, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}) : new html_parser.HtmlOldParser.new({width: width, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customRender: this.customRender, html: this.data, blockSpacing: this.blockSpacing, onImageError: this.onImageError, linkStyle: this.linkStyle, showImages: this.showImages, $creationLocationd_0dea112b090073317d4: C22 || CT.C22})}), $creationLocationd_0dea112b090073317d4: C33 || CT.C33});
    }
  };
  (flutter_html.Html.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let defaultTextStyle = opts && 'defaultTextStyle' in opts ? opts.defaultTextStyle : null;
    let onLinkTap = opts && 'onLinkTap' in opts ? opts.onLinkTap : null;
    let renderNewlines = opts && 'renderNewlines' in opts ? opts.renderNewlines : false;
    let customRender = opts && 'customRender' in opts ? opts.customRender : null;
    let customEdgeInsets = opts && 'customEdgeInsets' in opts ? opts.customEdgeInsets : null;
    let customTextStyle = opts && 'customTextStyle' in opts ? opts.customTextStyle : null;
    let customTextAlign = opts && 'customTextAlign' in opts ? opts.customTextAlign : null;
    let blockSpacing = opts && 'blockSpacing' in opts ? opts.blockSpacing : 14;
    let useRichText = opts && 'useRichText' in opts ? opts.useRichText : true;
    let onImageError = opts && 'onImageError' in opts ? opts.onImageError : null;
    let linkStyle = opts && 'linkStyle' in opts ? opts.linkStyle : C0 || CT.C0;
    let shrinkToFit = opts && 'shrinkToFit' in opts ? opts.shrinkToFit : false;
    let imageProperties = opts && 'imageProperties' in opts ? opts.imageProperties : null;
    let onImageTap = opts && 'onImageTap' in opts ? opts.onImageTap : null;
    let showImages = opts && 'showImages' in opts ? opts.showImages : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[padding$] = padding;
    this[backgroundColor$] = backgroundColor;
    this[defaultTextStyle$] = defaultTextStyle;
    this[onLinkTap$] = onLinkTap;
    this[renderNewlines$] = renderNewlines;
    this[customRender$] = customRender;
    this[customEdgeInsets$] = customEdgeInsets;
    this[customTextStyle$] = customTextStyle;
    this[customTextAlign$] = customTextAlign;
    this[blockSpacing$] = blockSpacing;
    this[useRichText$] = useRichText;
    this[onImageError$] = onImageError;
    this[linkStyle$] = linkStyle;
    this[shrinkToFit$] = shrinkToFit;
    this[imageProperties$] = imageProperties;
    this[onImageTap$] = onImageTap;
    this[showImages$] = showImages;
    flutter_html.Html.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_html.Html.prototype;
  dart.addTypeTests(flutter_html.Html);
  const data$ = Symbol("Html.data");
  const padding$ = Symbol("Html.padding");
  const backgroundColor$ = Symbol("Html.backgroundColor");
  const defaultTextStyle$ = Symbol("Html.defaultTextStyle");
  const onLinkTap$ = Symbol("Html.onLinkTap");
  const renderNewlines$ = Symbol("Html.renderNewlines");
  const blockSpacing$ = Symbol("Html.blockSpacing");
  const useRichText$ = Symbol("Html.useRichText");
  const onImageError$ = Symbol("Html.onImageError");
  const linkStyle$ = Symbol("Html.linkStyle");
  const shrinkToFit$ = Symbol("Html.shrinkToFit");
  const imageProperties$ = Symbol("Html.imageProperties");
  const onImageTap$ = Symbol("Html.onImageTap");
  const showImages$ = Symbol("Html.showImages");
  const customRender$ = Symbol("Html.customRender");
  const customEdgeInsets$ = Symbol("Html.customEdgeInsets");
  const customTextStyle$ = Symbol("Html.customTextStyle");
  const customTextAlign$ = Symbol("Html.customTextAlign");
  dart.setMethodSignature(flutter_html.Html, () => ({
    __proto__: dart.getMethods(flutter_html.Html.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(flutter_html.Html, "package:flutter_html/flutter_html.dart");
  dart.setFieldSignature(flutter_html.Html, () => ({
    __proto__: dart.getFields(flutter_html.Html.__proto__),
    data: dart.finalFieldType(core.String),
    padding: dart.finalFieldType(edge_insets.EdgeInsetsGeometry),
    backgroundColor: dart.finalFieldType(ui.Color),
    defaultTextStyle: dart.finalFieldType(text_style.TextStyle),
    onLinkTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    renderNewlines: dart.finalFieldType(core.bool),
    blockSpacing: dart.finalFieldType(core.double),
    useRichText: dart.finalFieldType(core.bool),
    onImageError: dart.finalFieldType(dart.fnType(dart.void, [dart.dynamic, core.StackTrace])),
    linkStyle: dart.finalFieldType(text_style.TextStyle),
    shrinkToFit: dart.finalFieldType(core.bool),
    imageProperties: dart.finalFieldType(image_properties.ImageProperties),
    onImageTap: dart.finalFieldType(dart.fnType(dart.void, [core.String])),
    showImages: dart.finalFieldType(core.bool),
    customRender: dart.finalFieldType(dart.fnType(framework.Widget, [dom.Node, core.List$(framework.Widget)])),
    customEdgeInsets: dart.finalFieldType(dart.fnType(edge_insets.EdgeInsets, [dom.Node])),
    customTextStyle: dart.finalFieldType(dart.fnType(text_style.TextStyle, [dom.Node, text_style.TextStyle])),
    customTextAlign: dart.finalFieldType(dart.fnType(ui.TextAlign, [dom.Element]))
  }));
  dart.trackLibraries("packages/flutter_html/flutter_html", {
    "package:flutter_html/flutter_html.dart": flutter_html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_html.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAkCe;;;;;;IACY;;;;;;IACb;;;;;;IACI;;;;;;IACA;;;;;;IACL;;;;;;IACE;;;;;;IACF;;;;;;IACc;;;;;;IACT;;;;;;IACL;;;;;;IAGW;;;;;;IACL;;;;;;IACN;;;;;;IAIQ;;;;;;IACI;;;;;;IACD;;;;;;IACA;;;;;;UAGI;;AACX,4BAAQ,oBAAc,OAAkB,AAAY,AAAK,0BAAd,OAAO;AAE/D,YAAO,uCACI,qBACF,6BACA,KAAK,SACY,qCACE,KAAjB,6BAAiB,OAAoB,AAAY,yBAAT,OAAO,gCAC9C,oBACF,0DACe,6BACF,gCACK,uCACE,wCACD,uCACA,4BACX,yBACQ,8BACH,iCACM,kCACL,6BACA,yEAEd,0CACS,KAAK,aACD,gCACK,mCACF,yBACR,yBACQ,iCACA,8BACH,4BACC;IAI1B;;;QAtFM;QACW;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAIA;QACA;QACA;QACA;;IApBU;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAIA;IACA;IACA;IACA;AACF,qDAAW,GAAG;;EAAC","file":"flutter_html.ddc.js"}');
  // Exports:
  return {
    flutter_html: flutter_html
  };
});

//# sourceMappingURL=flutter_html.ddc.js.map

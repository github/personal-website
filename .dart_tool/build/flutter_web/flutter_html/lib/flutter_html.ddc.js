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
        [Color__value]: 4286755327.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4282682111.0
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280908287.0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: ui.Color.prototype,
        [Color__value]: 4280902399.0
      });
    },
    get C2() {
      return C2 = dart.constMap(core.int, ui.Color, [100, C3 || CT.C3, 200, C4 || CT.C4, 400, C5 || CT.C5, 700, C6 || CT.C6]);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: colors$.MaterialAccentColor.prototype,
        [Color__value]: 4282682111.0,
        [ColorSwatch__swatch]: C2 || CT.C2
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: ui.TextDecoration.prototype,
        [TextDecoration__mask]: 1
      });
    },
    get C0() {
      return C0 = dart.const({
        __proto__: text_style.TextStyle.prototype,
        [TextStyle_fontFeatures]: null,
        [TextStyle_shadows]: null,
        [TextStyle_debugLabel]: null,
        [TextStyle_decorationThickness]: null,
        [TextStyle_decorationStyle]: null,
        [TextStyle_decorationColor]: C1 || CT.C1,
        [TextStyle_decoration]: C7 || CT.C7,
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
        [TextStyle_color]: C1 || CT.C1,
        [TextStyle_inherit]: true
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "shrinkToFit",
        [_Location_column]: 17,
        [_Location_line]: 75,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLinkTap",
        [_Location_column]: 17,
        [_Location_line]: 76,
        [_Location_file]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "renderNewlines",
        [_Location_column]: 17,
        [_Location_line]: 77,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customEdgeInsets",
        [_Location_column]: 17,
        [_Location_line]: 78,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customTextStyle",
        [_Location_column]: 17,
        [_Location_line]: 79,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customTextAlign",
        [_Location_column]: 17,
        [_Location_line]: 80,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "html",
        [_Location_column]: 17,
        [_Location_line]: 81,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onImageError",
        [_Location_column]: 17,
        [_Location_line]: 82,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "linkStyle",
        [_Location_column]: 17,
        [_Location_line]: 83,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "imageProperties",
        [_Location_column]: 17,
        [_Location_line]: 84,
        [_Location_file]: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onImageTap",
        [_Location_column]: 17,
        [_Location_line]: 85,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showImages",
        [_Location_column]: 17,
        [_Location_line]: 86,
        [_Location_file]: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "routes",
        [_Location_column]: 17,
        [_Location_line]: 87,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21, C22 || CT.C22], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 74,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 17,
        [_Location_line]: 90,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onLinkTap",
        [_Location_column]: 17,
        [_Location_line]: 91,
        [_Location_file]: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "renderNewlines",
        [_Location_column]: 17,
        [_Location_line]: 92,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "customRender",
        [_Location_column]: 17,
        [_Location_line]: 93,
        [_Location_file]: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "html",
        [_Location_column]: 17,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "blockSpacing",
        [_Location_column]: 17,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onImageError",
        [_Location_column]: 17,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "linkStyle",
        [_Location_column]: 17,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "showImages",
        [_Location_column]: 17,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25, C26 || CT.C26, C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32, C33 || CT.C33], widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C24 || CT.C24,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 89,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "padding",
        [_Location_column]: 7,
        [_Location_line]: 68,
        [_Location_file]: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "color",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C35 || CT.C35,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 67,
        [_Location_file]: "org-dartlang-app:///packages/flutter_html/flutter_html.dart"
      });
    }
  });
  const TextStyle_fontFeatures = dart.privateName(text_style, "TextStyle.fontFeatures");
  const TextStyle_shadows = dart.privateName(text_style, "TextStyle.shadows");
  const TextStyle_debugLabel = dart.privateName(text_style, "TextStyle.debugLabel");
  const TextStyle_decorationThickness = dart.privateName(text_style, "TextStyle.decorationThickness");
  const TextStyle_decorationStyle = dart.privateName(text_style, "TextStyle.decorationStyle");
  const Color__value = dart.privateName(ui, "Color._value");
  let C3;
  let C4;
  let C5;
  let C6;
  let C2;
  const ColorSwatch__swatch = dart.privateName(colors, "ColorSwatch._swatch");
  let C1;
  const TextStyle_decorationColor = dart.privateName(text_style, "TextStyle.decorationColor");
  const TextDecoration__mask = dart.privateName(ui, "TextDecoration._mask");
  let C7;
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
  let C0;
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
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
  let C9;
  let C8;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C24;
  let C23;
  let C36;
  let C37;
  let C38;
  let C39;
  let C35;
  let C34;
  const Html_data = dart.privateName(flutter_html, "Html.data");
  const Html_padding = dart.privateName(flutter_html, "Html.padding");
  const Html_backgroundColor = dart.privateName(flutter_html, "Html.backgroundColor");
  const Html_defaultTextStyle = dart.privateName(flutter_html, "Html.defaultTextStyle");
  const Html_onLinkTap = dart.privateName(flutter_html, "Html.onLinkTap");
  const Html_renderNewlines = dart.privateName(flutter_html, "Html.renderNewlines");
  const Html_blockSpacing = dart.privateName(flutter_html, "Html.blockSpacing");
  const Html_useRichText = dart.privateName(flutter_html, "Html.useRichText");
  const Html_onImageError = dart.privateName(flutter_html, "Html.onImageError");
  const Html_linkStyle = dart.privateName(flutter_html, "Html.linkStyle");
  const Html_shrinkToFit = dart.privateName(flutter_html, "Html.shrinkToFit");
  const Html_imageProperties = dart.privateName(flutter_html, "Html.imageProperties");
  const Html_onImageTap = dart.privateName(flutter_html, "Html.onImageTap");
  const Html_showImages = dart.privateName(flutter_html, "Html.showImages");
  const Html_customRender = dart.privateName(flutter_html, "Html.customRender");
  const Html_customEdgeInsets = dart.privateName(flutter_html, "Html.customEdgeInsets");
  const Html_customTextStyle = dart.privateName(flutter_html, "Html.customTextStyle");
  const Html_customTextAlign = dart.privateName(flutter_html, "Html.customTextAlign");
  const Html_routes = dart.privateName(flutter_html, "Html.routes");
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
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    build(context) {
      let t0;
      let width = dart.test(this.shrinkToFit) ? null : media_query.MediaQuery.of(context).size.width;
      return new container.Container.new({padding: this.padding, color: this.backgroundColor, width: width, child: text.DefaultTextStyle.merge({style: (t0 = this.defaultTextStyle, t0 == null ? text.DefaultTextStyle.of(context).style : t0), child: dart.test(this.useRichText) ? new rich_text_parser.HtmlRichTextParser.new({shrinkToFit: this.shrinkToFit, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customEdgeInsets: this.customEdgeInsets, customTextStyle: this.customTextStyle, customTextAlign: this.customTextAlign, html: this.data, onImageError: this.onImageError, linkStyle: this.linkStyle, imageProperties: this.imageProperties, onImageTap: this.onImageTap, showImages: this.showImages, routes: this.routes, $creationLocationd_0dea112b090073317d4: C8 || CT.C8}) : new html_parser.HtmlOldParser.new({width: width, onLinkTap: this.onLinkTap, renderNewlines: this.renderNewlines, customRender: this.customRender, html: this.data, blockSpacing: this.blockSpacing, onImageError: this.onImageError, linkStyle: this.linkStyle, showImages: this.showImages, $creationLocationd_0dea112b090073317d4: C23 || CT.C23})}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34});
    }
  };
  (flutter_html.Html.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let routes = opts && 'routes' in opts ? opts.routes : null;
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
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[routes$] = routes;
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
    flutter_html.Html.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = flutter_html.Html.prototype;
  dart.addTypeTests(flutter_html.Html);
  const data$ = Html_data;
  const padding$ = Html_padding;
  const backgroundColor$ = Html_backgroundColor;
  const defaultTextStyle$ = Html_defaultTextStyle;
  const onLinkTap$ = Html_onLinkTap;
  const renderNewlines$ = Html_renderNewlines;
  const blockSpacing$ = Html_blockSpacing;
  const useRichText$ = Html_useRichText;
  const onImageError$ = Html_onImageError;
  const linkStyle$ = Html_linkStyle;
  const shrinkToFit$ = Html_shrinkToFit;
  const imageProperties$ = Html_imageProperties;
  const onImageTap$ = Html_onImageTap;
  const showImages$ = Html_showImages;
  const customRender$ = Html_customRender;
  const customEdgeInsets$ = Html_customEdgeInsets;
  const customTextStyle$ = Html_customTextStyle;
  const customTextAlign$ = Html_customTextAlign;
  const routes$ = Html_routes;
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
    customTextAlign: dart.finalFieldType(dart.fnType(ui.TextAlign, [dom.Element])),
    routes: dart.finalFieldType(core.Map$(core.String, dart.fnType(framework.Widget, [framework.BuildContext])))
  }));
  dart.trackLibraries("packages/flutter_html/flutter_html", {
    "package:flutter_html/flutter_html.dart": flutter_html
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["flutter_html.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAmCe;;;;;;IACY;;;;;;IACb;;;;;;IACI;;;;;;IACA;;;;;;IACL;;;;;;IACE;;;;;;IACF;;;;;;IACc;;;;;;IACT;;;;;;IACL;;;;;;IAGW;;;;;;IACL;;;;;;IACN;;;;;;IAIQ;;;;;;IACI;;;;;;IACD;;;;;;IACA;;;;;;IAGW;;;;;;UAGP;;AACX,4BAAQ,oBAAc,OAAkB,AAAY,AAAK,0BAAd,OAAO;AAE/D,YAAO,uCACI,qBACF,6BACA,KAAK,SACY,qCACE,kCAAjB,OAAqC,AAAY,yBAAT,OAAO,gCAC9C,oBACF,0DACe,6BACF,gCACK,uCACE,wCACD,uCACA,4BACX,yBACQ,8BACH,iCACM,kCACL,6BACA,yBACJ,qEAEV,0CACS,KAAK,aACD,gCACK,mCACF,yBACR,yBACQ,iCACA,8BACH,4BACC;IAI1B;;;QA3FM;QACW;QACA;QACV;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QAIA;QACA;QACA;QACA;;IArBU;IACA;IACV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IAIA;IACA;IACA;IACA;AACF,qDAAW,GAAG;;EAAC","file":"flutter_html.ddc.js"}');
  // Exports:
  return {
    flutter_html: flutter_html
  };
});

//# sourceMappingURL=flutter_html.ddc.js.map

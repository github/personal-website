define(['dart_sdk', 'packages/flutter/src/painting/_network_image_web'], function(dart_sdk, packages__flutter__src__painting___network_image_web) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const alignment = packages__flutter__src__painting___network_image_web.src__painting__alignment;
  const decoration_image = packages__flutter__src__painting___network_image_web.src__painting__decoration_image;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const image_properties = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: alignment.Alignment.prototype,
        [Alignment_y]: 0,
        [Alignment_x]: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: decoration_image.ImageRepeat.prototype,
        [_name]: "ImageRepeat.noRepeat",
        index: 3
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui.FilterQuality.prototype,
        [_name$]: "FilterQuality.low",
        index: 1
      });
    }
  });
  const Alignment_y = dart.privateName(alignment, "Alignment.y");
  const Alignment_x = dart.privateName(alignment, "Alignment.x");
  let C0;
  const _name = dart.privateName(decoration_image, "_name");
  let C1;
  const _name$ = dart.privateName(ui, "_name");
  let C2;
  const ImageProperties_semanticLabel = dart.privateName(image_properties, "ImageProperties.semanticLabel");
  const ImageProperties_excludeFromSemantics = dart.privateName(image_properties, "ImageProperties.excludeFromSemantics");
  const ImageProperties_width = dart.privateName(image_properties, "ImageProperties.width");
  const ImageProperties_height = dart.privateName(image_properties, "ImageProperties.height");
  const ImageProperties_color = dart.privateName(image_properties, "ImageProperties.color");
  const ImageProperties_colorBlendMode = dart.privateName(image_properties, "ImageProperties.colorBlendMode");
  const ImageProperties_fit = dart.privateName(image_properties, "ImageProperties.fit");
  const ImageProperties_alignment = dart.privateName(image_properties, "ImageProperties.alignment");
  const ImageProperties_repeat = dart.privateName(image_properties, "ImageProperties.repeat");
  const ImageProperties_centerSlice = dart.privateName(image_properties, "ImageProperties.centerSlice");
  const ImageProperties_matchTextDirection = dart.privateName(image_properties, "ImageProperties.matchTextDirection");
  const ImageProperties_filterQuality = dart.privateName(image_properties, "ImageProperties.filterQuality");
  const ImageProperties_scale = dart.privateName(image_properties, "ImageProperties.scale");
  image_properties.ImageProperties = class ImageProperties extends core.Object {
    get semanticLabel() {
      return this[semanticLabel$];
    }
    set semanticLabel(value) {
      super.semanticLabel = value;
    }
    get excludeFromSemantics() {
      return this[excludeFromSemantics$];
    }
    set excludeFromSemantics(value) {
      super.excludeFromSemantics = value;
    }
    get width() {
      return this[width$];
    }
    set width(value) {
      super.width = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get colorBlendMode() {
      return this[colorBlendMode$];
    }
    set colorBlendMode(value) {
      super.colorBlendMode = value;
    }
    get fit() {
      return this[fit$];
    }
    set fit(value) {
      super.fit = value;
    }
    get alignment() {
      return this[alignment$];
    }
    set alignment(value) {
      super.alignment = value;
    }
    get repeat() {
      return this[repeat$];
    }
    set repeat(value) {
      super.repeat = value;
    }
    get centerSlice() {
      return this[centerSlice$];
    }
    set centerSlice(value) {
      super.centerSlice = value;
    }
    get matchTextDirection() {
      return this[matchTextDirection$];
    }
    set matchTextDirection(value) {
      super.matchTextDirection = value;
    }
    get filterQuality() {
      return this[filterQuality$];
    }
    set filterQuality(value) {
      super.filterQuality = value;
    }
    get scale() {
      return this[scale$];
    }
    set scale(value) {
      super.scale = value;
    }
  };
  (image_properties.ImageProperties.new = function(opts) {
    let scale = opts && 'scale' in opts ? opts.scale : 1;
    let semanticLabel = opts && 'semanticLabel' in opts ? opts.semanticLabel : null;
    let excludeFromSemantics = opts && 'excludeFromSemantics' in opts ? opts.excludeFromSemantics : false;
    let width = opts && 'width' in opts ? opts.width : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let colorBlendMode = opts && 'colorBlendMode' in opts ? opts.colorBlendMode : null;
    let fit = opts && 'fit' in opts ? opts.fit : null;
    let alignment = opts && 'alignment' in opts ? opts.alignment : C0 || CT.C0;
    let repeat = opts && 'repeat' in opts ? opts.repeat : C1 || CT.C1;
    let centerSlice = opts && 'centerSlice' in opts ? opts.centerSlice : null;
    let matchTextDirection = opts && 'matchTextDirection' in opts ? opts.matchTextDirection : false;
    let filterQuality = opts && 'filterQuality' in opts ? opts.filterQuality : C2 || CT.C2;
    this[scale$] = scale;
    this[semanticLabel$] = semanticLabel;
    this[excludeFromSemantics$] = excludeFromSemantics;
    this[width$] = width;
    this[height$] = height;
    this[color$] = color;
    this[colorBlendMode$] = colorBlendMode;
    this[fit$] = fit;
    this[alignment$] = alignment;
    this[repeat$] = repeat;
    this[centerSlice$] = centerSlice;
    this[matchTextDirection$] = matchTextDirection;
    this[filterQuality$] = filterQuality;
    ;
  }).prototype = image_properties.ImageProperties.prototype;
  dart.addTypeTests(image_properties.ImageProperties);
  const semanticLabel$ = ImageProperties_semanticLabel;
  const excludeFromSemantics$ = ImageProperties_excludeFromSemantics;
  const width$ = ImageProperties_width;
  const height$ = ImageProperties_height;
  const color$ = ImageProperties_color;
  const colorBlendMode$ = ImageProperties_colorBlendMode;
  const fit$ = ImageProperties_fit;
  const alignment$ = ImageProperties_alignment;
  const repeat$ = ImageProperties_repeat;
  const centerSlice$ = ImageProperties_centerSlice;
  const matchTextDirection$ = ImageProperties_matchTextDirection;
  const filterQuality$ = ImageProperties_filterQuality;
  const scale$ = ImageProperties_scale;
  dart.setLibraryUri(image_properties.ImageProperties, "package:flutter_html/image_properties.dart");
  dart.setFieldSignature(image_properties.ImageProperties, () => ({
    __proto__: dart.getFields(image_properties.ImageProperties.__proto__),
    semanticLabel: dart.finalFieldType(core.String),
    excludeFromSemantics: dart.finalFieldType(core.bool),
    width: dart.finalFieldType(core.double),
    height: dart.finalFieldType(core.double),
    color: dart.finalFieldType(ui.Color),
    colorBlendMode: dart.finalFieldType(ui.BlendMode),
    fit: dart.finalFieldType(box_fit.BoxFit),
    alignment: dart.finalFieldType(alignment.AlignmentGeometry),
    repeat: dart.finalFieldType(decoration_image.ImageRepeat),
    centerSlice: dart.finalFieldType(ui.Rect),
    matchTextDirection: dart.finalFieldType(core.bool),
    filterQuality: dart.finalFieldType(ui.FilterQuality),
    scale: dart.finalFieldType(core.double)
  }));
  dart.trackLibraries("packages/flutter_html/image_properties", {
    "package:flutter_html/image_properties.dart": image_properties
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["image_properties.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIe;;;;;;IACF;;;;;;IACE;;;;;;IACA;;;;;;IACD;;;;;;IACI;;;;;;IACH;;;;;;IACW;;;;;;IACN;;;;;;IACP;;;;;;IACA;;;;;;IACS;;;;;;IACP;;;;;;;;QAGN;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAZA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"image_properties.ddc.js"}');
  // Exports:
  return {
    image_properties: image_properties
  };
});

//# sourceMappingURL=image_properties.ddc.js.map

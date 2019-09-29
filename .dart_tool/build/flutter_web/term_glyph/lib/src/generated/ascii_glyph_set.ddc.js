define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const glyph_set = Object.create(dart.library);
  const ascii_glyph_set = Object.create(dart.library);
  const term_glyph = Object.create(dart.library);
  const top_level = Object.create(dart.library);
  const unicode_glyph_set = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ascii_glyph_set.AsciiGlyphSet.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: unicode_glyph_set.UnicodeGlyphSet.prototype
      });
    }
  });
  glyph_set.GlyphSet = class GlyphSet extends core.Object {};
  (glyph_set.GlyphSet.new = function() {
    ;
  }).prototype = glyph_set.GlyphSet.prototype;
  dart.addTypeTests(glyph_set.GlyphSet);
  dart.setLibraryUri(glyph_set.GlyphSet, "package:term_glyph/src/generated/glyph_set.dart");
  ascii_glyph_set.AsciiGlyphSet = class AsciiGlyphSet extends core.Object {
    glyphOrAscii(glyph, alternative) {
      return alternative;
    }
    get bullet() {
      return "*";
    }
    get leftArrow() {
      return "<";
    }
    get rightArrow() {
      return ">";
    }
    get upArrow() {
      return "^";
    }
    get downArrow() {
      return "v";
    }
    get longLeftArrow() {
      return "<=";
    }
    get longRightArrow() {
      return "=>";
    }
    get horizontalLine() {
      return "-";
    }
    get verticalLine() {
      return "|";
    }
    get topLeftCorner() {
      return ",";
    }
    get topRightCorner() {
      return ",";
    }
    get bottomLeftCorner() {
      return "'";
    }
    get bottomRightCorner() {
      return "'";
    }
    get cross() {
      return "+";
    }
    get teeUp() {
      return "+";
    }
    get teeDown() {
      return "+";
    }
    get teeLeft() {
      return "+";
    }
    get teeRight() {
      return "+";
    }
    get upEnd() {
      return "'";
    }
    get downEnd() {
      return ",";
    }
    get leftEnd() {
      return "-";
    }
    get rightEnd() {
      return "-";
    }
    get horizontalLineBold() {
      return "=";
    }
    get verticalLineBold() {
      return "|";
    }
    get topLeftCornerBold() {
      return ",";
    }
    get topRightCornerBold() {
      return ",";
    }
    get bottomLeftCornerBold() {
      return "'";
    }
    get bottomRightCornerBold() {
      return "'";
    }
    get crossBold() {
      return "+";
    }
    get teeUpBold() {
      return "+";
    }
    get teeDownBold() {
      return "+";
    }
    get teeLeftBold() {
      return "+";
    }
    get teeRightBold() {
      return "+";
    }
    get upEndBold() {
      return "'";
    }
    get downEndBold() {
      return ",";
    }
    get leftEndBold() {
      return "-";
    }
    get rightEndBold() {
      return "-";
    }
    get horizontalLineDouble() {
      return "=";
    }
    get verticalLineDouble() {
      return "|";
    }
    get topLeftCornerDouble() {
      return ",";
    }
    get topRightCornerDouble() {
      return ",";
    }
    get bottomLeftCornerDouble() {
      return "\"";
    }
    get bottomRightCornerDouble() {
      return "\"";
    }
    get crossDouble() {
      return "+";
    }
    get teeUpDouble() {
      return "+";
    }
    get teeDownDouble() {
      return "+";
    }
    get teeLeftDouble() {
      return "+";
    }
    get teeRightDouble() {
      return "+";
    }
    get horizontalLineDoubleDash() {
      return "-";
    }
    get horizontalLineDoubleDashBold() {
      return "-";
    }
    get verticalLineDoubleDash() {
      return "|";
    }
    get verticalLineDoubleDashBold() {
      return "|";
    }
    get horizontalLineTripleDash() {
      return "-";
    }
    get horizontalLineTripleDashBold() {
      return "-";
    }
    get verticalLineTripleDash() {
      return "|";
    }
    get verticalLineTripleDashBold() {
      return "|";
    }
    get horizontalLineQuadrupleDash() {
      return "-";
    }
    get horizontalLineQuadrupleDashBold() {
      return "-";
    }
    get verticalLineQuadrupleDash() {
      return "|";
    }
    get verticalLineQuadrupleDashBold() {
      return "|";
    }
  };
  (ascii_glyph_set.AsciiGlyphSet.new = function() {
    ;
  }).prototype = ascii_glyph_set.AsciiGlyphSet.prototype;
  dart.addTypeTests(ascii_glyph_set.AsciiGlyphSet);
  ascii_glyph_set.AsciiGlyphSet[dart.implements] = () => [glyph_set.GlyphSet];
  dart.setMethodSignature(ascii_glyph_set.AsciiGlyphSet, () => ({
    __proto__: dart.getMethods(ascii_glyph_set.AsciiGlyphSet.__proto__),
    glyphOrAscii: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.setGetterSignature(ascii_glyph_set.AsciiGlyphSet, () => ({
    __proto__: dart.getGetters(ascii_glyph_set.AsciiGlyphSet.__proto__),
    bullet: core.String,
    leftArrow: core.String,
    rightArrow: core.String,
    upArrow: core.String,
    downArrow: core.String,
    longLeftArrow: core.String,
    longRightArrow: core.String,
    horizontalLine: core.String,
    verticalLine: core.String,
    topLeftCorner: core.String,
    topRightCorner: core.String,
    bottomLeftCorner: core.String,
    bottomRightCorner: core.String,
    cross: core.String,
    teeUp: core.String,
    teeDown: core.String,
    teeLeft: core.String,
    teeRight: core.String,
    upEnd: core.String,
    downEnd: core.String,
    leftEnd: core.String,
    rightEnd: core.String,
    horizontalLineBold: core.String,
    verticalLineBold: core.String,
    topLeftCornerBold: core.String,
    topRightCornerBold: core.String,
    bottomLeftCornerBold: core.String,
    bottomRightCornerBold: core.String,
    crossBold: core.String,
    teeUpBold: core.String,
    teeDownBold: core.String,
    teeLeftBold: core.String,
    teeRightBold: core.String,
    upEndBold: core.String,
    downEndBold: core.String,
    leftEndBold: core.String,
    rightEndBold: core.String,
    horizontalLineDouble: core.String,
    verticalLineDouble: core.String,
    topLeftCornerDouble: core.String,
    topRightCornerDouble: core.String,
    bottomLeftCornerDouble: core.String,
    bottomRightCornerDouble: core.String,
    crossDouble: core.String,
    teeUpDouble: core.String,
    teeDownDouble: core.String,
    teeLeftDouble: core.String,
    teeRightDouble: core.String,
    horizontalLineDoubleDash: core.String,
    horizontalLineDoubleDashBold: core.String,
    verticalLineDoubleDash: core.String,
    verticalLineDoubleDashBold: core.String,
    horizontalLineTripleDash: core.String,
    horizontalLineTripleDashBold: core.String,
    verticalLineTripleDash: core.String,
    verticalLineTripleDashBold: core.String,
    horizontalLineQuadrupleDash: core.String,
    horizontalLineQuadrupleDashBold: core.String,
    verticalLineQuadrupleDash: core.String,
    verticalLineQuadrupleDashBold: core.String
  }));
  dart.setLibraryUri(ascii_glyph_set.AsciiGlyphSet, "package:term_glyph/src/generated/ascii_glyph_set.dart");
  term_glyph.glyphOrAscii = function glyphOrAscii(glyph, alternative) {
    return term_glyph.glyphs.glyphOrAscii(glyph, alternative);
  };
  dart.copyProperties(term_glyph, {
    get glyphs() {
      return term_glyph._glyphs;
    },
    get ascii() {
      return dart.equals(term_glyph.glyphs, term_glyph.asciiGlyphs);
    },
    set ascii(value) {
      term_glyph._glyphs = dart.test(value) ? term_glyph.asciiGlyphs : term_glyph.unicodeGlyphs;
    }
  });
  let C0;
  let C1;
  dart.defineLazy(term_glyph, {
    /*term_glyph.asciiGlyphs*/get asciiGlyphs() {
      return C0 || CT.C0;
    },
    /*term_glyph.unicodeGlyphs*/get unicodeGlyphs() {
      return C1 || CT.C1;
    },
    /*term_glyph._glyphs*/get _glyphs() {
      return term_glyph.unicodeGlyphs;
    },
    set _glyphs(_) {}
  });
  dart.copyProperties(top_level, {
    get bullet() {
      return term_glyph.glyphs.bullet;
    },
    get leftArrow() {
      return term_glyph.glyphs.leftArrow;
    },
    get rightArrow() {
      return term_glyph.glyphs.rightArrow;
    },
    get upArrow() {
      return term_glyph.glyphs.upArrow;
    },
    get downArrow() {
      return term_glyph.glyphs.downArrow;
    },
    get longLeftArrow() {
      return term_glyph.glyphs.longLeftArrow;
    },
    get longRightArrow() {
      return term_glyph.glyphs.longRightArrow;
    },
    get horizontalLine() {
      return term_glyph.glyphs.horizontalLine;
    },
    get verticalLine() {
      return term_glyph.glyphs.verticalLine;
    },
    get topLeftCorner() {
      return term_glyph.glyphs.topLeftCorner;
    },
    get topRightCorner() {
      return term_glyph.glyphs.topRightCorner;
    },
    get bottomLeftCorner() {
      return term_glyph.glyphs.bottomLeftCorner;
    },
    get bottomRightCorner() {
      return term_glyph.glyphs.bottomRightCorner;
    },
    get cross() {
      return term_glyph.glyphs.cross;
    },
    get teeUp() {
      return term_glyph.glyphs.teeUp;
    },
    get teeDown() {
      return term_glyph.glyphs.teeDown;
    },
    get teeLeft() {
      return term_glyph.glyphs.teeLeft;
    },
    get teeRight() {
      return term_glyph.glyphs.teeRight;
    },
    get upEnd() {
      return term_glyph.glyphs.upEnd;
    },
    get downEnd() {
      return term_glyph.glyphs.downEnd;
    },
    get leftEnd() {
      return term_glyph.glyphs.leftEnd;
    },
    get rightEnd() {
      return term_glyph.glyphs.rightEnd;
    },
    get horizontalLineBold() {
      return term_glyph.glyphs.horizontalLineBold;
    },
    get verticalLineBold() {
      return term_glyph.glyphs.verticalLineBold;
    },
    get topLeftCornerBold() {
      return term_glyph.glyphs.topLeftCornerBold;
    },
    get topRightCornerBold() {
      return term_glyph.glyphs.topRightCornerBold;
    },
    get bottomLeftCornerBold() {
      return term_glyph.glyphs.bottomLeftCornerBold;
    },
    get bottomRightCornerBold() {
      return term_glyph.glyphs.bottomRightCornerBold;
    },
    get crossBold() {
      return term_glyph.glyphs.crossBold;
    },
    get teeUpBold() {
      return term_glyph.glyphs.teeUpBold;
    },
    get teeDownBold() {
      return term_glyph.glyphs.teeDownBold;
    },
    get teeLeftBold() {
      return term_glyph.glyphs.teeLeftBold;
    },
    get teeRightBold() {
      return term_glyph.glyphs.teeRightBold;
    },
    get upEndBold() {
      return term_glyph.glyphs.upEndBold;
    },
    get downEndBold() {
      return term_glyph.glyphs.downEndBold;
    },
    get leftEndBold() {
      return term_glyph.glyphs.leftEndBold;
    },
    get rightEndBold() {
      return term_glyph.glyphs.rightEndBold;
    },
    get horizontalLineDouble() {
      return term_glyph.glyphs.horizontalLineDouble;
    },
    get verticalLineDouble() {
      return term_glyph.glyphs.verticalLineDouble;
    },
    get topLeftCornerDouble() {
      return term_glyph.glyphs.topLeftCornerDouble;
    },
    get topRightCornerDouble() {
      return term_glyph.glyphs.topRightCornerDouble;
    },
    get bottomLeftCornerDouble() {
      return term_glyph.glyphs.bottomLeftCornerDouble;
    },
    get bottomRightCornerDouble() {
      return term_glyph.glyphs.bottomRightCornerDouble;
    },
    get crossDouble() {
      return term_glyph.glyphs.crossDouble;
    },
    get teeUpDouble() {
      return term_glyph.glyphs.teeUpDouble;
    },
    get teeDownDouble() {
      return term_glyph.glyphs.teeDownDouble;
    },
    get teeLeftDouble() {
      return term_glyph.glyphs.teeLeftDouble;
    },
    get teeRightDouble() {
      return term_glyph.glyphs.teeRightDouble;
    },
    get horizontalLineDoubleDash() {
      return term_glyph.glyphs.horizontalLineDoubleDash;
    },
    get horizontalLineDoubleDashBold() {
      return term_glyph.glyphs.horizontalLineDoubleDashBold;
    },
    get verticalLineDoubleDash() {
      return term_glyph.glyphs.verticalLineDoubleDash;
    },
    get verticalLineDoubleDashBold() {
      return term_glyph.glyphs.verticalLineDoubleDashBold;
    },
    get horizontalLineTripleDash() {
      return term_glyph.glyphs.horizontalLineTripleDash;
    },
    get horizontalLineTripleDashBold() {
      return term_glyph.glyphs.horizontalLineTripleDashBold;
    },
    get verticalLineTripleDash() {
      return term_glyph.glyphs.verticalLineTripleDash;
    },
    get verticalLineTripleDashBold() {
      return term_glyph.glyphs.verticalLineTripleDashBold;
    },
    get horizontalLineQuadrupleDash() {
      return term_glyph.glyphs.horizontalLineQuadrupleDash;
    },
    get horizontalLineQuadrupleDashBold() {
      return term_glyph.glyphs.horizontalLineQuadrupleDashBold;
    },
    get verticalLineQuadrupleDash() {
      return term_glyph.glyphs.verticalLineQuadrupleDash;
    },
    get verticalLineQuadrupleDashBold() {
      return term_glyph.glyphs.verticalLineQuadrupleDashBold;
    }
  });
  unicode_glyph_set.UnicodeGlyphSet = class UnicodeGlyphSet extends core.Object {
    glyphOrAscii(glyph, alternative) {
      return glyph;
    }
    get bullet() {
      return "•";
    }
    get leftArrow() {
      return "←";
    }
    get rightArrow() {
      return "→";
    }
    get upArrow() {
      return "↑";
    }
    get downArrow() {
      return "↓";
    }
    get longLeftArrow() {
      return "◀━";
    }
    get longRightArrow() {
      return "━▶";
    }
    get horizontalLine() {
      return "─";
    }
    get verticalLine() {
      return "│";
    }
    get topLeftCorner() {
      return "┌";
    }
    get topRightCorner() {
      return "┐";
    }
    get bottomLeftCorner() {
      return "└";
    }
    get bottomRightCorner() {
      return "┘";
    }
    get cross() {
      return "┼";
    }
    get teeUp() {
      return "┴";
    }
    get teeDown() {
      return "┬";
    }
    get teeLeft() {
      return "┤";
    }
    get teeRight() {
      return "├";
    }
    get upEnd() {
      return "╵";
    }
    get downEnd() {
      return "╷";
    }
    get leftEnd() {
      return "╴";
    }
    get rightEnd() {
      return "╶";
    }
    get horizontalLineBold() {
      return "━";
    }
    get verticalLineBold() {
      return "┃";
    }
    get topLeftCornerBold() {
      return "┏";
    }
    get topRightCornerBold() {
      return "┓";
    }
    get bottomLeftCornerBold() {
      return "┗";
    }
    get bottomRightCornerBold() {
      return "┛";
    }
    get crossBold() {
      return "╋";
    }
    get teeUpBold() {
      return "┻";
    }
    get teeDownBold() {
      return "┳";
    }
    get teeLeftBold() {
      return "┫";
    }
    get teeRightBold() {
      return "┣";
    }
    get upEndBold() {
      return "╹";
    }
    get downEndBold() {
      return "╻";
    }
    get leftEndBold() {
      return "╸";
    }
    get rightEndBold() {
      return "╺";
    }
    get horizontalLineDouble() {
      return "═";
    }
    get verticalLineDouble() {
      return "║";
    }
    get topLeftCornerDouble() {
      return "╔";
    }
    get topRightCornerDouble() {
      return "╗";
    }
    get bottomLeftCornerDouble() {
      return "╚";
    }
    get bottomRightCornerDouble() {
      return "╝";
    }
    get crossDouble() {
      return "╬";
    }
    get teeUpDouble() {
      return "╩";
    }
    get teeDownDouble() {
      return "╦";
    }
    get teeLeftDouble() {
      return "╣";
    }
    get teeRightDouble() {
      return "╠";
    }
    get horizontalLineDoubleDash() {
      return "╌";
    }
    get horizontalLineDoubleDashBold() {
      return "╍";
    }
    get verticalLineDoubleDash() {
      return "╎";
    }
    get verticalLineDoubleDashBold() {
      return "╏";
    }
    get horizontalLineTripleDash() {
      return "┄";
    }
    get horizontalLineTripleDashBold() {
      return "┅";
    }
    get verticalLineTripleDash() {
      return "┆";
    }
    get verticalLineTripleDashBold() {
      return "┇";
    }
    get horizontalLineQuadrupleDash() {
      return "┈";
    }
    get horizontalLineQuadrupleDashBold() {
      return "┉";
    }
    get verticalLineQuadrupleDash() {
      return "┊";
    }
    get verticalLineQuadrupleDashBold() {
      return "┋";
    }
  };
  (unicode_glyph_set.UnicodeGlyphSet.new = function() {
    ;
  }).prototype = unicode_glyph_set.UnicodeGlyphSet.prototype;
  dart.addTypeTests(unicode_glyph_set.UnicodeGlyphSet);
  unicode_glyph_set.UnicodeGlyphSet[dart.implements] = () => [glyph_set.GlyphSet];
  dart.setMethodSignature(unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getMethods(unicode_glyph_set.UnicodeGlyphSet.__proto__),
    glyphOrAscii: dart.fnType(core.String, [core.String, core.String])
  }));
  dart.setGetterSignature(unicode_glyph_set.UnicodeGlyphSet, () => ({
    __proto__: dart.getGetters(unicode_glyph_set.UnicodeGlyphSet.__proto__),
    bullet: core.String,
    leftArrow: core.String,
    rightArrow: core.String,
    upArrow: core.String,
    downArrow: core.String,
    longLeftArrow: core.String,
    longRightArrow: core.String,
    horizontalLine: core.String,
    verticalLine: core.String,
    topLeftCorner: core.String,
    topRightCorner: core.String,
    bottomLeftCorner: core.String,
    bottomRightCorner: core.String,
    cross: core.String,
    teeUp: core.String,
    teeDown: core.String,
    teeLeft: core.String,
    teeRight: core.String,
    upEnd: core.String,
    downEnd: core.String,
    leftEnd: core.String,
    rightEnd: core.String,
    horizontalLineBold: core.String,
    verticalLineBold: core.String,
    topLeftCornerBold: core.String,
    topRightCornerBold: core.String,
    bottomLeftCornerBold: core.String,
    bottomRightCornerBold: core.String,
    crossBold: core.String,
    teeUpBold: core.String,
    teeDownBold: core.String,
    teeLeftBold: core.String,
    teeRightBold: core.String,
    upEndBold: core.String,
    downEndBold: core.String,
    leftEndBold: core.String,
    rightEndBold: core.String,
    horizontalLineDouble: core.String,
    verticalLineDouble: core.String,
    topLeftCornerDouble: core.String,
    topRightCornerDouble: core.String,
    bottomLeftCornerDouble: core.String,
    bottomRightCornerDouble: core.String,
    crossDouble: core.String,
    teeUpDouble: core.String,
    teeDownDouble: core.String,
    teeLeftDouble: core.String,
    teeRightDouble: core.String,
    horizontalLineDoubleDash: core.String,
    horizontalLineDoubleDashBold: core.String,
    verticalLineDoubleDash: core.String,
    verticalLineDoubleDashBold: core.String,
    horizontalLineTripleDash: core.String,
    horizontalLineTripleDashBold: core.String,
    verticalLineTripleDash: core.String,
    verticalLineTripleDashBold: core.String,
    horizontalLineQuadrupleDash: core.String,
    horizontalLineQuadrupleDashBold: core.String,
    verticalLineQuadrupleDash: core.String,
    verticalLineQuadrupleDashBold: core.String
  }));
  dart.setLibraryUri(unicode_glyph_set.UnicodeGlyphSet, "package:term_glyph/src/generated/unicode_glyph_set.dart");
  dart.trackLibraries("packages/term_glyph/src/generated/ascii_glyph_set", {
    "package:term_glyph/src/generated/glyph_set.dart": glyph_set,
    "package:term_glyph/src/generated/ascii_glyph_set.dart": ascii_glyph_set,
    "package:term_glyph/term_glyph.dart": term_glyph,
    "package:term_glyph/src/generated/top_level.dart": top_level,
    "package:term_glyph/src/generated/unicode_glyph_set.dart": unicode_glyph_set
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["glyph_set.dart","ascii_glyph_set.dart","../../term_glyph.dart","top_level.dart","unicode_glyph_set.dart"],"names":[],"mappings":"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","file":"ascii_glyph_set.ddc.js"}');
  // Exports:
  return {
    src__generated__glyph_set: glyph_set,
    src__generated__ascii_glyph_set: ascii_glyph_set,
    term_glyph: term_glyph,
    src__generated__top_level: top_level,
    src__generated__unicode_glyph_set: unicode_glyph_set
  };
});

//# sourceMappingURL=ascii_glyph_set.ddc.js.map

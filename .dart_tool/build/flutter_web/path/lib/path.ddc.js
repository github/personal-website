define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const posix = Object.create(dart.library);
  const parsed_path = Object.create(dart.library);
  const style$ = Object.create(dart.library);
  const windows = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const characters = Object.create(dart.library);
  const internal_style = Object.create(dart.library);
  const context = Object.create(dart.library);
  const path_exception = Object.create(dart.library);
  const path$ = Object.create(dart.library);
  const path_set = Object.create(dart.library);
  const path_map = Object.create(dart.library);
  const url = Object.create(dart.library);
  const $contains = dartx.contains;
  const $isNotEmpty = dartx.isNotEmpty;
  const $codeUnitAt = dartx.codeUnitAt;
  const $isEmpty = dartx.isEmpty;
  const $addAll = dartx.addAll;
  const $add = dartx.add;
  const $substring = dartx.substring;
  const $_get = dartx._get;
  const $endsWith = dartx.endsWith;
  const $last = dartx.last;
  const $removeLast = dartx.removeLast;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $insertAll = dartx.insertAll;
  const $insert = dartx.insert;
  const $toLowerCase = dartx.toLowerCase;
  const $replaceAll = dartx.replaceAll;
  const $lastWhere = dartx.lastWhere;
  const $lastIndexOf = dartx.lastIndexOf;
  const $indexOf = dartx.indexOf;
  const $startsWith = dartx.startsWith;
  const $replaceFirst = dartx.replaceFirst;
  const $split = dartx.split;
  const $where = dartx.where;
  const $first = dartx.first;
  const $toList = dartx.toList;
  const $codeUnits = dartx.codeUnits;
  const $removeAt = dartx.removeAt;
  const $take = dartx.take;
  const $map = dartx.map;
  const $join = dartx.join;
  const $iterator = dartx.iterator;
  const $cast = dartx.cast;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let ListOfString = () => (ListOfString = dart.constFn(core.List$(core.String)))();
  let intToString = () => (intToString = dart.constFn(dart.fnType(core.String, [core.int])))();
  let StringTobool = () => (StringTobool = dart.constFn(dart.fnType(core.bool, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let StringAndStringTobool = () => (StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))();
  let StringToint = () => (StringToint = dart.constFn(dart.fnType(core.int, [core.String])))();
  let dynamicTobool = () => (dynamicTobool = dart.constFn(dart.fnType(core.bool, [dart.dynamic])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let SetOfString = () => (SetOfString = dart.constFn(core.Set$(core.String)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.constList(["/"], core.String);
    },
    get C1() {
      return C1 = dart.constList(["/", "\\"], core.String);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: context._PathDirection.prototype,
        [_PathDirection_name]: "above root"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: context._PathDirection.prototype,
        [_PathDirection_name]: "at root"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: context._PathDirection.prototype,
        [_PathDirection_name]: "reaches root"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: context._PathDirection.prototype,
        [_PathDirection_name]: "below root"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: context._PathRelation.prototype,
        [_PathRelation_name]: "within"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: context._PathRelation.prototype,
        [_PathRelation_name]: "equal"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: context._PathRelation.prototype,
        [_PathRelation_name]: "different"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: context._PathRelation.prototype,
        [_PathRelation_name]: "inconclusive"
      });
    }
  });
  let C0;
  style$.Style = class Style extends core.Object {
    static _getPlatformStyle() {
      if (core.Uri.base.scheme !== "file") return style$.Style.url;
      if (!core.Uri.base.path[$endsWith]("/")) return style$.Style.url;
      if (core._Uri.new({path: "a/b"}).toFilePath() === "a\\b") return style$.Style.windows;
      return style$.Style.posix;
    }
    get context() {
      return context.Context.new({style: this});
    }
    toString() {
      return this.name;
    }
  };
  (style$.Style.new = function() {
    ;
  }).prototype = style$.Style.prototype;
  dart.addTypeTests(style$.Style);
  dart.setGetterSignature(style$.Style, () => ({
    __proto__: dart.getGetters(style$.Style.__proto__),
    context: context.Context
  }));
  dart.setLibraryUri(style$.Style, "package:path/src/style.dart");
  dart.defineExtensionMethods(style$.Style, ['toString']);
  dart.defineLazy(style$.Style, {
    /*style$.Style.posix*/get posix() {
      return new posix.PosixStyle.new();
    },
    /*style$.Style.windows*/get windows() {
      return new windows.WindowsStyle.new();
    },
    /*style$.Style.url*/get url() {
      return new url.UrlStyle.new();
    },
    /*style$.Style.platform*/get platform() {
      return style$.Style._getPlatformStyle();
    }
  });
  internal_style.InternalStyle = class InternalStyle extends style$.Style {
    getRoot(path) {
      let length = this.rootLength(path);
      if (dart.notNull(length) > 0) return path[$substring](0, length);
      return dart.test(this.isRootRelative(path)) ? path[$_get](0) : null;
    }
    relativePathToUri(path) {
      let segments = this.context.split(path);
      if (dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) segments[$add]("");
      return core._Uri.new({pathSegments: segments});
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      return codeUnit1 == codeUnit2;
    }
    pathsEqual(path1, path2) {
      return path1 == path2;
    }
    canonicalizeCodeUnit(codeUnit) {
      return codeUnit;
    }
    canonicalizePart(part) {
      return part;
    }
  };
  (internal_style.InternalStyle.new = function() {
    ;
  }).prototype = internal_style.InternalStyle.prototype;
  dart.addTypeTests(internal_style.InternalStyle);
  dart.setMethodSignature(internal_style.InternalStyle, () => ({
    __proto__: dart.getMethods(internal_style.InternalStyle.__proto__),
    getRoot: dart.fnType(core.String, [core.String]),
    relativePathToUri: dart.fnType(core.Uri, [core.String]),
    codeUnitsEqual: dart.fnType(core.bool, [core.int, core.int]),
    pathsEqual: dart.fnType(core.bool, [core.String, core.String]),
    canonicalizeCodeUnit: dart.fnType(core.int, [core.int]),
    canonicalizePart: dart.fnType(core.String, [core.String])
  }));
  dart.setLibraryUri(internal_style.InternalStyle, "package:path/src/internal_style.dart");
  const PosixStyle_name = dart.privateName(posix, "PosixStyle.name");
  const PosixStyle_separator = dart.privateName(posix, "PosixStyle.separator");
  const PosixStyle_separators = dart.privateName(posix, "PosixStyle.separators");
  const PosixStyle_separatorPattern = dart.privateName(posix, "PosixStyle.separatorPattern");
  const PosixStyle_needsSeparatorPattern = dart.privateName(posix, "PosixStyle.needsSeparatorPattern");
  const PosixStyle_rootPattern = dart.privateName(posix, "PosixStyle.rootPattern");
  const PosixStyle_relativeRootPattern = dart.privateName(posix, "PosixStyle.relativeRootPattern");
  posix.PosixStyle = class PosixStyle extends internal_style.InternalStyle {
    get name() {
      return this[name];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47;
    }
    needsSeparator(path) {
      return path[$isNotEmpty] && !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      return 0;
    }
    isRootRelative(path) {
      return false;
    }
    getRelativeRoot(path) {
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme === "" || uri.scheme === "file") {
        return core.Uri.decodeComponent(uri.path);
      }
      dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
    }
    absolutePathToUri(path) {
      let parsed = parsed_path.ParsedPath.parse(path, this);
      if (dart.test(parsed.parts[$isEmpty])) {
        parsed.parts[$addAll](JSArrayOfString().of(["", ""]));
      } else if (dart.test(parsed.hasTrailingSeparator)) {
        parsed.parts[$add]("");
      }
      return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
    }
  };
  (posix.PosixStyle.new = function() {
    this[name] = "posix";
    this[separator] = "/";
    this[separators] = C0 || CT.C0;
    this[separatorPattern] = core.RegExp.new("/");
    this[needsSeparatorPattern] = core.RegExp.new("[^/]$");
    this[rootPattern] = core.RegExp.new("^/");
    this[relativeRootPattern] = null;
    ;
  }).prototype = posix.PosixStyle.prototype;
  dart.addTypeTests(posix.PosixStyle);
  const name = PosixStyle_name;
  const separator = PosixStyle_separator;
  const separators = PosixStyle_separators;
  const separatorPattern = PosixStyle_separatorPattern;
  const needsSeparatorPattern = PosixStyle_needsSeparatorPattern;
  const rootPattern = PosixStyle_rootPattern;
  const relativeRootPattern = PosixStyle_relativeRootPattern;
  dart.setMethodSignature(posix.PosixStyle, () => ({
    __proto__: dart.getMethods(posix.PosixStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(posix.PosixStyle, "package:path/src/style/posix.dart");
  dart.setFieldSignature(posix.PosixStyle, () => ({
    __proto__: dart.getFields(posix.PosixStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  const _splitExtension = dart.privateName(parsed_path, "_splitExtension");
  const ParsedPath_style = dart.privateName(parsed_path, "ParsedPath.style");
  const ParsedPath_root = dart.privateName(parsed_path, "ParsedPath.root");
  const ParsedPath_isRootRelative = dart.privateName(parsed_path, "ParsedPath.isRootRelative");
  const ParsedPath_parts = dart.privateName(parsed_path, "ParsedPath.parts");
  const ParsedPath_separators = dart.privateName(parsed_path, "ParsedPath.separators");
  parsed_path.ParsedPath = class ParsedPath extends core.Object {
    get style() {
      return this[style$0];
    }
    set style(value) {
      this[style$0] = value;
    }
    get root() {
      return this[root$];
    }
    set root(value) {
      this[root$] = value;
    }
    get isRootRelative() {
      return this[isRootRelative$];
    }
    set isRootRelative(value) {
      this[isRootRelative$] = value;
    }
    get parts() {
      return this[parts$];
    }
    set parts(value) {
      this[parts$] = value;
    }
    get separators() {
      return this[separators$];
    }
    set separators(value) {
      this[separators$] = value;
    }
    get extension() {
      return this[_splitExtension]()[$_get](1);
    }
    get isAbsolute() {
      return this.root != null;
    }
    static parse(path, style) {
      let root = style.getRoot(path);
      let isRootRelative = style.isRootRelative(path);
      if (root != null) path = path[$substring](root.length);
      let parts = JSArrayOfString().of([]);
      let separators = JSArrayOfString().of([]);
      let start = 0;
      if (path[$isNotEmpty] && dart.test(style.isSeparator(path[$codeUnitAt](0)))) {
        separators[$add](path[$_get](0));
        start = 1;
      } else {
        separators[$add]("");
      }
      for (let i = start; i < path.length; i = i + 1) {
        if (dart.test(style.isSeparator(path[$codeUnitAt](i)))) {
          parts[$add](path[$substring](start, i));
          separators[$add](path[$_get](i));
          start = i + 1;
        }
      }
      if (start < path.length) {
        parts[$add](path[$substring](start));
        separators[$add]("");
      }
      return new parsed_path.ParsedPath.__(style, root, isRootRelative, parts, separators);
    }
    get basename() {
      let copy = this.clone();
      copy.removeTrailingSeparators();
      if (dart.test(copy.parts[$isEmpty])) return this.root == null ? "" : this.root;
      return copy.parts[$last];
    }
    get basenameWithoutExtension() {
      return this[_splitExtension]()[$_get](0);
    }
    get hasTrailingSeparator() {
      return dart.test(this.parts[$isNotEmpty]) && (this.parts[$last] === "" || this.separators[$last] !== "");
    }
    removeTrailingSeparators() {
      while (dart.test(this.parts[$isNotEmpty]) && this.parts[$last] === "") {
        this.parts[$removeLast]();
        this.separators[$removeLast]();
      }
      if (dart.test(this.separators[$isNotEmpty])) this.separators[$_set](dart.notNull(this.separators[$length]) - 1, "");
    }
    normalize(opts) {
      let canonicalize = opts && 'canonicalize' in opts ? opts.canonicalize : false;
      let leadingDoubles = 0;
      let newParts = JSArrayOfString().of([]);
      for (let part of this.parts) {
        if (part === "." || part === "") {
        } else if (part === "..") {
          if (dart.test(newParts[$isNotEmpty])) {
            newParts[$removeLast]();
          } else {
            leadingDoubles = leadingDoubles + 1;
          }
        } else {
          newParts[$add](dart.test(canonicalize) ? this.style.canonicalizePart(part) : part);
        }
      }
      if (!dart.test(this.isAbsolute)) {
        newParts[$insertAll](0, ListOfString().filled(leadingDoubles, ".."));
      }
      if (dart.test(newParts[$isEmpty]) && !dart.test(this.isAbsolute)) {
        newParts[$add](".");
      }
      let newSeparators = ListOfString().generate(newParts[$length], dart.fn(_ => this.style.separator, intToString()), {growable: true});
      newSeparators[$insert](0, dart.test(this.isAbsolute) && dart.test(newParts[$isNotEmpty]) && dart.test(this.style.needsSeparator(this.root)) ? this.style.separator : "");
      this.parts = newParts;
      this.separators = newSeparators;
      if (this.root != null && dart.equals(this.style, style$.Style.windows)) {
        if (dart.test(canonicalize)) this.root = this.root[$toLowerCase]();
        this.root = this.root[$replaceAll]("/", "\\");
      }
      this.removeTrailingSeparators();
    }
    toString() {
      let builder = new core.StringBuffer.new();
      if (this.root != null) builder.write(this.root);
      for (let i = 0; i < dart.notNull(this.parts[$length]); i = i + 1) {
        builder.write(this.separators[$_get](i));
        builder.write(this.parts[$_get](i));
      }
      builder.write(this.separators[$last]);
      return builder.toString();
    }
    [_splitExtension]() {
      let file = this.parts[$lastWhere](dart.fn(p => p !== "", StringTobool()), {orElse: dart.fn(() => null, VoidToNull())});
      if (file == null) return JSArrayOfString().of(["", ""]);
      if (file === "..") return JSArrayOfString().of(["..", ""]);
      let lastDot = file[$lastIndexOf](".");
      if (lastDot <= 0) return JSArrayOfString().of([file, ""]);
      return JSArrayOfString().of([file[$substring](0, lastDot), file[$substring](lastDot)]);
    }
    clone() {
      return new parsed_path.ParsedPath.__(this.style, this.root, this.isRootRelative, ListOfString().from(this.parts), ListOfString().from(this.separators));
    }
  };
  (parsed_path.ParsedPath.__ = function(style, root, isRootRelative, parts, separators) {
    this[style$0] = style;
    this[root$] = root;
    this[isRootRelative$] = isRootRelative;
    this[parts$] = parts;
    this[separators$] = separators;
    ;
  }).prototype = parsed_path.ParsedPath.prototype;
  dart.addTypeTests(parsed_path.ParsedPath);
  const style$0 = ParsedPath_style;
  const root$ = ParsedPath_root;
  const isRootRelative$ = ParsedPath_isRootRelative;
  const parts$ = ParsedPath_parts;
  const separators$ = ParsedPath_separators;
  dart.setMethodSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getMethods(parsed_path.ParsedPath.__proto__),
    removeTrailingSeparators: dart.fnType(dart.void, []),
    normalize: dart.fnType(dart.void, [], {canonicalize: core.bool}),
    [_splitExtension]: dart.fnType(core.List$(core.String), []),
    clone: dart.fnType(parsed_path.ParsedPath, [])
  }));
  dart.setGetterSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getGetters(parsed_path.ParsedPath.__proto__),
    extension: core.String,
    isAbsolute: core.bool,
    basename: core.String,
    basenameWithoutExtension: core.String,
    hasTrailingSeparator: core.bool
  }));
  dart.setLibraryUri(parsed_path.ParsedPath, "package:path/src/parsed_path.dart");
  dart.setFieldSignature(parsed_path.ParsedPath, () => ({
    __proto__: dart.getFields(parsed_path.ParsedPath.__proto__),
    style: dart.fieldType(internal_style.InternalStyle),
    root: dart.fieldType(core.String),
    isRootRelative: dart.fieldType(core.bool),
    parts: dart.fieldType(core.List$(core.String)),
    separators: dart.fieldType(core.List$(core.String))
  }));
  dart.defineExtensionMethods(parsed_path.ParsedPath, ['toString']);
  let C1;
  const WindowsStyle_name = dart.privateName(windows, "WindowsStyle.name");
  const WindowsStyle_separator = dart.privateName(windows, "WindowsStyle.separator");
  const WindowsStyle_separators = dart.privateName(windows, "WindowsStyle.separators");
  const WindowsStyle_separatorPattern = dart.privateName(windows, "WindowsStyle.separatorPattern");
  const WindowsStyle_needsSeparatorPattern = dart.privateName(windows, "WindowsStyle.needsSeparatorPattern");
  const WindowsStyle_rootPattern = dart.privateName(windows, "WindowsStyle.rootPattern");
  const WindowsStyle_relativeRootPattern = dart.privateName(windows, "WindowsStyle.relativeRootPattern");
  windows.WindowsStyle = class WindowsStyle extends internal_style.InternalStyle {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$0];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47 || codeUnit === 92;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      return !dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)));
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (path[$codeUnitAt](0) === 47) return 1;
      if (path[$codeUnitAt](0) === 92) {
        if (path.length < 2 || path[$codeUnitAt](1) !== 92) return 1;
        let index = path[$indexOf]("\\", 2);
        if (index > 0) {
          index = path[$indexOf]("\\", index + 1);
          if (index > 0) return index;
        }
        return path.length;
      }
      if (path.length < 3) return 0;
      if (!dart.test(utils.isAlphabetic(path[$codeUnitAt](0)))) return 0;
      if (path[$codeUnitAt](1) !== 58) return 0;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](2)))) return 0;
      return 3;
    }
    isRootRelative(path) {
      return this.rootLength(path) === 1;
    }
    getRelativeRoot(path) {
      let length = this.rootLength(path);
      if (length === 1) return path[$_get](0);
      return null;
    }
    pathFromUri(uri) {
      if (uri.scheme !== "" && uri.scheme !== "file") {
        dart.throw(new core.ArgumentError.new("Uri " + dart.str(uri) + " must have scheme 'file:'."));
      }
      let path = uri.path;
      if (uri.host === "") {
        if (path.length >= 3 && path[$startsWith]("/") && dart.test(utils.isDriveLetter(path, 1))) {
          path = path[$replaceFirst]("/", "");
        }
      } else {
        path = "\\\\" + dart.str(uri.host) + dart.str(path);
      }
      return core.Uri.decodeComponent(path[$replaceAll]("/", "\\"));
    }
    absolutePathToUri(path) {
      let parsed = parsed_path.ParsedPath.parse(path, this);
      if (parsed.root[$startsWith]("\\\\")) {
        let rootParts = parsed.root[$split]("\\")[$where](dart.fn(part => part !== "", StringTobool()));
        parsed.parts[$insert](0, rootParts[$last]);
        if (dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        return core._Uri.new({scheme: "file", host: rootParts[$first], pathSegments: parsed.parts});
      } else {
        if (dart.test(parsed.parts[$isEmpty]) || dart.test(parsed.hasTrailingSeparator)) {
          parsed.parts[$add]("");
        }
        parsed.parts[$insert](0, parsed.root[$replaceAll]("/", "")[$replaceAll]("\\", ""));
        return core._Uri.new({scheme: "file", pathSegments: parsed.parts});
      }
    }
    codeUnitsEqual(codeUnit1, codeUnit2) {
      if (codeUnit1 == codeUnit2) return true;
      if (codeUnit1 === 47) return codeUnit2 === 92;
      if (codeUnit1 === 92) return codeUnit2 === 47;
      if ((dart.notNull(codeUnit1) ^ dart.notNull(codeUnit2)) >>> 0 !== 32) return false;
      let upperCase1 = (dart.notNull(codeUnit1) | 32) >>> 0;
      return upperCase1 >= 97 && upperCase1 <= 122;
    }
    pathsEqual(path1, path2) {
      if (path1 == path2) return true;
      if (path1.length !== path2.length) return false;
      for (let i = 0; i < path1.length; i = i + 1) {
        if (!dart.test(this.codeUnitsEqual(path1[$codeUnitAt](i), path2[$codeUnitAt](i)))) {
          return false;
        }
      }
      return true;
    }
    canonicalizeCodeUnit(codeUnit) {
      if (codeUnit === 47) return 92;
      if (dart.notNull(codeUnit) < 65) return codeUnit;
      if (dart.notNull(codeUnit) > 90) return codeUnit;
      return (dart.notNull(codeUnit) | 32) >>> 0;
    }
    canonicalizePart(part) {
      return part[$toLowerCase]();
    }
  };
  (windows.WindowsStyle.new = function() {
    this[name$] = "windows";
    this[separator$] = "\\";
    this[separators$0] = C1 || CT.C1;
    this[separatorPattern$] = core.RegExp.new("[/\\\\]");
    this[needsSeparatorPattern$] = core.RegExp.new("[^/\\\\]$");
    this[rootPattern$] = core.RegExp.new("^(\\\\\\\\[^\\\\]+\\\\[^\\\\/]+|[a-zA-Z]:[/\\\\])");
    this[relativeRootPattern$] = core.RegExp.new("^[/\\\\](?![/\\\\])");
    ;
  }).prototype = windows.WindowsStyle.prototype;
  dart.addTypeTests(windows.WindowsStyle);
  const name$ = WindowsStyle_name;
  const separator$ = WindowsStyle_separator;
  const separators$0 = WindowsStyle_separators;
  const separatorPattern$ = WindowsStyle_separatorPattern;
  const needsSeparatorPattern$ = WindowsStyle_needsSeparatorPattern;
  const rootPattern$ = WindowsStyle_rootPattern;
  const relativeRootPattern$ = WindowsStyle_relativeRootPattern;
  dart.setMethodSignature(windows.WindowsStyle, () => ({
    __proto__: dart.getMethods(windows.WindowsStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(windows.WindowsStyle, "package:path/src/style/windows.dart");
  dart.setFieldSignature(windows.WindowsStyle, () => ({
    __proto__: dart.getFields(windows.WindowsStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(windows, {
    /*windows._asciiCaseBit*/get _asciiCaseBit() {
      return 32;
    }
  });
  utils.isAlphabetic = function isAlphabetic(char) {
    return dart.notNull(char) >= 65 && dart.notNull(char) <= 90 || dart.notNull(char) >= 97 && dart.notNull(char) <= 122;
  };
  utils.isNumeric = function isNumeric(char) {
    return dart.notNull(char) >= 48 && dart.notNull(char) <= 57;
  };
  utils.isDriveLetter = function isDriveLetter(path, index) {
    if (path.length < dart.notNull(index) + 2) return false;
    if (!dart.test(utils.isAlphabetic(path[$codeUnitAt](index)))) return false;
    if (path[$codeUnitAt](dart.notNull(index) + 1) !== 58) return false;
    if (path.length === dart.notNull(index) + 2) return true;
    return path[$codeUnitAt](dart.notNull(index) + 2) === 47;
  };
  dart.defineLazy(characters, {
    /*characters.plus*/get plus() {
      return 43;
    },
    /*characters.minus*/get minus() {
      return 45;
    },
    /*characters.period*/get period() {
      return 46;
    },
    /*characters.slash*/get slash() {
      return 47;
    },
    /*characters.zero*/get zero() {
      return 48;
    },
    /*characters.nine*/get nine() {
      return 57;
    },
    /*characters.colon*/get colon() {
      return 58;
    },
    /*characters.upperA*/get upperA() {
      return 65;
    },
    /*characters.upperZ*/get upperZ() {
      return 90;
    },
    /*characters.lowerA*/get lowerA() {
      return 97;
    },
    /*characters.lowerZ*/get lowerZ() {
      return 122;
    },
    /*characters.backslash*/get backslash() {
      return 92;
    }
  });
  const _current$ = dart.privateName(context, "_current");
  const _parse = dart.privateName(context, "_parse");
  const _needsNormalization = dart.privateName(context, "_needsNormalization");
  const _isWithinOrEquals = dart.privateName(context, "_isWithinOrEquals");
  const _isWithinOrEqualsFast = dart.privateName(context, "_isWithinOrEqualsFast");
  const _pathDirection = dart.privateName(context, "_pathDirection");
  const _hashFast = dart.privateName(context, "_hashFast");
  const Context_style = dart.privateName(context, "Context.style");
  context.Context = class Context extends core.Object {
    get style() {
      return this[style$1];
    }
    set style(value) {
      super.style = value;
    }
    static new(opts) {
      let style = opts && 'style' in opts ? opts.style : null;
      let current = opts && 'current' in opts ? opts.current : null;
      if (current == null) {
        if (style == null) {
          current = path$.current;
        } else {
          current = ".";
        }
      }
      if (style == null) {
        style = style$.Style.platform;
      } else if (!internal_style.InternalStyle.is(style)) {
        dart.throw(new core.ArgumentError.new("Only styles defined by the path package are " + "allowed."));
      }
      return new context.Context.__(internal_style.InternalStyle.as(style), current);
    }
    get current() {
      return this[_current$] != null ? this[_current$] : path$.current;
    }
    get separator() {
      return this.style.separator;
    }
    absolute(part1, part2, part3, part4, part5, part6, part7) {
      if (part2 === void 0) part2 = null;
      if (part3 === void 0) part3 = null;
      if (part4 === void 0) part4 = null;
      if (part5 === void 0) part5 = null;
      if (part6 === void 0) part6 = null;
      if (part7 === void 0) part7 = null;
      context._validateArgList("absolute", JSArrayOfString().of([part1, part2, part3, part4, part5, part6, part7]));
      if (part2 == null && dart.test(this.isAbsolute(part1)) && !dart.test(this.isRootRelative(part1))) {
        return part1;
      }
      return this.join(this.current, part1, part2, part3, part4, part5, part6, part7);
    }
    basename(path) {
      return this[_parse](path).basename;
    }
    basenameWithoutExtension(path) {
      return this[_parse](path).basenameWithoutExtension;
    }
    dirname(path) {
      let parsed = this[_parse](path);
      parsed.removeTrailingSeparators();
      if (dart.test(parsed.parts[$isEmpty])) return parsed.root == null ? "." : parsed.root;
      if (parsed.parts[$length] === 1) {
        return parsed.root == null ? "." : parsed.root;
      }
      parsed.parts[$removeLast]();
      parsed.separators[$removeLast]();
      parsed.removeTrailingSeparators();
      return dart.toString(parsed);
    }
    extension(path) {
      return this[_parse](path).extension;
    }
    rootPrefix(path) {
      return path[$substring](0, this.style.rootLength(path));
    }
    isAbsolute(path) {
      return dart.notNull(this.style.rootLength(path)) > 0;
    }
    isRelative(path) {
      return !dart.test(this.isAbsolute(path));
    }
    isRootRelative(path) {
      return this.style.isRootRelative(path);
    }
    join(part1, part2, part3, part4, part5, part6, part7, part8) {
      if (part2 === void 0) part2 = null;
      if (part3 === void 0) part3 = null;
      if (part4 === void 0) part4 = null;
      if (part5 === void 0) part5 = null;
      if (part6 === void 0) part6 = null;
      if (part7 === void 0) part7 = null;
      if (part8 === void 0) part8 = null;
      let parts = JSArrayOfString().of([part1, part2, part3, part4, part5, part6, part7, part8]);
      context._validateArgList("join", parts);
      return this.joinAll(parts[$where](dart.fn(part => part != null, StringTobool())));
    }
    joinAll(parts) {
      let buffer = new core.StringBuffer.new();
      let needsSeparator = false;
      let isAbsoluteAndNotRootRelative = false;
      let iter = parts[$where](dart.fn(part => part !== "", StringTobool()));
      for (let part of iter) {
        if (dart.test(this.isRootRelative(part)) && isAbsoluteAndNotRootRelative) {
          let parsed = this[_parse](part);
          let path = buffer.toString();
          parsed.root = path[$substring](0, this.style.rootLength(path, {withDrive: true}));
          if (dart.test(this.style.needsSeparator(parsed.root))) {
            parsed.separators[$_set](0, this.style.separator);
          }
          buffer.clear();
          buffer.write(dart.toString(parsed));
        } else if (dart.test(this.isAbsolute(part))) {
          isAbsoluteAndNotRootRelative = !dart.test(this.isRootRelative(part));
          buffer.clear();
          buffer.write(part);
        } else {
          if (part[$isNotEmpty] && dart.test(this.style.containsSeparator(part[$_get](0)))) {
          } else if (dart.test(needsSeparator)) {
            buffer.write(this.separator);
          }
          buffer.write(part);
        }
        needsSeparator = this.style.needsSeparator(part);
      }
      return buffer.toString();
    }
    split(path) {
      let parsed = this[_parse](path);
      parsed.parts = parsed.parts[$where](dart.fn(part => part[$isNotEmpty], StringTobool()))[$toList]();
      if (parsed.root != null) parsed.parts[$insert](0, parsed.root);
      return parsed.parts;
    }
    canonicalize(path) {
      path = this.absolute(path);
      if (!dart.equals(this.style, style$.Style.windows) && !dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize({canonicalize: true});
      return dart.toString(parsed);
    }
    normalize(path) {
      if (!dart.test(this[_needsNormalization](path))) return path;
      let parsed = this[_parse](path);
      parsed.normalize();
      return dart.toString(parsed);
    }
    [_needsNormalization](path) {
      let start = 0;
      let codeUnits = path[$codeUnits];
      let previousPrevious = null;
      let previous = null;
      let root = this.style.rootLength(path);
      if (root !== 0) {
        start = root;
        previous = 47;
        if (dart.equals(this.style, style$.Style.windows)) {
          for (let i = 0; i < dart.notNull(root); i = i + 1) {
            if (codeUnits[$_get](i) === 47) return true;
          }
        }
      }
      for (let i = start; dart.notNull(i) < dart.notNull(codeUnits[$length]); i = dart.notNull(i) + 1) {
        let codeUnit = codeUnits[$_get](i);
        if (dart.test(this.style.isSeparator(codeUnit))) {
          if (dart.equals(this.style, style$.Style.windows) && codeUnit === 47) return true;
          if (previous != null && dart.test(this.style.isSeparator(previous))) return true;
          if (previous === 46 && (previousPrevious == null || previousPrevious === 46 || dart.test(this.style.isSeparator(previousPrevious)))) {
            return true;
          }
        }
        previousPrevious = previous;
        previous = codeUnit;
      }
      if (previous == null) return true;
      if (dart.test(this.style.isSeparator(previous))) return true;
      if (previous === 46 && (previousPrevious == null || dart.test(this.style.isSeparator(previousPrevious)) || previousPrevious === 46)) {
        return true;
      }
      return false;
    }
    relative(path, opts) {
      let t0, t0$, t0$0;
      let from = opts && 'from' in opts ? opts.from : null;
      if (from == null && dart.test(this.isRelative(path))) return this.normalize(path);
      from = from == null ? this.current : this.absolute(from);
      if (dart.test(this.isRelative(from)) && dart.test(this.isAbsolute(path))) {
        return this.normalize(path);
      }
      if (dart.test(this.isRelative(path)) || dart.test(this.isRootRelative(path))) {
        path = this.absolute(path);
      }
      if (dart.test(this.isRelative(path)) && dart.test(this.isAbsolute(from))) {
        dart.throw(new path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      let fromParsed = (t0 = this[_parse](from), t0.normalize(), t0);
      let pathParsed = (t0$ = this[_parse](path), t0$.normalize(), t0$);
      if (dart.test(fromParsed.parts[$isNotEmpty]) && fromParsed.parts[$_get](0) === ".") {
        return dart.toString(pathParsed);
      }
      if (fromParsed.root != pathParsed.root && (fromParsed.root == null || pathParsed.root == null || !dart.test(this.style.pathsEqual(fromParsed.root, pathParsed.root)))) {
        return dart.toString(pathParsed);
      }
      while (dart.test(fromParsed.parts[$isNotEmpty]) && dart.test(pathParsed.parts[$isNotEmpty]) && dart.test(this.style.pathsEqual(fromParsed.parts[$_get](0), pathParsed.parts[$_get](0)))) {
        fromParsed.parts[$removeAt](0);
        fromParsed.separators[$removeAt](1);
        pathParsed.parts[$removeAt](0);
        pathParsed.separators[$removeAt](1);
      }
      if (dart.test(fromParsed.parts[$isNotEmpty]) && fromParsed.parts[$_get](0) === "..") {
        dart.throw(new path_exception.PathException.new("Unable to find a path to \"" + dart.str(path) + "\" from \"" + dart.str(from) + "\"."));
      }
      pathParsed.parts[$insertAll](0, ListOfString().filled(fromParsed.parts[$length], ".."));
      pathParsed.separators[$_set](0, "");
      pathParsed.separators[$insertAll](1, ListOfString().filled(fromParsed.parts[$length], this.style.separator));
      if (dart.test(pathParsed.parts[$isEmpty])) return ".";
      if (dart.notNull(pathParsed.parts[$length]) > 1 && pathParsed.parts[$last] === ".") {
        pathParsed.parts[$removeLast]();
        t0$0 = pathParsed.separators;
        t0$0[$removeLast]();
        t0$0[$removeLast]();
        t0$0[$add]("");
        t0$0;
      }
      pathParsed.root = "";
      pathParsed.removeTrailingSeparators();
      return dart.toString(pathParsed);
    }
    isWithin(parent, child) {
      return dart.equals(this[_isWithinOrEquals](parent, child), context._PathRelation.within);
    }
    equals(path1, path2) {
      return dart.equals(this[_isWithinOrEquals](path1, path2), context._PathRelation.equal);
    }
    [_isWithinOrEquals](parent, child) {
      let parentIsAbsolute = this.isAbsolute(parent);
      let childIsAbsolute = this.isAbsolute(child);
      if (dart.test(parentIsAbsolute) && !dart.test(childIsAbsolute)) {
        child = this.absolute(child);
        if (dart.test(this.style.isRootRelative(parent))) parent = this.absolute(parent);
      } else if (dart.test(childIsAbsolute) && !dart.test(parentIsAbsolute)) {
        parent = this.absolute(parent);
        if (dart.test(this.style.isRootRelative(child))) child = this.absolute(child);
      } else if (dart.test(childIsAbsolute) && dart.test(parentIsAbsolute)) {
        let childIsRootRelative = this.style.isRootRelative(child);
        let parentIsRootRelative = this.style.isRootRelative(parent);
        if (dart.test(childIsRootRelative) && !dart.test(parentIsRootRelative)) {
          child = this.absolute(child);
        } else if (dart.test(parentIsRootRelative) && !dart.test(childIsRootRelative)) {
          parent = this.absolute(parent);
        }
      }
      let result = this[_isWithinOrEqualsFast](parent, child);
      if (!dart.equals(result, context._PathRelation.inconclusive)) return result;
      let relative = null;
      try {
        relative = this.relative(child, {from: parent});
      } catch (e) {
        let _ = dart.getThrown(e);
        if (path_exception.PathException.is(_)) {
          return context._PathRelation.different;
        } else
          throw e;
      }
      if (!dart.test(this.isRelative(relative))) return context._PathRelation.different;
      if (relative === ".") return context._PathRelation.equal;
      if (relative === "..") return context._PathRelation.different;
      return relative.length >= 3 && relative[$startsWith]("..") && dart.test(this.style.isSeparator(relative[$codeUnitAt](2))) ? context._PathRelation.different : context._PathRelation.within;
    }
    [_isWithinOrEqualsFast](parent, child) {
      let t1;
      if (parent === ".") parent = "";
      let parentRootLength = this.style.rootLength(parent);
      let childRootLength = this.style.rootLength(child);
      if (parentRootLength != childRootLength) return context._PathRelation.different;
      for (let i = 0; i < dart.notNull(parentRootLength); i = i + 1) {
        let parentCodeUnit = parent[$codeUnitAt](i);
        let childCodeUnit = child[$codeUnitAt](i);
        if (!dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          return context._PathRelation.different;
        }
      }
      let lastCodeUnit = 47;
      let lastParentSeparator = null;
      let parentIndex = parentRootLength;
      let childIndex = childRootLength;
      while (dart.notNull(parentIndex) < parent.length && dart.notNull(childIndex) < child.length) {
        let parentCodeUnit = parent[$codeUnitAt](parentIndex);
        let childCodeUnit = child[$codeUnitAt](childIndex);
        if (dart.test(this.style.codeUnitsEqual(parentCodeUnit, childCodeUnit))) {
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
          }
          lastCodeUnit = parentCodeUnit;
          parentIndex = dart.notNull(parentIndex) + 1;
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (dart.test(this.style.isSeparator(parentCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          lastParentSeparator = parentIndex;
          parentIndex = dart.notNull(parentIndex) + 1;
          continue;
        } else if (dart.test(this.style.isSeparator(childCodeUnit)) && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          continue;
        }
        if (parentCodeUnit === 46 && dart.test(this.style.isSeparator(lastCodeUnit))) {
          parentIndex = dart.notNull(parentIndex) + 1;
          if (parentIndex === parent.length) break;
          parentCodeUnit = parent[$codeUnitAt](parentIndex);
          if (dart.test(this.style.isSeparator(parentCodeUnit))) {
            lastParentSeparator = parentIndex;
            parentIndex = dart.notNull(parentIndex) + 1;
            continue;
          }
          if (parentCodeUnit === 46) {
            parentIndex = dart.notNull(parentIndex) + 1;
            if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
              return context._PathRelation.inconclusive;
            }
          }
        }
        if (childCodeUnit === 46 && dart.test(this.style.isSeparator(lastCodeUnit))) {
          childIndex = dart.notNull(childIndex) + 1;
          if (childIndex === child.length) break;
          childCodeUnit = child[$codeUnitAt](childIndex);
          if (dart.test(this.style.isSeparator(childCodeUnit))) {
            childIndex = dart.notNull(childIndex) + 1;
            continue;
          }
          if (childCodeUnit === 46) {
            childIndex = dart.notNull(childIndex) + 1;
            if (childIndex === child.length || dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex)))) {
              return context._PathRelation.inconclusive;
            }
          }
        }
        let childDirection = this[_pathDirection](child, childIndex);
        if (!dart.equals(childDirection, context._PathDirection.belowRoot)) {
          return context._PathRelation.inconclusive;
        }
        let parentDirection = this[_pathDirection](parent, parentIndex);
        if (!dart.equals(parentDirection, context._PathDirection.belowRoot)) {
          return context._PathRelation.inconclusive;
        }
        return context._PathRelation.different;
      }
      if (childIndex === child.length) {
        if (parentIndex === parent.length || dart.test(this.style.isSeparator(parent[$codeUnitAt](parentIndex)))) {
          lastParentSeparator = parentIndex;
        } else {
          lastParentSeparator == null ? lastParentSeparator = math.max(core.int, 0, dart.notNull(parentRootLength) - 1) : null;
        }
        let direction = this[_pathDirection](parent, (t1 = lastParentSeparator, t1 == null ? dart.notNull(parentRootLength) - 1 : t1));
        if (dart.equals(direction, context._PathDirection.atRoot)) return context._PathRelation.equal;
        return dart.equals(direction, context._PathDirection.aboveRoot) ? context._PathRelation.inconclusive : context._PathRelation.different;
      }
      let direction = this[_pathDirection](child, childIndex);
      if (dart.equals(direction, context._PathDirection.atRoot)) return context._PathRelation.equal;
      if (dart.equals(direction, context._PathDirection.aboveRoot)) {
        return context._PathRelation.inconclusive;
      }
      return dart.test(this.style.isSeparator(child[$codeUnitAt](childIndex))) || dart.test(this.style.isSeparator(lastCodeUnit)) ? context._PathRelation.within : context._PathRelation.different;
    }
    [_pathDirection](path, index) {
      let depth = 0;
      let reachedRoot = false;
      let i = index;
      while (dart.notNull(i) < path.length) {
        while (dart.notNull(i) < path.length && dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (i === path.length) break;
        let start = i;
        while (dart.notNull(i) < path.length && !dart.test(this.style.isSeparator(path[$codeUnitAt](i)))) {
          i = dart.notNull(i) + 1;
        }
        if (dart.notNull(i) - dart.notNull(start) === 1 && path[$codeUnitAt](start) === 46) {
        } else if (dart.notNull(i) - dart.notNull(start) === 2 && path[$codeUnitAt](start) === 46 && path[$codeUnitAt](dart.notNull(start) + 1) === 46) {
          depth = depth - 1;
          if (depth < 0) break;
          if (depth === 0) reachedRoot = true;
        } else {
          depth = depth + 1;
        }
        if (i === path.length) break;
        i = dart.notNull(i) + 1;
      }
      if (depth < 0) return context._PathDirection.aboveRoot;
      if (depth === 0) return context._PathDirection.atRoot;
      if (reachedRoot) return context._PathDirection.reachesRoot;
      return context._PathDirection.belowRoot;
    }
    hash(path) {
      path = this.absolute(path);
      let result = this[_hashFast](path);
      if (result != null) return result;
      let parsed = this[_parse](path);
      parsed.normalize();
      return this[_hashFast](dart.toString(parsed));
    }
    [_hashFast](path) {
      let hash = 4603;
      let beginning = true;
      let wasSeparator = true;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = this.style.canonicalizeCodeUnit(path[$codeUnitAt](i));
        if (dart.test(this.style.isSeparator(codeUnit))) {
          wasSeparator = true;
          continue;
        }
        if (codeUnit === 46 && wasSeparator) {
          if (i + 1 === path.length) break;
          let next = path[$codeUnitAt](i + 1);
          if (dart.test(this.style.isSeparator(next))) continue;
          if (!beginning && next === 46 && (i + 2 === path.length || dart.test(this.style.isSeparator(path[$codeUnitAt](i + 2))))) {
            return null;
          }
        }
        hash = hash & 67108863;
        hash = hash * 33;
        hash = (hash ^ dart.notNull(codeUnit)) >>> 0;
        wasSeparator = false;
        beginning = false;
      }
      return hash;
    }
    withoutExtension(path) {
      let parsed = this[_parse](path);
      for (let i = dart.notNull(parsed.parts[$length]) - 1; i >= 0; i = i - 1) {
        if (parsed.parts[$_get](i)[$isNotEmpty]) {
          parsed.parts[$_set](i, parsed.basenameWithoutExtension);
          break;
        }
      }
      return dart.toString(parsed);
    }
    setExtension(path, extension) {
      return dart.notNull(this.withoutExtension(path)) + dart.notNull(extension);
    }
    fromUri(uri) {
      return this.style.pathFromUri(context._parseUri(uri));
    }
    toUri(path) {
      if (dart.test(this.isRelative(path))) {
        return this.style.relativePathToUri(path);
      } else {
        return this.style.absolutePathToUri(this.join(this.current, path));
      }
    }
    prettyUri(uri) {
      let typedUri = context._parseUri(uri);
      if (typedUri.scheme === "file" && dart.equals(this.style, style$.Style.url)) {
        return dart.toString(typedUri);
      } else if (typedUri.scheme !== "file" && typedUri.scheme !== "" && !dart.equals(this.style, style$.Style.url)) {
        return dart.toString(typedUri);
      }
      let path = this.normalize(this.fromUri(typedUri));
      let rel = this.relative(path);
      return dart.notNull(this.split(rel)[$length]) > dart.notNull(this.split(path)[$length]) ? path : rel;
    }
    [_parse](path) {
      return parsed_path.ParsedPath.parse(path, this.style);
    }
  };
  (context.Context._internal = function() {
    this[style$1] = internal_style.InternalStyle.as(style$.Style.platform);
    this[_current$] = null;
    ;
  }).prototype = context.Context.prototype;
  (context.Context.__ = function(style, _current) {
    this[style$1] = style;
    this[_current$] = _current;
    ;
  }).prototype = context.Context.prototype;
  dart.addTypeTests(context.Context);
  const style$1 = Context_style;
  dart.setMethodSignature(context.Context, () => ({
    __proto__: dart.getMethods(context.Context.__proto__),
    absolute: dart.fnType(core.String, [core.String], [core.String, core.String, core.String, core.String, core.String, core.String]),
    basename: dart.fnType(core.String, [core.String]),
    basenameWithoutExtension: dart.fnType(core.String, [core.String]),
    dirname: dart.fnType(core.String, [core.String]),
    extension: dart.fnType(core.String, [core.String]),
    rootPrefix: dart.fnType(core.String, [core.String]),
    isAbsolute: dart.fnType(core.bool, [core.String]),
    isRelative: dart.fnType(core.bool, [core.String]),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    join: dart.fnType(core.String, [core.String], [core.String, core.String, core.String, core.String, core.String, core.String, core.String]),
    joinAll: dart.fnType(core.String, [core.Iterable$(core.String)]),
    split: dart.fnType(core.List$(core.String), [core.String]),
    canonicalize: dart.fnType(core.String, [core.String]),
    normalize: dart.fnType(core.String, [core.String]),
    [_needsNormalization]: dart.fnType(core.bool, [core.String]),
    relative: dart.fnType(core.String, [core.String], {from: core.String}),
    isWithin: dart.fnType(core.bool, [core.String, core.String]),
    equals: dart.fnType(core.bool, [core.String, core.String]),
    [_isWithinOrEquals]: dart.fnType(context._PathRelation, [core.String, core.String]),
    [_isWithinOrEqualsFast]: dart.fnType(context._PathRelation, [core.String, core.String]),
    [_pathDirection]: dart.fnType(context._PathDirection, [core.String, core.int]),
    hash: dart.fnType(core.int, [core.String]),
    [_hashFast]: dart.fnType(core.int, [core.String]),
    withoutExtension: dart.fnType(core.String, [core.String]),
    setExtension: dart.fnType(core.String, [core.String, core.String]),
    fromUri: dart.fnType(core.String, [dart.dynamic]),
    toUri: dart.fnType(core.Uri, [core.String]),
    prettyUri: dart.fnType(core.String, [dart.dynamic]),
    [_parse]: dart.fnType(parsed_path.ParsedPath, [core.String])
  }));
  dart.setGetterSignature(context.Context, () => ({
    __proto__: dart.getGetters(context.Context.__proto__),
    current: core.String,
    separator: core.String
  }));
  dart.setLibraryUri(context.Context, "package:path/src/context.dart");
  dart.setFieldSignature(context.Context, () => ({
    __proto__: dart.getFields(context.Context.__proto__),
    style: dart.finalFieldType(internal_style.InternalStyle),
    [_current$]: dart.finalFieldType(core.String)
  }));
  const _PathDirection_name = dart.privateName(context, "_PathDirection.name");
  let C2;
  let C3;
  let C4;
  let C5;
  context._PathDirection = class _PathDirection extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (context._PathDirection.new = function(name) {
    this[name$0] = name;
    ;
  }).prototype = context._PathDirection.prototype;
  dart.addTypeTests(context._PathDirection);
  const name$0 = _PathDirection_name;
  dart.setLibraryUri(context._PathDirection, "package:path/src/context.dart");
  dart.setFieldSignature(context._PathDirection, () => ({
    __proto__: dart.getFields(context._PathDirection.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(context._PathDirection, ['toString']);
  dart.defineLazy(context._PathDirection, {
    /*context._PathDirection.aboveRoot*/get aboveRoot() {
      return C2 || CT.C2;
    },
    /*context._PathDirection.atRoot*/get atRoot() {
      return C3 || CT.C3;
    },
    /*context._PathDirection.reachesRoot*/get reachesRoot() {
      return C4 || CT.C4;
    },
    /*context._PathDirection.belowRoot*/get belowRoot() {
      return C5 || CT.C5;
    }
  });
  const _PathRelation_name = dart.privateName(context, "_PathRelation.name");
  let C6;
  let C7;
  let C8;
  let C9;
  context._PathRelation = class _PathRelation extends core.Object {
    get name() {
      return this[name$1];
    }
    set name(value) {
      super.name = value;
    }
    toString() {
      return this.name;
    }
  };
  (context._PathRelation.new = function(name) {
    this[name$1] = name;
    ;
  }).prototype = context._PathRelation.prototype;
  dart.addTypeTests(context._PathRelation);
  const name$1 = _PathRelation_name;
  dart.setLibraryUri(context._PathRelation, "package:path/src/context.dart");
  dart.setFieldSignature(context._PathRelation, () => ({
    __proto__: dart.getFields(context._PathRelation.__proto__),
    name: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(context._PathRelation, ['toString']);
  dart.defineLazy(context._PathRelation, {
    /*context._PathRelation.within*/get within() {
      return C6 || CT.C6;
    },
    /*context._PathRelation.equal*/get equal() {
      return C7 || CT.C7;
    },
    /*context._PathRelation.different*/get different() {
      return C8 || CT.C8;
    },
    /*context._PathRelation.inconclusive*/get inconclusive() {
      return C9 || CT.C9;
    }
  });
  context.createInternal = function createInternal() {
    return new context.Context._internal();
  };
  context._parseUri = function _parseUri(uri) {
    if (typeof uri == 'string') return core.Uri.parse(uri);
    if (core.Uri.is(uri)) return uri;
    dart.throw(new core.ArgumentError.value(uri, "uri", "Value must be a String or a Uri"));
  };
  context._validateArgList = function _validateArgList(method, args) {
    for (let i = 1; i < dart.notNull(args[$length]); i = i + 1) {
      if (args[$_get](i) == null || args[$_get](i - 1) != null) continue;
      let numArgs = null;
      for (let t1 = numArgs = args[$length]; dart.notNull(numArgs) >= 1; numArgs = dart.notNull(numArgs) - 1) {
        if (args[$_get](dart.notNull(numArgs) - 1) != null) break;
      }
      let message = new core.StringBuffer.new();
      message.write(dart.str(method) + "(");
      message.write(args[$take](numArgs)[$map](core.String, dart.fn(arg => arg == null ? "null" : "\"" + dart.str(arg) + "\"", StringToString()))[$join](", "));
      message.write("): part " + dart.str(i - 1) + " was null, but part " + dart.str(i) + " was not.");
      dart.throw(new core.ArgumentError.new(message.toString()));
    }
  };
  const PathException_message = dart.privateName(path_exception, "PathException.message");
  path_exception.PathException = class PathException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      this[message$] = value;
    }
    toString() {
      return "PathException: " + dart.str(this.message);
    }
  };
  (path_exception.PathException.new = function(message) {
    this[message$] = message;
    ;
  }).prototype = path_exception.PathException.prototype;
  dart.addTypeTests(path_exception.PathException);
  const message$ = PathException_message;
  path_exception.PathException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(path_exception.PathException, "package:path/src/path_exception.dart");
  dart.setFieldSignature(path_exception.PathException, () => ({
    __proto__: dart.getFields(path_exception.PathException.__proto__),
    message: dart.fieldType(core.String)
  }));
  dart.defineExtensionMethods(path_exception.PathException, ['toString']);
  path$.absolute = function absolute(part1, part2, part3, part4, part5, part6, part7) {
    if (part2 === void 0) part2 = null;
    if (part3 === void 0) part3 = null;
    if (part4 === void 0) part4 = null;
    if (part5 === void 0) part5 = null;
    if (part6 === void 0) part6 = null;
    if (part7 === void 0) part7 = null;
    return path$.context.absolute(part1, part2, part3, part4, part5, part6, part7);
  };
  path$.basename = function basename(path) {
    return path$.context.basename(path);
  };
  path$.basenameWithoutExtension = function basenameWithoutExtension(path) {
    return path$.context.basenameWithoutExtension(path);
  };
  path$.dirname = function dirname(path) {
    return path$.context.dirname(path);
  };
  path$.extension = function extension(path) {
    return path$.context.extension(path);
  };
  path$.rootPrefix = function rootPrefix(path) {
    return path$.context.rootPrefix(path);
  };
  path$.isAbsolute = function isAbsolute(path) {
    return path$.context.isAbsolute(path);
  };
  path$.isRelative = function isRelative(path) {
    return path$.context.isRelative(path);
  };
  path$.isRootRelative = function isRootRelative(path) {
    return path$.context.isRootRelative(path);
  };
  path$.join = function join(part1, part2, part3, part4, part5, part6, part7, part8) {
    if (part2 === void 0) part2 = null;
    if (part3 === void 0) part3 = null;
    if (part4 === void 0) part4 = null;
    if (part5 === void 0) part5 = null;
    if (part6 === void 0) part6 = null;
    if (part7 === void 0) part7 = null;
    if (part8 === void 0) part8 = null;
    return path$.context.join(part1, part2, part3, part4, part5, part6, part7, part8);
  };
  path$.joinAll = function joinAll(parts) {
    return path$.context.joinAll(parts);
  };
  path$.split = function split(path) {
    return path$.context.split(path);
  };
  path$.canonicalize = function canonicalize(path) {
    return path$.context.canonicalize(path);
  };
  path$.normalize = function normalize(path) {
    return path$.context.normalize(path);
  };
  path$.relative = function relative(path, opts) {
    let from = opts && 'from' in opts ? opts.from : null;
    return path$.context.relative(path, {from: from});
  };
  path$.isWithin = function isWithin(parent, child) {
    return path$.context.isWithin(parent, child);
  };
  path$.equals = function equals(path1, path2) {
    return path$.context.equals(path1, path2);
  };
  path$.hash = function hash(path) {
    return path$.context.hash(path);
  };
  path$.withoutExtension = function withoutExtension(path) {
    return path$.context.withoutExtension(path);
  };
  path$.setExtension = function setExtension(path, extension) {
    return path$.context.setExtension(path, extension);
  };
  path$.fromUri = function fromUri(uri) {
    return path$.context.fromUri(uri);
  };
  path$.toUri = function toUri(path) {
    return path$.context.toUri(path);
  };
  path$.prettyUri = function prettyUri(uri) {
    return path$.context.prettyUri(uri);
  };
  dart.copyProperties(path$, {
    get style() {
      return path$.context.style;
    },
    get current() {
      let uri = null;
      try {
        uri = core.Uri.base;
      } catch (e) {
        let ex = dart.getThrown(e);
        if (core.Exception.is(ex)) {
          if (path$._current != null) return path$._current;
          dart.rethrow(e);
        } else
          throw e;
      }
      if (dart.equals(uri, path$._currentUriBase)) return path$._current;
      path$._currentUriBase = uri;
      if (dart.equals(style$.Style.platform, style$.Style.url)) {
        path$._current = dart.toString(uri.resolve("."));
        return path$._current;
      } else {
        let path = uri.toFilePath();
        let lastIndex = path.length - 1;
        if (!(path[$_get](lastIndex) === "/" || path[$_get](lastIndex) === "\\")) dart.assertFailed(null, "org-dartlang-app:///packages/path/path.dart", 109, 12, "path[lastIndex] == '/' || path[lastIndex] == '\\\\'");
        path$._current = lastIndex === 0 ? path : path[$substring](0, lastIndex);
        return path$._current;
      }
    },
    get separator() {
      return path$.context.separator;
    }
  });
  dart.defineLazy(path$, {
    /*path$.posix*/get posix() {
      return context.Context.new({style: style$.Style.posix});
    },
    /*path$.windows*/get windows() {
      return context.Context.new({style: style$.Style.windows});
    },
    /*path$.url*/get url() {
      return context.Context.new({style: style$.Style.url});
    },
    /*path$.context*/get context() {
      return context.createInternal();
    },
    /*path$._currentUriBase*/get _currentUriBase() {
      return null;
    },
    set _currentUriBase(_) {},
    /*path$._current*/get _current() {
      return null;
    },
    set _current(_) {}
  });
  const _inner = dart.privateName(path_set, "_inner");
  path_set.PathSet = class PathSet extends collection.IterableBase$(core.String) {
    static _create(context) {
      context == null ? context = path$.context : null;
      return LinkedHashSetOfString().new({equals: dart.fn((path1, path2) => {
          if (path1 == null) return path2 == null;
          if (path2 == null) return false;
          return context.equals(path1, path2);
        }, StringAndStringTobool()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringToint()), isValidKey: dart.fn(path => typeof path == 'string' || path == null, dynamicTobool())});
    }
    get iterator() {
      return this[_inner].iterator;
    }
    get length() {
      return this[_inner][$length];
    }
    add(value) {
      core.String._check(value);
      return this[_inner].add(value);
    }
    addAll(elements) {
      IterableOfString()._check(elements);
      return this[_inner].addAll(elements);
    }
    cast(T) {
      return this[_inner].cast(T);
    }
    clear() {
      return this[_inner].clear();
    }
    contains(other) {
      return this[_inner].contains(other);
    }
    containsAll(other) {
      return this[_inner].containsAll(other);
    }
    difference(other) {
      return this[_inner].difference(other);
    }
    intersection(other) {
      return this[_inner].intersection(other);
    }
    lookup(element) {
      return this[_inner].lookup(element);
    }
    remove(value) {
      return this[_inner].remove(value);
    }
    removeAll(elements) {
      return this[_inner].removeAll(elements);
    }
    removeWhere(test) {
      return this[_inner].removeWhere(test);
    }
    retainAll(elements) {
      return this[_inner].retainAll(elements);
    }
    retainWhere(test) {
      return this[_inner].retainWhere(test);
    }
    union(other) {
      SetOfString()._check(other);
      return this[_inner].union(other);
    }
    toSet() {
      return this[_inner].toSet();
    }
  };
  (path_set.PathSet.new = function(opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = path_set.PathSet._create(context);
    path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = path_set.PathSet.prototype;
  (path_set.PathSet.of = function(other, opts) {
    let t4;
    let context = opts && 'context' in opts ? opts.context : null;
    this[_inner] = (t4 = path_set.PathSet._create(context), t4.addAll(other), t4);
    path_set.PathSet.__proto__.new.call(this);
    ;
  }).prototype = path_set.PathSet.prototype;
  dart.addTypeTests(path_set.PathSet);
  path_set.PathSet[dart.implements] = () => [core.Set$(core.String)];
  dart.setMethodSignature(path_set.PathSet, () => ({
    __proto__: dart.getMethods(path_set.PathSet.__proto__),
    add: dart.fnType(core.bool, [core.Object]),
    addAll: dart.fnType(dart.void, [core.Object]),
    cast: dart.gFnType(T => [core.Set$(T), []]),
    [$cast]: dart.gFnType(T => [core.Set$(T), []]),
    clear: dart.fnType(dart.void, []),
    containsAll: dart.fnType(core.bool, [core.Iterable$(core.Object)]),
    difference: dart.fnType(core.Set$(core.String), [core.Set$(core.Object)]),
    intersection: dart.fnType(core.Set$(core.String), [core.Set$(core.Object)]),
    lookup: dart.fnType(core.String, [core.Object]),
    remove: dart.fnType(core.bool, [core.Object]),
    removeAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
    removeWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    retainAll: dart.fnType(dart.void, [core.Iterable$(core.Object)]),
    retainWhere: dart.fnType(dart.void, [dart.fnType(core.bool, [core.String])]),
    union: dart.fnType(core.Set$(core.String), [core.Object])
  }));
  dart.setGetterSignature(path_set.PathSet, () => ({
    __proto__: dart.getGetters(path_set.PathSet.__proto__),
    iterator: core.Iterator$(core.String),
    [$iterator]: core.Iterator$(core.String)
  }));
  dart.setLibraryUri(path_set.PathSet, "package:path/src/path_set.dart");
  dart.setFieldSignature(path_set.PathSet, () => ({
    __proto__: dart.getFields(path_set.PathSet.__proto__),
    [_inner]: dart.finalFieldType(core.Set$(core.String))
  }));
  dart.defineExtensionMethods(path_set.PathSet, ['cast', 'contains', 'toSet']);
  dart.defineExtensionAccessors(path_set.PathSet, ['iterator', 'length']);
  const _is_PathMap_default = Symbol('_is_PathMap_default');
  path_map.PathMap$ = dart.generic(V => {
    class PathMap extends collection.MapView$(core.String, V) {
      static _create(V, context) {
        context == null ? context = path$.context : null;
        return collection.LinkedHashMap$(core.String, V).new({equals: dart.fn((path1, path2) => {
            if (path1 == null) return path2 == null;
            if (path2 == null) return false;
            return context.equals(path1, path2);
          }, StringAndStringTobool()), hashCode: dart.fn(path => path == null ? 0 : context.hash(path), StringToint()), isValidKey: dart.fn(path => typeof path == 'string' || path == null, dynamicTobool())});
      }
    }
    (PathMap.new = function(opts) {
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, path_map.PathMap._create(V, context));
      ;
    }).prototype = PathMap.prototype;
    (PathMap.of = function(other, opts) {
      let t4;
      let context = opts && 'context' in opts ? opts.context : null;
      PathMap.__proto__.new.call(this, (t4 = path_map.PathMap._create(V, context), t4[$addAll](other), t4));
      ;
    }).prototype = PathMap.prototype;
    dart.addTypeTests(PathMap);
    PathMap.prototype[_is_PathMap_default] = true;
    dart.setLibraryUri(PathMap, "package:path/src/path_map.dart");
    return PathMap;
  });
  path_map.PathMap = path_map.PathMap$();
  dart.addTypeTests(path_map.PathMap, _is_PathMap_default);
  const UrlStyle_name = dart.privateName(url, "UrlStyle.name");
  const UrlStyle_separator = dart.privateName(url, "UrlStyle.separator");
  const UrlStyle_separators = dart.privateName(url, "UrlStyle.separators");
  const UrlStyle_separatorPattern = dart.privateName(url, "UrlStyle.separatorPattern");
  const UrlStyle_needsSeparatorPattern = dart.privateName(url, "UrlStyle.needsSeparatorPattern");
  const UrlStyle_rootPattern = dart.privateName(url, "UrlStyle.rootPattern");
  const UrlStyle_relativeRootPattern = dart.privateName(url, "UrlStyle.relativeRootPattern");
  url.UrlStyle = class UrlStyle extends internal_style.InternalStyle {
    get name() {
      return this[name$2];
    }
    set name(value) {
      super.name = value;
    }
    get separator() {
      return this[separator$0];
    }
    set separator(value) {
      super.separator = value;
    }
    get separators() {
      return this[separators$1];
    }
    set separators(value) {
      super.separators = value;
    }
    get separatorPattern() {
      return this[separatorPattern$0];
    }
    set separatorPattern(value) {
      super.separatorPattern = value;
    }
    get needsSeparatorPattern() {
      return this[needsSeparatorPattern$0];
    }
    set needsSeparatorPattern(value) {
      super.needsSeparatorPattern = value;
    }
    get rootPattern() {
      return this[rootPattern$0];
    }
    set rootPattern(value) {
      super.rootPattern = value;
    }
    get relativeRootPattern() {
      return this[relativeRootPattern$0];
    }
    set relativeRootPattern(value) {
      super.relativeRootPattern = value;
    }
    containsSeparator(path) {
      return path[$contains]("/");
    }
    isSeparator(codeUnit) {
      return codeUnit === 47;
    }
    needsSeparator(path) {
      if (path[$isEmpty]) return false;
      if (!dart.test(this.isSeparator(path[$codeUnitAt](path.length - 1)))) return true;
      return path[$endsWith]("://") && this.rootLength(path) === path.length;
    }
    rootLength(path, opts) {
      let withDrive = opts && 'withDrive' in opts ? opts.withDrive : false;
      if (path[$isEmpty]) return 0;
      if (dart.test(this.isSeparator(path[$codeUnitAt](0)))) return 1;
      for (let i = 0; i < path.length; i = i + 1) {
        let codeUnit = path[$codeUnitAt](i);
        if (dart.test(this.isSeparator(codeUnit))) return 0;
        if (codeUnit === 58) {
          if (i === 0) return 0;
          if (path[$startsWith]("//", i + 1)) i = i + 3;
          let index = path[$indexOf]("/", i);
          if (index <= 0) return path.length;
          if (!dart.test(withDrive) || path.length < index + 3) return index;
          if (!path[$startsWith]("file://")) return index;
          if (!dart.test(utils.isDriveLetter(path, index + 1))) return index;
          return path.length === index + 3 ? index + 3 : index + 4;
        }
      }
      return 0;
    }
    isRootRelative(path) {
      return path[$isNotEmpty] && dart.test(this.isSeparator(path[$codeUnitAt](0)));
    }
    getRelativeRoot(path) {
      return dart.test(this.isRootRelative(path)) ? "/" : null;
    }
    pathFromUri(uri) {
      return dart.toString(uri);
    }
    relativePathToUri(path) {
      return core.Uri.parse(path);
    }
    absolutePathToUri(path) {
      return core.Uri.parse(path);
    }
  };
  (url.UrlStyle.new = function() {
    this[name$2] = "url";
    this[separator$0] = "/";
    this[separators$1] = C0 || CT.C0;
    this[separatorPattern$0] = core.RegExp.new("/");
    this[needsSeparatorPattern$0] = core.RegExp.new("(^[a-zA-Z][-+.a-zA-Z\\d]*://|[^/])$");
    this[rootPattern$0] = core.RegExp.new("[a-zA-Z][-+.a-zA-Z\\d]*://[^/]*");
    this[relativeRootPattern$0] = core.RegExp.new("^/");
    ;
  }).prototype = url.UrlStyle.prototype;
  dart.addTypeTests(url.UrlStyle);
  const name$2 = UrlStyle_name;
  const separator$0 = UrlStyle_separator;
  const separators$1 = UrlStyle_separators;
  const separatorPattern$0 = UrlStyle_separatorPattern;
  const needsSeparatorPattern$0 = UrlStyle_needsSeparatorPattern;
  const rootPattern$0 = UrlStyle_rootPattern;
  const relativeRootPattern$0 = UrlStyle_relativeRootPattern;
  dart.setMethodSignature(url.UrlStyle, () => ({
    __proto__: dart.getMethods(url.UrlStyle.__proto__),
    containsSeparator: dart.fnType(core.bool, [core.String]),
    isSeparator: dart.fnType(core.bool, [core.int]),
    needsSeparator: dart.fnType(core.bool, [core.String]),
    rootLength: dart.fnType(core.int, [core.String], {withDrive: core.bool}),
    isRootRelative: dart.fnType(core.bool, [core.String]),
    getRelativeRoot: dart.fnType(core.String, [core.String]),
    pathFromUri: dart.fnType(core.String, [core.Uri]),
    absolutePathToUri: dart.fnType(core.Uri, [core.String])
  }));
  dart.setLibraryUri(url.UrlStyle, "package:path/src/style/url.dart");
  dart.setFieldSignature(url.UrlStyle, () => ({
    __proto__: dart.getFields(url.UrlStyle.__proto__),
    name: dart.finalFieldType(core.String),
    separator: dart.finalFieldType(core.String),
    separators: dart.finalFieldType(core.List$(core.String)),
    separatorPattern: dart.finalFieldType(core.Pattern),
    needsSeparatorPattern: dart.finalFieldType(core.Pattern),
    rootPattern: dart.finalFieldType(core.Pattern),
    relativeRootPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.trackLibraries("packages/path/path", {
    "package:path/src/style/posix.dart": posix,
    "package:path/src/parsed_path.dart": parsed_path,
    "package:path/src/style.dart": style$,
    "package:path/src/style/windows.dart": windows,
    "package:path/src/utils.dart": utils,
    "package:path/src/characters.dart": characters,
    "package:path/src/internal_style.dart": internal_style,
    "package:path/src/context.dart": context,
    "package:path/src/path_exception.dart": path_exception,
    "package:path/path.dart": path$,
    "package:path/src/path_set.dart": path_set,
    "package:path/src/path_map.dart": path_map,
    "package:path/src/style/url.dart": url
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/style.dart","src/internal_style.dart","src/style/posix.dart","src/parsed_path.dart","src/style/windows.dart","src/utils.dart","src/characters.dart","src/context.dart","src/path_exception.dart","path.dart","src/path_set.dart","src/path_map.dart","src/style/url.dart"],"names":[],"mappings":"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","file":"path.ddc.js"}');
  // Exports:
  return {
    src__style__posix: posix,
    src__parsed_path: parsed_path,
    src__style: style$,
    src__style__windows: windows,
    src__utils: utils,
    src__characters: characters,
    src__internal_style: internal_style,
    src__context: context,
    src__path_exception: path_exception,
    path: path$,
    src__path_set: path_set,
    src__path_map: path_map,
    src__style__url: url
  };
});

//# sourceMappingURL=path.ddc.js.map

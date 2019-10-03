define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const meta = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: meta._AlwaysThrows.prototype
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: meta._Checked.prototype
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: meta._Experimental.prototype
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: meta._Factory.prototype
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: meta.Immutable.prototype,
        [Immutable_reason]: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: meta._IsTest.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: meta._IsTestGroup.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: meta._Literal.prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: meta._MustCallSuper.prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: meta._OptionalTypeArgs.prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: meta._Protected.prototype
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: meta.Required.prototype,
        [Required_reason]: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: meta._Sealed.prototype
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: meta._Virtual.prototype
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: meta._VisibleForOverriding.prototype
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: meta._VisibleForTesting.prototype
      });
    }
  });
  const Immutable_reason = dart.privateName(meta, "Immutable.reason");
  meta.Immutable = class Immutable extends core.Object {
    get reason() {
      return this[reason$];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Immutable.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$] = reason;
    ;
  }).prototype = meta.Immutable.prototype;
  dart.addTypeTests(meta.Immutable);
  const reason$ = Immutable_reason;
  dart.setLibraryUri(meta.Immutable, "package:meta/meta.dart");
  dart.setFieldSignature(meta.Immutable, () => ({
    __proto__: dart.getFields(meta.Immutable.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  const Required_reason = dart.privateName(meta, "Required.reason");
  meta.Required = class Required extends core.Object {
    get reason() {
      return this[reason$0];
    }
    set reason(value) {
      super.reason = value;
    }
  };
  (meta.Required.new = function(reason) {
    if (reason === void 0) reason = null;
    this[reason$0] = reason;
    ;
  }).prototype = meta.Required.prototype;
  dart.addTypeTests(meta.Required);
  const reason$0 = Required_reason;
  dart.setLibraryUri(meta.Required, "package:meta/meta.dart");
  dart.setFieldSignature(meta.Required, () => ({
    __proto__: dart.getFields(meta.Required.__proto__),
    reason: dart.finalFieldType(core.String)
  }));
  meta._AlwaysThrows = class _AlwaysThrows extends core.Object {};
  (meta._AlwaysThrows.new = function() {
    ;
  }).prototype = meta._AlwaysThrows.prototype;
  dart.addTypeTests(meta._AlwaysThrows);
  dart.setLibraryUri(meta._AlwaysThrows, "package:meta/meta.dart");
  meta._Checked = class _Checked extends core.Object {};
  (meta._Checked.new = function() {
    ;
  }).prototype = meta._Checked.prototype;
  dart.addTypeTests(meta._Checked);
  dart.setLibraryUri(meta._Checked, "package:meta/meta.dart");
  meta._Experimental = class _Experimental extends core.Object {};
  (meta._Experimental.new = function() {
    ;
  }).prototype = meta._Experimental.prototype;
  dart.addTypeTests(meta._Experimental);
  dart.setLibraryUri(meta._Experimental, "package:meta/meta.dart");
  meta._Factory = class _Factory extends core.Object {};
  (meta._Factory.new = function() {
    ;
  }).prototype = meta._Factory.prototype;
  dart.addTypeTests(meta._Factory);
  dart.setLibraryUri(meta._Factory, "package:meta/meta.dart");
  meta._IsTest = class _IsTest extends core.Object {};
  (meta._IsTest.new = function() {
    ;
  }).prototype = meta._IsTest.prototype;
  dart.addTypeTests(meta._IsTest);
  dart.setLibraryUri(meta._IsTest, "package:meta/meta.dart");
  meta._IsTestGroup = class _IsTestGroup extends core.Object {};
  (meta._IsTestGroup.new = function() {
    ;
  }).prototype = meta._IsTestGroup.prototype;
  dart.addTypeTests(meta._IsTestGroup);
  dart.setLibraryUri(meta._IsTestGroup, "package:meta/meta.dart");
  meta._Literal = class _Literal extends core.Object {};
  (meta._Literal.new = function() {
    ;
  }).prototype = meta._Literal.prototype;
  dart.addTypeTests(meta._Literal);
  dart.setLibraryUri(meta._Literal, "package:meta/meta.dart");
  meta._MustCallSuper = class _MustCallSuper extends core.Object {};
  (meta._MustCallSuper.new = function() {
    ;
  }).prototype = meta._MustCallSuper.prototype;
  dart.addTypeTests(meta._MustCallSuper);
  dart.setLibraryUri(meta._MustCallSuper, "package:meta/meta.dart");
  meta._OptionalTypeArgs = class _OptionalTypeArgs extends core.Object {};
  (meta._OptionalTypeArgs.new = function() {
    ;
  }).prototype = meta._OptionalTypeArgs.prototype;
  dart.addTypeTests(meta._OptionalTypeArgs);
  dart.setLibraryUri(meta._OptionalTypeArgs, "package:meta/meta.dart");
  meta._Protected = class _Protected extends core.Object {};
  (meta._Protected.new = function() {
    ;
  }).prototype = meta._Protected.prototype;
  dart.addTypeTests(meta._Protected);
  dart.setLibraryUri(meta._Protected, "package:meta/meta.dart");
  meta._Sealed = class _Sealed extends core.Object {};
  (meta._Sealed.new = function() {
    ;
  }).prototype = meta._Sealed.prototype;
  dart.addTypeTests(meta._Sealed);
  dart.setLibraryUri(meta._Sealed, "package:meta/meta.dart");
  meta._Virtual = class _Virtual extends core.Object {};
  (meta._Virtual.new = function() {
    ;
  }).prototype = meta._Virtual.prototype;
  dart.addTypeTests(meta._Virtual);
  dart.setLibraryUri(meta._Virtual, "package:meta/meta.dart");
  meta._VisibleForOverriding = class _VisibleForOverriding extends core.Object {};
  (meta._VisibleForOverriding.new = function() {
    ;
  }).prototype = meta._VisibleForOverriding.prototype;
  dart.addTypeTests(meta._VisibleForOverriding);
  dart.setLibraryUri(meta._VisibleForOverriding, "package:meta/meta.dart");
  meta._VisibleForTesting = class _VisibleForTesting extends core.Object {};
  (meta._VisibleForTesting.new = function() {
    ;
  }).prototype = meta._VisibleForTesting.prototype;
  dart.addTypeTests(meta._VisibleForTesting);
  dart.setLibraryUri(meta._VisibleForTesting, "package:meta/meta.dart");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  let C11;
  let C12;
  let C13;
  let C14;
  let C15;
  dart.defineLazy(meta, {
    /*meta.alwaysThrows*/get alwaysThrows() {
      return C0 || CT.C0;
    },
    /*meta.checked*/get checked() {
      return C1 || CT.C1;
    },
    /*meta.experimental*/get experimental() {
      return C2 || CT.C2;
    },
    /*meta.factory*/get factory() {
      return C3 || CT.C3;
    },
    /*meta.immutable*/get immutable() {
      return C4 || CT.C4;
    },
    /*meta.isTest*/get isTest() {
      return C5 || CT.C5;
    },
    /*meta.isTestGroup*/get isTestGroup() {
      return C6 || CT.C6;
    },
    /*meta.literal*/get literal() {
      return C7 || CT.C7;
    },
    /*meta.mustCallSuper*/get mustCallSuper() {
      return C8 || CT.C8;
    },
    /*meta.optionalTypeArgs*/get optionalTypeArgs() {
      return C9 || CT.C9;
    },
    /*meta.protected*/get protected() {
      return C10 || CT.C10;
    },
    /*meta.required*/get required() {
      return C11 || CT.C11;
    },
    /*meta.sealed*/get sealed() {
      return C12 || CT.C12;
    },
    /*meta.virtual*/get virtual() {
      return C13 || CT.C13;
    },
    /*meta.visibleForOverriding*/get visibleForOverriding() {
      return C14 || CT.C14;
    },
    /*meta.visibleForTesting*/get visibleForTesting() {
      return C15 || CT.C15;
    }
  });
  dart.trackLibraries("packages/meta/meta", {
    "package:meta/meta.dart": meta
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["meta.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+Oe;;;;;;;iCAGS;;;;EAAQ;;;;;;;;;;IAgBjB;;;;;;;gCAGQ;;;;EAAQ;;;;;;;;;;;EAIR;;;;;;EAIL;;;;;;EAIK;;;;;;EAIL;;;;;;EAID;;;;;;EAIK;;;;;;EAIJ;;;;;;EAIM;;;;;;EAIG;;;;;;EAIP;;;;;;EAIH;;;;;;EAKC;;;;;;EAIa;;;;;;EAIH;;;;;;;;;;;;;;;;;;;;MA9QR,iBAAY;;;MAWjB,YAAO;;;MAsBF,iBAAY;;;MAYjB,YAAO;;;MAYN,cAAS;;;MAQX,WAAM;;;MAQD,gBAAW;;;MAaf,YAAO;;;MAeD,kBAAa;;;MAMV,qBAAgB;;;MAkBvB,cAAS;;;MAeX,aAAQ;;;MAaT,WAAM;;;MAQL,YAAO;;;MAWM,yBAAoB;;;MAYvB,sBAAiB","file":"meta.ddc.js"}');
  // Exports:
  return {
    meta: meta
  };
});

//# sourceMappingURL=meta.ddc.js.map

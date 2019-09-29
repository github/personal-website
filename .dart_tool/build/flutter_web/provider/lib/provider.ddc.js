define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const value_listenable_builder = packages__flutter__src__widgets__actions.src__widgets__value_listenable_builder;
  const async$ = packages__flutter__src__widgets__actions.src__widgets__async;
  const provider = Object.create(dart.library);
  const value_listenable_provider = Object.create(dart.library);
  const consumer = Object.create(dart.library);
  const selector = Object.create(dart.library);
  const async_provider = Object.create(dart.library);
  const provider$ = Object.create(dart.library);
  const change_notifier_provider = Object.create(dart.library);
  const proxy_provider = Object.create(dart.library);
  const delegate_widget = Object.create(dart.library);
  const listenable_provider = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $reversed = dartx.reversed;
  const $_equals = dartx._equals;
  const $add = dartx.add;
  let BuildContextAndValueNotifierTovoid = () => (BuildContextAndValueNotifierTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, change_notifier.ValueNotifier])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let TToNull = () => (TToNull = dart.constFn(dart.gFnType(T => [core.Null, [T]])))();
  let BuildContextAndChangeNotifierTovoid = () => (BuildContextAndChangeNotifierTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, change_notifier.ChangeNotifier])))();
  let ProxyProviderStateOfProxyProviderWidget = () => (ProxyProviderStateOfProxyProviderWidget = dart.constFn(proxy_provider.ProxyProviderState$(proxy_provider.ProxyProviderWidget)))();
  let VoidToint = () => (VoidToint = dart.constFn(dart.fnType(core.int, [])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.fn(value_listenable_provider.ValueListenableProvider._dispose, BuildContextAndValueNotifierTovoid());
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 87,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 7,
        line: 88,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 89,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 90,
        file: null
      });
    },
    get C2() {
      return C2 = dart.constList([C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C2 || CT.C2,
        name: null,
        column: 36,
        line: 86,
        file: "org-dartlang-app:///packages/provider/src/value_listenable_provider.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 11,
        line: 100,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 11,
        line: 101,
        file: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 102,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 16,
        line: 99,
        file: "org-dartlang-app:///packages/provider/src/value_listenable_provider.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "valueListenable",
        column: 7,
        line: 97,
        file: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 98,
        file: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 105,
        file: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C13 || CT.C13,
        name: null,
        column: 12,
        line: 96,
        file: "org-dartlang-app:///packages/provider/src/value_listenable_provider.dart"
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 190,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 191,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 192,
        file: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C18 || CT.C18,
        name: null,
        column: 12,
        line: 189,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 228,
        file: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 229,
        file: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 230,
        file: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C23 || CT.C23,
        name: null,
        column: 12,
        line: 227,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 267,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 268,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 269,
        file: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C28 || CT.C28,
        name: null,
        column: 12,
        line: 266,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 306,
        file: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 307,
        file: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 308,
        file: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C33 || CT.C33,
        name: null,
        column: 12,
        line: 305,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 347,
        file: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 348,
        file: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 349,
        file: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C38 || CT.C38,
        name: null,
        column: 12,
        line: 346,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 389,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 390,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 391,
        file: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45, C46 || CT.C46], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C43 || CT.C43,
        name: null,
        column: 12,
        line: 388,
        file: "org-dartlang-app:///packages/provider/src/consumer.dart"
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 68,
        file: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selector",
        column: 7,
        line: 69,
        file: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 70,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 71,
        file: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C48 || CT.C48,
        name: null,
        column: 12,
        line: 67,
        file: "org-dartlang-app:///packages/provider/src/selector.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 133,
        file: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 7,
        line: 134,
        file: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 135,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialData",
        column: 7,
        line: 136,
        file: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "catchError",
        column: 7,
        line: 137,
        file: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 138,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 27,
        line: 132,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 11,
        line: 149,
        file: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 150,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 11,
        line: 151,
        file: null
      });
    },
    get C62() {
      return C62 = dart.constList([C63 || CT.C63, C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C62 || CT.C62,
        name: null,
        column: 16,
        line: 148,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "stream",
        column: 7,
        line: 145,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialData",
        column: 7,
        line: 146,
        file: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 147,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69, C70 || CT.C70], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 12,
        line: 144,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 290,
        file: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 7,
        line: 291,
        file: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 292,
        file: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialData",
        column: 7,
        line: 293,
        file: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "catchError",
        column: 7,
        line: 294,
        file: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 295,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 27,
        line: 289,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 11,
        line: 306,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 11,
        line: 307,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 308,
        file: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C80 || CT.C80,
        name: null,
        column: 16,
        line: 305,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "future",
        column: 7,
        line: 302,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialData",
        column: 7,
        line: 303,
        file: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 304,
        file: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C85 || CT.C85,
        name: null,
        column: 12,
        line: 301,
        file: "org-dartlang-app:///packages/provider/src/async_provider.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 136,
        file: null
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "providers",
        column: 7,
        line: 137,
        file: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91, C92 || CT.C92, C60 || CT.C60], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C90 || CT.C90,
        name: null,
        column: 12,
        line: 135,
        file: "org-dartlang-app:///packages/provider/src/provider.dart"
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 321,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 7,
        line: 322,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 323,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 324,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 21,
        line: 320,
        file: "org-dartlang-app:///packages/provider/src/provider.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 7,
        line: 341,
        file: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 342,
        file: null
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 343,
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
        column: 12,
        line: 340,
        file: "org-dartlang-app:///packages/provider/src/provider.dart"
      });
    },
    get C104() {
      return C104 = dart.fn(change_notifier_provider.ChangeNotifierProvider._disposer, BuildContextAndChangeNotifierTovoid());
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 77,
        file: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "delegate",
        column: 7,
        line: 78,
        file: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 79,
        file: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C106 || CT.C106,
        name: null,
        column: 31,
        line: 76,
        file: "org-dartlang-app:///packages/provider/src/listenable_provider.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 7,
        line: 87,
        file: null
      });
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 88,
        file: null
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 89,
        file: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112, C113 || CT.C113, C114 || CT.C114], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C111 || CT.C111,
        name: null,
        column: 12,
        line: 86,
        file: "org-dartlang-app:///packages/provider/src/listenable_provider.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 240,
        file: null
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialBuilder",
        column: 7,
        line: 241,
        file: null
      });
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 242,
        file: null
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dispose",
        column: 7,
        line: 243,
        file: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 244,
        file: null
      });
    },
    get C116() {
      return C116 = dart.constList([C117 || CT.C117, C118 || CT.C118, C119 || CT.C119, C120 || CT.C120, C121 || CT.C121], widget_inspector._Location);
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C116 || CT.C116,
        name: null,
        column: 12,
        line: 239,
        file: "org-dartlang-app:///packages/provider/src/listenable_provider.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 7,
        line: 251,
        file: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "disposer",
        column: 7,
        line: 252,
        file: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 253,
        file: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C123 || CT.C123,
        name: null,
        column: 5,
        line: 250,
        file: "org-dartlang-app:///packages/provider/src/listenable_provider.dart"
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 220,
        file: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialBuilder",
        column: 7,
        line: 221,
        file: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 222,
        file: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 223,
        file: null
      });
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "dispose",
        column: 7,
        line: 224,
        file: null
      });
    },
    get C134() {
      return C134 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 225,
        file: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132, C133 || CT.C133, C134 || CT.C134], widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C128 || CT.C128,
        name: null,
        column: 12,
        line: 219,
        file: "org-dartlang-app:///packages/provider/src/proxy_provider.dart"
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 7,
        line: 236,
        file: null
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "updateShouldNotify",
        column: 7,
        line: 237,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 238,
        file: null
      });
    },
    get C136() {
      return C136 = dart.constList([C137 || CT.C137, C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C136 || CT.C136,
        name: null,
        column: 12,
        line: 235,
        file: "org-dartlang-app:///packages/provider/src/proxy_provider.dart"
      });
    }
  });
  let C0;
  let C3;
  let C4;
  let C5;
  let C6;
  let C2;
  let C1;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C16;
  let C13;
  let C12;
  delegate_widget.DelegateWidget = class DelegateWidget extends framework.StatefulWidget {
    get delegate() {
      return this[delegate$];
    }
    set delegate(value) {
      super.delegate = value;
    }
    createElement() {
      return new delegate_widget._DelegateElement.new(this);
    }
    createState() {
      return new delegate_widget._DelegateWidgetState.new();
    }
  };
  (delegate_widget.DelegateWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let delegate = opts && 'delegate' in opts ? opts.delegate : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[delegate$] = delegate;
    if (!(delegate != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/delegate_widget.dart", 81, 16, "delegate != null");
    delegate_widget.DelegateWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = delegate_widget.DelegateWidget.prototype;
  dart.addTypeTests(delegate_widget.DelegateWidget);
  const delegate$ = Symbol("DelegateWidget.delegate");
  dart.setMethodSignature(delegate_widget.DelegateWidget, () => ({
    __proto__: dart.getMethods(delegate_widget.DelegateWidget.__proto__),
    createState: dart.fnType(delegate_widget._DelegateWidgetState, [])
  }));
  dart.setLibraryUri(delegate_widget.DelegateWidget, "package:provider/src/delegate_widget.dart");
  dart.setFieldSignature(delegate_widget.DelegateWidget, () => ({
    __proto__: dart.getFields(delegate_widget.DelegateWidget.__proto__),
    delegate: dart.finalFieldType(delegate_widget.StateDelegate)
  }));
  const _is_ValueDelegateWidget_default = Symbol('_is_ValueDelegateWidget_default');
  delegate_widget.ValueDelegateWidget$ = dart.generic(T => {
    let ValueStateDelegateOfT = () => (ValueStateDelegateOfT = dart.constFn(delegate_widget.ValueStateDelegate$(T)))();
    class ValueDelegateWidget extends delegate_widget.DelegateWidget {
      get delegate() {
        return ValueStateDelegateOfT().as(super.delegate);
      }
    }
    (ValueDelegateWidget.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueDelegateWidget.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueDelegateWidget.prototype;
    dart.addTypeTests(ValueDelegateWidget);
    ValueDelegateWidget.prototype[_is_ValueDelegateWidget_default] = true;
    dart.setGetterSignature(ValueDelegateWidget, () => ({
      __proto__: dart.getGetters(ValueDelegateWidget.__proto__),
      delegate: delegate_widget.ValueStateDelegate$(T)
    }));
    dart.setLibraryUri(ValueDelegateWidget, "package:provider/src/delegate_widget.dart");
    return ValueDelegateWidget;
  });
  delegate_widget.ValueDelegateWidget = delegate_widget.ValueDelegateWidget$();
  dart.addTypeTests(delegate_widget.ValueDelegateWidget, _is_ValueDelegateWidget_default);
  const _is_ValueListenableProvider_default = Symbol('_is_ValueListenableProvider_default');
  value_listenable_provider.ValueListenableProvider$ = dart.generic(T => {
    let ValueNotifierOfT = () => (ValueNotifierOfT = dart.constFn(change_notifier.ValueNotifier$(T)))();
    let BuilderStateDelegateOfValueNotifierOfT = () => (BuilderStateDelegateOfValueNotifierOfT = dart.constFn(delegate_widget.BuilderStateDelegate$(ValueNotifierOfT())))();
    let ValueListenableOfT = () => (ValueListenableOfT = dart.constFn(change_notifier.ValueListenable$(T)))();
    let SingleValueDelegateOfValueListenableOfT = () => (SingleValueDelegateOfValueListenableOfT = dart.constFn(delegate_widget.SingleValueDelegate$(ValueListenableOfT())))();
    let ValueListenableProviderOfT = () => (ValueListenableProviderOfT = dart.constFn(value_listenable_provider.ValueListenableProvider$(T)))();
    let ValueListenableBuilderOfT = () => (ValueListenableBuilderOfT = dart.constFn(value_listenable_builder.ValueListenableBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    let BuildContextAndTAndWidgetToInheritedProviderOfT = () => (BuildContextAndTAndWidgetToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [framework.BuildContext, T, framework.Widget])))();
    class ValueListenableProvider extends delegate_widget.ValueDelegateWidget$(change_notifier.ValueListenable$(T)) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      static _dispose(context, notifier) {
        notifier.dispose();
      }
      cloneWithChild(child) {
        return new (ValueListenableProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: C1 || CT.C1});
      }
      build(context) {
        return new (ValueListenableBuilderOfT()).new({valueListenable: this.delegate.value, builder: dart.fn((_, value, child) => new (InheritedProviderOfT()).new({value: value, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), BuildContextAndTAndWidgetToInheritedProviderOfT()), child: this.child, $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
      }
    }
    (ValueListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfValueNotifierOfT()).new(builder, {dispose: C0 || CT.C0}), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ValueListenableProvider.prototype;
    (ValueListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ValueListenableProvider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfValueListenableOfT()).new(value), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ValueListenableProvider.prototype;
    (ValueListenableProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      ValueListenableProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ValueListenableProvider.prototype;
    dart.addTypeTests(ValueListenableProvider);
    ValueListenableProvider.prototype[_is_ValueListenableProvider_default] = true;
    const child$ = Symbol("ValueListenableProvider.child");
    const updateShouldNotify$ = Symbol("ValueListenableProvider.updateShouldNotify");
    ValueListenableProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(ValueListenableProvider, () => ({
      __proto__: dart.getMethods(ValueListenableProvider.__proto__),
      cloneWithChild: dart.fnType(value_listenable_provider.ValueListenableProvider$(T), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(ValueListenableProvider, "package:provider/src/value_listenable_provider.dart");
    dart.setFieldSignature(ValueListenableProvider, () => ({
      __proto__: dart.getFields(ValueListenableProvider.__proto__),
      child: dart.finalFieldType(framework.Widget),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return ValueListenableProvider;
  });
  value_listenable_provider.ValueListenableProvider = value_listenable_provider.ValueListenableProvider$();
  dart.addTypeTests(value_listenable_provider.ValueListenableProvider, _is_ValueListenableProvider_default);
  let C19;
  let C20;
  let C21;
  let C18;
  let C17;
  const _is_Consumer_default = Symbol('_is_Consumer_default');
  consumer.Consumer$ = dart.generic(T => {
    let ConsumerOfT = () => (ConsumerOfT = dart.constFn(consumer.Consumer$(T)))();
    class Consumer extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(T, context), this.child);
      }
      cloneWithChild(child) {
        return new (ConsumerOfT()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C17 || CT.C17});
      }
    }
    (Consumer.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 165, 16, "builder != null");
      Consumer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer.prototype;
    dart.addTypeTests(Consumer);
    Consumer.prototype[_is_Consumer_default] = true;
    const child$ = Symbol("Consumer.child");
    const builder$ = Symbol("Consumer.builder");
    Consumer[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer, () => ({
      __proto__: dart.getMethods(Consumer.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer$(T), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer, () => ({
      __proto__: dart.getFields(Consumer.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget]))
    }));
    return Consumer;
  });
  consumer.Consumer = consumer.Consumer$();
  dart.addTypeTests(consumer.Consumer, _is_Consumer_default);
  let C24;
  let C25;
  let C26;
  let C23;
  let C22;
  const _is_Consumer2_default = Symbol('_is_Consumer2_default');
  consumer.Consumer2$ = dart.generic((A, B) => {
    let Consumer2OfA$B = () => (Consumer2OfA$B = dart.constFn(consumer.Consumer2$(A, B)))();
    class Consumer2 extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer2OfA$B()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
      }
    }
    (Consumer2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 205, 16, "builder != null");
      Consumer2.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer2.prototype;
    dart.addTypeTests(Consumer2);
    Consumer2.prototype[_is_Consumer2_default] = true;
    const child$ = Symbol("Consumer2.child");
    const builder$ = Symbol("Consumer2.builder");
    Consumer2[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer2, () => ({
      __proto__: dart.getMethods(Consumer2.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer2$(A, B), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer2, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer2, () => ({
      __proto__: dart.getFields(Consumer2.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, framework.Widget]))
    }));
    return Consumer2;
  });
  consumer.Consumer2 = consumer.Consumer2$();
  dart.addTypeTests(consumer.Consumer2, _is_Consumer2_default);
  let C29;
  let C30;
  let C31;
  let C28;
  let C27;
  const _is_Consumer3_default = Symbol('_is_Consumer3_default');
  consumer.Consumer3$ = dart.generic((A, B, C) => {
    let Consumer3OfA$B$C = () => (Consumer3OfA$B$C = dart.constFn(consumer.Consumer3$(A, B, C)))();
    class Consumer3 extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer3OfA$B$C()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C27 || CT.C27});
      }
    }
    (Consumer3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 243, 16, "builder != null");
      Consumer3.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer3.prototype;
    dart.addTypeTests(Consumer3);
    Consumer3.prototype[_is_Consumer3_default] = true;
    const child$ = Symbol("Consumer3.child");
    const builder$ = Symbol("Consumer3.builder");
    Consumer3[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer3, () => ({
      __proto__: dart.getMethods(Consumer3.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer3$(A, B, C), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer3, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer3, () => ({
      __proto__: dart.getFields(Consumer3.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, framework.Widget]))
    }));
    return Consumer3;
  });
  consumer.Consumer3 = consumer.Consumer3$();
  dart.addTypeTests(consumer.Consumer3, _is_Consumer3_default);
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  const _is_Consumer4_default = Symbol('_is_Consumer4_default');
  consumer.Consumer4$ = dart.generic((A, B, C, D) => {
    let Consumer4OfA$B$C$D = () => (Consumer4OfA$B$C$D = dart.constFn(consumer.Consumer4$(A, B, C, D)))();
    class Consumer4 extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer4OfA$B$C$D()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
      }
    }
    (Consumer4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 282, 16, "builder != null");
      Consumer4.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer4.prototype;
    dart.addTypeTests(Consumer4);
    Consumer4.prototype[_is_Consumer4_default] = true;
    const child$ = Symbol("Consumer4.child");
    const builder$ = Symbol("Consumer4.builder");
    Consumer4[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer4, () => ({
      __proto__: dart.getMethods(Consumer4.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer4$(A, B, C, D), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer4, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer4, () => ({
      __proto__: dart.getFields(Consumer4.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, framework.Widget]))
    }));
    return Consumer4;
  });
  consumer.Consumer4 = consumer.Consumer4$();
  dart.addTypeTests(consumer.Consumer4, _is_Consumer4_default);
  let C39;
  let C40;
  let C41;
  let C38;
  let C37;
  const _is_Consumer5_default = Symbol('_is_Consumer5_default');
  consumer.Consumer5$ = dart.generic((A, B, C, D, E) => {
    let Consumer5OfA$B$C$D$E = () => (Consumer5OfA$B$C$D$E = dart.constFn(consumer.Consumer5$(A, B, C, D, E)))();
    class Consumer5 extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer5OfA$B$C$D$E()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C37 || CT.C37});
      }
    }
    (Consumer5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 321, 16, "builder != null");
      Consumer5.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer5.prototype;
    dart.addTypeTests(Consumer5);
    Consumer5.prototype[_is_Consumer5_default] = true;
    const child$ = Symbol("Consumer5.child");
    const builder$ = Symbol("Consumer5.builder");
    Consumer5[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer5, () => ({
      __proto__: dart.getMethods(Consumer5.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer5$(A, B, C, D, E), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer5, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer5, () => ({
      __proto__: dart.getFields(Consumer5.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, framework.Widget]))
    }));
    return Consumer5;
  });
  consumer.Consumer5 = consumer.Consumer5$();
  dart.addTypeTests(consumer.Consumer5, _is_Consumer5_default);
  let C44;
  let C45;
  let C46;
  let C43;
  let C42;
  const _is_Consumer6_default = Symbol('_is_Consumer6_default');
  consumer.Consumer6$ = dart.generic((A, B, C, D, E, F) => {
    let Consumer6OfA$B$C$D$E$F = () => (Consumer6OfA$B$C$D$E$F = dart.constFn(consumer.Consumer6$(A, B, C, D, E, F)))();
    class Consumer6 extends framework.StatelessWidget {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context) {
        return this.builder(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context), provider$.Provider.of(F, context), this.child);
      }
      cloneWithChild(child) {
        return new (Consumer6OfA$B$C$D$E$F()).new({key: this.key, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C42 || CT.C42});
      }
    }
    (Consumer6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/consumer.dart", 362, 16, "builder != null");
      Consumer6.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Consumer6.prototype;
    dart.addTypeTests(Consumer6);
    Consumer6.prototype[_is_Consumer6_default] = true;
    const child$ = Symbol("Consumer6.child");
    const builder$ = Symbol("Consumer6.builder");
    Consumer6[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Consumer6, () => ({
      __proto__: dart.getMethods(Consumer6.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      cloneWithChild: dart.fnType(consumer.Consumer6$(A, B, C, D, E, F), [framework.Widget])
    }));
    dart.setLibraryUri(Consumer6, "package:provider/src/consumer.dart");
    dart.setFieldSignature(Consumer6, () => ({
      __proto__: dart.getFields(Consumer6.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, A, B, C, D, E, F, framework.Widget]))
    }));
    return Consumer6;
  });
  consumer.Consumer6 = consumer.Consumer6$();
  dart.addTypeTests(consumer.Consumer6, _is_Consumer6_default);
  let C49;
  let C50;
  let C51;
  let C52;
  let C48;
  let C47;
  const _is_Selector0_default = Symbol('_is_Selector0_default');
  selector.Selector0$ = dart.generic(T => {
    let _Selector0StateOfT = () => (_Selector0StateOfT = dart.constFn(selector._Selector0State$(T)))();
    let Selector0OfT = () => (Selector0OfT = dart.constFn(selector.Selector0$(T)))();
    class Selector0 extends framework.StatefulWidget {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get selector() {
        return this[selector$];
      }
      set selector(value) {
        super.selector = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      createState() {
        return new (_Selector0StateOfT()).new();
      }
      cloneWithChild(child) {
        return new (Selector0OfT()).new({key: this.key, selector: this.selector, builder: this.builder, child: child, $creationLocationd_0dea112b090073317d4: C47 || CT.C47});
      }
    }
    (Selector0.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[selector$] = selector;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 35, 16, "builder != null");
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 36, 16, "selector != null");
      Selector0.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector0.prototype;
    dart.addTypeTests(Selector0);
    Selector0.prototype[_is_Selector0_default] = true;
    const builder$ = Symbol("Selector0.builder");
    const selector$ = Symbol("Selector0.selector");
    const child$ = Symbol("Selector0.child");
    Selector0[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Selector0, () => ({
      __proto__: dart.getMethods(Selector0.__proto__),
      createState: dart.fnType(selector._Selector0State$(T), []),
      cloneWithChild: dart.fnType(selector.Selector0$(T), [framework.Widget])
    }));
    dart.setLibraryUri(Selector0, "package:provider/src/selector.dart");
    dart.setFieldSignature(Selector0, () => ({
      __proto__: dart.getFields(Selector0.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])),
      selector: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      child: dart.finalFieldType(framework.Widget)
    }));
    return Selector0;
  });
  selector.Selector0 = selector.Selector0$();
  dart.addTypeTests(selector.Selector0, _is_Selector0_default);
  const _is__Selector0State_default = Symbol('_is__Selector0State_default');
  selector._Selector0State$ = dart.generic(T => {
    let BuildContextAndTAndWidgetToWidget = () => (BuildContextAndTAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, T, framework.Widget])))();
    class _Selector0State extends framework.State$(selector.Selector0$(T)) {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = T._check(value);
      }
      build(context) {
        let selected = this.widget.selector(context);
        if (!dart.equals(this.oldWidget, this.widget) || !dart.equals(selected, this.value)) {
          this.value = selected;
          this.oldWidget = this.widget;
          this.cache = BuildContextAndTAndWidgetToWidget()._check(this.widget.builder)(context, selected, this.widget.child);
        }
        return this.cache;
      }
    }
    (_Selector0State.new = function() {
      this[value$] = null;
      this.cache = null;
      this.oldWidget = null;
      _Selector0State.__proto__.new.call(this);
      ;
    }).prototype = _Selector0State.prototype;
    dart.addTypeTests(_Selector0State);
    _Selector0State.prototype[_is__Selector0State_default] = true;
    const value$ = Symbol("_Selector0State.value");
    dart.setMethodSignature(_Selector0State, () => ({
      __proto__: dart.getMethods(_Selector0State.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_Selector0State, "package:provider/src/selector.dart");
    dart.setFieldSignature(_Selector0State, () => ({
      __proto__: dart.getFields(_Selector0State.__proto__),
      value: dart.fieldType(T),
      cache: dart.fieldType(framework.Widget),
      oldWidget: dart.fieldType(framework.Widget)
    }));
    return _Selector0State;
  });
  selector._Selector0State = selector._Selector0State$();
  dart.addTypeTests(selector._Selector0State, _is__Selector0State_default);
  const _is_Selector_default = Symbol('_is_Selector_default');
  selector.Selector$ = dart.generic((A, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector extends selector.Selector0$(S) {}
    (Selector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 135, 16, "selector != null");
      Selector.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector.prototype;
    dart.addTypeTests(Selector);
    Selector.prototype[_is_Selector_default] = true;
    dart.setLibraryUri(Selector, "package:provider/src/selector.dart");
    return Selector;
  });
  selector.Selector = selector.Selector$();
  dart.addTypeTests(selector.Selector, _is_Selector_default);
  const _is_Selector2_default = Symbol('_is_Selector2_default');
  selector.Selector2$ = dart.generic((A, B, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector2 extends selector.Selector0$(S) {}
    (Selector2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 152, 16, "selector != null");
      Selector2.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector2.prototype;
    dart.addTypeTests(Selector2);
    Selector2.prototype[_is_Selector2_default] = true;
    dart.setLibraryUri(Selector2, "package:provider/src/selector.dart");
    return Selector2;
  });
  selector.Selector2 = selector.Selector2$();
  dart.addTypeTests(selector.Selector2, _is_Selector2_default);
  const _is_Selector3_default = Symbol('_is_Selector3_default');
  selector.Selector3$ = dart.generic((A, B, C, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector3 extends selector.Selector0$(S) {}
    (Selector3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 173, 16, "selector != null");
      Selector3.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector3.prototype;
    dart.addTypeTests(Selector3);
    Selector3.prototype[_is_Selector3_default] = true;
    dart.setLibraryUri(Selector3, "package:provider/src/selector.dart");
    return Selector3;
  });
  selector.Selector3 = selector.Selector3$();
  dart.addTypeTests(selector.Selector3, _is_Selector3_default);
  const _is_Selector4_default = Symbol('_is_Selector4_default');
  selector.Selector4$ = dart.generic((A, B, C, D, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector4 extends selector.Selector0$(S) {}
    (Selector4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 195, 16, "selector != null");
      Selector4.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector4.prototype;
    dart.addTypeTests(Selector4);
    Selector4.prototype[_is_Selector4_default] = true;
    dart.setLibraryUri(Selector4, "package:provider/src/selector.dart");
    return Selector4;
  });
  selector.Selector4 = selector.Selector4$();
  dart.addTypeTests(selector.Selector4, _is_Selector4_default);
  const _is_Selector5_default = Symbol('_is_Selector5_default');
  selector.Selector5$ = dart.generic((A, B, C, D, E, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector5 extends selector.Selector0$(S) {}
    (Selector5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 218, 16, "selector != null");
      Selector5.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector5.prototype;
    dart.addTypeTests(Selector5);
    Selector5.prototype[_is_Selector5_default] = true;
    dart.setLibraryUri(Selector5, "package:provider/src/selector.dart");
    return Selector5;
  });
  selector.Selector5 = selector.Selector5$();
  dart.addTypeTests(selector.Selector5, _is_Selector5_default);
  const _is_Selector6_default = Symbol('_is_Selector6_default');
  selector.Selector6$ = dart.generic((A, B, C, D, E, F, S) => {
    let BuildContextToS = () => (BuildContextToS = dart.constFn(dart.fnType(S, [framework.BuildContext])))();
    class Selector6 extends selector.Selector0$(S) {}
    (Selector6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let selector = opts && 'selector' in opts ? opts.selector : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      if (!(selector != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/selector.dart", 242, 16, "selector != null");
      Selector6.__proto__.new.call(this, {key: key, builder: builder, selector: dart.fn(context => selector(context, provider$.Provider.of(A, context), provider$.Provider.of(B, context), provider$.Provider.of(C, context), provider$.Provider.of(D, context), provider$.Provider.of(E, context), provider$.Provider.of(F, context)), BuildContextToS()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Selector6.prototype;
    dart.addTypeTests(Selector6);
    Selector6.prototype[_is_Selector6_default] = true;
    dart.setLibraryUri(Selector6, "package:provider/src/selector.dart");
    return Selector6;
  });
  selector.Selector6 = selector.Selector6$();
  dart.addTypeTests(selector.Selector6, _is_Selector6_default);
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C54;
  let C53;
  let C63;
  let C64;
  let C65;
  let C62;
  let C61;
  let C68;
  let C69;
  let C70;
  let C67;
  let C66;
  const _is_StreamProvider_default = Symbol('_is_StreamProvider_default');
  async_provider.StreamProvider$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let BuilderStateDelegateOfStreamOfT = () => (BuilderStateDelegateOfStreamOfT = dart.constFn(delegate_widget.BuilderStateDelegate$(StreamOfT())))();
    let _StreamControllerBuilderDelegateOfT = () => (_StreamControllerBuilderDelegateOfT = dart.constFn(async_provider._StreamControllerBuilderDelegate$(T)))();
    let SingleValueDelegateOfStreamOfT = () => (SingleValueDelegateOfStreamOfT = dart.constFn(delegate_widget.SingleValueDelegate$(StreamOfT())))();
    let StreamProviderOfT = () => (StreamProviderOfT = dart.constFn(async_provider.StreamProvider$(T)))();
    let StreamBuilderOfT = () => (StreamBuilderOfT = dart.constFn(async$.StreamBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    let AsyncSnapshotOfT = () => (AsyncSnapshotOfT = dart.constFn(async$.AsyncSnapshot$(T)))();
    let BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = () => (BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [framework.BuildContext, AsyncSnapshotOfT()])))();
    class StreamProvider extends delegate_widget.ValueDelegateWidget$(async.Stream$(T)) {
      get initialData() {
        return this[initialData$];
      }
      set initialData(value) {
        super.initialData = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get catchError() {
        return this[catchError$];
      }
      set catchError(value) {
        super.catchError = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (StreamProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, initialData: this.initialData, catchError: this.catchError, child: child, $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
      }
      build(context) {
        return new (StreamBuilderOfT()).new({stream: this.delegate.value, initialData: this.initialData, builder: dart.fn((_, snapshot) => new (InheritedProviderOfT()).new({value: async_provider._snapshotToValue(T, snapshot, context, this.catchError, this), child: this.child, updateShouldNotify: this.updateShouldNotify, $creationLocationd_0dea112b090073317d4: C61 || CT.C61}), BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT()), $creationLocationd_0dea112b090073317d4: C66 || CT.C66});
      }
    }
    (StreamProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfStreamOfT()).new(builder), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.controller = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (_StreamControllerBuilderDelegateOfT()).new(builder), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      StreamProvider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfStreamOfT()).new(value), initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = StreamProvider.prototype;
    (StreamProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialData$] = initialData;
      this[catchError$] = catchError;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      StreamProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = StreamProvider.prototype;
    dart.addTypeTests(StreamProvider);
    StreamProvider.prototype[_is_StreamProvider_default] = true;
    const initialData$ = Symbol("StreamProvider.initialData");
    const child$ = Symbol("StreamProvider.child");
    const catchError$ = Symbol("StreamProvider.catchError");
    const updateShouldNotify$ = Symbol("StreamProvider.updateShouldNotify");
    StreamProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(StreamProvider, () => ({
      __proto__: dart.getMethods(StreamProvider.__proto__),
      cloneWithChild: dart.fnType(async_provider.StreamProvider$(T), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(StreamProvider, "package:provider/src/async_provider.dart");
    dart.setFieldSignature(StreamProvider, () => ({
      __proto__: dart.getFields(StreamProvider.__proto__),
      initialData: dart.finalFieldType(T),
      child: dart.finalFieldType(framework.Widget),
      catchError: dart.finalFieldType(dart.fnType(T, [framework.BuildContext, core.Object])),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return StreamProvider;
  });
  async_provider.StreamProvider = async_provider.StreamProvider$();
  dart.addTypeTests(async_provider.StreamProvider, _is_StreamProvider_default);
  const _controller = dart.privateName(async_provider, "_controller");
  const _builder$ = dart.privateName(async_provider, "_builder");
  const _context = dart.privateName(delegate_widget, "_context");
  const _setState = dart.privateName(delegate_widget, "_setState");
  delegate_widget.StateDelegate = class StateDelegate extends core.Object {
    get context() {
      return this[_context];
    }
    get setState() {
      return this[_setState];
    }
    initDelegate() {
    }
    didUpdateDelegate(old) {
      delegate_widget.StateDelegate._check(old);
    }
    dispose() {
    }
  };
  (delegate_widget.StateDelegate.new = function() {
    this[_context] = null;
    this[_setState] = null;
    ;
  }).prototype = delegate_widget.StateDelegate.prototype;
  dart.addTypeTests(delegate_widget.StateDelegate);
  dart.setMethodSignature(delegate_widget.StateDelegate, () => ({
    __proto__: dart.getMethods(delegate_widget.StateDelegate.__proto__),
    initDelegate: dart.fnType(dart.void, []),
    didUpdateDelegate: dart.fnType(dart.void, [core.Object]),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(delegate_widget.StateDelegate, () => ({
    __proto__: dart.getGetters(delegate_widget.StateDelegate.__proto__),
    context: framework.BuildContext,
    setState: dart.fnType(dart.void, [dart.fnType(dart.void, [])])
  }));
  dart.setLibraryUri(delegate_widget.StateDelegate, "package:provider/src/delegate_widget.dart");
  dart.setFieldSignature(delegate_widget.StateDelegate, () => ({
    __proto__: dart.getFields(delegate_widget.StateDelegate.__proto__),
    [_context]: dart.fieldType(framework.BuildContext),
    [_setState]: dart.fieldType(dart.fnType(dart.void, [dart.fnType(dart.void, [])]))
  }));
  const _is_ValueStateDelegate_default = Symbol('_is_ValueStateDelegate_default');
  delegate_widget.ValueStateDelegate$ = dart.generic(T => {
    class ValueStateDelegate extends delegate_widget.StateDelegate {}
    (ValueStateDelegate.new = function() {
      ValueStateDelegate.__proto__.new.call(this);
      ;
    }).prototype = ValueStateDelegate.prototype;
    dart.addTypeTests(ValueStateDelegate);
    ValueStateDelegate.prototype[_is_ValueStateDelegate_default] = true;
    dart.setLibraryUri(ValueStateDelegate, "package:provider/src/delegate_widget.dart");
    return ValueStateDelegate;
  });
  delegate_widget.ValueStateDelegate = delegate_widget.ValueStateDelegate$();
  dart.addTypeTests(delegate_widget.ValueStateDelegate, _is_ValueStateDelegate_default);
  const _is__StreamControllerBuilderDelegate_default = Symbol('_is__StreamControllerBuilderDelegate_default');
  async_provider._StreamControllerBuilderDelegate$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let _StreamControllerBuilderDelegateOfT = () => (_StreamControllerBuilderDelegateOfT = dart.constFn(async_provider._StreamControllerBuilderDelegate$(T)))();
    class _StreamControllerBuilderDelegate extends delegate_widget.ValueStateDelegate$(async.Stream$(T)) {
      get value() {
        return this[value$];
      }
      set value(value) {
        this[value$] = StreamOfT()._check(value);
      }
      initDelegate() {
        let t0;
        super.initDelegate();
        this[_controller] = this[_builder$](this.context);
        this.value = (t0 = this[_controller], t0 == null ? null : t0.stream);
      }
      didUpdateDelegate(old) {
        _StreamControllerBuilderDelegateOfT()._check(old);
        super.didUpdateDelegate(old);
        this.value = old.value;
        this[_controller] = old[_controller];
      }
      dispose() {
        let t0;
        t0 = this[_controller];
        t0 == null ? null : t0.close();
        super.dispose();
      }
    }
    (_StreamControllerBuilderDelegate.new = function(_builder) {
      this[_controller] = null;
      this[value$] = null;
      this[_builder$] = _builder;
      if (!(_builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/async_provider.dart", 179, 60, "_builder != null");
      _StreamControllerBuilderDelegate.__proto__.new.call(this);
      ;
    }).prototype = _StreamControllerBuilderDelegate.prototype;
    dart.addTypeTests(_StreamControllerBuilderDelegate);
    _StreamControllerBuilderDelegate.prototype[_is__StreamControllerBuilderDelegate_default] = true;
    const value$ = Symbol("_StreamControllerBuilderDelegate.value");
    dart.setLibraryUri(_StreamControllerBuilderDelegate, "package:provider/src/async_provider.dart");
    dart.setFieldSignature(_StreamControllerBuilderDelegate, () => ({
      __proto__: dart.getFields(_StreamControllerBuilderDelegate.__proto__),
      [_controller]: dart.fieldType(async.StreamController$(T)),
      [_builder$]: dart.finalFieldType(dart.fnType(async.StreamController$(T), [framework.BuildContext])),
      value: dart.fieldType(async.Stream$(T))
    }));
    return _StreamControllerBuilderDelegate;
  });
  async_provider._StreamControllerBuilderDelegate = async_provider._StreamControllerBuilderDelegate$();
  dart.addTypeTests(async_provider._StreamControllerBuilderDelegate, _is__StreamControllerBuilderDelegate_default);
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C72;
  let C71;
  let C81;
  let C82;
  let C83;
  let C80;
  let C79;
  let C86;
  let C87;
  let C88;
  let C85;
  let C84;
  const _is_FutureProvider_default = Symbol('_is_FutureProvider_default');
  async_provider.FutureProvider$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let BuilderStateDelegateOfFutureOfT = () => (BuilderStateDelegateOfFutureOfT = dart.constFn(delegate_widget.BuilderStateDelegate$(FutureOfT())))();
    let SingleValueDelegateOfFutureOfT = () => (SingleValueDelegateOfFutureOfT = dart.constFn(delegate_widget.SingleValueDelegate$(FutureOfT())))();
    let FutureProviderOfT = () => (FutureProviderOfT = dart.constFn(async_provider.FutureProvider$(T)))();
    let FutureBuilderOfT = () => (FutureBuilderOfT = dart.constFn(async$.FutureBuilder$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    let AsyncSnapshotOfT = () => (AsyncSnapshotOfT = dart.constFn(async$.AsyncSnapshot$(T)))();
    let BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = () => (BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT = dart.constFn(dart.fnType(InheritedProviderOfT(), [framework.BuildContext, AsyncSnapshotOfT()])))();
    class FutureProvider extends delegate_widget.ValueDelegateWidget$(async.Future$(T)) {
      get initialData() {
        return this[initialData$];
      }
      set initialData(value) {
        super.initialData = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get catchError() {
        return this[catchError$];
      }
      set catchError(value) {
        super.catchError = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (FutureProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, initialData: this.initialData, catchError: this.catchError, child: child, $creationLocationd_0dea112b090073317d4: C71 || CT.C71});
      }
      build(context) {
        return new (FutureBuilderOfT()).new({future: this.delegate.value, initialData: this.initialData, builder: dart.fn((_, snapshot) => new (InheritedProviderOfT()).new({value: async_provider._snapshotToValue(T, snapshot, context, this.catchError, this), updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), BuildContextAndAsyncSnapshotOfTToInheritedProviderOfT()), $creationLocationd_0dea112b090073317d4: C84 || CT.C84});
      }
    }
    (FutureProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      FutureProvider.__.call(this, {key: key, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, delegate: new (BuilderStateDelegateOfFutureOfT()).new(builder), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = FutureProvider.prototype;
    (FutureProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      FutureProvider.__.call(this, {key: key, initialData: initialData, catchError: catchError, updateShouldNotify: updateShouldNotify, delegate: new (SingleValueDelegateOfFutureOfT()).new(value), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = FutureProvider.prototype;
    (FutureProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let initialData = opts && 'initialData' in opts ? opts.initialData : null;
      let catchError = opts && 'catchError' in opts ? opts.catchError : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialData$] = initialData;
      this[catchError$] = catchError;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      FutureProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = FutureProvider.prototype;
    dart.addTypeTests(FutureProvider);
    FutureProvider.prototype[_is_FutureProvider_default] = true;
    const initialData$ = Symbol("FutureProvider.initialData");
    const child$ = Symbol("FutureProvider.child");
    const catchError$ = Symbol("FutureProvider.catchError");
    const updateShouldNotify$ = Symbol("FutureProvider.updateShouldNotify");
    FutureProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(FutureProvider, () => ({
      __proto__: dart.getMethods(FutureProvider.__proto__),
      cloneWithChild: dart.fnType(async_provider.FutureProvider$(T), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(FutureProvider, "package:provider/src/async_provider.dart");
    dart.setFieldSignature(FutureProvider, () => ({
      __proto__: dart.getFields(FutureProvider.__proto__),
      initialData: dart.finalFieldType(T),
      child: dart.finalFieldType(framework.Widget),
      catchError: dart.finalFieldType(dart.fnType(T, [framework.BuildContext, core.Object])),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return FutureProvider;
  });
  async_provider.FutureProvider = async_provider.FutureProvider$();
  dart.addTypeTests(async_provider.FutureProvider, _is_FutureProvider_default);
  async_provider._snapshotToValue = function _snapshotToValue(T, snapshot, context, catchError, owner) {
    let t0;
    if (dart.test(snapshot.hasError)) {
      if (catchError != null) {
        return catchError(context, snapshot.error);
      }
      dart.throw(assertions.FlutterError.new("An exception was throw by " + dart.str((t0 = owner.delegate.value, t0 == null ? null : dart.runtimeType(t0))) + " listened by\n" + dart.str(owner) + ", but no `catchError` was provided.\n\nException:\n" + dart.str(snapshot.error) + "\n"));
    }
    return snapshot.data;
  };
  provider$.SingleChildCloneableWidget = class SingleChildCloneableWidget extends core.Object {};
  (provider$.SingleChildCloneableWidget.new = function() {
    ;
  }).prototype = provider$.SingleChildCloneableWidget.prototype;
  dart.addTypeTests(provider$.SingleChildCloneableWidget);
  provider$.SingleChildCloneableWidget[dart.implements] = () => [framework.Widget];
  dart.setLibraryUri(provider$.SingleChildCloneableWidget, "package:provider/src/provider.dart");
  const _value = dart.privateName(provider$, "_value");
  const _updateShouldNotify = dart.privateName(provider$, "_updateShouldNotify");
  const _is_InheritedProvider_default = Symbol('_is_InheritedProvider_default');
  provider$.InheritedProvider$ = dart.generic(T => {
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    class InheritedProvider extends framework.InheritedWidget {
      updateShouldNotify(oldWidget) {
        InheritedProviderOfT()._check(oldWidget);
        if (this[_updateShouldNotify] != null) {
          return this[_updateShouldNotify](oldWidget[_value], this[_value]);
        }
        return !dart.equals(oldWidget[_value], this[_value]);
      }
    }
    (InheritedProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[_value] = value;
      this[_updateShouldNotify] = updateShouldNotify;
      InheritedProvider.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = InheritedProvider.prototype;
    dart.addTypeTests(InheritedProvider);
    InheritedProvider.prototype[_is_InheritedProvider_default] = true;
    dart.setMethodSignature(InheritedProvider, () => ({
      __proto__: dart.getMethods(InheritedProvider.__proto__),
      updateShouldNotify: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(InheritedProvider, "package:provider/src/provider.dart");
    dart.setFieldSignature(InheritedProvider, () => ({
      __proto__: dart.getFields(InheritedProvider.__proto__),
      [_value]: dart.finalFieldType(T),
      [_updateShouldNotify]: dart.finalFieldType(dart.fnType(core.bool, [T, T]))
    }));
    return InheritedProvider;
  });
  provider$.InheritedProvider = provider$.InheritedProvider$();
  dart.addTypeTests(provider$.InheritedProvider, _is_InheritedProvider_default);
  let C91;
  let C92;
  let C90;
  let C89;
  provider$.MultiProvider = class MultiProvider extends framework.StatelessWidget {
    get providers() {
      return this[providers$];
    }
    set providers(value) {
      super.providers = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let tree = this.child;
      for (let provider of this.providers[$reversed]) {
        tree = provider.cloneWithChild(tree);
      }
      return tree;
    }
    cloneWithChild(child) {
      return new provider$.MultiProvider.new({key: this.key, providers: this.providers, child: child, $creationLocationd_0dea112b090073317d4: C89 || CT.C89});
    }
  };
  (provider$.MultiProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$] = providers;
    this[child$] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 103, 16, "providers != null");
    provider$.MultiProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = provider$.MultiProvider.prototype;
  dart.addTypeTests(provider$.MultiProvider);
  const providers$ = Symbol("MultiProvider.providers");
  const child$ = Symbol("MultiProvider.child");
  provider$.MultiProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
  dart.setMethodSignature(provider$.MultiProvider, () => ({
    __proto__: dart.getMethods(provider$.MultiProvider.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    cloneWithChild: dart.fnType(provider$.MultiProvider, [framework.Widget])
  }));
  dart.setLibraryUri(provider$.MultiProvider, "package:provider/src/provider.dart");
  dart.setFieldSignature(provider$.MultiProvider, () => ({
    __proto__: dart.getFields(provider$.MultiProvider.__proto__),
    providers: dart.finalFieldType(core.List$(provider$.SingleChildCloneableWidget)),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C95;
  let C96;
  let C97;
  let C98;
  let C94;
  let C93;
  let C101;
  let C102;
  let C103;
  let C100;
  let C99;
  const _is_Provider_default = Symbol('_is_Provider_default');
  provider$.Provider$ = dart.generic(T => {
    let BuilderStateDelegateOfT = () => (BuilderStateDelegateOfT = dart.constFn(delegate_widget.BuilderStateDelegate$(T)))();
    let SingleValueDelegateOfT = () => (SingleValueDelegateOfT = dart.constFn(delegate_widget.SingleValueDelegate$(T)))();
    let ProviderOfT = () => (ProviderOfT = dart.constFn(provider$.Provider$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    class Provider extends delegate_widget.ValueDelegateWidget$(T) {
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      static of(T, context, opts) {
        let t0;
        let listen = opts && 'listen' in opts ? opts.listen : true;
        let type = provider$._typeOf(provider$.InheritedProvider$(T));
        let provider = dart.test(listen) ? provider$.InheritedProvider$(T).as(context.inheritFromWidgetOfExactType(type)) : provider$.InheritedProvider$(T).as((t0 = context.ancestorInheritedElementForWidgetOfExactType(type), t0 == null ? null : t0.widget));
        if (provider == null) {
          dart.throw(new provider$.ProviderNotFoundError.new(dart.wrapType(T), dart.runtimeType(context.widget)));
        }
        return provider[_value];
      }
      cloneWithChild(child) {
        return new (ProviderOfT()).__({key: this.key, delegate: this.delegate, updateShouldNotify: this.updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: C93 || CT.C93});
      }
      build(context) {
        if (!dart.test(dart.fn(() => {
          let t0;
          t0 = provider$.Provider.debugCheckInvalidValueType;
          t0 == null ? null : t0(T, this.delegate.value);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 336, 12, "() {\n      Provider.debugCheckInvalidValueType?.call<T>(delegate.value);\n      return true;\n    }()");
        return new (InheritedProviderOfT()).new({value: this.delegate.value, updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: C99 || CT.C99});
      }
    }
    (Provider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      Provider.__.call(this, {key: key, delegate: new (BuilderStateDelegateOfT()).new(builder, {dispose: dispose}), updateShouldNotify: null, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = Provider.prototype;
    (Provider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      Provider.__.call(this, {key: key, delegate: new (SingleValueDelegateOfT()).new(value), updateShouldNotify: updateShouldNotify, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = Provider.prototype;
    (Provider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      Provider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = Provider.prototype;
    dart.addTypeTests(Provider);
    Provider.prototype[_is_Provider_default] = true;
    const updateShouldNotify$ = Symbol("Provider.updateShouldNotify");
    const child$ = Symbol("Provider.child");
    Provider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(Provider, () => ({
      __proto__: dart.getMethods(Provider.__proto__),
      cloneWithChild: dart.fnType(provider$.Provider$(T), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(Provider, "package:provider/src/provider.dart");
    dart.setFieldSignature(Provider, () => ({
      __proto__: dart.getFields(Provider.__proto__),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [T, T])),
      child: dart.finalFieldType(framework.Widget)
    }));
    return Provider;
  });
  provider$.Provider = provider$.Provider$();
  dart.defineLazy(provider$.Provider, {
    /*provider$.Provider.debugCheckInvalidValueType*/get debugCheckInvalidValueType() {
      return dart.fn((T, value) => {
        if (!dart.test(dart.fn(() => {
          if (change_notifier.Listenable.is(value) || async.Stream.is(value)) {
            dart.throw(assertions.FlutterError.new("Tried to use Provider with a subtype of Listenable/Stream (" + dart.str(dart.wrapType(T)) + ").\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen " + dart.str(dart.wrapType(T)) + " is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n"));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/provider.dart", 283, 12, "() {\n      if (value is Listenable || value is Stream) {\n        throw FlutterError('''\nTried to use Provider with a subtype of Listenable/Stream ($T).\n\nThis is likely a mistake, as Provider will not automatically update dependents\nwhen $T is updated. Instead, consider changing Provider for more specific\nimplementation that handles the update mechanism, such as:\n\n- ListenableProvider\n- ChangeNotifierProvider\n- ValueListenableProvider\n- StreamProvider\n\nAlternatively, if you are making your own provider, consider using InheritedProvider.\n\nIf you think that this is not an error, you can disable this check by setting\nProvider.debugCheckInvalidValueType to `null` in your main file:\n\n```\nvoid main() {\n  Provider.debugCheckInvalidValueType = null;\n\n  runApp(MyApp());\n}\n```\n''');\n      }\n      return true;\n    }()");
      }, TToNull());
    },
    set debugCheckInvalidValueType(_) {}
  });
  dart.addTypeTests(provider$.Provider, _is_Provider_default);
  provider$.ProviderNotFoundError = class ProviderNotFoundError extends core.Error {
    get valueType() {
      return this[valueType$];
    }
    set valueType(value) {
      super.valueType = value;
    }
    get widgetType() {
      return this[widgetType$];
    }
    set widgetType(value) {
      super.widgetType = value;
    }
    toString() {
      return "Error: Could not find the correct Provider<" + dart.str(this.valueType) + "> above this " + dart.str(this.widgetType) + " Widget\n\nTo fix, please:\n\n  * Ensure the Provider<" + dart.str(this.valueType) + "> is an ancestor to this " + dart.str(this.widgetType) + " Widget\n  * Provide types to Provider<" + dart.str(this.valueType) + ">\n  * Provide types to Consumer<" + dart.str(this.valueType) + ">\n  * Provide types to Provider.of<" + dart.str(this.valueType) + ">()\n  * Always use package imports. Ex: `import 'package:my_app/my_code.dart';\n  * Ensure the correct `context` is being used.\n\nIf none of these solutions work, please file a bug at:\nhttps://github.com/rrousselGit/provider/issues\n";
    }
  };
  (provider$.ProviderNotFoundError.new = function(valueType, widgetType) {
    this[valueType$] = valueType;
    this[widgetType$] = widgetType;
    provider$.ProviderNotFoundError.__proto__.new.call(this);
    ;
  }).prototype = provider$.ProviderNotFoundError.prototype;
  dart.addTypeTests(provider$.ProviderNotFoundError);
  const valueType$ = Symbol("ProviderNotFoundError.valueType");
  const widgetType$ = Symbol("ProviderNotFoundError.widgetType");
  dart.setLibraryUri(provider$.ProviderNotFoundError, "package:provider/src/provider.dart");
  dart.setFieldSignature(provider$.ProviderNotFoundError, () => ({
    __proto__: dart.getFields(provider$.ProviderNotFoundError.__proto__),
    valueType: dart.finalFieldType(core.Type),
    widgetType: dart.finalFieldType(core.Type)
  }));
  dart.defineExtensionMethods(provider$.ProviderNotFoundError, ['toString']);
  provider$._typeOf = function _typeOf(T) {
    return dart.wrapType(T);
  };
  let C104;
  let C107;
  let C108;
  let C109;
  let C106;
  let C105;
  let C112;
  let C113;
  let C114;
  let C111;
  let C110;
  const _is_ListenableProvider_default = Symbol('_is_ListenableProvider_default');
  listenable_provider.ListenableProvider$ = dart.generic(T => {
    let _BuilderListenableDelegateOfT = () => (_BuilderListenableDelegateOfT = dart.constFn(listenable_provider._BuilderListenableDelegate$(T)))();
    let _ValueListenableDelegateOfT = () => (_ValueListenableDelegateOfT = dart.constFn(listenable_provider._ValueListenableDelegate$(T)))();
    let ListenableProviderOfT = () => (ListenableProviderOfT = dart.constFn(listenable_provider.ListenableProvider$(T)))();
    let _ListenableDelegateMixinOfT = () => (_ListenableDelegateMixinOfT = dart.constFn(listenable_provider._ListenableDelegateMixin$(T)))();
    let InheritedProviderOfT = () => (InheritedProviderOfT = dart.constFn(provider$.InheritedProvider$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class ListenableProvider extends delegate_widget.ValueDelegateWidget$(T) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      cloneWithChild(child) {
        return new (ListenableProviderOfT()).__({key: this.key, delegate: _ListenableDelegateMixinOfT().as(this.delegate), child: child, $creationLocationd_0dea112b090073317d4: C105 || CT.C105});
      }
      build(context) {
        let delegate = _ListenableDelegateMixinOfT().as(this.delegate);
        return new (InheritedProviderOfT()).new({value: delegate.value, updateShouldNotify: TAndTTobool()._check(delegate.updateShouldNotify), child: this.child, $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
      }
    }
    (ListenableProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__.call(this, {key: key, delegate: new (_BuilderListenableDelegateOfT()).new(builder, {dispose: dispose}), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__.call(this, {key: key, delegate: new (_ValueListenableDelegateOfT()).new(value), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider._valueDispose = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let disposer = opts && 'disposer' in opts ? opts.disposer : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProvider.__.call(this, {key: key, delegate: new (_ValueListenableDelegateOfT()).new(value, disposer), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    }).prototype = ListenableProvider.prototype;
    (ListenableProvider.__ = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let delegate = opts && 'delegate' in opts ? opts.delegate : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[child$] = child;
      ListenableProvider.__proto__.new.call(this, {key: key, delegate: delegate, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProvider.prototype;
    dart.addTypeTests(ListenableProvider);
    ListenableProvider.prototype[_is_ListenableProvider_default] = true;
    const child$ = Symbol("ListenableProvider.child");
    ListenableProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(ListenableProvider, () => ({
      __proto__: dart.getMethods(ListenableProvider.__proto__),
      cloneWithChild: dart.fnType(listenable_provider.ListenableProvider$(T), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(ListenableProvider, "package:provider/src/listenable_provider.dart");
    dart.setFieldSignature(ListenableProvider, () => ({
      __proto__: dart.getFields(ListenableProvider.__proto__),
      child: dart.finalFieldType(framework.Widget)
    }));
    return ListenableProvider;
  });
  listenable_provider.ListenableProvider = listenable_provider.ListenableProvider$();
  dart.addTypeTests(listenable_provider.ListenableProvider, _is_ListenableProvider_default);
  const _is_ChangeNotifierProvider_default = Symbol('_is_ChangeNotifierProvider_default');
  change_notifier_provider.ChangeNotifierProvider$ = dart.generic(T => {
    class ChangeNotifierProvider extends listenable_provider.ListenableProvider$(T) {
      static _disposer(context, notifier) {
        let t0;
        t0 = notifier;
        return t0 == null ? null : t0.dispose();
      }
    }
    (ChangeNotifierProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    (ChangeNotifierProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProvider.prototype;
    dart.addTypeTests(ChangeNotifierProvider);
    ChangeNotifierProvider.prototype[_is_ChangeNotifierProvider_default] = true;
    ChangeNotifierProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setLibraryUri(ChangeNotifierProvider, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProvider;
  });
  change_notifier_provider.ChangeNotifierProvider = change_notifier_provider.ChangeNotifierProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProvider, _is_ChangeNotifierProvider_default);
  let C117;
  let C118;
  let C119;
  let C120;
  let C121;
  let C116;
  let C115;
  let C124;
  let C125;
  let C126;
  let C123;
  let C122;
  proxy_provider.ProxyProviderWidget = class ProxyProviderWidget extends framework.StatefulWidget {
    createElement() {
      return new proxy_provider.ProxyProviderElement.new(this);
    }
  };
  (proxy_provider.ProxyProviderWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    proxy_provider.ProxyProviderWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = proxy_provider.ProxyProviderWidget.prototype;
  dart.addTypeTests(proxy_provider.ProxyProviderWidget);
  dart.setMethodSignature(proxy_provider.ProxyProviderWidget, () => ({
    __proto__: dart.getMethods(proxy_provider.ProxyProviderWidget.__proto__),
    createElement: dart.fnType(proxy_provider.ProxyProviderElement, [])
  }));
  dart.setLibraryUri(proxy_provider.ProxyProviderWidget, "package:provider/src/proxy_provider.dart");
  const _is_ProxyProviderBase_default = Symbol('_is_ProxyProviderBase_default');
  proxy_provider.ProxyProviderBase$ = dart.generic(R => {
    let _ProxyProviderStateOfR = () => (_ProxyProviderStateOfR = dart.constFn(proxy_provider._ProxyProviderState$(R)))();
    class ProxyProviderBase extends proxy_provider.ProxyProviderWidget {
      get initialBuilder() {
        return this[initialBuilder$];
      }
      set initialBuilder(value) {
        super.initialBuilder = value;
      }
      get dispose() {
        return this[dispose$];
      }
      set dispose(value) {
        super.dispose = value;
      }
      createState() {
        return new (_ProxyProviderStateOfR()).new();
      }
    }
    (ProxyProviderBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[initialBuilder$] = initialBuilder;
      this[dispose$] = dispose;
      ProxyProviderBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProviderBase.prototype;
    dart.addTypeTests(ProxyProviderBase);
    ProxyProviderBase.prototype[_is_ProxyProviderBase_default] = true;
    const initialBuilder$ = Symbol("ProxyProviderBase.initialBuilder");
    const dispose$ = Symbol("ProxyProviderBase.dispose");
    dart.setMethodSignature(ProxyProviderBase, () => ({
      __proto__: dart.getMethods(ProxyProviderBase.__proto__),
      createState: dart.fnType(proxy_provider._ProxyProviderState$(R), [])
    }));
    dart.setLibraryUri(ProxyProviderBase, "package:provider/src/proxy_provider.dart");
    dart.setFieldSignature(ProxyProviderBase, () => ({
      __proto__: dart.getFields(ProxyProviderBase.__proto__),
      initialBuilder: dart.finalFieldType(dart.fnType(R, [framework.BuildContext])),
      dispose: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, R]))
    }));
    return ProxyProviderBase;
  });
  proxy_provider.ProxyProviderBase = proxy_provider.ProxyProviderBase$();
  dart.addTypeTests(proxy_provider.ProxyProviderBase, _is_ProxyProviderBase_default);
  const _is__NumericProxyProvider_default = Symbol('_is__NumericProxyProvider_default');
  listenable_provider._NumericProxyProvider$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let _NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = () => (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = dart.constFn(listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R)))();
    let ListenableProviderOfR = () => (ListenableProviderOfR = dart.constFn(listenable_provider.ListenableProvider$(R)))();
    class _NumericProxyProvider extends proxy_provider.ProxyProviderBase$(R) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      cloneWithChild(child) {
        return new (_NumericProxyProviderOfT$T2$T3$T4$T5$T6$R()).new({key: this.key, initialBuilder: this.initialBuilder, builder: this.builder, dispose: this.dispose, child: child, $creationLocationd_0dea112b090073317d4: C115 || CT.C115});
      }
      build(context, value) {
        R._check(value);
        return new (ListenableProviderOfR())._valueDispose({value: value, disposer: this.dispose, child: this.child, $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
      }
      didChangeDependencies(context, previous) {
        R._check(previous);
        let arguments$ = [context, provider$.Provider.of(T, context)];
        if (!dart.wrapType(T2)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T2, context));
        if (!dart.wrapType(T3)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T3, context));
        if (!dart.wrapType(T4)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T4, context));
        if (!dart.wrapType(T5)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T5, context));
        if (!dart.wrapType(T6)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T6, context));
        arguments$[$add](previous);
        return R.as(core.Function.apply(this.builder, arguments$));
      }
    }
    (_NumericProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 221, 16, "builder != null");
      _NumericProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, dispose: dispose, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _NumericProxyProvider.prototype;
    dart.addTypeTests(_NumericProxyProvider);
    _NumericProxyProvider.prototype[_is__NumericProxyProvider_default] = true;
    const child$ = Symbol("_NumericProxyProvider.child");
    const builder$ = Symbol("_NumericProxyProvider.builder");
    _NumericProxyProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getMethods(_NumericProxyProvider.__proto__),
      cloneWithChild: dart.fnType(listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext, core.Object]),
      didChangeDependencies: dart.fnType(R, [framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(_NumericProxyProvider, "package:provider/src/listenable_provider.dart");
    dart.setFieldSignature(_NumericProxyProvider, () => ({
      __proto__: dart.getFields(_NumericProxyProvider.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(core.Function)
    }));
    return _NumericProxyProvider;
  });
  listenable_provider._NumericProxyProvider = listenable_provider._NumericProxyProvider$();
  dart.addTypeTests(listenable_provider._NumericProxyProvider, _is__NumericProxyProvider_default);
  proxy_provider.Void = class Void extends core.Object {};
  (proxy_provider.Void.new = function() {
    ;
  }).prototype = proxy_provider.Void.prototype;
  dart.addTypeTests(proxy_provider.Void);
  dart.setLibraryUri(proxy_provider.Void, "package:provider/src/proxy_provider.dart");
  const _is_ListenableProxyProvider_default = Symbol('_is_ListenableProxyProvider_default');
  listenable_provider.ListenableProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndTAndRToR = () => (BuildContextAndTAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, R])))();
    class ListenableProxyProvider extends listenable_provider._NumericProxyProvider$(T, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndRToR().as(super.builder);
      }
    }
    (ListenableProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider.prototype;
    dart.addTypeTests(ListenableProxyProvider);
    ListenableProxyProvider.prototype[_is_ListenableProxyProvider_default] = true;
    dart.setGetterSignature(ListenableProxyProvider, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider;
  });
  listenable_provider.ListenableProxyProvider = listenable_provider.ListenableProxyProvider$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider, _is_ListenableProxyProvider_default);
  const _is_ChangeNotifierProxyProvider_default = Symbol('_is_ChangeNotifierProxyProvider_default');
  change_notifier_provider.ChangeNotifierProxyProvider$ = dart.generic((T, R) => {
    class ChangeNotifierProxyProvider extends listenable_provider.ListenableProxyProvider$(T, R) {}
    (ChangeNotifierProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider);
    ChangeNotifierProxyProvider.prototype[_is_ChangeNotifierProxyProvider_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider;
  });
  change_notifier_provider.ChangeNotifierProxyProvider = change_notifier_provider.ChangeNotifierProxyProvider$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider, _is_ChangeNotifierProxyProvider_default);
  const _is_ListenableProxyProvider2_default = Symbol('_is_ListenableProxyProvider2_default');
  listenable_provider.ListenableProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, R])))();
    class ListenableProxyProvider2 extends listenable_provider._NumericProxyProvider$(T, T2, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider2.prototype;
    dart.addTypeTests(ListenableProxyProvider2);
    ListenableProxyProvider2.prototype[_is_ListenableProxyProvider2_default] = true;
    dart.setGetterSignature(ListenableProxyProvider2, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider2.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider2, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider2;
  });
  listenable_provider.ListenableProxyProvider2 = listenable_provider.ListenableProxyProvider2$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider2, _is_ListenableProxyProvider2_default);
  const _is_ChangeNotifierProxyProvider2_default = Symbol('_is_ChangeNotifierProxyProvider2_default');
  change_notifier_provider.ChangeNotifierProxyProvider2$ = dart.generic((T, T2, R) => {
    class ChangeNotifierProxyProvider2 extends listenable_provider.ListenableProxyProvider2$(T, T2, R) {}
    (ChangeNotifierProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider2.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider2);
    ChangeNotifierProxyProvider2.prototype[_is_ChangeNotifierProxyProvider2_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider2, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider2;
  });
  change_notifier_provider.ChangeNotifierProxyProvider2 = change_notifier_provider.ChangeNotifierProxyProvider2$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider2, _is_ChangeNotifierProxyProvider2_default);
  const _is_ListenableProxyProvider3_default = Symbol('_is_ListenableProxyProvider3_default');
  listenable_provider.ListenableProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, R])))();
    class ListenableProxyProvider3 extends listenable_provider._NumericProxyProvider$(T, T2, T3, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider3.prototype;
    dart.addTypeTests(ListenableProxyProvider3);
    ListenableProxyProvider3.prototype[_is_ListenableProxyProvider3_default] = true;
    dart.setGetterSignature(ListenableProxyProvider3, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider3.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider3, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider3;
  });
  listenable_provider.ListenableProxyProvider3 = listenable_provider.ListenableProxyProvider3$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider3, _is_ListenableProxyProvider3_default);
  const _is_ChangeNotifierProxyProvider3_default = Symbol('_is_ChangeNotifierProxyProvider3_default');
  change_notifier_provider.ChangeNotifierProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    class ChangeNotifierProxyProvider3 extends listenable_provider.ListenableProxyProvider3$(T, T2, T3, R) {}
    (ChangeNotifierProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider3.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider3);
    ChangeNotifierProxyProvider3.prototype[_is_ChangeNotifierProxyProvider3_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider3, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider3;
  });
  change_notifier_provider.ChangeNotifierProxyProvider3 = change_notifier_provider.ChangeNotifierProxyProvider3$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider3, _is_ChangeNotifierProxyProvider3_default);
  const _is_ListenableProxyProvider4_default = Symbol('_is_ListenableProxyProvider4_default');
  listenable_provider.ListenableProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, R])))();
    class ListenableProxyProvider4 extends listenable_provider._NumericProxyProvider$(T, T2, T3, T4, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider4.prototype;
    dart.addTypeTests(ListenableProxyProvider4);
    ListenableProxyProvider4.prototype[_is_ListenableProxyProvider4_default] = true;
    dart.setGetterSignature(ListenableProxyProvider4, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider4.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider4, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider4;
  });
  listenable_provider.ListenableProxyProvider4 = listenable_provider.ListenableProxyProvider4$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider4, _is_ListenableProxyProvider4_default);
  const _is_ChangeNotifierProxyProvider4_default = Symbol('_is_ChangeNotifierProxyProvider4_default');
  change_notifier_provider.ChangeNotifierProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    class ChangeNotifierProxyProvider4 extends listenable_provider.ListenableProxyProvider4$(T, T2, T3, T4, R) {}
    (ChangeNotifierProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider4.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider4);
    ChangeNotifierProxyProvider4.prototype[_is_ChangeNotifierProxyProvider4_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider4, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider4;
  });
  change_notifier_provider.ChangeNotifierProxyProvider4 = change_notifier_provider.ChangeNotifierProxyProvider4$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider4, _is_ChangeNotifierProxyProvider4_default);
  const _is_ListenableProxyProvider5_default = Symbol('_is_ListenableProxyProvider5_default');
  listenable_provider.ListenableProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, R])))();
    class ListenableProxyProvider5 extends listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider5.prototype;
    dart.addTypeTests(ListenableProxyProvider5);
    ListenableProxyProvider5.prototype[_is_ListenableProxyProvider5_default] = true;
    dart.setGetterSignature(ListenableProxyProvider5, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider5.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider5, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider5;
  });
  listenable_provider.ListenableProxyProvider5 = listenable_provider.ListenableProxyProvider5$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider5, _is_ListenableProxyProvider5_default);
  const _is_ChangeNotifierProxyProvider5_default = Symbol('_is_ChangeNotifierProxyProvider5_default');
  change_notifier_provider.ChangeNotifierProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    class ChangeNotifierProxyProvider5 extends listenable_provider.ListenableProxyProvider5$(T, T2, T3, T4, T5, R) {}
    (ChangeNotifierProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider5.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider5);
    ChangeNotifierProxyProvider5.prototype[_is_ChangeNotifierProxyProvider5_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider5, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider5;
  });
  change_notifier_provider.ChangeNotifierProxyProvider5 = change_notifier_provider.ChangeNotifierProxyProvider5$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider5, _is_ChangeNotifierProxyProvider5_default);
  const _is_ListenableProxyProvider6_default = Symbol('_is_ListenableProxyProvider6_default');
  listenable_provider.ListenableProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, T6, R])))();
    class ListenableProxyProvider6 extends listenable_provider._NumericProxyProvider$(T, T2, T3, T4, T5, T6, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ListenableProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ListenableProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ListenableProxyProvider6.prototype;
    dart.addTypeTests(ListenableProxyProvider6);
    ListenableProxyProvider6.prototype[_is_ListenableProxyProvider6_default] = true;
    dart.setGetterSignature(ListenableProxyProvider6, () => ({
      __proto__: dart.getGetters(ListenableProxyProvider6.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, T6, R])
    }));
    dart.setLibraryUri(ListenableProxyProvider6, "package:provider/src/listenable_provider.dart");
    return ListenableProxyProvider6;
  });
  listenable_provider.ListenableProxyProvider6 = listenable_provider.ListenableProxyProvider6$();
  dart.addTypeTests(listenable_provider.ListenableProxyProvider6, _is_ListenableProxyProvider6_default);
  const _is_ChangeNotifierProxyProvider6_default = Symbol('_is_ChangeNotifierProxyProvider6_default');
  change_notifier_provider.ChangeNotifierProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    class ChangeNotifierProxyProvider6 extends listenable_provider.ListenableProxyProvider6$(T, T2, T3, T4, T5, T6, R) {}
    (ChangeNotifierProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ChangeNotifierProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, dispose: C104 || CT.C104, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ChangeNotifierProxyProvider6.prototype;
    dart.addTypeTests(ChangeNotifierProxyProvider6);
    ChangeNotifierProxyProvider6.prototype[_is_ChangeNotifierProxyProvider6_default] = true;
    dart.setLibraryUri(ChangeNotifierProxyProvider6, "package:provider/src/change_notifier_provider.dart");
    return ChangeNotifierProxyProvider6;
  });
  change_notifier_provider.ChangeNotifierProxyProvider6 = change_notifier_provider.ChangeNotifierProxyProvider6$();
  dart.addTypeTests(change_notifier_provider.ChangeNotifierProxyProvider6, _is_ChangeNotifierProxyProvider6_default);
  const _is_ProxyProviderState_default = Symbol('_is_ProxyProviderState_default');
  proxy_provider.ProxyProviderState$ = dart.generic(T => {
    class ProxyProviderState extends framework.State$(T) {
      didUpdateDependencies() {
      }
    }
    (ProxyProviderState.new = function() {
      ProxyProviderState.__proto__.new.call(this);
      ;
    }).prototype = ProxyProviderState.prototype;
    dart.addTypeTests(ProxyProviderState);
    ProxyProviderState.prototype[_is_ProxyProviderState_default] = true;
    dart.setMethodSignature(ProxyProviderState, () => ({
      __proto__: dart.getMethods(ProxyProviderState.__proto__),
      didUpdateDependencies: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(ProxyProviderState, "package:provider/src/proxy_provider.dart");
    return ProxyProviderState;
  });
  proxy_provider.ProxyProviderState = proxy_provider.ProxyProviderState$();
  dart.addTypeTests(proxy_provider.ProxyProviderState, _is_ProxyProviderState_default);
  const _didChangeDependencies = dart.privateName(proxy_provider, "_didChangeDependencies");
  proxy_provider.ProxyProviderElement = class ProxyProviderElement extends framework.StatefulElement {
    get widget() {
      return proxy_provider.ProxyProviderWidget.as(super.widget);
    }
    get state() {
      return ProxyProviderStateOfProxyProviderWidget().as(super.state);
    }
    didChangeDependencies() {
      this[_didChangeDependencies] = true;
      super.didChangeDependencies();
    }
    build() {
      if (dart.test(this[_didChangeDependencies])) {
        this[_didChangeDependencies] = false;
        this.state.didUpdateDependencies();
      }
      return super.build();
    }
  };
  (proxy_provider.ProxyProviderElement.new = function(widget) {
    this[_didChangeDependencies] = true;
    proxy_provider.ProxyProviderElement.__proto__.new.call(this, widget);
    ;
  }).prototype = proxy_provider.ProxyProviderElement.prototype;
  dart.addTypeTests(proxy_provider.ProxyProviderElement);
  dart.setGetterSignature(proxy_provider.ProxyProviderElement, () => ({
    __proto__: dart.getGetters(proxy_provider.ProxyProviderElement.__proto__),
    widget: proxy_provider.ProxyProviderWidget,
    state: proxy_provider.ProxyProviderState$(proxy_provider.ProxyProviderWidget)
  }));
  dart.setLibraryUri(proxy_provider.ProxyProviderElement, "package:provider/src/proxy_provider.dart");
  dart.setFieldSignature(proxy_provider.ProxyProviderElement, () => ({
    __proto__: dart.getFields(proxy_provider.ProxyProviderElement.__proto__),
    [_didChangeDependencies]: dart.fieldType(core.bool)
  }));
  const _value$ = dart.privateName(proxy_provider, "_value");
  const _is__ProxyProviderState_default = Symbol('_is__ProxyProviderState_default');
  proxy_provider._ProxyProviderState$ = dart.generic(R => {
    let BuildContextAndRTovoid = () => (BuildContextAndRTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, R])))();
    class _ProxyProviderState extends proxy_provider.ProxyProviderState$(proxy_provider.ProxyProviderBase$(R)) {
      initState() {
        let t0;
        super.initState();
        this[_value$] = (t0 = this.widget.initialBuilder, t0 == null ? null : t0(this.context));
      }
      didUpdateDependencies() {
        super.didUpdateDependencies();
        this[_value$] = this.widget.didChangeDependencies(this.context, this[_value$]);
      }
      build(context) {
        return this.widget.build(context, this[_value$]);
      }
      dispose() {
        if (BuildContextAndRTovoid()._check(this.widget.dispose) != null) {
          BuildContextAndRTovoid()._check(this.widget.dispose)(this.context, this[_value$]);
        }
        super.dispose();
      }
    }
    (_ProxyProviderState.new = function() {
      this[_value$] = null;
      _ProxyProviderState.__proto__.new.call(this);
      ;
    }).prototype = _ProxyProviderState.prototype;
    dart.addTypeTests(_ProxyProviderState);
    _ProxyProviderState.prototype[_is__ProxyProviderState_default] = true;
    dart.setMethodSignature(_ProxyProviderState, () => ({
      __proto__: dart.getMethods(_ProxyProviderState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(_ProxyProviderState, "package:provider/src/proxy_provider.dart");
    dart.setFieldSignature(_ProxyProviderState, () => ({
      __proto__: dart.getFields(_ProxyProviderState.__proto__),
      [_value$]: dart.fieldType(R)
    }));
    return _ProxyProviderState;
  });
  proxy_provider._ProxyProviderState = proxy_provider._ProxyProviderState$();
  dart.addTypeTests(proxy_provider._ProxyProviderState, _is__ProxyProviderState_default);
  let C129;
  let C130;
  let C131;
  let C132;
  let C133;
  let C134;
  let C128;
  let C127;
  let C137;
  let C138;
  let C139;
  let C136;
  let C135;
  const _is_NumericProxyProvider_default = Symbol('_is_NumericProxyProvider_default');
  proxy_provider.NumericProxyProvider$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = () => (NumericProxyProviderOfT$T2$T3$T4$T5$T6$R = dart.constFn(proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R)))();
    let InheritedProviderOfR = () => (InheritedProviderOfR = dart.constFn(provider$.InheritedProvider$(R)))();
    class NumericProxyProvider extends proxy_provider.ProxyProviderBase$(R) {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get updateShouldNotify() {
        return this[updateShouldNotify$];
      }
      set updateShouldNotify(value) {
        super.updateShouldNotify = value;
      }
      cloneWithChild(child) {
        return new (NumericProxyProviderOfT$T2$T3$T4$T5$T6$R()).new({key: this.key, initialBuilder: this.initialBuilder, builder: this.builder, updateShouldNotify: this.updateShouldNotify, dispose: this.dispose, child: child, $creationLocationd_0dea112b090073317d4: C127 || CT.C127});
      }
      build(context, value) {
        R._check(value);
        if (!dart.test(dart.fn(() => {
          let t0;
          t0 = provider$.Provider.debugCheckInvalidValueType;
          t0 == null ? null : t0(R, value);
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 231, 12, "() {\n      Provider.debugCheckInvalidValueType?.call(value);\n      return true;\n    }()");
        return new (InheritedProviderOfR()).new({value: value, updateShouldNotify: this.updateShouldNotify, child: this.child, $creationLocationd_0dea112b090073317d4: C135 || CT.C135});
      }
      didChangeDependencies(context, previous) {
        R._check(previous);
        let arguments$ = [context, provider$.Provider.of(T, context)];
        if (!dart.wrapType(T2)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T2, context));
        if (!dart.wrapType(T3)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T3, context));
        if (!dart.wrapType(T4)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T4, context));
        if (!dart.wrapType(T5)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T5, context));
        if (!dart.wrapType(T6)[$_equals](dart.wrapType(proxy_provider.Void))) arguments$[$add](provider$.Provider.of(T6, context));
        arguments$[$add](previous);
        return R.as(core.Function.apply(this.builder, arguments$));
      }
    }
    (NumericProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      this[updateShouldNotify$] = updateShouldNotify;
      this[child$] = child;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/proxy_provider.dart", 189, 16, "builder != null");
      NumericProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, dispose: dispose, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = NumericProxyProvider.prototype;
    dart.addTypeTests(NumericProxyProvider);
    NumericProxyProvider.prototype[_is_NumericProxyProvider_default] = true;
    const child$ = Symbol("NumericProxyProvider.child");
    const builder$ = Symbol("NumericProxyProvider.builder");
    const updateShouldNotify$ = Symbol("NumericProxyProvider.updateShouldNotify");
    NumericProxyProvider[dart.implements] = () => [provider$.SingleChildCloneableWidget];
    dart.setMethodSignature(NumericProxyProvider, () => ({
      __proto__: dart.getMethods(NumericProxyProvider.__proto__),
      cloneWithChild: dart.fnType(proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext, core.Object]),
      didChangeDependencies: dart.fnType(R, [framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(NumericProxyProvider, "package:provider/src/proxy_provider.dart");
    dart.setFieldSignature(NumericProxyProvider, () => ({
      __proto__: dart.getFields(NumericProxyProvider.__proto__),
      child: dart.finalFieldType(framework.Widget),
      builder: dart.finalFieldType(core.Function),
      updateShouldNotify: dart.finalFieldType(dart.fnType(core.bool, [R, R]))
    }));
    return NumericProxyProvider;
  });
  proxy_provider.NumericProxyProvider = proxy_provider.NumericProxyProvider$();
  dart.addTypeTests(proxy_provider.NumericProxyProvider, _is_NumericProxyProvider_default);
  const _is_ProxyProvider_default = Symbol('_is_ProxyProvider_default');
  proxy_provider.ProxyProvider$ = dart.generic((T, R) => {
    let BuildContextAndTAndRToR = () => (BuildContextAndTAndRToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, R])))();
    class ProxyProvider extends proxy_provider.NumericProxyProvider$(T, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndRToR().as(super.builder);
      }
    }
    (ProxyProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider.prototype;
    dart.addTypeTests(ProxyProvider);
    ProxyProvider.prototype[_is_ProxyProvider_default] = true;
    dart.setGetterSignature(ProxyProvider, () => ({
      __proto__: dart.getGetters(ProxyProvider.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, R])
    }));
    dart.setLibraryUri(ProxyProvider, "package:provider/src/proxy_provider.dart");
    return ProxyProvider;
  });
  proxy_provider.ProxyProvider = proxy_provider.ProxyProvider$();
  dart.addTypeTests(proxy_provider.ProxyProvider, _is_ProxyProvider_default);
  const _is_ProxyProvider2_default = Symbol('_is_ProxyProvider2_default');
  proxy_provider.ProxyProvider2$ = dart.generic((T, T2, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, R])))();
    class ProxyProvider2 extends proxy_provider.NumericProxyProvider$(T, T2, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider2.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider2.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider2.prototype;
    dart.addTypeTests(ProxyProvider2);
    ProxyProvider2.prototype[_is_ProxyProvider2_default] = true;
    dart.setGetterSignature(ProxyProvider2, () => ({
      __proto__: dart.getGetters(ProxyProvider2.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, R])
    }));
    dart.setLibraryUri(ProxyProvider2, "package:provider/src/proxy_provider.dart");
    return ProxyProvider2;
  });
  proxy_provider.ProxyProvider2 = proxy_provider.ProxyProvider2$();
  dart.addTypeTests(proxy_provider.ProxyProvider2, _is_ProxyProvider2_default);
  const _is_ProxyProvider3_default = Symbol('_is_ProxyProvider3_default');
  proxy_provider.ProxyProvider3$ = dart.generic((T, T2, T3, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, R])))();
    class ProxyProvider3 extends proxy_provider.NumericProxyProvider$(T, T2, T3, proxy_provider.Void, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider3.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider3.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider3.prototype;
    dart.addTypeTests(ProxyProvider3);
    ProxyProvider3.prototype[_is_ProxyProvider3_default] = true;
    dart.setGetterSignature(ProxyProvider3, () => ({
      __proto__: dart.getGetters(ProxyProvider3.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, R])
    }));
    dart.setLibraryUri(ProxyProvider3, "package:provider/src/proxy_provider.dart");
    return ProxyProvider3;
  });
  proxy_provider.ProxyProvider3 = proxy_provider.ProxyProvider3$();
  dart.addTypeTests(proxy_provider.ProxyProvider3, _is_ProxyProvider3_default);
  const _is_ProxyProvider4_default = Symbol('_is_ProxyProvider4_default');
  proxy_provider.ProxyProvider4$ = dart.generic((T, T2, T3, T4, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, R])))();
    class ProxyProvider4 extends proxy_provider.NumericProxyProvider$(T, T2, T3, T4, proxy_provider.Void, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider4.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider4.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider4.prototype;
    dart.addTypeTests(ProxyProvider4);
    ProxyProvider4.prototype[_is_ProxyProvider4_default] = true;
    dart.setGetterSignature(ProxyProvider4, () => ({
      __proto__: dart.getGetters(ProxyProvider4.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, R])
    }));
    dart.setLibraryUri(ProxyProvider4, "package:provider/src/proxy_provider.dart");
    return ProxyProvider4;
  });
  proxy_provider.ProxyProvider4 = proxy_provider.ProxyProvider4$();
  dart.addTypeTests(proxy_provider.ProxyProvider4, _is_ProxyProvider4_default);
  const _is_ProxyProvider5_default = Symbol('_is_ProxyProvider5_default');
  proxy_provider.ProxyProvider5$ = dart.generic((T, T2, T3, T4, T5, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, R])))();
    class ProxyProvider5 extends proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, proxy_provider.Void, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider5.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider5.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider5.prototype;
    dart.addTypeTests(ProxyProvider5);
    ProxyProvider5.prototype[_is_ProxyProvider5_default] = true;
    dart.setGetterSignature(ProxyProvider5, () => ({
      __proto__: dart.getGetters(ProxyProvider5.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, R])
    }));
    dart.setLibraryUri(ProxyProvider5, "package:provider/src/proxy_provider.dart");
    return ProxyProvider5;
  });
  proxy_provider.ProxyProvider5 = proxy_provider.ProxyProvider5$();
  dart.addTypeTests(proxy_provider.ProxyProvider5, _is_ProxyProvider5_default);
  const _is_ProxyProvider6_default = Symbol('_is_ProxyProvider6_default');
  proxy_provider.ProxyProvider6$ = dart.generic((T, T2, T3, T4, T5, T6, R) => {
    let BuildContextAndTAndT2__ToR = () => (BuildContextAndTAndT2__ToR = dart.constFn(dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, T6, R])))();
    class ProxyProvider6 extends proxy_provider.NumericProxyProvider$(T, T2, T3, T4, T5, T6, R) {
      get builder() {
        return BuildContextAndTAndT2__ToR().as(super.builder);
      }
    }
    (ProxyProvider6.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let initialBuilder = opts && 'initialBuilder' in opts ? opts.initialBuilder : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let updateShouldNotify = opts && 'updateShouldNotify' in opts ? opts.updateShouldNotify : null;
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      ProxyProvider6.__proto__.new.call(this, {key: key, initialBuilder: initialBuilder, builder: builder, updateShouldNotify: updateShouldNotify, dispose: dispose, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = ProxyProvider6.prototype;
    dart.addTypeTests(ProxyProvider6);
    ProxyProvider6.prototype[_is_ProxyProvider6_default] = true;
    dart.setGetterSignature(ProxyProvider6, () => ({
      __proto__: dart.getGetters(ProxyProvider6.__proto__),
      builder: dart.fnType(R, [framework.BuildContext, T, T2, T3, T4, T5, T6, R])
    }));
    dart.setLibraryUri(ProxyProvider6, "package:provider/src/proxy_provider.dart");
    return ProxyProvider6;
  });
  proxy_provider.ProxyProvider6 = proxy_provider.ProxyProvider6$();
  dart.addTypeTests(proxy_provider.ProxyProvider6, _is_ProxyProvider6_default);
  const _mountDelegate = dart.privateName(delegate_widget, "_mountDelegate");
  const _initDelegate = dart.privateName(delegate_widget, "_initDelegate");
  const _debugIsInitDelegate = dart.privateName(delegate_widget, "_debugIsInitDelegate");
  const _unmountDelegate = dart.privateName(delegate_widget, "_unmountDelegate");
  delegate_widget._DelegateWidgetState = class _DelegateWidgetState extends framework.State$(delegate_widget.DelegateWidget) {
    initState() {
      super.initState();
      this[_mountDelegate]();
      this[_initDelegate]();
    }
    [_initDelegate]() {
      if (!dart.test(dart.fn(() => {
        delegate_widget._DelegateElement.as(this.context)[_debugIsInitDelegate] = true;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/delegate_widget.dart", 114, 12, "() {\n      (context as _DelegateElement)._debugIsInitDelegate = true;\n      return true;\n    }()");
      this.widget.delegate.initDelegate();
      if (!dart.test(dart.fn(() => {
        delegate_widget._DelegateElement.as(this.context)[_debugIsInitDelegate] = false;
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/delegate_widget.dart", 119, 12, "() {\n      (context as _DelegateElement)._debugIsInitDelegate = false;\n      return true;\n    }()");
    }
    [_mountDelegate]() {
      let t0;
      t0 = this.widget.delegate;
      t0[_context] = this.context;
      t0[_setState] = dart.bind(this, 'setState');
      t0;
    }
    [_unmountDelegate](delegate) {
      let t0;
      t0 = delegate;
      t0[_context] = null;
      t0[_setState] = null;
      t0;
    }
    didUpdateWidget(oldWidget) {
      delegate_widget.DelegateWidget._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.delegate, oldWidget.delegate)) {
        this[_mountDelegate]();
        if (!dart.equals(dart.runtimeType(this.widget.delegate), dart.runtimeType(oldWidget.delegate))) {
          oldWidget.delegate.dispose();
          this[_initDelegate]();
        } else {
          this.widget.delegate.didUpdateDelegate(oldWidget.delegate);
        }
        this[_unmountDelegate](oldWidget.delegate);
      }
    }
    build(context) {
      return this.widget.build(context);
    }
    dispose() {
      this.widget.delegate.dispose();
      this[_unmountDelegate](this.widget.delegate);
      super.dispose();
    }
  };
  (delegate_widget._DelegateWidgetState.new = function() {
    delegate_widget._DelegateWidgetState.__proto__.new.call(this);
    ;
  }).prototype = delegate_widget._DelegateWidgetState.prototype;
  dart.addTypeTests(delegate_widget._DelegateWidgetState);
  dart.setMethodSignature(delegate_widget._DelegateWidgetState, () => ({
    __proto__: dart.getMethods(delegate_widget._DelegateWidgetState.__proto__),
    [_initDelegate]: dart.fnType(dart.void, []),
    [_mountDelegate]: dart.fnType(dart.void, []),
    [_unmountDelegate]: dart.fnType(dart.void, [delegate_widget.StateDelegate]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(delegate_widget._DelegateWidgetState, "package:provider/src/delegate_widget.dart");
  delegate_widget._DelegateElement = class _DelegateElement extends framework.StatefulElement {
    get widget() {
      return delegate_widget.DelegateWidget.as(super.widget);
    }
    inheritFromElement(ancestor, opts) {
      let aspect = opts && 'aspect' in opts ? opts.aspect : null;
      if (!dart.test(dart.fn(() => {
        if (dart.test(this[_debugIsInitDelegate])) {
          let targetType = dart.runtimeType(ancestor.widget);
          dart.throw(assertions.FlutterError.new("inheritFromWidgetOfExactType(" + dart.str(targetType) + ") or inheritFromElement() was called\nbefore " + dart.str(dart.runtimeType(this.widget.delegate)) + ".initDelegate() completed.\n\nWhen an inherited widget changes, for example if the value of Theme.of()\nchanges, its dependent widgets are rebuilt. If the dependent widget's reference\nto the inherited widget is in a constructor or an initDelegate() method, then\nthe rebuilt dependent widget will not reflect the changes in the inherited\nwidget.\n\nTypically references to inherited widgets should occur in widget build()\nmethods. Alternatively, initialization based on inherited widgets can be placed\nin the didChangeDependencies method, which is called after initDelegate and\nwhenever the dependencies change thereafter."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/delegate_widget.dart", 173, 12, "() {\n      if (_debugIsInitDelegate) {\n        final targetType = ancestor.widget.runtimeType;\n        // error copied from StatefulElement\n        throw FlutterError('''\ninheritFromWidgetOfExactType($targetType) or inheritFromElement() was called\nbefore ${widget.delegate.runtimeType}.initDelegate() completed.\n\nWhen an inherited widget changes, for example if the value of Theme.of()\nchanges, its dependent widgets are rebuilt. If the dependent widget's reference\nto the inherited widget is in a constructor or an initDelegate() method, then\nthe rebuilt dependent widget will not reflect the changes in the inherited\nwidget.\n\nTypically references to inherited widgets should occur in widget build()\nmethods. Alternatively, initialization based on inherited widgets can be placed\nin the didChangeDependencies method, which is called after initDelegate and\nwhenever the dependencies change thereafter.''');\n      }\n      return true;\n    }()");
      return super.inheritFromElement(ancestor, {aspect: aspect});
    }
  };
  (delegate_widget._DelegateElement.new = function(widget) {
    this[_debugIsInitDelegate] = false;
    delegate_widget._DelegateElement.__proto__.new.call(this, widget);
    ;
  }).prototype = delegate_widget._DelegateElement.prototype;
  dart.addTypeTests(delegate_widget._DelegateElement);
  dart.setGetterSignature(delegate_widget._DelegateElement, () => ({
    __proto__: dart.getGetters(delegate_widget._DelegateElement.__proto__),
    widget: delegate_widget.DelegateWidget
  }));
  dart.setLibraryUri(delegate_widget._DelegateElement, "package:provider/src/delegate_widget.dart");
  dart.setFieldSignature(delegate_widget._DelegateElement, () => ({
    __proto__: dart.getFields(delegate_widget._DelegateElement.__proto__),
    [_debugIsInitDelegate]: dart.fieldType(core.bool)
  }));
  const _is_SingleValueDelegate_default = Symbol('_is_SingleValueDelegate_default');
  delegate_widget.SingleValueDelegate$ = dart.generic(T => {
    class SingleValueDelegate extends delegate_widget.ValueStateDelegate$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
    }
    (SingleValueDelegate.new = function(value) {
      this[value$] = value;
      SingleValueDelegate.__proto__.new.call(this);
      ;
    }).prototype = SingleValueDelegate.prototype;
    dart.addTypeTests(SingleValueDelegate);
    SingleValueDelegate.prototype[_is_SingleValueDelegate_default] = true;
    const value$ = Symbol("SingleValueDelegate.value");
    dart.setLibraryUri(SingleValueDelegate, "package:provider/src/delegate_widget.dart");
    dart.setFieldSignature(SingleValueDelegate, () => ({
      __proto__: dart.getFields(SingleValueDelegate.__proto__),
      value: dart.finalFieldType(T)
    }));
    return SingleValueDelegate;
  });
  delegate_widget.SingleValueDelegate = delegate_widget.SingleValueDelegate$();
  dart.addTypeTests(delegate_widget.SingleValueDelegate, _is_SingleValueDelegate_default);
  const _value$0 = dart.privateName(delegate_widget, "_value");
  const _builder$0 = dart.privateName(delegate_widget, "_builder");
  const _dispose = dart.privateName(delegate_widget, "_dispose");
  const _is_BuilderStateDelegate_default = Symbol('_is_BuilderStateDelegate_default');
  delegate_widget.BuilderStateDelegate$ = dart.generic(T => {
    let BuilderStateDelegateOfT = () => (BuilderStateDelegateOfT = dart.constFn(delegate_widget.BuilderStateDelegate$(T)))();
    class BuilderStateDelegate extends delegate_widget.ValueStateDelegate$(T) {
      get value() {
        return this[_value$0];
      }
      initDelegate() {
        super.initDelegate();
        this[_value$0] = this[_builder$0](this.context);
      }
      didUpdateDelegate(old) {
        BuilderStateDelegateOfT()._check(old);
        super.didUpdateDelegate(old);
        this[_value$0] = old.value;
      }
      dispose() {
        let t0;
        t0 = this[_dispose];
        t0 == null ? null : t0(this.context, this.value);
        super.dispose();
      }
    }
    (BuilderStateDelegate.new = function(_builder, opts) {
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      this[_value$0] = null;
      this[_builder$0] = _builder;
      if (!(_builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/delegate_widget.dart", 228, 16, "_builder != null");
      this[_dispose] = dispose;
      BuilderStateDelegate.__proto__.new.call(this);
      ;
    }).prototype = BuilderStateDelegate.prototype;
    dart.addTypeTests(BuilderStateDelegate);
    BuilderStateDelegate.prototype[_is_BuilderStateDelegate_default] = true;
    dart.setGetterSignature(BuilderStateDelegate, () => ({
      __proto__: dart.getGetters(BuilderStateDelegate.__proto__),
      value: T
    }));
    dart.setLibraryUri(BuilderStateDelegate, "package:provider/src/delegate_widget.dart");
    dart.setFieldSignature(BuilderStateDelegate, () => ({
      __proto__: dart.getFields(BuilderStateDelegate.__proto__),
      [_builder$0]: dart.finalFieldType(dart.fnType(T, [framework.BuildContext])),
      [_dispose]: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, T])),
      [_value$0]: dart.fieldType(T)
    }));
    return BuilderStateDelegate;
  });
  delegate_widget.BuilderStateDelegate = delegate_widget.BuilderStateDelegate$();
  dart.addTypeTests(delegate_widget.BuilderStateDelegate, _is_BuilderStateDelegate_default);
  const _removeListener = dart.privateName(listenable_provider, "_removeListener");
  const _is__ListenableDelegateMixin_default = Symbol('_is__ListenableDelegateMixin_default');
  listenable_provider._ListenableDelegateMixin$ = dart.generic(T => {
    let _ListenableDelegateMixinOfT = () => (_ListenableDelegateMixinOfT = dart.constFn(listenable_provider._ListenableDelegateMixin$(T)))();
    let TAndTTobool = () => (TAndTTobool = dart.constFn(dart.fnType(core.bool, [T, T])))();
    class _ListenableDelegateMixin extends delegate_widget.ValueStateDelegate$(T) {}
    _ListenableDelegateMixin[dart.mixinOn] = ValueStateDelegate => class _ListenableDelegateMixin extends ValueStateDelegate {
      debugCheckIsNewlyCreatedListenable(listenable) {
        if (change_notifier.ChangeNotifier.is(listenable)) {
          if (!!dart.test(listenable.hasListeners)) dart.assertFailed("The default constructor of ListenableProvider/ChangeNotifierProvider\nmust create a new, unused Listenable.\n\nIf you want to reuse an existing Listenable, use the second constructor:\n\n- DO use ChangeNotifierProvider.value to provider an existing ChangeNotifier:\n\nMyChangeNotifier variable;\nChangeNotifierProvider.value(\n  value: variable,\n  child: ...\n)\n\n- DON'T reuse an existing ChangeNotifier using the default constructor.\n\nMyChangeNotifier variable;\nChangeNotifierProvider(\n  builder: (_) => variable,\n  child: ...\n)\n", "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 136, 14, "!listenable.hasListeners");
        }
        return true;
      }
      initDelegate() {
        super.initDelegate();
        if (this.value != null) this.startListening(this.value);
      }
      didUpdateDelegate(old) {
        delegate_widget.StateDelegate._check(old);
        super.didUpdateDelegate(old);
        let delegate = _ListenableDelegateMixinOfT().as(old);
        this[_removeListener] = delegate[_removeListener];
        this.updateShouldNotify = TAndTTobool()._check(delegate.updateShouldNotify);
      }
      startListening(listenable, opts) {
        T._check(listenable);
        let rebuild = opts && 'rebuild' in opts ? opts.rebuild : false;
        let buildCount = 0;
        let setState = this.setState;
        let listener = dart.fn(() => setState(dart.fn(() => {
          let t0;
          t0 = buildCount;
          buildCount = t0 + 1;
          return t0;
        }, VoidToint())), VoidTovoid());
        let capturedBuildCount = buildCount;
        if (dart.test(rebuild)) capturedBuildCount = capturedBuildCount - 1;
        this.updateShouldNotify = dart.fn((_, __) => {
          let res = buildCount !== capturedBuildCount;
          capturedBuildCount = buildCount;
          return res;
        }, TAndTTobool());
        listenable.addListener(listener);
        this[_removeListener] = dart.fn(() => {
          listenable.removeListener(listener);
          this[_removeListener] = null;
          this.updateShouldNotify = null;
        }, VoidToNull());
      }
      dispose() {
        let t0;
        t0 = this[_removeListener];
        t0 == null ? null : t0();
        super.dispose();
      }
    };
    (_ListenableDelegateMixin[dart.mixinNew] = function() {
      this.updateShouldNotify = null;
      this[_removeListener] = null;
    }).prototype = _ListenableDelegateMixin.prototype;
    dart.addTypeTests(_ListenableDelegateMixin);
    _ListenableDelegateMixin.prototype[_is__ListenableDelegateMixin_default] = true;
    _ListenableDelegateMixin[dart.implements] = () => [delegate_widget.ValueStateDelegate$(T)];
    dart.setMethodSignature(_ListenableDelegateMixin, () => ({
      __proto__: dart.getMethods(_ListenableDelegateMixin.__proto__),
      debugCheckIsNewlyCreatedListenable: dart.fnType(core.bool, [change_notifier.Listenable]),
      startListening: dart.fnType(dart.void, [core.Object], {rebuild: core.bool})
    }));
    dart.setLibraryUri(_ListenableDelegateMixin, "package:provider/src/listenable_provider.dart");
    dart.setFieldSignature(_ListenableDelegateMixin, () => ({
      __proto__: dart.getFields(_ListenableDelegateMixin.__proto__),
      updateShouldNotify: dart.fieldType(dart.fnType(core.bool, [T, T])),
      [_removeListener]: dart.fieldType(dart.fnType(dart.void, []))
    }));
    return _ListenableDelegateMixin;
  });
  listenable_provider._ListenableDelegateMixin = listenable_provider._ListenableDelegateMixin$();
  dart.addTypeTests(listenable_provider._ListenableDelegateMixin, _is__ListenableDelegateMixin_default);
  const _is__ValueListenableDelegate_default = Symbol('_is__ValueListenableDelegate_default');
  listenable_provider._ValueListenableDelegate$ = dart.generic(T => {
    let _ValueListenableDelegateOfT = () => (_ValueListenableDelegateOfT = dart.constFn(listenable_provider._ValueListenableDelegate$(T)))();
    let BuildContextAndTTovoid = () => (BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    const SingleValueDelegate__ListenableDelegateMixin$ = class SingleValueDelegate__ListenableDelegateMixin extends delegate_widget.SingleValueDelegate$(T) {};
    (SingleValueDelegate__ListenableDelegateMixin$.new = function(value) {
      listenable_provider._ListenableDelegateMixin$(T)[dart.mixinNew].call(this);
      SingleValueDelegate__ListenableDelegateMixin$.__proto__.new.call(this, value);
    }).prototype = SingleValueDelegate__ListenableDelegateMixin$.prototype;
    dart.applyMixin(SingleValueDelegate__ListenableDelegateMixin$, listenable_provider._ListenableDelegateMixin$(T));
    class _ValueListenableDelegate extends SingleValueDelegate__ListenableDelegateMixin$ {
      didUpdateDelegate(oldDelegate) {
        let t0, t0$;
        _ValueListenableDelegateOfT()._check(oldDelegate);
        super.didUpdateDelegate(oldDelegate);
        if (!dart.equals(oldDelegate.value, this.value)) {
          t0 = this[_removeListener];
          t0 == null ? null : t0();
          t0$ = BuildContextAndTTovoid()._check(oldDelegate.disposer);
          t0$ == null ? null : t0$(this.context, oldDelegate.value);
          if (this.value != null) this.startListening(this.value, {rebuild: true});
        }
      }
      startListening(listenable, opts) {
        T._check(listenable);
        let rebuild = opts && 'rebuild' in opts ? opts.rebuild : false;
        if (!(this.disposer == null || dart.test(this.debugCheckIsNewlyCreatedListenable(listenable)))) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 112, 12, "disposer == null || debugCheckIsNewlyCreatedListenable(listenable)");
        super.startListening(listenable, {rebuild: rebuild});
      }
    }
    (_ValueListenableDelegate.new = function(value, disposer) {
      if (disposer === void 0) disposer = null;
      this.disposer = disposer;
      _ValueListenableDelegate.__proto__.new.call(this, value);
      ;
    }).prototype = _ValueListenableDelegate.prototype;
    dart.addTypeTests(_ValueListenableDelegate);
    _ValueListenableDelegate.prototype[_is__ValueListenableDelegate_default] = true;
    dart.setLibraryUri(_ValueListenableDelegate, "package:provider/src/listenable_provider.dart");
    dart.setFieldSignature(_ValueListenableDelegate, () => ({
      __proto__: dart.getFields(_ValueListenableDelegate.__proto__),
      disposer: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, T]))
    }));
    return _ValueListenableDelegate;
  });
  listenable_provider._ValueListenableDelegate = listenable_provider._ValueListenableDelegate$();
  dart.addTypeTests(listenable_provider._ValueListenableDelegate, _is__ValueListenableDelegate_default);
  const _is__BuilderListenableDelegate_default = Symbol('_is__BuilderListenableDelegate_default');
  listenable_provider._BuilderListenableDelegate$ = dart.generic(T => {
    const BuilderStateDelegate__ListenableDelegateMixin$ = class BuilderStateDelegate__ListenableDelegateMixin extends delegate_widget.BuilderStateDelegate$(T) {};
    (BuilderStateDelegate__ListenableDelegateMixin$.new = function(_builder, opts) {
      listenable_provider._ListenableDelegateMixin$(T)[dart.mixinNew].call(this);
      BuilderStateDelegate__ListenableDelegateMixin$.__proto__.new.call(this, _builder, opts);
    }).prototype = BuilderStateDelegate__ListenableDelegateMixin$.prototype;
    dart.applyMixin(BuilderStateDelegate__ListenableDelegateMixin$, listenable_provider._ListenableDelegateMixin$(T));
    class _BuilderListenableDelegate extends BuilderStateDelegate__ListenableDelegateMixin$ {
      startListening(listenable, opts) {
        T._check(listenable);
        let rebuild = opts && 'rebuild' in opts ? opts.rebuild : false;
        if (!dart.test(this.debugCheckIsNewlyCreatedListenable(listenable))) dart.assertFailed(null, "org-dartlang-app:///packages/provider/src/listenable_provider.dart", 124, 12, "debugCheckIsNewlyCreatedListenable(listenable)");
        super.startListening(listenable, {rebuild: rebuild});
      }
    }
    (_BuilderListenableDelegate.new = function(builder, opts) {
      let dispose = opts && 'dispose' in opts ? opts.dispose : null;
      _BuilderListenableDelegate.__proto__.new.call(this, builder, {dispose: dispose});
      ;
    }).prototype = _BuilderListenableDelegate.prototype;
    dart.addTypeTests(_BuilderListenableDelegate);
    _BuilderListenableDelegate.prototype[_is__BuilderListenableDelegate_default] = true;
    dart.setLibraryUri(_BuilderListenableDelegate, "package:provider/src/listenable_provider.dart");
    return _BuilderListenableDelegate;
  });
  listenable_provider._BuilderListenableDelegate = listenable_provider._BuilderListenableDelegate$();
  dart.addTypeTests(listenable_provider._BuilderListenableDelegate, _is__BuilderListenableDelegate_default);
  dart.trackLibraries("packages/provider/provider", {
    "package:provider/provider.dart": provider,
    "package:provider/src/value_listenable_provider.dart": value_listenable_provider,
    "package:provider/src/consumer.dart": consumer,
    "package:provider/src/selector.dart": selector,
    "package:provider/src/async_provider.dart": async_provider,
    "package:provider/src/provider.dart": provider$,
    "package:provider/src/change_notifier_provider.dart": change_notifier_provider,
    "package:provider/src/proxy_provider.dart": proxy_provider,
    "package:provider/src/delegate_widget.dart": delegate_widget,
    "package:provider/src/listenable_provider.dart": listenable_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/delegate_widget.dart","src/value_listenable_provider.dart","src/consumer.dart","src/selector.dart","src/async_provider.dart","src/provider.dart","src/listenable_provider.dart","src/change_notifier_provider.dart","src/proxy_provider.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"provider.ddc.js"}');
  // Exports:
  return {
    provider: provider,
    src__value_listenable_provider: value_listenable_provider,
    src__consumer: consumer,
    src__selector: selector,
    src__async_provider: async_provider,
    src__provider: provider$,
    src__change_notifier_provider: change_notifier_provider,
    src__proxy_provider: proxy_provider,
    src__delegate_widget: delegate_widget,
    src__listenable_provider: listenable_provider
  };
});

//# sourceMappingURL=provider.ddc.js.map

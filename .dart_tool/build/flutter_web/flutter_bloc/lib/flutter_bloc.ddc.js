define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/provider/provider', 'packages/flutter/src/foundation/_bitfield_web', 'packages/bloc/bloc'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__provider__provider, packages__flutter__src__foundation___bitfield_web, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const provider = packages__provider__provider.src__provider;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const bloc = packages__bloc__bloc.src__bloc;
  const repository_provider = Object.create(dart.library);
  const bloc_provider = Object.create(dart.library);
  const multi_bloc_provider = Object.create(dart.library);
  const flutter_bloc = Object.create(dart.library);
  const multi_repository_provider = Object.create(dart.library);
  const multi_bloc_listener = Object.create(dart.library);
  const bloc_listener = Object.create(dart.library);
  const bloc_builder = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 71,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 69,
        [_Location_file]: "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 7,
        [_Location_line]: 64,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 65,
        [_Location_file]: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C5 || CT.C5,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 63,
        [_Location_file]: "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "providers",
        [_Location_column]: 7,
        [_Location_line]: 69,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 70,
        [_Location_file]: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C9 || CT.C9,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 68,
        [_Location_file]: "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "key",
        [_Location_column]: 7,
        [_Location_line]: 94,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "bloc",
        [_Location_column]: 7,
        [_Location_line]: 95,
        [_Location_file]: null
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "listener",
        [_Location_column]: 7,
        [_Location_line]: 96,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "condition",
        [_Location_column]: 7,
        [_Location_line]: 97,
        [_Location_file]: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 7,
        [_Location_line]: 98,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15, C16 || CT.C16, C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 93,
        [_Location_file]: "org-dartlang-app:///packages/flutter_bloc/src/bloc_listener.dart"
      });
    }
  });
  const _is_RepositoryProvider_default = Symbol('_is_RepositoryProvider_default');
  repository_provider.RepositoryProvider$ = dart.generic(T => {
    let BuildContextAndTToNull = () => (BuildContextAndTToNull = dart.constFn(dart.fnType(core.Null, [framework.BuildContext, T])))();
    class RepositoryProvider extends provider.Provider$(T) {
      static of(T, context) {
        try {
          return provider.Provider.of(T, context, {listen: false});
        } catch (e) {
          let _ = dart.getThrown(e);
          dart.throw(assertions.FlutterError.new("        RepositoryProvider.of() called with a context that does not contain a repository of type " + dart.str(dart.wrapType(T)) + ".\n        No ancestor could be found starting from the context that was passed to RepositoryProvider.of<" + dart.str(dart.wrapType(T)) + ">().\n\n        This can happen if:\n        1. The context you used comes from a widget above the RepositoryProvider.\n        2. You used MultiRepositoryProvider and didn't explicity provide the RepositoryProvider types.\n\n        Good: RepositoryProvider<" + dart.str(dart.wrapType(T)) + ">(builder: (context) => " + dart.str(dart.wrapType(T)) + "())\n        Bad: RepositoryProvider(builder: (context) => " + dart.str(dart.wrapType(T)) + "()).\n\n        The context used was: " + dart.str(context) + "\n        "));
        }
      }
    }
    (RepositoryProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      RepositoryProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: dart.fn((_, __) => {
        }, BuildContextAndTToNull()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = RepositoryProvider.prototype;
    (RepositoryProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      RepositoryProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = RepositoryProvider.prototype;
    dart.addTypeTests(RepositoryProvider);
    RepositoryProvider.prototype[_is_RepositoryProvider_default] = true;
    dart.setLibraryUri(RepositoryProvider, "package:flutter_bloc/src/repository_provider.dart");
    return RepositoryProvider;
  });
  repository_provider.RepositoryProvider = repository_provider.RepositoryProvider$();
  dart.addTypeTests(repository_provider.RepositoryProvider, _is_RepositoryProvider_default);
  const _is_BlocProvider_default = Symbol('_is_BlocProvider_default');
  bloc_provider.BlocProvider$ = dart.generic(T => {
    let BuildContextAndTTovoid = () => (BuildContextAndTTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, T])))();
    class BlocProvider extends provider.Provider$(T) {
      static of(T, context) {
        try {
          return provider.Provider.of(T, context, {listen: false});
        } catch (e) {
          let _ = dart.getThrown(e);
          dart.throw(assertions.FlutterError.new("        BlocProvider.of() called with a context that does not contain a Bloc of type " + dart.str(dart.wrapType(T)) + ".\n        No ancestor could be found starting from the context that was passed to BlocProvider.of<" + dart.str(dart.wrapType(T)) + ">().\n\n        This can happen if:\n        1. The context you used comes from a widget above the BlocProvider.\n        2. You used MultiBlocProvider and didn't explicity provide the BlocProvider types.\n\n        Good: BlocProvider<" + dart.str(dart.wrapType(T)) + ">(builder: (context) => " + dart.str(dart.wrapType(T)) + "())\n        Bad: BlocProvider(builder: (context) => " + dart.str(dart.wrapType(T)) + "()).\n\n        The context used was: " + dart.str(context) + "\n        "));
        }
      }
    }
    (BlocProvider.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      BlocProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: dart.fn((_, bloc) => {
          let t1;
          t1 = bloc;
          return t1 == null ? null : t1.dispose();
        }, BuildContextAndTTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocProvider.prototype;
    (BlocProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      BlocProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocProvider.prototype;
    dart.addTypeTests(BlocProvider);
    BlocProvider.prototype[_is_BlocProvider_default] = true;
    dart.setLibraryUri(BlocProvider, "package:flutter_bloc/src/bloc_provider.dart");
    return BlocProvider;
  });
  bloc_provider.BlocProvider = bloc_provider.BlocProvider$();
  dart.addTypeTests(bloc_provider.BlocProvider, _is_BlocProvider_default);
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C3;
  let C1;
  let C0;
  const MultiBlocProvider_providers = dart.privateName(multi_bloc_provider, "MultiBlocProvider.providers");
  const MultiBlocProvider_child = dart.privateName(multi_bloc_provider, "MultiBlocProvider.child");
  multi_bloc_provider.MultiBlocProvider = class MultiBlocProvider extends framework.StatelessWidget {
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
      return new provider.MultiProvider.new({providers: this.providers, child: this.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (multi_bloc_provider.MultiBlocProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$] = providers;
    this[child$] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart", 63, 16, "providers != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart", 64, 16, "child != null");
    multi_bloc_provider.MultiBlocProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_bloc_provider.MultiBlocProvider.prototype;
  dart.addTypeTests(multi_bloc_provider.MultiBlocProvider);
  const providers$ = MultiBlocProvider_providers;
  const child$ = MultiBlocProvider_child;
  dart.setMethodSignature(multi_bloc_provider.MultiBlocProvider, () => ({
    __proto__: dart.getMethods(multi_bloc_provider.MultiBlocProvider.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(multi_bloc_provider.MultiBlocProvider, "package:flutter_bloc/src/multi_bloc_provider.dart");
  dart.setFieldSignature(multi_bloc_provider.MultiBlocProvider, () => ({
    __proto__: dart.getFields(multi_bloc_provider.MultiBlocProvider.__proto__),
    providers: dart.finalFieldType(core.List$(bloc_provider.BlocProvider$(bloc.Bloc))),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C6;
  let C7;
  let C5;
  let C4;
  const MultiRepositoryProvider_providers = dart.privateName(multi_repository_provider, "MultiRepositoryProvider.providers");
  const MultiRepositoryProvider_child = dart.privateName(multi_repository_provider, "MultiRepositoryProvider.child");
  multi_repository_provider.MultiRepositoryProvider = class MultiRepositoryProvider extends framework.StatelessWidget {
    get providers() {
      return this[providers$0];
    }
    set providers(value) {
      super.providers = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new provider.MultiProvider.new({providers: this.providers, child: this.child, $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
    }
  };
  (multi_repository_provider.MultiRepositoryProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$0] = providers;
    this[child$0] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart", 57, 16, "providers != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart", 58, 16, "child != null");
    multi_repository_provider.MultiRepositoryProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_repository_provider.MultiRepositoryProvider.prototype;
  dart.addTypeTests(multi_repository_provider.MultiRepositoryProvider);
  const providers$0 = MultiRepositoryProvider_providers;
  const child$0 = MultiRepositoryProvider_child;
  dart.setMethodSignature(multi_repository_provider.MultiRepositoryProvider, () => ({
    __proto__: dart.getMethods(multi_repository_provider.MultiRepositoryProvider.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(multi_repository_provider.MultiRepositoryProvider, "package:flutter_bloc/src/multi_repository_provider.dart");
  dart.setFieldSignature(multi_repository_provider.MultiRepositoryProvider, () => ({
    __proto__: dart.getFields(multi_repository_provider.MultiRepositoryProvider.__proto__),
    providers: dart.finalFieldType(core.List$(repository_provider.RepositoryProvider)),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C10;
  let C11;
  let C9;
  let C8;
  const MultiBlocListener_listeners = dart.privateName(multi_bloc_listener, "MultiBlocListener.listeners");
  const MultiBlocListener_child = dart.privateName(multi_bloc_listener, "MultiBlocListener.child");
  multi_bloc_listener.MultiBlocListener = class MultiBlocListener extends framework.StatelessWidget {
    get listeners() {
      return this[listeners$];
    }
    set listeners(value) {
      super.listeners = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new provider.MultiProvider.new({providers: this.listeners, child: this.child, $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
    }
  };
  (multi_bloc_listener.MultiBlocListener.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let listeners = opts && 'listeners' in opts ? opts.listeners : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[listeners$] = listeners;
    this[child$1] = child;
    if (!(listeners != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart", 62, 16, "listeners != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart", 63, 16, "child != null");
    multi_bloc_listener.MultiBlocListener.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_bloc_listener.MultiBlocListener.prototype;
  dart.addTypeTests(multi_bloc_listener.MultiBlocListener);
  const listeners$ = MultiBlocListener_listeners;
  const child$1 = MultiBlocListener_child;
  dart.setMethodSignature(multi_bloc_listener.MultiBlocListener, () => ({
    __proto__: dart.getMethods(multi_bloc_listener.MultiBlocListener.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(multi_bloc_listener.MultiBlocListener, "package:flutter_bloc/src/multi_bloc_listener.dart");
  dart.setFieldSignature(multi_bloc_listener.MultiBlocListener, () => ({
    __proto__: dart.getFields(multi_bloc_listener.MultiBlocListener.__proto__),
    listeners: dart.finalFieldType(core.List$(bloc_listener.BlocListener$(bloc.Bloc, dart.dynamic))),
    child: dart.finalFieldType(framework.Widget)
  }));
  let C14;
  let C15;
  let C16;
  let C17;
  let C18;
  let C13;
  let C12;
  const _is_BlocListenerBase_default = Symbol('_is_BlocListenerBase_default');
  const BlocListenerBase_bloc = dart.privateName(bloc_listener, "BlocListenerBase.bloc");
  const BlocListenerBase_listener = dart.privateName(bloc_listener, "BlocListenerBase.listener");
  const BlocListenerBase_condition = dart.privateName(bloc_listener, "BlocListenerBase.condition");
  bloc_listener.BlocListenerBase$ = dart.generic((B, S) => {
    let _BlocListenerBaseStateOfB$S = () => (_BlocListenerBaseStateOfB$S = dart.constFn(bloc_listener._BlocListenerBaseState$(B, S)))();
    class BlocListenerBase extends framework.StatefulWidget {
      get bloc() {
        return this[bloc$];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get listener() {
        return this[listener$];
      }
      set listener(value) {
        super.listener = value;
      }
      get condition() {
        return this[condition$];
      }
      set condition(value) {
        super.condition = value;
      }
      createState() {
        return new (_BlocListenerBaseStateOfB$S()).new();
      }
    }
    (BlocListenerBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let condition = opts && 'condition' in opts ? opts.condition : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[listener$] = listener;
      this[bloc$] = bloc;
      this[condition$] = condition;
      BlocListenerBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocListenerBase.prototype;
    dart.addTypeTests(BlocListenerBase);
    BlocListenerBase.prototype[_is_BlocListenerBase_default] = true;
    const bloc$ = BlocListenerBase_bloc;
    const listener$ = BlocListenerBase_listener;
    const condition$ = BlocListenerBase_condition;
    dart.setMethodSignature(BlocListenerBase, () => ({
      __proto__: dart.getMethods(BlocListenerBase.__proto__),
      createState: dart.fnType(framework.State$(bloc_listener.BlocListenerBase$(B, S)), [])
    }));
    dart.setLibraryUri(BlocListenerBase, "package:flutter_bloc/src/bloc_listener.dart");
    dart.setFieldSignature(BlocListenerBase, () => ({
      __proto__: dart.getFields(BlocListenerBase.__proto__),
      bloc: dart.finalFieldType(B),
      listener: dart.finalFieldType(dart.fnType(dart.void, [framework.BuildContext, S])),
      condition: dart.finalFieldType(dart.fnType(core.bool, [S, S]))
    }));
    return BlocListenerBase;
  });
  bloc_listener.BlocListenerBase = bloc_listener.BlocListenerBase$();
  dart.addTypeTests(bloc_listener.BlocListenerBase, _is_BlocListenerBase_default);
  const _is_BlocListener_default = Symbol('_is_BlocListener_default');
  const BlocListener_child = dart.privateName(bloc_listener, "BlocListener.child");
  bloc_listener.BlocListener$ = dart.generic((B, S) => {
    let BlocListenerOfB$S = () => (BlocListenerOfB$S = dart.constFn(bloc_listener.BlocListener$(B, S)))();
    const BlocListenerBase_SingleChildCloneableWidget$36 = class BlocListenerBase_SingleChildCloneableWidget extends bloc_listener.BlocListenerBase$(B, S) {};
    (BlocListenerBase_SingleChildCloneableWidget$36.new = function(opts) {
      BlocListenerBase_SingleChildCloneableWidget$36.__proto__.new.call(this, opts);
    }).prototype = BlocListenerBase_SingleChildCloneableWidget$36.prototype;
    dart.applyMixin(BlocListenerBase_SingleChildCloneableWidget$36, provider.SingleChildCloneableWidget);
    class BlocListener extends BlocListenerBase_SingleChildCloneableWidget$36 {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      cloneWithChild(child) {
        return new (BlocListenerOfB$S()).new({key: this.key, bloc: this.bloc, listener: this.listener, condition: this.condition, child: child, $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
      }
      build(context) {
        return this.child;
      }
    }
    (BlocListener.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let listener = opts && 'listener' in opts ? opts.listener : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let condition = opts && 'condition' in opts ? opts.condition : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[child$] = child;
      if (!(listener != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/bloc_listener.dart", 80, 16, "listener != null");
      BlocListener.__proto__.new.call(this, {key: key, listener: listener, bloc: bloc, condition: condition, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocListener.prototype;
    dart.addTypeTests(BlocListener);
    BlocListener.prototype[_is_BlocListener_default] = true;
    const child$ = BlocListener_child;
    dart.setMethodSignature(BlocListener, () => ({
      __proto__: dart.getMethods(BlocListener.__proto__),
      cloneWithChild: dart.fnType(bloc_listener.BlocListener$(B, S), [framework.Widget]),
      build: dart.fnType(framework.Widget, [framework.BuildContext])
    }));
    dart.setLibraryUri(BlocListener, "package:flutter_bloc/src/bloc_listener.dart");
    dart.setFieldSignature(BlocListener, () => ({
      __proto__: dart.getFields(BlocListener.__proto__),
      child: dart.finalFieldType(framework.Widget)
    }));
    return BlocListener;
  });
  bloc_listener.BlocListener = bloc_listener.BlocListener$();
  dart.addTypeTests(bloc_listener.BlocListener, _is_BlocListener_default);
  const _subscription = dart.privateName(bloc_listener, "_subscription");
  const _previousState = dart.privateName(bloc_listener, "_previousState");
  const _bloc = dart.privateName(bloc_listener, "_bloc");
  const _subscribe = dart.privateName(bloc_listener, "_subscribe");
  const _unsubscribe = dart.privateName(bloc_listener, "_unsubscribe");
  const _is__BlocListenerBaseState_default = Symbol('_is__BlocListenerBaseState_default');
  bloc_listener._BlocListenerBaseState$ = dart.generic((B, S) => {
    let BlocListenerBaseOfB$S = () => (BlocListenerBaseOfB$S = dart.constFn(bloc_listener.BlocListenerBase$(B, S)))();
    let SAndSTobool = () => (SAndSTobool = dart.constFn(dart.fnType(core.bool, [S, S])))();
    let BuildContextAndSTovoid = () => (BuildContextAndSTovoid = dart.constFn(dart.fnType(dart.void, [framework.BuildContext, S])))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    class _BlocListenerBaseState extends framework.State$(bloc_listener.BlocListenerBase$(B, S)) {
      initState() {
        let t2, t2$;
        super.initState();
        this[_bloc] = (t2 = this.widget.bloc, t2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t2);
        this[_previousState] = (t2$ = this[_bloc], t2$ == null ? null : t2$.currentState);
        this[_subscribe]();
      }
      didUpdateWidget(oldWidget) {
        let t2, t2$, t2$0, t2$1, t2$2, t2$3;
        BlocListenerBaseOfB$S()._check(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldState = (t2$ = (t2 = oldWidget.bloc, t2 == null ? null : t2.state), t2$ == null ? bloc_provider.BlocProvider.of(B, this.context).state : t2$);
        let currentState = (t2$1 = (t2$0 = this.widget.bloc, t2$0 == null ? null : t2$0.state), t2$1 == null ? oldState : t2$1);
        if (!dart.equals(oldState, currentState)) {
          if (this[_subscription] != null) {
            this[_unsubscribe]();
            this[_bloc] = (t2$2 = this.widget.bloc, t2$2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t2$2);
            this[_previousState] = (t2$3 = this[_bloc], t2$3 == null ? null : t2$3.currentState);
          }
          this[_subscribe]();
        }
      }
      build(context) {
        return this.widget.build(context);
      }
      dispose() {
        this[_unsubscribe]();
        super.dispose();
      }
      [_subscribe]() {
        let t2;
        if ((t2 = this[_bloc], t2 == null ? null : t2.state) != null) {
          this[_subscription] = this[_bloc].state.skip(1).listen(dart.fn(state => {
            let t2, t2$;
            if (dart.test((t2$ = (t2 = SAndSTobool()._check(this.widget.condition), t2 == null ? null : t2(this[_previousState], state)), t2$ == null ? true : t2$))) {
              BuildContextAndSTovoid()._check(this.widget.listener)(this.context, state);
            }
            this[_previousState] = state;
          }, SToNull()));
        }
      }
      [_unsubscribe]() {
        if (this[_subscription] != null) {
          this[_subscription].cancel();
          this[_subscription] = null;
        }
      }
    }
    (_BlocListenerBaseState.new = function() {
      this[_subscription] = null;
      this[_previousState] = null;
      this[_bloc] = null;
      _BlocListenerBaseState.__proto__.new.call(this);
      ;
    }).prototype = _BlocListenerBaseState.prototype;
    dart.addTypeTests(_BlocListenerBaseState);
    _BlocListenerBaseState.prototype[_is__BlocListenerBaseState_default] = true;
    dart.setMethodSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getMethods(_BlocListenerBaseState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      [_subscribe]: dart.fnType(dart.void, []),
      [_unsubscribe]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_BlocListenerBaseState, "package:flutter_bloc/src/bloc_listener.dart");
    dart.setFieldSignature(_BlocListenerBaseState, () => ({
      __proto__: dart.getFields(_BlocListenerBaseState.__proto__),
      [_subscription]: dart.fieldType(async.StreamSubscription$(S)),
      [_previousState]: dart.fieldType(S),
      [_bloc]: dart.fieldType(B)
    }));
    return _BlocListenerBaseState;
  });
  bloc_listener._BlocListenerBaseState = bloc_listener._BlocListenerBaseState$();
  dart.addTypeTests(bloc_listener._BlocListenerBaseState, _is__BlocListenerBaseState_default);
  const _is_BlocBuilderBase_default = Symbol('_is_BlocBuilderBase_default');
  const BlocBuilderBase_bloc = dart.privateName(bloc_builder, "BlocBuilderBase.bloc");
  const BlocBuilderBase_condition = dart.privateName(bloc_builder, "BlocBuilderBase.condition");
  bloc_builder.BlocBuilderBase$ = dart.generic((B, S) => {
    let _BlocBuilderBaseStateOfB$S = () => (_BlocBuilderBaseStateOfB$S = dart.constFn(bloc_builder._BlocBuilderBaseState$(B, S)))();
    class BlocBuilderBase extends framework.StatefulWidget {
      get bloc() {
        return this[bloc$];
      }
      set bloc(value) {
        super.bloc = value;
      }
      get condition() {
        return this[condition$];
      }
      set condition(value) {
        super.condition = value;
      }
      createState() {
        return new (_BlocBuilderBaseStateOfB$S()).new();
      }
    }
    (BlocBuilderBase.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let condition = opts && 'condition' in opts ? opts.condition : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[bloc$] = bloc;
      this[condition$] = condition;
      BlocBuilderBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocBuilderBase.prototype;
    dart.addTypeTests(BlocBuilderBase);
    BlocBuilderBase.prototype[_is_BlocBuilderBase_default] = true;
    const bloc$ = BlocBuilderBase_bloc;
    const condition$ = BlocBuilderBase_condition;
    dart.setMethodSignature(BlocBuilderBase, () => ({
      __proto__: dart.getMethods(BlocBuilderBase.__proto__),
      createState: dart.fnType(framework.State$(bloc_builder.BlocBuilderBase$(B, S)), [])
    }));
    dart.setLibraryUri(BlocBuilderBase, "package:flutter_bloc/src/bloc_builder.dart");
    dart.setFieldSignature(BlocBuilderBase, () => ({
      __proto__: dart.getFields(BlocBuilderBase.__proto__),
      bloc: dart.finalFieldType(B),
      condition: dart.finalFieldType(dart.fnType(core.bool, [S, S]))
    }));
    return BlocBuilderBase;
  });
  bloc_builder.BlocBuilderBase = bloc_builder.BlocBuilderBase$();
  dart.addTypeTests(bloc_builder.BlocBuilderBase, _is_BlocBuilderBase_default);
  const _is_BlocBuilder_default = Symbol('_is_BlocBuilder_default');
  const BlocBuilder_builder = dart.privateName(bloc_builder, "BlocBuilder.builder");
  bloc_builder.BlocBuilder$ = dart.generic((B, S) => {
    class BlocBuilder extends bloc_builder.BlocBuilderBase$(B, S) {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      build(context, state) {
        S._check(state);
        return this.builder(context, state);
      }
    }
    (BlocBuilder.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let bloc = opts && 'bloc' in opts ? opts.bloc : null;
      let condition = opts && 'condition' in opts ? opts.condition : null;
      let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/bloc_builder.dart", 79, 16, "builder != null");
      BlocBuilder.__proto__.new.call(this, {key: key, bloc: bloc, condition: condition, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocBuilder.prototype;
    dart.addTypeTests(BlocBuilder);
    BlocBuilder.prototype[_is_BlocBuilder_default] = true;
    const builder$ = BlocBuilder_builder;
    dart.setMethodSignature(BlocBuilder, () => ({
      __proto__: dart.getMethods(BlocBuilder.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext, core.Object])
    }));
    dart.setLibraryUri(BlocBuilder, "package:flutter_bloc/src/bloc_builder.dart");
    dart.setFieldSignature(BlocBuilder, () => ({
      __proto__: dart.getFields(BlocBuilder.__proto__),
      builder: dart.finalFieldType(dart.fnType(framework.Widget, [framework.BuildContext, S]))
    }));
    return BlocBuilder;
  });
  bloc_builder.BlocBuilder = bloc_builder.BlocBuilder$();
  dart.addTypeTests(bloc_builder.BlocBuilder, _is_BlocBuilder_default);
  const _subscription$ = dart.privateName(bloc_builder, "_subscription");
  const _previousState$ = dart.privateName(bloc_builder, "_previousState");
  const _state = dart.privateName(bloc_builder, "_state");
  const _bloc$ = dart.privateName(bloc_builder, "_bloc");
  const _subscribe$ = dart.privateName(bloc_builder, "_subscribe");
  const _unsubscribe$ = dart.privateName(bloc_builder, "_unsubscribe");
  const _is__BlocBuilderBaseState_default = Symbol('_is__BlocBuilderBaseState_default');
  bloc_builder._BlocBuilderBaseState$ = dart.generic((B, S) => {
    let BlocBuilderBaseOfB$S = () => (BlocBuilderBaseOfB$S = dart.constFn(bloc_builder.BlocBuilderBase$(B, S)))();
    let SAndSTobool = () => (SAndSTobool = dart.constFn(dart.fnType(core.bool, [S, S])))();
    let SToNull = () => (SToNull = dart.constFn(dart.fnType(core.Null, [S])))();
    class _BlocBuilderBaseState extends framework.State$(bloc_builder.BlocBuilderBase$(B, S)) {
      initState() {
        let t2, t2$, t2$0;
        super.initState();
        this[_bloc$] = (t2 = this.widget.bloc, t2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t2);
        this[_previousState$] = (t2$ = this[_bloc$], t2$ == null ? null : t2$.currentState);
        this[_state] = (t2$0 = this[_bloc$], t2$0 == null ? null : t2$0.currentState);
        this[_subscribe$]();
      }
      didUpdateWidget(oldWidget) {
        let t2, t2$, t2$0, t2$1, t2$2, t2$3, t2$4;
        BlocBuilderBaseOfB$S()._check(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldState = (t2$ = (t2 = oldWidget.bloc, t2 == null ? null : t2.state), t2$ == null ? bloc_provider.BlocProvider.of(B, this.context).state : t2$);
        let currentState = (t2$1 = (t2$0 = this.widget.bloc, t2$0 == null ? null : t2$0.state), t2$1 == null ? oldState : t2$1);
        if (!dart.equals(oldState, currentState)) {
          if (this[_subscription$] != null) {
            this[_unsubscribe$]();
            this[_bloc$] = (t2$2 = this.widget.bloc, t2$2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t2$2);
            this[_previousState$] = (t2$3 = this[_bloc$], t2$3 == null ? null : t2$3.currentState);
            this[_state] = (t2$4 = this[_bloc$], t2$4 == null ? null : t2$4.currentState);
          }
          this[_subscribe$]();
        }
      }
      build(context) {
        return this.widget.build(context, this[_state]);
      }
      dispose() {
        this[_unsubscribe$]();
        super.dispose();
      }
      [_subscribe$]() {
        let t2;
        if ((t2 = this[_bloc$], t2 == null ? null : t2.state) != null) {
          this[_subscription$] = this[_bloc$].state.skip(1).listen(dart.fn(state => {
            let t2, t2$;
            if (dart.test((t2$ = (t2 = SAndSTobool()._check(this.widget.condition), t2 == null ? null : t2(this[_previousState$], state)), t2$ == null ? true : t2$))) {
              this.setState(dart.fn(() => {
                this[_state] = state;
              }, VoidToNull()));
            }
            this[_previousState$] = state;
          }, SToNull()));
        }
      }
      [_unsubscribe$]() {
        if (this[_subscription$] != null) {
          this[_subscription$].cancel();
          this[_subscription$] = null;
        }
      }
    }
    (_BlocBuilderBaseState.new = function() {
      this[_subscription$] = null;
      this[_previousState$] = null;
      this[_state] = null;
      this[_bloc$] = null;
      _BlocBuilderBaseState.__proto__.new.call(this);
      ;
    }).prototype = _BlocBuilderBaseState.prototype;
    dart.addTypeTests(_BlocBuilderBaseState);
    _BlocBuilderBaseState.prototype[_is__BlocBuilderBaseState_default] = true;
    dart.setMethodSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getMethods(_BlocBuilderBaseState.__proto__),
      build: dart.fnType(framework.Widget, [framework.BuildContext]),
      [_subscribe$]: dart.fnType(dart.void, []),
      [_unsubscribe$]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(_BlocBuilderBaseState, "package:flutter_bloc/src/bloc_builder.dart");
    dart.setFieldSignature(_BlocBuilderBaseState, () => ({
      __proto__: dart.getFields(_BlocBuilderBaseState.__proto__),
      [_subscription$]: dart.fieldType(async.StreamSubscription$(S)),
      [_previousState$]: dart.fieldType(S),
      [_state]: dart.fieldType(S),
      [_bloc$]: dart.fieldType(B)
    }));
    return _BlocBuilderBaseState;
  });
  bloc_builder._BlocBuilderBaseState = bloc_builder._BlocBuilderBaseState$();
  dart.addTypeTests(bloc_builder._BlocBuilderBaseState, _is__BlocBuilderBaseState_default);
  dart.trackLibraries("packages/flutter_bloc/flutter_bloc", {
    "package:flutter_bloc/src/repository_provider.dart": repository_provider,
    "package:flutter_bloc/src/bloc_provider.dart": bloc_provider,
    "package:flutter_bloc/src/multi_bloc_provider.dart": multi_bloc_provider,
    "package:flutter_bloc/flutter_bloc.dart": flutter_bloc,
    "package:flutter_bloc/src/multi_repository_provider.dart": multi_repository_provider,
    "package:flutter_bloc/src/multi_bloc_listener.dart": multi_bloc_listener,
    "package:flutter_bloc/src/bloc_listener.dart": bloc_listener,
    "package:flutter_bloc/src/bloc_builder.dart": bloc_builder
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/repository_provider.dart","src/bloc_provider.dart","src/multi_bloc_provider.dart","src/multi_repository_provider.dart","src/multi_bloc_listener.dart","src/bloc_listener.dart","src/bloc_builder.dart"],"names":[],"mappings":"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","file":"flutter_bloc.ddc.js"}');
  // Exports:
  return {
    src__repository_provider: repository_provider,
    src__bloc_provider: bloc_provider,
    src__multi_bloc_provider: multi_bloc_provider,
    flutter_bloc: flutter_bloc,
    src__multi_repository_provider: multi_repository_provider,
    src__multi_bloc_listener: multi_bloc_listener,
    src__bloc_listener: bloc_listener,
    src__bloc_builder: bloc_builder
  };
});

//# sourceMappingURL=flutter_bloc.ddc.js.map

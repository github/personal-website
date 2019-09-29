define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/provider/provider', 'packages/bloc/bloc', 'packages/flutter/src/foundation/_bitfield_web'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__provider__provider, packages__bloc__bloc, packages__flutter__src__foundation___bitfield_web) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const provider = packages__provider__provider.src__provider;
  const bloc = packages__bloc__bloc.src__bloc;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const flutter_bloc = Object.create(dart.library);
  const bloc_listener = Object.create(dart.library);
  const multi_repository_provider = Object.create(dart.library);
  const bloc_builder = Object.create(dart.library);
  const multi_bloc_listener = Object.create(dart.library);
  const multi_bloc_provider = Object.create(dart.library);
  const bloc_provider = Object.create(dart.library);
  const repository_provider = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 7,
        line: 94,
        file: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bloc",
        column: 7,
        line: 95,
        file: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "listener",
        column: 7,
        line: 96,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "condition",
        column: 7,
        line: 97,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 98,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4, C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 12,
        line: 93,
        file: "org-dartlang-app:///packages/flutter_bloc/src/bloc_listener.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "providers",
        column: 7,
        line: 64,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 65,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 12,
        line: 63,
        file: "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "providers",
        column: 7,
        line: 69,
        file: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 70,
        file: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C12 || CT.C12,
        name: null,
        column: 12,
        line: 68,
        file: "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart"
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "providers",
        column: 7,
        line: 70,
        file: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 71,
        file: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C16 || CT.C16,
        name: null,
        column: 12,
        line: 69,
        file: "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart"
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C1;
  let C0;
  const _is_BlocListenerBase_default = Symbol('_is_BlocListenerBase_default');
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[listener$] = listener;
      this[bloc$] = bloc;
      this[condition$] = condition;
      BlocListenerBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocListenerBase.prototype;
    dart.addTypeTests(BlocListenerBase);
    BlocListenerBase.prototype[_is_BlocListenerBase_default] = true;
    const bloc$ = Symbol("BlocListenerBase.bloc");
    const listener$ = Symbol("BlocListenerBase.listener");
    const condition$ = Symbol("BlocListenerBase.condition");
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
  bloc_listener.BlocListener$ = dart.generic((B, S) => {
    let BlocListenerOfB$S = () => (BlocListenerOfB$S = dart.constFn(bloc_listener.BlocListener$(B, S)))();
    const BlocListenerBase_SingleChildCloneableWidget$ = class BlocListenerBase_SingleChildCloneableWidget extends bloc_listener.BlocListenerBase$(B, S) {};
    (BlocListenerBase_SingleChildCloneableWidget$.new = function(opts) {
      BlocListenerBase_SingleChildCloneableWidget$.__proto__.new.call(this, opts);
    }).prototype = BlocListenerBase_SingleChildCloneableWidget$.prototype;
    dart.applyMixin(BlocListenerBase_SingleChildCloneableWidget$, provider.SingleChildCloneableWidget);
    class BlocListener extends BlocListenerBase_SingleChildCloneableWidget$ {
      get child() {
        return this[child$];
      }
      set child(value) {
        super.child = value;
      }
      cloneWithChild(child) {
        return new (BlocListenerOfB$S()).new({key: this.key, bloc: this.bloc, listener: this.listener, condition: this.condition, child: child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[child$] = child;
      if (!(listener != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/bloc_listener.dart", 80, 16, "listener != null");
      BlocListener.__proto__.new.call(this, {key: key, listener: listener, bloc: bloc, condition: condition, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocListener.prototype;
    dart.addTypeTests(BlocListener);
    BlocListener.prototype[_is_BlocListener_default] = true;
    const child$ = Symbol("BlocListener.child");
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
        let t0, t0$;
        super.initState();
        this[_bloc] = (t0 = this.widget.bloc, t0 == null ? bloc_provider.BlocProvider.of(B, this.context) : t0);
        this[_previousState] = (t0$ = this[_bloc], t0$ == null ? null : t0$.currentState);
        this[_subscribe]();
      }
      didUpdateWidget(oldWidget) {
        let t0, t0$, t0$0, t0$1, t0$2, t0$3;
        BlocListenerBaseOfB$S()._check(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldState = (t0$ = (t0 = oldWidget.bloc, t0 == null ? null : t0.state), t0$ == null ? bloc_provider.BlocProvider.of(B, this.context).state : t0$);
        let currentState = (t0$1 = (t0$0 = this.widget.bloc, t0$0 == null ? null : t0$0.state), t0$1 == null ? oldState : t0$1);
        if (!dart.equals(oldState, currentState)) {
          if (this[_subscription] != null) {
            this[_unsubscribe]();
            this[_bloc] = (t0$2 = this.widget.bloc, t0$2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t0$2);
            this[_previousState] = (t0$3 = this[_bloc], t0$3 == null ? null : t0$3.currentState);
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
        let t0;
        if ((t0 = this[_bloc], t0 == null ? null : t0.state) != null) {
          this[_subscription] = this[_bloc].state.skip(1).listen(dart.fn(state => {
            let t0, t0$;
            if (dart.test((t0$ = (t0 = SAndSTobool()._check(this.widget.condition), t0 == null ? null : t0(this[_previousState], state)), t0$ == null ? true : t0$))) {
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
  let C9;
  let C10;
  let C8;
  let C7;
  multi_repository_provider.MultiRepositoryProvider = class MultiRepositoryProvider extends framework.StatelessWidget {
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
      return new provider.MultiProvider.new({providers: this.providers, child: this.child, $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (multi_repository_provider.MultiRepositoryProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$] = providers;
    this[child$] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart", 57, 16, "providers != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_repository_provider.dart", 58, 16, "child != null");
    multi_repository_provider.MultiRepositoryProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_repository_provider.MultiRepositoryProvider.prototype;
  dart.addTypeTests(multi_repository_provider.MultiRepositoryProvider);
  const providers$ = Symbol("MultiRepositoryProvider.providers");
  const child$ = Symbol("MultiRepositoryProvider.child");
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
  const _is_BlocBuilderBase_default = Symbol('_is_BlocBuilderBase_default');
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[bloc$] = bloc;
      this[condition$] = condition;
      BlocBuilderBase.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocBuilderBase.prototype;
    dart.addTypeTests(BlocBuilderBase);
    BlocBuilderBase.prototype[_is_BlocBuilderBase_default] = true;
    const bloc$ = Symbol("BlocBuilderBase.bloc");
    const condition$ = Symbol("BlocBuilderBase.condition");
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this[builder$] = builder;
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/bloc_builder.dart", 79, 16, "builder != null");
      BlocBuilder.__proto__.new.call(this, {key: key, bloc: bloc, condition: condition, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocBuilder.prototype;
    dart.addTypeTests(BlocBuilder);
    BlocBuilder.prototype[_is_BlocBuilder_default] = true;
    const builder$ = Symbol("BlocBuilder.builder");
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
        let t0, t0$, t0$0;
        super.initState();
        this[_bloc$] = (t0 = this.widget.bloc, t0 == null ? bloc_provider.BlocProvider.of(B, this.context) : t0);
        this[_previousState$] = (t0$ = this[_bloc$], t0$ == null ? null : t0$.currentState);
        this[_state] = (t0$0 = this[_bloc$], t0$0 == null ? null : t0$0.currentState);
        this[_subscribe$]();
      }
      didUpdateWidget(oldWidget) {
        let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4;
        BlocBuilderBaseOfB$S()._check(oldWidget);
        super.didUpdateWidget(oldWidget);
        let oldState = (t0$ = (t0 = oldWidget.bloc, t0 == null ? null : t0.state), t0$ == null ? bloc_provider.BlocProvider.of(B, this.context).state : t0$);
        let currentState = (t0$1 = (t0$0 = this.widget.bloc, t0$0 == null ? null : t0$0.state), t0$1 == null ? oldState : t0$1);
        if (!dart.equals(oldState, currentState)) {
          if (this[_subscription$] != null) {
            this[_unsubscribe$]();
            this[_bloc$] = (t0$2 = this.widget.bloc, t0$2 == null ? bloc_provider.BlocProvider.of(B, this.context) : t0$2);
            this[_previousState$] = (t0$3 = this[_bloc$], t0$3 == null ? null : t0$3.currentState);
            this[_state] = (t0$4 = this[_bloc$], t0$4 == null ? null : t0$4.currentState);
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
        let t0;
        if ((t0 = this[_bloc$], t0 == null ? null : t0.state) != null) {
          this[_subscription$] = this[_bloc$].state.skip(1).listen(dart.fn(state => {
            let t0, t0$;
            if (dart.test((t0$ = (t0 = SAndSTobool()._check(this.widget.condition), t0 == null ? null : t0(this[_previousState$], state)), t0$ == null ? true : t0$))) {
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
  let C13;
  let C14;
  let C12;
  let C11;
  multi_bloc_listener.MultiBlocListener = class MultiBlocListener extends framework.StatelessWidget {
    get listeners() {
      return this[listeners$];
    }
    set listeners(value) {
      super.listeners = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new provider.MultiProvider.new({providers: this.listeners, child: this.child, $creationLocationd_0dea112b090073317d4: C11 || CT.C11});
    }
  };
  (multi_bloc_listener.MultiBlocListener.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let listeners = opts && 'listeners' in opts ? opts.listeners : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[listeners$] = listeners;
    this[child$0] = child;
    if (!(listeners != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart", 62, 16, "listeners != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_listener.dart", 63, 16, "child != null");
    multi_bloc_listener.MultiBlocListener.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_bloc_listener.MultiBlocListener.prototype;
  dart.addTypeTests(multi_bloc_listener.MultiBlocListener);
  const listeners$ = Symbol("MultiBlocListener.listeners");
  const child$0 = Symbol("MultiBlocListener.child");
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
  let C17;
  let C18;
  let C16;
  let C15;
  multi_bloc_provider.MultiBlocProvider = class MultiBlocProvider extends framework.StatelessWidget {
    get providers() {
      return this[providers$0];
    }
    set providers(value) {
      super.providers = value;
    }
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new provider.MultiProvider.new({providers: this.providers, child: this.child, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (multi_bloc_provider.MultiBlocProvider.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let providers = opts && 'providers' in opts ? opts.providers : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[providers$0] = providers;
    this[child$1] = child;
    if (!(providers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart", 63, 16, "providers != null");
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_bloc/src/multi_bloc_provider.dart", 64, 16, "child != null");
    multi_bloc_provider.MultiBlocProvider.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = multi_bloc_provider.MultiBlocProvider.prototype;
  dart.addTypeTests(multi_bloc_provider.MultiBlocProvider);
  const providers$0 = Symbol("MultiBlocProvider.providers");
  const child$1 = Symbol("MultiBlocProvider.child");
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      BlocProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: dart.fn((_, bloc) => {
          let t0;
          t0 = bloc;
          return t0 == null ? null : t0.dispose();
        }, BuildContextAndTTovoid()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocProvider.prototype;
    (BlocProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      BlocProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = BlocProvider.prototype;
    dart.addTypeTests(BlocProvider);
    BlocProvider.prototype[_is_BlocProvider_default] = true;
    dart.setLibraryUri(BlocProvider, "package:flutter_bloc/src/bloc_provider.dart");
    return BlocProvider;
  });
  bloc_provider.BlocProvider = bloc_provider.BlocProvider$();
  dart.addTypeTests(bloc_provider.BlocProvider, _is_BlocProvider_default);
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
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      RepositoryProvider.__proto__.new.call(this, {key: key, builder: builder, dispose: dart.fn((_, __) => {
        }, BuildContextAndTToNull()), child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = RepositoryProvider.prototype;
    (RepositoryProvider.value = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      RepositoryProvider.__proto__.value.call(this, {key: key, value: value, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = RepositoryProvider.prototype;
    dart.addTypeTests(RepositoryProvider);
    RepositoryProvider.prototype[_is_RepositoryProvider_default] = true;
    dart.setLibraryUri(RepositoryProvider, "package:flutter_bloc/src/repository_provider.dart");
    return RepositoryProvider;
  });
  repository_provider.RepositoryProvider = repository_provider.RepositoryProvider$();
  dart.addTypeTests(repository_provider.RepositoryProvider, _is_RepositoryProvider_default);
  dart.trackLibraries("packages/flutter_bloc/flutter_bloc", {
    "package:flutter_bloc/flutter_bloc.dart": flutter_bloc,
    "package:flutter_bloc/src/bloc_listener.dart": bloc_listener,
    "package:flutter_bloc/src/multi_repository_provider.dart": multi_repository_provider,
    "package:flutter_bloc/src/bloc_builder.dart": bloc_builder,
    "package:flutter_bloc/src/multi_bloc_listener.dart": multi_bloc_listener,
    "package:flutter_bloc/src/multi_bloc_provider.dart": multi_bloc_provider,
    "package:flutter_bloc/src/bloc_provider.dart": bloc_provider,
    "package:flutter_bloc/src/repository_provider.dart": repository_provider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/bloc_listener.dart","src/multi_repository_provider.dart","src/bloc_builder.dart","src/multi_bloc_listener.dart","src/multi_bloc_provider.dart","src/bloc_provider.dart","src/repository_provider.dart"],"names":[],"mappings":"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","file":"flutter_bloc.ddc.js"}');
  // Exports:
  return {
    flutter_bloc: flutter_bloc,
    src__bloc_listener: bloc_listener,
    src__multi_repository_provider: multi_repository_provider,
    src__bloc_builder: bloc_builder,
    src__multi_bloc_listener: multi_bloc_listener,
    src__multi_bloc_provider: multi_bloc_provider,
    src__bloc_provider: bloc_provider,
    src__repository_provider: repository_provider
  };
});

//# sourceMappingURL=flutter_bloc.ddc.js.map

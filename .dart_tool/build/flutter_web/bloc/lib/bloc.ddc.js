define(['dart_sdk', 'packages/rxdart/futures'], function(dart_sdk, packages__rxdart__futures) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const publish_subject = packages__rxdart__futures.src__subjects__publish_subject;
  const behavior_subject = packages__rxdart__futures.src__subjects__behavior_subject;
  const bloc = Object.create(dart.library);
  const bloc$ = Object.create(dart.library);
  const transition = Object.create(dart.library);
  const bloc_delegate = Object.create(dart.library);
  const bloc_supervisor = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const CT = Object.create(null);
  const _eventSubject = dart.privateName(bloc, "_eventSubject");
  const _stateSubject = dart.privateName(bloc, "_stateSubject");
  const _bindStateSubject = dart.privateName(bloc, "_bindStateSubject");
  const _handleError = dart.privateName(bloc, "_handleError");
  const _is_Bloc_default = Symbol('_is_Bloc_default');
  bloc.Bloc$ = dart.generic((Event, State) => {
    let PublishSubjectOfEvent = () => (PublishSubjectOfEvent = dart.constFn(publish_subject.PublishSubject$(Event)))();
    let TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    let StreamOfEvent = () => (StreamOfEvent = dart.constFn(async.Stream$(Event)))();
    let EventToStreamOfState = () => (EventToStreamOfState = dart.constFn(dart.fnType(StreamOfState(), [Event])))();
    let BehaviorSubjectOfState = () => (BehaviorSubjectOfState = dart.constFn(behavior_subject.BehaviorSubject$(State)))();
    let StreamOfState = () => (StreamOfState = dart.constFn(async.Stream$(State)))();
    let StateToNull = () => (StateToNull = dart.constFn(dart.fnType(core.Null, [State])))();
    class Bloc extends core.Object {
      get state() {
        return this[_stateSubject].stream;
      }
      get currentState() {
        return this[_stateSubject].value;
      }
      onEvent(event) {
        Event._check(event);
        return null;
      }
      onTransition(transition) {
        TransitionOfEvent$State()._check(transition);
        return null;
      }
      onError(error, stacktrace) {
        return null;
      }
      dispatch(event) {
        Event._check(event);
        try {
          bloc_supervisor.BlocSupervisor.delegate.onEvent(this, event);
          this.onEvent(event);
          this[_eventSubject].sink.add(event);
        } catch (e) {
          let error = dart.getThrown(e);
          this[_handleError](error);
        }
      }
      dispose() {
        this[_eventSubject].close();
        this[_stateSubject].close();
      }
      transformEvents(events, next) {
        StreamOfEvent()._check(events);
        EventToStreamOfState()._check(next);
        return events.asyncExpand(State, next);
      }
      transformStates(states) {
        StreamOfState()._check(states);
        return states;
      }
      [_bindStateSubject]() {
        let currentEvent = null;
        this.transformStates(this.transformEvents(this[_eventSubject], dart.fn(event => {
          currentEvent = event;
          return this.mapEventToState(currentEvent).handleError(dart.bind(this, _handleError));
        }, EventToStreamOfState()))).forEach(dart.fn(nextState => {
          if (dart.equals(this.currentState, nextState) || dart.test(this[_stateSubject].isClosed)) return;
          let transition = new (TransitionOfEvent$State()).new({currentState: this.currentState, event: currentEvent, nextState: nextState});
          bloc_supervisor.BlocSupervisor.delegate.onTransition(this, transition);
          this.onTransition(transition);
          this[_stateSubject].add(nextState);
        }, StateToNull()));
      }
      [_handleError](error, stacktrace) {
        if (stacktrace === void 0) stacktrace = null;
        bloc_supervisor.BlocSupervisor.delegate.onError(this, error, stacktrace);
        this.onError(error, stacktrace);
      }
    }
    (Bloc.new = function() {
      this[_eventSubject] = PublishSubjectOfEvent().new();
      this[_stateSubject] = null;
      this[_stateSubject] = BehaviorSubjectOfState().seeded(this.initialState);
      this[_bindStateSubject]();
    }).prototype = Bloc.prototype;
    dart.addTypeTests(Bloc);
    Bloc.prototype[_is_Bloc_default] = true;
    dart.setMethodSignature(Bloc, () => ({
      __proto__: dart.getMethods(Bloc.__proto__),
      onEvent: dart.fnType(dart.void, [core.Object]),
      onTransition: dart.fnType(dart.void, [core.Object]),
      onError: dart.fnType(dart.void, [core.Object, core.StackTrace]),
      dispatch: dart.fnType(dart.void, [core.Object]),
      dispose: dart.fnType(dart.void, []),
      transformEvents: dart.fnType(async.Stream$(State), [core.Object, core.Object]),
      transformStates: dart.fnType(async.Stream$(State), [core.Object]),
      [_bindStateSubject]: dart.fnType(dart.void, []),
      [_handleError]: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setGetterSignature(Bloc, () => ({
      __proto__: dart.getGetters(Bloc.__proto__),
      state: async.Stream$(State),
      currentState: State
    }));
    dart.setLibraryUri(Bloc, "package:bloc/src/bloc.dart");
    dart.setFieldSignature(Bloc, () => ({
      __proto__: dart.getFields(Bloc.__proto__),
      [_eventSubject]: dart.finalFieldType(publish_subject.PublishSubject$(Event)),
      [_stateSubject]: dart.fieldType(behavior_subject.BehaviorSubject$(State))
    }));
    return Bloc;
  });
  bloc.Bloc = bloc.Bloc$();
  dart.addTypeTests(bloc.Bloc, _is_Bloc_default);
  const _is_Transition_default = Symbol('_is_Transition_default');
  transition.Transition$ = dart.generic((Event, State) => {
    let TransitionOfEvent$State = () => (TransitionOfEvent$State = dart.constFn(transition.Transition$(Event, State)))();
    class Transition extends core.Object {
      get currentState() {
        return this[currentState$];
      }
      set currentState(value) {
        super.currentState = value;
      }
      get event() {
        return this[event$];
      }
      set event(value) {
        super.event = value;
      }
      get nextState() {
        return this[nextState$];
      }
      set nextState(value) {
        super.nextState = value;
      }
      _equals(other) {
        if (other == null) return false;
        return this === other || TransitionOfEvent$State().is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.currentState, other.currentState) && dart.equals(this.event, other.event) && dart.equals(this.nextState, other.nextState);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.currentState)) ^ dart.notNull(dart.hashCode(this.event)) ^ dart.notNull(dart.hashCode(this.nextState))) >>> 0;
      }
      toString() {
        return "Transition { currentState: " + dart.str(this.currentState) + ", event: " + dart.str(this.event) + ", nextState: " + dart.str(this.nextState) + " }";
      }
    }
    (Transition.new = function(opts) {
      let currentState = opts && 'currentState' in opts ? opts.currentState : null;
      let event = opts && 'event' in opts ? opts.event : null;
      let nextState = opts && 'nextState' in opts ? opts.nextState : null;
      this[currentState$] = currentState;
      this[event$] = event;
      this[nextState$] = nextState;
      if (!(currentState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 15, 16, "currentState != null");
      if (!(event != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 16, 16, "event != null");
      if (!(nextState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/bloc/src/transition.dart", 17, 16, "nextState != null");
      ;
    }).prototype = Transition.prototype;
    dart.addTypeTests(Transition);
    Transition.prototype[_is_Transition_default] = true;
    const currentState$ = Symbol("Transition.currentState");
    const event$ = Symbol("Transition.event");
    const nextState$ = Symbol("Transition.nextState");
    dart.setMethodSignature(Transition, () => ({
      __proto__: dart.getMethods(Transition.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Transition, "package:bloc/src/transition.dart");
    dart.setFieldSignature(Transition, () => ({
      __proto__: dart.getFields(Transition.__proto__),
      currentState: dart.finalFieldType(State),
      event: dart.finalFieldType(Event),
      nextState: dart.finalFieldType(State)
    }));
    dart.defineExtensionMethods(Transition, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Transition, ['hashCode']);
    return Transition;
  });
  transition.Transition = transition.Transition$();
  dart.addTypeTests(transition.Transition, _is_Transition_default);
  bloc_delegate.BlocDelegate = class BlocDelegate extends core.Object {
    onEvent(bloc, event) {
      return null;
    }
    onTransition(bloc, transition) {
      return null;
    }
    onError(bloc, error, stacktrace) {
      return null;
    }
  };
  (bloc_delegate.BlocDelegate.new = function() {
    ;
  }).prototype = bloc_delegate.BlocDelegate.prototype;
  dart.addTypeTests(bloc_delegate.BlocDelegate);
  dart.setMethodSignature(bloc_delegate.BlocDelegate, () => ({
    __proto__: dart.getMethods(bloc_delegate.BlocDelegate.__proto__),
    onEvent: dart.fnType(dart.void, [bloc.Bloc, core.Object]),
    onTransition: dart.fnType(dart.void, [bloc.Bloc, transition.Transition]),
    onError: dart.fnType(dart.void, [bloc.Bloc, core.Object, core.StackTrace])
  }));
  dart.setLibraryUri(bloc_delegate.BlocDelegate, "package:bloc/src/bloc_delegate.dart");
  const _delegate = dart.privateName(bloc_supervisor, "_delegate");
  bloc_supervisor.BlocSupervisor = class BlocSupervisor extends core.Object {
    static get delegate() {
      return bloc_supervisor.BlocSupervisor._instance[_delegate];
    }
    static set delegate(d) {
      let t1;
      bloc_supervisor.BlocSupervisor._instance[_delegate] = (t1 = d, t1 == null ? new bloc_delegate.BlocDelegate.new() : t1);
    }
  };
  (bloc_supervisor.BlocSupervisor.__ = function() {
    this[_delegate] = new bloc_delegate.BlocDelegate.new();
    ;
  }).prototype = bloc_supervisor.BlocSupervisor.prototype;
  dart.addTypeTests(bloc_supervisor.BlocSupervisor);
  dart.setLibraryUri(bloc_supervisor.BlocSupervisor, "package:bloc/src/bloc_supervisor.dart");
  dart.setFieldSignature(bloc_supervisor.BlocSupervisor, () => ({
    __proto__: dart.getFields(bloc_supervisor.BlocSupervisor.__proto__),
    [_delegate]: dart.fieldType(bloc_delegate.BlocDelegate)
  }));
  dart.defineLazy(bloc_supervisor.BlocSupervisor, {
    /*bloc_supervisor.BlocSupervisor._instance*/get _instance() {
      return new bloc_supervisor.BlocSupervisor.__();
    }
  });
  dart.trackLibraries("packages/bloc/bloc", {
    "package:bloc/src/bloc.dart": bloc,
    "package:bloc/bloc.dart": bloc$,
    "package:bloc/src/transition.dart": transition,
    "package:bloc/src/bloc_delegate.dart": bloc_delegate,
    "package:bloc/src/bloc_supervisor.dart": bloc_supervisor
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/bloc.dart","src/transition.dart","src/bloc_delegate.dart","src/bloc_supervisor.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAe6B,cAAA,AAAc;MAAM;;AAMrB,cAAA,AAAc;MAAK;cAS1B;;AAAU;MAAI;mBAMU;;AAAe;MAAI;cAM1C,OAAkB;AAAe;MAAI;eAQrC;;;UAED,AAAS,gDAAQ,MAAM,KAAK;UAC3C,aAAQ,KAAK;UACb,AAAc,AAAK,6BAAI,KAAK;;cACrB;UACP,mBAAa,KAAK;;MAEtB;;QAUE,AAAc;QACd,AAAc;MAChB;sBA+BgB,QACA;;;AAEd,cAAO,AAAO,OAAD,oBAAa,IAAI;MAChC;sBAuB4C;;AAAW,qBAAM;;;AAGrD;QAEN,AAGI,qBAHY,qBAAgB,qBAAe,QAAO;UACpD,eAAe,KAAK;AACpB,gBAAO,AAA8B,sBAAd,YAAY,wBAAc;6CAEjD,QAAO;AACL,cAAiB,YAAb,mBAAgB,SAAS,eAAI,AAAc,+BAAU;AACnD,2BAAa,mDACH,0BACP,YAAY,aACR,SAAS;UAEP,AAAS,qDAAa,MAAM,UAAU;UACrD,kBAAa,UAAU;UACvB,AAAc,wBAAI,SAAS;;MAGjC;qBAEyB,OAAmB;;QAC3B,AAAS,gDAAQ,MAAM,KAAK,EAAE,UAAU;QACvD,aAAQ,KAAK,EAAE,UAAU;MAC3B;;;MAjJ4B,sBAAgB;MAErB;MAarB,sBAAc,gCAAgC;MAC9C;IACF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCpBY;;;;;;MACA;;;;;;MACA;;;;;;;YAWY;AACpB,cAAA,AAAU,AAAa,UAAP,KAAK,IACf,6BAAN,KAAK,KACW,YAAZ,oBAAqB,iBAAN,KAAK,MACP,YAAb,mBAAgB,AAAM,KAAD,kBACf,YAAN,YAAS,AAAM,KAAD,WACJ,YAAV,gBAAa,AAAM,KAAD;MAAU;;AAIhC,cAAuC,EAAjB,aAAT,cAAb,mCAA8B,cAAN,4BAA2B,cAAV;MAAkB;;AAI3D,cAAA,AAAkF,0CAArD,qBAAY,uBAAU,cAAK,2BAAc,kBAAS;MAAG;;;UAtBrE;UACA;UACA;MAFA;MACA;MACA;YACJ,YAAY,IAAI;YAChB,KAAK,IAAI;YACT,SAAS,IAAI;;IAAK;;;;;;;;;;;;;;;;;;;;;;;;;YCPb,MAAa;AAAU;IAAI;iBAOtB,MAAiB;AAAe;IAAI;YAOzC,MAAa,OAAkB;AAAe;IAAI;;;;EACtE;;;;;;;;;;;;ACZsC,YAAA,AAAU;IAAS;wBAGtB;;MAC/B,AAAU,uDAAc,KAAF,CAAC,QAAC,OAAG;IAC7B;;;IAZa,kBAAY;;EAEP;;;;;;;;MAEU,wCAAS;YAAkB","file":"bloc.ddc.js"}');
  // Exports:
  return {
    src__bloc: bloc,
    bloc: bloc$,
    src__transition: transition,
    src__bloc_delegate: bloc_delegate,
    src__bloc_supervisor: bloc_supervisor
  };
});

//# sourceMappingURL=bloc.ddc.js.map

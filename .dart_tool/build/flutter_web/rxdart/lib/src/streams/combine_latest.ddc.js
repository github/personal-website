define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fork_join = Object.create(dart.library);
  const error = Object.create(dart.library);
  const combine_latest = Object.create(dart.library);
  const retry_when = Object.create(dart.library);
  const retry = Object.create(dart.library);
  const merge = Object.create(dart.library);
  const concat = Object.create(dart.library);
  const switch_latest = Object.create(dart.library);
  const concat_eager = Object.create(dart.library);
  const range = Object.create(dart.library);
  const sequence_equal = Object.create(dart.library);
  const zip = Object.create(dart.library);
  const repeat = Object.create(dart.library);
  const materialize = Object.create(dart.library);
  const timer = Object.create(dart.library);
  const defer = Object.create(dart.library);
  const never = Object.create(dart.library);
  const notification = Object.create(dart.library);
  const utils = Object.create(dart.library);
  const race = Object.create(dart.library);
  const $every = dartx.every;
  const $isNotEmpty = dartx.isNotEmpty;
  const $_get = dartx._get;
  const $map = dartx.map;
  const $length = dartx.length;
  const $_set = dartx._set;
  const $toList = dartx.toList;
  const $forEach = dartx.forEach;
  const $where = dartx.where;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $any = dartx.any;
  const $elementAt = dartx.elementAt;
  const $first = dartx.first;
  const $abs = dartx.abs;
  const $toString = dartx.toString;
  const $remove = dartx.remove;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $runtimeType = dartx.runtimeType;
  const $removeAt = dartx.removeAt;
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let dynamicToFuture = () => (dynamicToFuture = dart.constFn(dart.fnType(async.Future, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let StreamSubscriptionTovoid = () => (StreamSubscriptionTovoid = dart.constFn(dart.fnType(dart.void, [async.StreamSubscription])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let JSArrayOfErrorAndStacktrace = () => (JSArrayOfErrorAndStacktrace = dart.constFn(_interceptors.JSArray$(utils.ErrorAndStacktrace)))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let ObjectAndStackTraceToNull = () => (ObjectAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [core.Object], [core.StackTrace])))();
  let VoidToRetryError = () => (VoidToRetryError = dart.constFn(dart.fnType(utils.RetryError, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [], [core.int])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfCompleter = () => (ListOfCompleter = dart.constFn(core.List$(async.Completer)))();
  let intToCompleter = () => (intToCompleter = dart.constFn(dart.fnType(async.Completer, [core.int])))();
  let intToFn = () => (intToFn = dart.constFn(dart.fnType(VoidToNull(), [core.int])))();
  let intToint = () => (intToint = dart.constFn(dart.fnType(core.int, [core.int])))();
  let StreamOfint = () => (StreamOfint = dart.constFn(async.Stream$(core.int)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let StreamControllerOfbool = () => (StreamControllerOfbool = dart.constFn(async.StreamController$(core.bool)))();
  let boolToStreamControllerOfbool = () => (boolToStreamControllerOfbool = dart.constFn(dart.fnType(StreamControllerOfbool(), [], [core.bool])))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let intToNull$ = () => (intToNull$ = dart.constFn(dart.fnType(core.Null, [core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnData",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnDone",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: notification.Kind.prototype,
        [_name$]: "Kind.OnError",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2], notification.Kind);
    }
  });
  const _is_ForkJoinStream_default = Symbol('_is_ForkJoinStream_default');
  fork_join.ForkJoinStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ForkJoinStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (fork_join.ForkJoinStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (fork_join.ForkJoinStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let onDone = dart.fn(values => {
              try {
                controller.add(combiner(values));
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              controller.close();
            }, dart.fnType(core.Null, [core.List$(T)]));
            async.Future.wait(T, streams[$map](async.Future$(T), dart.fn(stream => stream.last, dart.fnType(async.Future$(T), [async.Stream$(T)]))), {eagerError: true, cleanUp: dart.fn(_ => controller.close(), dynamicToFuture())}).then(core.Null, onDone, {onError: dart.bind(controller, 'addError')});
          }, VoidToNull())});
        return controller;
      }
    }
    (ForkJoinStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 65, 16, "streams != null && streams.every((s) => s != null)");
      if (!dart.test(streams[$isNotEmpty])) dart.assertFailed("provide at least 1 stream", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 67, 16, "streams.isNotEmpty");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/fork_join.dart", 68, 16, "combiner != null");
      ForkJoinStream.__proto__.new.call(this, fork_join.ForkJoinStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = ForkJoinStream.prototype;
    dart.addTypeTests(ForkJoinStream);
    ForkJoinStream.prototype[_is_ForkJoinStream_default] = true;
    dart.setLibraryUri(ForkJoinStream, "package:rxdart/src/streams/fork_join.dart");
    return ForkJoinStream;
  });
  fork_join.ForkJoinStream = fork_join.ForkJoinStream$();
  dart.addTypeTests(fork_join.ForkJoinStream, _is_ForkJoinStream_default);
  const _is_ErrorStream_default = Symbol('_is_ErrorStream_default');
  error.ErrorStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class ErrorStream extends async.Stream$(T) {
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let t1;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        t1 = this.controller;
        t1.addError(this.error);
        t1.close();
        t1;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (ErrorStream.new = function(error) {
      this[controller] = StreamControllerOfT().new();
      this[error$] = error;
      ErrorStream.__proto__.new.call(this);
      ;
    }).prototype = ErrorStream.prototype;
    dart.addTypeTests(ErrorStream);
    ErrorStream.prototype[_is_ErrorStream_default] = true;
    const error$ = Symbol("ErrorStream.error");
    const controller = Symbol("ErrorStream.controller");
    dart.setMethodSignature(ErrorStream, () => ({
      __proto__: dart.getMethods(ErrorStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ErrorStream, "package:rxdart/src/streams/error.dart");
    dart.setFieldSignature(ErrorStream, () => ({
      __proto__: dart.getFields(ErrorStream.__proto__),
      error: dart.finalFieldType(core.Object),
      controller: dart.fieldType(async.StreamController$(T))
    }));
    return ErrorStream;
  });
  error.ErrorStream = error.ErrorStream$();
  dart.addTypeTests(error.ErrorStream, _is_ErrorStream_default);
  const _is_CombineLatestStream_default = Symbol('_is_CombineLatestStream_default');
  combine_latest.CombineLatestStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class CombineLatestStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (combine_latest.CombineLatestStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static combine2(A, B, R, streamOne, streamTwo, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static combine3(A, B, C, R, streamA, streamB, streamC, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static combine4(A, B, C, D, R, streamA, streamB, streamC, streamD, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static combine5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static combine6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static combine7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static combine8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static combine9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (combine_latest.CombineLatestStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => combiner(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, combiner) {
        let len = streams[$length];
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
            let values = core.List$(T).new(len);
            let triggered = 0;
            let completed = 0;
            let index = 0;
            let allHaveEvent = dart.fn(() => triggered === len, VoidTobool());
            let onDone = dart.fn(() => {
              if ((completed = completed + 1) === len) controller.close();
            }, VoidToNull());
            let onUpdate = dart.fn(index => dart.fn(value => {
              let t3, t2, t1;
              t1 = values;
              t2 = index;
              t3 = value;
              t1[$_set](t2, t3);
              return t3;
            }, dart.fnType(T, [T])), dart.fnType(dart.fnType(T, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t1;
              let onUpdateForStream = onUpdate((t1 = index, index = t1 + 1, t1));
              let hasFirstEvent = false;
              return stream.listen(dart.fn(value => {
                onUpdateForStream(value);
                if (!hasFirstEvent) {
                  hasFirstEvent = true;
                  triggered = triggered + 1;
                }
                if (dart.test(allHaveEvent())) {
                  try {
                    controller.add(combiner(core.List$(T).unmodifiable(values)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), StreamSubscriptionTovoid()));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), StreamSubscriptionTovoid())), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (CombineLatestStream.new = function(streams, combiner) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 54, 16, "streams != null && streams.every((s) => s != null)");
      if (!(combiner != null)) dart.assertFailed("must provide a combiner function", "org-dartlang-app:///packages/rxdart/src/streams/combine_latest.dart", 56, 16, "combiner != null");
      CombineLatestStream.__proto__.new.call(this, combine_latest.CombineLatestStream._buildController(T, R, streams, combiner).stream);
      ;
    }).prototype = CombineLatestStream.prototype;
    dart.addTypeTests(CombineLatestStream);
    CombineLatestStream.prototype[_is_CombineLatestStream_default] = true;
    dart.setLibraryUri(CombineLatestStream, "package:rxdart/src/streams/combine_latest.dart");
    return CombineLatestStream;
  });
  combine_latest.CombineLatestStream = combine_latest.CombineLatestStream$();
  dart.addTypeTests(combine_latest.CombineLatestStream, _is_CombineLatestStream_default);
  const _errors = dart.privateName(retry_when, "_errors");
  const _retry = dart.privateName(retry_when, "_retry");
  const _is_RetryWhenStream_default = Symbol('_is_RetryWhenStream_default');
  retry_when.RetryWhenStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RetryWhenStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get retryWhenFactory() {
        return this[retryWhenFactory$];
      }
      set retryWhenFactory(value) {
        super.retryWhenFactory = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this.controller == null ? this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, _retry), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())}) : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      [_retry]() {
        this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
            if (s === void 0) s = null;
            this.subscription.cancel();
            let sub = null;
            sub = this.retryWhenFactory(e, s).listen(dart.fn(event => {
              sub.cancel();
              this[_errors][$add](new utils.ErrorAndStacktrace.new(e, s));
              this[_retry]();
            }, voidToNull()), {onError: dart.fn((e, s) => {
                let t3, t2;
                if (s === void 0) s = null;
                sub.cancel();
                t2 = this.controller;
                t2.addError(utils.RetryError.onReviveFailed((t3 = this[_errors], t3[$add](new utils.ErrorAndStacktrace.new(e, s)), t3)));
                t2.close();
                t2;
              }, ObjectAndStackTraceToNull())});
          }, ObjectAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
      }
    }
    (RetryWhenStream.new = function(streamFactory, retryWhenFactory) {
      this[controller] = null;
      this[subscription] = null;
      this[_errors] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[retryWhenFactory$] = retryWhenFactory;
      RetryWhenStream.__proto__.new.call(this);
      ;
    }).prototype = RetryWhenStream.prototype;
    dart.addTypeTests(RetryWhenStream);
    RetryWhenStream.prototype[_is_RetryWhenStream_default] = true;
    const streamFactory$ = Symbol("RetryWhenStream.streamFactory");
    const retryWhenFactory$ = Symbol("RetryWhenStream.retryWhenFactory");
    const controller = Symbol("RetryWhenStream.controller");
    const subscription = Symbol("RetryWhenStream.subscription");
    dart.setMethodSignature(RetryWhenStream, () => ({
      __proto__: dart.getMethods(RetryWhenStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      [_retry]: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RetryWhenStream, "package:rxdart/src/streams/retry_when.dart");
    dart.setFieldSignature(RetryWhenStream, () => ({
      __proto__: dart.getFields(RetryWhenStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      retryWhenFactory: dart.finalFieldType(dart.fnType(async.Stream$(dart.void), [dart.dynamic, core.StackTrace])),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T)),
      [_errors]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryWhenStream;
  });
  retry_when.RetryWhenStream = retry_when.RetryWhenStream$();
  dart.addTypeTests(retry_when.RetryWhenStream, _is_RetryWhenStream_default);
  const _errors$ = dart.privateName(retry, "_errors");
  const _is_RetryStream_default = Symbol('_is_RetryStream_default');
  retry.RetryStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RetryStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        this[count$] = value;
      }
      get retryStep() {
        return this[retryStep];
      }
      set retryStep(value) {
        this[retryStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        let retry = null;
        let combinedErrors = dart.fn(() => utils.RetryError.withCount(this.count, this[_errors$]), VoidToRetryError());
        retry = dart.fn(_ => {
          if (_ === void 0) _ = null;
          this.subscription = this.streamFactory().listen(dart.bind(this.controller, 'add'), {onError: dart.fn((e, s) => {
              let t2;
              this.subscription.cancel();
              this[_errors$][$add](new utils.ErrorAndStacktrace.new(e, s));
              if (this.count == this.retryStep) {
                t2 = this.controller;
                t2.addError(combinedErrors());
                t2.close();
                t2;
              } else {
                retry(this.retryStep = dart.notNull(this.retryStep) + 1);
              }
            }, dynamicAndStackTraceToNull()), onDone: dart.bind(this.controller, 'close'), cancelOnError: false});
        }, intToNull());
        this.controller == null ? this.controller = StreamControllerOfT().new({sync: true, onListen: retry, onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => this.subscription.cancel(), VoidToFuture())}) : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (RetryStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[retryStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[_errors$] = JSArrayOfErrorAndStacktrace().of([]);
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RetryStream.__proto__.new.call(this);
      ;
    }).prototype = RetryStream.prototype;
    dart.addTypeTests(RetryStream);
    RetryStream.prototype[_is_RetryStream_default] = true;
    const streamFactory$ = Symbol("RetryStream.streamFactory");
    const count$ = Symbol("RetryStream.count");
    const retryStep = Symbol("RetryStream.retryStep");
    const controller = Symbol("RetryStream.controller");
    const subscription = Symbol("RetryStream.subscription");
    dart.setMethodSignature(RetryStream, () => ({
      __proto__: dart.getMethods(RetryStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(RetryStream, "package:rxdart/src/streams/retry.dart");
    dart.setFieldSignature(RetryStream, () => ({
      __proto__: dart.getFields(RetryStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      count: dart.fieldType(core.int),
      retryStep: dart.fieldType(core.int),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T)),
      [_errors$]: dart.fieldType(core.List$(utils.ErrorAndStacktrace))
    }));
    return RetryStream;
  });
  retry.RetryStream = retry.RetryStream$();
  dart.addTypeTests(retry.RetryStream, _is_RetryStream_default);
  const _is_MergeStream_default = Symbol('_is_MergeStream_default');
  merge.MergeStream$ = dart.generic(T => {
    class MergeStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let subscriptions = core.List$(async.StreamSubscription$(T)).new(len);
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let completed = 0;
            let onDone = dart.fn(() => {
              completed = completed + 1;
              if (completed === len) controller.close();
            }, VoidToNull());
            for (let i = 0; i < dart.notNull(len); i = i + 1) {
              let stream = streams[$elementAt](i);
              subscriptions[$_set](i, stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone}));
            }
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (MergeStream.new = function(streams) {
      this[controller] = merge.MergeStream._buildController(T, streams);
      MergeStream.__proto__.new.call(this);
      ;
    }).prototype = MergeStream.prototype;
    dart.addTypeTests(MergeStream);
    MergeStream.prototype[_is_MergeStream_default] = true;
    const controller = Symbol("MergeStream.controller");
    dart.setMethodSignature(MergeStream, () => ({
      __proto__: dart.getMethods(MergeStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(MergeStream, "package:rxdart/src/streams/merge.dart");
    dart.setFieldSignature(MergeStream, () => ({
      __proto__: dart.getFields(MergeStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return MergeStream;
  });
  merge.MergeStream = merge.MergeStream$();
  dart.addTypeTests(merge.MergeStream, _is_MergeStream_default);
  const _is_ConcatStream_default = Symbol('_is_ConcatStream_default');
  concat.ConcatStream$ = dart.generic(T => {
    class ConcatStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("Streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("At least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let controller = null;
        let subscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let len = streams[$length];
            let index = 0;
            function moveNext() {
              let t2;
              let stream = streams[$elementAt](index);
              t2 = subscription;
              t2 == null ? null : t2.cancel();
              subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  index = index + 1;
                  if (index === len) {
                    controller.close();
                  } else {
                    moveNext();
                  }
                }, VoidToNull())});
            }
            dart.fn(moveNext, VoidTovoid());
            moveNext();
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            let t2;
            if (resumeSignal === void 0) resumeSignal = null;
            t2 = subscription;
            return t2 == null ? null : t2.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => {
            let t2;
            t2 = subscription;
            return t2 == null ? null : t2.resume();
          }, VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (ConcatStream.new = function(streams) {
      this[controller] = concat.ConcatStream._buildController(T, streams);
      ConcatStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatStream.prototype;
    dart.addTypeTests(ConcatStream);
    ConcatStream.prototype[_is_ConcatStream_default] = true;
    const controller = Symbol("ConcatStream.controller");
    dart.setMethodSignature(ConcatStream, () => ({
      __proto__: dart.getMethods(ConcatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ConcatStream, "package:rxdart/src/streams/concat.dart");
    dart.setFieldSignature(ConcatStream, () => ({
      __proto__: dart.getFields(ConcatStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatStream;
  });
  concat.ConcatStream = concat.ConcatStream$();
  dart.addTypeTests(concat.ConcatStream, _is_ConcatStream_default);
  const _controller = dart.privateName(switch_latest, "_controller");
  const _is_SwitchLatestStream_default = Symbol('_is_SwitchLatestStream_default');
  switch_latest.SwitchLatestStream$ = dart.generic(T => {
    class SwitchLatestStream extends async.Stream$(T) {
      get streams() {
        return this[streams$];
      }
      set streams(value) {
        super.streams = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this[_controller] == null ? this[_controller] = switch_latest.SwitchLatestStream._buildController(T, this.streams, cancelOnError) : null;
        return this[_controller].stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams, cancelOnError) {
        let controller = null;
        let subscription = null;
        let otherSubscription = null;
        let leftClosed = false;
        let rightClosed = false;
        let hasMainEvent = false;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let closeLeft = dart.fn(() => {
              leftClosed = true;
              if (rightClosed || !hasMainEvent) controller.close();
            }, VoidToNull());
            let closeRight = dart.fn(() => {
              rightClosed = true;
              if (leftClosed) controller.close();
            }, VoidToNull());
            subscription = streams.listen(dart.fn(stream => {
              let t2;
              try {
                t2 = otherSubscription;
                t2 == null ? null : t2.cancel();
                hasMainEvent = true;
                otherSubscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: closeRight});
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [async.Stream$(T)])), {onError: dart.bind(controller, 'addError'), onDone: closeLeft, cancelOnError: cancelOnError});
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            let t3;
            if (resumeSignal === void 0) resumeSignal = null;
            subscription.pause(resumeSignal);
            t3 = otherSubscription;
            t3 == null ? null : t3.pause(resumeSignal);
          }, FutureToNull()), onResume: dart.fn(() => {
            let t3;
            subscription.resume();
            t3 = otherSubscription;
            t3 == null ? null : t3.resume();
          }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
            yield subscription.cancel();
            if (hasMainEvent) yield otherSubscription.cancel();
          }), VoidToFutureOfNull())});
        return controller;
      }
    }
    (SwitchLatestStream.new = function(streams) {
      this[_controller] = null;
      this[streams$] = streams;
      SwitchLatestStream.__proto__.new.call(this);
      ;
    }).prototype = SwitchLatestStream.prototype;
    dart.addTypeTests(SwitchLatestStream);
    SwitchLatestStream.prototype[_is_SwitchLatestStream_default] = true;
    const streams$ = Symbol("SwitchLatestStream.streams");
    dart.setMethodSignature(SwitchLatestStream, () => ({
      __proto__: dart.getMethods(SwitchLatestStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(SwitchLatestStream, "package:rxdart/src/streams/switch_latest.dart");
    dart.setFieldSignature(SwitchLatestStream, () => ({
      __proto__: dart.getFields(SwitchLatestStream.__proto__),
      streams: dart.finalFieldType(async.Stream$(async.Stream$(T))),
      [_controller]: dart.fieldType(async.StreamController$(T))
    }));
    return SwitchLatestStream;
  });
  switch_latest.SwitchLatestStream = switch_latest.SwitchLatestStream$();
  dart.addTypeTests(switch_latest.SwitchLatestStream, _is_SwitchLatestStream_default);
  const _is_ConcatEagerStream_default = Symbol('_is_ConcatEagerStream_default');
  concat_eager.ConcatEagerStream$ = dart.generic(T => {
    class ConcatEagerStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("at least 1 stream needs to be provided"));
        } else if (dart.test(streams[$any](dart.fn(stream => stream == null, dart.fnType(core.bool, [async.Stream$(T)]))))) {
          dart.throw(new core.ArgumentError.new("One of the provided streams is null"));
        }
        let len = streams[$length];
        let completeEvents = ListOfCompleter().generate(len, dart.fn(_ => async.Completer.new(), intToCompleter()));
        let subscriptions = null;
        let controller = null;
        let activeSubscription = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = -1;
            let completed = 0;
            let onDone = dart.fn(index => {
              let completer = completeEvents[$_get](index);
              return dart.fn(() => {
                completer.complete();
                if ((completed = completed + 1) === len) {
                  controller.close();
                } else {
                  activeSubscription = subscriptions[$_get](dart.notNull(index) + 1);
                }
              }, VoidToNull());
            }, intToFn());
            let createSubscription = dart.fn(stream => {
              index = index + 1;
              let subscription = stream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone(index)});
              if (index > 0) subscription.pause(completeEvents[$_get](index - 1).future);
              return subscription;
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)]));
            subscriptions = streams[$map](async.StreamSubscription$(T), createSubscription)[$toList]({growable: false});
            activeSubscription = subscriptions[$first];
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return activeSubscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => activeSubscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (ConcatEagerStream.new = function(streams) {
      this[controller] = concat_eager.ConcatEagerStream._buildController(T, streams);
      ConcatEagerStream.__proto__.new.call(this);
      ;
    }).prototype = ConcatEagerStream.prototype;
    dart.addTypeTests(ConcatEagerStream);
    ConcatEagerStream.prototype[_is_ConcatEagerStream_default] = true;
    const controller = Symbol("ConcatEagerStream.controller");
    dart.setMethodSignature(ConcatEagerStream, () => ({
      __proto__: dart.getMethods(ConcatEagerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(ConcatEagerStream, "package:rxdart/src/streams/concat_eager.dart");
    dart.setFieldSignature(ConcatEagerStream, () => ({
      __proto__: dart.getFields(ConcatEagerStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return ConcatEagerStream;
  });
  concat_eager.ConcatEagerStream = concat_eager.ConcatEagerStream$();
  dart.addTypeTests(concat_eager.ConcatEagerStream, _is_ConcatEagerStream_default);
  range.RangeStream = class RangeStream extends async.Stream$(core.int) {
    get stream() {
      return this[stream];
    }
    set stream(value) {
      super.stream = value;
    }
    listen(onData, opts) {
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
      return this.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
    }
    static buildStream(startInclusive, endInclusive) {
      let length = (dart.notNull(endInclusive) - dart.notNull(startInclusive))[$abs]() + 1;
      let nextValue = dart.fn(index => dart.notNull(startInclusive) > dart.notNull(endInclusive) ? dart.notNull(startInclusive) - dart.notNull(index) : dart.notNull(startInclusive) + dart.notNull(index), intToint());
      return StreamOfint().fromIterable(ListOfint().generate(length, nextValue));
    }
  };
  (range.RangeStream.new = function(startInclusive, endInclusive) {
    this[stream] = range.RangeStream.buildStream(startInclusive, endInclusive);
    range.RangeStream.__proto__.new.call(this);
    ;
  }).prototype = range.RangeStream.prototype;
  dart.addTypeTests(range.RangeStream);
  const stream = Symbol("RangeStream.stream");
  dart.setMethodSignature(range.RangeStream, () => ({
    __proto__: dart.getMethods(range.RangeStream.__proto__),
    listen: dart.fnType(async.StreamSubscription$(core.int), [dart.fnType(dart.void, [core.int])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
  }));
  dart.setLibraryUri(range.RangeStream, "package:rxdart/src/streams/range.dart");
  dart.setFieldSignature(range.RangeStream, () => ({
    __proto__: dart.getFields(range.RangeStream.__proto__),
    stream: dart.finalFieldType(async.Stream$(core.int))
  }));
  const _is_SequenceEqualStream_default = Symbol('_is_SequenceEqualStream_default');
  sequence_equal.SequenceEqualStream$ = dart.generic((S, T) => {
    class SequenceEqualStream extends async.Stream$(core.bool) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(S, T, stream, other, equals) {
        let t3;
        if (stream == null) {
          dart.throw(new core.ArgumentError.notNull("stream"));
        }
        if (other == null) {
          dart.throw(new core.ArgumentError.notNull("other"));
        }
        let doCompare = (t3 = equals, t3 == null ? dart.fn((s, t) => dart.equals(s, t), dart.fnType(core.bool, [S, T])) : t3);
        let controller = null;
        let subscription = null;
        controller = StreamControllerOfbool().new({sync: true, onListen: dart.fn(() => {
            let emitAndClose = dart.fn(value => {
              let t3;
              if (value === void 0) value = true;
              t3 = controller;
              t3.add(value);
              t3.close();
              return t3;
            }, boolToStreamControllerOfbool());
            subscription = zip.ZipStream.zip2(notification.Notification$(S), notification.Notification$(T), core.bool, stream.transform(notification.Notification$(S), new (materialize.MaterializeStreamTransformer$(S)).new()), other.transform(notification.Notification$(T), new (materialize.MaterializeStreamTransformer$(T)).new()), dart.fn((s, t) => {
              let t3, t3$;
              return dart.equals(s.kind, t.kind) && (t3 = s.error, t3 == null ? null : dart.toString(t3)) == (t3$ = t.error, t3$ == null ? null : dart.toString(t3$)) && dart.test(doCompare(s.value, t.value));
            }, dart.fnType(core.bool, [notification.Notification$(S), notification.Notification$(T)]))).where(dart.fn(isEqual => !dart.test(isEqual), boolTobool())).listen(emitAndClose, {onError: dart.bind(controller, 'addError'), onDone: emitAndClose});
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
        return controller;
      }
    }
    (SequenceEqualStream.new = function(stream, other, opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      this[controller] = sequence_equal.SequenceEqualStream._buildController(S, T, stream, other, equals);
      SequenceEqualStream.__proto__.new.call(this);
      ;
    }).prototype = SequenceEqualStream.prototype;
    dart.addTypeTests(SequenceEqualStream);
    SequenceEqualStream.prototype[_is_SequenceEqualStream_default] = true;
    const controller = Symbol("SequenceEqualStream.controller");
    dart.setMethodSignature(SequenceEqualStream, () => ({
      __proto__: dart.getMethods(SequenceEqualStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(core.bool), [dart.fnType(dart.void, [core.bool])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(SequenceEqualStream, "package:rxdart/src/streams/sequence_equal.dart");
    dart.setFieldSignature(SequenceEqualStream, () => ({
      __proto__: dart.getFields(SequenceEqualStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(core.bool))
    }));
    return SequenceEqualStream;
  });
  sequence_equal.SequenceEqualStream = sequence_equal.SequenceEqualStream$();
  dart.addTypeTests(sequence_equal.SequenceEqualStream, _is_SequenceEqualStream_default);
  const _is_ZipStream_default = Symbol('_is_ZipStream_default');
  zip.ZipStream$ = dart.generic((T, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let StreamOfTTobool = () => (StreamOfTTobool = dart.constFn(dart.fnType(core.bool, [StreamOfT()])))();
    class ZipStream extends async.StreamView$(R) {
      static list(T, streams) {
        return new (zip.ZipStream$(T, core.List$(T))).new(streams, dart.fn(values => values, dart.fnType(core.List$(T), [core.List$(T)])));
      }
      static zip2(A, B, R, streamOne, streamTwo, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamOne, streamTwo]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [core.List])));
      }
      static zip3(A, B, C, R, streamA, streamB, streamC, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [core.List])));
      }
      static zip4(A, B, C, D, R, streamA, streamB, streamC, streamD, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [core.List])));
      }
      static zip5(A, B, C, D, E, R, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [core.List])));
      }
      static zip6(A, B, C, D, E, F, R, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [core.List])));
      }
      static zip7(A, B, C, D, E, F, G, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [core.List])));
      }
      static zip8(A, B, C, D, E, F, G, H, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [core.List])));
      }
      static zip9(A, B, C, D, E, F, G, H, I, R, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (zip.ZipStream$(dart.dynamic, R)).new(JSArrayOfStream().of([streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI]), dart.fn(values => zipper(A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [core.List])));
      }
      static _buildController(T, R, streams, zipper) {
        {
          let controller = null;
          let len = streams[$length];
          let subscriptions = null;
          let pendingSubscriptions = null;
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              try {
                let completeCurrent = null;
                let window = new (zip._Window$(T)).new(len);
                let index = 0;
                let next = dart.fn(() => {
                  let t3;
                  t3 = completeCurrent;
                  t3 == null ? null : t3.complete();
                  completeCurrent = async.Completer$(core.List$(T)).new();
                  pendingSubscriptions = subscriptions[$toList]();
                }, VoidToNull());
                let doUpdate = dart.fn(index => dart.fn(value => {
                  let t4;
                  window.onValue(index, value);
                  if (dart.test(window.isComplete)) {
                    try {
                      controller.add(zipper(window.flush()));
                      next();
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  } else {
                    let subscription = (t4 = subscriptions[$_get](index), t4.pause(completeCurrent.future), t4);
                    pendingSubscriptions[$remove](subscription);
                  }
                }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
                subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
                  let t4;
                  return stream.listen(doUpdate((t4 = index, index = t4 + 1, t4)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
                }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]({growable: false});
                next();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return pendingSubscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
            }, FutureTovoid()), onResume: dart.fn(() => pendingSubscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
          return controller;
        }
      }
    }
    (ZipStream.new = function(streams, zipper) {
      if (!(streams != null && dart.test(streams[$every](dart.fn(s => s != null, StreamOfTTobool()))))) dart.assertFailed("streams cannot be null", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 44, 16, "streams != null && streams.every((s) => s != null)");
      if (!(zipper != null)) dart.assertFailed("must provide a zipper function", "org-dartlang-app:///packages/rxdart/src/streams/zip.dart", 46, 16, "zipper != null");
      ZipStream.__proto__.new.call(this, zip.ZipStream._buildController(T, R, streams, zipper).stream);
      ;
    }).prototype = ZipStream.prototype;
    dart.addTypeTests(ZipStream);
    ZipStream.prototype[_is_ZipStream_default] = true;
    dart.setLibraryUri(ZipStream, "package:rxdart/src/streams/zip.dart");
    return ZipStream;
  });
  zip.ZipStream = zip.ZipStream$();
  dart.addTypeTests(zip.ZipStream, _is_ZipStream_default);
  const _valuesReceived = dart.privateName(zip, "_valuesReceived");
  const _values = dart.privateName(zip, "_values");
  const _is__Window_default = Symbol('_is__Window_default');
  zip._Window$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    class _Window extends core.Object {
      get isComplete() {
        return this[_valuesReceived] == this.size;
      }
      onValue(index, value) {
        T._check(value);
        this[_values][$_set](index, value);
        this[_valuesReceived] = dart.notNull(this[_valuesReceived]) + 1;
      }
      flush() {
        this[_valuesReceived] = 0;
        return ListOfT().unmodifiable(this[_values]);
      }
    }
    (_Window.new = function(size) {
      this[_valuesReceived] = 0;
      this.size = size;
      this[_values] = ListOfT().new(size);
      ;
    }).prototype = _Window.prototype;
    dart.addTypeTests(_Window);
    _Window.prototype[_is__Window_default] = true;
    dart.setMethodSignature(_Window, () => ({
      __proto__: dart.getMethods(_Window.__proto__),
      onValue: dart.fnType(dart.void, [core.int, core.Object]),
      flush: dart.fnType(core.List$(T), [])
    }));
    dart.setGetterSignature(_Window, () => ({
      __proto__: dart.getGetters(_Window.__proto__),
      isComplete: core.bool
    }));
    dart.setLibraryUri(_Window, "package:rxdart/src/streams/zip.dart");
    dart.setFieldSignature(_Window, () => ({
      __proto__: dart.getFields(_Window.__proto__),
      size: dart.finalFieldType(core.int),
      [_values]: dart.finalFieldType(core.List$(T)),
      [_valuesReceived]: dart.fieldType(core.int)
    }));
    return _Window;
  });
  zip._Window = zip._Window$();
  dart.addTypeTests(zip._Window, _is__Window_default);
  const _is_RepeatStream_default = Symbol('_is_RepeatStream_default');
  repeat.RepeatStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let StreamSubscriptionOfT = () => (StreamSubscriptionOfT = dart.constFn(async.StreamSubscription$(T)))();
    class RepeatStream extends async.Stream$(T) {
      get streamFactory() {
        return this[streamFactory$];
      }
      set streamFactory(value) {
        super.streamFactory = value;
      }
      get count() {
        return this[count$];
      }
      set count(value) {
        super.count = value;
      }
      get repeatStep() {
        return this[repeatStep];
      }
      set repeatStep(value) {
        this[repeatStep] = value;
      }
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      get subscription() {
        return this[subscription];
      }
      set subscription(value) {
        this[subscription] = StreamSubscriptionOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        this.controller == null ? this.controller = StreamControllerOfT().new({sync: true, onListen: dart.bind(this, 'maybeRepeatNext'), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return this.subscription.pause(resumeSignal);
          }, FutureTovoid()), onResume: dart.fn(() => this.subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
            let t5;
            t5 = this.subscription;
            return t5 == null ? null : t5.cancel();
          }, VoidToFuture())}) : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      repeatNext() {
        let t5;
        const onDone = () => {
          let t5;
          t5 = this.subscription;
          t5 == null ? null : t5.cancel();
          this.maybeRepeatNext();
        };
        dart.fn(onDone, VoidTovoid());
        try {
          this.subscription = this.streamFactory((t5 = this.repeatStep, this.repeatStep = dart.notNull(t5) + 1, t5)).listen(dart.bind(this.controller, 'add'), {onError: dart.bind(this.controller, 'addError'), onDone: onDone, cancelOnError: false});
        } catch (e$) {
          let e = dart.getThrown(e$);
          let s = dart.stackTrace(e$);
          this.controller.addError(e, s);
        }
      }
      maybeRepeatNext() {
        if (this.repeatStep == this.count) {
          this.controller.close();
        } else {
          this.repeatNext();
        }
      }
    }
    (RepeatStream.new = function(streamFactory, count) {
      if (count === void 0) count = null;
      this[repeatStep] = 0;
      this[controller] = null;
      this[subscription] = null;
      this[streamFactory$] = streamFactory;
      this[count$] = count;
      RepeatStream.__proto__.new.call(this);
      ;
    }).prototype = RepeatStream.prototype;
    dart.addTypeTests(RepeatStream);
    RepeatStream.prototype[_is_RepeatStream_default] = true;
    const streamFactory$ = Symbol("RepeatStream.streamFactory");
    const count$ = Symbol("RepeatStream.count");
    const repeatStep = Symbol("RepeatStream.repeatStep");
    const controller = Symbol("RepeatStream.controller");
    const subscription = Symbol("RepeatStream.subscription");
    dart.setMethodSignature(RepeatStream, () => ({
      __proto__: dart.getMethods(RepeatStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      repeatNext: dart.fnType(dart.void, []),
      maybeRepeatNext: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(RepeatStream, "package:rxdart/src/streams/repeat.dart");
    dart.setFieldSignature(RepeatStream, () => ({
      __proto__: dart.getFields(RepeatStream.__proto__),
      streamFactory: dart.finalFieldType(dart.fnType(async.Stream$(T), [core.int])),
      count: dart.finalFieldType(core.int),
      repeatStep: dart.fieldType(core.int),
      controller: dart.fieldType(async.StreamController$(T)),
      subscription: dart.fieldType(async.StreamSubscription$(T))
    }));
    return RepeatStream;
  });
  repeat.RepeatStream = repeat.RepeatStream$();
  dart.addTypeTests(repeat.RepeatStream, _is_RepeatStream_default);
  const _is_Notification_default = Symbol('_is_Notification_default');
  notification.Notification$ = dart.generic(T => {
    class Notification extends core.Object {
      get kind() {
        return this[kind$];
      }
      set kind(value) {
        super.kind = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get error() {
        return this[error$];
      }
      set error(value) {
        super.error = value;
      }
      get stackTrace() {
        return this[stackTrace$];
      }
      set stackTrace(value) {
        super.stackTrace = value;
      }
      static onData(value) {
        return new (notification.Notification$(T)).new(notification.Kind.OnData, value, null, null);
      }
      static onDone() {
        return new (notification.Notification$(T)).new(notification.Kind.OnDone, null, null, null);
      }
      static onError(e, s) {
        return new (notification.Notification$(T)).new(notification.Kind.OnError, null, e, s);
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return notification.Notification.is(other) && dart.equals(this.kind, other.kind) && dart.equals(this.error, other.error) && dart.equals(this.stackTrace, other.stackTrace) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.kind)) ^ dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stackTrace)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "Notification{kind: " + dart.str(this.kind) + ", value: " + dart.str(this.value) + ", error: " + dart.str(this.error) + ", stackTrace: " + dart.str(this.stackTrace) + "}";
      }
      get isOnData() {
        return dart.equals(this.kind, notification.Kind.OnData);
      }
      get isOnDone() {
        return dart.equals(this.kind, notification.Kind.OnDone);
      }
      get isOnError() {
        return dart.equals(this.kind, notification.Kind.OnError);
      }
    }
    (Notification.new = function(kind, value, error, stackTrace) {
      this[kind$] = kind;
      this[value$] = value;
      this[error$] = error;
      this[stackTrace$] = stackTrace;
      ;
    }).prototype = Notification.prototype;
    dart.addTypeTests(Notification);
    Notification.prototype[_is_Notification_default] = true;
    const kind$ = Symbol("Notification.kind");
    const value$ = Symbol("Notification.value");
    const error$ = Symbol("Notification.error");
    const stackTrace$ = Symbol("Notification.stackTrace");
    dart.setMethodSignature(Notification, () => ({
      __proto__: dart.getMethods(Notification.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(Notification, () => ({
      __proto__: dart.getGetters(Notification.__proto__),
      isOnData: core.bool,
      isOnDone: core.bool,
      isOnError: core.bool
    }));
    dart.setLibraryUri(Notification, "package:rxdart/src/utils/notification.dart");
    dart.setFieldSignature(Notification, () => ({
      __proto__: dart.getFields(Notification.__proto__),
      kind: dart.finalFieldType(notification.Kind),
      value: dart.finalFieldType(T),
      error: dart.finalFieldType(dart.dynamic),
      stackTrace: dart.finalFieldType(core.StackTrace)
    }));
    dart.defineExtensionMethods(Notification, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Notification, ['hashCode']);
    return Notification;
  });
  notification.Notification = notification.Notification$();
  dart.addTypeTests(notification.Notification, _is_Notification_default);
  const _is_MaterializeStreamTransformer_default = Symbol('_is_MaterializeStreamTransformer_default');
  materialize.MaterializeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class MaterializeStreamTransformer extends async.StreamTransformerBase$(T, notification.Notification$(T)) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(T, notification.Notification$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(notification.Notification$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  controller.add(notification.Notification$(T).onData(value));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                  controller.add(notification.Notification$(T).onError(e, s));
                }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                  controller.add(notification.Notification$(T).onDone());
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(notification.Notification$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (MaterializeStreamTransformer.new = function() {
      this[transformer] = materialize.MaterializeStreamTransformer._buildTransformer(T);
      MaterializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MaterializeStreamTransformer.prototype;
    dart.addTypeTests(MaterializeStreamTransformer);
    MaterializeStreamTransformer.prototype[_is_MaterializeStreamTransformer_default] = true;
    const transformer = Symbol("MaterializeStreamTransformer.transformer");
    dart.setMethodSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getMethods(MaterializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(notification.Notification$(T)), [core.Object])
    }));
    dart.setLibraryUri(MaterializeStreamTransformer, "package:rxdart/src/transformers/materialize.dart");
    dart.setFieldSignature(MaterializeStreamTransformer, () => ({
      __proto__: dart.getFields(MaterializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, notification.Notification$(T)))
    }));
    return MaterializeStreamTransformer;
  });
  materialize.MaterializeStreamTransformer = materialize.MaterializeStreamTransformer$();
  dart.addTypeTests(materialize.MaterializeStreamTransformer, _is_MaterializeStreamTransformer_default);
  const _streamFactory = dart.privateName(timer, "_streamFactory");
  const _is_TimerStream_default = Symbol('_is_TimerStream_default');
  timer.TimerStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToStreamOfT(), [])))();
    class TimerStream extends async.Stream$(T) {
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_streamFactory]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (TimerStream.new = function(value, duration) {
      this[_streamFactory] = dart.fn(() => {
        let stream = StreamOfT().fromFuture(FutureOfT().delayed(duration, dart.fn(() => value, VoidToT())));
        return dart.fn(() => stream, VoidToStreamOfT());
      }, VoidToFn())();
      TimerStream.__proto__.new.call(this);
      ;
    }).prototype = TimerStream.prototype;
    dart.addTypeTests(TimerStream);
    TimerStream.prototype[_is_TimerStream_default] = true;
    dart.setMethodSignature(TimerStream, () => ({
      __proto__: dart.getMethods(TimerStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(TimerStream, "package:rxdart/src/streams/timer.dart");
    dart.setFieldSignature(TimerStream, () => ({
      __proto__: dart.getFields(TimerStream.__proto__),
      [_streamFactory]: dart.finalFieldType(dart.fnType(async.Stream$(T), []))
    }));
    return TimerStream;
  });
  timer.TimerStream = timer.TimerStream$();
  dart.addTypeTests(timer.TimerStream, _is_TimerStream_default);
  const _isReusable = dart.privateName(defer, "_isReusable");
  const _factory = dart.privateName(defer, "_factory");
  const _is_DeferStream_default = Symbol('_is_DeferStream_default');
  defer.DeferStream$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let VoidToStreamOfT = () => (VoidToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [])))();
    let VoidToFn = () => (VoidToFn = dart.constFn(dart.fnType(VoidToStreamOfT(), [])))();
    class DeferStream extends async.Stream$(T) {
      get isBroadcast() {
        return this[_isReusable];
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_factory]().listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (DeferStream.new = function(streamFactory, opts) {
      let reusable = opts && 'reusable' in opts ? opts.reusable : false;
      this[_isReusable] = reusable;
      this[_factory] = dart.test(reusable) ? dart.fn(() => streamFactory(), VoidToStreamOfT()) : dart.fn(() => {
        let stream = streamFactory();
        return dart.fn(() => stream, VoidToStreamOfT());
      }, VoidToFn())();
      DeferStream.__proto__.new.call(this);
      ;
    }).prototype = DeferStream.prototype;
    dart.addTypeTests(DeferStream);
    DeferStream.prototype[_is_DeferStream_default] = true;
    dart.setMethodSignature(DeferStream, () => ({
      __proto__: dart.getMethods(DeferStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(DeferStream, "package:rxdart/src/streams/defer.dart");
    dart.setFieldSignature(DeferStream, () => ({
      __proto__: dart.getFields(DeferStream.__proto__),
      [_factory]: dart.finalFieldType(dart.fnType(async.Stream$(T), [])),
      [_isReusable]: dart.finalFieldType(core.bool)
    }));
    return DeferStream;
  });
  defer.DeferStream = defer.DeferStream$();
  dart.addTypeTests(defer.DeferStream, _is_DeferStream_default);
  const _is_NeverStream_default = Symbol('_is_NeverStream_default');
  never.NeverStream$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    class NeverStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        this[controller] = StreamControllerOfT()._check(value);
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
    }
    (NeverStream.new = function() {
      this[controller] = StreamControllerOfT().new();
      NeverStream.__proto__.new.call(this);
      ;
    }).prototype = NeverStream.prototype;
    dart.addTypeTests(NeverStream);
    NeverStream.prototype[_is_NeverStream_default] = true;
    const controller = Symbol("NeverStream.controller");
    dart.setMethodSignature(NeverStream, () => ({
      __proto__: dart.getMethods(NeverStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(NeverStream, "package:rxdart/src/streams/never.dart");
    dart.setFieldSignature(NeverStream, () => ({
      __proto__: dart.getFields(NeverStream.__proto__),
      controller: dart.fieldType(async.StreamController$(T))
    }));
    return NeverStream;
  });
  never.NeverStream = never.NeverStream$();
  dart.addTypeTests(never.NeverStream, _is_NeverStream_default);
  const _name$ = dart.privateName(notification, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  notification.Kind = class Kind extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (notification.Kind.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = notification.Kind.prototype;
  dart.addTypeTests(notification.Kind);
  dart.setLibraryUri(notification.Kind, "package:rxdart/src/utils/notification.dart");
  dart.setFieldSignature(notification.Kind, () => ({
    __proto__: dart.getFields(notification.Kind.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(notification.Kind, ['toString']);
  notification.Kind.OnData = C0 || CT.C0;
  notification.Kind.OnDone = C1 || CT.C1;
  notification.Kind.OnError = C2 || CT.C2;
  notification.Kind.values = C3 || CT.C3;
  utils.RetryError = class RetryError extends core.Error {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get errors() {
      return this[errors$];
    }
    set errors(value) {
      super.errors = value;
    }
    static withCount(count, errors) {
      return new utils.RetryError.__("Received an error after attempting " + dart.str(count) + " retries", errors);
    }
    static onReviveFailed(errors) {
      return new utils.RetryError.__("Received an error after attempting to retry.", errors);
    }
    toString() {
      return this.message;
    }
  };
  (utils.RetryError.__ = function(message, errors) {
    this[message$] = message;
    this[errors$] = errors;
    utils.RetryError.__proto__.new.call(this);
    ;
  }).prototype = utils.RetryError.prototype;
  dart.addTypeTests(utils.RetryError);
  const message$ = Symbol("RetryError.message");
  const errors$ = Symbol("RetryError.errors");
  dart.setLibraryUri(utils.RetryError, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.RetryError, () => ({
    __proto__: dart.getFields(utils.RetryError.__proto__),
    message: dart.finalFieldType(core.String),
    errors: dart.finalFieldType(core.List$(utils.ErrorAndStacktrace))
  }));
  dart.defineExtensionMethods(utils.RetryError, ['toString']);
  utils.ErrorAndStacktrace = class ErrorAndStacktrace extends core.Object {
    get error() {
      return this[error$];
    }
    set error(value) {
      super.error = value;
    }
    get stacktrace() {
      return this[stacktrace$];
    }
    set stacktrace(value) {
      super.stacktrace = value;
    }
    toString() {
      return "ErrorAndStacktrace{error: " + dart.str(this.error) + ", stacktrace: " + dart.str(this.stacktrace) + "}";
    }
    _equals(other) {
      if (other == null) return false;
      return this === other || utils.ErrorAndStacktrace.is(other) && dart.equals(this[$runtimeType], dart.runtimeType(other)) && dart.equals(this.error, other.error) && dart.equals(this.stacktrace, other.stacktrace);
    }
    get hashCode() {
      return (dart.notNull(dart.hashCode(this.error)) ^ dart.notNull(dart.hashCode(this.stacktrace))) >>> 0;
    }
  };
  (utils.ErrorAndStacktrace.new = function(error, stacktrace) {
    this[error$] = error;
    this[stacktrace$] = stacktrace;
    ;
  }).prototype = utils.ErrorAndStacktrace.prototype;
  dart.addTypeTests(utils.ErrorAndStacktrace);
  const error$ = Symbol("ErrorAndStacktrace.error");
  const stacktrace$ = Symbol("ErrorAndStacktrace.stacktrace");
  dart.setMethodSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getMethods(utils.ErrorAndStacktrace.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(utils.ErrorAndStacktrace, "package:rxdart/src/streams/utils.dart");
  dart.setFieldSignature(utils.ErrorAndStacktrace, () => ({
    __proto__: dart.getFields(utils.ErrorAndStacktrace.__proto__),
    error: dart.finalFieldType(dart.dynamic),
    stacktrace: dart.finalFieldType(core.StackTrace)
  }));
  dart.defineExtensionMethods(utils.ErrorAndStacktrace, ['toString', '_equals']);
  dart.defineExtensionAccessors(utils.ErrorAndStacktrace, ['hashCode']);
  const _is_RaceStream_default = Symbol('_is_RaceStream_default');
  race.RaceStream$ = dart.generic(T => {
    class RaceStream extends async.Stream$(T) {
      get controller() {
        return this[controller];
      }
      set controller(value) {
        super.controller = value;
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this.controller.stream.listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      static _buildController(T, streams) {
        if (streams == null) {
          dart.throw(new core.ArgumentError.new("streams cannot be null"));
        } else if (dart.test(streams[$isEmpty])) {
          dart.throw(new core.ArgumentError.new("provide at least 1 stream"));
        }
        let subscriptions = null;
        let controller = null;
        controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
            let index = 0;
            let reduceToWinner = dart.fn(winnerIndex => {
              let winner = subscriptions[$removeAt](winnerIndex);
              subscriptions[$forEach](dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])));
              subscriptions = _interceptors.JSArray$(async.StreamSubscription$(T)).of([winner]);
            }, intToNull$());
            let doUpdate = dart.fn(index => dart.fn(value => {
              try {
                if (dart.notNull(subscriptions[$length]) > 1) reduceToWinner(index);
                controller.add(value);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }, dart.fnType(core.Null, [T])), dart.fnType(dart.fnType(core.Null, [T]), [core.int]));
            subscriptions = streams[$map](async.StreamSubscription$(T), dart.fn(stream => {
              let t8;
              return stream.listen(doUpdate((t8 = index, index = t8 + 1, t8)), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close')});
            }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T)])))[$toList]();
          }, VoidToNull()), onPause: dart.fn(resumeSignal => {
            if (resumeSignal === void 0) resumeSignal = null;
            return subscriptions[$forEach](dart.fn(subscription => subscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(T)])));
          }, FutureTovoid()), onResume: dart.fn(() => subscriptions[$forEach](dart.fn(subscription => subscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(T)]))), VoidTovoid()), onCancel: dart.fn(() => async.Future.wait(dart.dynamic, subscriptions[$where](dart.fn(subscription => subscription != null, dart.fnType(core.bool, [async.StreamSubscription$(T)])))[$map](async.Future, dart.fn(subscription => subscription.cancel(), dart.fnType(async.Future, [async.StreamSubscription$(T)])))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()))), VoidToFutureOfList())});
        return controller;
      }
    }
    (RaceStream.new = function(streams) {
      this[controller] = race.RaceStream._buildController(T, streams);
      RaceStream.__proto__.new.call(this);
      ;
    }).prototype = RaceStream.prototype;
    dart.addTypeTests(RaceStream);
    RaceStream.prototype[_is_RaceStream_default] = true;
    const controller = Symbol("RaceStream.controller");
    dart.setMethodSignature(RaceStream, () => ({
      __proto__: dart.getMethods(RaceStream.__proto__),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function})
    }));
    dart.setLibraryUri(RaceStream, "package:rxdart/src/streams/race.dart");
    dart.setFieldSignature(RaceStream, () => ({
      __proto__: dart.getFields(RaceStream.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T))
    }));
    return RaceStream;
  });
  race.RaceStream = race.RaceStream$();
  dart.addTypeTests(race.RaceStream, _is_RaceStream_default);
  dart.trackLibraries("packages/rxdart/src/streams/combine_latest", {
    "package:rxdart/src/streams/fork_join.dart": fork_join,
    "package:rxdart/src/streams/error.dart": error,
    "package:rxdart/src/streams/combine_latest.dart": combine_latest,
    "package:rxdart/src/streams/retry_when.dart": retry_when,
    "package:rxdart/src/streams/retry.dart": retry,
    "package:rxdart/src/streams/merge.dart": merge,
    "package:rxdart/src/streams/concat.dart": concat,
    "package:rxdart/src/streams/switch_latest.dart": switch_latest,
    "package:rxdart/src/streams/concat_eager.dart": concat_eager,
    "package:rxdart/src/streams/range.dart": range,
    "package:rxdart/src/streams/sequence_equal.dart": sequence_equal,
    "package:rxdart/src/streams/zip.dart": zip,
    "package:rxdart/src/streams/repeat.dart": repeat,
    "package:rxdart/src/transformers/materialize.dart": materialize,
    "package:rxdart/src/streams/timer.dart": timer,
    "package:rxdart/src/streams/defer.dart": defer,
    "package:rxdart/src/streams/never.dart": never,
    "package:rxdart/src/utils/notification.dart": notification,
    "package:rxdart/src/streams/utils.dart": utils,
    "package:rxdart/src/streams/race.dart": race
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fork_join.dart","error.dart","combine_latest.dart","retry_when.dart","retry.dart","merge.dart","concat.dart","switch_latest.dart","concat_eager.dart","range.dart","sequence_equal.dart","zip.dart","repeat.dart","../utils/notification.dart","../transformers/materialize.dart","timer.dart","defer.dart","never.dart","utils.dart","race.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;qBAuEwB;AAElB,qEACE,OAAO,EACP,QAAS,UAAW,MAAM;MAC3B;+BAGO,WACA,WACR;AAEA,oEACE,sBAAC,SAAS,EAAE,SAAS,IACrB,QAAe,UAAW,AAAQ,QAAA,CAAW,KAAV,AAAM,MAAA,QAAC,KAAmB,KAAV,AAAM,MAAA,QAAC;MAC3D;kCAGO,SACA,SACA,SACR;AAEA,oEACE,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,IAC1B,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;qCAGO,SACA,SACA,SACA,SACR;AAEA,oEACE,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACnC,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;wCAGO,SACA,SACA,SACA,SACA,SACR;AAEA,oEACE,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC5C,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;2CAGO,SACA,SACA,SACA,SACA,SACA,SACR;AAEA,oEACE,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACrD,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;8CAGO,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEA,oEACE,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC9D,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;iDAGO,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEA,oEACE,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;oDAGO,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEA,oEACE,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAGZ;oCAGiB,SAClB;AAEkB;QAEpB,aAAa,sCACH,gBACI;AACF,yBAAS,QAAS;;gBAEpB,AAAW,UAAD,KAAK,AAAQ,QAAA,CAAC,MAAM;;oBACvB;oBAAG;gBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;cAG1B,AAAW,UAAD;;YAEL,AAEF,qBAFO,AAAQ,OAAD,yBAAK,QAAC,UAAW,AAAO,MAAD,yEACtB,eAAe,QAAS,KAAM,AAAW,UAAD,+CAClD,MAAM,YAAsB,UAAX,UAAU;;AAG3C,cAAO,WAAU;MACnB;;mCAtOsB,SAClB;YACS,AAAgB,OAAT,IAAI,kBAAQ,AAAQ,OAAD,SAAO,QAAC,KAAM,CAAC,IAAI,+CAChD;qBACG,AAAQ,OAAD,kCAAa;YACpB,QAAQ,IAAI,yBAAM;AACzB,8CAAM,AAAoC,gDAAnB,OAAO,EAAE,QAAQ;;IAAS;;;;;;;;;;;;MCxD1C;;;;;;MACO;;;;;;aAKc;;YACpB;YAAc;YAAe;aACzC;QACI,YAAS;QACT;;AAEJ,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;;gCAXiB;MAFG,mBAAa;MAEhB;AAAjB;;IAAuB;;;;;;;;;;;;;;;;;;;;;;;;qBC4CD;AAEpB,cAAO,iEACL,OAAO,EACP,QAAS,UAAW,MAAM;MAE9B;+BAGY,WACA,WACR;AAEF,cAAO,gEACL,sBAAC,SAAS,EAAE,SAAS,IACrB,QAAe,UAAW,AAAQ,QAAA,CAAW,KAAV,AAAM,MAAA,QAAC,KAAmB,KAAV,AAAM,MAAA,QAAC;MAE9D;kCAGY,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,IAC1B,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;qCAGY,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACnC,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;wCAGY,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC5C,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;2CAGY,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACrD,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;8CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC9D,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;iDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACvE,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,gEACL,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAQ,QAAA,CACH,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGsB,SAClB;AAEI,kBAAM,AAAQ,OAAD;AACe;AACd;QAEpB,aAAa,sCACL,gBACI;AACF,yBAAS,kBAAQ,GAAG;AACtB,4BAAY;AAAG,4BAAY;AAAG,wBAAQ;AAEpC,+BAAe,cAAM,AAAU,SAAD,KAAI,GAAG;AAErC,yBAAS;AACb,kBAAgB,CAAV,YAAF,AAAE,SAAS,GAAX,OAAe,GAAG,EAAE,AAAW,UAAD;;AAE9B,2BAAW,QAAK,SAAU,QAAG;;AAAU,yBAAM;mBAAC,KAAK;mBAAI,KAAK;cAAf;;;YAEnD,gBAAgB,AAAQ,AAwBrB,OAxBoB,qCAAK,QAAC;;AACrB,sCAAoB,AAAQ,QAAA,OAAC,KAAK,EAAL,aAAK;AACpC,kCAAgB;AAEpB,oBAAO,AAAO,OAAD,QACX,QAAG;gBACD,AAAiB,iBAAA,CAAC,KAAK;AAEvB,qBAAK,aAAa;kBAChB,gBAAgB;kBAChB,YAAA,AAAS,SAAA;;AAGX,8BAAI,AAAY,YAAA;;oBAEZ,AAAW,UAAD,KAAK,AAAQ,QAAA,CAAM,2BAAa,MAAM;;wBACzC;wBAAG;oBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;yDAIV,UAAX,UAAU,uBACX,MAAM;mGAEE;qCAEb,QAAkB;;AAAkB,kBAAA,AACxC,cADqD,WAC7C,QAAC,gBAAiB,AAAa,YAAD,OAAO,YAAY;wCACpD,cACN,AAAc,aAAD,WAAS,QAAC,gBAAiB,AAAa,YAAD,kEAC9C,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAC,gBAAiB,AAAa,YAAD,kDAC5B,QAAC,gBAAiB,YAAY,IAAI;AAG/C,cAAO,WAAU;MACnB;;wCAtQsB,SAClB;YACS,AAAgB,OAAT,IAAI,kBAAQ,AAAQ,OAAD,SAAO,QAAC,KAAM,CAAC,IAAI,+CAChD;YACG,QAAQ,IAAI,yBAAM;AACzB,mDAAM,AAAoC,0DAAnB,OAAO,EAAE,QAAQ;;IAAS;;;;;;;;;;;;;;;MCM5B;;;;;;MACE;;;;;;MACT;;;;;;MACE;;;;;;aAOf;YACI;YACJ;YACA;QAEL,AAAW,mBAAA,OAAX,kBAAe,iCACP,0BACI,wBACD,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB,cAAM,AAAa,gDANpB;AASX,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;QAGE,oBAAe,AAAgB,4BAClB,UAAX,mCACS,SAAQ,GAAe;;YAC9B,AAAa;AAEY;YACzB,MAAM,AAAuB,sBAAN,CAAC,EAAE,CAAC,SACzB,QAAC;cACC,AAAI,GAAD;cACH,AAAQ,oBAAI,iCAAmB,CAAC,EAAE,CAAC;cACnC;wCAEO,SAAQ,GAAe;;;gBAC9B,AAAI,GAAD;qBACH;gBACI,YAAoB,sCACpB,eAAS,SAAI,iCAAmB,CAAC,EAAE,CAAC;gBAEpC;;;mDAIS,UAAX,0CACO;MAEnB;;oCApDqB,eAAoB;MAJrB;MACE;MACG,gBAA8B;MAElC;MAAoB;AAAzC;;IAA0D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC5C/B;;;;;;MACvB;;;;;;MACA;;;;;;MACgB;;;;;;MACE;;;;;;aAOf;YACI;YACJ;YACA;AAEgB;AAEf,6BAAiB,cAAiB,2BAClC,YACA;QAGN,QAAQ,QAAE;;UACR,oBAAe,AAAgB,4BAAkB,UAAX,mCACzB,SAAS,GAAc;;cAClC,AAAa;cAEb,AAAQ,qBAAI,iCAAmB,CAAC,EAAE,CAAC;AAEnC,kBAAI,AAAM,cAAG;qBACX;gBACI,YAAS,AAAc,cAAA;gBACvB;;;gBAEJ,AAAK,KAAA,CAAG,iBAAF,aAAE,kBAAF;;sDAEY,UAAX,0CAAiC;;QAG9C,AAAW,mBAAA,OAAX,kBAAe,iCACL,gBACI,KAAK,WACN,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB,cAAM,AAAa,gDANtB;AAQX,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;gCA/CiB,eAAqB;;MALlC,kBAAY;MACI;MACE;MACG,iBAA8B;MAEtC;MAAqB;AAAtC;;IAA6C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MChBnB;;;;;;aAMQ;YAChB;YAAc;YAAe;AAC3C,cAAA,AAAW,AAAO,+BAAO,MAAM,YAClB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;iCAEJ;AACjE,YAAI,AAAQ,OAAD,IAAI;UACb,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;UAChB,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;UACrD,WAAM,2BAAc;;AAGhB,kBAAM,AAAQ,OAAD;AACb,4BAAgB,6CAA4B,GAAG;AACjC;QAEpB,aAAa,sCACH,gBACI;AACJ,4BAAY;AAEV,yBAAS;cACb,YAAA,AAAS,SAAA;AAET,kBAAI,AAAU,SAAD,KAAI,GAAG,EAAE,AAAW,UAAD;;AAGlC,qBAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,GAAG,GAAE,IAAA,AAAC,CAAA;AACpB,2BAAS,AAAQ,OAAD,aAAW,CAAC;cAEhC,AAAa,aAAA,QAAC,CAAC,EAAI,AAAO,MAAD,QAAmB,UAAX,UAAU,oBACnB,UAAX,UAAU,uBAAmB,MAAM;;qCAG3C,QAAkB;;AAAkB,kBAAA,AACxC,cADqD,WAC7C,QAAC,gBAAiB,AAAa,YAAD,OAAO,YAAY;wCACpD,cACN,AAAc,aAAD,WAAS,QAAC,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAC,gBAAiB,AAAa,YAAD,+EAC5B,QAAC,gBAAiB,YAAY,IAAI;AAEjD,cAAO,WAAU;MACnB;;gCAjDgC;MACf,mBAAE,sCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;MCClB;;;;;;aAMQ;YAChB;YAAc;YAAe;AAC3C,cAAA,AAAW,AAAO,+BAAO,MAAM,YAClB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;iCAEJ;AACjE,YAAI,AAAQ,OAAD,IAAI;UACb,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;UAChB,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;UACrD,WAAM,2BAAc;;AAGF;AACE;QAEtB,aAAa,sCACH,gBACI;AACF,sBAAM,AAAQ,OAAD;AACf,wBAAQ;AAEZ,qBAAK;;AACC,2BAAS,AAAQ,OAAD,aAAW,KAAK;mBACpC,YAAY;kCAAE;cAEd,eAAe,AAAO,MAAD,QAAmB,UAAX,UAAU,oBACf,UAAX,UAAU,uBAAmB;kBACxC,QAAA,AAAK,KAAA;AAEL,sBAAI,AAAM,KAAD,KAAI,GAAG;oBACd,AAAW,UAAD;;oBAEV,AAAQ,QAAA;;;;;YAKd,AAAQ,QAAA;qCAED,QAAkB;;;AACvB,6BAAY;uCAAE,SAAM,YAAY;wCAC1B;;AAAM,6BAAY;uCAAE;sCACpB,cAAM,AAAa,YAAD;AAEhC,cAAO,WAAU;MACnB;;iCAnDiC;MAChB,mBAAE,wCAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;;;;MCIpB;;;;;;aASjB;YACI;YACJ;YACA;QAEL,AAAY,qBAAA,OAAZ,oBAAgB,qDAAiB,cAAS,aAAa,IAA3C;AAEZ,cAAO,AAAY,AAAO,iCACxB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;iCAGoB,SACb;AAEe;AACU;AACR;AAClB,yBAAa;AAAO,0BAAc;AAAO,2BAAe;QAE5D,aAAa,sCACH,gBACI;AACF,4BAAY;cAChB,aAAa;AAEb,kBAAI,WAAW,KAAK,YAAY,EAAE,AAAW,UAAD;;AAGxC,6BAAa;cACjB,cAAc;AAEd,kBAAI,UAAU,EAAE,AAAW,UAAD;;YAG5B,eAAe,AAAQ,OAAD,QACpB,QAAC;;;qBAEG,iBAAiB;oCAAE;gBAEnB,eAAe;gBAEf,oBAAoB,AAAO,MAAD,QACb,UAAX,UAAU,oBACU,UAAX,UAAU,uBACX,UAAU;;oBAEb;oBAAG;gBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;sEAGR,UAAX,UAAU,uBACX,SAAS,iBACF,aAAa;qCAGvB,QAAkB;;;YACzB,AAAa,YAAD,OAAO,YAAY;iBAC/B,iBAAiB;gCAAE,SAAM,YAAY;wCAE7B;;YACR,AAAa,YAAD;iBACZ,iBAAiB;gCAAE;sCAEX;YACR,MAAM,AAAa,YAAD;AAElB,gBAAI,YAAY,EAAE,MAAM,AAAkB,iBAAD;UAC1C;AAEL,cAAO,WAAU;MACnB;;uCA/EwB;MAFJ;MAEI;AAAxB;;IAAgC;;;;;;;;;;;;;;;;;;;;;MCVN;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;UACb,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;UAChB,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD,OAAK,QAAW,UAAW,AAAO,MAAD,IAAI;UACrD,WAAM,2BAAc;;AAGhB,kBAAM,AAAQ,OAAD;AACb,6BAAsB,2BAAS,GAAG,EAAE,QAAC,KAAM;AACrB;AACR;AAEE;QAEtB,aAAa,sCACH,gBACI;AACJ,wBAAQ,CAAC;AAAG,4BAAY;AAEtB,yBAAS,QAAK;AACZ,8BAAY,AAAc,cAAA,QAAC,KAAK;AAEtC,oBAAO;gBACL,AAAU,SAAD;AAET,oBAAgB,CAAV,YAAF,AAAE,SAAS,GAAX,OAAe,GAAG;kBACpB,AAAW,UAAD;;kBAEV,qBAAqB,AAAa,aAAA,QAAO,aAAN,KAAK,IAAG;;;;AAK3C,qCAAqB,QAAW;cACpC,QAAA,AAAK,KAAA;AAEC,iCAAe,AAAO,MAAD,QAAmB,UAAX,UAAU,oBACrB,UAAX,UAAU,uBAAmB,AAAM,MAAA,CAAC,KAAK;AAGtD,kBAAI,AAAM,KAAD,GAAG,GAAG,AAAa,YAAD,OAAO,AAAc,AAAY,cAAZ,QAAC,AAAM,KAAD,GAAG;AAEzD,oBAAO,aAAY;;YAGrB,gBACI,AAAQ,AAAwB,OAAzB,qCAAK,kBAAkB,sBAAmB;YAGrD,qBAAqB,AAAc,aAAD;qCAE3B,QAAkB;;AACvB,kBAAA,AAAmB,mBAAD,OAAO,YAAY;wCAC/B,cAAM,AAAmB,kBAAD,oCACxB,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAC,gBAAiB,AAAa,YAAD,+EAC5B,QAAC,gBAAiB,YAAY,IAAI;AAEjD,cAAO,WAAU;MACnB;;sCAvEsC;MACrB,mBAAE,mDAAiB,OAAO;AAD3C;;IAC4C;;;;;;;;;;;;;;;;;;ICb1B;;;;;;WAMkB;UAClB;UAAc;UAAe;AAC3C,YAAA,AAAO,oBAAO,MAAM,YACP,OAAO,UAAU,MAAM,iBAAiB,aAAa;IAAC;uBAEpC,gBAAoB;AAC/C,mBAAyC,AAAM,CAAxB,aAAb,YAAY,iBAAG,cAAc,aAAU;AACjD,sBAAY,QAAK,SAAyB,aAAf,cAAc,iBAAG,YAAY,IACzC,aAAf,cAAc,iBAAG,KAAK,IACP,aAAf,cAAc,iBAAG,KAAK;AAE5B,YAAc,4BAAkB,qBAAS,MAAM,EAAE,SAAS;IAC5D;;oCAhBgB,gBAAoB;IACvB,eAAE,8BAAY,cAAc,EAAE,YAAY;AADvD;;EACwD;;;;;;;;;;;;;;;MCO3B;;;;;;aAOQ;YACnB;YAAc;YAAe;AAC3C,cAAA,AAAW,AAAO,+BAAO,MAAM,YAClB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;oCAGzD,QAAkB,OAAY;;AAC1C,YAAI,AAAO,MAAD,IAAI;UACZ,WAAoB,+BAAQ;;AAG9B,YAAI,AAAM,KAAD,IAAI;UACX,WAAoB,+BAAQ;;AAGxB,yBAAmB,KAAP,MAAM,QAAC,OAAG,SAAG,GAAK,MAAQ,YAAF,CAAC,EAAI,CAAC;AACzB;AACE;QAEzB,aAAa,oCACH,gBACI;AACF,+BAAe,QAAO;;;AAAkB,6BAAU;cACpD,OAAI,KAAK;cACT;;;YAEJ,eAAyB,AAOpB,AACA,4FAPG,AAAO,MAAD,0CAAW,2DACjB,AAAM,KAAD,0CAAW,2DAChB,SAAiB,GAAmB;;AAChC,oBAAO,AACoC,aAD3C,AAAE,CAAD,OAAS,AAAE,CAAD,UACS,CAAX,KAAT,AAAE,CAAD,4BAAQ,uBAAuB,MAAT,AAAE,CAAD,6BAAQ,iCAChC,AAAS,SAAA,CAAC,AAAE,CAAD,QAAQ,AAAE,CAAD;8GACrB,QAAC,WAAY,WAAC,OAAO,yBACpB,YAAY,YACI,UAAX,UAAU,uBAAmB,YAAY;qCAEnD,QAAkB;;AACvB,kBAAA,AAAa,aAAD,OAAO,YAAY;wCACzB,cAAM,AAAa,YAAD,oCAClB,cAAM,AAAa,YAAD;AAEhC,cAAO,WAAU;MACnB;;wCAhD8B,QAAkB;UACtC;MACO,mBAAE,0DAAiB,MAAM,EAAE,KAAK,EAAE,MAAM;AAFzD;;IAE0D;;;;;;;;;;;;;;;;;;;;;;qBCuBD;AACvD,cAAO,4CACL,OAAO,EACP,QAAS,UAAW,MAAM;MAE9B;2BAGY,WACA,WACR;AAEF,cAAO,2CACL,sBAAC,SAAS,EAAE,SAAS,IACrB,QAAe,UAAW,AAAM,MAAA,CAAW,KAAV,AAAM,MAAA,QAAC,KAAmB,KAAV,AAAM,MAAA,QAAC;MAE5D;8BAGY,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,IAC1B,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;iCAGY,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACnC,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGY,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC5C,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;uCAGY,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACrD,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;0CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IAC9D,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;6CAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBAAC,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,EAAE,OAAO,IACvE,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;gDAGY,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACA,SACR;AAEF,cAAO,2CACL,sBACE,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,EACP,OAAO,IAET,QAAe,UACN,AAAM,MAAA,CACD,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC,KACG,KAAV,AAAM,MAAA,QAAC;MAIf;oCAGsB,SAClB;;AAGoB;AACd,oBAAM,AAAQ,OAAD;AACS;AAAe;UAE3C,aAAa,sCACH,gBACI;;AAEU;AACV,6BAAS,0BAAW,GAAG;AACzB,4BAAQ;AAGN,2BAAO;;uBACX,eAAe;sCAAE;kBAEjB,kBAAkB;kBAElB,uBAAuB,AAAc,aAAD;;AAGhC,+BAAW,QAAK,SAAU,QAAG;;kBAC7B,AAAO,MAAD,SAAS,KAAK,EAAE,KAAK;AAE3B,gCAAI,AAAO,MAAD;;sBAIN,AAAW,UAAD,KAAK,AAAM,MAAA,CAAC,AAAO,MAAD;sBAE5B,AAAI,IAAA;;0BACG;0BAAG;sBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;AAOpB,6CAAe,AAAa,aAAA,QAAC,KAAK,GACpC,SAAM,AAAgB,eAAD;oBAEzB,AAAqB,oBAAD,UAAQ,YAAY;;;gBAIhD,gBAAgB,AACX,AAEA,OAHkB,qCACd,QAAC;;AAAW,wBAAA,AAAO,OAAD,QAAQ,AAAQ,QAAA,OAAC,KAAK,EAAL,aAAK,mBACrB,UAAX,UAAU,uBAA8B,UAAX,UAAU;uGAClC;gBAEtB,AAAI,IAAA;;oBACG;oBAAG;gBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;uCAGnB,QAAkB;;AAAkB,oBAAA,AACxC,qBAD4D,WACpD,QAAC,gBAAiB,AAAa,YAAD,OAAO,YAAY;0CACpD,cAAM,AACX,oBAD+B,WACvB,QAAC,gBAAiB,AAAa,YAAD,8FACjC,cAAa,gCAAc,AAChC,AACA,aAF6C,qBACzC,QAAC,gBAAiB,AAAa,YAAD,+EAC5B,QAAC,gBAAiB,YAAY,IAAI;AAEjD,gBAAO,WAAU;;MAErB;;8BAlRsB,SAClB;YACS,AAAgB,OAAT,IAAI,kBAAQ,AAAQ,OAAD,SAAO,QAAC,KAAM,CAAC,IAAI,+CAChD;YACG,MAAM,IAAI,yBAAM;AACvB,yCAAM,AAAkC,qCAAjB,OAAO,EAAE,MAAM;;IAAS;;;;;;;;;;;;;;;AAwR9B,cAAA,AAAgB,0BAAG;MAAI;cAI7B,OAAS;;QACxB,AAAO,qBAAC,KAAK,EAAI,KAAK;QAEtB,wBAAe,aAAf,yBAAe;MACjB;;QAGE,wBAAkB;AAElB,cAAY,wBAAa;MAC3B;;4BAZa;MAJT,wBAAkB;MAIT;MAAgB,gBAAE,cAAQ,IAAI;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MC1Td;;;;;;MACpB;;;;;;MACN;;;;;;MACgB;;;;;;MACE;;;;;;aAMf;YACI;YACJ;YACA;QAEL,AAAW,mBAAA,OAAX,kBAAe,iCACL,0BACI,mCACD,QAAkB;;AACvB,kBAAA,AAAa,yBAAM,YAAY;wCACzB,cAAM,AAAa,qDACnB;;AAAM;uCAAc;iCANvB;AAQX,cAAO,AAAW,AAAO,+BACvB,MAAM,YACG,OAAO,UACR,MAAM,iBACC,aAAa;MAEhC;;;AAGE,cAAK;;eACH;8BAAc;UAEd;;;;UAIA,oBAAe,AAA4B,0CAAd,qCAAU,eAAsB,UAAX,mCAC1B,UAAX,sCAA6B,MAAM,iBAAiB;;cAC1D;cAAG;UACV,AAAW,yBAAS,CAAC,EAAE,CAAC;;MAE5B;;AAGE,YAAI,AAAW,mBAAG;UAChB,AAAW;;UAEX;;MAEJ;;iCA9CkB,eAAqB;;MAJnC,mBAAa;MACG;MACE;MAEJ;MAAqB;AAAvC;;IAA8C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCVnC;;;;;;MACH;;;;;;MACM;;;;;;MACG;;;;;;oBAIa;AAC1B,uDAAqB,0BAAQ,KAAK,EAAE,MAAM;MAAK;;AAG/C,uDAAqB,0BAAQ,MAAM,MAAM;MAAK;qBAEb,GAAc;AAC/C,uDAAqB,2BAAS,MAAM,CAAC,EAAE,CAAC;MAAC;;YAGrB;AACtB,YAAI,AAAU,SAAM,KAAK;AACvB,gBAAO;;AAET,cAAa,AAG2B,8BAHjC,KAAK,KACE,YAAL,WAAQ,AAAM,KAAD,UACP,YAAN,YAAS,AAAM,KAAD,WACH,YAAX,iBAAc,AAAM,KAAD,gBACb,YAAN,YAAS,AAAM,KAAD;MACzB;;AAIE,cAEwB,EAFH,AACF,aADP,cAAL,2BACG,cAAN,4BACW,cAAX,iCACM,cAAN;MACN;;AAIE,cAAO,AAAkF,kCAA7D,aAAI,uBAAU,cAAK,uBAAU,cAAK,4BAAe,mBAAU;MACzF;;AAEqB,cAAK,aAAL,WAAa;MAAM;;AAEnB,cAAK,aAAL,WAAa;MAAM;;AAElB,cAAK,aAAL,WAAa;MAAO;;iCAxCxB,MAAW,OAAY,OAAY;MAAnC;MAAW;MAAY;MAAY;;IAAW;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCGpB;;;;;;WAKL;;AAAW,cAAA,AAAY,uBAAK,MAAM;MAAC;;AAGxE,cAAO,mFACH,SAAW,OAAY;AACS;AACZ;UAEtB,aAAa,kEACH,gBACI;cACR,eAAe,AAAM,KAAD,QAAQ,QAAG;;kBAE3B,AAAW,UAAD,KAAI,qCAAwB,KAAK;;sBACpC;sBAAG;kBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;yDAEhB,SAAS,GAAc;kBACjC,AAAW,UAAD,KAAI,sCAAyB,CAAC,EAAE,CAAC;0DAClC;kBACT,AAAW,UAAD,KAAI;kBAEd,AAAW,UAAD;iDACM,aAAa;uCAExB,QAAkB;;cACzB,AAAa,YAAD,OAAO,YAAY;0CAEvB;cACR,AAAa,YAAD;wCAEJ,cACD,AAAa,YAAD;AAGzB,gBAAO,AAAW,AAAO,WAAR,eAAe;;MAEpC;;;MAxC6C,oBAAE;AAA/C;;IAAkE;;;;;;;;;;;;;;;;;;;;;;;;;;aCAhC;YAChB;YAAc;YAAe;AAC3C,cAAA,AAAiB,+BAAO,MAAM,YACjB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;;gCAZzD,OAAgB;MACT,uBAAG,AAKhB;AAJM,qBACK,uBAAkB,oBAAQ,QAAQ,EAAE,cAAM,KAAK;AAE1D,cAAO,eAAM,MAAM;;AAL3B;;IAMU;;;;;;;;;;;;;;;;;;;;;;;;;ACGc;MAAW;aAaD;YAChB;YAAc;YAAe;AAC3C,cAAA,AAAW,yBAAO,MAAM,YACX,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;;gCAdjD;UAAuB;MAC3B,oBAAE,QAAQ;MACb,2BAAE,QAAQ,IACZ,cAAM,AAAa,aAAA,yBACnB,AAIA;AAHO,qBAAS,AAAa,aAAA;AAE5B,cAAO,eAAM,MAAM;;AAPjC;;IAQgB;;;;;;;;;;;;;;;;;;;;;MCfI;;;;;;aAKc;YAChB;YAAc;YAAe;AAC3C,cAAA,AAAW,AAAO,+BAAO,MAAM,YAClB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MAAC;;;MARnD,mBAAa;AAEjC;;IAAa;;;;;;;;;;;;;;;;;;;;;;;;;IJhBqB;;2CAA/B;;;;EAA+B;;;;;;;;;;;;;;IKKrB;;;;;;IACkB;;;;;;qBAIE,OAAgC;AAC7D,YAAW,yBAAE,AAAmD,iDAAd,KAAK,gBAAW,MAAM;IAAC;0BAElB;AACvD,YAAW,yBAAE,gDAAgD,MAAM;IAAC;;AAGnD;IAAO;;kCATV,SAAc;IAAd;IAAc;AAAhC;;EAAuC;;;;;;;;;;;;IAazB;;;;;;IACG;;;;;;;AAMf,YAAO,AAA4D,yCAAhC,cAAK,4BAAe,mBAAU;IACnE;;UAGwB;AACpB,YAAA,AAAU,AAAa,UAAP,KAAK,IACf,4BAAN,KAAK,KACW,YAAZ,oBAAqB,iBAAN,KAAK,MACd,YAAN,YAAS,AAAM,KAAD,WACH,YAAX,iBAAc,AAAM,KAAD;IAAW;;AAGlB,YAAe,eAAT,cAAN,4BAA4B,cAAX;IAAmB;;2CAhBhC,OAAY;IAAZ;IAAY;;EAAW;;;;;;;;;;;;;;;;;;;;MCVrB;;;;;;aAMQ;YACpB;YAAc;YAAe;AACzC,cAAO,AAAW,AAAO,+BAAO,MAAM,YACzB,OAAO,UAAU,MAAM,iBAAiB,aAAa;MACpE;iCAEmE;AACjE,YAAI,AAAQ,OAAD,IAAI;UACb,WAAM,2BAAc;cACf,eAAI,AAAQ,OAAD;UAChB,WAAM,2BAAc;;AAGM;AACR;QAEpB,aAAa,sCACH,gBACI;AACJ,wBAAQ;AAEN,iCAAiB,QAAK;AAEpB,2BAAS,AAAc,aAAD,YAAU,WAAW;cAEjD,AAAc,aAAD,WAAS,QAAC,gBAAiB,AAAa,YAAD;cAEpD,gBAAgB,yDAAC,MAAM;;AAGnB,2BAAW,QAAK,SAAU,QAAG;;AAE3B,oBAAyB,aAArB,AAAc,aAAD,aAAU,GAAG,AAAc,cAAA,CAAC,KAAK;gBAElD,AAAW,UAAD,KAAK,KAAK;;oBACb;oBAAG;gBACV,AAAW,UAAD,UAAU,CAAC,EAAE,CAAC;;;YAIhC,gBAAgB,AACX,AAEA,OAHkB,qCACd,QAAC;;AAAW,oBAAA,AAAO,OAAD,QAAQ,AAAQ,QAAA,OAAC,KAAK,EAAL,aAAK,mBACrB,UAAX,UAAU,uBAA8B,UAAX,UAAU;;qCAGjD,QAAkB;;AAAkB,kBAAA,AACxC,cADqD,WAC7C,QAAC,gBAAiB,AAAa,YAAD,OAAO,YAAY;wCACpD,cACN,AAAc,aAAD,WAAS,QAAC,gBAAiB,AAAa,YAAD,8FAC9C,cAAa,gCAAc,AAChC,AACA,AACA,aAH6C,SACvC,QAAC,gBAAiB,YAAY,IAAI,mFACpC,QAAC,gBAAiB,AAAa,YAAD,+EAC5B,QAAC,gBAAiB,YAAY,IAAI;AAEjD,cAAO,WAAU;MACnB;;+BA3D+B;MACd,mBAAE,oCAAiB,OAAO;AAD3C;;IAC4C","file":"combine_latest.ddc.js"}');
  // Exports:
  return {
    src__streams__fork_join: fork_join,
    src__streams__error: error,
    src__streams__combine_latest: combine_latest,
    src__streams__retry_when: retry_when,
    src__streams__retry: retry,
    src__streams__merge: merge,
    src__streams__concat: concat,
    src__streams__switch_latest: switch_latest,
    src__streams__concat_eager: concat_eager,
    src__streams__range: range,
    src__streams__sequence_equal: sequence_equal,
    src__streams__zip: zip,
    src__streams__repeat: repeat,
    src__transformers__materialize: materialize,
    src__streams__timer: timer,
    src__streams__defer: defer,
    src__streams__never: never,
    src__utils__notification: notification,
    src__streams__utils: utils,
    src__streams__race: race
  };
});

//# sourceMappingURL=combine_latest.ddc.js.map

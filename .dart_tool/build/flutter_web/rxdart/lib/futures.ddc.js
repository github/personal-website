define(['dart_sdk', 'packages/rxdart/src/streams/combine_latest'], function(dart_sdk, packages__rxdart__src__streams__combine_latest) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const collection$ = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const combine_latest = packages__rxdart__src__streams__combine_latest.src__streams__combine_latest;
  const concat = packages__rxdart__src__streams__combine_latest.src__streams__concat;
  const concat_eager = packages__rxdart__src__streams__combine_latest.src__streams__concat_eager;
  const defer = packages__rxdart__src__streams__combine_latest.src__streams__defer;
  const error$ = packages__rxdart__src__streams__combine_latest.src__streams__error;
  const fork_join = packages__rxdart__src__streams__combine_latest.src__streams__fork_join;
  const merge = packages__rxdart__src__streams__combine_latest.src__streams__merge;
  const never = packages__rxdart__src__streams__combine_latest.src__streams__never;
  const race = packages__rxdart__src__streams__combine_latest.src__streams__race;
  const range = packages__rxdart__src__streams__combine_latest.src__streams__range;
  const repeat = packages__rxdart__src__streams__combine_latest.src__streams__repeat;
  const retry = packages__rxdart__src__streams__combine_latest.src__streams__retry;
  const retry_when = packages__rxdart__src__streams__combine_latest.src__streams__retry_when;
  const sequence_equal = packages__rxdart__src__streams__combine_latest.src__streams__sequence_equal;
  const switch_latest = packages__rxdart__src__streams__combine_latest.src__streams__switch_latest;
  const timer = packages__rxdart__src__streams__combine_latest.src__streams__timer;
  const zip = packages__rxdart__src__streams__combine_latest.src__streams__zip;
  const notification = packages__rxdart__src__streams__combine_latest.src__utils__notification;
  const materialize = packages__rxdart__src__streams__combine_latest.src__transformers__materialize;
  const window = Object.create(dart.library);
  const backpressure = Object.create(dart.library);
  const subjects = Object.create(dart.library);
  const replay_subject = Object.create(dart.library);
  const subject = Object.create(dart.library);
  const observable = Object.create(dart.library);
  const transformers = Object.create(dart.library);
  const throttle = Object.create(dart.library);
  const sample = Object.create(dart.library);
  const pairwise = Object.create(dart.library);
  const debounce = Object.create(dart.library);
  const buffer = Object.create(dart.library);
  const type_token = Object.create(dart.library);
  const with_latest_from = Object.create(dart.library);
  const where_type = Object.create(dart.library);
  const timestamp = Object.create(dart.library);
  const time_interval = Object.create(dart.library);
  const take_until = Object.create(dart.library);
  const switch_map = Object.create(dart.library);
  const switch_if_empty = Object.create(dart.library);
  const start_with_many = Object.create(dart.library);
  const start_with = Object.create(dart.library);
  const skip_until = Object.create(dart.library);
  const scan = Object.create(dart.library);
  const on_error_resume = Object.create(dart.library);
  const of_type = Object.create(dart.library);
  const map_to = Object.create(dart.library);
  const interval = Object.create(dart.library);
  const ignore_elements = Object.create(dart.library);
  const group_by = Object.create(dart.library);
  const flat_map = Object.create(dart.library);
  const exhaust_map = Object.create(dart.library);
  const $do = Object.create(dart.library);
  const distinct_unique = Object.create(dart.library);
  const dematerialize = Object.create(dart.library);
  const delay = Object.create(dart.library);
  const default_if_empty = Object.create(dart.library);
  const value_observable = Object.create(dart.library);
  const replay_observable = Object.create(dart.library);
  const connectable_observable = Object.create(dart.library);
  const rxdart = Object.create(dart.library);
  const composite_subscription = Object.create(dart.library);
  const futures = Object.create(dart.library);
  const wrapped_future = Object.create(dart.library);
  const stream_min_future = Object.create(dart.library);
  const stream_max_future = Object.create(dart.library);
  const as_observable_future = Object.create(dart.library);
  const publish_subject = Object.create(dart.library);
  const behavior_subject = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $length = dartx.length;
  const $toList = dartx.toList;
  const $sublist = dartx.sublist;
  const $last = dartx.last;
  const $addAll = dartx.addAll;
  const $_get = dartx._get;
  const $any = dartx.any;
  const $every = dartx.every;
  const $_set = dartx._set;
  const $add = dartx.add;
  const $map = dartx.map;
  const $where = dartx.where;
  const $hashCode = dartx.hashCode;
  const $_equals = dartx._equals;
  const $forEach = dartx.forEach;
  const $putIfAbsent = dartx.putIfAbsent;
  const $values = dartx.values;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $isEmpty = dartx.isEmpty;
  const $first = dartx.first;
  const $sort = dartx.sort;
  let boolToNull = () => (boolToNull = dart.constFn(dart.fnType(core.Null, [], [core.bool])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureToNull = () => (FutureToNull = dart.constFn(dart.fnType(core.Null, [], [async.Future])))();
  let VoidToFuture = () => (VoidToFuture = dart.constFn(dart.fnType(async.Future, [])))();
  let dynamicAndStackTraceToNull = () => (dynamicAndStackTraceToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, core.StackTrace])))();
  let AsObservableFutureOfbool = () => (AsObservableFutureOfbool = dart.constFn(as_observable_future.AsObservableFuture$(core.bool)))();
  let ObservableOfint = () => (ObservableOfint = dart.constFn(observable.Observable$(core.int)))();
  let ObservableOfbool = () => (ObservableOfbool = dart.constFn(observable.Observable$(core.bool)))();
  let StreamOfvoid = () => (StreamOfvoid = dart.constFn(async.Stream$(dart.void)))();
  let TimerStreamOfbool = () => (TimerStreamOfbool = dart.constFn(timer.TimerStream$(core.bool)))();
  let AsObservableFutureOfString = () => (AsObservableFutureOfString = dart.constFn(as_observable_future.AsObservableFuture$(core.String)))();
  let AsObservableFutureOfint = () => (AsObservableFutureOfint = dart.constFn(as_observable_future.AsObservableFuture$(core.int)))();
  let NeverStreamOfvoid = () => (NeverStreamOfvoid = dart.constFn(never.NeverStream$(dart.void)))();
  let TypeTokenOfbool = () => (TypeTokenOfbool = dart.constFn(type_token.TypeToken$(core.bool)))();
  let TypeTokenOfdouble = () => (TypeTokenOfdouble = dart.constFn(type_token.TypeToken$(core.double)))();
  let TypeTokenOfint = () => (TypeTokenOfint = dart.constFn(type_token.TypeToken$(core.int)))();
  let TypeTokenOfnum = () => (TypeTokenOfnum = dart.constFn(type_token.TypeToken$(core.num)))();
  let TypeTokenOfString = () => (TypeTokenOfString = dart.constFn(type_token.TypeToken$(core.String)))();
  let TypeTokenOfSymbol = () => (TypeTokenOfSymbol = dart.constFn(type_token.TypeToken$(core.Symbol)))();
  let JSArrayOfStream = () => (JSArrayOfStream = dart.constFn(_interceptors.JSArray$(async.Stream)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ListOfbool = () => (ListOfbool = dart.constFn(core.List$(core.bool)))();
  let boolTobool = () => (boolTobool = dart.constFn(dart.fnType(core.bool, [core.bool])))();
  let FutureTovoid = () => (FutureTovoid = dart.constFn(dart.fnType(dart.void, [], [async.Future])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let StreamSubscriptionToFuture = () => (StreamSubscriptionToFuture = dart.constFn(dart.fnType(async.Future, [async.StreamSubscription])))();
  let FutureTobool = () => (FutureTobool = dart.constFn(dart.fnType(core.bool, [async.Future])))();
  let FutureOfList = () => (FutureOfList = dart.constFn(async.Future$(core.List)))();
  let VoidToFutureOfList = () => (VoidToFutureOfList = dart.constFn(dart.fnType(FutureOfList(), [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let JSArrayOfFuture = () => (JSArrayOfFuture = dart.constFn(_interceptors.JSArray$(async.Future)))();
  let FutureToFuture = () => (FutureToFuture = dart.constFn(dart.fnType(async.Future, [async.Future])))();
  let LinkedMapOfStream$StreamSubscription = () => (LinkedMapOfStream$StreamSubscription = dart.constFn(_js_helper.LinkedMap$(async.Stream, async.StreamSubscription)))();
  let VoidToStreamSubscription = () => (VoidToStreamSubscription = dart.constFn(dart.fnType(async.StreamSubscription, [])))();
  let JSArrayOfTimer = () => (JSArrayOfTimer = dart.constFn(_interceptors.JSArray$(async.Timer)))();
  let TimerTovoid = () => (TimerTovoid = dart.constFn(dart.fnType(dart.void, [async.Timer])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.eventAfterLastWindow",
        index: 1
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.firstEventOnly",
        index: 2
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.everyEvent",
        index: 0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: backpressure.WindowStrategy.prototype,
        [_name$]: "WindowStrategy.onHandler",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C2 || CT.C2, C0 || CT.C0, C1 || CT.C1, C3 || CT.C3], backpressure.WindowStrategy);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: TypeTokenOfbool().prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: TypeTokenOfdouble().prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: TypeTokenOfint().prototype
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: TypeTokenOfnum().prototype
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: TypeTokenOfString().prototype
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: TypeTokenOfSymbol().prototype
      });
    },
    get C11() {
      return C11 = dart.fn(delay.DelayStreamTransformer._cancelTimerIfActive, TimerTovoid());
    }
  });
  const _name$ = dart.privateName(backpressure, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  const _is_BackpressureStreamTransformer_default = Symbol('_is_BackpressureStreamTransformer_default');
  const BackpressureStreamTransformer_transformer = dart.privateName(backpressure, "BackpressureStreamTransformer.transformer");
  backpressure.BackpressureStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class BackpressureStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let windowSubscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              let skip = 0;
              let queue = new (collection$.ListQueue$(S)).new();
              let resolveWindowStart = dart.fn(event => {
                if (onWindowStart != null) controller.add(onWindowStart(event));
              }, dart.fnType(core.Null, [S]));
              let resolveWindowEnd = dart.fn(isControllerClosing => {
                let t0, t1;
                if (isControllerClosing === void 0) isControllerClosing = false;
                if (dart.test(isControllerClosing) || dart.equals(strategy, backpressure.WindowStrategy.eventAfterLastWindow) || dart.equals(strategy, backpressure.WindowStrategy.everyEvent)) {
                  t0 = windowSubscription;
                  t0 == null ? null : t0.cancel();
                  windowSubscription = null;
                }
                if (dart.test(isControllerClosing) && !dart.test(dispatchOnClose)) return;
                if (dart.test(queue[$isNotEmpty]) || !dart.test(ignoreEmptyWindows)) {
                  if (onWindowEnd != null) {
                    try {
                      controller.add(onWindowEnd(core.List$(S).unmodifiable(queue)));
                    } catch (e$) {
                      let e = dart.getThrown(e$);
                      let s = dart.stackTrace(e$);
                      controller.addError(e, s);
                    }
                  }
                  if (!dart.test(isControllerClosing) && dart.notNull(startBufferEvery) > 0) {
                    try {
                      let startWith = dart.notNull(startBufferEvery) < dart.notNull(queue[$length]) ? queue[$toList]()[$sublist](startBufferEvery) : _interceptors.JSArray$(S).of([]);
                      skip = dart.notNull(startBufferEvery) > dart.notNull(queue[$length]) ? dart.notNull(startBufferEvery) - dart.notNull(queue[$length]) : 0;
                      t1 = queue;
                      t1.clear();
                      t1.addAll(startWith);
                      t1;
                    } catch (e$0) {
                      let e = dart.getThrown(e$0);
                      let s = dart.stackTrace(e$0);
                      controller.addError(e, s);
                    }
                  } else {
                    queue.clear();
                  }
                }
              }, boolToNull());
              let buildStream = dart.fn(event => {
                let t2;
                let stream = null;
                t2 = windowSubscription;
                t2 == null ? null : t2.cancel();
                try {
                  stream = windowStreamFactory(event);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                if (stream == null) {
                  controller.addError(new core.ArgumentError.notNull("windowStreamFactory"));
                }
                return stream;
              }, dart.fnType(async.Stream, [S]));
              let singleWindow = dart.fn(event => buildStream(event).take(1).listen(null, {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let multiWindow = dart.fn(event => buildStream(event).listen(dart.fn(_ => resolveWindowEnd(), dynamicToNull()), {onError: dart.bind(controller, 'addError'), onDone: resolveWindowEnd, cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription, [S]));
              let maybeCreateWindow = dart.fn(event => {
                let t3;
                try {
                  switch (strategy) {
                    case C0 || CT.C0:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C1 || CT.C1:
                    {
                      if (windowSubscription != null) return;
                      windowSubscription = multiWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C2 || CT.C2:
                    {
                      t3 = windowSubscription;
                      t3 == null ? null : t3.cancel();
                      windowSubscription = singleWindow(event);
                      resolveWindowStart(event);
                      break;
                    }
                    case C3 || CT.C3:
                    {
                      break;
                    }
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [S]));
              let maybeCloseWindow = dart.fn(() => {
                if (closeWindowWhen != null && dart.test(closeWindowWhen(core.List$(S).unmodifiable(queue)))) {
                  resolveWindowEnd();
                }
              }, VoidToNull());
              let onData = dart.fn(event => {
                maybeCreateWindow(event);
                if (skip === 0) queue.add(event);
                if (skip > 0) skip = skip - 1;
                maybeCloseWindow();
              }, dart.fnType(core.Null, [S]));
              let onDone = dart.fn(() => {
                if (dart.test(queue[$isNotEmpty])) resolveWindowStart(queue[$last]);
                resolveWindowEnd(true);
                queue.clear();
                controller.close();
              }, VoidToNull());
              subscription = input.listen(onData, {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t4;
              if (resumeSignal === void 0) resumeSignal = null;
              t4 = windowSubscription;
              t4 == null ? null : t4.pause(resumeSignal);
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.resume();
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t4;
              t4 = windowSubscription;
              t4 == null ? null : t4.cancel();
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (BackpressureStreamTransformer.new = function(strategy, windowStreamFactory, opts) {
      let onWindowStart = opts && 'onWindowStart' in opts ? opts.onWindowStart : null;
      let onWindowEnd = opts && 'onWindowEnd' in opts ? opts.onWindowEnd : null;
      let startBufferEvery = opts && 'startBufferEvery' in opts ? opts.startBufferEvery : 0;
      let closeWindowWhen = opts && 'closeWindowWhen' in opts ? opts.closeWindowWhen : null;
      let ignoreEmptyWindows = opts && 'ignoreEmptyWindows' in opts ? opts.ignoreEmptyWindows : true;
      let dispatchOnClose = opts && 'dispatchOnClose' in opts ? opts.dispatchOnClose : true;
      this[transformer] = backpressure.BackpressureStreamTransformer._buildTransformer(S, T, strategy, windowStreamFactory, onWindowStart, onWindowEnd, startBufferEvery, closeWindowWhen, ignoreEmptyWindows, dispatchOnClose);
      BackpressureStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = BackpressureStreamTransformer.prototype;
    dart.addTypeTests(BackpressureStreamTransformer);
    BackpressureStreamTransformer.prototype[_is_BackpressureStreamTransformer_default] = true;
    const transformer = BackpressureStreamTransformer_transformer;
    dart.setMethodSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getMethods(BackpressureStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(BackpressureStreamTransformer, "package:rxdart/src/transformers/backpressure/backpressure.dart");
    dart.setFieldSignature(BackpressureStreamTransformer, () => ({
      __proto__: dart.getFields(BackpressureStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return BackpressureStreamTransformer;
  });
  backpressure.BackpressureStreamTransformer = backpressure.BackpressureStreamTransformer$();
  dart.addTypeTests(backpressure.BackpressureStreamTransformer, _is_BackpressureStreamTransformer_default);
  const _is_WindowStreamTransformer_default = Symbol('_is_WindowStreamTransformer_default');
  window.WindowStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    class WindowStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowStreamTransformer.new = function(window) {
      WindowStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = WindowStreamTransformer.prototype;
    dart.addTypeTests(WindowStreamTransformer);
    WindowStreamTransformer.prototype[_is_WindowStreamTransformer_default] = true;
    dart.setLibraryUri(WindowStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowStreamTransformer;
  });
  window.WindowStreamTransformer = window.WindowStreamTransformer$();
  dart.addTypeTests(window.WindowStreamTransformer, _is_WindowStreamTransformer_default);
  const _is_WindowCountStreamTransformer_default = Symbol('_is_WindowCountStreamTransformer_default');
  window.WindowCountStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowCountStreamTransformer.new = function(count, startBufferEvery) {
      if (startBufferEvery === void 0) startBufferEvery = 0;
      WindowCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = WindowCountStreamTransformer.prototype;
    dart.addTypeTests(WindowCountStreamTransformer);
    WindowCountStreamTransformer.prototype[_is_WindowCountStreamTransformer_default] = true;
    dart.setLibraryUri(WindowCountStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowCountStreamTransformer;
  });
  window.WindowCountStreamTransformer = window.WindowCountStreamTransformer$();
  dart.addTypeTests(window.WindowCountStreamTransformer, _is_WindowCountStreamTransformer_default);
  const _is_WindowTestStreamTransformer_default = Symbol('_is_WindowTestStreamTransformer_default');
  window.WindowTestStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToStreamOfT = () => (ListOfTToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class WindowTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, async.Stream$(T)) {}
    (WindowTestStreamTransformer.new = function(test) {
      WindowTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => StreamOfT().fromIterable(queue), ListOfTToStreamOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = WindowTestStreamTransformer.prototype;
    dart.addTypeTests(WindowTestStreamTransformer);
    WindowTestStreamTransformer.prototype[_is_WindowTestStreamTransformer_default] = true;
    dart.setLibraryUri(WindowTestStreamTransformer, "package:rxdart/src/transformers/backpressure/window.dart");
    return WindowTestStreamTransformer;
  });
  window.WindowTestStreamTransformer = window.WindowTestStreamTransformer$();
  dart.addTypeTests(window.WindowTestStreamTransformer, _is_WindowTestStreamTransformer_default);
  let C4;
  backpressure.WindowStrategy = class WindowStrategy extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (backpressure.WindowStrategy.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = backpressure.WindowStrategy.prototype;
  dart.addTypeTests(backpressure.WindowStrategy);
  dart.setLibraryUri(backpressure.WindowStrategy, "package:rxdart/src/transformers/backpressure/backpressure.dart");
  dart.setFieldSignature(backpressure.WindowStrategy, () => ({
    __proto__: dart.getFields(backpressure.WindowStrategy.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(backpressure.WindowStrategy, ['toString']);
  backpressure.WindowStrategy.everyEvent = C2 || CT.C2;
  backpressure.WindowStrategy.eventAfterLastWindow = C0 || CT.C0;
  backpressure.WindowStrategy.firstEventOnly = C1 || CT.C1;
  backpressure.WindowStrategy.onHandler = C3 || CT.C3;
  backpressure.WindowStrategy.values = C4 || CT.C4;
  const _queue$ = dart.privateName(replay_subject, "_queue");
  const _maxSize$ = dart.privateName(replay_subject, "_maxSize");
  const _isAddingStreamItems = dart.privateName(subject, "_isAddingStreamItems");
  const _addError = dart.privateName(subject, "_addError");
  const _add = dart.privateName(subject, "_add");
  const _stream = dart.privateName(observable, "_stream");
  const _is_Observable_default = Symbol('_is_Observable_default');
  observable.Observable$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let BufferStreamTransformerOfT = () => (BufferStreamTransformerOfT = dart.constFn(buffer.BufferStreamTransformer$(T)))();
    let TToStream = () => (TToStream = dart.constFn(dart.fnType(async.Stream, [T])))();
    let BufferCountStreamTransformerOfT = () => (BufferCountStreamTransformerOfT = dart.constFn(buffer.BufferCountStreamTransformer$(T)))();
    let BufferTestStreamTransformerOfT = () => (BufferTestStreamTransformerOfT = dart.constFn(buffer.BufferTestStreamTransformer$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let IterableOfStreamOfT = () => (IterableOfStreamOfT = dart.constFn(core.Iterable$(StreamOfT())))();
    let ConcatStreamOfT = () => (ConcatStreamOfT = dart.constFn(concat.ConcatStream$(T)))();
    let JSArrayOfStreamOfT = () => (JSArrayOfStreamOfT = dart.constFn(_interceptors.JSArray$(StreamOfT())))();
    let DebounceStreamTransformerOfT = () => (DebounceStreamTransformerOfT = dart.constFn(debounce.DebounceStreamTransformer$(T)))();
    let TToTimerStreamOfbool = () => (TToTimerStreamOfbool = dart.constFn(dart.fnType(TimerStreamOfbool(), [T])))();
    let DefaultIfEmptyStreamTransformerOfT = () => (DefaultIfEmptyStreamTransformerOfT = dart.constFn(default_if_empty.DefaultIfEmptyStreamTransformer$(T)))();
    let DelayStreamTransformerOfT = () => (DelayStreamTransformerOfT = dart.constFn(delay.DelayStreamTransformer$(T)))();
    let DistinctUniqueStreamTransformerOfT = () => (DistinctUniqueStreamTransformerOfT = dart.constFn(distinct_unique.DistinctUniqueStreamTransformer$(T)))();
    let DoStreamTransformerOfT = () => (DoStreamTransformerOfT = dart.constFn($do.DoStreamTransformer$(T)))();
    let AsObservableFutureOfT = () => (AsObservableFutureOfT = dart.constFn(as_observable_future.AsObservableFuture$(T)))();
    let VoidToT = () => (VoidToT = dart.constFn(dart.fnType(T, [])))();
    let IgnoreElementsStreamTransformerOfT = () => (IgnoreElementsStreamTransformerOfT = dart.constFn(ignore_elements.IgnoreElementsStreamTransformer$(T)))();
    let IntervalStreamTransformerOfT = () => (IntervalStreamTransformerOfT = dart.constFn(interval.IntervalStreamTransformer$(T)))();
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let MaterializeStreamTransformerOfT = () => (MaterializeStreamTransformerOfT = dart.constFn(materialize.MaterializeStreamTransformer$(T)))();
    let StreamMaxFutureOfT = () => (StreamMaxFutureOfT = dart.constFn(stream_max_future.StreamMaxFuture$(T)))();
    let MergeStreamOfT = () => (MergeStreamOfT = dart.constFn(merge.MergeStream$(T)))();
    let StreamMinFutureOfT = () => (StreamMinFutureOfT = dart.constFn(stream_min_future.StreamMinFuture$(T)))();
    let OnErrorResumeStreamTransformerOfT = () => (OnErrorResumeStreamTransformerOfT = dart.constFn(on_error_resume.OnErrorResumeStreamTransformer$(T)))();
    let dynamicToStreamOfT = () => (dynamicToStreamOfT = dart.constFn(dart.fnType(StreamOfT(), [dart.dynamic])))();
    let dynamicToObservableOfT = () => (dynamicToObservableOfT = dart.constFn(dart.fnType(ObservableOfT(), [dart.dynamic])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let PairwiseStreamTransformerOfT = () => (PairwiseStreamTransformerOfT = dart.constFn(pairwise.PairwiseStreamTransformer$(T)))();
    let StreamConsumerOfT = () => (StreamConsumerOfT = dart.constFn(async.StreamConsumer$(T)))();
    let TAndTToT = () => (TAndTToT = dart.constFn(dart.fnType(T, [T, T])))();
    let SampleStreamTransformerOfT = () => (SampleStreamTransformerOfT = dart.constFn(sample.SampleStreamTransformer$(T)))();
    let StartWithStreamTransformerOfT = () => (StartWithStreamTransformerOfT = dart.constFn(start_with.StartWithStreamTransformer$(T)))();
    let StartWithManyStreamTransformerOfT = () => (StartWithManyStreamTransformerOfT = dart.constFn(start_with_many.StartWithManyStreamTransformer$(T)))();
    let SwitchIfEmptyStreamTransformerOfT = () => (SwitchIfEmptyStreamTransformerOfT = dart.constFn(switch_if_empty.SwitchIfEmptyStreamTransformer$(T)))();
    let ThrottleStreamTransformerOfT = () => (ThrottleStreamTransformerOfT = dart.constFn(throttle.ThrottleStreamTransformer$(T)))();
    let TimeIntervalOfT = () => (TimeIntervalOfT = dart.constFn(time_interval.TimeInterval$(T)))();
    let TimeIntervalStreamTransformerOfT = () => (TimeIntervalStreamTransformerOfT = dart.constFn(time_interval.TimeIntervalStreamTransformer$(T)))();
    let TimestampedOfT = () => (TimestampedOfT = dart.constFn(timestamp.Timestamped$(T)))();
    let TimestampStreamTransformerOfT = () => (TimestampStreamTransformerOfT = dart.constFn(timestamp.TimestampStreamTransformer$(T)))();
    let AsObservableFutureOfListOfT = () => (AsObservableFutureOfListOfT = dart.constFn(as_observable_future.AsObservableFuture$(ListOfT())))();
    let SetOfT = () => (SetOfT = dart.constFn(core.Set$(T)))();
    let AsObservableFutureOfSetOfT = () => (AsObservableFutureOfSetOfT = dart.constFn(as_observable_future.AsObservableFuture$(SetOfT())))();
    let WindowStreamTransformerOfT = () => (WindowStreamTransformerOfT = dart.constFn(window.WindowStreamTransformer$(T)))();
    let WindowCountStreamTransformerOfT = () => (WindowCountStreamTransformerOfT = dart.constFn(window.WindowCountStreamTransformer$(T)))();
    let WindowTestStreamTransformerOfT = () => (WindowTestStreamTransformerOfT = dart.constFn(window.WindowTestStreamTransformer$(T)))();
    let PublishConnectableObservableOfT = () => (PublishConnectableObservableOfT = dart.constFn(connectable_observable.PublishConnectableObservable$(T)))();
    let ValueConnectableObservableOfT = () => (ValueConnectableObservableOfT = dart.constFn(connectable_observable.ValueConnectableObservable$(T)))();
    let ReplayConnectableObservableOfT = () => (ReplayConnectableObservableOfT = dart.constFn(connectable_observable.ReplayConnectableObservable$(T)))();
    class Observable extends async.Stream$(T) {
      any(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].any(test));
      }
      static combineLatest(T, R, streams, combiner) {
        return new (observable.Observable$(R)).new(new (combine_latest.CombineLatestStream$(T, R)).new(streams, combiner));
      }
      static combineLatestList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(combine_latest.CombineLatestStream.list(T, streams));
      }
      static combineLatest2(A, B, T, streamA, streamB, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static combineLatest3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static combineLatest4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static combineLatest5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static combineLatest6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static combineLatest7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static combineLatest8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static combineLatest9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (observable.Observable$(T)).new(combine_latest.CombineLatestStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static concat(streams) {
        return new (observable.Observable$(T)).new(new (concat.ConcatStream$(T)).new(streams));
      }
      static concatEager(streams) {
        return new (observable.Observable$(T)).new(new (concat_eager.ConcatEagerStream$(T)).new(streams));
      }
      static defer(streamFactory, opts) {
        let reusable = opts && 'reusable' in opts ? opts.reusable : false;
        return new (observable.Observable$(T)).new(new (defer.DeferStream$(T)).new(streamFactory, {reusable: reusable}));
      }
      static error(error) {
        return new (observable.Observable$(T)).new(new (error$.ErrorStream$(T)).new(error));
      }
      static eventTransformed(source, mapSink) {
        return new (observable.Observable$(T)).new(async.Stream$(T).eventTransformed(source, mapSink));
      }
      static forkJoin(T, R, streams, combiner) {
        return new (observable.Observable$(R)).new(new (fork_join.ForkJoinStream$(T, R)).new(streams, combiner));
      }
      static forkJoinList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(fork_join.ForkJoinStream.list(T, streams));
      }
      static forkJoin2(A, B, T, streamA, streamB, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine2(A, B, T, streamA, streamB, combiner));
      }
      static forkJoin3(A, B, C, T, streamA, streamB, streamC, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine3(A, B, C, T, streamA, streamB, streamC, combiner));
      }
      static forkJoin4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine4(A, B, C, D, T, streamA, streamB, streamC, streamD, combiner));
      }
      static forkJoin5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, combiner));
      }
      static forkJoin6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, combiner));
      }
      static forkJoin7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, combiner));
      }
      static forkJoin8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, combiner));
      }
      static forkJoin9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner) {
        return new (observable.Observable$(T)).new(fork_join.ForkJoinStream.combine9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, combiner));
      }
      static fromFuture(future) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromFuture(future));
      }
      static fromIterable(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(data));
      }
      static just(data) {
        return new (observable.Observable$(T)).new(async.Stream$(T).fromIterable(_interceptors.JSArray$(T).of([data])));
      }
      static empty() {
        return new (observable.Observable$(T)).new(new (async._EmptyStream$(T)).new());
      }
      static merge(streams) {
        return new (observable.Observable$(T)).new(new (merge.MergeStream$(T)).new(streams));
      }
      static never() {
        return new (observable.Observable$(T)).new(new (never.NeverStream$(T)).new());
      }
      static periodic(period, computation) {
        if (computation === void 0) computation = null;
        return new (observable.Observable$(T)).new(async.Stream$(T).periodic(period, computation));
      }
      static race(streams) {
        return new (observable.Observable$(T)).new(new (race.RaceStream$(T)).new(streams));
      }
      static range(startInclusive, endInclusive) {
        return new (ObservableOfint()).new(new range.RangeStream.new(startInclusive, endInclusive));
      }
      static repeat(streamFactory, count) {
        if (count === void 0) count = null;
        return new (observable.Observable$(T)).new(new (repeat.RepeatStream$(T)).new(streamFactory, count));
      }
      static retry(streamFactory, count) {
        if (count === void 0) count = null;
        return new (observable.Observable$(T)).new(new (retry.RetryStream$(T)).new(streamFactory, count));
      }
      static retryWhen(streamFactory, retryWhenFactory) {
        return new (observable.Observable$(T)).new(new (retry_when.RetryWhenStream$(T)).new(streamFactory, retryWhenFactory));
      }
      static sequenceEqual(A, B, stream, other, opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        return new (ObservableOfbool()).new(new (sequence_equal.SequenceEqualStream$(A, B)).new(stream, other, {equals: equals}));
      }
      static switchLatest(streams) {
        return new (observable.Observable$(T)).new(new (switch_latest.SwitchLatestStream$(T)).new(streams));
      }
      static timer(value, duration) {
        return new (observable.Observable$(T)).new(new (timer.TimerStream$(T)).new(value, duration));
      }
      static zip2(A, B, T, streamA, streamB, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip2(A, B, T, streamA, streamB, zipper));
      }
      static zip(T, R, streams, zipper) {
        return new (observable.Observable$(R)).new(new (zip.ZipStream$(T, R)).new(streams, zipper));
      }
      static zipList(T, streams) {
        return new (observable.Observable$(core.List$(T))).new(zip.ZipStream.list(T, streams));
      }
      static zip3(A, B, C, T, streamA, streamB, streamC, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip3(A, B, C, T, streamA, streamB, streamC, zipper));
      }
      static zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip4(A, B, C, D, T, streamA, streamB, streamC, streamD, zipper));
      }
      static zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip5(A, B, C, D, E, T, streamA, streamB, streamC, streamD, streamE, zipper));
      }
      static zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip6(A, B, C, D, E, F, T, streamA, streamB, streamC, streamD, streamE, streamF, zipper));
      }
      static zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip7(A, B, C, D, E, F, G, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, zipper));
      }
      static zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip8(A, B, C, D, E, F, G, H, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, zipper));
      }
      static zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper) {
        return new (observable.Observable$(T)).new(zip.ZipStream.zip9(A, B, C, D, E, F, G, H, I, T, streamA, streamB, streamC, streamD, streamE, streamF, streamG, streamH, streamI, zipper));
      }
      asBroadcastStream(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        return new (ObservableOfT()).new(this[_stream].asBroadcastStream({onListen: onListen, onCancel: onCancel}));
      }
      asyncExpand(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      asyncMap(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].asyncMap(S, convert));
      }
      buffer(window) {
        return this.transform(ListOfT(), new (BufferStreamTransformerOfT()).new(dart.fn(_ => window, TToStream())));
      }
      bufferCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(ListOfT(), new (BufferCountStreamTransformerOfT()).new(count, startBufferEvery));
      }
      bufferTest(onTestHandler) {
        return this.transform(ListOfT(), new (BufferTestStreamTransformerOfT()).new(onTestHandler));
      }
      bufferTime(duration) {
        if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
        return this.buffer(StreamOfvoid().periodic(duration));
      }
      cast(R) {
        return new (observable.Observable$(R)).new(this[_stream].cast(R));
      }
      concatMap(S, mapper) {
        return new (observable.Observable$(S)).new(this[_stream].asyncExpand(S, mapper));
      }
      concatWith(other) {
        let t4;
        IterableOfStreamOfT()._check(other);
        return new (ObservableOfT()).new(new (ConcatStreamOfT()).new((t4 = JSArrayOfStreamOfT().of([this[_stream]]), t4[$addAll](other), t4)));
      }
      contains(needle) {
        return new (AsObservableFutureOfbool()).new(this[_stream].contains(needle));
      }
      debounce(window) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(window));
      }
      debounceTime(duration) {
        return this.transform(T, new (DebounceStreamTransformerOfT()).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), TToTimerStreamOfbool())));
      }
      defaultIfEmpty(defaultValue) {
        T._check(defaultValue);
        return this.transform(T, new (DefaultIfEmptyStreamTransformerOfT()).new(defaultValue));
      }
      delay(duration) {
        return this.transform(T, new (DelayStreamTransformerOfT()).new(duration));
      }
      dematerialize(S) {
        return this.cast(notification.Notification$(S)).transform(S, new (dematerialize.DematerializeStreamTransformer$(S)).new());
      }
      distinct(equals) {
        if (equals === void 0) equals = null;
        return new (ObservableOfT()).new(this[_stream].distinct(equals));
      }
      distinctUnique(opts) {
        let equals = opts && 'equals' in opts ? opts.equals : null;
        let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
        return this.transform(T, new (DistinctUniqueStreamTransformerOfT()).new({equals: equals, hashCode: hashCode}));
      }
      doOnCancel(onCancel) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onCancel: onCancel}));
      }
      doOnData(onData) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onData: onData}));
      }
      doOnDone(onDone) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onDone: onDone}));
      }
      doOnEach(onEach) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onEach: onEach}));
      }
      doOnError(onError) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onError: onError}));
      }
      doOnListen(onListen) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onListen: onListen}));
      }
      doOnPause(onPause) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onPause: onPause}));
      }
      doOnResume(onResume) {
        return this.transform(T, new (DoStreamTransformerOfT()).new({onResume: onResume}));
      }
      drain(S, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].drain(S, futureValue));
      }
      elementAt(index) {
        return new (AsObservableFutureOfT()).new(this[_stream].elementAt(index));
      }
      every(test) {
        return new (AsObservableFutureOfbool()).new(this[_stream].every(test));
      }
      exhaustMap(S, mapper) {
        return this.transform(S, new (exhaust_map.ExhaustMapStreamTransformer$(T, S)).new(mapper));
      }
      expand(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].expand(S, convert));
      }
      get first() {
        return new (AsObservableFutureOfT()).new(this[_stream].first);
      }
      firstWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].firstWhere(test, {orElse: orElse}));
      }
      flatMap(S, mapper) {
        return this.transform(S, new (flat_map.FlatMapStreamTransformer$(T, S)).new(mapper));
      }
      flatMapIterable(S, mapper) {
        return this.transform(core.Iterable$(S), new (flat_map.FlatMapStreamTransformer$(T, core.Iterable$(S))).new(mapper)).expand(S, dart.fn(iterable => iterable, dart.fnType(core.Iterable$(S), [core.Iterable$(S)])));
      }
      fold(S, initialValue, combine) {
        return new (as_observable_future.AsObservableFuture$(S)).new(this[_stream].fold(S, initialValue, combine));
      }
      forEach(action) {
        return new as_observable_future.AsObservableFuture.new(this[_stream].forEach(action));
      }
      groupBy(S, grouper) {
        return this.transform(group_by.GroupByObservable$(T, S), new (group_by.GroupByStreamTransformer$(T, S)).new(grouper));
      }
      handleError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return new (ObservableOfT()).new(this[_stream].handleError(onError, {test: test}));
      }
      ignoreElements() {
        return this.transform(T, new (IgnoreElementsStreamTransformerOfT()).new());
      }
      interval(duration) {
        return this.transform(T, new (IntervalStreamTransformerOfT()).new(duration));
      }
      get isBroadcast() {
        return this[_stream] != null ? this[_stream].isBroadcast : false;
      }
      get isEmpty() {
        return new (AsObservableFutureOfbool()).new(this[_stream].isEmpty);
      }
      join(separator) {
        if (separator === void 0) separator = "";
        return new (AsObservableFutureOfString()).new(this[_stream].join(separator));
      }
      get last() {
        return new (AsObservableFutureOfT()).new(this[_stream].last);
      }
      lastWhere(test, opts) {
        let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].lastWhere(test, {orElse: orElse}));
      }
      listen(onData, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : null;
        return this[_stream].listen(onData, {onError: onError, onDone: onDone, cancelOnError: cancelOnError});
      }
      get length() {
        return new (AsObservableFutureOfint()).new(this[_stream].length);
      }
      map(S, convert) {
        return new (observable.Observable$(S)).new(this[_stream].map(S, convert));
      }
      mapTo(S, value) {
        return this.transform(S, new (map_to.MapToStreamTransformer$(T, S)).new(value));
      }
      materialize() {
        return this.transform(NotificationOfT(), new (MaterializeStreamTransformerOfT()).new());
      }
      max(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMaxFutureOfT()).new(this[_stream], comparator));
      }
      mergeWith(streams) {
        let t4;
        IterableOfStreamOfT()._check(streams);
        return new (ObservableOfT()).new(new (MergeStreamOfT()).new((t4 = JSArrayOfStreamOfT().of([this[_stream]]), t4[$addAll](streams), t4)));
      }
      min(comparator) {
        if (comparator === void 0) comparator = null;
        return new (AsObservableFutureOfT()).new(new (StreamMinFutureOfT()).new(this[_stream], comparator));
      }
      ofType(S, typeToken) {
        return this.transform(S, new (of_type.OfTypeStreamTransformer$(T, S)).new(typeToken));
      }
      onErrorResumeNext(recoveryStream) {
        StreamOfT()._check(recoveryStream);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => recoveryStream, dynamicToStreamOfT())));
      }
      onErrorResume(recoveryFn) {
        dynamicToStreamOfT()._check(recoveryFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(recoveryFn));
      }
      onErrorReturn(returnValue) {
        T._check(returnValue);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnValue), dynamicToObservableOfT())));
      }
      onErrorReturnWith(returnFn) {
        dynamicToT()._check(returnFn);
        return this.transform(T, new (OnErrorResumeStreamTransformerOfT()).new(dart.fn(e => ObservableOfT().just(returnFn(e)), dynamicToObservableOfT())));
      }
      pairwise() {
        return this.transform(IterableOfT(), new (PairwiseStreamTransformerOfT()).new());
      }
      pipe(streamConsumer) {
        StreamConsumerOfT()._check(streamConsumer);
        return new as_observable_future.AsObservableFuture.new(this[_stream].pipe(streamConsumer));
      }
      reduce(combine) {
        TAndTToT()._check(combine);
        return new (AsObservableFutureOfT()).new(this[_stream].reduce(combine));
      }
      sample(sampleStream) {
        return this.transform(T, new (SampleStreamTransformerOfT()).new(dart.fn(_ => sampleStream, TToStream())));
      }
      sampleTime(duration) {
        return this.sample(StreamOfvoid().periodic(duration));
      }
      scan(S, accumulator, seed) {
        if (seed === void 0) seed = null;
        return this.transform(S, new (scan.ScanStreamTransformer$(T, S)).new(accumulator, seed));
      }
      get single() {
        return new (AsObservableFutureOfT()).new(this[_stream].single);
      }
      singleWhere(test, opts) {
        let orElse = opts && 'orElse' in opts ? opts.orElse : null;
        VoidToT()._check(orElse);
        return new (AsObservableFutureOfT()).new(this[_stream].singleWhere(test, {orElse: orElse}));
      }
      skip(count) {
        return new (ObservableOfT()).new(this[_stream].skip(count));
      }
      skipUntil(S, otherStream) {
        return this.transform(T, new (skip_until.SkipUntilStreamTransformer$(T, S)).new(otherStream));
      }
      skipWhile(test) {
        return new (ObservableOfT()).new(this[_stream].skipWhile(test));
      }
      startWith(startValue) {
        T._check(startValue);
        return this.transform(T, new (StartWithStreamTransformerOfT()).new(startValue));
      }
      startWithMany(startValues) {
        ListOfT()._check(startValues);
        return this.transform(T, new (StartWithManyStreamTransformerOfT()).new(startValues));
      }
      switchIfEmpty(fallbackStream) {
        StreamOfT()._check(fallbackStream);
        return this.transform(T, new (SwitchIfEmptyStreamTransformerOfT()).new(fallbackStream));
      }
      switchMap(S, mapper) {
        return this.transform(S, new (switch_map.SwitchMapStreamTransformer$(T, S)).new(mapper));
      }
      take(count) {
        return new (ObservableOfT()).new(this[_stream].take(count));
      }
      takeUntil(S, otherStream) {
        return this.transform(T, new (take_until.TakeUntilStreamTransformer$(T, S)).new(otherStream));
      }
      takeWhile(test) {
        return new (ObservableOfT()).new(this[_stream].takeWhile(test));
      }
      throttle(window, opts) {
        let trailing = opts && 'trailing' in opts ? opts.trailing : false;
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(window, {trailing: trailing}));
      }
      throttleTime(duration, opts) {
        let trailing = opts && 'trailing' in opts ? opts.trailing : false;
        return this.transform(T, new (ThrottleStreamTransformerOfT()).new(dart.fn(_ => new (TimerStreamOfbool()).new(true, duration), TToTimerStreamOfbool()), {trailing: trailing}));
      }
      timeInterval() {
        return this.transform(TimeIntervalOfT(), new (TimeIntervalStreamTransformerOfT()).new());
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        return new (ObservableOfT()).new(this[_stream].timeout(timeLimit, {onTimeout: onTimeout}));
      }
      timestamp() {
        return this.transform(TimestampedOfT(), new (TimestampStreamTransformerOfT()).new());
      }
      transform(S, streamTransformer) {
        async.StreamTransformer$(T, S)._check(streamTransformer);
        return new (observable.Observable$(S)).new(super.transform(S, streamTransformer));
      }
      toList() {
        return new (AsObservableFutureOfListOfT()).new(this[_stream].toList());
      }
      toSet() {
        return new (AsObservableFutureOfSetOfT()).new(this[_stream].toSet());
      }
      where(test) {
        return new (ObservableOfT()).new(this[_stream].where(test));
      }
      whereType(S) {
        return this.transform(S, new (where_type.WhereTypeStreamTransformer$(T, S)).new());
      }
      window(window) {
        return this.transform(StreamOfT(), new (WindowStreamTransformerOfT()).new(dart.fn(_ => window, TToStream())));
      }
      windowCount(count, startBufferEvery) {
        if (startBufferEvery === void 0) startBufferEvery = 0;
        return this.transform(StreamOfT(), new (WindowCountStreamTransformerOfT()).new(count, startBufferEvery));
      }
      windowTest(onTestHandler) {
        return this.transform(StreamOfT(), new (WindowTestStreamTransformerOfT()).new(onTestHandler));
      }
      windowTime(duration) {
        if (duration == null) dart.throw(new core.ArgumentError.notNull("duration"));
        return this.window(StreamOfvoid().periodic(duration));
      }
      withLatestFrom(S, R, latestFromStream, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with1(T, S, R, latestFromStream, fn));
      }
      withLatestFromList(latestFromStreams) {
        IterableOfStreamOfT()._check(latestFromStreams);
        return this.transform(ListOfT(), with_latest_from.WithLatestFromStreamTransformer.withList(T, latestFromStreams));
      }
      withLatestFrom2(A, B, R, latestFromStream1, latestFromStream2, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with2(T, A, B, R, latestFromStream1, latestFromStream2, fn));
      }
      withLatestFrom3(A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn));
      }
      withLatestFrom4(A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn));
      }
      withLatestFrom5(A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn));
      }
      withLatestFrom6(A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn));
      }
      withLatestFrom7(A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn));
      }
      withLatestFrom8(A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn));
      }
      withLatestFrom9(A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
        return this.transform(R, with_latest_from.WithLatestFromStreamTransformer.with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn));
      }
      zipWith(S, R, other, zipper) {
        return new (observable.Observable$(R)).new(zip.ZipStream.zip2(T, S, R, this[_stream], other, zipper));
      }
      publish() {
        return PublishConnectableObservableOfT().new(this);
      }
      publishValue() {
        return ValueConnectableObservableOfT().new(this);
      }
      publishValueSeeded(seedValue) {
        T._check(seedValue);
        return ValueConnectableObservableOfT().seeded(this, seedValue);
      }
      publishReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return ReplayConnectableObservableOfT().new(this, {maxSize: maxSize});
      }
      share() {
        return this.publish().refCount();
      }
      shareValue() {
        return this.publishValue().refCount();
      }
      shareValueSeeded(seedValue) {
        T._check(seedValue);
        return this.publishValueSeeded(seedValue).refCount();
      }
      shareReplay(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return this.publishReplay({maxSize: maxSize}).refCount();
      }
    }
    (Observable.new = function(stream) {
      this[_stream] = stream;
      Observable.__proto__.new.call(this);
      ;
    }).prototype = Observable.prototype;
    dart.addTypeTests(Observable);
    Observable.prototype[_is_Observable_default] = true;
    dart.setMethodSignature(Observable, () => ({
      __proto__: dart.getMethods(Observable.__proto__),
      any: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      asBroadcastStream: dart.fnType(observable.Observable$(T), [], {onCancel: dart.fnType(dart.void, [async.StreamSubscription$(T)]), onListen: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      asyncExpand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      asyncMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.FutureOr$(S), [T])]]),
      buffer: dart.fnType(observable.Observable$(core.List$(T)), [async.Stream]),
      bufferCount: dart.fnType(observable.Observable$(core.List$(T)), [core.int], [core.int]),
      bufferTest: dart.fnType(observable.Observable$(core.List$(T)), [dart.fnType(core.bool, [T])]),
      bufferTime: dart.fnType(observable.Observable$(core.List$(T)), [core.Duration]),
      cast: dart.gFnType(R => [observable.Observable$(R), []]),
      concatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      concatWith: dart.fnType(observable.Observable$(T), [core.Object]),
      contains: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [core.Object]),
      debounce: dart.fnType(observable.Observable$(T), [dart.fnType(async.Stream, [T])]),
      debounceTime: dart.fnType(observable.Observable$(T), [core.Duration]),
      defaultIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      delay: dart.fnType(observable.Observable$(T), [core.Duration]),
      dematerialize: dart.gFnType(S => [observable.Observable$(S), []]),
      distinct: dart.fnType(observable.Observable$(T), [], [dart.fnType(core.bool, [T, T])]),
      distinctUnique: dart.fnType(observable.Observable$(T), [], {equals: dart.fnType(core.bool, [T, T]), hashCode: dart.fnType(core.int, [T])}),
      doOnCancel: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnData: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [T])]),
      doOnDone: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnEach: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [notification.Notification$(T)])]),
      doOnError: dart.fnType(observable.Observable$(T), [core.Function]),
      doOnListen: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      doOnPause: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [async.Future])]),
      doOnResume: dart.fnType(observable.Observable$(T), [dart.fnType(dart.void, [])]),
      drain: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [], [S]]),
      elementAt: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.int]),
      every: dart.fnType(as_observable_future.AsObservableFuture$(core.bool), [dart.fnType(core.bool, [T])]),
      exhaustMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      expand: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(core.Iterable$(S), [T])]]),
      firstWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(dart.dynamic, []), orElse: core.Object}),
      flatMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      flatMapIterable: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(core.Iterable$(S)), [T])]]),
      fold: dart.gFnType(S => [as_observable_future.AsObservableFuture$(S), [S, dart.fnType(S, [S, T])]]),
      forEach: dart.fnType(as_observable_future.AsObservableFuture, [dart.fnType(dart.void, [T])]),
      groupBy: dart.gFnType(S => [observable.Observable$(group_by.GroupByObservable$(T, S)), [dart.fnType(S, [T])]]),
      handleError: dart.fnType(observable.Observable$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      ignoreElements: dart.fnType(observable.Observable$(T), []),
      interval: dart.fnType(observable.Observable$(T), [core.Duration]),
      join: dart.fnType(as_observable_future.AsObservableFuture$(core.String), [], [core.String]),
      lastWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {defaultValue: dart.fnType(core.Object, []), orElse: core.Object}),
      listen: dart.fnType(async.StreamSubscription$(T), [dart.fnType(dart.void, [T])], {cancelOnError: core.bool, onDone: dart.fnType(dart.void, []), onError: core.Function}),
      map: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [T])]]),
      mapTo: dart.gFnType(S => [observable.Observable$(S), [S]]),
      materialize: dart.fnType(observable.Observable$(notification.Notification$(T)), []),
      max: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      mergeWith: dart.fnType(observable.Observable$(T), [core.Object]),
      min: dart.fnType(as_observable_future.AsObservableFuture$(T), [], [dart.fnType(core.int, [T, T])]),
      ofType: dart.gFnType(S => [observable.Observable$(S), [type_token.TypeToken$(S)]]),
      onErrorResumeNext: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorResume: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturn: dart.fnType(observable.Observable$(T), [core.Object]),
      onErrorReturnWith: dart.fnType(observable.Observable$(T), [core.Object]),
      pairwise: dart.fnType(observable.Observable$(core.Iterable$(T)), []),
      pipe: dart.fnType(as_observable_future.AsObservableFuture, [core.Object]),
      reduce: dart.fnType(as_observable_future.AsObservableFuture$(T), [core.Object]),
      sample: dart.fnType(observable.Observable$(T), [async.Stream]),
      sampleTime: dart.fnType(observable.Observable$(T), [core.Duration]),
      scan: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(S, [S, T, core.int])], [S]]),
      singleWhere: dart.fnType(as_observable_future.AsObservableFuture$(T), [dart.fnType(core.bool, [T])], {orElse: core.Object}),
      skip: dart.fnType(observable.Observable$(T), [core.int]),
      skipUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      skipWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      startWith: dart.fnType(observable.Observable$(T), [core.Object]),
      startWithMany: dart.fnType(observable.Observable$(T), [core.Object]),
      switchIfEmpty: dart.fnType(observable.Observable$(T), [core.Object]),
      switchMap: dart.gFnType(S => [observable.Observable$(S), [dart.fnType(async.Stream$(S), [T])]]),
      take: dart.fnType(observable.Observable$(T), [core.int]),
      takeUntil: dart.gFnType(S => [observable.Observable$(T), [async.Stream$(S)]]),
      takeWhile: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      throttle: dart.fnType(observable.Observable$(T), [dart.fnType(async.Stream, [T])], {trailing: core.bool}),
      throttleTime: dart.fnType(observable.Observable$(T), [core.Duration], {trailing: core.bool}),
      timeInterval: dart.fnType(observable.Observable$(time_interval.TimeInterval$(T)), []),
      timeout: dart.fnType(observable.Observable$(T), [core.Duration], {onTimeout: dart.fnType(dart.void, [async.EventSink$(T)])}),
      timestamp: dart.fnType(observable.Observable$(timestamp.Timestamped$(T)), []),
      transform: dart.gFnType(S => [observable.Observable$(S), [core.Object]]),
      toList: dart.fnType(as_observable_future.AsObservableFuture$(core.List$(T)), []),
      toSet: dart.fnType(as_observable_future.AsObservableFuture$(core.Set$(T)), []),
      where: dart.fnType(observable.Observable$(T), [dart.fnType(core.bool, [T])]),
      whereType: dart.gFnType(S => [observable.Observable$(S), []]),
      window: dart.fnType(observable.Observable$(async.Stream$(T)), [async.Stream]),
      windowCount: dart.fnType(observable.Observable$(async.Stream$(T)), [core.int], [core.int]),
      windowTest: dart.fnType(observable.Observable$(async.Stream$(T)), [dart.fnType(core.bool, [T])]),
      windowTime: dart.fnType(observable.Observable$(async.Stream$(T)), [core.Duration]),
      withLatestFrom: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      withLatestFromList: dart.fnType(observable.Observable$(core.List$(T)), [core.Object]),
      withLatestFrom2: dart.gFnType((A, B, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), dart.fnType(R, [T, A, B])]]),
      withLatestFrom3: dart.gFnType((A, B, C, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), dart.fnType(R, [T, A, B, C])]]),
      withLatestFrom4: dart.gFnType((A, B, C, D, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), dart.fnType(R, [T, A, B, C, D])]]),
      withLatestFrom5: dart.gFnType((A, B, C, D, E, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), dart.fnType(R, [T, A, B, C, D, E])]]),
      withLatestFrom6: dart.gFnType((A, B, C, D, E, F, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), dart.fnType(R, [T, A, B, C, D, E, F])]]),
      withLatestFrom7: dart.gFnType((A, B, C, D, E, F, G, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), dart.fnType(R, [T, A, B, C, D, E, F, G])]]),
      withLatestFrom8: dart.gFnType((A, B, C, D, E, F, G, H, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), async.Stream$(H), dart.fnType(R, [T, A, B, C, D, E, F, G, H])]]),
      withLatestFrom9: dart.gFnType((A, B, C, D, E, F, G, H, I, R) => [observable.Observable$(R), [async.Stream$(A), async.Stream$(B), async.Stream$(C), async.Stream$(D), async.Stream$(E), async.Stream$(F), async.Stream$(G), async.Stream$(H), async.Stream$(I), dart.fnType(R, [T, A, B, C, D, E, F, G, H, I])]]),
      zipWith: dart.gFnType((S, R) => [observable.Observable$(R), [async.Stream$(S), dart.fnType(R, [T, S])]]),
      publish: dart.fnType(connectable_observable.ConnectableObservable$(T), []),
      publishValue: dart.fnType(connectable_observable.ValueConnectableObservable$(T), []),
      publishValueSeeded: dart.fnType(connectable_observable.ValueConnectableObservable$(T), [core.Object]),
      publishReplay: dart.fnType(connectable_observable.ReplayConnectableObservable$(T), [], {maxSize: core.int}),
      share: dart.fnType(observable.Observable$(T), []),
      shareValue: dart.fnType(value_observable.ValueObservable$(T), []),
      shareValueSeeded: dart.fnType(value_observable.ValueObservable$(T), [core.Object]),
      shareReplay: dart.fnType(replay_observable.ReplayObservable$(T), [], {maxSize: core.int})
    }));
    dart.setGetterSignature(Observable, () => ({
      __proto__: dart.getGetters(Observable.__proto__),
      first: as_observable_future.AsObservableFuture$(T),
      isEmpty: as_observable_future.AsObservableFuture$(core.bool),
      last: as_observable_future.AsObservableFuture$(T),
      length: as_observable_future.AsObservableFuture$(core.int),
      single: as_observable_future.AsObservableFuture$(T)
    }));
    dart.setLibraryUri(Observable, "package:rxdart/src/observables/observable.dart");
    dart.setFieldSignature(Observable, () => ({
      __proto__: dart.getFields(Observable.__proto__),
      [_stream]: dart.finalFieldType(async.Stream$(T))
    }));
    return Observable;
  });
  observable.Observable = observable.Observable$();
  dart.addTypeTests(observable.Observable, _is_Observable_default);
  const _is_Subject_default = Symbol('_is_Subject_default');
  const Subject_controller = dart.privateName(subject, "Subject.controller");
  subject.Subject$ = dart.generic(T => {
    let _StreamSinkWrapperOfT = () => (_StreamSinkWrapperOfT = dart.constFn(subject._StreamSinkWrapper$(T)))();
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let TToNull = () => (TToNull = dart.constFn(dart.fnType(core.Null, [T])))();
    class Subject extends observable.Observable$(T) {
      get controller() {
        return this[controller$];
      }
      set controller(value) {
        super.controller = value;
      }
      get sink() {
        return new (_StreamSinkWrapperOfT()).new(this);
      }
      get onListen() {
        return this.controller.onListen;
      }
      set onListen(onListenHandler) {
        this.controller.onListen = onListenHandler;
      }
      get stream() {
        return this;
      }
      get onPause() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      set onPause(onPauseHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support pause callbacks"));
      }
      get onResume() {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      set onResume(onResumeHandler) {
        return dart.throw(new core.UnsupportedError.new("Subjects do not support resume callbacks"));
      }
      get onCancel() {
        return this.controller.onCancel;
      }
      set onCancel(onCancelHandler) {
        this.controller.onCancel = onCancelHandler;
      }
      get isClosed() {
        return this.controller.isClosed;
      }
      get isPaused() {
        return this.controller.isPaused;
      }
      get hasListener() {
        return this.controller.hasListener;
      }
      get done() {
        return this.controller.done;
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add an error while items are being added from addStream"));
        }
        this[_addError](error, stackTrace);
      }
      [_addError](error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.onAddError(error, stackTrace);
        this.controller.addError(error, stackTrace);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
      }
      addStream(source, opts) {
        StreamOfT()._check(source);
        let cancelOnError = opts && 'cancelOnError' in opts ? opts.cancelOnError : true;
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        let completer = CompleterOfT().new();
        this[_isAddingStreamItems] = true;
        source.listen(dart.fn(event => {
          this[_add](event);
        }, TToNull()), {onError: dart.fn((e, s) => {
            this.controller.addError(e, s);
            if (dart.test(cancelOnError)) {
              this[_isAddingStreamItems] = false;
              completer.completeError(e);
            }
          }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
            this[_isAddingStreamItems] = false;
            completer.complete();
          }, VoidToNull()), cancelOnError: cancelOnError});
        return completer.future;
      }
      add(event) {
        T._check(event);
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot add items while items are being added from addStream"));
        }
        this[_add](event);
      }
      [_add](event) {
        this.onAdd(event);
        this.controller.add(event);
      }
      onAdd(event) {
        T._check(event);
      }
      close() {
        if (dart.test(this[_isAddingStreamItems])) {
          dart.throw(new core.StateError.new("You cannot close the subject while items are being added from addStream"));
        }
        return this.controller.close();
      }
    }
    (Subject.new = function(controller, observable) {
      this[_isAddingStreamItems] = false;
      this[controller$] = controller;
      Subject.__proto__.new.call(this, observable);
      ;
    }).prototype = Subject.prototype;
    dart.addTypeTests(Subject);
    Subject.prototype[_is_Subject_default] = true;
    const controller$ = Subject_controller;
    Subject[dart.implements] = () => [async.StreamController$(T)];
    dart.setMethodSignature(Subject, () => ({
      __proto__: dart.getMethods(Subject.__proto__),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      [_addError]: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      onAddError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      addStream: dart.fnType(async.Future, [core.Object], {cancelOnError: core.bool}),
      add: dart.fnType(dart.void, [core.Object]),
      [_add]: dart.fnType(dart.void, [T]),
      onAdd: dart.fnType(dart.void, [core.Object]),
      close: dart.fnType(async.Future, [])
    }));
    dart.setGetterSignature(Subject, () => ({
      __proto__: dart.getGetters(Subject.__proto__),
      sink: async.StreamSink$(T),
      onListen: dart.fnType(dart.void, []),
      stream: observable.Observable$(T),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.dynamic, []),
      isClosed: core.bool,
      isPaused: core.bool,
      hasListener: core.bool,
      done: async.Future
    }));
    dart.setSetterSignature(Subject, () => ({
      __proto__: dart.getSetters(Subject.__proto__),
      onListen: dart.fnType(dart.void, []),
      onPause: dart.fnType(dart.void, []),
      onResume: dart.fnType(dart.void, []),
      onCancel: dart.fnType(dart.void, [])
    }));
    dart.setLibraryUri(Subject, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(Subject, () => ({
      __proto__: dart.getFields(Subject.__proto__),
      controller: dart.finalFieldType(async.StreamController$(T)),
      [_isAddingStreamItems]: dart.fieldType(core.bool)
    }));
    return Subject;
  });
  subject.Subject = subject.Subject$();
  dart.addTypeTests(subject.Subject, _is_Subject_default);
  const _is_ReplaySubject_default = Symbol('_is_ReplaySubject_default');
  replay_subject.ReplaySubject$ = dart.generic(T => {
    class ReplaySubject extends subject.Subject$(T) {
      static new(opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let queue = new (collection$.ListQueue$(T)).new();
        return new (replay_subject.ReplaySubject$(T)).__(controller, observable.Observable$(T).defer(dart.fn(() => new (observable.Observable$(T)).new(controller.stream).startWithMany(queue[$toList]({growable: false})), dart.fnType(observable.Observable$(T), [])), {reusable: true}), queue, maxSize);
      }
      onAdd(event) {
        T._check(event);
        if (this[_queue$][$length] == this[_maxSize$]) {
          this[_queue$].removeFirst();
        }
        this[_queue$].add(event);
      }
      get values() {
        return this[_queue$][$toList]({growable: false});
      }
    }
    (ReplaySubject.__ = function(controller, observable, _queue, _maxSize) {
      this[_queue$] = _queue;
      this[_maxSize$] = _maxSize;
      ReplaySubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = ReplaySubject.prototype;
    dart.addTypeTests(ReplaySubject);
    ReplaySubject.prototype[_is_ReplaySubject_default] = true;
    ReplaySubject[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setGetterSignature(ReplaySubject, () => ({
      __proto__: dart.getGetters(ReplaySubject.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplaySubject, "package:rxdart/src/subjects/replay_subject.dart");
    dart.setFieldSignature(ReplaySubject, () => ({
      __proto__: dart.getFields(ReplaySubject.__proto__),
      [_queue$]: dart.finalFieldType(collection$.Queue$(T)),
      [_maxSize$]: dart.finalFieldType(core.int)
    }));
    return ReplaySubject;
  });
  replay_subject.ReplaySubject = replay_subject.ReplaySubject$();
  dart.addTypeTests(replay_subject.ReplaySubject, _is_ReplaySubject_default);
  const _target$ = dart.privateName(subject, "_target");
  const _is__StreamSinkWrapper_default = Symbol('_is__StreamSinkWrapper_default');
  subject._StreamSinkWrapper$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class _StreamSinkWrapper extends core.Object {
      add(data) {
        T._check(data);
        this[_target$].add(data);
      }
      addError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this[_target$].addError(error, stackTrace);
      }
      close() {
        return this[_target$].close();
      }
      addStream(source) {
        StreamOfT()._check(source);
        return this[_target$].addStream(source);
      }
      get done() {
        return this[_target$].done;
      }
    }
    (_StreamSinkWrapper.new = function(_target) {
      this[_target$] = _target;
      ;
    }).prototype = _StreamSinkWrapper.prototype;
    dart.addTypeTests(_StreamSinkWrapper);
    _StreamSinkWrapper.prototype[_is__StreamSinkWrapper_default] = true;
    _StreamSinkWrapper[dart.implements] = () => [async.StreamSink$(T)];
    dart.setMethodSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getMethods(_StreamSinkWrapper.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      addError: dart.fnType(dart.void, [core.Object], [core.StackTrace]),
      close: dart.fnType(async.Future, []),
      addStream: dart.fnType(async.Future, [core.Object])
    }));
    dart.setGetterSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getGetters(_StreamSinkWrapper.__proto__),
      done: async.Future
    }));
    dart.setLibraryUri(_StreamSinkWrapper, "package:rxdart/src/subjects/subject.dart");
    dart.setFieldSignature(_StreamSinkWrapper, () => ({
      __proto__: dart.getFields(_StreamSinkWrapper.__proto__),
      [_target$]: dart.finalFieldType(async.StreamController$(T))
    }));
    return _StreamSinkWrapper;
  });
  subject._StreamSinkWrapper = subject._StreamSinkWrapper$();
  dart.addTypeTests(subject._StreamSinkWrapper, _is__StreamSinkWrapper_default);
  const _is_ThrottleStreamTransformer_default = Symbol('_is_ThrottleStreamTransformer_default');
  throttle.ThrottleStreamTransformer$ = dart.generic(T => {
    let TToT = () => (TToT = dart.constFn(dart.fnType(T, [T])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class ThrottleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (ThrottleStreamTransformer.new = function(window, opts) {
      let trailing = opts && 'trailing' in opts ? opts.trailing : false;
      ThrottleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.eventAfterLastWindow, window, {onWindowStart: dart.test(trailing) ? null : dart.fn(event => event, TToT()), onWindowEnd: dart.test(trailing) ? dart.fn(queue => queue[$last], IterableOfTToT()) : null});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/throttle.dart", 20, 12, "window != null");
    }).prototype = ThrottleStreamTransformer.prototype;
    dart.addTypeTests(ThrottleStreamTransformer);
    ThrottleStreamTransformer.prototype[_is_ThrottleStreamTransformer_default] = true;
    dart.setLibraryUri(ThrottleStreamTransformer, "package:rxdart/src/transformers/backpressure/throttle.dart");
    return ThrottleStreamTransformer;
  });
  throttle.ThrottleStreamTransformer = throttle.ThrottleStreamTransformer$();
  dart.addTypeTests(throttle.ThrottleStreamTransformer, _is_ThrottleStreamTransformer_default);
  const _is_SampleStreamTransformer_default = Symbol('_is_SampleStreamTransformer_default');
  sample.SampleStreamTransformer$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class SampleStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (SampleStreamTransformer.new = function(window) {
      SampleStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/sample.dart", 19, 12, "window != null");
    }).prototype = SampleStreamTransformer.prototype;
    dart.addTypeTests(SampleStreamTransformer);
    SampleStreamTransformer.prototype[_is_SampleStreamTransformer_default] = true;
    dart.setLibraryUri(SampleStreamTransformer, "package:rxdart/src/transformers/backpressure/sample.dart");
    return SampleStreamTransformer;
  });
  sample.SampleStreamTransformer = sample.SampleStreamTransformer$();
  dart.addTypeTests(sample.SampleStreamTransformer, _is_SampleStreamTransformer_default);
  const _is_PairwiseStreamTransformer_default = Symbol('_is_PairwiseStreamTransformer_default');
  pairwise.PairwiseStreamTransformer$ = dart.generic(T => {
    let TToNeverStreamOfvoid = () => (TToNeverStreamOfvoid = dart.constFn(dart.fnType(NeverStreamOfvoid(), [T])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToIterableOfT = () => (IterableOfTToIterableOfT = dart.constFn(dart.fnType(IterableOfT(), [IterableOfT()])))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class PairwiseStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.Iterable$(T)) {}
    (PairwiseStreamTransformer.new = function() {
      PairwiseStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, dart.fn(_ => new (NeverStreamOfvoid()).new(), TToNeverStreamOfvoid()), {onWindowEnd: dart.fn(queue => queue, IterableOfTToIterableOfT()), startBufferEvery: 1, closeWindowWhen: dart.fn(queue => queue[$length] === 2, IterableOfTTobool()), dispatchOnClose: false});
      ;
    }).prototype = PairwiseStreamTransformer.prototype;
    dart.addTypeTests(PairwiseStreamTransformer);
    PairwiseStreamTransformer.prototype[_is_PairwiseStreamTransformer_default] = true;
    dart.setLibraryUri(PairwiseStreamTransformer, "package:rxdart/src/transformers/backpressure/pairwise.dart");
    return PairwiseStreamTransformer;
  });
  pairwise.PairwiseStreamTransformer = pairwise.PairwiseStreamTransformer$();
  dart.addTypeTests(pairwise.PairwiseStreamTransformer, _is_PairwiseStreamTransformer_default);
  const _is_DebounceStreamTransformer_default = Symbol('_is_DebounceStreamTransformer_default');
  debounce.DebounceStreamTransformer$ = dart.generic(T => {
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTToT = () => (IterableOfTToT = dart.constFn(dart.fnType(T, [IterableOfT()])))();
    class DebounceStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, T) {}
    (DebounceStreamTransformer.new = function(window) {
      DebounceStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.everyEvent, window, {onWindowEnd: dart.fn(queue => queue[$last], IterableOfTToT())});
      if (!(window != null)) dart.assertFailed("window stream factory cannot be null", "org-dartlang-app:///packages/rxdart/src/transformers/backpressure/debounce.dart", 30, 12, "window != null");
    }).prototype = DebounceStreamTransformer.prototype;
    dart.addTypeTests(DebounceStreamTransformer);
    DebounceStreamTransformer.prototype[_is_DebounceStreamTransformer_default] = true;
    dart.setLibraryUri(DebounceStreamTransformer, "package:rxdart/src/transformers/backpressure/debounce.dart");
    return DebounceStreamTransformer;
  });
  debounce.DebounceStreamTransformer = debounce.DebounceStreamTransformer$();
  dart.addTypeTests(debounce.DebounceStreamTransformer, _is_DebounceStreamTransformer_default);
  const _is_BufferStreamTransformer_default = Symbol('_is_BufferStreamTransformer_default');
  buffer.BufferStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    class BufferStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferStreamTransformer.new = function(window) {
      BufferStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.firstEventOnly, window, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), ignoreEmptyWindows: false});
      if (window == null) dart.throw(new core.ArgumentError.notNull("window"));
    }).prototype = BufferStreamTransformer.prototype;
    dart.addTypeTests(BufferStreamTransformer);
    BufferStreamTransformer.prototype[_is_BufferStreamTransformer_default] = true;
    dart.setLibraryUri(BufferStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferStreamTransformer;
  });
  buffer.BufferStreamTransformer = buffer.BufferStreamTransformer$();
  dart.addTypeTests(buffer.BufferStreamTransformer, _is_BufferStreamTransformer_default);
  const _is_BufferCountStreamTransformer_default = Symbol('_is_BufferCountStreamTransformer_default');
  buffer.BufferCountStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferCountStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferCountStreamTransformer.new = function(count, startBufferEvery) {
      if (startBufferEvery === void 0) startBufferEvery = 0;
      BufferCountStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), startBufferEvery: startBufferEvery, closeWindowWhen: dart.fn(queue => queue[$length] == count, IterableOfTTobool())});
      if (count == null) dart.throw(new core.ArgumentError.notNull("count"));
      if (startBufferEvery == null) {
        dart.throw(new core.ArgumentError.notNull("startBufferEvery"));
      }
      if (dart.notNull(count) < 1) dart.throw(new core.ArgumentError.value(count, "count"));
      if (dart.notNull(startBufferEvery) < 0) {
        dart.throw(new core.ArgumentError.value(startBufferEvery, "startBufferEvery"));
      }
    }).prototype = BufferCountStreamTransformer.prototype;
    dart.addTypeTests(BufferCountStreamTransformer);
    BufferCountStreamTransformer.prototype[_is_BufferCountStreamTransformer_default] = true;
    dart.setLibraryUri(BufferCountStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferCountStreamTransformer;
  });
  buffer.BufferCountStreamTransformer = buffer.BufferCountStreamTransformer$();
  dart.addTypeTests(buffer.BufferCountStreamTransformer, _is_BufferCountStreamTransformer_default);
  const _is_BufferTestStreamTransformer_default = Symbol('_is_BufferTestStreamTransformer_default');
  buffer.BufferTestStreamTransformer$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToListOfT = () => (ListOfTToListOfT = dart.constFn(dart.fnType(ListOfT(), [ListOfT()])))();
    let IterableOfT = () => (IterableOfT = dart.constFn(core.Iterable$(T)))();
    let IterableOfTTobool = () => (IterableOfTTobool = dart.constFn(dart.fnType(core.bool, [IterableOfT()])))();
    class BufferTestStreamTransformer extends backpressure.BackpressureStreamTransformer$(T, core.List$(T)) {}
    (BufferTestStreamTransformer.new = function(test) {
      BufferTestStreamTransformer.__proto__.new.call(this, backpressure.WindowStrategy.onHandler, null, {onWindowEnd: dart.fn(queue => queue, ListOfTToListOfT()), closeWindowWhen: dart.fn(queue => test(queue[$last]), IterableOfTTobool())});
      if (test == null) dart.throw(new core.ArgumentError.notNull("test"));
    }).prototype = BufferTestStreamTransformer.prototype;
    dart.addTypeTests(BufferTestStreamTransformer);
    BufferTestStreamTransformer.prototype[_is_BufferTestStreamTransformer_default] = true;
    dart.setLibraryUri(BufferTestStreamTransformer, "package:rxdart/src/transformers/backpressure/buffer.dart");
    return BufferTestStreamTransformer;
  });
  buffer.BufferTestStreamTransformer = buffer.BufferTestStreamTransformer$();
  dart.addTypeTests(buffer.BufferTestStreamTransformer, _is_BufferTestStreamTransformer_default);
  const _is_TypeToken_default = Symbol('_is_TypeToken_default');
  type_token.TypeToken$ = dart.generic(S => {
    class TypeToken extends core.Object {
      isType(other) {
        return S.is(other);
      }
      toType(other) {
        return S.as(other);
      }
    }
    (TypeToken.new = function() {
      ;
    }).prototype = TypeToken.prototype;
    dart.addTypeTests(TypeToken);
    TypeToken.prototype[_is_TypeToken_default] = true;
    dart.setMethodSignature(TypeToken, () => ({
      __proto__: dart.getMethods(TypeToken.__proto__),
      isType: dart.fnType(core.bool, [dart.dynamic]),
      toType: dart.fnType(S, [dart.dynamic])
    }));
    dart.setLibraryUri(TypeToken, "package:rxdart/src/utils/type_token.dart");
    return TypeToken;
  });
  type_token.TypeToken = type_token.TypeToken$();
  dart.addTypeTests(type_token.TypeToken, _is_TypeToken_default);
  let C5;
  let C6;
  let C7;
  let C8;
  let C9;
  let C10;
  dart.defineLazy(type_token, {
    /*type_token.kBool*/get kBool() {
      return C5 || CT.C5;
    },
    /*type_token.kDouble*/get kDouble() {
      return C6 || CT.C6;
    },
    /*type_token.kInt*/get kInt() {
      return C7 || CT.C7;
    },
    /*type_token.kNum*/get kNum() {
      return C8 || CT.C8;
    },
    /*type_token.kString*/get kString() {
      return C9 || CT.C9;
    },
    /*type_token.kSymbol*/get kSymbol() {
      return C10 || CT.C10;
    }
  });
  const _is_WithLatestFromStreamTransformer_default = Symbol('_is_WithLatestFromStreamTransformer_default');
  const WithLatestFromStreamTransformer_transformer = dart.privateName(with_latest_from, "WithLatestFromStreamTransformer.transformer");
  with_latest_from.WithLatestFromStreamTransformer$ = dart.generic((T, S, R) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class WithLatestFromStreamTransformer extends async.StreamTransformerBase$(T, R) {
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
      static withList(T, latestFromStreams) {
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, T, core.List$(T))).new(latestFromStreams, dart.fn((s, values) => {
          let t4;
          t4 = _interceptors.JSArray$(T).of([s]);
          t4[$addAll](values);
          return t4;
        }, dart.fnType(core.List$(T), [T, core.List$(T)])));
      }
      static with1(T, S, R, latestFromStream, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, S, R)).new(_interceptors.JSArray$(async.Stream$(S)).of([latestFromStream]), dart.fn((s, values) => fn(s, values[$_get](0)), dart.fnType(R, [T, core.List$(S)])));
      }
      static with2(T, A, B, R, latestFromStream1, latestFromStream2, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1))), dart.fnType(R, [T, core.List])));
      }
      static with3(T, A, B, C, R, latestFromStream1, latestFromStream2, latestFromStream3, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2))), dart.fnType(R, [T, core.List])));
      }
      static with4(T, A, B, C, D, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3))), dart.fnType(R, [T, core.List])));
      }
      static with5(T, A, B, C, D, E, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4))), dart.fnType(R, [T, core.List])));
      }
      static with6(T, A, B, C, D, E, F, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5))), dart.fnType(R, [T, core.List])));
      }
      static with7(T, A, B, C, D, E, F, G, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6))), dart.fnType(R, [T, core.List])));
      }
      static with8(T, A, B, C, D, E, F, G, H, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7))), dart.fnType(R, [T, core.List])));
      }
      static with9(T, A, B, C, D, E, F, G, H, I, R, latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9, fn) {
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("Combiner cannot be null"));
        }
        return new (with_latest_from.WithLatestFromStreamTransformer$(T, dart.dynamic, R)).new(JSArrayOfStream().of([latestFromStream1, latestFromStream2, latestFromStream3, latestFromStream4, latestFromStream5, latestFromStream6, latestFromStream7, latestFromStream8, latestFromStream9]), dart.fn((s, values) => fn(s, A.as(values[$_get](0)), B.as(values[$_get](1)), C.as(values[$_get](2)), D.as(values[$_get](3)), E.as(values[$_get](4)), F.as(values[$_get](5)), G.as(values[$_get](6)), H.as(values[$_get](7)), I.as(values[$_get](8))), dart.fnType(R, [T, core.List])));
      }
      static _buildTransformer(T, S, R, latestFromStreams, fn) {
        if (latestFromStreams == null) {
          dart.throw(new core.ArgumentError.new("latestFromStreams cannot be null"));
        }
        if (dart.test(latestFromStreams[$any](dart.fn(s => s == null, dart.fnType(core.bool, [async.Stream$(S)]))))) {
          dart.throw(new core.ArgumentError.new("All streams must be not null"));
        }
        if (fn == null) {
          dart.throw(new core.ArgumentError.new("combiner cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, R)).new(dart.fn((input, cancelOnError) => {
          let len = latestFromStreams[$length];
          let controller = null;
          let subscription = null;
          let subscriptions = core.List$(async.StreamSubscription$(S)).new(len);
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(R).new({sync: true, onListen: dart.fn(() => {
              let latestValues = core.List$(S).new(len);
              let hasValues = ListOfbool().filled(len, false);
              subscription = input.listen(dart.fn(value => {
                if (dart.test(hasValues[$every](dart.fn(hasValue => hasValue, boolTobool())))) {
                  try {
                    controller.add(fn(value, core.List$(S).unmodifiable(latestValues)));
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone});
              let index = 0;
              for (let latestFromStream of latestFromStreams) {
                let currentIndex = index;
                subscriptions[$_set](index, latestFromStream.listen(dart.fn(latest => {
                  hasValues[$_set](currentIndex, true);
                  latestValues[$_set](currentIndex, latest);
                }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError}));
                index = index + 1;
              }
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              let t5;
              let list = (t5 = ListOfStreamSubscription().of(subscriptions), t5[$add](subscription), t5);
              let cancelFutures = list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool()));
              return async.Future.wait(dart.dynamic, cancelFutures);
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(R), [async.Stream$(T), core.bool])));
      }
    }
    (WithLatestFromStreamTransformer.new = function(latestFromStreams, fn) {
      this[transformer] = with_latest_from.WithLatestFromStreamTransformer._buildTransformer(T, S, R, latestFromStreams, fn);
      WithLatestFromStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WithLatestFromStreamTransformer.prototype;
    dart.addTypeTests(WithLatestFromStreamTransformer);
    WithLatestFromStreamTransformer.prototype[_is_WithLatestFromStreamTransformer_default] = true;
    const transformer = WithLatestFromStreamTransformer_transformer;
    dart.setMethodSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getMethods(WithLatestFromStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(R), [core.Object])
    }));
    dart.setLibraryUri(WithLatestFromStreamTransformer, "package:rxdart/src/transformers/with_latest_from.dart");
    dart.setFieldSignature(WithLatestFromStreamTransformer, () => ({
      __proto__: dart.getFields(WithLatestFromStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, R))
    }));
    return WithLatestFromStreamTransformer;
  });
  with_latest_from.WithLatestFromStreamTransformer = with_latest_from.WithLatestFromStreamTransformer$();
  dart.addTypeTests(with_latest_from.WithLatestFromStreamTransformer, _is_WithLatestFromStreamTransformer_default);
  const _is_WhereTypeStreamTransformer_default = Symbol('_is_WhereTypeStreamTransformer_default');
  const WhereTypeStreamTransformer_transformer = dart.privateName(where_type, "WhereTypeStreamTransformer.transformer");
  where_type.WhereTypeStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class WhereTypeStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(event => {
                if (event == null) return;
                let eventCast = null;
                try {
                  eventCast = T.as(event);
                } catch (e$) {
                  let ex = dart.getThrown(e$);
                  let st = dart.stackTrace(e$);
                  if (core.CastError.is(ex)) {
                    let _ = ex;
                    return;
                  } else {
                    let e = ex;
                    let s = st;
                    return controller.addError(e, s);
                  }
                }
                controller.add(eventCast);
              }, dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (WhereTypeStreamTransformer.new = function() {
      this[transformer] = where_type.WhereTypeStreamTransformer._buildTransformer(S, T);
      WhereTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = WhereTypeStreamTransformer.prototype;
    dart.addTypeTests(WhereTypeStreamTransformer);
    WhereTypeStreamTransformer.prototype[_is_WhereTypeStreamTransformer_default] = true;
    const transformer = WhereTypeStreamTransformer_transformer;
    dart.setMethodSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(WhereTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(WhereTypeStreamTransformer, "package:rxdart/src/transformers/where_type.dart");
    dart.setFieldSignature(WhereTypeStreamTransformer, () => ({
      __proto__: dart.getFields(WhereTypeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return WhereTypeStreamTransformer;
  });
  where_type.WhereTypeStreamTransformer = where_type.WhereTypeStreamTransformer$();
  dart.addTypeTests(where_type.WhereTypeStreamTransformer, _is_WhereTypeStreamTransformer_default);
  const _is_Timestamped_default = Symbol('_is_Timestamped_default');
  const Timestamped_value = dart.privateName(timestamp, "Timestamped.value");
  const Timestamped_timestamp = dart.privateName(timestamp, "Timestamped.timestamp");
  timestamp.Timestamped$ = dart.generic(T => {
    class Timestamped extends core.Object {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get timestamp() {
        return this[timestamp$];
      }
      set timestamp(value) {
        super.timestamp = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return timestamp.Timestamped.is(other) && dart.equals(this.timestamp, other.timestamp) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.timestamp)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeStamp{timestamp: " + dart.str(this.timestamp) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (Timestamped.new = function(timestamp, value) {
      this[timestamp$] = timestamp;
      this[value$] = value;
      ;
    }).prototype = Timestamped.prototype;
    dart.addTypeTests(Timestamped);
    Timestamped.prototype[_is_Timestamped_default] = true;
    const value$ = Timestamped_value;
    const timestamp$ = Timestamped_timestamp;
    dart.setMethodSignature(Timestamped, () => ({
      __proto__: dart.getMethods(Timestamped.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(Timestamped, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(Timestamped, () => ({
      __proto__: dart.getFields(Timestamped.__proto__),
      value: dart.finalFieldType(T),
      timestamp: dart.finalFieldType(core.DateTime)
    }));
    dart.defineExtensionMethods(Timestamped, ['_equals', 'toString']);
    dart.defineExtensionAccessors(Timestamped, ['hashCode']);
    return Timestamped;
  });
  timestamp.Timestamped = timestamp.Timestamped$();
  dart.addTypeTests(timestamp.Timestamped, _is_Timestamped_default);
  const _is_TimestampStreamTransformer_default = Symbol('_is_TimestampStreamTransformer_default');
  const TimestampStreamTransformer_transformer = dart.privateName(timestamp, "TimestampStreamTransformer.transformer");
  timestamp.TimestampStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimestampStreamTransformer extends async.StreamTransformerBase$(T, timestamp.Timestamped$(T)) {
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
        return new (async._StreamSubscriptionTransformer$(T, timestamp.Timestamped$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(timestamp.Timestamped$(T)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.map(timestamp.Timestamped$(T), dart.fn(value => new (timestamp.Timestamped$(T)).new(new core.DateTime.now(), value), dart.fnType(timestamp.Timestamped$(T), [T]))).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(timestamp.Timestamped$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimestampStreamTransformer.new = function() {
      this[transformer] = timestamp.TimestampStreamTransformer._buildTransformer(T);
      TimestampStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimestampStreamTransformer.prototype;
    dart.addTypeTests(TimestampStreamTransformer);
    TimestampStreamTransformer.prototype[_is_TimestampStreamTransformer_default] = true;
    const transformer = TimestampStreamTransformer_transformer;
    dart.setMethodSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getMethods(TimestampStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(timestamp.Timestamped$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimestampStreamTransformer, "package:rxdart/src/transformers/timestamp.dart");
    dart.setFieldSignature(TimestampStreamTransformer, () => ({
      __proto__: dart.getFields(TimestampStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, timestamp.Timestamped$(T)))
    }));
    return TimestampStreamTransformer;
  });
  timestamp.TimestampStreamTransformer = timestamp.TimestampStreamTransformer$();
  dart.addTypeTests(timestamp.TimestampStreamTransformer, _is_TimestampStreamTransformer_default);
  const _is_TimeInterval_default = Symbol('_is_TimeInterval_default');
  const TimeInterval_interval = dart.privateName(time_interval, "TimeInterval.interval");
  const TimeInterval_value = dart.privateName(time_interval, "TimeInterval.value");
  time_interval.TimeInterval$ = dart.generic(T => {
    class TimeInterval extends core.Object {
      get interval() {
        return this[interval$];
      }
      set interval(value) {
        super.interval = value;
      }
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (this === other) {
          return true;
        }
        return time_interval.TimeInterval.is(other) && dart.equals(this.interval, other.interval) && dart.equals(this.value, other.value);
      }
      get hashCode() {
        return (dart.notNull(dart.hashCode(this.interval)) ^ dart.notNull(dart.hashCode(this.value))) >>> 0;
      }
      toString() {
        return "TimeInterval{interval: " + dart.str(this.interval) + ", value: " + dart.str(this.value) + "}";
      }
    }
    (TimeInterval.new = function(value, interval) {
      this[value$] = value;
      this[interval$] = interval;
      ;
    }).prototype = TimeInterval.prototype;
    dart.addTypeTests(TimeInterval);
    TimeInterval.prototype[_is_TimeInterval_default] = true;
    const interval$ = TimeInterval_interval;
    const value$ = TimeInterval_value;
    dart.setMethodSignature(TimeInterval, () => ({
      __proto__: dart.getMethods(TimeInterval.__proto__),
      _equals: dart.fnType(core.bool, [core.Object]),
      [$_equals]: dart.fnType(core.bool, [core.Object])
    }));
    dart.setLibraryUri(TimeInterval, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeInterval, () => ({
      __proto__: dart.getFields(TimeInterval.__proto__),
      interval: dart.finalFieldType(core.Duration),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(TimeInterval, ['_equals', 'toString']);
    dart.defineExtensionAccessors(TimeInterval, ['hashCode']);
    return TimeInterval;
  });
  time_interval.TimeInterval = time_interval.TimeInterval$();
  dart.addTypeTests(time_interval.TimeInterval, _is_TimeInterval_default);
  const _is_TimeIntervalStreamTransformer_default = Symbol('_is_TimeIntervalStreamTransformer_default');
  const TimeIntervalStreamTransformer_transformer = dart.privateName(time_interval, "TimeIntervalStreamTransformer.transformer");
  time_interval.TimeIntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TimeIntervalStreamTransformer extends async.StreamTransformerBase$(T, time_interval.TimeInterval$(T)) {
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
        return new (async._StreamSubscriptionTransformer$(T, time_interval.TimeInterval$(T))).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(time_interval.TimeInterval$(T)).new({sync: true, onListen: dart.fn(() => {
              let t8;
              let stopwatch = (t8 = new core.Stopwatch.new(), t8.start(), t8);
              let ems = null;
              subscription = input.listen(dart.fn(value => {
                let t9;
                ems = stopwatch.elapsedMicroseconds;
                stopwatch.stop();
                try {
                  controller.add(new (time_interval.TimeInterval$(T)).new(value, new core.Duration.new({microseconds: ems})));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
                stopwatch = (t9 = new core.Stopwatch.new(), t9.start(), t9);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  stopwatch.stop();
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(time_interval.TimeInterval$(T)), [async.Stream$(T), core.bool])));
      }
    }
    (TimeIntervalStreamTransformer.new = function() {
      this[transformer] = time_interval.TimeIntervalStreamTransformer._buildTransformer(T);
      TimeIntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TimeIntervalStreamTransformer.prototype;
    dart.addTypeTests(TimeIntervalStreamTransformer);
    TimeIntervalStreamTransformer.prototype[_is_TimeIntervalStreamTransformer_default] = true;
    const transformer = TimeIntervalStreamTransformer_transformer;
    dart.setMethodSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(TimeIntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(time_interval.TimeInterval$(T)), [core.Object])
    }));
    dart.setLibraryUri(TimeIntervalStreamTransformer, "package:rxdart/src/transformers/time_interval.dart");
    dart.setFieldSignature(TimeIntervalStreamTransformer, () => ({
      __proto__: dart.getFields(TimeIntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, time_interval.TimeInterval$(T)))
    }));
    return TimeIntervalStreamTransformer;
  });
  time_interval.TimeIntervalStreamTransformer = time_interval.TimeIntervalStreamTransformer$();
  dart.addTypeTests(time_interval.TimeIntervalStreamTransformer, _is_TimeIntervalStreamTransformer_default);
  const _is_TakeUntilStreamTransformer_default = Symbol('_is_TakeUntilStreamTransformer_default');
  const TakeUntilStreamTransformer_transformer = dart.privateName(take_until, "TakeUntilStreamTransformer.transformer");
  take_until.TakeUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class TakeUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("take until stream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => onDone(), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t9, t9$;
              yield (t9 = otherSubscription, t9 == null ? null : t9.cancel());
              yield (t9$ = subscription, t9$ == null ? null : t9$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (TakeUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = take_until.TakeUntilStreamTransformer._buildTransformer(T, S, otherStream);
      TakeUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = TakeUntilStreamTransformer.prototype;
    dart.addTypeTests(TakeUntilStreamTransformer);
    TakeUntilStreamTransformer.prototype[_is_TakeUntilStreamTransformer_default] = true;
    const transformer = TakeUntilStreamTransformer_transformer;
    dart.setMethodSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(TakeUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(TakeUntilStreamTransformer, "package:rxdart/src/transformers/take_until.dart");
    dart.setFieldSignature(TakeUntilStreamTransformer, () => ({
      __proto__: dart.getFields(TakeUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return TakeUntilStreamTransformer;
  });
  take_until.TakeUntilStreamTransformer = take_until.TakeUntilStreamTransformer$();
  dart.addTypeTests(take_until.TakeUntilStreamTransformer, _is_TakeUntilStreamTransformer_default);
  const _is_SwitchMapStreamTransformer_default = Symbol('_is_SwitchMapStreamTransformer_default');
  const SwitchMapStreamTransformer_transformer = dart.privateName(switch_map, "SwitchMapStreamTransformer.transformer");
  switch_map.SwitchMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let leftClosed = false;
          let rightClosed = false;
          let hasMainEvent = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t9;
                try {
                  t9 = otherSubscription;
                  t9 == null ? null : t9.cancel();
                  hasMainEvent = true;
                  otherSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      rightClosed = true;
                      if (leftClosed) controller.close();
                    }, VoidToNull())});
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  leftClosed = true;
                  if (rightClosed || !hasMainEvent) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t10;
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              t10 = otherSubscription;
              t10 == null ? null : t10.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t10;
              subscription.resume();
              t10 = otherSubscription;
              t10 == null ? null : t10.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t10;
              yield subscription.cancel();
              if (hasMainEvent) yield (t10 = otherSubscription, t10 == null ? null : t10.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchMapStreamTransformer.new = function(mapper) {
      this[transformer] = switch_map.SwitchMapStreamTransformer._buildTransformer(T, S, mapper);
      SwitchMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchMapStreamTransformer.prototype;
    dart.addTypeTests(SwitchMapStreamTransformer);
    SwitchMapStreamTransformer.prototype[_is_SwitchMapStreamTransformer_default] = true;
    const transformer = SwitchMapStreamTransformer_transformer;
    dart.setMethodSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(SwitchMapStreamTransformer, "package:rxdart/src/transformers/switch_map.dart");
    dart.setFieldSignature(SwitchMapStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return SwitchMapStreamTransformer;
  });
  switch_map.SwitchMapStreamTransformer = switch_map.SwitchMapStreamTransformer$();
  dart.addTypeTests(switch_map.SwitchMapStreamTransformer, _is_SwitchMapStreamTransformer_default);
  const _is_SwitchIfEmptyStreamTransformer_default = Symbol('_is_SwitchIfEmptyStreamTransformer_default');
  const SwitchIfEmptyStreamTransformer_transformer = dart.privateName(switch_if_empty, "SwitchIfEmptyStreamTransformer.transformer");
  switch_if_empty.SwitchIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SwitchIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, fallbackStream) {
        if (fallbackStream == null) {
          dart.throw(new core.ArgumentError.new("fallbackStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let defaultSubscription = null;
          let switchSubscription = null;
          let hasEvent = false;
          function onDone() {
            let t10;
            if (dart.test(controller.isClosed)) return;
            controller.close();
            t10 = switchSubscription;
            t10 == null ? null : t10.cancel();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              defaultSubscription = input.listen(dart.fn(value => {
                hasEvent = true;
                controller.add(value);
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasEvent) {
                    controller.close();
                  } else {
                    switchSubscription = fallbackStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t10, t10$;
              if (resumeSignal === void 0) resumeSignal = null;
              t10 = defaultSubscription;
              t10 == null ? null : t10.pause(resumeSignal);
              t10$ = switchSubscription;
              t10$ == null ? null : t10$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t10, t10$;
              t10 = defaultSubscription;
              t10 == null ? null : t10.resume();
              t10$ = switchSubscription;
              t10$ == null ? null : t10$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t10;
              t10 = defaultSubscription;
              return t10 == null ? null : t10.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SwitchIfEmptyStreamTransformer.new = function(fallbackStream) {
      this[transformer] = switch_if_empty.SwitchIfEmptyStreamTransformer._buildTransformer(T, fallbackStream);
      SwitchIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SwitchIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(SwitchIfEmptyStreamTransformer);
    SwitchIfEmptyStreamTransformer.prototype[_is_SwitchIfEmptyStreamTransformer_default] = true;
    const transformer = SwitchIfEmptyStreamTransformer_transformer;
    dart.setMethodSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(SwitchIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SwitchIfEmptyStreamTransformer, "package:rxdart/src/transformers/switch_if_empty.dart");
    dart.setFieldSignature(SwitchIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(SwitchIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SwitchIfEmptyStreamTransformer;
  });
  switch_if_empty.SwitchIfEmptyStreamTransformer = switch_if_empty.SwitchIfEmptyStreamTransformer$();
  dart.addTypeTests(switch_if_empty.SwitchIfEmptyStreamTransformer, _is_SwitchIfEmptyStreamTransformer_default);
  const _is_StartWithManyStreamTransformer_default = Symbol('_is_StartWithManyStreamTransformer_default');
  const StartWithManyStreamTransformer_transformer = dart.privateName(start_with_many, "StartWithManyStreamTransformer.transformer");
  start_with_many.StartWithManyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithManyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValues) {
        if (startValues == null) {
          dart.throw(new core.ArgumentError.new("startValues cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              startValues[$forEach](dart.bind(controller, 'add'));
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithManyStreamTransformer.new = function(startValues) {
      this[transformer] = start_with_many.StartWithManyStreamTransformer._buildTransformer(T, startValues);
      StartWithManyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithManyStreamTransformer.prototype;
    dart.addTypeTests(StartWithManyStreamTransformer);
    StartWithManyStreamTransformer.prototype[_is_StartWithManyStreamTransformer_default] = true;
    const transformer = StartWithManyStreamTransformer_transformer;
    dart.setMethodSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithManyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithManyStreamTransformer, "package:rxdart/src/transformers/start_with_many.dart");
    dart.setFieldSignature(StartWithManyStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithManyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithManyStreamTransformer;
  });
  start_with_many.StartWithManyStreamTransformer = start_with_many.StartWithManyStreamTransformer$();
  dart.addTypeTests(start_with_many.StartWithManyStreamTransformer, _is_StartWithManyStreamTransformer_default);
  const _is_StartWithStreamTransformer_default = Symbol('_is_StartWithStreamTransformer_default');
  const StartWithStreamTransformer_transformer = dart.privateName(start_with, "StartWithStreamTransformer.transformer");
  start_with.StartWithStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class StartWithStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, startValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              try {
                controller.add(startValue);
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
              subscription = input.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (StartWithStreamTransformer.new = function(startValue) {
      this[transformer] = start_with.StartWithStreamTransformer._buildTransformer(T, startValue);
      StartWithStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = StartWithStreamTransformer.prototype;
    dart.addTypeTests(StartWithStreamTransformer);
    StartWithStreamTransformer.prototype[_is_StartWithStreamTransformer_default] = true;
    const transformer = StartWithStreamTransformer_transformer;
    dart.setMethodSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getMethods(StartWithStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(StartWithStreamTransformer, "package:rxdart/src/transformers/start_with.dart");
    dart.setFieldSignature(StartWithStreamTransformer, () => ({
      __proto__: dart.getFields(StartWithStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return StartWithStreamTransformer;
  });
  start_with.StartWithStreamTransformer = start_with.StartWithStreamTransformer$();
  dart.addTypeTests(start_with.StartWithStreamTransformer, _is_StartWithStreamTransformer_default);
  const _is_SkipUntilStreamTransformer_default = Symbol('_is_SkipUntilStreamTransformer_default');
  const SkipUntilStreamTransformer_transformer = dart.privateName(skip_until, "SkipUntilStreamTransformer.transformer");
  skip_until.SkipUntilStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class SkipUntilStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, S, otherStream) {
        if (otherStream == null) {
          dart.throw(new core.ArgumentError.new("otherStream cannot be null"));
        }
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let otherSubscription = null;
          let goTime = false;
          function onDone() {
            if (dart.test(controller.isClosed)) return;
            controller.close();
          }
          dart.fn(onDone, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(data => {
                if (goTime) {
                  controller.add(data);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: onDone, cancelOnError: cancelOnError});
              otherSubscription = otherStream.listen(dart.fn(_ => {
                goTime = true;
                otherSubscription.cancel();
              }, dart.fnType(core.Null, [S])), {onError: dart.bind(controller, 'addError'), cancelOnError: cancelOnError, onDone: onDone});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              let t11, t11$;
              yield (t11 = otherSubscription, t11 == null ? null : t11.cancel());
              yield (t11$ = subscription, t11$ == null ? null : t11$.cancel());
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (SkipUntilStreamTransformer.new = function(otherStream) {
      this[transformer] = skip_until.SkipUntilStreamTransformer._buildTransformer(T, S, otherStream);
      SkipUntilStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = SkipUntilStreamTransformer.prototype;
    dart.addTypeTests(SkipUntilStreamTransformer);
    SkipUntilStreamTransformer.prototype[_is_SkipUntilStreamTransformer_default] = true;
    const transformer = SkipUntilStreamTransformer_transformer;
    dart.setMethodSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getMethods(SkipUntilStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(SkipUntilStreamTransformer, "package:rxdart/src/transformers/skip_until.dart");
    dart.setFieldSignature(SkipUntilStreamTransformer, () => ({
      __proto__: dart.getFields(SkipUntilStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return SkipUntilStreamTransformer;
  });
  skip_until.SkipUntilStreamTransformer = skip_until.SkipUntilStreamTransformer$();
  dart.addTypeTests(skip_until.SkipUntilStreamTransformer, _is_SkipUntilStreamTransformer_default);
  const _is_ScanStreamTransformer_default = Symbol('_is_ScanStreamTransformer_default');
  const ScanStreamTransformer_accumulator = dart.privateName(scan, "ScanStreamTransformer.accumulator");
  const ScanStreamTransformer_seed = dart.privateName(scan, "ScanStreamTransformer.seed");
  scan.ScanStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ScanStreamTransformer extends async.StreamTransformerBase$(T, S) {
      get accumulator() {
        return this[accumulator$];
      }
      set accumulator(value) {
        super.accumulator = value;
      }
      get seed() {
        return this[seed$];
      }
      set seed(value) {
        super.seed = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return scan.ScanStreamTransformer._buildTransformer(T, S, this.accumulator, this.seed).bind(stream);
      }
      static _buildTransformer(T, S, accumulator, seed) {
        if (seed === void 0) seed = null;
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let index = 0;
          let acc = seed;
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                let t11;
                try {
                  acc = accumulator(acc, value, (t11 = index, index = t11 + 1, t11));
                  controller.add(acc);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ScanStreamTransformer.new = function(accumulator, seed) {
      if (seed === void 0) seed = null;
      this[accumulator$] = accumulator;
      this[seed$] = seed;
      ScanStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ScanStreamTransformer.prototype;
    dart.addTypeTests(ScanStreamTransformer);
    ScanStreamTransformer.prototype[_is_ScanStreamTransformer_default] = true;
    const accumulator$ = ScanStreamTransformer_accumulator;
    const seed$ = ScanStreamTransformer_seed;
    dart.setMethodSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getMethods(ScanStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ScanStreamTransformer, "package:rxdart/src/transformers/scan.dart");
    dart.setFieldSignature(ScanStreamTransformer, () => ({
      __proto__: dart.getFields(ScanStreamTransformer.__proto__),
      accumulator: dart.finalFieldType(dart.fnType(S, [S, T, core.int])),
      seed: dart.finalFieldType(S)
    }));
    return ScanStreamTransformer;
  });
  scan.ScanStreamTransformer = scan.ScanStreamTransformer$();
  dart.addTypeTests(scan.ScanStreamTransformer, _is_ScanStreamTransformer_default);
  const _is_OnErrorResumeStreamTransformer_default = Symbol('_is_OnErrorResumeStreamTransformer_default');
  const OnErrorResumeStreamTransformer_transformer = dart.privateName(on_error_resume, "OnErrorResumeStreamTransformer.transformer");
  on_error_resume.OnErrorResumeStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OnErrorResumeStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, recoveryFn) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let inputSubscription = null;
          let recoverySubscription = null;
          let controller = null;
          let shouldCloseController = true;
          function safeClose() {
            if (shouldCloseController) {
              controller.close();
            }
          }
          dart.fn(safeClose, VoidTovoid());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.bind(controller, 'add'), {onError: dart.fn((e, s) => {
                  shouldCloseController = false;
                  recoverySubscription = recoveryFn(e).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
                  inputSubscription.cancel();
                }, dynamicAnddynamicToNull()), onDone: safeClose, cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t12, t12$;
              if (resumeSignal === void 0) resumeSignal = null;
              t12 = inputSubscription;
              t12 == null ? null : t12.pause(resumeSignal);
              t12$ = recoverySubscription;
              t12$ == null ? null : t12$.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t12, t12$;
              t12 = inputSubscription;
              t12 == null ? null : t12.resume();
              t12$ = recoverySubscription;
              t12$ == null ? null : t12$.resume();
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t12, t12$;
              return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([(t12 = inputSubscription, t12 == null ? null : t12.cancel()), (t12$ = recoverySubscription, t12$ == null ? null : t12$.cancel())])[$where](dart.fn(future => future != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (OnErrorResumeStreamTransformer.new = function(recoveryFn) {
      this[transformer] = on_error_resume.OnErrorResumeStreamTransformer._buildTransformer(T, recoveryFn);
      OnErrorResumeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OnErrorResumeStreamTransformer.prototype;
    dart.addTypeTests(OnErrorResumeStreamTransformer);
    OnErrorResumeStreamTransformer.prototype[_is_OnErrorResumeStreamTransformer_default] = true;
    const transformer = OnErrorResumeStreamTransformer_transformer;
    dart.setMethodSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getMethods(OnErrorResumeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(OnErrorResumeStreamTransformer, "package:rxdart/src/transformers/on_error_resume.dart");
    dart.setFieldSignature(OnErrorResumeStreamTransformer, () => ({
      __proto__: dart.getFields(OnErrorResumeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return OnErrorResumeStreamTransformer;
  });
  on_error_resume.OnErrorResumeStreamTransformer = on_error_resume.OnErrorResumeStreamTransformer$();
  dart.addTypeTests(on_error_resume.OnErrorResumeStreamTransformer, _is_OnErrorResumeStreamTransformer_default);
  const _is_OfTypeStreamTransformer_default = Symbol('_is_OfTypeStreamTransformer_default');
  const OfTypeStreamTransformer_transformer = dart.privateName(of_type, "OfTypeStreamTransformer.transformer");
  of_type.OfTypeStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class OfTypeStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, typeToken) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(typeToken.isType(value))) {
                    controller.add(typeToken.toType(value));
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (OfTypeStreamTransformer.new = function(typeToken) {
      this[transformer] = of_type.OfTypeStreamTransformer._buildTransformer(T, S, typeToken);
      OfTypeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = OfTypeStreamTransformer.prototype;
    dart.addTypeTests(OfTypeStreamTransformer);
    OfTypeStreamTransformer.prototype[_is_OfTypeStreamTransformer_default] = true;
    const transformer = OfTypeStreamTransformer_transformer;
    dart.setMethodSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getMethods(OfTypeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(OfTypeStreamTransformer, "package:rxdart/src/transformers/of_type.dart");
    dart.setFieldSignature(OfTypeStreamTransformer, () => ({
      __proto__: dart.getFields(OfTypeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return OfTypeStreamTransformer;
  });
  of_type.OfTypeStreamTransformer = of_type.OfTypeStreamTransformer$();
  dart.addTypeTests(of_type.OfTypeStreamTransformer, _is_OfTypeStreamTransformer_default);
  const _is_MapToStreamTransformer_default = Symbol('_is_MapToStreamTransformer_default');
  const MapToStreamTransformer_transformer = dart.privateName(map_to, "MapToStreamTransformer.transformer");
  map_to.MapToStreamTransformer$ = dart.generic((S, T) => {
    let StreamOfS = () => (StreamOfS = dart.constFn(async.Stream$(S)))();
    class MapToStreamTransformer extends async.StreamTransformerBase$(S, T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfS()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(S, T, value) {
        return new (async._StreamSubscriptionTransformer$(S, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(_ => controller.add(value), dart.fnType(dart.void, [S])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(S), core.bool])));
      }
    }
    (MapToStreamTransformer.new = function(value) {
      this[transformer] = map_to.MapToStreamTransformer._buildTransformer(S, T, value);
      MapToStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = MapToStreamTransformer.prototype;
    dart.addTypeTests(MapToStreamTransformer);
    MapToStreamTransformer.prototype[_is_MapToStreamTransformer_default] = true;
    const transformer = MapToStreamTransformer_transformer;
    dart.setMethodSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getMethods(MapToStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(MapToStreamTransformer, "package:rxdart/src/transformers/map_to.dart");
    dart.setFieldSignature(MapToStreamTransformer, () => ({
      __proto__: dart.getFields(MapToStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(S, T))
    }));
    return MapToStreamTransformer;
  });
  map_to.MapToStreamTransformer = map_to.MapToStreamTransformer$();
  dart.addTypeTests(map_to.MapToStreamTransformer, _is_MapToStreamTransformer_default);
  const _is_IntervalStreamTransformer_default = Symbol('_is_IntervalStreamTransformer_default');
  const IntervalStreamTransformer_transformer = dart.privateName(interval, "IntervalStreamTransformer.transformer");
  interval.IntervalStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IntervalStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let onInterval = null;
          let combinedWait = dart.fn(resumeSignal => resumeSignal != null && onInterval != null ? async.Future.wait(dart.dynamic, JSArrayOfFuture().of([onInterval, resumeSignal])) : resumeSignal, FutureToFuture());
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  onInterval = async.Future$(T).delayed(duration, dart.fn(() => value, dart.fnType(T, [])));
                  subscription.pause(onInterval.then(dart.void, dart.bind(controller, 'add')).whenComplete(dart.fn(() => onInterval = null, VoidToNull())));
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(combinedWait(resumeSignal));
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IntervalStreamTransformer.new = function(duration) {
      this[transformer] = interval.IntervalStreamTransformer._buildTransformer(T, duration);
      IntervalStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IntervalStreamTransformer.prototype;
    dart.addTypeTests(IntervalStreamTransformer);
    IntervalStreamTransformer.prototype[_is_IntervalStreamTransformer_default] = true;
    const transformer = IntervalStreamTransformer_transformer;
    dart.setMethodSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getMethods(IntervalStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IntervalStreamTransformer, "package:rxdart/src/transformers/interval.dart");
    dart.setFieldSignature(IntervalStreamTransformer, () => ({
      __proto__: dart.getFields(IntervalStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IntervalStreamTransformer;
  });
  interval.IntervalStreamTransformer = interval.IntervalStreamTransformer$();
  dart.addTypeTests(interval.IntervalStreamTransformer, _is_IntervalStreamTransformer_default);
  const _is_IgnoreElementsStreamTransformer_default = Symbol('_is_IgnoreElementsStreamTransformer_default');
  const IgnoreElementsStreamTransformer_transformer = dart.privateName(ignore_elements, "IgnoreElementsStreamTransformer.transformer");
  ignore_elements.IgnoreElementsStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class IgnoreElementsStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(null, {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => controller.close(), VoidToFuture()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (IgnoreElementsStreamTransformer.new = function() {
      this[transformer] = ignore_elements.IgnoreElementsStreamTransformer._buildTransformer(T);
      IgnoreElementsStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = IgnoreElementsStreamTransformer.prototype;
    dart.addTypeTests(IgnoreElementsStreamTransformer);
    IgnoreElementsStreamTransformer.prototype[_is_IgnoreElementsStreamTransformer_default] = true;
    const transformer = IgnoreElementsStreamTransformer_transformer;
    dart.setMethodSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getMethods(IgnoreElementsStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(IgnoreElementsStreamTransformer, "package:rxdart/src/transformers/ignore_elements.dart");
    dart.setFieldSignature(IgnoreElementsStreamTransformer, () => ({
      __proto__: dart.getFields(IgnoreElementsStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return IgnoreElementsStreamTransformer;
  });
  ignore_elements.IgnoreElementsStreamTransformer = ignore_elements.IgnoreElementsStreamTransformer$();
  dart.addTypeTests(ignore_elements.IgnoreElementsStreamTransformer, _is_IgnoreElementsStreamTransformer_default);
  const _is_GroupByObservable_default = Symbol('_is_GroupByObservable_default');
  const GroupByObservable_key = dart.privateName(group_by, "GroupByObservable.key");
  group_by.GroupByObservable$ = dart.generic((T, S) => {
    class GroupByObservable extends observable.Observable$(T) {
      get key() {
        return this[key$];
      }
      set key(value) {
        super.key = value;
      }
    }
    (GroupByObservable.new = function(key, stream) {
      this[key$] = key;
      GroupByObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = GroupByObservable.prototype;
    dart.addTypeTests(GroupByObservable);
    GroupByObservable.prototype[_is_GroupByObservable_default] = true;
    const key$ = GroupByObservable_key;
    dart.setLibraryUri(GroupByObservable, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByObservable, () => ({
      __proto__: dart.getFields(GroupByObservable.__proto__),
      key: dart.finalFieldType(S)
    }));
    return GroupByObservable;
  });
  group_by.GroupByObservable = group_by.GroupByObservable$();
  dart.addTypeTests(group_by.GroupByObservable, _is_GroupByObservable_default);
  const _is_GroupByStreamTransformer_default = Symbol('_is_GroupByStreamTransformer_default');
  const GroupByStreamTransformer_grouper = dart.privateName(group_by, "GroupByStreamTransformer.grouper");
  group_by.GroupByStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class GroupByStreamTransformer extends async.StreamTransformerBase$(T, group_by.GroupByObservable$(T, S)) {
      get grouper() {
        return this[grouper$];
      }
      set grouper(value) {
        super.grouper = value;
      }
      bind(stream) {
        StreamOfT()._check(stream);
        return group_by.GroupByStreamTransformer._buildTransformer(T, S, this.grouper).bind(stream);
      }
      static _buildTransformer(T, S, grouper) {
        return new (async._StreamSubscriptionTransformer$(T, group_by.GroupByObservable$(T, S))).new(dart.fn((input, cancelOnError) => {
          let mapper = new (_js_helper.LinkedMap$(S, async.StreamController$(T))).new();
          let controller = null;
          let subscription = null;
          let controllerBuilder = dart.fn(forKey => dart.fn(() => {
            let groupedController = async.StreamController$(T).new();
            controller.add(new (group_by.GroupByObservable$(T, S)).new(forKey, groupedController.stream));
            return groupedController;
          }, dart.fnType(async.StreamController$(T), [])), dart.fnType(dart.fnType(async.StreamController$(T), []), [S]));
          controller = async.StreamController$(group_by.GroupByObservable$(T, S)).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let key = grouper(value);
                  let groupedController = mapper[$putIfAbsent](key, controllerBuilder(key));
                  groupedController.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  mapper[$values][$forEach](dart.fn(controller => controller.close(), dart.fnType(async.Future, [async.StreamController$(T)])));
                  mapper[$clear]();
                  controller.close();
                }, VoidToNull())});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(group_by.GroupByObservable$(T, S)), [async.Stream$(T), core.bool])));
      }
    }
    (GroupByStreamTransformer.new = function(grouper) {
      this[grouper$] = grouper;
      GroupByStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = GroupByStreamTransformer.prototype;
    dart.addTypeTests(GroupByStreamTransformer);
    GroupByStreamTransformer.prototype[_is_GroupByStreamTransformer_default] = true;
    const grouper$ = GroupByStreamTransformer_grouper;
    dart.setMethodSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getMethods(GroupByStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(group_by.GroupByObservable$(T, S)), [core.Object])
    }));
    dart.setLibraryUri(GroupByStreamTransformer, "package:rxdart/src/transformers/group_by.dart");
    dart.setFieldSignature(GroupByStreamTransformer, () => ({
      __proto__: dart.getFields(GroupByStreamTransformer.__proto__),
      grouper: dart.finalFieldType(dart.fnType(S, [T]))
    }));
    return GroupByStreamTransformer;
  });
  group_by.GroupByStreamTransformer = group_by.GroupByStreamTransformer$();
  dart.addTypeTests(group_by.GroupByStreamTransformer, _is_GroupByStreamTransformer_default);
  const _is_FlatMapStreamTransformer_default = Symbol('_is_FlatMapStreamTransformer_default');
  const FlatMapStreamTransformer_transformer = dart.privateName(flat_map, "FlatMapStreamTransformer.transformer");
  flat_map.FlatMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class FlatMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let subscriptions = _interceptors.JSArray$(async.StreamSubscription$(S)).of([]);
          let controller = null;
          let subscription = null;
          let closeAfterNextEvent = false;
          let hasMainEvent = false;
          let openStreams = 0;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  let otherSubscription = null;
                  let otherStream = mapper(value);
                  hasMainEvent = true;
                  openStreams = openStreams + 1;
                  otherSubscription = otherStream.listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                      openStreams = openStreams - 1;
                      if (closeAfterNextEvent && openStreams === 0) {
                        controller.close();
                      }
                    }, VoidToNull())});
                  subscriptions[$add](otherSubscription);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasMainEvent || openStreams === 0) {
                    controller.close();
                  } else {
                    closeAfterNextEvent = true;
                  }
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.pause(resumeSignal), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
              subscriptions[$forEach](dart.fn(otherSubscription => otherSubscription.resume(), dart.fnType(dart.void, [async.StreamSubscription$(S)])));
            }, VoidToNull()), onCancel: dart.fn(() => {
              let t16;
              let list = (t16 = ListOfStreamSubscription().from(subscriptions), t16[$add](subscription), t16);
              return async.Future.wait(dart.dynamic, list[$map](async.Future, dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()))[$where](dart.fn(cancelFuture => cancelFuture != null, FutureTobool())));
            }, VoidToFutureOfList())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (FlatMapStreamTransformer.new = function(mapper) {
      this[transformer] = flat_map.FlatMapStreamTransformer._buildTransformer(T, S, mapper);
      FlatMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = FlatMapStreamTransformer.prototype;
    dart.addTypeTests(FlatMapStreamTransformer);
    FlatMapStreamTransformer.prototype[_is_FlatMapStreamTransformer_default] = true;
    const transformer = FlatMapStreamTransformer_transformer;
    dart.setMethodSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getMethods(FlatMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(FlatMapStreamTransformer, "package:rxdart/src/transformers/flat_map.dart");
    dart.setFieldSignature(FlatMapStreamTransformer, () => ({
      __proto__: dart.getFields(FlatMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return FlatMapStreamTransformer;
  });
  flat_map.FlatMapStreamTransformer = flat_map.FlatMapStreamTransformer$();
  dart.addTypeTests(flat_map.FlatMapStreamTransformer, _is_FlatMapStreamTransformer_default);
  const _is_ExhaustMapStreamTransformer_default = Symbol('_is_ExhaustMapStreamTransformer_default');
  const ExhaustMapStreamTransformer_transformer = dart.privateName(exhaust_map, "ExhaustMapStreamTransformer.transformer");
  exhaust_map.ExhaustMapStreamTransformer$ = dart.generic((T, S) => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class ExhaustMapStreamTransformer extends async.StreamTransformerBase$(T, S) {
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
      static _buildTransformer(T, S, mapper) {
        return new (async._StreamSubscriptionTransformer$(T, S)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let inputSubscription = null;
          let outputSubscription = null;
          let inputClosed = false;
          let outputIsEmitting = false;
          controller = async.StreamController$(S).new({sync: true, onListen: dart.fn(() => {
              inputSubscription = input.listen(dart.fn(value => {
                try {
                  if (!outputIsEmitting) {
                    outputIsEmitting = true;
                    outputSubscription = mapper(value).listen(dart.bind(controller, 'add'), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                        outputIsEmitting = false;
                        if (inputClosed) controller.close();
                      }, VoidToNull())});
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  inputClosed = true;
                  if (!outputIsEmitting) controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              let t17;
              if (resumeSignal === void 0) resumeSignal = null;
              inputSubscription.pause(resumeSignal);
              t17 = outputSubscription;
              t17 == null ? null : t17.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              let t17;
              inputSubscription.resume();
              t17 = outputSubscription;
              t17 == null ? null : t17.resume();
            }, VoidToNull()), onCancel: dart.fn(() => async.async(core.Null, function*() {
              yield inputSubscription.cancel();
              if (outputIsEmitting) yield outputSubscription.cancel();
            }), VoidToFutureOfNull())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(S), [async.Stream$(T), core.bool])));
      }
    }
    (ExhaustMapStreamTransformer.new = function(mapper) {
      this[transformer] = exhaust_map.ExhaustMapStreamTransformer._buildTransformer(T, S, mapper);
      ExhaustMapStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = ExhaustMapStreamTransformer.prototype;
    dart.addTypeTests(ExhaustMapStreamTransformer);
    ExhaustMapStreamTransformer.prototype[_is_ExhaustMapStreamTransformer_default] = true;
    const transformer = ExhaustMapStreamTransformer_transformer;
    dart.setMethodSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getMethods(ExhaustMapStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(S), [core.Object])
    }));
    dart.setLibraryUri(ExhaustMapStreamTransformer, "package:rxdart/src/transformers/exhaust_map.dart");
    dart.setFieldSignature(ExhaustMapStreamTransformer, () => ({
      __proto__: dart.getFields(ExhaustMapStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, S))
    }));
    return ExhaustMapStreamTransformer;
  });
  exhaust_map.ExhaustMapStreamTransformer = exhaust_map.ExhaustMapStreamTransformer$();
  dart.addTypeTests(exhaust_map.ExhaustMapStreamTransformer, _is_ExhaustMapStreamTransformer_default);
  const _is_DoStreamTransformer_default = Symbol('_is_DoStreamTransformer_default');
  const DoStreamTransformer_transformer = dart.privateName($do, "DoStreamTransformer.transformer");
  $do.DoStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DoStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, opts) {
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let onData = opts && 'onData' in opts ? opts.onData : null;
        let onDone = opts && 'onDone' in opts ? opts.onDone : null;
        let onEach = opts && 'onEach' in opts ? opts.onEach : null;
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onPause = opts && 'onPause' in opts ? opts.onPause : null;
        let onResume = opts && 'onResume' in opts ? opts.onResume : null;
        if (onCancel == null && onData == null && onDone == null && onEach == null && onError == null && onListen == null && onPause == null && onResume == null) {
          dart.throw(new core.ArgumentError.new("Must provide at least one handler"));
        }
        let subscriptions = new (LinkedMapOfStream$StreamSubscription()).new();
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let onListenLocal = dart.fn(() => {
            if (onListen != null) {
              try {
                onListen();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                controller.addError(e, s);
              }
            }
            subscriptions[$putIfAbsent](input, dart.fn(() => input.listen(dart.fn(value => {
              if (onData != null) {
                try {
                  onData(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }
              if (onEach != null) {
                try {
                  onEach(notification.Notification$(T).onData(value));
                } catch (e$0) {
                  let e = dart.getThrown(e$0);
                  let s = dart.stackTrace(e$0);
                  controller.addError(e, s);
                }
              }
              controller.add(value);
            }, dart.fnType(core.Null, [T])), {onError: dart.fn((e, s) => {
                if (onError != null) {
                  try {
                    dart.dcall(onError, [e, s]);
                  } catch (e$) {
                    let e2 = dart.getThrown(e$);
                    let s2 = dart.stackTrace(e$);
                    controller.addError(e2, s2);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onError(e, s));
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.addError(e, s);
              }, dynamicAndStackTraceToNull()), onDone: dart.fn(() => {
                if (onDone != null) {
                  try {
                    onDone();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                if (onEach != null) {
                  try {
                    onEach(notification.Notification$(T).onDone());
                  } catch (e$0) {
                    let e = dart.getThrown(e$0);
                    let s = dart.stackTrace(e$0);
                    controller.addError(e, s);
                  }
                }
                controller.close();
              }, VoidToNull()), cancelOnError: cancelOnError}), dart.fnType(async.StreamSubscription$(T), [])));
          }, VoidToNull());
          let onCancelLocal = dart.fn(() => {
            let t25;
            let onCancelResult = null;
            if (onCancel != null) {
              try {
                onCancelResult = onCancel();
              } catch (e$) {
                let e = dart.getThrown(e$);
                let s = dart.stackTrace(e$);
                if (!dart.test(controller.isClosed)) {
                  controller.addError(e, s);
                } else {
                  async.Zone.current.handleUncaughtError(e, s);
                }
              }
            }
            let cancelResultFuture = async.Future.is(onCancelResult) ? onCancelResult : async.Future.value(onCancelResult);
            let cancelFuture = (t25 = subscriptions[$_get](input).cancel(), t25 == null ? async.Future.value() : t25);
            return async.Future.wait(dart.dynamic, JSArrayOfFuture().of([cancelFuture, cancelResultFuture])).whenComplete(dart.fn(() => subscriptions[$remove](input), VoidToStreamSubscription()));
          }, VoidToFutureOfList());
          if (dart.test(input.isBroadcast)) {
            controller = async.StreamController$(T).broadcast({sync: true, onListen: onListenLocal, onCancel: onCancelLocal});
          } else {
            controller = async.StreamController$(T).new({sync: true, onListen: onListenLocal, onCancel: onCancelLocal, onPause: dart.fn(resumeSignal => {
                if (resumeSignal === void 0) resumeSignal = null;
                if (onPause != null) {
                  try {
                    onPause(resumeSignal);
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).pause(resumeSignal);
              }, FutureToNull()), onResume: dart.fn(() => {
                if (onResume != null) {
                  try {
                    onResume();
                  } catch (e$) {
                    let e = dart.getThrown(e$);
                    let s = dart.stackTrace(e$);
                    controller.addError(e, s);
                  }
                }
                subscriptions[$_get](input).resume();
              }, VoidToNull())});
          }
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DoStreamTransformer.new = function(opts) {
      let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
      let onData = opts && 'onData' in opts ? opts.onData : null;
      let onDone = opts && 'onDone' in opts ? opts.onDone : null;
      let onEach = opts && 'onEach' in opts ? opts.onEach : null;
      let onError = opts && 'onError' in opts ? opts.onError : null;
      let onListen = opts && 'onListen' in opts ? opts.onListen : null;
      let onPause = opts && 'onPause' in opts ? opts.onPause : null;
      let onResume = opts && 'onResume' in opts ? opts.onResume : null;
      this[transformer] = $do.DoStreamTransformer._buildTransformer(T, {onCancel: onCancel, onData: onData, onDone: onDone, onEach: onEach, onError: onError, onListen: onListen, onPause: onPause, onResume: onResume});
      DoStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DoStreamTransformer.prototype;
    dart.addTypeTests(DoStreamTransformer);
    DoStreamTransformer.prototype[_is_DoStreamTransformer_default] = true;
    const transformer = DoStreamTransformer_transformer;
    dart.setMethodSignature(DoStreamTransformer, () => ({
      __proto__: dart.getMethods(DoStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DoStreamTransformer, "package:rxdart/src/transformers/do.dart");
    dart.setFieldSignature(DoStreamTransformer, () => ({
      __proto__: dart.getFields(DoStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DoStreamTransformer;
  });
  $do.DoStreamTransformer = $do.DoStreamTransformer$();
  dart.addTypeTests($do.DoStreamTransformer, _is_DoStreamTransformer_default);
  const _is_DistinctUniqueStreamTransformer_default = Symbol('_is_DistinctUniqueStreamTransformer_default');
  const DistinctUniqueStreamTransformer_transformer = dart.privateName(distinct_unique, "DistinctUniqueStreamTransformer.transformer");
  distinct_unique.DistinctUniqueStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DistinctUniqueStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, equals, hashCode) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let collection = collection$.HashSet$(T).new({equals: equals, hashCode: hashCode});
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                try {
                  if (dart.test(collection.add(value))) controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              collection.clear();
              collection = null;
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DistinctUniqueStreamTransformer.new = function(opts) {
      let equals = opts && 'equals' in opts ? opts.equals : null;
      let hashCode = opts && 'hashCode' in opts ? opts.hashCode : null;
      this[transformer] = distinct_unique.DistinctUniqueStreamTransformer._buildTransformer(T, equals, hashCode);
      DistinctUniqueStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DistinctUniqueStreamTransformer.prototype;
    dart.addTypeTests(DistinctUniqueStreamTransformer);
    DistinctUniqueStreamTransformer.prototype[_is_DistinctUniqueStreamTransformer_default] = true;
    const transformer = DistinctUniqueStreamTransformer_transformer;
    dart.setMethodSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getMethods(DistinctUniqueStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DistinctUniqueStreamTransformer, "package:rxdart/src/transformers/distinct_unique.dart");
    dart.setFieldSignature(DistinctUniqueStreamTransformer, () => ({
      __proto__: dart.getFields(DistinctUniqueStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DistinctUniqueStreamTransformer;
  });
  distinct_unique.DistinctUniqueStreamTransformer = distinct_unique.DistinctUniqueStreamTransformer$();
  dart.addTypeTests(distinct_unique.DistinctUniqueStreamTransformer, _is_DistinctUniqueStreamTransformer_default);
  const _is_DematerializeStreamTransformer_default = Symbol('_is_DematerializeStreamTransformer_default');
  const DematerializeStreamTransformer_transformer = dart.privateName(dematerialize, "DematerializeStreamTransformer.transformer");
  dematerialize.DematerializeStreamTransformer$ = dart.generic(T => {
    let NotificationOfT = () => (NotificationOfT = dart.constFn(notification.Notification$(T)))();
    let StreamOfNotificationOfT = () => (StreamOfNotificationOfT = dart.constFn(async.Stream$(NotificationOfT())))();
    class DematerializeStreamTransformer extends async.StreamTransformerBase$(notification.Notification$(T), T) {
      get transformer() {
        return this[transformer];
      }
      set transformer(value) {
        super.transformer = value;
      }
      bind(stream) {
        StreamOfNotificationOfT()._check(stream);
        return this.transformer.bind(stream);
      }
      static _buildTransformer(T) {
        return new (async._StreamSubscriptionTransformer$(notification.Notification$(T), T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(notification => {
                try {
                  if (dart.test(notification.isOnData)) {
                    controller.add(notification.value);
                  } else if (dart.test(notification.isOnDone)) {
                    controller.close();
                  } else if (dart.test(notification.isOnError)) {
                    controller.addError(notification.error, notification.stackTrace);
                  }
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [notification.Notification$(T)])), {onError: dart.bind(controller, 'addError'), onDone: dart.bind(controller, 'close'), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              subscription.pause(resumeSignal);
            }, FutureToNull()), onResume: dart.fn(() => {
              subscription.resume();
            }, VoidToNull()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(notification.Notification$(T)), core.bool])));
      }
    }
    (DematerializeStreamTransformer.new = function() {
      this[transformer] = dematerialize.DematerializeStreamTransformer._buildTransformer(T);
      DematerializeStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DematerializeStreamTransformer.prototype;
    dart.addTypeTests(DematerializeStreamTransformer);
    DematerializeStreamTransformer.prototype[_is_DematerializeStreamTransformer_default] = true;
    const transformer = DematerializeStreamTransformer_transformer;
    dart.setMethodSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getMethods(DematerializeStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DematerializeStreamTransformer, "package:rxdart/src/transformers/dematerialize.dart");
    dart.setFieldSignature(DematerializeStreamTransformer, () => ({
      __proto__: dart.getFields(DematerializeStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(notification.Notification$(T), T))
    }));
    return DematerializeStreamTransformer;
  });
  dematerialize.DematerializeStreamTransformer = dematerialize.DematerializeStreamTransformer$();
  dart.addTypeTests(dematerialize.DematerializeStreamTransformer, _is_DematerializeStreamTransformer_default);
  let C11;
  const _is_DelayStreamTransformer_default = Symbol('_is_DelayStreamTransformer_default');
  const DelayStreamTransformer_transformer = dart.privateName(delay, "DelayStreamTransformer.transformer");
  delay.DelayStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DelayStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, duration) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let onDoneCalled = false;
          let hasNoEvents = true;
          let timers = JSArrayOfTimer().of([]);
          let controller = null;
          let subscription = null;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasNoEvents = false;
                try {
                  let timer = null;
                  timer = async.Timer.new(duration, dart.fn(() => {
                    controller.add(value);
                    timers[$remove](timer);
                    if (onDoneCalled && dart.test(timers[$isEmpty])) {
                      controller.close();
                    }
                  }, VoidToNull()));
                  timers[$add](timer);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (hasNoEvents) controller.close();
                  onDoneCalled = true;
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => {
              timers[$forEach](C11 || CT.C11);
              return subscription.cancel();
            }, VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
      static _cancelTimerIfActive(_timer) {
        if (_timer != null && dart.test(_timer.isActive)) {
          _timer.cancel();
        }
      }
    }
    (DelayStreamTransformer.new = function(duration) {
      this[transformer] = delay.DelayStreamTransformer._buildTransformer(T, duration);
      DelayStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DelayStreamTransformer.prototype;
    dart.addTypeTests(DelayStreamTransformer);
    DelayStreamTransformer.prototype[_is_DelayStreamTransformer_default] = true;
    const transformer = DelayStreamTransformer_transformer;
    dart.setMethodSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getMethods(DelayStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DelayStreamTransformer, "package:rxdart/src/transformers/delay.dart");
    dart.setFieldSignature(DelayStreamTransformer, () => ({
      __proto__: dart.getFields(DelayStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DelayStreamTransformer;
  });
  delay.DelayStreamTransformer = delay.DelayStreamTransformer$();
  dart.addTypeTests(delay.DelayStreamTransformer, _is_DelayStreamTransformer_default);
  const _is_DefaultIfEmptyStreamTransformer_default = Symbol('_is_DefaultIfEmptyStreamTransformer_default');
  const DefaultIfEmptyStreamTransformer_transformer = dart.privateName(default_if_empty, "DefaultIfEmptyStreamTransformer.transformer");
  default_if_empty.DefaultIfEmptyStreamTransformer$ = dart.generic(T => {
    let StreamOfT = () => (StreamOfT = dart.constFn(async.Stream$(T)))();
    class DefaultIfEmptyStreamTransformer extends async.StreamTransformerBase$(T, T) {
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
      static _buildTransformer(T, defaultValue) {
        return new (async._StreamSubscriptionTransformer$(T, T)).new(dart.fn((input, cancelOnError) => {
          let controller = null;
          let subscription = null;
          let hasEvent = false;
          controller = async.StreamController$(T).new({sync: true, onListen: dart.fn(() => {
              subscription = input.listen(dart.fn(value => {
                hasEvent = true;
                try {
                  controller.add(value);
                } catch (e$) {
                  let e = dart.getThrown(e$);
                  let s = dart.stackTrace(e$);
                  controller.addError(e, s);
                }
              }, dart.fnType(core.Null, [T])), {onError: dart.bind(controller, 'addError'), onDone: dart.fn(() => {
                  if (!hasEvent) controller.add(defaultValue);
                  controller.close();
                }, VoidToNull()), cancelOnError: cancelOnError});
            }, VoidToNull()), onPause: dart.fn(resumeSignal => {
              if (resumeSignal === void 0) resumeSignal = null;
              return subscription.pause(resumeSignal);
            }, FutureTovoid()), onResume: dart.fn(() => subscription.resume(), VoidTovoid()), onCancel: dart.fn(() => subscription.cancel(), VoidToFuture())});
          return controller.stream.listen(null);
        }, dart.fnType(async.StreamSubscription$(T), [async.Stream$(T), core.bool])));
      }
    }
    (DefaultIfEmptyStreamTransformer.new = function(defaultValue) {
      this[transformer] = default_if_empty.DefaultIfEmptyStreamTransformer._buildTransformer(T, defaultValue);
      DefaultIfEmptyStreamTransformer.__proto__.new.call(this);
      ;
    }).prototype = DefaultIfEmptyStreamTransformer.prototype;
    dart.addTypeTests(DefaultIfEmptyStreamTransformer);
    DefaultIfEmptyStreamTransformer.prototype[_is_DefaultIfEmptyStreamTransformer_default] = true;
    const transformer = DefaultIfEmptyStreamTransformer_transformer;
    dart.setMethodSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getMethods(DefaultIfEmptyStreamTransformer.__proto__),
      bind: dart.fnType(async.Stream$(T), [core.Object])
    }));
    dart.setLibraryUri(DefaultIfEmptyStreamTransformer, "package:rxdart/src/transformers/default_if_empty.dart");
    dart.setFieldSignature(DefaultIfEmptyStreamTransformer, () => ({
      __proto__: dart.getFields(DefaultIfEmptyStreamTransformer.__proto__),
      transformer: dart.finalFieldType(async.StreamTransformer$(T, T))
    }));
    return DefaultIfEmptyStreamTransformer;
  });
  default_if_empty.DefaultIfEmptyStreamTransformer = default_if_empty.DefaultIfEmptyStreamTransformer$();
  dart.addTypeTests(default_if_empty.DefaultIfEmptyStreamTransformer, _is_DefaultIfEmptyStreamTransformer_default);
  const _is_ValueObservable_default = Symbol('_is_ValueObservable_default');
  value_observable.ValueObservable$ = dart.generic(T => {
    class ValueObservable extends core.Object {}
    (ValueObservable.new = function() {
      ;
    }).prototype = ValueObservable.prototype;
    dart.addTypeTests(ValueObservable);
    ValueObservable.prototype[_is_ValueObservable_default] = true;
    ValueObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ValueObservable, "package:rxdart/src/observables/value_observable.dart");
    return ValueObservable;
  });
  value_observable.ValueObservable = value_observable.ValueObservable$();
  dart.addTypeTests(value_observable.ValueObservable, _is_ValueObservable_default);
  const _is_ReplayObservable_default = Symbol('_is_ReplayObservable_default');
  replay_observable.ReplayObservable$ = dart.generic(T => {
    class ReplayObservable extends core.Object {}
    (ReplayObservable.new = function() {
      ;
    }).prototype = ReplayObservable.prototype;
    dart.addTypeTests(ReplayObservable);
    ReplayObservable.prototype[_is_ReplayObservable_default] = true;
    ReplayObservable[dart.implements] = () => [observable.Observable$(T)];
    dart.setLibraryUri(ReplayObservable, "package:rxdart/src/observables/replay_observable.dart");
    return ReplayObservable;
  });
  replay_observable.ReplayObservable = replay_observable.ReplayObservable$();
  dart.addTypeTests(replay_observable.ReplayObservable, _is_ReplayObservable_default);
  const _is_ConnectableObservable_default = Symbol('_is_ConnectableObservable_default');
  connectable_observable.ConnectableObservable$ = dart.generic(T => {
    class ConnectableObservable extends observable.Observable$(T) {}
    (ConnectableObservable.new = function(stream) {
      ConnectableObservable.__proto__.new.call(this, stream);
      ;
    }).prototype = ConnectableObservable.prototype;
    dart.addTypeTests(ConnectableObservable);
    ConnectableObservable.prototype[_is_ConnectableObservable_default] = true;
    dart.setLibraryUri(ConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    return ConnectableObservable;
  });
  connectable_observable.ConnectableObservable = connectable_observable.ConnectableObservable$();
  dart.addTypeTests(connectable_observable.ConnectableObservable, _is_ConnectableObservable_default);
  const _source$ = dart.privateName(connectable_observable, "_source");
  const _subject$ = dart.privateName(connectable_observable, "_subject");
  const _is_PublishConnectableObservable_default = Symbol('_is_PublishConnectableObservable_default');
  connectable_observable.PublishConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class PublishConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.PublishConnectableObservable$(T)).__(source, publish_subject.PublishSubject$(T).new());
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
    }
    (PublishConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      PublishConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = PublishConnectableObservable.prototype;
    dart.addTypeTests(PublishConnectableObservable);
    PublishConnectableObservable.prototype[_is_PublishConnectableObservable_default] = true;
    dart.setMethodSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getMethods(PublishConnectableObservable.__proto__),
      autoConnect: dart.fnType(observable.Observable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(PublishConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(PublishConnectableObservable, () => ({
      __proto__: dart.getFields(PublishConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(publish_subject.PublishSubject$(T))
    }));
    return PublishConnectableObservable;
  });
  connectable_observable.PublishConnectableObservable = connectable_observable.PublishConnectableObservable$();
  dart.addTypeTests(connectable_observable.PublishConnectableObservable, _is_PublishConnectableObservable_default);
  const _is_ValueConnectableObservable_default = Symbol('_is_ValueConnectableObservable_default');
  connectable_observable.ValueConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ValueConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(source) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).new());
      }
      static seeded(source, seedValue) {
        return new (connectable_observable.ValueConnectableObservable$(T)).__(source, behavior_subject.BehaviorSubject$(T).seeded(seedValue));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get value() {
        return this[_subject$].value;
      }
      get hasValue() {
        return this[_subject$].hasValue;
      }
    }
    (ValueConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ValueConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ValueConnectableObservable.prototype;
    dart.addTypeTests(ValueConnectableObservable);
    ValueConnectableObservable.prototype[_is_ValueConnectableObservable_default] = true;
    ValueConnectableObservable[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setMethodSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getMethods(ValueConnectableObservable.__proto__),
      autoConnect: dart.fnType(value_observable.ValueObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(value_observable.ValueObservable$(T), [])
    }));
    dart.setGetterSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getGetters(ValueConnectableObservable.__proto__),
      value: T,
      hasValue: core.bool
    }));
    dart.setLibraryUri(ValueConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ValueConnectableObservable, () => ({
      __proto__: dart.getFields(ValueConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(behavior_subject.BehaviorSubject$(T))
    }));
    return ValueConnectableObservable;
  });
  connectable_observable.ValueConnectableObservable = connectable_observable.ValueConnectableObservable$();
  dart.addTypeTests(connectable_observable.ValueConnectableObservable, _is_ValueConnectableObservable_default);
  const _is_ReplayConnectableObservable_default = Symbol('_is_ReplayConnectableObservable_default');
  connectable_observable.ReplayConnectableObservable$ = dart.generic(T => {
    let ConnectableObservableStreamSubscriptionOfT = () => (ConnectableObservableStreamSubscriptionOfT = dart.constFn(connectable_observable.ConnectableObservableStreamSubscription$(T)))();
    class ReplayConnectableObservable extends connectable_observable.ConnectableObservable$(T) {
      static new(stream, opts) {
        let maxSize = opts && 'maxSize' in opts ? opts.maxSize : null;
        return new (connectable_observable.ReplayConnectableObservable$(T)).__(stream, replay_subject.ReplaySubject$(T).new({maxSize: maxSize}));
      }
      autoConnect(opts) {
        let connection = opts && 'connection' in opts ? opts.connection : null;
        this[_subject$].onListen = dart.fn(() => {
          if (connection != null) {
            connection(this.connect());
          } else {
            this.connect();
          }
        }, VoidToNull());
        return this[_subject$];
      }
      connect() {
        return new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
      }
      refCount() {
        let subscription = null;
        this[_subject$].onListen = dart.fn(() => {
          subscription = new (ConnectableObservableStreamSubscriptionOfT()).new(this[_source$].listen(dart.bind(this[_subject$], 'add'), {onError: dart.bind(this[_subject$], 'addError')}), this[_subject$]);
        }, VoidToNull());
        this[_subject$].onCancel = dart.fn(() => {
          subscription.cancel();
        }, VoidToNull());
        return this[_subject$];
      }
      get values() {
        return this[_subject$].values;
      }
    }
    (ReplayConnectableObservable.__ = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ReplayConnectableObservable.__proto__.new.call(this, _subject);
      ;
    }).prototype = ReplayConnectableObservable.prototype;
    dart.addTypeTests(ReplayConnectableObservable);
    ReplayConnectableObservable.prototype[_is_ReplayConnectableObservable_default] = true;
    ReplayConnectableObservable[dart.implements] = () => [replay_observable.ReplayObservable$(T)];
    dart.setMethodSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getMethods(ReplayConnectableObservable.__proto__),
      autoConnect: dart.fnType(replay_observable.ReplayObservable$(T), [], {connection: dart.fnType(dart.void, [async.StreamSubscription$(T)])}),
      connect: dart.fnType(async.StreamSubscription$(T), []),
      refCount: dart.fnType(replay_observable.ReplayObservable$(T), [])
    }));
    dart.setGetterSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getGetters(ReplayConnectableObservable.__proto__),
      values: core.List$(T)
    }));
    dart.setLibraryUri(ReplayConnectableObservable, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ReplayConnectableObservable, () => ({
      __proto__: dart.getFields(ReplayConnectableObservable.__proto__),
      [_source$]: dart.finalFieldType(async.Stream$(T)),
      [_subject$]: dart.finalFieldType(replay_subject.ReplaySubject$(T))
    }));
    return ReplayConnectableObservable;
  });
  connectable_observable.ReplayConnectableObservable = connectable_observable.ReplayConnectableObservable$();
  dart.addTypeTests(connectable_observable.ReplayConnectableObservable, _is_ReplayConnectableObservable_default);
  const _is_ConnectableObservableStreamSubscription_default = Symbol('_is_ConnectableObservableStreamSubscription_default');
  connectable_observable.ConnectableObservableStreamSubscription$ = dart.generic(T => {
    class ConnectableObservableStreamSubscription extends async.StreamSubscription$(T) {
      cancel() {
        this[_subject$].close();
        return this[_source$].cancel();
      }
      asFuture(E, futureValue) {
        if (futureValue === void 0) futureValue = null;
        return this[_source$].asFuture(E, futureValue);
      }
      get isPaused() {
        return this[_source$].isPaused;
      }
      onData(handleData) {
        return this[_source$].onData(handleData);
      }
      onDone(handleDone) {
        return this[_source$].onDone(handleDone);
      }
      onError(handleError) {
        return this[_source$].onError(handleError);
      }
      pause(resumeSignal) {
        if (resumeSignal === void 0) resumeSignal = null;
        return this[_source$].pause(resumeSignal);
      }
      resume() {
        return this[_source$].resume();
      }
    }
    (ConnectableObservableStreamSubscription.new = function(_source, _subject) {
      this[_source$] = _source;
      this[_subject$] = _subject;
      ;
    }).prototype = ConnectableObservableStreamSubscription.prototype;
    dart.addTypeTests(ConnectableObservableStreamSubscription);
    ConnectableObservableStreamSubscription.prototype[_is_ConnectableObservableStreamSubscription_default] = true;
    dart.setMethodSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getMethods(ConnectableObservableStreamSubscription.__proto__),
      cancel: dart.fnType(async.Future, []),
      asFuture: dart.gFnType(E => [async.Future$(E), [], [E]]),
      onData: dart.fnType(dart.void, [dart.fnType(dart.void, [T])]),
      onDone: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      onError: dart.fnType(dart.void, [core.Function]),
      pause: dart.fnType(dart.void, [], [async.Future]),
      resume: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getGetters(ConnectableObservableStreamSubscription.__proto__),
      isPaused: core.bool
    }));
    dart.setLibraryUri(ConnectableObservableStreamSubscription, "package:rxdart/src/observables/connectable_observable.dart");
    dart.setFieldSignature(ConnectableObservableStreamSubscription, () => ({
      __proto__: dart.getFields(ConnectableObservableStreamSubscription.__proto__),
      [_source$]: dart.finalFieldType(async.StreamSubscription$(T)),
      [_subject$]: dart.finalFieldType(subject.Subject$(T))
    }));
    return ConnectableObservableStreamSubscription;
  });
  connectable_observable.ConnectableObservableStreamSubscription = connectable_observable.ConnectableObservableStreamSubscription$();
  dart.addTypeTests(connectable_observable.ConnectableObservableStreamSubscription, _is_ConnectableObservableStreamSubscription_default);
  const _isDisposed = dart.privateName(composite_subscription, "_isDisposed");
  const _subscriptionsList = dart.privateName(composite_subscription, "_subscriptionsList");
  composite_subscription.CompositeSubscription = class CompositeSubscription extends core.Object {
    get isDisposed() {
      return this[_isDisposed];
    }
    add(T, subscription) {
      if (dart.test(this.isDisposed)) {
        dart.throw("This composite was disposed, try to use new instance instead");
      }
      this[_subscriptionsList][$add](subscription);
      return subscription;
    }
    remove(subscription) {
      subscription.cancel();
      this[_subscriptionsList][$remove](subscription);
    }
    clear() {
      this[_subscriptionsList][$forEach](dart.fn(subscription => subscription.cancel(), StreamSubscriptionToFuture()));
      this[_subscriptionsList][$clear]();
    }
    dispose() {
      this.clear();
      this[_isDisposed] = true;
    }
  };
  (composite_subscription.CompositeSubscription.new = function() {
    this[_isDisposed] = false;
    this[_subscriptionsList] = JSArrayOfStreamSubscription().of([]);
    ;
  }).prototype = composite_subscription.CompositeSubscription.prototype;
  dart.addTypeTests(composite_subscription.CompositeSubscription);
  dart.setMethodSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getMethods(composite_subscription.CompositeSubscription.__proto__),
    add: dart.gFnType(T => [async.StreamSubscription$(T), [async.StreamSubscription$(T)]]),
    remove: dart.fnType(dart.void, [async.StreamSubscription]),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getGetters(composite_subscription.CompositeSubscription.__proto__),
    isDisposed: core.bool
  }));
  dart.setLibraryUri(composite_subscription.CompositeSubscription, "package:rxdart/src/utils/composite_subscription.dart");
  dart.setFieldSignature(composite_subscription.CompositeSubscription, () => ({
    __proto__: dart.getFields(composite_subscription.CompositeSubscription.__proto__),
    [_isDisposed]: dart.fieldType(core.bool),
    [_subscriptionsList]: dart.finalFieldType(core.List$(async.StreamSubscription))
  }));
  const _is_WrappedFuture_default = Symbol('_is_WrappedFuture_default');
  const WrappedFuture_wrapped = dart.privateName(wrapped_future, "WrappedFuture.wrapped");
  wrapped_future.WrappedFuture$ = dart.generic(T => {
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    class WrappedFuture extends core.Object {
      get wrapped() {
        return this[wrapped$];
      }
      set wrapped(value) {
        super.wrapped = value;
      }
      asStream() {
        return this.wrapped.asStream();
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return this.wrapped.catchError(onError, {test: test});
      }
      then(S, onValue, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        return this.wrapped.then(S, onValue, {onError: onError});
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidToFutureOrOfT()._check(onTimeout);
        return this.wrapped.timeout(timeLimit, {onTimeout: onTimeout});
      }
      whenComplete(action) {
        return this.wrapped.whenComplete(action);
      }
    }
    (WrappedFuture.new = function(wrapped) {
      this[wrapped$] = wrapped;
      ;
    }).prototype = WrappedFuture.prototype;
    WrappedFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(WrappedFuture);
    WrappedFuture.prototype[_is_WrappedFuture_default] = true;
    const wrapped$ = WrappedFuture_wrapped;
    WrappedFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(WrappedFuture, () => ({
      __proto__: dart.getMethods(WrappedFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [core.Object])}),
      then: dart.gFnType(S => [async.Future$(S), [dart.fnType(async.FutureOr$(S), [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.void, [])])
    }));
    dart.setLibraryUri(WrappedFuture, "package:rxdart/src/futures/wrapped_future.dart");
    dart.setFieldSignature(WrappedFuture, () => ({
      __proto__: dart.getFields(WrappedFuture.__proto__),
      wrapped: dart.finalFieldType(async.Future$(T))
    }));
    return WrappedFuture;
  });
  wrapped_future.WrappedFuture = wrapped_future.WrappedFuture$();
  dart.addTypeTests(wrapped_future.WrappedFuture, _is_WrappedFuture_default);
  const _is_StreamMinFuture_default = Symbol('_is_StreamMinFuture_default');
  stream_min_future.StreamMinFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMinFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMinFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMinFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t31;
        return (t31 = values, t31[$sort](comparator), t31)[$first];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMinFuture.prototype;
    dart.addTypeTests(StreamMinFuture);
    StreamMinFuture.prototype[_is_StreamMinFuture_default] = true;
    dart.setLibraryUri(StreamMinFuture, "package:rxdart/src/futures/stream_min_future.dart");
    return StreamMinFuture;
  });
  stream_min_future.StreamMinFuture = stream_min_future.StreamMinFuture$();
  dart.addTypeTests(stream_min_future.StreamMinFuture, _is_StreamMinFuture_default);
  const _is_StreamMaxFuture_default = Symbol('_is_StreamMaxFuture_default');
  stream_max_future.StreamMaxFuture$ = dart.generic(T => {
    let ListOfT = () => (ListOfT = dart.constFn(core.List$(T)))();
    let ListOfTToT = () => (ListOfTToT = dart.constFn(dart.fnType(T, [ListOfT()])))();
    class StreamMaxFuture extends wrapped_future.WrappedFuture$(T) {}
    (StreamMaxFuture.new = function(stream, comparator) {
      if (comparator === void 0) comparator = null;
      StreamMaxFuture.__proto__.new.call(this, stream.toList().then(T, dart.fn(values => {
        let t31;
        return (t31 = values, t31[$sort](comparator), t31)[$last];
      }, ListOfTToT())));
      ;
    }).prototype = StreamMaxFuture.prototype;
    dart.addTypeTests(StreamMaxFuture);
    StreamMaxFuture.prototype[_is_StreamMaxFuture_default] = true;
    dart.setLibraryUri(StreamMaxFuture, "package:rxdart/src/futures/stream_max_future.dart");
    return StreamMaxFuture;
  });
  stream_max_future.StreamMaxFuture = stream_max_future.StreamMaxFuture$();
  dart.addTypeTests(stream_max_future.StreamMaxFuture, _is_StreamMaxFuture_default);
  const _is_AsObservableFuture_default = Symbol('_is_AsObservableFuture_default');
  as_observable_future.AsObservableFuture$ = dart.generic(T => {
    let ObservableOfT = () => (ObservableOfT = dart.constFn(observable.Observable$(T)))();
    class AsObservableFuture extends wrapped_future.WrappedFuture$(T) {
      asObservable() {
        return ObservableOfT().fromFuture(this.wrapped);
      }
    }
    (AsObservableFuture.new = function(wrapped) {
      AsObservableFuture.__proto__.new.call(this, wrapped);
      ;
    }).prototype = AsObservableFuture.prototype;
    dart.addTypeTests(AsObservableFuture);
    AsObservableFuture.prototype[_is_AsObservableFuture_default] = true;
    dart.setMethodSignature(AsObservableFuture, () => ({
      __proto__: dart.getMethods(AsObservableFuture.__proto__),
      asObservable: dart.fnType(observable.Observable$(T), [])
    }));
    dart.setLibraryUri(AsObservableFuture, "package:rxdart/src/futures/as_observable_future.dart");
    return AsObservableFuture;
  });
  as_observable_future.AsObservableFuture = as_observable_future.AsObservableFuture$();
  dart.addTypeTests(as_observable_future.AsObservableFuture, _is_AsObservableFuture_default);
  const _is_PublishSubject_default = Symbol('_is_PublishSubject_default');
  publish_subject.PublishSubject$ = dart.generic(T => {
    class PublishSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        return new (publish_subject.PublishSubject$(T)).__(controller, new (observable.Observable$(T)).new(controller.stream));
      }
    }
    (PublishSubject.__ = function(controller, observable) {
      PublishSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = PublishSubject.prototype;
    dart.addTypeTests(PublishSubject);
    PublishSubject.prototype[_is_PublishSubject_default] = true;
    dart.setLibraryUri(PublishSubject, "package:rxdart/src/subjects/publish_subject.dart");
    return PublishSubject;
  });
  publish_subject.PublishSubject = publish_subject.PublishSubject$();
  dart.addTypeTests(publish_subject.PublishSubject, _is_PublishSubject_default);
  const _wrapper$ = dart.privateName(behavior_subject, "_wrapper");
  const _is_BehaviorSubject_default = Symbol('_is_BehaviorSubject_default');
  behavior_subject.BehaviorSubject$ = dart.generic(T => {
    class BehaviorSubject extends subject.Subject$(T) {
      static new(opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).new();
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static seeded(seedValue, opts) {
        let onListen = opts && 'onListen' in opts ? opts.onListen : null;
        let onCancel = opts && 'onCancel' in opts ? opts.onCancel : null;
        let sync = opts && 'sync' in opts ? opts.sync : false;
        let controller = async.StreamController$(T).broadcast({onListen: onListen, onCancel: onCancel, sync: sync});
        let wrapper = new (behavior_subject._Wrapper$(T)).seeded(seedValue);
        return new (behavior_subject.BehaviorSubject$(T)).__(controller, observable.Observable$(T).defer(behavior_subject.BehaviorSubject._deferStream(T, wrapper, controller), {reusable: true}), wrapper);
      }
      static _deferStream(T, wrapper, controller) {
        return dart.fn(() => {
          if (dart.test(wrapper.latestIsError)) {
            async.scheduleMicrotask(dart.fn(() => controller.addError(wrapper.latestError, wrapper.latestStackTrace), VoidTovoid()));
          } else if (dart.test(wrapper.latestIsValue)) {
            return new (observable.Observable$(T)).new(controller.stream).startWith(wrapper.latestValue);
          }
          return controller.stream;
        }, dart.fnType(async.Stream$(T), []));
      }
      onAdd(event) {
        T._check(event);
        return this[_wrapper$].setValue(event);
      }
      onAddError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        return this[_wrapper$].setError(error, stackTrace);
      }
      get stream() {
        return this;
      }
      get hasValue() {
        return this[_wrapper$].latestIsValue;
      }
      get value() {
        return this[_wrapper$].latestValue;
      }
      set value(newValue) {
        T._check(newValue);
        return this.add(newValue);
      }
    }
    (BehaviorSubject.__ = function(controller, observable, _wrapper) {
      this[_wrapper$] = _wrapper;
      BehaviorSubject.__proto__.new.call(this, controller, observable);
      ;
    }).prototype = BehaviorSubject.prototype;
    dart.addTypeTests(BehaviorSubject);
    BehaviorSubject.prototype[_is_BehaviorSubject_default] = true;
    BehaviorSubject[dart.implements] = () => [value_observable.ValueObservable$(T)];
    dart.setGetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getGetters(BehaviorSubject.__proto__),
      stream: value_observable.ValueObservable$(T),
      hasValue: core.bool,
      value: T
    }));
    dart.setSetterSignature(BehaviorSubject, () => ({
      __proto__: dart.getSetters(BehaviorSubject.__proto__),
      value: core.Object
    }));
    dart.setLibraryUri(BehaviorSubject, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(BehaviorSubject, () => ({
      __proto__: dart.getFields(BehaviorSubject.__proto__),
      [_wrapper$]: dart.fieldType(behavior_subject._Wrapper$(T))
    }));
    return BehaviorSubject;
  });
  behavior_subject.BehaviorSubject = behavior_subject.BehaviorSubject$();
  dart.addTypeTests(behavior_subject.BehaviorSubject, _is_BehaviorSubject_default);
  const _is__Wrapper_default = Symbol('_is__Wrapper_default');
  const _Wrapper_latestValue = dart.privateName(behavior_subject, "_Wrapper.latestValue");
  behavior_subject._Wrapper$ = dart.generic(T => {
    class _Wrapper extends core.Object {
      get latestValue() {
        return this[latestValue$];
      }
      set latestValue(value) {
        this[latestValue$] = T._check(value);
      }
      setValue(event) {
        T._check(event);
        this.latestIsValue = true;
        this.latestIsError = false;
        this.latestValue = event;
        this.latestError = null;
        this.latestStackTrace = null;
      }
      setError(error, stackTrace) {
        if (stackTrace === void 0) stackTrace = null;
        this.latestIsValue = false;
        this.latestIsError = true;
        this.latestValue = null;
        this.latestError = error;
        this.latestStackTrace = stackTrace;
      }
    }
    (_Wrapper.new = function() {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = null;
      ;
    }).prototype = _Wrapper.prototype;
    (_Wrapper.seeded = function(latestValue) {
      this.latestError = null;
      this.latestStackTrace = null;
      this.latestIsValue = false;
      this.latestIsError = false;
      this[latestValue$] = latestValue;
      this.latestIsValue = true;
      ;
    }).prototype = _Wrapper.prototype;
    dart.addTypeTests(_Wrapper);
    _Wrapper.prototype[_is__Wrapper_default] = true;
    const latestValue$ = _Wrapper_latestValue;
    dart.setMethodSignature(_Wrapper, () => ({
      __proto__: dart.getMethods(_Wrapper.__proto__),
      setValue: dart.fnType(dart.void, [core.Object]),
      setError: dart.fnType(dart.void, [core.Object], [core.StackTrace])
    }));
    dart.setLibraryUri(_Wrapper, "package:rxdart/src/subjects/behavior_subject.dart");
    dart.setFieldSignature(_Wrapper, () => ({
      __proto__: dart.getFields(_Wrapper.__proto__),
      latestValue: dart.fieldType(T),
      latestError: dart.fieldType(core.Object),
      latestStackTrace: dart.fieldType(core.StackTrace),
      latestIsValue: dart.fieldType(core.bool),
      latestIsError: dart.fieldType(core.bool)
    }));
    return _Wrapper;
  });
  behavior_subject._Wrapper = behavior_subject._Wrapper$();
  dart.addTypeTests(behavior_subject._Wrapper, _is__Wrapper_default);
  dart.trackLibraries("packages/rxdart/futures", {
    "package:rxdart/src/transformers/backpressure/window.dart": window,
    "package:rxdart/src/transformers/backpressure/backpressure.dart": backpressure,
    "package:rxdart/subjects.dart": subjects,
    "package:rxdart/src/subjects/replay_subject.dart": replay_subject,
    "package:rxdart/src/subjects/subject.dart": subject,
    "package:rxdart/src/observables/observable.dart": observable,
    "package:rxdart/transformers.dart": transformers,
    "package:rxdart/src/transformers/backpressure/throttle.dart": throttle,
    "package:rxdart/src/transformers/backpressure/sample.dart": sample,
    "package:rxdart/src/transformers/backpressure/pairwise.dart": pairwise,
    "package:rxdart/src/transformers/backpressure/debounce.dart": debounce,
    "package:rxdart/src/transformers/backpressure/buffer.dart": buffer,
    "package:rxdart/src/utils/type_token.dart": type_token,
    "package:rxdart/src/transformers/with_latest_from.dart": with_latest_from,
    "package:rxdart/src/transformers/where_type.dart": where_type,
    "package:rxdart/src/transformers/timestamp.dart": timestamp,
    "package:rxdart/src/transformers/time_interval.dart": time_interval,
    "package:rxdart/src/transformers/take_until.dart": take_until,
    "package:rxdart/src/transformers/switch_map.dart": switch_map,
    "package:rxdart/src/transformers/switch_if_empty.dart": switch_if_empty,
    "package:rxdart/src/transformers/start_with_many.dart": start_with_many,
    "package:rxdart/src/transformers/start_with.dart": start_with,
    "package:rxdart/src/transformers/skip_until.dart": skip_until,
    "package:rxdart/src/transformers/scan.dart": scan,
    "package:rxdart/src/transformers/on_error_resume.dart": on_error_resume,
    "package:rxdart/src/transformers/of_type.dart": of_type,
    "package:rxdart/src/transformers/map_to.dart": map_to,
    "package:rxdart/src/transformers/interval.dart": interval,
    "package:rxdart/src/transformers/ignore_elements.dart": ignore_elements,
    "package:rxdart/src/transformers/group_by.dart": group_by,
    "package:rxdart/src/transformers/flat_map.dart": flat_map,
    "package:rxdart/src/transformers/exhaust_map.dart": exhaust_map,
    "package:rxdart/src/transformers/do.dart": $do,
    "package:rxdart/src/transformers/distinct_unique.dart": distinct_unique,
    "package:rxdart/src/transformers/dematerialize.dart": dematerialize,
    "package:rxdart/src/transformers/delay.dart": delay,
    "package:rxdart/src/transformers/default_if_empty.dart": default_if_empty,
    "package:rxdart/src/observables/value_observable.dart": value_observable,
    "package:rxdart/src/observables/replay_observable.dart": replay_observable,
    "package:rxdart/src/observables/connectable_observable.dart": connectable_observable,
    "package:rxdart/rxdart.dart": rxdart,
    "package:rxdart/src/utils/composite_subscription.dart": composite_subscription,
    "package:rxdart/futures.dart": futures,
    "package:rxdart/src/futures/wrapped_future.dart": wrapped_future,
    "package:rxdart/src/futures/stream_min_future.dart": stream_min_future,
    "package:rxdart/src/futures/stream_max_future.dart": stream_max_future,
    "package:rxdart/src/futures/as_observable_future.dart": as_observable_future,
    "package:rxdart/src/subjects/publish_subject.dart": publish_subject,
    "package:rxdart/src/subjects/behavior_subject.dart": behavior_subject
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/transformers/backpressure/backpressure.dart","src/transformers/backpressure/window.dart","src/observables/observable.dart","src/subjects/subject.dart","src/subjects/replay_subject.dart","src/transformers/backpressure/throttle.dart","src/transformers/backpressure/sample.dart","src/transformers/backpressure/pairwise.dart","src/transformers/backpressure/debounce.dart","src/transformers/backpressure/buffer.dart","src/utils/type_token.dart","src/transformers/with_latest_from.dart","src/transformers/where_type.dart","src/transformers/timestamp.dart","src/transformers/time_interval.dart","src/transformers/take_until.dart","src/transformers/switch_map.dart","src/transformers/switch_if_empty.dart","src/transformers/start_with_many.dart","src/transformers/start_with.dart","src/transformers/skip_until.dart","src/transformers/scan.dart","src/transformers/on_error_resume.dart","src/transformers/of_type.dart","src/transformers/map_to.dart","src/transformers/interval.dart","src/transformers/ignore_elements.dart","src/transformers/group_by.dart","src/transformers/flat_map.dart","src/transformers/exhaust_map.dart","src/transformers/do.dart","src/transformers/distinct_unique.dart","src/transformers/dematerialize.dart","src/transformers/delay.dart","src/transformers/default_if_empty.dart","src/observables/value_observable.dart","src/observables/replay_observable.dart","src/observables/connectable_observable.dart","src/utils/composite_subscription.dart","src/futures/wrapped_future.dart","src/futures/stream_min_future.dart","src/futures/stream_max_future.dart","src/futures/as_observable_future.dart","src/subjects/publish_subject.dart","src/subjects/behavior_subject.dart"],"names":[],"mappings":"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","file":"futures.ddc.js"}');
  // Exports:
  return {
    src__transformers__backpressure__window: window,
    src__transformers__backpressure__backpressure: backpressure,
    subjects: subjects,
    src__subjects__replay_subject: replay_subject,
    src__subjects__subject: subject,
    src__observables__observable: observable,
    transformers: transformers,
    src__transformers__backpressure__throttle: throttle,
    src__transformers__backpressure__sample: sample,
    src__transformers__backpressure__pairwise: pairwise,
    src__transformers__backpressure__debounce: debounce,
    src__transformers__backpressure__buffer: buffer,
    src__utils__type_token: type_token,
    src__transformers__with_latest_from: with_latest_from,
    src__transformers__where_type: where_type,
    src__transformers__timestamp: timestamp,
    src__transformers__time_interval: time_interval,
    src__transformers__take_until: take_until,
    src__transformers__switch_map: switch_map,
    src__transformers__switch_if_empty: switch_if_empty,
    src__transformers__start_with_many: start_with_many,
    src__transformers__start_with: start_with,
    src__transformers__skip_until: skip_until,
    src__transformers__scan: scan,
    src__transformers__on_error_resume: on_error_resume,
    src__transformers__of_type: of_type,
    src__transformers__map_to: map_to,
    src__transformers__interval: interval,
    src__transformers__ignore_elements: ignore_elements,
    src__transformers__group_by: group_by,
    src__transformers__flat_map: flat_map,
    src__transformers__exhaust_map: exhaust_map,
    src__transformers__do: $do,
    src__transformers__distinct_unique: distinct_unique,
    src__transformers__dematerialize: dematerialize,
    src__transformers__delay: delay,
    src__transformers__default_if_empty: default_if_empty,
    src__observables__value_observable: value_observable,
    src__observables__replay_observable: replay_observable,
    src__observables__connectable_observable: connectable_observable,
    rxdart: rxdart,
    src__utils__composite_subscription: composite_subscription,
    futures: futures,
    src__futures__wrapped_future: wrapped_future,
    src__futures__stream_min_future: stream_min_future,
    src__futures__stream_max_future: stream_max_future,
    src__futures__as_observable_future: as_observable_future,
    src__subjects__publish_subject: publish_subject,
    src__subjects__behavior_subject: behavior_subject
  };
});

//# sourceMappingURL=futures.ddc.js.map

define(['dart_sdk', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/semantics/binding', 'packages/flutter/gestures', 'packages/flutter/src/physics/clamped_simulation'], function(dart_sdk, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__semantics__binding, packages__flutter__gestures, packages__flutter__src__physics__clamped_simulation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const math = dart_sdk.math;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const diagnostics = packages__flutter__src__foundation___bitfield_web.src__foundation__diagnostics;
  const change_notifier = packages__flutter__src__foundation___bitfield_web.src__foundation__change_notifier;
  const observer_list = packages__flutter__src__foundation___bitfield_web.src__foundation__observer_list;
  const assertions = packages__flutter__src__foundation___bitfield_web.src__foundation__assertions;
  const binding = packages__flutter__src__semantics__binding.src__semantics__binding;
  const ticker = packages__flutter__gestures.src__scheduler__ticker;
  const spring_simulation = packages__flutter__src__physics__clamped_simulation.src__physics__spring_simulation;
  const simulation = packages__flutter__src__physics__clamped_simulation.src__physics__simulation;
  const tolerance = packages__flutter__src__physics__clamped_simulation.src__physics__tolerance;
  const animation$ = Object.create(dart.library);
  const tween = Object.create(dart.library);
  const curves = Object.create(dart.library);
  const animations = Object.create(dart.library);
  const listener_helpers = Object.create(dart.library);
  const tween_sequence = Object.create(dart.library);
  const animation_controller = Object.create(dart.library);
  const $runtimeType = dartx.runtimeType;
  const $round = dartx.round;
  const $floor = dartx.floor;
  const $truncateToDouble = dartx.truncateToDouble;
  const $clamp = dartx.clamp;
  const $abs = dartx.abs;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $toDouble = dartx.toDouble;
  const $isNotEmpty = dartx.isNotEmpty;
  const $addAll = dartx.addAll;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $add = dartx.add;
  const $isFinite = dartx.isFinite;
  const $modulo = dartx['%'];
  const $truncate = dartx.truncate;
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(animation$.Animation$(core.double)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let DiagnosticsPropertyOfAnimationLocalListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin(), [])))();
  let AnimationStatusTovoid = () => (AnimationStatusTovoid = dart.constFn(dart.fnType(dart.void, [animation$.AnimationStatus])))();
  let ObserverListOfAnimationStatusTovoid = () => (ObserverListOfAnimationStatusTovoid = dart.constFn(observer_list.ObserverList$(AnimationStatusTovoid())))();
  let ListOfAnimationStatusTovoid = () => (ListOfAnimationStatusTovoid = dart.constFn(core.List$(AnimationStatusTovoid())))();
  let DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(diagnostics.DiagnosticsProperty$(listener_helpers.AnimationLocalStatusListenersMixin)))();
  let SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(_js_helper.SyncIterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(core.Iterable$(DiagnosticsPropertyOfAnimationLocalStatusListenersMixin())))();
  let VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = () => (VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin = dart.constFn(dart.fnType(IterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin(), [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOf_Interval = () => (JSArrayOf_Interval = dart.constFn(_interceptors.JSArray$(tween_sequence._Interval)))();
  let DiagnosticsPropertyOfAnimationController = () => (DiagnosticsPropertyOfAnimationController = dart.constFn(diagnostics.DiagnosticsProperty$(animation_controller.AnimationController)))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(diagnostics.DiagnosticsNode)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.dismissed",
        index: 0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.forward",
        index: 1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.reverse",
        index: 2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: animation$.AnimationStatus.prototype,
        [_name$]: "AnimationStatus.completed",
        index: 3
      });
    },
    get C4() {
      return C4 = dart.constList([C0 || CT.C0, C1 || CT.C1, C2 || CT.C2, C3 || CT.C3], animation$.AnimationStatus);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: curves._Linear.prototype
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: curves._DecelerateCurve.prototype
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.04,
        [Cubic_b]: 1,
        [Cubic_a]: 0.18
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.25,
        [Cubic_b]: 0.1,
        [Cubic_a]: 0.25
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 1,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.09,
        [Cubic_c]: 0.65,
        [Cubic_b]: 0.03,
        [Cubic_a]: 0.67
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.715,
        [Cubic_c]: 0.745,
        [Cubic_b]: 0,
        [Cubic_a]: 0.47
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.53,
        [Cubic_c]: 0.68,
        [Cubic_b]: 0.085,
        [Cubic_a]: 0.55
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.19,
        [Cubic_c]: 0.675,
        [Cubic_b]: 0.055,
        [Cubic_a]: 0.55
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.22,
        [Cubic_c]: 0.685,
        [Cubic_b]: 0.03,
        [Cubic_a]: 0.895
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.06,
        [Cubic_c]: 0.855,
        [Cubic_b]: 0.05,
        [Cubic_a]: 0.755
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.035,
        [Cubic_c]: 0.795,
        [Cubic_b]: 0.05,
        [Cubic_a]: 0.95
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.335,
        [Cubic_c]: 0.98,
        [Cubic_b]: 0.04,
        [Cubic_a]: 0.6
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.045,
        [Cubic_c]: 0.735,
        [Cubic_b]: -0.28,
        [Cubic_a]: 0.6
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.97,
        [Cubic_c]: 0.33,
        [Cubic_b]: 0.91,
        [Cubic_a]: 0.35
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.565,
        [Cubic_b]: 0.575,
        [Cubic_a]: 0.39
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.94,
        [Cubic_c]: 0.45,
        [Cubic_b]: 0.46,
        [Cubic_a]: 0.25
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.355,
        [Cubic_b]: 0.61,
        [Cubic_a]: 0.215
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.44,
        [Cubic_b]: 0.84,
        [Cubic_a]: 0.165
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.32,
        [Cubic_b]: 1,
        [Cubic_a]: 0.23
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.22,
        [Cubic_b]: 1,
        [Cubic_a]: 0.19
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.165,
        [Cubic_b]: 0.82,
        [Cubic_a]: 0.075
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1.275,
        [Cubic_c]: 0.32,
        [Cubic_b]: 0.885,
        [Cubic_a]: 0.175
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.58,
        [Cubic_b]: 0,
        [Cubic_a]: 0.42
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.95,
        [Cubic_c]: 0.55,
        [Cubic_b]: 0.05,
        [Cubic_a]: 0.445
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.955,
        [Cubic_c]: 0.515,
        [Cubic_b]: 0.03,
        [Cubic_a]: 0.455
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.355,
        [Cubic_b]: 0.045,
        [Cubic_a]: 0.645
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.175,
        [Cubic_b]: 0,
        [Cubic_a]: 0.77
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.07,
        [Cubic_b]: 0,
        [Cubic_a]: 0.86
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0,
        [Cubic_b]: 0,
        [Cubic_a]: 1
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.86,
        [Cubic_c]: 0.15,
        [Cubic_b]: 0.135,
        [Cubic_a]: 0.785
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1.55,
        [Cubic_c]: 0.265,
        [Cubic_b]: -0.55,
        [Cubic_a]: 0.68
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 0.15,
        [Cubic_c]: 0.85,
        [Cubic_b]: 0.85,
        [Cubic_a]: 0.15
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: curves._BounceInCurve.prototype
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: curves._BounceOutCurve.prototype
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: curves._BounceInOutCurve.prototype
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: curves.ElasticInCurve.prototype,
        [ElasticInCurve_period]: 0.4
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: curves.ElasticOutCurve.prototype,
        [ElasticOutCurve_period]: 0.4
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: curves.ElasticInOutCurve.prototype,
        [ElasticInOutCurve_period]: 0.4
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.minimize",
        index: 0
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: animations._TrainHoppingMode.prototype,
        [_name$0]: "_TrainHoppingMode.maximize",
        index: 1
      });
    },
    get C48() {
      return C48 = dart.constList([C46 || CT.C46, C47 || CT.C47], animations._TrainHoppingMode);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: animations._AlwaysCompleteAnimation.prototype
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: animations._AlwaysDismissedAnimation.prototype
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$1]: "_AnimationDirection.forward",
        index: 0
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: animation_controller._AnimationDirection.prototype,
        [_name$1]: "_AnimationDirection.reverse",
        index: 1
      });
    },
    get C53() {
      return C53 = dart.constList([C51 || CT.C51, C52 || CT.C52], animation_controller._AnimationDirection);
    },
    get C54() {
      return C54 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$1]: "AnimationBehavior.normal",
        index: 0
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: animation_controller.AnimationBehavior.prototype,
        [_name$1]: "AnimationBehavior.preserve",
        index: 1
      });
    },
    get C56() {
      return C56 = dart.constList([C54 || CT.C54, C55 || CT.C55], animation_controller.AnimationBehavior);
    },
    get C57() {
      return C57 = dart.const({
        __proto__: tolerance.Tolerance.prototype,
        [Tolerance_velocity]: 1 / 0,
        [Tolerance_time]: 0.001,
        [Tolerance_distance]: 0.01
      });
    }
  });
  const _name$ = dart.privateName(animation$, "_name");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  animation$.AnimationStatus = class AnimationStatus extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (animation$.AnimationStatus.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = animation$.AnimationStatus.prototype;
  dart.addTypeTests(animation$.AnimationStatus);
  dart.setLibraryUri(animation$.AnimationStatus, "package:flutter/src/animation/animation.dart");
  dart.setFieldSignature(animation$.AnimationStatus, () => ({
    __proto__: dart.getFields(animation$.AnimationStatus.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation$.AnimationStatus, ['toString']);
  animation$.AnimationStatus.dismissed = C0 || CT.C0;
  animation$.AnimationStatus.forward = C1 || CT.C1;
  animation$.AnimationStatus.reverse = C2 || CT.C2;
  animation$.AnimationStatus.completed = C3 || CT.C3;
  animation$.AnimationStatus.values = C4 || CT.C4;
  const _is_Animation_default = Symbol('_is_Animation_default');
  animation$.Animation$ = dart.generic(T => {
    class Animation extends change_notifier.Listenable {
      get isDismissed() {
        return dart.equals(this.status, animation$.AnimationStatus.dismissed);
      }
      get isCompleted() {
        return dart.equals(this.status, animation$.AnimationStatus.completed);
      }
      drive(U, child) {
        if (!AnimationOfdouble().is(this)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 169, 12, "this is Animation<double>");
        return child.animate(AnimationOfdouble()._check(this));
      }
      toString() {
        return dart.str(diagnostics.describeIdentity(this)) + "(" + dart.str(this.toStringDetails()) + ")";
      }
      toStringDetails() {
        if (!(this.status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 193, 12, "status != null");
        let icon = null;
        switch (this.status) {
          case C1 || CT.C1:
          {
            icon = "▶";
            break;
          }
          case C2 || CT.C2:
          {
            icon = "◀";
            break;
          }
          case C3 || CT.C3:
          {
            icon = "⏭";
            break;
          }
          case C0 || CT.C0:
          {
            icon = "⏮";
            break;
          }
        }
        if (!(icon != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation.dart", 209, 12, "icon != null");
        return dart.str(icon);
      }
    }
    (Animation.new = function() {
      Animation.__proto__.new.call(this);
      ;
    }).prototype = Animation.prototype;
    dart.addTypeTests(Animation);
    Animation.prototype[_is_Animation_default] = true;
    Animation[dart.implements] = () => [change_notifier.ValueListenable$(T)];
    dart.setMethodSignature(Animation, () => ({
      __proto__: dart.getMethods(Animation.__proto__),
      drive: dart.gFnType(U => [animation$.Animation$(U), [tween.Animatable$(U)]]),
      toStringDetails: dart.fnType(core.String, [])
    }));
    dart.setGetterSignature(Animation, () => ({
      __proto__: dart.getGetters(Animation.__proto__),
      isDismissed: core.bool,
      isCompleted: core.bool
    }));
    dart.setLibraryUri(Animation, "package:flutter/src/animation/animation.dart");
    dart.defineExtensionMethods(Animation, ['toString']);
    return Animation;
  });
  animation$.Animation = animation$.Animation$();
  dart.addTypeTests(animation$.Animation, _is_Animation_default);
  const _is_Animatable_default = Symbol('_is_Animatable_default');
  tween.Animatable$ = dart.generic(T => {
    let _AnimatedEvaluationOfT = () => (_AnimatedEvaluationOfT = dart.constFn(tween._AnimatedEvaluation$(T)))();
    let _ChainedEvaluationOfT = () => (_ChainedEvaluationOfT = dart.constFn(tween._ChainedEvaluation$(T)))();
    class Animatable extends core.Object {
      evaluate(animation) {
        return this.transform(animation.value);
      }
      animate(parent) {
        return new (_AnimatedEvaluationOfT()).new(parent, this);
      }
      chain(parent) {
        return new (_ChainedEvaluationOfT()).new(parent, this);
      }
    }
    (Animatable.new = function() {
      ;
    }).prototype = Animatable.prototype;
    dart.addTypeTests(Animatable);
    Animatable.prototype[_is_Animatable_default] = true;
    dart.setMethodSignature(Animatable, () => ({
      __proto__: dart.getMethods(Animatable.__proto__),
      evaluate: dart.fnType(T, [animation$.Animation$(core.double)]),
      animate: dart.fnType(animation$.Animation$(T), [animation$.Animation$(core.double)]),
      chain: dart.fnType(tween.Animatable$(T), [tween.Animatable$(core.double)])
    }));
    dart.setLibraryUri(Animatable, "package:flutter/src/animation/tween.dart");
    return Animatable;
  });
  tween.Animatable = tween.Animatable$();
  dart.addTypeTests(tween.Animatable, _is_Animatable_default);
  const _evaluatable$ = dart.privateName(tween, "_evaluatable");
  const _is_AnimationWithParentMixin_default = Symbol('_is_AnimationWithParentMixin_default');
  animations.AnimationWithParentMixin$ = dart.generic(T => {
    class AnimationWithParentMixin extends core.Object {}
    AnimationWithParentMixin[dart.mixinOn] = Object => class AnimationWithParentMixin extends Object {
      addListener(listener) {
        return this.parent.addListener(listener);
      }
      removeListener(listener) {
        return this.parent.removeListener(listener);
      }
      addStatusListener(listener) {
        return this.parent.addStatusListener(listener);
      }
      removeStatusListener(listener) {
        return this.parent.removeStatusListener(listener);
      }
      get status() {
        return this.parent.status;
      }
    };
    (AnimationWithParentMixin[dart.mixinNew] = function() {
    }).prototype = AnimationWithParentMixin.prototype;
    dart.addTypeTests(AnimationWithParentMixin);
    AnimationWithParentMixin.prototype[_is_AnimationWithParentMixin_default] = true;
    AnimationWithParentMixin[dart.implements] = () => [core.Object];
    dart.setMethodSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getMethods(AnimationWithParentMixin.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AnimationWithParentMixin, () => ({
      __proto__: dart.getGetters(AnimationWithParentMixin.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AnimationWithParentMixin, "package:flutter/src/animation/animations.dart");
    return AnimationWithParentMixin;
  });
  animations.AnimationWithParentMixin = animations.AnimationWithParentMixin$();
  dart.addTypeTests(animations.AnimationWithParentMixin, _is_AnimationWithParentMixin_default);
  const _is__AnimatedEvaluation_default = Symbol('_is__AnimatedEvaluation_default');
  const _AnimatedEvaluation_parent = dart.privateName(tween, "_AnimatedEvaluation.parent");
  tween._AnimatedEvaluation$ = dart.generic(T => {
    const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(T) {};
    (Animation_AnimationWithParentMixin$36.new = function() {
      Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationWithParentMixin$36.prototype;
    dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
    class _AnimatedEvaluation extends Animation_AnimationWithParentMixin$36 {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      get value() {
        return this[_evaluatable$].evaluate(this.parent);
      }
      toString() {
        return dart.str(this.parent) + "➩" + dart.str(this[_evaluatable$]) + "➩" + dart.str(this.value);
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this[_evaluatable$]);
      }
    }
    (_AnimatedEvaluation.new = function(parent, _evaluatable) {
      this[parent$] = parent;
      this[_evaluatable$] = _evaluatable;
      _AnimatedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _AnimatedEvaluation.prototype;
    dart.addTypeTests(_AnimatedEvaluation);
    _AnimatedEvaluation.prototype[_is__AnimatedEvaluation_default] = true;
    const parent$ = _AnimatedEvaluation_parent;
    dart.setGetterSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getGetters(_AnimatedEvaluation.__proto__),
      value: T
    }));
    dart.setLibraryUri(_AnimatedEvaluation, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(_AnimatedEvaluation, () => ({
      __proto__: dart.getFields(_AnimatedEvaluation.__proto__),
      parent: dart.finalFieldType(animation$.Animation$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_AnimatedEvaluation, ['toString']);
    return _AnimatedEvaluation;
  });
  tween._AnimatedEvaluation = tween._AnimatedEvaluation$();
  dart.addTypeTests(tween._AnimatedEvaluation, _is__AnimatedEvaluation_default);
  const _parent$ = dart.privateName(tween, "_parent");
  const _is__ChainedEvaluation_default = Symbol('_is__ChainedEvaluation_default');
  tween._ChainedEvaluation$ = dart.generic(T => {
    class _ChainedEvaluation extends tween.Animatable$(T) {
      transform(t) {
        return this[_evaluatable$].transform(this[_parent$].transform(t));
      }
      toString() {
        return dart.str(this[_parent$]) + "➩" + dart.str(this[_evaluatable$]);
      }
    }
    (_ChainedEvaluation.new = function(_parent, _evaluatable) {
      this[_parent$] = _parent;
      this[_evaluatable$] = _evaluatable;
      _ChainedEvaluation.__proto__.new.call(this);
      ;
    }).prototype = _ChainedEvaluation.prototype;
    dart.addTypeTests(_ChainedEvaluation);
    _ChainedEvaluation.prototype[_is__ChainedEvaluation_default] = true;
    dart.setMethodSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getMethods(_ChainedEvaluation.__proto__),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(_ChainedEvaluation, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(_ChainedEvaluation, () => ({
      __proto__: dart.getFields(_ChainedEvaluation.__proto__),
      [_parent$]: dart.finalFieldType(tween.Animatable$(core.double)),
      [_evaluatable$]: dart.finalFieldType(tween.Animatable$(T))
    }));
    dart.defineExtensionMethods(_ChainedEvaluation, ['toString']);
    return _ChainedEvaluation;
  });
  tween._ChainedEvaluation = tween._ChainedEvaluation$();
  dart.addTypeTests(tween._ChainedEvaluation, _is__ChainedEvaluation_default);
  const _is_Tween_default = Symbol('_is_Tween_default');
  const Tween_begin = dart.privateName(tween, "Tween.begin");
  const Tween_end = dart.privateName(tween, "Tween.end");
  tween.Tween$ = dart.generic(T => {
    class Tween extends tween.Animatable$(T) {
      get begin() {
        return this[begin$];
      }
      set begin(value) {
        this[begin$] = T._check(value);
      }
      get end() {
        return this[end$];
      }
      set end(value) {
        this[end$] = T._check(value);
      }
      lerp(t) {
        if (!(this.begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 237, 12, "ssert(begin !");
        if (!(this.end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 238, 12, "ssert(end !");
        return T._check(dart.dsend(this.begin, '+', [dart.dsend(dart.dsend(this.end, '-', [this.begin]), '*', [t])]));
      }
      transform(t) {
        if (t === 0.0) return this.begin;
        if (t === 1.0) return this.end;
        return this.lerp(t);
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + " → " + dart.str(this.end) + ")";
      }
    }
    (Tween.new = function(opts) {
      let begin = opts && 'begin' in opts ? opts.begin : null;
      let end = opts && 'end' in opts ? opts.end : null;
      this[begin$] = begin;
      this[end$] = end;
      Tween.__proto__.new.call(this);
      ;
    }).prototype = Tween.prototype;
    dart.addTypeTests(Tween);
    Tween.prototype[_is_Tween_default] = true;
    const begin$ = Tween_begin;
    const end$ = Tween_end;
    dart.setMethodSignature(Tween, () => ({
      __proto__: dart.getMethods(Tween.__proto__),
      lerp: dart.fnType(T, [core.double]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(Tween, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(Tween, () => ({
      __proto__: dart.getFields(Tween.__proto__),
      begin: dart.fieldType(T),
      end: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(Tween, ['toString']);
    return Tween;
  });
  tween.Tween = tween.Tween$();
  dart.addTypeTests(tween.Tween, _is_Tween_default);
  const _is_ReverseTween_default = Symbol('_is_ReverseTween_default');
  const ReverseTween_parent = dart.privateName(tween, "ReverseTween.parent");
  tween.ReverseTween$ = dart.generic(T => {
    class ReverseTween extends tween.Tween$(T) {
      get parent() {
        return this[parent$];
      }
      set parent(value) {
        super.parent = value;
      }
      lerp(t) {
        return this.parent.lerp(1.0 - dart.notNull(t));
      }
    }
    (ReverseTween.new = function(parent) {
      this[parent$] = parent;
      if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 271, 14, "ssert(parent !");
      ReverseTween.__proto__.new.call(this, {begin: parent.end, end: parent.begin});
      ;
    }).prototype = ReverseTween.prototype;
    dart.addTypeTests(ReverseTween);
    ReverseTween.prototype[_is_ReverseTween_default] = true;
    const parent$ = ReverseTween_parent;
    dart.setLibraryUri(ReverseTween, "package:flutter/src/animation/tween.dart");
    dart.setFieldSignature(ReverseTween, () => ({
      __proto__: dart.getFields(ReverseTween.__proto__),
      parent: dart.finalFieldType(tween.Tween$(T))
    }));
    return ReverseTween;
  });
  tween.ReverseTween = tween.ReverseTween$();
  dart.addTypeTests(tween.ReverseTween, _is_ReverseTween_default);
  tween.ColorTween = class ColorTween extends tween.Tween$(ui.Color) {
    lerp(t) {
      return ui.Color.lerp(this.begin, this.end, t);
    }
  };
  (tween.ColorTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.ColorTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.ColorTween.prototype;
  dart.addTypeTests(tween.ColorTween);
  dart.setLibraryUri(tween.ColorTween, "package:flutter/src/animation/tween.dart");
  tween.SizeTween = class SizeTween extends tween.Tween$(ui.Size) {
    lerp(t) {
      return ui.Size.lerp(this.begin, this.end, t);
    }
  };
  (tween.SizeTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.SizeTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.SizeTween.prototype;
  dart.addTypeTests(tween.SizeTween);
  dart.setLibraryUri(tween.SizeTween, "package:flutter/src/animation/tween.dart");
  tween.RectTween = class RectTween extends tween.Tween$(ui.Rect) {
    lerp(t) {
      return ui.Rect.lerp(this.begin, this.end, t);
    }
  };
  (tween.RectTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.RectTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.RectTween.prototype;
  dart.addTypeTests(tween.RectTween);
  dart.setLibraryUri(tween.RectTween, "package:flutter/src/animation/tween.dart");
  tween.IntTween = class IntTween extends tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$round]();
    }
  };
  (tween.IntTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.IntTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.IntTween.prototype;
  dart.addTypeTests(tween.IntTween);
  dart.setLibraryUri(tween.IntTween, "package:flutter/src/animation/tween.dart");
  tween.StepTween = class StepTween extends tween.Tween$(core.int) {
    lerp(t) {
      return (dart.notNull(this.begin) + (dart.notNull(this.end) - dart.notNull(this.begin)) * dart.notNull(t))[$floor]();
    }
  };
  (tween.StepTween.new = function(opts) {
    let begin = opts && 'begin' in opts ? opts.begin : null;
    let end = opts && 'end' in opts ? opts.end : null;
    tween.StepTween.__proto__.new.call(this, {begin: begin, end: end});
    ;
  }).prototype = tween.StepTween.prototype;
  dart.addTypeTests(tween.StepTween);
  dart.setLibraryUri(tween.StepTween, "package:flutter/src/animation/tween.dart");
  const _is_ConstantTween_default = Symbol('_is_ConstantTween_default');
  tween.ConstantTween$ = dart.generic(T => {
    class ConstantTween extends tween.Tween$(T) {
      lerp(t) {
        return this.begin;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(value: begin)";
      }
    }
    (ConstantTween.new = function(value) {
      ConstantTween.__proto__.new.call(this, {begin: value, end: value});
      ;
    }).prototype = ConstantTween.prototype;
    dart.addTypeTests(ConstantTween);
    ConstantTween.prototype[_is_ConstantTween_default] = true;
    dart.setLibraryUri(ConstantTween, "package:flutter/src/animation/tween.dart");
    dart.defineExtensionMethods(ConstantTween, ['toString']);
    return ConstantTween;
  });
  tween.ConstantTween = tween.ConstantTween$();
  dart.addTypeTests(tween.ConstantTween, _is_ConstantTween_default);
  const CurveTween_curve = dart.privateName(tween, "CurveTween.curve");
  tween.CurveTween = class CurveTween extends tween.Animatable$(core.double) {
    get curve() {
      return this[curve$];
    }
    set curve(value) {
      this[curve$] = value;
    }
    transform(t) {
      if (t === 0.0 || t === 1.0) {
        if (!(this.curve.transform(t)[$round]() === t)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 446, 14, "ssert(curve.transform(t).round(");
        return t;
      }
      return this.curve.transform(t);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(curve: " + dart.str(this.curve) + ")";
    }
  };
  (tween.CurveTween.new = function(opts) {
    let curve = opts && 'curve' in opts ? opts.curve : null;
    this[curve$] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween.dart", 438, 14, "ssert(curve !");
    tween.CurveTween.__proto__.new.call(this);
    ;
  }).prototype = tween.CurveTween.prototype;
  dart.addTypeTests(tween.CurveTween);
  const curve$ = CurveTween_curve;
  dart.setMethodSignature(tween.CurveTween, () => ({
    __proto__: dart.getMethods(tween.CurveTween.__proto__),
    transform: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween.CurveTween, "package:flutter/src/animation/tween.dart");
  dart.setFieldSignature(tween.CurveTween, () => ({
    __proto__: dart.getFields(tween.CurveTween.__proto__),
    curve: dart.fieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(tween.CurveTween, ['toString']);
  curves.Curve = class Curve extends core.Object {
    transform(t) {
      if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 43, 12, "t >= 0.0 && t <= 1.0");
      if (t === 0.0 || t === 1.0) {
        return t;
      }
      return this.transformInternal(t);
    }
    transformInternal(t) {
      dart.throw(new core.UnimplementedError.new());
    }
    get flipped() {
      return new curves.FlippedCurve.new(this);
    }
    toString() {
      return dart.str(this[$runtimeType]);
    }
  };
  (curves.Curve.new = function() {
    ;
  }).prototype = curves.Curve.prototype;
  dart.addTypeTests(curves.Curve);
  dart.setMethodSignature(curves.Curve, () => ({
    __proto__: dart.getMethods(curves.Curve.__proto__),
    transform: dart.fnType(core.double, [core.double]),
    transformInternal: dart.fnType(core.double, [core.double])
  }));
  dart.setGetterSignature(curves.Curve, () => ({
    __proto__: dart.getGetters(curves.Curve.__proto__),
    flipped: curves.Curve
  }));
  dart.setLibraryUri(curves.Curve, "package:flutter/src/animation/curves.dart");
  dart.defineExtensionMethods(curves.Curve, ['toString']);
  curves._Linear = class _Linear extends curves.Curve {
    transformInternal(t) {
      return t;
    }
  };
  (curves._Linear.__ = function() {
    curves._Linear.__proto__.new.call(this);
    ;
  }).prototype = curves._Linear.prototype;
  dart.addTypeTests(curves._Linear);
  dart.setLibraryUri(curves._Linear, "package:flutter/src/animation/curves.dart");
  const SawTooth_count = dart.privateName(curves, "SawTooth.count");
  curves.SawTooth = class SawTooth extends curves.Curve {
    get count() {
      return this[count$];
    }
    set count(value) {
      super.count = value;
    }
    transformInternal(t) {
      t = dart.notNull(t) * dart.notNull(this.count);
      return dart.notNull(t) - t[$truncateToDouble]();
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.count) + ")";
    }
  };
  (curves.SawTooth.new = function(count) {
    this[count$] = count;
    if (!(count != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 97, 39, "count != null");
    curves.SawTooth.__proto__.new.call(this);
    ;
  }).prototype = curves.SawTooth.prototype;
  dart.addTypeTests(curves.SawTooth);
  const count$ = SawTooth_count;
  dart.setLibraryUri(curves.SawTooth, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.SawTooth, () => ({
    __proto__: dart.getFields(curves.SawTooth.__proto__),
    count: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(curves.SawTooth, ['toString']);
  let C5;
  const Interval_begin = dart.privateName(curves, "Interval.begin");
  const Interval_end = dart.privateName(curves, "Interval.end");
  const Interval_curve = dart.privateName(curves, "Interval.curve");
  curves.Interval = class Interval extends curves.Curve {
    get begin() {
      return this[begin$];
    }
    set begin(value) {
      super.begin = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get curve() {
      return this[curve$0];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.begin) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 147, 12, "begin >= 0.0");
      if (!(dart.notNull(this.begin) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 148, 12, "begin <= 1.0");
      if (!(dart.notNull(this.end) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 149, 12, "end >= 0.0");
      if (!(dart.notNull(this.end) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 150, 12, "end <= 1.0");
      if (!(dart.notNull(this.end) >= dart.notNull(this.begin))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 151, 12, "end >= begin");
      t = ((dart.notNull(t) - dart.notNull(this.begin)) / (dart.notNull(this.end) - dart.notNull(this.begin)))[$clamp](0.0, 1.0);
      if (t === 0.0 || t === 1.0) return t;
      return this.curve.transform(t);
    }
    toString() {
      if (!curves._Linear.is(this.curve)) return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")➩" + dart.str(this.curve);
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.begin) + "⋯" + dart.str(this.end) + ")";
    }
  };
  (curves.Interval.new = function(begin, end, opts) {
    let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
    this[begin$] = begin;
    this[end$] = end;
    this[curve$0] = curve;
    if (!(begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 128, 14, "begin != null");
    if (!(end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 129, 14, "end != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 130, 14, "curve != null");
    curves.Interval.__proto__.new.call(this);
    ;
  }).prototype = curves.Interval.prototype;
  dart.addTypeTests(curves.Interval);
  const begin$ = Interval_begin;
  const end$ = Interval_end;
  const curve$0 = Interval_curve;
  dart.setLibraryUri(curves.Interval, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Interval, () => ({
    __proto__: dart.getFields(curves.Interval.__proto__),
    begin: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.Interval, ['toString']);
  const Threshold_threshold = dart.privateName(curves, "Threshold.threshold");
  curves.Threshold = class Threshold extends curves.Curve {
    get threshold() {
      return this[threshold$];
    }
    set threshold(value) {
      super.threshold = value;
    }
    transformInternal(t) {
      if (!(dart.notNull(this.threshold) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 182, 12, "threshold >= 0.0");
      if (!(dart.notNull(this.threshold) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 183, 12, "threshold <= 1.0");
      return dart.notNull(t) < dart.notNull(this.threshold) ? 0.0 : 1.0;
    }
  };
  (curves.Threshold.new = function(threshold) {
    this[threshold$] = threshold;
    if (!(threshold != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 173, 44, "threshold != null");
    curves.Threshold.__proto__.new.call(this);
    ;
  }).prototype = curves.Threshold.prototype;
  dart.addTypeTests(curves.Threshold);
  const threshold$ = Threshold_threshold;
  dart.setLibraryUri(curves.Threshold, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Threshold, () => ({
    __proto__: dart.getFields(curves.Threshold.__proto__),
    threshold: dart.finalFieldType(core.double)
  }));
  const _evaluateCubic = dart.privateName(curves, "_evaluateCubic");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  curves.Cubic = class Cubic extends curves.Curve {
    get a() {
      return this[a$];
    }
    set a(value) {
      super.a = value;
    }
    get b() {
      return this[b$];
    }
    set b(value) {
      super.b = value;
    }
    get c() {
      return this[c$];
    }
    set c(value) {
      super.c = value;
    }
    get d() {
      return this[d$];
    }
    set d(value) {
      super.d = value;
    }
    [_evaluateCubic](a, b, m) {
      return 3 * dart.notNull(a) * (1 - dart.notNull(m)) * (1 - dart.notNull(m)) * dart.notNull(m) + 3 * dart.notNull(b) * (1 - dart.notNull(m)) * dart.notNull(m) * dart.notNull(m) + dart.notNull(m) * dart.notNull(m) * dart.notNull(m);
    }
    transformInternal(t) {
      let start = 0.0;
      let end = 1.0;
      while (true) {
        let midpoint = (start + end) / 2;
        let estimate = this[_evaluateCubic](this.a, this.c, midpoint);
        if ((dart.notNull(t) - dart.notNull(estimate))[$abs]() < 0.001) return this[_evaluateCubic](this.b, this.d, midpoint);
        if (dart.notNull(estimate) < dart.notNull(t))
          start = midpoint;
        else
          end = midpoint;
      }
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + this.a[$toStringAsFixed](2) + ", " + this.b[$toStringAsFixed](2) + ", " + this.c[$toStringAsFixed](2) + ", " + this.d[$toStringAsFixed](2) + ")";
    }
  };
  (curves.Cubic.new = function(a, b, c, d) {
    this[a$] = a;
    this[b$] = b;
    this[c$] = c;
    this[d$] = d;
    if (!(a != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 211, 14, "(a != nul");
    if (!(b != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 212, 14, "(b != nul");
    if (!(c != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 213, 14, "(c != nul");
    if (!(d != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 214, 14, "(d != nul");
    curves.Cubic.__proto__.new.call(this);
    ;
  }).prototype = curves.Cubic.prototype;
  dart.addTypeTests(curves.Cubic);
  const a$ = Cubic_a;
  const b$ = Cubic_b;
  const c$ = Cubic_c;
  const d$ = Cubic_d;
  dart.setMethodSignature(curves.Cubic, () => ({
    __proto__: dart.getMethods(curves.Cubic.__proto__),
    [_evaluateCubic]: dart.fnType(core.double, [core.double, core.double, core.double])
  }));
  dart.setLibraryUri(curves.Cubic, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.Cubic, () => ({
    __proto__: dart.getFields(curves.Cubic.__proto__),
    a: dart.finalFieldType(core.double),
    b: dart.finalFieldType(core.double),
    c: dart.finalFieldType(core.double),
    d: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.Cubic, ['toString']);
  dart.defineLazy(curves.Cubic, {
    /*curves.Cubic._cubicErrorBound*/get _cubicErrorBound() {
      return 0.001;
    }
  });
  const FlippedCurve_curve = dart.privateName(curves, "FlippedCurve.curve");
  curves.FlippedCurve = class FlippedCurve extends curves.Curve {
    get curve() {
      return this[curve$1];
    }
    set curve(value) {
      super.curve = value;
    }
    transformInternal(t) {
      return 1.0 - dart.notNull(this.curve.transform(1.0 - dart.notNull(t)));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.curve) + ")";
    }
  };
  (curves.FlippedCurve.new = function(curve) {
    this[curve$1] = curve;
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/curves.dart", 292, 43, "(curve != nul");
    curves.FlippedCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.FlippedCurve.prototype;
  dart.addTypeTests(curves.FlippedCurve);
  const curve$1 = FlippedCurve_curve;
  dart.setLibraryUri(curves.FlippedCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.FlippedCurve, () => ({
    __proto__: dart.getFields(curves.FlippedCurve.__proto__),
    curve: dart.finalFieldType(curves.Curve)
  }));
  dart.defineExtensionMethods(curves.FlippedCurve, ['toString']);
  curves._DecelerateCurve = class _DecelerateCurve extends curves.Curve {
    transformInternal(t) {
      t = 1.0 - dart.notNull(t);
      return 1.0 - dart.notNull(t) * dart.notNull(t);
    }
  };
  (curves._DecelerateCurve.__ = function() {
    curves._DecelerateCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._DecelerateCurve.prototype;
  dart.addTypeTests(curves._DecelerateCurve);
  dart.setLibraryUri(curves._DecelerateCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceInCurve = class _BounceInCurve extends curves.Curve {
    transformInternal(t) {
      return 1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t)));
    }
  };
  (curves._BounceInCurve.__ = function() {
    curves._BounceInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInCurve.prototype;
  dart.addTypeTests(curves._BounceInCurve);
  dart.setLibraryUri(curves._BounceInCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceOutCurve = class _BounceOutCurve extends curves.Curve {
    transformInternal(t) {
      return curves._bounce(t);
    }
  };
  (curves._BounceOutCurve.__ = function() {
    curves._BounceOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceOutCurve.prototype;
  dart.addTypeTests(curves._BounceOutCurve);
  dart.setLibraryUri(curves._BounceOutCurve, "package:flutter/src/animation/curves.dart");
  curves._BounceInOutCurve = class _BounceInOutCurve extends curves.Curve {
    transformInternal(t) {
      if (dart.notNull(t) < 0.5)
        return (1.0 - dart.notNull(curves._bounce(1.0 - dart.notNull(t) * 2.0))) * 0.5;
      else
        return dart.notNull(curves._bounce(dart.notNull(t) * 2.0 - 1.0)) * 0.5 + 0.5;
    }
  };
  (curves._BounceInOutCurve.__ = function() {
    curves._BounceInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves._BounceInOutCurve.prototype;
  dart.addTypeTests(curves._BounceInOutCurve);
  dart.setLibraryUri(curves._BounceInOutCurve, "package:flutter/src/animation/curves.dart");
  const ElasticInCurve_period = dart.privateName(curves, "ElasticInCurve.period");
  curves.ElasticInCurve = class ElasticInCurve extends curves.Curve {
    get period() {
      return this[period$];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = dart.notNull(t) - 1.0;
      return -math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$] = period;
    curves.ElasticInCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInCurve.prototype;
  dart.addTypeTests(curves.ElasticInCurve);
  const period$ = ElasticInCurve_period;
  dart.setLibraryUri(curves.ElasticInCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticInCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInCurve, ['toString']);
  const ElasticOutCurve_period = dart.privateName(curves, "ElasticOutCurve.period");
  curves.ElasticOutCurve = class ElasticOutCurve extends curves.Curve {
    get period() {
      return this[period$0];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      return math.pow(2.0, -10 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$0] = period;
    curves.ElasticOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticOutCurve.prototype;
  dart.addTypeTests(curves.ElasticOutCurve);
  const period$0 = ElasticOutCurve_period;
  dart.setLibraryUri(curves.ElasticOutCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticOutCurve, ['toString']);
  const ElasticInOutCurve_period = dart.privateName(curves, "ElasticInOutCurve.period");
  curves.ElasticInOutCurve = class ElasticInOutCurve extends curves.Curve {
    get period() {
      return this[period$1];
    }
    set period(value) {
      super.period = value;
    }
    transformInternal(t) {
      let s = dart.notNull(this.period) / 4.0;
      t = 2.0 * dart.notNull(t) - 1.0;
      if (dart.notNull(t) < 0.0)
        return -0.5 * math.pow(2.0, 10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period));
      else
        return math.pow(2.0, -10.0 * dart.notNull(t)) * math.sin((dart.notNull(t) - s) * (3.141592653589793 * 2.0) / dart.notNull(this.period)) * 0.5 + 1.0;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.period) + ")";
    }
  };
  (curves.ElasticInOutCurve.new = function(period) {
    if (period === void 0) period = 0.4;
    this[period$1] = period;
    curves.ElasticInOutCurve.__proto__.new.call(this);
    ;
  }).prototype = curves.ElasticInOutCurve.prototype;
  dart.addTypeTests(curves.ElasticInOutCurve);
  const period$1 = ElasticInOutCurve_period;
  dart.setLibraryUri(curves.ElasticInOutCurve, "package:flutter/src/animation/curves.dart");
  dart.setFieldSignature(curves.ElasticInOutCurve, () => ({
    __proto__: dart.getFields(curves.ElasticInOutCurve.__proto__),
    period: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(curves.ElasticInOutCurve, ['toString']);
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
  let C16;
  let C17;
  let C18;
  let C19;
  let C20;
  let C21;
  let C22;
  let C23;
  let C24;
  let C25;
  let C26;
  let C27;
  let C28;
  let C29;
  let C30;
  let C31;
  let C32;
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  curves.Curves = class Curves extends core.Object {};
  (curves.Curves.__ = function() {
    ;
  }).prototype = curves.Curves.prototype;
  dart.addTypeTests(curves.Curves);
  dart.setLibraryUri(curves.Curves, "package:flutter/src/animation/curves.dart");
  dart.defineLazy(curves.Curves, {
    /*curves.Curves.linear*/get linear() {
      return C5 || CT.C5;
    },
    /*curves.Curves.decelerate*/get decelerate() {
      return C6 || CT.C6;
    },
    /*curves.Curves.fastLinearToSlowEaseIn*/get fastLinearToSlowEaseIn() {
      return C7 || CT.C7;
    },
    /*curves.Curves.ease*/get ease() {
      return C8 || CT.C8;
    },
    /*curves.Curves.easeIn*/get easeIn() {
      return C9 || CT.C9;
    },
    /*curves.Curves.easeInToLinear*/get easeInToLinear() {
      return C10 || CT.C10;
    },
    /*curves.Curves.easeInSine*/get easeInSine() {
      return C11 || CT.C11;
    },
    /*curves.Curves.easeInQuad*/get easeInQuad() {
      return C12 || CT.C12;
    },
    /*curves.Curves.easeInCubic*/get easeInCubic() {
      return C13 || CT.C13;
    },
    /*curves.Curves.easeInQuart*/get easeInQuart() {
      return C14 || CT.C14;
    },
    /*curves.Curves.easeInQuint*/get easeInQuint() {
      return C15 || CT.C15;
    },
    /*curves.Curves.easeInExpo*/get easeInExpo() {
      return C16 || CT.C16;
    },
    /*curves.Curves.easeInCirc*/get easeInCirc() {
      return C17 || CT.C17;
    },
    /*curves.Curves.easeInBack*/get easeInBack() {
      return C18 || CT.C18;
    },
    /*curves.Curves.easeOut*/get easeOut() {
      return C19 || CT.C19;
    },
    /*curves.Curves.linearToEaseOut*/get linearToEaseOut() {
      return C20 || CT.C20;
    },
    /*curves.Curves.easeOutSine*/get easeOutSine() {
      return C21 || CT.C21;
    },
    /*curves.Curves.easeOutQuad*/get easeOutQuad() {
      return C22 || CT.C22;
    },
    /*curves.Curves.easeOutCubic*/get easeOutCubic() {
      return C23 || CT.C23;
    },
    /*curves.Curves.easeOutQuart*/get easeOutQuart() {
      return C24 || CT.C24;
    },
    /*curves.Curves.easeOutQuint*/get easeOutQuint() {
      return C25 || CT.C25;
    },
    /*curves.Curves.easeOutExpo*/get easeOutExpo() {
      return C26 || CT.C26;
    },
    /*curves.Curves.easeOutCirc*/get easeOutCirc() {
      return C27 || CT.C27;
    },
    /*curves.Curves.easeOutBack*/get easeOutBack() {
      return C28 || CT.C28;
    },
    /*curves.Curves.easeInOut*/get easeInOut() {
      return C29 || CT.C29;
    },
    /*curves.Curves.easeInOutSine*/get easeInOutSine() {
      return C30 || CT.C30;
    },
    /*curves.Curves.easeInOutQuad*/get easeInOutQuad() {
      return C31 || CT.C31;
    },
    /*curves.Curves.easeInOutCubic*/get easeInOutCubic() {
      return C32 || CT.C32;
    },
    /*curves.Curves.easeInOutQuart*/get easeInOutQuart() {
      return C33 || CT.C33;
    },
    /*curves.Curves.easeInOutQuint*/get easeInOutQuint() {
      return C34 || CT.C34;
    },
    /*curves.Curves.easeInOutExpo*/get easeInOutExpo() {
      return C35 || CT.C35;
    },
    /*curves.Curves.easeInOutCirc*/get easeInOutCirc() {
      return C36 || CT.C36;
    },
    /*curves.Curves.easeInOutBack*/get easeInOutBack() {
      return C37 || CT.C37;
    },
    /*curves.Curves.fastOutSlowIn*/get fastOutSlowIn() {
      return C38 || CT.C38;
    },
    /*curves.Curves.slowMiddle*/get slowMiddle() {
      return C39 || CT.C39;
    },
    /*curves.Curves.bounceIn*/get bounceIn() {
      return C40 || CT.C40;
    },
    /*curves.Curves.bounceOut*/get bounceOut() {
      return C41 || CT.C41;
    },
    /*curves.Curves.bounceInOut*/get bounceInOut() {
      return C42 || CT.C42;
    },
    /*curves.Curves.elasticIn*/get elasticIn() {
      return C43 || CT.C43;
    },
    /*curves.Curves.elasticOut*/get elasticOut() {
      return C44 || CT.C44;
    },
    /*curves.Curves.elasticInOut*/get elasticInOut() {
      return C45 || CT.C45;
    }
  });
  curves._bounce = function _bounce(t) {
    if (dart.notNull(t) < 1.0 / 2.75) {
      return 7.5625 * dart.notNull(t) * dart.notNull(t);
    } else if (dart.notNull(t) < 2 / 2.75) {
      t = dart.notNull(t) - 1.5 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.75;
    } else if (dart.notNull(t) < 2.5 / 2.75) {
      t = dart.notNull(t) - 2.25 / 2.75;
      return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.9375;
    }
    t = dart.notNull(t) - 2.625 / 2.75;
    return 7.5625 * dart.notNull(t) * dart.notNull(t) + 0.984375;
  };
  animations._AlwaysCompleteAnimation = class _AlwaysCompleteAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.completed;
    }
    get value() {
      return 1.0;
    }
    toString() {
      return "kAlwaysCompleteAnimation";
    }
  };
  (animations._AlwaysCompleteAnimation.new = function() {
    animations._AlwaysCompleteAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysCompleteAnimation.prototype;
  dart.addTypeTests(animations._AlwaysCompleteAnimation);
  dart.setMethodSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysCompleteAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysCompleteAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysCompleteAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysCompleteAnimation, "package:flutter/src/animation/animations.dart");
  dart.defineExtensionMethods(animations._AlwaysCompleteAnimation, ['toString']);
  animations._AlwaysDismissedAnimation = class _AlwaysDismissedAnimation extends animation$.Animation$(core.double) {
    addListener(listener) {
    }
    removeListener(listener) {
    }
    addStatusListener(listener) {
    }
    removeStatusListener(listener) {
    }
    get status() {
      return animation$.AnimationStatus.dismissed;
    }
    get value() {
      return 0.0;
    }
    toString() {
      return "kAlwaysDismissedAnimation";
    }
  };
  (animations._AlwaysDismissedAnimation.new = function() {
    animations._AlwaysDismissedAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations._AlwaysDismissedAnimation.prototype;
  dart.addTypeTests(animations._AlwaysDismissedAnimation);
  dart.setMethodSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getMethods(animations._AlwaysDismissedAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
  }));
  dart.setGetterSignature(animations._AlwaysDismissedAnimation, () => ({
    __proto__: dart.getGetters(animations._AlwaysDismissedAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations._AlwaysDismissedAnimation, "package:flutter/src/animation/animations.dart");
  dart.defineExtensionMethods(animations._AlwaysDismissedAnimation, ['toString']);
  const _is_AlwaysStoppedAnimation_default = Symbol('_is_AlwaysStoppedAnimation_default');
  const AlwaysStoppedAnimation_value = dart.privateName(animations, "AlwaysStoppedAnimation.value");
  animations.AlwaysStoppedAnimation$ = dart.generic(T => {
    class AlwaysStoppedAnimation extends animation$.Animation$(T) {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      addListener(listener) {
      }
      removeListener(listener) {
      }
      addStatusListener(listener) {
      }
      removeStatusListener(listener) {
      }
      get status() {
        return animation$.AnimationStatus.forward;
      }
      toStringDetails() {
        return dart.str(super.toStringDetails()) + " " + dart.str(this.value) + "; paused";
      }
    }
    (AlwaysStoppedAnimation.new = function(value) {
      this[value$] = value;
      AlwaysStoppedAnimation.__proto__.new.call(this);
      ;
    }).prototype = AlwaysStoppedAnimation.prototype;
    dart.addTypeTests(AlwaysStoppedAnimation);
    AlwaysStoppedAnimation.prototype[_is_AlwaysStoppedAnimation_default] = true;
    const value$ = AlwaysStoppedAnimation_value;
    dart.setMethodSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getMethods(AlwaysStoppedAnimation.__proto__),
      addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
      addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
      removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])])
    }));
    dart.setGetterSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getGetters(AlwaysStoppedAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(AlwaysStoppedAnimation, "package:flutter/src/animation/animations.dart");
    dart.setFieldSignature(AlwaysStoppedAnimation, () => ({
      __proto__: dart.getFields(AlwaysStoppedAnimation.__proto__),
      value: dart.finalFieldType(T)
    }));
    return AlwaysStoppedAnimation;
  });
  animations.AlwaysStoppedAnimation = animations.AlwaysStoppedAnimation$();
  dart.addTypeTests(animations.AlwaysStoppedAnimation, _is_AlwaysStoppedAnimation_default);
  const _status = dart.privateName(animations, "_status");
  const _value = dart.privateName(animations, "_value");
  const _parent = dart.privateName(animations, "_parent");
  const _listenerCounter = dart.privateName(listener_helpers, "_listenerCounter");
  listener_helpers.AnimationLazyListenerMixin = class AnimationLazyListenerMixin extends core.Object {};
  listener_helpers.AnimationLazyListenerMixin[dart.mixinOn] = Object => class AnimationLazyListenerMixin extends Object {
    didRegisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/listener_helpers.dart", 26, 12, "_listenerCounter >= 0");
      if (this[_listenerCounter] === 0) this.didStartListening();
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) + 1;
    }
    didUnregisterListener() {
      if (!(dart.notNull(this[_listenerCounter]) >= 1)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/listener_helpers.dart", 39, 12, "_listenerCounter >= 1");
      this[_listenerCounter] = dart.notNull(this[_listenerCounter]) - 1;
      if (this[_listenerCounter] === 0) this.didStopListening();
    }
    get isListening() {
      return dart.notNull(this[_listenerCounter]) > 0;
    }
  };
  (listener_helpers.AnimationLazyListenerMixin[dart.mixinNew] = function() {
    this[_listenerCounter] = 0;
  }).prototype = listener_helpers.AnimationLazyListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLazyListenerMixin);
  listener_helpers.AnimationLazyListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLazyListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getGetters(listener_helpers.AnimationLazyListenerMixin.__proto__),
    isListening: core.bool
  }));
  dart.setLibraryUri(listener_helpers.AnimationLazyListenerMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLazyListenerMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLazyListenerMixin.__proto__),
    [_listenerCounter]: dart.fieldType(core.int)
  }));
  const _listeners = dart.privateName(listener_helpers, "_listeners");
  listener_helpers.AnimationLocalListenersMixin = class AnimationLocalListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalListenersMixin[dart.mixinOn] = Object => class AnimationLocalListenersMixin extends Object {
    addListener(listener) {
      this.didRegisterListener();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      let removed = this[_listeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyListeners() {
      let localListeners = ListOfVoidTovoid().from(this[_listeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_listeners].contains(listener))) listener();
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalListenersMixin())}));
        }
      }
    }
  };
  (listener_helpers.AnimationLocalListenersMixin[dart.mixinNew] = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalListenersMixin);
  listener_helpers.AnimationLocalListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalListenersMixin.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalListenersMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLocalListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalListenersMixin.__proto__),
    [_listeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  const _statusListeners = dart.privateName(listener_helpers, "_statusListeners");
  listener_helpers.AnimationLocalStatusListenersMixin = class AnimationLocalStatusListenersMixin extends core.Object {};
  listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinOn] = Object => class AnimationLocalStatusListenersMixin extends Object {
    addStatusListener(listener) {
      this.didRegisterListener();
      this[_statusListeners].add(listener);
    }
    removeStatusListener(listener) {
      let removed = this[_statusListeners].remove(listener);
      if (dart.test(removed)) {
        this.didUnregisterListener();
      }
    }
    notifyStatusListeners(status) {
      let localListeners = ListOfAnimationStatusTovoid().from(this[_statusListeners]);
      for (let listener of localListeners) {
        try {
          if (dart.test(this[_statusListeners].contains(listener))) listener(status);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          assertions.FlutterError.reportError(new assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "animation library", context: new assertions.ErrorDescription.new("while notifying status listeners for " + dart.str(this[$runtimeType])), informationCollector: dart.fn(() => new (SyncIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new((function*() {
              yield new (DiagnosticsPropertyOfAnimationLocalStatusListenersMixin()).new("The " + dart.str(this[$runtimeType]) + " notifying status listeners was", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty});
            }).bind(this)), VoidToIterableOfDiagnosticsPropertyOfAnimationLocalStatusListenersMixin())}));
        }
      }
    }
  };
  (listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew] = function() {
    this[_statusListeners] = new (ObserverListOfAnimationStatusTovoid()).new();
  }).prototype = listener_helpers.AnimationLocalStatusListenersMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationLocalStatusListenersMixin);
  listener_helpers.AnimationLocalStatusListenersMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    addStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    removeStatusListener: dart.fnType(dart.void, [dart.fnType(dart.void, [animation$.AnimationStatus])]),
    notifyStatusListeners: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setLibraryUri(listener_helpers.AnimationLocalStatusListenersMixin, "package:flutter/src/animation/listener_helpers.dart");
  dart.setFieldSignature(listener_helpers.AnimationLocalStatusListenersMixin, () => ({
    __proto__: dart.getFields(listener_helpers.AnimationLocalStatusListenersMixin.__proto__),
    [_statusListeners]: dart.finalFieldType(observer_list.ObserverList$(dart.fnType(dart.void, [animation$.AnimationStatus])))
  }));
  const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
  (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ProxyAnimation = class ProxyAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
    get parent() {
      return this[_parent];
    }
    set parent(value) {
      if (dart.equals(value, this[_parent])) return;
      if (this[_parent] != null) {
        this[_status] = this[_parent].status;
        this[_value] = this[_parent].value;
        if (dart.test(this.isListening)) this.didStopListening();
      }
      this[_parent] = value;
      if (this[_parent] != null) {
        if (dart.test(this.isListening)) this.didStartListening();
        if (this[_value] != this[_parent].value) this.notifyListeners();
        if (!dart.equals(this[_status], this[_parent].status)) this.notifyStatusListeners(this[_parent].status);
        this[_status] = null;
        this[_value] = null;
      }
    }
    didStartListening() {
      if (this[_parent] != null) {
        this[_parent].addListener(dart.bind(this, 'notifyListeners'));
        this[_parent].addStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    didStopListening() {
      if (this[_parent] != null) {
        this[_parent].removeListener(dart.bind(this, 'notifyListeners'));
        this[_parent].removeStatusListener(dart.bind(this, 'notifyStatusListeners'));
      }
    }
    get status() {
      return this[_parent] != null ? this[_parent].status : this[_status];
    }
    get value() {
      return this[_parent] != null ? this[_parent].value : this[_value];
    }
    toString() {
      if (this.parent == null) return dart.str(this[$runtimeType]) + "(null; " + dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3) + ")";
      return dart.str(this.parent) + "➩" + dart.str(this[$runtimeType]);
    }
  };
  (animations.ProxyAnimation.new = function(animation) {
    if (animation === void 0) animation = null;
    this[_status] = null;
    this[_value] = null;
    this[_parent] = null;
    animations.ProxyAnimation.__proto__.new.call(this);
    this[_parent] = animation;
    if (this[_parent] == null) {
      this[_status] = animation$.AnimationStatus.dismissed;
      this[_value] = 0.0;
    }
  }).prototype = animations.ProxyAnimation.prototype;
  dart.addTypeTests(animations.ProxyAnimation);
  dart.setMethodSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getMethods(animations.ProxyAnimation.__proto__),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getGetters(animations.ProxyAnimation.__proto__),
    parent: animation$.Animation$(core.double),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setSetterSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getSetters(animations.ProxyAnimation.__proto__),
    parent: animation$.Animation$(core.double)
  }));
  dart.setLibraryUri(animations.ProxyAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.ProxyAnimation, () => ({
    __proto__: dart.getFields(animations.ProxyAnimation.__proto__),
    [_status]: dart.fieldType(animation$.AnimationStatus),
    [_value]: dart.fieldType(core.double),
    [_parent]: dart.fieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ProxyAnimation, ['toString']);
  const _statusChangeHandler = dart.privateName(animations, "_statusChangeHandler");
  const _reverseStatus = dart.privateName(animations, "_reverseStatus");
  const ReverseAnimation_parent = dart.privateName(animations, "ReverseAnimation.parent");
  const Animation_AnimationLazyListenerMixin$36$ = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationLazyListenerMixin$36$.new = function() {
    listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
    Animation_AnimationLazyListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLazyListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLazyListenerMixin$36$, listener_helpers.AnimationLazyListenerMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$ = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLazyListenerMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.ReverseAnimation = class ReverseAnimation extends Animation_AnimationLocalStatusListenersMixin$36$ {
    get parent() {
      return this[parent$];
    }
    set parent(value) {
      super.parent = value;
    }
    addListener(listener) {
      this.didRegisterListener();
      this.parent.addListener(listener);
    }
    removeListener(listener) {
      this.parent.removeListener(listener);
      this.didUnregisterListener();
    }
    didStartListening() {
      this.parent.addStatusListener(dart.bind(this, _statusChangeHandler));
    }
    didStopListening() {
      this.parent.removeStatusListener(dart.bind(this, _statusChangeHandler));
    }
    [_statusChangeHandler](status) {
      this.notifyStatusListeners(this[_reverseStatus](status));
    }
    get status() {
      return this[_reverseStatus](this.parent.status);
    }
    get value() {
      return 1.0 - dart.notNull(this.parent.value);
    }
    [_reverseStatus](status) {
      if (!(status != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 301, 12, "status != null");
      switch (status) {
        case C1 || CT.C1:
        {
          return animation$.AnimationStatus.reverse;
        }
        case C2 || CT.C2:
        {
          return animation$.AnimationStatus.forward;
        }
        case C3 || CT.C3:
        {
          return animation$.AnimationStatus.dismissed;
        }
        case C0 || CT.C0:
        {
          return animation$.AnimationStatus.completed;
        }
      }
      return null;
    }
    toString() {
      return dart.str(this.parent) + "➪" + dart.str(this[$runtimeType]);
    }
  };
  (animations.ReverseAnimation.new = function(parent) {
    this[parent$] = parent;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 263, 14, "parent != null");
    animations.ReverseAnimation.__proto__.new.call(this);
    ;
  }).prototype = animations.ReverseAnimation.prototype;
  dart.addTypeTests(animations.ReverseAnimation);
  const parent$ = ReverseAnimation_parent;
  dart.setMethodSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getMethods(animations.ReverseAnimation.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    didStartListening: dart.fnType(dart.void, []),
    didStopListening: dart.fnType(dart.void, []),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_reverseStatus]: dart.fnType(animation$.AnimationStatus, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getGetters(animations.ReverseAnimation.__proto__),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.ReverseAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.ReverseAnimation, () => ({
    __proto__: dart.getFields(animations.ReverseAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double))
  }));
  dart.defineExtensionMethods(animations.ReverseAnimation, ['toString']);
  const _curveDirection = dart.privateName(animations, "_curveDirection");
  const _updateCurveDirection = dart.privateName(animations, "_updateCurveDirection");
  const _useForwardCurve = dart.privateName(animations, "_useForwardCurve");
  const CurvedAnimation_parent = dart.privateName(animations, "CurvedAnimation.parent");
  const CurvedAnimation_curve = dart.privateName(animations, "CurvedAnimation.curve");
  const CurvedAnimation_reverseCurve = dart.privateName(animations, "CurvedAnimation.reverseCurve");
  const Animation_AnimationWithParentMixin$36 = class Animation_AnimationWithParentMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationWithParentMixin$36.new = function() {
    Animation_AnimationWithParentMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationWithParentMixin$36.prototype;
  dart.applyMixin(Animation_AnimationWithParentMixin$36, animations.AnimationWithParentMixin$(core.double));
  animations.CurvedAnimation = class CurvedAnimation extends Animation_AnimationWithParentMixin$36 {
    get parent() {
      return this[parent$0];
    }
    set parent(value) {
      super.parent = value;
    }
    get curve() {
      return this[curve$2];
    }
    set curve(value) {
      this[curve$2] = value;
    }
    get reverseCurve() {
      return this[reverseCurve$];
    }
    set reverseCurve(value) {
      this[reverseCurve$] = value;
    }
    [_updateCurveDirection](status) {
      switch (status) {
        case C0 || CT.C0:
        case C3 || CT.C3:
        {
          this[_curveDirection] = null;
          break;
        }
        case C1 || CT.C1:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.forward : null;
          break;
        }
        case C2 || CT.C2:
        {
          this[_curveDirection] == null ? this[_curveDirection] = animation$.AnimationStatus.reverse : null;
          break;
        }
      }
    }
    get [_useForwardCurve]() {
      let t2;
      return this.reverseCurve == null || !dart.equals((t2 = this[_curveDirection], t2 == null ? this.parent.status : t2), animation$.AnimationStatus.reverse);
    }
    get value() {
      let activeCurve = dart.test(this[_useForwardCurve]) ? this.curve : this.reverseCurve;
      let t = this.parent.value;
      if (activeCurve == null) return t;
      if (t === 0.0 || t === 1.0) {
        if (!dart.test(dart.fn(() => {
          let transformedValue = activeCurve.transform(t);
          let roundedTransformedValue = transformedValue[$round]()[$toDouble]();
          if (roundedTransformedValue !== t) {
            dart.throw(assertions.FlutterError.new("Invalid curve endpoint at " + dart.str(t) + ".\n" + "Curves must map 0.0 to near zero and 1.0 to near one but " + dart.str(dart.runtimeType(activeCurve)) + " mapped " + dart.str(t) + " to " + dart.str(transformedValue) + ", which " + "is near " + dart.str(roundedTransformedValue) + "."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 438, 14, "() {\n        final double transformedValue = activeCurve.transform(t);\n        final double roundedTransformedValue = transformedValue.round().toDouble();\n        if (roundedTransformedValue != t) {\n          throw FlutterError(\n            'Invalid curve endpoint at $t.\\n'\n            'Curves must map 0.0 to near zero and 1.0 to near one but '\n            '${activeCurve.runtimeType} mapped $t to $transformedValue, which '\n            'is near $roundedTransformedValue.'\n          );\n        }\n        return true;\n      }()");
        return t;
      }
      return activeCurve.transform(t);
    }
    toString() {
      if (this.reverseCurve == null) return dart.str(this.parent) + "➩" + dart.str(this.curve);
      if (dart.test(this[_useForwardCurve])) return dart.str(this.parent) + "➩" + dart.str(this.curve) + "ₒₙ/" + dart.str(this.reverseCurve);
      return dart.str(this.parent) + "➩" + dart.str(this.curve) + "/" + dart.str(this.reverseCurve) + "ₒₙ";
    }
  };
  (animations.CurvedAnimation.new = function(opts) {
    let parent = opts && 'parent' in opts ? opts.parent : null;
    let curve = opts && 'curve' in opts ? opts.curve : null;
    let reverseCurve = opts && 'reverseCurve' in opts ? opts.reverseCurve : null;
    this[_curveDirection] = null;
    this[parent$0] = parent;
    this[curve$2] = curve;
    this[reverseCurve$] = reverseCurve;
    if (!(parent != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 376, 15, "parent != null");
    if (!(curve != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 377, 15, "curve != null");
    animations.CurvedAnimation.__proto__.new.call(this);
    this[_updateCurveDirection](this.parent.status);
    this.parent.addStatusListener(dart.bind(this, _updateCurveDirection));
  }).prototype = animations.CurvedAnimation.prototype;
  dart.addTypeTests(animations.CurvedAnimation);
  const parent$0 = CurvedAnimation_parent;
  const curve$2 = CurvedAnimation_curve;
  const reverseCurve$ = CurvedAnimation_reverseCurve;
  dart.setMethodSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getMethods(animations.CurvedAnimation.__proto__),
    [_updateCurveDirection]: dart.fnType(dart.void, [animation$.AnimationStatus])
  }));
  dart.setGetterSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getGetters(animations.CurvedAnimation.__proto__),
    [_useForwardCurve]: core.bool,
    value: core.double
  }));
  dart.setLibraryUri(animations.CurvedAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.CurvedAnimation, () => ({
    __proto__: dart.getFields(animations.CurvedAnimation.__proto__),
    parent: dart.finalFieldType(animation$.Animation$(core.double)),
    curve: dart.fieldType(curves.Curve),
    reverseCurve: dart.fieldType(curves.Curve),
    [_curveDirection]: dart.fieldType(animation$.AnimationStatus)
  }));
  dart.defineExtensionMethods(animations.CurvedAnimation, ['toString']);
  const _name$0 = dart.privateName(animations, "_name");
  let C46;
  let C47;
  let C48;
  animations._TrainHoppingMode = class _TrainHoppingMode extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (animations._TrainHoppingMode.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = animations._TrainHoppingMode.prototype;
  dart.addTypeTests(animations._TrainHoppingMode);
  dart.setLibraryUri(animations._TrainHoppingMode, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations._TrainHoppingMode, () => ({
    __proto__: dart.getFields(animations._TrainHoppingMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animations._TrainHoppingMode, ['toString']);
  animations._TrainHoppingMode.minimize = C46 || CT.C46;
  animations._TrainHoppingMode.maximize = C47 || CT.C47;
  animations._TrainHoppingMode.values = C48 || CT.C48;
  const _mode = dart.privateName(animations, "_mode");
  const _lastStatus = dart.privateName(animations, "_lastStatus");
  const _lastValue = dart.privateName(animations, "_lastValue");
  const _currentTrain$ = dart.privateName(animations, "_currentTrain");
  const _nextTrain$ = dart.privateName(animations, "_nextTrain");
  const _valueChangeHandler = dart.privateName(animations, "_valueChangeHandler");
  listener_helpers.AnimationEagerListenerMixin = class AnimationEagerListenerMixin extends core.Object {};
  listener_helpers.AnimationEagerListenerMixin[dart.mixinOn] = Object => class AnimationEagerListenerMixin extends Object {
    didRegisterListener() {
    }
    didUnregisterListener() {
    }
    dispose() {
    }
  };
  (listener_helpers.AnimationEagerListenerMixin[dart.mixinNew] = function() {
  }).prototype = listener_helpers.AnimationEagerListenerMixin.prototype;
  dart.addTypeTests(listener_helpers.AnimationEagerListenerMixin);
  listener_helpers.AnimationEagerListenerMixin[dart.implements] = () => [core.Object];
  dart.setMethodSignature(listener_helpers.AnimationEagerListenerMixin, () => ({
    __proto__: dart.getMethods(listener_helpers.AnimationEagerListenerMixin.__proto__),
    didRegisterListener: dart.fnType(dart.void, []),
    didUnregisterListener: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(listener_helpers.AnimationEagerListenerMixin, "package:flutter/src/animation/listener_helpers.dart");
  const TrainHoppingAnimation_onSwitchedTrain = dart.privateName(animations, "TrainHoppingAnimation.onSwitchedTrain");
  const Animation_AnimationEagerListenerMixin$36 = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36.new = function() {
    Animation_AnimationEagerListenerMixin$36.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$ = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36 {};
  (Animation_AnimationLocalListenersMixin$36$.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$0 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$ {};
  (Animation_AnimationLocalStatusListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$0, listener_helpers.AnimationLocalStatusListenersMixin);
  animations.TrainHoppingAnimation = class TrainHoppingAnimation extends Animation_AnimationLocalStatusListenersMixin$36$0 {
    get onSwitchedTrain() {
      return this[onSwitchedTrain$];
    }
    set onSwitchedTrain(value) {
      this[onSwitchedTrain$] = value;
    }
    get currentTrain() {
      return this[_currentTrain$];
    }
    [_statusChangeHandler](status) {
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 531, 12, "_currentTrain != null");
      if (!dart.equals(status, this[_lastStatus])) {
        this.notifyListeners();
        this[_lastStatus] = status;
      }
      if (!(this[_lastStatus] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 536, 12, "_lastStatus != null");
    }
    get status() {
      return this[_currentTrain$].status;
    }
    [_valueChangeHandler]() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 544, 12, "_currentTrain != null");
      let hop = false;
      if (this[_nextTrain$] != null) {
        if (!(this[_mode] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 547, 14, "_mode != null");
        switch (this[_mode]) {
          case C46 || CT.C46:
          {
            hop = dart.notNull(this[_nextTrain$].value) <= dart.notNull(this[_currentTrain$].value);
            break;
          }
          case C47 || CT.C47:
          {
            hop = dart.notNull(this[_nextTrain$].value) >= dart.notNull(this[_currentTrain$].value);
            break;
          }
        }
        if (hop) {
          t2 = this[_currentTrain$];
          t2.removeStatusListener(dart.bind(this, _statusChangeHandler));
          t2.removeListener(dart.bind(this, _valueChangeHandler));
          t2;
          this[_currentTrain$] = this[_nextTrain$];
          this[_nextTrain$] = null;
          this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
          this[_statusChangeHandler](this[_currentTrain$].status);
        }
      }
      let newValue = this.value;
      if (newValue != this[_lastValue]) {
        this.notifyListeners();
        this[_lastValue] = newValue;
      }
      if (!(this[_lastValue] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 571, 12, "_lastValue != null");
      if (hop && this.onSwitchedTrain != null) this.onSwitchedTrain();
    }
    get value() {
      return this[_currentTrain$].value;
    }
    dispose() {
      let t2;
      if (!(this[_currentTrain$] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 583, 12, "_currentTrain != null");
      this[_currentTrain$].removeStatusListener(dart.bind(this, _statusChangeHandler));
      this[_currentTrain$].removeListener(dart.bind(this, _valueChangeHandler));
      this[_currentTrain$] = null;
      t2 = this[_nextTrain$];
      t2 == null ? null : t2.removeListener(dart.bind(this, _valueChangeHandler));
      this[_nextTrain$] = null;
      super.dispose();
    }
    toString() {
      if (this[_nextTrain$] != null) return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(next: " + dart.str(this[_nextTrain$]) + ")";
      return dart.str(this.currentTrain) + "➩" + dart.str(this[$runtimeType]) + "(no next)";
    }
  };
  (animations.TrainHoppingAnimation.new = function(_currentTrain, _nextTrain, opts) {
    let t2;
    let onSwitchedTrain = opts && 'onSwitchedTrain' in opts ? opts.onSwitchedTrain : null;
    this[_mode] = null;
    this[_lastStatus] = null;
    this[_lastValue] = null;
    this[_currentTrain$] = _currentTrain;
    this[_nextTrain$] = _nextTrain;
    this[onSwitchedTrain$] = onSwitchedTrain;
    if (!(_currentTrain != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 495, 16, "_currentTrain != null");
    animations.TrainHoppingAnimation.__proto__.new.call(this);
    if (this[_nextTrain$] != null) {
      if (this[_currentTrain$].value == this[_nextTrain$].value) {
        this[_currentTrain$] = this[_nextTrain$];
        this[_nextTrain$] = null;
      } else if (dart.notNull(this[_currentTrain$].value) > dart.notNull(this[_nextTrain$].value)) {
        this[_mode] = animations._TrainHoppingMode.maximize;
      } else {
        if (!(dart.notNull(this[_currentTrain$].value) < dart.notNull(this[_nextTrain$].value))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 503, 16, "_currentTrain.value < _nextTrain.value");
        this[_mode] = animations._TrainHoppingMode.minimize;
      }
    }
    this[_currentTrain$].addStatusListener(dart.bind(this, _statusChangeHandler));
    this[_currentTrain$].addListener(dart.bind(this, _valueChangeHandler));
    t2 = this[_nextTrain$];
    t2 == null ? null : t2.addListener(dart.bind(this, _valueChangeHandler));
    if (!(this[_mode] != null || this[_nextTrain$] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 510, 12, "_mode != null || _nextTrain == null");
  }).prototype = animations.TrainHoppingAnimation.prototype;
  dart.addTypeTests(animations.TrainHoppingAnimation);
  const onSwitchedTrain$ = TrainHoppingAnimation_onSwitchedTrain;
  dart.setMethodSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getMethods(animations.TrainHoppingAnimation.__proto__),
    [_statusChangeHandler]: dart.fnType(dart.void, [animation$.AnimationStatus]),
    [_valueChangeHandler]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getGetters(animations.TrainHoppingAnimation.__proto__),
    currentTrain: animation$.Animation$(core.double),
    status: animation$.AnimationStatus,
    value: core.double
  }));
  dart.setLibraryUri(animations.TrainHoppingAnimation, "package:flutter/src/animation/animations.dart");
  dart.setFieldSignature(animations.TrainHoppingAnimation, () => ({
    __proto__: dart.getFields(animations.TrainHoppingAnimation.__proto__),
    [_currentTrain$]: dart.fieldType(animation$.Animation$(core.double)),
    [_nextTrain$]: dart.fieldType(animation$.Animation$(core.double)),
    [_mode]: dart.fieldType(animations._TrainHoppingMode),
    onSwitchedTrain: dart.fieldType(dart.fnType(dart.void, [])),
    [_lastStatus]: dart.fieldType(animation$.AnimationStatus),
    [_lastValue]: dart.fieldType(core.double)
  }));
  dart.defineExtensionMethods(animations.TrainHoppingAnimation, ['toString']);
  const _maybeNotifyListeners = dart.privateName(animations, "_maybeNotifyListeners");
  const _maybeNotifyStatusListeners = dart.privateName(animations, "_maybeNotifyStatusListeners");
  const _is_CompoundAnimation_default = Symbol('_is_CompoundAnimation_default');
  const CompoundAnimation_first = dart.privateName(animations, "CompoundAnimation.first");
  const CompoundAnimation_next = dart.privateName(animations, "CompoundAnimation.next");
  animations.CompoundAnimation$ = dart.generic(T => {
    const Animation_AnimationLazyListenerMixin$36 = class Animation_AnimationLazyListenerMixin extends animation$.Animation$(T) {};
    (Animation_AnimationLazyListenerMixin$36.new = function() {
      listener_helpers.AnimationLazyListenerMixin[dart.mixinNew].call(this);
      Animation_AnimationLazyListenerMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLazyListenerMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLazyListenerMixin$36, listener_helpers.AnimationLazyListenerMixin);
    const Animation_AnimationLocalListenersMixin$36 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationLazyListenerMixin$36 {};
    (Animation_AnimationLocalListenersMixin$36.new = function() {
      listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalListenersMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalListenersMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLocalListenersMixin$36, listener_helpers.AnimationLocalListenersMixin);
    const Animation_AnimationLocalStatusListenersMixin$36 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36 {};
    (Animation_AnimationLocalStatusListenersMixin$36.new = function() {
      listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
      Animation_AnimationLocalStatusListenersMixin$36.__proto__.new.call(this);
    }).prototype = Animation_AnimationLocalStatusListenersMixin$36.prototype;
    dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36, listener_helpers.AnimationLocalStatusListenersMixin);
    class CompoundAnimation extends Animation_AnimationLocalStatusListenersMixin$36 {
      get first() {
        return this[first$];
      }
      set first(value) {
        super.first = value;
      }
      get next() {
        return this[next$];
      }
      set next(value) {
        super.next = value;
      }
      didStartListening() {
        this.first.addListener(dart.bind(this, _maybeNotifyListeners));
        this.first.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.addListener(dart.bind(this, _maybeNotifyListeners));
        this.next.addStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      didStopListening() {
        this.first.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.first.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
        this.next.removeListener(dart.bind(this, _maybeNotifyListeners));
        this.next.removeStatusListener(dart.bind(this, _maybeNotifyStatusListeners));
      }
      get status() {
        if (dart.equals(this.next.status, animation$.AnimationStatus.forward) || dart.equals(this.next.status, animation$.AnimationStatus.reverse)) return this.next.status;
        return this.first.status;
      }
      toString() {
        return dart.str(this[$runtimeType]) + "(" + dart.str(this.first) + ", " + dart.str(this.next) + ")";
      }
      [_maybeNotifyStatusListeners](_) {
        if (!dart.equals(this.status, this[_lastStatus])) {
          this[_lastStatus] = this.status;
          this.notifyStatusListeners(this.status);
        }
      }
      [_maybeNotifyListeners]() {
        if (!dart.equals(this.value, this[_lastValue])) {
          this[_lastValue] = this.value;
          this.notifyListeners();
        }
      }
    }
    (CompoundAnimation.new = function(opts) {
      let first = opts && 'first' in opts ? opts.first : null;
      let next = opts && 'next' in opts ? opts.next : null;
      this[_lastStatus] = null;
      this[_lastValue] = null;
      this[first$] = first;
      this[next$] = next;
      if (!(first != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 617, 15, "first != null");
      if (!(next != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animations.dart", 618, 15, "next != null");
      CompoundAnimation.__proto__.new.call(this);
      ;
    }).prototype = CompoundAnimation.prototype;
    dart.addTypeTests(CompoundAnimation);
    CompoundAnimation.prototype[_is_CompoundAnimation_default] = true;
    const first$ = CompoundAnimation_first;
    const next$ = CompoundAnimation_next;
    dart.setMethodSignature(CompoundAnimation, () => ({
      __proto__: dart.getMethods(CompoundAnimation.__proto__),
      didStartListening: dart.fnType(dart.void, []),
      didStopListening: dart.fnType(dart.void, []),
      [_maybeNotifyStatusListeners]: dart.fnType(dart.void, [animation$.AnimationStatus]),
      [_maybeNotifyListeners]: dart.fnType(dart.void, [])
    }));
    dart.setGetterSignature(CompoundAnimation, () => ({
      __proto__: dart.getGetters(CompoundAnimation.__proto__),
      status: animation$.AnimationStatus
    }));
    dart.setLibraryUri(CompoundAnimation, "package:flutter/src/animation/animations.dart");
    dart.setFieldSignature(CompoundAnimation, () => ({
      __proto__: dart.getFields(CompoundAnimation.__proto__),
      first: dart.finalFieldType(animation$.Animation$(T)),
      next: dart.finalFieldType(animation$.Animation$(T)),
      [_lastStatus]: dart.fieldType(animation$.AnimationStatus),
      [_lastValue]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(CompoundAnimation, ['toString']);
    return CompoundAnimation;
  });
  animations.CompoundAnimation = animations.CompoundAnimation$();
  dart.addTypeTests(animations.CompoundAnimation, _is_CompoundAnimation_default);
  animations.AnimationMean = class AnimationMean extends animations.CompoundAnimation$(core.double) {
    get value() {
      return (dart.notNull(this.first.value) + dart.notNull(this.next.value)) / 2.0;
    }
  };
  (animations.AnimationMean.new = function(opts) {
    let left = opts && 'left' in opts ? opts.left : null;
    let right = opts && 'right' in opts ? opts.right : null;
    animations.AnimationMean.__proto__.new.call(this, {first: left, next: right});
    ;
  }).prototype = animations.AnimationMean.prototype;
  dart.addTypeTests(animations.AnimationMean);
  dart.setGetterSignature(animations.AnimationMean, () => ({
    __proto__: dart.getGetters(animations.AnimationMean.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animations.AnimationMean, "package:flutter/src/animation/animations.dart");
  const _is_AnimationMax_default = Symbol('_is_AnimationMax_default');
  animations.AnimationMax$ = dart.generic(T => {
    class AnimationMax extends animations.CompoundAnimation$(T) {
      get value() {
        return math.max(T, this.first.value, this.next.value);
      }
    }
    (AnimationMax.new = function(first, next) {
      AnimationMax.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMax.prototype;
    dart.addTypeTests(AnimationMax);
    AnimationMax.prototype[_is_AnimationMax_default] = true;
    dart.setGetterSignature(AnimationMax, () => ({
      __proto__: dart.getGetters(AnimationMax.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMax, "package:flutter/src/animation/animations.dart");
    return AnimationMax;
  });
  animations.AnimationMax = animations.AnimationMax$();
  dart.addTypeTests(animations.AnimationMax, _is_AnimationMax_default);
  const _is_AnimationMin_default = Symbol('_is_AnimationMin_default');
  animations.AnimationMin$ = dart.generic(T => {
    class AnimationMin extends animations.CompoundAnimation$(T) {
      get value() {
        return math.min(T, this.first.value, this.next.value);
      }
    }
    (AnimationMin.new = function(first, next) {
      AnimationMin.__proto__.new.call(this, {first: first, next: next});
      ;
    }).prototype = AnimationMin.prototype;
    dart.addTypeTests(AnimationMin);
    AnimationMin.prototype[_is_AnimationMin_default] = true;
    dart.setGetterSignature(AnimationMin, () => ({
      __proto__: dart.getGetters(AnimationMin.__proto__),
      value: T
    }));
    dart.setLibraryUri(AnimationMin, "package:flutter/src/animation/animations.dart");
    return AnimationMin;
  });
  animations.AnimationMin = animations.AnimationMin$();
  dart.addTypeTests(animations.AnimationMin, _is_AnimationMin_default);
  let C49;
  let C50;
  dart.defineLazy(animations, {
    /*animations.kAlwaysCompleteAnimation*/get kAlwaysCompleteAnimation() {
      return C49 || CT.C49;
    },
    /*animations.kAlwaysDismissedAnimation*/get kAlwaysDismissedAnimation() {
      return C50 || CT.C50;
    }
  });
  const _items = dart.privateName(tween_sequence, "_items");
  const _intervals = dart.privateName(tween_sequence, "_intervals");
  const _evaluateAt = dart.privateName(tween_sequence, "_evaluateAt");
  const _is_TweenSequence_default = Symbol('_is_TweenSequence_default');
  tween_sequence.TweenSequence$ = dart.generic(T => {
    let TweenSequenceItemOfT = () => (TweenSequenceItemOfT = dart.constFn(tween_sequence.TweenSequenceItem$(T)))();
    let JSArrayOfTweenSequenceItemOfT = () => (JSArrayOfTweenSequenceItemOfT = dart.constFn(_interceptors.JSArray$(TweenSequenceItemOfT())))();
    class TweenSequence extends tween.Animatable$(T) {
      [_evaluateAt](t, index) {
        let element = this[_items][$_get](index);
        let tInterval = this[_intervals][$_get](index).value(t);
        return element.tween.transform(tInterval);
      }
      transform(t) {
        if (!(dart.notNull(t) >= 0.0 && dart.notNull(t) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 83, 12, "t >= 0.0 && t <= 1.0");
        if (t === 1.0) return this[_evaluateAt](t, dart.notNull(this[_items][$length]) - 1);
        for (let index = 0; index < dart.notNull(this[_items][$length]); index = index + 1) {
          if (dart.test(this[_intervals][$_get](index).contains(t))) return this[_evaluateAt](t, index);
        }
        if (!false) dart.assertFailed("TweenSequence.evaluate() could not find a interval for " + dart.str(t), "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 91, 12, "false");
        return null;
      }
      toString() {
        return "TweenSequence(" + dart.str(this[_items][$length]) + " items)";
      }
    }
    (TweenSequence.new = function(items) {
      this[_items] = JSArrayOfTweenSequenceItemOfT().of([]);
      this[_intervals] = JSArrayOf_Interval().of([]);
      if (!(items != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 55, 16, "items != null");
      if (!dart.test(items[$isNotEmpty])) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 56, 16, "items.isNotEmpty");
      TweenSequence.__proto__.new.call(this);
      this[_items][$addAll](items);
      let totalWeight = 0.0;
      for (let item of this[_items])
        totalWeight = totalWeight + dart.notNull(item.weight);
      if (!(totalWeight > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 62, 12, "totalWeight > 0.0");
      let start = 0.0;
      for (let i = 0; i < dart.notNull(this[_items][$length]); i = i + 1) {
        let end = i === dart.notNull(this[_items][$length]) - 1 ? 1.0 : start + dart.notNull(this[_items][$_get](i).weight) / totalWeight;
        this[_intervals][$add](new tween_sequence._Interval.new(start, end));
        start = end;
      }
    }).prototype = TweenSequence.prototype;
    dart.addTypeTests(TweenSequence);
    TweenSequence.prototype[_is_TweenSequence_default] = true;
    dart.setMethodSignature(TweenSequence, () => ({
      __proto__: dart.getMethods(TweenSequence.__proto__),
      [_evaluateAt]: dart.fnType(T, [core.double, core.int]),
      transform: dart.fnType(T, [core.double])
    }));
    dart.setLibraryUri(TweenSequence, "package:flutter/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequence, () => ({
      __proto__: dart.getFields(TweenSequence.__proto__),
      [_items]: dart.finalFieldType(core.List$(tween_sequence.TweenSequenceItem$(T))),
      [_intervals]: dart.finalFieldType(core.List$(tween_sequence._Interval))
    }));
    dart.defineExtensionMethods(TweenSequence, ['toString']);
    return TweenSequence;
  });
  tween_sequence.TweenSequence = tween_sequence.TweenSequence$();
  dart.addTypeTests(tween_sequence.TweenSequence, _is_TweenSequence_default);
  const _is_TweenSequenceItem_default = Symbol('_is_TweenSequenceItem_default');
  const TweenSequenceItem_tween = dart.privateName(tween_sequence, "TweenSequenceItem.tween");
  const TweenSequenceItem_weight = dart.privateName(tween_sequence, "TweenSequenceItem.weight");
  tween_sequence.TweenSequenceItem$ = dart.generic(T => {
    class TweenSequenceItem extends core.Object {
      get tween() {
        return this[tween$];
      }
      set tween(value) {
        super.tween = value;
      }
      get weight() {
        return this[weight$];
      }
      set weight(value) {
        super.weight = value;
      }
    }
    (TweenSequenceItem.new = function(opts) {
      let tween = opts && 'tween' in opts ? opts.tween : null;
      let weight = opts && 'weight' in opts ? opts.weight : null;
      this[tween$] = tween;
      this[weight$] = weight;
      if (!(tween != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 107, 15, "tween != null");
      if (!(weight != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 108, 15, "weight != null");
      if (!(dart.notNull(weight) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 109, 15, "weight > 0.0");
      ;
    }).prototype = TweenSequenceItem.prototype;
    dart.addTypeTests(TweenSequenceItem);
    TweenSequenceItem.prototype[_is_TweenSequenceItem_default] = true;
    const tween$ = TweenSequenceItem_tween;
    const weight$ = TweenSequenceItem_weight;
    dart.setLibraryUri(TweenSequenceItem, "package:flutter/src/animation/tween_sequence.dart");
    dart.setFieldSignature(TweenSequenceItem, () => ({
      __proto__: dart.getFields(TweenSequenceItem.__proto__),
      tween: dart.finalFieldType(tween.Animatable$(T)),
      weight: dart.finalFieldType(core.double)
    }));
    return TweenSequenceItem;
  });
  tween_sequence.TweenSequenceItem = tween_sequence.TweenSequenceItem$();
  dart.addTypeTests(tween_sequence.TweenSequenceItem, _is_TweenSequenceItem_default);
  const _Interval_start = dart.privateName(tween_sequence, "_Interval.start");
  const _Interval_end = dart.privateName(tween_sequence, "_Interval.end");
  tween_sequence._Interval = class _Interval extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$0];
    }
    set end(value) {
      super.end = value;
    }
    contains(t) {
      return dart.notNull(t) >= dart.notNull(this.start) && dart.notNull(t) < dart.notNull(this.end);
    }
    value(t) {
      return (dart.notNull(t) - dart.notNull(this.start)) / (dart.notNull(this.end) - dart.notNull(this.start));
    }
    toString() {
      return "<" + dart.str(this.start) + ", " + dart.str(this.end) + ">";
    }
  };
  (tween_sequence._Interval.new = function(start, end) {
    this[start$] = start;
    this[end$0] = end;
    if (!(dart.notNull(end) > dart.notNull(start))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/tween_sequence.dart", 136, 50, "end > start");
    ;
  }).prototype = tween_sequence._Interval.prototype;
  dart.addTypeTests(tween_sequence._Interval);
  const start$ = _Interval_start;
  const end$0 = _Interval_end;
  dart.setMethodSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getMethods(tween_sequence._Interval.__proto__),
    contains: dart.fnType(core.bool, [core.double]),
    value: dart.fnType(core.double, [core.double])
  }));
  dart.setLibraryUri(tween_sequence._Interval, "package:flutter/src/animation/tween_sequence.dart");
  dart.setFieldSignature(tween_sequence._Interval, () => ({
    __proto__: dart.getFields(tween_sequence._Interval.__proto__),
    start: dart.finalFieldType(core.double),
    end: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(tween_sequence._Interval, ['toString']);
  const _name$1 = dart.privateName(animation_controller, "_name");
  let C51;
  let C52;
  let C53;
  animation_controller._AnimationDirection = class _AnimationDirection extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (animation_controller._AnimationDirection.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = animation_controller._AnimationDirection.prototype;
  dart.addTypeTests(animation_controller._AnimationDirection);
  dart.setLibraryUri(animation_controller._AnimationDirection, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._AnimationDirection, () => ({
    __proto__: dart.getFields(animation_controller._AnimationDirection.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller._AnimationDirection, ['toString']);
  animation_controller._AnimationDirection.forward = C51 || CT.C51;
  animation_controller._AnimationDirection.reverse = C52 || CT.C52;
  animation_controller._AnimationDirection.values = C53 || CT.C53;
  let C54;
  let C55;
  let C56;
  animation_controller.AnimationBehavior = class AnimationBehavior extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (animation_controller.AnimationBehavior.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = animation_controller.AnimationBehavior.prototype;
  dart.addTypeTests(animation_controller.AnimationBehavior);
  dart.setLibraryUri(animation_controller.AnimationBehavior, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller.AnimationBehavior, () => ({
    __proto__: dart.getFields(animation_controller.AnimationBehavior.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(animation_controller.AnimationBehavior, ['toString']);
  animation_controller.AnimationBehavior.normal = C54 || CT.C54;
  animation_controller.AnimationBehavior.preserve = C55 || CT.C55;
  animation_controller.AnimationBehavior.values = C56 || CT.C56;
  const _ticker = dart.privateName(animation_controller, "_ticker");
  const _simulation = dart.privateName(animation_controller, "_simulation");
  const _value$ = dart.privateName(animation_controller, "_value");
  const _lastElapsedDuration = dart.privateName(animation_controller, "_lastElapsedDuration");
  const _status$ = dart.privateName(animation_controller, "_status");
  const _lastReportedStatus = dart.privateName(animation_controller, "_lastReportedStatus");
  const _direction = dart.privateName(animation_controller, "_direction");
  const _tick = dart.privateName(animation_controller, "_tick");
  const _internalSetValue = dart.privateName(animation_controller, "_internalSetValue");
  const _checkStatusChanged = dart.privateName(animation_controller, "_checkStatusChanged");
  const _animateToInternal = dart.privateName(animation_controller, "_animateToInternal");
  const _startSimulation = dart.privateName(animation_controller, "_startSimulation");
  const _directionSetter = dart.privateName(animation_controller, "_directionSetter");
  const AnimationController_lowerBound = dart.privateName(animation_controller, "AnimationController.lowerBound");
  const AnimationController_upperBound = dart.privateName(animation_controller, "AnimationController.upperBound");
  const AnimationController_debugLabel = dart.privateName(animation_controller, "AnimationController.debugLabel");
  const AnimationController_animationBehavior = dart.privateName(animation_controller, "AnimationController.animationBehavior");
  const AnimationController_duration = dart.privateName(animation_controller, "AnimationController.duration");
  const AnimationController_reverseDuration = dart.privateName(animation_controller, "AnimationController.reverseDuration");
  const Animation_AnimationEagerListenerMixin$36$ = class Animation_AnimationEagerListenerMixin extends animation$.Animation$(core.double) {};
  (Animation_AnimationEagerListenerMixin$36$.new = function() {
    Animation_AnimationEagerListenerMixin$36$.__proto__.new.call(this);
  }).prototype = Animation_AnimationEagerListenerMixin$36$.prototype;
  dart.applyMixin(Animation_AnimationEagerListenerMixin$36$, listener_helpers.AnimationEagerListenerMixin);
  const Animation_AnimationLocalListenersMixin$36$0 = class Animation_AnimationLocalListenersMixin extends Animation_AnimationEagerListenerMixin$36$ {};
  (Animation_AnimationLocalListenersMixin$36$0.new = function() {
    listener_helpers.AnimationLocalListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalListenersMixin$36$0.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalListenersMixin$36$0.prototype;
  dart.applyMixin(Animation_AnimationLocalListenersMixin$36$0, listener_helpers.AnimationLocalListenersMixin);
  const Animation_AnimationLocalStatusListenersMixin$36$1 = class Animation_AnimationLocalStatusListenersMixin extends Animation_AnimationLocalListenersMixin$36$0 {};
  (Animation_AnimationLocalStatusListenersMixin$36$1.new = function() {
    listener_helpers.AnimationLocalStatusListenersMixin[dart.mixinNew].call(this);
    Animation_AnimationLocalStatusListenersMixin$36$1.__proto__.new.call(this);
  }).prototype = Animation_AnimationLocalStatusListenersMixin$36$1.prototype;
  dart.applyMixin(Animation_AnimationLocalStatusListenersMixin$36$1, listener_helpers.AnimationLocalStatusListenersMixin);
  animation_controller.AnimationController = class AnimationController extends Animation_AnimationLocalStatusListenersMixin$36$1 {
    get lowerBound() {
      return this[lowerBound$];
    }
    set lowerBound(value) {
      super.lowerBound = value;
    }
    get upperBound() {
      return this[upperBound$];
    }
    set upperBound(value) {
      super.upperBound = value;
    }
    get debugLabel() {
      return this[debugLabel$];
    }
    set debugLabel(value) {
      super.debugLabel = value;
    }
    get animationBehavior() {
      return this[animationBehavior$];
    }
    set animationBehavior(value) {
      super.animationBehavior = value;
    }
    get duration() {
      return this[duration$];
    }
    set duration(value) {
      this[duration$] = value;
    }
    get reverseDuration() {
      return this[reverseDuration$];
    }
    set reverseDuration(value) {
      this[reverseDuration$] = value;
    }
    get view() {
      return this;
    }
    resync(vsync) {
      let oldTicker = this[_ticker];
      this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
      this[_ticker].absorbTicker(oldTicker);
    }
    get value() {
      return this[_value$];
    }
    set value(newValue) {
      if (!(newValue != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 359, 12, "newValue != null");
      this.stop();
      this[_internalSetValue](newValue);
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    reset() {
      this.value = this.lowerBound;
    }
    get velocity() {
      if (!dart.test(this.isAnimating)) return 0.0;
      return this[_simulation].dx(this.lastElapsedDuration.inMicroseconds[$toDouble]() / 1000000);
    }
    [_internalSetValue](newValue) {
      this[_value$] = newValue[$clamp](this.lowerBound, this.upperBound);
      if (this[_value$] == this.lowerBound) {
        this[_status$] = animation$.AnimationStatus.dismissed;
      } else if (this[_value$] == this.upperBound) {
        this[_status$] = animation$.AnimationStatus.completed;
      } else {
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      }
    }
    get lastElapsedDuration() {
      return this[_lastElapsedDuration];
    }
    get isAnimating() {
      return this[_ticker] != null && dart.test(this[_ticker].isActive);
    }
    get status() {
      return this[_status$];
    }
    forward(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.forward() called with no default duration.\n" + "The \"duration\" property should be set, either in the constructor or later, before " + "calling the forward() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 440, 12, "() {\n      if (duration == null) {\n        throw FlutterError(\n          'AnimationController.forward() called with no default duration.\\n'\n          'The \"duration\" property should be set, either in the constructor or later, before '\n          'calling the forward() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.forward() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 451, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.upperBound);
    }
    reverse(opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      if (!dart.test(dart.fn(() => {
        if (this.duration == null && this.reverseDuration == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.reverse() called with no default duration or reverseDuration.\n" + "The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the reverse() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 473, 12, "() {\n      if (duration == null && reverseDuration == null) {\n        throw FlutterError(\n          'AnimationController.reverse() called with no default duration or reverseDuration.\\n'\n          'The \"duration\" or \"reverseDuration\" property should be set, either in the constructor or later, before '\n          'calling the reverse() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.reverse() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 484, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      if (from != null) this.value = from;
      return this[_animateToInternal](this.lowerBound);
    }
    animateTo(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateTo() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 508, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    animateBack(target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateBack() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 530, 7, "_ticker != null");
      this[_direction] = animation_controller._AnimationDirection.reverse;
      return this[_animateToInternal](target, {duration: duration, curve: curve});
    }
    [_animateToInternal](target, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : C5 || CT.C5;
      let scale = 1.0;
      if (dart.test(binding.SemanticsBinding.instance.disableAnimations)) {
        switch (this.animationBehavior) {
          case C54 || CT.C54:
          {
            scale = 0.05;
            break;
          }
          case C55 || CT.C55:
          {
            break;
          }
        }
      }
      let simulationDuration = duration;
      if (simulationDuration == null) {
        if (!dart.test(dart.fn(() => {
          if (this.duration == null && dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration == null || this.duration == null) {
            dart.throw(assertions.FlutterError.new("AnimationController.animateTo() called with no explicit duration and no default duration or reverseDuration.\n" + "Either the \"duration\" argument to the animateTo() method should be provided, or the " + "\"duration\" and/or \"reverseDuration\" property should be set, either in the constructor or later, before " + "calling the animateTo() function."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 554, 14, "() {\n        if ((this.duration == null && _direction == _AnimationDirection.reverse && reverseDuration == null) || this.duration == null) {\n          throw FlutterError(\n            'AnimationController.animateTo() called with no explicit duration and no default duration or reverseDuration.\\n'\n            'Either the \"duration\" argument to the animateTo() method should be provided, or the '\n            '\"duration\" and/or \"reverseDuration\" property should be set, either in the constructor or later, before '\n            'calling the animateTo() function.'\n          );\n        }\n        return true;\n      }()");
        let range = dart.notNull(this.upperBound) - dart.notNull(this.lowerBound);
        let remainingFraction = range[$isFinite] ? (dart.notNull(target) - dart.notNull(this[_value$]))[$abs]() / range : 1.0;
        let directionDuration = dart.equals(this[_direction], animation_controller._AnimationDirection.reverse) && this.reverseDuration != null ? this.reverseDuration : this.duration;
        simulationDuration = directionDuration['*'](remainingFraction);
      } else if (target == this.value) {
        simulationDuration = core.Duration.zero;
      }
      this.stop();
      if (dart.equals(simulationDuration, core.Duration.zero)) {
        if (this.value != target) {
          this[_value$] = target[$clamp](this.lowerBound, this.upperBound);
          this.notifyListeners();
        }
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.completed : animation$.AnimationStatus.dismissed;
        this[_checkStatusChanged]();
        return new ticker.TickerFuture.complete();
      }
      if (!dart.test(simulationDuration['>'](core.Duration.zero))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 588, 12, "simulationDuration > Duration.zero");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 589, 12, "!isAnimating");
      return this[_startSimulation](new animation_controller._InterpolationSimulation.new(this[_value$], target, simulationDuration, curve, scale));
    }
    repeat(opts) {
      let min = opts && 'min' in opts ? opts.min : null;
      let max = opts && 'max' in opts ? opts.max : null;
      let reverse = opts && 'reverse' in opts ? opts.reverse : false;
      let period = opts && 'period' in opts ? opts.period : null;
      min == null ? min = this.lowerBound : null;
      max == null ? max = this.upperBound : null;
      period == null ? period = this.duration : null;
      if (!dart.test(dart.fn(() => {
        if (period == null) {
          dart.throw(assertions.FlutterError.new("AnimationController.repeat() called without an explicit period and with no default Duration.\n" + "Either the \"period\" argument to the repeat() method should be provided, or the " + "\"duration\" property should be set, either in the constructor or later, before " + "calling the repeat() function."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 614, 12, "() {\n      if (period == null) {\n        throw FlutterError(\n          'AnimationController.repeat() called without an explicit period and with no default Duration.\\n'\n          'Either the \"period\" argument to the repeat() method should be provided, or the '\n          '\"duration\" property should be set, either in the constructor or later, before '\n          'calling the repeat() function.'\n        );\n      }\n      return true;\n    }()");
      if (!(dart.notNull(max) >= dart.notNull(min))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 625, 12, "max >= min");
      if (!(dart.notNull(max) <= dart.notNull(this.upperBound) && dart.notNull(min) >= dart.notNull(this.lowerBound))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 626, 12, "max <= upperBound && min >= lowerBound");
      if (!(reverse != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 627, 12, "reverse != null");
      this.stop();
      return this[_startSimulation](new animation_controller._RepeatingSimulation.new(this[_value$], min, max, reverse, period, dart.bind(this, _directionSetter)));
    }
    [_directionSetter](direction) {
      this[_direction] = direction;
      this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      this[_checkStatusChanged]();
    }
    fling(opts) {
      let t2, t2$;
      let velocity = opts && 'velocity' in opts ? opts.velocity : 1;
      let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : null;
      this[_direction] = dart.notNull(velocity) < 0.0 ? animation_controller._AnimationDirection.reverse : animation_controller._AnimationDirection.forward;
      let target = dart.notNull(velocity) < 0.0 ? dart.notNull(this.lowerBound) - dart.notNull(animation_controller._kFlingTolerance.distance) : dart.notNull(this.upperBound) + dart.notNull(animation_controller._kFlingTolerance.distance);
      let scale = 1.0;
      let behavior = (t2 = animationBehavior, t2 == null ? this.animationBehavior : t2);
      if (dart.test(binding.SemanticsBinding.instance.disableAnimations)) {
        switch (behavior) {
          case C54 || CT.C54:
          {
            scale = 200.0;
            break;
          }
          case C55 || CT.C55:
          {
            break;
          }
        }
      }
      let simulation = (t2$ = new spring_simulation.SpringSimulation.new(animation_controller._kFlingSpringDescription, this.value, target, dart.notNull(velocity) * scale), t2$.tolerance = animation_controller._kFlingTolerance, t2$);
      this.stop();
      return this[_startSimulation](simulation);
    }
    animateWith(simulation) {
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.animateWith() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 686, 7, "_ticker != null");
      this.stop();
      this[_direction] = animation_controller._AnimationDirection.forward;
      return this[_startSimulation](simulation);
    }
    [_startSimulation](simulation) {
      if (!(simulation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 696, 12, "simulation != null");
      if (!!dart.test(this.isAnimating)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 697, 12, "!isAnimating");
      this[_simulation] = simulation;
      this[_lastElapsedDuration] = core.Duration.zero;
      this[_value$] = simulation.x(0.0)[$clamp](this.lowerBound, this.upperBound);
      let result = this[_ticker].start();
      this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.forward : animation$.AnimationStatus.reverse;
      this[_checkStatusChanged]();
      return result;
    }
    stop(opts) {
      let canceled = opts && 'canceled' in opts ? opts.canceled : true;
      if (!(this[_ticker] != null)) dart.assertFailed("AnimationController.stop() called after AnimationController.dispose()\n" + "AnimationController methods should not be used after calling dispose.", "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 728, 7, "_ticker != null");
      this[_simulation] = null;
      this[_lastElapsedDuration] = null;
      this[_ticker].stop({canceled: canceled});
    }
    dispose() {
      if (!dart.test(dart.fn(() => {
        if (this[_ticker] == null) {
          dart.throw(new assertions.FlutterError.fromParts(JSArrayOfDiagnosticsNode().of([new assertions.ErrorSummary.new("AnimationController.dispose() called more than once."), new assertions.ErrorDescription.new("A given " + dart.str(this[$runtimeType]) + " cannot be disposed more than once.\n"), new (DiagnosticsPropertyOfAnimationController()).new("The following " + dart.str(this[$runtimeType]) + " object was disposed multiple times", this, {style: diagnostics.DiagnosticsTreeStyle.errorProperty})])));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 745, 12, "() {\n      if (_ticker == null) {\n        throw FlutterError.fromParts(<DiagnosticsNode>[\n          ErrorSummary('AnimationController.dispose() called more than once.'),\n          ErrorDescription('A given $runtimeType cannot be disposed more than once.\\n'),\n          DiagnosticsProperty<AnimationController>(\n            'The following $runtimeType object was disposed multiple times',\n            this,\n            style: DiagnosticsTreeStyle.errorProperty,\n          ),\n        ]);\n      }\n      return true;\n    }()");
      this[_ticker].dispose();
      this[_ticker] = null;
      super.dispose();
    }
    [_checkStatusChanged]() {
      let newStatus = this.status;
      if (!dart.equals(this[_lastReportedStatus], newStatus)) {
        this[_lastReportedStatus] = newStatus;
        this.notifyStatusListeners(newStatus);
      }
    }
    [_tick](elapsed) {
      this[_lastElapsedDuration] = elapsed;
      let elapsedInSeconds = elapsed.inMicroseconds[$toDouble]() / 1000000;
      if (!(elapsedInSeconds >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 776, 12, "elapsedInSeconds >= 0.0");
      this[_value$] = this[_simulation].x(elapsedInSeconds)[$clamp](this.lowerBound, this.upperBound);
      if (dart.test(this[_simulation].isDone(elapsedInSeconds))) {
        this[_status$] = dart.equals(this[_direction], animation_controller._AnimationDirection.forward) ? animation$.AnimationStatus.completed : animation$.AnimationStatus.dismissed;
        this.stop({canceled: false});
      }
      this.notifyListeners();
      this[_checkStatusChanged]();
    }
    toStringDetails() {
      let paused = dart.test(this.isAnimating) ? "" : "; paused";
      let ticker = this[_ticker] == null ? "; DISPOSED" : dart.test(this[_ticker].muted) ? "; silenced" : "";
      let label = this.debugLabel == null ? "" : "; for " + dart.str(this.debugLabel);
      let more = dart.str(super.toStringDetails()) + " " + this.value[$toStringAsFixed](3);
      return more + paused + ticker + label;
    }
  };
  (animation_controller.AnimationController.new = function(opts) {
    let t2;
    let value = opts && 'value' in opts ? opts.value : null;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let lowerBound = opts && 'lowerBound' in opts ? opts.lowerBound : 0;
    let upperBound = opts && 'upperBound' in opts ? opts.upperBound : 1;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C54 || CT.C54;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    this[_ticker] = null;
    this[_simulation] = null;
    this[_value$] = null;
    this[_lastElapsedDuration] = null;
    this[_status$] = null;
    this[_lastReportedStatus] = animation$.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[lowerBound$] = lowerBound;
    this[upperBound$] = upperBound;
    this[animationBehavior$] = animationBehavior;
    if (!(lowerBound != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 240, 15, "lowerBound != null");
    if (!(upperBound != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 241, 15, "upperBound != null");
    if (!(dart.notNull(upperBound) >= dart.notNull(lowerBound))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 242, 15, "upperBound >= lowerBound");
    if (!(vsync != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 243, 15, "vsync != null");
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue]((t2 = value, t2 == null ? this.lowerBound : t2));
  }).prototype = animation_controller.AnimationController.prototype;
  (animation_controller.AnimationController.unbounded = function(opts) {
    let value = opts && 'value' in opts ? opts.value : 0;
    let duration = opts && 'duration' in opts ? opts.duration : null;
    let reverseDuration = opts && 'reverseDuration' in opts ? opts.reverseDuration : null;
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    let vsync = opts && 'vsync' in opts ? opts.vsync : null;
    let animationBehavior = opts && 'animationBehavior' in opts ? opts.animationBehavior : C55 || CT.C55;
    this[_ticker] = null;
    this[_simulation] = null;
    this[_value$] = null;
    this[_lastElapsedDuration] = null;
    this[_status$] = null;
    this[_lastReportedStatus] = animation$.AnimationStatus.dismissed;
    this[duration$] = duration;
    this[reverseDuration$] = reverseDuration;
    this[debugLabel$] = debugLabel;
    this[animationBehavior$] = animationBehavior;
    if (!(value != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 272, 15, "value != null");
    if (!(vsync != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 273, 15, "vsync != null");
    this[lowerBound$] = -1 / 0;
    this[upperBound$] = 1 / 0;
    this[_direction] = animation_controller._AnimationDirection.forward;
    animation_controller.AnimationController.__proto__.new.call(this);
    this[_ticker] = vsync.createTicker(dart.bind(this, _tick));
    this[_internalSetValue](value);
  }).prototype = animation_controller.AnimationController.prototype;
  dart.addTypeTests(animation_controller.AnimationController);
  const lowerBound$ = AnimationController_lowerBound;
  const upperBound$ = AnimationController_upperBound;
  const debugLabel$ = AnimationController_debugLabel;
  const animationBehavior$ = AnimationController_animationBehavior;
  const duration$ = AnimationController_duration;
  const reverseDuration$ = AnimationController_reverseDuration;
  dart.setMethodSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getMethods(animation_controller.AnimationController.__proto__),
    resync: dart.fnType(dart.void, [ticker.TickerProvider]),
    reset: dart.fnType(dart.void, []),
    [_internalSetValue]: dart.fnType(dart.void, [core.double]),
    forward: dart.fnType(ticker.TickerFuture, [], {from: core.double}),
    reverse: dart.fnType(ticker.TickerFuture, [], {from: core.double}),
    animateTo: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}),
    animateBack: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}),
    [_animateToInternal]: dart.fnType(ticker.TickerFuture, [core.double], {curve: curves.Curve, duration: core.Duration}),
    repeat: dart.fnType(ticker.TickerFuture, [], {max: core.double, min: core.double, period: core.Duration, reverse: core.bool}),
    [_directionSetter]: dart.fnType(dart.void, [animation_controller._AnimationDirection]),
    fling: dart.fnType(ticker.TickerFuture, [], {animationBehavior: animation_controller.AnimationBehavior, velocity: core.double}),
    animateWith: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    [_startSimulation]: dart.fnType(ticker.TickerFuture, [simulation.Simulation]),
    stop: dart.fnType(dart.void, [], {canceled: core.bool}),
    [_checkStatusChanged]: dart.fnType(dart.void, []),
    [_tick]: dart.fnType(dart.void, [core.Duration])
  }));
  dart.setGetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getGetters(animation_controller.AnimationController.__proto__),
    view: animation$.Animation$(core.double),
    value: core.double,
    velocity: core.double,
    lastElapsedDuration: core.Duration,
    isAnimating: core.bool,
    status: animation$.AnimationStatus
  }));
  dart.setSetterSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getSetters(animation_controller.AnimationController.__proto__),
    value: core.double
  }));
  dart.setLibraryUri(animation_controller.AnimationController, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller.AnimationController, () => ({
    __proto__: dart.getFields(animation_controller.AnimationController.__proto__),
    lowerBound: dart.finalFieldType(core.double),
    upperBound: dart.finalFieldType(core.double),
    debugLabel: dart.finalFieldType(core.String),
    animationBehavior: dart.finalFieldType(animation_controller.AnimationBehavior),
    duration: dart.fieldType(core.Duration),
    reverseDuration: dart.fieldType(core.Duration),
    [_ticker]: dart.fieldType(ticker.Ticker),
    [_simulation]: dart.fieldType(simulation.Simulation),
    [_value$]: dart.fieldType(core.double),
    [_lastElapsedDuration]: dart.fieldType(core.Duration),
    [_direction]: dart.fieldType(animation_controller._AnimationDirection),
    [_status$]: dart.fieldType(animation$.AnimationStatus),
    [_lastReportedStatus]: dart.fieldType(animation$.AnimationStatus)
  }));
  const _begin$ = dart.privateName(animation_controller, "_begin");
  const _end$ = dart.privateName(animation_controller, "_end");
  const _curve$ = dart.privateName(animation_controller, "_curve");
  const _durationInSeconds = dart.privateName(animation_controller, "_durationInSeconds");
  animation_controller._InterpolationSimulation = class _InterpolationSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      let t = (dart.notNull(timeInSeconds) / dart.notNull(this[_durationInSeconds]))[$clamp](0.0, 1.0);
      if (t === 0.0)
        return this[_begin$];
      else if (t === 1.0)
        return this[_end$];
      else
        return dart.notNull(this[_begin$]) + (dart.notNull(this[_end$]) - dart.notNull(this[_begin$])) * dart.notNull(this[_curve$].transform(t));
    }
    dx(timeInSeconds) {
      let epsilon = this.tolerance.time;
      return (dart.notNull(this.x(dart.notNull(timeInSeconds) + dart.notNull(epsilon))) - dart.notNull(this.x(dart.notNull(timeInSeconds) - dart.notNull(epsilon)))) / (2 * dart.notNull(epsilon));
    }
    isDone(timeInSeconds) {
      return dart.notNull(timeInSeconds) > dart.notNull(this[_durationInSeconds]);
    }
  };
  (animation_controller._InterpolationSimulation.new = function(_begin, _end, duration, _curve, scale) {
    this[_begin$] = _begin;
    this[_end$] = _end;
    this[_curve$] = _curve;
    if (!(_begin != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 800, 14, "_begin != null");
    if (!(_end != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 801, 14, "_end != null");
    if (!(duration != null && dart.notNull(duration.inMicroseconds) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 802, 14, "duration != null && duration.inMicroseconds > 0");
    this[_durationInSeconds] = dart.notNull(duration.inMicroseconds) * dart.notNull(scale) / 1000000;
    animation_controller._InterpolationSimulation.__proto__.new.call(this);
    ;
  }).prototype = animation_controller._InterpolationSimulation.prototype;
  dart.addTypeTests(animation_controller._InterpolationSimulation);
  dart.setMethodSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._InterpolationSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._InterpolationSimulation, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._InterpolationSimulation, () => ({
    __proto__: dart.getFields(animation_controller._InterpolationSimulation.__proto__),
    [_durationInSeconds]: dart.finalFieldType(core.double),
    [_begin$]: dart.finalFieldType(core.double),
    [_end$]: dart.finalFieldType(core.double),
    [_curve$]: dart.finalFieldType(curves.Curve)
  }));
  const _periodInSeconds = dart.privateName(animation_controller, "_periodInSeconds");
  const _initialT = dart.privateName(animation_controller, "_initialT");
  animation_controller._RepeatingSimulation = class _RepeatingSimulation extends simulation.Simulation {
    x(timeInSeconds) {
      if (!(dart.notNull(timeInSeconds) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 851, 12, "timeInSeconds >= 0.0");
      let totalTimeInSeconds = dart.notNull(timeInSeconds) + dart.notNull(this[_initialT]);
      let t = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$modulo](1.0);
      let _isPlayingReverse = (totalTimeInSeconds / dart.notNull(this[_periodInSeconds]))[$truncate]()[$modulo](2) === 1;
      if (dart.test(this.reverse) && _isPlayingReverse) {
        this.directionSetter(animation_controller._AnimationDirection.reverse);
        return ui.lerpDouble(this.max, this.min, t);
      } else {
        this.directionSetter(animation_controller._AnimationDirection.forward);
        return ui.lerpDouble(this.min, this.max, t);
      }
    }
    dx(timeInSeconds) {
      return (dart.notNull(this.max) - dart.notNull(this.min)) / dart.notNull(this[_periodInSeconds]);
    }
    isDone(timeInSeconds) {
      return false;
    }
  };
  (animation_controller._RepeatingSimulation.new = function(initialValue, min, max, reverse, period, directionSetter) {
    this.min = min;
    this.max = max;
    this.reverse = reverse;
    this.directionSetter = directionSetter;
    this[_periodInSeconds] = dart.notNull(period.inMicroseconds) / 1000000;
    this[_initialT] = max == min ? 0.0 : dart.notNull(initialValue) / (dart.notNull(max) - dart.notNull(min)) * (dart.notNull(period.inMicroseconds) / 1000000);
    animation_controller._RepeatingSimulation.__proto__.new.call(this);
    if (!(dart.notNull(this[_periodInSeconds]) > 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 837, 12, "_periodInSeconds > 0.0");
    if (!(dart.notNull(this[_initialT]) >= 0.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter/src/animation/animation_controller.dart", 838, 12, "_initialT >= 0.0");
  }).prototype = animation_controller._RepeatingSimulation.prototype;
  dart.addTypeTests(animation_controller._RepeatingSimulation);
  dart.setMethodSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getMethods(animation_controller._RepeatingSimulation.__proto__),
    x: dart.fnType(core.double, [core.double]),
    dx: dart.fnType(core.double, [core.double]),
    isDone: dart.fnType(core.bool, [core.double])
  }));
  dart.setLibraryUri(animation_controller._RepeatingSimulation, "package:flutter/src/animation/animation_controller.dart");
  dart.setFieldSignature(animation_controller._RepeatingSimulation, () => ({
    __proto__: dart.getFields(animation_controller._RepeatingSimulation.__proto__),
    min: dart.finalFieldType(core.double),
    max: dart.finalFieldType(core.double),
    reverse: dart.finalFieldType(core.bool),
    directionSetter: dart.finalFieldType(dart.fnType(dart.void, [animation_controller._AnimationDirection])),
    [_periodInSeconds]: dart.finalFieldType(core.double),
    [_initialT]: dart.finalFieldType(core.double)
  }));
  const Tolerance_velocity = dart.privateName(tolerance, "Tolerance.velocity");
  const Tolerance_time = dart.privateName(tolerance, "Tolerance.time");
  const Tolerance_distance = dart.privateName(tolerance, "Tolerance.distance");
  let C57;
  dart.defineLazy(animation_controller, {
    /*animation_controller._kFlingSpringDescription*/get _kFlingSpringDescription() {
      return new spring_simulation.SpringDescription.withDampingRatio({mass: 1.0, stiffness: 500.0, ratio: 1.0});
    },
    /*animation_controller._kFlingTolerance*/get _kFlingTolerance() {
      return C57 || CT.C57;
    }
  });
  dart.trackLibraries("packages/flutter/src/animation/animation", {
    "package:flutter/src/animation/animation.dart": animation$,
    "package:flutter/src/animation/tween.dart": tween,
    "package:flutter/src/animation/curves.dart": curves,
    "package:flutter/src/animation/animations.dart": animations,
    "package:flutter/src/animation/listener_helpers.dart": listener_helpers,
    "package:flutter/src/animation/tween_sequence.dart": tween_sequence,
    "package:flutter/src/animation/animation_controller.dart": animation_controller
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["animation.dart","tween.dart","animations.dart","curves.dart","listener_helpers.dart","tween_sequence.dart","animation_controller.dart"],"names":[],"mappings":"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","file":"animation.ddc.js"}');
  // Exports:
  return {
    src__animation__animation: animation$,
    src__animation__tween: tween,
    src__animation__curves: curves,
    src__animation__animations: animations,
    src__animation__listener_helpers: listener_helpers,
    src__animation__tween_sequence: tween_sequence,
    src__animation__animation_controller: animation_controller
  };
});

//# sourceMappingURL=animation.ddc.js.map

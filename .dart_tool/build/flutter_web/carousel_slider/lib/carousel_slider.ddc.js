define(['dart_sdk', 'packages/flutter/src/animation/animation', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__animation__animation, packages__flutter__src__painting___network_image_web, packages__flutter__src__widgets__actions, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const curves = packages__flutter__src__animation__animation.src__animation__curves;
  const basic_types = packages__flutter__src__painting___network_image_web.src__painting__basic_types;
  const page_view = packages__flutter__src__widgets__actions.src__widgets__page_view;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const scroll_physics = packages__flutter__src__widgets__actions.src__widgets__scroll_physics;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const transitions = packages__flutter__src__widgets__actions.src__widgets__transitions;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const ticker_provider = packages__flutter__src__widgets__actions.src__widgets__ticker_provider;
  const drag_details = packages__flutter__src__gestures__arena.src__gestures__drag_details;
  const carousel_slider = Object.create(dart.library);
  const $toInt = dartx.toInt;
  const $length = dartx.length;
  const $_get = dartx._get;
  const $abs = dartx.abs;
  const $clamp = dartx.clamp;
  const $modulo = dartx['%'];
  let TimerToNull = () => (TimerToNull = dart.constFn(dart.fnType(core.Null, [async.Timer])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let DragDownDetailsTovoid = () => (DragDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [drag_details.DragDownDetails])))();
  let intToNull = () => (intToNull = dart.constFn(dart.fnType(core.Null, [core.int])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, framework.Widget])))();
  let BuildContextAndintToAnimatedBuilder = () => (BuildContextAndintToAnimatedBuilder = dart.constFn(dart.fnType(transitions.AnimatedBuilder, [framework.BuildContext, core.int])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 4000000
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 800000
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: curves.Cubic.prototype,
        [Cubic_d]: 1,
        [Cubic_c]: 0.2,
        [Cubic_b]: 0,
        [Cubic_a]: 0.4
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: basic_types.Axis.prototype,
        [_name]: "Axis.horizontal",
        index: 0
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 40,
        [_Location_line]: 194,
        [_Location_file]: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 63,
        [_Location_line]: 194,
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
        [_Location_column]: 30,
        [_Location_line]: 194,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "aspectRatio",
        [_Location_column]: 42,
        [_Location_line]: 199,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 75,
        [_Location_line]: 199,
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
        [_Location_column]: 30,
        [_Location_line]: 199,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPanDown",
        [_Location_column]: 23,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 57,
        [_Location_line]: 207,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C13 || CT.C13,
        [_Location_name]: null,
        [_Location_column]: 7,
        [_Location_line]: 207,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C17() {
      return C17 = dart.constList([], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 244,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "height",
        [_Location_column]: 45,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 79,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C19 || CT.C19,
        [_Location_name]: null,
        [_Location_column]: 36,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 29,
        [_Location_line]: 255,
        [_Location_file]: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C23 || CT.C23,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 255,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "width",
        [_Location_column]: 23,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 83,
        [_Location_line]: 259,
        [_Location_file]: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C26 || CT.C26,
        [_Location_name]: null,
        [_Location_column]: 26,
        [_Location_line]: 258,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 19,
        [_Location_line]: 258,
        [_Location_file]: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C30 || CT.C30,
        [_Location_name]: null,
        [_Location_column]: 22,
        [_Location_line]: 257,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "animation",
        [_Location_column]: 11,
        [_Location_line]: 234,
        [_Location_file]: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "child",
        [_Location_column]: 11,
        [_Location_line]: 235,
        [_Location_file]: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "builder",
        [_Location_column]: 11,
        [_Location_line]: 236,
        [_Location_file]: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35, C36 || CT.C36], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C33 || CT.C33,
        [_Location_name]: null,
        [_Location_column]: 16,
        [_Location_line]: 233,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "physics",
        [_Location_column]: 7,
        [_Location_line]: 218,
        [_Location_file]: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "scrollDirection",
        [_Location_column]: 7,
        [_Location_line]: 219,
        [_Location_file]: null
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 7,
        [_Location_line]: 220,
        [_Location_file]: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "reverse",
        [_Location_column]: 7,
        [_Location_line]: 221,
        [_Location_file]: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemCount",
        [_Location_column]: 7,
        [_Location_line]: 222,
        [_Location_file]: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPageChanged",
        [_Location_column]: 7,
        [_Location_line]: 223,
        [_Location_file]: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "itemBuilder",
        [_Location_column]: 7,
        [_Location_line]: 229,
        [_Location_file]: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39, C40 || CT.C40, C41 || CT.C41, C42 || CT.C42, C43 || CT.C43, C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C38 || CT.C38,
        [_Location_name]: null,
        [_Location_column]: 32,
        [_Location_line]: 217,
        [_Location_file]: "org-dartlang-app:///packages/carousel_slider/carousel_slider.dart"
      });
    }
  });
  const Duration__duration = dart.privateName(core, "Duration._duration");
  let C0;
  let C1;
  const Cubic_d = dart.privateName(curves, "Cubic.d");
  const Cubic_c = dart.privateName(curves, "Cubic.c");
  const Cubic_b = dart.privateName(curves, "Cubic.b");
  const Cubic_a = dart.privateName(curves, "Cubic.a");
  let C2;
  const _name = dart.privateName(basic_types, "_name");
  let C3;
  const CarouselSlider_items = dart.privateName(carousel_slider, "CarouselSlider.items");
  const CarouselSlider_height = dart.privateName(carousel_slider, "CarouselSlider.height");
  const CarouselSlider_aspectRatio = dart.privateName(carousel_slider, "CarouselSlider.aspectRatio");
  const CarouselSlider_viewportFraction = dart.privateName(carousel_slider, "CarouselSlider.viewportFraction");
  const CarouselSlider_initialPage = dart.privateName(carousel_slider, "CarouselSlider.initialPage");
  const CarouselSlider_realPage = dart.privateName(carousel_slider, "CarouselSlider.realPage");
  const CarouselSlider_enableInfiniteScroll = dart.privateName(carousel_slider, "CarouselSlider.enableInfiniteScroll");
  const CarouselSlider_reverse = dart.privateName(carousel_slider, "CarouselSlider.reverse");
  const CarouselSlider_autoPlay = dart.privateName(carousel_slider, "CarouselSlider.autoPlay");
  const CarouselSlider_autoPlayInterval = dart.privateName(carousel_slider, "CarouselSlider.autoPlayInterval");
  const CarouselSlider_autoPlayAnimationDuration = dart.privateName(carousel_slider, "CarouselSlider.autoPlayAnimationDuration");
  const CarouselSlider_autoPlayCurve = dart.privateName(carousel_slider, "CarouselSlider.autoPlayCurve");
  const CarouselSlider_pauseAutoPlayOnTouch = dart.privateName(carousel_slider, "CarouselSlider.pauseAutoPlayOnTouch");
  const CarouselSlider_enlargeCenterPage = dart.privateName(carousel_slider, "CarouselSlider.enlargeCenterPage");
  const CarouselSlider_scrollDirection = dart.privateName(carousel_slider, "CarouselSlider.scrollDirection");
  const CarouselSlider_onPageChanged = dart.privateName(carousel_slider, "CarouselSlider.onPageChanged");
  const CarouselSlider_scrollPhysics = dart.privateName(carousel_slider, "CarouselSlider.scrollPhysics");
  const CarouselSlider_pageController = dart.privateName(carousel_slider, "CarouselSlider.pageController");
  carousel_slider.CarouselSlider = class CarouselSlider extends framework.StatefulWidget {
    get items() {
      return this[items$];
    }
    set items(value) {
      super.items = value;
    }
    get height() {
      return this[height$];
    }
    set height(value) {
      super.height = value;
    }
    get aspectRatio() {
      return this[aspectRatio$];
    }
    set aspectRatio(value) {
      super.aspectRatio = value;
    }
    get viewportFraction() {
      return this[viewportFraction$];
    }
    set viewportFraction(value) {
      super.viewportFraction = value;
    }
    get initialPage() {
      return this[initialPage$];
    }
    set initialPage(value) {
      super.initialPage = value;
    }
    get realPage() {
      return this[realPage$];
    }
    set realPage(value) {
      super.realPage = value;
    }
    get enableInfiniteScroll() {
      return this[enableInfiniteScroll$];
    }
    set enableInfiniteScroll(value) {
      super.enableInfiniteScroll = value;
    }
    get reverse() {
      return this[reverse$];
    }
    set reverse(value) {
      super.reverse = value;
    }
    get autoPlay() {
      return this[autoPlay$];
    }
    set autoPlay(value) {
      super.autoPlay = value;
    }
    get autoPlayInterval() {
      return this[autoPlayInterval$];
    }
    set autoPlayInterval(value) {
      super.autoPlayInterval = value;
    }
    get autoPlayAnimationDuration() {
      return this[autoPlayAnimationDuration$];
    }
    set autoPlayAnimationDuration(value) {
      super.autoPlayAnimationDuration = value;
    }
    get autoPlayCurve() {
      return this[autoPlayCurve$];
    }
    set autoPlayCurve(value) {
      super.autoPlayCurve = value;
    }
    get pauseAutoPlayOnTouch() {
      return this[pauseAutoPlayOnTouch$];
    }
    set pauseAutoPlayOnTouch(value) {
      super.pauseAutoPlayOnTouch = value;
    }
    get enlargeCenterPage() {
      return this[enlargeCenterPage$];
    }
    set enlargeCenterPage(value) {
      super.enlargeCenterPage = value;
    }
    get scrollDirection() {
      return this[scrollDirection$];
    }
    set scrollDirection(value) {
      super.scrollDirection = value;
    }
    get onPageChanged() {
      return this[onPageChanged$];
    }
    set onPageChanged(value) {
      super.onPageChanged = value;
    }
    get scrollPhysics() {
      return this[scrollPhysics$];
    }
    set scrollPhysics(value) {
      super.scrollPhysics = value;
    }
    get pageController() {
      return this[pageController];
    }
    set pageController(value) {
      super.pageController = value;
    }
    nextPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.pageController.nextPage({duration: duration, curve: curve});
    }
    previousPage(opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      return this.pageController.previousPage({duration: duration, curve: curve});
    }
    jumpToPage(page) {
      let index = carousel_slider._getRealIndex(this.pageController.page[$toInt](), dart.asInt(this.realPage), this.items[$length]);
      return this.pageController.jumpToPage(this.pageController.page[$toInt]() + dart.notNull(page) - dart.notNull(index));
    }
    animateToPage(page, opts) {
      let duration = opts && 'duration' in opts ? opts.duration : null;
      let curve = opts && 'curve' in opts ? opts.curve : null;
      let index = carousel_slider._getRealIndex(this.pageController.page[$toInt](), dart.asInt(this.realPage), this.items[$length]);
      return this.pageController.animateToPage(this.pageController.page[$toInt]() + dart.notNull(page) - dart.notNull(index), {duration: duration, curve: curve});
    }
    createState() {
      return new carousel_slider._CarouselSliderState.new();
    }
  };
  (carousel_slider.CarouselSlider.new = function(opts) {
    let items = opts && 'items' in opts ? opts.items : null;
    let height = opts && 'height' in opts ? opts.height : null;
    let aspectRatio = opts && 'aspectRatio' in opts ? opts.aspectRatio : 1.7777777777777777;
    let viewportFraction = opts && 'viewportFraction' in opts ? opts.viewportFraction : 0.8;
    let initialPage = opts && 'initialPage' in opts ? opts.initialPage : 0;
    let realPage = opts && 'realPage' in opts ? opts.realPage : 10000;
    let enableInfiniteScroll = opts && 'enableInfiniteScroll' in opts ? opts.enableInfiniteScroll : true;
    let reverse = opts && 'reverse' in opts ? opts.reverse : false;
    let autoPlay = opts && 'autoPlay' in opts ? opts.autoPlay : false;
    let autoPlayInterval = opts && 'autoPlayInterval' in opts ? opts.autoPlayInterval : C0 || CT.C0;
    let autoPlayAnimationDuration = opts && 'autoPlayAnimationDuration' in opts ? opts.autoPlayAnimationDuration : C1 || CT.C1;
    let autoPlayCurve = opts && 'autoPlayCurve' in opts ? opts.autoPlayCurve : C2 || CT.C2;
    let pauseAutoPlayOnTouch = opts && 'pauseAutoPlayOnTouch' in opts ? opts.pauseAutoPlayOnTouch : null;
    let enlargeCenterPage = opts && 'enlargeCenterPage' in opts ? opts.enlargeCenterPage : false;
    let onPageChanged = opts && 'onPageChanged' in opts ? opts.onPageChanged : null;
    let scrollPhysics = opts && 'scrollPhysics' in opts ? opts.scrollPhysics : null;
    let scrollDirection = opts && 'scrollDirection' in opts ? opts.scrollDirection : C3 || CT.C3;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[items$] = items;
    this[height$] = height;
    this[aspectRatio$] = aspectRatio;
    this[viewportFraction$] = viewportFraction;
    this[initialPage$] = initialPage;
    this[enableInfiniteScroll$] = enableInfiniteScroll;
    this[reverse$] = reverse;
    this[autoPlay$] = autoPlay;
    this[autoPlayInterval$] = autoPlayInterval;
    this[autoPlayAnimationDuration$] = autoPlayAnimationDuration;
    this[autoPlayCurve$] = autoPlayCurve;
    this[pauseAutoPlayOnTouch$] = pauseAutoPlayOnTouch;
    this[enlargeCenterPage$] = enlargeCenterPage;
    this[onPageChanged$] = onPageChanged;
    this[scrollPhysics$] = scrollPhysics;
    this[scrollDirection$] = scrollDirection;
    this[realPage$] = dart.test(enableInfiniteScroll) ? dart.notNull(realPage) + dart.notNull(initialPage) : initialPage;
    this[pageController] = new page_view.PageController.new({viewportFraction: viewportFraction, initialPage: dart.asInt(dart.test(enableInfiniteScroll) ? dart.notNull(realPage) + dart.notNull(initialPage) : initialPage)});
    carousel_slider.CarouselSlider.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = carousel_slider.CarouselSlider.prototype;
  dart.addTypeTests(carousel_slider.CarouselSlider);
  const items$ = CarouselSlider_items;
  const height$ = CarouselSlider_height;
  const aspectRatio$ = CarouselSlider_aspectRatio;
  const viewportFraction$ = CarouselSlider_viewportFraction;
  const initialPage$ = CarouselSlider_initialPage;
  const realPage$ = CarouselSlider_realPage;
  const enableInfiniteScroll$ = CarouselSlider_enableInfiniteScroll;
  const reverse$ = CarouselSlider_reverse;
  const autoPlay$ = CarouselSlider_autoPlay;
  const autoPlayInterval$ = CarouselSlider_autoPlayInterval;
  const autoPlayAnimationDuration$ = CarouselSlider_autoPlayAnimationDuration;
  const autoPlayCurve$ = CarouselSlider_autoPlayCurve;
  const pauseAutoPlayOnTouch$ = CarouselSlider_pauseAutoPlayOnTouch;
  const enlargeCenterPage$ = CarouselSlider_enlargeCenterPage;
  const scrollDirection$ = CarouselSlider_scrollDirection;
  const onPageChanged$ = CarouselSlider_onPageChanged;
  const scrollPhysics$ = CarouselSlider_scrollPhysics;
  const pageController = CarouselSlider_pageController;
  dart.setMethodSignature(carousel_slider.CarouselSlider, () => ({
    __proto__: dart.getMethods(carousel_slider.CarouselSlider.__proto__),
    nextPage: dart.fnType(async.Future$(dart.void), [], {curve: curves.Curve, duration: core.Duration}),
    previousPage: dart.fnType(async.Future$(dart.void), [], {curve: curves.Curve, duration: core.Duration}),
    jumpToPage: dart.fnType(dart.void, [core.int]),
    animateToPage: dart.fnType(async.Future$(dart.void), [core.int], {curve: curves.Curve, duration: core.Duration}),
    createState: dart.fnType(carousel_slider._CarouselSliderState, [])
  }));
  dart.setLibraryUri(carousel_slider.CarouselSlider, "package:carousel_slider/carousel_slider.dart");
  dart.setFieldSignature(carousel_slider.CarouselSlider, () => ({
    __proto__: dart.getFields(carousel_slider.CarouselSlider.__proto__),
    items: dart.finalFieldType(core.List$(framework.Widget)),
    height: dart.finalFieldType(core.double),
    aspectRatio: dart.finalFieldType(core.double),
    viewportFraction: dart.finalFieldType(core.num),
    initialPage: dart.finalFieldType(core.num),
    realPage: dart.finalFieldType(core.num),
    enableInfiniteScroll: dart.finalFieldType(core.bool),
    reverse: dart.finalFieldType(core.bool),
    autoPlay: dart.finalFieldType(core.bool),
    autoPlayInterval: dart.finalFieldType(core.Duration),
    autoPlayAnimationDuration: dart.finalFieldType(core.Duration),
    autoPlayCurve: dart.finalFieldType(curves.Curve),
    pauseAutoPlayOnTouch: dart.finalFieldType(core.Duration),
    enlargeCenterPage: dart.finalFieldType(core.bool),
    scrollDirection: dart.finalFieldType(basic_types.Axis),
    onPageChanged: dart.finalFieldType(dart.fnType(dart.dynamic, [core.int])),
    scrollPhysics: dart.finalFieldType(scroll_physics.ScrollPhysics),
    pageController: dart.finalFieldType(page_view.PageController)
  }));
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C6;
  let C7;
  let C5;
  let C4;
  let C10;
  let C11;
  let C9;
  let C8;
  let C14;
  let C15;
  let C13;
  let C12;
  let C17;
  let C16;
  let C20;
  let C21;
  let C19;
  let C18;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  let C34;
  let C35;
  let C36;
  let C33;
  let C32;
  let C39;
  let C40;
  let C41;
  let C42;
  let C43;
  let C44;
  let C45;
  let C38;
  let C37;
  const State_TickerProviderStateMixin$36 = class State_TickerProviderStateMixin extends framework.State$(carousel_slider.CarouselSlider) {};
  (State_TickerProviderStateMixin$36.new = function() {
    ticker_provider.TickerProviderStateMixin$(carousel_slider.CarouselSlider)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$36.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$36.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$36, ticker_provider.TickerProviderStateMixin$(carousel_slider.CarouselSlider));
  carousel_slider._CarouselSliderState = class _CarouselSliderState extends State_TickerProviderStateMixin$36 {
    initState() {
      super.initState();
      this.timer = this.getTimer();
    }
    getTimer() {
      return async.Timer.periodic(this.widget.autoPlayInterval, dart.fn(_ => {
        if (dart.test(this.widget.autoPlay)) {
          this.widget.pageController.nextPage({duration: this.widget.autoPlayAnimationDuration, curve: this.widget.autoPlayCurve});
        }
      }, TimerToNull()));
    }
    pauseOnTouch() {
      this.timer.cancel();
      this.timer = async.Timer.new(this.widget.pauseAutoPlayOnTouch, dart.fn(() => {
        this.timer = this.getTimer();
      }, VoidToNull()));
    }
    getWrapper(child) {
      if (this.widget.height != null) {
        let wrapper = new container.Container.new({height: this.widget.height, child: child, $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
        return dart.test(this.widget.autoPlay) && this.widget.pauseAutoPlayOnTouch != null ? this.addGestureDetection(wrapper) : wrapper;
      } else {
        let wrapper = new basic.AspectRatio.new({aspectRatio: this.widget.aspectRatio, child: child, $creationLocationd_0dea112b090073317d4: C8 || CT.C8});
        return dart.test(this.widget.autoPlay) && this.widget.pauseAutoPlayOnTouch != null ? this.addGestureDetection(wrapper) : wrapper;
      }
    }
    addGestureDetection(child) {
      return new gesture_detector.GestureDetector.new({onPanDown: dart.fn(_ => this.pauseOnTouch(), DragDownDetailsTovoid()), child: child, $creationLocationd_0dea112b090073317d4: C12 || CT.C12});
    }
    dispose() {
      let t0;
      super.dispose();
      t0 = this.timer;
      t0 == null ? null : t0.cancel();
    }
    build(context) {
      return this.getWrapper(new page_view.PageView.builder({physics: this.widget.scrollPhysics, scrollDirection: this.widget.scrollDirection, controller: this.widget.pageController, reverse: this.widget.reverse, itemCount: dart.test(this.widget.enableInfiniteScroll) ? null : this.widget.items[$length], onPageChanged: dart.fn(index => {
          let currentPage = carousel_slider._getRealIndex(dart.asInt(dart.notNull(index) + dart.notNull(this.widget.initialPage)), dart.asInt(this.widget.realPage), this.widget.items[$length]);
          if (this.widget.onPageChanged != null) {
            this.widget.onPageChanged(currentPage);
          }
        }, intToNull()), itemBuilder: dart.fn((context, i) => {
          let index = carousel_slider._getRealIndex(dart.asInt(dart.notNull(i) + dart.notNull(this.widget.initialPage)), dart.asInt(this.widget.realPage), this.widget.items[$length]);
          return new transitions.AnimatedBuilder.new({animation: this.widget.pageController, child: this.widget.items[$_get](index), builder: dart.fn((context, child) => {
              let t0;
              if (this.widget.pageController.position.minScrollExtent == null || this.widget.pageController.position.maxScrollExtent == null) {
                FutureOfNull().delayed(new core.Duration.new({microseconds: 1}), dart.fn(() => {
                  this.setState(dart.fn(() => {
                  }, VoidToNull()));
                }, VoidToNull()));
                return new container.Container.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16});
              }
              let value = dart.notNull(this.widget.pageController.page) - dart.notNull(i);
              value = (1 - value[$abs]() * 0.3)[$clamp](0.0, 1.0);
              let height = (t0 = this.widget.height, t0 == null ? dart.notNull(media_query.MediaQuery.of(context).size.width) * (1 / dart.notNull(this.widget.aspectRatio)) : t0);
              let distortionValue = dart.test(this.widget.enlargeCenterPage) ? curves.Curves.easeOut.transform(value) : 1.0;
              if (dart.equals(this.widget.scrollDirection, basic_types.Axis.horizontal)) {
                return new basic.Center.new({child: new basic.SizedBox.new({height: dart.notNull(distortionValue) * dart.notNull(height), child: child, $creationLocationd_0dea112b090073317d4: C18 || CT.C18}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
              } else {
                return new basic.Center.new({child: new basic.SizedBox.new({width: dart.notNull(distortionValue) * dart.notNull(media_query.MediaQuery.of(context).size.width), child: child, $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
              }
            }, BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C32 || CT.C32});
        }, BuildContextAndintToAnimatedBuilder()), $creationLocationd_0dea112b090073317d4: C37 || CT.C37}));
    }
  };
  (carousel_slider._CarouselSliderState.new = function() {
    this.timer = null;
    carousel_slider._CarouselSliderState.__proto__.new.call(this);
    ;
  }).prototype = carousel_slider._CarouselSliderState.prototype;
  dart.addTypeTests(carousel_slider._CarouselSliderState);
  dart.setMethodSignature(carousel_slider._CarouselSliderState, () => ({
    __proto__: dart.getMethods(carousel_slider._CarouselSliderState.__proto__),
    getTimer: dart.fnType(async.Timer, []),
    pauseOnTouch: dart.fnType(dart.void, []),
    getWrapper: dart.fnType(framework.Widget, [framework.Widget]),
    addGestureDetection: dart.fnType(framework.Widget, [framework.Widget]),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(carousel_slider._CarouselSliderState, "package:carousel_slider/carousel_slider.dart");
  dart.setFieldSignature(carousel_slider._CarouselSliderState, () => ({
    __proto__: dart.getFields(carousel_slider._CarouselSliderState.__proto__),
    timer: dart.fieldType(async.Timer)
  }));
  carousel_slider._getRealIndex = function _getRealIndex(position, base, length) {
    let offset = dart.notNull(position) - dart.notNull(base);
    return carousel_slider._remainder(offset, length);
  };
  carousel_slider._remainder = function _remainder(input, source) {
    let result = input[$modulo](source);
    return result < 0 ? dart.notNull(source) + result : result;
  };
  dart.trackLibraries("packages/carousel_slider/carousel_slider", {
    "package:carousel_slider/carousel_slider.dart": carousel_slider
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["carousel_slider.dart"],"names":[],"mappings":"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","file":"carousel_slider.ddc.js"}');
  // Exports:
  return {
    carousel_slider: carousel_slider
  };
});

//# sourceMappingURL=carousel_slider.ddc.js.map

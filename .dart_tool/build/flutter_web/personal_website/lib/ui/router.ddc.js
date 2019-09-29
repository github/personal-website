define(['dart_sdk', 'packages/flutter/material', 'packages/personal_website/ui/apps/screen', 'packages/flutter/src/widgets/actions', 'packages/personal_website/ui/blog/edit_post', 'packages/personal_website/data/blocs/blog/blog_state', 'packages/personal_website/data/classes/fb_post'], function(dart_sdk, packages__flutter__material, packages__personal_website__ui__apps__screen, packages__flutter__src__widgets__actions, packages__personal_website__ui__blog__edit_post, packages__personal_website__data__blocs__blog__blog_state, packages__personal_website__data__classes__fb_post) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const page = packages__flutter__material.src__material__page;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const screen = packages__personal_website__ui__apps__screen.ui__home__screen;
  const about = packages__personal_website__ui__apps__screen.ui__pages__about;
  const privacy_policy = packages__personal_website__ui__apps__screen.ui__pages__privacy_policy;
  const screen$ = packages__personal_website__ui__apps__screen.ui__apps__screen;
  const screen$0 = packages__personal_website__ui__apps__screen.ui__blog__screen;
  const screen$1 = packages__personal_website__ui__apps__screen.ui__projects__screen;
  const post$ = packages__personal_website__ui__apps__screen.ui__blog__post;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const edit_post = packages__personal_website__ui__blog__edit_post.ui__blog__edit_post;
  const blog_state = packages__personal_website__data__blocs__blog__blog_state.data__blocs__blog__blog_state;
  const fb_post = packages__personal_website__data__classes__fb_post.data__classes__fb_post;
  const router = Object.create(dart.library);
  const $_set = dartx._set;
  const $entries = dartx.entries;
  let BuildContextToHomeScreen = () => (BuildContextToHomeScreen = dart.constFn(dart.fnType(screen.HomeScreen, [framework.BuildContext])))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  let IdentityMapOfString$BuildContextToWidget = () => (IdentityMapOfString$BuildContextToWidget = dart.constFn(_js_helper.IdentityMap$(core.String, BuildContextToWidget())))();
  let BuildContextToAboutScreen = () => (BuildContextToAboutScreen = dart.constFn(dart.fnType(about.AboutScreen, [framework.BuildContext])))();
  let BuildContextToPrivacyPolicy = () => (BuildContextToPrivacyPolicy = dart.constFn(dart.fnType(privacy_policy.PrivacyPolicy, [framework.BuildContext])))();
  let BuildContextToAppsScreen = () => (BuildContextToAppsScreen = dart.constFn(dart.fnType(screen$.AppsScreen, [framework.BuildContext])))();
  let BuildContextToBlogScreen = () => (BuildContextToBlogScreen = dart.constFn(dart.fnType(screen$0.BlogScreen, [framework.BuildContext])))();
  let BuildContextToProjectsScreen = () => (BuildContextToProjectsScreen = dart.constFn(dart.fnType(screen$1.ProjectsScreen, [framework.BuildContext])))();
  let BuildContextToEditPostScreen = () => (BuildContextToEditPostScreen = dart.constFn(dart.fnType(edit_post.EditPostScreen, [framework.BuildContext])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let BuildContextToPostDetails = () => (BuildContextToPostDetails = dart.constFn(dart.fnType(post$.PostDetails, [framework.BuildContext])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 25,
        line: 20,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 36,
        line: 25,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 37,
        line: 26,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 39,
        line: 27,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 36,
        line: 28,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 36,
        line: 29,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 40,
        line: 30,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 40,
        line: 31,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "id",
        column: 15,
        line: 35,
        file: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "post",
        column: 15,
        line: 36,
        file: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12], widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C10 || CT.C10,
        name: null,
        column: 46,
        line: 34,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 61,
        line: 53,
        file: null
      });
    },
    get C14() {
      return C14 = dart.constList([C15 || CT.C15], widget_inspector._Location);
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C14 || CT.C14,
        name: null,
        column: 27,
        line: 53,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 20,
        line: 53,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 13,
        line: 53,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 53,
        file: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C20 || CT.C20,
        name: null,
        column: 12,
        line: 52,
        file: "org-dartlang-app:///packages/personal_website/ui/router.dart"
      });
    }
  });
  let C1;
  let C0;
  let C2;
  let C3;
  let C4;
  let C5;
  let C6;
  let C7;
  let C8;
  let C11;
  let C12;
  let C10;
  let C9;
  router.Router = class Router extends core.Object {
    static onUnknownRoute(settings) {
      return new page.MaterialPageRoute.new({builder: dart.fn(_ => new screen.HomeScreen.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), BuildContextToHomeScreen())});
    }
    static routes(state) {
      return (() => {
        let t0 = new (IdentityMapOfString$BuildContextToWidget()).new();
        t0[$_set]("/", dart.fn(_ => new screen.HomeScreen.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), BuildContextToHomeScreen()));
        t0[$_set]("/about", dart.fn(_ => new about.AboutScreen.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), BuildContextToAboutScreen()));
        t0[$_set]("/privacy_policy", dart.fn(_ => new privacy_policy.PrivacyPolicy.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), BuildContextToPrivacyPolicy()));
        t0[$_set]("/apps", dart.fn(_ => new screen$.AppsScreen.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), BuildContextToAppsScreen()));
        t0[$_set]("/blog", dart.fn(_ => new screen$0.BlogScreen.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), BuildContextToBlogScreen()));
        t0[$_set]("/projects", dart.fn(_ => new screen$1.ProjectsScreen.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), BuildContextToProjectsScreen()));
        t0[$_set]("/blog/new", dart.fn(_ => new edit_post.EditPostScreen.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), BuildContextToEditPostScreen()));
        if (blog_state.PostsReady.is(state)) for (let t3 of (() => {
          let t1 = new (IdentityMapOfString$BuildContextToWidget()).new();
          for (let post of state.posts)
            for (let t2 of new (IdentityMapOfString$BuildContextToWidget()).from(["/blog/" + dart.str(post.documentId), dart.fn(_ => new post$.PostDetails.new({id: post.documentId, post: fb_post.FbPost.fromJson(MapOfString$dynamic()._check(convert.json.decode(convert.json.encode(post.data)))), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), BuildContextToPostDetails())])[$entries])
              t1[$_set](t2.key, t2.value);
          return t1;
        })()[$entries])
          t0[$_set](t3.key, t3.value);
        return t0;
      })();
    }
  };
  (router.Router.new = function() {
    ;
  }).prototype = router.Router.prototype;
  dart.addTypeTests(router.Router);
  dart.setLibraryUri(router.Router, "package:personal_website/ui/router.dart");
  dart.defineLazy(router.Router, {
    /*router.Router.initialRoute*/get initialRoute() {
      return "/";
    },
    set initialRoute(_) {}
  });
  let C15;
  let C14;
  let C13;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  router.UnknownRouteScreen = class UnknownRouteScreen extends framework.StatelessWidget {
    get route() {
      return this[route$];
    }
    set route(value) {
      super.route = value;
    }
    build(context) {
      return new scaffold.Scaffold.new({body: new basic.Center.new({child: new text.Text.new("No route defined for " + dart.str(this.route), {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C19 || CT.C19});
    }
  };
  (router.UnknownRouteScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[route$] = route;
    router.UnknownRouteScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = router.UnknownRouteScreen.prototype;
  dart.addTypeTests(router.UnknownRouteScreen);
  const route$ = Symbol("UnknownRouteScreen.route");
  dart.setMethodSignature(router.UnknownRouteScreen, () => ({
    __proto__: dart.getMethods(router.UnknownRouteScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(router.UnknownRouteScreen, "package:personal_website/ui/router.dart");
  dart.setFieldSignature(router.UnknownRouteScreen, () => ({
    __proto__: dart.getFields(router.UnknownRouteScreen.__proto__),
    route: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/personal_website/ui/router", {
    "package:personal_website/ui/router.dart": router
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["router.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;0BAiBqD;AAC/C,sDACW,QAAC,KAAM;IACjB;kBAE8C;AACjD;;uBACwB,QAAC,KAAM;4BACN,QAAC,KAAM;qCACL,QAAC,KAAM;2BACV,QAAC,KAAM;2BACP,QAAC,KAAM;+BACH,QAAC,KAAM;+BACP,QAAC,KAAM;YACvB,yBAAN,KAAK;;AACP,mBAAS,OAAQ,AAAM,MAAD;0BAAW,wDAC/B,AAA0B,oBAAjB,AAAK,IAAD,cAAe,QAAC,KAAM,+BAC3B,AAAK,IAAD,mBACK,qDAAS,AAAK,oBAAO,AAAK,oBAAO,AAAK,IAAD;;;;;;;IAI9D;;;;EACF;;;;MAxBgB,0BAAY;;;;;;;;;;;;;;;IA2Bb;;;;;;UAOa;AACxB,YAAO,kCACC,6BAAc,kBAAK,AAA6B,mCAAN;IAEpD;;;QATM;QACW;;;AACZ,6DAAW,GAAG;;EAAC","file":"router.ddc.js"}');
  // Exports:
  return {
    ui__router: router
  };
});

//# sourceMappingURL=router.ddc.js.map

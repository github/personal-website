define(['dart_sdk', 'packages/personal_website/data/blocs/blog/blog_state', 'packages/personal_website/data/blocs/blog/blog_event', 'packages/personal_website/plugins/fb_firestore/web', 'packages/personal_website/plugins/fb_firestore/classes/snapshot', 'packages/bloc/bloc'], function(dart_sdk, packages__personal_website__data__blocs__blog__blog_state, packages__personal_website__data__blocs__blog__blog_event, packages__personal_website__plugins__fb_firestore__web, packages__personal_website__plugins__fb_firestore__classes__snapshot, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blog_state = packages__personal_website__data__blocs__blog__blog_state.data__blocs__blog__blog_state;
  const blog_event = packages__personal_website__data__blocs__blog__blog_event.data__blocs__blog__blog_event;
  const web = packages__personal_website__plugins__fb_firestore__web.plugins__fb_firestore__web;
  const snapshot = packages__personal_website__plugins__fb_firestore__classes__snapshot.plugins__fb_firestore__classes__snapshot;
  const bloc = packages__bloc__bloc.src__bloc;
  const bloc$ = Object.create(dart.library);
  const blog_bloc = Object.create(dart.library);
  let _AsyncStarImplOfBlogState = () => (_AsyncStarImplOfBlogState = dart.constFn(async._AsyncStarImpl$(blog_state.BlogState)))();
  let JSArrayOfFbDocumentSnapshot = () => (JSArrayOfFbDocumentSnapshot = dart.constFn(_interceptors.JSArray$(snapshot.FbDocumentSnapshot)))();
  const CT = Object.create(null);
  const _mapLoadToState = dart.privateName(blog_bloc, "_mapLoadToState");
  blog_bloc.BlogBloc = class BlogBloc extends bloc.Bloc$(blog_event.BlogEvent, blog_state.BlogState) {
    get initialState() {
      return new blog_state.InitialBlogState.new();
    }
    mapEventToState(event) {
      blog_event.BlogEvent._check(event);
      return new (_AsyncStarImplOfBlogState()).new((function* mapEventToState(stream) {
        if (blog_event.LoadPosts.is(event)) {
          if (stream.addStream(this[_mapLoadToState](event))) return;
          yield;
        }
      }).bind(this)).stream;
    }
    [_mapLoadToState](event) {
      return new (_AsyncStarImplOfBlogState()).new(function* _mapLoadToState(stream) {
        let _data = (yield web.FbFirestore.getDocs("posts"));
        if (_data != null) {
          if (stream.add(new blog_state.PostsReady.new(_data))) return;
          yield;
        } else {
          if (stream.add(new blog_state.PostsReady.new(JSArrayOfFbDocumentSnapshot().of([])))) return;
          yield;
        }
      }).stream;
    }
  };
  (blog_bloc.BlogBloc.new = function() {
    blog_bloc.BlogBloc.__proto__.new.call(this);
    ;
  }).prototype = blog_bloc.BlogBloc.prototype;
  dart.addTypeTests(blog_bloc.BlogBloc);
  dart.setMethodSignature(blog_bloc.BlogBloc, () => ({
    __proto__: dart.getMethods(blog_bloc.BlogBloc.__proto__),
    mapEventToState: dart.fnType(async.Stream$(blog_state.BlogState), [core.Object]),
    [_mapLoadToState]: dart.fnType(async.Stream$(blog_state.BlogState), [blog_event.LoadPosts])
  }));
  dart.setGetterSignature(blog_bloc.BlogBloc, () => ({
    __proto__: dart.getGetters(blog_bloc.BlogBloc.__proto__),
    initialState: blog_state.BlogState
  }));
  dart.setLibraryUri(blog_bloc.BlogBloc, "package:personal_website/data/blocs/blog/blog_bloc.dart");
  dart.trackLibraries("packages/personal_website/data/blocs/blog/bloc", {
    "package:personal_website/data/blocs/blog/bloc.dart": bloc$,
    "package:personal_website/data/blocs/blog/blog_bloc.dart": blog_bloc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_bloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;AASgC;IAAkB;oBAIpC;;AADqB;AAG/B,YAAU,wBAAN,KAAK;AACP,+BAAO,sBAAgB,KAAK;UAA5B;;MAEJ;;sBAE4C;AAAX;AACzB,qBAAQ,MAAkB,wBAAQ;AACxC,YAAI,KAAK,IAAI;AACX,yBAAM,8BAAW,KAAK;UAAtB;;AAEA,yBAAM,8BAAW;UAAjB;;MAEJ;;;;;;EACF","file":"bloc.ddc.js"}');
  // Exports:
  return {
    data__blocs__blog__bloc: bloc$,
    data__blocs__blog__blog_bloc: blog_bloc
  };
});

//# sourceMappingURL=bloc.ddc.js.map

define(['dart_sdk', 'packages/personal_website/data/blocs/blog/blog_state', 'packages/personal_website/data/blocs/blog/blog_event', 'packages/personal_website/data/classes/fb_post', 'packages/bloc/bloc'], function(dart_sdk, packages__personal_website__data__blocs__blog__blog_state, packages__personal_website__data__blocs__blog__blog_event, packages__personal_website__data__classes__fb_post, packages__bloc__bloc) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blog_state = packages__personal_website__data__blocs__blog__blog_state.data__blocs__blog__blog_state;
  const blog_event = packages__personal_website__data__blocs__blog__blog_event.data__blocs__blog__blog_event;
  const fb_post = packages__personal_website__data__classes__fb_post.data__classes__fb_post;
  const bloc = packages__bloc__bloc.src__bloc;
  const bloc$ = Object.create(dart.library);
  const blog_bloc = Object.create(dart.library);
  let _AsyncStarImplOfBlogState = () => (_AsyncStarImplOfBlogState = dart.constFn(async._AsyncStarImpl$(blog_state.BlogState)))();
  let JSArrayOfFbPost = () => (JSArrayOfFbPost = dart.constFn(_interceptors.JSArray$(fb_post.FbPost)))();
  const CT = Object.create(null);
  const _author = dart.privateName(blog_bloc, "_author");
  const _posts = dart.privateName(blog_bloc, "_posts");
  const _mapLoadToState = dart.privateName(blog_bloc, "_mapLoadToState");
  blog_bloc.BlogBloc = class BlogBloc extends bloc.Bloc$(blog_event.BlogEvent, blog_state.BlogState) {
    get initialState() {
      return new blog_state.PostsReady.new(this[_posts]);
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
      return new (_AsyncStarImplOfBlogState()).new((function* _mapLoadToState(stream) {
        if (this[_posts] != null) {
          if (stream.add(new blog_state.PostsReady.new(this[_posts]))) return;
          yield;
        } else {
          if (stream.add(new blog_state.PostsReady.new(JSArrayOfFbPost().of([])))) return;
          yield;
        }
      }).bind(this)).stream;
    }
    get [_posts]() {
      return JSArrayOfFbPost().of([new fb_post.FbPost.new({author: this[_author], title: "Launching… Space Curiosity!", description: "New Flutter App", path: "assets/posts/2019-03-08-app-launch-space-curiosity", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2FKYmOU1HF97dX6MZcvurBCInF5182%2Ficon.png?alt=media&token=ed661a7f-6264-47a9-bbc9-5c3d22220b53", slug: "/blog/2019/03/10/app-launch-space-curiosity/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"}), new fb_post.FbPost.new({author: this[_author], title: "The Pitch Pipe", description: "Sheet Music Made Easy", path: "assets/posts/2019-03-10-the-pitch-pipe", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fpitchpipe.png?alt=media&token=c6f94501-643e-45fb-b724-232f85edf5d1", slug: "/blog/2019/03/10/the-pitch-pipe/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"}), new fb_post.FbPost.new({author: this[_author], title: "Flutter + Fastlane (One Click Beta)", description: "One Click Release to Beta", path: "assets/posts/2019-03-11-flutter-one-click-release", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fcross-platform.jpg?alt=media&token=790f7aac-a472-41f2-9b0e-f2ebec42c62b", slug: "/blog/2019/03/11/flutter-one-click-release/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"}), new fb_post.FbPost.new({author: this[_author], title: "Building A Piano with Flutter", description: "Full piano built with Flutter", path: "assets/posts/2019-03-12-making-a-piano", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Ffinal.png?alt=media&token=b9d3f3d0-9bbf-442e-ae98-d08bdf72e765", slug: "/blog/2019/03/12/making-a-piano/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"}), new fb_post.FbPost.new({author: this[_author], title: "Automate Flutter App Releases", description: "Script to release flutter apps to production", path: "assets/posts/2019-03-15-automate-flutter-apps", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fnew_project.png?alt=media&token=d4684c46-7b93-43ae-98b4-29ceb82a2d43", slug: "/blog/2019/03/15/automate-flutter-apps/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"}), new fb_post.FbPost.new({author: this[_author], title: "How to build a native cross platform project with Flutter", description: "Create a Flutter that targets the web and mobile taking full advantage of native plugins", path: "assets/posts/2019-09-06-one-codebase-many-places", image: "https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fstarter.png?alt=media&token=e5f5692c-c30e-40b8-a6cd-a31f1ab1a898", slug: "/blog/2019/09/06/one-codebase-many-places/", datePublished: new core.DateTime.now().millisecondsSinceEpoch, tags: "flutter, ios, android"})]);
    }
  };
  (blog_bloc.BlogBloc.new = function() {
    this[_author] = "Rody Davis";
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
    initialState: blog_state.BlogState,
    [_posts]: core.List$(fb_post.FbPost)
  }));
  dart.setLibraryUri(blog_bloc.BlogBloc, "package:personal_website/data/blocs/blog/blog_bloc.dart");
  dart.setFieldSignature(blog_bloc.BlogBloc, () => ({
    __proto__: dart.getFields(blog_bloc.BlogBloc.__proto__),
    [_author]: dart.finalFieldType(core.String)
  }));
  dart.trackLibraries("packages/personal_website/data/blocs/blog/bloc", {
    "package:personal_website/data/blocs/blog/bloc.dart": bloc$,
    "package:personal_website/data/blocs/blog/blog_bloc.dart": blog_bloc
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_bloc.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;AASgC,2CAAW;IAAO;oBAIpC;;AADqB;AAG/B,YAAU,wBAAN,KAAK;AACP,+BAAO,sBAAgB,KAAK;UAA5B;;MAEJ;;sBAE4C;AAAX;AAE/B,YAAI,gBAAU;AACZ,yBAAM,8BAAW;UAAjB;;AAEA,yBAAM,8BAAW;UAAjB;;MAEJ;;;AAG2B,YAAQ,uBAC7B,gCACU,sBACD,4CACM,yBACP,6DAEF,uLACE,+DACkB,AAAM,sDACxB,2BAER,gCACU,sBACD,+BACM,+BACP,iDAEF,4LACE,mDACkB,AAAM,sDACxB,2BAER,gCACU,sBACD,oDACM,mCACP,4DAEF,iMACE,8DACkB,AAAM,sDACxB,2BAER,gCACU,sBACD,8CACM,uCACP,iDAEF,wLACE,mDACkB,AAAM,sDACxB,2BAER,gCACU,sBACD,8CACM,sDACP,wDAEF,8LACE,0DACkB,AAAM,sDACxB,2BAER,gCACU,sBACD,0EAEH,kGACE,2DAEF,0LACE,6DACkB,AAAM,sDACxB;IAET;;;IArEC,gBAAU;;;EAsElB","file":"bloc.ddc.js"}');
  // Exports:
  return {
    data__blocs__blog__bloc: bloc$,
    data__blocs__blog__blog_bloc: blog_bloc
  };
});

//# sourceMappingURL=bloc.ddc.js.map

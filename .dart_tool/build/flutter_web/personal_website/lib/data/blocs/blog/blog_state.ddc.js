define(['dart_sdk', 'packages/personal_website/plugins/fb_firestore/classes/snapshot'], function(dart_sdk, packages__personal_website__plugins__fb_firestore__classes__snapshot) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const snapshot = packages__personal_website__plugins__fb_firestore__classes__snapshot.plugins__fb_firestore__classes__snapshot;
  const blog_state = Object.create(dart.library);
  const CT = Object.create(null);
  blog_state.BlogState = class BlogState extends core.Object {};
  (blog_state.BlogState.new = function() {
    ;
  }).prototype = blog_state.BlogState.prototype;
  dart.addTypeTests(blog_state.BlogState);
  dart.setLibraryUri(blog_state.BlogState, "package:personal_website/data/blocs/blog/blog_state.dart");
  blog_state.InitialBlogState = class InitialBlogState extends blog_state.BlogState {};
  (blog_state.InitialBlogState.new = function() {
    ;
  }).prototype = blog_state.InitialBlogState.prototype;
  dart.addTypeTests(blog_state.InitialBlogState);
  dart.setLibraryUri(blog_state.InitialBlogState, "package:personal_website/data/blocs/blog/blog_state.dart");
  blog_state.PostsReady = class PostsReady extends blog_state.BlogState {
    get posts() {
      return this[posts$];
    }
    set posts(value) {
      super.posts = value;
    }
  };
  (blog_state.PostsReady.new = function(posts) {
    this[posts$] = posts;
    ;
  }).prototype = blog_state.PostsReady.prototype;
  dart.addTypeTests(blog_state.PostsReady);
  const posts$ = Symbol("PostsReady.posts");
  dart.setLibraryUri(blog_state.PostsReady, "package:personal_website/data/blocs/blog/blog_state.dart");
  dart.setFieldSignature(blog_state.PostsReady, () => ({
    __proto__: dart.getFields(blog_state.PostsReady.__proto__),
    posts: dart.finalFieldType(core.List$(snapshot.FbDocumentSnapshot))
  }));
  dart.trackLibraries("packages/personal_website/data/blocs/blog/blog_state", {
    "package:personal_website/data/blocs/blog/blog_state.dart": blog_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_state.dart"],"names":[],"mappings":";;;;;;;;;;;EAI0B;;;;;;EAEgB;;;;IAGT;;;;;;;;IAEf;;EAAM","file":"blog_state.ddc.js"}');
  // Exports:
  return {
    data__blocs__blog__blog_state: blog_state
  };
});

//# sourceMappingURL=blog_state.ddc.js.map

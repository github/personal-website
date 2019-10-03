define(['dart_sdk', 'packages/personal_website/data/classes/fb_post'], function(dart_sdk, packages__personal_website__data__classes__fb_post) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fb_post = packages__personal_website__data__classes__fb_post.data__classes__fb_post;
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
  const PostsReady_posts = dart.privateName(blog_state, "PostsReady.posts");
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
  const posts$ = PostsReady_posts;
  dart.setLibraryUri(blog_state.PostsReady, "package:personal_website/data/blocs/blog/blog_state.dart");
  dart.setFieldSignature(blog_state.PostsReady, () => ({
    __proto__: dart.getFields(blog_state.PostsReady.__proto__),
    posts: dart.finalFieldType(core.List$(fb_post.FbPost))
  }));
  dart.trackLibraries("packages/personal_website/data/blocs/blog/blog_state", {
    "package:personal_website/data/blocs/blog/blog_state.dart": blog_state
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_state.dart"],"names":[],"mappings":";;;;;;;;;;;EAK0B;;;;;;EAEgB;;;;;IAIrB;;;;;;;;IAEH;;EAAM","file":"blog_state.ddc.js"}');
  // Exports:
  return {
    data__blocs__blog__blog_state: blog_state
  };
});

//# sourceMappingURL=blog_state.ddc.js.map

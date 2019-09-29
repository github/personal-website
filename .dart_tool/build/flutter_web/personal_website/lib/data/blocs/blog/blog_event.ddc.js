define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const blog_event = Object.create(dart.library);
  const CT = Object.create(null);
  blog_event.BlogEvent = class BlogEvent extends core.Object {};
  (blog_event.BlogEvent.new = function() {
    ;
  }).prototype = blog_event.BlogEvent.prototype;
  dart.addTypeTests(blog_event.BlogEvent);
  dart.setLibraryUri(blog_event.BlogEvent, "package:personal_website/data/blocs/blog/blog_event.dart");
  blog_event.LoadPosts = class LoadPosts extends blog_event.BlogEvent {};
  (blog_event.LoadPosts.new = function() {
    ;
  }).prototype = blog_event.LoadPosts.prototype;
  dart.addTypeTests(blog_event.LoadPosts);
  dart.setLibraryUri(blog_event.LoadPosts, "package:personal_website/data/blocs/blog/blog_event.dart");
  dart.trackLibraries("packages/personal_website/data/blocs/blog/blog_event", {
    "package:personal_website/data/blocs/blog/blog_event.dart": blog_event
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["blog_event.dart"],"names":[],"mappings":";;;;;;;;;;EAG0B;;;;;;EAES","file":"blog_event.ddc.js"}');
  // Exports:
  return {
    data__blocs__blog__blog_event: blog_event
  };
});

//# sourceMappingURL=blog_event.ddc.js.map

define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const fb_post = Object.create(dart.library);
  const $_get = dartx._get;
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  const CT = Object.create(null);
  fb_post.FbPost = class FbPost extends core.Object {
    get author() {
      return this[author$];
    }
    set author(value) {
      this[author$] = value;
    }
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get tags() {
      return this[tags$];
    }
    set tags(value) {
      this[tags$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get description() {
      return this[description$];
    }
    set description(value) {
      this[description$] = value;
    }
    get datePublished() {
      return this[datePublished$];
    }
    set datePublished(value) {
      this[datePublished$] = value;
    }
    get markdown() {
      return this[markdown$];
    }
    set markdown(value) {
      this[markdown$] = value;
    }
    static fromJson(json) {
      return new fb_post.FbPost.new({author: core.String._check(json[$_get]("author")), image: core.String._check(json[$_get]("image")), tags: core.String._check(json[$_get]("tags")), title: core.String._check(json[$_get]("title")), description: core.String._check(json[$_get]("description")), datePublished: core.int._check(json[$_get]("date_published")), markdown: core.String._check(json[$_get]("markdown"))});
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["author", this.author, "image", this.image, "tags", this.tags, "title", this.title, "description", this.description, "date_published", this.datePublished, "markdown", this.markdown]);
    }
  };
  (fb_post.FbPost.new = function(opts) {
    let author = opts && 'author' in opts ? opts.author : null;
    let image = opts && 'image' in opts ? opts.image : null;
    let tags = opts && 'tags' in opts ? opts.tags : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let description = opts && 'description' in opts ? opts.description : null;
    let datePublished = opts && 'datePublished' in opts ? opts.datePublished : null;
    let markdown = opts && 'markdown' in opts ? opts.markdown : null;
    this[author$] = author;
    this[image$] = image;
    this[tags$] = tags;
    this[title$] = title;
    this[description$] = description;
    this[datePublished$] = datePublished;
    this[markdown$] = markdown;
    ;
  }).prototype = fb_post.FbPost.prototype;
  dart.addTypeTests(fb_post.FbPost);
  const author$ = Symbol("FbPost.author");
  const image$ = Symbol("FbPost.image");
  const tags$ = Symbol("FbPost.tags");
  const title$ = Symbol("FbPost.title");
  const description$ = Symbol("FbPost.description");
  const datePublished$ = Symbol("FbPost.datePublished");
  const markdown$ = Symbol("FbPost.markdown");
  dart.setMethodSignature(fb_post.FbPost, () => ({
    __proto__: dart.getMethods(fb_post.FbPost.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setLibraryUri(fb_post.FbPost, "package:personal_website/data/classes/fb_post.dart");
  dart.setFieldSignature(fb_post.FbPost, () => ({
    __proto__: dart.getFields(fb_post.FbPost.__proto__),
    author: dart.fieldType(core.String),
    image: dart.fieldType(core.String),
    tags: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    description: dart.fieldType(core.String),
    datePublished: dart.fieldType(core.int),
    markdown: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/personal_website/data/classes/fb_post", {
    "package:personal_website/data/classes/fb_post.dart": fb_post
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["fb_post.dart"],"names":[],"mappings":";;;;;;;;;;;IACS;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACH;;;;;;IACG;;;;;;oBAYsC;AAAS,gEACxC,AAAI,IAAA,QAAC,sCACN,AAAI,IAAA,QAAC,oCACN,AAAI,IAAA,QAAC,oCACJ,AAAI,IAAA,QAAC,2CACC,AAAI,IAAA,QAAC,gDACH,AAAI,IAAA,QAAC,iDACV,AAAI,IAAA,QAAC;IAChB;;AAE4B,uDAC3B,UAAU,aACV,SAAS,YACT,QAAQ,WACR,SAAS,YACT,eAAe,kBACf,kBAAkB,oBAClB,YAAY;IACb;;;QA3BE;QACA;QACA;QACA;QACA;QACA;QACA;IANA;IACA;IACA;IACA;IACA;IACA;IACA;;EACL","file":"fb_post.ddc.js"}');
  // Exports:
  return {
    data__classes__fb_post: fb_post
  };
});

//# sourceMappingURL=fb_post.ddc.js.map

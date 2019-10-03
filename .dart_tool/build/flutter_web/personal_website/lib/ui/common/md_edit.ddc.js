define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const text_field = packages__flutter__material.src__material__text_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const input_border = packages__flutter__material.src__material__input_border;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const md_edit = Object.create(dart.library);
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 30,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C1 || CT.C1,
        [_Location_name]: null,
        [_Location_column]: 19,
        [_Location_line]: 26,
        [_Location_file]: "org-dartlang-app:///packages/personal_website/ui/common/md_edit.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "icon",
        [_Location_column]: 13,
        [_Location_line]: 26,
        [_Location_file]: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "onPressed",
        [_Location_column]: 13,
        [_Location_line]: 27,
        [_Location_file]: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C4 || CT.C4,
        [_Location_name]: null,
        [_Location_column]: 11,
        [_Location_line]: 25,
        [_Location_file]: "org-dartlang-app:///packages/personal_website/ui/common/md_edit.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "actions",
        [_Location_column]: 9,
        [_Location_line]: 24,
        [_Location_file]: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C8 || CT.C8,
        [_Location_name]: null,
        [_Location_column]: 15,
        [_Location_line]: 23,
        [_Location_file]: "org-dartlang-app:///packages/personal_website/ui/common/md_edit.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "controller",
        [_Location_column]: 9,
        [_Location_line]: 32,
        [_Location_file]: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "maxLines",
        [_Location_column]: 9,
        [_Location_line]: 33,
        [_Location_file]: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "keyboardType",
        [_Location_column]: 9,
        [_Location_line]: 34,
        [_Location_file]: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "decoration",
        [_Location_column]: 9,
        [_Location_line]: 35,
        [_Location_file]: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14, C15 || CT.C15], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C11 || CT.C11,
        [_Location_name]: null,
        [_Location_column]: 13,
        [_Location_line]: 31,
        [_Location_file]: "org-dartlang-app:///packages/personal_website/ui/common/md_edit.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "appBar",
        [_Location_column]: 7,
        [_Location_line]: 23,
        [_Location_file]: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: null,
        [_Location_name]: "body",
        [_Location_column]: 7,
        [_Location_line]: 31,
        [_Location_file]: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        [_Location_parameterLocations]: C17 || CT.C17,
        [_Location_name]: null,
        [_Location_column]: 12,
        [_Location_line]: 22,
        [_Location_file]: "org-dartlang-app:///packages/personal_website/ui/common/md_edit.dart"
      });
    }
  });
  const MarkdownEditPage_content = dart.privateName(md_edit, "MarkdownEditPage.content");
  md_edit.MarkdownEditPage = class MarkdownEditPage extends framework.StatefulWidget {
    get content() {
      return this[content$];
    }
    set content(value) {
      super.content = value;
    }
    createState() {
      return new md_edit._MarkdownEditPageState.new();
    }
  };
  (md_edit.MarkdownEditPage.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let content = opts && 'content' in opts ? opts.content : null;
    let $36creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[content$] = content;
    md_edit.MarkdownEditPage.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $36creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = md_edit.MarkdownEditPage.prototype;
  dart.addTypeTests(md_edit.MarkdownEditPage);
  const content$ = MarkdownEditPage_content;
  dart.setMethodSignature(md_edit.MarkdownEditPage, () => ({
    __proto__: dart.getMethods(md_edit.MarkdownEditPage.__proto__),
    createState: dart.fnType(md_edit._MarkdownEditPageState, [])
  }));
  dart.setLibraryUri(md_edit.MarkdownEditPage, "package:personal_website/ui/common/md_edit.dart");
  dart.setFieldSignature(md_edit.MarkdownEditPage, () => ({
    __proto__: dart.getFields(md_edit.MarkdownEditPage.__proto__),
    content: dart.finalFieldType(core.String)
  }));
  const _controller = dart.privateName(md_edit, "_controller");
  const _Location_parameterLocations = dart.privateName(widget_inspector, "_Location.parameterLocations");
  const _Location_name = dart.privateName(widget_inspector, "_Location.name");
  const _Location_column = dart.privateName(widget_inspector, "_Location.column");
  const _Location_line = dart.privateName(widget_inspector, "_Location.line");
  const _Location_file = dart.privateName(widget_inspector, "_Location.file");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C14;
  let C15;
  let C11;
  let C10;
  let C18;
  let C19;
  let C17;
  let C16;
  md_edit._MarkdownEditPageState = class _MarkdownEditPageState extends framework.State$(md_edit.MarkdownEditPage) {
    initState() {
      let t0;
      this[_controller] = new editable_text.TextEditingController.new({text: (t0 = this.widget, t0 == null ? null : t0.content)});
      super.initState();
    }
    build(context) {
      return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.save, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: dart.fn(() => navigator.Navigator.pop(core.String, context, this[_controller].text), VoidTobool()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3})]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), body: new text_field.TextField.new({controller: this[_controller], maxLines: null, keyboardType: text_input.TextInputType.multiline, decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (md_edit._MarkdownEditPageState.new = function() {
    this[_controller] = null;
    md_edit._MarkdownEditPageState.__proto__.new.call(this);
    ;
  }).prototype = md_edit._MarkdownEditPageState.prototype;
  dart.addTypeTests(md_edit._MarkdownEditPageState);
  dart.setMethodSignature(md_edit._MarkdownEditPageState, () => ({
    __proto__: dart.getMethods(md_edit._MarkdownEditPageState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(md_edit._MarkdownEditPageState, "package:personal_website/ui/common/md_edit.dart");
  dart.setFieldSignature(md_edit._MarkdownEditPageState, () => ({
    __proto__: dart.getFields(md_edit._MarkdownEditPageState.__proto__),
    [_controller]: dart.fieldType(editable_text.TextEditingController)
  }));
  dart.trackLibraries("packages/personal_website/ui/common/md_edit", {
    "package:personal_website/ui/common/md_edit.dart": md_edit
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["md_edit.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;;AAK2B;IAAwB;;;QAHpC;QAAU;;;AAAY,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAU/D,oBAAc,mFAA4B,OAAQ;MAC5C;IACR;UAG0B;AACxB,YAAO,oCACG,iCACW,sBACf,sCACQ,kBAAW,qFACN,cAAgB,qCAAI,OAAO,EAAE,AAAY,8JAIpD,0CACQ,6BACF,oBACkB,gDAChB,iDACU;IAI5B;;;IA3BsB;;;EA4BxB","file":"md_edit.ddc.js"}');
  // Exports:
  return {
    ui__common__md_edit: md_edit
  };
});

//# sourceMappingURL=md_edit.ddc.js.map

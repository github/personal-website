define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/personal_website/data/classes/fb_post', 'packages/flutter_bloc/flutter_bloc', 'packages/fb_auth/data/blocs/auth/auth_bloc', 'packages/fb_auth/data/blocs/auth/auth_state', 'packages/flutter/material', 'packages/personal_website/plugins/fb_firestore/web', 'packages/personal_website/generated/i18n', 'packages/personal_website/plugins/file_upload/web', 'packages/personal_website/data/classes/media_search', 'packages/flutter/src/painting/_network_image_web', 'packages/extended_text_field/extended_text_field', 'packages/flutter/src/gestures/arena'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__personal_website__data__classes__fb_post, packages__flutter_bloc__flutter_bloc, packages__fb_auth__data__blocs__auth__auth_bloc, packages__fb_auth__data__blocs__auth__auth_state, packages__flutter__material, packages__personal_website__plugins__fb_firestore__web, packages__personal_website__generated__i18n, packages__personal_website__plugins__file_upload__web, packages__personal_website__data__classes__media_search, packages__flutter__src__painting___network_image_web, packages__extended_text_field__extended_text_field, packages__flutter__src__gestures__arena) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const form = packages__flutter__src__widgets__actions.src__widgets__form;
  const editable_text = packages__flutter__src__widgets__actions.src__widgets__editable_text;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const gesture_detector = packages__flutter__src__widgets__actions.src__widgets__gesture_detector;
  const focus_scope = packages__flutter__src__widgets__actions.src__widgets__focus_scope;
  const focus_manager = packages__flutter__src__widgets__actions.src__widgets__focus_manager;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const fb_post = packages__personal_website__data__classes__fb_post.data__classes__fb_post;
  const bloc_builder = packages__flutter_bloc__flutter_bloc.src__bloc_builder;
  const auth_bloc = packages__fb_auth__data__blocs__auth__auth_bloc.data__blocs__auth__auth_bloc;
  const auth_state = packages__fb_auth__data__blocs__auth__auth_state.data__blocs__auth__auth_state;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const icons = packages__flutter__material.src__material__icons;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const text_form_field = packages__flutter__material.src__material__text_form_field;
  const input_decorator = packages__flutter__material.src__material__input_decorator;
  const selectable_text = packages__flutter__material.src__material__selectable_text;
  const input_border = packages__flutter__material.src__material__input_border;
  const web = packages__personal_website__plugins__fb_firestore__web.plugins__fb_firestore__web;
  const i18n = packages__personal_website__generated__i18n.generated__i18n;
  const web$ = packages__personal_website__plugins__file_upload__web.plugins__file_upload__web;
  const media_search = packages__personal_website__data__classes__media_search.data__classes__media_search;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const extended_text_field = packages__extended_text_field__extended_text_field.src__extended_text_field;
  const text_input = packages__flutter__src__gestures__arena.src__services__text_input;
  const edit_post = Object.create(dart.library);
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  let GlobalKeyOfFormState = () => (GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))();
  let BlocBuilderOfAuthBloc$AuthState = () => (BlocBuilderOfAuthBloc$AuthState = dart.constFn(bloc_builder.BlocBuilder$(auth_bloc.AuthBloc, auth_state.AuthState)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let MediaSearchToNull = () => (MediaSearchToNull = dart.constFn(dart.fnType(core.Null, [media_search.MediaSearch])))();
  let BuildContextAndAuthStateToScaffold = () => (BuildContextAndAuthStateToScaffold = dart.constFn(dart.fnType(scaffold.Scaffold, [framework.BuildContext, auth_state.AuthState])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 42,
        line: 48,
        file: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 18,
        line: 48,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 32,
        line: 51,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 21,
        line: 51,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 15,
        line: 51,
        file: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 15,
        line: 52,
        file: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C7 || CT.C7,
        name: null,
        column: 13,
        line: 50,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 11,
        line: 48,
        file: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 11,
        line: 49,
        file: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C11 || CT.C11,
        name: null,
        column: 17,
        line: 47,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C15() {
      return C15 = dart.constList([], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 33,
        line: 82,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialValue",
        column: 25,
        line: 86,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 25,
        line: 88,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSaved",
        column: 25,
        line: 89,
        file: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "validator",
        column: 25,
        line: 90,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20, C21 || CT.C21], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 30,
        line: 85,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 85,
        file: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24], widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C23 || CT.C23,
        name: null,
        column: 21,
        line: 84,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialValue",
        column: 25,
        line: 95,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 25,
        line: 96,
        file: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSaved",
        column: 25,
        line: 97,
        file: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "validator",
        column: 25,
        line: 98,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28, C29 || CT.C29, C30 || CT.C30], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 30,
        line: 94,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 94,
        file: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C32 || CT.C32,
        name: null,
        column: 21,
        line: 93,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialValue",
        column: 25,
        line: 103,
        file: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 25,
        line: 104,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSaved",
        column: 25,
        line: 105,
        file: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "validator",
        column: 25,
        line: 106,
        file: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37, C38 || CT.C38, C39 || CT.C39], widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C35 || CT.C35,
        name: null,
        column: 30,
        line: 102,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 102,
        file: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C41 || CT.C41,
        name: null,
        column: 21,
        line: 101,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "initialValue",
        column: 25,
        line: 111,
        file: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 25,
        line: 112,
        file: null
      });
    },
    get C47() {
      return C47 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onSaved",
        column: 25,
        line: 113,
        file: null
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "validator",
        column: 25,
        line: 114,
        file: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45, C46 || CT.C46, C47 || CT.C47, C48 || CT.C48], widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C44 || CT.C44,
        name: null,
        column: 30,
        line: 110,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 110,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 21,
        line: 109,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 46,
        line: 120,
        file: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C53 || CT.C53,
        name: null,
        column: 38,
        line: 120,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 25,
        line: 119,
        file: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 120,
        file: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C56 || CT.C56,
        name: null,
        column: 23,
        line: 118,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 44,
        line: 124,
        file: null
      });
    },
    get C60() {
      return C60 = dart.constList([C61 || CT.C61], widget_inspector._Location);
    },
    get C59() {
      return C59 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C60 || CT.C60,
        name: null,
        column: 32,
        line: 123,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 50,
        line: 126,
        file: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "maxLines",
        column: 58,
        line: 126,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64, C65 || CT.C65], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 35,
        line: 126,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 25,
        line: 123,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "subtitle",
        column: 25,
        line: 126,
        file: null
      });
    },
    get C67() {
      return C67 = dart.constList([C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C66() {
      return C66 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C67 || CT.C67,
        name: null,
        column: 23,
        line: 122,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "user",
        column: 25,
        line: 131,
        file: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onChanged",
        column: 25,
        line: 132,
        file: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C71 || CT.C71,
        name: null,
        column: 30,
        line: 130,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 130,
        file: null
      });
    },
    get C75() {
      return C75 = dart.constList([C76 || CT.C76], widget_inspector._Location);
    },
    get C74() {
      return C74 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C75 || CT.C75,
        name: null,
        column: 21,
        line: 129,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 8,
        right: 8,
        top: 8,
        left: 8
      });
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "controller",
        column: 25,
        line: 143,
        file: null
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onChanged",
        column: 25,
        line: 144,
        file: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "maxLines",
        column: 25,
        line: 145,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "keyboardType",
        column: 25,
        line: 146,
        file: null
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "decoration",
        column: 25,
        line: 147,
        file: null
      });
    },
    get C79() {
      return C79 = dart.constList([C80 || CT.C80, C81 || CT.C81, C82 || CT.C82, C83 || CT.C83, C84 || CT.C84], widget_inspector._Location);
    },
    get C78() {
      return C78 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C79 || CT.C79,
        name: null,
        column: 30,
        line: 142,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 23,
        line: 141,
        file: null
      });
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 142,
        file: null
      });
    },
    get C86() {
      return C86 = dart.constList([C87 || CT.C87, C88 || CT.C88], widget_inspector._Location);
    },
    get C85() {
      return C85 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C86 || CT.C86,
        name: null,
        column: 21,
        line: 140,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 17,
        line: 81,
        file: null
      });
    },
    get C90() {
      return C90 = dart.constList([C91 || CT.C91], widget_inspector._Location);
    },
    get C89() {
      return C89 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C90 || CT.C90,
        name: null,
        column: 22,
        line: 80,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 80,
        file: null
      });
    },
    get C93() {
      return C93 = dart.constList([C94 || CT.C94], widget_inspector._Location);
    },
    get C92() {
      return C92 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C93 || CT.C93,
        name: null,
        column: 20,
        line: 79,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "key",
        column: 13,
        line: 78,
        file: null
      });
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 79,
        file: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97, C98 || CT.C98], widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C96 || CT.C96,
        name: null,
        column: 18,
        line: 77,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 11,
        line: 76,
        file: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 77,
        file: null
      });
    },
    get C100() {
      return C100 = dart.constList([C101 || CT.C101, C102 || CT.C102], widget_inspector._Location);
    },
    get C99() {
      return C99 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C100 || CT.C100,
        name: null,
        column: 15,
        line: 75,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 9,
        line: 47,
        file: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 9,
        line: 75,
        file: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C104 || CT.C104,
        name: null,
        column: 36,
        line: 46,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 46,
        file: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109], widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C108 || CT.C108,
        name: null,
        column: 12,
        line: 45,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/edit_post.dart"
      });
    }
  });
  edit_post.EditPostScreen = class EditPostScreen extends framework.StatefulWidget {
    get post() {
      return this[post$];
    }
    set post(value) {
      super.post = value;
    }
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    createState() {
      return new edit_post._EditPostScreenState.new();
    }
  };
  (edit_post.EditPostScreen.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let post = opts && 'post' in opts ? opts.post : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[post$] = post;
    this[id$] = id;
    edit_post.EditPostScreen.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = edit_post.EditPostScreen.prototype;
  dart.addTypeTests(edit_post.EditPostScreen);
  const post$ = Symbol("EditPostScreen.post");
  const id$ = Symbol("EditPostScreen.id");
  dart.setMethodSignature(edit_post.EditPostScreen, () => ({
    __proto__: dart.getMethods(edit_post.EditPostScreen.__proto__),
    createState: dart.fnType(edit_post._EditPostScreenState, [])
  }));
  dart.setLibraryUri(edit_post.EditPostScreen, "package:personal_website/ui/blog/edit_post.dart");
  dart.setFieldSignature(edit_post.EditPostScreen, () => ({
    __proto__: dart.getFields(edit_post.EditPostScreen.__proto__),
    post: dart.finalFieldType(fb_post.FbPost),
    id: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(edit_post.EditPostScreen, {
    /*edit_post.EditPostScreen.routeName*/get routeName() {
      return "/blog/new";
    }
  });
  const _formKey = dart.privateName(edit_post, "_formKey");
  const _tags = dart.privateName(edit_post, "_tags");
  const _image = dart.privateName(edit_post, "_image");
  const _author = dart.privateName(edit_post, "_author");
  const _description = dart.privateName(edit_post, "_description");
  const _title = dart.privateName(edit_post, "_title");
  const _markdown = dart.privateName(edit_post, "_markdown");
  const _controller = dart.privateName(edit_post, "_controller");
  const _loading = dart.privateName(edit_post, "_loading");
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C11;
  let C10;
  let C15;
  let C14;
  let C18;
  let C19;
  let C20;
  let C21;
  let C17;
  let C16;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C29;
  let C30;
  let C26;
  let C25;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C38;
  let C39;
  let C35;
  let C34;
  let C42;
  let C41;
  let C40;
  let C45;
  let C46;
  let C47;
  let C48;
  let C44;
  let C43;
  let C51;
  let C50;
  let C49;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C56;
  let C55;
  let C61;
  let C60;
  let C59;
  let C64;
  let C65;
  let C63;
  let C62;
  let C68;
  let C69;
  let C67;
  let C66;
  let C72;
  let C73;
  let C71;
  let C70;
  let C76;
  let C75;
  let C74;
  let C77;
  let C80;
  let C81;
  let C82;
  let C83;
  let C84;
  let C79;
  let C78;
  let C87;
  let C88;
  let C86;
  let C85;
  let C91;
  let C90;
  let C89;
  let C94;
  let C93;
  let C92;
  let C97;
  let C98;
  let C96;
  let C95;
  let C101;
  let C102;
  let C100;
  let C99;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C108;
  let C107;
  edit_post._EditPostScreenState = class _EditPostScreenState extends framework.State$(edit_post.EditPostScreen) {
    initState() {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5, t0$6, t0$7, t0$8, t0$9;
      this[_title] = (t0$ = (t0 = this.widget, t0 == null ? null : t0.post), t0$ == null ? null : t0$.title);
      this[_image] = (t0$1 = (t0$0 = this.widget, t0$0 == null ? null : t0$0.post), t0$1 == null ? null : t0$1.image);
      this[_author] = (t0$3 = (t0$2 = this.widget, t0$2 == null ? null : t0$2.post), t0$3 == null ? null : t0$3.author);
      this[_description] = (t0$5 = (t0$4 = this.widget, t0$4 == null ? null : t0$4.post), t0$5 == null ? null : t0$5.description);
      this[_tags] = (t0$7 = (t0$6 = this.widget, t0$6 == null ? null : t0$6.post), t0$7 == null ? null : t0$7.tags);
      this[_markdown] = (t0$9 = (t0$8 = this.widget, t0$8 == null ? null : t0$8.post), t0$9 == null ? null : t0$9.markdown);
      this[_controller] = new editable_text.TextEditingController.new({text: this[_markdown]});
      super.initState();
    }
    build(context) {
      return new (BlocBuilderOfAuthBloc$AuthState()).new({builder: dart.fn((context, state) => {
          let t0, t3, t3$, t2, t2$;
          return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new((t0 = this.widget, t0 == null ? null : t0.id) == null ? "New Post" : "Edit Post", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.save, {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), onPressed: dart.fn(() => async.async(core.Null, (function*() {
                    let t0, t0$, t0$0, t0$1;
                    if (dart.test(this[_formKey].currentState.validate())) {
                      this[_formKey].currentState.save();
                      if (dart.test(this.mounted)) this.setState(dart.fn(() => this[_loading] = true, VoidTobool()));
                      let _post = new fb_post.FbPost.new({author: this[_author], image: this[_image], tags: this[_tags], title: this[_title], description: this[_description], markdown: this[_markdown], datePublished: (t0$0 = (t0$ = (t0 = this.widget, t0 == null ? null : t0.post), t0$ == null ? null : t0$.datePublished), t0$0 == null ? new core.DateTime.now().millisecondsSinceEpoch : t0$0)});
                      yield web.FbFirestore.editDoc("posts", _post.toJson(), {id: (t0$1 = this.widget, t0$1 == null ? null : t0$1.id)});
                      if (dart.test(this.mounted)) this.setState(dart.fn(() => this[_loading] = false, VoidTobool()));
                      navigator.Navigator.maybePop(fb_post.FbPost, context, _post);
                    }
                  }).bind(this)), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C6 || CT.C6})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), body: new gesture_detector.GestureDetector.new({onTap: dart.fn(() => focus_scope.FocusScope.of(context).requestFocus(new focus_manager.FocusNode.new()), VoidTovoid()), child: new form.Form.new({key: this[_formKey], child: new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({children: (() => {
                      let t0 = JSArrayOfWidget().of([]);
                      if (dart.test(this[_loading])) t0[$add](new progress_indicator.LinearProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}));
                      if (auth_state.LoggedInState.is(state)) for (let t3$0 of (() => {
                        let t1 = JSArrayOfWidget().of([]);
                        t1[$add](new list_tile.ListTile.new({title: new text_form_field.TextFormField.new({initialValue: (t2$ = (t2 = this[_author], t2 == null ? (t3$ = (t3 = state, t3 == null ? null : t3.user), t3$ == null ? null : t3$.displayName) : t2), t2$ == null ? "Guest" : t2$), decoration: new input_decorator.InputDecoration.new({hintText: "Author"}), onSaved: dart.fn(val => this[_author] = val, StringToString()), validator: dart.fn(val => val[$isEmpty] ? "Required!" : null, StringToString()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}));
                        t1[$add](new list_tile.ListTile.new({title: new text_form_field.TextFormField.new({initialValue: this[_title], decoration: new input_decorator.InputDecoration.new({hintText: "Title"}), onSaved: dart.fn(val => this[_title] = val, StringToString()), validator: dart.fn(val => val[$isEmpty] ? "Required!" : null, StringToString()), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}));
                        t1[$add](new list_tile.ListTile.new({title: new text_form_field.TextFormField.new({initialValue: this[_description], decoration: new input_decorator.InputDecoration.new({hintText: "Description"}), onSaved: dart.fn(val => this[_description] = val, StringToString()), validator: dart.fn(val => val[$isEmpty] ? "Required!" : null, StringToString()), $creationLocationd_0dea112b090073317d4: C34 || CT.C34}), $creationLocationd_0dea112b090073317d4: C40 || CT.C40}));
                        t1[$add](new list_tile.ListTile.new({title: new text_form_field.TextFormField.new({initialValue: this[_tags], decoration: new input_decorator.InputDecoration.new({hintText: "Tags"}), onSaved: dart.fn(val => this[_tags] = val, StringToString()), validator: dart.fn(val => val[$isEmpty] ? "Required!" : null, StringToString()), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C49 || CT.C49}));
                        if (this[_image] != null) for (let t2$0 of JSArrayOfWidget().of([new container.Container.new({height: 450.0, child: new image.Image.network(this[_image], {$creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new list_tile.ListTile.new({title: new text.Text.new(i18n.I18n.of(context).blogImage_source, {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), subtitle: new selectable_text.SelectableText.new(this[_image], {maxLines: 1, $creationLocationd_0dea112b090073317d4: C62 || CT.C62}), $creationLocationd_0dea112b090073317d4: C66 || CT.C66})]))
                          t1[$add](t2$0);
                        t1[$add](new list_tile.ListTile.new({title: new web$.UploadButton.new({user: auth_bloc.AuthBloc.currentUser(context), onChanged: dart.fn(val => {
                              if (dart.test(this.mounted)) this.setState(dart.fn(() => {
                                this[_image] = val.url;
                              }, VoidToNull()));
                            }, MediaSearchToNull()), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74}));
                        t1[$add](new basic.Padding.new({padding: C77 || CT.C77, child: new extended_text_field.ExtendedTextField.new({controller: this[_controller], onChanged: dart.fn(val => this[_markdown] = val, StringToString()), maxLines: null, keyboardType: text_input.TextInputType.multiline, decoration: new input_decorator.InputDecoration.new({border: input_border.InputBorder.none}), $creationLocationd_0dea112b090073317d4: C78 || CT.C78}), $creationLocationd_0dea112b090073317d4: C85 || CT.C85}));
                        return t1;
                      })())
                        t0[$add](t3$0);
                      return t0;
                    })(), $creationLocationd_0dea112b090073317d4: C89 || CT.C89}), $creationLocationd_0dea112b090073317d4: C92 || CT.C92}), $creationLocationd_0dea112b090073317d4: C95 || CT.C95}), $creationLocationd_0dea112b090073317d4: C99 || CT.C99}), $creationLocationd_0dea112b090073317d4: C103 || CT.C103});
        }, BuildContextAndAuthStateToScaffold()), $creationLocationd_0dea112b090073317d4: C107 || CT.C107});
    }
  };
  (edit_post._EditPostScreenState.new = function() {
    this[_formKey] = GlobalKeyOfFormState().new();
    this[_tags] = null;
    this[_image] = null;
    this[_author] = null;
    this[_description] = null;
    this[_title] = null;
    this[_markdown] = null;
    this[_controller] = null;
    this[_loading] = false;
    edit_post._EditPostScreenState.__proto__.new.call(this);
    ;
  }).prototype = edit_post._EditPostScreenState.prototype;
  dart.addTypeTests(edit_post._EditPostScreenState);
  dart.setMethodSignature(edit_post._EditPostScreenState, () => ({
    __proto__: dart.getMethods(edit_post._EditPostScreenState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(edit_post._EditPostScreenState, "package:personal_website/ui/blog/edit_post.dart");
  dart.setFieldSignature(edit_post._EditPostScreenState, () => ({
    __proto__: dart.getFields(edit_post._EditPostScreenState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    [_tags]: dart.fieldType(core.String),
    [_image]: dart.fieldType(core.String),
    [_author]: dart.fieldType(core.String),
    [_description]: dart.fieldType(core.String),
    [_title]: dart.fieldType(core.String),
    [_markdown]: dart.fieldType(core.String),
    [_controller]: dart.fieldType(editable_text.TextEditingController),
    [_loading]: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/personal_website/ui/blog/edit_post", {
    "package:personal_website/ui/blog/edit_post.dart": edit_post
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["edit_post.dart"],"names":[],"mappings":"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","file":"edit_post.ddc.js"}');
  // Exports:
  return {
    ui__blog__edit_post: edit_post
  };
});

//# sourceMappingURL=edit_post.ddc.js.map

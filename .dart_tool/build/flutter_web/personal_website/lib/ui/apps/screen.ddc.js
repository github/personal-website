define(['dart_sdk', 'packages/personal_website/generated/i18n', 'packages/flutter/src/widgets/actions', 'packages/flutter/material', 'packages/flutter_bloc/flutter_bloc', 'packages/personal_website/data/blocs/settings/bloc', 'packages/personal_website/data/blocs/settings/settings_state', 'packages/personal_website/data/blocs/settings/settings_event', 'packages/flutter/src/painting/_network_image_web', 'packages/personal_website/data/classes/fb_post', 'packages/personal_website/plugins/fb_firestore/web', 'packages/personal_website/plugins/fb_firestore/classes/snapshot', 'packages/personal_website/data/utils/navigate', 'packages/personal_website/ui/blog/edit_post', 'packages/personal_website/ui/common/md_render', 'packages/flutter/src/gestures/arena', 'packages/personal_website/ui/common/app_route_observer', 'packages/personal_website/ui/common/settings', 'packages/personal_website/data/blocs/blog/bloc', 'packages/personal_website/data/blocs/blog/blog_state', 'packages/carousel_slider/carousel_slider', 'packages/personal_website/ui/common/blog_card', 'packages/flutter/src/rendering/animated_size'], function(dart_sdk, packages__personal_website__generated__i18n, packages__flutter__src__widgets__actions, packages__flutter__material, packages__flutter_bloc__flutter_bloc, packages__personal_website__data__blocs__settings__bloc, packages__personal_website__data__blocs__settings__settings_state, packages__personal_website__data__blocs__settings__settings_event, packages__flutter__src__painting___network_image_web, packages__personal_website__data__classes__fb_post, packages__personal_website__plugins__fb_firestore__web, packages__personal_website__plugins__fb_firestore__classes__snapshot, packages__personal_website__data__utils__navigate, packages__personal_website__ui__blog__edit_post, packages__personal_website__ui__common__md_render, packages__flutter__src__gestures__arena, packages__personal_website__ui__common__app_route_observer, packages__personal_website__ui__common__settings, packages__personal_website__data__blocs__blog__bloc, packages__personal_website__data__blocs__blog__blog_state, packages__carousel_slider__carousel_slider, packages__personal_website__ui__common__blog_card, packages__flutter__src__rendering__animated_size) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const i18n = packages__personal_website__generated__i18n.generated__i18n;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const media_query = packages__flutter__src__widgets__actions.src__widgets__media_query;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const preferred_size = packages__flutter__src__widgets__actions.src__widgets__preferred_size;
  const icon = packages__flutter__src__widgets__actions.src__widgets__icon;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const scroll_view = packages__flutter__src__widgets__actions.src__widgets__scroll_view;
  const nested_scroll_view = packages__flutter__src__widgets__actions.src__widgets__nested_scroll_view;
  const image = packages__flutter__src__widgets__actions.src__widgets__image;
  const routes = packages__flutter__src__widgets__actions.src__widgets__routes;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const safe_area = packages__flutter__src__widgets__actions.src__widgets__safe_area;
  const layout_builder = packages__flutter__src__widgets__actions.src__widgets__layout_builder;
  const scaffold = packages__flutter__material.src__material__scaffold;
  const app_bar = packages__flutter__material.src__material__app_bar;
  const theme = packages__flutter__material.src__material__theme;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const flat_button = packages__flutter__material.src__material__flat_button;
  const icons = packages__flutter__material.src__material__icons;
  const icon_button = packages__flutter__material.src__material__icon_button;
  const progress_indicator = packages__flutter__material.src__material__progress_indicator;
  const bottom_app_bar = packages__flutter__material.src__material__bottom_app_bar;
  const flexible_space_bar = packages__flutter__material.src__material__flexible_space_bar;
  const drawer = packages__flutter__material.src__material__drawer;
  const list_tile = packages__flutter__material.src__material__list_tile;
  const dialog = packages__flutter__material.src__material__dialog;
  const divider = packages__flutter__material.src__material__divider;
  const bloc_builder = packages__flutter_bloc__flutter_bloc.src__bloc_builder;
  const bloc_provider = packages__flutter_bloc__flutter_bloc.src__bloc_provider;
  const settings_bloc = packages__personal_website__data__blocs__settings__bloc.data__blocs__settings__settings_bloc;
  const settings_state = packages__personal_website__data__blocs__settings__settings_state.data__blocs__settings__settings_state;
  const settings_event = packages__personal_website__data__blocs__settings__settings_event.data__blocs__settings__settings_event;
  const edge_insets = packages__flutter__src__painting___network_image_web.src__painting__edge_insets;
  const text_style = packages__flutter__src__painting___network_image_web.src__painting__text_style;
  const box_fit = packages__flutter__src__painting___network_image_web.src__painting__box_fit;
  const fb_post = packages__personal_website__data__classes__fb_post.data__classes__fb_post;
  const web = packages__personal_website__plugins__fb_firestore__web.plugins__fb_firestore__web;
  const snapshot = packages__personal_website__plugins__fb_firestore__classes__snapshot.plugins__fb_firestore__classes__snapshot;
  const navigate = packages__personal_website__data__utils__navigate.data__utils__navigate;
  const edit_post = packages__personal_website__ui__blog__edit_post.ui__blog__edit_post;
  const md_render = packages__personal_website__ui__common__md_render.ui__common__md_render;
  const asset_bundle = packages__flutter__src__gestures__arena.src__services__asset_bundle;
  const app_route_observer = packages__personal_website__ui__common__app_route_observer.ui__common__app_route_observer;
  const settings = packages__personal_website__ui__common__settings.ui__common__settings;
  const blog_bloc = packages__personal_website__data__blocs__blog__bloc.data__blocs__blog__blog_bloc;
  const blog_state = packages__personal_website__data__blocs__blog__blog_state.data__blocs__blog__blog_state;
  const carousel_slider = packages__carousel_slider__carousel_slider.carousel_slider;
  const blog_card = packages__personal_website__ui__common__blog_card.ui__common__blog_card;
  const box = packages__flutter__src__rendering__animated_size.src__rendering__box;
  const sliver_grid = packages__flutter__src__rendering__animated_size.src__rendering__sliver_grid;
  const screen = Object.create(dart.library);
  const screen$ = Object.create(dart.library);
  const index = Object.create(dart.library);
  const app_scaffold = Object.create(dart.library);
  const landing = Object.create(dart.library);
  const privacy_policy = Object.create(dart.library);
  const post$ = Object.create(dart.library);
  const screen$0 = Object.create(dart.library);
  const render = Object.create(dart.library);
  const app_drawer = Object.create(dart.library);
  const about = Object.create(dart.library);
  const blog_previews = Object.create(dart.library);
  const screen$1 = Object.create(dart.library);
  const index$ = Object.create(dart.library);
  const $add = dartx.add;
  const $split = dartx.split;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $ceil = dartx.ceil;
  const $length = dartx.length;
  const $_get = dartx._get;
  let FutureOfObject = () => (FutureOfObject = dart.constFn(async.Future$(core.Object)))();
  let VoidToFutureOfObject = () => (VoidToFutureOfObject = dart.constFn(dart.fnType(FutureOfObject(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  let BlocBuilderOfSettingsBloc$SettingsState = () => (BlocBuilderOfSettingsBloc$SettingsState = dart.constFn(bloc_builder.BlocBuilder$(settings_bloc.SettingsBloc, settings_state.SettingsState)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndSettingsStateToStatelessWidget = () => (BuildContextAndSettingsStateToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, settings_state.SettingsState])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FbDocumentSnapshotToNull = () => (FbDocumentSnapshotToNull = dart.constFn(dart.fnType(core.Null, [snapshot.FbDocumentSnapshot])))();
  let VoidToFbPost = () => (VoidToFbPost = dart.constFn(dart.fnType(fb_post.FbPost, [])))();
  let FbPostToNull = () => (FbPostToNull = dart.constFn(dart.fnType(core.Null, [fb_post.FbPost])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let ListOfWidget = () => (ListOfWidget = dart.constFn(core.List$(framework.Widget)))();
  let BuildContextAndboolToListOfWidget = () => (BuildContextAndboolToListOfWidget = dart.constFn(dart.fnType(ListOfWidget(), [framework.BuildContext, core.bool])))();
  let StringToNull = () => (StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let FutureOfbool = () => (FutureOfbool = dart.constFn(async.Future$(core.bool)))();
  let VoidToFutureOfbool = () => (VoidToFutureOfbool = dart.constFn(dart.fnType(FutureOfbool(), [])))();
  let BuildContextToAlertDialog = () => (BuildContextToAlertDialog = dart.constFn(dart.fnType(dialog.AlertDialog, [framework.BuildContext])))();
  let BlocBuilderOfBlogBloc$BlogState = () => (BlocBuilderOfBlogBloc$BlogState = dart.constFn(bloc_builder.BlocBuilder$(blog_bloc.BlogBloc, blog_state.BlogState)))();
  let FbDocumentSnapshotToContainer = () => (FbDocumentSnapshotToContainer = dart.constFn(dart.fnType(container.Container, [snapshot.FbDocumentSnapshot])))();
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext, box.BoxConstraints])))();
  let BuildContextAndBlogStateToLayoutBuilder = () => (BuildContextAndBlogStateToLayoutBuilder = dart.constFn(dart.fnType(layout_builder.LayoutBuilder, [framework.BuildContext, blog_state.BlogState])))();
  let BuildContextAndintToContainer = () => (BuildContextAndintToContainer = dart.constFn(dart.fnType(container.Container, [framework.BuildContext, core.int])))();
  let BuildContextAndBlogStateToStatelessWidget = () => (BuildContextAndBlogStateToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, blog_state.BlogState])))();
  let BuildContextAndBoxConstraintsToBlocBuilderOfBlogBloc$BlogState = () => (BuildContextAndBoxConstraintsToBlocBuilderOfBlogBloc$BlogState = dart.constFn(dart.fnType(BlocBuilderOfBlogBloc$BlogState(), [framework.BuildContext, box.BoxConstraints])))();
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
        column: 13,
        line: 12,
        file: "org-dartlang-app:///packages/personal_website/ui/projects/screen.dart"
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pageTitle",
        column: 7,
        line: 11,
        file: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 12,
        file: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5], widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 12,
        line: 10,
        file: "org-dartlang-app:///packages/personal_website/ui/projects/screen.dart"
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 22,
        file: "org-dartlang-app:///packages/personal_website/ui/home/screen.dart"
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pageTitle",
        column: 7,
        line: 21,
        file: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 22,
        file: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C8 || CT.C8,
        name: null,
        column: 12,
        line: 11,
        file: "org-dartlang-app:///packages/personal_website/ui/home/screen.dart"
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 33,
        line: 39,
        file: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13], widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C12 || CT.C12,
        name: null,
        column: 28,
        line: 39,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "automaticallyImplyLeading",
        column: 21,
        line: 38,
        file: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 21,
        line: 39,
        file: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17], widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C15 || CT.C15,
        name: null,
        column: 19,
        line: 36,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 55,
        line: 53,
        file: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20], widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C19 || CT.C19,
        name: null,
        column: 44,
        line: 53,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 37,
        line: 53,
        file: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 37,
        line: 54,
        file: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24], widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C22 || CT.C22,
        name: null,
        column: 35,
        line: 52,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 66,
        line: 58,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 44,
        line: 58,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 37,
        line: 58,
        file: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 37,
        line: 59,
        file: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C29 || CT.C29,
        name: null,
        column: 35,
        line: 57,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 66,
        line: 63,
        file: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C33 || CT.C33,
        name: null,
        column: 44,
        line: 63,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 37,
        line: 63,
        file: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 37,
        line: 64,
        file: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C36 || CT.C36,
        name: null,
        column: 35,
        line: 62,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 66,
        line: 68,
        file: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C40 || CT.C40,
        name: null,
        column: 44,
        line: 68,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 37,
        line: 68,
        file: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 37,
        line: 69,
        file: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C43 || CT.C43,
        name: null,
        column: 35,
        line: 67,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 66,
        line: 73,
        file: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C47 || CT.C47,
        name: null,
        column: 44,
        line: 73,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 37,
        line: 73,
        file: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 37,
        line: 74,
        file: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51, C52 || CT.C52], widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C50 || CT.C50,
        name: null,
        column: 35,
        line: 72,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 33,
        line: 51,
        file: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55], widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C54 || CT.C54,
        name: null,
        column: 38,
        line: 50,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 31,
        line: 50,
        file: null
      });
    },
    get C57() {
      return C57 = dart.constList([C58 || CT.C58], widget_inspector._Location);
    },
    get C56() {
      return C56 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C57 || CT.C57,
        name: null,
        column: 29,
        line: 49,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 56,
        line: 88,
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
        column: 45,
        line: 88,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 56,
        line: 89,
        file: null
      });
    },
    get C63() {
      return C63 = dart.constList([C64 || CT.C64], widget_inspector._Location);
    },
    get C62() {
      return C62 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C63 || CT.C63,
        name: null,
        column: 45,
        line: 89,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tooltip",
        column: 39,
        line: 85,
        file: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 39,
        line: 87,
        file: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 39,
        line: 90,
        file: null
      });
    },
    get C66() {
      return C66 = dart.constList([C67 || CT.C67, C68 || CT.C68, C69 || CT.C69], widget_inspector._Location);
    },
    get C65() {
      return C65 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C66 || CT.C66,
        name: null,
        column: 44,
        line: 84,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 42,
        line: 98,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 33,
        line: 82,
        file: null
      });
    },
    get C72() {
      return C72 = dart.constList([C73 || CT.C73], widget_inspector._Location);
    },
    get C71() {
      return C71 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C72 || CT.C72,
        name: null,
        column: 38,
        line: 81,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 31,
        line: 81,
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
        column: 29,
        line: 80,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C79() {
      return C79 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 27,
        line: 48,
        file: null
      });
    },
    get C78() {
      return C78 = dart.constList([C79 || CT.C79], widget_inspector._Location);
    },
    get C77() {
      return C77 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C78 || CT.C78,
        name: null,
        column: 32,
        line: 47,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 25,
        line: 46,
        file: null
      });
    },
    get C83() {
      return C83 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 25,
        line: 47,
        file: null
      });
    },
    get C81() {
      return C81 = dart.constList([C82 || CT.C82, C83 || CT.C83], widget_inspector._Location);
    },
    get C80() {
      return C80 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C81 || CT.C81,
        name: null,
        column: 30,
        line: 45,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "color",
        column: 23,
        line: 44,
        file: null
      });
    },
    get C87() {
      return C87 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 23,
        line: 45,
        file: null
      });
    },
    get C85() {
      return C85 = dart.constList([C86 || CT.C86, C87 || CT.C87], widget_inspector._Location);
    },
    get C84() {
      return C84 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C85 || CT.C85,
        name: null,
        column: 28,
        line: 43,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "preferredSize",
        column: 21,
        line: 42,
        file: null
      });
    },
    get C91() {
      return C91 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 43,
        file: null
      });
    },
    get C89() {
      return C89 = dart.constList([C90 || CT.C90, C91 || CT.C91], widget_inspector._Location);
    },
    get C88() {
      return C88 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C89 || CT.C89,
        name: null,
        column: 19,
        line: 41,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: app_drawer.AppDrawer.prototype,
        key: null,
        permanentlyDisplay: false
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 13,
        line: 35,
        file: null
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "drawer",
        column: 13,
        line: 107,
        file: null
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 13,
        line: 110,
        file: null
      });
    },
    get C94() {
      return C94 = dart.constList([C95 || CT.C95, C96 || CT.C96, C97 || CT.C97], widget_inspector._Location);
    },
    get C93() {
      return C93 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C94 || CT.C94,
        name: null,
        column: 18,
        line: 34,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 34,
        file: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100], widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C99 || CT.C99,
        name: null,
        column: 9,
        line: 33,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C103() {
      return C103 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 31,
        file: null
      });
    },
    get C102() {
      return C102 = dart.constList([C103 || CT.C103], widget_inspector._Location);
    },
    get C101() {
      return C101 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C102 || CT.C102,
        name: null,
        column: 12,
        line: 30,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_scaffold.dart"
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 0,
        right: 0,
        top: 8,
        left: 0
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 18,
        line: 12,
        file: "org-dartlang-app:///packages/personal_website/ui/home/landing.dart"
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 11,
        line: 11,
        file: null
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 12,
        file: null
      });
    },
    get C107() {
      return C107 = dart.constList([C108 || CT.C108, C109 || CT.C109], widget_inspector._Location);
    },
    get C106() {
      return C106 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C107 || CT.C107,
        name: null,
        column: 9,
        line: 10,
        file: "org-dartlang-app:///packages/personal_website/ui/home/landing.dart"
      });
    },
    get C112() {
      return C112 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 7,
        line: 9,
        file: null
      });
    },
    get C111() {
      return C111 = dart.constList([C112 || CT.C112], widget_inspector._Location);
    },
    get C110() {
      return C110 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C111 || CT.C111,
        name: null,
        column: 12,
        line: 8,
        file: "org-dartlang-app:///packages/personal_website/ui/home/landing.dart"
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 7,
        line: 12,
        file: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "path",
        column: 7,
        line: 13,
        file: null
      });
    },
    get C114() {
      return C114 = dart.constList([C115 || CT.C115, C116 || CT.C116], widget_inspector._Location);
    },
    get C113() {
      return C113 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 12,
        line: 11,
        file: "org-dartlang-app:///packages/personal_website/ui/pages/privacy_policy.dart"
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 17,
        line: 58,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C118() {
      return C118 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 18,
        line: 60,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 60,
        file: null
      });
    },
    get C120() {
      return C120 = dart.constList([C121 || CT.C121], widget_inspector._Location);
    },
    get C119() {
      return C119 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C120 || CT.C120,
        name: null,
        column: 15,
        line: 59,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "appBar",
        column: 9,
        line: 58,
        file: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 9,
        line: 59,
        file: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125], widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C123 || CT.C123,
        name: null,
        column: 14,
        line: 57,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C128() {
      return C128 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 32,
        line: 69,
        file: null
      });
    },
    get C127() {
      return C127 = dart.constList([C128 || CT.C128], widget_inspector._Location);
    },
    get C126() {
      return C126 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C127 || CT.C127,
        name: null,
        column: 21,
        line: 69,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 15,
        line: 69,
        file: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 15,
        line: 70,
        file: null
      });
    },
    get C130() {
      return C130 = dart.constList([C131 || CT.C131, C132 || CT.C132], widget_inspector._Location);
    },
    get C129() {
      return C129 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C130 || CT.C130,
        name: null,
        column: 13,
        line: 68,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 32,
        line: 76,
        file: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135], widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C134 || CT.C134,
        name: null,
        column: 21,
        line: 76,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "post",
        column: 32,
        line: 79,
        file: null
      });
    },
    get C139() {
      return C139 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "id",
        column: 45,
        line: 79,
        file: null
      });
    },
    get C137() {
      return C137 = dart.constList([C138 || CT.C138, C139 || CT.C139], widget_inspector._Location);
    },
    get C136() {
      return C136 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C137 || CT.C137,
        name: null,
        column: 17,
        line: 79,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 15,
        line: 76,
        file: null
      });
    },
    get C143() {
      return C143 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 15,
        line: 77,
        file: null
      });
    },
    get C141() {
      return C141 = dart.constList([C142 || CT.C142, C143 || CT.C143], widget_inspector._Location);
    },
    get C140() {
      return C140 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C141 || CT.C141,
        name: null,
        column: 13,
        line: 75,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 11,
        line: 67,
        file: null
      });
    },
    get C145() {
      return C145 = dart.constList([C146 || CT.C146], widget_inspector._Location);
    },
    get C144() {
      return C144 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C145 || CT.C145,
        name: null,
        column: 16,
        line: 66,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 66,
        file: null
      });
    },
    get C148() {
      return C148 = dart.constList([C149 || CT.C149], widget_inspector._Location);
    },
    get C147() {
      return C147 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C148 || CT.C148,
        name: null,
        column: 28,
        line: 65,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 36,
        line: 100,
        file: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152], widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C151 || CT.C151,
        name: null,
        column: 25,
        line: 100,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 19,
        line: 100,
        file: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 19,
        line: 101,
        file: null
      });
    },
    get C154() {
      return C154 = dart.constList([C155 || CT.C155, C156 || CT.C156], widget_inspector._Location);
    },
    get C153() {
      return C153 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C154 || CT.C154,
        name: null,
        column: 17,
        line: 99,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C159() {
      return C159 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 37,
        line: 106,
        file: null
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "style",
        column: 44,
        line: 106,
        file: null
      });
    },
    get C158() {
      return C158 = dart.constList([C159 || CT.C159, C160 || CT.C160], widget_inspector._Location);
    },
    get C157() {
      return C157 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C158 || CT.C158,
        name: null,
        column: 26,
        line: 106,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C163() {
      return C163 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "src",
        column: 27,
        line: 108,
        file: null
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "fit",
        column: 21,
        line: 109,
        file: null
      });
    },
    get C162() {
      return C162 = dart.constList([C163 || CT.C163, C164 || CT.C164], widget_inspector._Location);
    },
    get C161() {
      return C161 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C162 || CT.C162,
        name: null,
        column: 37,
        line: 107,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C167() {
      return C167 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "centerTitle",
        column: 19,
        line: 105,
        file: null
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 19,
        line: 106,
        file: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "background",
        column: 19,
        line: 107,
        file: null
      });
    },
    get C166() {
      return C166 = dart.constList([C167 || CT.C167, C168 || CT.C168, C169 || CT.C169], widget_inspector._Location);
    },
    get C165() {
      return C165 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C166 || CT.C166,
        name: null,
        column: 30,
        line: 104,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "expandedHeight",
        column: 15,
        line: 95,
        file: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "floating",
        column: 15,
        line: 96,
        file: null
      });
    },
    get C174() {
      return C174 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pinned",
        column: 15,
        line: 97,
        file: null
      });
    },
    get C175() {
      return C175 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 15,
        line: 98,
        file: null
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "flexibleSpace",
        column: 15,
        line: 104,
        file: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173, C174 || CT.C174, C175 || CT.C175, C176 || CT.C176], widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C171 || CT.C171,
        name: null,
        column: 13,
        line: 94,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C179() {
      return C179 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "context",
        column: 11,
        line: 115,
        file: null
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "removeTop",
        column: 11,
        line: 116,
        file: null
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 117,
        file: null
      });
    },
    get C178() {
      return C178 = dart.constList([C179 || CT.C179, C180 || CT.C180, C181 || CT.C181], widget_inspector._Location);
    },
    get C177() {
      return C177 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C178 || CT.C178,
        name: null,
        column: 26,
        line: 114,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C184() {
      return C184 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "headerSliverBuilder",
        column: 9,
        line: 92,
        file: null
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 9,
        line: 114,
        file: null
      });
    },
    get C183() {
      return C183 = dart.constList([C184 || CT.C184, C185 || CT.C185], widget_inspector._Location);
    },
    get C182() {
      return C182 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C183 || CT.C183,
        name: null,
        column: 13,
        line: 91,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C188() {
      return C188 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "bottomNavigationBar",
        column: 7,
        line: 65,
        file: null
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 91,
        file: null
      });
    },
    get C187() {
      return C187 = dart.constList([C188 || CT.C188, C189 || CT.C189], widget_inspector._Location);
    },
    get C186() {
      return C186 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C187 || CT.C187,
        name: null,
        column: 12,
        line: 64,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "html",
        column: 29,
        line: 125,
        file: null
      });
    },
    get C191() {
      return C191 = dart.constList([C192 || CT.C192], widget_inspector._Location);
    },
    get C190() {
      return C190 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C191 || CT.C191,
        name: null,
        column: 14,
        line: 125,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C193() {
      return C193 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 26,
        line: 127,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 19,
        line: 127,
        file: null
      });
    },
    get C195() {
      return C195 = dart.constList([C196 || CT.C196], widget_inspector._Location);
    },
    get C194() {
      return C194 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C195 || CT.C195,
        name: null,
        column: 12,
        line: 127,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/post.dart"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 13,
        line: 12,
        file: "org-dartlang-app:///packages/personal_website/ui/apps/screen.dart"
      });
    },
    get C198() {
      return C198 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C3 || CT.C3,
        name: null,
        column: 12,
        line: 10,
        file: "org-dartlang-app:///packages/personal_website/ui/apps/screen.dart"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "html",
        column: 28,
        line: 31,
        file: null
      });
    },
    get C200() {
      return C200 = dart.constList([C201 || CT.C201], widget_inspector._Location);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C200 || CT.C200,
        name: null,
        column: 13,
        line: 31,
        file: "org-dartlang-app:///packages/personal_website/ui/pages/render.dart"
      });
    },
    get C204() {
      return C204 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pageTitle",
        column: 7,
        line: 30,
        file: null
      });
    },
    get C205() {
      return C205 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 31,
        file: null
      });
    },
    get C203() {
      return C203 = dart.constList([C204 || CT.C204, C205 || CT.C205], widget_inspector._Location);
    },
    get C202() {
      return C202 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C203 || CT.C203,
        name: null,
        column: 12,
        line: 29,
        file: "org-dartlang-app:///packages/personal_website/ui/pages/render.dart"
      });
    },
    get C208() {
      return C208 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 84,
        file: null
      });
    },
    get C207() {
      return C207 = dart.constList([C208 || CT.C208], widget_inspector._Location);
    },
    get C206() {
      return C206 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C207 || CT.C207,
        name: null,
        column: 32,
        line: 84,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 85,
        file: null
      });
    },
    get C210() {
      return C210 = dart.constList([C211 || CT.C211], widget_inspector._Location);
    },
    get C209() {
      return C209 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C210 || CT.C210,
        name: null,
        column: 30,
        line: 85,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 84,
        file: null
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 85,
        file: null
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 86,
        file: null
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selected",
        column: 23,
        line: 87,
        file: null
      });
    },
    get C213() {
      return C213 = dart.constList([C214 || CT.C214, C215 || CT.C215, C216 || CT.C216, C217 || CT.C217], widget_inspector._Location);
    },
    get C212() {
      return C212 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C213 || CT.C213,
        name: null,
        column: 21,
        line: 83,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 90,
        file: null
      });
    },
    get C219() {
      return C219 = dart.constList([C220 || CT.C220], widget_inspector._Location);
    },
    get C218() {
      return C218 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C219 || CT.C219,
        name: null,
        column: 32,
        line: 90,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 91,
        file: null
      });
    },
    get C222() {
      return C222 = dart.constList([C223 || CT.C223], widget_inspector._Location);
    },
    get C221() {
      return C221 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C222 || CT.C222,
        name: null,
        column: 30,
        line: 91,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 42,
        line: 94,
        file: null
      });
    },
    get C225() {
      return C225 = dart.constList([C226 || CT.C226], widget_inspector._Location);
    },
    get C224() {
      return C224 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C225 || CT.C225,
        name: null,
        column: 31,
        line: 94,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 25,
        line: 94,
        file: null
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 25,
        line: 95,
        file: null
      });
    },
    get C228() {
      return C228 = dart.constList([C229 || CT.C229, C230 || CT.C230], widget_inspector._Location);
    },
    get C227() {
      return C227 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C228 || CT.C228,
        name: null,
        column: 33,
        line: 93,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 90,
        file: null
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 91,
        file: null
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 92,
        file: null
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "trailing",
        column: 23,
        line: 93,
        file: null
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selected",
        column: 23,
        line: 98,
        file: null
      });
    },
    get C232() {
      return C232 = dart.constList([C233 || CT.C233, C234 || CT.C234, C235 || CT.C235, C236 || CT.C236, C237 || CT.C237], widget_inspector._Location);
    },
    get C231() {
      return C231 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C232 || CT.C232,
        name: null,
        column: 21,
        line: 89,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 101,
        file: null
      });
    },
    get C239() {
      return C239 = dart.constList([C240 || CT.C240], widget_inspector._Location);
    },
    get C238() {
      return C238 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C239 || CT.C239,
        name: null,
        column: 32,
        line: 101,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 102,
        file: null
      });
    },
    get C242() {
      return C242 = dart.constList([C243 || CT.C243], widget_inspector._Location);
    },
    get C241() {
      return C241 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C242 || CT.C242,
        name: null,
        column: 30,
        line: 102,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 101,
        file: null
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 102,
        file: null
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 103,
        file: null
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selected",
        column: 23,
        line: 104,
        file: null
      });
    },
    get C245() {
      return C245 = dart.constList([C246 || CT.C246, C247 || CT.C247, C248 || CT.C248, C249 || CT.C249], widget_inspector._Location);
    },
    get C244() {
      return C244 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C245 || CT.C245,
        name: null,
        column: 21,
        line: 100,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 107,
        file: null
      });
    },
    get C251() {
      return C251 = dart.constList([C252 || CT.C252], widget_inspector._Location);
    },
    get C250() {
      return C250 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C251 || CT.C251,
        name: null,
        column: 32,
        line: 107,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 108,
        file: null
      });
    },
    get C254() {
      return C254 = dart.constList([C255 || CT.C255], widget_inspector._Location);
    },
    get C253() {
      return C253 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C254 || CT.C254,
        name: null,
        column: 30,
        line: 108,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 107,
        file: null
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 108,
        file: null
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 109,
        file: null
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selected",
        column: 23,
        line: 111,
        file: null
      });
    },
    get C257() {
      return C257 = dart.constList([C258 || CT.C258, C259 || CT.C259, C260 || CT.C260, C261 || CT.C261], widget_inspector._Location);
    },
    get C256() {
      return C256 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C257 || CT.C257,
        name: null,
        column: 21,
        line: 106,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 114,
        file: null
      });
    },
    get C263() {
      return C263 = dart.constList([C264 || CT.C264], widget_inspector._Location);
    },
    get C262() {
      return C262 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C263 || CT.C263,
        name: null,
        column: 32,
        line: 114,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 115,
        file: null
      });
    },
    get C266() {
      return C266 = dart.constList([C267 || CT.C267], widget_inspector._Location);
    },
    get C265() {
      return C265 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C266 || CT.C266,
        name: null,
        column: 30,
        line: 115,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 114,
        file: null
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 115,
        file: null
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 116,
        file: null
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "selected",
        column: 23,
        line: 117,
        file: null
      });
    },
    get C269() {
      return C269 = dart.constList([C270 || CT.C270, C271 || CT.C271, C272 || CT.C272, C273 || CT.C273], widget_inspector._Location);
    },
    get C268() {
      return C268 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C269 || CT.C269,
        name: null,
        column: 21,
        line: 113,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "icon",
        column: 43,
        line: 120,
        file: null
      });
    },
    get C275() {
      return C275 = dart.constList([C276 || CT.C276], widget_inspector._Location);
    },
    get C274() {
      return C274 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C275 || CT.C275,
        name: null,
        column: 32,
        line: 120,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 52,
        line: 121,
        file: null
      });
    },
    get C278() {
      return C278 = dart.constList([C279 || CT.C279], widget_inspector._Location);
    },
    get C277() {
      return C277 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C278 || CT.C278,
        name: null,
        column: 30,
        line: 121,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 58,
        line: 126,
        file: null
      });
    },
    get C281() {
      return C281 = dart.constList([C282 || CT.C282], widget_inspector._Location);
    },
    get C280() {
      return C280 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C281 || CT.C281,
        name: null,
        column: 36,
        line: 126,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 38,
        line: 127,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 62,
        line: 130,
        file: null
      });
    },
    get C285() {
      return C285 = dart.constList([C286 || CT.C286], widget_inspector._Location);
    },
    get C284() {
      return C284 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C285 || CT.C285,
        name: null,
        column: 40,
        line: 130,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 33,
        line: 130,
        file: null
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onPressed",
        column: 33,
        line: 131,
        file: null
      });
    },
    get C288() {
      return C288 = dart.constList([C289 || CT.C289, C290 || CT.C290], widget_inspector._Location);
    },
    get C287() {
      return C287 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C288 || CT.C288,
        name: null,
        column: 31,
        line: 129,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 29,
        line: 126,
        file: null
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "content",
        column: 29,
        line: 127,
        file: null
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "actions",
        column: 29,
        line: 128,
        file: null
      });
    },
    get C292() {
      return C292 = dart.constList([C293 || CT.C293, C294 || CT.C294, C295 || CT.C295], widget_inspector._Location);
    },
    get C291() {
      return C291 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C292 || CT.C292,
        name: null,
        column: 43,
        line: 125,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "leading",
        column: 23,
        line: 120,
        file: null
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 121,
        file: null
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 122,
        file: null
      });
    },
    get C297() {
      return C297 = dart.constList([C298 || CT.C298, C299 || CT.C299, C300 || CT.C300], widget_inspector._Location);
    },
    get C296() {
      return C296 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C297 || CT.C297,
        name: null,
        column: 21,
        line: 119,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 19,
        line: 66,
        file: null
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 19,
        line: 67,
        file: null
      });
    },
    get C302() {
      return C302 = dart.constList([C303 || CT.C303, C304 || CT.C304], widget_inspector._Location);
    },
    get C301() {
      return C301 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C302 || CT.C302,
        name: null,
        column: 24,
        line: 65,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 65,
        file: null
      });
    },
    get C306() {
      return C306 = dart.constList([C307 || CT.C307], widget_inspector._Location);
    },
    get C305() {
      return C305 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C306 || CT.C306,
        name: null,
        column: 15,
        line: 64,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: divider.VerticalDivider.prototype,
        key: null,
        color: null,
        endIndent: null,
        indent: null,
        thickness: null,
        width: 1
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 13,
        line: 63,
        file: null
      });
    },
    get C310() {
      return C310 = dart.constList([C311 || CT.C311], widget_inspector._Location);
    },
    get C309() {
      return C309 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C310 || CT.C310,
        name: null,
        column: 18,
        line: 62,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 11,
        line: 62,
        file: null
      });
    },
    get C313() {
      return C313 = dart.constList([C314 || CT.C314], widget_inspector._Location);
    },
    get C312() {
      return C312 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C313 || CT.C313,
        name: null,
        column: 16,
        line: 61,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 9,
        line: 61,
        file: null
      });
    },
    get C316() {
      return C316 = dart.constList([C317 || CT.C317], widget_inspector._Location);
    },
    get C315() {
      return C315 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C316 || CT.C316,
        name: null,
        column: 14,
        line: 60,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 7,
        line: 59,
        file: null
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 60,
        file: null
      });
    },
    get C319() {
      return C319 = dart.constList([C320 || CT.C320, C321 || CT.C321], widget_inspector._Location);
    },
    get C318() {
      return C318 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C319 || CT.C319,
        name: null,
        column: 12,
        line: 58,
        file: "org-dartlang-app:///packages/personal_website/ui/common/app_drawer.dart"
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C114 || CT.C114,
        name: null,
        column: 12,
        line: 11,
        file: "org-dartlang-app:///packages/personal_website/ui/pages/about.dart"
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "author",
        column: 23,
        line: 32,
        file: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "datePublished",
        column: 23,
        line: 33,
        file: null
      });
    },
    get C327() {
      return C327 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tags",
        column: 23,
        line: 35,
        file: null
      });
    },
    get C328() {
      return C328 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 36,
        file: null
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "image",
        column: 23,
        line: 37,
        file: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "description",
        column: 23,
        line: 38,
        file: null
      });
    },
    get C331() {
      return C331 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 39,
        file: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325, C326 || CT.C326, C327 || CT.C327, C328 || CT.C328, C329 || CT.C329, C330 || CT.C330, C331 || CT.C331], widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C324 || CT.C324,
        name: null,
        column: 28,
        line: 31,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "width",
        column: 21,
        line: 30,
        file: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 31,
        file: null
      });
    },
    get C333() {
      return C333 = dart.constList([C334 || CT.C334, C335 || CT.C335], widget_inspector._Location);
    },
    get C332() {
      return C332 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C333 || CT.C333,
        name: null,
        column: 24,
        line: 29,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 15,
        line: 25,
        file: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "autoPlay",
        column: 15,
        line: 26,
        file: null
      });
    },
    get C340() {
      return C340 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "items",
        column: 15,
        line: 27,
        file: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338, C339 || CT.C339, C340 || CT.C340], widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C337 || CT.C337,
        name: null,
        column: 20,
        line: 24,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C341() {
      return C341 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 22,
        line: 48,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C344() {
      return C344 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 48,
        file: null
      });
    },
    get C343() {
      return C343 = dart.constList([C344 || CT.C344], widget_inspector._Location);
    },
    get C342() {
      return C342 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C343 || CT.C343,
        name: null,
        column: 20,
        line: 47,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "height",
        column: 13,
        line: 46,
        file: null
      });
    },
    get C348() {
      return C348 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 13,
        line: 47,
        file: null
      });
    },
    get C346() {
      return C346 = dart.constList([C347 || CT.C347, C348 || CT.C348], widget_inspector._Location);
    },
    get C345() {
      return C345 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C346 || CT.C346,
        name: null,
        column: 18,
        line: 45,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 9,
        line: 21,
        file: null
      });
    },
    get C350() {
      return C350 = dart.constList([C351 || CT.C351], widget_inspector._Location);
    },
    get C349() {
      return C349 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C350 || CT.C350,
        name: null,
        column: 36,
        line: 20,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 7,
        line: 20,
        file: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354], widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C353 || CT.C353,
        name: null,
        column: 12,
        line: 19,
        file: "org-dartlang-app:///packages/personal_website/ui/common/blog_previews.dart"
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: edge_insets.EdgeInsets.prototype,
        bottom: 8,
        right: 8,
        top: 8,
        left: 8
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "author",
        column: 23,
        line: 45,
        file: null
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "datePublished",
        column: 23,
        line: 46,
        file: null
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "tags",
        column: 23,
        line: 48,
        file: null
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 23,
        line: 49,
        file: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "image",
        column: 23,
        line: 50,
        file: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "description",
        column: 23,
        line: 51,
        file: null
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onTap",
        column: 23,
        line: 52,
        file: null
      });
    },
    get C357() {
      return C357 = dart.constList([C358 || CT.C358, C359 || CT.C359, C360 || CT.C360, C361 || CT.C361, C362 || CT.C362, C363 || CT.C363, C364 || CT.C364], widget_inspector._Location);
    },
    get C356() {
      return C356 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C357 || CT.C357,
        name: null,
        column: 28,
        line: 44,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "padding",
        column: 21,
        line: 43,
        file: null
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 21,
        line: 44,
        file: null
      });
    },
    get C366() {
      return C366 = dart.constList([C367 || CT.C367, C368 || CT.C368], widget_inspector._Location);
    },
    get C365() {
      return C365 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C366 || CT.C366,
        name: null,
        column: 26,
        line: 42,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C371() {
      return C371 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "gridDelegate",
        column: 17,
        line: 33,
        file: null
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemCount",
        column: 17,
        line: 37,
        file: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "itemBuilder",
        column: 17,
        line: 38,
        file: null
      });
    },
    get C370() {
      return C370 = dart.constList([C371 || CT.C371, C372 || CT.C372, C373 || CT.C373], widget_inspector._Location);
    },
    get C369() {
      return C369 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C370 || CT.C370,
        name: null,
        column: 31,
        line: 32,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C374() {
      return C374 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C1 || CT.C1,
        name: null,
        column: 24,
        line: 61,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 17,
        line: 61,
        file: null
      });
    },
    get C376() {
      return C376 = dart.constList([C377 || CT.C377], widget_inspector._Location);
    },
    get C375() {
      return C375 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C376 || CT.C376,
        name: null,
        column: 22,
        line: 60,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 15,
        line: 60,
        file: null
      });
    },
    get C379() {
      return C379 = dart.constList([C380 || CT.C380], widget_inspector._Location);
    },
    get C378() {
      return C378 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C379 || CT.C379,
        name: null,
        column: 20,
        line: 59,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C383() {
      return C383 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 11,
        line: 30,
        file: null
      });
    },
    get C382() {
      return C382 = dart.constList([C383 || CT.C383], widget_inspector._Location);
    },
    get C381() {
      return C381 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C382 || CT.C382,
        name: null,
        column: 39,
        line: 29,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 9,
        line: 29,
        file: null
      });
    },
    get C385() {
      return C385 = dart.constList([C386 || CT.C386], widget_inspector._Location);
    },
    get C384() {
      return C384 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C385 || CT.C385,
        name: null,
        column: 13,
        line: 28,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    },
    get C389() {
      return C389 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "pageTitle",
        column: 7,
        line: 17,
        file: null
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "body",
        column: 7,
        line: 28,
        file: null
      });
    },
    get C388() {
      return C388 = dart.constList([C389 || CT.C389, C390 || CT.C390], widget_inspector._Location);
    },
    get C387() {
      return C387 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C388 || CT.C388,
        name: null,
        column: 12,
        line: 16,
        file: "org-dartlang-app:///packages/personal_website/ui/blog/screen.dart"
      });
    }
  });
  let C1;
  let C0;
  let C4;
  let C5;
  let C3;
  let C2;
  screen.ProjectsScreen = class ProjectsScreen extends framework.StatelessWidget {
    build(context) {
      return new app_scaffold.AppScaffold.new({pageTitle: i18n.I18n.of(context).projectsTitle, body: new container.Container.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C2 || CT.C2});
    }
  };
  (screen.ProjectsScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen.ProjectsScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen.ProjectsScreen.prototype;
  dart.addTypeTests(screen.ProjectsScreen);
  dart.setMethodSignature(screen.ProjectsScreen, () => ({
    __proto__: dart.getMethods(screen.ProjectsScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen.ProjectsScreen, "package:personal_website/ui/projects/screen.dart");
  dart.defineLazy(screen.ProjectsScreen, {
    /*screen.ProjectsScreen.routeName*/get routeName() {
      return "/projects";
    }
  });
  let C6;
  let C9;
  let C10;
  let C8;
  let C7;
  screen$.HomeScreen = class HomeScreen extends framework.StatelessWidget {
    build(context) {
      return new app_scaffold.AppScaffold.new({pageTitle: i18n.I18n.of(context).title, body: new landing.LandingScreen.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
    }
  };
  (screen$.HomeScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen$.HomeScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen$.HomeScreen.prototype;
  dart.addTypeTests(screen$.HomeScreen);
  dart.setMethodSignature(screen$.HomeScreen, () => ({
    __proto__: dart.getMethods(screen$.HomeScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen$.HomeScreen, "package:personal_website/ui/home/screen.dart");
  dart.defineLazy(screen$.HomeScreen, {
    /*screen$.HomeScreen.routeName*/get routeName() {
      return "/";
    }
  });
  let C13;
  let C12;
  let C11;
  let C16;
  let C17;
  let C15;
  let C14;
  let C20;
  let C19;
  let C18;
  let C23;
  let C24;
  let C22;
  let C21;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C52;
  let C50;
  let C49;
  let C55;
  let C54;
  let C53;
  let C58;
  let C57;
  let C56;
  let C61;
  let C60;
  let C59;
  let C64;
  let C63;
  let C62;
  let C67;
  let C68;
  let C69;
  let C66;
  let C65;
  let C70;
  let C73;
  let C72;
  let C71;
  let C76;
  let C75;
  let C74;
  let C79;
  let C78;
  let C77;
  let C82;
  let C83;
  let C81;
  let C80;
  let C86;
  let C87;
  let C85;
  let C84;
  let C90;
  let C91;
  let C89;
  let C88;
  let C92;
  let C95;
  let C96;
  let C97;
  let C94;
  let C93;
  let C100;
  let C99;
  let C98;
  let C103;
  let C102;
  let C101;
  app_scaffold.AppScaffold = class AppScaffold extends framework.StatelessWidget {
    get body() {
      return this[body$];
    }
    set body(value) {
      super.body = value;
    }
    get pageTitle() {
      return this[pageTitle$];
    }
    set pageTitle(value) {
      super.pageTitle = value;
    }
    build(context) {
      let displayMobileLayout = dart.notNull(media_query.MediaQuery.of(context).size.width) < 720;
      return new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new scaffold.Scaffold.new({appBar: displayMobileLayout ? new app_bar.AppBar.new({automaticallyImplyLeading: displayMobileLayout, title: new text.Text.new(this.pageTitle, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}) : new preferred_size.PreferredSize.new({preferredSize: new ui.Size.fromHeight(80.0), child: new container.Container.new({color: theme.Theme.of(context).primaryColor, child: new theme.Theme.new({data: theme_data.ThemeData.dark(), child: new basic.Row.new({children: JSArrayOfWidget().of([new basic.Expanded.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C18 || CT.C18}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, "/"), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new flat_button.FlatButton.new({child: new text.Text.new(i18n.I18n.of(context).blogTitle, {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, "/blog"), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28}), new flat_button.FlatButton.new({child: new text.Text.new(i18n.I18n.of(context).appsTitle, {$creationLocationd_0dea112b090073317d4: C32 || CT.C32}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, "/apps"), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new flat_button.FlatButton.new({child: new text.Text.new(i18n.I18n.of(context).projectsTitle, {$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, "/projects"), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), new flat_button.FlatButton.new({child: new text.Text.new(i18n.I18n.of(context).aboutTitle, {$creationLocationd_0dea112b090073317d4: C46 || CT.C46}), onPressed: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, "/about"), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C49 || CT.C49})]), $creationLocationd_0dea112b090073317d4: C53 || CT.C53}), $creationLocationd_0dea112b090073317d4: C56 || CT.C56}), new container.Container.new({child: new (BlocBuilderOfSettingsBloc$SettingsState()).new({builder: dart.fn((context, state) => {
                              if (settings_state.SettingsReady.is(state)) {
                                return new icon_button.IconButton.new({tooltip: i18n.I18n.of(context).settingsDarkMode, icon: dart.test(state.settings.darkMode) ? new icon.Icon.new(icons.Icons.brightness_high, {$creationLocationd_0dea112b090073317d4: C59 || CT.C59}) : new icon.Icon.new(icons.Icons.brightness_low, {$creationLocationd_0dea112b090073317d4: C62 || CT.C62}), onPressed: dart.fn(() => {
                                    let t0;
                                    return bloc_provider.BlocProvider.of(settings_bloc.SettingsBloc, context).dispatch(new settings_event.ChangeSettings.new((t0 = state.settings, t0.darkMode = !dart.test(state.settings.darkMode), t0)));
                                  }, VoidTovoid()), $creationLocationd_0dea112b090073317d4: C65 || CT.C65});
                              }
                              return new container.Container.new({$creationLocationd_0dea112b090073317d4: C70 || CT.C70});
                            }, BuildContextAndSettingsStateToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C71 || CT.C71}), $creationLocationd_0dea112b090073317d4: C74 || CT.C74})]), $creationLocationd_0dea112b090073317d4: C77 || CT.C77}), $creationLocationd_0dea112b090073317d4: C80 || CT.C80}), $creationLocationd_0dea112b090073317d4: C84 || CT.C84}), $creationLocationd_0dea112b090073317d4: C88 || CT.C88}), drawer: displayMobileLayout ? C92 || CT.C92 : null, body: this.body, $creationLocationd_0dea112b090073317d4: C93 || CT.C93}), $creationLocationd_0dea112b090073317d4: C98 || CT.C98})]), $creationLocationd_0dea112b090073317d4: C101 || CT.C101});
    }
  };
  (app_scaffold.AppScaffold.new = function(opts) {
    let body = opts && 'body' in opts ? opts.body : null;
    let pageTitle = opts && 'pageTitle' in opts ? opts.pageTitle : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[body$] = body;
    this[pageTitle$] = pageTitle;
    app_scaffold.AppScaffold.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app_scaffold.AppScaffold.prototype;
  dart.addTypeTests(app_scaffold.AppScaffold);
  const body$ = Symbol("AppScaffold.body");
  const pageTitle$ = Symbol("AppScaffold.pageTitle");
  dart.setMethodSignature(app_scaffold.AppScaffold, () => ({
    __proto__: dart.getMethods(app_scaffold.AppScaffold.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(app_scaffold.AppScaffold, "package:personal_website/ui/common/app_scaffold.dart");
  dart.setFieldSignature(app_scaffold.AppScaffold, () => ({
    __proto__: dart.getFields(app_scaffold.AppScaffold.__proto__),
    body: dart.finalFieldType(framework.Widget),
    pageTitle: dart.finalFieldType(core.String)
  }));
  let C104;
  let C105;
  let C108;
  let C109;
  let C107;
  let C106;
  let C112;
  let C111;
  let C110;
  landing.LandingScreen = class LandingScreen extends framework.StatelessWidget {
    build(context) {
      return new scroll_view.ListView.new({children: JSArrayOfWidget().of([new container.Container.new({padding: C104 || CT.C104, child: new blog_previews.BlogPreviews.new({$creationLocationd_0dea112b090073317d4: C105 || CT.C105}), $creationLocationd_0dea112b090073317d4: C106 || CT.C106})]), $creationLocationd_0dea112b090073317d4: C110 || CT.C110});
    }
  };
  (landing.LandingScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    landing.LandingScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = landing.LandingScreen.prototype;
  dart.addTypeTests(landing.LandingScreen);
  dart.setMethodSignature(landing.LandingScreen, () => ({
    __proto__: dart.getMethods(landing.LandingScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(landing.LandingScreen, "package:personal_website/ui/home/landing.dart");
  let C115;
  let C116;
  let C114;
  let C113;
  privacy_policy.PrivacyPolicy = class PrivacyPolicy extends framework.StatelessWidget {
    build(context) {
      return new render.AssetPageRender.new({title: i18n.I18n.of(context).privacy_policy, path: "privacy_policy", $creationLocationd_0dea112b090073317d4: C113 || CT.C113});
    }
  };
  (privacy_policy.PrivacyPolicy.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    privacy_policy.PrivacyPolicy.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = privacy_policy.PrivacyPolicy.prototype;
  dart.addTypeTests(privacy_policy.PrivacyPolicy);
  dart.setMethodSignature(privacy_policy.PrivacyPolicy, () => ({
    __proto__: dart.getMethods(privacy_policy.PrivacyPolicy.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(privacy_policy.PrivacyPolicy, "package:personal_website/ui/pages/privacy_policy.dart");
  dart.defineLazy(privacy_policy.PrivacyPolicy, {
    /*privacy_policy.PrivacyPolicy.routeName*/get routeName() {
      return "/privacy_policy";
    }
  });
  post$.PostDetails = class PostDetails extends framework.StatefulWidget {
    get post() {
      return this[post$0];
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
    static routeName(id) {
      return "/blog/" + dart.str(id);
    }
    createState() {
      return new post$._PostDetailsState.new();
    }
  };
  (post$.PostDetails.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let post = opts && 'post' in opts ? opts.post : null;
    let id = opts && 'id' in opts ? opts.id : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[post$0] = post;
    this[id$] = id;
    post$.PostDetails.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = post$.PostDetails.prototype;
  dart.addTypeTests(post$.PostDetails);
  const post$0 = Symbol("PostDetails.post");
  const id$ = Symbol("PostDetails.id");
  dart.setMethodSignature(post$.PostDetails, () => ({
    __proto__: dart.getMethods(post$.PostDetails.__proto__),
    createState: dart.fnType(post$._PostDetailsState, [])
  }));
  dart.setLibraryUri(post$.PostDetails, "package:personal_website/ui/blog/post.dart");
  dart.setFieldSignature(post$.PostDetails, () => ({
    __proto__: dart.getFields(post$.PostDetails.__proto__),
    post: dart.finalFieldType(fb_post.FbPost),
    id: dart.finalFieldType(core.String)
  }));
  const _post = dart.privateName(post$, "_post");
  const _updateTitle = dart.privateName(post$, "_updateTitle");
  let C117;
  let C118;
  let C121;
  let C120;
  let C119;
  let C124;
  let C125;
  let C123;
  let C122;
  let C128;
  let C127;
  let C126;
  let C131;
  let C132;
  let C130;
  let C129;
  let C135;
  let C134;
  let C133;
  let C138;
  let C139;
  let C137;
  let C136;
  let C142;
  let C143;
  let C141;
  let C140;
  let C146;
  let C145;
  let C144;
  let C149;
  let C148;
  let C147;
  let C152;
  let C151;
  let C150;
  let C155;
  let C156;
  let C154;
  let C153;
  let C159;
  let C160;
  let C158;
  let C157;
  let C163;
  let C164;
  let C162;
  let C161;
  let C167;
  let C168;
  let C169;
  let C166;
  let C165;
  let C172;
  let C173;
  let C174;
  let C175;
  let C176;
  let C171;
  let C170;
  const _getRender = dart.privateName(post$, "_getRender");
  let C179;
  let C180;
  let C181;
  let C178;
  let C177;
  let C184;
  let C185;
  let C183;
  let C182;
  let C188;
  let C189;
  let C187;
  let C186;
  let C192;
  let C191;
  let C190;
  let C193;
  let C196;
  let C195;
  let C194;
  post$._PostDetailsState = class _PostDetailsState extends framework.State$(post$.PostDetails) {
    initState() {
      let t0;
      this[_post] = (t0 = this.widget, t0 == null ? null : t0.post);
      if (this[_post] == null) {
        web.FbFirestore.getDoc("posts/" + dart.notNull(this.widget.id)).then(core.Null, dart.fn(data => {
          if (dart.test(this.mounted)) this.setState(dart.fn(() => {
            this[_post] = fb_post.FbPost.fromJson(MapOfString$dynamic()._check(convert.json.decode(convert.json.encode(data.data))));
          }, VoidToNull()));
          this[_updateTitle]();
        }, FbDocumentSnapshotToNull()));
      } else {
        this[_updateTitle]();
      }
      super.initState();
    }
    [_updateTitle]() {
    }
    build(context) {
      if (this[_post] == null) {
        return new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({$creationLocationd_0dea112b090073317d4: C117 || CT.C117}), body: new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C119 || CT.C119}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122});
      }
      return new scaffold.Scaffold.new({bottomNavigationBar: new bottom_app_bar.BottomAppBar.new({child: new basic.Row.new({children: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.delete, {$creationLocationd_0dea112b090073317d4: C126 || CT.C126}), onPressed: dart.fn(() => {
                  web.FbFirestore.deleteDoc("posts/" + dart.str(this.widget.id));
                  navigator.Navigator.pop(core.Object, context);
                }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C129 || CT.C129}), new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.edit, {$creationLocationd_0dea112b090073317d4: C133 || CT.C133}), onPressed: dart.fn(() => navigate.navigate(fb_post.FbPost, context, new edit_post.EditPostScreen.new({post: this[_post], id: this.widget.id, $creationLocationd_0dea112b090073317d4: C136 || CT.C136}), {fullScreen: true}).then(core.Null, dart.fn(post => {
                  if (post != null && dart.test(this.mounted)) {
                    this.setState(dart.fn(() => this[_post] = post, VoidToFbPost()));
                    this[_updateTitle]();
                  }
                }, FbPostToNull())), VoidToFutureOfNull()), $creationLocationd_0dea112b090073317d4: C140 || CT.C140})]), $creationLocationd_0dea112b090073317d4: C144 || CT.C144}), $creationLocationd_0dea112b090073317d4: C147 || CT.C147}), body: new nested_scroll_view.NestedScrollView.new({headerSliverBuilder: dart.fn((context, innerBoxIsScrolled) => JSArrayOfWidget().of([new app_bar.SliverAppBar.new({expandedHeight: 200.0, floating: false, pinned: true, actions: JSArrayOfWidget().of([new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.share, {$creationLocationd_0dea112b090073317d4: C150 || CT.C150}), onPressed: dart.fn(() => {
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C153 || CT.C153})]), flexibleSpace: new flexible_space_bar.FlexibleSpaceBar.new({centerTitle: true, title: new text.Text.new(this[_post].title, {style: new text_style.TextStyle.new({fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: C157 || CT.C157}), background: new image.Image.network(this[_post].image, {fit: box_fit.BoxFit.cover, $creationLocationd_0dea112b090073317d4: C161 || CT.C161}), $creationLocationd_0dea112b090073317d4: C165 || CT.C165}), $creationLocationd_0dea112b090073317d4: C170 || CT.C170})]), BuildContextAndboolToListOfWidget()), body: media_query.MediaQuery.removePadding({context: context, removeTop: true, child: this[_getRender](), $creationLocationd_0dea112b090073317d4: C177 || CT.C177}), $creationLocationd_0dea112b090073317d4: C182 || CT.C182}), $creationLocationd_0dea112b090073317d4: C186 || CT.C186});
    }
    [_getRender]() {
      let t0;
      if ((t0 = this[_post], t0 == null ? null : t0.markdown) != null) {
        return new md_render.MarkdownRender.new({html: this[_post].markdown, $creationLocationd_0dea112b090073317d4: C190 || CT.C190});
      }
      return new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C193 || CT.C193}), $creationLocationd_0dea112b090073317d4: C194 || CT.C194});
    }
  };
  (post$._PostDetailsState.new = function() {
    this[_post] = null;
    post$._PostDetailsState.__proto__.new.call(this);
    ;
  }).prototype = post$._PostDetailsState.prototype;
  dart.addTypeTests(post$._PostDetailsState);
  dart.setMethodSignature(post$._PostDetailsState, () => ({
    __proto__: dart.getMethods(post$._PostDetailsState.__proto__),
    [_updateTitle]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_getRender]: dart.fnType(framework.Widget, [])
  }));
  dart.setLibraryUri(post$._PostDetailsState, "package:personal_website/ui/blog/post.dart");
  dart.setFieldSignature(post$._PostDetailsState, () => ({
    __proto__: dart.getFields(post$._PostDetailsState.__proto__),
    [_post]: dart.fieldType(fb_post.FbPost)
  }));
  let C197;
  let C198;
  screen$0.AppsScreen = class AppsScreen extends framework.StatelessWidget {
    build(context) {
      return new app_scaffold.AppScaffold.new({pageTitle: i18n.I18n.of(context).appsTitle, body: new container.Container.new({$creationLocationd_0dea112b090073317d4: C197 || CT.C197}), $creationLocationd_0dea112b090073317d4: C198 || CT.C198});
    }
  };
  (screen$0.AppsScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen$0.AppsScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen$0.AppsScreen.prototype;
  dart.addTypeTests(screen$0.AppsScreen);
  dart.setMethodSignature(screen$0.AppsScreen, () => ({
    __proto__: dart.getMethods(screen$0.AppsScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen$0.AppsScreen, "package:personal_website/ui/apps/screen.dart");
  dart.defineLazy(screen$0.AppsScreen, {
    /*screen$0.AppsScreen.routeName*/get routeName() {
      return "/apps";
    }
  });
  render.AssetPageRender = class AssetPageRender extends framework.StatefulWidget {
    get path() {
      return this[path$];
    }
    set path(value) {
      super.path = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      super.title = value;
    }
    createState() {
      return new render._AssetPageRenderState.new();
    }
  };
  (render.AssetPageRender.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let path = opts && 'path' in opts ? opts.path : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[path$] = path;
    this[title$] = title;
    render.AssetPageRender.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = render.AssetPageRender.prototype;
  dart.addTypeTests(render.AssetPageRender);
  const path$ = Symbol("AssetPageRender.path");
  const title$ = Symbol("AssetPageRender.title");
  dart.setMethodSignature(render.AssetPageRender, () => ({
    __proto__: dart.getMethods(render.AssetPageRender.__proto__),
    createState: dart.fnType(render._AssetPageRenderState, [])
  }));
  dart.setLibraryUri(render.AssetPageRender, "package:personal_website/ui/pages/render.dart");
  dart.setFieldSignature(render.AssetPageRender, () => ({
    __proto__: dart.getFields(render.AssetPageRender.__proto__),
    path: dart.finalFieldType(core.String),
    title: dart.finalFieldType(core.String)
  }));
  const _html = dart.privateName(render, "_html");
  let C201;
  let C200;
  let C199;
  let C204;
  let C205;
  let C203;
  let C202;
  render._AssetPageRenderState = class _AssetPageRenderState extends framework.State$(render.AssetPageRender) {
    initState() {
      asset_bundle.rootBundle.loadString("assets/pages/" + dart.str(this.widget.path) + ".md").then(core.Null, dart.fn(data => {
        if (dart.test(this.mounted)) this.setState(dart.fn(() => {
          this[_html] = data;
        }, VoidToNull()));
      }, StringToNull()));
      super.initState();
    }
    build(context) {
      return new app_scaffold.AppScaffold.new({pageTitle: this.widget.title, body: new md_render.MarkdownRender.new({html: this[_html], $creationLocationd_0dea112b090073317d4: C199 || CT.C199}), $creationLocationd_0dea112b090073317d4: C202 || CT.C202});
    }
  };
  (render._AssetPageRenderState.new = function() {
    this[_html] = null;
    render._AssetPageRenderState.__proto__.new.call(this);
    ;
  }).prototype = render._AssetPageRenderState.prototype;
  dart.addTypeTests(render._AssetPageRenderState);
  dart.setMethodSignature(render._AssetPageRenderState, () => ({
    __proto__: dart.getMethods(render._AssetPageRenderState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(render._AssetPageRenderState, "package:personal_website/ui/pages/render.dart");
  dart.setFieldSignature(render._AssetPageRenderState, () => ({
    __proto__: dart.getFields(render._AssetPageRenderState.__proto__),
    [_html]: dart.fieldType(core.String)
  }));
  app_drawer.AppDrawer = class AppDrawer extends framework.StatefulWidget {
    get permanentlyDisplay() {
      return this[permanentlyDisplay$];
    }
    set permanentlyDisplay(value) {
      super.permanentlyDisplay = value;
    }
    createState() {
      return new app_drawer._AppDrawerState.new();
    }
  };
  (app_drawer.AppDrawer.new = function(opts) {
    let permanentlyDisplay = opts && 'permanentlyDisplay' in opts ? opts.permanentlyDisplay : null;
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[permanentlyDisplay$] = permanentlyDisplay;
    app_drawer.AppDrawer.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = app_drawer.AppDrawer.prototype;
  dart.addTypeTests(app_drawer.AppDrawer);
  const permanentlyDisplay$ = Symbol("AppDrawer.permanentlyDisplay");
  dart.setMethodSignature(app_drawer.AppDrawer, () => ({
    __proto__: dart.getMethods(app_drawer.AppDrawer.__proto__),
    createState: dart.fnType(app_drawer._AppDrawerState, [])
  }));
  dart.setLibraryUri(app_drawer.AppDrawer, "package:personal_website/ui/common/app_drawer.dart");
  dart.setFieldSignature(app_drawer.AppDrawer, () => ({
    __proto__: dart.getFields(app_drawer.AppDrawer.__proto__),
    permanentlyDisplay: dart.finalFieldType(core.bool)
  }));
  const _selectedRoute = dart.privateName(app_drawer, "_selectedRoute");
  const _routeObserver = dart.privateName(app_drawer, "_routeObserver");
  const _updateSelectedRoute = dart.privateName(app_drawer, "_updateSelectedRoute");
  let C208;
  let C207;
  let C206;
  let C211;
  let C210;
  let C209;
  const _navigateTo = dart.privateName(app_drawer, "_navigateTo");
  let C214;
  let C215;
  let C216;
  let C217;
  let C213;
  let C212;
  let C220;
  let C219;
  let C218;
  let C223;
  let C222;
  let C221;
  let C226;
  let C225;
  let C224;
  let C229;
  let C230;
  let C228;
  let C227;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C232;
  let C231;
  let C240;
  let C239;
  let C238;
  let C243;
  let C242;
  let C241;
  let C246;
  let C247;
  let C248;
  let C249;
  let C245;
  let C244;
  let C252;
  let C251;
  let C250;
  let C255;
  let C254;
  let C253;
  let C258;
  let C259;
  let C260;
  let C261;
  let C257;
  let C256;
  let C264;
  let C263;
  let C262;
  let C267;
  let C266;
  let C265;
  let C270;
  let C271;
  let C272;
  let C273;
  let C269;
  let C268;
  let C276;
  let C275;
  let C274;
  let C279;
  let C278;
  let C277;
  let C282;
  let C281;
  let C280;
  let C283;
  let C286;
  let C285;
  let C284;
  let C289;
  let C290;
  let C288;
  let C287;
  let C293;
  let C294;
  let C295;
  let C292;
  let C291;
  let C298;
  let C299;
  let C300;
  let C297;
  let C296;
  let C303;
  let C304;
  let C302;
  let C301;
  let C307;
  let C306;
  let C305;
  let C308;
  let C311;
  let C310;
  let C309;
  let C314;
  let C313;
  let C312;
  let C317;
  let C316;
  let C315;
  let C320;
  let C321;
  let C319;
  let C318;
  const State_RouteAware$ = class State_RouteAware extends framework.State$(app_drawer.AppDrawer) {};
  (State_RouteAware$.new = function() {
    State_RouteAware$.__proto__.new.call(this);
  }).prototype = State_RouteAware$.prototype;
  dart.applyMixin(State_RouteAware$, routes.RouteAware);
  app_drawer._AppDrawerState = class _AppDrawerState extends State_RouteAware$ {
    initState() {
      super.initState();
      this[_routeObserver] = app_route_observer.AppRouteObserver.new();
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_routeObserver].subscribe(this, pages.PageRoute._check(routes.ModalRoute.of(core.Object, this.context)));
    }
    dispose() {
      this[_routeObserver].unsubscribe(this);
      super.dispose();
    }
    didPush() {
      this[_updateSelectedRoute]();
    }
    didPop() {
      this[_updateSelectedRoute]();
    }
    build(context) {
      return new container.Container.new({width: dart.test(this.widget.permanentlyDisplay) ? 200 : null, child: new drawer.Drawer.new({child: new safe_area.SafeArea.new({child: new basic.Row.new({children: (() => {
                let t0 = JSArrayOfWidget().of([]);
                t0[$add](new basic.Expanded.new({child: new scroll_view.ListView.new({padding: edge_insets.EdgeInsets.zero, children: JSArrayOfWidget().of([new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.home, {$creationLocationd_0dea112b090073317d4: C206 || CT.C206}), title: new text.Text.new(i18n.I18n.of(context).homeTitle, {$creationLocationd_0dea112b090073317d4: C209 || CT.C209}), onTap: dart.fn(() => this[_navigateTo](context, "/"), VoidToFutureOfvoid()), selected: this[_selectedRoute] === "/", $creationLocationd_0dea112b090073317d4: C212 || CT.C212}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.import_contacts, {$creationLocationd_0dea112b090073317d4: C218 || CT.C218}), title: new text.Text.new(i18n.I18n.of(context).blogTitle, {$creationLocationd_0dea112b090073317d4: C221 || CT.C221}), onTap: dart.fn(() => this[_navigateTo](context, "/blog"), VoidToFutureOfvoid()), trailing: new icon_button.IconButton.new({icon: new icon.Icon.new(icons.Icons.add, {$creationLocationd_0dea112b090073317d4: C224 || CT.C224}), onPressed: dart.fn(() => this[_navigateTo](context, "/blog/new"), VoidToFutureOfvoid()), $creationLocationd_0dea112b090073317d4: C227 || CT.C227}), selected: this[_selectedRoute] === "/blog", $creationLocationd_0dea112b090073317d4: C231 || CT.C231}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.apps, {$creationLocationd_0dea112b090073317d4: C238 || CT.C238}), title: new text.Text.new(i18n.I18n.of(context).appsTitle, {$creationLocationd_0dea112b090073317d4: C241 || CT.C241}), onTap: dart.fn(() => this[_navigateTo](context, "/apps"), VoidToFutureOfvoid()), selected: this[_selectedRoute] === "/apps", $creationLocationd_0dea112b090073317d4: C244 || CT.C244}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.folder, {$creationLocationd_0dea112b090073317d4: C250 || CT.C250}), title: new text.Text.new(i18n.I18n.of(context).projectsTitle, {$creationLocationd_0dea112b090073317d4: C253 || CT.C253}), onTap: dart.fn(() => this[_navigateTo](context, "/projects"), VoidToFutureOfvoid()), selected: this[_selectedRoute] === "/projects", $creationLocationd_0dea112b090073317d4: C256 || CT.C256}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.person, {$creationLocationd_0dea112b090073317d4: C262 || CT.C262}), title: new text.Text.new(i18n.I18n.of(context).aboutTitle, {$creationLocationd_0dea112b090073317d4: C265 || CT.C265}), onTap: dart.fn(() => this[_navigateTo](context, "/about"), VoidToFutureOfvoid()), selected: this[_selectedRoute] === "/about", $creationLocationd_0dea112b090073317d4: C268 || CT.C268}), new list_tile.ListTile.new({leading: new icon.Icon.new(icons.Icons.settings, {$creationLocationd_0dea112b090073317d4: C274 || CT.C274}), title: new text.Text.new(i18n.I18n.of(context).settingsTitle, {$creationLocationd_0dea112b090073317d4: C277 || CT.C277}), onTap: dart.fn(() => {
                          dialog.showDialog(dart.dynamic, {context: context, builder: dart.fn(_ => new dialog.AlertDialog.new({title: new text.Text.new(i18n.I18n.of(context).settingsTitle, {$creationLocationd_0dea112b090073317d4: C280 || CT.C280}), content: new settings.SettingsView.new({$creationLocationd_0dea112b090073317d4: C283 || CT.C283}), actions: JSArrayOfWidget().of([new flat_button.FlatButton.new({child: new text.Text.new(i18n.I18n.of(context).ok, {$creationLocationd_0dea112b090073317d4: C284 || CT.C284}), onPressed: dart.fn(() => navigator.Navigator.maybePop(core.Object, context), VoidToFutureOfbool()), $creationLocationd_0dea112b090073317d4: C287 || CT.C287})]), $creationLocationd_0dea112b090073317d4: C291 || CT.C291}), BuildContextToAlertDialog())});
                        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C296 || CT.C296})]), $creationLocationd_0dea112b090073317d4: C301 || CT.C301}), $creationLocationd_0dea112b090073317d4: C305 || CT.C305}));
                if (dart.test(this.widget.permanentlyDisplay)) t0[$add](C308 || CT.C308);
                return t0;
              })(), $creationLocationd_0dea112b090073317d4: C309 || CT.C309}), $creationLocationd_0dea112b090073317d4: C312 || CT.C312}), $creationLocationd_0dea112b090073317d4: C315 || CT.C315}), $creationLocationd_0dea112b090073317d4: C318 || CT.C318});
    }
    [_navigateTo](context, routeName) {
      return async.async(dart.void, (function* _navigateTo() {
        if (dart.test(this.widget.permanentlyDisplay)) {
          navigator.Navigator.pop(core.Object, context);
        }
        yield navigator.Navigator.pushNamed(core.Object, context, routeName);
      }).bind(this));
    }
    [_updateSelectedRoute]() {
      this.setState(dart.fn(() => {
        this[_selectedRoute] = routes.ModalRoute.of(core.Object, this.context).settings.name;
      }, VoidToNull()));
    }
  };
  (app_drawer._AppDrawerState.new = function() {
    this[_selectedRoute] = null;
    this[_routeObserver] = null;
    app_drawer._AppDrawerState.__proto__.new.call(this);
    ;
  }).prototype = app_drawer._AppDrawerState.prototype;
  dart.addTypeTests(app_drawer._AppDrawerState);
  dart.setMethodSignature(app_drawer._AppDrawerState, () => ({
    __proto__: dart.getMethods(app_drawer._AppDrawerState.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext]),
    [_navigateTo]: dart.fnType(async.Future$(dart.void), [framework.BuildContext, core.String]),
    [_updateSelectedRoute]: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(app_drawer._AppDrawerState, "package:personal_website/ui/common/app_drawer.dart");
  dart.setFieldSignature(app_drawer._AppDrawerState, () => ({
    __proto__: dart.getFields(app_drawer._AppDrawerState.__proto__),
    [_selectedRoute]: dart.fieldType(core.String),
    [_routeObserver]: dart.fieldType(app_route_observer.AppRouteObserver)
  }));
  let C322;
  about.AboutScreen = class AboutScreen extends framework.StatelessWidget {
    build(context) {
      return new render.AssetPageRender.new({title: i18n.I18n.of(context).aboutTitle, path: "about", $creationLocationd_0dea112b090073317d4: C322 || CT.C322});
    }
  };
  (about.AboutScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    about.AboutScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = about.AboutScreen.prototype;
  dart.addTypeTests(about.AboutScreen);
  dart.setMethodSignature(about.AboutScreen, () => ({
    __proto__: dart.getMethods(about.AboutScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(about.AboutScreen, "package:personal_website/ui/pages/about.dart");
  dart.defineLazy(about.AboutScreen, {
    /*about.AboutScreen.routeName*/get routeName() {
      return "/about";
    }
  });
  let C325;
  let C326;
  let C327;
  let C328;
  let C329;
  let C330;
  let C331;
  let C324;
  let C323;
  let C334;
  let C335;
  let C333;
  let C332;
  let C338;
  let C339;
  let C340;
  let C337;
  let C336;
  let C341;
  let C344;
  let C343;
  let C342;
  let C347;
  let C348;
  let C346;
  let C345;
  let C351;
  let C350;
  let C349;
  let C354;
  let C353;
  let C352;
  blog_previews.BlogPreviews = class BlogPreviews extends framework.StatelessWidget {
    build(context) {
      return new (BlocBuilderOfBlogBloc$BlogState()).new({builder: dart.fn((context, state) => new layout_builder.LayoutBuilder.new({builder: dart.fn((context, dimens) => {
            if (blog_state.PostsReady.is(state)) {
              let _posts = state.posts;
              return new carousel_slider.CarouselSlider.new({height: 450.0, autoPlay: true, items: _posts[$map](container.Container, dart.fn(i => {
                  let post = fb_post.FbPost.fromJson(MapOfString$dynamic()._check(convert.json.decode(convert.json.encode(i.data))));
                  return new container.Container.new({width: dart.notNull(dimens.maxWidth) * 0.8, child: new blog_card.BlogCard.new({author: post.author, datePublished: new core.DateTime.fromMillisecondsSinceEpoch(post.datePublished), tags: post.tags[$split](","), title: post.title, image: post.image, description: post.description, onTap: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, post$.PostDetails.routeName(i.documentId)), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C323 || CT.C323}), $creationLocationd_0dea112b090073317d4: C332 || CT.C332});
                }, FbDocumentSnapshotToContainer()))[$toList](), $creationLocationd_0dea112b090073317d4: C336 || CT.C336});
            }
            return new container.Container.new({height: 400.0, child: new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C341 || CT.C341}), $creationLocationd_0dea112b090073317d4: C342 || CT.C342}), $creationLocationd_0dea112b090073317d4: C345 || CT.C345});
          }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: C349 || CT.C349}), BuildContextAndBlogStateToLayoutBuilder()), $creationLocationd_0dea112b090073317d4: C352 || CT.C352});
    }
  };
  (blog_previews.BlogPreviews.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    blog_previews.BlogPreviews.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = blog_previews.BlogPreviews.prototype;
  dart.addTypeTests(blog_previews.BlogPreviews);
  dart.setMethodSignature(blog_previews.BlogPreviews, () => ({
    __proto__: dart.getMethods(blog_previews.BlogPreviews.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(blog_previews.BlogPreviews, "package:personal_website/ui/common/blog_previews.dart");
  let C355;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C364;
  let C357;
  let C356;
  let C367;
  let C368;
  let C366;
  let C365;
  let C371;
  let C372;
  let C373;
  let C370;
  let C369;
  let C374;
  let C377;
  let C376;
  let C375;
  let C380;
  let C379;
  let C378;
  let C383;
  let C382;
  let C381;
  let C386;
  let C385;
  let C384;
  let C389;
  let C390;
  let C388;
  let C387;
  screen$1.BlogScreen = class BlogScreen extends framework.StatelessWidget {
    build(context) {
      return new app_scaffold.AppScaffold.new({pageTitle: i18n.I18n.of(context).blogTitle, body: new layout_builder.LayoutBuilder.new({builder: dart.fn((context, dimens) => new (BlocBuilderOfBlogBloc$BlogState()).new({builder: dart.fn((context, state) => {
              if (blog_state.PostsReady.is(state)) {
                return new scroll_view.GridView.builder({gridDelegate: new sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: (dart.notNull(dimens.maxWidth) / 350)[$ceil](), childAspectRatio: 9 / 16}), itemCount: state.posts[$length], itemBuilder: dart.fn((context, index) => {
                    let _index = state.posts[$_get](index);
                    let _json = convert.json.decode(convert.json.encode(_index.data));
                    let post = fb_post.FbPost.fromJson(MapOfString$dynamic()._check(_json));
                    return new container.Container.new({padding: C355 || CT.C355, child: new blog_card.BlogCard.new({author: post.author, datePublished: new core.DateTime.fromMillisecondsSinceEpoch(post.datePublished), tags: post.tags[$split](","), title: post.title, image: post.image, description: post.description, onTap: dart.fn(() => navigator.Navigator.pushNamed(core.Object, context, post$.PostDetails.routeName(_index.documentId)), VoidToFutureOfObject()), $creationLocationd_0dea112b090073317d4: C356 || CT.C356}), $creationLocationd_0dea112b090073317d4: C365 || CT.C365});
                  }, BuildContextAndintToContainer()), $creationLocationd_0dea112b090073317d4: C369 || CT.C369});
              }
              return new container.Container.new({child: new basic.Center.new({child: new progress_indicator.CircularProgressIndicator.new({$creationLocationd_0dea112b090073317d4: C374 || CT.C374}), $creationLocationd_0dea112b090073317d4: C375 || CT.C375}), $creationLocationd_0dea112b090073317d4: C378 || CT.C378});
            }, BuildContextAndBlogStateToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C381 || CT.C381}), BuildContextAndBoxConstraintsToBlocBuilderOfBlogBloc$BlogState()), $creationLocationd_0dea112b090073317d4: C384 || CT.C384}), $creationLocationd_0dea112b090073317d4: C387 || CT.C387});
    }
  };
  (screen$1.BlogScreen.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    screen$1.BlogScreen.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = screen$1.BlogScreen.prototype;
  dart.addTypeTests(screen$1.BlogScreen);
  dart.setMethodSignature(screen$1.BlogScreen, () => ({
    __proto__: dart.getMethods(screen$1.BlogScreen.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(screen$1.BlogScreen, "package:personal_website/ui/blog/screen.dart");
  dart.defineLazy(screen$1.BlogScreen, {
    /*screen$1.BlogScreen.routeName*/get routeName() {
      return "/blog";
    }
  });
  dart.trackLibraries("packages/personal_website/ui/apps/screen", {
    "package:personal_website/ui/projects/screen.dart": screen,
    "package:personal_website/ui/home/screen.dart": screen$,
    "package:personal_website/ui/common/index.dart": index,
    "package:personal_website/ui/common/app_scaffold.dart": app_scaffold,
    "package:personal_website/ui/home/landing.dart": landing,
    "package:personal_website/ui/pages/privacy_policy.dart": privacy_policy,
    "package:personal_website/ui/blog/post.dart": post$,
    "package:personal_website/ui/apps/screen.dart": screen$0,
    "package:personal_website/ui/pages/render.dart": render,
    "package:personal_website/ui/common/app_drawer.dart": app_drawer,
    "package:personal_website/ui/pages/about.dart": about,
    "package:personal_website/ui/common/blog_previews.dart": blog_previews,
    "package:personal_website/ui/blog/screen.dart": screen$1,
    "package:personal_website/ui/pages/index.dart": index$
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["../projects/screen.dart","../home/screen.dart","../common/app_scaffold.dart","../home/landing.dart","../pages/privacy_policy.dart","../blog/post.dart","screen.dart","../pages/render.dart","../common/app_drawer.dart","../pages/about.dart","../common/blog_previews.dart","../blog/screen.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAQ4B;AACxB,YAAO,8CACW,AAAY,aAAT,OAAO,uBACpB;IAEV;;;;;;EACF;;;;;;;;MARsB,+BAAS;;;;;;;;;;UCGH;AACxB,YAAO,8CAUW,AAAY,aAAT,OAAO,eACpB;IAEV;;;;;;EACF;;;;;;;;MAjBsB,4BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICahB;;;;;;IAEA;;;;;;UAGa;AACb,gCAC2B,aAAvB,AAAY,AAAK,0BAAd,OAAO;AAEzB,YAAO,8BACK,sBAER,+BACS,mCACG,mBAAmB,GACrB,mDAE6B,mBAAmB,SACvC,kBAAK,oIAEd,qDACsB,uBAAW,cACxB,oCACQ,AAAY,eAAT,OAAO,uBAChB,2BACW,oCACT,6BACa,sBAChB,+BACS,6BACa,sBAChB,uCACS,kBAAW,uFACP,cAAgB,2CACvB,OAAO,0FAEb,uCACS,kBAAU,AAAY,aAAT,OAAO,kFAChB,cAAgB,2CACvB,OAAO,8FAEb,uCACS,kBAAU,AAAY,aAAT,OAAO,kFAChB,cAAgB,2CACvB,OAAO,8FAEb,uCACS,kBAAU,AAAY,aAAT,OAAO,sFAChB,cAAgB,2CACvB,OAAO,kGAEb,uCACS,kBAAU,AAAY,aAAT,OAAO,mFAChB,cAAgB,2CACvB,OAAO,mNAKnB,oCACS,8DACI,SAAC,SAAS;AACjB,kCAAU,gCAAN,KAAK;AACP,sCAAO,0CAEI,AAAY,aAAT,OAAO,oCACb,AAAM,AAAS,KAAV,sBACL,kBAAW,wFACX,kBAAW,iGACN;;AACP,0CAAa,AACR,2DADyB,OAAO,WACvB,4CAAe,AACpB,KADyB,WAE1B,cACE,WAAC,AAAM,AAAS,KAAV;;;AAGxB,oCAAO;ibASrB,mBAAmB,mBAErB,YACA;IAKhB;;;QAjGkC;QAAqB;QAAe;;IAApC;IAAqB;AACjD,4DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;UCZK;AACxB,YAAO,yCACa,sBAChB,8DAES;IAIf;;;;;;EACF;;;;;;;;;;;;UCP4B;AACxB,YAAO,wCACO,AAAY,aAAT,OAAO,wBAChB;IAEV;;;;;;EACF;;;;;;;;MATsB,sCAAS;;;;;ICYhB;;;;;;IACA;;;;;;qBAEkB;AAAO,YAAA,AAAW,qBAAH,EAAE;IAAC;;AAGd;IAAmB;;;QAXhD;QACC;QACU;;IADV;IACU;AACZ,qDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAelB,eAAgB,KAAR,iCAAQ;AAChB,UAAI,AAAM,eAAG;QACC,AAA6B,uBAAtB,AAAS,wBAAE,AAAO,iCAAS,QAAC;AAC7C,wBAAI,eACF,cAAS;YACP,cAAe,qDAAS,AAAK,oBAAO,AAAK,oBAAO,AAAK,IAAD;;UAExD;;;QAGF;;MAEI;IACR;;IAOA;UAG0B;AACxB,UAAI,AAAM,eAAG;AACX,cAAO,oCACG,yFACF,6BACG;;AAIb,YAAO,iDACgB,4CACZ,6BACa,sBAChB,sCACQ,kBAAW,2FACN;kBACG,0BAAU,AAAoB,oBAAX,AAAO;kBAC5B,qCAAI,OAAO;6FAGzB,sCACQ,kBAAW,yFACN,cAAM,AAIf,kCAHA,OAAO,EACP,wCAAqB,iBAAW,AAAO,wFAC3B,uBACP,QAAC;AACN,sBAAI,IAAI,IAAI,kBAAQ;oBAClB,cAAS,cAAM,cAAQ,IAAI;oBAC3B;;qPAON,kEACiB,SAAC,SAAS,uBACd,sBACb,8CACkB,iBACN,eACF,eACS,sBACf,sCACQ,kBAAW,0FACN;gHAGA,0DACE,aACN,kBAAK,AAAM,2BAAc,wCAAoB,+EAClC,wBAChB,AAAM,yBACM,qPAKP,+CACN,OAAO,aACL,aACJ;IAIf;;;AAGE,WAAW,KAAP,iCAAO,gBAAY;AACrB,cAAO,yCAAqB,AAAM;;AAEpC,YAAO,8BAAc;IACvB;;;IAnGO;;;EAoGT;;;;;;;;;;;;;;;;UCxH4B;AACxB,YAAO,8CACW,AAAY,aAAT,OAAO,mBACpB;IAEV;;;;;;EACF;;;;;;;;MARsB,6BAAS;;;;;ICAhB;;;;;;IAAM;;;;;;;AAGoB;IAAuB;;;QAFnC;QAAU;QAAW;;IAAX;IAAW;AAAU,0DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;MAUvE,AAAW,AAA6C,mCAAlC,AAAgC,2BAAhB,AAAO,oBAAK,uBAAW,QAAC;AAC5D,sBAAI,eACF,cAAS;UACP,cAAQ,IAAI;;;MAGZ;IACR;UAG0B;AACxB,YAAO,8CACM,AAAO,yBACZ,wCAAqB;IAE/B;;;IAnBO;;;EAoBT;;;;;;;;;;;;ICfa;;;;;;;AAGsB;IAAiB;;;QANlB;QAAwB;;IAAxB;AAC1B,wDAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAab;MACN,uBAAiB;IACnB;;MAIQ;MACN,AAAe,+BAAU,6BAAiB,kCAAG;IAC/C;;MAIE,AAAe,iCAAY;MACrB;IACR;;MAIE;IACF;;MAIE;IACF;UAG0B;AACxB,YAAO,+CACE,AAAO,wCAAoC,aAC3C,8BACE,mCACE;;yBAEH,+BACS,uCACe,uCACV,sBAgBR,qCACW,kBAAW,qFACb,kBAAU,AAAY,aAAT,OAAO,gFACpB,cAAM,kBAAY,OAAO,yCACtB,AAAe,yFAE3B,qCACW,kBAAW,gGACb,kBAAU,AAAY,aAAT,OAAO,gFACpB,cAAM,kBAAY,OAAO,6CACtB,sCACF,kBAAW,wFACN,cACP,kBAAY,OAAO,4GAEf,AAAe,6FAE3B,qCACW,kBAAW,qFACb,kBAAU,AAAY,aAAT,OAAO,gFACpB,cAAM,kBAAY,OAAO,6CACtB,AAAe,6FAE3B,qCACW,kBAAW,uFACb,kBAAU,AAAY,aAAT,OAAO,oFACpB,cACH,kBAAY,OAAO,iDACb,AAAe,iGAE3B,qCACW,kBAAW,uFACb,kBAAU,AAAY,aAAT,OAAO,iFACpB,cAAM,kBAAY,OAAO,8CACtB,AAAe,8FAE3B,qCACW,kBAAW,yFACb,kBAAU,AAAY,aAAT,OAAO,oFACpB;0BACL,0CACW,OAAO,WACP,QAAC,KAAM,mCACP,kBAAU,AAAY,aAAT,OAAO,sFAClB,mGACQ,sBACf,uCACS,kBAAU,AAAY,aAAT,OAAO,6EAChB,cAAgB,0CAAS,OAAO;;AAU7D,8BAAI,AAAO;;;IASvB;kBAIsC,SAAgB;AAA9B;AACtB,sBAAI,AAAO;UACC,qCAAI,OAAO;;QAEvB,MAAgB,2CAAU,OAAO,EAAE,SAAS;MAC9C;;;MAGE,cAAS;QACP,uBAA4B,AAAY,AAAS,kCAAlB;;IAEnC;;;IA3IO;IACU;;;EA2InB;;;;;;;;;;;;;;;;UC5J4B;AACxB,YAAO,wCACO,AAAY,aAAT,OAAO,oBAChB;IAEV;;;;;;EACF;;;;;;;;MATsB,2BAAS;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCWH;AACxB,YAAO,uDACI,SAAC,SAAS,UAAU,+CAClB,SAAC,SAAS;AACjB,gBAAU,yBAAN,KAAK;AACD,2BAAS,AAAM,KAAD;AACpB,oBAAO,iDACG,iBACE,aACH,AAAO,AAeX,MAfU,4BAAK,QAAC;AACX,6BAAc,qDAAS,AAAK,oBAAO,AAAK,oBAAO,AAAE,CAAD;AACtD,wBAAO,qCACoB,aAAhB,AAAO,MAAD,aAAY,YAClB,oCACG,AAAK,IAAD,wBACY,6CACpB,AAAK,IAAD,uBACF,AAAK,AAAK,IAAN,cAAY,aACf,AAAK,IAAD,eACJ,AAAK,IAAD,qBACE,AAAK,IAAD,qBACV,cAAgB,2CACnB,OAAO,EAAc,4BAAU,AAAE,CAAD;;;AAKhD,kBAAO,sCACG,cACD,6BACE;;IAMnB;;;QAxCM;;AACD,8DAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UCAM;AACxB,YAAO,8CACW,AAAY,aAAT,OAAO,mBAWpB,+CACK,SAAC,SAAS,WAAW,sDACnB,SAAC,SAAS;AACjB,kBAAU,yBAAN,KAAK;AACP,sBAAgB,iDACA,+EAC4B,CAAP,aAAhB,AAAO,MAAD,aAAY,iCACjB,AAAE,IAAE,iBAEb,AAAM,AAAM,KAAP,8BACH,SAAC,SAAS;AACf,iCAAS,AAAM,AAAK,KAAN,cAAO,KAAK;AAC1B,gCAAQ,AAAK,oBAAO,AAAK,oBAAO,AAAO,MAAD;AACtC,+BAAc,qDAAS,KAAK;AAClC,0BAAO,+DAEE,oCACG,AAAK,IAAD,wBACY,6CACpB,AAAK,IAAD,uBACF,AAAK,AAAK,IAAN,cAAY,aACf,AAAK,IAAD,eACJ,AAAK,IAAD,qBACE,AAAK,IAAD,qBACV,cAAgB,2CACnB,OAAO,EAAc,4BAAU,AAAO,MAAD;;;AAMnD,oBAAO,qCACE,6BACE;;IAOrB;;;;;;EACF;;;;;;;;MAxDsB,6BAAS","file":"screen.ddc.js"}');
  // Exports:
  return {
    ui__projects__screen: screen,
    ui__home__screen: screen$,
    ui__common__index: index,
    ui__common__app_scaffold: app_scaffold,
    ui__home__landing: landing,
    ui__pages__privacy_policy: privacy_policy,
    ui__blog__post: post$,
    ui__apps__screen: screen$0,
    ui__pages__render: render,
    ui__common__app_drawer: app_drawer,
    ui__pages__about: about,
    ui__common__blog_previews: blog_previews,
    ui__blog__screen: screen$1,
    ui__pages__index: index$
  };
});

//# sourceMappingURL=screen.ddc.js.map

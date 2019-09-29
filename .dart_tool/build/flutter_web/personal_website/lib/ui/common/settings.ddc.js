define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/rendering/animated_size', 'packages/flutter_bloc/flutter_bloc', 'packages/personal_website/data/blocs/settings/bloc', 'packages/personal_website/data/blocs/settings/settings_state', 'packages/flutter/material', 'packages/personal_website/generated/i18n', 'packages/personal_website/data/blocs/settings/settings_event'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__src__rendering__animated_size, packages__flutter_bloc__flutter_bloc, packages__personal_website__data__blocs__settings__bloc, packages__personal_website__data__blocs__settings__settings_state, packages__flutter__material, packages__personal_website__generated__i18n, packages__personal_website__data__blocs__settings__settings_event) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const single_child_scroll_view = packages__flutter__src__widgets__actions.src__widgets__single_child_scroll_view;
  const basic = packages__flutter__src__widgets__actions.src__widgets__basic;
  const text = packages__flutter__src__widgets__actions.src__widgets__text;
  const widget_inspector = packages__flutter__src__widgets__actions.src__widgets__widget_inspector;
  const container = packages__flutter__src__widgets__actions.src__widgets__container;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const flex = packages__flutter__src__rendering__animated_size.src__rendering__flex;
  const bloc_builder = packages__flutter_bloc__flutter_bloc.src__bloc_builder;
  const bloc_provider = packages__flutter_bloc__flutter_bloc.src__bloc_provider;
  const settings_bloc = packages__personal_website__data__blocs__settings__bloc.data__blocs__settings__settings_bloc;
  const settings_state = packages__personal_website__data__blocs__settings__settings_state.data__blocs__settings__settings_state;
  const switch_list_tile = packages__flutter__material.src__material__switch_list_tile;
  const i18n = packages__personal_website__generated__i18n.generated__i18n;
  const settings_event = packages__personal_website__data__blocs__settings__settings_event.data__blocs__settings__settings_event;
  const settings = Object.create(dart.library);
  let BlocBuilderOfSettingsBloc$SettingsState = () => (BlocBuilderOfSettingsBloc$SettingsState = dart.constFn(bloc_builder.BlocBuilder$(settings_bloc.SettingsBloc, settings_state.SettingsState)))();
  let boolTovoid = () => (boolTovoid = dart.constFn(dart.fnType(dart.void, [core.bool])))();
  let BuildContextAndSettingsStateToStatelessWidget = () => (BuildContextAndSettingsStateToStatelessWidget = dart.constFn(dart.fnType(framework.StatelessWidget, [framework.BuildContext, settings_state.SettingsState])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 48,
        line: 22,
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
        column: 26,
        line: 22,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 19,
        line: 22,
        file: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 19,
        line: 23,
        file: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onChanged",
        column: 19,
        line: 24,
        file: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C4 || CT.C4,
        name: null,
        column: 39,
        line: 21,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C9() {
      return C9 = dart.constList([], widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 22,
        line: 28,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 13,
        line: 19,
        file: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12], widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C11 || CT.C11,
        name: null,
        column: 11,
        line: 18,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "data",
        column: 48,
        line: 35,
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
        column: 26,
        line: 35,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "title",
        column: 19,
        line: 35,
        file: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "value",
        column: 19,
        line: 36,
        file: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "onChanged",
        column: 19,
        line: 37,
        file: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C17 || CT.C17,
        name: null,
        column: 39,
        line: 34,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C9 || CT.C9,
        name: null,
        column: 22,
        line: 42,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "builder",
        column: 13,
        line: 32,
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
        column: 11,
        line: 31,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "mainAxisSize",
        column: 9,
        line: 16,
        file: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "children",
        column: 9,
        line: 17,
        file: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27, C28 || CT.C28], widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C26 || CT.C26,
        name: null,
        column: 14,
        line: 15,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: null,
        name: "child",
        column: 7,
        line: 15,
        file: null
      });
    },
    get C30() {
      return C30 = dart.constList([C31 || CT.C31], widget_inspector._Location);
    },
    get C29() {
      return C29 = dart.const({
        __proto__: widget_inspector._Location.prototype,
        parameterLocations: C30 || CT.C30,
        name: null,
        column: 12,
        line: 14,
        file: "org-dartlang-app:///packages/personal_website/ui/common/settings.dart"
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  let C9;
  let C8;
  let C12;
  let C11;
  let C10;
  let C15;
  let C14;
  let C13;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  let C21;
  let C24;
  let C23;
  let C22;
  let C27;
  let C28;
  let C26;
  let C25;
  let C31;
  let C30;
  let C29;
  settings.SettingsView = class SettingsView extends framework.StatelessWidget {
    build(context) {
      return new single_child_scroll_view.SingleChildScrollView.new({child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: JSArrayOfWidget().of([new (BlocBuilderOfSettingsBloc$SettingsState()).new({builder: dart.fn((context, state) => {
                if (settings_state.SettingsReady.is(state)) {
                  return new switch_list_tile.SwitchListTile.adaptive({title: new text.Text.new(i18n.I18n.of(context).settingsDarkMode, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), value: state.settings.darkMode, onChanged: dart.fn(val => {
                      let t0;
                      return bloc_provider.BlocProvider.of(settings_bloc.SettingsBloc, context).dispatch(new settings_event.ChangeSettings.new((t0 = state.settings, t0.darkMode = val, t0)));
                    }, boolTovoid()), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
                }
                return new container.Container.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8});
              }, BuildContextAndSettingsStateToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new (BlocBuilderOfSettingsBloc$SettingsState()).new({builder: dart.fn((context, state) => {
                if (settings_state.SettingsReady.is(state)) {
                  return new switch_list_tile.SwitchListTile.adaptive({title: new text.Text.new(i18n.I18n.of(context).settingsUseSystem, {$creationLocationd_0dea112b090073317d4: C13 || CT.C13}), value: state.settings.useSystemSetting, onChanged: dart.fn(val => {
                      let t0;
                      return bloc_provider.BlocProvider.of(settings_bloc.SettingsBloc, context).dispatch(new settings_event.ChangeSettings.new((t0 = state.settings, t0.useSystemSetting = val, t0)));
                    }, boolTovoid()), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
                }
                return new container.Container.new({$creationLocationd_0dea112b090073317d4: C21 || CT.C21});
              }, BuildContextAndSettingsStateToStatelessWidget()), $creationLocationd_0dea112b090073317d4: C22 || CT.C22})]), $creationLocationd_0dea112b090073317d4: C25 || CT.C25}), $creationLocationd_0dea112b090073317d4: C29 || CT.C29});
    }
  };
  (settings.SettingsView.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    settings.SettingsView.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = settings.SettingsView.prototype;
  dart.addTypeTests(settings.SettingsView);
  dart.setMethodSignature(settings.SettingsView, () => ({
    __proto__: dart.getMethods(settings.SettingsView.__proto__),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(settings.SettingsView, "package:personal_website/ui/common/settings.dart");
  dart.trackLibraries("packages/personal_website/ui/common/settings", {
    "package:personal_website/ui/common/settings.dart": settings
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["settings.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAY4B;AACxB,YAAO,gEACE,oCACsB,iCACT,sBAChB,8DACW,SAAC,SAAS;AACjB,oBAAU,gCAAN,KAAK;AACP,wBAAsB,sDACb,kBAAU,AAAY,aAAT,OAAO,mFACpB,AAAM,AAAS,KAAV,+BACD,QAAC;;AAAQ,4BAAa,AAC5B,2DAD6C,OAAO,WAC3C,4CAAe,AAAM,KAAD,WAAW,cAAW,GAAG;;;AAG/D,sBAAO;4HAGX,8DACW,SAAC,SAAS;AACjB,oBAAU,gCAAN,KAAK;AACP,wBAAsB,sDACb,kBAAU,AAAY,aAAT,OAAO,sFACpB,AAAM,AAAS,KAAV,uCACD,QAAC;;AAAQ,4BAAa,AAC5B,2DAD6C,OAAO,WAC3C,4CACN,AAAM,KAAD,WAAW,sBAAmB,GAAG;;;AAGlD,sBAAO;;IAMnB;;;QAvCM;;AACD,yDAAW,GAAG;;EAAC","file":"settings.ddc.js"}');
  // Exports:
  return {
    ui__common__settings: settings
  };
});

//# sourceMappingURL=settings.ddc.js.map

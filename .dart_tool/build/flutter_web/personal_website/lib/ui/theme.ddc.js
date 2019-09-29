define(['dart_sdk', 'packages/flutter/material', 'packages/flutter/src/painting/_network_image_web', 'packages/flutter/src/foundation/_bitfield_web', 'packages/flutter/src/widgets/actions', 'packages/flutter/src/animation/animation'], function(dart_sdk, packages__flutter__material, packages__flutter__src__painting___network_image_web, packages__flutter__src__foundation___bitfield_web, packages__flutter__src__widgets__actions, packages__flutter__src__animation__animation) {
  'use strict';
  const core = dart_sdk.core;
  const ui = dart_sdk.ui;
  const collection = dart_sdk.collection;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const theme_data = packages__flutter__material.src__material__theme_data;
  const card_theme = packages__flutter__material.src__material__card_theme;
  const bottom_app_bar_theme = packages__flutter__material.src__material__bottom_app_bar_theme;
  const tab_bar_theme = packages__flutter__material.src__material__tab_bar_theme;
  const colors = packages__flutter__material.src__material__colors;
  const page_transitions_theme = packages__flutter__material.src__material__page_transitions_theme;
  const rounded_rectangle_border = packages__flutter__src__painting___network_image_web.src__painting__rounded_rectangle_border;
  const border_radius = packages__flutter__src__painting___network_image_web.src__painting__border_radius;
  const platform = packages__flutter__src__foundation___bitfield_web.src__foundation__platform;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const animation = packages__flutter__src__animation__animation.src__animation__animation;
  const theme = Object.create(dart.library);
  const $toList = dartx.toList;
  let LinkedHashMapOfTargetPlatform$InanimatePageTransitionsBuilder = () => (LinkedHashMapOfTargetPlatform$InanimatePageTransitionsBuilder = dart.constFn(collection.LinkedHashMap$(platform.TargetPlatform, theme.InanimatePageTransitionsBuilder)))();
  let dynamicToTargetPlatform = () => (dynamicToTargetPlatform = dart.constFn(dart.fnType(platform.TargetPlatform, [dart.dynamic])))();
  let dynamicToInanimatePageTransitionsBuilder = () => (dynamicToInanimatePageTransitionsBuilder = dart.constFn(dart.fnType(theme.InanimatePageTransitionsBuilder, [dart.dynamic])))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: theme.InanimatePageTransitionsBuilder.prototype
      });
    }
  });
  let C0;
  theme.AppTheme = class AppTheme extends core.Object {
    static get light() {
      return theme_data.ThemeData.new({cardTheme: new card_theme.CardTheme.new({elevation: 6.0, clipBehavior: ui.Clip.hardEdge, shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.circular(20.0)})}), brightness: ui.Brightness.light, appBarTheme: theme_data.ThemeData.light().appBarTheme.copyWith({elevation: 1.0}), bottomAppBarTheme: new bottom_app_bar_theme.BottomAppBarTheme.new({color: theme_data.ThemeData.light().scaffoldBackgroundColor}), tabBarTheme: new tab_bar_theme.TabBarTheme.new({labelColor: colors.Colors.black}), primaryColor: colors.Colors.blueGrey, accentColor: colors.Colors.red, pageTransitionsTheme: theme.AppTheme._getTransition()});
    }
    static _getTransition() {
      return new page_transitions_theme.PageTransitionsTheme.new({builders: LinkedHashMapOfTargetPlatform$InanimatePageTransitionsBuilder().fromIterable(platform.TargetPlatform.values[$toList](), {key: dart.fn(k => platform.TargetPlatform._check(k), dynamicToTargetPlatform()), value: dart.fn(_ => C0 || CT.C0, dynamicToInanimatePageTransitionsBuilder())})});
    }
    static get dark() {
      return theme_data.ThemeData.dark().copyWith({cardTheme: new card_theme.CardTheme.new({clipBehavior: ui.Clip.hardEdge}), pageTransitionsTheme: theme.AppTheme._getTransition()});
    }
  };
  (theme.AppTheme.__ = function() {
    ;
  }).prototype = theme.AppTheme.prototype;
  dart.addTypeTests(theme.AppTheme);
  dart.setLibraryUri(theme.AppTheme, "package:personal_website/ui/theme.dart");
  theme.InanimatePageTransitionsBuilder = class InanimatePageTransitionsBuilder extends page_transitions_theme.PageTransitionsBuilder {
    buildTransitions(T, route, context, animation, secondaryAnimation, child) {
      return child;
    }
  };
  (theme.InanimatePageTransitionsBuilder.new = function() {
    theme.InanimatePageTransitionsBuilder.__proto__.new.call(this);
    ;
  }).prototype = theme.InanimatePageTransitionsBuilder.prototype;
  dart.addTypeTests(theme.InanimatePageTransitionsBuilder);
  dart.setMethodSignature(theme.InanimatePageTransitionsBuilder, () => ({
    __proto__: dart.getMethods(theme.InanimatePageTransitionsBuilder.__proto__),
    buildTransitions: dart.gFnType(T => [framework.Widget, [pages.PageRoute$(T), framework.BuildContext, animation.Animation$(core.double), animation.Animation$(core.double), framework.Widget]])
  }));
  dart.setLibraryUri(theme.InanimatePageTransitionsBuilder, "package:personal_website/ui/theme.dart");
  dart.trackLibraries("packages/personal_website/ui/theme", {
    "package:personal_website/ui/theme.dart": theme
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["theme.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAIgC,kDACb,yCACE,mBACQ,yBACZ,uEACsB,wCAAS,uBAIjB,kCACA,AAAQ,AAAY,8DAAoB,0BAE3D,uDAAmC,AAAQ,qEAClC,+CACQ,qCAEA,qCACD,yCACE;IACvB;;AAGH,YAAO,gEAEG,6EAEe,AAAO,iDACjB,QAAS,oCAAM,CAAC,sCACd,QAAS;IAE5B;;AAE6B,YAAU,AAAO,kDAC7B,4CACU,0CAEC;IACvB;;;;EAtCO;;;;wBA+CK,OACA,SACK,WACA,oBACX;AACT,YAAO,MAAK;IACd;;;AAVM;;EAAiC","file":"theme.ddc.js"}');
  // Exports:
  return {
    ui__theme: theme
  };
});

//# sourceMappingURL=theme.ddc.js.map

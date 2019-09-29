define(['dart_sdk', 'packages/flutter/src/widgets/actions', 'packages/flutter/material'], function(dart_sdk, packages__flutter__src__widgets__actions, packages__flutter__material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const navigator = packages__flutter__src__widgets__actions.src__widgets__navigator;
  const framework = packages__flutter__src__widgets__actions.src__widgets__framework;
  const page = packages__flutter__material.src__material__page;
  const navigate = Object.create(dart.library);
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(framework.Widget, [framework.BuildContext])))();
  const CT = Object.create(null);
  navigate.navigate = function navigate$(T, context, child, opts) {
    let fullScreen = opts && 'fullScreen' in opts ? opts.fullScreen : false;
    let rootNavigator = opts && 'rootNavigator' in opts ? opts.rootNavigator : false;
    return navigator.Navigator.of(context, {rootNavigator: rootNavigator}).push(T, new (page.MaterialPageRoute$(T)).new({builder: dart.fn(_ => child, BuildContextToWidget()), fullscreenDialog: fullScreen}));
  };
  dart.trackLibraries("packages/personal_website/data/utils/navigate", {
    "package:personal_website/data/utils/navigate.dart": navigate
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["navigate.dart"],"names":[],"mappings":";;;;;;;;;;;4CAEmC,SAAgB;QACrC;QAAyB;AACnC,UAAU,AACL,wBADQ,OAAO,kBAAiB,aAAa,WACrC,+CACF,QAAC,KAAM,KAAK,6CACH,UAAU;EAC5B","file":"navigate.ddc.js"}');
  // Exports:
  return {
    data__utils__navigate: navigate
  };
});

//# sourceMappingURL=navigate.ddc.js.map

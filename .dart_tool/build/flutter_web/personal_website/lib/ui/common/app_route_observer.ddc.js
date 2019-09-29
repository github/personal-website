define(['dart_sdk', 'packages/flutter/src/widgets/actions'], function(dart_sdk, packages__flutter__src__widgets__actions) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const routes = packages__flutter__src__widgets__actions.src__widgets__routes;
  const pages = packages__flutter__src__widgets__actions.src__widgets__pages;
  const app_route_observer = Object.create(dart.library);
  const CT = Object.create(null);
  app_route_observer.AppRouteObserver = class AppRouteObserver extends routes.RouteObserver$(pages.PageRoute) {
    static new() {
      return app_route_observer.AppRouteObserver._instance;
    }
  };
  (app_route_observer.AppRouteObserver._private = function() {
    app_route_observer.AppRouteObserver.__proto__.new.call(this);
    ;
  }).prototype = app_route_observer.AppRouteObserver.prototype;
  dart.addTypeTests(app_route_observer.AppRouteObserver);
  dart.setLibraryUri(app_route_observer.AppRouteObserver, "package:personal_website/ui/common/app_route_observer.dart");
  dart.defineLazy(app_route_observer.AppRouteObserver, {
    /*app_route_observer.AppRouteObserver._instance*/get _instance() {
      return new app_route_observer.AppRouteObserver._private();
    }
  });
  dart.trackLibraries("packages/personal_website/ui/common/app_route_observer", {
    "package:personal_website/ui/common/app_route_observer.dart": app_route_observer
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["app_route_observer.dart"],"names":[],"mappings":";;;;;;;;;;;AAGgC;IAAS;;;AAEvC;;EAA2B;;;;MAEG,6CAAS;YAAoB","file":"app_route_observer.ddc.js"}');
  // Exports:
  return {
    ui__common__app_route_observer: app_route_observer
  };
});

//# sourceMappingURL=app_route_observer.ddc.js.map

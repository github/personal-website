import 'package:flutter/material.dart';

class AppRouteObserver extends RouteObserver<PageRoute> {
  factory AppRouteObserver() => _instance;

  AppRouteObserver._private();

  static final AppRouteObserver _instance = AppRouteObserver._private();
}
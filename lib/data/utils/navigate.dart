import 'package:flutter/material.dart';

Future<T> navigate<T>(BuildContext context, Widget child,
        {bool fullScreen = false, bool rootNavigator = false}) =>
    Navigator.of(context, rootNavigator: rootNavigator)
        .push<T>(MaterialPageRoute(
      builder: (_) => child,
      fullscreenDialog: fullScreen,
    ));

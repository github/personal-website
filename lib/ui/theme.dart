import 'package:flutter/material.dart';

class AppTheme {
  AppTheme._();
  static ThemeData get light => ThemeData(
        cardTheme: CardTheme(
          elevation: 6,
          clipBehavior: Clip.hardEdge,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(20.0),
          ),
        ),
        // iconTheme: IconThemeData(color: Colors.white),
        brightness: Brightness.light,
        appBarTheme: ThemeData.light().appBarTheme.copyWith(elevation: 1.0),
        bottomAppBarTheme:
            BottomAppBarTheme(color: ThemeData.light().scaffoldBackgroundColor),
        tabBarTheme: TabBarTheme(
          labelColor: Colors.black,
        ),
        primaryColor: Colors.blueGrey,
        accentColor: Colors.red,
        pageTransitionsTheme: _getTransition(),
      );

  static PageTransitionsTheme _getTransition() {
    return PageTransitionsTheme(
      // makes all platforms that can run Flutter apps display routes without any animation
      builders:
          Map<TargetPlatform, InanimatePageTransitionsBuilder>.fromIterable(
              TargetPlatform.values.toList(),
              key: (dynamic k) => k,
              value: (dynamic _) => const InanimatePageTransitionsBuilder()),
    );
  }

  static ThemeData get dark => ThemeData.dark().copyWith(
        cardTheme: CardTheme(
          clipBehavior: Clip.hardEdge,
        ),
        pageTransitionsTheme: _getTransition(),
      );
}

/// This class is used to build page transitions that don't have any animation
class InanimatePageTransitionsBuilder extends PageTransitionsBuilder {
  const InanimatePageTransitionsBuilder();

  @override
  Widget buildTransitions<T>(
      PageRoute<T> route,
      BuildContext context,
      Animation<double> animation,
      Animation<double> secondaryAnimation,
      Widget child) {
    return child;
  }
}

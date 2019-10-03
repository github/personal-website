import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import 'apps/check.dart';
import 'apps/screen.dart';
import 'auth/screen.dart';
import 'blog/check.dart';
import 'blog/screen.dart';
import 'home/screen.dart';
import 'pages/index.dart';
import 'projects/screen.dart';

class Router {
  static String initialRoute = HomeScreen.routeName;
  static Route<dynamic> onUnknownRoute(
    BuildContext context, {
    @required RouteSettings settings,
  }) {
    final route = settings.name;
    if (route.contains('/blog')) {
      final id = route.replaceAll('/blog/', '');
      return MaterialPageRoute(
        builder: (_) => BlogCheck(route: id),
        settings: settings,
      );
    }
    if (route.contains('/apps')) {
      final id = route.replaceAll('/apps/', '');
      return MaterialPageRoute(
        builder: (_) => AppCheck(route: id),
        settings: settings,
      );
    }
    return MaterialPageRoute(
      builder: (_) => HomeScreen(),
      settings: settings,
    );
  }

  static Map<String, WidgetBuilder> get routes {
    return {
      LoginScreen.routeName: (_) => LoginScreen(),
      HomeScreen.routeName: (_) => HomeScreen(),
      AboutScreen.routeName: (_) => AboutScreen(),
      PrivacyPolicy.routeName: (_) => PrivacyPolicy(),
      AppsScreen.routeName: (_) => AppsScreen(),
      BlogScreen.routeName: (_) => BlogScreen(),
      ProjectsScreen.routeName: (_) => ProjectsScreen(),
    };
  }
}

class UnknownRouteScreen extends StatelessWidget {
  final String route;
  const UnknownRouteScreen({
    Key key,
    @required this.route,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(child: Text('No route defined for $route')),
    );
  }
}

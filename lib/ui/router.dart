import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../data/blocs/blocs.dart';
import 'apps/details.dart';
import 'apps/screen.dart';
import 'auth/screen.dart';
import 'blog/post.dart';
import 'blog/screen.dart';
import 'home/screen.dart';
import 'pages/index.dart';
import 'projects/screen.dart';

class Router {
  static String initialRoute = HomeScreen.routeName;
  static Route<dynamic> onUnknownRoute(RouteSettings settings) =>
      MaterialPageRoute(
        builder: (_) => HomeScreen(),
      );

  static Map<String, WidgetBuilder> routes({
    @required BlogState blog,
    @required AppsState apps,
  }) {
    return {
      LoginScreen.routeName: (_) => LoginScreen(),
      HomeScreen.routeName: (_) => HomeScreen(),
      AboutScreen.routeName: (_) => AboutScreen(),
      PrivacyPolicy.routeName: (_) => PrivacyPolicy(),
      AppsScreen.routeName: (_) => AppsScreen(),
      BlogScreen.routeName: (_) => BlogScreen(),
      ProjectsScreen.routeName: (_) => ProjectsScreen(),
      // EditPostScreen.routeName: (_) => EditPostScreen(),
      if (blog is PostsReady) ...{
        for (var post in blog.posts) ...{
          post.slug: (_) => PostDetails(slug: post.slug, post: post),
        },
      },
      if (apps is AppsReady) ...{
        for (var app in apps.apps) ...{
          app.routeName: (_) => AppDetails(appView: app),
        },
      },
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

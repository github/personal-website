import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../data/blocs/blocs.dart';
import '../data/classes/app.dart';
import '../data/classes/index.dart';
import 'apps/details.dart';
import 'apps/screen.dart';
import 'auth/screen.dart';
import 'blog/edit_post.dart';
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

  static Map<String, WidgetBuilder> routes(BlogState state) {
    return {
      LoginScreen.routeName: (_) => LoginScreen(),
      HomeScreen.routeName: (_) => HomeScreen(),
      AboutScreen.routeName: (_) => AboutScreen(),
      PrivacyPolicy.routeName: (_) => PrivacyPolicy(),
      AppsScreen.routeName: (_) => AppsScreen(),
      BlogScreen.routeName: (_) => BlogScreen(),
      ProjectsScreen.routeName: (_) => ProjectsScreen(),
      EditPostScreen.routeName: (_) => EditPostScreen(),
      if (state is PostsReady) ...{
        for (var post in state.posts) ...{
          "/blog/${post.documentId}": (_) => PostDetails(
              id: post.documentId,
              post: FbPost.fromJson(json.decode(json.encode(post.data)))),
        },
      },
      for (var app in allApps) ...{
        app.routeName: (_) => AppDetails(appView: app),
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

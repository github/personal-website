import 'package:flutter/material.dart';

import '../../generated/i18n.dart';
import '../common/index.dart';
import 'landing.dart';

class HomeScreen extends StatelessWidget {
  static const String routeName = '/';
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      // appBar: AppBar(
      //   title: Text(I18n.of(context).title),
      //   actions: <Widget>[
      //     // IconButton(
      //     //   icon: Icon(Icons.search),
      //     //   onPressed: () {},
      //     // ),
      //   ],
      // ),
      pageTitle: I18n.of(context).title,
      body: LandingScreen(),
    );
  }
}

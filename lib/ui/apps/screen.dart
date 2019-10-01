import 'package:flutter/material.dart';

import '../../generated/i18n.dart';
import '../common/apps_render.dart';
import '../common/index.dart';

class AppsScreen extends StatelessWidget {
  static const String routeName = "/apps";
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: I18n.of(context).appsTitle,
      body: SingleChildScrollView(
        child: Column(
          children: <Widget>[
            AppsRender(),
          ],
        ),
      ),
    );
  }
}

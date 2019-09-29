import 'package:flutter/material.dart';

import '../../generated/i18n.dart';
import '../common/index.dart';

class ProjectsScreen extends StatelessWidget {
  static const String routeName = '/projects';
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: I18n.of(context).projectsTitle,
      body: Container(),
    );
  }
}

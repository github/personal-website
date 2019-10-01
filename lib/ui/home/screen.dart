import 'package:flutter/material.dart';

import '../../generated/i18n.dart';
import '../common/index.dart';
import 'landing.dart';

class HomeScreen extends StatelessWidget {
  static const String routeName = '/';
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: I18n.of(context).title,
      body: LandingScreen(),
    );
  }
}

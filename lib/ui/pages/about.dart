import 'package:flutter/material.dart';

import '../../generated/i18n.dart';
import 'index.dart';

class AboutScreen extends StatelessWidget {
  static const String routeName = "/about";

  @override
  Widget build(BuildContext context) {
    return AssetPageRender(
      title: I18n.of(context).aboutTitle,
      path: 'assets/pages/about',
    );
  }
}

import 'package:flutter/material.dart';

import '../common/blog_previews.dart';
import '../common/index.dart';

class LandingScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        Container(
          padding: const EdgeInsets.only(top: 8.0),
          child: BlogPreviews(),
        ),
        Container(
          padding: const EdgeInsets.only(top: 8.0),
          child: AppsRender(),
        ),
      ],
    );
  }
}

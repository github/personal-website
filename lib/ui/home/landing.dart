import 'package:flutter/material.dart';
import 'package:parallax_image/parallax_image.dart';
import 'package:personal_website/r.dart';

import '../common/blog_previews.dart';
import '../common/index.dart';

class LandingScreen extends StatefulWidget {
  @override
  _LandingScreenState createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  final _controller = ScrollController();

  @override
  Widget build(BuildContext context) {
    return ListView(
      controller: _controller,
      children: <Widget>[
        Container(
          child: ParallaxImage(
            image: AssetImage(R.assetsImagesWelcome),
            // Extent of this widget in scroll direction.
            // In this case it is vertical scroll so extent defines
            // the height of this widget.
            // The image is scaled with BoxFit.fitWidth which makes it
            // occupy full width of this widget.
            // After image is scaled it should normally have height greater
            // than this value to allow for parallax effect to be
            // visible.
            extent: 400.0,
            // Optionally specify child widget.
            child: Center(
              child: Text(
                'Never Stop Learning'.toUpperCase(),
                style: TextStyle(
                  fontSize: 60,
                  fontWeight: FontWeight.w700,
                ),
              ),
            ),
            // Optinally specify scroll controller.
            controller: _controller,
          ),
        ),
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

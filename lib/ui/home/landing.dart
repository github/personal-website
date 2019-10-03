import 'package:flutter/material.dart';

import '../../r.dart';
import '../common/blog_previews.dart';
import '../common/index.dart';

class LandingScreen extends StatefulWidget {
  @override
  _LandingScreenState createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, dimens) => ListView(
        children: <Widget>[
          Container(
            child: Stack(
              children: <Widget>[
                Image.asset(
                  R.assetsImagesWelcome,
                ),
                Positioned.fill(
                  child: Center(
                    child: Text(
                      'Never Stop Learning'.toUpperCase(),
                      style: TextStyle(
                        fontSize: 60,
                        fontWeight: FontWeight.w700,
                        color: Colors.white,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            padding: const EdgeInsets.only(top: 8.0),
            child: BlogPreviews(),
          ),
          BlocSectionColor(
            color: Colors.blue,
            child: Container(
              child: Column(
                mainAxisAlignment: MainAxisAlignment.start,
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: <Widget>[
                  Text(
                    "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",
                    style: TextStyle(
                      fontSize: 30.0,
                      fontWeight: FontWeight.w600,
                      color: Colors.white,
                    ),
                  ),
                  Container(height: 30.0),
                  Text(
                    '- Steve Jobs',
                    style: Theme.of(context)
                        .textTheme
                        .subtitle
                        .copyWith(color: Colors.white),
                  ),
                ],
              ),
            ),
          ),
          Container(
            margin: EdgeInsets.all(40.0),
            child: Center(
              child: Container(
                height: 450,
                width: dimens.maxWidth * 0.6,
                child: FrameRender(
                  direction: Axis.horizontal,
                  child: Container(
                    color: Colors.grey[300],
                    child: AppsRender(
                      shrinkWrap: false,
                      scrollDirection: Axis.vertical,
                      appLauncher: true,
                    ),
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class BlocSectionColor extends StatelessWidget {
  const BlocSectionColor({
    Key key,
    @required this.child,
    this.color,
  }) : super(key: key);
  final Widget child;
  final Color color;

  @override
  Widget build(BuildContext context) {
    return Container(
      color: color ?? Theme.of(context).accentColor,
      padding: EdgeInsets.symmetric(vertical: 40.0, horizontal: 50.0),
      child: Center(
        child: child,
      ),
    );
  }
}

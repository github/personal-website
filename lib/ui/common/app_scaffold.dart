import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:personal_website/plugins/url_launcher/url_launcher.dart';

import '../../data/utils/constants.dart';
import '../../generated/i18n.dart';
import '../apps/screen.dart';
import '../auth/admin_check.dart';
import '../blog/screen.dart';
import '../home/screen.dart';
import '../pages/about.dart';
import 'app_drawer.dart';
import 'index.dart';

class AppScaffold extends StatelessWidget {
  const AppScaffold({@required this.body, @required this.pageTitle, Key key})
      : super(key: key);

  final Widget body;

  final String pageTitle;

  @override
  Widget build(BuildContext context) {
    final bool displayMobileLayout =
        MediaQuery.of(context).size.width < kBreakpoint;
    final double _iconSize = 18.0;
    final _actions = [
      InkWell(
        child: Icon(
          FontAwesomeIcons.facebookF,
          size: _iconSize,
        ),
        onTap: () => UrlUtils.open('https://www.facebook.com/RodyDavis',
            name: 'Rody Davis'),
      ),
      Container(width: 12.0),
      InkWell(
        child: Icon(
          FontAwesomeIcons.twitter,
          size: _iconSize,
        ),
        onTap: () => UrlUtils.open('https://twitter.com/rodydavis',
            name: 'Rody Davis'),
      ),
      Container(width: 12.0),
      InkWell(
        child: Icon(
          FontAwesomeIcons.youtube,
          size: _iconSize,
        ),
        onTap: () => UrlUtils.open('hhttps://www.youtube.com/rodydavis',
            name: 'Rody Davis'),
      ),
      Container(width: 12.0),
      InkWell(
        child: Icon(
          FontAwesomeIcons.instagram,
          size: _iconSize,
        ),
        onTap: () => UrlUtils.open('https://www.instagram.com/rodydavisjr/',
            name: 'Rody Davis'),
      ),
      Container(width: 12.0),
      InkWell(
        child: Icon(
          FontAwesomeIcons.github,
          size: _iconSize,
        ),
        onTap: () => UrlUtils.open('https://github.com/AppleEducate',
            name: 'Rody Davis'),
      ),
      Container(width: 12.0),
    ];
    return Row(
      children: [
        Expanded(
          child: Scaffold(
            appBar: displayMobileLayout
                ? AppBar(
                    automaticallyImplyLeading: displayMobileLayout,
                    title: Text(pageTitle),
                    actions: _actions,
                  )
                : PreferredSize(
                    preferredSize: Size.fromHeight(80.0),
                    child: Container(
                      child: SafeArea(
                        child: AdminCheck(
                          builder: (context, admin) => Row(
                            crossAxisAlignment: CrossAxisAlignment.center,
                            mainAxisAlignment: MainAxisAlignment.center,
                            children: <Widget>[
                              AppLogo(
                                onTap: () => Navigator.pushNamed(
                                    context, HomeScreen.routeName),
                              ),
                              Spacer(),
                              Container(
                                margin: EdgeInsets.symmetric(horizontal: 8.0),
                                child: Row(
                                  children: <Widget>[
                                    MenuButtonText(
                                      child: Text(I18n.of(context).homeTitle),
                                      onPressed: () => Navigator.pushNamed(
                                          context, HomeScreen.routeName),
                                    ),
                                    MenuButtonText(
                                      child: Text(I18n.of(context).appsTitle),
                                      onPressed: () => Navigator.pushNamed(
                                          context, AppsScreen.routeName),
                                    ),
                                    MenuButtonText(
                                      child: Text(I18n.of(context).blogTitle),
                                      onPressed: () => Navigator.pushNamed(
                                          context, BlogScreen.routeName),
                                    ),
                                    MenuButtonText(
                                      child: Text(I18n.of(context).aboutTitle),
                                      onPressed: () => Navigator.pushNamed(
                                          context, AboutScreen.routeName),
                                    ),
                                    MenuButtonText(
                                      child:
                                          Text(I18n.of(context).settingsTitle),
                                      onPressed: () {
                                        showDialog(
                                          context: context,
                                          builder: (_) => AlertDialog(
                                            title: Text(
                                                I18n.of(context).settingsTitle),
                                            content: SettingsView(),
                                            actions: <Widget>[
                                              FlatButton(
                                                child:
                                                    Text(I18n.of(context).ok),
                                                onPressed: () =>
                                                    Navigator.maybePop(context),
                                              )
                                            ],
                                          ),
                                        );
                                      },
                                    ),
                                  ],
                                ),
                              ),
                              Container(
                                padding: EdgeInsets.only(left: 8.0),
                                child: Row(
                                  children: _actions,
                                ),
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ),
            drawer: displayMobileLayout
                ? const AppDrawer(permanentlyDisplay: false)
                : null,
            body: body,
          ),
        )
      ],
    );
  }
}

class MenuButtonText extends StatelessWidget {
  final Text child;
  final VoidCallback onPressed;

  const MenuButtonText({
    Key key,
    this.onPressed,
    this.child,
  }) : super(key: key);
  @override
  Widget build(BuildContext context) {
    return InkWell(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 8.0),
        child: child,
      ),
      onTap: onPressed,
    );
  }
}

class AppLogo extends StatelessWidget {
  const AppLogo({
    Key key,
    this.onTap,
  }) : super(key: key);
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      child: Container(
        margin: EdgeInsets.only(left: 12.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: <Widget>[
            Text(
              I18n.of(context).title,
              style: Theme.of(context).textTheme.title,
            ),
            Text(
              I18n.of(context).tag_line,
              style: Theme.of(context).textTheme.subtitle,
            ),
          ],
        ),
      ),
    );
  }
}

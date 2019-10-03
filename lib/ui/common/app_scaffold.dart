import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:personal_website/ui/auth/admin_check.dart';

import '../../data/blocs/blocs.dart';
import '../../data/utils/constants.dart';
import '../../generated/i18n.dart';
import '../apps/screen.dart';
import '../auth/screen.dart';
import '../blog/edit_post.dart';
import '../blog/screen.dart';
import '../home/screen.dart';
import '../pages/about.dart';
import '../projects/screen.dart';
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

    return Row(
      children: [
        Expanded(
          child: Scaffold(
            appBar: displayMobileLayout
                ? AppBar(
                    automaticallyImplyLeading: displayMobileLayout,
                    title: Text(pageTitle),
                  )
                : PreferredSize(
                    preferredSize: Size.fromHeight(80.0),
                    child: Container(
                      color: Colors.black,
                      child: Theme(
                        data: ThemeData.dark(),
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
                                        child:
                                            Text(I18n.of(context).aboutTitle),
                                        onPressed: () => Navigator.pushNamed(
                                            context, AboutScreen.routeName),
                                      ),
                                      MenuButtonText(
                                        child: Text(
                                            I18n.of(context).settingsTitle),
                                        onPressed: () {
                                          showDialog(
                                            context: context,
                                            builder: (_) => AlertDialog(
                                              title: Text(I18n.of(context)
                                                  .settingsTitle),
                                              content: SettingsView(),
                                              actions: <Widget>[
                                                FlatButton(
                                                  child:
                                                      Text(I18n.of(context).ok),
                                                  onPressed: () =>
                                                      Navigator.maybePop(
                                                          context),
                                                )
                                              ],
                                            ),
                                          );
                                        },
                                      ),
                                    ],
                                  ),
                                ),
                              ],
                            ),
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

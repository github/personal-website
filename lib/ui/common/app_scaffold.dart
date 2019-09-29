import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:personal_website/data/blocs/blocs.dart';

import '../../data/utils/constants.dart';
import '../../generated/i18n.dart';
import '../apps/screen.dart';
import '../blog/edit_post.dart';
import '../blog/screen.dart';
import '../home/screen.dart';
import '../pages/about.dart';
import '../projects/screen.dart';
import 'app_drawer.dart';
import 'index.dart';

/// A responsive scaffold for our application.
/// Displays the navigation drawer alongside the [Scaffold] if the screen/window size is large enough
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
        // if (!displayMobileLayout) const AppDrawer(permanentlyDisplay: true),
        Expanded(
          child: Scaffold(
            appBar: displayMobileLayout
                ? AppBar(
                    // when the app isn't displaying the mobile version of app, hide the menu button that is used to open the navigation drawer
                    automaticallyImplyLeading: displayMobileLayout,
                    title: Text(pageTitle),
                  )
                : PreferredSize(
                    preferredSize: Size.fromHeight(80.0),
                    child: Container(
                      color: Theme.of(context).primaryColor,
                      child: Theme(
                        data: ThemeData.dark(),
                        child: Row(
                          children: <Widget>[
                            Expanded(
                              child: Row(
                                children: <Widget>[
                                  FlatButton(
                                    child: Icon(Icons.home),
                                    onPressed: () => Navigator.pushNamed(
                                        context, HomeScreen.routeName),
                                  ),
                                  FlatButton(
                                    child: Text(I18n.of(context).appsTitle),
                                    onPressed: () => Navigator.pushNamed(
                                        context, AppsScreen.routeName),
                                  ),
                                  FlatButton(
                                    child: Text(I18n.of(context).projectsTitle),
                                    onPressed: () => Navigator.pushNamed(
                                        context, ProjectsScreen.routeName),
                                  ),
                                  FlatButton(
                                    child: Text(I18n.of(context).aboutTitle),
                                    onPressed: () => Navigator.pushNamed(
                                        context, AboutScreen.routeName),
                                  ),
                                  FlatButton(
                                    child: Text(I18n.of(context).blogTitle),
                                    onPressed: () => Navigator.pushNamed(
                                        context, BlogScreen.routeName),
                                  ),
                                  IconButton(
                                    icon: Icon(Icons.add),
                                    onPressed: () => Navigator.pushNamed(
                                        context, EditPostScreen.routeName),
                                  ),
                                ],
                              ),
                            ),
                            Container(
                              child: BlocBuilder<SettingsBloc, SettingsState>(
                                builder: (context, state) {
                                  if (state is SettingsReady) {
                                    return IconButton(
                                      tooltip:
                                          I18n.of(context).settingsDarkMode,
                                      icon: state.settings.darkMode
                                          ? Icon(Icons.brightness_high)
                                          : Icon(Icons.brightness_low),
                                      onPressed: () =>
                                          BlocProvider.of<SettingsBloc>(context)
                                              .dispatch(ChangeSettings(state
                                                  .settings
                                                ..darkMode =
                                                    !state.settings.darkMode)),
                                    );
                                  }
                                  return Container();
                                },
                              ),
                            ),
                          ],
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

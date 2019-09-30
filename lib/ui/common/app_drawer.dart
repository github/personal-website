import 'package:flutter/material.dart';
import 'package:personal_website/ui/auth/admin_check.dart';

import '../../data/utils/constants.dart';
import '../../generated/i18n.dart';
import '../apps/screen.dart';
import '../blog/edit_post.dart';
import '../blog/screen.dart';
import '../home/screen.dart';
import '../pages/about.dart';
import '../projects/screen.dart';
import 'index.dart';

/// The navigation drawer for the app.
/// This listens to changes in the route to update which page is currently been shown
class AppDrawer extends StatefulWidget {
  const AppDrawer({@required this.permanentlyDisplay, Key key})
      : super(key: key);

  final bool permanentlyDisplay;

  @override
  _AppDrawerState createState() => _AppDrawerState();
}

class _AppDrawerState extends State<AppDrawer> with RouteAware {
  String _selectedRoute;
  AppRouteObserver _routeObserver;
  @override
  void initState() {
    super.initState();
    _routeObserver = AppRouteObserver();
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _routeObserver.subscribe(this, ModalRoute.of(context));
  }

  @override
  void dispose() {
    _routeObserver.unsubscribe(this);
    super.dispose();
  }

  @override
  void didPush() {
    _updateSelectedRoute();
  }

  @override
  void didPop() {
    _updateSelectedRoute();
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: widget.permanentlyDisplay ? kDrawerWidth : null,
      child: Drawer(
        child: SafeArea(
          child: Row(
            children: [
              Expanded(
                child: AdminCheck(
                  builder: (context, admin) => ListView(
                    padding: EdgeInsets.zero,
                    children: [
                      // const UserAccountsDrawerHeader(
                      //   accountName: Text('User'),
                      //   accountEmail: Text('user@email.com'),
                      //   currentAccountPicture: CircleAvatar(
                      //     child: Icon(Icons.android),
                      //   ),
                      // ),
                      // ListTile(
                      //   leading: const Icon(Icons.home),
                      //   title: const Text(PageTitles.home),
                      //   onTap: () async {
                      //     await _navigateTo(context, RouteNames.home);
                      //   },
                      //   selected: _selectedRoute == RouteNames.home,
                      // ),
                      ListTile(
                        leading: Icon(Icons.home),
                        title: Text(I18n.of(context).homeTitle),
                        onTap: () => _navigateTo(context, HomeScreen.routeName),
                        selected: _selectedRoute == HomeScreen.routeName,
                      ),
                      ListTile(
                        leading: Icon(Icons.import_contacts),
                        title: Text(I18n.of(context).blogTitle),
                        onTap: () => _navigateTo(context, BlogScreen.routeName),
                        trailing: admin
                            ? IconButton(
                                icon: Icon(Icons.add),
                                onPressed: () => _navigateTo(
                                    context, EditPostScreen.routeName),
                              )
                            : null,
                        selected: _selectedRoute == BlogScreen.routeName,
                      ),
                      ListTile(
                        leading: Icon(Icons.apps),
                        title: Text(I18n.of(context).appsTitle),
                        onTap: () => _navigateTo(context, AppsScreen.routeName),
                        selected: _selectedRoute == AppsScreen.routeName,
                      ),
                      ListTile(
                        leading: Icon(Icons.folder),
                        title: Text(I18n.of(context).projectsTitle),
                        onTap: () =>
                            _navigateTo(context, ProjectsScreen.routeName),
                        selected: _selectedRoute == ProjectsScreen.routeName,
                      ),
                      ListTile(
                        leading: Icon(Icons.person),
                        title: Text(I18n.of(context).aboutTitle),
                        onTap: () =>
                            _navigateTo(context, AboutScreen.routeName),
                        selected: _selectedRoute == AboutScreen.routeName,
                      ),
                      ListTile(
                        leading: Icon(Icons.settings),
                        title: Text(I18n.of(context).settingsTitle),
                        onTap: () {
                          showDialog(
                            context: context,
                            builder: (_) => AlertDialog(
                              title: Text(I18n.of(context).settingsTitle),
                              content: SettingsView(),
                              actions: <Widget>[
                                FlatButton(
                                  child: Text(I18n.of(context).ok),
                                  onPressed: () => Navigator.maybePop(context),
                                )
                              ],
                            ),
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ),
              if (widget.permanentlyDisplay)
                const VerticalDivider(
                  width: 1,
                )
            ],
          ),
        ),
      ),
    );
  }

  /// Closes the drawer if applicable (which is only when it's not been displayed permanently) and navigates to the specified route
  /// In a mobile layout, the a modal drawer is used so we need to explicitly close it when the user selects a page to display
  Future<void> _navigateTo(BuildContext context, String routeName) async {
    if (widget.permanentlyDisplay) {
      Navigator.pop(context);
    }
    await Navigator.pushNamed(context, routeName);
  }

  void _updateSelectedRoute() {
    setState(() {
      _selectedRoute = ModalRoute.of(context).settings.name;
    });
  }
}

// class AppDrawer extends StatelessWidget {
//   const AppDrawer({
//     Key key,
//     @required this.permanentlyDisplay,
//   }) : super(key: key);

//   final bool permanentlyDisplay;

//   @override
//   Widget build(BuildContext context) {
//     final nav = Navigator.of(context);
//     return Drawer(
//       child: SafeArea(
//         child: Column(
//           children: <Widget>[
//             Expanded(
//                 child: Column(
//               children: <Widget>[
//                 ListTile(
//                   leading: Icon(Icons.import_contacts),
//                   title: Text(I18n.of(context).blogTitle),
//                   onTap: () => _navigateTo(context, BlogScreen.routeName),
//                 ),
//                 ListTile(
//                   leading: Icon(Icons.apps),
//                   title: Text(I18n.of(context).appsTitle),
//                   onTap: () => _navigateTo(context, AppsScreen.routeName),
//                 ),
//                 ListTile(
//                   leading: Icon(Icons.folder),
//                   title: Text(I18n.of(context).projectsTitle),
//                   onTap: () => _navigateTo(context, ProjectsScreen.routeName),
//                 ),
//                 ListTile(
//                   leading: Icon(Icons.person),
//                   title: Text(I18n.of(context).aboutTitle),
//                   onTap: () => _navigateTo(context, AboutScreen.routeName),
//                 ),
//               ],
//             )),
//             ListTile(
//               leading: Icon(Icons.settings),
//               title: Text(I18n.of(context).settingsTitle),
//               onTap: () {
//                 showDialog(
//                   context: context,
//                   builder: (_) => AlertDialog(
//                     title: Text(I18n.of(context).settingsTitle),
//                     content: SettingsView(),
//                     actions: <Widget>[
//                       FlatButton(
//                         child: Text(I18n.of(context).ok),
//                         onPressed: () => Navigator.maybePop(context),
//                       )
//                     ],
//                   ),
//                 );
//               },
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }

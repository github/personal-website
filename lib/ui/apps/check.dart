import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';
import 'details.dart';

class AppCheck extends StatelessWidget {
  final String route;

  const AppCheck({Key key, @required this.route}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AppsBloc, AppsState>(
      builder: (context, state) {
        if (state is AppsReady) {
          final app =
              state.apps.firstWhere((p) => p.slug == route, orElse: () => null);
          if (app != null) {
            return AppDetails(appView: app);
          } else {
            return Scaffold(
              appBar: AppBar(),
              body: Center(
                child: Text('App Not Found'),
              ),
            );
          }
        }
        return Scaffold(
          appBar: AppBar(),
          body: Center(
            child: CircularProgressIndicator(),
          ),
        );
      },
    );
  }
}

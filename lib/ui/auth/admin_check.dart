import 'package:fb_auth/data/blocs/blocs.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

class AdminCheck extends StatelessWidget {
  final Widget Function(BuildContext, bool) builder;

  const AdminCheck({Key key, @required this.builder}) : super(key: key);
  @override
  Widget build(BuildContext context) {
    final _emails = ['rody.davis.jr@gmail.com'];
    return BlocBuilder<AuthBloc, AuthState>(
      builder: (context, authState) {
        if (authState is LoggedInState &&
            !authState.user.isAnonymous &&
            _emails.contains(authState.user.email)) {
          return builder(context, true);
        }
        return builder(context, false);
      },
    );
  }
}

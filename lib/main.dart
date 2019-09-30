import 'package:fb_auth/fb_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_localizations/flutter_localizations.dart';

import 'data/blocs/blocs.dart';
import 'generated/i18n.dart';
import 'ui/common/index.dart';
import 'ui/home/screen.dart';
import 'ui/router.dart';
import 'ui/theme.dart';

final i18n = I18n.delegate;

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  final _observer = AppRouteObserver();
  final _settingsBloc = SettingsBloc();

  final _auth = AuthBloc();
  @override
  void initState() {
    _auth.dispatch(CheckUser());
    _settingsBloc.dispatch(CheckSettings());
    super.initState();
  }

  @override
  void dispose() {
    _auth.dispose();
    _settingsBloc.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return MultiBlocProvider(
      providers: [
        BlocProvider<AuthBloc>(builder: (_) => _auth),
        BlocProvider<SettingsBloc>(builder: (_) => _settingsBloc),
        BlocProvider<BlogBloc>(builder: (_) => BlogBloc()),
      ],
      child: BlocListener<SettingsBloc, SettingsState>(
        listener: (context, state) {
          if (state is SettingsReady) {
            I18n.locale = state.settings.locale;
          }
        },
        child: BlocListener<AuthBloc, AuthState>(
          listener: (context, state) {
            if (state is LoggedInState) {
              BlocProvider.of<BlogBloc>(context).dispatch(LoadPosts());
            }
            if (state is LoggedOutState) {
              BlocProvider.of<AuthBloc>(context).dispatch(LoginGuest());
            }
          },
          child: BlocBuilder<SettingsBloc, SettingsState>(
            builder: (context, settingState) =>
                BlocBuilder<BlogBloc, BlogState>(
              builder: (context, blocState) => MaterialApp(
                debugShowCheckedModeBanner: false,
                theme: settingState is SettingsReady &&
                        settingState.settings.darkMode
                    ? AppTheme.dark
                    : AppTheme.light,
                darkTheme: settingState is SettingsReady &&
                        settingState.settings.useSystemSetting
                    ? AppTheme.dark
                    : null,
                navigatorObservers: [_observer],
                onGenerateTitle: (context) => I18n.of(context).title,
                locale: settingState is SettingsReady
                    ? settingState.settings.locale
                    : Locale("en", "US"),
                localizationsDelegates: [
                  i18n,
                  GlobalMaterialLocalizations.delegate,
                  GlobalWidgetsLocalizations.delegate,
                ],
                supportedLocales: i18n.supportedLocales,
                localeResolutionCallback: i18n.resolution(
                  fallback: settingState is SettingsReady
                      ? settingState.settings.locale
                      : Locale("en", "US"),
                ),
                onUnknownRoute: Router.onUnknownRoute,
                initialRoute: Router.initialRoute,
                routes: Router.routes(blocState),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

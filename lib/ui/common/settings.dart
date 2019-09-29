import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';
import '../../generated/i18n.dart';

class SettingsView extends StatelessWidget {
  const SettingsView({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[
          BlocBuilder<SettingsBloc, SettingsState>(
            builder: (context, state) {
              if (state is SettingsReady) {
                return SwitchListTile.adaptive(
                  title: Text(I18n.of(context).settingsDarkMode),
                  value: state.settings.darkMode,
                  onChanged: (val) => BlocProvider.of<SettingsBloc>(context)
                      .dispatch(ChangeSettings(state.settings..darkMode = val)),
                );
              }
              return Container();
            },
          ),
          BlocBuilder<SettingsBloc, SettingsState>(
            builder: (context, state) {
              if (state is SettingsReady) {
                return SwitchListTile.adaptive(
                  title: Text(I18n.of(context).settingsUseSystem),
                  value: state.settings.useSystemSetting,
                  onChanged: (val) => BlocProvider.of<SettingsBloc>(context)
                      .dispatch(ChangeSettings(
                          state.settings..useSystemSetting = val)),
                );
              }
              return Container();
            },
          ),
        ],
      ),
    );
  }
}

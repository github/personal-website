import 'package:meta/meta.dart';

import 'settings.dart';

@immutable
abstract class SettingsState {}

class InitialSettingsState extends SettingsState {}

class SettingsReady extends SettingsState {
  SettingsReady(this.settings);

  final Settings settings;
}

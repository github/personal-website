import 'package:meta/meta.dart';

import 'settings.dart';

@immutable
abstract class SettingsEvent {}

class ChangeSettings extends SettingsEvent {
  ChangeSettings(this.settings);

  final Settings settings;
}

class CheckSettings extends SettingsEvent {}

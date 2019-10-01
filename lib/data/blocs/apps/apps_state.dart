import 'package:meta/meta.dart';

import '../../classes/app.dart';

@immutable
abstract class AppsState {}

class InitialAppsState extends AppsState {}

class AppsReady extends AppsState {
  AppsReady(this.apps);

  final List<AppView> apps;
}

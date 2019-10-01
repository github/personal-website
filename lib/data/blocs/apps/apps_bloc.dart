import 'dart:async';

import 'package:bloc/bloc.dart';
import 'package:flutter/material.dart';

import './bloc.dart';
import '../../classes/app.dart';

class AppsBloc extends Bloc<AppsEvent, AppsState> {
  @override
  AppsState get initialState => AppsReady([
        _thePitchPipe(),
        _thePocketPiano(),
      ]);

  @override
  Stream<AppsState> mapEventToState(
    AppsEvent event,
  ) async* {
    if (event is CheckApps) {
      yield* _mapCheckToState(event);
    }
  }

  Stream<AppsState> _mapCheckToState(CheckApps event) async* {
    List<AppView> _apps = [];
    _apps.add(_thePitchPipe());
    _apps.add(_thePocketPiano());
    yield AppsReady([
      _thePitchPipe(),
      _thePocketPiano(),
    ]);
  }
}

AppView _thePocketPiano() {
  return AppView(
    landscape: true,
    title: 'The Pocket Piano',
    appIcon: 'assets/images/apps/the_pocket_piano/icon.png',
    appStoreLink:
        'https://itunes.apple.com/hk/app/the-pocket-piano/id1453992672?mt=8&uo=4',
    googlePlayLink:
        'https://play.google.com/store/apps/details?id=com.appleeducate.flutter_piano',
    screenshots: [
      'assets/images/apps/the_pocket_piano/1.png',
      'assets/images/apps/the_pocket_piano/2.png',
      'assets/images/apps/the_pocket_piano/3.png',
    ],
    websiteLink: 'https://pocketpiano.app',
    meta: [
      AppMeta(
        Icons.offline_bolt,
        'Offline First',
        'No Internet Needed',
      ),
      AppMeta(
        Icons.music_note,
        'High Quality',
        'Best In Class Sound',
      ),
      AppMeta(
        Icons.settings,
        'App Settings',
        'Take Full Control',
      ),
      AppMeta(
        Icons.lightbulb_outline,
        'Dark Mode',
        'Everything is Better in the Dark',
      ),
    ],
  );
}

AppView _thePitchPipe() {
  return AppView(
    title: 'The Pitch Pipe',
    appIcon: 'assets/images/apps/the_pitch_pipe/icon.png',
    appStoreLink: 'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
    googlePlayLink:
        'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
    screenshots: [
      'assets/images/apps/the_pitch_pipe/1.png',
      'assets/images/apps/the_pitch_pipe/2.png',
      'assets/images/apps/the_pitch_pipe/3.png',
      'assets/images/apps/the_pitch_pipe/4.png',
      'assets/images/apps/the_pitch_pipe/5.png',
    ],
    websiteLink: 'https://pitchpipe.app',
    meta: [
      AppMeta(
        Icons.offline_bolt,
        'Offline First',
        'No Internet Needed',
      ),
      AppMeta(
        Icons.music_note,
        'High Quality',
        'Best In Class Sound',
      ),
      AppMeta(
        Icons.list,
        'Song Lists',
        'Create and Manage Song Lists',
      ),
      AppMeta(
        Icons.search,
        'Note Search',
        'Sheet Music Made Easy',
      ),
      AppMeta(
        Icons.settings,
        'App Settings',
        'Take Full Control',
      ),
      AppMeta(
        Icons.lightbulb_outline,
        'Dark Mode',
        'Everything is Better in the Dark',
      ),
    ],
  );
}

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class AppView {
  final String title;
  final String googlePlayLink, appStoreLink, websiteLink;
  final String appIcon;
  final List<String> screenshots;
  final List<AppMeta> meta;

  AppView({
    @required this.title,
    @required this.appIcon,
    this.googlePlayLink,
    this.appStoreLink,
    this.websiteLink,
    this.screenshots,
    this.meta,
  });

  String get routeName => '/apps/' + title.toLowerCase().replaceAll(" ", "_");
}

class AppMeta {
  final IconData iconData;
  final String title;
  final String description;

  AppMeta(this.iconData, this.title, this.description);
}

List<AppView> get allApps => [
      _thePitchPipe(),
    ];

AppView _thePocketPiano() {
  return AppView(
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

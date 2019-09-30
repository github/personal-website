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
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
      AppView(
        title: 'The Pitch Pipe',
        appIcon:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2Ficon.png?alt=media&token=be707ddd-14dc-4dba-a490-51bfd67f8428',
        appStoreLink:
            'https://apps.apple.com/us/app/the-pitch-pipe/id1244972865',
        googlePlayLink:
            'https://play.google.com/store/apps/details?id=com.appleeducate.thepitchpipe&hl=en_US',
        screenshots: [
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F1.png?alt=media&token=28bf3b3e-6468-4b29-b8dd-9e15b4008def',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F2.png?alt=media&token=d2b0f912-8259-44d6-9568-832a1afad22a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F3.png?alt=media&token=5de8ff2d-4e2a-41f3-ac26-289514c34869',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F4.png?alt=media&token=995f7a44-0607-4f0e-b59d-54da16628480',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F5.png?alt=media&token=aa97655b-9eb3-4044-ac32-e3693122393a',
          'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/apps%2F6.png?alt=media&token=c17aaf72-2a1f-4d13-914e-d3601722b4a9',
        ],
        websiteLink: 'https://pitchpipe.app',
        meta: [
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
          AppMeta(Icons.offline_bolt, 'Offline First', 'No Internet Needed'),
        ],
      ),
    ];

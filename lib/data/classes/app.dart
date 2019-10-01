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

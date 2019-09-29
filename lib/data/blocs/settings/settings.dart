import 'package:flutter/material.dart';

class Settings {
  Settings({
    this.darkMode = false,
    this.useSystemSetting = true,
    this.locale = const Locale("en", "US"),
  });

  bool darkMode, useSystemSetting;
  Locale locale;
}

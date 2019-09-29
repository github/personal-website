import 'package:url_launcher/url_launcher.dart';

class UrlUtils {
  UrlUtils._();

  static void open(String url, {String name}) async {
    if (await canLaunch(url)) {
      await launch(url);
    }
  }
}

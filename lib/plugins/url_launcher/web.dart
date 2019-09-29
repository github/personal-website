import 'package:universal_html/prefer_universal/html.dart' as html;

class UrlUtils {
  UrlUtils._();

  static void open(String url, {String name}) {
    html.window.open(url, name);
  }
}

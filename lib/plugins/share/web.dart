import 'package:universal_html/prefer_universal/html.dart' as html;

class ShareUtils {
  ShareUtils._();

  static void share({String title, String url, String text}) {
    html.window.navigator.share({
      title: title,
      if (text != null) text: text,
      if (url != null) url: url,
    });
  }
}

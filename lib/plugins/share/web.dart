import 'package:universal_html/prefer_universal/html.dart' as html;

class ShareUtils {
  ShareUtils._();

  static void share({String title, String url, String text}) {
    final _data = <String, dynamic>{
      'title': title,
    };
    if (text != null) {
      _data['text'] = text;
    }
    if (url != null) {
      _data['url'] = url;
    }
    if (html.window.navigator.share != null) {
      html.window.navigator.share(_data);
    }
  }
}

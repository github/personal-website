import 'package:share/share.dart';

class ShareUtils {
  ShareUtils._();

  static void share({String title, String url, String text}) {
    Share.share(url ?? text, subject: title);
  }
}

import 'package:clippy/browser.dart' as clippy;

class ClipboardUtils {
  ClipboardUtils._();

  static void copy(String value) async {
    await clippy.write(value);
  }
}

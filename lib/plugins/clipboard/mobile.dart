import 'package:clipboard_manager/clipboard_manager.dart';

class ClipboardUtils {
  ClipboardUtils._();

  static void copy(String value) async {
    await ClipboardManager.copyToClipBoard(value);
  }
}

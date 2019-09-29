import 'package:fb_auth/fb_auth.dart';
import 'package:flutter/material.dart';

import '../../data/classes/index.dart';

class UploadButton extends StatefulWidget {
  const UploadButton({
    Key key,
    this.uploadingLabel = const Text('Uploading..'),
    this.uploadButtonLabel = const Text('Upload Media'),
    this.uploadButtonIcon = const Icon(Icons.perm_media),
    @required this.onChanged,
    @required this.user,
  }) : super(key: key);

  final Widget uploadButtonIcon;
  final Widget uploadButtonLabel;
  final Widget uploadingLabel;
  final ValueChanged<MediaSearch> onChanged;
  final AuthUser user;

  @override
  _UploadButtonState createState() => _UploadButtonState();
}

class _UploadButtonState extends State<UploadButton> {
  bool _uploading = false;

  @override
  Widget build(BuildContext context) {
    if (_uploading) {
      return ListTile(
        title: widget.uploadingLabel,
        trailing: CircularProgressIndicator(),
      );
    }
    return ListTile(
      title: RaisedButton.icon(
        icon: widget.uploadButtonIcon,
        label: widget.uploadButtonLabel,
        onPressed: () {},
      ),
    );
  }
}

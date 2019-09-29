import 'package:fb_auth/fb_auth.dart';
import 'package:flutter/material.dart';
import 'package:universal_html/prefer_universal/html.dart' as html;

import 'package:firebase/firebase.dart' as fb;

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
  html.FileUploadInputElement _images, _files, _videos, _audios;
  bool _uploading = false;
  List<MediaSearch> myImageUploads = [];
  @override
  void initState() {
    _images = html.FileUploadInputElement();
    _images.accept = "image/*";
    _images.onChange.listen((e) {
      html.File file = (e.target as dynamic).files[0];
      if (file != null) _uploadFile(file);
    });
    _videos = html.FileUploadInputElement();
    _videos.accept = "video/*";
    _videos.onChange.listen((e) {
      html.File file = (e.target as dynamic).files[0];
      if (file != null) _uploadFile(file);
    });
    _audios = html.FileUploadInputElement();
    _audios.accept = "audio/*";
    _audios.onChange.listen((e) {
      html.File file = (e.target as dynamic).files[0];
      if (file != null) _uploadFile(file);
    });
    _files = html.FileUploadInputElement();
    _files.accept = "*";
    _files.onChange.listen((e) {
      html.File file = (e.target as dynamic).files[0];
      if (file != null) _uploadFile(file);
    });
    super.initState();
  }

  Future _uploadFile(html.File file) async {
    if (mounted) {
      setState(() {
        _uploading = true;
      });
    }
    final fb.StorageReference ref =
        fb.storage().ref("images/${fb.app().auth().currentUser.uid}");
    var customMetadata = {"owner": fb.app().auth().currentUser.displayName};
    var uploadTask = ref.child(file.name).put(
          file,
          fb.UploadMetadata(
            contentType: file.type,
            customMetadata: customMetadata,
          ),
        );

    try {
      var snapshot = await uploadTask.future;
      final _url = await snapshot.ref.getDownloadURL();

      if (_url != null) {
        widget.onChanged(MediaSearch(
          type: MediaType.image,
          url: _url.toString(),
          thumbnail: _url.toString(),
        ));
      }
    } catch (e) {
      print(e);
    }
    if (mounted) {
      setState(() {
        _uploading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_uploading) {
      return ListTile(
        title: widget.uploadingLabel,
        trailing: CircularProgressIndicator(),
      );
    }
    return Container(
        child: Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: <Widget>[
        IconButton(
          icon: Icon(Icons.file_upload),
          // label: widget.uploadButtonLabel,
          onPressed: _files.click,
        ),
        IconButton(
          icon: Icon(Icons.photo_library),
          // label: widget.uploadButtonLabel,
          onPressed: _images.click,
        ),
        IconButton(
          icon: Icon(Icons.video_library),
          // label: widget.uploadButtonLabel,
          onPressed: _videos.click,
        ),
        // IconButton(
        //   icon: Icon(Icons.camera),
        //   // label: widget.uploadButtonLabel,
        //   onPressed: () {},
        // ),
      ],
    ));
    // return ListTile(
    //   title: RaisedButton.icon(
    //     icon: widget.uploadButtonIcon,
    //     label: widget.uploadButtonLabel,
    //     onPressed: () {
    //       _upload.click();
    //     },
    //   ),
    // );
  }
}

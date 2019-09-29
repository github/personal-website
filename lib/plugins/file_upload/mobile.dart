import 'dart:io';
import 'package:fb_auth/fb_auth.dart';
import 'package:file_picker/file_picker.dart';
import 'package:firebase_storage/firebase_storage.dart';
import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

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
  final AuthUser user;
  final ValueChanged<MediaSearch> onChanged;
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
    return Container(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: <Widget>[
          IconButton(
            icon: Icon(Icons.file_upload),
            // label: widget.uploadButtonLabel,
            onPressed: () async {
              final _file = await FilePicker.getFile();
              if (_file != null) {
                await _uploadFile(_file);
              }
            },
          ),
          // IconButton(
          //   icon: Icon(Icons.video_library),
          //   onPressed: () async {
          //     final _file =
          //         await ImagePicker.pickVideo(source: ImageSource.gallery);
          //     if (_file != null) {
          //       await _uploadFile(_file, type: MediaType.video);
          //     }
          //   },
          // ),
          // IconButton(
          //   icon: Icon(Icons.videocam),
          //   onPressed: () async {
          //     final _file =
          //         await ImagePicker.pickVideo(source: ImageSource.camera);
          //     if (_file != null) {
          //       await _uploadFile(_file, type: MediaType.video);
          //     }
          //   },
          // ),
          IconButton(
            icon: Icon(Icons.photo_library),
            onPressed: () async {
              final _file =
                  await ImagePicker.pickImage(source: ImageSource.gallery);
              if (_file != null) {
                await _uploadFile(_file);
              }
            },
          ),
          IconButton(
            icon: Icon(Icons.camera),
            onPressed: () async {
              final _file =
                  await ImagePicker.pickImage(source: ImageSource.camera);
              if (_file != null) {
                await _uploadFile(_file);
              }
            },
          ),
        ],
      ),
    );
  }

  Future _uploadFile(File _file, {MediaType type = MediaType.image}) async {
    if (mounted)
      setState(() {
        _uploading = true;
      });
    final _storage = FirebaseStorage.instance;
    final StorageReference ref = _storage.ref();
    var customMetadata = {"owner": widget.user.displayName};
    var uploadTask = ref.child('users/${widget.user.uid}/images').putFile(
          _file,
          StorageMetadata(
            customMetadata: customMetadata,
          ),
        );
    try {
      var snapshot = await uploadTask.onComplete;
      final _url = await snapshot.ref.getDownloadURL();
      if (_url != null) {
        widget.onChanged(MediaSearch(
          type: type,
          url: _url,
          thumbnail: _url,
        ));
      }
    } catch (e) {
      print(e);
    }
    if (mounted)
      setState(() {
        _uploading = false;
      });
  }
}

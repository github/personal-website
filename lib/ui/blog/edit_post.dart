import 'package:fb_auth/fb_auth.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:personal_website/data/utils/navigate.dart';
import 'package:personal_website/ui/common/index.dart';

import '../../data/classes/index.dart';
import '../../generated/i18n.dart';
import '../../plugins/fb_firestore/fb_firestore.dart';
import '../../plugins/file_upload/file_upload.dart';

class EditPostScreen extends StatefulWidget {
  static const String routeName = '/blog/new';
  final FbPost post;
  final String id;

  const EditPostScreen({
    Key key,
    this.post,
    this.id,
  }) : super(key: key);
  @override
  _EditPostScreenState createState() => _EditPostScreenState();
}

class _EditPostScreenState extends State<EditPostScreen> {
  final _formKey = GlobalKey<FormState>();
  String _tags, _image, _author, _description, _title, _markdown;

  bool _loading = false;

  @override
  void initState() {
    _title = widget?.post?.title;
    _image = widget?.post?.image;
    _author = widget?.post?.author;
    _description = widget?.post?.description;
    _tags = widget?.post?.tags;

    _markdown = widget?.post?.markdown;
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AuthBloc, AuthState>(
      builder: (context, state) => Scaffold(
        appBar: AppBar(
          title: Text(widget?.id == null ? 'New Post' : 'Edit Post'),
          actions: <Widget>[
            IconButton(
              icon: Icon(Icons.save),
              onPressed: () async {
                if (_formKey.currentState.validate()) {
                  _formKey.currentState.save();
                  if (mounted) setState(() => _loading = true);
                  final _post = FbPost(
                    author: _author,
                    image: _image,
                    tags: _tags,
                    title: _title,
                    description: _description,
                    markdown: _markdown,
                    datePublished: widget?.post?.datePublished ??
                        DateTime.now().millisecondsSinceEpoch,
                  );
                  await FbFirestore.editDoc('posts', _post.toJson(),
                      id: widget?.id);
                  if (mounted) setState(() => _loading = false);
                  Navigator.maybePop(context, _post);
                }
              },
            ),
          ],
        ),
        body: Form(
          key: _formKey,
          child: SingleChildScrollView(
            child: Column(
              children: <Widget>[
                if (_loading) LinearProgressIndicator(),
                if (state is LoggedInState) ...[
                  ListTile(
                    title: TextFormField(
                      initialValue:
                          _author ?? state?.user?.displayName ?? 'Guest',
                      decoration: InputDecoration(hintText: 'Author'),
                      onSaved: (val) => _author = val,
                      validator: (val) => val.isEmpty ? 'Required!' : null,
                    ),
                  ),
                  ListTile(
                    title: TextFormField(
                      initialValue: _title,
                      decoration: InputDecoration(hintText: 'Title'),
                      onSaved: (val) => _title = val,
                      validator: (val) => val.isEmpty ? 'Required!' : null,
                    ),
                  ),
                  ListTile(
                    title: TextFormField(
                      initialValue: _description,
                      decoration: InputDecoration(hintText: 'Description'),
                      onSaved: (val) => _description = val,
                      validator: (val) => val.isEmpty ? 'Required!' : null,
                    ),
                  ),
                  ListTile(
                    title: TextFormField(
                      initialValue: _tags,
                      decoration: InputDecoration(hintText: 'Tags'),
                      onSaved: (val) => _tags = val,
                      validator: (val) => val.isEmpty ? 'Required!' : null,
                    ),
                  ),
                  if (_image != null) ...[
                    Container(child: Image.network(_image)),
                    ListTile(
                      title: Text(
                        I18n.of(context).blogImage_source,
                      ),
                      subtitle: SelectableText(_image, maxLines: 1),
                    ),
                  ],
                  ListTile(
                    title: UploadButton(
                      user: AuthBloc.currentUser(context),
                      onChanged: (val) {
                        if (mounted)
                          setState(() {
                            _image = val.url;
                          });
                      },
                    ),
                  ),
                  ListTile(
                    title: RaisedButton(
                      child: Text('Markdown'),
                      onPressed: () async {
                        final val = await navigate<String>(
                            context, MarkdownEditPage(content: _markdown));
                        if (val != null) {
                          if (mounted)
                            setState(() {
                              _markdown = val;
                            });
                        }
                      },
                    ),
                    trailing: IconButton(
                      icon: Icon(Icons.clear),
                      onPressed: () {
                        if (mounted)
                          setState(() {
                            _markdown = null;
                          });
                      },
                    ),
                  ),
                ]
              ],
            ),
          ),
        ),
      ),
    );
  }
}

import 'dart:convert';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../../data/classes/fb_post.dart';
import '../../data/utils/index.dart';
import '../../plugins/fb_firestore/fb_firestore.dart';
import '../common/index.dart';
import 'edit_post.dart';

class PostDetails extends StatefulWidget {
  const PostDetails({
    Key key,
    this.post,
    @required this.id,
  }) : super(key: key);

  final FbPost post;
  final String id;

  static String routeName(String id) => "/blog/$id";

  @override
  _PostDetailsState createState() => _PostDetailsState();
}

class _PostDetailsState extends State<PostDetails> {
  FbPost _post;
  @override
  void initState() {
    _post = widget?.post;
    if (_post == null) {
      FbFirestore.getDoc('posts/' + widget.id).then((data) {
        if (mounted)
          setState(() {
            _post = FbPost.fromJson(json.decode(json.encode(data.data)));
          });
        _updateTitle();
      });
    } else {
      _updateTitle();
    }
    super.initState();
  }

  void _updateTitle() {
    // if (kIsWeb && mounted) {
    //   html.window.history.pushState(null, _post.title, '#/blog/' + widget.id);
    //   print(html.window.location.href);
    // }
  }

  @override
  Widget build(BuildContext context) {
    if (_post == null) {
      return Scaffold(
        appBar: AppBar(),
        body: Center(
          child: CircularProgressIndicator(),
        ),
      );
    }
    return Scaffold(
      bottomNavigationBar: BottomAppBar(
        child: Row(
          children: <Widget>[
            IconButton(
              icon: Icon(Icons.delete),
              onPressed: () {
                FbFirestore.deleteDoc('posts/${widget.id}');
                Navigator.pop(context);
              },
            ),
            IconButton(
              icon: Icon(Icons.edit),
              onPressed: () => navigate<FbPost>(
                context,
                EditPostScreen(post: _post, id: widget.id),
                fullScreen: true,
              ).then((post) {
                if (post != null && mounted) {
                  setState(() => _post = post);
                  _updateTitle();
                }
              }),
            ),
          ],
        ),
      ),
      body: NestedScrollView(
        headerSliverBuilder: (context, innerBoxIsScrolled) {
          return <Widget>[
            SliverAppBar(
              expandedHeight: 200.0,
              floating: false,
              pinned: true,
              actions: <Widget>[
                IconButton(
                  icon: Icon(Icons.share),
                  onPressed: () {},
                ),
              ],
              flexibleSpace: FlexibleSpaceBar(
                  centerTitle: true,
                  title: Text(_post.title, style: TextStyle(fontSize: 16.0)),
                  background: Image.network(
                    _post.image,
                    fit: BoxFit.cover,
                  )),
            ),
          ];
        },
        body: MediaQuery.removePadding(
          context: context,
          removeTop: true,
          child: _getRender(),
        ),
      ),
    );
  }

  Widget _getRender() {
    if (_post?.markdown != null) {
      return MarkdownRender(html: _post.markdown);
    }
    return Center(child: CircularProgressIndicator());
  }
}

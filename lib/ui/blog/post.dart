import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../../data/classes/fb_post.dart';
import '../../plugins/share/share.dart';
import '../auth/admin_check.dart';
import '../common/index.dart';

class PostDetails extends StatefulWidget {
  const PostDetails({
    Key key,
    this.post,
    @required this.slug,
  }) : super(key: key);

  final FbPost post;
  final String slug;

  @override
  _PostDetailsState createState() => _PostDetailsState();
}

class _PostDetailsState extends State<PostDetails> {
  FbPost _post;

  String _html;

  @override
  void initState() {
    _post = widget?.post;
    // if (_post == null) {
    //   FbFirestore.getDoc('posts/' + widget.slug).then((data) {
    //     if (mounted)
    //       setState(() {
    //         _post = FbPost.fromJson(json.decode(json.encode(data.data)));
    //       });
    //     _updateTitle();
    //   });
    // } else {
    //   _updateTitle();
    // }
    rootBundle.loadString("${_post.path}.md").then((data) {
      if (mounted)
        setState(() {
          _html = data;
        });
    });
    super.initState();
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
    return AdminCheck(
      builder: (context, admin) => Scaffold(
        // bottomNavigationBar: admin
        //     ? BottomAppBar(
        //         child: Row(
        //           children: <Widget>[
        //             IconButton(
        //               icon: Icon(Icons.delete),
        //               onPressed: () {
        //                 FbFirestore.deleteDoc('posts/${widget.id}');
        //                 Navigator.pop(context);
        //               },
        //             ),
        //             IconButton(
        //               icon: Icon(Icons.edit),
        //               onPressed: () => navigate(
        //                 context,
        //                 EditPostScreen(post: _post, id: widget.id),
        //                 fullScreen: true,
        //               ).then((post) {
        //                 if (post != null && mounted) {
        //                   setState(() => _post = post);
        //                   _updateTitle();
        //                 }
        //               }),
        //             ),
        //           ],
        //         ),
        //       )
        //     : null,
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
                    onPressed: () => ShareUtils.share(
                      title: _post.title,
                      url: 'https://rodydavis.com/#/blog/${widget.slug}',
                    ),
                  ),
                ],
                flexibleSpace: FlexibleSpaceBar(
                    centerTitle: true,
                    title: Text(_post.title, style: TextStyle(fontSize: 16.0)),
                    background: Container(
                      child: Stack(
                        children: <Widget>[
                          Positioned.fill(
                            child: Image.network(
                              _post.image,
                              fit: BoxFit.cover,
                            ),
                          ),
                          Positioned.fill(
                            child: Container(
                              color: Colors.black.withOpacity(0.3),
                            ),
                          ),
                        ],
                      ),
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
      ),
    );
  }

  Widget _getRender() {
    if (_post?.path != null) {
      return MarkdownRender(html: _html);
    }
    return Center(child: CircularProgressIndicator());
  }
}

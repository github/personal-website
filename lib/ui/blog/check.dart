import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';
import 'post.dart';

class BlogCheck extends StatelessWidget {
  final String route;

  const BlogCheck({Key key, @required this.route}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<BlogBloc, BlogState>(
      builder: (context, state) {
        if (state is PostsReady) {
          final post =
              state.posts.firstWhere((p) => p.slug == '/blog/$route', orElse: () => null);
          if (post != null) {
            return PostDetails(slug: post.slug, post: post);
          } else {
            return Scaffold(
              appBar: AppBar(),
              body: Center(
                child: Text('Post Not Found'),
              ),
            );
          }
        }
        return Scaffold(
          appBar: AppBar(),
          body: Center(
            child: CircularProgressIndicator(),
          ),
        );
      },
    );
  }
}

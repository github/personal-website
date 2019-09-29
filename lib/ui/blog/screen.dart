import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';
import '../../data/classes/index.dart';
import '../../generated/i18n.dart';
import '../common/index.dart';
import 'post.dart';

class BlogScreen extends StatelessWidget {
  static const String routeName = '/blog';
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: I18n.of(context).blogTitle,
      // appBar: AppBar(
      //   title: Text(I18n.of(context).blogTitle),
      //   actions: <Widget>[
      //     IconButton(
      //       icon: Icon(Icons.add),
      //       onPressed: () =>
      //           navigate(context, EditPostScreen(), fullScreen: true),
      //     ),
      //   ],
      // ),

      body: LayoutBuilder(
        builder: (context, dimens) => BlocBuilder<BlogBloc, BlogState>(
          builder: (context, state) {
            if (state is PostsReady) {
              return GridView.builder(
                gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: (dimens.maxWidth / 350).ceil(),
                  childAspectRatio: 9 / 16,
                ),
                itemCount: state.posts.length,
                itemBuilder: (context, index) {
                  final _index = state.posts[index];
                  final _json = json.decode(json.encode(_index.data));
                  final post = FbPost.fromJson(_json);
                  return Container(
                    padding: const EdgeInsets.all(8.0),
                    child: BlogCard(
                      author: post.author,
                      datePublished: DateTime.fromMillisecondsSinceEpoch(
                          post.datePublished),
                      tags: post.tags.split(','),
                      title: post.title,
                      image: post.image,
                      description: post.description,
                      onTap: () => Navigator.pushNamed(
                          context, PostDetails.routeName(_index.documentId)),
                    ),
                  );
                },
              );
            }
            return Container(
              child: Center(
                child: CircularProgressIndicator(),
              ),
            );
          },
        ),
      ),
    );
  }
}

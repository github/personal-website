import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';
import 'blog_card.dart';

class BlogPreviews extends StatelessWidget {
  const BlogPreviews({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<BlogBloc, BlogState>(
      builder: (context, state) => LayoutBuilder(
        builder: (context, dimens) {
          if (state is PostsReady) {
            final _posts = state.posts;
            return CarouselSlider(
              height: 450.0,
              autoPlay: true,
              items: _posts.map((i) {
                final post = i;
                return Container(
                    width: dimens.maxWidth * 0.8,
                    child: BlogCard(
                      author: post.author,
                      datePublished: DateTime.fromMillisecondsSinceEpoch(
                          post.datePublished),
                      tags: post.tags.split(','),
                      title: post.title,
                      image: post.image,
                      description: post.description,
                      onTap: () => Navigator.pushNamed(context, i.slug),
                    ));
              }).toList(),
            );
          }
          return Container(
            height: 400.0,
            child: Center(
              child: CircularProgressIndicator(),
            ),
          );
        },
      ),
    );
  }
}

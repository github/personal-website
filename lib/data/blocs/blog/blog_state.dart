import 'package:meta/meta.dart';

import '../../classes/index.dart';

@immutable
abstract class BlogState {}

class InitialBlogState extends BlogState {}

class PostsReady extends BlogState {
  // final List<FbDocumentSnapshot> posts;
  final List<FbPost> posts;

  PostsReady(this.posts);
}

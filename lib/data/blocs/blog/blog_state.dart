import 'package:meta/meta.dart';
import 'package:personal_website/data/classes/index.dart';
import 'package:personal_website/plugins/fb_firestore/classes/index.dart';

@immutable
abstract class BlogState {}

class InitialBlogState extends BlogState {}

class PostsReady extends BlogState {
  // final List<FbDocumentSnapshot> posts;
  final List<FbPost> posts;

  PostsReady(this.posts);
}

import 'package:meta/meta.dart';

@immutable
abstract class BlogEvent {}

class LoadPosts extends BlogEvent {}

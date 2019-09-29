import 'dart:async';

import 'package:bloc/bloc.dart';

import './bloc.dart';
import '../../../plugins/fb_firestore/fb_firestore.dart';

class BlogBloc extends Bloc<BlogEvent, BlogState> {
  @override
  BlogState get initialState => InitialBlogState();

  @override
  Stream<BlogState> mapEventToState(
    BlogEvent event,
  ) async* {
    if (event is LoadPosts) {
      yield* _mapLoadToState(event);
    }
  }

  Stream<BlogState> _mapLoadToState(LoadPosts event) async* {
    final _data = await FbFirestore.getDocs('posts');
    if (_data != null) {
      yield PostsReady(_data) ;
    } else {
      yield PostsReady([]);
    }
  }
}

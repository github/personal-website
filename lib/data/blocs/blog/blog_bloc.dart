import 'dart:async';

import 'package:bloc/bloc.dart';

import './bloc.dart';
import '../../classes/index.dart';

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
    // final _data = await FbFirestore.getDocs('posts');
    final _author = 'Rody Davis';
    final _data = <FbPost>[
      FbPost(
        author: _author,
        title: 'Launching… Space Curiosity!',
        description: 'New Flutter App',
        path: 'assets/posts/2019-03-08-app-launch-space-curiosity',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2FKYmOU1HF97dX6MZcvurBCInF5182%2Ficon.png?alt=media&token=ed661a7f-6264-47a9-bbc9-5c3d22220b53',
        slug: '/blog/2019/03/10/app-launch-space-curiosity/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
      FbPost(
        author: _author,
        title: 'The Pitch Pipe',
        description: 'Sheet Music Made Easy',
        path: 'assets/posts/2019-03-10-the-pitch-pipe',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fpitchpipe.png?alt=media&token=c6f94501-643e-45fb-b724-232f85edf5d1',
        slug: '/blog/2019/03/10/the-pitch-pipe/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
      FbPost(
        author: _author,
        title: 'Flutter + Fastlane (One Click Beta)',
        description: 'One Click Release to Beta',
        path: 'assets/posts/2019-03-11-flutter-one-click-release',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fcross-platform.jpg?alt=media&token=790f7aac-a472-41f2-9b0e-f2ebec42c62b',
        slug: '/blog/2019/03/11/flutter-one-click-release/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
      FbPost(
        author: _author,
        title: 'Building A Piano with Flutter',
        description: 'Full piano built with Flutter',
        path: 'assets/posts/2019-03-12-making-a-piano',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fstarter.png?alt=media&token=e5f5692c-c30e-40b8-a6cd-a31f1ab1a898',
        slug: '/blog/2019/03/12/making-a-piano/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
      FbPost(
        author: _author,
        title: 'Automate Flutter App Releases',
        description: 'Script to release flutter apps to production',
        path: 'assets/posts/2019-03-15-automate-flutter-apps',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fnew_project.png?alt=media&token=d4684c46-7b93-43ae-98b4-29ceb82a2d43',
        slug: '/blog/2019/03/15/automate-flutter-apps/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
      FbPost(
        author: _author,
        title: 'How to build a native cross platform project with Flutter',
        description:
            'Create a Flutter that targets the web and mobile taking full advantage of native plugins',
        path: 'assets/posts/2019-09-06-one-codebase-many-places',
        image:
            'https://firebasestorage.googleapis.com/v0/b/website-b7fa0.appspot.com/o/images%2Fm3Fw4A56wih07gQ3sQW9rDXHKA13%2Fstarter_ipad.png?alt=media&token=08e5ddfb-5216-4acd-9732-3c6c2e223adb',
        slug: '/blog/2019/09/06/one-codebase-many-places/',
        datePublished: DateTime.now().millisecondsSinceEpoch,
        tags: 'flutter, ios, android',
      ),
    ];
    if (_data != null) {
      yield PostsReady(_data);
    } else {
      yield PostsReady([]);
    }
  }
}

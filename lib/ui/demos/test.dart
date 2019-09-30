import 'package:flutter/material.dart';

class TestDemo extends StatefulWidget {
  static const String routeName = '/demos/test_1';

  @override
  _TestDemoState createState() => _TestDemoState();
}

class _TestDemoState extends State<TestDemo> {
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 8.0,
      clipBehavior: Clip.hardEdge,
      borderRadius: BorderRadius.circular(20.0),
      child: Container(
        padding: const EdgeInsets.all(12.0),
        decoration: BoxDecoration(
          color: Colors.black,
        ),
        child: Scaffold(
          key: _scaffoldKey,
          appBar: AppBar(
            automaticallyImplyLeading: false,
            title: Text('Home Screen'),
          ),
          body: Container(),
          floatingActionButton: FloatingActionButton(
            child: Icon(Icons.add),
            onPressed: () {
              _scaffoldKey.currentState.showSnackBar(SnackBar(
                content: Text('Button Pressed!'),
              ));
            },
          ),
        ),
      ),
    );
  }
}

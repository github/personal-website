import 'package:flutter/material.dart';

class FrameRender extends StatelessWidget {
  final Widget child;
  final Axis direction;

  const FrameRender({
    Key key,
    this.child,
    this.direction = Axis.vertical,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: direction == Axis.vertical ? (9 / 16) : (16 / 9),
      child: Material(
          elevation: 8.0,
          clipBehavior: Clip.hardEdge,
          borderRadius: BorderRadius.circular(20.0),
          child: Container(
            padding: const EdgeInsets.all(12.0),
            decoration: BoxDecoration(
              color: Colors.black,
            ),
            child: child,
          )),
    );
  }
}

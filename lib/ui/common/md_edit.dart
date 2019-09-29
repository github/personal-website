import 'package:flutter/material.dart';

class MarkdownEditPage extends StatefulWidget {
  final String content;

  const MarkdownEditPage({Key key, this.content}) : super(key: key);

  @override
  _MarkdownEditPageState createState() => _MarkdownEditPageState();
}

class _MarkdownEditPageState extends State<MarkdownEditPage> {
  TextEditingController _controller;
  @override
  void initState() {
    _controller = TextEditingController(text: widget?.content);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        actions: <Widget>[
          IconButton(
            icon: Icon(Icons.save),
            onPressed: () => Navigator.pop(context, _controller.text),
          ),
        ],
      ),
      body: TextField(
        controller: _controller,
        maxLines: null,
        keyboardType: TextInputType.multiline,
        decoration: InputDecoration(
          border: InputBorder.none,
        ),
      ),
    );
  }
}

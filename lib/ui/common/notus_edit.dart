// import 'dart:async';
// import 'dart:convert';

// import 'package:flutter/material.dart';
// import 'package:quill_delta/quill_delta.dart';
// import 'package:zefyr/zefyr.dart';

// class NotusEditorPage extends StatefulWidget {
//   final String content;

//   const NotusEditorPage({Key key, this.content}) : super(key: key);
//   @override
//   NotusEditorPageState createState() => NotusEditorPageState();
// }

// class NotusEditorPageState extends State<NotusEditorPage> {
//   /// Allows to control the editor and the document.
//   ZefyrController _controller;

//   /// Zefyr editor like any other input field requires a focus node.
//   FocusNode _focusNode;

//   @override
//   void initState() {
//     super.initState();
//     _focusNode = FocusNode();
//     _loadDocument().then((document) {
//       setState(() {
//         _controller = ZefyrController(document);
//       });
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     final Widget body = (_controller == null)
//         ? Center(child: CircularProgressIndicator())
//         : ZefyrScaffold(
//             child: ZefyrEditor(
//               padding: EdgeInsets.all(16),
//               controller: _controller,
//               focusNode: _focusNode,
//             ),
//           );

//     return Scaffold(
//       appBar: AppBar(
//         title: Text("Editor page"),
//         actions: <Widget>[
//           Builder(
//             builder: (context) => IconButton(
//               icon: Icon(Icons.save),
//               onPressed: () => _saveDocument(context),
//             ),
//           )
//         ],
//       ),
//       body: Container(child: body),
//     );
//   }

//   /// Loads the document asynchronously from a file if it exists, otherwise
//   /// returns default document.
//   Future<NotusDocument> _loadDocument() async {
//     try {
//       if (widget?.content != null) {
//         return NotusDocument.fromJson(json.decode(widget.content));
//       }
//     } catch (e) {}
//     final Delta delta = Delta()..insert("Zefyr Quick Start\n");
//     return NotusDocument.fromDelta(delta);
//   }

//   void _saveDocument(BuildContext context) {
//     final contents = jsonEncode(_controller.document);
//     Navigator.pop(context, contents);
//   }
// }

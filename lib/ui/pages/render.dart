import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

import '../common/index.dart';

class AssetPageRender extends StatefulWidget {
  final String path, title;
  const AssetPageRender({Key key, this.path, this.title}) : super(key: key);
  @override
  _AssetPageRenderState createState() => _AssetPageRenderState();
}

class _AssetPageRenderState extends State<AssetPageRender> {
  String _html;

  @override
  void initState() {
    rootBundle.loadString("${widget.path}.md").then((data) {
      if (mounted)
        setState(() {
          _html = data;
        });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: widget.title,
      body: MarkdownRender(html: _html),
    );
  }
}

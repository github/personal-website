import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:flutter_html/flutter_html.dart';
import 'package:html/dom.dart' as dom;
import 'package:markdown/markdown.dart' as md;
import 'package:personal_website/data/blocs/blocs.dart';
import 'package:personal_website/plugins/url_launcher/url_launcher.dart';
import 'package:personal_website/ui/router.dart';

class MarkdownRender extends StatelessWidget {
  const MarkdownRender({
    Key key,
    @required String html,
  })  : _html = html,
        super(key: key);

  final String _html;

  get UriUtils => null;

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      bottom: false,
      child: _html == null
          ? Center(child: CircularProgressIndicator())
          : Scrollbar(
              child: SingleChildScrollView(
                child: BlocBuilder<BlogBloc, BlogState>(
                  builder: (context, blocState) => Html(
                    data: md.markdownToHtml(_html),
                    //Optional parameters:
                    padding: EdgeInsets.all(8.0),
                    backgroundColor: Theme.of(context).scaffoldBackgroundColor,
                    defaultTextStyle: TextStyle(fontFamily: 'serif'),
                    linkStyle: const TextStyle(color: Colors.redAccent),
                    onLinkTap: (url) => UrlUtils.open(url, name: 'Info'),
                    onImageTap: (src) => UrlUtils.open(src, name: 'Preview'),
                    //Must have useRichText set to false for this to work.
                    useRichText: false,
                    customRender: (node, children) {
                      if (node is dom.Element) {
                        // print(node.localName);
                        switch (node.localName) {
                          case "widget":
                            final width = ((node.attributes['width'] != null)
                                ? double.tryParse(node.attributes['width'])
                                : null);
                            final height = ((node.attributes['height'] != null)
                                ? double.tryParse(node.attributes['height'])
                                : null);
                            if (node.attributes['src'] != null) {
                              // Todo: Custom Flutter Widget Render from Json or Link
                              final _src = node.attributes['src'];
                              final _widget =
                                  Router.routes(blocState)[_src](context);
                              return Container(
                                width: width,
                                height: height,
                                child: _widget,
                              );
                            }
                            return Container(
                              width: width,
                              height: height,
                              color: Colors.green,
                            );
                        }
                      }
                      return null;
                    },
                    customTextAlign: (dom.Node node) {
                      if (node is dom.Element) {
                        switch (node.localName) {
                          case "p":
                            return TextAlign.justify;
                        }
                      }
                      return null;
                    },
                    customTextStyle: (dom.Node node, TextStyle baseStyle) {
                      if (node is dom.Element) {
                        switch (node.localName) {
                          case "p":
                            return baseStyle
                                .merge(TextStyle(height: 2, fontSize: 20));
                        }
                      }
                      return baseStyle;
                    },
                  ),
                ),
              ),
            ),
    );
  }
}

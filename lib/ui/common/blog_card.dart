import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

class BlogCard extends StatelessWidget {
  const BlogCard({
    Key key,
    @required this.image,
    @required this.title,
    @required this.datePublished,
    @required this.author,
    @required this.tags,
    @required this.description,
    this.onTap,
  }) : super(key: key);

  final String author;
  final DateTime datePublished;
  final String image;
  final List<String> tags;
  final String title, description;
  final VoidCallback onTap;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: InkWell(
        onTap: onTap,
        child: LayoutBuilder(
          builder: (context, dimens) => Container(
            child: Column(
              children: <Widget>[
                Expanded(
                  child: Card(
                    child: Container(
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: <Widget>[
                          Expanded(
                              child: Row(children: <Widget>[
                            Expanded(
                              child: Container(
                                child: Image.network(
                                  image,
                                  fit: BoxFit.fitWidth,
                                ),
                              ),
                            )
                          ])),
                          Container(
                            padding: EdgeInsets.all(8.0),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: <Widget>[
                                Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Text(
                                    title,
                                    style: TextStyle(
                                      fontWeight: FontWeight.w500,
                                      fontSize: 20.0,
                                    ),
                                  ),
                                ),
                                Wrap(
                                  children: <Widget>[
                                    buildMeta(
                                      Icon(Icons.event),
                                      DateFormat.yMMMd().format(datePublished),
                                    ),
                                    buildMeta(
                                      Icon(Icons.person),
                                      author,
                                    ),
                                    buildMeta(
                                      Icon(Icons.folder),
                                      tags.join(", "),
                                    ),
                                  ],
                                ),
                                Padding(
                                  padding: const EdgeInsets.all(8.0),
                                  child: Text(
                                    description,
                                    style: Theme.of(context).textTheme.caption,
                                  ),
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ),
                Container(height: 30),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget buildMeta(Icon icon, String label) {
    return Padding(
      padding: const EdgeInsets.all(8.0),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: <Widget>[icon, Container(width: 10.0), Text(label)],
      ),
    );
  }
}

import 'package:flutter/material.dart';

class FbPost {
  String slug;
  String author;
  String image;
  String tags;
  String title;
  String description;
  int datePublished;
  // String markdown;
  String path;

  FbPost({
    @required this.slug,
    @required this.author,
    @required this.image,
    @required this.tags,
    @required this.title,
    @required this.description,
    @required this.datePublished,
    @required this.path,
  });

  factory FbPost.fromJson(Map<String, dynamic> json) => FbPost(
        slug: json["slug"],
        author: json["author"],
        image: json["image"],
        tags: json["tags"],
        title: json["title"],
        description: json["description"],
        datePublished: json["date_published"],
        // markdown: json["markdown"],
        path: json["path"],
      );

  Map<String, dynamic> toJson() => {
        "slug": slug,
        "author": author,
        "image": image,
        "tags": tags,
        "title": title,
        "description": description,
        "date_published": datePublished,
        // "markdown": markdown,
        "path": path,
      };
}

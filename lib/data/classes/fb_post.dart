class FbPost {
  String author;
  String image;
  String tags;
  String title;
  String description;
  int datePublished;
  String markdown;

  FbPost({
    this.author,
    this.image,
    this.tags,
    this.title,
    this.description,
    this.datePublished,
    this.markdown,
  });

  factory FbPost.fromJson(Map<String, dynamic> json) => FbPost(
        author: json["author"],
        image: json["image"],
        tags: json["tags"],
        title: json["title"],
        description: json["description"],
        datePublished: json["date_published"],
        markdown: json["markdown"],
      );

  Map<String, dynamic> toJson() => {
        "author": author,
        "image": image,
        "tags": tags,
        "title": title,
        "description": description,
        "date_published": datePublished,
        "markdown": markdown,
      };
}

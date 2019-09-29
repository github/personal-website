class MediaSearch {
  const MediaSearch({
    this.type = MediaType.image,
    this.url,
    this.thumbnail,
  });

  final MediaType type;
  final String url;
  final String thumbnail;
  String get preview => thumbnail ?? url;
}

enum MediaType { image, video }

import 'package:carousel_slider/carousel_slider.dart';
import 'package:flutter/material.dart';

import '../../data/classes/app.dart';
import '../../data/utils/constants.dart';
import '../../plugins/url_launcher/url_launcher.dart';

class AppDetails extends StatefulWidget {
  final AppView appView;

  const AppDetails({
    Key key,
    @required this.appView,
  }) : super(key: key);

  @override
  _AppDetailsState createState() => _AppDetailsState();
}

class _AppDetailsState extends State<AppDetails> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.appView.title),
      ),
      body: LayoutBuilder(
        builder: (context, dimens) => Stack(
          children: <Widget>[
            Positioned(
              top: 0,
              height: dimens.maxHeight * 0.6,
              width: dimens.maxWidth,
              child: Container(
                decoration: BoxDecoration(
                    color: Colors.black,
                    borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(35.0),
                      bottomRight: Radius.circular(35.0),
                    )),
              ),
            ),
            Positioned.fill(
              child: Padding(
                padding: const EdgeInsets.only(top: 12.0),
                child: ListView(
                  children: <Widget>[
                    if (dimens.maxWidth >= kBreakpoint) ...[
                      _buildLargeScreen(dimens)
                    ] else ...[
                      _buildSmallScreen(dimens)
                    ],
                    GridView.builder(
                      shrinkWrap: true,
                      gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: (dimens.maxWidth / 350).ceil(),
                        childAspectRatio: 16 / 9,
                      ),
                      itemCount: widget.appView.meta.length,
                      itemBuilder: (context, index) {
                        final _item = widget.appView.meta[index];
                        return Center(
                          child: ListTile(
                            leading: Icon(
                              _item.iconData,
                              color: Theme.of(context).primaryColor,
                            ),
                            title: Text(
                              _item.title,
                              style: TextStyle(
                                fontSize: 22,
                                fontWeight: FontWeight.w500,
                              ),
                            ),
                            subtitle: Text(
                              _item.description,
                              style: Theme.of(context).textTheme.subtitle,
                            ),
                          ),
                        );
                      },
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSmallScreen(BoxConstraints dimens) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      crossAxisAlignment: CrossAxisAlignment.center,
      children: <Widget>[
        _buildIcon(),
        Container(height: 20.0),
        _buildTitle(),
        if (widget.appView?.appStoreLink != null) ...[
          _buildIosLink(),
        ],
        if (widget.appView?.googlePlayLink != null) ...[
          _buildAndroidLink(),
        ],
        if (widget.appView?.websiteLink != null) ...[
          _buildWebLink(),
        ],
        _buildScreenshots(),
      ],
    );
  }

  Widget _buildLargeScreen(BoxConstraints dimens) {
    return Row(
      children: <Widget>[
        Container(
          width: dimens.maxWidth * 0.4,
          padding: EdgeInsets.all(10.0),
          child: _buildScreenshots(),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(
              children: <Widget>[
                Row(
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: <Widget>[
                    _buildIcon(),
                    Container(width: 20.0),
                    _buildTitle(),
                  ],
                ),
                Container(height: 20.0),
                Row(
                  children: <Widget>[
                    if (widget.appView?.appStoreLink != null) ...[
                      _buildIosLink(),
                    ],
                    Container(width: 20.0),
                    if (widget.appView?.googlePlayLink != null) ...[
                      _buildAndroidLink(),
                    ],
                    Container(width: 20.0),
                    if (widget.appView?.websiteLink != null) ...[
                      _buildWebLink(),
                    ],
                  ],
                ),
              ],
            ),
          ),
        )
      ],
    );
  }

  CarouselSlider _buildScreenshots() {
    return CarouselSlider(
      height: 700,
      autoPlay: true,
      viewportFraction: 1.0,
      items: widget.appView.screenshots
          .map((i) => Container(
                padding: EdgeInsets.symmetric(
                  horizontal: 12.0,
                  vertical: 20.0,
                ),
                decoration: BoxDecoration(
                  color: Colors.black,
                  borderRadius: BorderRadius.circular(12.0),
                ),
                child: Image.network(i),
              ))
          .toList(),
    );
  }

  Widget _buildWebLink() {
    return RaisedButton(
      child: Text('Demo'),
      onPressed: () => UrlUtils.open(widget.appView.websiteLink),
    );
  }

  Widget _buildAndroidLink() {
    return RaisedButton(
      child: Text('Play Store'),
      onPressed: () => UrlUtils.open(widget.appView.googlePlayLink),
    );
    return InkWell(
      onTap: () => UrlUtils.open(widget.appView.googlePlayLink,
          name: widget.appView.title),
      child: Container(
        height: 110,
        padding: const EdgeInsets.all(8.0),
        child: Image.asset(
          'assets/images/google_play.png',
          fit: BoxFit.contain,
        ),
      ),
    );
  }

  Widget _buildIosLink() {
    return RaisedButton(
      child: Text('App Store'),
      onPressed: () => UrlUtils.open(widget.appView.appStoreLink),
    );
    return InkWell(
      onTap: () => UrlUtils.open(widget.appView.appStoreLink,
          name: widget.appView.title),
      child: Container(
        height: 110,
        padding: const EdgeInsets.all(8.0),
        child: Image.asset(
          'assets/images/app_store.png',
          fit: BoxFit.contain,
        ),
      ),
    );
  }

  Container _buildTitle() {
    return Container(
      padding: EdgeInsets.only(top: 15.0, bottom: 15.0),
      child: Text(
        widget.appView.title,
        style: TextStyle(
          fontSize: 23,
          fontWeight: FontWeight.w700,
          color: Colors.white,
        ),
      ),
    );
  }

  Container _buildIcon() {
    return Container(
      width: 200,
      height: 200,
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(20.0),
        image: DecorationImage(
          image: NetworkImage(widget.appView.appIcon),
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';

import '../../data/classes/app.dart';

class AppsRender extends StatelessWidget {
  const AppsRender({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, dimens) => GridView.builder(
        shrinkWrap: true,
        gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: (dimens.maxWidth / 200).ceil()),
        itemCount: allApps.length,
        itemBuilder: (context, index) {
          final _app = allApps[index];
          return Padding(
            padding: const EdgeInsets.all(8.0),
            child: InkWell(
              onTap: () => Navigator.pushNamed(context, _app.routeName),
              child: Column(
                children: <Widget>[
                  Expanded(
                      child: Material(
                    borderRadius: BorderRadius.circular(20.0),
                    elevation: 12.0,
                    clipBehavior: Clip.hardEdge,
                    child: Image.asset(_app.appIcon),
                  )),
                  Padding(
                    padding: const EdgeInsets.only(top: 8.0),
                    child: Text(
                      _app.title,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  Container(height: 20.0),
                ],
              ),
            ),
          );
        },
      ),
    );
  }
}

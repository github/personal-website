import 'package:flutter/material.dart';

import '../../data/classes/app.dart';
import '../../generated/i18n.dart';
import '../common/index.dart';

class AppsScreen extends StatelessWidget {
  static const String routeName = "/apps";
  @override
  Widget build(BuildContext context) {
    return AppScaffold(
      pageTitle: I18n.of(context).appsTitle,
      body: LayoutBuilder(
        builder: (context, dimens) => GridView.builder(
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
                    Expanded(child: Image.network(_app.appIcon)),
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
                  ],
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

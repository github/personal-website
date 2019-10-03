import 'package:flutter/material.dart';
import 'package:flutter_bloc/flutter_bloc.dart';

import '../../data/blocs/blocs.dart';

class AppsRender extends StatelessWidget {
  const AppsRender({
    Key key,
    this.shrinkWrap = true,
    this.scrollDirection = Axis.vertical,
    this.appLauncher = false,
  }) : super(key: key);
  final bool shrinkWrap;
  final Axis scrollDirection;
  final bool appLauncher;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AppsBloc, AppsState>(
      builder: (context, state) => LayoutBuilder(
        builder: (context, dimens) {
          if (state is AppsReady) {
            return GridView.builder(
              shrinkWrap: shrinkWrap,
              scrollDirection: scrollDirection,
              gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount:
                      (dimens.maxWidth / (appLauncher ? 150 : 200)).ceil()),
              itemCount: state.apps.length,
              itemBuilder: (context, index) {
                final _app = state.apps[index];
                if (appLauncher) {
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: InkWell(
                      onTap: () => Navigator.pushNamed(context, _app.routeName),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        crossAxisAlignment: CrossAxisAlignment.center,
                        children: <Widget>[
                          Expanded(
                              child: Material(
                            borderRadius: BorderRadius.circular(20.0),
                            elevation: 12.0,
                            clipBehavior: Clip.hardEdge,
                            child: Image.asset(_app.appIcon),
                          )),
                          Padding(
                            padding: const EdgeInsets.only(top: 10.0),
                            child: Text(
                              _app.title,
                              textAlign: TextAlign.center,
                              style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w300,
                              ),
                            ),
                          ),
                          // Container(height: 20.0),
                        ],
                      ),
                    ),
                  );
                }
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
            );
          }
          return Container();
        },
      ),
    );
  }
}

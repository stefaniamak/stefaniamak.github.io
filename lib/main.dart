import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:smooth_scroll_web/smooth_scroll_web.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/pages/my_page.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';
import 'package:url_strategy/url_strategy.dart';

void main() {
  setPathUrlStrategy();
  runApp(MyHomePage());
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: MyPage.route,
      routes: {
        MyPage.route: (context) => LinkTree(), //MyPage(),
        LinkTree.route: (context) => LinkTree(),
      },
    );
  }
}

class PageSetup extends StatelessWidget {
  const PageSetup({
    Key key,
    @required this.controller,
    @required this.child,
  }) : super(key: key);

  final ScrollController controller;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: kDarkMainColor,
      body: Scrollbar(
        isAlwaysShown: kIsWeb,
        controller: controller,
        child: SmoothScrollWeb(
          controller: controller,
          child: child,
        ),
      ),
    );
  }
}

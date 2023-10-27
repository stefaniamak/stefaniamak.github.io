import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/pages/my_page.dart';

void main() {
  setUrlStrategy(PathUrlStrategy());

  // setPathUrlStrategy();
  runApp(MyHomePage());
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, this.title}) : super(key: key);
  final String? title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      initialRoute: MyPage.route,
      routes: {
        MyPage.route: (context) => MyPage(),
        LinkTree.route: (context) => LinkTree(),
      },
    );
  }
}

import 'package:flutter/material.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/pages/my_page.dart';
import 'package:stefaniamak/router/router.dart';

void main() {
  // setUrlStrategy(PathUrlStrategy());

  // setPathUrlStrategy();
  runApp(MyHomePage());
}

class MyHomePage extends StatelessWidget {
  MyHomePage({Key? key, this.title}) : super(key: key);
  final String? title;

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      routerConfig: MyRouter().router,
    );
    return MaterialApp(
      initialRoute: MyPage.route,
      routes: {
        MyPage.route: (context) => MyPage(),
        LinkTree.route: (context) => LinkTree(),
      },
    );
  }
}

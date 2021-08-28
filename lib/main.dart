import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:smooth_scroll_web/smooth_scroll_web.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Stefania Mak',
      theme: ThemeData(
        primarySwatch: Colors.red,
      ),
      home: MyHomePage(title: 'Stefania Mak'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  ScrollController controller = ScrollController();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        backgroundColor: kDarkMainColor,
        body: Scrollbar(
          isAlwaysShown: kIsWeb,
          controller: controller,
          child: SmoothScrollWeb(
              controller: controller,
              child: LinkTree(
                controller: controller,
              )),
        ),
      ),
    );
  }
}

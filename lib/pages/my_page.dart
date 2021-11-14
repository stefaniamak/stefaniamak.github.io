import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/smooth_scrolling.dart';

class MyPage extends StatelessWidget {
  static const String route = '/';

  @override
  Widget build(BuildContext context) {
    var controller = ScrollController();
    return Scaffold(
      body: SmoothScrolling(
        controller: controller,
        child: SingleChildScrollView(
          controller: controller,
          physics:
              kIsWeb ? NeverScrollableScrollPhysics() : BouncingScrollPhysics(),
          child: Container(
            height: MediaQuery.of(context).size.height + 500,
            width: double.infinity,
            color: Colors.white,
            child: Center(child: Text('Under Construction.')),
          ),
        ),
      ),
    );
  }
}

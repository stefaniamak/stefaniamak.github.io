import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/smooth_scrolling.dart';

class UnderConstruction extends StatelessWidget {
  const UnderConstruction({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var controller = ScrollController();
    return Scaffold(
      body: SmoothScrolling(
        controller: controller,
        child: SingleChildScrollView(
          controller: controller,
          physics:
              // kIsWeb ? NeverScrollableScrollPhysics() :
              BouncingScrollPhysics(),
          child: Container(
            height: MediaQuery.of(context).size.height,
            width: double.infinity,
            color: Colors.white,
            child: Center(child: Text('Under Construction.')),
          ),
        ),
      ),
    );
  }
}

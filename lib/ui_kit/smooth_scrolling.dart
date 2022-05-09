import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:smooth_scroll_web/smooth_scroll_web.dart';

class SmoothScrolling extends StatelessWidget {
  const SmoothScrolling({
    Key key,
    @required this.controller,
    @required this.child,
  }) : super(key: key);

  final ScrollController controller;
  final Widget child;

  @override
  Widget build(BuildContext context) {
    return Scrollbar(
      isAlwaysShown: kIsWeb,
      controller: controller,
      child: SmoothScrollWeb(
        controller: controller,
        child: child,
      ),
    );
  }
}

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

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
      child: child,
    );
  }
}

import 'package:flutter/material.dart';

class MyPage extends StatelessWidget {
  static const String route = '/';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: double.infinity,
        color: Colors.white,
        child: Center(child: Text('Under Construction.')),
      ),
    );
  }
}

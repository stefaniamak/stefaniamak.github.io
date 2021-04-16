import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';

import '../link_tree.dart';

class LinksList extends StatelessWidget {
  const LinksList({Key key, @required Color lightMainColor}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      width:
          isPhoneDiameters(context) ? 700.0 : MediaQuery.of(context).size.width,
      child: ListView.builder(
        itemCount: 1,
        itemBuilder: (context, index) {
          return Row(
            children: [
              Expanded(
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
                  child: Container(
                    color: kLightMainColor,
                    height: 45,
                    child: Center(
                      child: Text(
                        'Resume',
                        style: TextStyle(
                            fontSize: 16, fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ),
              )
            ],
          );
        },
      ),
    );
  }
}

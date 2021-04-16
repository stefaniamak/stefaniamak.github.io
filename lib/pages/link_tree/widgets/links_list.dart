import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';
import 'package:stefaniamak/view_models/button_view_model.dart';

import '../link_tree.dart';

class LinksList extends StatelessWidget {
  const LinksList({@required this.buttonViewModelList, Key key})
      : super(key: key);

  final List<ButtonViewModel> buttonViewModelList;

  @override
  Widget build(BuildContext context) {
    double buttonHeight = 60.0;
    return Container(
      height: buttonViewModelList.length * (buttonHeight + 20.0),
      width:
          isPhoneDiameters(context) ? 700.0 : MediaQuery.of(context).size.width,
      child: ListView.builder(
        itemCount: buttonViewModelList.length,
        itemBuilder: (context, index) {
          return Row(
            children: [
              Expanded(
                child: Padding(
                  padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
                  child: Container(
                    color: kLightMainColor,
                    height: buttonHeight,
                    child: Center(
                      child: Text(
                        buttonViewModelList[index].title,
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

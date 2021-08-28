import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/constants/constants.dart';
import 'package:stefaniamak/view_models/button_view_model.dart';

import '../link_button.dart';
import '../link_tree.dart';

class LinksList extends StatelessWidget {
  const LinksList({@required this.buttonViewModelList, Key key})
      : super(key: key);

  final List<ButtonViewModel> buttonViewModelList;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: buttonViewModelList.length * (buttonHeight + 20.0),
      width:
          isPhoneDiameters(context) ? 700.0 : MediaQuery.of(context).size.width,
      child: Column(
        children: [
          ...buttonViewModelList.map(
            (ButtonViewModel button) => LinkButton(buttonVm: button),
          )
        ],
      ),
    );
  }
}

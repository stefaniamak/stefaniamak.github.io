import 'dart:html' as html;

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/constants/constants.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';
import 'package:stefaniamak/view_models/button_view_model.dart';

class LinkButton extends StatelessWidget {
  const LinkButton({
    @required this.buttonVm,
    Key key,
  }) : super(key: key);

  final ButtonViewModel buttonVm;

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: Padding(
            padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
            child: Material(
              color: kLightMainColor,
              child: InkWell(
                onTap: () {
                  // import 'dart:js' as js;
                  // js.context.callMethod('open',
                  //     ['https://stackoverflow.com/questions/ask']);

                  // import 'dart:html' as html;
                  // String url = 'https://flutter.dev';
                  // if (button.link != '')
                  html.window.open(buttonVm.link, '_blank');
                  // for new '_blank' for same '_self'
                },
                child: Container(
                  height: buttonHeight,
                  child: Center(
                    child: Text(
                      buttonVm.title,
                      style:
                          TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ),
            ),
          ),
        )
      ],
    );
  }
}

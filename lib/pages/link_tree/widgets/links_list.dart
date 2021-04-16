// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;

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
      child: Column(
        children: [
          ...buttonViewModelList.map(
            (button) => Row(
              children: [
                Expanded(
                  child: Padding(
                    padding: EdgeInsets.symmetric(horizontal: 10, vertical: 10),
                    child: Material(
                      child: InkWell(
                        onTap: () {
                          // import 'dart:js' as js;
                          // js.context.callMethod('open',
                          //     ['https://stackoverflow.com/questions/ask']);

                          // import 'dart:html' as html;
                          // String url = 'https://flutter.dev';
                          // if (button.link != '')
                          html.window.open(button.link,
                              '_blank'); // for new '_blank' for same '_self'
                        },
                        child: Container(
                          color: kLightMainColor,
                          height: buttonHeight,
                          child: Center(
                            child: Text(
                              button.title,
                              style: TextStyle(
                                  fontSize: 16, fontWeight: FontWeight.bold),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}

import 'package:flutter/material.dart';
import 'package:stefaniamak/pages/link_tree/widgets/button_link.dart';
import 'package:stefaniamak/ui_kit/styles/colors.dart';
import 'package:stefaniamak/view_models/button_view_model.dart';

bool isPhoneDiameters(context, {double width}) =>
    MediaQuery.of(context).size.width > (width ?? 700);

class LinkTree extends StatelessWidget {
  const LinkTree({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    double windowWidth = MediaQuery.of(context).size.width;
    return Center(
      child: Container(
        width: isPhoneDiameters(context) ? 700.0 : windowWidth,
        child: ListView(
          children: [
            Center(
              child: Container(
                width: isPhoneDiameters(context) ? 700.0 : windowWidth,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    SizedBox(height: 60),
                    CircleAvatar(
                      radius: 50.0,
                      backgroundImage:
                          AssetImage('assets/stefania_mak_icon.png'),
                    ),
                    Padding(
                      padding: const EdgeInsets.symmetric(vertical: 15),
                      child: Text(
                        'Stefania Mak',
                        style: TextStyle(
                            // fontFamily: 'Grenze',
                            fontSize: 25.0,
                            fontWeight: FontWeight.bold,
                            color: kLightMainColor),
                      ),
                    ),
                    Text(
                      'Flutter App Developer',
                      style: TextStyle(
                          // fontFamily: 'Turret',
                          fontSize: 15.0,
                          color: kLightMainColor,
                          letterSpacing: 2.5),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(25.0),
                      child: SizedBox(
                        height: 20.0,
                        width: 10,
                        child: Divider(
                          color: Colors.grey[200],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            LinksList(
              buttonViewModelList: [
                ButtonViewModel('Resume', ''),
                ButtonViewModel('LinkedIn', ''),
                ButtonViewModel('GitHub', ''),
                ButtonViewModel('Behance', ''),
                ButtonViewModel('Photography Facebook Page', ''),
                ButtonViewModel('Instagram (Photography)', ''),
                ButtonViewModel('Instagram (Cosplay)', ''),
                ButtonViewModel('WorldCosplay', ''),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

import 'package:flutter/material.dart';

class LinkTree extends StatelessWidget {
  const LinkTree({Key key}) : super(key: key);

  bool isPhoneDiameters(context, {double width}) =>
      MediaQuery.of(context).size.width > (width ?? 700);

  @override
  Widget build(BuildContext context) {
    Color _darkMainColor = Colors.white10;
    Color _lightMainColor = Colors.white;
    double windowWidth = MediaQuery.of(context).size.width;
    print('windowWidth: $windowWidth');
    return Center(
      child: Container(
        width: isPhoneDiameters(context) ? 700.0 : windowWidth,
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            SizedBox(height: 60),
            CircleAvatar(
              radius: 50.0,
              backgroundImage: AssetImage('assets/stefania_mak_icon.png'),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 15),
              child: Text(
                'Stefania Mak',
                style: TextStyle(
                    // fontFamily: 'Grenze',
                    fontSize: 25.0,
                    fontWeight: FontWeight.bold,
                    color: _lightMainColor),
              ),
            ),
            Text(
              'Flutter App Developer',
              style: TextStyle(
                  // fontFamily: 'Turret',
                  fontSize: 15.0,
                  color: _lightMainColor,
                  letterSpacing: 2.5),
            ),
            Padding(
              padding: const EdgeInsets.all(25.0),
              child: SizedBox(
                height: 20.0,
                // width: 110.0,
                child: Divider(
                  color: Colors.grey[200],
                ),
              ),
            ),
            Padding(
              padding: EdgeInsets.symmetric(horizontal: 10),
              child: Card(
                color: _lightMainColor,
                child: ListTile(
                    leading: Icon(
                      Icons.email,
                      color: Colors.black,
                    ),
                    title: Text(
                      'stefania.mak.project@hotmail.com',
                      style: TextStyle(color: Colors.black),
                    )),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

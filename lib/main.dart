import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Steph',
      theme: ThemeData(
        primarySwatch: Colors.red,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Stefania Mak'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    // return Scaffold(
    //   appBar: AppBar(
    //     title: Text(widget.title),
    //   ),
    //   body: Center(
    //     child: Column(
    //       mainAxisAlignment: MainAxisAlignment.center,
    //       children: <Widget>[
    //         Text(
    //           'This will be my page!',
    //         ),
    //       ],
    //     ),
    //   ),
    // );
    Color _darkMainColor = Colors.white10;
    Color _lightMainColor = Colors.white;
    double windowWidth = MediaQuery.of(context).size.width;
    print('windowWidth: $windowWidth');
    return MaterialApp(
      home: Scaffold(
        backgroundColor: Color(0xFF1b1c1c),
        body: Center(
          child: Container(
            width: windowWidth > 800 ? 800.0 : windowWidth,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
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
                // Card(
                //   margin:
                //       EdgeInsets.symmetric(horizontal: 80.0, vertical: 13.0),
                //   color: _lightMainColor,
                //   child: ListTile(
                //       leading: Icon(
                //         Icons.phone,
                //         color: Colors.black,
                //       ),
                //       title: Text(
                //         '+30 123 456 7890',
                //         style: TextStyle(color: Colors.black),
                //       )),
                // ),
                Card(
                  margin: EdgeInsets.symmetric(horizontal: 80.0),
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
              ],
            ),
          ),
        ),
      ),
    );
  }
}

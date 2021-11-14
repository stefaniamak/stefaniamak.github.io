import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/smooth_scrolling.dart';

class MyPage extends StatelessWidget {
  static const String route = '/';

  @override
  Widget build(BuildContext context) {
    var controller = ScrollController();
    return ParallaxPage();
    return Scaffold(
      body: SmoothScrolling(
        controller: controller,
        child: SingleChildScrollView(
          controller: controller,
          physics:
              kIsWeb ? NeverScrollableScrollPhysics() : BouncingScrollPhysics(),
          child: Container(
            height: MediaQuery.of(context).size.height + 500,
            width: double.infinity,
            color: Colors.white,
            child: Center(child: Text('Under Construction.')),
          ),
        ),
      ),
    );
  }
}

class ParallaxPage extends StatefulWidget {
  final Widget rest;

  const ParallaxPage({Key key, this.rest}) : super(key: key);

  @override
  _ParallaxPageState createState() => _ParallaxPageState();
}

class _ParallaxPageState extends State<ParallaxPage> {
  double pageScrollValue = 0;
  double letterValue = 100;
  var controller = ScrollController();

  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    controller.addListener(() {
      // setState(() {
      pageScrollValue = controller.position.pixels;
      // });
    });
  }

  @override
  Widget build(BuildContext context) {
    var md = MediaQuery.of(context);
    // pageScrollValue = controller.position.pixels;
    return Scaffold(
      body: NotificationListener(
        onNotification: (v) {
          // todo
          if (v is ScrollUpdateNotification) {
            // setState(() {
            // pageScrollValue = pageScrollValue - v.scrollDelta! / 3;
            // pageScrollValue = pageScrollValue - v.scrollDelta;
            // pageScrollValue = controller.position.pixels;
            // controller.jumpTo(pageScrollValue);
            print('controller.position.pixels: ${controller.position.pixels}');
            // });
          }

          return true;
        },
        child: SmoothScrolling(
          controller: controller,
          child: Stack(
            children: [
              Test(
                md: md,
                controller: controller,
              ),
//               Positioned(
//                 left: 0,
//                 right: 0,
//                 top: pageScrollValue + md.size.height * 0.45,
//                 child: Container(
//                   height: md.size.height * 1.2,
//                   color: Colors.white,
//                   child: Center(
//                     child: Row(
//                       children: [
//                         SizedBox(
//                           width: md.size.width * 0.1,
//                         ),
//                         Text(
//                           '''
// We are Dynamic;
// a photography & design
// studio that prides itself on
// high contrast works from all walks of culture,
// background, and life.''',
//                           style: TextStyle(
//                             fontSize: (md.size.width / 6).clamp(16, 46),
//                             height: 0.85,
//                             color: Colors.grey,
//                             fontWeight: FontWeight.bold,
//                           ),
//                         ),
//                       ],
//                     ),
//                   ),
//                 ),
//               ),
              Positioned(
                right: md.size.width * 0.125,
                top: md.size.height * 0.4,
                child: Text(
                  '''Dynamic
                      Studios'''
                      .toUpperCase(),
                  style: TextStyle(
                    fontSize: (md.size.width / 6).clamp(70, 150),
                    height: 0.85,
                    fontWeight: FontWeight.bold,
                  ),
                  textAlign: TextAlign.right,
                ),
              ),

              // Positioned(
              //   left: 0,
              //   top: pageScrollValue + 50,
              //   child: Container(
              //     width: md.size.width,
              //     height: 100,
              //     color: Colors.green,
              //   ),
              // ),

              // Container(
              //   height: md.size.height * 0.45 + md.size.height * 0.9,
              // ),
              // // Container(
              // //   height: md.size.height,
              // //   color: Colors.white,
              // //   child: Text('This is a test '),
              // // ),
              // Container(
              //   height: md.size.height * 0.8,
              //   child: Image.network(
              //     'https://scontent.fskg3-1.fna.fbcdn.net/v/t1.6435-9/227779153_4114045565297432_1171332811753549550_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=s8bOaB5GmmoAX9WzQiE&tn=kMVdjguRRGkPK8CN&_nc_ht=scontent.fskg3-1.fna&oh=25fd5ca17911c0f783b316ee32a04889&oe=619F6CC2',
              //     height: md.size.height * 0.45,
              //     width: md.size.width,
              //     fit: BoxFit.cover,
              //   ),
              // ),
              // Container(
              //   height: md.size.height * 0.4,
              //   color: Colors.white.withOpacity(0.7),
              // ),
              // Container(
              //   height: md.size.height * 5,
              //   color: Colors.white,
              // ),
              ListView(
                controller: controller,
                physics: kIsWeb
                    ? NeverScrollableScrollPhysics()
                    : BouncingScrollPhysics(),
                children: [
                  Container(
                    height: md.size.height * 0.45 + md.size.height * 0.9,
                  ),
                  // Container(
                  //   height: md.size.height,
                  //   color: Colors.white,
                  //   child: Text('This is a test '),
                  // ),
                  Container(
                    height: md.size.height * 0.8,
                    child: Image.network(
                      'https://scontent.fskg3-1.fna.fbcdn.net/v/t1.6435-9/227779153_4114045565297432_1171332811753549550_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=s8bOaB5GmmoAX9WzQiE&tn=kMVdjguRRGkPK8CN&_nc_ht=scontent.fskg3-1.fna&oh=25fd5ca17911c0f783b316ee32a04889&oe=619F6CC2',
                      height: md.size.height * 0.45,
                      width: md.size.width,
                      fit: BoxFit.cover,
                    ),
                  ),
                  Container(
                    height: md.size.height * 0.4,
                    color: Colors.white.withOpacity(0.7),
                  ),
                  Container(
                    height: md.size.height * 5,
                    color: Colors.white,
                  ),
                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}

class Test extends StatefulWidget {
  const Test({
    Key key,
    @required this.md,
    this.controller,
  }) : super(key: key);

  final MediaQueryData md;
  final ScrollController controller;

  @override
  _TestState createState() => _TestState();
}

class _TestState extends State<Test> {
  var pageScrollValue = 0.0;
  @override
  void initState() {
    // TODO: implement initState
    super.initState();

    widget.controller.addListener(() {
      setState(() {
        pageScrollValue = -widget.controller.position.pixels;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(
      left: 0,
      top: pageScrollValue,
      child: Opacity(
        opacity: 0.5,
        child: Image.network(
          'https://scontent.fskg3-1.fna.fbcdn.net/v/t1.6435-9/223167117_4114046371964018_809327451424539040_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=vxNuTWMPk3EAX_eRCP9&_nc_ht=scontent.fskg3-1.fna&oh=56682216b2d11bb2c32d1af6b2f5f27d&oe=619D8840',
          height: widget.md.size.height * 0.45,
          width: widget.md.size.width,
          fit: BoxFit.cover,
        ),
      ),
      // child: Container(
      //   width: md.size.width,
      //   height: 100,
      //   color: Colors.red,
      // ),
    );
  }
}

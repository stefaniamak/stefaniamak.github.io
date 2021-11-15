import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/ui_kit/smooth_scrolling.dart';

class MyPage extends StatefulWidget {
  static const String route = '/';

  @override
  _MyPageState createState() => _MyPageState();
}

class _MyPageState extends State<MyPage> {
  var controller = ScrollController();

  @override
  Widget build(BuildContext context) {
    var md = MediaQuery.of(context);
    return ParallaxPage(
      controller: controller,
      behindParallaxes: buildTopBehindParallax(md),
      staticPage: buildStaticLetters(md),
      frontPage: buildFrontPage(md.size),
    );
  }

  Positioned buildStaticLetters(MediaQueryData md) {
    return Positioned(
      right: md.size.width * 0.125,
      top: md.size.height * 0.58 - 150,
      child: Text(
        '''Stefania
                  Mak'''
            .toUpperCase(),
        style: TextStyle(
          fontSize: (md.size.width / 6).clamp(70, 150),
          height: 0.85,
          fontWeight: FontWeight.bold,
        ),
        textAlign: TextAlign.right,
      ),
    );
  }

  ChildParallax buildTopBehindParallax(MediaQueryData md) {
    return ChildParallax(
      controller: controller,
      child: Column(
        children: [
          Opacity(
            opacity: 0.5,
            child: Image.network(
              'https://scontent.fskg3-1.fna.fbcdn.net/v/t1.6435-9/223167117_4114046371964018_809327451424539040_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=vxNuTWMPk3EAX_eRCP9&_nc_ht=scontent.fskg3-1.fna&oh=56682216b2d11bb2c32d1af6b2f5f27d&oe=619D8840',
              height: md.size.height * 0.58,
              width: md.size.width,
              fit: BoxFit.cover,
            ),
          ),
          Container(
            height: md.size.height * 1.2,
            width: md.size.width,
            color: Colors.white,
            child: Center(
              child: Row(
                children: [
                  SizedBox(
                    width: md.size.width * 0.1,
                  ),
                  Text(
                    '''
We are Dynamic;
a photography & design
studio that prides itself on
high contrast works from all walks of culture,
background, and life.''',
                    style: TextStyle(
                      fontSize: (md.size.width / 6).clamp(16, 46),
                      height: 0.85,
                      color: Colors.grey,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  List<Widget> buildFrontPage(Size mdSize) {
    return [
      Container(
        height: mdSize.height * 0.45 + mdSize.height * 0.9,
      ),
      Container(
        height: mdSize.height * 0.8,
        child: Image.network(
          'https://scontent.fskg3-1.fna.fbcdn.net/v/t1.6435-9/227779153_4114045565297432_1171332811753549550_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=s8bOaB5GmmoAX9WzQiE&tn=kMVdjguRRGkPK8CN&_nc_ht=scontent.fskg3-1.fna&oh=25fd5ca17911c0f783b316ee32a04889&oe=619F6CC2',
          height: mdSize.height * 0.45,
          width: mdSize.width,
          fit: BoxFit.cover,
        ),
      ),
      Container(
        height: mdSize.height * 0.4,
        color: Colors.white.withOpacity(0.7),
      ),
      Container(
        height: mdSize.height * 5,
        color: Colors.white,
      ),
    ];
  }
}

class ParallaxPage extends StatelessWidget {
  final ScrollController controller;
  final ChildParallax behindParallaxes;
  final List<Widget> frontPage;
  final ChildParallax frontParallaxes;
  final Positioned staticPage;

  const ParallaxPage({
    @required this.controller,
    this.behindParallaxes,
    this.frontPage = const [],
    this.frontParallaxes,
    Key key,
    @required this.staticPage,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    var md = MediaQuery.of(context);
    return Scaffold(
      body: SmoothScrolling(
        controller: controller,
        child: Stack(
          children: [
            if (behindParallaxes != null) behindParallaxes,
            staticPage,
            ListView(
              controller: controller,
              physics: kIsWeb
                  ? NeverScrollableScrollPhysics()
                  : BouncingScrollPhysics(),
              children: frontPage,
            ),
            if (frontParallaxes != null) frontParallaxes,
          ],
        ),
      ),
    );
  }
}

class ChildParallax extends StatefulWidget {
  const ChildParallax({
    Key key,
    @required this.controller,
    @required this.child,
    this.speed = 1.0,
  }) : super(key: key);

  final ScrollController controller;
  final Widget child;
  final double speed;

  @override
  _ChildParallaxState createState() => _ChildParallaxState();
}

class _ChildParallaxState extends State<ChildParallax> {
  var pageScrollValue = 0.0;

  @override
  void initState() {
    super.initState();
    widget.controller.addListener(() {
      setState(() {
        pageScrollValue = -widget.controller.position.pixels * widget.speed;
      });
    });
  }

  @override
  Widget build(BuildContext context) {
    return Positioned(left: 0, top: pageScrollValue, child: widget.child);
  }
}

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
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
      right: 0, // md.size.width / 2 - (md.size.width / 4),
      left: 0,
      top: md.size.height * 0.58 - 150,
      child: Text(
        'Stefania Mak'.toUpperCase(),
        style: TextStyle(
          fontSize: (md.size.width / 10).clamp(70, 150) * 1.0,
          height: 0.85,
          fontWeight: FontWeight.bold,
        ),
        textAlign: TextAlign.center,
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
              child:
                  // Image.network(
                  //   'https://scontent.fskg3-1.fna.fbcdn.net/v/t39.30808-6/227504455_4114046375297351_5138609006307839989_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=730e14&_nc_ohc=JusT-4op9j4AX91Vkuv&_nc_ht=scontent.fskg3-1.fna&oh=00_AT-jGtZd-ZKjDaYE7TdX0TEmVEH-F1CRf5parzUzehMOIQ&oe=627DCA4E',
                  //   height: md.size.height * 0.48,
                  //   width: md.size.width,
                  //   fit: BoxFit.cover,
                  // ),
                  Image.asset(
                'escalators.jpg',
                height: md.size.height * 0.48,
                width: md.size.width,
                fit: BoxFit.cover,
              )
              //     AssetImage(
              //   'assets/stefania_mak_icon.png',
              // ),
              ),
          Container(
            height: md.size.height * 1.2,
            width: md.size.width,
            color: Colors.white,
            child: Center(
              child: Row(
                children: [
                  // SizedBox(
                  //   width: md.size.width * 0.1,
                  // ),
                  Expanded(
                    child: Text(
                      '* software dev & photographer *',
                      textAlign: TextAlign.center,
                      style: TextStyle(
                        fontSize: (md.size.width / 10).clamp(16, 46) * 1.0,
                        height: 0.85,
                        color: Colors.grey,
                        fontWeight: FontWeight.bold,
                      ),
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
        child:
            // Image.network(
            //   'https://scontent.fskg3-1.fna.fbcdn.net/v/t39.30808-6/273589685_1359490084481321_3750682639863942078_n.jpg?_nc_cat=104&ccb=1-6&_nc_sid=0debeb&_nc_ohc=L55xDC2Kj3EAX-ehLHh&_nc_ht=scontent.fskg3-1.fna&oh=00_AT8td-qpFLF8GH25CsFJxnO6bmo1ATFHQ9NrgUw-UEu7OA&oe=627DD0CF',
            //   height: mdSize.height * 0.45,
            //   width: mdSize.width,
            //   fit: BoxFit.cover,
            // ),
            Image.asset(
          'vi.jpg',
          height: MediaQuery.of(context).size.height * 0.48,
          width: MediaQuery.of(context).size.width,
          fit: BoxFit.cover,
        ),
      ),
      Stack(
        children: [
          Container(
            height: mdSize.height * 0.4,
            color: Colors.white.withOpacity(0.9),
          ),
          Positioned(
            left: 0,
            right: 0,
            // top: 0,
            bottom: 0,
            child: Text(
              'Site is under construction.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: (mdSize.width / 10).clamp(16, 46) * 1.0,
                height: 0.85,
                color: Colors.grey,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
      Stack(
        children: [
          Container(
            height: mdSize.height * 0.5,
            color: Colors.white,
          ),
          Positioned(
            top: mdSize.height * 0.15,
            left: mdSize.width * 0.15,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                FooterText('* Footer stuff. *'),
                // SizedBox(height: 8),
                FooterText('links', hyperlinks: LinkTree.route),
                // FooterText('2022'),
              ],
            ),
          ),
          Positioned(
            bottom: 10,
            right: 0,
            left: 0,
            child: Text(
              '2022 | Stefania Mak',
              style: TextStyle(
                color: Color(0xFFBDBDBD).withOpacity(0.5),
              ),
              textAlign: TextAlign.center,
            ),
          ),
        ],
      ),
    ];
  }
}

class FooterText extends StatelessWidget {
  final String text;
  final String hyperlinks;

  const FooterText(
    this.text, {
    this.hyperlinks,
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    bool hasHyperlink = hyperlinks != null;
    return InkWell(
      onTap:
          hasHyperlink ? () => Navigator.pushNamed(context, hyperlinks) : null,
      child: Container(
        padding: EdgeInsets.only(
          bottom: 0.2, // Space between underline and text
        ),
        decoration: BoxDecoration(
          border: Border(
            bottom: BorderSide(
              color: hasHyperlink ? Colors.grey : Colors.transparent,
              width: 1.0,
            ), // Underline thickness
          ),
        ),
        child: Text(
          text,
          textAlign: TextAlign.center,
          style: TextStyle(
            fontSize:
                (MediaQuery.of(context).size.width / 6).clamp(8, 16) * 1.0,
            height: 1.4,
            color: Colors.grey,
            fontWeight: FontWeight.bold,
            // decoration: TextDecoration.underline,
          ),
        ),
      ),
    );
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

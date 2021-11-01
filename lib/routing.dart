import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:stefaniamak/main.dart';
import 'package:stefaniamak/pages/home_page.dart';

// void main() {
//   runApp(App());
// }

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      title: "Stefania Mak",
      routerDelegate: HomeRouterDelegate(),
      routeInformationParser: HomeRouteInformationParser(),
    );
  }
}

// class App extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       debugShowCheckedModeBanner: false,
//       builder: (context, child) => HomePage1(child: child),
//       onGenerateRoute: RouteGenerator.generateRoute,
//       initialRoute: RouteNames.mainPage,
//     );
//   }
// }

class HomePage extends StatelessWidget {
  final Widget child;

  const HomePage({Key key, this.child, this.onTapped}) : super(key: key);
  final Function onTapped;

  @override
  Widget build(BuildContext context) {
    // onTapped();
    print('home page runs');
    return Scaffold(
      body: child,
    );
  }
}

class RouteNames {
  static const String mainPage = '/home';
  static const String linksPage = '/links';
}

// class RouteGenerator {
//   static Route<dynamic> generateRoute(RouteSettings settings) {
//     switch (settings.name) {
//       case RouteNames.mainPage:
//         return _GeneratePageRoute(
//             widget: HomePage2(), routeName: settings.name);
//       case RouteNames.linksPage:
//         return _GeneratePageRoute(
//             widget: PageSetup(controller: ScrollController()),
//             routeName: settings.name);
//       default:
//         return _GeneratePageRoute(
//             widget: HomePage2(), routeName: settings.name);
//     }
//   }
// }
//
// class _GeneratePageRoute extends PageRouteBuilder {
//   final Widget widget;
//   final String routeName;
//   _GeneratePageRoute({this.widget, this.routeName})
//       : super(
//           settings: RouteSettings(name: routeName),
//           pageBuilder: (BuildContext context, Animation<double> animation,
//               Animation<double> secondaryAnimation) {
//             return widget;
//           },
//           transitionDuration: Duration(milliseconds: 500),
//           transitionsBuilder: (BuildContext context,
//               Animation<double> animation,
//               Animation<double> secondaryAnimation,
//               Widget child) {
//             return SlideTransition(
//               textDirection: TextDirection.rtl,
//               position: Tween<Offset>(
//                 begin: Offset(1.0, 0.0),
//                 end: Offset.zero,
//               ).animate(animation),
//               child: child,
//             );
//           },
//         );
// }

class HomeRoutePath {
  final String pathName;
  final bool isUnkown;

  HomeRoutePath.home()
      : pathName = null,
        isUnkown = false;

  HomeRoutePath.otherPage(this.pathName) : isUnkown = false;

  HomeRoutePath.unKown()
      : pathName = null,
        isUnkown = true;

  bool get isHomePage => pathName == null;
  bool get isOtherPage => pathName != null;
}

class HomeRouteInformationParser extends RouteInformationParser<HomeRoutePath> {
  @override
  Future<HomeRoutePath> parseRouteInformation(
      RouteInformation routeInformation) async {
    final uri = Uri.parse(routeInformation.location);

    print('uri.pathSegments.length: ${uri.pathSegments.length}');
    if (uri.pathSegments.length == 0) {
      return HomeRoutePath.home();
    }

    if (uri.pathSegments.length == 1) {
      final pathName = uri.pathSegments.elementAt(0).toString();
      if (pathName == null || pathName != 'links')
        return HomeRoutePath.unKown();
      return HomeRoutePath.otherPage(pathName);
    }

    return HomeRoutePath.unKown();
  }

  @override
  RouteInformation restoreRouteInformation(HomeRoutePath homeRoutePath) {
    print('homeRoutePath.isUnkown: ${homeRoutePath.isUnkown}');
    print('homeRoutePath.isHomePage: ${homeRoutePath.isHomePage}');
    print('homeRoutePath.isOtherPage: ${homeRoutePath.isOtherPage}');
    if (homeRoutePath.isUnkown) return RouteInformation(location: '/error');
    if (homeRoutePath.isHomePage) return RouteInformation(location: '/');
    if (homeRoutePath.isOtherPage)
      return RouteInformation(location: '/${homeRoutePath.pathName}');

    return null;
  }
}

class HomeRouterDelegate extends RouterDelegate<HomeRoutePath>
    with ChangeNotifier, PopNavigatorRouterDelegateMixin<HomeRoutePath> {
  String pathName;
  bool isError = false;

  @override
  GlobalKey<NavigatorState> get navigatorKey => GlobalKey<NavigatorState>();

  @override
  HomeRoutePath get currentConfiguration {
    print('pathname: $pathName');

    if (isError) return HomeRoutePath.unKown();

    if (pathName == null) return HomeRoutePath.home();

    return HomeRoutePath.otherPage(pathName);
  }

  void onTapped(String path) {
    pathName = path;
    print(pathName);
    notifyListeners();
  }

  @override
  Widget build(BuildContext context) {
    return Navigator(
      key: navigatorKey,
      pages: [
        MaterialPage(
          key: ValueKey('HomePage'),
          child: HomePage(
            child: HomePage2(),
            onTapped: (String path) {
              pathName = path;
              notifyListeners();
            },
          ),
        ),
        if (isError)
          MaterialPage(key: ValueKey('UnknownPage'), child: UnkownPage())
        else if (pathName != null)
          MaterialPage(
            key: ValueKey(pathName),
            child: PageHandle(
              pathName: pathName,
            ),
          )
      ],
      onPopPage: (route, result) {
        return false;

        if (!route.didPop(result)) return false;

        pathName = null;
        isError = false;
        notifyListeners();

        return true;
      },
    );
  }

  @override
  Future<void> setNewRoutePath(HomeRoutePath homeRoutePath) async {
    if (homeRoutePath.isUnkown) {
      pathName = null;
      isError = true;
      return;
    }

    print('homeRoutePath.isOtherPage: ${homeRoutePath.isOtherPage}');
    print('homeRoutePath.pathName: ${homeRoutePath.pathName}');
    if (homeRoutePath.isOtherPage) {
      if (homeRoutePath.pathName != null) {
        pathName = homeRoutePath.pathName;
        isError = false;
        return;
      } else {
        isError = true;
        return;
      }
    } else {
      pathName = null;
    }
  }
}

class PageHandle extends StatelessWidget {
  final String pathName;

  const PageHandle({Key key, this.pathName}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    print('page handle runs with pathname: $pathName');
    return PageSetup(controller: ScrollController());
  }
}

class UnkownPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        height: MediaQuery.of(context).size.height,
        width: double.infinity,
        color: Colors.white,
        child: Center(child: Text('Error page.')),
      ),
    );
  }
}

// class UrlHandler extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp.router(
//       title: "Stefania Mak",
//       routerDelegate: UrlHandlerRouterDelegate(),
//       routeInformationParser: UrlHandlerInformationParser(),
//     );
//   }
// }
//
// class NavigationState {
//   final int value;
//   NavigationState(this.value);
// }
//
// final GlobalKey<NavigatorState> _urlHandlerRouterDelegateNavigatorKey =
//     GlobalKey<NavigatorState>();
//
// class UrlHandlerRouterDelegate extends RouterDelegate<NavigationState>
//     with ChangeNotifier, PopNavigatorRouterDelegateMixin {
//   int count = 0;
//
//   @override
//   Widget build(BuildContext context) {
//     return Navigator(
//       pages: [
//         MaterialPage(child: MyHomePage()),
//         // MaterialPage(child: HomePage()),
//       ],
//       onPopPage: (_, __) {
//         // We don't handle routing logic here, so we just return false
//         return false;
//       },
//     );
//   }
//
//   @override
//   GlobalKey<NavigatorState> get navigatorKey =>
//       _urlHandlerRouterDelegateNavigatorKey;
//
//   // Navigation state to app state
//   @override
//   Future<void> setNewRoutePath(NavigationState navigationState) {
//     // If a value which is not a number has been entered,
//     // navigationState.value is null so we just notifyListeners
//     // without changing the app state to change the value of the url
//     // to its previous value
//     if (navigationState.value == null) {
//       notifyListeners();
//       return null;
//     }
//
//     // Get the new count, which is navigationState.value//10
//     count = (navigationState.value / 10).floor();
//
//     // If the navigationState.value was not a multiple of 10
//     // the url is not equal to count*10, therefore the url isn't right
//     // In that case, we notifyListener in order to get the valid NavigationState
//     // from the new app state
//     if (count * 10 != navigationState.value) notifyListeners();
//     return null;
//   }
//
//   // App state to Navigation state, triggered by notifyListeners()
//   @override
//   NavigationState get currentConfiguration => NavigationState(count * 10);
//
//   void increase() {
//     count++;
//     notifyListeners();
//   }
// }
//
// class UrlHandlerInformationParser
//     extends RouteInformationParser<NavigationState> {
//   // Url to navigation state
//   @override
//   Future<NavigationState> parseRouteInformation(
//       RouteInformation routeInformation) async {
//     return NavigationState(
//         int.tryParse(routeInformation.location.substring(1)));
//   }
//
//   // Navigation state to url
//   @override
//   RouteInformation restoreRouteInformation(NavigationState navigationState) {
//     return RouteInformation(location: '/${navigationState.value}');
//   }
// }
//
// class MyHomePage extends StatefulWidget {
//   MyHomePage({Key key, this.count, this.increase}) : super(key: key);
//   final int count;
//   final VoidCallback increase;
//
//   @override
//   _MyHomePageState createState() => _MyHomePageState();
// }
//
// class _MyHomePageState extends State<MyHomePage> {
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Counter App'),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             Text(
//               'You have pushed the button this many times:',
//             ),
//             Text(
//               '${widget.count}',
//               style: Theme.of(context).textTheme.headline4,
//             ),
//           ],
//         ),
//       ),
//       floatingActionButton: FloatingActionButton(
//         onPressed: () {
//           widget.increase();
//         },
//         tooltip: 'Counter',
//         child: Icon(Icons.add),
//       ),
//     );
//   }
// }

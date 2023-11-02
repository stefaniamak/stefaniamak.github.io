import 'package:flutter/cupertino.dart';
import 'package:go_router/go_router.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/pages/my_page.dart';

class MyRouter {
  MyRouter();

  dynamic get router => GoRouter(
        routes: [
          GoRoute(
            path: '/',
            builder: (context, state) => MyPage(),
            routes: [
              GoRoute(
                path: 'links',
                pageBuilder: (context, state) {
                  return _linkTreeRoute(state);
                },
              ),
            ],
          ),
          GoRoute(
            path: LinkTree.route,
            pageBuilder: (context, state) {
              return _linkTreeRoute(state);
            },
          ),
          // GoRoute(
          //   path: LinkTree.route,
          //   builder: (context, state) => LinkTree(),
          // ),
        ],
      );

  CustomTransitionPage _linkTreeRoute(GoRouterState state) {
    return CustomTransitionPage(
      key: state.pageKey,
      child: LinkTree(),
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        return FadeTransition(
          opacity: CurveTween(curve: Curves.easeInOutCirc).animate(animation),
          child: child,
        );
      },
    );
  }
}

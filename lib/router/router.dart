import 'package:go_router/go_router.dart';
import 'package:stefaniamak/pages/link_tree/link_tree.dart';
import 'package:stefaniamak/pages/my_page.dart';

class MyRouter {
  MyRouter();

  final router = GoRouter(
    routes: [
      GoRoute(
        path: '/',
        builder: (context, state) => MyPage(),
      ),
      GoRoute(
        path: LinkTree.route,
        builder: (context, state) => LinkTree(),
      ),
    ],
  );
}

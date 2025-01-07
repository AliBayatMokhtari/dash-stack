import { createHashRouter, Navigate } from "react-router-dom";
import Root from "@/components/root";
import paths from "./paths";

// NOTE: All pages should be default exported
const lazyRoute = (importFn) => async () => {
  const Page = await importFn();
  return {
    Component: Page.default,
  };
};

// NOTE: could be moved to utils folder in later and more complex usages
const replaceWith = (withPath) => () => <Navigate to={withPath} replace />;

const router = createHashRouter(
  [
    {
      path: paths.index,
      Component: Root,
      children: [
        {
          path: "/",
          lazy: lazyRoute(() => import("@/components/layout")),
          children: [
            {
              index: true,
              Component: replaceWith(paths.dashboard),
            },
            {
              path: paths.dashboard,
              lazy: lazyRoute(() => import("@/pages/dashboard")),
            },
          ],
        },
        {
          path: paths.auth.index,
          lazy: lazyRoute(() => import("@/components/layout/auth")),
          children: [
            {
              index: true,
              Component: replaceWith(paths.auth.signIn),
            },
            {
              path: paths.auth.signIn,
              lazy: lazyRoute(() => import("@/pages/auth/sign-in")),
            },
          ],
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  }
);

export default router;

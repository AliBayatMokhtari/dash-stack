import { createHashRouter, Navigate } from "react-router-dom";
import Root from "@/components/root";
import Layout from "@/components/layout";
import paths from "./paths";
import withCredentials from "@/components/hoc/with-credentials";
import { replaceWith } from "@/utils/router";

// NOTE: All pages should be default exported
const lazyRoute = (importFn) => async () => {
  const Page = await importFn();
  return {
    Component: Page.default,
  };
};

const router = createHashRouter(
  [
    {
      path: paths.index,
      Component: Root,
      children: [
        {
          path: "/",
          Component: withCredentials(Layout),
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
        {
          path: "*",
          lazy: lazyRoute(() => import("@/pages/not-found")),
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

import { createHashRouter } from "react-router-dom";
import Root from "@/components/root";
import paths from "./paths";

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
          lazy: lazyRoute(() => import("@/components/layout")),
          children: [
            {
              index: true,
              lazy: lazyRoute(() => import("@/pages/home")),
            },
            {
              path: paths.dashboard,
              lazy: lazyRoute(() => import("@/pages/dashboard")),
            },
          ],
        },
        {
          path: paths.auth,
          lazy: lazyRoute(() => import("@/components/layout/auth")),
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

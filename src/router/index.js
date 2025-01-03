import { createHashRouter } from "react-router-dom";
import Root from "../components/root";
import Dashboard from "../pages/dashboard";
import Home from "../pages/home";
import paths from "./paths";

const router = createHashRouter([
  {
    path: paths.index,
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: paths.dashboard,
        Component: Dashboard,
      },
    ],
  },
]);

export default router;

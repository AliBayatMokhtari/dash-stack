import { RouterProvider as ReactRouterProvider } from "react-router-dom";
import router from "../../../router";

const RouterProvider = () => {
  return (
    <ReactRouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};

export default RouterProvider;

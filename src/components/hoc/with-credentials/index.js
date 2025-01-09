import paths from "@/router/paths";
import { Navigate } from "react-router-dom";

const withCredentials = (Component) => {
  const WrapperComponent = () => {
    const credentials = localStorage.getItem("credentials");

    if (!credentials) return <Navigate to={paths.auth.index} replace />;

    return <Component />;
  };

  return WrapperComponent;
};

export default withCredentials;

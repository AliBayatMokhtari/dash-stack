import { Navigate } from "react-router-dom";
import paths from "@/router/paths";

const Home = () => {
  return <Navigate to={paths.dashboard} replace />;
};

export default Home;

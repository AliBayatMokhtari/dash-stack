import { Outlet } from "react-router-dom";
import useStyles from "./auth-layout.styles";

const AuthLayout = () => {
  const cls = useStyles();

  return (
    <div className={cls.container}>
      <Outlet />
    </div>
  );
};

export default AuthLayout;

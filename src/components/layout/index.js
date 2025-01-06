import { Outlet } from "react-router-dom";
import SideBar from "../side-bar";
import useStyles from "./layout.styles";
import AppBar from "../app-bar";

const Layout = () => {
  const cls = useStyles();

  return (
    <div className={cls.container}>
      <SideBar />
      <div className={cls.contentContainer}>
        <AppBar />
        <div className={cls.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

import { Outlet } from "react-router-dom";
import SideBar from "@/components/side-bar";
import AppBar from "@/components/app-bar";
import useStyles from "./layout.styles";

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

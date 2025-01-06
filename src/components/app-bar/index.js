import useStyles from "./app-bar.styles";
import IconButton from "../common/icon-button";
import hamburgerMenuIcon from "../../assets/images/icons/hamburger-menu.png";
import NotificationBell from "../notification-bell";

const AppBar = () => {
  const cls = useStyles();
  return (
    <div className={cls.container}>
      <div className={cls.firstContainer}>
        <IconButton src={hamburgerMenuIcon} />
        <input type="text" className={cls.searchInput} placeholder="Search" />
      </div>
      <div>
        <NotificationBell count={6} />
      </div>
    </div>
  );
};

export default AppBar;

import notificationBell from "../../assets/images/icons/notification-bell.png";
import Badge from "../common/badge";
import useStyles from "./notification-bell.styles";

const NotificationBell = ({ count }) => {
  const cls = useStyles();

  return (
    <div className={cls.container}>
      <Badge title={count}>
        <img
          src={notificationBell}
          alt="notification-bell"
          width={24}
          height={26}
        />
      </Badge>
    </div>
  );
};

export default NotificationBell;

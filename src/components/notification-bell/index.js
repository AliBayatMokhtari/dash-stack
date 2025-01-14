import Badge from "@/components/common/badge";
import { Popover } from "react-tiny-popover";
import notificationBell from "@/assets/images/icons/notification-bell.png";
import useStyles from "./notification-bell.styles";
import { useState } from "react";

const NotificationBell = ({ count }) => {
  const cls = useStyles();
  const [open, setOpen] = useState(false);

  return (
    <Popover
      isOpen={open}
      positions="bottom"
      align="center"
      onClickOutside={() => setOpen(false)}
      content={
        <div className={cls.popoverContainer}>
          <div className={cls.notification}>Notification</div>
        </div>
      }
    >
      <div className={cls.container} onClick={() => setOpen(true)}>
        <Badge title={count}>
          <img
            src={notificationBell}
            alt="notification-bell"
            width={24}
            height={26}
          />
        </Badge>
      </div>
    </Popover>
  );
};

export default NotificationBell;

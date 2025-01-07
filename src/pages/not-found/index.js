import { Link } from "react-router-dom";
import useStyles from "./not-found.styles";
import notFoundImage from "@/assets/images/not-found.png";
import paths from "@/router/paths";

const NotFound = () => {
  const cls = useStyles();

  return (
    <div className={cls.page}>
      <div className={cls.container}>
        <img src={notFoundImage} className={cls.img} />
        <div className={cls.footer}>
          <h1 className={cls.header}>Looks like you’ve got lost</h1>
          <Link to={paths.dashboard}>
            <button className={cls.back}>Back to Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

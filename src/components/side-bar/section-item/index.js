import clsx from "clsx";
import { Link, matchPath, useLocation } from "react-router-dom";
import useStyles from "./section-item.styles";

const SectionItem = ({ path, title }) => {
  const cls = useStyles();
  const { pathname } = useLocation();

  const isActive = matchPath(path, pathname);

  return (
    <Link to={path} className={cls.link}>
      <div className={cls.itemContainer}>
        <div className={clsx(cls.item, isActive && cls.active)}>{title}</div>
      </div>
    </Link>
  );
};

export default SectionItem;

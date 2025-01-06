import useStyles from "./badge.styles";

const Badge = ({ children, title }) => {
  const cls = useStyles();

  return (
    <div className={cls.container}>
      {children}
      <div className={cls.dot}>{title}</div>
    </div>
  );
};

export default Badge;

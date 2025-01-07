import useStyles from "./auth-layout.styles";

const AuthLayout = () => {
  const cls = useStyles();

  return <div className={cls.container}>Auth Layout</div>;
};

export default AuthLayout;

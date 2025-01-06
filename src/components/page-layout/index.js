import useStyles from "./page-layout.styles";

const Page = ({ children, title, actions = null }) => {
  const cls = useStyles();

  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <h1 className={cls.title}>{title}</h1>
        {actions}
      </div>
      <div className={cls.content}>{children}</div>
    </div>
  );
};

export default Page;

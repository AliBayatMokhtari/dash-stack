import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
  },
  content: {
    flexGrow: 1,
    padding: "1.875rem",
  },
});

export default useStyles;

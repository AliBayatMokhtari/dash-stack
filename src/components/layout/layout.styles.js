import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
  },
  contentContainer: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  content: {
    padding: "1.875rem",
    flexGrow: 1,
  },
});

export default useStyles;

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
  },
  content: {
    flexGrow: 1,
    background: "yellow",
  },
});

export default useStyles;

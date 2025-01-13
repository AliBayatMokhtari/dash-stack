import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: "2rem",
    color: theme.colorPalette.black,
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    marginTop: "1.875rem",
  },
}));

export default useStyles;

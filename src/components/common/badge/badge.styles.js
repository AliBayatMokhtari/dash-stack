import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    position: "relative",
  },
  dot: {
    position: "absolute",
    width: 18,
    height: 18,
    top: "-50%",
    right: "-50%",
    transform: "translateY(50%) translateX(-25%)",
    backgroundColor: theme.colorPalette.accent,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    fontSize: "0.75rem",
    color: theme.colorPalette.white,
  },
}));

export default useStyles;

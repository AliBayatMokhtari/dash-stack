import { hexWithOpacity } from "@/utils/color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colorPalette.white,
    padding: "1rem",
    borderRadius: "0.875rem",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1.8125rem",
  },
  header: {
    display: "flex",
    alignItems: "center",
  },
  grow: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    color: hexWithOpacity(theme.colorPalette.black, 70),
  },
  amount: {
    color: theme.colorPalette.black,
    fontSize: "1.75rem",
    fontWeight: "bold",
  },
  icon: {
    width: "3.75rem",
    height: "3.75rem",
  },
  description: {
    color: theme.colorPalette.black,
    fontSize: "1rem",
    fontWeight: 600,
  },
  scale: {
    color: ({ scale }) =>
      scale > 0
        ? theme.colorPalette.success
        : scale < 0
        ? theme.colorPalette.danger
        : "inherit",
  },
  scaleIcon: {
    width: "1.25rem",
    height: "0.75rem",
    marginRight: "0.625rem",
  },
}));

export default useStyles;

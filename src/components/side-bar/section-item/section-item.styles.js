import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  itemContainer: {
    paddingInline: "1.5rem",
    position: "relative",
    cursor: "pointer",
  },
  item: {
    fontWeight: 500,
    fontSize: "0.875rem",
    padding: "1rem",
    borderRadius: "0.375rem",
    overflow: "hidden",
  },
  active: {
    backgroundColor: theme.colorPalette.primary,
    color: theme.colorPalette.white,
    "&:before": {
      content: '""',
      position: "absolute",
      backgroundColor: theme.colorPalette.primary,
      top: 0,
      left: 0,
      width: 9,
      height: "100%",
      borderRadius: 4,
      transform: "translateX(-50%)",
    },
  },
}));

export default useStyles;

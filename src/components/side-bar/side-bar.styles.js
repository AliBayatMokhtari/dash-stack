import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: "100%",
    maxWidth: "240px",
    width: "100%",
    paddingTop: "1.5rem",
    backgroundColor: theme.colorPalette.white,
  },
  brandContainer: {
    textAlign: "center",
    fontSize: "1.25rem",
    fontWeight: 800,
  },
  dash: {
    color: theme.colorPalette.primary,
  },
  sectionContainer: {
    paddingTop: "1.875rem",
  },
  sectionTitleContainer: {
    paddingInline: "1.5rem",
    marginBlock: "1rem",
  },
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
    fontWeight: 600,
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

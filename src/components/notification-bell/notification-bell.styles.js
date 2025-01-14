import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    cursor: "pointer",
  },
  popoverContainer: {
    backgroundColor: theme.colorPalette.white,
    borderRadius: "0.875rem",
    paddingBlock: "0.875rem",
    width: "15.875rem",
    filter: `drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))`,
  },
  notification: {
    fontWeight: 600,
    fontSize: "0.9375rem",
    color: theme.colorPalette.darkGray,
    paddingBottom: "0.8125rem",
    paddingInline: "1.25rem",
    borderBottom: `1px solid ${theme.colorPalette.divider}`,
  },
}));

export default useStyles;

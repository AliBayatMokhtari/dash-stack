import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colorPalette.white,
    height: "4.375rem",
    display: "flex",
    alignItems: "center",
    paddingInline: "1.875rem",
    borderBottom: `1px solid ${theme.colorPalette.divider}`,
  },
  firstContainer: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    gap: "1.5rem",
  },
  searchInput: {
    backgroundColor: theme.colorPalette.background,
    outline: "none",
    border: "none",
    height: "2.375rem",
    borderRadius: "1.1875rem",
    paddingInline: "1.0625rem",
    fontSize: "0.875rem",
    maxWidth: "24.25rem",
    width: "100%",
    border: `1px solid ${theme.colorPalette.border}`,
    "&::placeholder": {
      color: theme.colorPalette.black,
      opacity: 0.5,
      fontFamily: "nunito-sans",
    },
  },
}));

export default useStyles;

import { hexWithOpacity } from "@/utils/color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    backgroundColor: theme.colorPalette.white,
    maxWidth: "39.375rem",
    maxHeight: "46rem",
    width: "100%",
    height: "100%",
    borderRadius: "1.5rem",
    padding: "5.625rem 3.5625rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    gap: "2.3125rem",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    gap: "0.9375rem",
  },
  title: {
    fontSize: "2rem",
  },
  subTitle: {
    fontWeight: 600,
    fontSize: "1.125rem",
    color: hexWithOpacity(theme.colorPalette.black, 80),
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  label: {
    color: hexWithOpacity(theme.colorPalette.black, 80),
    fontSize: "1.125rem",
  },
  formTextField: {
    width: "100%",
    marginTop: "0.9375rem",
    fontSize: "1.125rem",
    height: "3.5rem",
    outline: "none",
    borderRadius: "0.5rem",
    border: `1px solid ${theme.colorPalette.border}`,
    boxSizing: "border-box",
    padding: "1rem",
    backgroundColor: theme.colorPalette.background,
    "&:focus": {
      border: `2px solid ${theme.colorPalette.primary}`,
    },
    "&::placeholder": {
      fontSize: "1.125rem",
    },
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    marginTop: "1.5rem",
  },
  submitContainer: {
    maxWidth: "26.125rem",
    marginInline: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "1.125rem",
  },
  submit: {
    backgroundColor: hexWithOpacity(theme.colorPalette.primary, 90),
    border: "none",
    outline: "none",
    borderRadius: "0.5rem",
    width: "100%",
    height: "3.5rem",
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: theme.colorPalette.white,
    cursor: "pointer",
  },
  createAccount: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.375rem",
    fontSize: "1.125rem",
  },
  dontHaveAccount: {
    fontWeight: 600,
    color: hexWithOpacity(theme.colorPalette.black, 65),
  },
  createOne: {
    color: theme.colorPalette.link,
    fontWeight: "bold",
  },
}));

export default useStyles;

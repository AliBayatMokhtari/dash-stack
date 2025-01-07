import { createUseStyles } from "react-jss";
import authBackgroundImage from "@/assets/images/auth-background.jpeg";
import { hexWithOpacity } from "@/utils/color";

const useStyles = createUseStyles((theme) => ({
  page: {
    backgroundImage: `url(${authBackgroundImage})`,
    height: "100%",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: theme.colorPalette.white,
    maxWidth: "39.375rem",
    maxHeight: "46rem",
    width: "100%",
    height: "100%",
    borderRadius: "1.5rem",
    padding: "6.375rem",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "6.125rem",
  },
  img: {
    width: "24.375rem",
    height: "18.625rem",
  },
  footer: {
    display: "flex",
    flexDirection: "column",
    gap: "2.1875rem",
  },
  header: {
    fontSize: "2rem",
  },
  back: {
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
}));

export default useStyles;

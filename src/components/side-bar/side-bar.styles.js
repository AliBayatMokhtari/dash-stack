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
  sectionTitle: {
    fontSize: "0.75rem",
    opacity: 0.6,
    fontWeight: "bold",
  },
}));

export default useStyles;

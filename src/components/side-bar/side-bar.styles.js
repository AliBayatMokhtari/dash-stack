import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: "100%",
    maxWidth: "240px",
    width: "100%",
    backgroundColor: theme.colorPalette.white,
    display: "flex",
    flexDirection: "column",
  },
  brandContainer: {
    fontSize: "1.25rem",
    fontWeight: 800,
    height: "4.375rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  dash: {
    color: theme.colorPalette.primary,
  },
  sectionsContainer: {
    paddingTop: "0.6875rem",
    borderRight: `1px solid ${theme.colorPalette.divider}`,
    flexGrow: 1,
  },
  section: {},
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

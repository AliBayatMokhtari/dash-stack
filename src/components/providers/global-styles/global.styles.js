import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.colorPalette.background,
      padding: 0,
      margin: 0,
      fontSize: "16px",
      minHeight: "100vh",
      overflow: "hidden",
      fontFamily: "Nunito-Sans",
    },
    "#root": {
      height: "100vh",
      overflow: "hidden",
    },
  },
}));

export default useGlobalStyles;

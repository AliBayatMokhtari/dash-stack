import { createUseStyles } from "react-jss";

const useGlobalStyles = createUseStyles((theme) => ({
  "@font-face": [
    {
      fontFamily: "nunito-sans",
      src: "url(/fonts/nunito-sans-regular.ttf) format('truetype')",
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: "url(/fonts/nunito-sans-medium.ttf) format('truetype')",
      fontWeight: 500,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: "url(/fonts/nunito-sans-semi-bold.ttf) format('truetype')",
      fontWeight: 600,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: "url(/fonts/nunito-sans-bold.ttf) format('truetype')",
      fontWeight: 700,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: "url(/fonts/nunito-sans-extra-bold.ttf) format('truetype')",
      fontWeight: 800,
      fontStyle: "normal",
    },
  ],
  "@global": {
    body: {
      backgroundColor: theme.colorPalette.background,
      padding: 0,
      margin: 0,
      fontSize: "16px",
      minHeight: "100vh",
      overflow: "hidden",
      fontFamily: "nunito-sans",
    },
    "#root": {
      height: "100vh",
      overflow: "hidden",
    },
    input: {
      fontFamily: "nunito-sans",
      "&::placeholder": {
        fontFamily: "nunito-sans",
      },
    },
  },
}));

export default useGlobalStyles;

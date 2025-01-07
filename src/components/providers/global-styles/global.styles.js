import { createUseStyles } from "react-jss";
import regularFont from "@/assets/fonts/nunito-sans-regular.ttf";
import mediumFont from "@/assets/fonts/nunito-sans-medium.ttf";
import semiBoldFont from "@/assets/fonts/nunito-sans-semi-bold.ttf";
import boldFont from "@/assets/fonts/nunito-sans-bold.ttf";
import extraBoldFont from "@/assets/fonts/nunito-sans-extra-bold.ttf";

const useGlobalStyles = createUseStyles((theme) => ({
  "@font-face": [
    {
      fontFamily: "nunito-sans",
      src: `url(${regularFont}) format('truetype')`,
      fontWeight: 400,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: `url(${mediumFont}) format('truetype')`,
      fontWeight: 500,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: `url(${semiBoldFont}) format('truetype')`,
      fontWeight: 600,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: `url(${boldFont}) format('truetype')`,
      fontWeight: 700,
      fontStyle: "normal",
    },
    {
      fontFamily: "nunito-sans",
      src: `url(${extraBoldFont}) format('truetype')`,
      fontWeight: 800,
      fontStyle: "normal",
    },
  ],
  "@global": {
    "h1, h2, h3, h4, h5, h6, p": {
      margin: 0,
      padding: 0,
    },
    body: {
      backgroundColor: theme.colorPalette.background,
      padding: 0,
      margin: 0,
      fontSize: "16px",
      minHeight: "100vh",
      overflow: "hidden",
      fontFamily: "nunito-sans",
      color: theme.colorPalette.black,
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

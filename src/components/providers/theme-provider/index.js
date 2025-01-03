import { ThemeProvider as JssThemeProvider } from "react-jss";
import theme from "./theme";

const ThemeProvider = ({ children }) => {
  return <JssThemeProvider theme={theme}>{children}</JssThemeProvider>;
};

export default ThemeProvider;

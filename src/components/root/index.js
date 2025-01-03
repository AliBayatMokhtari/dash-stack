import ThemeProvider from "../providers/theme-provider";
import GlobalStyles from "../providers/global-styles";
import App from "../../App";

const Root = () => {
  return (
    <ThemeProvider>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </ThemeProvider>
  );
};

export default Root;

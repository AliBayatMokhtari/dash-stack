import ThemeProvider from "@/components/providers/theme-provider";
import GlobalStyles from "@/components/providers/global-styles";
import App from "@/App";

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

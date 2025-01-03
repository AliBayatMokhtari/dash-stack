import useGlobalStyles from "./global.styles";

const GlobalStyles = ({ children }) => {
  useGlobalStyles();

  return children;
};

export default GlobalStyles;

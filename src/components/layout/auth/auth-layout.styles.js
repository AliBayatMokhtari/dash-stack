import { createUseStyles } from "react-jss";
import authBackgroundImage from "@/assets/images/auth-background.jpeg";

const useStyles = createUseStyles({
  container: {
    backgroundImage: `url(${authBackgroundImage})`,
    height: "100%",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default useStyles;

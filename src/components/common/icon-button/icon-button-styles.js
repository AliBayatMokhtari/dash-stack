import { createUseStyles } from "react-jss";
import { hexWithOpacity } from "@/utils/color";

const useStyles = createUseStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    padding: 4,
    width: ({ width }) => width + 8,
    height: ({ height }) => height + 8,
    "&:hover": {
      backgroundColor: hexWithOpacity(theme.colorPalette.black, 10),
    },
  },
  btn: {
    outline: "none",
    border: "none",
    cursor: "pointer",
    backgroundColor: "transparent",
    height: ({ height }) => height + 1,
  },
}));

export default useStyles;

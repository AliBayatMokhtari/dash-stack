import paths from "@/router/paths";
import { replaceWith } from "@/utils/router";

const withCredentials = (Component) => {
  const WrapperComponent = () => {
    const credentials = localStorage.getItem("credentials");
    const Comp = credentials ? Component : replaceWith(paths.auth.index);

    return <Comp />;
  };

  return WrapperComponent;
};

export default withCredentials;

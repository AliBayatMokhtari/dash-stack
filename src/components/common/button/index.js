import useButtonStyles from "./button.styles";
import clsx from "clsx";

const Button = ({ className, ...restProps }) => {
  const cls = useButtonStyles();

  return <button className={clsx(cls.btn, className)} {...restProps} />;
};

export default Button;

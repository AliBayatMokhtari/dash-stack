import useStyles from "./icon-button-styles";

const IconButton = ({ src, alt, width = 25, height = 25, onClick }) => {
  const cls = useStyles({ width, height });

  return (
    <div className={cls.container}>
      <button className={cls.btn} onClick={onClick}>
        <img src={src} alt={alt} width={width} height={height} />
      </button>
    </div>
  );
};

export default IconButton;

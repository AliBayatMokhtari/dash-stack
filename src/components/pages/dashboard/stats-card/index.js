import useStyles from "./stats-card.styles";
import scaleUpIcon from "@/assets/images/icons/scale-up.png";
import scaleDownIcon from "@/assets/images/icons/scale-down.png";
import { NUMBER_TYPES } from "@/constants/index";

const StatsCard = ({ title, amount, icon, scale, from, type }) => {
  const cls = useStyles({ scale });

  return (
    <div className={cls.container}>
      <div className={cls.header}>
        <div className={cls.grow}>
          <span className={cls.title}>{title}</span>
          <span className={cls.amount}>
            {type === NUMBER_TYPES.MONEY && <span>$</span>}
            {amount}
          </span>
        </div>
        <div>
          <img src={icon} className={cls.icon} />
        </div>
      </div>
      <div className={cls.description}>
        <span className={cls.scale}>
          <img
            src={scale > 0 ? scaleUpIcon : scaleDownIcon}
            className={cls.scaleIcon}
          />
          <span>{scale}%</span>
        </span>{" "}
        {scale > 0 ? "Up" : "Down"} from {from}
      </div>
    </div>
  );
};

export default StatsCard;

import StatsCard from "../stats-card";
import useStyles from "./stats-cards.styles";

const StatsCards = ({ stats }) => {
  const cls = useStyles();

  return (
    <div className={cls.cards}>
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;

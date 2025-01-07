import Page from "@/components/page-layout";
import StatsCards from "@/components/pages/dashboard/stats-cards";
import usersIcon from "@/assets/images/icons/users.png";
import ordersIcon from "@/assets/images/icons/orders.png";
import salesIcon from "@/assets/images/icons/sales.png";
import pendingIcon from "@/assets/images/icons/pending.png";
import { NUMBER_TYPES } from "@/constants/index";

const Dashboard = () => {
  const stats = [
    {
      title: "Total User",
      amount: 40689,
      icon: usersIcon,
      type: NUMBER_TYPES.NUMBER,
      scale: 8.5,
      from: "yesterday",
    },
    {
      title: "Total Order",
      amount: 10293,
      icon: ordersIcon,
      type: NUMBER_TYPES.NUMBER,
      scale: 1.3,
      from: "past week",
    },
    {
      title: "Total Sales",
      amount: 89000,
      icon: salesIcon,
      type: NUMBER_TYPES.MONEY,
      scale: -4.3,
      from: "yesterday",
    },
    {
      title: "Total Pending",
      amount: 2040,
      icon: pendingIcon,
      type: NUMBER_TYPES.NUMBER,
      scale: 1.8,
      from: "yesterday",
    },
  ];

  return (
    <Page title="Dashboard">
      <StatsCards stats={stats} />
    </Page>
  );
};

export default Dashboard;

import quickStats from "@/data/quickStatsData";
import StatCard from "./StatsCard";

const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {quickStats.map((stat) => (
        <StatCard key={stat.id} stat={stat} />
      ))}
    </div>
  );
};

export default StatsGrid;

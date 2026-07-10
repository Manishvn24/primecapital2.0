
import StatsHeader from "./StatsHeader"
import StatsGrid from "./StatsGrid"

const QuickStats = () => {
  return (
    <section className="mt-12">
        <div className=" bg-[#0B2346] px-4 py-6 lg:px-8 lg:py-10">
          <StatsHeader />
          <div className="mt-6">
            <StatsGrid />
          </div>
        </div>
    </section>
  );
}
export default QuickStats
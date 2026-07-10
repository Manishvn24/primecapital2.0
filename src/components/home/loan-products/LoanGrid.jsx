import loanProductsData from "@/data/LoanCardData"
import LoanCard from "./LoanCard"

const LoanGrid = () => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
    >
      {loanProductsData.map((item, idx) => (
        <LoanCard key={idx} loan={item} />
      ))}
    </section>
  );
}
export default LoanGrid
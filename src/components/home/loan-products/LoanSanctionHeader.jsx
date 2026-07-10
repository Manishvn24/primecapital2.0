import SecondaryButton from "@/components/common/SecondaryButton";
import ViewAllButton from "./ViewAllButton";

const LoanSanctionHeader = () => {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#D4AF37]">
          Loan Solutions
        </p>
        <h2 className="text-4xl font-bold text-[#0B2346]">
          Find the Right Loan for Every Need
        </h2>
      </div>
      <ViewAllButton/>
    </div>
  );
}
export default LoanSanctionHeader
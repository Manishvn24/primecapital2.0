import { div } from "motion/react-client"
import FeatureList from "./FeatureList";

const WhyVNHeader = () => {
  return (
    <div className="max-w-xl">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
        Why VN Prime Capital
      </p>
      <h2 className="mt-4 text-4xl font-bold leading-tight text-[#0B2346] lg:text-5xl">
        Financing Made
        <br />
        Simpler, Faster &
        <br />
        Smarter.
      </h2>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        We don&apos;t just help you find the right loan, We manage the complete
        process. From selecting the best lender to coordinating with banks,
        completing documentation, and ensuring timely disbursement, our team
        handles every step while you focus on what matters most.
      </p>
      <FeatureList />
    </div>
  );
}
export default WhyVNHeader
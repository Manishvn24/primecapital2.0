import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Info } from "lucide-react";

const ModalHeader = () => {
  return (
    <div className="px-6 py-6">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold text-[#0B2346]">
          Find Your Best Loan Offer
        </DialogTitle>

        <DialogDescription className="pt-2 text-base leading-6 text-slate-600">
          Enter your mobile number to discover personalized loan offers from
          leading banks and NBFCs.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-4 flex gap-3 rounded-xl bg-blue-50 p-3">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
        <p className="text-xs leading-5 text-slate-600">
          Our experts review your profile to find the best loan offers. Checking
          your eligibility does not generate a CIBIL enquiry.
        </p>
      </div>
    </div>
  );
};
export default ModalHeader;

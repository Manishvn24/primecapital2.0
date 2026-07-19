import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import LeadModal from "../Lead-Modal/LeadModal";
import Link from "next/link";

const CTAButtons = () => {
  return (
    <div className="flex gap-6">
      <LeadModal
        trigger={
          <Button
            size="lg"
            className="h-14 rounded-xl px-8 bg-[#b3a34c] hover:bg-[#d2b965] text-[#0B2346] group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Apply Now
            <ArrowRight className="ml-2 h-4 w-4 text-[#0B2346] transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        }
      />

      <Button
        asChild
        size="lg"
        className="h-14 rounded-xl px-8 bg-[#b3a34c] hover:bg-[#d2b965] text-[#0B2346]  group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Link href="tel:6265118905">
          Call Now
          <PhoneCall className="ml-2 h-4 w-4 text-[#0B2346] transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
    </div>
  );
};

export default CTAButtons;

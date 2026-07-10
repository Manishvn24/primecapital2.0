import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";

const CTAButtons = () => {
  return (
    <div className="flex gap-6 ">
      <Button
        size="lg"
        className="h-14 rounded-xl px-8  group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Apply Now
        <ArrowRight className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
      <Button
        size="lg"
        className="h-14 rounded-xl px-8  group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
      >
        Call Now
        <PhoneCall className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default CTAButtons;

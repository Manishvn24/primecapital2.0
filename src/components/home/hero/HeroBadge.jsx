import { Sparkles } from "lucide-react";

const HeroBadge = () => {
  return (
    <div
      className="
      inline-flex
      w-fit
      items-center
      gap-2
      rounded-full
      border
      border-[#D4AF37]/20
      bg-[#FFF9EB]
      px-4
      py-2
      "
    >
      <Sparkles className="h-4 w-4 text-[#D4AF37]" />

      <span
        className="
        text-sm
        font-semibold
        tracking-wide
        uppercase
        text-[#B88917]
        hidden md:block
        "
      >
        Specialized Loans for Doctors & Professionals
      </span>
      <span
        className="
        text-sm
        font-semibold
        tracking-wide
        uppercase
        text-[#B88917]
        md:hidden
        "
      >
        Premium Lending Experience
      </span>
    </div>
  );
};

export default HeroBadge;

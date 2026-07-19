import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import LeadDialog from "../Lead-Modal/LeadDialog";
import LeadModal from "../Lead-Modal/LeadModal";


const HeroButtons = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row">
        <LeadModal trigger={ <Button
            size="lg"
            className="h-14 rounded-xl px-8 bg-[#0B2346] hover:bg-[#1A3158] group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Find My Loan Options
            <ArrowRight className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
          </Button>}
          />
         
        <Button
          size="lg"
          className="h-14  border border-[#D4AF37]  hover:border-[#0B2346] rounded-xl bg-transparent text-[#D4AF37] px-8 group font-semibold tracking-wide flex hover:bg-[#F8F5ED] hover:text-[#0B2346] shadow-lg hover:shadow-xl transition-all duration-300"
          asChild
        >
          <Link href="https://wa.me/916265118905?text=Hi,%20I%20would%20like%20to%20check%20best%20loan%20offers%20for%20me.">
            Chat on WhatsApp
            <FaWhatsapp className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#0B2346] " />
          </Link>
        </Button>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground ">
        No paperwork • Expert Guidance • Quick response
      </p>
    </div>
  );
}
export default HeroButtons
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Children } from "react";
const PrimaryButton = ({children}) => {
  return (
    <Button
      size="lg"
      className="h-14 rounded-xl px-8 bg-[#0B2346] hover:bg-[#1A3158] group font-semibold tracking-wide flex shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
    </Button>
  );
};
export default PrimaryButton;

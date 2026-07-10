import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const SecondaryButton = ({
  children,
  className,
  onClick,
  type = "button",
  showArrow = true,
  ...props
}) => {
  return (
    <Button
      type={type}
      variant="ghost"
      onClick={onClick}
      className={cn(
        "group h-12 rounded-xl px-6 font-semibold tracking-wide",
        "bg-transparent border border-[#0B2346]",
        "text-[#0B2346]",
        "hover:bg-[#0B2346] hover:text-white",
        "transition-all duration-300",
        "hover:-translate-y-0.5 hover:shadow-lg",
        className,
      )}
      {...props}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Button>
  );
};

export default SecondaryButton;

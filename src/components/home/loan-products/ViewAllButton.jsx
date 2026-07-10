import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ViewAllButton = ({
  href = "/loan-products",
  children = "View All Products",
}) => {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 font-semibold text-[#0B2346] transition-colors duration-300 hover:text-[#D4AF37]"
    >
      <span>{children}</span>

      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ViewAllButton;

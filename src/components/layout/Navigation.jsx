"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="lg:flex justify-center gap-10 hidden">
      {navigationLinks.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`group relative flex items-center h-24 text-[15px] font-medium tracking-wide transition-all duration-300
            ${
              pathname === item.href
                ? "text-[#D4AF37]"
                : "text-[#0B2346] hover:text-[#D4AF37]"
            }
          `}
          >
            {item.label}
            <span
              className={ `absolute bottom-0 left-0 block h-0.5 w-full origin-center scale-x-0 bg-[#D4AF37] transition-transform duration-300 ${ pathname === item.href? "scale-x-100": "scale-x-0 group-hover:scale-x-100"}`}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;

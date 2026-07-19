"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationLinks } from "@/data/navigation";
import { NavigationMenuDemo } from "../common/LoanProductButton";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <ul className="hidden justify-center gap-10 lg:flex">
      {navigationLinks.map((item) => {
        // Dropdown Item
        if (item.type === "dropdown") {
          return <NavigationMenuDemo key={item.label} item={item} />;
        }

        // Normal Link
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`group relative flex h-24 items-center text-[15px] font-medium tracking-wide transition-all duration-300 ${
                pathname === item.href
                  ? "text-[#D4AF37]"
                  : "text-[#0B2346] hover:text-[#D4AF37]"
              }`}
            >
              {item.label}

              <span
                className={`absolute bottom-0 left-0 block h-0.5 w-full origin-center bg-[#D4AF37] transition-transform duration-300 ${
                  pathname === item.href
                    ? "scale-x-100"
                    : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;

"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

const LoanProductsMenu = () => {
  return (
    <div className="group relative h-full flex items-center">
      {/* Trigger */}
      <button className="flex h-full items-center gap-1 text-[15px] font-medium tracking-wide text-[#0B2346] transition-colors duration-300 hover:text-[#D4AF37]">
        Loan Products
        <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
      </button>

      {/* Invisible Hover Bridge */}
      <div className="absolute top-full left-0 h-5 w-full" />

      {/* Dropdown */}
      <div
        className="
          invisible
          absolute
          left-1/2
          top-full
          z-50
          w-[720px]
          -translate-x-1/2
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-8
          opacity-0
          shadow-xl
          transition-all
          duration-200
          group-hover:visible
          group-hover:opacity-100
        "
      >
        <div className="grid grid-cols-2 gap-10">
          {/* Business */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Business Finance
            </h3>

            <div className="space-y-3">
              <Link
                href="/loan-products/business-loan"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">Business Loan</p>

                <p className="mt-1 text-sm text-slate-500">
                  Grow your business with flexible financing.
                </p>
              </Link>

              <Link
                href="/loan-products/professional-loan"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">
                  Professional Loan
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Special financing for professionals.
                </p>
              </Link>

              <Link
                href="/loan-products/loan-against-property"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">
                  Loan Against Property
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Unlock the value of your property.
                </p>
              </Link>
            </div>
          </div>

          {/* Personal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              Personal Finance
            </h3>

            <div className="space-y-3">
              <Link
                href="/loan-products/personal-loan"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">Personal Loan</p>

                <p className="mt-1 text-sm text-slate-500">
                  Quick financing for personal needs.
                </p>
              </Link>

              <Link
                href="/loan-products/education-loan"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">Education Loan</p>

                <p className="mt-1 text-sm text-slate-500">
                  Finance your higher education goals.
                </p>
              </Link>

              <Link
                href="/loan-products/overdraft"
                className="block rounded-xl p-3 transition hover:bg-slate-100"
              >
                <p className="font-semibold text-[#0B2346]">
                  Overdraft Facility
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Flexible access to working capital.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanProductsMenu;

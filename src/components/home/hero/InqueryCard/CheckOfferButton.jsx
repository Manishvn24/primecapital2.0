"use client";

import { ArrowRight } from "lucide-react";

const CheckOfferButton = ({ loading, disabled }) => {
  return (
    <button
      type="submit"
      disabled={disabled || loading}
      className={`
        w-full flex group items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold tracking-wide transition-all duration-200
        ${
          !disabled
            ? "bg-[#0B2346] text-white shadow-md hover:bg-[#0d2a56] hover:shadow-lg active:scale-[0.98]"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }
      `}
    >
      {loading ? (
        <>
          <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 0 1 8-8v8H4z"
            />
          </svg>
          Checking Offers...
        </>
      ) : (
        <>
          Check Offers
          <ArrowRight className="ml-2 h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </button>
  );
};

export default CheckOfferButton;

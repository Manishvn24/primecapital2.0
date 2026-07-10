"use client";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const CheckOfferButton = ({ loanType, amount, phone }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = phone.length === 10;

  const handleSubmit = async () => {
    if (!isValid || loading) return;
    setLoading(true);

    // Simulate API call — replace with your actual submission logic
    await new Promise((r) => setTimeout(r, 1500));

    // WhatsApp redirect with pre-filled message
    const message = encodeURIComponent(
      `Hi, I need a ${loanType.replace(/-/g, " ")} of ₹${amount.toLocaleString("en-IN")}. My number is +91 ${phone}.`,
    );
    // Uncomment to redirect to WhatsApp:
    // window.open(`https://wa.me/916265118905?text=${message}`, "_blank");

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-center justify-center gap-2 rounded-xl bg-green-50 border border-green-200 py-3.5 text-sm font-semibold text-green-700">
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Request Submitted! We&apos;ll call you shortly.
      </div>
    );
  }

  return (
    <button
      onClick={handleSubmit}
      disabled={!isValid || loading}
      className={`
        w-full flex group items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold tracking-wide transition-all duration-200
        ${
          isValid
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
              d="M4 12a8 8 0 018-8v8H4z"
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

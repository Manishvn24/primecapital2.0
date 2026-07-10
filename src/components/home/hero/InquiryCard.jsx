"use client";
import { useState } from "react";
import LoanTypeSelect from "./InqueryCard/LoanTypeSelect";
import AmountSlider from "./InqueryCard/AmountSlider";
import PhoneInput from "./InqueryCard/PhoneInput";
import CheckOfferButton from "./InqueryCard/CheckOfferButton";


const InquiryCard = () => {
  const [loanType, setLoanType] = useState("personal");
  const [amount, setAmount] = useState(1000000);
  const [phone, setPhone] = useState("");

  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-2xl shadow-[#0B2346]/10 border border-gray-100 p-6 space-y-5">
      {/* Card Header */}
      <div>
        <h3 className="text-lg font-bold text-[#0B2346]">
          Check Your Loan Offers
        </h3>
        <p className="mt-0.5 text-sm text-gray-500">
          Get personalized offers in just a few steps
        </p>
      </div>

      {/* Divider */}
      <div className="h-1 bg-gradient-to-r from-[#D4AF37]/40 via-gray-100 to-transparent" />

      {/* Form Fields */}
      <div className="space-y-4">
        <LoanTypeSelect value={loanType} onChange={setLoanType} />
        <AmountSlider value={amount} onChange={setAmount} />
        <PhoneInput value={phone} onChange={setPhone} />
      </div>

      {/* Submit Button */}
      <CheckOfferButton loanType={loanType} amount={amount} phone={phone} />

      {/* Trust line */}
      <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
        <svg
          className="h-3.5 w-3.5 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        Your information is secure and confidential
      </p>
    </div>
  );
};

export default InquiryCard;

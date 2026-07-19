"use client";

const loanTypes = [
  { value: "personal", label: "Personal Loan", icon: "👤" },
  { value: "business", label: "Business Loan", icon: "🏢" },
  { value: "education", label: "Education Loan", icon: "🎓" },
  { value: "doctor", label: "Doctor", icon: "⚕️" },
  { value: "profession", label: "Professional Loan", icon: "👨‍💼" },
];
const LoanTypeSelect = ({ value, onChange }) => {
  return (
    <div className="space-y-1">
      <label
        htmlFor="loan-type"
        className="block text-sm font-medium text-gray-600"
      >
        Select Loan Type
      </label>
      <div className="relative">
        <select
          id="loan-type"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full appearance-none rounded-lg border border-gray-200 bg-white px-4 py-3 pr-10 text-sm font-medium text-[#0B2346] shadow-sm focus:border-[#D4AF37] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30 transition"
        >
          {loanTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.icon} {type.label}
            </option>
          ))}
        </select>
        {/* Custom chevron */}
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-4 w-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default LoanTypeSelect;

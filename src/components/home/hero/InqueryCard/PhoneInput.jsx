"use client";

const PhoneInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
    onChange(digits);
  };
  
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-600">
        Mobile Number
      </label>
      <div className="flex items-center rounded-lg border border-gray-200 bg-white shadow-sm focus-within:border-[#D4AF37] focus-within:ring-2 focus-within:ring-[#D4AF37]/30 transition overflow-hidden">
        {/* Country prefix */}
        <div className="flex items-center gap-1.5 border-r border-gray-200 px-3 py-3 bg-gray-50 text-sm font-medium text-gray-500 whitespace-nowrap select-none">
          🇮🇳 +91
        </div>
        <input
          type="tel"
          placeholder="98765 43210"
          value={value}
          onChange={handleChange}
          maxLength={10}
          className="flex-1 bg-white px-3 py-3 text-sm text-[#0B2346] placeholder-gray-300 focus:outline-none"
        />
        {value.length === 10 && (
          <div className="pr-3 text-green-500">
            <svg
              className="h-4 w-4"
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
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneInput;

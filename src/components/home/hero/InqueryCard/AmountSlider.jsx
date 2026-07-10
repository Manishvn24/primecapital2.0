"use client";

const formatAmount = (value) => {
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(1)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(1)} L`;
  return `₹${value.toLocaleString("en-IN")}`;
};

const AmountSlider = ({ value, onChange }) => {
  const MIN = 100000;
  const MAX = 20000000;

  const percent = ((value - MIN) / (MAX - MIN)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-600">Loan Amount</label>
        <span className="text-sm font-bold text-[#0B2346]">
          {formatAmount(value)}
        </span>
      </div>

      {/* Slider */}
      <div className="relative">
        <input
          type="range"
          min={MIN}
          max={MAX}
          step={50000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="amount-slider w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, #D4AF37 ${percent}%, #E5E7EB ${percent}%)`,
          }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-400">
        <span>₹1,00,000</span>
        <span>₹2 Cr</span>
      </div>

     
    </div>
  );
};

export default AmountSlider;

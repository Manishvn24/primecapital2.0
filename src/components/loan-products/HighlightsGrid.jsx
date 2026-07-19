// components/loan-products/HighlightsGrid.tsx

export default function HighlightsGrid({ highlights }) {
  return (
    <section className="mx-auto -mt-10 max-w-5xl px-6 sm:-mt-12">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-[#0B2346]/10 bg-[#0B2346]/10 shadow-sm sm:grid-cols-4">
        {highlights.map((item) => (
          <div key={item.label} className="bg-white px-5 py-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[#0B2346]/50">
              {item.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-[#0B2346] sm:text-xl">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

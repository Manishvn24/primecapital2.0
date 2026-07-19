// components/loan-products/OverviewBenefits.tsx



export default function OverviewBenefits({ overview, benefits }) {
  return (
    <section className="mx-auto max-w-5xl px-6 mt-16">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <h2 className=" text-2xl font-semibold text-[#0B2346]">
            Overview
          </h2>
          <p className="mt-4 leading-relaxed text-[#0B2346]/70">{overview}</p>
        </div>

        <div>
          <h2 className=" text-2xl font-semibold text-[#0B2346]">
            Key Benefits
          </h2>
          <ul className="mt-4 space-y-3">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D4AF37]" />
                <span className="text-[#0B2346]/80">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

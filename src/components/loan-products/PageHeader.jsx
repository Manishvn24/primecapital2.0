// components/loan-products/PageHeader.tsx


export default function PageHeader({ title, shortDescription }) {
  return (
    <section className="relative overflow-hidden bg-[#0B2346]">
      {/* subtle gold hairline grid, kept quiet on purpose */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <span className="inline-block rounded-full border border-[#D4AF37]/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
          Loan Product
        </span>

        <h1 className="mt-6 font text-4xl font-semibold leading-tight text-white sm:text-5xl">
          {title}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {shortDescription}
        </p>

        <div className="mt-8 h-px w-24 bg-[#D4AF37]" />
      </div>
    </section>
  );
}

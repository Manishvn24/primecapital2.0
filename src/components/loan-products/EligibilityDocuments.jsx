// components/loan-products/EligibilityDocuments.tsx



export default function EligibilityDocuments({
  eligibility,
  documents,
}) {
  return (
    <section className="">
      <div className="mx-auto max-w-5xl px-6 py-8">
        <div className="grid gap-10 sm:grid-cols-2">
          {/* Eligibility */}
          <div className="rounded-xl border border-[#0B2346]/10 bg-white p-8">
            <h3 className=" text-xl font-semibold text-[#0B2346]">
              Who Can Apply
            </h3>
            <ul className="mt-5 space-y-2">
              {eligibility.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-[#0B2346]/75"
                >
                  <span className="text-[#D4AF37]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Documents */}
          <div className="rounded-xl border border-[#0B2346]/10 bg-white p-8">
            <h3 className=" text-xl font-semibold text-[#0B2346]">
              Documents Required
            </h3>
            <ul className="mt-5 space-y-2">
              {documents.map((doc) => (
                <li
                  key={doc}
                  className="flex items-center gap-2 text-sm text-[#0B2346]/75"
                >
                  <span className="text-[#D4AF37]">✓</span>
                  {doc}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

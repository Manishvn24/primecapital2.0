// components/loan-products/LoanProductPage.tsx


import ApplicationForm from "./ApplicationForm";
import EligibilityDocuments from "./EligibilityDocuments";
import HighlightsGrid from "./HighlightsGrid";
import OverviewBenefits from "./OverviewBenefits";
import PageHeader from "./PageHeader";

export default function LoanProductPage({ product }) {
  return (
    <main className="scroll-mt-32 ">
      <PageHeader
        title={product.title}
        shortDescription={product.shortDescription}
      />

      <HighlightsGrid highlights={product.highlights} />
      <div className="container mx-auto grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <OverviewBenefits
            overview={product.overview}
            benefits={product.benefits}
          />

          <EligibilityDocuments
            eligibility={product.eligibility}
            documents={product.documents}
          />
        </div>
        <aside className="lg:col-span-5">
             <section className="mx-auto max-w-2xl px-6 py-16">
          <ApplicationForm defaultLoanType={product.defaultLoanType} />
        </section>
        </aside>
       
      </div>
    </main>
  );
}

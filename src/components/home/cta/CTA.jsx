import Container from "@/components/common/Container";
import CTAContent from "./CTAContent";
import CTAButtons from "./CTAButtons";

const CTA = () => {
  return (
    <section className="mt-12">
        <div className="bg-[#0B2346] px-6 py-10 lg:px-12 lg:py-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            <CTAContent />
            <CTAButtons />
          </div>
        </div>
    </section>
  );
};

export default CTA;

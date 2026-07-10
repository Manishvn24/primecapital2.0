import Container from "@/components/common/Container";
import FaqAccordion from "./FaqAccordion";
import FaqHeader from "./FaqHeader";

const FAQ = () => {
  return (
    <section className="mt-12">
      <Container>
        <FaqHeader />
        <div className="mt-10">
          <FaqAccordion />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;

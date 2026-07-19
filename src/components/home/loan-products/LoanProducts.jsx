import Container from "@/components/common/Container"
import LoanSanctionHeader from "./LoanSanctionHeader"
import LoanGrid from "./LoanGrid"
import LoanCarousal from "./LoanCarousal";

const LoanProducts = () => {
  return (
    <section id="loan-products" className="mt-12 scroll-mt-32">
      <Container>  
          <LoanSanctionHeader />
          <div className="mt-12">
            <LoanCarousal/>
          </div>
      </Container>
    </section>
  );
}
export default LoanProducts
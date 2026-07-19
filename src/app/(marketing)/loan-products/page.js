import Container from "@/components/common/Container"
import LoanCarousel from "@/components/home/loan-products/LoanCarousal";
import LoanProductsHero from "@/components/loan-products/LoanProductsHero"

export const metadata = {
  title: "Loan Products",

  description:
    "Explore our complete range of Business Loans, Personal Loans, Professional Loans, Education Loans, Loan Against Property, and Overdraft Facilities tailored to your financial needs.",
};
const page = () => {
  return (
    <div>
      <LoanProductsHero />
      <Container>
        <div className="py-12">
          <LoanCarousel />
        </div>
      </Container>
    </div>
  );
}
export default page
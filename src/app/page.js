import CTA from "@/components/home/cta/CTA";
import FAQ from "@/components/home/faq/FAQ";
import Hero from "@/components/home/hero/Hero";
import LoanProducts from "@/components/home/loan-products/LoanProducts";
import QuickStats from "@/components/home/quick-stats/QuickStats";
import BanksPartner from "@/components/home/trusted-banks/BanksPartner";
import WhyVNPrime from "@/components/home/why-vn-prime/WhyVNPrime";
import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/Header";

export const metadata = {
  title: "Business Loans, Professional Loans & Financial Solutions",

  description:
    "VN Prime Capital helps businesses, professionals, and salaried individuals find the right financing solution with Business Loans, Professional Loans, Personal Loans, Education Loans, Loan Against Property, and Overdraft Facilities.",
};
const page = () => {
  return (
    <div className="">
      <Hero/>
      <LoanProducts/>
      <BanksPartner/>
      <WhyVNPrime/>
      <QuickStats/>
      <FAQ/>
      <CTA/>
     <Footer/>
    </div>
  );
}
export default page
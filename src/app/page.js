import CTA from "@/components/home/cta/CTA";
import FAQ from "@/components/home/faq/FAQ";
import Footer from "@/components/home/footer/Footer";
import Hero from "@/components/home/hero/Hero";
import LoanProducts from "@/components/home/loan-products/LoanProducts";
import QuickStats from "@/components/home/quick-stats/QuickStats";
import BanksPartner from "@/components/home/trusted-banks/BanksPartner";
import WhyVNPrime from "@/components/home/why-vn-prime/WhyVNPrime";
import Header from "@/components/layout/Header";

const page = () => {
  return (
    <div className="">
      <Header/>
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
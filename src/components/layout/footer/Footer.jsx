import Container from "@/components/common/Container";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className=" bg-[#071A36] text-white">
      <Container>
        <div className="py-14">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
            <FooterBrand />
            <FooterLinks />
          </div>
          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

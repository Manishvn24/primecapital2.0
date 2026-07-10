import Container from "@/components/common/Container"
import HeroContent from "./HeroContent"
import HeroVisual from "./HeroVisual"
import Stats from "./Stats";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#FAFAF8]">
      <Container>
        <div className="mt-12 lg:mt-0 grid min-h-screen items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
export default Hero
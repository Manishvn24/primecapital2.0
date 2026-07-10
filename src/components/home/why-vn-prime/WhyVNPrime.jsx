import Container from "@/components/common/Container"
import WhyVNHeader from "./WhyVNHeader"
import Illustration from "./Illustration"
import FeatureList from "./FeatureList"

const WhyVNPrime = () => {
  return (
    <section className="mt-12">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <WhyVNHeader />
          <Illustration />
        </div>
       
      </Container>
    </section>
  );
}
export default WhyVNPrime
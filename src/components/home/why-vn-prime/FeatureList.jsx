import WhyVNPrimeData from "@/data/WhyVNprimeData";
import FeatureItem from "./FeatureItem";

const FeatureList = () => {
    const feature = WhyVNPrimeData;
  return (
    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {WhyVNPrimeData.map((feature) => (
        <FeatureItem key={feature.id} feature={feature} />
      ))}
    </div>
  );
}
export default FeatureList
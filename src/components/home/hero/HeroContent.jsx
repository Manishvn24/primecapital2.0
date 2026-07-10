import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroFeatures from "./HeroFeatures";
import HeroHeading from "./HeroHeading";

const HeroContent = () => {
  return (
    <div className="flex justify-center">
      <div className=" max-w-xl flex flex-col gap-8 h-full">
        <div>
          <HeroBadge />
        </div>
        <div>
          <HeroHeading />
        </div>
        <div>
          <p
            className="max-w-xl text-lg leading-8 text-[#6B7280] "
          >
            Tell us your requirement, and we&apos;ll connect you with the right
            banking partner for your financial goals.
          </p>
        </div>
        <div><HeroFeatures/></div>
        <div><HeroButtons/></div>
      </div>
    </div>
  );
}
export default HeroContent
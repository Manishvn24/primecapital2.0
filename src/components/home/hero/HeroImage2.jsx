import Image from "next/image";
import InquiryCard from "./InquiryCard";

const HeroImage2 = () => {
  return (
    <div className="relative h-[620px] w-full overflow-hidden rounded-3xl">
      {/* Background Image */}
      <Image
        src="/images/HeroDoctor.jpg"
        alt="Professional loan consultant"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Left Fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE] via-transparent to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE]/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-end justify-center p-6 lg:justify-end lg:p-10">
        <div className="translate-y-12 lg:translate-y-8">
          <InquiryCard />
        </div>
      </div>
    </div>
  );
};

export default HeroImage2;

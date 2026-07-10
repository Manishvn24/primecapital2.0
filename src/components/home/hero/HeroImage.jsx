import Image from "next/image";
import InquiryCard from "./InquiryCard";
 // Replace with your actual image path

const HeroImage = () => {
  return (
    <div className="w-full items-end justify-center lg:items-center lg:justify-end">
      {/* Background image — person photo */}
      <div className=" relative h-95 sm:h-112.5 lg:h-175 overflow-hidden rounded-3xl">
        <Image
          src="/images/HeroDoctor.jpg"
          alt="Professional loan consultant"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Soft left-side fade so image blends into the hero bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F3EE] via-transparent to-transparent" />
        {/* Bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F5F3EE]/60 via-transparent to-transparent" />
      </div>

      {/* InquiryCard — overlaid bottom-right */}
      <div className=" mt-6 lg:absolute lg:bottom-8 lg:right-0">
        <InquiryCard />
      </div>
    </div>
  );
};

export default HeroImage;

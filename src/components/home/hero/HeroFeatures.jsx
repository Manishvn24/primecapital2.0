import { heroFeatures } from "@/data/HeroFeatures";

const HeroFeatures = () => {
  return (
    <div className="md:flex flex-row gap-8 hidden ">
      {heroFeatures.map((item, idx) => (
        <div key={idx} className="flex items-center gap-3">
          <item.icon className="h-5 w-5 shrink-0 text-[#D4AF37]" />
          <span className="text-sm tracking-tight">{item.title}</span>
        </div>
      ))}
    </div>
  );
};

export default HeroFeatures;

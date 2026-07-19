import { Mail, MapPin, Phone } from "lucide-react";
const FooterBrand = () => {
  return (
    <div className="">
      <div className="flex flex-col leading-tight">
        <h2 className="whitespace-nowrap text-base font-bold tracking-tight text-[FFFDD0] sm:text-lg lg:text-xl">
          <span className="text-[#D4AF37]">VN </span>
          PRIME CAPITAL
        </h2>
        <p className="text-xs font-medium text-gray-500">
          Financing Your Ambitions.
        </p>
      </div>

      <p className="mt-6 max-w-sm text-slate-300 leading-7">
        Financing Your Ambitions. Connecting professionals and businesses with
        trusted lending partners across India.
      </p>

      <div className="mt-8 space-y-4">
        <a
          href="tel:6265118905"
          className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
        >
          <Phone className="h-5 w-5 text-[#D4AF37]" />
          <span>+91 6265118905</span>
        </a>
        <a
          href="mailto:support@vnprimecapital.com"
          className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors"
        >
          <Mail className="h-5 w-5 text-[#D4AF37]" />
          <span>support@vnprimecapital.com</span>
        </a>

        <div className="flex items-center gap-3 hover:text-[#D4AF37] transition-colors">
          <MapPin className="h-5 w-5 text-[#D4AF37]" />
          <span>Jabalpur, Madhya Pradesh</span>
        </div>
      </div>
    </div>
  );
};

export default FooterBrand;

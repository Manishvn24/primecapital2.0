import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/logo2svg.svg"
        alt="VN Prime Capital"
        width={48}
        height={48}
        className="sm:h-14 sm:w-auto"
        priority
      />

      <div className="md:flex flex-col leading-tight hidden">
        <h2 className="whitespace-nowrap text-base font-bold tracking-tight text-[#0B2346] sm:text-lg lg:text-xl">
          <span className="text-[#D4AF37]">VN </span>
          PRIME CAPITAL
        </h2>
        <p className="text-xs font-medium text-gray-500">
          Financing Your Ambitions.
        </p>
      </div>
    </Link>
  );
};

export default Logo;

import Image from "next/image";

const LogoCard = ({ bank }) => {
  const { name, logo } = bank;

  return (
    <div className="flex h-20 w-44 shrink-0 items-center justify-center">
      <Image
        src={logo}
        alt={name}
        width={140}
        height={50}
        className="h-12 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100"
      />
    </div>
  );
};

export default LogoCard;

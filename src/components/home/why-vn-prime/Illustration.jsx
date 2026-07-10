import Image from "next/image";

const Illustration = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
      <Image
        src="/illustration.png"
        alt="VN Prime Capital Illustration"
        width={700}
        height={700}
        priority
        className="h-auto w-full object-contain rounded-md max-w-lg  shadow-xl"
      />
    </div>
  );
};

export default Illustration;

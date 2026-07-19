"use client";

import Image from "next/image";

const WhoWeAre = ({ title, paragraphs, stats }) => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left Content */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
              About Us
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#0B2346] lg:text-4xl">
              {title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600">
              {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right Stats */}
          <div className="relative mx-auto flex w-full max-w-xl items-center justify-center">
                <Image
                  src="/images/about/about2.jpg"
                  alt="VN Prime Capital Illustration"
                  width={700}
                  height={700}
                  priority
                  className=" h-auto w-full object-contain rounded-md max-w-lg  shadow-xl"
                />
              </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

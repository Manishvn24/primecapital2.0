import Container from "@/components/common/Container";
import LogoTicker from "./LogoTicker";

const BanksPartner = () => {
  return (
    <section className="mt-12">
      <Container>
        {/* Header */}
        <div className="mx-auto  max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
            Trusted Lending Partners
          </p>

          {/* <h2 className="mt-3 text-4xl font-bold text-[#0B2346] lg:text-5xl">
            Connected with India&apos;s Leading Banks & NBFCs
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Compare loan offers from multiple trusted banks and financial
            institutions through one simple application.
          </p> */}
        </div>

        {/* Logo Ticker */}
        <div className="mt-12">
          <LogoTicker />
        </div>
      </Container>
    </section>
  );
};

export default BanksPartner;

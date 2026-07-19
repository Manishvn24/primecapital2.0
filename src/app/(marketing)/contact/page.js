import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ApplicationForm from "@/components/loan-products/ApplicationForm";
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export const metadata = {
  title: "Contact Us",

  description:
    "Get in touch with VN Prime Capital for expert financial guidance. Contact our team for Business Loans, Professional Loans, Personal Loans, Home Loans, and more.",
};
export default function About() {
  return (
    <>
      <ContactHero />
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>

          <div className="lg:col-span-7">
            <ApplicationForm
              title="Get in Touch"
              description="Share your details and our team will contact you shortly."
              defaultLoanType="General Enquiry"
            />
            <div className="rounded-2xl border border-[#0B2346]/10 bg-white p-8 shadow-sm mt-8">
              <h3 className="text-xl font-semibold text-[#0B2346]">
                Connect With Us
              </h3>

              <p className="mt-2 text-[#0B2346]/60">
                Follow us for financial insights, updates, and offers.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0B2346]/10 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <FaFacebook className="h-5 w-5 text-[#0B2346]" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0B2346]/10 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <FaInstagram className="h-5 w-5 text-[#0B2346]" />
                </a>

                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0B2346]/10 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <FaSquareXTwitter className="h-5 w-5 text-[#0B2346]" />
                </a>

                <a
                  href="https://wa.me/916265118905"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#0B2346]/10 transition-all hover:-translate-y-1 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10"
                >
                  <FaWhatsapp className="h-5 w-5 text-[#0B2346]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

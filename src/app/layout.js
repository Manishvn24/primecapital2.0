import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://www.vnprimecapital.com"),

  title: {
    default: "VN Prime Capital | Financing Your Ambitions",
    template: "%s | VN Prime Capital",
  },

  description:
    "VN Prime Capital provides Business Loans, Professional Loans, Personal Loans, Education Loans, Loan Against Property, and Overdraft Facilities across India with fast approvals and expert guidance.",

  keywords: [
    "Business Loan",
    "Professional Loan",
    "Personal Loan",
    "Education Loan",
    "Loan Against Property",
    "Overdraft Facility",
    "Working Capital Loan",
    "MSME Loan",
    "Doctor Loan",
    "CA Loan",
    "Engineer Loan",
    "Loan DSA",
    "Finance",
    "VN Prime Capital",
  ],

  authors: [
    {
      name: "VN Prime Capital",
    },
  ],
  creator: "VN Prime Capital",

  publisher: "VN Prime Capital",

  category: "Finance",

  referrer: "origin-when-cross-origin",

  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${plusJakarta.className} min-h-screen flex flex-col bg-[#FAFAF8] antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}

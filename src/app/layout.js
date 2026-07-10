import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "VN Prime Capital",
  description: "Financing Your Ambitions",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakarta.className} min-h-screen flex flex-col bg-[#FAFAF8] antialiased`}>
        {children}
      </body>
    </html>
  );
}

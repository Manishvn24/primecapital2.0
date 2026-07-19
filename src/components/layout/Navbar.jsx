"use client"
import Link from "next/link";
import Action from "./Action";
import Navigation from "./Navigation";
import Logo from "./Logo";
import LeadModal from "../home/Lead-Modal/LeadModal";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { loanProducts } from "@/data/LoanProducts";
import { AnimatePresence, motion } from "framer-motion";


const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loanMenuOpen, setLoanMenuOpen] = useState(false);
  const closeMobileMenu = () => {
    setLoanMenuOpen(false);

    setTimeout(() => {
      setMobileMenuOpen(false);
    }, 250); // same as animation duration
  };
  return (
    <>
      <nav className="md:h-24 sm:16 border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-full max-w-7xl  items-center px-6">
          <div className="flex-1">
            <Logo />
          </div>
          <div className="lg:flex justify-center hidden">
            <Navigation />
          </div>
          <div className="flex flex-1 justify-end items-center gap-3">
            <div className="hidden lg:block">
              <LeadModal trigger={<Action />} />
            </div>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open Menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed inset-0 z-50 bg-[#0B2346] text-white"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
              <div>
                <h2 className="text-lg font-bold">
                  <span className="text-[#D4AF37]">VN </span>
                  PRIME CAPITAL
                </h2>

                <p className="text-xs text-white/60">
                  Financing Your Ambitions.
                </p>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close Menu"
              >
                <X className="h-7 w-7" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-8">
              <Link
                href="/"
                className="border-b border-white/10 py-4 text-lg font-medium transition-colors hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              <button
                onClick={() => setLoanMenuOpen((prev) => !prev)}
                className="flex w-full items-center justify-between border-b border-white/10 py-4 text-left text-lg font-medium transition-colors hover:text-[#D4AF37]"
              >
                <span>Loan Products</span>

                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    loanMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {loanMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    {Object.values(loanProducts).map((loan) => (
                      <Link
                        key={loan.slug}
                        href={`/loan-products/${loan.slug}`}
                        onClick={() => {
                          closeMobileMenu();
                        }}
                        className="block border-b border-white/10 py-3 pl-8 pr-6 text-base text-white/80 transition-colors hover:bg-white/5 hover:text-[#D4AF37]"
                      >
                        {loan.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
              <Link
                href="/about"
                className="border-b border-white/10 py-4 text-lg font-medium transition-colors hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="border-b border-white/10 py-4 text-lg font-medium transition-colors hover:text-[#D4AF37]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar
"use client";

import { motion } from "framer-motion";
import LogoCard from "./LogoCard";
import { bankPartners } from "@/data/BanksPartnerData";
const duplicatedBanks = [...bankPartners, ...bankPartners];

const LogoTicker = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex w-max gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 50,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedBanks.map((bank, index) => (
          <LogoCard key={`${bank.name}-${index}`} bank={bank} />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoTicker;

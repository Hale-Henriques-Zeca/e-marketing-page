"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function MarketingLogo() {
  return (
    <div className="w-full flex justify-center mb-12">

      <motion.div
        initial={{ opacity: 0, y: -20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <Link href="/" className="flex flex-col items-center gap-3">

          <Image
            src="/branding/e-marketing/logo.png"
            alt="E-Marketing"
            width={500}
            height={80}
            className="rounded-md"
            priority
          />

          <motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-4xl md:text-6xl font-extrabold text-center mb-8"
>
  <span style={{ color: "#E11D8A" }}>E-Marketing  </span>
 
 
</motion.h1>
        </Link>
      </motion.div>

    </div>
  );
}
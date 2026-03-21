"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarketingOverview from "../app/components/marketing/MarketingOverview";
import MarketingLogo from "../components/MarketingLogo";

export default function MarketingHero() {
  return (
    <main className="relative overflow-hidden text-ekd-pearl">

     {/* 🎬 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0">
        {/* Base preta */}
        <div className="absolute inset-0 bg-ekd-black" />

        {/* Glow pink */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,138,0.35),transparent_45%)]" />

        {/* Glow ocean */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,119,182,0.25),transparent_50%)]" />

        {/* Linha dourada sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(245,196,0,0.08),transparent)]" />
      </div>

      {/* CONTEÚDO */}
      <section className="relative z-10 max-w-7xl mx-auto px-8 py-32">

        

        {/* GRID HERO */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">

          {/* 🧠 BLOCO INSTITUCIONAL (ESQUERDA) */}
          <div>
            {/* 🔥 LOGO TOPO */}
  <MarketingLogo />
  
            <h1 className="text-5xl md:text-6xl font-extrabold text-ekd-pink leading-tight">

              {/* TÍTULO */}
<motion.h1
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-4xl md:text-3xl font-extrabold text-ekd-pink leading-tight mb-8"
>
  <span style={{ color: "#1FA971" }}>EdenKingDom </span>
  <span style={{ color: "#D4AF37" }}>Marketing </span>
 
</motion.h1>
              
            </h1>

            <p className="mt-8 max-w-xl text-lg text-#0077B6">
               <span style={{ color: "#0077B6" }}> A divisão oficial de Marketing & Campaigns da EdenKingDom
              Corporation. Expansão global de marcas, eventos, conteúdos,
              infraestruturas e presença institucional. </span>
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/campaigns"
                className="bg-ekd-pink hover:bg-ekd-pink/90 transition px-8 py-4 rounded-xl font-semibold"
              >
                Explorar Campanhas ↘️
              </Link>

              <Link
                href="/infrastructure"
                className="border border-ekd-ocean text-ekd-ocean hover:bg-ekd-ocean hover:text-ekd-black transition px-8 py-4 rounded-xl"
              >
                Ver Infraestruturas
              </Link>
            </div>
          </div>

          {/* 📊 PAINEL PÚBLICO (DIREITA) */}
          <div className="lg:pt-12">
            
            <MarketingOverview />
          </div>

        </div>
      </section>
    </main>
  );
}
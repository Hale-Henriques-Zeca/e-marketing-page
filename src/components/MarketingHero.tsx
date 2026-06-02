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

            {/* TÍTULO */}
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 mt-6 tracking-tight"
            >
              <span style={{ color: "#1FA971" }}>EdenKingDom </span>
              <span style={{ color: "#D4AF37" }}>Marketing </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-xl text-lg lg:text-xl font-light"
            >
              <span style={{ color: "#0077B6" }}>
                A divisão oficial de Marketing & Campaigns da EdenKingDom Group. Expansão global de marcas, eventos, conteúdos, infraestruturas e presença institucional.
              </span>
            </motion.p>

            {/* BOTÕES PREMIUM */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row flex-wrap gap-4"
            >
              {/* Botão Primário (Destaque) */}
              <Link
                href="/campaigns"
                className="group relative flex items-center justify-center gap-3 bg-gradient-to-r from-ekd-pink to-pink-600 px-8 py-4 rounded-2xl font-bold text-white shadow-[0_0_20px_rgba(225,29,138,0.3)] hover:shadow-[0_0_30px_rgba(225,29,138,0.6)] hover:-translate-y-1 transition-all duration-300"
              >
                Explorar Campanhas
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Botões Secundários (Glassmorphism & Outline) */}
              <Link
                href="/marketplace"
                className="flex items-center justify-center px-8 py-4 rounded-2xl border border-ekd-ocean/40 bg-white/5 backdrop-blur-sm text-ekd-ocean font-semibold hover:bg-ekd-ocean hover:text-ekd-black hover:scale-[1.02] transition-all duration-300"
              >
                Marketplace
              </Link>

              <Link
                href="/infrastructure"
                className="flex items-center justify-center px-8 py-4 rounded-2xl border border-ekd-ocean/40 bg-white/5 backdrop-blur-sm text-ekd-ocean font-semibold hover:bg-ekd-ocean hover:text-ekd-black hover:scale-[1.02] transition-all duration-300"
              >
                Ver Infraestruturas
              </Link>

              <Link
                href="/printing"
                className="flex items-center justify-center px-8 py-4 rounded-2xl border border-ekd-ocean/40 bg-white/5 backdrop-blur-sm text-ekd-ocean font-semibold hover:bg-ekd-ocean hover:text-ekd-black hover:scale-[1.02] transition-all duration-300"
              >
                Visite a Serigrafia
              </Link>
            </motion.div>
          </div>

          {/* 📊 PAINEL PÚBLICO (DIREITA) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:pt-12"
          >
            <MarketingOverview />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
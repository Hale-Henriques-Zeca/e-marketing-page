"use client";

import Brands from "@/components/marketplace/Brands";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function BrandsPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden selection:bg-amber-500/30">
      
      {/* 🌟 HERO SECTION DA MARCA */}
      <section className="relative px-8 pt-32 pb-20 overflow-hidden flex flex-col items-center text-center">
        {/* Glow de fundo Dourado/Amber */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/20 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-8 backdrop-blur-md">
            <ShieldCheck size={16} className="text-amber-400" />
            Produtos 100% Originais
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-sm">
            Marcas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-500 to-orange-500">
              Exclusivas
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            Vista a revolução. Adquira o merchandising oficial da E-Coin e faça parte do movimento EdenKingDom com estilo e atitude.
          </p>
        </motion.div>
      </section>

      {/* 👕 COMPONENTE DE PRODUTOS */}
      <div className="relative z-10">
        <Brands />
      </div>

    </main>
  );
}
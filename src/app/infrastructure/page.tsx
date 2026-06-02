"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MonitorPlay, Radio, MapPin, Zap, ArrowRight } from "lucide-react";

const infraTypes = [
  {
    title: "Painéis LED Digitais",
    description: "Ecrãs de altíssima resolução em pontos estratégicos da cidade, garantindo cores vibrantes e visibilidade 24/7.",
    icon: MonitorPlay,
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
  },
  {
    title: "Torres & Estruturas",
    description: "Presença física imponente com estruturas desenhadas para suportar as condições mais adversas e maximizar o alcance.",
    icon: Radio,
    glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
  },
  {
    title: "Pontos de Alto Tráfego",
    description: "Posicionamento calculado por análise de dados para garantir o máximo de impressões visuais diárias.",
    icon: MapPin,
    glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
  }
];

export default function InfrastructurePage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* 🏙️ FUNDO CINEMATOGRÁFICO - EFEITO "NEON CITY" */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-pink-600/10 blur-[120px] rounded-full mix-blend-screen" />
        {/* Linhas de grelha cibernética */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-24">
        
        {/* 💡 HERO SECTION */}
        <div className="max-w-3xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Zap size={16} className="text-cyan-400 fill-cyan-400" />
            Rede de Alta Visibilidade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight"
          >
            Infraestruturas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
              & Ecrãs LED
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-2xl"
          >
            A dominância visual da sua marca começa aqui. Outdoors digitais, LEDs públicos e torres estratégicas desenhadas para causar um impacto massivo.
          </motion.p>
        </div>

        {/* 🏢 GRID DE DESTAQUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {infraTypes.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-white/10 ${item.glow}`}
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block">
                  <Icon size={32} className="text-gray-200 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* 📺 MOCKUP / BANNER DE DESTAQUE ("O Ecrã") */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full rounded-3xl overflow-hidden bg-zinc-900 border border-white/10 p-1 group"
        >
          {/* Efeito de LED Screen no background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-pink-600 opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />
          
          <div className="relative bg-black rounded-[22px] p-10 md:p-20 flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Scanline effect (efeito de TV/Monitor) */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-50" />
            
            <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
              O Seu Anúncio em Grande Escala
            </h2>
            <p className="relative z-10 text-gray-400 max-w-xl mb-10">
              Transforme a paisagem urbana com a nossa rede de infraestruturas premium. Reserve o seu espaço e coloque a sua marca sob os holofotes.
            </p>
            
            <Link
              href="/contact"
              className="relative z-10 flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-cyan-400 hover:text-black transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Consultar Disponibilidade
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
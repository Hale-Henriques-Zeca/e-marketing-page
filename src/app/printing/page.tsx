"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Shirt, Layers, Palette, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "Têxtil Premium",
    description: "T-shirts, hoodies e uniformes com serigrafia de alta durabilidade e toque zero. Qualidade que se sente ao vestir.",
    color: "from-pink-500 to-rose-500"
  },
  {
    icon: Layers,
    title: "Material Corporativo",
    description: "Cartões de visita, flyers, pastas e crachás. A primeira impressão da sua marca elevada ao nível máximo.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Palette,
    title: "Design & Arte Final",
    description: "Não tem o design pronto? A nossa equipa criativa transforma a sua ideia numa arte pronta para impressão.",
    color: "from-amber-400 to-orange-500"
  },
  {
    icon: Zap,
    title: "Brindes & Merch",
    description: "Canecas, fitas, garrafas e acessórios personalizados para campanhas ou uso interno da sua empresa.",
    color: "from-emerald-400 to-teal-500"
  }
];

export default function PrintStudioPage() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      
      {/* 🎬 FUNDO CINEMATOGRÁFICO (Mantendo a identidade da marca) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(225,29,138,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,119,182,0.15),transparent_40%)]" />
        {/* Grid pattern sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-24">
        
        {/* 🔥 HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6 backdrop-blur-md"
          >
            ✨ Alta Qualidade & Precisão
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            EdenKingDom
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">
              Print Studio
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light"
          >
            Impressão de alta qualidade, serigrafia premium e personalização de merchandising para marcas que exigem o melhor acabamento do mercado.
          </motion.p>
        </div>

        {/* 🛠️ SERVIÇOS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1 hover:border-white/10 overflow-hidden"
              >
                {/* Efeito de brilho no hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />
                
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-6`}>
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-gray-100">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* 💡 PORQUÊ ESCOLHER-NOS & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 p-10 md:p-16 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronto para dar vida à sua ideia?</h2>
            <ul className="space-y-4 mb-8">
              {['Cores vibrantes que não desbotam', 'Prazos de entrega rigorosos', 'Materiais importados de alta gama'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-emerald-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-auto flex flex-col gap-4">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-white text-black px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              Pedir Orçamento
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center justify-center px-8 py-4 rounded-2xl border border-white/20 text-white font-medium hover:bg-white/10 transition-colors"
            >
              Ver Portfólio
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
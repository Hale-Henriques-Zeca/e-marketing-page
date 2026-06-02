"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Megaphone, CalendarCheck, Rocket, Fingerprint, ArrowRight, Sparkles } from "lucide-react";

const campaignTypes = [
  {
    title: "Campanhas Institucionais",
    description: "Consolidação da identidade e valores da sua empresa no mercado através de narrativas visuais e estratégias de longo prazo.",
    icon: Megaphone,
    color: "text-pink-400",
    bgGlow: "group-hover:bg-pink-500/10",
    borderGlow: "group-hover:border-pink-500/30"
  },
  {
    title: "Eventos & Lançamentos",
    description: "Produção, cobertura e promoção de eventos exclusivos. Transformamos o lançamento dos nossos produtos num momento inesquecível.",
    icon: CalendarCheck,
    color: "text-purple-400",
    bgGlow: "group-hover:bg-purple-500/10",
    borderGlow: "group-hover:border-purple-500/30"
  },
  {
    title: "Ações de Campo",
    description: "Ativações de marca e interações diretas com o público. Levamos a mensagem exatamente onde o nosso cliente está.",
    icon: Rocket,
    color: "text-rose-400",
    bgGlow: "group-hover:bg-rose-500/10",
    borderGlow: "group-hover:border-rose-500/30"
  },
  {
    title: "Branding Corporativo",
    description: "Criação de identidades visuais fortes, coerentes e inconfundíveis que destacam as nossas marcas da concorrência.",
    icon: Fingerprint,
    color: "text-fuchsia-400",
    bgGlow: "group-hover:bg-fuchsia-500/10",
    borderGlow: "group-hover:border-fuchsia-500/30"
  }
];

export default function CampaignsPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden">
      
      {/* 🌟 FUNDO CINEMATOGRÁFICO - EFEITO "SPOTLIGHT" */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-pink-600/15 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/10 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-32 pb-24">
        
        {/* 🎯 HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-pink-400" />
            Estratégia & Impacto
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
          >
            Campanhas
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-500 to-purple-600 drop-shadow-sm">
              EdenKingDom
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light"
          >
            Criamos conexões autênticas entre as marcas da EdenKingDom e o mundo. Desde o planeamento institucional até ações no terreno que geram resultados reais.
          </motion.p>
        </div>

        {/* 🎨 GRID DE SERVIÇOS DE CAMPANHA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {campaignTypes.map((campaign, index) => {
            const Icon = campaign.icon;
            return (
              <motion.div
                key={campaign.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 ${campaign.borderGlow} ${campaign.bgGlow}`}
              >
                <div className="flex items-start gap-6">
                  <div className={`p-4 rounded-2xl bg-white/5 inline-flex shrink-0 ${campaign.color}`}>
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-gray-100 transition-colors">
                      {campaign.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {campaign.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 🚀 CTA (CALL TO ACTION) FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] bg-gradient-to-br from-pink-600/20 to-purple-900/20 border border-pink-500/20 p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Efeito de ruído/textura sobre o CTA */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />
          
          <h2 className="relative z-10 text-3xl md:text-5xl font-bold text-white mb-6">
            Vamos criar algo memorável?
          </h2>
          <p className="relative z-10 text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
            A sua próxima grande campanha para promoveres começa com uma simples conversa. A nossa equipa criativa está pronta para desenhar a estratégia perfeita para o seu trabalho de campo com as nossas marcas.
          </p>
          
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-all hover:scale-105 active:scale-95"
            >
              Iniciar Campanha
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center justify-center px-8 py-4 rounded-full border border-pink-500/30 text-pink-300 font-medium hover:bg-pink-500/10 transition-colors"
            >
              Explorar Casos de Sucesso
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Shield, Users, TrendingUp, PlaySquare, Award } from "lucide-react";

const notList = [
  "Não somos plataformas de tarefas artificiais",
  "Não prometemos retorno financeiro fixo",
  "Não pagamos por cliques ou existência",
  "Não operamos modelos de redistribuição fechada"
];

const isList = [
  "Marketing institucional real",
  "Métricas reais: views, retenção, impacto",
  "Liderança baseada em score e mérito",
  "Economia de marca, não pirâmide"
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden pb-32">
      
      {/* 🌌 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32">
        
        {/* 📖 HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Award size={16} className="text-pink-400" />
            Divisão Oficial EdenKingDom
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            Sobre a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">
              E-Marketing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            A eMarketing é uma divisão oficial da EdenKingDom Group,
            criada para gerar crescimento real, mensurável e sustentável das
            marcas e serviços da corporação.
          </motion.p>
        </div>

        {/* ⚖️ COMPARAÇÃO: O QUE SOMOS vs O QUE NÃO SOMOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {/* O que NÃO somos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-red-950/10 border border-red-500/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-3xl group-hover:bg-red-500/20 transition-colors" />
            <h2 className="text-2xl font-bold text-amber-400 mb-8 flex items-center gap-3">
              <XCircle className="text-red-500" />
              O que NÃO somos
            </h2>
            <ul className="space-y-5">
              {notList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* O que somos */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-cyan-950/10 border border-cyan-500/20 backdrop-blur-sm relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-3xl group-hover:bg-cyan-500/20 transition-colors" />
            <h2 className="text-2xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
              <CheckCircle2 className="text-cyan-400" />
              O que somos
            </h2>
            <ul className="space-y-5">
              {isList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300 group-hover:text-white transition-colors">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* 🛡️ CONSTRUINDO CONFIANÇA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto rounded-[2.5rem] bg-white/[0.02] border border-white/10 p-10 md:p-16 text-center mb-32 hover:border-white/20 transition-all duration-500"
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#050505] px-4">
            <Shield size={40} className="text-cyan-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-bold text-white mb-8 mt-4">
            Construindo Confiança
          </h2>
          <p className="text-xl text-gray-300 mb-6 font-light leading-relaxed">
            A EdenKingDom rejeita modelos baseados em promessas financeiras,
            gamificação enganosa ou incentivos sem lastro.
          </p>
          <p className="text-lg text-gray-400">
            Aqui, o crescimento vem de impacto real, feedback público,
            métricas verificáveis e uso concreto dos serviços da corporação.
          </p>
        </motion.div>

        {/* 👥 LÍDERES DE EQUIPAS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30">
              <Users className="text-pink-400" size={28} />
            </div>
            <h2 className="text-3xl font-bold text-white">Líderes de Equipes</h2>
          </div>

          <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
            <p className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              Os líderes de equipes podem ampliar os seus horizontes abrindo uma conta gratuita de promoção. Ao criar sua conta, você torna‑se um promotor oficial de marcas da EdenKingDom.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col gap-4">
                <PlaySquare className="text-cyan-400" size={24} />
                <p>Basta acompanhar os conteúdos publicados pelos profissionais da divisão — documentários, vídeos, depoimentos, factos sociais, saúde pública, dia a dia da organização, marcas, produtos e serviços.</p>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors flex flex-col gap-4">
                <TrendingUp className="text-amber-400" size={24} />
                <p>Quanto mais pessoas visualizarem, acessarem e utilizarem os serviços através dos seus redirecionamentos e comunicações, mais você ganha.</p>
              </div>
            </div>

            <p className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
              Você também ganha ao investir dentro da plataforma, para dar um boost nas percentagens de ganhos por visualização e igualmente o público ganha ao assistir, partilhar e interagir com conteúdos — especialmente dentro da nossa futura rede social (S), com monetização integrada.
            </p>

            {/* DESTAQUE FINAL */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 text-center"
            >
              <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-pink-500">
                Aqui todos ganham — uma economia de participação e divulgação real.
              </p>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
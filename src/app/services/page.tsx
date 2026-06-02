"use client";

import { motion } from "framer-motion";
import { Target, Ticket, Fingerprint, MonitorPlay, FileText, Sparkles } from "lucide-react";

const services = [
  {
    title: "Campanhas Corporativas",
    description: "Desenvolvimento e gestão de campanhas institucionais desenhadas para gerar crescimento real e sustentável no mercado global.",
    icon: Target,
    color: "from-amber-400 to-orange-500",
    shadow: "group-hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
  },
  {
    title: "Eventos & Ativações",
    description: "Organização de exposições, eventos corporativos e ativações físicas que criam experiências imersivas e contacto direto com o público.",
    icon: Ticket,
    color: "from-yellow-400 to-amber-500",
    shadow: "group-hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
  },
  {
    title: "Branding & Identidade",
    description: "Construção de uma reputação institucional inquebrável. Do design visual ao posicionamento estratégico da marca EdenKingDom.",
    icon: Fingerprint,
    color: "from-orange-400 to-red-500",
    shadow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]"
  },
  {
    title: "Infraestruturas de Mídia",
    description: "Dominância visual do espaço urbano através de painéis LED de alta resolução, outdoors digitais e torres de comunicação.",
    icon: MonitorPlay,
    color: "from-amber-500 to-yellow-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
  },
  {
    title: "Conteúdos & Media",
    description: "Produção de alto nível de documentários, whitepapers, relatórios e peças de comunicação que estabelecem autoridade.",
    icon: FileText,
    color: "from-yellow-500 to-orange-600",
    shadow: "group-hover:shadow-[0_0_30px_rgba(234,179,8,0.2)]"
  }
];

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen bg-[#050505] text-white overflow-hidden pb-32">
      
      {/* 🌟 FUNDO CINEMATOGRÁFICO - TONS DE DOURADO/AMBER */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[10%] right-[-5%] w-[400px] h-[400px] bg-yellow-600/10 blur-[120px] rounded-full mix-blend-screen" />
        {/* Textura de ruído elegante */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8 pt-32">
        
        {/* ✨ HERO SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-semibold mb-8 backdrop-blur-md"
          >
            <Sparkles size={16} className="text-amber-400" />
            Alcance Global
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8"
          >
            Serviços{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 drop-shadow-sm">
              eMarketing
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 font-light leading-relaxed"
          >
            O E-Marketing é responsável pela promoção estratégica das marcas, serviços e iniciativas internas da EdenKingDom Corporation, em escala global.
          </motion.p>
        </div>

        {/* 🧩 GRID DE SERVIÇOS (BENTO BOX STYLE) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            // Fazer o último cartão ocupar 2 colunas no tablet/desktop para o grid ficar perfeito com 5 itens
            const isLast = index === 4; 
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:bg-white/[0.04] hover:border-amber-500/30 ${service.shadow} ${isLast ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                {/* Linha de brilho superior no hover */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent group-hover:w-1/2 transition-all duration-500" />

                <div className={`mb-6 p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-10 inline-block`}>
                  <Icon size={32} className="text-white drop-shadow-md" strokeWidth={1.5} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-amber-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-light">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </main>
  );
}
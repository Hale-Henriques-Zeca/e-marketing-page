import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#050505] text-gray-400 overflow-hidden mt-24">
      {/* 🌟 LINHA DE BRILHO SUPERIOR */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[1px] bg-gradient-to-r from-transparent via-pink-500/50 to-transparent blur-[2px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-10">
        
        {/* 📚 GRID PRINCIPAL DO FOOTER */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* 🏢 COLUNA 1: BRAND */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-extrabold tracking-tight text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600">e</span>
              Marketing
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mb-8">
              A divisão oficial de Marketing & Campaigns da EdenKingDom Group. Transformamos visão em impacto global, com métricas reais e crescimento sustentável.
            </p>
            
            {/* REDES SOCIAIS (Com SVGs embutidos para evitar erros) */}
            <div className="flex items-center gap-4">
              {/* Instagram SVG */}
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500/10 hover:border-pink-500/30 hover:text-pink-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              {/* Twitter/X SVG */}
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              {/* LinkedIn SVG */}
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/10 hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Mail (Lucide nativo) */}
              <a href="#" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* 📌 COLUNA 2: INSTITUCIONAL */}
          <div>
            <h4 className="text-amber-400 font-semibold mb-6 uppercase tracking-wider text-xs">Institucional</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/about" className="hover:text-amber-300 hover:translate-x-1 transition-all duration-300 inline-block">Sobre Nós</Link>
              </li>
              <li>
                <Link href="/about/ethics" className="hover:text-amber-300 hover:translate-x-1 transition-all duration-300 inline-block">Construindo Confiança</Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-amber-300 hover:translate-x-1 transition-all duration-300 inline-block">Carreiras</Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-amber-300 hover:translate-x-1 transition-all duration-300 inline-block">Imprensa</Link>
              </li>
            </ul>
          </div>

          {/* ⚖️ COLUNA 3: LEGAL */}
          <div>
            <h4 className="text-cyan-400 font-semibold mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/legal" className="hover:text-cyan-300 hover:translate-x-1 transition-all duration-300 inline-block">Avisos Jurídicos</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-cyan-300 hover:translate-x-1 transition-all duration-300 inline-block">Termos de Serviço</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-cyan-300 hover:translate-x-1 transition-all duration-300 inline-block">Política de Privacidade</Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-cyan-300 hover:translate-x-1 transition-all duration-300 inline-block">Gestão de Cookies</Link>
              </li>
            </ul>
          </div>

          {/* 🌍 COLUNA 4: COMUNIDADE */}
          <div>
            <h4 className="text-gray-200 font-semibold mb-6 uppercase tracking-wider text-xs">Comunidade</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Blog Oficial</Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Fórum & Membros</Link>
              </li>
              <li>
                <Link href="/announcements" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Anúncios Globais</Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">Centro de Ajuda</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* 🏁 BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>
            Since 2025 &copy; to {currentYear} EdenKingDom Corporation. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Global</span>
            <span className="hover:text-gray-300 cursor-pointer transition-colors">Português (PT)</span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Sistemas Operacionais
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
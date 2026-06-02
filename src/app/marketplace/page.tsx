"use client";

import MarketplaceCategories from "@/components/marketplace/MarketplaceCategories";
import FeaturedProducts from "@/components/marketplace/FeaturedProducts";
import { Search } from "lucide-react";

export default function MarketplacePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-pink-500/30">
      
      {/* Hero Section */}
      <section className="relative px-8 pt-32 pb-20 overflow-hidden flex flex-col items-center text-center">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-600/20 blur-[120px] rounded-full pointer-events-none" />
        
        <h1 className="relative text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-100 to-pink-500 drop-shadow-sm">
          EdenKingDom
          <span className="block text-3xl md:text-5xl mt-2 text-white/80 font-semibold">Marketplace</span>
        </h1>

        <p className="relative text-lg md:text-xl text-gray-400 max-w-2xl mb-12">
          Descubra o extraordinário. Moda, eletrónicos, beleza, casa e acessórios com uma experiência de luxo inigualável.
        </p>

        {/* Barra de Pesquisa Premium */}
        <div className="relative w-full max-w-2xl group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full py-2 pl-6 pr-2 shadow-2xl">
            <input 
              type="text" 
              placeholder="O que procura hoje?" 
              className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none text-lg"
            />
            <button className="p-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(236,72,153,0.3)] text-white">
              <Search size={22} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </section>

      <MarketplaceCategories />
      <FeaturedProducts />

    </main>
  );
}
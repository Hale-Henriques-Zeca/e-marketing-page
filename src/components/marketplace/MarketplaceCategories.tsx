"use client";

import Link from "next/link";
import { Shirt, Smartphone, Sparkles, Watch, Home } from "lucide-react";

const categories = [
  { name: "Moda", icon: Shirt, href: "/marketplace/category/fashion", color: "text-blue-400", bg: "bg-blue-400/10" },
  { name: "Eletrónicos", icon: Smartphone, href: "/marketplace/category/electronics", color: "text-purple-400", bg: "bg-purple-400/10" },
  { name: "Beleza", icon: Sparkles, href: "/marketplace/category/beauty", color: "text-pink-400", bg: "bg-pink-400/10" },
  { name: "Acessórios", icon: Watch, href: "/marketplace/category/accessories", color: "text-amber-400", bg: "bg-amber-400/10" },
  { name: "Casa", icon: Home, href: "/marketplace/category/home", color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

export default function MarketplaceCategories() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Explorar Categorias
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex flex-col items-center justify-center rounded-3xl bg-white/[0.02] border border-white/5 p-8 overflow-hidden hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(236,72,153,0.1)] hover:border-pink-500/30"
            >
              {/* Círculo com Ícone */}
              <div className={`p-5 rounded-2xl ${item.bg} mb-5 group-hover:scale-110 transition-transform duration-300 ease-out`}>
                <Icon size={32} className={item.color} strokeWidth={1.5} />
              </div>
              
              <div className="font-semibold text-gray-300 group-hover:text-white transition-colors">
                {item.name}
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
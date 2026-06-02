"use client";

import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Smart Watch Ultra Pro",
    description: "Monitorização avançada de saúde em tempo real",
    price: "4,500 MZN",
    rating: 4.9,
    reviews: 128,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 2,
    name: "Mochila de Couro Premium",
    description: "Design minimalista, resistente à água",
    price: "2,800 MZN",
    rating: 4.8,
    reviews: 94,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 3,
    name: "Auscultadores NC Max",
    description: "Som imersivo com cancelamento de ruído",
    price: "3,900 MZN",
    rating: 4.7,
    reviews: 256,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=600",
  },
  {
    id: 4,
    name: "Sneakers Urban X",
    description: "Conforto máximo e estilo para o dia a dia",
    price: "5,200 MZN",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-32">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
          Tendências Agora
        </h2>
        <Link href="/marketplace/products" className="text-pink-500 hover:text-pink-400 font-medium transition-colors flex items-center gap-2">
          Ver tudo <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-pink-500/20"
          >
            {/* Imagem do Produto */}
            <div className="relative h-64 overflow-hidden bg-zinc-900">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              {/* Badge "Novo" */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10 uppercase tracking-wider">
                Novo
              </div>
            </div>

            {/* Informação do Produto */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                <span className="text-sm font-medium text-gray-200">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>

              <h3 className="font-bold text-lg text-white mb-1 line-clamp-1">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-400 mb-5 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between mb-5">
                <p className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-600">
                  {product.price}
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="grid grid-cols-4 gap-3">
                <Link
                  href={`/marketplace/product/${product.id}`}
                  className="col-span-3 flex items-center justify-center px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm"
                >
                  Detalhes
                </Link>
                <button className="col-span-1 flex items-center justify-center rounded-2xl bg-pink-600 text-white font-medium hover:bg-pink-500 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] active:scale-95">
                  <ShoppingCart size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
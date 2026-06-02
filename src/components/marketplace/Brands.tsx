"use client";

import Link from "next/link";
import { ShoppingCart, Star, Crown } from "lucide-react";

// Lista de Produtos Oficiais E-Coin
const brandProducts = [
  {
    id: "br-1",
    name: "Boné E-Coin Oficial",
    description: "Design premium com logo E-Coin dourado em relevo.",
    price: "1,200 MZN",
    rating: 5.0,
    reviews: 84,
    // Substitui pelo nome exato do ficheiro se não renomeares
    image: "/brands/cap.png", 
  },
  {
    id: "br-2",
    name: "T-Shirt E-Coin Maximalist",
    description: "Para os verdadeiros crentes no ecossistema EdenKingDom.",
    price: "2,500 MZN",
    rating: 4.9,
    reviews: 156,
    image: "/brands/maximalist.png",
  },
  {
    id: "br-3",
    name: "T-Shirt Moon Mission",
    description: "Foguete E-Coin. A caminho da lua!",
    price: "2,500 MZN",
    rating: 4.8,
    reviews: 112,
    image: "/brands/moon-mission.png",
  },
  {
    id: "br-4",
    name: "T-Shirt Edenites To The Moon",
    description: "Edição branca clássica para a comunidade Edenite.",
    price: "2,200 MZN",
    rating: 4.9,
    reviews: 98,
    image: "/brands/edenites.png",
  },
  {
    id: "br-5",
    name: "T-Shirt E-Coiner Holder",
    description: "Astronauta relaxado. Só para quem faz HODL.",
    price: "2,800 MZN",
    rating: 5.0,
    reviews: 210,
    image: "/brands/holder.png",
  },
  {
    id: "br-6",
    name: "T-Shirt E-Coin Millionaire",
    description: "Estilo vintage/lavado com barra de loading.",
    price: "3,000 MZN",
    rating: 4.9,
    reviews: 345,
    image: "/brands/millionaire.png",
  },
  {
    id: "br-7",
    name: "T-Shirt Buy Dips Sell Rips",
    description: "O mantra do verdadeiro trader. Design limpo e direto para quem domina o mercado.",
    price: "2,500 MZN",
    rating: 4.8,
    reviews: 142,
    image: "/brands/buy-dips.png",
  },
  {
    id: "br-8",
    name: "Conjunto Polo & Boné E-Coin",
    description: "Elegância corporativa. Polo preto premium com bordados dourados no peito e nas costas.",
    price: "4,500 MZN",
    rating: 5.0,
    reviews: 89,
    image: "/brands/polo-cap.png",
  },
  {
    id: "br-9",
    name: "Kit Completo Lifestyle E-Coin",
    description: "O pacote definitivo: Sneakers, T-shirt, Calções, Boné, Caneca e Caneta E-Coin.",
    price: "12,500 MZN",
    rating: 4.9,
    reviews: 56,
    image: "/brands/full-kit.png",
  },
  {
    id: "br-10",
    name: "T-Shirt Revolution 2025",
    description: "Satoshi Nakamoto Money Reinvented. Edição comemorativa do ano de lançamento.",
    price: "2,800 MZN",
    rating: 4.7,
    reviews: 215,
    image: "/brands/revolution-text.png",
  },
  {
    id: "br-11",
    name: "T-Shirt Evolution of Money",
    description: "Da idade da pedra até à era digital. A evolução natural leva à E-Coin.",
    price: "3,000 MZN",
    rating: 4.9,
    reviews: 310,
    image: "/brands/evolution.png",
  },
  {
    id: "br-12",
    name: "T-Shirt Fist Revolution",
    description: "A revolução nas suas mãos. Arte vibrante com o poder da comunidade Edenite.",
    price: "2,500 MZN",
    rating: 4.8,
    reviews: 177,
    image: "/brands/fist-revolution.png",
  },
  {
    id: "br-13",
    name: "T-Shirt Eat Sleep Repeat",
    description: "A rotina do investidor de sucesso: Comer, Dormir, E-Coin, Repetir.",
    price: "2,200 MZN",
    rating: 4.6,
    reviews: 94,
    image: "/brands/eat-sleep.png",
  },
  {
    id: "br-14",
    name: "T-Shirt Classic Gold",
    description: "Menos é mais. O logotipo icónico gigante em dourado sobre algodão preto premium.",
    price: "2,000 MZN",
    rating: 4.9,
    reviews: 420,
    image: "/brands/classic-gold.png",
  },
  {
    id: "br-15",
    name: "T-Shirt Global Tech Map",
    description: "Estilo Cyber/Hacker com mapa global. Mostre que a E-Coin domina o mundo.",
    price: "3,200 MZN",
    rating: 5.0,
    reviews: 63,
    image: "/brands/global-map.png",
  },
  {
    id: "br-16",
    name: "T-Shirt E-Coin vs The Past",
    description: "A moeda do futuro a brilhar sobre as relíquias do passado. Estampa fotográfica nas costas.",
    price: "3,500 MZN",
    rating: 4.8,
    reviews: 118,
    image: "/brands/bitcoin-substitute.jpg",
  },
  {
    id: "br-17",
    name: "T-Shirt Tap to Pay",
    description: "O futuro dos pagamentos P2P. Transferências instantâneas e seguras com E-Coin.",
    price: "2,500 MZN",
    rating: 4.8,
    reviews: 134,
    image: "/brands/paying.jpg",
  },
  {
    id: "br-18",
    name: "T-Shirt E-Coin POS",
    description: "Pague o seu café ou jantar com E-Coin. A revolução nas suas compras do dia a dia.",
    price: "2,500 MZN",
    rating: 4.9,
    reviews: 210,
    image: "/brands/payment-pos.jpg",
  },
  {
    id: "br-19",
    name: "T-Shirt Retro Payments",
    description: "Design ilustrado vintage. 'Send and Request Money Fast!' com o poder da E-Coin.",
    price: "2,800 MZN",
    rating: 4.7,
    reviews: 88,
    image: "/brands/pos-system.jpg",
  },
  {
    id: "br-20",
    name: "T-Shirt Vitória Edenite",
    description: "A sensação indescritível de ver o seu portfólio a valorizar. Vista o sucesso.",
    price: "2,500 MZN",
    rating: 5.0,
    reviews: 145,
    image: "/brands/vitoria.jpg",
  },
  {
    id: "br-21",
    name: "T-Shirt Bull Market",
    description: "A tendência é de alta! Estampa vibrante com a clássica seta verde de crescimento.",
    price: "2,600 MZN",
    rating: 4.9,
    reviews: 312,
    image: "/brands/growth-arrow.jpg",
  },
  {
    id: "br-22",
    name: "T-Shirt City Hologram",
    description: "A moeda que domina a metrópole. Holograma 3D da E-Coin a brilhar na palma da mão.",
    price: "3,000 MZN",
    rating: 4.8,
    reviews: 176,
    image: "/brands/gold-hologram.jpg",
  },
  {
    id: "br-23",
    name: "T-Shirt Cyber Core",
    description: "A tecnologia blockchain materializada num design HUD futurista e dourado.",
    price: "3,200 MZN",
    rating: 5.0,
    reviews: 94,
    image: "/brands/tech-hud.png",
  },
  {
    id: "br-24",
    name: "T-Shirt Mobile Tech",
    description: "A verdadeira liberdade financeira. A magia do ecossistema E-Coin no seu ecrã.",
    price: "2,800 MZN",
    rating: 4.9,
    reviews: 250,
    image: "/brands/mobile-tech.jpg",
  },
  {
    id: "br-25",
    name: "T-Shirt Legal Tender",
    description: "Legitimidade e poder. A E-Coin ao lado das maiores moedas do mundo sob o martelo da lei.",
    price: "3,500 MZN",
    rating: 4.8,
    reviews: 112,
    image: "/brands/legal-gavel.jpg",
  },
  {
    id: "br-26",
    name: "Hoodie Zip-Up E-Coin",
    description: "Casaco premium com capuz e fechos desportivos neon. Logótipo dourado nas costas e no peito.",
    price: "5,500 MZN",
    rating: 5.0,
    reviews: 420,
    image: "/brands/hoodie-zipper.jpg",
  }
];

export default function Brands() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Crown size={14} />
            Coleção Oficial
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
            Merchandising <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-600">E-Coin</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brandProducts.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/10 overflow-hidden hover:bg-white/[0.08] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(245,158,11,0.15)] hover:border-amber-500/30"
          >
            {/* Imagem do Produto */}
            <div className="relative h-80 overflow-hidden bg-black/50 flex items-center justify-center p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
              />
              {/* Badge Exclusivo */}
              <div className="absolute top-4 left-4 z-20 bg-amber-500/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                Exclusivo
              </div>
            </div>

            {/* Informação do Produto */}
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-center gap-1 mb-3">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-sm font-medium text-gray-200">{product.rating}</span>
                <span className="text-sm text-gray-500">({product.reviews})</span>
              </div>

              <h3 className="font-bold text-xl text-white mb-2 line-clamp-1">
                {product.name}
              </h3>
              
              <p className="text-sm text-gray-400 mb-6 line-clamp-2">
                {product.description}
              </p>

              <div className="mt-auto flex items-center justify-between mb-5">
                <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-600">
                  {product.price}
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="grid grid-cols-4 gap-3">
                <Link
                  href={`/marketplace/product/${product.id}`}
                  className="col-span-3 flex items-center justify-center px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-colors text-sm"
                >
                  Ver Detalhes
                </Link>
                <button className="col-span-1 flex items-center justify-center rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all active:scale-95">
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
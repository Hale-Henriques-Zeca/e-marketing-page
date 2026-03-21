export default function HomePage() {
  return (
    <main className="min-h-screen bg-ekd-black text-ekd-pearl">
      <section className="max-w-7xl mx-auto px-8 py-28">
        <h1 className="text-5xl font-bold text-ekd-pink">
          E-Marketing · EdenKingDom Marketing
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-ekd-pearl/80">
          A divisão oficial de Marketing & Campaigns da EdenKingDom Corporation.
          Expansão global de marcas, eventos, conteúdos e infraestruturas.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="bg-ekd-pink px-6 py-3 rounded-lg font-semibold">
            Explorar Campanhas
          </button>

          <button className="border border-ekd-ocean px-6 py-3 rounded-lg text-ekd-ocean">
            Ver Infraestruturas
          </button>
        </div>
      </section>
    </main>
  );
}

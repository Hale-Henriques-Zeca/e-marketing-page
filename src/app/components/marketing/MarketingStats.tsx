export default function MarketingStats() {
  return (
    <div className="grid grid-cols-2 gap-4 text-sm">

      <div className="bg-ekd-brown/40 p-3 rounded-xl">
        <p className="text-ekd-yellow font-semibold">Views Públicas</p>
        <p className="text-2xl font-bold">128K</p>
      </div>

      <div className="bg-ekd-brown/40 p-3 rounded-xl">
        <p className="text-ekd-ocean font-semibold">Engajamento</p>
        <p className="text-2xl font-bold">63%</p>
      </div>

      <div className="bg-ekd-brown/40 p-3 rounded-xl">
        <p className="text-ekd-pink font-semibold">Cidades Ativas</p>
        <p className="text-2xl font-bold">38</p>
      </div>

      <div className="bg-ekd-brown/40 p-3 rounded-xl">
        <p className="font-semibold">Score Público</p>
        <p className="text-2xl font-bold">81</p>
      </div>

    </div>
  );
}

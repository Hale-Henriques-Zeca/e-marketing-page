const cities = [
  { name: "Maputo", score: 92 },
  { name: "Beira", score: 81 },
  { name: "Nhamatanda", score: 100 },
  { name: "Nampula", score: 76 },
  { name: "Chimoio", score: 25 },
  { name: "New York", score: 95 },
  { name: "Washington D.C.", score: 92 },
];

export default function MarketingCities() {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ekd-yellow mb-2">
        Top Cidades (Score)
      </h4>

      <ul className="space-y-2 text-sm">
        {cities.map((city) => (
          <li
            key={city.name}
            className="flex justify-between bg-ekd-black/40 p-2 rounded-lg"
          >
            <span>{city.name}</span>
            <span className="text-ekd-pink font-bold">{city.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

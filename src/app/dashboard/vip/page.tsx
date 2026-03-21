export default function VipPage() {
  const tiers = [
    { name: "Estagiário", price: "0", tasks: 5, reward: "base" },
    { name: "T1", price: "750", tasks: 5, reward: "padrão" },
    { name: "T2", price: "2,400", tasks: 8, reward: "maior alcance" },
    { name: "T3", price: "9,600", tasks: 16, reward: "territorial" },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-extrabold">VIP</h1>
      <p className="text-ekd-pearl/70 text-sm">
        Níveis aqui não prometem rendimento fixo — só desbloqueiam limites de participação e impacto.
      </p>

      <div className="space-y-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-3xl bg-[#0b1220] border border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div className="font-extrabold">{t.name}</div>
              <div className="text-ekd-ocean font-semibold">{t.price} MZN</div>
            </div>
            <div className="mt-2 text-sm text-ekd-pearl/70">
              Daily Tasks: <span className="text-ekd-pearl font-semibold">{t.tasks}</span> • Perfil: {t.reward}
            </div>

            <button className="mt-4 w-full py-3 rounded-2xl bg-ekd-ocean/20 border border-ekd-ocean/30 text-ekd-ocean font-semibold hover:bg-ekd-ocean/25 transition">
              Join (mock)
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

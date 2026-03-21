export default function StatsStrip() {
  const items = [
    { label: "Ontem", value: "65" },
    { label: "Hoje", value: "0" },
    { label: "Este mês", value: "0" },
    { label: "Total", value: "65" },
  ];

  return (
    <section className="rounded-3xl bg-[#F5C400] border border-white/10 p-5">
      <div className="grid grid-cols-4 gap-3">
        {items.map((it) => (
          <div key={it.label} className="text-center">
            <div className="text-xl font-extrabold">{it.value}</div>
            <div className="text-[11px] text-ekd-pearl/60 mt-1">{it.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

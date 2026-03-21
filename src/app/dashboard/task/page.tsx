export default function TaskPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-extrabold">Task</h1>
      <p className="text-ekd-pearl/70 text-sm">
        Aqui entra o feed de conteúdos/campanhas para participação (views, retenção, feedback, etc.).
      </p>

      <div className="rounded-3xl bg-[#0b1220] border border-white/10 p-5">
        <div className="text-sm font-semibold">Lista (mock)</div>
        <div className="mt-3 space-y-3">
          {["Campanha 01 — Institucional", "Campanha 02 — Evento", "Campanha 03 — Lançamento"].map((t) => (
            <div key={t} className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="font-semibold">{t}</div>
              <div className="text-xs text-ekd-pearl/60 mt-1">Status: disponível</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

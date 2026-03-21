import StatsStrip from "@/components/dashboard/StatsStrip";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen overflow-hidden text-ekd-pearl">
      

      
      {/* CONTEÚDO */}
      <div className="space-y-6">
        {/* CARD PRINCIPAL */}
        <section className="rounded-3xl bg-[#0b1220]/90 border border-white/10 p-5 backdrop-blur">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-ekd-pearl/70">Conta Interna</div>
              <div className="text-xl font-bold mt-1">E-Marketing Member</div>
            </div>

            <div className="text-right">
              <div className="text-xs text-ekd-pearl/60">Nível</div>
              <div className="inline-flex mt-1 px-3 py-1 rounded-full bg-ekd-pink/20 border border-ekd-pink/30 text-ekd-pink text-sm font-semibold">
                T1
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-ekd-pearl/60">Score Público</div>
              <div className="text-2xl font-extrabold mt-1">81</div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-ekd-pearl/60">Engajamento</div>
              <div className="text-2xl font-extrabold mt-1">63%</div>
            </div>
          </div>

          <div className="mt-4 text-xs text-ekd-pearl/60">
            Ciclo ativo: 24h • Métrica baseada em impacto real (views, retenção e score territorial).
          </div>
        </section>

        <StatsStrip />
        <QuickActions />

        <section className="rounded-3xl bg-[#0b1220]/90 border border-white/10 p-5 backdrop-blur">
          <div className="text-sm font-semibold">Notificações</div>

          <div className="mt-4 space-y-3">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-ekd-pearl/60">Hoje</div>
              <div className="mt-1 text-sm">
                Parabéns! A tua participação subiu o Score da tua cidade em{" "}
                <span className="text-green-400 font-semibold">+2</span>.
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <div className="text-xs text-ekd-pearl/60">Esta semana</div>
              <div className="mt-1 text-sm">
                Nova campanha institucional disponível em{" "}
                <span className="text-ekd-pink font-semibold">/campaigns</span>.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

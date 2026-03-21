"use client";

import MarketingStats from "./MarketingStats";
import MarketingCities from "./MarketingCities";
import MarketingTrend from "./MarketingTrend";

export default function MarketingOverview() {
  return (
    <aside className="relative w-full lg:w-[420px] rounded-2xl overflow-hidden">

      {/* 🎬 FUNDO CINEMATOGRÁFICO */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-ekd-black" />

        {/* Pink — atenção pública */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,138,0.35),transparent_55%)]" />

        {/* Ocean — alcance territorial */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,119,182,0.25),transparent_60%)]" />

        {/* Glow dourado sutil — valor institucional */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(245,196,0,0.08),transparent)]" />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 p-6 text-ekd-pearl">

        <h3 className="text-lg font-bold text-ekd-pink mb-1">
          Marketing Public Engagement
        </h3>

        <p className="text-sm text-ekd-pearl/70 mb-4">
          Métricas públicas de impacto, atenção e presença territorial.
        </p>

        <MarketingStats />

        <div className="mt-6">
          <MarketingCities />
        </div>

        <div className="mt-6">
          <MarketingTrend />
        </div>

      </div>
    </aside>
  );
}

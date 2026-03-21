import AuthGate from "@/components/dashboard/AuthGate";
import BottomNav from "@/components/dashboard/BottomNav";
import DashboardTopBar from "@/components/dashboard/DashboardTopBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthGate>
      <div className="relative min-h-screen overflow-hidden text-ekd-pearl">

  {/* 🎬 FUNDO CINEMATOGRÁFICO */}
  <div className="absolute inset-0">
    {/* Base preta */}
    <div className="absolute inset-0 bg-ekd-black" />

    {/* Glow pink */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,138,0.35),transparent_45%)]" />

    {/* Glow ocean */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,119,182,0.25),transparent_50%)]" />

    {/* Linha dourada */}
    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(245,196,0,0.08),transparent)]" />
  </div>
        
        <DashboardTopBar />

        {/* Conteúdo com espaço para bottom nav */}
        <main className="max-w-md mx-auto px-4 pt-6 pb-28">
          {children}
        </main>

        <BottomNav />
      </div>
    </AuthGate>
  );
}

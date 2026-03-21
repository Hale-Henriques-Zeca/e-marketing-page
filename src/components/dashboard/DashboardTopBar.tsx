"use client";

import { useRouter } from "next/navigation";

export default function DashboardTopBar() {
  const router = useRouter();

  function logout() {
    localStorage.removeItem("ekd_session");
    router.replace("/auth/login");
  }

  return (
    <header className="sticky top-0 z-50 bg-[#05070d]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-md mx-auto px-4 h-16 flex items-center justify-between">
        <div className="font-extrabold tracking-tight">
          <span className="text-ekd-pink">E-</span>Marketing
          <span className="text-ekd-pearl/60 text-xs ml-2">Dashboard</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            className="h-10 px-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-sm"
            onClick={() => router.push("/dashboard/profile")}
          >
            My
          </button>

          <button
            className="h-10 px-4 rounded-full bg-ekd-pink/20 border border-ekd-pink/30 text-ekd-pink hover:bg-ekd-pink/25 transition text-sm font-semibold"
            onClick={logout}
          >
            Exit
          </button>
        </div>
      </div>
    </header>
  );
}

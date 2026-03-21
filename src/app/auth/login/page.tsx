"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  function login(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // Sessão mock (fase 1)
    localStorage.setItem("ekd_session", "ok");
    setTimeout(() => router.push("/dashboard"), 400);
  }

  return (
    <main className="min-h-screen relative overflow-hidden text-ekd-black">

      {/* 🎬 FUNDO CINEMATOGRÁFICO — IGUAL HOME */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br
          from-ekd-pink/30
          via-ekd-yellow/20
          to-ekd-ocean/20
        " />
      </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 min-h-screen grid place-items-center px-6">
        <div className="
          w-full max-w-md
          rounded-3xl
          bg-ekd-pearl/90
          backdrop-blur
          border border-ekd-black/10
          shadow-xl
          p-8
        ">

          <h1 className="text-3xl font-extrabold text-ekd-pink">
            Login E-Marketing
          </h1>

          <p className="mt-2 text-sm text-ekd-black/70">
            Acesso institucional ao painel interno de Marketing & Campaigns.
          </p>

          <form onSubmit={login} className="mt-8 space-y-4">

            <input
              className="
                w-full rounded-xl
                bg-white
                border border-ekd-black/15
                px-4 py-3
                outline-none
                focus:ring-2 focus:ring-ekd-pink/40
              "
              placeholder="Usuário (fase inicial)"
            />

            <input
              type="password"
              className="
                w-full rounded-xl
                bg-white
                border border-ekd-black/15
                px-4 py-3
                outline-none
                focus:ring-2 focus:ring-ekd-pink/40
              "
              placeholder="Senha (fase inicial)"
            />

            <button
              disabled={loading}
              className="
                w-full mt-4
                py-3 rounded-xl
                bg-ekd-pink
                text-ekd-pearl
                font-semibold
                hover:bg-ekd-pink/90
                transition
                disabled:opacity-60
              "
            >
              {loading ? "Entrando…" : "Entrar"}
            </button>

            <button
              type="button"
              onClick={() => router.push("/auth/register")}
              className="
                w-full py-3 rounded-xl
                border border-ekd-ocean
                text-ekd-ocean
                hover:bg-ekd-ocean hover:text-ekd-pearl
                transition
              "
            >
              Criar conta (fase 2)
            </button>

          </form>
        </div>
      </div>
    </main>
  );
}

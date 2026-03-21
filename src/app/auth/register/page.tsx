"use client";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br
        from-ekd-pink/25
        via-ekd-yellow/15
        to-ekd-ocean/15
      " />

      <div className="relative z-10 min-h-screen grid place-items-center px-6">
        <div className="w-full max-w-md rounded-3xl bg-ekd-pearl/90 p-8 shadow-xl">

          <h1 className="text-2xl font-extrabold text-ekd-pink">
            Registro — Fase 2
          </h1>

          <p className="mt-3 text-sm text-ekd-black/70">
            O registo completo será ativado após a validação institucional.
          </p>

          <button
            onClick={() => router.push("/auth/login")}
            className="
              mt-8 w-full py-3 rounded-xl
              bg-ekd-ocean
              text-ekd-pearl
              hover:bg-ekd-ocean/90
              transition
            "
          >
            Voltar ao Login
          </button>

        </div>
      </div>
    </main>
  );
}

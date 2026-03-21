"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ok, setOk] = useState(false);

  useEffect(() => {
    // Se já está em /auth, não bloqueia
    if (pathname.startsWith("/auth")) {
      setOk(true);
      return;
    }

    const token = localStorage.getItem("ekd_session");
    if (!token) {
      router.replace("/auth/login");
      return;
    }

    setOk(true);
  }, [router, pathname]);

  if (!ok) {
    return (
      <div className="min-h-screen grid place-items-center text-ekd-pearl">
        <div className="text-center">
          <div className="text-xl font-semibold">A validar sessão…</div>
          <div className="mt-2 text-ekd-pearl/70 text-sm">
            A carregar o Dashboard interno.
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

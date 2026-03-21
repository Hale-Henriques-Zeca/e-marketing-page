"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/components/dashboard/helpers";

const tabs = [
  { label: "Home", href: "/dashboard" },
  { label: "Task", href: "/dashboard/task" },
  { label: "VIP", href: "/dashboard/vip" },
  { label: "Wallet", href: "/dashboard/wallet" },
  { label: "My", href: "/dashboard/profile" },
];

export default function BottomNav() {
  const path = usePathname();

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-50">
      <div className="max-w-md mx-auto px-4">
        <div className="rounded-3xl bg-[#0b1220]/90 backdrop-blur border border-white/10 px-3 py-3 flex items-center justify-between">
          {tabs.map((t) => {
            const active = path === t.href;
            return (
              <Link
                key={t.href}
                href={t.href}
                className={cn(
                  "px-4 py-2 rounded-2xl text-sm transition",
                  active ? "bg-white/10 text-ekd-pearl font-semibold" : "text-ekd-pearl/60 hover:text-ekd-pearl"
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

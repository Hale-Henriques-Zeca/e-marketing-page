import Link from "next/link";

const actions = [
  { label: "Wallet", href: "/dashboard/wallet" },
  { label: "Task", href: "/dashboard/task" },
  { label: "VIP", href: "/dashboard/vip" },
  { label: "Reports", href: "/dashboard/task" },
  { label: "Helpbook", href: "/about" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Infra", href: "/infrastructure" },
  { label: "Services", href: "/services" },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl bg-[#0b1220] border border-white/10 p-5">
      <div className="text-sm font-semibold">Acesso rápido</div>

      <div className="mt-4 grid grid-cols-4 gap-4">
        {actions.map((a) => (
          <Link key={a.label} href={a.href} className="group text-center">
            <div className="mx-auto h-16 w-16 rounded-full bg-[#0f1b2f] border border-white/10 grid place-items-center group-hover:bg-white/10 transition">
              <div className="h-7 w-7 rounded-full bg-ekd-ocean/30 border border-ekd-ocean/30" />
            </div>
            <div className="mt-2 text-[11px] text-ekd-pearl/80">{a.label}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

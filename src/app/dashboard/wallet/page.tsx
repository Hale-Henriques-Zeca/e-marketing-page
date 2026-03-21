export default function WalletPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-extrabold">Wallet</h1>

      <div className="rounded-3xl bg-[#F5C400] border border-white/10 p-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-ekd-pearl/60">Saldo de Comissão</div>
            <div className="text-2xl font-extrabold mt-1">65</div>
          </div>

          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-ekd-pearl/60">Saldo Principal</div>
            <div className="text-2xl font-extrabold mt-1">0</div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <button className="py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Recharge (mock)
          </button>
          <button className="py-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
            Withdrawal (mock)
          </button>
        </div>
      </div>

      <div className="rounded-3xl bg-[#F5C400] border border-white/10 p-5">
        <div className="text-sm font-semibold">Registos</div>
        <div className="mt-3 space-y-3">
          {[
            { id: "2026013118181785df38", amount: "750", status: "Success" },
            { id: "202601311812150ec69", amount: "750", status: "Submitted" },
          ].map((r) => (
            <div key={r.id} className="rounded-2xl bg-white/5 border border-white/10 p-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-ekd-pearl/60">{r.id}</div>
                <div className="text-lg font-extrabold mt-1">{r.amount}</div>
              </div>
              <div className="text-sm text-ekd-pearl/70">{r.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

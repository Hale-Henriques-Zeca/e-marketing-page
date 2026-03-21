export default function ProfilePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-extrabold">My</h1>

      <div className="rounded-3xl bg-[#1FA971] border border-white/10 p-5">
        <div className="text-sm text-ekd-pearl/60">ID interno</div>
        <div className="text-lg font-bold mt-1">840391457</div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-ekd-pearl/60">Cidade</div>
            <div className="font-semibold mt-1">Maputo</div>
          </div>
          <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
            <div className="text-xs text-ekd-pearl/60">Nível</div>
            <div className="font-semibold mt-1">T1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

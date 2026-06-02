interface StatCardProps {
  title: string;
  value: string | number;
  accent?: "pink" | "yellow" | "ocean";
}

export default function StatCard({
  title,
  value,
  accent = "pink",
}: StatCardProps) {
  const accentMap = {
    pink: "text-ekd-pink",
    yellow: "text-ekd-yellow",
    ocean: "text-ekd-ocean",
  };

  return (
    <div className="bg-ekd-brown/30 p-6 rounded-xl border border-ekd-black/40">
      <h4 className={`text-sm font-semibold ${accentMap[accent]}`}>
        {title}
      </h4>
      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}

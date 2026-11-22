// A small, static picture of a yard dashboard for the /yards hero.
// Every name and number here is made up.

const FREE = new Set([3, 10, 17, 26, 31, 40]);
const LATE = new Set([8, 35]);

const KPIS = [
  { label: "Spots filled", value: "42", suffix: "/ 48" },
  { label: "Paid this month", value: "$9,450" },
  { label: "Leases signed", value: "12" },
  { label: "Gate codes", value: "In sync", accent: true },
];

export function YardDashboard() {
  return (
    <div
      role="img"
      aria-label="Example yard dashboard showing spots filled, payments, leases and a live lot map"
      className="w-full rounded-3xl border border-white/10 bg-[#0d0c1c] p-5 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-6"
    >
      <div className="flex items-center justify-between">
        <span className="text-base font-medium text-white">Sonoran Truck Yard</span>
        <span className="flex items-center gap-2 text-xs text-muted">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Live
        </span>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2.5">
        {KPIS.map((k) => (
          <div key={k.label} className="rounded-xl bg-white/[0.05] px-3.5 py-3">
            <div className="text-xs text-muted">{k.label}</div>
            <div className={`mt-0.5 text-xl font-medium sm:text-2xl ${k.accent ? "text-accent" : "text-white"}`}>
              {k.value}
              {k.suffix && <span className="ml-1 text-sm text-muted">{k.suffix}</span>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-12 gap-1.5" aria-hidden="true">
        {Array.from({ length: 48 }, (_, i) => (
          <span
            key={i}
            className={`h-5 rounded-[5px] sm:h-6 ${
              FREE.has(i) ? "bg-white/[0.08]" : LATE.has(i) ? "bg-[#ff6b6b]/75" : "bg-accent/55"
            }`}
          />
        ))}
      </div>
      <div className="mt-2.5 text-xs text-muted">Lot A · Lot B</div>
    </div>
  );
}

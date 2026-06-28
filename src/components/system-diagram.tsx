// The interconnected-systems diagram, kept from the original case study and now
// shown inside the Paddock PMS context on the Work page.
export function SystemDiagram() {
  const nodes = [
    { label: "Admin Dashboard", x: "50%", y: "8%", primary: true },
    { label: "Booking Page", x: "15%", y: "28%" },
    { label: "Customer Portal", x: "85%", y: "28%" },
    { label: "Lease Engine", x: "25%", y: "50%" },
    { label: "Invoice System", x: "75%", y: "50%" },
    { label: "QuickBooks", x: "15%", y: "72%" },
    { label: "AI Parser", x: "50%", y: "72%" },
    { label: "GoHighLevel", x: "85%", y: "72%" },
    { label: "Gate & Inventory", x: "50%", y: "92%" },
  ];

  const lineStroke = "rgba(0,229,255,0.15)";

  return (
    <div className="relative aspect-[4/3] w-full">
      {/* Connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
      >
        <line x1="200" y1="36" x2="60" y2="84" stroke={lineStroke} strokeWidth="1" />
        <line x1="200" y1="36" x2="340" y2="84" stroke={lineStroke} strokeWidth="1" />
        <line x1="60" y1="96" x2="100" y2="150" stroke={lineStroke} strokeWidth="1" />
        <line x1="340" y1="96" x2="300" y2="150" stroke={lineStroke} strokeWidth="1" />
        <line x1="100" y1="162" x2="60" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="100" y1="162" x2="200" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="300" y1="162" x2="340" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="300" y1="162" x2="200" y2="216" stroke={lineStroke} strokeWidth="1" />
        <line x1="200" y1="228" x2="200" y2="270" stroke={lineStroke} strokeWidth="1" />
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <div
          key={node.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: node.x, top: node.y }}
        >
          <div
            className={`whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium ${
              node.primary
                ? "border-[rgba(0,229,255,0.3)] bg-[rgba(0,229,255,0.15)] text-accent"
                : "border-[rgba(0,229,255,0.2)] bg-[rgba(0,229,255,0.08)] text-accent/80"
            }`}
          >
            {node.label}
          </div>
        </div>
      ))}
    </div>
  );
}

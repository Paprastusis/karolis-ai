"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { MessageSquare, Sparkles } from "lucide-react";
import { IntakeWizard } from "./intake-wizard";
import { AgentChat } from "./agent-chat";

// The agent mode only renders when the server says the API key exists, so the
// page never shows a chat that can't answer.
export function ContactModes({ agentEnabled }: { agentEnabled: boolean }) {
  const [mode, setMode] = useState<"wizard" | "agent">("wizard");
  // "Get the Blueprint" CTAs link to /contact?intent=blueprint so those leads
  // arrive tagged. Requires a <Suspense> boundary around this component.
  const searchParams = useSearchParams();
  const intent =
    searchParams.get("intent") === "blueprint" ? "blueprint" : undefined;

  if (!agentEnabled) {
    return <IntakeWizard intent={intent} />;
  }

  return (
    <div>
      <div
        className="mb-6 flex justify-center gap-2"
        role="tablist"
        aria-label="How would you like to get in touch?"
      >
        <ModeTab
          active={mode === "wizard"}
          onClick={() => setMode("wizard")}
          icon={<MessageSquare className="h-3.5 w-3.5" aria-hidden="true" />}
          label="A few quick questions"
        />
        <ModeTab
          active={mode === "agent"}
          onClick={() => setMode("agent")}
          icon={<Sparkles className="h-3.5 w-3.5" aria-hidden="true" />}
          label="Ask my agent"
        />
      </div>
      {mode === "wizard" ? <IntakeWizard intent={intent} /> : <AgentChat />}
    </div>
  );
}

function ModeTab({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200 ${
        active
          ? "border-accent/60 bg-accent/[0.08] text-white"
          : "border-white/10 bg-white/[0.02] text-muted hover:border-white/25 hover:text-body"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}

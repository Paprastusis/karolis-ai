"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";

const GREETING =
  "Hey. Tell me about your business and what still runs on manual work.";
const MAX_USER_TURNS = 12;

type ChatMessage = { role: "user" | "assistant"; content: string };

const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-muted transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent";

export function AgentChat() {
  // The greeting is rendered locally; only real exchanges go to the API.
  const [convo, setConvo] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [leadName, setLeadName] = useState("");
  const [leadEmail, setLeadEmail] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const chatRef = useRef<HTMLDivElement>(null);

  const userTurns = convo.filter((m) => m.role === "user").length;
  const capped = userTurns >= MAX_USER_TURNS;
  const hasReply = convo.some((m) => m.role === "assistant");

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight });
  }, [convo, pending]);

  async function send() {
    const text = input.trim();
    if (!text || pending || capped) return;
    setError("");
    setInput("");
    const next: ChatMessage[] = [...convo, { role: "user", content: text }];
    setConvo(next);
    setPending(true);
    try {
      const res = await fetch("/api/agent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok) {
        throw new Error(data?.error ?? "The agent hit a snag. Try again.");
      }
      setConvo([...next, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "The agent hit a snag. Try again.");
      // Roll the unanswered message back into the input so nothing is lost.
      setConvo(convo);
      setInput(text);
    } finally {
      setPending(false);
    }
  }

  async function sendToKarolis() {
    if (!leadEmail.trim() || sendState === "sending") return;
    setSendState("sending");
    const transcript = [
      `Agent: ${GREETING}`,
      ...convo.map((m) => `${m.role === "user" ? "Visitor" : "Agent"}: ${m.content}`),
    ].join("\n");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: leadName.trim() || "Agent visitor",
          email: leadEmail.trim(),
          message: transcript,
          source: "agent",
        }),
      });
      if (!res.ok) throw new Error();
      setSendState("sent");
    } catch {
      setSendState("failed");
    }
  }

  return (
    <div className="flex flex-col">
      {/* Chat window */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
        <div
          ref={chatRef}
          className="flex max-h-[420px] min-h-[220px] flex-col gap-3 overflow-y-auto pr-1"
          aria-live="polite"
        >
          <Bubble role="assistant">{GREETING}</Bubble>
          {convo.map((m, i) => (
            <Bubble key={i} role={m.role}>
              {m.content}
            </Bubble>
          ))}
          {pending && (
            <Bubble role="assistant">
              <span className="text-muted">…</span>
            </Bubble>
          )}
        </div>

        {error && (
          <p className="mt-3 text-sm text-red-400" role="alert">
            {error}
          </p>
        )}

        <div className="mt-4 flex gap-2">
          <input
            className={inputClasses}
            maxLength={1500}
            placeholder={
              capped
                ? "That's plenty of context. Send it to me below."
                : "Type about your business…"
            }
            value={input}
            disabled={pending || capped}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            aria-label="Message to the intake agent"
          />
          <button
            type="button"
            onClick={send}
            disabled={pending || capped || !input.trim()}
            aria-label="Send message"
            className="inline-flex shrink-0 items-center justify-center rounded-lg bg-accent px-4 text-[#070612] transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Send transcript to Karolis */}
      {hasReply && (
        <div className="mt-4 rounded-2xl border border-accent/20 bg-accent/[0.04] p-5">
          {sendState === "sent" ? (
            <p className="text-sm text-body">
              Sent. I read every one of these myself and will follow up shortly.
            </p>
          ) : (
            <>
              <p className="mb-3 flex items-center gap-2 text-sm font-medium text-white">
                <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
                Want me to pick this up from here?
              </p>
              <div className="flex flex-col gap-2 sm:flex-row">
                <input
                  className={inputClasses}
                  placeholder="Your name (optional)"
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  aria-label="Your name"
                />
                <input
                  className={inputClasses}
                  type="email"
                  placeholder="you@example.com"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  aria-label="Your email"
                />
                <button
                  type="button"
                  onClick={sendToKarolis}
                  disabled={!leadEmail.trim() || sendState === "sending"}
                  className="shrink-0 rounded-lg bg-accent px-4 py-3 text-sm font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {sendState === "sending" ? "Sending…" : "Send to Karolis"}
                </button>
              </div>
              {sendState === "failed" && (
                <p className="mt-2 text-sm text-red-400" role="alert">
                  That didn&apos;t go through. Email me directly at{" "}
                  <a href="mailto:karolistamas@gmail.com" className="text-accent">
                    karolistamas@gmail.com
                  </a>
                  .
                </p>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Bubble({
  role,
  children,
}: {
  role: "user" | "assistant";
  children: React.ReactNode;
}) {
  return (
    <div
      className={`max-w-[85%] whitespace-pre-wrap break-words rounded-xl border px-4 py-2.5 text-sm leading-relaxed ${
        role === "assistant"
          ? "self-start border-white/10 bg-white/[0.05] text-body"
          : "self-end border-accent/30 bg-accent/[0.08] text-white"
      }`}
    >
      {children}
    </div>
  );
}

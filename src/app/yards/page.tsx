import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BellRing,
  Check,
  ChartColumn,
  CreditCard,
  KeyRound,
  LayoutGrid,
  MapPin,
  PenLine,
  RefreshCw,
  ShieldCheck,
  UserRound,
  X,
} from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import { FadeInView } from "@/components/animations/fade-in-view";
import { BookCallLink } from "@/components/book-call-link";
import { CallLink } from "@/components/call-link";
import { Faq } from "@/components/faq";
import { YardDashboard } from "@/components/yard-dashboard";
import { FEATURES, LOCATION_LINE, PROBLEMS, STEPS, YARDS_FAQ } from "@/content/yards";
import { YARD_PAGES } from "@/content/yard-pages";

export const metadata: Metadata = {
  title: "Software for truck parking, storage and RV yards",
  description:
    "One system for booking, leases, payments, collections and gate codes, built around how your yard runs. From a Phoenix yard operator who writes the software. Remote across the US.",
  alternates: { canonical: "/yards" },
  openGraph: {
    title: "Run your yard from one system",
    description:
      "Booking, leases, payments, collections and gate codes in one place, built around how your yard runs.",
    url: "/yards",
  },
};

const ICONS = { LayoutGrid, PenLine, CreditCard, RefreshCw, BellRing, KeyRound, ShieldCheck, UserRound, ChartColumn };

function Location({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-sm text-muted ${className}`}>
      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
      {LOCATION_LINE}
    </p>
  );
}

export default function YardsPage() {
  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#070612] pt-10 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-12">
          <div>
            <BlurIn>
              <p className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
                For truck parking, storage and RV yards
              </p>
            </BlurIn>
            <BlurIn delay={0.1}>
              <h1 className="mt-4 text-4xl sm:mt-6 font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
                Run your yard from{" "}
                <span className="font-serif italic text-accent">one system.</span>
              </h1>
            </BlurIn>
            <BlurIn delay={0.2}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-body sm:mt-6 sm:text-lg">
                Booking, leases, payments, collections and gate codes in one
                place, built around how your yard already works. My own yards
                run on it every day.
              </p>
            </BlurIn>
            <BlurIn delay={0.3}>
              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
                <BookCallLink placement="yards_hero" />
                {/* Phones get the call button in the bottom bar instead. */}
                <span className="hidden sm:inline-flex">
                  <CallLink placement="yards_hero" />
                </span>
                <a
                  href="#how"
                  className="inline-flex items-center gap-2 rounded-full px-2 py-3 font-medium text-white/80 transition-colors duration-300 hover:text-white"
                >
                  How it works
                  <ArrowDown className="h-4 w-4" />
                </a>
              </div>
              <Location className="mt-6" />
            </BlurIn>
          </div>
          <BlurIn delay={0.35}>
            <YardDashboard />
          </BlurIn>
        </div>
      </section>

      {/* The three problems from the ads */}
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              Sound <span className="font-serif italic">familiar?</span>
            </h2>
          </FadeInView>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((p, i) => (
              <FadeInView key={p.problem} delay={i * 0.12}>
                <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-[#070612] p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6b6b]/15">
                      <X className="h-4 w-4 text-[#ff6b6b]" aria-hidden="true" />
                    </span>
                    <p className="text-lg font-medium text-white/70">{p.problem}</p>
                  </div>
                  <div className="my-5 h-px bg-white/10" />
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent">
                      <Check className="h-4 w-4 text-[#070612]" aria-hidden="true" />
                    </span>
                    <p className="text-lg font-medium text-white">{p.fix}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* What it can include */}
      <section className="w-full bg-[#070612] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              Pick what your yard <span className="font-serif italic">needs.</span>
            </h2>
            <p className="mt-4 max-w-xl text-body">
              Every system is built from scratch around your yard. Nothing you
              won&apos;t use.
            </p>
          </FadeInView>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => {
              const Icon = ICONS[f.icon];
              return (
                <FadeInView key={f.title} delay={(i % 3) * 0.08}>
                  <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-medium text-white">{f.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">{f.text}</p>
                    </div>
                  </div>
                </FadeInView>
              );
            })}
          </div>
        </div>
      </section>

      {/* Operator, not an agency */}
      <section className="w-full bg-surface py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-12">
          <FadeInView>
            <p className="text-2xl font-medium leading-snug text-white md:text-3xl md:leading-snug">
              I run my own truck parking and outdoor storage yards in Phoenix.{" "}
              <span className="text-body">
                The software I build for you starts from the same problems I
                deal with every day.
              </span>
            </p>
          </FadeInView>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="w-full scroll-mt-24 bg-[#070612] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
              How it <span className="font-serif italic">works.</span>
            </h2>
          </FadeInView>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <FadeInView key={s.title} delay={i * 0.12}>
                <span className="text-5xl font-bold text-accent/25">0{i + 1}</span>
                <h3 className="mt-2 text-xl font-medium text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
              </FadeInView>
            ))}
          </div>
        </div>
      </section>

      {/* Pages for each kind of yard and each common problem */}
      <section className="w-full bg-surface py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 lg:px-12">
          {([
            ["By kind of yard", "type"],
            ["By problem", "problem"],
          ] as const).map(([heading, group]) => (
            <div key={group}>
              <h2 className="text-2xl font-medium text-white md:text-3xl">{heading}</h2>
              <ul className="mt-6 flex flex-col gap-3">
                {YARD_PAGES.filter((p) => p.group === group).map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/yards/${p.slug}`}
                      className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#070612] px-5 py-4 text-white transition-colors hover:border-accent/40"
                    >
                      {p.label}
                      <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Questions (also published as FAQ structured data) */}
      <Faq items={YARDS_FAQ} />

      {/* Final CTA */}
      <section className="w-full bg-surface py-24 lg:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              I understand the business.
              <span className="block font-serif italic text-accent">Let me build yours.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.1} className="mt-8 flex flex-col items-center">
            <BookCallLink placement="yards_closing" />
            <Location className="mt-5" />
          </FadeInView>
        </div>
      </section>
    </>
  );
}

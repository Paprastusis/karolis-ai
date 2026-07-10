"use client";

import { useState } from "react";
import Link from "next/link";
import { FadeInView } from "./animations/fade-in-view";

export function CostCalculator() {
  const [tasks, setTasks] = useState(40);
  const [minutes, setMinutes] = useState(15);
  const [rate, setRate] = useState(28);

  const hoursPerWeek = (tasks * minutes) / 60;
  const hoursPerMonth = Math.round(hoursPerWeek * 4.33);
  const costPerYear = Math.round(hoursPerWeek * rate * 52);

  return (
    <section className="w-full bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl">
            What is manual work{" "}
            <span className="font-serif italic">costing you?</span>
          </h2>
          <p className="mt-3 text-base text-muted">
            Move the sliders. Rough math, not a promise.
          </p>
        </FadeInView>

        <FadeInView delay={0.1}>
          <div className="mt-10 flex flex-col gap-5">
            <Slider
              label="Manual tasks a week"
              min={5}
              max={200}
              step={5}
              value={tasks}
              display={String(tasks)}
              onChange={setTasks}
            />
            <Slider
              label="Minutes per task"
              min={1}
              max={30}
              step={1}
              value={minutes}
              display={String(minutes)}
              onChange={setMinutes}
            />
            <Slider
              label="What an hour costs you"
              min={15}
              max={100}
              step={1}
              value={rate}
              display={`$${rate}`}
              onChange={setRate}
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white/[0.04] p-5">
              <p className="text-xs text-muted">Hours a month</p>
              <p className="mt-1 text-2xl font-medium text-white">
                {hoursPerMonth.toLocaleString()}
              </p>
            </div>
            <div className="rounded-2xl bg-accent/[0.06] p-5">
              <p className="text-xs text-muted">Cost a year</p>
              <p className="mt-1 text-2xl font-medium text-accent">
                ${costPerYear.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              A system that removes most of this usually pays for itself in a
              few months. The exact number comes from the Blueprint.
            </p>
            <Link
              href="/contact?intent=blueprint"
              className="inline-flex shrink-0 items-center rounded-full border-2 border-accent bg-transparent px-6 py-2.5 text-sm font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]"
            >
              Get the exact number
            </Link>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}

function Slider({
  label,
  min,
  max,
  step,
  value,
  display,
  onChange,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  display: string;
  onChange: (v: number) => void;
}) {
  // Stacks label above the track on phones; single row from sm: up.
  return (
    <label className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
      <span className="flex items-baseline justify-between sm:w-44 sm:shrink-0">
        <span className="text-sm text-body">{label}</span>
        <span className="text-sm font-medium text-accent sm:hidden">{display}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 sm:flex-1"
        style={{ accentColor: "#00E5FF" }}
      />
      <span className="hidden w-12 shrink-0 text-right text-sm font-medium text-accent sm:inline">
        {display}
      </span>
    </label>
  );
}

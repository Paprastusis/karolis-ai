"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FadeInView } from "./animations/fade-in-view";
import { StatusBadge } from "./project-card";
import { featuredProjects } from "@/content/projects";

export function FeaturedWork() {
  return (
    <section id="work" className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <FadeInView>
          <h2 className="text-3xl font-medium text-white md:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="font-serif italic">built.</span>
          </h2>
        </FadeInView>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <FadeInView key={project.slug} delay={i * 0.1}>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(0,229,255,0.3)] hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(0,229,255,0.1)]"
              >
                <StatusBadge status={project.status} />
                <h3 className="mt-5 text-xl font-medium text-white">
                  {project.name}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-body">
                  {project.homeTagline ?? project.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                  View live
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </a>
            </FadeInView>
          ))}
        </div>

        <FadeInView delay={0.2} className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 transition-colors duration-300 hover:text-accent"
          >
            See all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeInView>
      </div>
    </section>
  );
}

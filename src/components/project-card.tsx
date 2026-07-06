import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { SystemDiagram } from "./system-diagram";

export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-accent/20 bg-accent/[0.08] px-3 py-1 text-xs font-medium text-accent/90">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {status}
    </span>
  );
}

export function LiveLink({ url }: { url: string }) {
  const display = url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group/live inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-300 hover:text-accent-hover"
    >
      {display}
      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5" />
    </a>
  );
}

// Full, detailed card used on the Work page.
export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[rgba(0,229,255,0.3)] hover:bg-white/[0.05] lg:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-medium text-white">{project.name}</h3>
          <p className="mt-1.5 text-base text-body">{project.tagline}</p>
        </div>
        <StatusBadge status={project.status} />
      </div>

      {/* Paddock's visual is the system diagram below; others get a screenshot. */}
      {project.image && project.slug !== "paddock-pms" && (
        <div className="mt-7 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
          <Image
            src={project.image}
            alt={`${project.name} screenshot`}
            width={1400}
            height={875}
            className="w-full"
          />
        </div>
      )}

      {project.problem && (
        <div className="mt-7">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
            The problem
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-body">
            {project.problem}
          </p>
        </div>
      )}

      <div className="mt-5">
        <h4 className="text-xs font-semibold uppercase tracking-widest text-muted">
          What I built
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-body">
          {project.whatIBuilt}
        </p>
      </div>

      {/* The interconnected-systems diagram lives in the Paddock context. */}
      {project.slug === "paddock-pms" && (
        <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.02] p-6">
          <SystemDiagram />
        </div>
      )}

      {project.stack && project.stack.length > 0 && (
        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-white/70"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {project.liveUrl && (
        <div className="mt-7 border-t border-white/[0.06] pt-5">
          <LiveLink url={project.liveUrl} />
        </div>
      )}
    </article>
  );
}

// Smaller, lighter card used for side projects.
export function ProjectCardLight({ project }: { project: Project }) {
  return (
    <article className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-[rgba(0,229,255,0.25)] hover:bg-white/[0.04]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-medium text-white">{project.name}</h3>
        <StatusBadge status={project.status} />
      </div>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
        {project.whatIBuilt}
      </p>
      {project.liveUrl && (
        <div className="mt-5">
          <LiveLink url={project.liveUrl} />
        </div>
      )}
    </article>
  );
}

import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/fade-in-view";
import { ProjectCard, ProjectCardLight } from "@/components/project-card";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work — Karolis Tamosiunas",
  description:
    "A selection of what I've built, from a multi-tenant SaaS to the software that runs a real storage business.",
};

const detailedProjects = projects.filter((p) => !p.light);
const lightProjects = projects.filter((p) => p.light);

export default function WorkPage() {
  return (
    <section className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <FadeInView>
          <h1 className="text-4xl font-medium text-white md:text-5xl">
            Selected <span className="font-serif italic">work.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-body">
            A selection of what I&apos;ve built, from storage and trucking to
            inventory and back-office operations, and really any business that
            runs on manual work. Some client work isn&apos;t shown here for
            privacy.
          </p>
        </FadeInView>

        <div className="mt-16 flex flex-col gap-8">
          {detailedProjects.map((project, i) => (
            <FadeInView key={project.slug} delay={i * 0.05}>
              <ProjectCard project={project} />
            </FadeInView>
          ))}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {lightProjects.map((project, i) => (
            <FadeInView key={project.slug} delay={i * 0.05}>
              <ProjectCardLight project={project} />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}

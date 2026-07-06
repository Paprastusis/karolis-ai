import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex w-full flex-col items-center justify-center bg-[#070612] px-6 py-36 text-center lg:py-44">
      <span className="relative text-7xl font-bold text-accent/20">
        404
        <span className="absolute inset-0 text-7xl font-bold text-accent/10 blur-md">
          404
        </span>
      </span>
      <h1 className="mt-6 text-3xl font-medium text-white md:text-4xl">
        This page doesn&apos;t <span className="font-serif italic">exist.</span>
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-body">
        The link may be old, or the page moved.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-[#070612] transition-all duration-300 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
        >
          Back home
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center rounded-full border-2 border-accent bg-transparent px-6 py-3 font-medium text-accent transition-all duration-300 hover:bg-[rgba(0,229,255,0.1)]"
        >
          See my work
        </Link>
      </div>
    </section>
  );
}

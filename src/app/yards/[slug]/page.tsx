import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check, MapPin, X } from "lucide-react";
import { BlurIn } from "@/components/animations/blur-in";
import { FadeInView } from "@/components/animations/fade-in-view";
import { BookCallLink } from "@/components/book-call-link";
import { CallLink } from "@/components/call-link";
import { Faq } from "@/components/faq";
import { LOCATION_LINE } from "@/content/yards";
import { YARD_PAGES, getYardPage } from "@/content/yard-pages";
import { SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

// Only the pages listed in YARD_PAGES exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return YARD_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getYardPage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/yards/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `/yards/${page.slug}`,
    },
  };
}

function Location({ className = "" }: { className?: string }) {
  return (
    <p className={`flex items-center gap-2 text-sm text-muted ${className}`}>
      <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
      {LOCATION_LINE}
    </p>
  );
}

export default async function YardTopicPage({ params }: Props) {
  const { slug } = await params;
  const page = getYardPage(slug);
  if (!page) notFound();

  const related = YARD_PAGES.filter((p) => p.slug !== page.slug);
  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Yards", item: `${SITE_URL}/yards` },
      { "@type": "ListItem", position: 2, name: page.label, item: `${SITE_URL}/yards/${page.slug}` },
    ],
  };

  return (
    <>
      {/* Hero */}
      <section className="w-full bg-[#070612] pt-10 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <BlurIn>
            <Link
              href="/yards"
              className="inline-flex rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
            >
              {page.kicker}
            </Link>
          </BlurIn>
          <BlurIn delay={0.1}>
            <h1 className="mt-4 text-4xl sm:mt-6 font-medium leading-tight text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              {page.title}{" "}
              <span className="font-serif italic text-accent">{page.titleAccent}</span>
            </h1>
          </BlurIn>
          <BlurIn delay={0.2}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-body sm:mt-6 sm:text-lg">{page.intro}</p>
          </BlurIn>
          <BlurIn delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
              <BookCallLink placement={`yards_${page.slug}`} />
              {/* Phones get the call button in the bottom bar instead. */}
              <span className="hidden sm:inline-flex">
                <CallLink placement={`yards_${page.slug}`} />
              </span>
            </div>
            <Location className="mt-6" />
          </BlurIn>
        </div>
      </section>

      {/* What it looks like today */}
      <section className="w-full bg-surface py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              Sound <span className="font-serif italic">familiar?</span>
            </h2>
          </FadeInView>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.pains.map((pain, i) => (
              <FadeInView key={pain} delay={(i % 2) * 0.08}>
                <li className="flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-[#070612] p-5">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ff6b6b]/15">
                    <X className="h-4 w-4 text-[#ff6b6b]" aria-hidden="true" />
                  </span>
                  <span className="text-base text-white/80">{pain}</span>
                </li>
              </FadeInView>
            ))}
          </ul>
        </div>
      </section>

      {/* What the system can include */}
      <section className="w-full bg-[#070612] py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium text-white md:text-4xl">
              What it can <span className="font-serif italic">handle.</span>
            </h2>
            <p className="mt-4 max-w-xl text-body">
              Every system is built from scratch around your yard. You pick what
              it does.
            </p>
          </FadeInView>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {page.includes.map((item, i) => (
              <FadeInView key={item.title} delay={(i % 2) * 0.08}>
                <div className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent">
                    <Check className="h-4 w-4 text-[#070612]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-medium text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-body">{item.text}</p>
                  </div>
                </div>
              </FadeInView>
            ))}
          </div>
          <FadeInView>
            <p className="mt-12 max-w-2xl text-xl font-medium leading-snug text-white">
              {page.note}
            </p>
          </FadeInView>
        </div>
      </section>

      <Faq items={page.faq} />

      {/* Other pages */}
      <section className="w-full bg-surface py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          <h2 className="text-2xl font-medium text-white md:text-3xl">More for yard owners</h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li>
              <Link
                href="/yards"
                className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-[#070612] px-5 py-4 text-white transition-colors hover:border-accent/40"
              >
                One system for your whole yard
                <ArrowRight className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              </Link>
            </li>
            {related.map((p) => (
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
      </section>

      {/* Closing call to action */}
      <section className="w-full bg-[#070612] py-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-12">
          <FadeInView>
            <h2 className="text-3xl font-medium leading-tight text-white md:text-4xl lg:text-5xl">
              I understand the business.
              <span className="block font-serif italic text-accent">Let me build yours.</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.1} className="mt-8 flex flex-col items-center">
            <BookCallLink placement={`yards_${page.slug}_closing`} />
            <Location className="mt-5" />
          </FadeInView>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

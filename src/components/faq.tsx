import { faq } from "@/content/faq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="w-full bg-[#070612] py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <h2 className="text-3xl font-medium text-white md:text-4xl">
          Common <span className="font-serif italic">questions.</span>
        </h2>

        <div className="mt-10 flex flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition-colors duration-300 open:border-accent/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl leading-none text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-body">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}

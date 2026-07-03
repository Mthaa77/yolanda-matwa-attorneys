"use client";

import { motion } from "framer-motion";
import { Star, Quote, ArrowRight, PenLine } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";
import { FIRM } from "@/lib/site-data";

export function TestimonialsScaffold() {
  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Client Voices"
          title="Built on Trust, Earned Over Time"
          description="We are building a practice where clients recommend us to their closest friends and family. Here is what that looks like — and how you can add your voice."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          {/* Left — the honest "coming soon" statement */}
          <ScrollReveal className="lg:col-span-3" y={30}>
            <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-cream/40 p-8 shadow-sm sm:p-10">
              <Quote className="absolute -right-2 -top-2 h-24 w-24 text-gold/[0.07]" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: 0.1 + i * 0.08,
                      }}
                    >
                      <Star className="h-5 w-5 fill-gold/30 text-gold/40" />
                    </motion.span>
                  ))}
                  <span className="ml-3 text-sm text-muted-foreground">
                    Reviews loading…
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold leading-tight text-navy-deep sm:text-2xl">
                  Why we don&apos;t show testimonials — yet.
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                  Many law firms populate their sites with stock-photo clients
                  and unverifiable quotes. We won&apos;t. When a client tells
                  us we made a difficult moment easier, that matters — and it
                  should matter to you because it is real, not invented.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                  We are inviting every client we act for to share their
                  experience on our Google Business Profile. As honest reviews
                  arrive, this section will fill with them — names, matters,
                  and the words our clients actually chose.
                </p>

                <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-gold/20 bg-gold/[0.04] px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-gold">
                    Review collection live
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — the trust pillars + CTA */}
          <ScrollReveal className="lg:col-span-2" y={30} delay={0.1}>
            <div className="flex h-full flex-col gap-4">
              <div className="rounded-2xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  What Trust Looks Like Here
                </p>
                <ul className="mt-4 space-y-3 text-sm text-foreground/80">
                  {[
                    "Transparent, upfront fees — quoted in writing",
                    "Plain-language updates at every milestone",
                    "Real credentials you can verify with the LPI",
                    "A founder who has appeared at the Competition Tribunal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-navy/10 bg-navy-deep p-6 text-cream shadow-sm">
                <div>
                  <PenLine className="h-6 w-6 text-gold" />
                  <p className="mt-3 font-display text-lg font-semibold leading-snug">
                    Have you worked with us?
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-cream/65">
                    Your honest words help the next person find counsel they
                    can trust.
                  </p>
                </div>
                <button
                  onClick={scrollToContact}
                  className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-light"
                >
                  Share Your Experience
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom bar — verified status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl border border-border bg-cream/30 px-6 py-4 text-center text-xs text-muted-foreground"
        >
          <span>
            Practice registered as{" "}
            <strong className="font-semibold text-navy-deep">
              {FIRM.legalName}
            </strong>
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>
            Attorney admission verifiable via the{" "}
            <strong className="font-semibold text-navy-deep">
              Legal Practice Council
            </strong>
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span>
            Notary &amp; Conveyancer of the{" "}
            <strong className="font-semibold text-navy-deep">
              High Court of South Africa
            </strong>
          </span>
        </motion.div>
      </div>
    </section>
  );
}

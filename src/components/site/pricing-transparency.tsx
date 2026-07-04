"use client";

import { motion } from "framer-motion";
import {
  FileText,
  Calculator,
  Handshake,
  ShieldCheck,
  ArrowRight,
  Check,
  AlertCircle,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

/* The firm promises transparent pricing but publishes no figures (a gap
   flagged in the content scrape). Rather than fabricate rand amounts, this
   section honestly explains HOW fees are determined and WHAT you receive —
   which itself builds trust and converts the "afraid of the bill" visitor. */

const FEE_STEPS = [
  {
    icon: FileText,
    step: "01",
    title: "We listen first",
    description:
      "The first call is a conversation, not a sales pitch. We understand the matter before we can quote it.",
    detail: "No cost · 15 minutes",
  },
  {
    icon: Calculator,
    step: "02",
    title: "A written, line-by-line quote",
    description:
      "You receive the professional fee, statutory costs (transfer duty, Deeds Office), disbursements, and — if bonded — bond registration fees. Separately, clearly.",
    detail: "Before any work begins",
  },
  {
    icon: Handshake,
    step: "03",
    title: "You decide with full information",
    description:
      "No pressure. Take the quote away, compare it, ask questions. If the scope changes later, we tell you before the cost does.",
    detail: "No surprises, ever",
  },
  {
    icon: ShieldCheck,
    step: "04",
    title: "What we quoted is what you pay",
    description:
      "Our stated value: unexpected legal bills erode trust. So we don't produce them. If something unforeseen arises, you hear it from us first.",
    detail: "Our promise",
  },
];

const WHATS_INCLUDED = [
  "All professional fees for the quoted scope",
  "Statutory costs (transfer duty, Deeds Office, SARS)",
  "Post, petties and electronic generation fees",
  "Plain-language updates at every milestone",
  "A named contact for the life of your matter",
  "No charge for the first consultation",
];

export function PricingTransparency() {
  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-mist/40 py-24 sm:py-32">
      {/* premium background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/3 h-80 w-80 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Transparent Pricing"
          title="No Surprise Bills. Ever."
          description="We promise it because we mean it. Here is exactly how fees work at this practice — and why a written quote comes before any work begins."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* === The pull-quote promise === */}
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/[0.05] to-transparent p-6 text-center sm:p-8"
        >
          <p className="font-display text-lg italic leading-relaxed text-navy-deep text-pretty sm:text-xl">
            &ldquo;Unexpected legal bills can be incredibly frustrating. It can
            also erode trust in our relationship. So, when it comes to pricing,
            we are transparent.&rdquo;
          </p>
          <footer className="mt-3 text-xs font-semibold uppercase tracking-wider text-gold">
            — The firm&apos;s stated value
          </footer>
        </motion.blockquote>

        {/* === The 4-step fee process === */}
        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {FEE_STEPS.map((s, i) => (
            <motion.div
              key={s.step}
              variants={staggerItem}
              className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium"
            >
              {/* connecting arrow between steps (desktop) */}
              {i < FEE_STEPS.length - 1 && (
                <span className="pointer-events-none absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-white text-muted-foreground lg:flex">
                  <ArrowRight className="h-3 w-3" />
                </span>
              )}

              {/* faded step number */}
              <span className="pointer-events-none absolute -right-2 -top-3 font-display text-[5rem] font-bold leading-none text-navy/[0.04] transition-colors duration-300 group-hover:text-gold/[0.08]">
                {s.step}
              </span>

              <div className="relative">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-navy-deep">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70 text-pretty">
                  {s.description}
                </p>
                <p className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-navy/5 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                  {s.detail}
                </p>
              </div>

              {/* bottom gold line on hover */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </StaggerGroup>

        {/* === What's included + the honest caveat === */}
        <div className="mt-12 grid gap-6 lg:grid-cols-5">
          {/* what's included */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-8"
          >
            <h3 className="font-display text-lg font-bold text-navy-deep">
              What a quote from us includes
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Every quote is itemised — never a single opaque number.
            </p>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {WHATS_INCLUDED.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-foreground/75"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                    <Check className="h-3 w-3 text-gold" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* honest caveat */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 rounded-2xl border border-navy/10 bg-navy-deep p-7 text-cream shadow-sm sm:p-8"
          >
            <AlertCircle className="h-7 w-7 text-gold" />
            <h3 className="mt-4 font-display text-lg font-bold">
              Why we don&apos;t publish a price list
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-cream/65 text-pretty">
              Every matter is different. A straightforward residential transfer
              is not a deceased estate with offshore assets. Publishing fixed
              figures would either overcharge the simple matter or underquote
              the complex one — and both erode trust.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/65 text-pretty">
              A written quote, specific to your matter, is the honest answer.
              And it costs you nothing to ask.
            </p>
            <button
              onClick={scrollToContact}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-light"
            >
              Request your quote
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

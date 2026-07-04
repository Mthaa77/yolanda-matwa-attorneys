"use client";

import Image from "next/image";
import { ArrowRight, Award, GraduationCap, Scale } from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      {/* A quiet warm wash keeps the section refined without visual weight. */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(232,217,181,0.16),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal y={16} className="mb-10 flex items-center gap-3 sm:mb-12">
          <span className="h-px w-9 bg-gold" />
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold">
            A personal welcome
          </span>
          <span className="hidden text-sm text-foreground/45 sm:inline">
            The people and principle behind the practice.
          </span>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-5" y={30}>
            <div className="relative mx-auto max-w-[27rem]">
              <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 border-l border-t border-gold/55" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-gold/55" />

              <div className="overflow-hidden rounded-[1.15rem] border border-navy/10 bg-white p-1.5 shadow-[0_20px_45px_-32px_rgba(15,31,56,0.52)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[0.85rem] bg-mist">
                  <Image
                    src="/images/founder-real.png"
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    quality={82}
                    sizes="(max-width: 1023px) min(90vw, 432px), 42vw"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(15,31,56,0.72)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <p className="font-display text-xl font-bold text-cream sm:text-2xl">
                      {FOUNDER_BIO.name}
                    </p>
                    <p className="mt-1 text-xs font-medium text-gold-light/90">
                      {FOUNDER_BIO.title}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mx-4 -mt-5 flex items-center gap-3 rounded-xl border border-gold/20 bg-white px-4 py-3 shadow-[0_14px_30px_-22px_rgba(15,31,56,0.45)] sm:mx-6">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <Scale className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-deep">Notary &amp; Conveyancer</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">High Court of South Africa</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Meet the Founder"
              title="Care, clarity and conviction in every brief."
              description={FOUNDER_BIO.intro}
            />

            <ScrollReveal delay={0.1} className="mt-7 space-y-4">
              <p className="max-w-2xl text-base leading-relaxed text-foreground/72 text-pretty">
                {FOUNDER_BIO.ccsa}
              </p>
              <p className="max-w-2xl text-base leading-relaxed text-foreground/72 text-pretty">
                {FOUNDER_BIO.mergers}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
              <blockquote className="mt-7 max-w-2xl border-l-2 border-gold py-1 pl-5">
                <p className="font-display text-lg italic leading-relaxed text-navy-deep sm:text-xl">
                  &ldquo;{FOUNDER_BIO.pullQuote}&rdquo;
                </p>
                <footer className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-gold" />
                  <span className="font-bold uppercase tracking-[0.14em]">The firm&apos;s stated value</span>
                </footer>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.26} className="mt-8 flex flex-wrap gap-2.5">
              {[
                { icon: GraduationCap, label: "Cert. Competition Law — UP" },
                { icon: GraduationCap, label: "Cert. Tax Law — UNISA" },
                { icon: GraduationCap, label: "LLM Taxation — UKZN (in progress)" },
              ].map((credential) => (
                <span
                  key={credential.label}
                  className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3.5 py-2 text-sm text-navy-deep"
                >
                  <credential.icon className="h-3.5 w-3.5 text-gold" />
                  {credential.label}
                </span>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.34}>
              <button
                type="button"
                onClick={() => scrollTo("#credentials")}
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
              >
                Explore Her Full Credentials
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

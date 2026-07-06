"use client";

import { ArrowRight, Award, GraduationCap, Scale, Sparkles } from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { directorPortrait } from "@/lib/visual-assets";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(232,217,181,0.16),transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-navy/8 blur-3xl" />

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
            <div className="relative mx-auto max-w-[27rem] [perspective:1000px]">
              <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 border-l border-t border-gold/55" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-gold/55" />
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[radial-gradient(circle_at_40%_20%,rgba(176,141,69,0.24),transparent_58%)] blur-2xl" />

              <div className="relative overflow-hidden rounded-[1.35rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(232,217,181,0.52))] p-1.5 shadow-[0_28px_60px_-35px_rgba(15,31,56,0.68),inset_0_1px_0_rgba(255,255,255,0.85)] transition-transform duration-700 hover:[transform:rotateY(-2deg)_translateY(-4px)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1rem] bg-navy-deep">
                  <img
                    src={directorPortrait}
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={480}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,56,0.04),transparent_35%,rgba(15,31,56,0.78)_100%)]" />
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_16%,rgba(255,255,255,0.18),transparent_22%)] mix-blend-screen" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-bold text-cream sm:text-2xl">
                          {FOUNDER_BIO.name}
                        </p>
                        <p className="mt-1 text-xs font-medium text-gold-light/90">
                          {FOUNDER_BIO.title}
                        </p>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]">
                        <Sparkles className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mx-4 -mt-5 flex items-center gap-3 rounded-xl border border-gold/20 bg-white/95 px-4 py-3 shadow-[0_16px_32px_-22px_rgba(15,31,56,0.5)] backdrop-blur-sm sm:mx-6">
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
                  className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-3.5 py-2 text-sm text-navy-deep shadow-sm"
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
                className="group mt-8 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold hover:shadow-premium"
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

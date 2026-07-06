"use client";

import { ArrowRight, Award, GraduationCap, Scale, Sparkles } from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { directorWelcomeImage } from "@/lib/director-welcome-image";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[linear-gradient(180deg,rgba(232,217,181,0.18),transparent)]" />
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-navy/8 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal y={16} className="mb-10 flex items-center gap-3 sm:mb-14">
          <span className="h-px w-9 bg-gold" />
          <span className="text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold">
            A personal welcome
          </span>
          <span className="hidden text-sm text-foreground/45 sm:inline">
            The people and principle behind the practice.
          </span>
        </ScrollReveal>

        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <ScrollReveal y={28}>
            <div className="relative mx-auto max-w-[42rem] [perspective:1200px]">
              <div className="pointer-events-none absolute -left-5 -top-5 h-24 w-24 border-l border-t border-gold/65" />
              <div className="pointer-events-none absolute -bottom-5 -right-5 h-24 w-24 border-b border-r border-gold/65" />
              <div className="pointer-events-none absolute -inset-8 rounded-[2.8rem] bg-[radial-gradient(circle_at_45%_16%,rgba(176,141,69,0.28),transparent_60%)] blur-3xl" />

              <figure className="relative rounded-[1.75rem] border border-gold/30 bg-[linear-gradient(145deg,rgba(255,255,255,0.98),rgba(232,217,181,0.6))] p-2.5 shadow-[0_34px_76px_-40px_rgba(15,31,56,0.7),inset_0_1px_0_rgba(255,255,255,0.92)] transition-transform duration-700 hover:[transform:rotateY(-1.5deg)_translateY(-5px)]">
                <div className="relative overflow-hidden rounded-[1.2rem] bg-navy-deep">
                  <img
                    src={directorWelcomeImage}
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={960}
                    height={1200}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto w-full object-contain"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-deep/25 to-transparent" />
                </div>
              </figure>

              <div className="relative z-10 mx-3 -mt-7 flex flex-col gap-4 rounded-2xl border border-gold/22 bg-white/95 px-5 py-4 shadow-[0_18px_38px_-25px_rgba(15,31,56,0.52)] backdrop-blur-sm sm:mx-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/20 bg-gold/10 text-gold">
                    <Scale className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-navy-deep">{FOUNDER_BIO.name}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">Founder &amp; Principal Attorney</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-gold/20 bg-gold/8 px-3 py-1.5 text-[0.64rem] font-bold uppercase tracking-[0.15em] text-gold sm:self-auto">
                  <Sparkles className="h-3.5 w-3.5" />
                  Notary &amp; Conveyancer
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div>
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
              <blockquote className="mt-8 max-w-2xl border-l-2 border-gold py-1 pl-5">
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

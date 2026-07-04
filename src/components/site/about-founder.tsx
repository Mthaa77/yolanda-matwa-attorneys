"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  GraduationCap,
  Quote,
  Scale,
  Sparkles,
} from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative isolate overflow-hidden bg-cream py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_5%,rgba(217,199,154,0.2),transparent_28%),radial-gradient(circle_at_6%_95%,rgba(22,48,92,0.1),transparent_27%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.03]" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full border border-gold/15" />
      <div className="pointer-events-none absolute right-12 top-12 h-64 w-64 rounded-full border border-gold/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <ScrollReveal y={22} className="mb-12 flex flex-col gap-4 border-b border-navy/10 pb-7 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.75)]">
              <Sparkles className="h-4 w-4" />
            </span>
            <div>
              <p className="text-[0.63rem] font-bold uppercase tracking-[0.22em] text-gold">A personal welcome</p>
              <p className="mt-1 text-sm text-navy/65">The people and principle behind the practice.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-foreground/58 sm:text-right">
            Legal matters deserve more than a transaction. They deserve thoughtful counsel and a steady hand.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Founder portrait — framed as a living editorial moment, not a static image. */}
          <ScrollReveal className="lg:col-span-5" y={50}>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0], rotate: [0, 0.35, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto max-w-md"
            >
              <div className="pointer-events-none absolute -left-7 -top-7 h-36 w-36 border-l-2 border-t-2 border-gold/65" />
              <div className="pointer-events-none absolute -left-4 -top-4 h-20 w-20 border-l border-t border-gold/30" />
              <div className="pointer-events-none absolute -bottom-7 -right-7 h-36 w-36 border-b-2 border-r-2 border-gold/65" />
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-20 border-b border-r border-gold/30" />
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gold/12 blur-3xl" />

              <div className="relative overflow-hidden rounded-[1.45rem] border border-white/75 bg-navy-deep p-1.5 shadow-[0_28px_65px_-30px_rgba(15,31,56,0.65)]">
                <motion.div
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative aspect-[4/5] overflow-hidden rounded-[1.05rem]"
                >
                  <Image
                    src="/images/founder-real.png"
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,31,56,0.02),rgba(15,31,56,0.08)_40%,rgba(15,31,56,0.86)_100%)]" />
                  <motion.div
                    initial={{ x: "-135%" }}
                    animate={reduceMotion ? undefined : { x: "135%" }}
                    transition={{ duration: 6.5, repeat: Infinity, repeatDelay: 4.5, ease: "easeInOut" }}
                    className="pointer-events-none absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-xl"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-6 pt-16 sm:p-7 sm:pt-20">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-bold text-cream sm:text-2xl">{FOUNDER_BIO.name}</p>
                        <p className="mt-1 max-w-xs text-xs leading-relaxed text-gold-light/85">{FOUNDER_BIO.title}</p>
                      </div>
                      <span className="hidden h-10 w-10 items-center justify-center rounded-full border border-gold/35 bg-gold/10 text-gold-light sm:flex">
                        <Scale className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.25 }}
                animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
                className="absolute -bottom-8 -left-4 hidden items-center gap-3 rounded-2xl border border-gold/25 bg-white/92 px-5 py-4 shadow-premium backdrop-blur-md sm:flex"
              >
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gold/30 bg-[linear-gradient(145deg,rgba(217,199,154,0.3),rgba(176,141,69,0.08))] text-gold">
                  <span className="absolute inset-1 rounded-lg border border-white/50" />
                  <Scale className="relative h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-deep">Notary &amp; Conveyancer</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">High Court of South Africa</p>
                </div>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Meet the Founder"
              title="Care, clarity and conviction in every brief."
              description={FOUNDER_BIO.intro}
            />

            <ScrollReveal delay={0.12} className="mt-7 rounded-[1.3rem] border border-navy/10 bg-white/75 p-5 shadow-[0_12px_28px_-22px_rgba(15,31,56,0.36)] backdrop-blur-sm sm:p-6">
              <p className="font-display text-xl font-semibold leading-snug text-navy-deep sm:text-2xl">
                “Your legal journey should feel informed, intentional and genuinely supported.”
              </p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-px w-8 bg-gold" />
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-gold">The firm’s welcome promise</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="mt-7 space-y-4">
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">{FOUNDER_BIO.ccsa}</p>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">{FOUNDER_BIO.mergers}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <blockquote className="relative mt-8 overflow-hidden rounded-[1.35rem] border border-gold/20 bg-[linear-gradient(110deg,rgba(232,217,181,0.32),rgba(255,255,255,0.7),rgba(238,241,246,0.7))] p-6 shadow-[0_14px_32px_-26px_rgba(15,31,56,0.45)] sm:p-7">
                <Quote className="absolute -right-3 -top-4 h-20 w-20 text-gold/12" />
                <div className="relative">
                  <p className="font-display text-lg italic leading-relaxed text-navy-deep text-pretty sm:text-xl">
                    &ldquo;{FOUNDER_BIO.pullQuote}&rdquo;
                  </p>
                  <footer className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Award className="h-3.5 w-3.5 text-gold" />
                    <span className="font-bold uppercase tracking-[0.14em]">The firm&apos;s stated value</span>
                  </footer>
                </div>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.38} className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, label: "Cert. Competition Law — UP" },
                { icon: GraduationCap, label: "Cert. Tax Law — UNISA" },
                { icon: GraduationCap, label: "LLM Taxation — UKZN (in progress)" },
              ].map((credential) => (
                <span
                  key={credential.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-premium"
                >
                  <credential.icon className="h-4 w-4 text-gold transition-transform duration-300 group-hover:scale-110" />
                  {credential.label}
                </span>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.46}>
              <button
                type="button"
                onClick={() => scrollTo("#credentials")}
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-3 text-sm font-bold text-navy-deep shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold hover:shadow-premium"
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

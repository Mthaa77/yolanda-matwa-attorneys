"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowRight, GraduationCap, Scale, Award } from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      {/* subtle premium background accents */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait — premium framed treatment */}
          <ScrollReveal className="lg:col-span-5" y={50}>
            <div className="relative mx-auto max-w-md">
              {/* double gold frame for depth */}
              <div className="absolute -left-5 -top-5 h-28 w-28 border-l-2 border-t-2 border-gold/60" />
              <div className="absolute -left-5 -top-5 h-16 w-16 border-l border-t border-gold/30" />
              <div className="absolute -bottom-5 -right-5 h-28 w-28 border-b-2 border-r-2 border-gold/60" />
              <div className="absolute -bottom-5 -right-5 h-16 w-16 border-b border-r border-gold/30" />

              <div className="relative overflow-hidden rounded-sm shadow-navy-deep">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founder-portrait.png"
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={768}
                    height={960}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* gradient overlay for cinematic depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/40 via-transparent to-transparent" />
                {/* name plate overlay at bottom of portrait */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-transparent p-5 pt-12">
                  <p className="font-display text-lg font-bold text-cream">
                    {FOUNDER_BIO.name}
                  </p>
                  <p className="text-xs text-gold-light/80">
                    {FOUNDER_BIO.title}
                  </p>
                </div>
              </div>

              {/* floating credential badge — enhanced */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-8 -left-8 hidden items-center gap-3 rounded-xl border border-gold/30 bg-white px-5 py-4 shadow-premium sm:flex"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10">
                  <Scale className="h-5 w-5 text-gold" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-navy-deep">
                    Notary &amp; Conveyancer
                  </p>
                  <p className="text-xs text-muted-foreground">
                    High Court of South Africa
                  </p>
                </div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Bio */}
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Meet the Founder"
              title="Yolanda Okharedia"
              description={FOUNDER_BIO.intro}
            />

            <ScrollReveal delay={0.15} className="mt-6 space-y-4">
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                {FOUNDER_BIO.ccsa}
              </p>
              <p className="text-base leading-relaxed text-foreground/75 text-pretty">
                {FOUNDER_BIO.mergers}
              </p>
            </ScrollReveal>

            {/* Pull quote — premium treatment */}
            <ScrollReveal delay={0.25}>
              <blockquote className="relative mt-8 overflow-hidden rounded-xl border-l-2 border-gold bg-gradient-to-r from-gold/[0.04] to-transparent py-5 pl-7 pr-5">
                <Quote className="absolute -left-1 -top-1 h-8 w-8 text-gold/20" />
                <p className="font-display text-lg italic leading-relaxed text-navy-deep text-pretty sm:text-xl">
                  &ldquo;{FOUNDER_BIO.pullQuote}&rdquo;
                </p>
                <footer className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-gold" />
                  <span className="font-medium uppercase tracking-wider">
                    The firm&apos;s stated value
                  </span>
                </footer>
              </blockquote>
            </ScrollReveal>

            {/* credential pills — enhanced with hover */}
            <ScrollReveal delay={0.35} className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: GraduationCap, label: "Cert. Competition Law — UP" },
                { icon: GraduationCap, label: "Cert. Tax Law — UNISA" },
                { icon: GraduationCap, label: "LLM Taxation — UKZN (in progress)" },
              ].map((cred) => (
                <span
                  key={cred.label}
                  className="group inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy-deep shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-premium"
                >
                  <cred.icon className="h-4 w-4 text-gold transition-transform group-hover:scale-110" />
                  {cred.label}
                </span>
              ))}
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <button
                onClick={() => scrollTo("#credentials")}
                className="group mt-9 inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep shadow-sm transition-all hover:border-gold/50 hover:text-gold"
              >
                Explore Her Full Credentials
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

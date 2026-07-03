"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowRight, GraduationCap, Scale } from "lucide-react";
import { FOUNDER_BIO } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { ScrollReveal } from "./scroll-reveal";

export function AboutFounder() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="relative bg-cream py-24 sm:py-32">
      {/* subtle background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Portrait */}
          <ScrollReveal className="lg:col-span-5" y={50}>
            <div className="relative mx-auto max-w-md">
              {/* gold frame */}
              <div className="absolute -left-4 -top-4 h-24 w-24 border-l-2 border-t-2 border-gold/50" />
              <div className="absolute -bottom-4 -right-4 h-24 w-24 border-b-2 border-r-2 border-gold/50" />
              <div className="relative overflow-hidden rounded-sm shadow-premium">
                <div className="aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/founder-portrait.png"
                    alt={`${FOUNDER_BIO.name}, ${FOUNDER_BIO.title}`}
                    width={768}
                    height={960}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/30 via-transparent to-transparent" />
              </div>
              {/* floating credential badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-sm border border-gold/30 bg-white px-5 py-4 shadow-premium sm:flex"
              >
                <Scale className="h-7 w-7 text-gold" />
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
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {FOUNDER_BIO.ccsa}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                {FOUNDER_BIO.mergers}
              </p>
            </ScrollReveal>

            {/* Pull quote */}
            <ScrollReveal delay={0.25}>
              <blockquote className="relative mt-8 border-l-2 border-gold pl-6">
                <Quote className="absolute -left-3 -top-2 h-5 w-5 text-gold/30" />
                <p className="font-display text-lg italic leading-relaxed text-navy-deep text-pretty sm:text-xl">
                  &ldquo;{FOUNDER_BIO.pullQuote}&rdquo;
                </p>
              </blockquote>
            </ScrollReveal>

            {/* credential pills */}
            <ScrollReveal delay={0.35} className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy-deep shadow-sm">
                <GraduationCap className="h-4 w-4 text-gold" />
                Cert. Competition Law — UP
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy-deep shadow-sm">
                <GraduationCap className="h-4 w-4 text-gold" />
                Cert. Tax Law — UNISA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white px-4 py-2 text-sm text-navy-deep shadow-sm">
                <GraduationCap className="h-4 w-4 text-gold" />
                LLM Taxation — UKZN (in progress)
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.45}>
              <button
                onClick={() => scrollTo("#credentials")}
                className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-navy-deep transition-colors hover:text-gold"
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

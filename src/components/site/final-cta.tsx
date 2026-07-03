"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { FIRM } from "@/lib/site-data";
import Image from "next/image";

export function FinalCTA() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep">
      {/* Background image + cinematic overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/legal-scene.jpg"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>
      {/* filmic grain */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
      {/* soft gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-3xl" />

      {/* top + bottom gold hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* decorative gold corner accents */}
      <div className="pointer-events-none absolute left-8 top-8 hidden h-14 w-14 border-l-2 border-t-2 border-gold/40 lg:block" />
      <div className="pointer-events-none absolute bottom-8 right-8 hidden h-14 w-14 border-b-2 border-r-2 border-gold/40 lg:block" />

      <div className="relative mx-auto max-w-5xl px-5 py-28 text-center sm:px-8 sm:py-36 lg:px-12">
        {/* animated gold dot + eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-3"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
          </span>
          <span className="h-px w-8 bg-gold/60" />
          <span className="text-xs font-medium uppercase tracking-[0.22em] text-gold-light">
            Ready When You Are
          </span>
          <span className="h-px w-8 bg-gold/60" />
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(2rem,5.2vw,4rem)] font-bold leading-[1.06] tracking-tight text-cream text-balance"
        >
          Let&apos;s talk about{" "}
          <span className="relative inline-block">
            <span className="italic text-gradient-gold">what you need.</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-gold via-gold-light to-transparent"
            />
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-cream/70 text-pretty sm:text-lg"
        >
          No question is too small. Whether it&apos;s a single line in a will or a
          full property transfer, the conversation starts with a phone call —
          and we&apos;ll guide you from there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => scrollTo("#contact")}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold-glow transition-all hover:bg-gold-light hover:shadow-lg"
          >
            {/* shimmer sweep on hover */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative">Book a Consultation</span>
            <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={`tel:${FIRM.phoneIntl}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-cream/5"
          >
            <Phone className="h-4 w-4" />
            {FIRM.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

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
      <div className="absolute inset-0">
        <Image
          src="/images/office-exterior.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/70" />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative mx-auto max-w-5xl px-5 py-24 text-center sm:px-8 sm:py-32 lg:px-12">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-3"
        >
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
          className="font-display text-[clamp(2rem,5vw,3.75rem)] font-bold leading-[1.08] text-cream text-balance"
        >
          Let's talk about{" "}
          <span className="italic text-gradient-gold">what you need.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65 text-pretty sm:text-lg"
        >
          No question is too small. Whether it's a single line in a will or a
          full property transfer, the conversation starts with a phone call —
          and we'll guide you from there.
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
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold text-navy-deep shadow-gold-glow transition-all hover:bg-gold-light hover:shadow-lg"
          >
            Book a Consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
          <a
            href={`tel:${FIRM.phoneIntl}`}
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream transition-all hover:border-gold/60 hover:bg-cream/5"
          >
            <Phone className="h-4 w-4" />
            {FIRM.phone}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

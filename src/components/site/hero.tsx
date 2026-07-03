"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { FIRM } from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-navy-deep"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-office.png"
          alt="The Yolanda Matwa Attorneys office interior in Menlyn Maine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/30" />
      </div>

      {/* Decorative gold corner frame */}
      <div className="pointer-events-none absolute inset-6 hidden border border-gold/15 lg:block" />
      <div className="pointer-events-none absolute left-6 top-6 h-12 w-12 border-l-2 border-t-2 border-gold/40" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-12 w-12 border-b-2 border-r-2 border-gold/40" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-16 sm:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div
            variants={item}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-gold" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-gold-light sm:text-xs">
              {FIRM.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,6vw,5.25rem)] font-bold leading-[1.04] tracking-tight text-cream text-balance"
          >
            Committed to Helping{" "}
            <span className="italic text-gradient-gold">Our Clients</span>{" "}
            Succeed.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-base leading-relaxed text-cream/70 sm:text-lg text-pretty"
          >
            Boutique legal counsel for property transfers, family contracts,
            and estates — based in the heart of Menlyn Maine, Pretoria East.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <button
              onClick={() => scrollTo("#contact")}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-navy-deep shadow-gold-glow transition-all hover:bg-gold-light hover:shadow-lg"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-7 py-4 text-sm font-semibold text-cream transition-all hover:border-gold/60 hover:bg-cream/5"
            >
              Explore Our Services
            </button>
          </motion.div>

          {/* Inline trust microcopy */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/55"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-gold" />
              Notary &amp; Conveyancer of the High Court
            </span>
            <span className="hidden h-4 w-px bg-cream/20 sm:block" />
            <span className="inline-flex items-center gap-2">
              <Compass className="h-4 w-4 text-gold" />
              Former Competition Commission Investigator
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.2em] text-cream/40">
          Scroll
        </span>
        <span className="relative h-10 w-px overflow-hidden bg-cream/15">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gold"
          />
        </span>
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Compass, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";
import { FIRM } from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
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
      {/* === Cinematic background layers (static, no parallax) === */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-office.png"
          alt="The Yolanda Matwa Attorneys office interior in Menlyn Maine"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Cinematic color grades — three stacked gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/92 to-navy-deep/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/20 to-navy-deep/50" />
      {/* Vignette for cinematic focus */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 50%, transparent 0%, rgba(15,31,56,0.55) 100%)",
        }}
      />
      {/* Subtle grain for filmic texture */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.08] mix-blend-overlay" />

      {/* === Animated gold shimmer sweep (slow, cinematic) === */}
      <motion.div
        initial={{ x: "-30%", opacity: 0 }}
        animate={{ x: "130%", opacity: [0, 0.35, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gold/[0.06] to-transparent blur-2xl"
      />

      {/* === Decorative gold frame (desktop) === */}
      <div className="pointer-events-none absolute inset-6 hidden border border-gold/12 lg:block" />
      <div className="pointer-events-none absolute left-6 top-6 h-14 w-14 border-l-2 border-t-2 border-gold/50" />
      <div className="pointer-events-none absolute bottom-6 right-6 h-14 w-14 border-b-2 border-r-2 border-gold/50" />
      {/* additional inner corner ticks */}
      <div className="pointer-events-none absolute left-[4.5rem] top-6 hidden h-px w-8 bg-gold/30 lg:block" />
      <div className="pointer-events-none absolute left-6 top-[4.5rem] hidden h-8 w-px bg-gold/30 lg:block" />

      {/* === Content === */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pt-28 pb-20 sm:px-8 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Eyebrow with animated gold dot */}
          <motion.div
            variants={item}
            className="mb-7 flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            <span className="h-px w-10 bg-gradient-to-r from-gold to-gold/20" />
            <span className="text-[0.7rem] font-medium uppercase tracking-[0.26em] text-gold-light sm:text-xs">
              {FIRM.eyebrow}
            </span>
          </motion.div>

          {/* Headline with refined cinematic type */}
          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.5rem,6.2vw,5.5rem)] font-bold leading-[1.02] tracking-tight text-cream text-balance"
          >
            Committed to Helping{" "}
            <span className="relative inline-block">
              <span className="italic text-gradient-gold">Our Clients</span>
              {/* underline flourish */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-gold via-gold-light to-transparent"
              />
            </span>{" "}
            Succeed.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="mt-8 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg text-pretty"
          >
            Boutique legal counsel for property transfers, family contracts,
            and estates — based in the heart of{" "}
            <span className="font-medium text-cream">Menlyn Maine</span>,{" "}
            Pretoria East.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
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
            <button
              onClick={() => scrollTo("#services")}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all hover:border-gold/60 hover:bg-cream/5"
            >
              Explore Our Services
              <ArrowRight className="h-4 w-4 opacity-60 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
            </button>
          </motion.div>

          {/* Inline trust microcopy */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/65"
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

      {/* === Floating credential badge (cinematic, overlapping join) === */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute right-6 top-1/2 hidden -translate-y-1/2 lg:block xl:right-12"
      >
        <div className="relative">
          {/* glow */}
          <div className="absolute -inset-4 rounded-full bg-gold/10 blur-2xl" />
          <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-gold/30 bg-navy-deep/60 p-6 backdrop-blur-md">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent">
              <Sparkles className="h-7 w-7 text-gold-light" />
            </span>
            <div className="text-center">
              <p className="font-display text-sm font-bold leading-tight text-cream">
                Notary &amp; Conveyancer
              </p>
              <p className="mt-0.5 text-[0.65rem] uppercase tracking-wider text-gold-light/80">
                High Court of South Africa
              </p>
            </div>
            {/* rotating ring accent */}
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 -z-10 rounded-2xl border border-dashed border-gold/15"
            />
          </div>
        </div>
      </motion.div>

      {/* === Cinematic scroll cue === */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 lg:flex"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.25em] text-cream/40">
          Scroll to explore
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/15">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-gold to-gold/30"
          />
        </span>
      </motion.div>

      {/* Bottom fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
}

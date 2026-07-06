"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Landmark,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { FIRM } from "@/lib/site-data";
import { LawWordLoop } from "./law-word-loop";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.24 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const HERO_WORDS = [
  "Clear",
  "legal",
  "direction",
  "for",
  "the",
  "decisions",
  "that",
  "move",
  "life",
  "forward.",
];

function HeroTitle() {
  const reduceMotion = useReducedMotion();

  return (
    <h1
      data-skip-heading-motion
      aria-label="Clear legal direction for the decisions that move life forward."
      className="font-display text-[clamp(2.85rem,6.45vw,6rem)] font-bold leading-[0.96] tracking-[-0.045em] text-cream text-balance"
    >
      <span aria-hidden="true">
        {HERO_WORDS.map((word, index) => {
          const emphasized = index >= 7;
          return (
            <motion.span
              key={`${word}-${index}`}
              initial={reduceMotion ? false : { opacity: 0, y: 28, filter: "blur(8px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.68,
                delay: 0.44 + index * 0.072,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`inline-block ${emphasized ? "italic text-gradient-gold" : ""}`}
            >
              {word}
              {index < HERO_WORDS.length - 1 ? "\u00A0" : ""}
            </motion.span>
          );
        })}
      </span>
    </h1>
  );
}

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-deep">
      <div className="absolute -inset-5">
        <Image
          src="/images/pegasus-building.jpg"
          alt="The Pegasus Building in Menlyn Maine, Pretoria East — home of Yolanda Matwa Attorneys"
          fill
          priority
          quality={88}
          sizes="100vw"
          className="object-cover object-[60%_center] brightness-[1.08] saturate-[1.04]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,31,56,0.95)_0%,rgba(15,31,56,0.89)_30%,rgba(15,31,56,0.5)_58%,rgba(15,31,56,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,31,56,0.88)_0%,rgba(15,31,56,0.06)_47%,rgba(15,31,56,0.3)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_66%_72%_at_15%_42%,rgba(30,61,114,0.3),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-overlay" />

      {!reduceMotion && (
        <>
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 32, 0], y: [0, -18, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 top-[20%] h-80 w-80 rounded-full border border-gold/15 bg-gold/[0.03] blur-[1px]"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -26, 0], y: [0, 22, 0], scale: [1, 0.96, 1] }}
            transition={{ duration: 21, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute right-[10%] top-[17%] h-56 w-56 rounded-full border border-cream/10 bg-cream/[0.025] blur-[1px]"
          />
        </>
      )}

      <div className="pointer-events-none absolute inset-4 hidden border border-gold/10 lg:block" />
      <div className="pointer-events-none absolute left-4 top-4 hidden h-20 w-20 border-l border-t border-gold/55 lg:block" />
      <div className="pointer-events-none absolute bottom-4 right-4 hidden h-20 w-20 border-b border-r border-gold/55 lg:block" />
      <div className="pointer-events-none absolute left-8 top-28 hidden h-px w-16 bg-gradient-to-r from-gold/60 to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-20">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-gold/45" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-gold to-gold/15" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-gold-light sm:text-xs">
                {FIRM.eyebrow}
              </span>
              <span className="hidden h-4 w-px bg-cream/20 sm:block" />
              <span className="hidden text-xs font-medium text-cream/55 sm:block">Menlyn Maine · Pretoria East</span>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="pointer-events-none absolute -left-6 top-2 hidden h-[90%] w-px bg-gradient-to-b from-gold/80 via-gold/20 to-transparent lg:block" />
              <HeroTitle />
            </motion.div>

            <motion.div variants={item}>
              <LawWordLoop />
            </motion.div>

            <motion.p variants={item} className="mt-7 max-w-2xl text-base leading-relaxed text-cream/78 sm:text-lg lg:text-[1.08rem]">
              For property transfers, estates, family agreements and commercial matters, we bring careful legal work, transparent communication and a confident route forward from your first conversation.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_18px_34px_-13px_rgba(176,141,69,0.75)]"
              >
                Book a Confidential Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/[0.04] px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold/65 hover:bg-cream/[0.09]"
              >
                Explore Practice Areas
                <ArrowUpRight className="h-4 w-4 text-gold-light/85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-4 flex flex-wrap items-center gap-2 text-xs text-cream/48">
              <span className="h-px w-7 bg-gold/35" />
              Confidential enquiries welcome · Clear next steps · Transparent fee guidance
            </motion.div>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/68">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" />Notary &amp; Conveyancer of the High Court</span>
              <span className="hidden h-4 w-px bg-cream/20 sm:block" />
              <span className="inline-flex items-center gap-2"><Compass className="h-4 w-4 text-gold" />Former Competition Commission Investigator</span>
            </motion.div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 32, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-gold/30 bg-navy-deep/54 p-5 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.72)] backdrop-blur-lg xl:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),transparent_34%,rgba(176,141,69,0.1))]" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]"><Landmark className="h-5 w-5" strokeWidth={1.65} /></span>
                  <span className="rounded-full border border-cream/15 bg-cream/5 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-cream/65">A considered practice</span>
                </div>
                <p className="mt-8 font-display text-2xl font-bold leading-tight text-cream">Legal work, made clear.</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/64">Clear advice, structured process and thoughtful follow-through for the legal moments that cannot be left to chance.</p>
                <div className="mt-7 space-y-3 border-t border-cream/12 pt-5">
                  {["Plain-English communication", "Transparent fee guidance", "Meticulous document handling"].map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-3 text-sm text-cream/78">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/35 text-[0.58rem] font-bold text-gold-light">0{index + 1}</span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.7 }}
        className="absolute bottom-8 right-5 hidden items-center gap-2.5 rounded-full border border-cream/15 bg-navy-deep/42 px-4 py-2 backdrop-blur-sm sm:flex lg:right-12"
      >
        <MapPin className="h-3.5 w-3.5 text-gold" />
        <span className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-cream/75">The Pegasus Building</span>
        <span className="h-3 w-px bg-cream/20" />
        <span className="text-[0.64rem] text-cream/48">Menlyn Maine</span>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-deep/85 to-transparent" />
    </section>
  );
}

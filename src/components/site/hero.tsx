"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import { FIRM } from "@/lib/site-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.28 } },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-navy-deep">
      {/* Architectural backdrop — the firm’s real Menlyn Maine setting. */}
      <motion.div
        animate={
          reduceMotion
            ? undefined
            : { scale: [1, 1.045, 1], x: [0, 5, 0], y: [0, -3, 0] }
        }
        transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-5"
      >
        <Image
          src="/images/pegasus-building.jpg"
          alt="The Pegasus Building in Menlyn Maine, Pretoria East — home of Yolanda Matwa Attorneys"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Deep colour-grade, vignette and editorial light layers. */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,31,56,0.98)_0%,rgba(15,31,56,0.93)_33%,rgba(15,31,56,0.57)_61%,rgba(15,31,56,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(15,31,56,0.98)_0%,rgba(15,31,56,0.14)_42%,rgba(15,31,56,0.53)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_72%_at_20%_42%,rgba(30,61,114,0.31),transparent_67%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.075] mix-blend-overlay" />

      <motion.div
        initial={{ x: "-30%", opacity: 0 }}
        animate={reduceMotion ? undefined : { x: "135%", opacity: [0, 0.45, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-gold/[0.07] to-transparent blur-2xl"
      />

      {/* Fine gold drafting marks frame the composition. */}
      <div className="pointer-events-none absolute inset-4 hidden border border-gold/10 lg:block" />
      <div className="pointer-events-none absolute left-4 top-4 hidden h-20 w-20 border-l border-t border-gold/55 lg:block" />
      <div className="pointer-events-none absolute bottom-4 right-4 hidden h-20 w-20 border-b border-r border-gold/55 lg:block" />
      <div className="pointer-events-none absolute left-8 top-28 hidden h-px w-16 bg-gradient-to-r from-gold/60 to-transparent lg:block" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pt-36">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] xl:grid-cols-[minmax(0,1fr)_20rem] xl:gap-20">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-3xl"
          >
            <motion.div variants={item} className="mb-7 flex flex-wrap items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/55" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-gold to-gold/15" />
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-gold-light sm:text-xs">
                {FIRM.eyebrow}
              </span>
              <span className="hidden h-4 w-px bg-cream/20 sm:block" />
              <span className="hidden text-xs font-medium text-cream/55 sm:block">
                Menlyn Maine · Pretoria East
              </span>
            </motion.div>

            <motion.div variants={item} className="relative">
              <div className="pointer-events-none absolute -left-6 top-2 hidden h-[90%] w-px bg-gradient-to-b from-gold/80 via-gold/20 to-transparent lg:block" />
              <h1 className="font-display text-[clamp(2.8rem,6.4vw,5.9rem)] font-bold leading-[0.98] tracking-[-0.035em] text-cream text-balance">
                Counsel for the moments that{" "}
                <span className="relative inline-block italic text-gradient-gold">
                  shape your future.
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.9, delay: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -bottom-1 left-0 h-[3px] w-full origin-left rounded-full bg-gradient-to-r from-gold via-gold-light to-transparent"
                  />
                </span>
              </h1>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 max-w-2xl text-base leading-relaxed text-cream/76 sm:text-lg lg:text-[1.08rem]"
            >
              A boutique legal practice for property transfers, family contracts,
              estates, and commercial matters — delivered with clear communication,
              exacting care, and the confidence of experienced counsel.
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => scrollTo("#contact")}
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light hover:shadow-[0_18px_34px_-13px_rgba(176,141,69,0.75)]"
              >
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">Book a Consultation</span>
                <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                type="button"
                onClick={() => scrollTo("#services")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-cream/25 bg-cream/[0.04] px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-all duration-300 hover:border-gold/65 hover:bg-cream/[0.09]"
              >
                Explore Our Services
                <ArrowUpRight className="h-4 w-4 text-gold-light/85 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </motion.div>

            <motion.div variants={item} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-cream/68">
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

          {/* Desktop authority plaque: a refined counterweight to the headline. */}
          <motion.aside
            initial={{ opacity: 0, x: 32, y: 18 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.95, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-gold/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.65rem] border border-gold/30 bg-navy-deep/62 p-5 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.8)] backdrop-blur-xl xl:p-6">
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.11),transparent_34%,rgba(176,141,69,0.1))]" />
              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                    <Landmark className="h-5 w-5" strokeWidth={1.65} />
                  </span>
                  <span className="rounded-full border border-cream/15 bg-cream/5 px-2.5 py-1 text-[0.58rem] font-bold uppercase tracking-[0.16em] text-cream/65">
                    Established counsel
                  </span>
                </div>

                <p className="mt-8 font-display text-2xl font-bold leading-tight text-cream">
                  Legal guidance, made personal.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/64">
                  Structured advice, transparent fees, and a steady hand from your first enquiry through to completion.
                </p>

                <div className="mt-7 space-y-3 border-t border-cream/12 pt-5">
                  {[
                    "Plain-English communication",
                    "Transparent fee guidance",
                    "Meticulous document handling",
                  ].map((benefit, index) => (
                    <div key={benefit} className="flex items-center gap-3 text-sm text-cream/78">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/35 text-[0.58rem] font-bold text-gold-light">
                        0{index + 1}
                      </span>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <motion.span
                animate={reduceMotion ? undefined : { rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full border border-dashed border-gold/25"
              />
            </div>
          </motion.aside>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.35, duration: 0.75 }}
        className="absolute bottom-8 right-5 hidden items-center gap-2.5 rounded-full border border-cream/15 bg-navy-deep/52 px-4 py-2 backdrop-blur-md sm:flex lg:right-12"
      >
        <MapPin className="h-3.5 w-3.5 text-gold" />
        <span className="text-[0.64rem] font-bold uppercase tracking-[0.17em] text-cream/75">
          The Pegasus Building
        </span>
        <span className="h-3 w-px bg-cream/20" />
        <span className="text-[0.64rem] text-cream/48">Menlyn Maine</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.45, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2.5 xl:flex"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.27em] text-cream/42">
          Discover the practice
        </span>
        <span className="relative h-12 w-px overflow-hidden bg-cream/15">
          <motion.span
            animate={reduceMotion ? undefined : { y: ["-100%", "100%"] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-b from-gold to-gold/30"
          />
        </span>
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-navy-deep to-transparent" />
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, CheckCircle2, Scale, Sparkles } from "lucide-react";
import { PROCESS_STEPS } from "@/lib/site-data";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function ProcessTimeline() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep py-24 text-cream sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_16%,rgba(0,122,51,0.14),transparent_24%),radial-gradient(circle_at_88%_12%,rgba(0,56,168,0.2),transparent_26%),radial-gradient(circle_at_76%_90%,rgba(176,141,69,0.16),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.045] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#000000_0%,#ffb81c_16%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />
      <div className="pointer-events-none absolute -left-44 top-1/3 h-[32rem] w-[32rem] rounded-full border border-gold/10" />
      <div className="pointer-events-none absolute -right-32 bottom-8 h-[26rem] w-[26rem] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-light backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Your legal journey
            </div>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
              A clear path from your first call to a confident next step.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/72 sm:text-lg">
              Important legal work should never feel like a black box. You will know where your matter stands, what happens next and who is guiding it.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[1.5rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(176,141,69,0.2),rgba(255,255,255,0.06))] p-5 shadow-[0_26px_60px_-34px_rgba(0,0,0,0.75)] backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.1),transparent_38%,rgba(176,141,69,0.08))]" />
            <div className="relative flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-light/75">The promise</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-cream">No mystery. No unnecessary jargon. No silence when it matters.</p>
              </div>
            </div>
          </div>
        </div>

        <StaggerGroup className="relative mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {PROCESS_STEPS.map((step, index) => (
            <motion.article
              key={step.number}
              variants={staggerItem}
              whileHover={{ y: -10, rotateX: 2, rotateY: index % 2 === 0 ? 2 : -2 }}
              transition={{ type: "spring", stiffness: 240, damping: 20 }}
              className="group relative min-h-[19rem] overflow-hidden rounded-[1.6rem] border border-white/12 bg-white/[0.06] p-6 shadow-[0_24px_50px_-34px_rgba(0,0,0,0.72)] backdrop-blur-md [perspective:1000px]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),transparent_34%,rgba(176,141,69,0.08))]" />
              <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-gold/15 transition-transform duration-700 group-hover:scale-125" />
              <span className="pointer-events-none absolute -bottom-8 -right-2 font-display text-[9rem] font-bold leading-none text-white/[0.035]">
                {step.number}
              </span>

              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/30 bg-[linear-gradient(145deg,rgba(232,217,181,0.26),rgba(176,141,69,0.08))] font-display text-xl font-bold text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] transition-transform duration-500 group-hover:scale-110 group-hover:[transform:translateZ(18px)]">
                    {step.number}
                  </span>
                  <span className="rounded-full border border-white/12 bg-white/[0.06] px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.15em] text-cream/60">
                    {step.duration}
                  </span>
                </div>

                <div className="mt-9">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-light/75">Step {String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-3 font-display text-2xl font-bold leading-tight text-cream">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-cream/66">{step.description}</p>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-7 text-xs font-semibold uppercase tracking-[0.14em] text-gold-light/80">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Clear communication
                  {index < PROCESS_STEPS.length - 1 && <ArrowDownRight className="ml-auto h-4 w-4 text-gold transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />}
                </div>
              </div>

              <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#ffb81c_0%,#007a33_42%,#ffffff_58%,#de3831_76%,#0038a8_100%)] transition-transform duration-700 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

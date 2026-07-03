"use client";

import { motion } from "framer-motion";
import { PROCESS_STEPS } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function ProcessTimeline() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="How It Works"
          title="A Clear Path From First Call to Resolution"
          description="No mystery, no jargon, no surprises. Here is exactly what working with us looks like — start to finish."
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="relative mt-20">
          {/* Horizontal connecting line (desktop) */}
          <div className="absolute left-0 right-0 top-8 hidden lg:block">
            <div className="mx-auto h-px max-w-5xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
          </div>

          <StaggerGroup className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={staggerItem}
                className="relative flex flex-col items-center text-center"
              >
                {/* Numbered node */}
                <div className="relative z-10 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-white shadow-premium">
                    <span className="font-display text-xl font-bold text-navy-deep">
                      {step.number}
                    </span>
                  </div>
                  {/* pulse ring on first node */}
                  {i === 0 && (
                    <span className="absolute inset-0 -z-10 animate-ping rounded-full border-2 border-gold/30" />
                  )}
                </div>

                {/* Duration badge */}
                <span className="mb-3 rounded-full bg-navy/5 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold">
                  {step.duration}
                </span>

                <h3 className="font-display text-lg font-bold text-navy-deep">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {step.description}
                </p>

                {/* Arrow between steps (mobile vertical) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <span className="mt-6 flex h-8 w-px bg-gradient-to-b from-gold/40 to-transparent lg:hidden" />
                )}
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

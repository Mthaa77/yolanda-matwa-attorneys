"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/site-data";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-gold/15 bg-navy-deep py-16 sm:py-20">
      {/* decorative top + bottom hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* soft gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <StaggerGroup className="grid grid-cols-2 gap-y-10 divide-x divide-cream/10 lg:grid-cols-4">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="flex flex-col items-center px-4 text-center"
            >
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="font-display text-[clamp(2.5rem,5vw,4rem)] font-bold leading-none text-gradient-gold"
              >
                {stat.value}
              </motion.span>
              <span className="mt-3 text-sm font-semibold text-cream">
                {stat.label}
              </span>
              <span className="mt-1.5 max-w-[14rem] text-xs leading-relaxed text-cream/50">
                {stat.sublabel}
              </span>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

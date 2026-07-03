"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/site-data";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function StatsStrip() {
  return (
    <section className="relative overflow-hidden border-y border-gold/20 bg-gradient-to-b from-navy-deep via-navy to-navy-deep py-16 sm:py-20">
      {/* decorative top + bottom hairlines — doubled for premium depth */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 top-1 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-1 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />

      {/* soft gold glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/[0.08] blur-3xl" />
      {/* filmic grain */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <StaggerGroup className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-cream/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={staggerItem}
              className="group relative flex flex-col items-center px-4 text-center"
            >
              {/* gold dot accent above each stat */}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="mb-3 h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(176,141,69,0.4)]"
              />

              <motion.span
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                className="font-display text-[clamp(2.75rem,5.5vw,4.5rem)] font-bold leading-none text-gradient-gold transition-transform duration-300 group-hover:scale-105"
              >
                {stat.value}
              </motion.span>
              <span className="mt-3 text-sm font-semibold text-cream">
                {stat.label}
              </span>
              <span className="mt-1.5 max-w-[14rem] text-xs leading-relaxed text-cream/60">
                {stat.sublabel}
              </span>

              {/* hover gold underline */}
              <span className="mt-3 h-px w-8 origin-center bg-gold/40 transition-all duration-300 group-hover:w-12 group-hover:bg-gold" />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

/**
 * A decorative gold-on-navy divider used between sections for premium rhythm.
 * Renders a centered monogram flanked by gradient gold lines.
 */
export function SectionDivider({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  return (
    <div
      className={`flex items-center justify-center py-2 ${
        variant === "dark" ? "bg-navy-deep" : ""
      }`}
      aria-hidden="true"
    >
      <motion.div
        initial={{ opacity: 0, scaleX: 0.6 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-4"
      >
        <span className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50 sm:w-24" />
        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/30">
          <span className="font-display text-xs font-bold text-gradient-gold">
            YM
          </span>
        </span>
        <span className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50 sm:w-24" />
      </motion.div>
    </div>
  );
}

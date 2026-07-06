"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex min-w-0 flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "flex flex-wrap items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-gold/60" />
          <span
            className={cn(
              "text-xs font-bold uppercase tracking-[0.2em]",
              light ? "text-gold-light" : "text-gold",
            )}
          >
            {eyebrow}
          </span>
          {align === "center" && <span className="h-px w-8 bg-gold/60" />}
        </motion.div>
      )}
      <h2
        className={cn(
          "max-w-full break-words font-display text-[clamp(2.15rem,6.4vw,4rem)] font-bold leading-[1.04] tracking-[-0.04em] text-balance drop-shadow-[0_12px_22px_rgba(15,31,56,0.13)]",
          light ? "text-cream" : "text-navy-deep",
        )}
      >
        {title}
      </h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg text-pretty",
            light ? "text-cream/70" : "text-muted-foreground",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}

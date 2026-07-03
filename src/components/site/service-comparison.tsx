"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Minus, Circle, ArrowRight } from "lucide-react";
import {
  SERVICES,
  COMPARISON_ROWS,
  COMPARISON_CATEGORIES,
  type Coverage,
} from "@/lib/site-data";
import { openServiceModal } from "@/lib/service-events";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

type Category = (typeof COMPARISON_CATEGORIES)[number];

const coverageConfig: Record<
  Coverage,
  { icon: typeof Check; label: string; cell: string; iconClass: string }
> = {
  yes: {
    icon: Check,
    label: "Covered",
    cell: "bg-gold/10",
    iconClass: "text-gold",
  },
  partial: {
    icon: Circle,
    label: "Partial",
    cell: "bg-navy/5",
    iconClass: "text-navy/40",
  },
  no: {
    icon: Minus,
    label: "Not applicable",
    cell: "",
    iconClass: "text-muted-foreground/25",
  },
};

export function ServiceComparison() {
  const [category, setCategory] = useState<Category>("All");

  const filteredRows =
    category === "All"
      ? COMPARISON_ROWS
      : COMPARISON_ROWS.filter((r) => r.category === category);

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="At a Glance"
          title="Find the Right Service for Your Need"
          description="A quick comparison of which services handle which matters. Not sure where you fit? The first call is free of jargon — we'll point you in the right direction."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
        >
          {COMPARISON_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all",
                category === cat
                  ? "bg-navy-deep text-cream shadow-sm"
                  : "border border-border bg-white text-muted-foreground hover:border-gold/40 hover:text-navy-deep",
              )}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/10">
              <Check className="h-3 w-3 text-gold" />
            </span>
            Primary coverage
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-navy/5">
              <Circle className="h-2.5 w-2.5 text-navy/40" />
            </span>
            Partially covered
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="flex h-5 w-5 items-center justify-center">
              <Minus className="h-3 w-3 text-muted-foreground/30" />
            </span>
            Not applicable
          </span>
        </div>

        {/* Comparison table — horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 overflow-x-auto rounded-2xl border border-border shadow-premium scrollbar-premium"
        >
          <table className="w-full min-w-[820px] border-collapse">
            <thead>
              <tr className="bg-navy-deep">
                <th
                  scope="col"
                  className="sticky left-0 z-10 bg-navy-deep px-5 py-5 text-left text-xs font-semibold uppercase tracking-[0.16em] text-gold-light sm:px-6"
                >
                  Your Need
                </th>
                {SERVICES.map((s) => (
                  <th
                    key={s.slug}
                    scope="col"
                    className="px-3 py-5 text-center align-bottom sm:px-4"
                  >
                    <button
                      onClick={() => openServiceModal(s.slug)}
                      className="group flex flex-col items-center gap-2 transition-transform hover:scale-105 focus-visible:scale-105"
                      aria-label={`Open ${s.title} details`}
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-gold/10 transition-colors group-hover:border-gold/60 group-hover:bg-gold/20">
                        <s.icon className="h-5 w-5 text-gold-light" />
                      </span>
                      <span className="text-xs font-semibold leading-tight text-cream/90 transition-colors group-hover:text-gold-light">
                        {s.shortTitle}
                      </span>
                    </button>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, i) => (
                <tr
                  key={row.need}
                  className={cn(
                    "border-t border-border transition-colors hover:bg-cream/40",
                    i % 2 === 1 && "bg-mist/30",
                  )}
                >
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-inherit px-5 py-4 text-left text-sm font-medium text-navy-deep sm:px-6"
                  >
                    {/* Click the need label to open the most relevant service modal */}
                    {(() => {
                      const primarySlug =
                        Object.entries(row.coverage).find(
                          ([, c]) => c === "yes",
                        )?.[0] ??
                        Object.entries(row.coverage).find(
                          ([, c]) => c === "partial",
                        )?.[0];
                      const label = (
                        <>
                          <span className="block">{row.need}</span>
                          <span className="mt-0.5 block text-[0.65rem] font-normal uppercase tracking-wider text-gold/70">
                            {row.category}
                          </span>
                        </>
                      );
                      if (primarySlug) {
                        return (
                          <button
                            onClick={() => openServiceModal(primarySlug)}
                            className="group -mx-1 -my-0.5 block rounded px-1 py-0.5 text-left transition-colors hover:bg-gold/5 focus-visible:bg-gold/5"
                            aria-label={`Open ${SERVICES.find((s) => s.slug === primarySlug)?.shortTitle} details for: ${row.need}`}
                          >
                            <span className="group-hover:text-gold">{label}</span>
                          </button>
                        );
                      }
                      return label;
                    })()}
                  </th>
                  {SERVICES.map((s) => {
                    const cov = row.coverage[s.slug];
                    const cfg = coverageConfig[cov];
                    const Icon = cfg.icon;
                    const clickable = cov === "yes" || cov === "partial";
                    return (
                      <td
                        key={s.slug}
                        className={cn(
                          "px-3 py-4 text-center sm:px-4",
                          cfg.cell,
                          clickable && "transition-colors",
                        )}
                      >
                        {clickable ? (
                          <button
                            onClick={() => openServiceModal(s.slug)}
                            className="group inline-flex h-7 w-7 items-center justify-center rounded-full transition-all hover:scale-110 focus-visible:scale-110"
                            aria-label={`${row.need} — open ${s.shortTitle} details (${cfg.label})`}
                            title={`${s.shortTitle}: ${cfg.label}`}
                          >
                            <Icon
                              className={cn(
                                "h-4 w-4 transition-colors",
                                cfg.iconClass,
                                "group-hover:text-gold",
                              )}
                            />
                          </button>
                        ) : (
                          <span className="inline-flex h-7 w-7 items-center justify-center">
                            <Icon
                              className={cn("h-4 w-4", cfg.iconClass)}
                              aria-label={cfg.label}
                            />
                          </span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA below table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-cream/40 p-6 sm:flex-row sm:p-7"
        >
          <p className="text-sm text-muted-foreground text-pretty">
            <span className="font-semibold text-navy-deep">
              Still unsure which service you need?
            </span>{" "}
            That's perfectly normal — many matters span more than one area. Tell
            us what's happening and we'll route it correctly.
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-deep px-5 py-2.5 text-sm font-semibold text-cream transition-all hover:bg-navy"
          >
            Help Me Decide
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

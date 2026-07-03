"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

interface InsightCard {
  topic: string;
  question: string;
  readTime: string;
  status: "drafting" | "planned";
}

// Grounded in the long-tail SEO keyword opportunities from content scrape Section 21.
// These are genuinely planned articles — NOT published/fabricated content.
const INSIGHTS: InsightCard[] = [
  {
    topic: "Property Law",
    question: "How much does property transfer really cost in Pretoria?",
    readTime: "6 min read",
    status: "drafting",
  },
  {
    topic: "Family Law",
    question: "ANC with or without accrual: which actually protects you?",
    readTime: "5 min read",
    status: "drafting",
  },
  {
    topic: "Estates",
    question: "Why most DIY wills fail at the Master's Office",
    readTime: "7 min read",
    status: "planned",
  },
  {
    topic: "Competition Law",
    question: "What a cartel investigator looks for in your commercial contract",
    readTime: "8 min read",
    status: "planned",
  },
];

export function LegalInsights() {
  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Legal Insights"
            title="Plain Answers to the Questions We Hear Most"
            description="Real legal explainers, written by the attorney who will handle your matter — not a content farm. The first articles are being drafted now."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-gold/30 bg-gold/[0.06] px-4 py-2.5"
          >
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              Launching soon
            </span>
          </motion.div>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHTS.map((insight) => (
            <motion.article
              key={insight.question}
              variants={staggerItem}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium"
            >
              {/* status ribbon */}
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-navy">
                  {insight.topic}
                </span>
                <span className="inline-flex items-center gap-1 text-[0.65rem] font-medium uppercase tracking-wider text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {insight.status === "drafting" ? "Drafting" : "Planned"}
                </span>
              </div>

              <FileText className="h-7 w-7 text-gold/60 transition-colors group-hover:text-gold" />

              <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-navy-deep text-pretty">
                {insight.question}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {insight.readTime}
                </span>
                <span className="text-xs font-medium text-muted-foreground/50">
                  Soon
                </span>
              </div>

              {/* hover bottom line */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </StaggerGroup>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-navy/10 bg-white p-6 shadow-sm sm:flex-row sm:p-7"
        >
          <p className="text-sm text-muted-foreground text-pretty">
            <span className="font-semibold text-navy-deep">
              Want a specific question answered?
            </span>{" "}
            Tell us what you&apos;re trying to understand — it may shape what we
            publish first.
          </p>
          <button
            onClick={() =>
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-navy/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-deep transition-all hover:border-gold/50 hover:text-gold"
          >
            Suggest a Topic
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Clock, FileText, Sparkles } from "lucide-react";
import { INSIGHT_ARTICLES, type InsightArticle } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";
import { ArticleModal } from "./article-modal";
import { InsightsAlert } from "./insights-alert";

export function LegalInsights() {
  const [active, setActive] = useState<InsightArticle | null>(null);

  return (
    <section className="relative overflow-hidden bg-mist py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Legal Insights"
            title="Plain Answers to the Questions We Hear Most"
            description="Real legal explainers, written by the attorney who will handle your matter — not a content farm. Read the drafts in progress below."
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
              Drafts in progress
            </span>
          </motion.div>
        </div>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {INSIGHT_ARTICLES.map((article) => (
            <motion.button
              key={article.slug}
              variants={staggerItem}
              onClick={() => setActive(article)}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-premium"
            >
              {/* status ribbon */}
              <div className="mb-5 flex items-center justify-between">
                <span className="rounded-full bg-navy/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-navy">
                  {article.topic}
                </span>
                <span className="inline-flex items-center gap-1 text-[0.65rem] font-medium uppercase tracking-wider text-gold">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  {article.status === "drafting" ? "Drafting" : "Planned"}
                </span>
              </div>

              <FileText className="h-7 w-7 text-gold/60 transition-colors group-hover:text-gold" />

              <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug text-navy-deep text-pretty">
                {article.question}
              </h3>

              <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Read draft
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>

              {/* hover bottom line */}
              <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
            </motion.button>
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

        {/* Insights alert email signup */}
        <div className="mt-8">
          <InsightsAlert />
        </div>
      </div>

      <ArticleModal article={active} onClose={() => setActive(null)} />
    </section>
  );
}

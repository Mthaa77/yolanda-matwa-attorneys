"use client";

import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, ArrowRight, AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { type InsightArticle, FIRM } from "@/lib/site-data";
import { useFocusTrap } from "@/hooks/use-focus-trap";

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, !!article);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (article) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [article, onClose]);

  const scrollToContact = () => {
    onClose();
    setTimeout(() => {
      document
        .querySelector("#contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <AnimatePresence>
      {article && (
        <div className="fixed inset-0 z-[75] flex items-end justify-center sm:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-navy-deep/70 backdrop-blur-sm"
            aria-hidden="true"
          />
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-cream shadow-navy-deep sm:rounded-2xl"
          >
            {/* Header */}
            <div className="relative shrink-0 bg-navy-deep px-6 py-7 sm:px-9 sm:py-9">
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-light">
                      {article.topic}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[0.65rem] font-medium uppercase tracking-wider text-cream/50">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                  </div>
                  <h3
                    id="article-modal-title"
                    className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl text-balance"
                  >
                    {article.question}
                  </h3>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
                  aria-label="Close article"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Body — scrollable */}
            <div className="scrollbar-premium flex-1 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
              {/* draft notice */}
              <div className="mb-6 flex items-start gap-3 rounded-xl border border-gold/20 bg-gold/[0.04] p-4">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-xs leading-relaxed text-muted-foreground text-pretty">
                  <span className="font-semibold text-navy-deep">
                    Draft preview.
                  </span>{" "}
                  This article is {article.status === "drafting" ? "actively being drafted" : "planned for publication"}. The
                  content below reflects the attorney&apos;s expertise and
                  intended direction, but may be revised before final
                  publication.
                </p>
              </div>

              {/* excerpt */}
              <p className="mb-6 font-display text-lg italic leading-relaxed text-navy-deep text-pretty">
                {article.excerpt}
              </p>

              {/* body paragraphs */}
              <div className="space-y-4">
                {article.body.map((para, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-muted-foreground text-pretty"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Footer CTA */}
            <div className="shrink-0 border-t border-border bg-white px-6 py-5 sm:px-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Have a question this article doesn&apos;t answer?
                </p>
                <button
                  onClick={scrollToContact}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy"
                >
                  Ask Us Directly
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">
                Or email{" "}
                <a
                  href={`mailto:${FIRM.email}`}
                  className="font-medium text-navy-deep hover:text-gold"
                >
                  {FIRM.email}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

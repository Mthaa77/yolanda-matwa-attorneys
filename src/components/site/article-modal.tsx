"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Clock,
  ArrowRight,
  AlertCircle,
  Share2,
  Link2,
  Check,
  Facebook,
} from "lucide-react";
import { useEffect } from "react";
import { type InsightArticle, FIRM } from "@/lib/site-data";
import { useFocusTrap } from "@/hooks/use-focus-trap";
import { toast } from "sonner";

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
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

  const shareUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/#legal-insights`
      : "https://yolandamatwa.co.za/#legal-insights";
  const shareText = article
    ? `${article.question} — Yolanda Matwa Attorneys`
    : "";

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy the link — please copy it manually.");
    }
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

            {/* Footer CTA + Share */}
            <div className="shrink-0 border-t border-border bg-white px-6 py-5 sm:px-9">
              {/* Share bar */}
              <div className="mb-4 flex items-center justify-between gap-3 pb-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <Share2 className="h-3.5 w-3.5" />
                  Share this article
                </span>
                <div className="flex items-center gap-1.5">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on WhatsApp"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-sage/50 hover:bg-sage/5 hover:text-sage"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.22 8.22 0 0 1 2.42 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24zm-3.2 4.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.57 2.4 3.8 3.36.53.23.95.37 1.27.47.53.17 1.02.15 1.4.09.43-.06 1.31-.54 1.5-1.05.18-.52.18-.96.13-1.05-.06-.09-.2-.15-.43-.26-.22-.11-1.31-.65-1.51-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.86-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.78-1.09-.66-.59-1.1-1.31-1.23-1.53-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.21-.69-1.66-.18-.43-.36-.37-.5-.38z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-navy/40 hover:bg-navy/5 hover:text-navy"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-navy/40 hover:bg-navy/5 hover:text-navy"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V9.66H5.67v8.68h2.67zM7 8.5a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.84v-4.76c0-2.55-1.36-3.73-3.18-3.73-1.47 0-2.13.81-2.5 1.38v-1.18h-2.67c.04.75 0 8.68 0 8.68h2.67v-4.85c0-.24.02-.48.09-.65.19-.48.63-.98 1.37-.98.97 0 1.36.74 1.36 1.82v4.66h2.66z"/>
                    </svg>
                  </a>
                  <button
                    onClick={copyLink}
                    aria-label="Copy link"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-gold/50 hover:bg-gold/5 hover:text-gold"
                  >
                    {copied ? (
                      <Check className="h-4 w-4 text-gold" />
                    ) : (
                      <Link2 className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
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

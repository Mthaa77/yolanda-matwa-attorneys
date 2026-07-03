"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  ClipboardList,
  Plus,
} from "lucide-react";
import { useEffect } from "react";
import { type ServiceDetail, FIRM, SERVICES } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { useFocusTrap } from "@/hooks/use-focus-trap";

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
  onNavigate?: (service: ServiceDetail) => void;
}

export function ServiceModal({ service, onClose, onNavigate }: ServiceModalProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const modalRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef, !!service);

  // Reset the open FAQ + scroll to top whenever a different service opens.
  // Defer into a timeout to avoid synchronous setState-in-effect cascading renders.
  useEffect(() => {
    const t = setTimeout(() => {
      setOpenFaq(0);
      bodyRef.current?.scrollTo({ top: 0 });
    }, 0);
    return () => clearTimeout(t);
  }, [service?.slug]);

  // Prev/next navigation within the SERVICES array (wraps around)
  const navigate = (dir: -1 | 1) => {
    if (!service || !onNavigate) return;
    const idx = SERVICES.findIndex((s) => s.slug === service.slug);
    const nextIdx = (idx + dir + SERVICES.length) % SERVICES.length;
    onNavigate(SERVICES[nextIdx]);
  };
  const goTo = (idx: number) => {
    if (!service || !onNavigate) return;
    const clamped = ((idx % SERVICES.length) + SERVICES.length) % SERVICES.length;
    onNavigate(SERVICES[clamped]);
  };
  const currentIdx = service
    ? SERVICES.findIndex((s) => s.slug === service.slug)
    : -1;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Only handle service-navigation keys when the focus is not inside a
      // text-editable control (so typing in inputs isn't hijacked).
      const tag = (document.activeElement?.tagName || "").toLowerCase();
      const editable =
        tag === "input" ||
        tag === "textarea" ||
        tag === "select" ||
        (document.activeElement as HTMLElement)?.isContentEditable;
      if (editable) return;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        navigate(-1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        navigate(1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(SERVICES.length - 1);
      }
    };
    if (service) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose, onNavigate]);

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
      {service && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
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
            aria-labelledby="service-modal-title"
            aria-describedby="service-modal-desc"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-cream shadow-navy-deep sm:rounded-2xl"
          >
            {/* Header band */}
            <div
              className={cn(
                "relative shrink-0 px-6 py-7 sm:px-9 sm:py-9",
                service.accent === "gold" && "bg-navy-deep",
                service.accent === "navy" && "bg-navy",
                service.accent === "sage" && "bg-sage",
              )}
            >
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <service.icon className="h-6 w-6 text-gold-light" />
                  </span>
                  <div>
                    <p
                      id="service-modal-desc"
                      className="mb-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-light/80"
                    >
                      {service.tagline}
                    </p>
                    <h3
                      id="service-modal-title"
                      className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl"
                    >
                      {service.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Body — scrollable */}
            <div
              ref={bodyRef}
              className="scrollbar-premium flex-1 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9"
            >
              <div>
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  What This Covers
                </h4>
                <ul className="space-y-2.5">
                  {service.covers.map((c, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/10">
                        <Check className="h-3 w-3 text-gold" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/80">
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Our Approach
                </h4>
                <p className="text-base leading-relaxed text-muted-foreground text-pretty">
                  {service.approach}
                </p>
              </div>

              {/* What to Prepare — distinct sage-accented checklist */}
              <div className="mt-8 rounded-xl border border-sage/20 bg-sage/[0.04] p-5 sm:p-6">
                <div className="mb-4 flex items-center gap-2">
                  <ClipboardList className="h-4 w-4 text-sage" />
                  <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
                    What to Prepare for Your First Meeting
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {service.prepare.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-sage/30 bg-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-sage" />
                      </span>
                      <span className="text-sm leading-relaxed text-foreground/75">
                        {p}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Questions — mini-FAQ accordion */}
              <div className="mt-8">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  Common Questions
                </h4>
                <div className="space-y-2.5">
                  {service.faqs.map((faq, i) => {
                    const isOpen = openFaq === i;
                    return (
                      <div
                        key={i}
                        className={cn(
                          "overflow-hidden rounded-lg border bg-white transition-colors",
                          isOpen
                            ? "border-gold/40"
                            : "border-border hover:border-gold/30",
                        )}
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                          className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left"
                          aria-expanded={isOpen}
                        >
                          <span className="text-sm font-medium text-navy-deep">
                            {faq.q}
                          </span>
                          <motion.span
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ duration: 0.2 }}
                            className={cn(
                              "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors",
                              isOpen
                                ? "bg-gold/10 text-gold"
                                : "text-muted-foreground",
                            )}
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </motion.span>
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{
                                duration: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                              }}
                              className="overflow-hidden"
                            >
                              <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground text-pretty">
                                {faq.a}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Prev / Next service navigation */}
            {onNavigate && currentIdx >= 0 && (
              <div className="shrink-0 border-t border-border bg-mist/50 px-6 py-4 sm:px-9">
                <div className="flex items-center justify-between gap-3">
                  <button
                    onClick={() => navigate(-1)}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-medium text-navy-deep transition-all hover:border-gold/50 hover:text-gold sm:px-4"
                    aria-label={`Previous service: ${SERVICES[(currentIdx - 1 + SERVICES.length) % SERVICES.length].shortTitle}`}
                  >
                    <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
                    <span className="hidden sm:inline">
                      {SERVICES[(currentIdx - 1 + SERVICES.length) % SERVICES.length].shortTitle}
                    </span>
                    <span className="sm:hidden">Prev</span>
                  </button>

                  {/* position indicator + keyboard hint */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="flex items-center gap-1.5" aria-hidden="true">
                      {SERVICES.map((s, i) => (
                        <span
                          key={s.slug}
                          className={cn(
                            "h-1.5 rounded-full transition-all",
                            i === currentIdx
                              ? "w-5 bg-gold"
                              : "w-1.5 bg-navy/15",
                          )}
                        />
                      ))}
                    </div>
                    <span className="hidden items-center gap-1 text-[0.6rem] text-muted-foreground/50 lg:flex">
                      <kbd className="rounded border border-border bg-white px-1 py-0.5 font-sans text-[0.55rem]">←</kbd>
                      <kbd className="rounded border border-border bg-white px-1 py-0.5 font-sans text-[0.55rem]">→</kbd>
                      to browse
                    </span>
                  </div>

                  <button
                    onClick={() => navigate(1)}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-xs font-medium text-navy-deep transition-all hover:border-gold/50 hover:text-gold sm:px-4"
                    aria-label={`Next service: ${SERVICES[(currentIdx + 1) % SERVICES.length].shortTitle}`}
                  >
                    <span className="hidden sm:inline">
                      {SERVICES[(currentIdx + 1) % SERVICES.length].shortTitle}
                    </span>
                    <span className="sm:hidden">Next</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            )}

            {/* Footer CTA */}
            <div className="shrink-0 border-t border-border bg-white px-6 py-5 sm:px-9">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-muted-foreground">
                  Ready to begin? The first conversation is the simplest step.
                </p>
                <button
                  onClick={scrollToContact}
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy"
                >
                  Start Your Enquiry
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground/70">
                Or call us directly:{" "}
                <a
                  href={`tel:${FIRM.phoneIntl}`}
                  className="font-medium text-navy-deep hover:text-gold"
                >
                  {FIRM.phone}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, ClipboardList, Plus } from "lucide-react";
import { useEffect } from "react";
import { type ServiceDetail, FIRM } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface ServiceModalProps {
  service: ServiceDetail | null;
  onClose: () => void;
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Reset the open FAQ whenever a different service opens.
  // Defer into a timeout to avoid synchronous setState-in-effect cascading renders.
  useEffect(() => {
    const t = setTimeout(() => setOpenFaq(0), 0);
    return () => clearTimeout(t);
  }, [service?.slug]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (service) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [service, onClose]);

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
          />
          <motion.div
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
                    <p className="mb-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-light/80">
                      {service.tagline}
                    </p>
                    <h3 className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl">
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
            <div className="scrollbar-premium flex-1 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
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

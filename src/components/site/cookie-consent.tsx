"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";
import { FIRM } from "@/lib/site-data";

const STORAGE_KEY = "yma_popia_consent_v1";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem(STORAGE_KEY);
    } catch {
      return;
    }
    if (!consent) {
      // Defer to next tick so it doesn't block initial paint / cause cascading renders
      const t = setTimeout(() => setShow(true), 1400);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      // ignore
    }
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-4 bottom-4 z-[80] mx-auto max-w-3xl sm:inset-x-6 sm:bottom-6"
          role="dialog"
          aria-label="Cookie and privacy notice"
          aria-live="polite"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold/25 bg-navy-deep shadow-navy-deep">
            <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
            <button
              onClick={() => dismiss("declined")}
              className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full text-cream/50 transition-colors hover:bg-cream/10 hover:text-cream"
              aria-label="Dismiss notice"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative flex flex-col gap-4 p-5 sm:flex-row sm:items-start sm:gap-5 sm:p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <ShieldCheck className="h-5 w-5 text-gold" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-display text-base font-semibold text-cream sm:text-lg">
                  Your privacy, protected.
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-cream/65 text-pretty">
                  We use essential cookies to keep this site working and a
                  single analytics cookie to understand which pages help
                  visitors most. We never sell your data. See our approach to{" "}
                  <button
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="font-medium text-gold-light underline underline-offset-2 transition-colors hover:text-gold"
                  >
                    POPIA compliance
                  </button>
                  .
                </p>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  <button
                    onClick={() => dismiss("accepted")}
                    className="rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-navy-deep transition-colors hover:bg-gold-light"
                  >
                    Accept all
                  </button>
                  <button
                    onClick={() => dismiss("declined")}
                    className="rounded-full border border-cream/25 px-5 py-2.5 text-sm font-semibold text-cream/80 transition-colors hover:border-gold/50 hover:text-cream"
                  >
                    Essential only
                  </button>
                  <a
                    href={`tel:${FIRM.phoneIntl}`}
                    className="hidden items-center rounded-full px-3 py-2.5 text-sm font-medium text-cream/50 transition-colors hover:text-cream sm:flex"
                  >
                    Ask us directly
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

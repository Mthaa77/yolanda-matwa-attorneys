"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, FileLock2, Mail, Eye } from "lucide-react";
import { useEffect } from "react";
import { FIRM } from "@/lib/site-data";

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

const SECTIONS = [
  {
    icon: Eye,
    title: "What We Collect",
    body: "When you submit the contact form, we collect the name, email address, phone number, service interest and message you provide. When you browse the site, we may receive standard technical information (browser type, pages visited, approximate region) via a single privacy-respecting analytics cookie — but only if you accept it via the cookie notice.",
  },
  {
    icon: FileLock2,
    title: "How We Use Your Information",
    body: "Contact form submissions are used solely to respond to your enquiry and, if you engage us, to open and administer your matter. We do not send marketing emails without your explicit consent. Analytics data is aggregated and used only to improve the site — never sold, never shared with third parties for advertising.",
  },
  {
    icon: ShieldCheck,
    title: "Your Rights Under POPIA",
    body: "Under the Protection of Personal Information Act (POPIA), you have the right to access the personal information we hold about you, to correct inaccurate information, to request deletion (subject to legal record-keeping obligations for attorneys), and to withdraw consent at any time. To exercise any of these rights, email us at the address below.",
  },
  {
    icon: Mail,
    title: "Our Information Officer",
    body: `Queries about your personal information or this policy should be directed to our Information Officer at ${FIRM.email} or ${FIRM.phone}. We acknowledge all POPIA requests within 7 business days and resolve them within a reasonable timeframe, typically 30 days.`,
  },
];

export function PrivacyModal({ open, onClose }: PrivacyModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[85] flex items-end justify-center sm:items-center">
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
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-2xl bg-cream shadow-navy-deep sm:rounded-2xl"
          >
            {/* Header */}
            <div className="relative shrink-0 bg-navy-deep px-6 py-7 sm:px-9">
              <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06]" />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10">
                    <ShieldCheck className="h-6 w-6 text-gold-light" />
                  </span>
                  <div>
                    <p className="mb-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-gold-light/80">
                      POPIA Compliance
                    </p>
                    <h3 className="font-display text-2xl font-bold leading-tight text-cream sm:text-3xl">
                      Privacy &amp; Personal Information
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

            {/* Body */}
            <div className="scrollbar-premium flex-1 overflow-y-auto px-6 py-7 sm:px-9 sm:py-9">
              <p className="mb-7 text-sm leading-relaxed text-muted-foreground text-pretty">
                Yolanda Matwa Attorneys (Matwa Nongogo Incorporated) is committed
                to protecting your personal information in accordance with the
                Protection of Personal Information Act, 2013 (POPIA). This notice
                explains what we collect, why, and the rights you have over your
                data.
              </p>

              <div className="space-y-6">
                {SECTIONS.map((section) => (
                  <div key={section.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/5">
                      <section.icon className="h-5 w-5 text-gold" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-display text-base font-bold text-navy-deep">
                        {section.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
                        {section.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-xl border border-border bg-white p-5 text-xs text-muted-foreground">
                <p className="font-semibold text-navy-deep">
                  Legal record-keeping obligation
                </p>
                <p className="mt-1.5 leading-relaxed">
                  As attorneys, we are required by the Legal Practice Council to
                  retain certain client records for prescribed periods. These
                  obligations override deletion requests for those specific
                  records, though we will anonymise personal information wherever
                  the underlying record can be retained without it.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="shrink-0 border-t border-border bg-white px-6 py-5 sm:px-9">
              <p className="text-xs text-muted-foreground/70">
                Questions about your data? Email{" "}
                <a
                  href={`mailto:${FIRM.email}`}
                  className="font-medium text-navy-deep hover:text-gold"
                >
                  {FIRM.email}
                </a>{" "}
                or call{" "}
                <a
                  href={`tel:${FIRM.phoneIntl}`}
                  className="font-medium text-navy-deep hover:text-gold"
                >
                  {FIRM.phone}
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

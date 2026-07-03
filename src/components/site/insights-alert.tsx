"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Loader2, Check, Bell, Users } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export function InsightsAlert() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [readerCount, setReaderCount] = useState<number | null>(null);

  // Fetch the real subscriber count once on mount (for social proof).
  // Only displayed when > 0 — never fabricated.
  useEffect(() => {
    let cancelled = false;
    fetch("/api/insights-count")
      .then((r) => r.json())
      .then((data) => {
        if (!cancelled && data?.ok && typeof data.count === "number") {
          setReaderCount(data.count);
        }
      })
      .catch(() => {
        /* fail silently — count is optional */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !consent) return;
    setSubmitting(true);
    try {
      const res = await fetch("/api/insights-subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("You're on the list.", {
        description:
          "We'll let you know when new insights are published. No spam, ever.",
      });
      setSubscribedEmail(email);
      setDone(true);
      setEmail("");
      setConsent(false);
    } catch {
      toast.error("Something went wrong.", {
        description: "Please email us directly to subscribe.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const unsubscribe = async () => {
    if (!subscribedEmail) return;
    try {
      const res = await fetch("/api/insights-unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: subscribedEmail }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Unsubscribed.", {
        description: "You won't receive further insight notifications.",
      });
      setDone(false);
      setSubscribedEmail("");
    } catch {
      toast.error("Could not unsubscribe.", {
        description: "Please email us to be removed.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative overflow-hidden rounded-2xl border border-navy/10 bg-navy-deep p-6 shadow-sm sm:p-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/[0.08] blur-3xl" />

      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-md">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1">
            <Bell className="h-3.5 w-3.5 text-gold-light" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-gold-light">
              Insights Alert
            </span>
          </div>
          <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">
            Be first to read new insights.
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cream/60 text-pretty">
            One email when a new article is published. No newsletter, no spam,
            unsubscribe anytime.
          </p>
          {/* Real subscriber count — only shown when > 0 (never fabricated) */}
          {readerCount !== null && readerCount > 0 && (
            <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-cream/65">
              <Users className="h-3.5 w-3.5 text-gold/70" />
              Join{" "}
              <span className="font-semibold text-gold-light">
                {readerCount}
              </span>{" "}
              {readerCount === 1 ? "reader" : "readers"} already on the list
            </p>
          )}
        </div>

        {done ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex shrink-0 flex-col gap-3 rounded-xl border border-gold/30 bg-gold/10 px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold">
                <Check className="h-5 w-5 text-navy-deep" />
              </span>
              <div>
                <p className="text-sm font-semibold text-cream">Subscribed</p>
                <p className="text-xs text-cream/60">
                  Watch your inbox for confirmation.
                </p>
              </div>
            </div>
            {subscribedEmail && (
              <button
                onClick={unsubscribe}
                className="self-start text-xs text-cream/70 underline underline-offset-2 transition-colors hover:text-gold-light"
              >
                Undo — unsubscribe
              </button>
            )}
          </motion.div>
        ) : (
          <form onSubmit={onSubmit} className="w-full max-w-md shrink-0">
            <div className="flex flex-col gap-2 sm:flex-row">
              <div className="relative flex-1">
                <Mail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-cream/40" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-full border border-cream/15 bg-cream/5 py-3 pl-10 pr-4 text-sm text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
                  aria-label="Email address"
                />
              </div>
              <button
                type="submit"
                disabled={submitting || !email || !consent}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {submitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            <label className="mt-3 flex cursor-pointer items-start gap-2.5">
              <button
                type="button"
                role="checkbox"
                aria-checked={consent}
                onClick={() => setConsent(!consent)}
                className={cn(
                  "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors",
                  consent
                    ? "border-gold bg-gold text-navy-deep"
                    : "border-cream/30 bg-transparent",
                )}
              >
                {consent && <Check className="h-3 w-3" />}
              </button>
              <span className="text-xs leading-relaxed text-cream/70">
                I consent to Yolanda Matwa Attorneys storing my email to send
                insight notifications, per the{" "}
                <button
                  type="button"
                  onClick={() =>
                    import("./privacy-provider").then((m) =>
                      m.openPrivacyModal(),
                    )
                  }
                  className="font-medium text-gold-light underline underline-offset-2 hover:text-gold"
                >
                  POPIA notice
                </button>
                .
              </span>
            </label>
          </form>
        )}
      </div>
    </motion.div>
  );
}

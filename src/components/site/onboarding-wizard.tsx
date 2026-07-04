"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Home,
  ScrollText,
  HeartHandshake,
  FileCheck2,
  Briefcase,
  Gavel,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
} from "lucide-react";
import { SERVICES, type ServiceDetail } from "@/lib/site-data";
import { SectionHeading } from "./section-heading";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Question model — each answer maps to a service slug + a weight.     */
/* The highest-weighted service at the end is the recommendation.      */
/* ------------------------------------------------------------------ */

interface Option {
  label: string;
  description: string;
  icon: typeof Home;
  weights: Record<string, number>;
}

interface Question {
  id: string;
  prompt: string;
  helper: string;
  options: Option[];
}

const QUESTIONS: Question[] = [
  {
    id: "situation",
    prompt: "What brings you here today?",
    helper:
      "Choose the option that closest matches your situation — you can refine it later.",
    options: [
      {
        label: "Buying or selling property",
        description: "A home, a commercial unit, or a vacant stand.",
        icon: Home,
        weights: { conveyancing: 3, "commercial-contracts": 1 },
      },
      {
        label: "Planning for my family's future",
        description: "Wills, trusts, guardianship, estate planning.",
        icon: ScrollText,
        weights: {
          "wills-estates": 3,
          "deceased-estates": 1,
          "antenuptial-contracts": 1,
        },
      },
      {
        label: "Getting married soon",
        description: "Antenuptial contract, marital property regime.",
        icon: HeartHandshake,
        weights: { "antenuptial-contracts": 3, "wills-estates": 1 },
      },
      {
        label: "A loved one has passed away",
        description: "Estate administration, winding up affairs.",
        icon: FileCheck2,
        weights: { "deceased-estates": 3, "wills-estates": 1 },
      },
      {
        label: "A business or contract matter",
        description: "Commercial agreements, leases, compliance.",
        icon: Briefcase,
        weights: {
          "commercial-contracts": 3,
          litigation: 1,
          conveyancing: 1,
        },
      },
      {
        label: "A dispute or conflict",
        description: "Demand letters, summons, resolution.",
        icon: Gavel,
        weights: { litigation: 3, "commercial-contracts": 1 },
      },
    ],
  },
  {
    id: "urgency",
    prompt: "How soon do you need this resolved?",
    helper: "This helps us prioritise your enquiry and set expectations.",
    options: [
      {
        label: "Urgent — days",
        description: "A deadline is looming. We'll fast-track the first call.",
        icon: Clock,
        weights: { litigation: 1, conveyancing: 1 },
      },
      {
        label: "This month",
        description: "Within the next few weeks.",
        icon: Clock,
        weights: {},
      },
      {
        label: "Planning ahead",
        description: "Exploring options, no fixed date yet.",
        icon: Clock,
        weights: { "wills-estates": 1, "antenuptial-contracts": 1 },
      },
    ],
  },
  {
    id: "experience",
    prompt: "Have you worked with an attorney on this before?",
    helper: "So we can meet you where you are — first-timer or transferring in.",
    options: [
      {
        label: "First time",
        description: "We'll walk you through every step in plain language.",
        icon: ShieldCheck,
        weights: {},
      },
      {
        label: "Yes, previously",
        description: "You know the basics — we'll focus on what's different.",
        icon: ShieldCheck,
        weights: {},
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Component                                                            */
/* ------------------------------------------------------------------ */

export function OnboardingWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<ServiceDetail | null>(null);

  const totalSteps = QUESTIONS.length;
  const isResult = result !== null;

  const selectOption = (questionId: string, optionLabel: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionLabel }));
    // advance after a brief tick for the selection animation
    setTimeout(() => {
      if (step < totalSteps - 1) {
        setStep((s) => s + 1);
      } else {
        computeResult({ ...answers, [questionId]: optionLabel });
      }
    }, 220);
  };

  const computeResult = (allAnswers: Record<string, string>) => {
    const scores: Record<string, number> = {};
    QUESTIONS.forEach((q) => {
      const chosen = q.options.find((o) => o.label === allAnswers[q.id]);
      if (chosen) {
        Object.entries(chosen.weights).forEach(([slug, w]) => {
          scores[slug] = (scores[slug] || 0) + w;
        });
      }
    });
    // pick the highest-scoring service; tie-break by SERVICES order
    let bestSlug = SERVICES[0].slug;
    let bestScore = -1;
    SERVICES.forEach((s) => {
      const sc = scores[s.slug] || 0;
      if (sc > bestScore) {
        bestScore = sc;
        bestSlug = s.slug;
      }
    });
    setResult(SERVICES.find((s) => s.slug === bestSlug) || SERVICES[0]);
  };

  const restart = () => {
    setStep(0);
    setAnswers({});
    setResult(null);
  };

  const goBack = () => {
    if (isResult) {
      setResult(null);
      setStep(totalSteps - 1);
    } else if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document
      .querySelector("#services")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const currentQuestion = QUESTIONS[step];
  const progress = isResult
    ? 100
    : Math.round(((step + (answers[currentQuestion?.id] ? 1 : 0)) / totalSteps) * 100);

  return (
    <section
      id="onboarding"
      className="relative overflow-hidden bg-gradient-to-b from-mist/60 to-white py-24 sm:py-32"
    >
      {/* premium background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/[0.06] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-navy/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="Not Sure Where to Start?"
          title="Find the Right Service in 30 Seconds"
          description="Answer three quick questions and we'll point you to the service that fits your matter — and what to prepare for the first call. No jargon, no obligation."
          align="center"
          className="mx-auto max-w-3xl"
        />

        {/* === Wizard card === */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 overflow-hidden rounded-3xl border border-border bg-white shadow-premium"
        >
          {/* progress bar */}
          <div className="relative h-1.5 bg-mist">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="h-full bg-gradient-to-r from-gold via-gold-light to-gold"
            />
          </div>

          <div className="p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {/* ---------- Result screen ---------- */}
              {isResult && result ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex flex-col items-center text-center">
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10"
                    >
                      <CheckCircle2 className="h-8 w-8 text-gold" />
                    </motion.span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                      Our recommendation
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-navy-deep sm:text-3xl">
                      {result.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground text-pretty">
                      {result.tagline}. {result.description}
                    </p>

                    {/* what to prepare preview */}
                    <div className="mt-6 w-full max-w-md rounded-xl border border-sage/20 bg-sage/[0.04] p-4 text-left">
                      <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sage">
                        <Sparkles className="h-3.5 w-3.5" />
                        What to prepare first
                      </p>
                      <ul className="space-y-1.5">
                        {result.prepare.slice(0, 3).map((p, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-xs text-foreground/70"
                          >
                            <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-sage" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
                      <button
                        onClick={scrollToContact}
                        className="group inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-navy hover:shadow-premium"
                      >
                        Start this enquiry
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </button>
                      <button
                        onClick={scrollToServices}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/15 px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:border-gold/50 hover:text-gold"
                      >
                        See all services
                      </button>
                    </div>

                    <button
                      onClick={restart}
                      className="mt-6 inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-gold"
                    >
                      <RotateCcw className="h-3.5 w-3.5" />
                      Start over
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* ---------- Question screen ---------- */
                <motion.div
                  key={currentQuestion.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* step indicator */}
                  <div className="mb-6 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
                      <Sparkles className="h-3.5 w-3.5" />
                      Step {step + 1} of {totalSteps}
                    </span>
                    {step > 0 && (
                      <button
                        onClick={goBack}
                        className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-navy-deep"
                      >
                        <ArrowLeft className="h-3.5 w-3.5" />
                        Back
                      </button>
                    )}
                  </div>

                  <h3 className="font-display text-xl font-bold text-navy-deep sm:text-2xl text-balance">
                    {currentQuestion.prompt}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground text-pretty">
                    {currentQuestion.helper}
                  </p>

                  {/* options */}
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {currentQuestion.options.map((opt) => {
                      const selected = answers[currentQuestion.id] === opt.label;
                      const Icon = opt.icon;
                      return (
                        <button
                          key={opt.label}
                          onClick={() =>
                            selectOption(currentQuestion.id, opt.label)
                          }
                          className={cn(
                            "group flex items-start gap-3 rounded-xl border p-4 text-left transition-all duration-200",
                            selected
                              ? "border-gold bg-gold/5 shadow-premium"
                              : "border-border bg-white hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-sm",
                          )}
                        >
                          <span
                            className={cn(
                              "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors",
                              selected
                                ? "border-gold bg-gold/10 text-gold"
                                : "border-navy/10 bg-navy/5 text-navy group-hover:border-gold/40 group-hover:text-gold",
                            )}
                          >
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0 flex-1">
                            <span className="block text-sm font-semibold text-navy-deep">
                              {opt.label}
                            </span>
                            <span className="mt-0.5 block text-xs leading-relaxed text-muted-foreground text-pretty">
                              {opt.description}
                            </span>
                          </span>
                          {selected && (
                            <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* trust footnote */}
        <p className="mt-6 text-center text-xs text-muted-foreground/70">
          This guide is informational only and does not constitute legal advice.
          The first conversation with our team will confirm the right path for
          your specific matter.
        </p>
      </div>
    </section>
  );
}

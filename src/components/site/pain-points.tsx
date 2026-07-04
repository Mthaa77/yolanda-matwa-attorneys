"use client";

import { motion } from "framer-motion";
import {
  Home,
  ScrollText,
  HeartHandshake,
  FileCheck2,
  Briefcase,
  Gavel,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

/* Each "pain point" names a real anxiety a client feels, then reframes
   it with the reassurance this firm offers. This converts by showing
   the visitor they are understood — and that there is a calm path through. */

interface PainPoint {
  icon: typeof Home;
  worry: string;
  context: string;
  reassurance: string;
  accent: "gold" | "navy" | "sage";
}

const PAIN_POINTS: PainPoint[] = [
  {
    icon: Home,
    worry: "“Will my property transfer fall through at the last minute?”",
    context:
      "You've found the home, the bond is approved, and now everything depends on paperwork you can't see.",
    reassurance:
      "We manage every lodgement, clearance and rate figure — and you receive plain-language updates at each milestone. No silent gaps.",
    accent: "gold",
  },
  {
    icon: ScrollText,
    worry: "“I don't know if my will actually does what I think it does.”",
    context:
      "A will drafted from a template can fail at the Master's Office — or worse, cause the family conflict it was meant to prevent.",
    reassurance:
      "Your will is drafted with tax and estate-planning thought, not just boilerplate. We catch the gaps basic wills miss.",
    accent: "sage",
  },
  {
    icon: HeartHandshake,
    worry: "“We're getting married — is an ANC really necessary?”",
    context:
      "It feels unromantic. But the marital property regime you choose shapes your entire financial life together.",
    reassurance:
      "We explain accrual in plain language, help you choose what genuinely fits, and register the ANC correctly — not merely signed.",
    accent: "gold",
  },
  {
    icon: FileCheck2,
    worry: "“A loved one has died and I don't know where to begin.”",
    context:
      "The Master's Office, SARS, the bank, the bond — the administration feels endless on top of grief.",
    reassurance:
      "We handle the full administration with quiet competence and regular updates. You grieve; we manage the rest.",
    accent: "sage",
  },
  {
    icon: Briefcase,
    worry: "“Is this contract protecting me — or just the other side?”",
    context:
      "Templates are blind to competition-law exposure, regulatory risk, and the leverage buried in boilerplate.",
    reassurance:
      "Yolanda's CCSA background reads contracts for the risks no template anticipates. You sign with your eyes open.",
    accent: "navy",
  },
  {
    icon: Gavel,
    worry: "“Do I really have to go to court?”",
    context:
      "Litigation is expensive, slow, and uncertain. The instinct to fight is rarely the best strategy.",
    reassurance:
      "We pursue court only when it's genuinely the right path. Often a well-drafted demand or mediation resolves it faster and cheaper.",
    accent: "navy",
  },
];

const accentClasses = {
  gold: {
    iconWrap: "border-gold/30 bg-gold/5 text-gold",
    glow: "bg-gold/[0.05]",
  },
  navy: {
    iconWrap: "border-navy/20 bg-navy/5 text-navy",
    glow: "bg-navy/[0.04]",
  },
  sage: {
    iconWrap: "border-sage/30 bg-sage/5 text-sage",
    glow: "bg-sage/[0.04]",
  },
} as const;

export function PainPoints() {
  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 sm:py-32">
      {/* cinematic background */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-gold/[0.07] blur-3xl" />
      {/* gold hairlines */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <SectionHeading
          eyebrow="You're in Good Hands"
          title="The Questions That Keep You Up at Night"
          description="Every matter begins with a worry. Here are the ones we hear most often — and the reassurance that sits behind how we practise."
          align="center"
          light
          className="mx-auto max-w-3xl"
        />

        <StaggerGroup className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PAIN_POINTS.map((pp) => {
            const ac = accentClasses[pp.accent];
            return (
              <motion.article
                key={pp.worry}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-2xl border border-cream/10 bg-cream/[0.03] p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/30 hover:bg-cream/[0.06]"
              >
                {/* hover glow */}
                <div
                  className={cnGlow(
                    "pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100",
                    ac.glow,
                  )}
                />
                <div className="relative">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border ${ac.iconWrap} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <pp.icon className="h-5 w-5" />
                  </span>

                  <h3 className="mt-5 font-display text-lg font-bold italic leading-snug text-cream text-balance">
                    {pp.worry}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/55 text-pretty">
                    {pp.context}
                  </p>

                  {/* reassurance — emerges with a gold divider */}
                  <div className="mt-5 border-t border-cream/10 pt-4">
                    <p className="flex items-start gap-2 text-sm leading-relaxed text-gold-light/90 text-pretty">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                      </span>
                      {pp.reassurance}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </StaggerGroup>

        {/* bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gold/20 bg-gold/[0.04] p-6 sm:flex-row sm:p-7"
        >
          <p className="text-base font-medium text-cream text-pretty">
            Whatever the worry, the first conversation is the simplest step.
          </p>
          <button
            onClick={scrollToContact}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-navy-deep transition-all hover:bg-gold-light"
          >
            Talk to us
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}

/* helper so we can apply the glow class conditionally without cn import churn */
function cnGlow(base: string, glow: string) {
  return `${base} ${glow}`;
}

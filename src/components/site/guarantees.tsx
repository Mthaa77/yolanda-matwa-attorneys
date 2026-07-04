"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock,
  Lock,
  Phone,
  FileSignature,
  RefreshCw,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

/* The firm's commitments — each grounded in how the practice actually
   operates, not fabricated promises. Converts by removing the remaining
   friction a hesitant visitor feels before making first contact. */

const GUARANTEES = [
  {
    icon: FileSignature,
    title: "A written quote before any work begins",
    description:
      "You see the full fee — professional, statutory, disbursements — in writing before you commit. No verbal estimates that drift.",
  },
  {
    icon: Phone,
    title: "A named contact for your matter",
    description:
      "You are not passed between departments. One person knows your file, answers your questions, and owns your updates.",
  },
  {
    icon: Clock,
    title: "Updates at every milestone, not when we feel like it",
    description:
      "You hear from us at each defined step — lodgement, clearance, registration. Silence is never the update.",
  },
  {
    icon: Lock,
    title: "Strict confidentiality, POPIA-compliant",
    description:
      "Your personal information is handled in accordance with the Protection of Personal Information Act. Never sold, never shared for advertising.",
  },
  {
    icon: RefreshCw,
    title: "Scope changes flagged before the cost does",
    description:
      "If your matter becomes more complex than first assessed, we tell you first — and revise the quote before the work, not the invoice after.",
  },
  {
    icon: ShieldCheck,
    title: "Credentials you can verify",
    description:
      "Attorney admission (2013), Notary & Conveyancer (2019), Cert. Competition Law (UP), Cert. Tax Law (UNISA) — all verifiable with the Legal Practice Council.",
  },
];

export function Guarantees() {
  const scrollToContact = () => {
    document
      .querySelector("#contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-mist/40 to-white py-24 sm:py-32">
      {/* premium background accents */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-gold/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-navy/[0.04] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — heading + interactive seal */}
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Peace of Mind"
              title="Our Commitments to You"
              description="Six guarantees that define what it feels like to be represented by this practice — not slogans, but how we actually work."
            />

            {/* Interactive premium seal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex items-center gap-5"
            >
              <div className="relative">
                {/* outer rotating ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="flex h-24 w-24 items-center justify-center"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="h-full w-full"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="seal-circle"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text className="fill-gold/60 text-[8px] font-medium uppercase tracking-[0.2em]">
                      <textPath href="#seal-circle">
                        · Trust · Transparency · Competence · Trust · Transparency · Competence
                      </textPath>
                    </text>
                  </svg>
                </motion.div>
                {/* inner static badge */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gradient-to-br from-gold/20 to-transparent">
                    <ShieldCheck className="h-7 w-7 text-gold" />
                  </div>
                </div>
              </div>
              <div>
                <p className="font-display text-base font-bold text-navy-deep">
                  The Yolanda Matwa Standard
                </p>
                <p className="mt-1 text-sm text-muted-foreground text-pretty">
                  Quiet competence, clearly communicated, transparently priced.
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              onClick={scrollToContact}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all hover:bg-navy hover:shadow-premium"
            >
              Experience the difference
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>

          {/* Right — guarantees grid */}
          <div className="lg:col-span-7">
            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {GUARANTEES.map((g) => (
                <motion.article
                  key={g.title}
                  variants={staggerItem}
                  className="group relative overflow-hidden rounded-xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-premium"
                >
                  <div className="flex items-start gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent text-gold transition-transform duration-300 group-hover:scale-110">
                      <g.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-bold leading-snug text-navy-deep">
                        {g.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-foreground/65 text-pretty">
                        {g.description}
                      </p>
                    </div>
                  </div>
                  {/* hover gold accent */}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              ))}
            </StaggerGroup>

            {/* trust footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 flex items-center justify-center gap-2 rounded-xl border border-sage/20 bg-sage/[0.04] px-4 py-3 text-center"
            >
              <Sparkles className="h-4 w-4 shrink-0 text-sage" />
              <p className="text-xs text-foreground/70 text-pretty">
                Every commitment above is grounded in how this practice
                actually operates — verified by the founder&apos;s credentials
                and the firm&apos;s stated values.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

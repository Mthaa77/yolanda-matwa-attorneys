"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  FileSignature,
  Lock,
  Phone,
  RefreshCw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

const GUARANTEES = [
  {
    icon: FileSignature,
    title: "A written quote before work begins",
    description:
      "You see the professional fee, statutory costs and disbursements in writing before you commit — so there is no uncertainty about the next step.",
  },
  {
    icon: Phone,
    title: "A named contact for your matter",
    description:
      "Your matter is never reduced to a reference number. You know who is handling it and where to turn when you need clarity.",
  },
  {
    icon: Clock,
    title: "Updates at meaningful milestones",
    description:
      "From lodgement to registration, you receive clear communication at the points that matter rather than having to chase answers.",
  },
  {
    icon: Lock,
    title: "Your information handled with care",
    description:
      "Your private legal information is treated with discretion and responsible process management from the first enquiry onward.",
  },
  {
    icon: RefreshCw,
    title: "Scope changes discussed early",
    description:
      "When a matter changes, the conversation happens before the cost changes. You stay informed, involved and in control.",
  },
  {
    icon: ShieldCheck,
    title: "Credentials that inspire confidence",
    description:
      "A practice shaped by admitted legal expertise, notarial and conveyancing capability, and a commitment to continued professional growth.",
  },
];

export function Guarantees() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(180deg,#fdfbf7_0%,#eef1f6_100%)] py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_25%,rgba(176,141,69,0.14),transparent_22%),radial-gradient(circle_at_100%_75%,rgba(30,61,114,0.1),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.025]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-navy/10 bg-navy-deep px-6 py-10 text-cream shadow-[0_32px_80px_-46px_rgba(15,31,56,0.8)] sm:px-9 sm:py-12 lg:px-12 lg:py-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_8%,rgba(0,122,51,0.14),transparent_25%),radial-gradient(circle_at_92%_18%,rgba(0,56,168,0.22),transparent_30%),radial-gradient(circle_at_80%_100%,rgba(176,141,69,0.18),transparent_27%)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#000000_0%,#ffb81c_16%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-gold/15" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full border border-white/10" />

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)] lg:gap-14">
            <div className="flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-light backdrop-blur-sm">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  The Yolanda Matwa Standard
                </div>
                <h2 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-cream sm:text-5xl">
                  The confidence behind every instruction.
                </h2>
                <p className="mt-5 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                  Legal guidance feels different when the process is transparent, the communication is personal and the details are treated seriously.
                </p>
              </div>

              <div className="mt-10 rounded-[1.35rem] border border-gold/25 bg-[linear-gradient(145deg,rgba(176,141,69,0.18),rgba(255,255,255,0.05))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-gold/35 bg-gold/10 text-gold-light">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <p className="font-display text-lg font-semibold leading-snug text-cream">
                    Quiet competence, clearly communicated and carefully delivered.
                  </p>
                </div>
              </div>

              <button
                onClick={scrollToContact}
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy-deep shadow-gold-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light"
              >
                Start a conversation
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <StaggerGroup className="grid gap-4 sm:grid-cols-2">
              {GUARANTEES.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <motion.article
                    key={guarantee.title}
                    variants={staggerItem}
                    whileHover={{ y: -7, rotateX: 2, rotateY: index % 2 ? -2 : 2 }}
                    transition={{ type: "spring", stiffness: 260, damping: 21 }}
                    className="group relative min-h-[12.75rem] overflow-hidden rounded-[1.35rem] border border-white/12 bg-white/[0.07] p-5 shadow-[0_22px_42px_-32px_rgba(0,0,0,0.75)] backdrop-blur-md [perspective:1000px]"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.1),transparent_38%,rgba(176,141,69,0.1))]" />
                    <span className="pointer-events-none absolute -right-3 -top-8 font-display text-[6.8rem] font-bold leading-none text-white/[0.035]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="relative">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 text-gold-light shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-transform duration-500 group-hover:scale-110 group-hover:[transform:translateZ(14px)]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-bold leading-snug text-cream">
                        {guarantee.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/64">
                        {guarantee.description}
                      </p>
                    </div>
                    <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[linear-gradient(90deg,#ffb81c_0%,#007a33_42%,#ffffff_58%,#de3831_76%,#0038a8_100%)] transition-transform duration-700 group-hover:scale-x-100" />
                  </motion.article>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

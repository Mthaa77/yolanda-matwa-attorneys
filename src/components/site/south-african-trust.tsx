import {
  Flag,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { firmLogoImage } from "@/lib/director-welcome-image";

const pillars = [
  {
    icon: Scale,
    title: "Clear counsel, from the outset",
    body:
      "You deserve to understand your options before you make a decision. We make the process clear, practical and personal from the first conversation.",
  },
  {
    icon: Landmark,
    title: "Careful work on important matters",
    body:
      "From a property transfer to a deceased estate or commercial agreement, each instruction is handled with precision and the attention it deserves.",
  },
  {
    icon: ShieldCheck,
    title: "A practice built around trust",
    body:
      "Your information, timelines and legal concerns are treated with discretion, structure and the respect that serious legal work requires.",
  },
];

const practiceAreas = [
  "Property transfers",
  "Notarial services",
  "Deceased estates",
  "Family agreements",
  "Commercial matters",
  "Clear fee guidance",
];

export function SouthAfricanTrust() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef1f6_100%)] py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(0,122,51,0.08),transparent_24%),radial-gradient(circle_at_100%_0%,rgba(0,56,168,0.1),transparent_24%),radial-gradient(circle_at_85%_100%,rgba(222,56,49,0.08),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(255,184,28,0.1),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.02]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-10 max-w-3xl sm:mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
            <Flag className="h-3.5 w-3.5" />
            A South African legal practice
          </div>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl lg:text-5xl">
            Steady counsel for the decisions that shape your life.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70 sm:text-lg">
            Whether you are purchasing a home, protecting your family&apos;s legacy, planning an estate or making a business decision, you need advice that is clear, careful and built around your circumstances.
          </p>
        </div>

        <figure className="group relative overflow-hidden rounded-[2rem] border border-gold/30 bg-[linear-gradient(135deg,#ffffff_0%,#f8f4eb_45%,#eef1f6_100%)] p-4 shadow-[0_32px_80px_-40px_rgba(15,31,56,0.45)] sm:p-6 lg:p-8">
          <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full border border-gold/25" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-navy/10" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#000000_0%,#ffb81c_18%,#007a33_40%,#ffffff_58%,#de3831_76%,#0038a8_100%)]" />
          <div className="relative flex min-h-[17rem] items-center justify-center overflow-hidden rounded-[1.45rem] border border-navy/8 bg-white px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:min-h-[22rem] sm:px-10 lg:min-h-[26rem]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(176,141,69,0.13),transparent_46%)]" />
            <img
              src={firmLogoImage}
              alt="Yolanda Matwa Attorneys logo"
              width={1800}
              height={950}
              loading="lazy"
              decoding="async"
              className="relative block h-auto max-h-[20rem] w-full max-w-[52rem] object-contain transition-transform duration-1000 group-hover:scale-[1.02] sm:max-h-[24rem]"
            />
          </div>
          <figcaption className="relative flex flex-col gap-4 px-1 pb-1 pt-6 text-navy-deep sm:flex-row sm:items-center sm:justify-between sm:px-3 sm:pt-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                <Scale className="h-5 w-5" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-navy-deep">Yolanda Matwa Attorneys</p>
                <p className="mt-0.5 text-sm text-foreground/60">Menlyn Maine, Pretoria East</p>
              </div>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-foreground/62 sm:text-right">
              A personal practice for property, family, estate and commercial matters.
            </p>
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-5 sm:mt-12 lg:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article
                key={pillar.title}
                className="group relative overflow-hidden rounded-[1.35rem] border border-navy/10 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(15,31,56,0.5)] transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/35 hover:shadow-[0_28px_56px_-34px_rgba(15,31,56,0.5)]"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(176,141,69,0.18),transparent_65%)]" />
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-[linear-gradient(145deg,rgba(232,217,181,0.38),rgba(255,255,255,0.9))] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:[transform:rotateY(12deg)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-navy-deep">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/68">
                  {pillar.body}
                </p>
                <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-gold via-gold-light to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.4rem] border border-navy/10 bg-white/75 px-5 py-6 shadow-[0_18px_40px_-32px_rgba(15,31,56,0.36)] backdrop-blur-sm sm:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/60">
                <ScrollText className="h-3.5 w-3.5 text-gold" />
                The work we are trusted to do
              </p>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/64">
                Every instruction is different. The standard remains the same: thoughtful legal work, clear communication and a dependable path forward.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
              {practiceAreas.map((area, index) => (
                <span
                  key={area}
                  className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium shadow-sm ${
                    index % 3 === 0
                      ? "border-[#007a33]/20 bg-[#007a33]/8 text-navy-deep"
                      : index % 3 === 1
                        ? "border-[#0038a8]/15 bg-[#0038a8]/8 text-navy-deep"
                        : "border-gold/20 bg-gold/8 text-navy-deep"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current/70" />
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

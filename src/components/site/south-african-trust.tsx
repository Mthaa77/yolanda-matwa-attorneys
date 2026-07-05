import {
  Building2,
  Flag,
  Landmark,
  Scale,
  ScrollText,
  ShieldCheck,
} from "lucide-react";

const institutionalPanels = [
  {
    icon: Scale,
    title: "South African legal authority",
    body:
      "Position the firm within the local legal system with clear references to admitted practice, notarial work and conveyancing authority.",
  },
  {
    icon: Landmark,
    title: "Government-facing legal workflows",
    body:
      "Show familiarity with the legal and administrative environments clients already trust: the Deeds Office, Master of the High Court, CIPC and SARS touchpoints.",
  },
  {
    icon: ShieldCheck,
    title: "Trust, compliance and care",
    body:
      "Reinforce POPIA-conscious communication, structured document handling and careful legal process management through premium trust signals.",
  },
];

const systemChips = [
  "Master of the High Court",
  "Deeds Office",
  "CIPC",
  "SARS",
  "Competition Tribunal context",
  "POPIA-conscious client handling",
];

export function SouthAfricanTrust() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f8fafc_0%,#eef1f6_100%)] py-16 sm:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_50%,rgba(0,122,51,0.08),transparent_24%),radial-gradient(circle_at_100%_0%,rgba(0,56,168,0.1),transparent_24%),radial-gradient(circle_at_85%_100%,rgba(222,56,49,0.08),transparent_22%),radial-gradient(circle_at_50%_0%,rgba(255,184,28,0.1),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.02]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-[1.8rem] border border-navy/10 bg-white/82 shadow-[0_22px_60px_-34px_rgba(15,31,56,0.35)] backdrop-blur-sm">
          <div className="relative border-b border-navy/8 px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#000000_0%,#ffb81c_18%,#007a33_40%,#ffffff_58%,#de3831_76%,#0038a8_100%)]" />
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-gold">
                  <span className="flex items-center gap-2">
                    <Flag className="h-3.5 w-3.5" />
                    South African legal trust signals
                  </span>
                </div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-navy-deep sm:text-4xl">
                  A law-firm presence that feels grounded in South African legal reality.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground/70">
                  This layer gives the website more local authority by introducing South African legal cues, institutional references and elegant national colour accents — without making the design feel loud or unprofessional.
                </p>
              </div>

              <div className="rounded-[1.2rem] border border-navy/10 bg-[linear-gradient(135deg,rgba(15,31,56,0.96),rgba(30,61,114,0.95))] px-5 py-4 text-cream shadow-premium">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.18em] text-gold-light/85">
                  National context
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-gold-light">
                    <Building2 className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-lg font-semibold text-cream">
                      Pretoria-based, South Africa-aware
                    </p>
                    <p className="text-sm text-cream/68">
                      Local legal credibility with modern digital presentation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5 px-6 py-8 sm:px-8 lg:grid-cols-3 lg:px-10 lg:py-10">
            {institutionalPanels.map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.title}
                  className="relative overflow-hidden rounded-[1.35rem] border border-navy/10 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(15,31,56,0.5)]"
                >
                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 bg-[radial-gradient(circle_at_top_right,rgba(176,141,69,0.18),transparent_65%)]" />
                  <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/25 bg-[linear-gradient(145deg,rgba(232,217,181,0.38),rgba(255,255,255,0.9))] text-gold shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-xl font-bold text-navy-deep">
                    {panel.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/68">
                    {panel.body}
                  </p>
                </article>
              );
            })}
          </div>

          <div className="border-t border-navy/8 px-6 py-7 sm:px-8 lg:px-10">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-navy/60">
                  <ScrollText className="h-3.5 w-3.5 text-gold" />
                  Institutional reference cues
                </p>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-foreground/64">
                  These are presented as trust anchors and operational cues — helping visitors feel that the firm understands the systems behind South African legal work.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 lg:max-w-2xl lg:justify-end">
                {systemChips.map((chip, index) => (
                  <span
                    key={chip}
                    className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-xs font-medium shadow-sm ${
                      index % 3 === 0
                        ? "border-[#007a33]/20 bg-[#007a33]/8 text-navy-deep"
                        : index % 3 === 1
                          ? "border-[#0038a8]/15 bg-[#0038a8]/8 text-navy-deep"
                          : "border-gold/20 bg-gold/8 text-navy-deep"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-current/70" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

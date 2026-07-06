import { ArrowDown, BookOpenText, Scale, Sparkles } from "lucide-react";
import { constitutionFeatureImage } from "@/lib/director-welcome-image";

export function ServicesHero() {
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#0c1830] py-20 text-cream sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_18%,rgba(0,122,51,0.14),transparent_24%),radial-gradient(circle_at_92%_14%,rgba(0,56,168,0.24),transparent_26%),radial-gradient(circle_at_78%_90%,rgba(176,141,69,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.045] mix-blend-overlay" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#000000_0%,#ffb81c_16%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />
      <div className="pointer-events-none absolute -left-20 top-1/2 h-64 w-64 rounded-full border border-gold/15" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-16 lg:px-12">
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-light backdrop-blur-sm">
            <BookOpenText className="h-3.5 w-3.5" />
            Practice Areas
          </div>
          <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Legal services grounded in <span className="italic text-gradient-gold">principle and precision.</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/72 sm:text-lg">
            From property decisions and estate planning to family agreements and commercial matters, each instruction is approached with clear advice and careful legal work.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {[
              "Practical guidance for real decisions",
              "Document-led, detail-conscious work",
              "Clear communication at every stage",
              "Personal attention to every matter",
            ].map((point, index) => (
              <div key={point} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm text-cream/80 shadow-[0_14px_30px_-24px_rgba(0,0,0,0.75)]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border border-gold/25 bg-gold/10 text-[0.62rem] font-bold text-gold-light">
                  0{index + 1}
                </span>
                {point}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToServices}
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-5 py-3 text-sm font-bold text-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep"
          >
            Explore practice areas
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>

        <figure className="relative overflow-hidden rounded-[1.85rem] border border-gold/30 bg-[#09101d] p-2.5 shadow-[0_38px_84px_-44px_rgba(0,0,0,0.92)] sm:p-3">
          <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -bottom-14 -right-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative overflow-hidden rounded-[1.25rem] bg-black">
            <img
              src={constitutionFeatureImage}
              alt="The Constitution of the Republic of South Africa"
              width={2048}
              height={1143}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
            />
          </div>
          <figcaption className="relative flex items-center gap-3 px-2 pb-1 pt-5 sm:px-4 sm:pt-6">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold-light">
              <Scale className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.19em] text-gold-light/80">The legal foundation</p>
              <p className="mt-1 font-display text-lg font-semibold text-cream">A considered practice for important South African legal matters.</p>
            </div>
            <Sparkles className="ml-auto h-5 w-5 text-gold/70" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

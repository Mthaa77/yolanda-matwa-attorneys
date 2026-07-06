import { ArrowRight, Scale, ShieldCheck } from "lucide-react";
import { lawLibraryVisual } from "@/lib/visual-assets";

export function LegalFoundations() {
  return (
    <section className="relative overflow-hidden bg-[#0b1425] py-20 text-cream sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_5%_15%,rgba(0,122,51,0.12),transparent_24%),radial-gradient(circle_at_95%_80%,rgba(176,141,69,0.16),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-[linear-gradient(90deg,#000000_0%,#ffb81c_16%,#007a33_38%,#ffffff_56%,#de3831_76%,#0038a8_100%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-16 lg:px-12">
        <figure className="relative overflow-hidden rounded-[1.8rem] border border-gold/30 bg-black p-2.5 shadow-[0_38px_84px_-44px_rgba(0,0,0,0.92)] sm:p-3">
          <div className="pointer-events-none absolute -left-14 -top-14 h-44 w-44 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -bottom-16 -right-12 h-52 w-52 rounded-full border border-white/10" />
          <div className="relative overflow-hidden rounded-[1.25rem] bg-black">
            <img
              src={lawLibraryVisual}
              alt="Law books and a gavel"
              width={525}
              height={376}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain"
            />
          </div>
          <figcaption className="relative flex items-center justify-between gap-4 px-2 pb-1 pt-5 sm:px-4 sm:pt-6">
            <div>
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em] text-gold-light/85">Measured legal work</p>
              <p className="mt-1 font-display text-xl font-semibold text-cream">Every detail carries weight.</p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold-light">
              <Scale className="h-5 w-5" />
            </span>
          </figcaption>
        </figure>

        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold-light">
            <ShieldCheck className="h-3.5 w-3.5" />
            Legal foundations
          </div>
          <h2 className="mt-6 font-display text-4xl font-bold leading-[1.04] tracking-tight text-cream sm:text-5xl">
            Serious legal work deserves a steady hand.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/72 sm:text-lg">
            Important decisions rest on the quality of the details: the documents, the process, the communication and the care brought to each instruction.
          </p>
          <div className="mt-8 space-y-4 border-l border-gold/35 pl-5 text-sm leading-relaxed text-cream/70">
            <p>Property, estates and commercial matters all benefit from a clear process and meticulous document handling.</p>
            <p>The practice brings calm structure to matters that need to be done properly the first time.</p>
          </div>
          <a
            href="#contact"
            className="group mt-9 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/10 px-5 py-3 text-sm font-bold text-gold-light transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:text-navy-deep"
          >
            Discuss your matter
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

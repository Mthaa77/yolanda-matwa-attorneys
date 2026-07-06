import { ArrowRight, HeartHandshake, MessageCircle, Quote } from "lucide-react";
import { practiceConversationImage } from "@/lib/director-welcome-image";

export function PersonalApproach() {
  return (
    <section className="relative overflow-hidden bg-cream py-16 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-96 w-96 rounded-full bg-navy/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-18 lg:px-12">
        <div className="order-1 min-w-0 lg:order-2">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/10 px-4 py-2 text-[0.66rem] font-bold uppercase tracking-[0.22em] text-gold shadow-[0_8px_22px_-18px_rgba(176,141,69,0.7)]">
            <HeartHandshake className="h-3.5 w-3.5" />
            The client experience
          </div>

          <h2 className="mt-6 max-w-xl break-words font-display text-[clamp(2.35rem,10vw,4.65rem)] font-bold leading-[1.02] tracking-[-0.04em] text-navy-deep drop-shadow-[0_14px_24px_rgba(15,31,56,0.16)]">
            Your matter deserves more than a reference number.
          </h2>
          <div className="mt-5 h-px w-20 bg-gradient-to-r from-gold via-gold/50 to-transparent" />
          <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-foreground/72 sm:text-lg">
            Legal matters can feel personal, urgent and unfamiliar. The practice takes time to understand what is happening, explain the process in plain language and keep you informed as the work progresses.
          </p>

          <div className="mt-8 rounded-[1.35rem] border border-gold/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(244,237,220,0.72))] p-6 shadow-[0_20px_44px_-30px_rgba(15,31,56,0.48)] sm:p-7">
            <Quote className="h-8 w-8 text-gold/75" />
            <p className="mt-4 font-display text-[clamp(1.65rem,6vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.025em] text-navy-deep drop-shadow-[0_8px_18px_rgba(15,31,56,0.1)]">
              Clear communication creates confidence before a legal decision is made.
            </p>
            <div className="mt-5 h-px bg-gradient-to-r from-gold/65 via-gold/15 to-transparent" />
            <p className="mt-4 text-sm leading-relaxed text-foreground/65 sm:text-base">
              From a first enquiry through to a completed instruction, the focus remains on giving you a steady, informed path forward.
            </p>
          </div>

          <a
            href="#contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-navy-deep px-6 py-3.5 text-sm font-bold text-cream shadow-[0_18px_32px_-18px_rgba(15,31,56,0.78)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy"
          >
            Start a confidential enquiry
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <figure className="group order-2 min-w-0 overflow-hidden rounded-[1.55rem] border border-navy/10 bg-white p-2.5 shadow-[0_30px_70px_-40px_rgba(15,31,56,0.6)] sm:rounded-[1.85rem] sm:p-3 lg:order-1">
          <div className="pointer-events-none absolute -left-12 -top-12 h-44 w-44 rounded-full border border-gold/20" />
          <div className="pointer-events-none absolute -bottom-14 -right-12 h-52 w-52 rounded-full border border-navy/10" />
          <div className="relative overflow-hidden rounded-[1.18rem] bg-mist sm:rounded-[1.3rem]">
            <img
              src={practiceConversationImage}
              alt="A professional legal consultation setting"
              width={1600}
              height={1067}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full object-contain transition-transform duration-1000 group-hover:scale-[1.015]"
            />
          </div>
          <figcaption className="relative flex min-w-0 flex-col gap-3 px-2 pb-1 pt-5 sm:flex-row sm:items-center sm:justify-between sm:px-4 sm:pt-6">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div className="min-w-0">
                <p className="text-[0.62rem] font-bold uppercase tracking-[0.19em] text-gold">The first conversation</p>
                <p className="mt-1 font-display text-lg font-semibold text-navy-deep">A clearer way to begin.</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-navy/10 bg-mist px-3 py-1.5 text-xs font-semibold text-navy/70">
              Thoughtful. Personal. Practical.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

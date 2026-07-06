import { ArrowUpRight, MessageCircle, ShieldCheck } from "lucide-react";
import { WHATSAPP_DISPLAY, WHATSAPP_LINK } from "@/lib/whatsapp";

export function WhatsAppContact() {
  return (
    <section className="relative overflow-hidden bg-cream pb-4 pt-6 sm:pb-8 sm:pt-10">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-[1.6rem] border border-[#25D366]/25 bg-[linear-gradient(135deg,#102740_0%,#16305c_52%,#0d513c_100%)] px-6 py-7 text-cream shadow-[0_24px_60px_-34px_rgba(15,31,56,0.72)] sm:px-8 sm:py-8 lg:px-10">
          <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#25D366]/25" />
          <div className="pointer-events-none absolute right-12 top-8 h-28 w-28 rounded-full bg-[#25D366]/15 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[2px] bg-[linear-gradient(90deg,#25D366_0%,rgba(255,255,255,0.9)_46%,#25D366_100%)]" />

          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4 sm:items-center">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#25D366]/35 bg-[#25D366]/15 text-[#7cf0a8] shadow-[inset_0_1px_0_rgba(255,255,255,0.16)]">
                <MessageCircle className="h-6 w-6" />
              </span>
              <div>
                <p className="inline-flex items-center gap-2 text-[0.64rem] font-bold uppercase tracking-[0.2em] text-[#7cf0a8]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Direct WhatsApp support
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-cream sm:text-3xl">
                  Prefer a quick conversation?
                </h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-cream/70 sm:text-base">
                  Send the practice a WhatsApp message for a convenient first point of contact about your legal matter.
                </p>
              </div>
            </div>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] px-6 py-4 text-sm font-bold text-[#082318] shadow-[0_16px_32px_-16px_rgba(37,211,102,0.72)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#63e98d] sm:w-auto"
              aria-label={`WhatsApp Yolanda Matwa Attorneys on ${WHATSAPP_DISPLAY}`}
            >
              WhatsApp {WHATSAPP_DISPLAY}
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CREDENTIALS } from "@/lib/site-data";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function Competence() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-gradient-to-b from-navy-deep via-navy to-navy-deep py-24 sm:py-32"
    >
      {/* Background image + overlays — cinematic depth */}
      <div className="absolute inset-0">
        <Image
          src="/images/competence-bg.png"
          alt=""
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/80 to-navy-deep" />
      </div>
      {/* filmic grain */}
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay" />
      {/* soft gold glow centered */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-gold/[0.06] blur-3xl" />

      {/* gold corner accents — doubled for premium depth */}
      <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/40" />
      <div className="pointer-events-none absolute left-8 top-8 h-8 w-8 border-l-2 border-t-2 border-gold/60" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-gold/40" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-8 w-8 border-b-2 border-r-2 border-gold/60" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* The quote — premium centered treatment */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* gold eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-gold/50" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-gold-light">
              A Rare Distinction
            </span>
            <span className="h-px w-8 bg-gold/50" />
          </motion.div>

          <span className="mb-6 inline-block font-display text-7xl leading-none text-gold/30">
            &ldquo;
          </span>
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium italic leading-[1.25] text-cream text-balance">
            A rare thing in a small firm — real Competition Tribunal
            experience, brought to your property, your family, your estate.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/65 text-pretty">
            Yolanda investigated cartel cases, conducted dawn raids,
            negotiated settlement agreements and appeared at the Competition
            Tribunal. That rigour — for regulatory detail, for negotiation, for
            documents that withstand scrutiny — now sits behind every matter
            this firm handles.
          </p>
        </motion.div>

        {/* Gold divider with center monogram */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-14 flex items-center gap-4"
        >
          <span className="h-px flex-1 origin-center bg-gradient-to-r from-transparent to-gold/50" />
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/40">
            <span className="font-display text-[0.6rem] font-bold text-gradient-gold">
              YM
            </span>
          </span>
          <span className="h-px flex-1 origin-center bg-gradient-to-l from-transparent to-gold/50" />
        </motion.div>

        {/* Credentials timeline */}
        <div className="mt-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center text-xs font-medium uppercase tracking-[0.22em] text-gold-light/80"
          >
            Credentials &amp; Admissions
          </motion.p>

          <StaggerGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {CREDENTIALS.map((c) => (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="group relative flex flex-col gap-2 overflow-hidden rounded-xl border border-cream/10 bg-navy-deep/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-navy/40"
              >
                <span className="font-display text-2xl font-bold text-gradient-gold">
                  {c.year}
                </span>
                <span className="text-sm font-semibold leading-snug text-cream">
                  {c.title}
                </span>
                <span className="text-xs leading-relaxed text-cream/60">
                  {c.issuer}
                </span>
                {/* top gold accent on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold to-gold-light transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

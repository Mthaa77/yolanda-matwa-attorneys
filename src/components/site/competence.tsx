"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CREDENTIALS } from "@/lib/site-data";
import { StaggerGroup, staggerItem } from "./scroll-reveal";

export function Competence() {
  return (
    <section
      id="credentials"
      className="relative overflow-hidden bg-navy-deep py-24 sm:py-32"
    >
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <Image
          src="/images/competence-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep via-navy-deep/85 to-navy-deep" />
      </div>

      {/* gold corner accents */}
      <div className="pointer-events-none absolute left-8 top-8 h-16 w-16 border-l border-t border-gold/30" />
      <div className="pointer-events-none absolute bottom-8 right-8 h-16 w-16 border-b border-r border-gold/30" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        {/* The quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="mb-8 inline-block font-display text-6xl leading-none text-gold/40">
            &ldquo;
          </span>
          <p className="font-display text-[clamp(1.5rem,3.5vw,2.75rem)] font-medium italic leading-[1.25] text-cream text-balance">
            A rare thing in a small firm — real Competition Tribunal
            experience, brought to your property, your family, your estate.
          </p>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-cream/60 text-pretty">
            Yolanda investigated cartel cases, conducted dawn raids,
            negotiated settlement agreements and appeared at the Competition
            Tribunal. That rigour — for regulatory detail, for negotiation, for
            documents that withstand scrutiny — now sits behind every matter
            this firm handles.
          </p>
        </motion.div>

        {/* Gold divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 h-px w-24 origin-center bg-gradient-to-r from-transparent via-gold to-transparent"
        />

        {/* Credentials timeline */}
        <div className="mt-16">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center text-xs font-medium uppercase tracking-[0.22em] text-gold-light/70"
          >
            Credentials &amp; Admissions
          </motion.p>

          <StaggerGroup className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-cream/10 bg-cream/10 sm:grid-cols-2 lg:grid-cols-5">
            {CREDENTIALS.map((c) => (
              <motion.div
                key={c.title}
                variants={staggerItem}
                className="group relative flex flex-col gap-2 bg-navy-deep p-6 transition-colors hover:bg-navy/40"
              >
                <span className="font-display text-2xl font-bold text-gold">
                  {c.year}
                </span>
                <span className="text-sm font-semibold leading-snug text-cream">
                  {c.title}
                </span>
                <span className="text-xs leading-relaxed text-cream/50">
                  {c.issuer}
                </span>
                <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gold transition-transform duration-500 group-hover:scale-x-100" />
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

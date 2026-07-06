"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const PRACTICE_WORDS = [
  { word: "Conveyancing", detail: "Property transfers" },
  { word: "Notarial", detail: "Agreements & authentications" },
  { word: "Estates", detail: "Legacy planning" },
  { word: "Family", detail: "Agreements & care" },
  { word: "Commercial", detail: "Business decisions" },
];

function TypedWord({ word }: { word: string }) {
  return (
    <span className="inline-flex whitespace-nowrap" aria-hidden="true">
      {Array.from(word).map((character, index) => (
        <motion.span
          key={`${word}-${index}`}
          initial={{ opacity: 0, y: 9, filter: "blur(5px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -9, filter: "blur(5px)" }}
          transition={{
            duration: 0.3,
            delay: index * 0.028,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {character}
        </motion.span>
      ))}
      <motion.span
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, times: [0, 0.1, 0.65, 1] }}
        className="ml-1 inline-block h-[0.9em] w-[0.1em] rounded-full bg-gold align-[-0.08em]"
      />
    </span>
  );
}

export function LawWordLoop() {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const active = PRACTICE_WORDS[index];

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % PRACTICE_WORDS.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  return (
    <div
      className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base"
      aria-label={`Practice focus: ${active.word}. ${active.detail}.`}
    >
      <span className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-cream/46">
        In focus
      </span>
      <span className="h-px w-7 bg-gold/45" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={active.word}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-xl font-bold tracking-[-0.02em] text-gold-light sm:text-2xl"
        >
          {reduceMotion ? active.word : <TypedWord word={active.word} />}
        </motion.span>
      </AnimatePresence>
      <span className="hidden h-4 w-px bg-cream/18 sm:block" />
      <span className="text-sm text-cream/62">{active.detail}</span>
    </div>
  );
}

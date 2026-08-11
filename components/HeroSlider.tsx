"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SolarScene from "./SolarScene";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function HeroSlider({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const slides = dict.hero.slides;
  const [index, setIndex] = useState(0);
  const base = `/${locale}`;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1.14 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.4, ease: "easeInOut" },
              scale: { duration: 6.2, ease: "linear" },
            }}
            className="absolute inset-0"
          >
            <SolarScene variant={(index % 3) as 0 | 1 | 2} />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-transparent to-transparent" />
      </div>

      <div className="container-x relative section-y">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.15] max-w-4xl"
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-paper/65 leading-8"
        >
          {dict.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href={`${base}/news`}
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-gold-2"
          >
            {dict.hero.ctaNews}
          </Link>
          <Link
            href={`${base}/about`}
            className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-bold text-paper transition-colors hover:border-paper/60"
          >
            {dict.hero.ctaAbout}
          </Link>
        </motion.div>

        <div className="mt-16 flex items-end justify-between gap-6 border-t border-line pt-6 max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4 }}
            >
              <p className="font-display text-sm font-bold text-paper">
                {slides[index].title}
              </p>
              <p className="mt-1 text-xs text-paper/50">{slides[index].caption}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-2">
            {slides.map((s, i) => (
              <button
                key={s.title}
                onClick={() => setIndex(i)}
                aria-label={s.title}
                className="group relative h-1.5 w-8 overflow-hidden rounded-full bg-paper/20"
              >
                {i === index && (
                  <motion.span
                    layoutId="hero-dot"
                    className="absolute inset-0 rounded-full bg-gold"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

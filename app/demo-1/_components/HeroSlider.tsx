"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SolarScene from "./SolarScene";
import type { Locale } from "@/app/demo-1/_lib/i18n/config";
import type { Dictionary } from "@/app/demo-1/_lib/i18n/types";

export default function HeroSlider({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const slides = dict.hero.slides;
  const [index, setIndex] = useState(0);
  const base = `/demo-1/${locale}`;

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative min-h-[690px] overflow-hidden bg-ink text-paper md:min-h-[760px]">
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
        <div className="absolute inset-0 opacity-30 bg-blueprint [mask-image:linear-gradient(to_bottom,black,transparent_58%)]" />
      </div>

      <div className="absolute -start-28 top-24 h-72 w-72 rounded-full border border-gold/20" aria-hidden="true" />
      <div className="absolute -start-16 top-36 h-48 w-48 rounded-full border border-paper/10" aria-hidden="true" />

      <div className="container-x relative flex min-h-[690px] flex-col justify-center py-28 md:min-h-[760px] md:py-36">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow w-fit self-start rounded-full border border-gold/35 bg-ink/25 px-4 py-2 backdrop-blur-sm"
        >
          {dict.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-4xl font-display text-4xl font-extrabold leading-[1.22] md:text-6xl lg:text-7xl"
        >
          {dict.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-7 max-w-2xl text-base leading-8 text-paper/70 md:text-lg"
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
            className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-ink shadow-[0_0_38px_rgba(242,169,59,.28)] transition-transform hover:scale-[1.03] hover:bg-gold-2"
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

        <div className="mt-16 flex max-w-2xl items-end justify-between gap-6 border-t border-line pt-6">
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

      <motion.aside
        initial={{ opacity: 0, x: 28, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35 }}
        className="absolute bottom-14 end-[max(3rem,calc((100vw-1184px)/2))] hidden w-[310px] overflow-hidden rounded-3xl border border-paper/15 bg-ink/45 p-5 shadow-2xl backdrop-blur-xl lg:block"
        aria-label="نمای بازار انرژی"
      >
        <div className="flex items-center justify-between border-b border-line pb-4">
          <span className="tnum text-xs tracking-[.18em] text-gold">TBSH · IEX</span>
          <span className="flex items-center gap-1.5 text-xs text-up"><i className="h-2 w-2 rounded-full bg-up shadow-[0_0_12px_#34d399]" />LIVE</span>
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div><p className="text-xs text-paper/45">انرژی عرضه‌شده امروز</p><strong className="tnum mt-1 block font-display text-3xl">۱۲.۸ <small className="text-sm font-medium text-paper/45">MWh</small></strong></div>
          <span className="rounded-full bg-up/15 px-3 py-1.5 text-xs font-bold text-up">▲ ۲.۸٪</span>
        </div>
        <svg viewBox="0 0 280 70" className="mt-5 h-16 w-full" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="hero-chart" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#2fd4b0" stopOpacity=".38"/><stop offset="1" stopColor="#2fd4b0" stopOpacity="0"/></linearGradient></defs><path d="M0 57 C24 48 32 54 49 40 S77 51 98 34 S129 42 151 25 S183 36 208 19 S244 24 280 4 L280 70 L0 70Z" fill="url(#hero-chart)"/><path d="M0 57 C24 48 32 54 49 40 S77 51 98 34 S129 42 151 25 S183 36 208 19 S244 24 280 4" fill="none" stroke="#2fd4b0" strokeWidth="2.3"/></svg>
        <div className="mt-3 flex justify-between text-[10px] text-paper/40"><span>۰۹:۰۰</span><span>۱۲:۰۰</span><span>۱۵:۰۰</span></div>
      </motion.aside>
    </section>
  );
}

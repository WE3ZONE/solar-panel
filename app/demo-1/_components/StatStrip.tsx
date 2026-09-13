"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/app/demo-1/_lib/i18n/types";

export default function StatStrip({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative border-y hairline-dark bg-paper">
      <div className="container-x grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse divide-ink/10">
        {dict.stats.items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group min-w-0 py-8 md:py-14 px-3 md:px-4 rtl:first:pr-0 ltr:first:pl-0 lg:rtl:first:pr-4 lg:ltr:first:pl-4 transition-colors hover:bg-ink/[0.02]"
          >
            <div className="tnum flex flex-wrap items-baseline gap-x-1.5 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink transition-transform duration-300 group-hover:-translate-y-1 break-words">
              <span>{s.value}</span>
              <span className="text-gold text-base sm:text-lg lg:text-2xl font-bold">
                {s.unit}
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-ink/55">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

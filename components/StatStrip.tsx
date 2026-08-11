"use client";

import { motion } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/types";

export default function StatStrip({ dict }: { dict: Dictionary }) {
  return (
    <section className="relative border-y hairline-dark bg-paper">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-ink/10">
        {dict.stats.items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group py-10 md:py-14 px-4 rtl:first:pr-0 ltr:first:pl-0 md:rtl:first:pr-4 md:ltr:first:pl-4 transition-colors hover:bg-ink/[0.02]"
          >
            <div className="tnum font-display text-4xl md:text-5xl font-extrabold text-ink transition-transform duration-300 group-hover:-translate-y-1">
              {s.value}
              <span className="text-gold text-xl md:text-2xl font-bold mx-1">
                {s.unit}
              </span>
            </div>
            <p className="mt-2 text-sm text-ink/55">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

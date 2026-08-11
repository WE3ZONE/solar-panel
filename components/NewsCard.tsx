"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsItem } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

export default function NewsCard({
  item,
  locale,
  readMore,
  index = 0,
}: {
  item: NewsItem;
  locale: Locale;
  readMore: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={`/${locale}/news/${item.slug}`}
        className="group block border-b hairline-dark py-8 first:pt-0"
      >
        <div className="flex items-center gap-3 text-xs text-ink/45 tnum">
          <span>{item.date}</span>
          <span className="h-1 w-1 rounded-full bg-ink/25" />
          <span className="text-gold-2 font-semibold">{item.category}</span>
        </div>
        <h3 className="mt-3 font-display text-xl md:text-2xl font-bold text-ink leading-relaxed transition-colors group-hover:text-gold-2">
          {item.title}
        </h3>
        <p className="mt-3 text-sm md:text-base text-ink/60 leading-8 max-w-2xl">
          {item.excerpt}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink/70 transition-all group-hover:gap-2 group-hover:text-gold-2">
          {readMore}
        </span>
      </Link>
    </motion.div>
  );
}

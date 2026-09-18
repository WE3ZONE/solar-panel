"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsItem } from "@/app/demo-1/_lib/i18n/types";
import type { Locale } from "@/app/demo-1/_lib/i18n/config";
import { newsImage } from "@/app/demo-1/_lib/news-images";

type Props = {
  item: NewsItem;
  locale: Locale;
  readMore: string;
  index?: number;
  variant?: "list" | "card" | "featured";
};

export default function NewsCard({
  item,
  locale,
  readMore,
  index = 0,
  variant = "list",
}: Props) {
  const href = `/demo-1/${locale}/news/${item.slug}`;

  if (variant === "card" || variant === "featured") {
    const featured = variant === "featured";
    return (
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={featured ? "h-full" : undefined}
      >
        <Link
          href={href}
          className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-[0_1px_0_rgba(7,9,15,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-[0_24px_48px_-24px_rgba(7,9,15,0.25)] ${
            featured ? "md:grid md:grid-cols-2" : ""
          }`}
        >
          <div
            className={`relative overflow-hidden ${
              featured ? "aspect-[16/10] md:aspect-auto md:min-h-[320px]" : "aspect-[16/10]"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={newsImage(item.slug)}
              alt={item.title}
              loading={index === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            <span className="absolute top-4 start-4 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-bold text-gold backdrop-blur-sm">
              {item.category}
            </span>
          </div>

          <div className={`flex flex-1 flex-col p-6 ${featured ? "md:p-10 md:justify-center" : "md:p-7"}`}>
            <time className="text-xs text-ink/45 tnum">{item.date}</time>
            <h3
              className={`mt-3 font-display font-bold text-ink leading-relaxed transition-colors group-hover:text-gold-2 ${
                featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`mt-3 text-sm text-ink/60 leading-7 ${
                featured ? "md:text-base md:leading-8" : "line-clamp-3"
              }`}
            >
              {item.excerpt}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink/70 transition-all group-hover:gap-2.5 group-hover:text-gold-2">
              {readMore}
              <svg
                className="h-4 w-4 rtl:-scale-x-100"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <Link
        href={href}
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

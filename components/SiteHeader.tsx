"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";
import LanguageSwitch from "./LanguageSwitch";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export default function SiteHeader({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const base = `/${locale}`;

  const links = [
    { href: base, label: dict.nav.home },
    { href: `${base}/news`, label: dict.nav.news },
    { href: `${base}/about`, label: dict.nav.about },
    { href: `${base}/contact`, label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b hairline-dark bg-paper/85 backdrop-blur-md">
      <div className="container-x flex h-18 items-center justify-between py-4">
        <Link href={base} onClick={() => setOpen(false)}>
          <Logo locale={locale} />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-ink/75 hover:text-ink transition-colors group"
            >
              {l.label}
              <span className="absolute -bottom-1.5 start-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch locale={locale} />
          <Link
            href={`${base}/contact`}
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-2 transition-colors"
          >
            {dict.nav.contactCta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch locale={locale} />
          <button
            className="flex flex-col gap-1.5 p-2"
            aria-label="menu"
            onClick={() => setOpen((v) => !v)}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 origin-center bg-ink"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-6 bg-ink"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-6 origin-center bg-ink"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="md:hidden border-t hairline-dark bg-paper overflow-hidden"
          >
            <nav className="container-x flex flex-col py-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-3.5 text-base font-medium text-ink border-b hairline-dark last:border-none"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href={`${base}/contact`}
                onClick={() => setOpen(false)}
                className="my-4 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
              >
                {dict.nav.contactCta}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

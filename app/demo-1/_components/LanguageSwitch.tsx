"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { locales, localeLabel, localeShortLabel, type Locale } from "@/app/demo-1/_lib/i18n/config";

function pathWithoutLocale(pathname: string, locale: Locale) {
  const rest = pathname.replace(new RegExp(`^/demo-1/${locale}`), "");
  return rest === "" ? "/" : rest;
}

export default function LanguageSwitch({
  locale,
  dark = false,
}: {
  locale: Locale;
  dark?: boolean;
}) {
  const pathname = usePathname();
  const rest = pathWithoutLocale(pathname, locale);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-xs font-bold tracking-wide transition-colors ${
          dark
            ? "border-paper/20 text-paper/80 hover:border-paper/50"
            : "border-ink/15 text-ink/70 hover:border-ink/40"
        }`}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
          <path
            d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
        </svg>
        {localeShortLabel[locale]}
      </button>

      {open && (
        <>
          <button
            className="fixed inset-0 z-40 cursor-default"
            aria-hidden="true"
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className={`absolute end-0 z-50 mt-2 w-36 overflow-hidden rounded-xl border py-1 shadow-xl ${
              dark
                ? "border-paper/10 bg-ink-2 text-paper"
                : "border-ink/10 bg-paper text-ink"
            }`}
          >
            {locales.map((l) => (
              <li key={l}>
                <Link
                  href={`/demo-1/${l}${rest}`}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 text-sm font-semibold transition-colors ${
                    l === locale
                      ? "text-gold"
                      : dark
                        ? "hover:bg-paper/5"
                        : "hover:bg-ink/5"
                  }`}
                >
                  <span>{localeLabel[l]}</span>
                  <span className="text-xs opacity-50">{localeShortLabel[l]}</span>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

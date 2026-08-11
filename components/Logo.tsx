import type { Locale } from "@/lib/i18n/config";

const brandNames: Record<Locale, string> = {
  fa: "تابش انرژی",
  en: "Tabesh Energy",
  ar: "تابش إنرژی",
};

export default function Logo({
  dark = false,
  locale = "fa",
}: {
  dark?: boolean;
  locale?: Locale;
}) {
  const ink = dark ? "#FAF8F2" : "#07090F";
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="14" width="9" height="9" rx="1" fill="#F2A93B" />
        <rect x="12.5" y="14" width="9" height="9" rx="1" fill={ink} />
        <rect x="2" y="3.5" width="9" height="9" rx="1" fill={ink} />
        <rect x="12.5" y="3.5" width="9" height="9" rx="1" fill="#F2A93B" />
        <path d="M25 8L30 3.5" stroke="#F2A93B" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 14L30.5 14" stroke="#F2A93B" strokeWidth="2" strokeLinecap="round" />
        <path d="M25 20L30 24.5" stroke="#F2A93B" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <span
        style={{ color: ink }}
        className="font-display font-extrabold text-lg tracking-tight whitespace-nowrap"
      >
        {brandNames[locale]}
      </span>
    </span>
  );
}

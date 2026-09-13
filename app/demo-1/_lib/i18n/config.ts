export const locales = ["fa", "en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fa";

export const localeDir: Record<Locale, "rtl" | "ltr"> = {
  fa: "rtl",
  en: "ltr",
  ar: "rtl",
};

export const localeLabel: Record<Locale, string> = {
  fa: "فارسی",
  en: "English",
  ar: "العربية",
};

export const localeShortLabel: Record<Locale, string> = {
  fa: "FA",
  en: "EN",
  ar: "AR",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

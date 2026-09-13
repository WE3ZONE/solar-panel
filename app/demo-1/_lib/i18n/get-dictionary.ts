import type { Locale } from "./config";
import type { Dictionary } from "./types";
import fa from "./dictionaries/fa";
import en from "./dictionaries/en";
import ar from "./dictionaries/ar";

const dictionaries: Record<Locale, Dictionary> = { fa, en, ar };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

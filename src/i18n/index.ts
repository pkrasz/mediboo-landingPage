import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";
import type { Locale } from "@/i18n/config";

const dictionaries = {
  en,
  pl,
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

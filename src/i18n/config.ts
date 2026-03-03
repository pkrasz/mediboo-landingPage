export const locales = ["pl", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function withLocalePrefix(locale: Locale, path = "/") {
  if (path === "/") {
    return `/${locale}`;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return `/${locale}${normalizedPath}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");

  if (segments[1] && isLocale(segments[1])) {
    segments[1] = locale;

    return segments.join("/") || `/${locale}`;
  }

  return withLocalePrefix(locale, pathname);
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n";
import { type Locale, switchLocalePath, withLocalePrefix } from "@/i18n/config";

interface NavbarProps {
  locale: Locale;
  t: Dictionary;
}

export const Navbar = ({ locale, t }: Readonly<NavbarProps>) => {
  const pathname = usePathname();
  const router = useRouter();
  const navigation = [
    { href: `${withLocalePrefix(locale)}#features`, label: t.nav.features },
    { href: `${withLocalePrefix(locale)}#how-it-works`, label: t.nav.howItWorks },
    { href: `${withLocalePrefix(locale)}#testimonials`, label: t.nav.testimonials },
    { href: `${withLocalePrefix(locale)}#faq`, label: t.nav.faq },
  ];

  const handleLocaleChange = (nextLocale: Locale) => {
    window.localStorage.setItem("mb_locale", nextLocale);

    const nextPath = switchLocalePath(pathname, nextLocale);
    const hash = window.location.hash;
    router.push(`${nextPath}${hash}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur">
      <Container className="py-5">
        <nav className="flex items-center justify-between gap-6">
          <Link href={withLocalePrefix(locale)} className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center overflow-hidden md:h-12 md:w-12">
              <Image
                src="/brand/logoBuu.png"
                alt="MediBoo logo"
                width={778}
                height={779}
                className="h-full w-full object-contain"
                priority
              />
            </span>
            <span>
              <span className="block text-lg font-semibold text-primary">{t.site.productName}</span>
              <span className="block text-xs text-muted-text">{t.site.tagline}</span>
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-6">
            <div className="hidden items-center gap-2 md:flex">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-2 text-sm font-medium text-muted-text hover:bg-white hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              className="inline-flex h-8 items-center gap-1 rounded-md border border-border/80 bg-white px-1 shadow-none"
              aria-label={t.nav.languageLabel}
              role="group"
            >
              {([
                { value: "pl", label: "PL", flag: "🇵🇱" },
                { value: "en", label: "EN", flag: "🇬🇧" },
              ] as const).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleLocaleChange(option.value)}
                  className={`inline-flex h-6 items-center gap-1.5 rounded-sm px-2 text-sm font-medium transition-colors ${
                    option.value === locale
                      ? "bg-primary/10 text-primary"
                      : "bg-transparent text-muted-text hover:text-primary"
                  }`}
                  aria-pressed={option.value === locale}
                >
                  <span aria-hidden="true" className="text-xs">
                    {option.flag}
                  </span>
                  <span>{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

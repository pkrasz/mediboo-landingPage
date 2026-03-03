import { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";

interface SiteLayoutProps {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}

export function SiteLayout({ children, locale, dictionary }: Readonly<SiteLayoutProps>) {
  return (
    <div className="min-h-screen bg-background text-text">
      <Navbar locale={locale} t={dictionary} />
      <main>{children}</main>
      <Footer locale={locale} t={dictionary} />
    </div>
  );
}

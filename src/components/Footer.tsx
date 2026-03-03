import Link from "next/link";
import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { withLocalePrefix } from "@/i18n/config";

interface FooterProps {
  locale: Locale;
  t: Dictionary;
}

export function Footer({ locale, t }: Readonly<FooterProps>) {
  return (
    <footer className="border-t border-border/80 bg-white/70">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Link href={withLocalePrefix(locale)} className="text-lg font-semibold text-primary">
              {t.site.productName}
            </Link>
            <p className="mt-3 text-sm leading-7 text-muted-text">
              {t.footer.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:justify-end">
            <Link
              href={withLocalePrefix(locale, "/privacy")}
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              {t.footer.privacy}
            </Link>
            <Link
              href={withLocalePrefix(locale, "/terms")}
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              {t.footer.terms}
            </Link>
            <Link
              href={withLocalePrefix(locale, "/delete-data")}
              className="rounded-md px-3 py-2 text-sm text-muted-text hover:bg-background hover:text-primary"
            >
              {t.footer.deleteData}
            </Link>
          </div>
        </div>

        <div className="border-t border-border/80 py-5 text-sm text-muted-text">
          Copyright {new Date().getFullYear()} {t.site.productName}. {t.footer.copyright}
        </div>
      </Container>
    </footer>
  );
}

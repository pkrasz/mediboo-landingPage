import Link from "next/link";
import { Container } from "@/components/Container";
import type { Dictionary } from "@/i18n";
import type { Locale } from "@/i18n/config";
import { withLocalePrefix } from "@/i18n/config";
import { SUPPORT_EMAIL } from "@/lib/site";

interface SupportPageProps {
  locale: Locale;
  t: Dictionary["support"];
}

export function SupportPage({ locale, t }: Readonly<SupportPageProps>) {
  return (
    <Container className="py-10 md:py-14">
      <div className="mx-auto max-w-3xl rounded-md bg-white p-6 shadow-card md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {t.eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-primary md:text-4xl">
          {t.title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-text">
          {t.description}
        </p>

        <div className="mt-8 rounded-md bg-secondary/60 p-5">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary/75">
            {t.emailLabel}
          </p>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className="mt-3 inline-flex text-lg font-semibold text-primary underline decoration-primary/25 underline-offset-4 transition hover:decoration-primary motion-reduce:transition-none"
          >
            {SUPPORT_EMAIL}
          </a>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <Link
            href={withLocalePrefix(locale, "/#faq")}
            className="rounded-md border border-border bg-background/70 p-5 transition hover:border-primary/30 hover:bg-background motion-reduce:transition-none"
          >
            <h2 className="text-lg font-semibold text-primary">{t.faqLabel}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-text">{t.faqDescription}</p>
          </Link>

          <Link
            href={withLocalePrefix(locale, "/privacy")}
            className="rounded-md border border-border bg-background/70 p-5 transition hover:border-primary/30 hover:bg-background motion-reduce:transition-none"
          >
            <h2 className="text-lg font-semibold text-primary">{t.privacyLabel}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-text">{t.privacyDescription}</p>
          </Link>

          <Link
            href={withLocalePrefix(locale, "/terms")}
            className="rounded-md border border-border bg-background/70 p-5 transition hover:border-primary/30 hover:bg-background motion-reduce:transition-none"
          >
            <h2 className="text-lg font-semibold text-primary">{t.termsLabel}</h2>
            <p className="mt-3 text-sm leading-7 text-muted-text">{t.termsDescription}</p>
          </Link>
        </div>
      </div>
    </Container>
  );
}

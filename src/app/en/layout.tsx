import { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { getDictionary } from "@/i18n";

interface EnglishLayoutProps {
  children: ReactNode;
}

export default function EnglishLayout({ children }: Readonly<EnglishLayoutProps>) {
  const locale = "en";

  return (
    <SiteLayout locale={locale} dictionary={getDictionary(locale)}>
      {children}
    </SiteLayout>
  );
}

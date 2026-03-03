import { ReactNode } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { getDictionary } from "@/i18n";

interface PolishLayoutProps {
  children: ReactNode;
}

export default function PolishLayout({ children }: Readonly<PolishLayoutProps>) {
  const locale = "pl";

  return (
    <SiteLayout locale={locale} dictionary={getDictionary(locale)}>
      {children}
    </SiteLayout>
  );
}

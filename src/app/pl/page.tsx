import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { getDictionary } from "@/i18n";

const locale = "pl";
const dictionary = getDictionary(locale);

export const metadata: Metadata = {
  description: dictionary.metadata.siteDescription,
};

export default function PolishHomePage() {
  return <LandingPage locale={locale} dictionary={dictionary} />;
}

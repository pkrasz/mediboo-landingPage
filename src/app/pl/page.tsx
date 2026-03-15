import { LandingPage } from "@/components/LandingPage";
import { getDictionary } from "@/i18n";
import { createHomeMetadata } from "@/lib/metadata";

const locale = "pl";
const dictionary = getDictionary(locale);

export const metadata = createHomeMetadata(locale);

export default function PolishHomePage() {
  return <LandingPage locale={locale} dictionary={dictionary} />;
}

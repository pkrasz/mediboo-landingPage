import { LandingPage } from "@/components/LandingPage";
import { getDictionary } from "@/i18n";
import { createHomeMetadata } from "@/lib/metadata";

const locale = "en";
const dictionary = getDictionary(locale);

export const metadata = createHomeMetadata(locale);

export default function EnglishHomePage() {
  return <LandingPage locale={locale} dictionary={dictionary} />;
}

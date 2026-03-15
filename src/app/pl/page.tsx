import { LandingPage } from "@/components/LandingPage";
import { StructuredData } from "@/components/StructuredData";
import { getDictionary } from "@/i18n";
import { createHomeMetadata } from "@/lib/metadata";

const locale = "pl";
const dictionary = getDictionary(locale);

export const metadata = createHomeMetadata(locale);

export default function PolishHomePage() {
  return (
    <>
      <StructuredData />
      <LandingPage locale={locale} dictionary={dictionary} />
    </>
  );
}

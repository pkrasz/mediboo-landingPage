import { SupportPage } from "@/components/SupportPage";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("pl");

export const metadata = createPageMetadata({
  title: "Wsparcie – MediBoo",
  description: "Uzyskaj pomoc dla MediBoo, znajdź odpowiedzi w FAQ i skontaktuj się z nami mailowo.",
  canonical: "https://mediboo.app/pl/support",
  locale: "pl",
  localizedUrls: {
    en: "/en/support",
    pl: "/pl/support",
  },
});

export default function PolishSupportPage() {
  return <SupportPage locale="pl" t={dictionary.support} />;
}

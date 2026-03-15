import { DeleteDataForm } from "@/components/DeleteDataForm";
import { getDictionary } from "@/i18n";
import { createPageMetadata } from "@/lib/metadata";

const dictionary = getDictionary("pl");

export const metadata = createPageMetadata({
  title: dictionary.deleteData.title,
  description: "Wyślij prośbę o usunięcie danych konta MediBoo i podaj informacje potrzebne do identyfikacji konta.",
  canonical: "https://mediboo.app/pl/delete-data",
  locale: "pl",
  localizedUrls: {
    en: "/en/delete-data",
    pl: "/pl/delete-data",
  },
});

export default function PolishDeleteDataPage() {
  return <DeleteDataForm t={dictionary.deleteData} locale="pl" />;
}

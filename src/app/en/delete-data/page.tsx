import type { Metadata } from "next";
import { DeleteDataForm } from "@/components/DeleteDataForm";
import { getDictionary } from "@/i18n";

const dictionary = getDictionary("en");

export const metadata: Metadata = {
  title: dictionary.deleteData.title,
};

export default function EnglishDeleteDataPage() {
  return <DeleteDataForm t={dictionary.deleteData} />;
}

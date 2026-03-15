import { createHomeMetadata } from "@/lib/metadata";
import { LocaleRedirect } from "@/components/LocaleRedirect";

export const metadata = createHomeMetadata("en");

export default function Home() {
  return <LocaleRedirect />;
}

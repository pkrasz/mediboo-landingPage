"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { defaultLocale, isLocale } from "@/i18n/config";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("mb_locale");

    if (savedLocale && isLocale(savedLocale)) {
      router.replace(`/${savedLocale}`);

      return;
    }

    const browserLocale = navigator.language.toLowerCase().startsWith("pl") ? "pl" : defaultLocale;
    router.replace(`/${browserLocale}`);
  }, [router]);

  return null;
}

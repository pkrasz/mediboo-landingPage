import type { Metadata } from "next";
import "./globals.css";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { HOME_DESCRIPTION_EN, HOME_TITLE_EN, SITE_NAME, SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: HOME_TITLE_EN,
  description: HOME_DESCRIPTION_EN,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { HOME_DESCRIPTION_EN, HOME_TITLE_EN, SITE_NAME, SITE_URL } from "@/lib/site";

const ICONS_VERSION = "20260316";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: HOME_TITLE_EN,
  description: HOME_DESCRIPTION_EN,
  manifest: `/site.webmanifest?v=${ICONS_VERSION}`,
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: `/icons/mediboo-favicon.ico?v=${ICONS_VERSION}`, sizes: "any" },
      {
        url: `/icons/mediboo-favicon-16x16.png?v=${ICONS_VERSION}`,
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: `/icons/mediboo-favicon-32x32.png?v=${ICONS_VERSION}`,
        sizes: "32x32",
        type: "image/png",
      },
      { url: `/icons/mediboo-icon-192.png?v=${ICONS_VERSION}`, sizes: "192x192", type: "image/png" },
      { url: `/icons/mediboo-icon-512.png?v=${ICONS_VERSION}`, sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: `/icons/mediboo-favicon.ico?v=${ICONS_VERSION}` }],
    apple: [
      {
        url: `/icons/mediboo-apple-touch-icon.png?v=${ICONS_VERSION}`,
        sizes: "180x180",
        type: "image/png",
      },
    ],
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

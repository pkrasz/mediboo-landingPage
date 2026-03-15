import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const routes = [
  "",
  "/en",
  "/pl",
  "/en/privacy",
  "/pl/privacy",
  "/en/terms",
  "/pl/terms",
  "/en/delete-data",
  "/pl/delete-data",
  "/en/support",
  "/pl/support",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route ? `${SITE_URL}${route}` : SITE_URL,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/en" || route === "/pl" ? "weekly" : "monthly",
    priority: route === "" || route === "/en" || route === "/pl" ? 1 : 0.7,
  }));
}

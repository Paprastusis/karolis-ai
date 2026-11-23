import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { YARD_PAGES } from "@/content/yard-pages";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/yards",
    ...YARD_PAGES.map((p) => `/yards/${p.slug}`),
    "/work",
    "/services",
    "/about",
    "/contact",
  ];
  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path.startsWith("/yards/") ? 0.7 : 0.8,
  }));
}

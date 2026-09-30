import type { MetadataRoute } from "next";
import { articles } from "@/content/articles";
import { courts } from "@/content/courts";
import { practiceAreas } from "@/content/practiceAreas";
import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: MetadataRoute.Sitemap = [
    "",
    "/about",
    "/practice-areas",
    "/courts",
    "/legal-insights",
    "/faqs",
    "/contact",
    "/disclaimer",
    "/privacy-policy",
    "/terms",
    "/cases",
  ].map((path) => ({
    url: `${siteConfig.origin}${path || "/"}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  for (const area of practiceAreas) {
    pages.push({
      url: `${siteConfig.origin}/practice-areas/${area.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  for (const court of courts) {
    pages.push({
      url: `${siteConfig.origin}/courts/${court.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    });
  }

  for (const article of articles) {
    pages.push({
      url: `${siteConfig.origin}/legal-insights/${article.slug}`,
      lastModified: new Date(article.updatedAt),
      changeFrequency: "monthly",
      priority: 0.65,
    });
  }

  return pages;
}

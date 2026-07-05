import { MetadataRoute } from "next";

const BASE = "https://vigdis.shop";

// Sitemap with explicit lastModified dates and tuned priorities
// Priority scale: homepage=1.0, money pages=0.95, service/area=0.85, info=0.65
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date("2025-06-01T00:00:00Z"); // pin a realistic date so crawlers don't re-fetch daily

  const servicePages = [
    { slug: "emergency-locksmith", priority: 0.95 },
    { slug: "24-hour-locksmith", priority: 0.9 },
    { slug: "lock-repair", priority: 0.85 },
    { slug: "lock-replacement", priority: 0.85 },
    { slug: "key-cutting", priority: 0.8 },
    { slug: "residential-locksmith", priority: 0.85 },
    { slug: "commercial-locksmith", priority: 0.85 },
    { slug: "smart-lock-installation", priority: 0.8 },
  ];

  const areaPages = [
    { slug: "mayfair", priority: 0.95 },      // primary target area
    { slug: "westminster", priority: 0.85 },
    { slug: "belgravia", priority: 0.8 },
    { slug: "knightsbridge", priority: 0.8 },
    { slug: "soho", priority: 0.75 },
    { slug: "marylebone", priority: 0.75 },
    { slug: "victoria", priority: 0.75 },
    { slug: "paddington", priority: 0.7 },
    { slug: "chelsea", priority: 0.75 },
    { slug: "kensington", priority: 0.75 },
  ];

  return [
    // Core pages — highest priority
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },

    // Service pages
    ...servicePages.map(({ slug, priority }) => ({
      url: `${BASE}/services/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),

    // Service area pages
    ...areaPages.map(({ slug, priority }) => ({
      url: `${BASE}/service-areas/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority,
    })),
  ];
}

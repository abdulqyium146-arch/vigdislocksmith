import { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/business";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BUSINESS.url;
  const now = new Date();
  const areas = [
    "mayfair","westminster","belgravia","knightsbridge","soho",
    "marylebone","victoria","paddington","chelsea","kensington",
  ];
  const services = [
    "emergency-locksmith","24-hour-locksmith","lock-repair","lock-replacement",
    "key-cutting","residential-locksmith","commercial-locksmith","smart-lock-installation",
  ];
  return [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...services.map((s) => ({
      url: `${base}/services/${s}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    { url: `${base}/service-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...areas.map((a) => ({
      url: `${base}/service-areas/${a}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}

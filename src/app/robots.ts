import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/ai.txt",
          "/humans.txt",
          "/sitemap.xml",
          "/site.webmanifest",
        ],
        disallow: ["/api/", "/_next/", "/static/"],
      },
      // Explicitly allow AI crawlers for GEO/AEO citations
      { userAgent: "GPTBot", allow: "/" },
      { userAgent: "ChatGPT-User", allow: "/" },
      { userAgent: "ClaudeBot", allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "Claude-Web", allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Google-Extended", allow: "/" },
      { userAgent: "GeminiBot", allow: "/" },
      { userAgent: "cohere-ai", allow: "/" },
    ],
    sitemap: "https://vigdis.shop/sitemap.xml",
    host: "https://vigdis.shop",
  };
}

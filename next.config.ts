import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove X-Powered-By header — avoid fingerprinting the tech stack
  poweredByHeader: false,

  // Enforce no trailing slash — canonical consistency (vigdis.shop/faq not vigdis.shop/faq/)
  trailingSlash: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME-type sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Block clickjacking
          { key: "X-Frame-Options", value: "DENY" },
          // Legacy XSS filter
          { key: "X-XSS-Protection", value: "1; mode=block" },
          // Limit referrer info to origin only on cross-origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Force HTTPS for 1 year (Vercel handles HTTPS but belt + braces)
          { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains; preload" },
          // Restrict browser features
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(self), interest-cohort=()",
          },
          // Basic CSP — allows inline styles (Tailwind) and Google Fonts
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://www.google-analytics.com https://vitals.vercel-insights.com",
              "frame-src 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      // Cache images for 30 days
      {
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=2592000, stale-while-revalidate=86400" },
        ],
      },
    ];
  },

  async redirects() {
    return [
      // Redirect any legacy .co.uk paths if you migrate
      // { source: "/old-path", destination: "/new-path", permanent: true },
    ];
  },
};

export default nextConfig;

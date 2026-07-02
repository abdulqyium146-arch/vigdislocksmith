import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import { getLocalBusinessSchema, getWebSiteSchema, getDatasetSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vigdis.shop"),

  applicationName: BUSINESS.name,

  title: {
    default: "Locksmith Mayfair | Vigdis Locksmith London | 24/7",
    template: "%s | Vigdis Locksmith London",
  },

  description:
    "Expert locksmith in Mayfair, London. 24/7 emergency lockouts, lock repair, replacement & key cutting. ★★★★★ 247 reviews. No call-out fee. Call 020 3670 6551.",

  keywords: [
    "locksmith mayfair",
    "emergency locksmith mayfair",
    "locksmith westminster",
    "24 hour locksmith mayfair",
    "lock repair mayfair",
    "lock replacement mayfair",
    "key cutting mayfair",
    "locksmith central london",
    "emergency lockout london",
  ],

  authors: [{ name: BUSINESS.name, url: "https://vigdis.shop" }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  category: "Locksmith Services",

  // Prevent iOS from auto-linking phone numbers (we control our own CTAs)
  formatDetection: { telephone: false, email: false, address: false },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://vigdis.shop",
    siteName: BUSINESS.name,
    title: "Locksmith Mayfair | Vigdis Locksmith London | 24/7",
    description:
      "Expert locksmith in Mayfair. 24/7 emergency service. ★★★★★ 247 Google reviews. No call-out fee. Call now.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vigdis Locksmith London — Locksmith Mayfair",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@vigdislocksmith",
    title: "Locksmith Mayfair | Vigdis Locksmith London",
    description: "24/7 emergency locksmith in Mayfair & Central London. 5★ rated.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://vigdis.shop",
    languages: {
      "en-GB": "https://vigdis.shop",
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16 32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "MEKHUbvZnc48CmGOhlpfEE1swXJcxWSuTMM9n6nHxJs",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        {/* Preconnect to Google Fonts (already loaded via next/font but belt-and-braces) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* LocalBusiness + Locksmith schema sitewide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        {/* WebSite schema with SearchAction */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
        />
        {/* Dataset schema linking all knowledge assets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getDatasetSchema()) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main className="pt-[88px]">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}

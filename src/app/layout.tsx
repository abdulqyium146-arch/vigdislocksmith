import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BUSINESS } from "@/lib/business";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/schema";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a1a2e",
};

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.url),
  title: {
    default: `Locksmith Mayfair | ${BUSINESS.name} | 24/7 Emergency`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: `Expert locksmith in Mayfair. Available 24/7 for emergency lockouts, lock repair, lock replacement & key cutting. ★★★★★ Rated. Call ${BUSINESS.phoneDisplay} now.`,
  keywords: [
    "locksmith mayfair",
    "emergency locksmith mayfair",
    "locksmith westminster",
    "24 hour locksmith london",
    "lock repair mayfair",
  ],
  authors: [{ name: BUSINESS.name }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: BUSINESS.url,
    siteName: BUSINESS.name,
    title: `Locksmith Mayfair | ${BUSINESS.name} | 24/7 Emergency`,
    description: `Expert locksmith in Mayfair. 24/7 emergency lockout service. ★★★★★ ${BUSINESS.reviewCount} reviews. Call now.`,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BUSINESS.name} - Locksmith Mayfair`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Locksmith Mayfair | ${BUSINESS.name}`,
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
  alternates: { canonical: BUSINESS.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getWebSiteSchema()) }}
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

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vigdis Locksmith",
  description: "Professional locksmith services. Call us on +44 7984 547185.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <header className="w-full bg-yellow-400 py-3 px-6 flex items-center justify-between">
          <span className="font-bold text-black text-lg">Vigdis Locksmith</span>
          <a
            href="tel:+447984547185"
            className="font-bold text-black text-lg hover:underline"
          >
            +44 7984 547185
          </a>
        </header>
        {children}
        <footer className="w-full bg-zinc-900 text-zinc-300 py-6 px-6 text-center text-sm">
          <p>
            Need a locksmith?{" "}
            <a
              href="tel:+447984547185"
              className="text-yellow-400 font-semibold hover:underline"
            >
              Call +44 7984 547185
            </a>
          </p>
          <p className="mt-1 text-zinc-500">© {new Date().getFullYear()} Vigdis Locksmith. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

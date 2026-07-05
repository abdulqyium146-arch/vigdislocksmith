import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Home, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Page Not Found | Vigdis Locksmith London",
  description: "The page you were looking for could not be found. Call Vigdis Locksmith London for 24/7 emergency locksmith services in Mayfair.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-lg mx-auto px-4 text-center py-20">
        <p className="text-7xl font-bold text-red-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-gray-900 mb-3">Page Not Found</h1>
        <p className="text-gray-600 mb-8">
          The page you were looking for doesn&apos;t exist. If you need an emergency locksmith
          in Mayfair, call us now — we&apos;re available 24/7.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call {BUSINESS.phoneDisplay}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-900 text-gray-700 hover:text-gray-900 font-bold px-6 py-3 rounded-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 text-sm">
          {[
            { label: "Emergency Locksmith", href: "/services/emergency-locksmith" },
            { label: "Locksmith Mayfair", href: "/service-areas/mayfair" },
            { label: "Lock Repair", href: "/services/lock-repair" },
            { label: "Contact Us", href: "/contact" },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1 text-red-600 hover:text-red-700 font-medium"
            >
              <ArrowRight className="w-3 h-3" />
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

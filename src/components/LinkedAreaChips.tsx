import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const LINKED_SLUGS = [
  "mayfair","westminster","belgravia","knightsbridge","soho",
  "marylebone","victoria","paddington","chelsea","kensington",
];

export default function LinkedAreaChips({ serviceName }: { serviceName: string }) {
  return (
    <section className="py-14 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">
          {serviceName} — Coverage Area
        </h2>
        <p className="text-gray-500 text-sm mb-8">
          We provide {serviceName.toLowerCase()} throughout Mayfair and all of Central London.
          Click any area for local response times.
        </p>
        <div className="flex flex-wrap gap-3 mb-6">
          {BUSINESS.serviceAreas.map((area) => {
            const slug = area.toLowerCase().replace(/\s+/g, "-");
            return LINKED_SLUGS.includes(slug) ? (
              <Link
                key={area}
                href={`/service-areas/${slug}`}
                className="flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-700 hover:bg-red-600 hover:text-white hover:border-red-600 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {area}
              </Link>
            ) : (
              <span key={area} className="bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-medium">
                {area}
              </span>
            );
          })}
        </div>
        <Link
          href="/service-areas"
          className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
        >
          View all service areas <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

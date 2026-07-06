import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getAreaSchema } from "@/lib/schema";
import NearbyAreaLinks from "@/components/NearbyAreaLinks";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Westminster | 24/7 Emergency Locksmith SW1",
  description: "Professional locksmith in Westminster, London SW1. 24/7 emergency service. Fast 15-30 min response. Call +44 7984 547185.",
  alternates: { canonical: "https://vigdis.shop/service-areas/westminster" },
};

export default function WestminsterPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Westminster", url: `${BUSINESS.url}/service-areas/westminster` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getAreaSchema("Westminster", ["SW1A", "SW1P", "SW1H"], 51.4994, -0.1360, `${BUSINESS.url}/service-areas/westminster`)} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Westminster</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Westminster, London SW1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Locksmith in Westminster, London — 24/7 Emergency Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Fast, professional locksmith services throughout Westminster SW1. Emergency lockouts,
            lock repair, and security upgrades available around the clock.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
              <Phone className="w-5 h-5" />
              Call Now: {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="btn-secondary">
              Get a Quote <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Westminster</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Westminster is one of London&apos;s most important boroughs, home to the Houses of Parliament,
              Buckingham Palace, Westminster Abbey, and thousands of residential and commercial
              properties. Vigdis Locksmith London serves Westminster comprehensively, covering
              Victoria Street, Pimlico Road, Horseferry Road, Millbank, Vauxhall Bridge Road, and
              all surrounding streets.
            </p>
            <p>
              Our Westminster locksmith team operates 24/7, providing emergency lockouts, lock
              repair, lock replacement, key cutting, and security assessments. We serve both
              residential properties — including the many mansion block flats and period conversions
              throughout the area — and commercial premises such as offices, hotels, and retail units.
            </p>
            <p>
              Call us on{" "}
              <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">
                {BUSINESS.phoneDisplay}
              </a>{" "}
              for immediate assistance anywhere in Westminster SW1.
            </p>
          </div>
        </div>
      </section>

      <NearbyAreaLinks currentArea="westminster" />

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Westminster?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getAreaSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Marylebone | 24/7 Emergency Locksmith W1U",
  description: "Expert locksmith in Marylebone W1. Emergency lockouts, lock repair. Covering Harley Street, Baker Street, Marylebone High Street. Call +44 7984 547185.",
  alternates: { canonical: "https://vigdis.shop/service-areas/marylebone" },
};

export default function MarylebonePage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Marylebone", url: `${BUSINESS.url}/service-areas/marylebone` },
  ];
  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getAreaSchema("Marylebone", ["W1U", "W1G", "NW1"], 51.5215, -0.1495, `${BUSINESS.url}/service-areas/marylebone`)} />
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Marylebone</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Marylebone, London W1U</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Locksmith in Marylebone — 24/7 Emergency Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Fast locksmith services throughout Marylebone W1U and W1G. Emergency lockouts,
            lock repair, and security upgrades available 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Marylebone</h2>
          <p className="text-gray-700 leading-relaxed">
            Marylebone is a charming area of Central London known for its village atmosphere,
            Marylebone High Street, and the famous Baker Street — home to the fictional Sherlock Holmes.
            Vigdis Locksmith London serves the entire Marylebone area, covering Harley Street,
            Baker Street, Marylebone High Street, Devonshire Place, Weymouth Street, and all
            surrounding W1U and W1G postcodes.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For immediate locksmith assistance in Marylebone, call{" "}
            <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Marylebone?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Chelsea | 24/7 Emergency Locksmith SW3",
  description: "Expert locksmith in Chelsea SW3. King's Road, Sloane Square, Chelsea Embankment covered. 24/7 emergency service. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/service-areas/chelsea" },
};

export default function ChelseaPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Chelsea", url: `${BUSINESS.url}/service-areas/chelsea` },
  ];
  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Chelsea</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Chelsea, London SW3</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">Locksmith in Chelsea — 24/7 Emergency Service</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Professional locksmith throughout Chelsea SW3. Covering King's Road, Sloane Square, Chelsea Embankment, and all surrounding streets.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Chelsea</h2>
          <p className="text-gray-700 leading-relaxed">
            Chelsea is one of London&apos;s most stylish and sought-after neighbourhoods, known for
            the King&apos;s Road, Saatchi Gallery, Chelsea Physic Garden, and beautiful riverside
            properties along the Chelsea Embankment. Vigdis Locksmith London provides expert
            locksmith services throughout Chelsea SW3 including King&apos;s Road, Sloane Square,
            Fulham Road, Cheyne Walk, and all surrounding streets.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For all locksmith needs in Chelsea, call <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Chelsea?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getAreaSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Knightsbridge | 24/7 Emergency Locksmith SW1X",
  description: "Expert locksmith in Knightsbridge SW1X & SW3. Emergency lockouts near Harrods, Sloane Street. Fast response. Call +44 7984 547185.",
  alternates: { canonical: "https://vigdis.shop/service-areas/knightsbridge" },
};

export default function KnightsbridgePage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Knightsbridge", url: `${BUSINESS.url}/service-areas/knightsbridge` },
  ];
  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getAreaSchema("Knightsbridge", ["SW1X", "SW3"], 51.5010, -0.1607, `${BUSINESS.url}/service-areas/knightsbridge`)} />
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Knightsbridge</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Knightsbridge, London SW1X</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Locksmith in Knightsbridge — 24/7 Emergency Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Professional locksmith services in Knightsbridge. Covering Harrods, Sloane Street,
            Hans Crescent, Brompton Road, and all surrounding areas. Call us 24/7.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Knightsbridge</h2>
          <p className="text-gray-700 leading-relaxed">
            Knightsbridge is renowned as one of London&apos;s most luxurious areas, home to Harrods,
            the Harvey Nichols department store, and some of the city&apos;s most prestigious apartment
            buildings and hotels. Vigdis Locksmith London serves Knightsbridge 24/7, covering
            Brompton Road, Sloane Street, Hans Crescent, Montpelier Square, Rutland Gate, and
            all surrounding SW1X and SW3 postcodes.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether you need emergency lockout assistance near Knightsbridge station or a security
            upgrade for your luxury flat, call us on{" "}
            <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Knightsbridge?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Kensington | 24/7 Emergency Locksmith W8",
  description: "Expert locksmith in Kensington W8 & SW7. Kensington High Street, Kensington Palace Gardens covered. 24/7 service. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/service-areas/kensington" },
};

export default function KensingtonPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Kensington", url: `${BUSINESS.url}/service-areas/kensington` },
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
            <span className="text-white">Kensington</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Kensington, London W8</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">Locksmith in Kensington — 24/7 Emergency Service</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Professional locksmith services throughout Kensington W8 and South Kensington SW7. Fast emergency response, lock repair, and security upgrades.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Kensington</h2>
          <p className="text-gray-700 leading-relaxed">
            Kensington is a prestigious Royal Borough of London, home to Kensington Palace,
            the Natural History Museum, the Victoria and Albert Museum, and Hyde Park. Vigdis
            Locksmith London provides comprehensive locksmith services across Kensington W8 and
            South Kensington SW7, covering Kensington High Street, Kensington Palace Gardens,
            Hornton Street, Pemberton Gardens, and Old Brompton Road.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For immediate locksmith help in Kensington, call <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Kensington?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

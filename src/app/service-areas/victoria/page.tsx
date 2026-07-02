import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Victoria | 24/7 Emergency Locksmith SW1V",
  description: "Professional locksmith in Victoria SW1V. Near Victoria Station. Emergency service 24/7. Fast response. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/service-areas/victoria" },
};

export default function VictoriaPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Victoria", url: `${BUSINESS.url}/service-areas/victoria` },
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
            <span className="text-white">Victoria</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Victoria, London SW1V</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">Locksmith in Victoria — 24/7 Emergency Service</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">Expert locksmith in Victoria SW1V. Emergency lockouts, lock repair, and key cutting near Victoria Station and surrounding areas.</p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Victoria</h2>
          <p className="text-gray-700 leading-relaxed">
            Victoria is a bustling area of Central London centred around Victoria Station, one of
            London&apos;s busiest rail termini. Vigdis Locksmith London covers Victoria SW1V including
            Buckingham Palace Road, Victoria Street, Vauxhall Bridge Road, Ebury Street, and all
            surrounding streets. We serve both residential properties and commercial premises
            throughout the area.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            For fast locksmith help in Victoria, call <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Victoria?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

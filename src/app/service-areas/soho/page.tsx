import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Soho | 24/7 Emergency Locksmith W1D W1F",
  description: "Emergency locksmith in Soho W1. Fast response, no call-out fee. Covering Old Compton Street, Dean Street, Wardour Street. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdislocksmith.co.uk/service-areas/soho" },
};

export default function SohoPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Soho", url: `${BUSINESS.url}/service-areas/soho` },
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
            <span className="text-white">Soho</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">Soho, London W1</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
            Locksmith in Soho — 24/7 Emergency Service
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl">
            Fast, reliable locksmith service throughout Soho W1. Residential and commercial
            properties covered. Emergency response 24 hours a day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={`tel:${BUSINESS.phone}`} className="btn-emergency"><Phone className="w-5 h-5" />Call: {BUSINESS.phoneDisplay}</a>
            <Link href="/contact" className="btn-secondary">Get a Quote <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Locksmith Services in Soho</h2>
          <p className="text-gray-700 leading-relaxed">
            Soho is one of London&apos;s most vibrant and densely populated neighbourhoods, home to a
            unique mix of residential flats, restaurants, bars, media offices, and entertainment
            venues. Vigdis Locksmith London provides fast locksmith services throughout Soho,
            covering Old Compton Street, Dean Street, Wardour Street, Berwick Street, Carnaby
            Street, and all surrounding W1D and W1F postcodes.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Whether you&apos;re locked out of your Soho flat at 3am or need commercial lock upgrades
            for your restaurant or office, we&apos;re always available. Call{" "}
            <a href={`tel:${BUSINESS.phone}`} className="text-red-600 font-semibold">{BUSINESS.phoneDisplay}</a>.
          </p>
        </div>
      </section>
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Soho?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />{BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

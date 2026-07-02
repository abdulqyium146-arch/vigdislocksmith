import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Commercial Locksmith Mayfair | Business Security Specialists",
  description:
    "Specialist commercial locksmith services in Mayfair. Office lockouts, access control, master key systems. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/services/commercial-locksmith" },
};

export default function CommercialLocksmithPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "Commercial Locksmith", url: `${BUSINESS.url}/services/commercial-locksmith` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceSchema("Commercial Locksmith Mayfair", "Specialist commercial locksmith solutions for Mayfair businesses including access control and master key systems.", `${BUSINESS.url}/services/commercial-locksmith`)} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">Commercial Locksmith</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Commercial Locksmith Mayfair — Business Security Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vigdis Locksmith London understands the unique security requirements of Mayfair
              businesses. We provide specialist commercial locksmith services to offices, retail
              units, hotels, restaurants, and multi-occupancy buildings across Central London.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
                <Phone className="w-5 h-5" />
                Call: {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Commercial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Office and commercial premises lockouts",
              "Master key system design and installation",
              "Access control system fitting",
              "High-security lock upgrades",
              "Lock changes on staff departure",
              "Roller shutter and gate locks",
              "Panic hardware and fire exit locks",
              "Safe installation and opening",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Protect Your Mayfair Business</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

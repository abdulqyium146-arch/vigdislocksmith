import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Smart Lock Installation Mayfair | App-Controlled Access",
  description:
    "Professional smart lock installation in Mayfair. Keyless entry, app-controlled, biometric. Leading brands fitted by certified locksmiths. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdislocksmith.co.uk/services/smart-lock-installation" },
};

export default function SmartLockPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "Smart Lock Installation", url: `${BUSINESS.url}/services/smart-lock-installation` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceSchema("Smart Lock Installation Mayfair", "Professional smart lock and access control installation in Mayfair. Keyless, app-controlled, and biometric systems.", `${BUSINESS.url}/services/smart-lock-installation`)} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">Smart Lock Installation</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Smart Lock Installation in Mayfair — Future-Proof Security
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Upgrade to keyless entry with a professional smart lock installation from Vigdis
              Locksmith London. We supply and install the latest smart lock technology from
              leading brands, fully configured and ready to use.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Smart Lock Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "App-controlled smart locks",
              "Keypad and PIN entry systems",
              "Bluetooth-enabled door locks",
              "Fingerprint and biometric access",
              "Yale Conexis and August smart locks",
              "Smart lock troubleshooting and repairs",
              "Integration with smart home systems",
              "Commercial access control systems",
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
          <h2 className="text-3xl font-bold text-white mb-4">Upgrade to Smart Security Today</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

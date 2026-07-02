import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Service Areas | Mayfair & Central London Coverage",
  description:
    "Vigdis Locksmith London covers Mayfair, Westminster, Belgravia, Knightsbridge, Soho, Marylebone, Chelsea, Kensington and all of Central London. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdislocksmith.co.uk/service-areas" },
};

const areaDetails = [
  { slug: "mayfair", name: "Mayfair", desc: "Our base. We cover all streets and properties in Mayfair W1J and W1K including Park Lane, Berkeley Square, and Grosvenor Square." },
  { slug: "westminster", name: "Westminster", desc: "Full coverage of Westminster SW1 including Victoria Street, Pimlico Road, and all surrounding streets." },
  { slug: "belgravia", name: "Belgravia", desc: "Belgravia SW1X including Eaton Square, Chester Square, and Belgrave Square." },
  { slug: "knightsbridge", name: "Knightsbridge", desc: "Knightsbridge SW1X and SW3 including Harrods area, Sloane Street, and Hans Crescent." },
  { slug: "soho", name: "Soho", desc: "Soho W1D and W1F including Old Compton Street, Dean Street, and Wardour Street." },
  { slug: "marylebone", name: "Marylebone", desc: "Marylebone W1U and W1G including Harley Street, Baker Street, and Marylebone High Street." },
  { slug: "victoria", name: "Victoria", desc: "Victoria SW1V including Victoria Station area, Buckingham Palace Road, and surrounding streets." },
  { slug: "paddington", name: "Paddington", desc: "Paddington W2 including Paddington Station area, Hyde Park area, and Bayswater." },
  { slug: "chelsea", name: "Chelsea", desc: "Chelsea SW3 including King's Road, Sloane Square, and Chelsea Embankment." },
  { slug: "kensington", name: "Kensington", desc: "Kensington W8 and SW7 including Kensington High Street, Kensington Palace Gardens, and South Kensington." },
];

export default function ServiceAreasPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Service Areas</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Locksmith Service Areas — Central London Coverage
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Vigdis Locksmith London covers Mayfair and all of Central London. Fast 15-30 minute
            response, no call-out fee, available 24/7.
          </p>
          <div className="mt-8">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors">
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areaDetails.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2">
                      Locksmith in {area.name}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
                    <div className="flex items-center gap-1 text-red-600 text-sm font-semibold mt-3">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Your Area?</h2>
          <p className="text-red-100 text-lg mb-8">We cover all of Central London — call us for fast, reliable service.</p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

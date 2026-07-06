import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, CheckCircle, ArrowRight, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import ReviewCard from "@/components/ReviewCard";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Locksmith in Mayfair, London | 24/7 Emergency Service",
  description:
    "Expert locksmith in Mayfair, London W1. 24/7 emergency service covering Park Lane, Berkeley Square, Grosvenor Square & surrounding areas. Call +44 7984 547185.",
  alternates: { canonical: "https://vigdis.shop/service-areas/mayfair" },
};

const mayfairSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": `${BUSINESS.url}/service-areas/mayfair#business`,
  name: `${BUSINESS.name} — Mayfair`,
  description: "24/7 emergency locksmith service in Mayfair, London W1.",
  url: `${BUSINESS.url}/service-areas/mayfair`,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address.street,
    addressLocality: "Mayfair, London",
    postalCode: BUSINESS.address.postcode,
    addressCountry: "GB",
  },
  geo: { "@type": "GeoCoordinates", latitude: 51.5094, longitude: -0.1476 },
  areaServed: { "@type": "Place", name: "Mayfair, London" },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BUSINESS.rating,
    reviewCount: BUSINESS.reviewCount,
    bestRating: 5,
    worstRating: 1,
  },
};

const faqs = [
  {
    question: "How fast can a locksmith reach me in Mayfair?",
    answer: "Our locksmiths are based in and around Mayfair and typically arrive within 15-30 minutes of your call to anywhere in the W1J, W1K, or W1S postcode areas.",
  },
  {
    question: "Do you cover all streets in Mayfair?",
    answer: "Yes. We cover all streets and properties in Mayfair including Park Lane, Berkeley Square, Grosvenor Square, Bond Street, Brook Street, Mount Street, South Audley Street, Shepherd Market, and all surrounding streets.",
  },
  {
    question: "Do you work on period properties and listed buildings in Mayfair?",
    answer: "Yes. We have extensive experience working with the Georgian and Victorian architecture common in Mayfair. We are familiar with traditional lock types used in period properties and can advise on sympathetic security upgrades.",
  },
];

const reviews = [
  {
    name: "William B.",
    review: "Brilliant locksmith service in Mayfair. Locked out of my flat on Park Lane at 11pm. Locksmith arrived in 18 minutes, very professional and sorted the issue quickly. Highly recommended.",
    date: "May 2025",
    location: "Park Lane, Mayfair",
  },
  {
    name: "Charlotte D.",
    review: "Had my locks changed after getting new tenants in my Grosvenor Square property. Vigdis sent a technician the same day. Excellent service, great quality locks, fair price.",
    date: "April 2025",
    location: "Grosvenor Square, Mayfair",
  },
  {
    name: "Henry A.",
    review: "Used Vigdis for our Berkeley Square office — they upgraded all door locks to high-security cylinders. Professional team, minimal disruption, excellent outcome.",
    date: "March 2025",
    location: "Berkeley Square, Mayfair",
  },
];

export default function MayfairPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Service Areas", url: `${BUSINESS.url}/service-areas` },
    { name: "Mayfair", url: `${BUSINESS.url}/service-areas/mayfair` },
  ];

  return (
    <>
      <SchemaScript schema={mayfairSchema} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getFAQSchema(faqs)} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/service-areas" className="hover:text-white">Service Areas</Link>
            <span>/</span>
            <span className="text-white">Mayfair</span>
          </nav>
          <div className="flex items-start gap-3 mb-6">
            <MapPin className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
            <span className="text-red-400 font-medium">Mayfair, London W1</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Locksmith in Mayfair, London — 24/7 Emergency Service
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Vigdis Locksmith London provides fast, professional locksmith services throughout
              Mayfair. From Park Lane to Grosvenor Square, Berkeley Square to Shepherd Market —
              we are your local locksmith expert, available 24 hours a day.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Your Local Locksmith in Mayfair
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Mayfair is one of London&apos;s most prestigious and distinctive neighbourhoods,
              characterised by its grand Georgian townhouses, luxury apartments, world-class hotels,
              and high-end retail. As the local locksmith for Mayfair, Vigdis Locksmith London has
              deep familiarity with the area&apos;s unique architectural character and security needs.
            </p>
            <p>
              We regularly serve properties on <strong>Park Lane</strong>, the tree-lined boulevard
              bordering Hyde Park; <strong>Berkeley Square</strong>, known for its beautiful plane
              trees and garden square; <strong>Grosvenor Square</strong>, one of London&apos;s
              largest garden squares; and <strong>Shepherd Market</strong>, Mayfair&apos;s charming
              village-like enclave. We are also experienced with the lock types found in the
              prestigious properties along <strong>Mount Street</strong>,{" "}
              <strong>South Audley Street</strong>, and <strong>Brook Street</strong>.
            </p>
            <p>
              Our Mayfair locksmith service covers postcodes W1J, W1K, W1S, and adjoining areas.
              Whether you are a resident locked out of your flat, a business owner needing
              commercial security upgrades, or a property manager requiring master key systems
              for a Mayfair building, Vigdis Locksmith London is the expert you need.
            </p>
            <p>
              We understand that Mayfair properties often feature traditional period locks alongside
              modern high-security systems. Our technicians are trained to work with all lock
              types — from Victorian era Mortice locks to contemporary smart locks — without
              causing damage to period features or decorative doors.
            </p>
          </div>
        </div>
      </section>

      {/* Services in Mayfair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Locksmith Services Available in Mayfair
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BUSINESS.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group"
              >
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-red-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Response time */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-2xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Mayfair Response Time Guarantee</h2>
            <div className="text-6xl font-bold text-red-500 mb-3">15-30</div>
            <p className="text-gray-300 text-lg mb-6">minutes average response time in Mayfair</p>
            <p className="text-gray-400 text-sm max-w-lg mx-auto">
              Our locksmiths are based in and around Mayfair, allowing us to reach any property in
              the area within our guaranteed response window — 24 hours a day, 7 days a week.
            </p>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="mt-6 inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
            </div>
            <h2 className="text-3xl font-bold text-gray-900">What Mayfair Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name} name={r.name} review={r.review} date={r.date} location={r.location} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Mayfair Locksmith FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <NearbyAreaLinks currentArea="mayfair" />

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith in Mayfair?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

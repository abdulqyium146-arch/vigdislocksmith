import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, getSpeakableSchema, getWebPageSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "24 Hour Locksmith Mayfair | Always Open",
  description:
    "24-hour locksmith in Mayfair and Central London. We never close — midnight, Christmas Day, or any time you need us. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/services/24-hour-locksmith" },
};

const faqs = [
  {
    question: "Are you really available 24 hours a day?",
    answer:
      "Yes. Vigdis Locksmith London operates 24 hours a day, 365 days a year. There is always a locksmith available to take your call and be dispatched to your location.",
  },
  {
    question: "Is the 24-hour service more expensive at night?",
    answer:
      "We provide transparent, fixed pricing. We will always quote you a price before starting work so you can make an informed decision. Call us for a quote at any hour.",
  },
  {
    question: "What areas does your 24-hour service cover?",
    answer:
      "Our 24-hour locksmith service covers Mayfair, Westminster, Belgravia, Knightsbridge, Soho, Marylebone, Pimlico, Victoria, Paddington, Chelsea, Kensington, and all of Central London.",
  },
];

export default function TwentyFourHourPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "24 Hour Locksmith", url: `${BUSINESS.url}/services/24-hour-locksmith` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceSchema("24 Hour Locksmith Mayfair", "Round-the-clock locksmith service in Mayfair and Central London, available every hour of every day.", `${BUSINESS.url}/services/24-hour-locksmith`)} />
      <SchemaScript schema={getFAQSchema(faqs)} />
      <SchemaScript schema={getSpeakableSchema(`${BUSINESS.url}/services/24-hour-locksmith`)} />
      <SchemaScript schema={getWebPageSchema(`${BUSINESS.url}/services/24-hour-locksmith`, "24 Hour Locksmith Mayfair — Available Every Hour", "Round-the-clock locksmith in Mayfair, 365 days a year. No extra charge for nights or weekends. Call 020 3670 6551.")} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">24 Hour Locksmith</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              24 Hour Locksmith Mayfair — We Never Close
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Vigdis Locksmith London provides a genuine 24-hour locksmith service across Mayfair
              and Central London. Whether it's 3am on a Sunday or Christmas morning, we are always
              here to help.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS.phoneDisplay}
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Our 24-Hour Locksmith Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Emergency lockouts any time of day or night",
              "Lock repair and replacement at midnight",
              "Key cutting and duplication",
              "Burglary damage emergency repair",
              "Smart lock installations and troubleshooting",
              "Broken key extraction",
              "Lock upgrades and security assessments",
              "Commercial and residential lockouts",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">FAQs</h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Locksmith Right Now?</h2>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

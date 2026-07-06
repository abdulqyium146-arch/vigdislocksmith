import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import RelatedServices from "@/components/RelatedServices";
import LinkedAreaChips from "@/components/LinkedAreaChips";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, getSpeakableSchema, getWebPageSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Lock Repair Mayfair | Fast On-Site Lock Repair Service",
  description:
    "Professional lock repair in Mayfair and Central London. All lock types including Yale, Mortice, Euro Cylinder. Fast on-site repair. Call +44 7984 547185.",
  alternates: { canonical: "https://vigdis.shop/services/lock-repair" },
};

const faqs = [
  {
    question: "Can you repair my lock without replacing it?",
    answer:
      "In many cases, yes. Our technicians assess the lock and attempt repair first. Replacement is only recommended when repair is not economically viable or the lock is beyond repair.",
  },
  {
    question: "What types of locks can you repair?",
    answer:
      "We repair Yale, Mortice, Euro Cylinder, Deadbolt, Chubb, Ingersoll, and most other residential and commercial lock types. We carry spares for the most common brands.",
  },
  {
    question: "How long does a lock repair take?",
    answer:
      "Most lock repairs are completed within 30-60 minutes on-site. More complex repairs, or those requiring specialist parts, may take longer but we'll always give you an accurate estimate.",
  },
];

export default function LockRepairPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "Lock Repair", url: `${BUSINESS.url}/services/lock-repair` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceSchema("Lock Repair Mayfair", "Expert lock repair service in Mayfair and Central London. All lock types, fast on-site service.", `${BUSINESS.url}/services/lock-repair`)} />
      <SchemaScript schema={getFAQSchema(faqs)} />
      <SchemaScript schema={getSpeakableSchema(`${BUSINESS.url}/services/lock-repair`)} />
      <SchemaScript schema={getWebPageSchema(`${BUSINESS.url}/services/lock-repair`, "Lock Repair Mayfair — Expert On-Site Service", "Professional lock repair in Mayfair and Central London. All lock types including Yale, Mortice, Euro Cylinder. Fast on-site repair. Call +44 7984 547185.")} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">Lock Repair</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lock Repair in Mayfair — Expert On-Site Service
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Before you replace a faulty lock, let our expert locksmiths assess whether it can
              be repaired. In many cases we can fix your lock on-site, saving you time and money
              without compromising your security.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lock Repair Services We Provide</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Jammed or stiff lock mechanisms",
              "Lock that won't turn or catch",
              "Broken internal lock components",
              "Euro cylinder issues",
              "Mortice lock repairs",
              "Yale lock spring repairs",
              "Handle-operated deadlatch repairs",
              "Multipoint locking system faults",
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

      <LinkedAreaChips serviceName="Lock Repair" />
      <RelatedServices currentSlug="lock-repair" />

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Book a Lock Repair Today</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

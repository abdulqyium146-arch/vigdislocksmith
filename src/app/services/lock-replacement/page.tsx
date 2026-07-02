import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getServiceSchema, getFAQSchema, getSpeakableSchema, getWebPageSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Lock Replacement Mayfair | High-Security Locks Supplied & Fitted",
  description:
    "Professional lock replacement in Mayfair. BS3621 approved locks, high-security cylinders. Supplied and fitted by certified locksmiths. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/services/lock-replacement" },
};

const faqs = [
  {
    question: "What types of locks do you supply and fit?",
    answer: "We supply and fit a wide range of locks including British Standard BS3621 deadlocks, Euro cylinders, Yale nightlatches, Mortice deadbolts, high-security Mul-T-Lock and Abloy cylinders, and more.",
  },
  {
    question: "Do I need British Standard locks for my home insurance?",
    answer: "Many home insurance policies require BS3621 approved locks on external doors. We can advise on the correct specification for your property and fit insurance-compliant locks.",
  },
  {
    question: "How long does lock replacement take?",
    answer: "A standard lock replacement typically takes 30-60 minutes. More complex installations may take longer but we always provide an accurate time estimate before starting.",
  },
];

export default function LockReplacementPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "Lock Replacement", url: `${BUSINESS.url}/services/lock-replacement` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceSchema("Lock Replacement Mayfair", "Professional lock replacement service in Mayfair. BS3621 approved and high-security locks supplied and fitted.", `${BUSINESS.url}/services/lock-replacement`)} />
      <SchemaScript schema={getFAQSchema(faqs)} />
      <SchemaScript schema={getSpeakableSchema(`${BUSINESS.url}/services/lock-replacement`)} />
      <SchemaScript schema={getWebPageSchema(`${BUSINESS.url}/services/lock-replacement`, "Lock Replacement Mayfair — BS3621 & High-Security Locks", "Professional lock replacement in Mayfair. BS3621 approved and high-security locks supplied and fitted. Call 020 3670 6551.")} />

      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <span className="text-white">Lock Replacement</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Lock Replacement in Mayfair — Upgrade Your Security
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether your lock is worn out, has been compromised, or you simply want to upgrade to
              a higher-security model, Vigdis Locksmith London supplies and fits quality replacement
              locks for homes and businesses across Mayfair.
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Lock Replacement Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "British Standard BS3621 deadlocks",
              "High-security Euro cylinders",
              "Anti-snap, anti-bump cylinders",
              "Yale nightlatch replacement",
              "Mortice deadbolt upgrade",
              "Mul-T-Lock and Abloy cylinders",
              "uPVC door lock mechanisms",
              "Composite and timber door locks",
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
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Upgrade Your Locks?</h2>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

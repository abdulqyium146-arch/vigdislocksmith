import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Locksmith FAQ | Common Questions Answered",
  description:
    "Answers to common questions about locksmith services in Mayfair and Central London. Response times, pricing, lock types, and more.",
  alternates: { canonical: "https://vigdis.shop/faq" },
};

const allFaqs = [
  {
    category: "Emergency Services",
    questions: [
      { question: "How quickly can a locksmith arrive in Mayfair?", answer: "Our locksmiths typically arrive within 15-30 minutes anywhere in Mayfair and the surrounding Central London areas. We have multiple mobile units stationed across Westminster to ensure the fastest possible response time." },
      { question: "Do you offer 24-hour emergency locksmith services in Mayfair?", answer: "Yes. Vigdis Locksmith London operates 24 hours a day, 7 days a week, 365 days a year across Mayfair and Westminster. Whether it's 3am or Christmas Day, we're always available." },
      { question: "Are you available on bank holidays and Christmas?", answer: "Yes. We operate 365 days a year including all bank holidays, Christmas Day, New Year's Day, and Easter. Our emergency service never closes." },
      { question: "What counts as a locksmith emergency?", answer: "A locksmith emergency includes being locked out of your home, office, or vehicle; a broken key stuck in a lock; a lock that has been damaged or tampered with; or a security breach requiring immediate attention." },
      { question: "Can I book an emergency locksmith in advance?", answer: "For genuine emergencies, simply call us immediately. For planned work such as lock changes or key cutting, you can book an appointment by calling our number or using our contact form." },
    ],
  },
  {
    category: "Pricing & Fees",
    questions: [
      { question: "How much does an emergency locksmith cost in Mayfair?", answer: "Our emergency locksmith call-out prices are transparent and competitive. We provide a fixed quote before starting any work with no hidden fees. Pricing depends on the time of day and type of work required." },
      { question: "Do you charge a call-out fee?", answer: "No. Vigdis Locksmith London does not charge a call-out fee. The quote we give you on the phone is the price you pay for the agreed work." },
      { question: "Do you charge more at night or on weekends?", answer: "We provide transparent pricing at all times. Please call us for a specific quote as pricing can vary depending on the time and nature of the job." },
      { question: "Do you give written quotes?", answer: "Yes. We provide a clear quote before starting any work. For larger jobs, we can provide a written estimate. We never begin work without your explicit agreement on price." },
      { question: "What payment methods do you accept?", answer: "We accept cash, credit card, and debit card. Payment is taken on completion of the work." },
    ],
  },
  {
    category: "Qualifications & Trust",
    questions: [
      { question: "Are your locksmiths DBS checked and insured?", answer: "Yes. All Vigdis Locksmith technicians are DBS checked, fully insured, and trained to the highest industry standards. We carry public liability insurance and all work is fully guaranteed." },
      { question: "How long has Vigdis Locksmith London been operating?", answer: "Vigdis Locksmith London was established in 2009. We have over 15 years of experience providing locksmith services to residential and commercial customers across Mayfair and Central London." },
      { question: "Do you offer a guarantee on your work?", answer: "Yes. All our locksmith work is fully guaranteed. If you experience any issues with work we've carried out, we will return to rectify it at no extra charge." },
      { question: "Are you accredited or registered?", answer: "Yes. Our locksmiths hold relevant industry qualifications and training certifications. We operate to the highest standards of the locksmith profession in the UK." },
    ],
  },
  {
    category: "Lock Types & Services",
    questions: [
      { question: "Can you open any type of lock?", answer: "Our expert locksmiths can open virtually all lock types including Yale, Mortice, Deadbolt, Euro Cylinder, and high-security locks without causing damage. We use specialist non-destructive entry techniques wherever possible." },
      { question: "Can you repair a lock rather than replace it?", answer: "In many cases, yes. Our first approach is always to assess whether repair is possible. We recommend replacement only when repair is not viable or when a security upgrade is clearly beneficial." },
      { question: "Do you supply and fit new locks?", answer: "Yes. We supply and fit a wide range of locks including British Standard BS3621 deadlocks, Euro cylinders, Yale nightlatches, and high-security options from brands including Mul-T-Lock and Abloy." },
      { question: "Can you install smart locks?", answer: "Yes. We install a range of smart locks and access control systems including app-controlled locks, keypad entry, and Bluetooth-enabled models. We configure them fully and ensure they are working correctly before we leave." },
      { question: "Can you open a safe?", answer: "Yes. Our locksmiths have experience opening domestic and commercial safes. Please call us to discuss your specific situation and we'll advise on the best approach." },
      { question: "What areas do you cover near Mayfair?", answer: "We cover Mayfair, Westminster, Belgravia, Knightsbridge, Soho, Marylebone, Pimlico, Victoria, Paddington, Chelsea, Kensington, and all of Central London." },
    ],
  },
];

export default function FAQPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "FAQ", url: `${BUSINESS.url}/faq` },
  ];

  const flatFaqs = allFaqs.flatMap((cat) => cat.questions);

  return (
    <>
      <SchemaScript schema={getFAQSchema(flatFaqs)} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Locksmith FAQs — Mayfair &amp; Central London
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Answers to the most common questions about our locksmith services. Can&apos;t find what
            you&apos;re looking for? Call us on{" "}
            <a href={`tel:${BUSINESS.phone}`} className="text-red-400 font-semibold">
              {BUSINESS.phoneDisplay}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {allFaqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                {cat.category}
              </h2>
              <div className="space-y-3">
                {cat.questions.map((q) => (
                  <FAQItem key={q.question} question={q.question} answer={q.answer} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Browse by service */}
      <section className="py-14 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Our Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {BUSINESS.services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="flex items-center gap-2 bg-gray-50 hover:bg-red-50 border border-gray-200 hover:border-red-300 rounded-xl p-3 text-sm font-medium text-gray-700 hover:text-red-600 transition-all"
              >
                <span>{s.icon}</span>
                <span className="leading-tight">{s.name}</span>
              </Link>
            ))}
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Area</h2>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Mayfair", slug: "mayfair" },
              { name: "Westminster", slug: "westminster" },
              { name: "Belgravia", slug: "belgravia" },
              { name: "Knightsbridge", slug: "knightsbridge" },
              { name: "Chelsea", slug: "chelsea" },
              { name: "Kensington", slug: "kensington" },
              { name: "Soho", slug: "soho" },
              { name: "Marylebone", slug: "marylebone" },
              { name: "Victoria", slug: "victoria" },
              { name: "Paddington", slug: "paddington" },
            ].map(({ name, slug }) => (
              <Link
                key={slug}
                href={`/service-areas/${slug}`}
                className="bg-red-50 border border-red-200 text-red-700 hover:bg-red-600 hover:text-white hover:border-red-600 px-4 py-2 rounded-full text-sm font-medium transition-all"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 text-sm transition-colors">
              All service areas <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-red-100 text-lg mb-8">
            Our team is available 24/7 to answer your questions and help with any locksmith need.
          </p>
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

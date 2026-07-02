import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getFAQSchema, getBreadcrumbSchema, getServiceSchema, getHowToSchema, getSpeakableSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import ReviewCard from "@/components/ReviewCard";
import FAQItem from "@/components/FAQItem";

export const metadata: Metadata = {
  title: "Emergency Locksmith Mayfair | 24/7 Fast Response",
  description:
    "Locked out in Mayfair? Our emergency locksmiths arrive in 15-30 minutes, 24/7. No call-out fee. DBS checked technicians. Call 020 3670 6551 now.",
  alternates: { canonical: "https://vigdis.shop/services/emergency-locksmith" },
};

const faqs = [
  {
    question: "How fast can an emergency locksmith reach me in Mayfair?",
    answer:
      "Our emergency locksmiths are stationed across Mayfair and Westminster and typically arrive within 15-30 minutes of your call. Response times may vary slightly depending on traffic conditions.",
  },
  {
    question: "Is there a call-out fee for emergency locksmith services?",
    answer:
      "No. Vigdis Locksmith London does not charge a call-out fee. We provide a fixed, transparent quote when you call, and that is the price you pay — with no hidden extras.",
  },
  {
    question: "Can you open my lock without damaging it?",
    answer:
      "Yes. Our technicians use specialist non-destructive entry techniques for the vast majority of lock types. We always attempt to open the lock without damage first, only resorting to drilling as a last resort.",
  },
  {
    question: "Do you work on all types of locks?",
    answer:
      "Yes. We work on Yale, Mortice, Euro Cylinder, Deadbolt, Chubb, Ingersoll, Mul-T-Lock, and most other residential and commercial lock types.",
  },
  {
    question: "Are you available on Christmas Day and bank holidays?",
    answer:
      "Yes. Our emergency locksmith service operates 365 days a year, including Christmas Day, New Year's Day, and all bank holidays. We never close.",
  },
];

const reviews = [
  {
    name: "Alice M.",
    review:
      "Called at 2am after losing my keys near Shepherd Market. The locksmith arrived in 20 minutes, was incredibly professional, and had me inside within minutes. Outstanding service.",
    date: "April 2025",
    location: "Mayfair, London",
  },
  {
    name: "David K.",
    review:
      "Snapped key in the lock of my Belgravia flat. Vigdis sent someone immediately. They extracted the broken key and replaced the lock that same evening. Couldn't be happier.",
    date: "March 2025",
    location: "Belgravia, London",
  },
  {
    name: "Emma R.",
    review:
      "Brilliant emergency response. Locked out of my Westminster apartment on a Sunday. The locksmith came within 25 minutes and sorted everything without any fuss. Highly recommend.",
    date: "February 2025",
    location: "Westminster, London",
  },
];

const steps = [
  {
    step: "1",
    title: "Call Us",
    desc: "Call 020 3670 6551. Our team will take your details and confirm a fixed price quote on the phone.",
  },
  {
    step: "2",
    title: "We Dispatch",
    desc: "The nearest available locksmith is dispatched immediately to your location in Mayfair or Central London.",
  },
  {
    step: "3",
    title: "We Arrive",
    desc: "Your locksmith arrives within 15-30 minutes with all the equipment needed to resolve your situation.",
  },
];

export default function EmergencyLocksmithPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
    { name: "Emergency Locksmith", url: `${BUSINESS.url}/services/emergency-locksmith` },
  ];

  const serviceSchema = getServiceSchema(
    "Emergency Locksmith Mayfair",
    "24/7 emergency locksmith service in Mayfair and Central London. Fast 15-30 minute response, no call-out fee, DBS checked technicians.",
    `${BUSINESS.url}/services/emergency-locksmith`
  );

  return (
    <>
      <SchemaScript schema={serviceSchema} />
      <SchemaScript schema={getFAQSchema(faqs)} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getHowToSchema(
        "How to Get Emergency Locksmith Help in Mayfair",
        "Step-by-step guide to getting emergency locksmith assistance in Mayfair and Central London from Vigdis Locksmith London.",
        [
          { name: "Call Vigdis Locksmith London", text: "Call +44 20 3670 6551 immediately. Our team answers 24/7. Tell us your location and the nature of the problem. We will give you a fixed price quote on the phone." },
          { name: "Confirm Your Location", text: "Give us your exact address in Mayfair or Central London. Stay by your property if it is safe to do so. We will confirm your postcode and dispatch the nearest available locksmith." },
          { name: "Locksmith Dispatched", text: "The nearest Vigdis locksmith is dispatched immediately to your location. Average arrival time in Mayfair is 15-30 minutes." },
          { name: "Locksmith Arrives and Assesses", text: "Your locksmith arrives, shows ID, and assesses the situation. They will confirm the agreed price before starting any work." },
          { name: "Lock Opened or Repaired", text: "Using non-destructive entry techniques, the locksmith opens your lock without damage. If the lock needs replacing, new lock options are provided at a transparent price." },
          { name: "Payment on Completion", text: "Pay the agreed fixed price on completion by cash, credit card, or debit card. All work is guaranteed." },
        ],
        "PT30M"
      )} />
      <SchemaScript schema={getSpeakableSchema(`${BUSINESS.url}/services/emergency-locksmith`)} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Emergency Locksmith</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">On Call Right Now</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Emergency Locksmith Mayfair — 24/7 Fast Response
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Locked out of your home, office, or vehicle in Mayfair or Central London? Vigdis
              Locksmith London dispatches an emergency locksmith to your location within 15-30
              minutes, any time of day or night.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-6">
              {[
                { icon: Clock, text: "15-30 Min Response" },
                { icon: Shield, text: "No Call-Out Fee" },
                { icon: CheckCircle, text: "DBS Checked" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-gray-300">
                  <Icon className="w-4 h-4 text-red-400" />
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What Our Emergency Locksmith Service Covers
              </h2>
              <div className="space-y-4">
                {[
                  "Residential lockouts — locked out of your flat or house",
                  "Commercial lockouts — locked out of your office or business",
                  "Broken key extraction — key snapped inside the lock",
                  "Lock failures — lock jammed, frozen, or broken",
                  "Burglary damage repair — emergency security after a break-in",
                  "Lost keys — immediate re-keying or lock replacement",
                  "Door won't close or lock properly",
                  "Smart lock failures and battery replacement",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Response Time Guarantee</h3>
              <div className="text-5xl font-bold text-red-600 mb-2">15-30</div>
              <p className="text-gray-600 mb-6">
                minute average response time anywhere in Mayfair, Westminster, and Central London.
              </p>
              <div className="space-y-3">
                {[
                  "Available 24 hours, 7 days a week",
                  "No extra charge for nights or weekends",
                  "Fixed price quoted on the phone",
                  "No call-out fee",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="w-2 h-2 bg-red-600 rounded-full flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="mt-6 flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors w-full"
              >
                <Phone className="w-4 h-4" />
                {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            How Our Emergency Service Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-14 h-14 bg-red-600 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Locksmith Coverage Area
          </h2>
          <p className="text-gray-600 mb-8">
            Our emergency locksmith service covers Mayfair and all surrounding Central London
            areas. We reach every postcode in our coverage zone within our guaranteed 15-30
            minute window.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS.serviceAreas.map((area) => (
              <span
                key={area}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            What Our Emergency Customers Say
          </h2>
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
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Emergency Locksmith FAQs
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Locked Out Right Now? Call Us Immediately
          </h2>
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

import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Clock, Shield, Star, Zap, Users, CheckCircle, MapPin, ArrowRight } from "lucide-react";
import { BUSINESS, REVIEWS } from "@/lib/business";
import {
  getFAQSchema,
  getBreadcrumbSchema,
  getServiceItemListSchema,
  getSpeakableSchema,
  getDefinedTermSetSchema,
  getAggregateOfferSchema,
  getOrganizationSchema,
  getReviewSchema,
  getFounderSchema,
} from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import ReviewCard from "@/components/ReviewCard";
import ServiceCard from "@/components/ServiceCard";
import FAQItem from "@/components/FAQItem";
import TrustBadges from "@/components/TrustBadges";

export const metadata: Metadata = {
  title: "Locksmith Mayfair | Vigdis Locksmith London | 24/7 Emergency",
  description:
    "Locksmith Mayfair — 24/7 emergency service. Locked out? We arrive in 15 minutes across W1J, W1K & W1S. Lock repair, replacement & key cutting. ★★★★★ 5.0, 247 reviews. No call-out fee.",
  alternates: { canonical: "https://vigdis.shop" },
};

const faqs = [
  {
    question: "How quickly can a locksmith arrive in Mayfair?",
    answer:
      "Our locksmiths typically arrive within 15-30 minutes anywhere in Mayfair and the surrounding Central London areas. We have multiple mobile units stationed across Westminster to ensure the fastest possible response time.",
  },
  {
    question: "Do you offer 24-hour emergency locksmith services in Mayfair?",
    answer:
      "Yes. Vigdis Locksmith London operates 24 hours a day, 7 days a week, 365 days a year across Mayfair and Westminster. Whether it's 3am or Christmas Day, we're always available.",
  },
  {
    question: "How much does an emergency locksmith cost in Mayfair?",
    answer:
      "Our emergency locksmith call-out prices are transparent and competitive. We provide a fixed quote before starting any work with no hidden fees. Pricing depends on the time of day and type of work required.",
  },
  {
    question: "Are your locksmiths DBS checked and insured?",
    answer:
      "Yes. All Vigdis Locksmith technicians are DBS checked, fully insured, and trained to the highest industry standards. We carry public liability insurance and all work is fully guaranteed.",
  },
  {
    question: "What areas do you cover near Mayfair?",
    answer:
      "We cover Mayfair, Westminster, Belgravia, Knightsbridge, Soho, Marylebone, Pimlico, Victoria, Paddington, Chelsea, Kensington, and all of Central London.",
  },
  {
    question: "Can you open any type of lock?",
    answer:
      "Our expert locksmiths can open virtually all lock types including Yale, Mortice, Deadbolt, Euro Cylinder, and high-security locks without causing damage. We use specialist non-destructive entry techniques wherever possible.",
  },
  {
    question: "Which postcodes in Mayfair does your locksmith service cover?",
    answer:
      "We cover all Mayfair postcodes — W1J (Piccadilly and Green Park area), W1K (Grosvenor Square and Park Lane), and W1S (Bond Street and Oxford Street side). We also serve the adjacent Westminster postcodes SW1A and SW1X. There is no call-out charge across any Mayfair postcode.",
  },
  {
    question: "Is there a call-out fee for a locksmith in Mayfair?",
    answer:
      "No. Vigdis Locksmith London charges no call-out fee for any job in Mayfair or Central London. We provide a free, fixed-price quote before starting work — you always know exactly what you will pay before we pick up a tool.",
  },
];

// Derived from canonical REVIEWS in business.ts — keeps UI + schema in sync
const reviews = REVIEWS.slice(0, 3).map((r) => ({
  name: r.author,
  review: r.reviewBody,
  date: new Date(r.datePublished).toLocaleDateString("en-GB", { month: "long", year: "numeric" }),
  location: r.locationName,
}));

const serviceDescriptions: Record<string, string> = {
  "emergency-locksmith":
    "Locked out? Our emergency locksmiths arrive in 15-30 minutes across Mayfair and Central London, 24 hours a day.",
  "24-hour-locksmith":
    "We never close. Day or night, our 24-hour locksmith service is always ready to help you across all of Central London.",
  "lock-repair":
    "Expert repair of all lock types including Yale, Mortice, Euro Cylinder, and high-security locks. Fast, professional service.",
  "lock-replacement":
    "Full lock replacement service with a wide range of high-security options including British Standard BS3621 approved locks.",
  "key-cutting":
    "Professional key cutting for all key types including Chubb, Yale, Mortice and security keys. Fast turnaround available.",
  "residential-locksmith":
    "Comprehensive home locksmith services covering lock changes, upgrades, burglary repair, and security assessments.",
  "commercial-locksmith":
    "Specialist commercial locksmith solutions for offices, retail premises, and multi-unit buildings across Central London.",
  "smart-lock-installation":
    "Installation of the latest smart locks and access control systems from leading brands. Future-proof your security.",
};

const features = [
  {
    icon: Zap,
    title: "15-30 Min Response",
    desc: "Our mobile units are stationed across Mayfair and Westminster for the fastest possible arrival times.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "We operate every hour of every day, including bank holidays and Christmas. Emergencies don't keep office hours.",
  },
  {
    icon: Shield,
    title: "Certified Experts",
    desc: "All technicians are DBS checked, fully insured, and trained to industry-leading standards.",
  },
  {
    icon: CheckCircle,
    title: "No Hidden Fees",
    desc: "We provide a clear, fixed quote before starting work. The price we quote is the price you pay.",
  },
  {
    icon: Star,
    title: "Guaranteed Work",
    desc: "All our locksmith work is fully guaranteed. If you're not satisfied, we'll make it right.",
  },
  {
    icon: Users,
    title: "Local Knowledge",
    desc: "Based in Mayfair since 2009, we know every street, building type, and lock in the area.",
  },
];

export default function HomePage() {
  const breadcrumbs = [{ name: "Home", url: BUSINESS.url }];

  return (
    <>
      <SchemaScript schema={getFAQSchema(faqs)} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getServiceItemListSchema()} />
      <SchemaScript schema={getSpeakableSchema(BUSINESS.url)} />
      <SchemaScript schema={getDefinedTermSetSchema()} />
      <SchemaScript schema={getAggregateOfferSchema()} />
      <SchemaScript schema={getOrganizationSchema()} />
      <SchemaScript schema={getReviewSchema([...REVIEWS])} />
      <SchemaScript schema={getFounderSchema()} />

      {/* HERO */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25px 25px, white 2px, transparent 0), radial-gradient(circle at 75px 75px, white 2px, transparent 0)",
            backgroundSize: "100px 100px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-500/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-red-400 text-sm font-medium">
                Available Now — 24/7 Emergency Service
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Emergency Locksmith Mayfair{" "}
              <span className="text-red-500">— Available 24/7</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Vigdis Locksmith London serves Mayfair, Westminster &amp; Central London. Fast
              15-30 minute response, guaranteed satisfaction, and transparent pricing — no
              call-out fees.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={`tel:${BUSINESS.phone}`} className="btn-emergency">
                <Phone className="w-5 h-5" />
                Call Now: {BUSINESS.phoneDisplay}
              </a>
              <Link href="/contact" className="btn-secondary">
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <TrustBadges dark />

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/10">
              {[
                { value: "15 Min", label: "Avg Response" },
                { value: "5.0★", label: "Google Rating" },
                { value: "247", label: "5★ Reviews" },
                { value: "Since 2009", label: "Established" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Mayfair&apos;s Most Trusted Locksmith Service</h2>
            <p className="section-subheading">
              Vigdis Locksmith London has been the go-to locksmith for Mayfair residents and
              businesses since 2009. Here&apos;s why thousands of customers trust us.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Professional Locksmith Services in Mayfair</h2>
            <p className="section-subheading">
              From emergency lockouts to smart lock installations, we offer a complete range of
              locksmith services across Mayfair and Central London.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {BUSINESS.services.map((service) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                name={service.name}
                description={
                  serviceDescriptions[service.slug] ??
                  "Professional locksmith service available 24/7 across Mayfair and Central London."
                }
                slug={service.slug}
              />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* EMERGENCY BANNER */}
      <section className="bg-red-600 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-100 text-sm font-medium uppercase tracking-widest mb-3">
            Emergency Locksmith Mayfair
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Locked Out? Call Now — We&apos;re 15 Minutes Away
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Our emergency locksmith team is on call 24/7 across Mayfair and Central London.
            Don&apos;t wait — we&apos;ll be there fast.
          </p>
          <a
            href={`tel:${BUSINESS.phone}`}
            className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all duration-200"
          >
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>

      {/* MAYFAIR GEO COVERAGE — postcode + street signals for "locksmith mayfair" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Locksmith Mayfair — Covering Every Postcode in W1
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Vigdis Locksmith London is based in the heart of Mayfair and covers every street
                and postcode in the W1 district. Our mobile locksmith units serve{" "}
                <strong>W1J</strong> (Piccadilly, Green Park, St James&apos;s),{" "}
                <strong>W1K</strong> (Grosvenor Square, Park Lane, North Row), and{" "}
                <strong>W1S</strong> (Bond Street, Brook Street, Maddox Street) — with an average
                response time of <strong>15 minutes</strong> to any address.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We respond to locksmith calls on every major Mayfair street:{" "}
                <strong>Berkeley Square</strong>, <strong>Grosvenor Square</strong>,{" "}
                <strong>Park Lane</strong>, <strong>Bond Street</strong>,{" "}
                <strong>Brook Street</strong>, <strong>Curzon Street</strong>,{" "}
                <strong>Hill Street</strong>, <strong>Mount Street</strong>,{" "}
                <strong>South Audley Street</strong>, <strong>Hay Hill</strong>, and{" "}
                <strong>Shepherd Market</strong>. Residential townhouses, luxury apartment blocks,
                hotels, and commercial premises — we cover them all.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                There is <strong>no call-out charge</strong> for any Mayfair address. We give you
                a fixed price over the phone before we arrive — no surprises, no hidden fees.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/service-areas/mayfair"
                  className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Locksmith Mayfair — Full Coverage
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="inline-flex items-center gap-2 border border-red-600 text-red-600 hover:bg-red-50 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Mayfair Postcodes We Serve
                </h3>
                <ul className="space-y-2">
                  {[
                    "W1J — Piccadilly / Green Park",
                    "W1K — Grosvenor Sq / Park Lane",
                    "W1S — Bond Street / Brook St",
                    "SW1A — St James's / Westminster",
                    "SW1X — Belgravia / Knightsbridge",
                  ].map((pc) => (
                    <li key={pc} className="flex items-center gap-2 text-sm text-gray-700">
                      <MapPin className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                      {pc}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
                  Our Mayfair Promise
                </h3>
                <ul className="space-y-2">
                  {[
                    "15-minute average response",
                    "24/7 — including bank holidays",
                    "No call-out charge in W1",
                    "Fixed price before we start",
                    "DBS checked technicians",
                    "All work fully guaranteed",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-red-50 rounded-xl p-5 border border-red-100 sm:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2 text-sm uppercase tracking-wide">
                  Mayfair Locksmith — Fast Facts
                </h3>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {[
                    { label: "Response time", value: "15 min avg." },
                    { label: "Operating hours", value: "24/7/365" },
                    { label: "Google rating", value: "5.0 ★ (247 reviews)" },
                    { label: "Established", value: "Since 2009" },
                    { label: "Call-out fee", value: "None" },
                    { label: "Quote", value: "Free & fixed upfront" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between items-center py-1 border-b border-red-100 last:border-0">
                      <span className="text-xs text-gray-600">{item.label}</span>
                      <span className="text-xs font-semibold text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Locksmith Mayfair &amp; All of Central London</h2>
            <p className="section-subheading">
              Based in Mayfair, Vigdis Locksmith London provides fast 24/7 locksmith services
              across all major areas of Central London. No call-out charge anywhere in our service area.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {BUSINESS.serviceAreas.map((area) => {
              const slug = area.toLowerCase().replace(/\s+/g, "-");
              const linked = [
                "mayfair","westminster","belgravia","knightsbridge","soho",
                "marylebone","victoria","paddington","chelsea","kensington",
              ].includes(slug);
              const card = (
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <span className="font-medium text-gray-900 text-sm group-hover:text-red-600 transition-colors">
                    {area}
                  </span>
                </div>
              );
              const mayfairCard = slug === "mayfair" ? (
                <div className="flex items-center gap-3 bg-red-50 rounded-xl p-4 border-2 border-red-400 shadow-sm group">
                  <MapPin className="w-4 h-4 text-red-600 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <span className="font-bold text-red-700 text-sm">{area}</span>
                    <span className="block text-xs text-red-500">Our base — W1J · W1K · W1S</span>
                  </div>
                </div>
              ) : card;

              return linked ? (
                <Link key={area} href={`/service-areas/${slug}`}>
                  {slug === "mayfair" ? mayfairCard : card}
                </Link>
              ) : (
                <div key={area}>{card}</div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View all service areas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <h2 className="section-heading">
              5.0 — {BUSINESS.reviewCount} Google Reviews
            </h2>
            <p className="section-subheading">
              Don&apos;t just take our word for it. Here&apos;s what our customers in Mayfair and
              Central London say about us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {reviews.map((r) => (
              <ReviewCard
                key={r.name}
                name={r.name}
                review={r.review}
                date={r.date}
                location={r.location}
              />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Read all {BUSINESS.reviewCount} reviews
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Frequently Asked Questions</h2>
            <p className="section-subheading">
              Everything you need to know about our locksmith services in Mayfair and Central London.
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              View all FAQs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT / GEO ENTITY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map column */}
            <div className="order-last lg:order-first">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm w-full h-[420px] sticky top-28">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.3781197921217!2d-0.14248922414482484!3d51.506278610786225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760578b7015dbf%3A0x3e49f5bced8f730!2sVigdis%20Locksmith%20London!5e0!3m2!1sen!2s!4v1783348745961!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Vigdis Locksmith London on Google Maps"
                />
              </div>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${BUSINESS.geo.lat},${BUSINESS.geo.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm text-red-600 font-semibold hover:text-red-700 transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get directions to {BUSINESS.address.full}
              </a>
            </div>
            {/* Text column */}
            <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            About Vigdis Locksmith London
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              <strong>Vigdis Locksmith London</strong> is a professional locksmith company based
              at 10-11 Park Place, Mayfair, London SW1A 1LP. Established in 2009, we have provided
              emergency locksmith services, lock repair, lock replacement, and key cutting to
              thousands of residential and commercial customers across Mayfair, Westminster, and
              Central London.
            </p>
            <p>
              Our service area covers the most prestigious postcodes in London. In Mayfair alone
              we cover <strong>W1J</strong>, <strong>W1K</strong>, and <strong>W1S</strong> —
              from Park Lane in the west to Bond Street in the east. Across the wider area we serve
              Westminster (SW1A), Belgravia (SW1X), Knightsbridge (SW1X), Kensington (W8), Chelsea
              (SW3), and Marylebone (W1U). We know the distinct architectural character of Mayfair
              — from Georgian townhouses on{" "}
              <strong>Berkeley Square</strong> and <strong>Grosvenor Square</strong> to modern
              residential developments near <strong>Park Lane</strong> and luxury hotel properties
              around <strong>Shepherd Market</strong>.
            </p>
            <p>
              Our certified locksmith technicians are DBS checked and carry full public liability
              insurance. We are trained to work with all major lock manufacturers including Yale,
              Chubb, Mul-T-Lock, Abloy, and ERA. Our emergency response team operates 24 hours a
              day, 7 days a week, 365 days a year, with an average response time of 15 to 30
              minutes anywhere in our service area.
            </p>
            <p>
              Vigdis Locksmith London holds a{" "}
              <strong>5.0-star Google rating based on {BUSINESS.reviewCount} customer reviews</strong>,
              reflecting our commitment to quality workmanship, fair pricing, and outstanding
              customer service. We provide transparent, fixed-price quotes before beginning any
              work, with no hidden charges and no call-out fees.
            </p>
            <p>
              Whether you are locked out of your home near <strong>Oxford Street</strong>, need a
              commercial lock upgrade on <strong>Bond Street</strong>, or require a smart lock
              installation in a Belgravia mansion, Vigdis Locksmith London is the local expert you
              can trust. Call us on{" "}
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-red-600 font-semibold hover:underline"
              >
                {BUSINESS.phoneDisplay}
              </a>{" "}
              for immediate assistance.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Learn more about us <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
            >
              Contact us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
            </div>{/* end text column */}
          </div>{/* end grid */}
        </div>
      </section>
    </>
  );
}

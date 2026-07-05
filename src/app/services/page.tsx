import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getCollectionPageSchema, getServiceItemListSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Services Mayfair | All Services",
  description:
    "Full range of professional locksmith services in Mayfair and Central London. Emergency lockouts, lock repair, lock replacement, key cutting, smart locks and more. Available 24/7.",
  alternates: { canonical: "https://vigdis.shop/services" },
};

const serviceDetails = [
  {
    slug: "emergency-locksmith",
    name: "Emergency Locksmith",
    icon: "🚨",
    description:
      "Locked out of your home or office? Our emergency locksmiths arrive within 15-30 minutes across Mayfair and Central London. Available 24 hours a day, 7 days a week, including bank holidays.",
    features: ["15-30 minute response", "24/7 availability", "Non-destructive entry", "All lock types"],
  },
  {
    slug: "24-hour-locksmith",
    name: "24 Hour Locksmith",
    icon: "🕐",
    description:
      "Our 24-hour locksmith service means you're never stranded. Day or night, midnight or dawn, our team is always on standby to assist you anywhere in Central London.",
    features: ["Around-the-clock service", "Night-time call-outs", "Holiday cover", "Fast response"],
  },
  {
    slug: "lock-repair",
    name: "Lock Repair",
    icon: "🔧",
    description:
      "Don't replace when you can repair. Our skilled technicians diagnose and fix faulty locks on-site, saving you money without compromising security. We work with all major lock brands.",
    features: ["On-site repair", "All lock types", "Cost-effective", "Genuine parts"],
  },
  {
    slug: "lock-replacement",
    name: "Lock Replacement",
    icon: "🔒",
    description:
      "Upgrade your home or business security with our professional lock replacement service. We supply and fit a wide range of high-security locks including British Standard BS3621 models.",
    features: ["BS3621 approved locks", "High-security options", "All budgets", "Guaranteed fitting"],
  },
  {
    slug: "key-cutting",
    name: "Key Cutting",
    icon: "🗝️",
    description:
      "Fast, accurate key cutting for all key types. Whether you need a spare key for your Yale lock or a copy of a specialist security key, our technicians deliver precision cuts every time.",
    features: ["All key types", "Security keys", "Fast turnaround", "Accurate cutting"],
  },
  {
    slug: "residential-locksmith",
    name: "Residential Locksmith",
    icon: "🏠",
    description:
      "Comprehensive locksmith services for homes, flats, and residential buildings. From lock upgrades to post-burglary repairs and security surveys, we keep your home safe.",
    features: ["Home lockouts", "Lock upgrades", "Security surveys", "Post-burglary repair"],
  },
  {
    slug: "commercial-locksmith",
    name: "Commercial Locksmith",
    icon: "🏢",
    description:
      "Specialist locksmith solutions for offices, retail units, restaurants, hotels, and commercial buildings. We understand the unique security demands of Mayfair businesses.",
    features: ["Office lockouts", "Access control", "Master key systems", "Security upgrades"],
  },
  {
    slug: "smart-lock-installation",
    name: "Smart Lock Installation",
    icon: "📱",
    description:
      "Future-proof your security with smart lock technology. We install and configure smart locks, keypad entry systems, and Bluetooth-enabled locks from leading brands.",
    features: ["Smart lock brands", "App-controlled", "Keypad entry", "Professional setup"],
  },
];

export default function ServicesPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Services", url: `${BUSINESS.url}/services` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getCollectionPageSchema("Locksmith Services Mayfair", "Full range of professional locksmith services in Mayfair and Central London. Emergency lockouts, lock repair, replacement & key cutting. Available 24/7.", `${BUSINESS.url}/services`, serviceDetails.map(s => ({ name: s.name, url: `${BUSINESS.url}/services/${s.slug}` })))} />
      <SchemaScript schema={getServiceItemListSchema()} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Services</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Locksmith Services in Mayfair
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Professional, fast, and reliable locksmith services across Mayfair, Westminster,
            and all of Central London. Available 24/7, 365 days a year.
          </p>
          <div className="mt-8">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceDetails.map((service) => (
              <div
                key={service.slug}
                className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{service.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-1.5 h-1.5 bg-red-600 rounded-full flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Locksmith in Mayfair Right Now?
          </h2>
          <p className="text-red-100 text-lg mb-8">
            Call us and a locksmith will be with you within 15-30 minutes.
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

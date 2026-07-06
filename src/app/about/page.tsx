import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Award, Clock, Users, CheckCircle, ArrowRight, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema, getAboutPageSchema, getFounderSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "About Vigdis Locksmith London | Est. 2009 | Mayfair's Most Trusted",
  description:
    `Meet the team behind Vigdis Locksmith London. Founded by ${BUSINESS.founder} in 2009. DBS checked, City & Guilds qualified, fully insured. 5★ rated with ${BUSINESS.reviewCount} Google reviews.`,
  alternates: { canonical: "https://vigdis.shop/about" },
};

const values = [
  { icon: Shield, title: "Integrity", desc: "We never upsell unnecessarily or replace locks that can be repaired. Honest advice, always." },
  { icon: Clock, title: "Reliability", desc: "When we say 15-30 minutes, we mean it. We respect your time and your emergency." },
  { icon: Award, title: "Quality", desc: "We use quality parts, follow best practices, and stand behind every job we complete." },
  { icon: Users, title: "Community", desc: "We are part of the Mayfair community. Our reputation is built one customer at a time." },
];

const trustBadges = [
  { label: "DBS Checked", sublabel: "All technicians vetted", color: "blue" },
  { label: "City & Guilds L3", sublabel: "Qualified locksmiths", color: "green" },
  { label: "£2M Insured", sublabel: "Public liability cover", color: "purple" },
  { label: "BS3621 Experts", sublabel: "British Standard locks", color: "orange" },
  { label: "MLA Aligned", sublabel: "Industry best practices", color: "red" },
  { label: "NDE Certified", sublabel: "Non-destructive entry", color: "slate" },
];

const colorMap: Record<string, string> = {
  blue:   "bg-blue-50   border-blue-200   text-blue-700",
  green:  "bg-green-50  border-green-200  text-green-700",
  purple: "bg-purple-50 border-purple-200 text-purple-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  red:    "bg-red-50    border-red-200    text-red-700",
  slate:  "bg-slate-50  border-slate-200  text-slate-700",
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "About", url: `${BUSINESS.url}/about` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />
      <SchemaScript schema={getAboutPageSchema()} />
      <SchemaScript schema={getFounderSchema()} />

      {/* Hero */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Vigdis Locksmith London
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Founded by <strong className="text-white">{BUSINESS.founder}</strong> in {BUSINESS.established}.
            Mayfair&apos;s most trusted locksmith — {BUSINESS.yearsExperience}+ years of expert service across Central London.
          </p>
        </div>
      </section>

      {/* Trust Credential Badges */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5 text-center">
            Verified credentials &amp; accreditations
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className={`flex flex-col items-center px-5 py-3 rounded-xl border text-center ${colorMap[badge.color]}`}
              >
                <CheckCircle className="w-4 h-4 mb-1 opacity-80" />
                <span className="font-bold text-sm leading-tight">{badge.label}</span>
                <span className="text-xs opacity-70 mt-0.5">{badge.sublabel}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Meet the Founder</h2>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            {/* Avatar placeholder */}
            <div
              className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-slate-800 flex-shrink-0 flex items-center justify-center text-white text-4xl font-bold select-none"
              aria-label={`${BUSINESS.founder} — ${BUSINESS.founderTitle}`}
            >
              {BUSINESS.founder.split(" ").map((n) => n[0]).join("")}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{BUSINESS.founder}</h3>
              <p className="text-red-600 font-medium text-sm mb-4">{BUSINESS.founderTitle} · Est. {BUSINESS.established}</p>
              <p className="text-gray-700 leading-relaxed">{BUSINESS.founderBio}</p>
              <div className="mt-4 flex items-center gap-2">
                {[1,2,3,4,5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1">
                  {BUSINESS.reviewCount} verified Google reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Vigdis Locksmith London was founded in {BUSINESS.established} with a simple mission: to provide the
              Mayfair community and broader Central London with a fast, reliable, and honest
              locksmith service. We started as a small operation based in Mayfair and have grown
              steadily over {BUSINESS.yearsExperience} years into one of the most trusted locksmith companies in London.
            </p>
            <p>
              Our business was built on a foundation of trust. In an industry that has historically
              suffered from rogue traders and price-gouging, we set out to be different — transparent,
              fixed pricing before starting any work, honest assessments rather than always recommending
              the most expensive solution, and a full guarantee on every job.
            </p>
            <p>
              Today, Vigdis Locksmith London holds a perfect 5.0-star Google rating based on{" "}
              {BUSINESS.reviewCount} verified customer reviews. Every review represents a customer
              we helped in their moment of need — whether at 3am, on Christmas morning, or in the
              stressful aftermath of a burglary.
            </p>
            <p>
              We serve all of Central London from our Mayfair base at{" "}
              <strong>{BUSINESS.address.full}</strong>. Our service area covers postcodes{" "}
              {BUSINESS.postcodes.join(", ")} and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: String(BUSINESS.established), label: "Year Established" },
              { value: `${BUSINESS.yearsExperience}+`, label: "Years of Experience" },
              { value: `${BUSINESS.reviewCount}+`, label: "Five-Star Reviews" },
              { value: BUSINESS.availability, label: "Always Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications &amp; Standards</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every Vigdis Locksmith London technician is carefully selected, thoroughly trained,
            and vetted before joining our team. Expertise matters — especially when someone calls at 2am.
          </p>
          <div className="space-y-3 mb-10">
            {BUSINESS.credentials.map((cert) => (
              <div key={cert} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-200">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Local Knowledge</h3>
          <p className="text-gray-700 leading-relaxed">
            Based in Mayfair since our founding, we have developed an intimate knowledge of the
            area&apos;s unique character — from Georgian townhouses on{" "}
            <strong>Berkeley Square</strong> and <strong>Grosvenor Square</strong>, to Belgravia&apos;s
            stucco-fronted terraces, to the modern developments of Paddington and Westminster.
            This local expertise lets us work faster and smarter than locksmiths unfamiliar with the area.
          </p>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Our 100% Satisfaction Guarantee</h2>
              <p className="text-gray-700 leading-relaxed">{BUSINESS.guarantee}</p>
              <p className="text-gray-700 leading-relaxed mt-2">{BUSINESS.insurance}</p>
              <p className="text-sm text-gray-500 mt-3">
                All work is guaranteed in writing. If any issue arises with our workmanship, we return
                to rectify it at no additional cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="text-center">
                  <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Work With London&apos;s Most Trusted Locksmith
          </h2>
          <p className="text-red-100 mb-8 max-w-xl mx-auto">
            {BUSINESS.yearsExperience}+ years. {BUSINESS.reviewCount}+ five-star reviews. Always available.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={`tel:${BUSINESS.phone}`}
              className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all"
            >
              <Phone className="w-6 h-6" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-xl py-4 px-8 rounded-xl transition-all"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

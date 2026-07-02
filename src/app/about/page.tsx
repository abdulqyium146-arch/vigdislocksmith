import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Shield, Award, Clock, Users, CheckCircle, ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "About Vigdis Locksmith London | Established 2009",
  description:
    "Learn about Vigdis Locksmith London — Mayfair's most trusted locksmith since 2009. DBS checked, fully insured, 5★ rated with 247 reviews.",
  alternates: { canonical: "https://vigdislocksmith.co.uk/about" },
};

const certifications = [
  "DBS (Disclosure and Barring Service) checked technicians",
  "Full public liability insurance",
  "Industry-standard locksmith training certifications",
  "Knowledge of BS3621 British Standard lock specifications",
  "MLA (Master Locksmiths Association) aligned practices",
  "Non-destructive entry training",
];

const values = [
  { icon: Shield, title: "Integrity", desc: "We never upsell unnecessarily or replace locks that can be repaired. Honest advice, always." },
  { icon: Clock, title: "Reliability", desc: "When we say 15-30 minutes, we mean it. We respect your time and your emergency." },
  { icon: Award, title: "Quality", desc: "We use quality parts, follow best practices, and stand behind every job we complete." },
  { icon: Users, title: "Community", desc: "We are part of the Mayfair community. Our reputation is built one customer at a time." },
];

export default function AboutPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "About", url: `${BUSINESS.url}/about` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

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
            Mayfair&apos;s most trusted locksmith since 2009. Over 15 years of expert service across
            Central London.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              Vigdis Locksmith London was founded in 2009 with a simple mission: to provide the
              Mayfair community and broader Central London with a fast, reliable, and honest
              locksmith service. We started as a small operation based in Mayfair and have grown
              steadily over 15 years into one of the most trusted locksmith companies in London.
            </p>
            <p>
              Our business was built on a foundation of trust. In an industry that has historically
              suffered from rogue traders and price-gouging, we set out to be different — to give
              customers transparent, fixed pricing before starting any work, to carry out honest
              assessments rather than always recommending the most expensive solution, and to stand
              behind our work with a full guarantee.
            </p>
            <p>
              Today, Vigdis Locksmith London holds a perfect 5.0-star Google rating based on{" "}
              {BUSINESS.reviewCount} verified customer reviews. Every review represents a customer
              we helped in their moment of need — whether at 3am, on Christmas morning, or in the
              stressful aftermath of a burglary.
            </p>
            <p>
              We serve all of Central London from our Mayfair base at 10-11 Park Place, London
              SW1A 1LP. Our service area covers Mayfair, Westminster, Belgravia, Knightsbridge,
              Soho, Marylebone, Pimlico, Victoria, Paddington, Chelsea, and Kensington.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "2009", label: "Year Established" },
              { value: "15+", label: "Years of Experience" },
              { value: `${BUSINESS.reviewCount}+`, label: "Five-Star Reviews" },
              { value: "24/7", label: "Always Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-red-500 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Team &amp; Expertise</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            Every Vigdis Locksmith London technician is carefully selected, thoroughly trained,
            and vetted before joining our team. We believe that the quality of our service depends
            entirely on the quality of the people who deliver it.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Certifications &amp; Standards</h3>
          <div className="space-y-3 mb-10">
            {certifications.map((cert) => (
              <div key={cert} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{cert}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-4">Local Knowledge</h3>
          <p className="text-gray-700 leading-relaxed">
            Based in Mayfair since our founding, we have developed an intimate knowledge of the
            area&apos;s unique character. We understand the specific lock types and door configurations
            found in Mayfair&apos;s Georgian townhouses, Belgravia&apos;s stucco-fronted terraces, and
            the modern residential developments that have transformed parts of Westminster and
            Paddington. This local expertise allows us to work faster and smarter than locksmiths
            who are unfamiliar with the area.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
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
          <h2 className="text-3xl font-bold text-white mb-4">Work With London&apos;s Most Trusted Locksmith</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
              <Phone className="w-6 h-6" />
              {BUSINESS.phoneDisplay}
            </a>
            <Link href="/contact" className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-xl py-4 px-8 rounded-xl transition-all">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

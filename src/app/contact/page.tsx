import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Vigdis Locksmith London",
  description:
    "Contact Vigdis Locksmith London for emergency locksmith help in Mayfair. Call 020 3670 6551 or send a message. Available 24/7.",
  alternates: { canonical: "https://vigdislocksmith.co.uk/contact" },
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Contact", url: `${BUSINESS.url}/contact` },
  ];

  return (
    <>
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Vigdis Locksmith London</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            For emergency locksmith assistance, call us immediately on{" "}
            <a href={`tel:${BUSINESS.phone}`} className="text-red-400 font-bold">
              {BUSINESS.phoneDisplay}
            </a>
            . For non-urgent enquiries, use the form below.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

              <div className="space-y-6">
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                      {BUSINESS.phoneDisplay}
                    </p>
                    <p className="text-gray-500 text-sm">24/7 Emergency Line — Call for immediate help</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${BUSINESS.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-green-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      WhatsApp
                    </p>
                    <p className="text-gray-500 text-sm">Message us on WhatsApp for quick responses</p>
                  </div>
                </a>

                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {BUSINESS.email}
                    </p>
                    <p className="text-gray-500 text-sm">For non-urgent enquiries and quotes</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Our Address</p>
                    <address className="text-gray-500 text-sm not-italic mt-1" itemScope itemType="https://schema.org/PostalAddress">
                      <span itemProp="streetAddress">{BUSINESS.address.street}</span><br />
                      <span itemProp="addressLocality">{BUSINESS.address.city}</span>,{" "}
                      <span itemProp="postalCode">{BUSINESS.address.postcode}</span><br />
                      <span itemProp="addressCountry">{BUSINESS.address.country}</span>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Business Hours</p>
                    <p className="text-green-600 font-semibold text-sm mt-1">Open 24/7</p>
                    <p className="text-gray-500 text-xs">Monday — Sunday, 00:00 — 24:00</p>
                    <p className="text-gray-500 text-xs">Including bank holidays &amp; Christmas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

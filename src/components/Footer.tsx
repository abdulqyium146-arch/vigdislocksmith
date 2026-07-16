import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function Footer() {
  const year = new Date().getFullYear();

  const trustItems = [
    "DBS Checked",
    "City & Guilds Qualified",
    "£2M Insured",
    "BS3621 Experts",
    "Est. 2009",
    "5★ Rated",
  ];

  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Trust badge strip */}
      <div className="border-b border-white/10 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-xs text-gray-400">
                <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor" opacity="0.3" />
                  <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                  <circle cx="12" cy="16" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <div>
                <span className="text-white font-bold text-base leading-tight block">Vigdis Locksmith</span>
                <span className="text-red-400 text-xs font-medium leading-tight block">London</span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Mayfair&apos;s most trusted locksmith since {BUSINESS.established}. Available 24/7 for all emergency locksmith needs across Central London.
            </p>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="flex">
                {[1,2,3,4,5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-yellow-400 font-bold text-sm">5.0</span>
              <span className="text-gray-500 text-xs">({BUSINESS.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {BUSINESS.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 mb-6">
              {[
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/reviews" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Service Areas
            </h3>
            <ul className="space-y-2">
              {BUSINESS.serviceAreas.filter(a => a !== "Central London").map((area) => (
                <li key={area}>
                  <Link
                    href={`/service-areas/${area.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${BUSINESS.phone}`}
                  className="flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-white">{BUSINESS.phoneDisplay}</span>
                    <span className="text-xs text-gray-500">24/7 Emergency Line</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS.phoneGMB}`}
                  className="flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors group"
                >
                  <Phone className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-sm font-medium text-gray-300">{BUSINESS.phoneGMBDisplay}</span>
                    <span className="text-xs text-gray-500">Office / GMB Line</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="flex items-start gap-2.5 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{BUSINESS.email}</span>
                </a>
              </li>
              <li>
                <address
                  className="flex items-start gap-2.5 not-italic"
                  itemScope
                  itemType="https://schema.org/PostalAddress"
                >
                  <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-400">
                    <span itemProp="streetAddress">{BUSINESS.address.street}</span>
                    <br />
                    <span itemProp="addressLocality">{BUSINESS.address.city}</span>
                    {", "}
                    <span itemProp="postalCode">{BUSINESS.address.postcode}</span>
                  </div>
                </address>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-gray-400">
                  <span className="text-white font-medium">Open 24/7</span>
                  <br />
                  <span className="text-xs">365 days a year</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {year} {BUSINESS.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

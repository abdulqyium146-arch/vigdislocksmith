"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, ChevronDown, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/business";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    dropdown: BUSINESS.services.map((s) => ({
      label: s.name,
      href: `/services/${s.slug}`,
    })),
  },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-900/95 backdrop-blur-md shadow-xl" : "bg-slate-900"
      }`}
    >
      {/* Top bar */}
      <div className="bg-red-600 text-white text-xs py-1.5 px-4 text-center font-medium">
        <span className="flex items-center justify-center gap-1.5">
          <Clock className="w-3 h-3" />
          24/7 Emergency Locksmith — Mayfair &amp; Central London — Call{" "}
          <a href={`tel:${BUSINESS.phone}`} className="font-bold underline underline-offset-2">
            {BUSINESS.phoneDisplay}
          </a>
        </span>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7 11V7a5 5 0 0 1 10 0v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor" opacity="0.3" />
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="2" />
                <circle cx="12" cy="16" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="text-white font-bold text-base leading-tight block">
                Vigdis Locksmith
              </span>
              <span className="text-red-400 text-xs font-medium leading-tight block">
                London
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10">
                    {link.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                          onClick={() => setServicesOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-white/10"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="text-right">
              <p className="text-gray-400 text-xs">Emergency? Call us</p>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-white font-bold text-sm hover:text-red-400 transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>
            <a
              href={`tel:${BUSINESS.phone}`}
              className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2.5 rounded-lg transition-all duration-200 text-sm shadow-lg hover:shadow-red-900/30"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2 rounded-md hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block text-gray-300 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-md text-sm font-medium transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="ml-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-gray-400 hover:text-white px-3 py-2 text-xs rounded-md hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 px-3">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-3 rounded-lg transition-all w-full text-sm"
                onClick={() => setMobileOpen(false)}
              >
                <Phone className="w-4 h-4" />
                Call {BUSINESS.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

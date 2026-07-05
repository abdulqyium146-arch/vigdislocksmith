"use client";

import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function FloatingCTA() {
  return (
    <a
      href={`tel:${BUSINESS.phone}`}
      className="fixed bottom-6 right-6 z-50 md:hidden bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl flex items-center gap-2 px-5 py-4 font-bold text-base transition-all duration-200 group"
      aria-label="Call Vigdis Locksmith London now"
    >
      <span className="relative flex h-3 w-3 mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  );
}

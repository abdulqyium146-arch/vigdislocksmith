"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-base">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-red-600 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5 bg-white">
          <p className="text-gray-600 leading-relaxed text-sm">{answer}</p>
        </div>
      )}
    </div>
  );
}

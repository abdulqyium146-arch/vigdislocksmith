import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BUSINESS } from "@/lib/business";

export default function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const related = BUSINESS.services.filter((s) => s.slug !== currentSlug);
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">Other Locksmith Services</h2>
        <p className="text-gray-500 text-sm mb-8">
          Vigdis Locksmith London provides a full range of locksmith services across Mayfair and Central London.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {related.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-200 hover:border-red-300 hover:shadow-md transition-all group"
            >
              <span className="text-xl flex-shrink-0">{service.icon}</span>
              <span className="font-medium text-gray-900 group-hover:text-red-600 transition-colors text-sm flex-1 leading-tight">
                {service.name}
              </span>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-600 transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors text-sm"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

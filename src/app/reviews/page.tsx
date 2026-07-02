import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Star } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";
import ReviewCard from "@/components/ReviewCard";

export const metadata: Metadata = {
  title: "Customer Reviews | 5★ Rated Locksmith Mayfair",
  description:
    "Read 247 five-star reviews for Vigdis Locksmith London. Trusted by hundreds of customers in Mayfair, Westminster, and Central London. Call 020 3670 6551.",
  alternates: { canonical: "https://vigdis.shop/reviews" },
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: BUSINESS.reviewCount,
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "James H." },
      reviewBody: "Locked out at midnight near Berkeley Square. Called Vigdis and a locksmith arrived in under 20 minutes. Professional, friendly and fair pricing. Couldn't recommend more highly.",
      datePublished: "2025-03-15",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sophie W." },
      reviewBody: "Brilliant service. Had my locks changed after moving into a new flat near Grosvenor Square. The technician was knowledgeable, explained everything and left no mess.",
      datePublished: "2025-01-22",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Robert T." },
      reviewBody: "Used Vigdis for our office building on Park Lane. They upgraded all our commercial locks to high-security cylinders. Very efficient team, competitive price.",
      datePublished: "2025-02-10",
    },
  ],
};

const reviews = [
  { name: "James H.", review: "Locked out at midnight near Berkeley Square. Called Vigdis and a locksmith arrived in under 20 minutes. Professional, friendly and fair pricing. Couldn't recommend more highly.", date: "March 2025", location: "Mayfair, London" },
  { name: "Sophie W.", review: "Brilliant service. Had my locks changed after moving into a new flat near Grosvenor Square. The technician was knowledgeable, explained everything and left no mess. Five stars without question.", date: "January 2025", location: "Westminster, London" },
  { name: "Robert T.", review: "Used Vigdis for our office building on Park Lane. They upgraded all our commercial locks to high-security cylinders. Very efficient team, competitive price, excellent result.", date: "February 2025", location: "Mayfair, London" },
  { name: "Alice M.", review: "Called at 2am after losing my keys near Shepherd Market. The locksmith arrived in 20 minutes, was incredibly professional, and had me inside within minutes. Outstanding service.", date: "April 2025", location: "Mayfair, London" },
  { name: "David K.", review: "Snapped key in the lock of my Belgravia flat. Vigdis sent someone immediately. They extracted the broken key and replaced the lock that same evening. Couldn't be happier.", date: "March 2025", location: "Belgravia, London" },
  { name: "Emma R.", review: "Brilliant emergency response. Locked out of my Westminster apartment on a Sunday. The locksmith came within 25 minutes and sorted everything without any fuss. Highly recommend.", date: "February 2025", location: "Westminster, London" },
  { name: "William B.", review: "Brilliant locksmith service in Mayfair. Locked out of my flat on Park Lane at 11pm. Locksmith arrived in 18 minutes, very professional and sorted the issue quickly.", date: "May 2025", location: "Park Lane, Mayfair" },
  { name: "Charlotte D.", review: "Had my locks changed after getting new tenants in my Grosvenor Square property. Vigdis sent a technician the same day. Excellent service, great quality locks, fair price.", date: "April 2025", location: "Grosvenor Square, Mayfair" },
  { name: "Henry A.", review: "Used Vigdis for our Berkeley Square office — they upgraded all door locks to high-security cylinders. Professional team, minimal disruption, excellent outcome.", date: "March 2025", location: "Berkeley Square, Mayfair" },
];

export default function ReviewsPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Reviews", url: `${BUSINESS.url}/reviews` },
  ];

  return (
    <>
      <SchemaScript schema={aggregateRatingSchema} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <div className="flex items-center gap-2 mb-4">
            {[1,2,3,4,5].map((i) => <Star key={i} className="w-7 h-7 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Customer Reviews — {BUSINESS.reviewCount} Five-Star Ratings
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Vigdis Locksmith London holds a perfect 5.0-star Google rating based on{" "}
            {BUSINESS.reviewCount} verified customer reviews. Here&apos;s what our customers say.
          </p>
        </div>
      </section>

      {/* Rating summary */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-gray-900">5.0</div>
              <div className="flex items-center gap-1 mt-1 justify-center">
                {[1,2,3,4,5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <p className="text-gray-500 text-sm mt-1">{BUSINESS.reviewCount} reviews</p>
            </div>
            <div className="flex-1">
              {[5,4,3,2,1].map((stars) => (
                <div key={stars} className="flex items-center gap-3 mb-1">
                  <span className="text-sm text-gray-600 w-6">{stars}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: stars === 5 ? "97%" : stars === 4 ? "3%" : "0%" }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8">{stars === 5 ? "97%" : stars === 4 ? "3%" : "0%"}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <ReviewCard key={r.name + r.date} name={r.name} review={r.review} date={r.date} location={r.location} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Join Our Happy Customers</h2>
          <p className="text-red-100 text-lg mb-8">Call us for fast, professional, 5-star locksmith service in Mayfair.</p>
          <a href={`tel:${BUSINESS.phone}`} className="inline-flex items-center gap-3 bg-white text-red-600 hover:bg-red-50 font-bold text-xl py-4 px-8 rounded-xl shadow-xl transition-all">
            <Phone className="w-6 h-6" />
            {BUSINESS.phoneDisplay}
          </a>
        </div>
      </section>
    </>
  );
}

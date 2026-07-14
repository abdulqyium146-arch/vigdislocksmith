import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag, Phone } from "lucide-react";
import { BUSINESS } from "@/lib/business";
import { BLOG_POSTS } from "@/lib/blog";
import { getBreadcrumbSchema } from "@/lib/schema";
import SchemaScript from "@/components/SchemaScript";

export const metadata: Metadata = {
  title: "Locksmith Blog — Mayfair Security Guides & Expert Advice",
  description:
    "Expert locksmith advice for Mayfair residents and businesses. Security guides, emergency tips, lock recommendations, and pricing guides from Vigdis Locksmith London — based in W1 since 2009.",
  alternates: { canonical: "https://vigdis.shop/blog" },
};

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${BUSINESS.url}/blog#blog`,
  name: "Vigdis Locksmith London — Mayfair Security Blog",
  description:
    "Expert locksmith guides, security advice, and local tips for Mayfair and Central London residents.",
  url: `${BUSINESS.url}/blog`,
  publisher: {
    "@type": "Organization",
    name: BUSINESS.name,
    url: BUSINESS.url,
  },
  about: { "@type": "Place", name: "Mayfair, London W1" },
};

export default function BlogPage() {
  const breadcrumbs = [
    { name: "Home", url: BUSINESS.url },
    { name: "Blog", url: `${BUSINESS.url}/blog` },
  ];

  return (
    <>
      <SchemaScript schema={blogListSchema} />
      <SchemaScript schema={getBreadcrumbSchema(breadcrumbs)} />

      {/* HERO */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Blog</span>
          </nav>
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Locksmith Blog — Mayfair Security Guides &amp; Expert Advice
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Practical locksmith advice from Vigdis Locksmith London — based in Mayfair and serving
              W1J, W1K, W1S and all of Central London since 2009.
            </p>
          </div>
        </div>
      </section>

      {/* POSTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                <article className="bg-white rounded-xl p-6 border border-gray-200 group-hover:border-red-300 group-hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-semibold px-2.5 py-1 rounded-full">
                      <Tag className="w-3 h-3" />
                      {post.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-gray-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                    <span className="text-gray-400 text-xs sm:ml-auto">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1.5 text-red-600 font-semibold text-sm">
                    Read article <ArrowRight className="w-4 h-4" />
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-red-600 py-14">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Need a Locksmith in Mayfair Now?</h2>
          <p className="text-red-100 mb-6">Available 24/7 — 15-minute response across W1J, W1K &amp; W1S</p>
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

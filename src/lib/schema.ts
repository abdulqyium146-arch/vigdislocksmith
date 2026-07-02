import { BUSINESS } from "./business";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] as const;

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    alternateName: ["Vigdis Locksmith", "Vigdis Locksmith Mayfair"],
    description:
      "Vigdis Locksmith London provides 24/7 emergency locksmith services, lock repair, lock replacement, key cutting, and smart lock installation across Mayfair, Westminster, and Central London. Fast 15-30 minute response. No call-out fee.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.established),
    slogan: BUSINESS.tagline,

    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressRegion: "Greater London",
      addressCountry: "GB",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },

    // 24/7 — all days open 00:00 to 23:59
    openingHoursSpecification: DAYS.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
    // Also provide simple string format for GBP alignment
    openingHours: "Mo-Su 00:00-23:59",

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.rating),
      reviewCount: String(BUSINESS.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },

    // Contact point for phone with explicit contactType
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "emergency",
      areaServed: "GB",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: DAYS,
        opens: "00:00",
        closes: "23:59",
      },
    },

    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, London`,
    })),

    // Knowledge graph entity associations
    knowsAbout: [
      "Lock repair",
      "Lock replacement",
      "Emergency locksmith",
      "Key cutting",
      "Smart lock installation",
      "Residential security",
      "Commercial security",
      "Euro cylinder locks",
      "Mortice locks",
      "Yale locks",
      "Mul-T-Lock",
      "Non-destructive entry",
    ],

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services Mayfair",
      itemListElement: BUSINESS.services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.name,
            provider: { "@id": `${BUSINESS.url}/#business` },
            areaServed: "Mayfair, London",
          },
        },
      })),
    },

    priceRange: "££",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "GBP",
    image: `${BUSINESS.url}/og-image.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${BUSINESS.url}/logo.png`,
      width: "200",
      height: "60",
    },

    // Link to Google Business Profile when live
    sameAs: [
      "https://www.google.com/maps/search/Vigdis+Locksmith+London",
    ],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    description: "24/7 emergency locksmith services in Mayfair and Central London",
    inLanguage: "en-GB",
    publisher: { "@id": `${BUSINESS.url}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    url,
    provider: {
      "@id": `${BUSINESS.url}/#business`,
      "@type": "Locksmith",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, London`,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: BUSINESS.phone },
      availableLanguage: "English",
    },
  };
}

export function getReviewSchema(reviews: { author: string; reviewBody: string; datePublished: string; ratingValue?: number }[]) {
  return reviews.map((r) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: { "@id": `${BUSINESS.url}/#business` },
    author: { "@type": "Person", name: r.author },
    reviewBody: r.reviewBody,
    datePublished: r.datePublished,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(r.ratingValue ?? 5),
      bestRating: "5",
      worstRating: "1",
    },
  }));
}

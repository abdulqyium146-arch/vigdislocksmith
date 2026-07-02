import { BUSINESS } from "./business";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "@id": `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    description:
      "Vigdis Locksmith London provides emergency locksmith services, lock repair, lock replacement, key cutting, and smart lock installation across Mayfair, Westminster, and Central London. Available 24/7.",
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.established),
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.geo.lat,
      longitude: BUSINESS.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: 5,
      worstRating: 1,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, London`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Locksmith Services",
      itemListElement: BUSINESS.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          provider: { "@id": `${BUSINESS.url}/#business` },
        },
      })),
    },
    priceRange: "££",
    paymentAccepted: ["Cash", "Credit Card", "Debit Card"],
    currenciesAccepted: "GBP",
    image: `${BUSINESS.url}/og-image.jpg`,
    logo: `${BUSINESS.url}/logo.png`,
    sameAs: ["https://g.co/kgs/vigdislocksmith"],
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

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BUSINESS.url}/#website`,
    url: BUSINESS.url,
    name: BUSINESS.name,
    description: "Emergency locksmith services in Mayfair and Central London",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BUSINESS.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
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
      "@type": "LocalBusiness",
      name: BUSINESS.name,
    },
    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, London`,
    })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: serviceName,
    },
  };
}

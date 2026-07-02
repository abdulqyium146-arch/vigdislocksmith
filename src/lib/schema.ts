import { BUSINESS } from "./business";

const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"] as const;
const BASE = BUSINESS.url;

// ─── CORE BUSINESS SCHEMAS ──────────────────────────────────────────────────

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith", "HomeAndConstructionBusiness"],
    "@id": `${BASE}/#business`,
    name: BUSINESS.name,
    alternateName: ["Vigdis Locksmith", "Vigdis Locksmith Mayfair", "Locksmith Mayfair"],
    description:
      "Vigdis Locksmith London provides 24/7 emergency locksmith services, lock repair, lock replacement, key cutting, and smart lock installation across Mayfair, Westminster, and Central London. Fast 15-30 minute response. No call-out fee. DBS checked technicians.",
    url: BASE,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    foundingDate: String(BUSINESS.established),
    slogan: BUSINESS.tagline,
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Debit Card",
    priceRange: "££",
    isAccessibleForFree: false,

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

    // GeoShape for coverage radius (~5km from Mayfair)
    geoWithin: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.lat,
        longitude: BUSINESS.geo.lng,
      },
      geoRadius: "5000",
    },

    openingHoursSpecification: DAYS.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
    openingHours: "Mo-Su 00:00-23:59",

    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.rating),
      reviewCount: String(BUSINESS.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },

    // Dual contact points: emergency + customer service
    contactPoint: [
      {
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
      {
        "@type": "ContactPoint",
        telephone: BUSINESS.phone,
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
    ],

    areaServed: BUSINESS.serviceAreas.map((area) => ({
      "@type": "Place",
      name: `${area}, London`,
    })),

    // Knowledge Graph entity associations
    knowsAbout: [
      "Lock repair", "Lock replacement", "Emergency locksmith", "Key cutting",
      "Smart lock installation", "Residential security", "Commercial security",
      "Euro cylinder locks", "Mortice locks", "Yale locks", "Mul-T-Lock",
      "Abloy locks", "Non-destructive entry", "Anti-snap locks", "BS3621 deadlocks",
      "Master key systems", "Access control systems", "Burglary repair",
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
            provider: { "@id": `${BASE}/#business` },
            areaServed: BUSINESS.serviceAreas.map((a) => ({
              "@type": "Place",
              name: `${a}, London`,
            })),
            url: `${BASE}/services/${s.slug}`,
          },
        },
      })),
    },

    image: {
      "@type": "ImageObject",
      url: `${BASE}/og-image.jpg`,
      width: "1200",
      height: "630",
    },
    logo: {
      "@type": "ImageObject",
      url: `${BASE}/logo.png`,
      width: "200",
      height: "60",
    },

    sameAs: [
      "https://www.google.com/maps/search/Vigdis+Locksmith+London+Mayfair",
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE}/#organization`,
    name: BUSINESS.name,
    url: BASE,
    logo: { "@type": "ImageObject", url: `${BASE}/logo.png`, width: "200", height: "60" },
    foundingDate: String(BUSINESS.established),
    description: "Professional locksmith company serving Mayfair and Central London since 2009.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS.phone,
      contactType: "emergency",
      availableLanguage: "English",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
  };
}

// ─── WEBSITE SCHEMA ──────────────────────────────────────────────────────────

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE}/#website`,
    url: BASE,
    name: BUSINESS.name,
    description: "24/7 emergency locksmith services in Mayfair and Central London",
    inLanguage: "en-GB",
    publisher: { "@id": `${BASE}/#business` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

// ─── PAGE SCHEMAS ─────────────────────────────────────────────────────────────

export function getWebPageSchema(url: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${BASE}/#website` },
    about: { "@id": `${BASE}/#business` },
    publisher: { "@id": `${BASE}/#business` },
    breadcrumb: { "@id": `${url}#breadcrumb` },
  };
}

export function getSpeakableSchema(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "[data-speakable]", ".emergency-answer"],
    },
  };
}

// ─── NAVIGATION ───────────────────────────────────────────────────────────────

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${items[items.length - 1].url}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getSiteNavigationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SiteNavigationElement",
    name: "Main Navigation",
    hasPart: [
      { "@type": "SiteNavigationElement", name: "Services", url: `${BASE}/services` },
      { "@type": "SiteNavigationElement", name: "Service Areas", url: `${BASE}/service-areas` },
      { "@type": "SiteNavigationElement", name: "Reviews", url: `${BASE}/reviews` },
      { "@type": "SiteNavigationElement", name: "FAQ", url: `${BASE}/faq` },
      { "@type": "SiteNavigationElement", name: "About", url: `${BASE}/about` },
      { "@type": "SiteNavigationElement", name: "Contact", url: `${BASE}/contact` },
    ],
  };
}

// ─── FAQ / AEO SCHEMAS ────────────────────────────────────────────────────────

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

// ─── HOWTO SCHEMA ─────────────────────────────────────────────────────────────

export function getHowToSchema(
  name: string,
  description: string,
  steps: { name: string; text: string; image?: string }[],
  totalTime = "PT30M"
) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    description,
    totalTime,
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: "0",
      description: "No call-out fee",
    },
    tool: [{ "@type": "HowToTool", name: "Phone or mobile device" }],
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
      ...(s.image ? { image: { "@type": "ImageObject", url: s.image } } : {}),
    })),
    provider: { "@id": `${BASE}/#business` },
  };
}

// ─── SERVICE SCHEMAS ──────────────────────────────────────────────────────────

export function getServiceSchema(serviceName: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    description,
    url,
    provider: {
      "@id": `${BASE}/#business`,
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
      serviceLocation: {
        "@type": "Place",
        name: "Mayfair, London",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mayfair",
          addressRegion: "London",
          addressCountry: "GB",
        },
      },
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      priceSpecification: {
        "@type": "PriceSpecification",
        description: "Fixed quote provided before work begins. No hidden fees.",
      },
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE}/#business` },
    },
  };
}

export function getServiceItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Locksmith Services in Mayfair, London",
    description: "Complete range of professional locksmith services available 24/7 in Mayfair and Central London",
    numberOfItems: BUSINESS.services.length,
    itemListElement: BUSINESS.services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `${BASE}/services/${s.slug}`,
      item: {
        "@type": "Service",
        name: s.name,
        url: `${BASE}/services/${s.slug}`,
        provider: { "@id": `${BASE}/#business` },
        areaServed: "Mayfair, London",
      },
    })),
  };
}

// ─── REVIEW SCHEMAS ──────────────────────────────────────────────────────────

export function getReviewSchema(reviews: {
  author: string;
  reviewBody: string;
  datePublished: string;
  ratingValue?: number;
  locationName?: string;
}[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${BASE}/#business`,
    name: BUSINESS.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.rating),
      reviewCount: String(BUSINESS.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.ratingValue ?? 5),
        bestRating: "5",
        worstRating: "1",
      },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.reviewBody,
      datePublished: r.datePublished,
      itemReviewed: { "@id": `${BASE}/#business` },
      ...(r.locationName
        ? { locationCreated: { "@type": "Place", name: r.locationName } }
        : {}),
    })),
  };
}

// ─── KNOWLEDGE GRAPH / ENTITY SCHEMAS ────────────────────────────────────────

export function getDefinedTermSetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${BASE}/#locksmith-terms`,
    name: "Locksmith Terminology — Vigdis Locksmith London",
    description: "Authoritative definitions of locksmith terms used by Vigdis Locksmith London",
    hasDefinedTerm: [
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-emergency-locksmith`,
        name: "Emergency Locksmith",
        description: "A certified locksmith available 24 hours a day, 7 days a week, to respond to urgent lock-related emergencies including lockouts, broken locks, damaged locks, and post-burglary security repairs. Emergency locksmiths aim to arrive within 15-30 minutes in Mayfair and Central London.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
        url: `${BASE}/services/emergency-locksmith`,
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-lockout`,
        name: "Lockout",
        description: "A situation where a person cannot access their property because they have lost their keys, had a key break inside the lock, or the lock mechanism has failed. A locksmith can resolve most lockouts using non-destructive entry techniques.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-nde`,
        name: "Non-Destructive Entry",
        description: "A professional locksmith technique to open a locked door without damaging the lock or door. Uses specialist picking, decoding, or bypass tools. The preferred method for most residential and commercial lockouts.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-euro-cylinder`,
        name: "Euro Cylinder Lock",
        description: "The most common lock type in UK doors, recognisable by the oval-shaped barrel. Available in standard and high-security grades (anti-snap, anti-drill, anti-pick, anti-bump). The cylinder can be replaced without changing the full lock body.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-mortice`,
        name: "Mortice Lock",
        description: "A lock that is fitted inside a pocket (mortice) cut into the door body. British Standard BS3621 mortice deadlocks are the gold standard for home security in the UK and are required by most home insurance policies.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-yale`,
        name: "Yale Lock",
        description: "A spring-loaded pin tumbler nightlatch lock, typically used as the secondary latch on UK residential doors. While convenient, Yale locks alone do not meet the BS3621 standard and should be paired with a deadlock.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-smart-lock`,
        name: "Smart Lock",
        description: "An electronic lock controlled via smartphone app, keypad, fingerprint reader, or voice assistant. Examples include Yale Conexis L2, Schlage Encode, and August Smart Lock Pro. Smart locks eliminate the need for physical keys.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-rekeying`,
        name: "Rekeying",
        description: "The process of reconfiguring the internal pin mechanism of an existing lock so that it works with a new key. More cost-effective than full lock replacement when the lock body is still in good condition.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
      {
        "@type": "DefinedTerm",
        "@id": `${BASE}/#term-bs3621`,
        name: "BS3621",
        description: "The British Standard for thief-resistant lock assemblies. Locks meeting BS3621 are kitemarked and required by most UK home insurance policies. Includes anti-pick, anti-drill, and anti-saw features.",
        inDefinedTermSet: { "@id": `${BASE}/#locksmith-terms` },
      },
    ],
  };
}

// ─── LOCATION / AREA SCHEMAS ─────────────────────────────────────────────────

export function getAreaSchema(
  areaName: string,
  postcodes: string[],
  lat: number,
  lng: number,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "Locksmith"],
    "@id": `${url}#business`,
    name: `${BUSINESS.name} — ${areaName}`,
    description: `24/7 emergency locksmith service in ${areaName}, London. Fast 15-30 minute response. No call-out fee.`,
    url,
    telephone: BUSINESS.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: `${areaName}, London`,
      postalCode: BUSINESS.address.postcode,
      addressCountry: "GB",
    },
    geo: { "@type": "GeoCoordinates", latitude: lat, longitude: lng },
    areaServed: [
      { "@type": "Place", name: `${areaName}, London` },
      ...postcodes.map((pc) => ({ "@type": "Place", name: pc })),
    ],
    openingHoursSpecification: DAYS.map((day) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: day,
      opens: "00:00",
      closes: "23:59",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(BUSINESS.rating),
      reviewCount: String(BUSINESS.reviewCount),
      bestRating: "5",
      worstRating: "1",
    },
    parentOrganization: { "@id": `${BASE}/#business` },
  };
}

// ─── AGGREGATE OFFER ──────────────────────────────────────────────────────────

export function getAggregateOfferSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    name: "Locksmith Services in Mayfair",
    description: "Professional locksmith services across Mayfair and Central London. Fixed pricing, no call-out fee.",
    priceCurrency: "GBP",
    lowPrice: "0",
    offerCount: BUSINESS.services.length,
    offers: BUSINESS.services.map((s) => ({
      "@type": "Offer",
      name: s.name,
      url: `${BASE}/services/${s.slug}`,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      seller: { "@id": `${BASE}/#business` },
      eligibleRegion: BUSINESS.serviceAreas.map((a) => ({
        "@type": "Place",
        name: `${a}, London`,
      })),
    })),
  };
}

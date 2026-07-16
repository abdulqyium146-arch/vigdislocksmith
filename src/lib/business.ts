export const BUSINESS = {
  name: "Vigdis Locksmith London",
  tagline: "Mayfair's Most Trusted Locksmith",
  founder: "Erik Vigdis",
  founderTitle: "Founder & Master Locksmith",
  founderBio:
    "Erik Vigdis founded the company in 2009 after 15 years working as a certified locksmith across London. Trained to City & Guilds Level 3, Erik personally vets every technician and sets the quality standards the team holds itself to today. His philosophy is simple: fix what can be fixed, replace only what must be replaced, and never leave a customer unsatisfied.",
  phone: "+44 7984 547185",
  phoneDisplay: "+44 7984 547185",
  phoneGMB: "020 3670 6551",
  phoneGMBDisplay: "020 3670 6551",
  whatsapp: "447984547185",
  email: "info@vigdis.shop",
  address: {
    street: "10-11 Park Place",
    city: "London",
    postcode: "SW1A 1LP",
    country: "United Kingdom",
    full: "10-11 Park Place, London, SW1A 1LP",
  },
  geo: { lat: 51.5037, lng: -0.1420 },
  rating: 5.0,
  reviewCount: 247,
  url: "https://vigdis.shop",
  established: 2009,
  yearsExperience: 15,
  numberOfEmployees: 8,
  responseTime: "15-30 minutes",
  availability: "24/7/365",
  guarantee: "All work fully guaranteed. Not satisfied? We return to rectify it free of charge.",
  insurance: "Public liability insured up to £2,000,000.",
  // Verified citation / sameAs URLs — add your Yell, Checkatrade, Bark URLs here
  sameAs: [
    "https://www.google.com/maps/search/Vigdis+Locksmith+London+Mayfair",
  ],
  // Google Maps embed — single source of truth, referenced in all iframes + schema
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.378119792127!2d-0.14248922414479342!3d51.50627861078623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760578b7015dbf%3A0x3e49f5bced8f730!2sVigdis%20Locksmith%20London!5e0!3m2!1sen!2suk!4v1784167117746!5m2!1sen!2suk",
  hasMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.378119792127!2d-0.14248922414479342!3d51.50627861078623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760578b7015dbf%3A0x3e49f5bced8f730!2sVigdis%20Locksmith%20London!5e0!3m2!1sen!2suk!4v1784167117746!5m2!1sen!2suk",
  // Postcodes covered — used in schema areaServed for hyper-local geo signals
  postcodes: ["W1J", "W1K", "W1S", "W1U", "SW1A", "SW1X", "SW1V", "SW1W", "SW3", "SW7", "W2", "W8", "WC2"],
  credentials: [
    "DBS (Disclosure & Barring Service) checked — all technicians",
    "City & Guilds Level 3 locksmith qualification",
    "Full public liability insurance (up to £2,000,000)",
    "BS3621 British Standard lock expertise",
    "MLA (Master Locksmiths Association) aligned practices",
    "Non-destructive entry (NDE) certified techniques",
    "Anti-snap lock installation specialists",
    "UPVC & composite door specialists",
  ],
  serviceAreas: [
    "Mayfair","Westminster","Belgravia","Knightsbridge","Soho",
    "Marylebone","Pimlico","Victoria","Paddington","Chelsea","Kensington","Central London",
  ],
  services: [
    { slug: "emergency-locksmith", name: "Emergency Locksmith", icon: "🚨" },
    { slug: "24-hour-locksmith", name: "24 Hour Locksmith", icon: "🕐" },
    { slug: "lock-repair", name: "Lock Repair", icon: "🔧" },
    { slug: "lock-replacement", name: "Lock Replacement", icon: "🔒" },
    { slug: "key-cutting", name: "Key Cutting", icon: "🗝️" },
    { slug: "residential-locksmith", name: "Residential Locksmith", icon: "🏠" },
    { slug: "commercial-locksmith", name: "Commercial Locksmith", icon: "🏢" },
    { slug: "smart-lock-installation", name: "Smart Lock Installation", icon: "📱" },
  ],
} as const;

// Canonical reviews — used in both UI and schema
export const REVIEWS = [
  {
    author: "James H.",
    reviewBody:
      "Locked out at midnight near Berkeley Square. Called Vigdis and a locksmith arrived in under 20 minutes. Professional, friendly and fair pricing. Couldn't recommend more highly.",
    datePublished: "2025-03-01",
    ratingValue: 5,
    locationName: "Mayfair, London",
  },
  {
    author: "Sophie W.",
    reviewBody:
      "Brilliant service. Had my locks changed after moving into a new flat near Grosvenor Square. The technician was knowledgeable, explained everything and left no mess. Five stars without question.",
    datePublished: "2025-01-01",
    ratingValue: 5,
    locationName: "Westminster, London",
  },
  {
    author: "Robert T.",
    reviewBody:
      "Used Vigdis for our office building on Park Lane. They upgraded all our commercial locks to high-security cylinders. Very efficient team, competitive price, excellent result.",
    datePublished: "2025-02-01",
    ratingValue: 5,
    locationName: "Mayfair, London",
  },
  {
    author: "Amanda L.",
    reviewBody:
      "Called at 7am on a Sunday after my key snapped in the lock. Technician arrived in 25 minutes, opened the door without any damage and fitted a new anti-snap cylinder. Brilliant.",
    datePublished: "2025-04-01",
    ratingValue: 5,
    locationName: "Belgravia, London",
  },
  {
    author: "David K.",
    reviewBody:
      "Very impressed. Quoted a fair price before starting, arrived on time, and completed the job in 30 minutes. Will use again and recommend to neighbours.",
    datePublished: "2025-05-01",
    ratingValue: 5,
    locationName: "Knightsbridge, London",
  },
] as const;

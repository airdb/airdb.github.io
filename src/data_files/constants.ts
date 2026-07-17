import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "airdb",
  tagline: "AI-Native Copilots & Data Solutions",
  description: "Airdb is an AI-native company delivering intelligent copilots and a full spectrum of data, cloud, and security services. Start exploring and contact our sales team to see how we can help your business grow.",
  description_short: "Airdb delivers AI-native copilots and data, cloud, and security services to help businesses grow.",
  url: "https://airdb.com",
  author: "Airdb",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: AI Copilots & Data Solutions`,
  description: "Equip your business with Airdb's AI-native copilots and data, cloud, and security services. Trusted by industry leaders, Airdb offers simplicity, affordability, and reliability. Experience the difference with user-centric design and cutting-edge technology. Start exploring now!",
  image: ogImageSrc,
};

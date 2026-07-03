import { FAQ_ITEMS, SERVICES } from "./site-data";

/**
 * Builds a schema.org FAQPage JSON-LD object from the main FAQ items
 * and the per-service mini-FAQs. Earning rich snippets in Google search.
 */
export function buildFaqJsonLd() {
  const mainFaqs = FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  }));

  const serviceFaqs = SERVICES.flatMap((service) =>
    service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [...mainFaqs, ...serviceFaqs],
  };
}

/**
 * Builds a schema.org Service / LegalService schema for each practice area,
 * useful for service-specific rich results.
 */
export function buildServiceJsonLd() {
  return SERVICES.map((service) => ({
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LegalService",
      name: "Yolanda Matwa Attorneys",
      url: "https://yolandamatwa.co.za",
    },
    areaServed: {
      "@type": "City",
      name: "Pretoria",
    },
  }));
}

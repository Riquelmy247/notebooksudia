import { useEffect } from "react";
import { absoluteUrl, siteData } from "../data/data";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);
  if (!element) {
    const tag = selector.startsWith("link") ? "link" : "meta";
    element = document.createElement(tag);
    const match = selector.match(/\[(.+?)=["']?(.+?)["']?\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

export function useSeo() {
  useEffect(() => {
    const { company, contact, seo, social } = siteData;
    document.title = seo.title;

    upsertMeta('meta[name="description"]', { content: seo.description });
    upsertMeta('meta[name="keywords"]', { content: seo.keywords.join(", ") });
    upsertMeta('meta[name="author"]', { content: company.name });
    upsertMeta('meta[property="og:title"]', { content: seo.title });
    upsertMeta('meta[property="og:description"]', { content: seo.description });
    upsertMeta('meta[property="og:url"]', { content: seo.url });
    upsertMeta('meta[property="og:image"]', { content: absoluteUrl(seo.image) });
    upsertMeta('meta[property="og:type"]', { content: "website" });
    upsertMeta('meta[property="og:locale"]', { content: seo.locale });
    upsertMeta('meta[property="og:site_name"]', { content: company.name });
    upsertMeta('meta[name="twitter:card"]', { content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { content: seo.title });
    upsertMeta('meta[name="twitter:description"]', { content: seo.description });
    upsertMeta('meta[name="twitter:image"]', { content: absoluteUrl(seo.image) });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", seo.url);

    const schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: company.name,
      description: seo.description,
      url: seo.url,
      image: absoluteUrl(seo.image),
      telephone: contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${contact.address.street}, ${contact.address.number}`,
        addressLocality: contact.address.city,
        addressRegion: contact.address.state,
        postalCode: contact.address.zipCode,
        addressCountry: "BR",
      },
      areaServed: contact.address.city,
      sameAs: [social.instagram.url, social.facebook.url].filter(Boolean),
    };

    let script = document.getElementById("seo-schema");
    if (!script) {
      script = document.createElement("script");
      script.id = "seo-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);
}

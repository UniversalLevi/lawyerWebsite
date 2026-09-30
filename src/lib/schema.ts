import { contactInfo } from "@/content/contact";
import { lawyerProfile } from "@/content/lawyer";
import { practiceAreas } from "@/content/practiceAreas";
import { siteConfig } from "@/content/site";

export function personId(): string {
  return `${siteConfig.origin}/#person`;
}

export function organizationId(): string {
  return `${siteConfig.origin}/#organization`;
}

export function personSchema() {
  return {
    "@type": "Person",
    "@id": personId(),
    name: lawyerProfile.displayName,
    honorificPrefix: lawyerProfile.honorific,
    givenName: lawyerProfile.givenName,
    familyName: lawyerProfile.familyName,
    jobTitle: lawyerProfile.jobTitle,
    description: lawyerProfile.disambiguation,
    url: siteConfig.origin,
    telephone: contactInfo.phone.e164,
    email: contactInfo.email.display,
    ...(lawyerProfile.portrait.src
      ? { image: `${siteConfig.origin}${lawyerProfile.portrait.src}` }
      : {}),
    worksFor: { "@id": organizationId() },
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactInfo.address.building}, ${contactInfo.address.street}, ${contactInfo.address.landmark}`,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.region,
      postalCode: contactInfo.address.postalCode,
      addressCountry: contactInfo.address.countryCode,
    },
    sameAs: [contactInfo.social.facebook, contactInfo.social.linkedin],
    knowsAbout: practiceAreas.map((area) => area.title),
  };
}

export function organizationSchema() {
  return {
    "@type": ["LegalService", "Organization"],
    "@id": organizationId(),
    name: lawyerProfile.firm.name,
    legalName: lawyerProfile.firm.legalName,
    url: siteConfig.origin,
    telephone: contactInfo.phone.e164,
    email: contactInfo.email.display,
    image: `${siteConfig.origin}/images/advocate-manoj-kumar-singh-chambers.jpg`,
    description: `${lawyerProfile.firm.name} is the Howrah chambers of ${lawyerProfile.displayName}, providing legal representation and counsel in Howrah, West Bengal.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${contactInfo.address.building}, ${contactInfo.address.street}`,
      addressLocality: contactInfo.address.city,
      addressRegion: contactInfo.address.region,
      postalCode: contactInfo.address.postalCode,
      addressCountry: contactInfo.address.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: contactInfo.address.latitude,
      longitude: contactInfo.address.longitude,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Howrah",
      },
      {
        "@type": "State",
        name: "West Bengal",
      },
    ],
    employee: { "@id": personId() },
    sameAs: [contactInfo.social.facebook, contactInfo.social.linkedin],
    hasMap: contactInfo.maps.searchUrl,
    serviceType: practiceAreas.map((area) => area.title),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.origin}/#website`,
    url: siteConfig.origin,
    name: `${lawyerProfile.displayName} | ${lawyerProfile.firm.name}`,
    description: lawyerProfile.entityLine,
    inLanguage: siteConfig.language,
    publisher: { "@id": organizationId() },
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.origin}${item.path}`,
    })),
  };
}

export function webPageSchema(opts: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${siteConfig.origin}${opts.path}#webpage`,
    url: `${siteConfig.origin}${opts.path}`,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": `${siteConfig.origin}/#website` },
    about: { "@id": personId() },
  };
}

export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

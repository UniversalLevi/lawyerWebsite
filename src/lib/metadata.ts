import type { Metadata } from "next";
import { lawyerProfile } from "@/content/lawyer";
import { siteConfig } from "@/content/site";

const defaultDescription = `${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah, West Bengal — legal counsel and litigation practice at T.S.S. Tower, 21/1 Dobson Road, near Howrah A.C. Market.`;

export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
}): Metadata {
  const url = `${siteConfig.origin}${opts.path}`;
  const title = opts.title;

  return {
    title,
    description: opts.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: `${lawyerProfile.firm.name} — ${lawyerProfile.displayName}`,
      title: opts.ogTitle ?? title,
      description: opts.description,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.ogTitle ?? title,
      description: opts.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export { defaultDescription };

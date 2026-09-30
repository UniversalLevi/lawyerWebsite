import { EntityStrip } from "@/components/sections/EntityStrip";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Hero } from "@/components/sections/Hero";
import { HomeAbout } from "@/components/sections/HomeAbout";
import { HomeCourts } from "@/components/sections/HomeCourts";
import { HomeFaq } from "@/components/sections/HomeFaq";
import { HomeInsights } from "@/components/sections/HomeInsights";
import { HomePractice } from "@/components/sections/HomePractice";
import { OfficeLocation } from "@/components/sections/OfficeLocation";
import { ProfessionalApproach } from "@/components/sections/ProfessionalApproach";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqs } from "@/content/faqs";
import { lawyerProfile } from "@/content/lawyer";
import {
  graph,
  organizationSchema,
  personSchema,
  webPageSchema,
  websiteSchema,
} from "@/lib/schema";
import { buildMetadata, defaultDescription } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Advocate Manoj Kumar Singh | S&M Law Firm | Howrah",
  description: defaultDescription,
  path: "/",
});

export default function HomePage() {
  const faqSchema = {
    "@type": "FAQPage",
    mainEntity: faqs.slice(0, 6).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.join(" "),
      },
    })),
  };

  return (
    <>
      <JsonLd
        data={graph([
          personSchema(),
          organizationSchema(),
          websiteSchema(),
          webPageSchema({
            path: "/",
            name: metadata.title as string,
            description: defaultDescription,
          }),
          faqSchema,
        ])}
      />
      <Hero />
      <EntityStrip />
      <HomeAbout />
      <HomePractice />
      <HomeCourts />
      <ProfessionalApproach />
      <HomeInsights />
      <HomeFaq />
      <ConsultationCta />
      <OfficeLocation />
      <p className="visually-hidden">{lawyerProfile.disambiguation}</p>
    </>
  );
}

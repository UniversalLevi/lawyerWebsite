import { LegalDocument } from "@/components/ui/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { privacyPage } from "@/content/legal";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `${privacyPage.title} | S&M Law Firm, Howrah`,
  description: privacyPage.metaDescription,
  path: "/privacy-policy",
});

export default function PrivacyRoute() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/privacy-policy",
            name: privacyPage.title,
            description: privacyPage.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Privacy Policy", path: "/privacy-policy" },
          ]),
        ])}
      />
      <LegalDocument
        kicker="Legal"
        title={privacyPage.title}
        sections={[...privacyPage.sections]}
      />
    </>
  );
}

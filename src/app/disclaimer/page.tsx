import { LegalDocument } from "@/components/ui/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { disclaimerPage } from "@/content/legal";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `${disclaimerPage.title} | S&M Law Firm, Howrah`,
  description: disclaimerPage.metaDescription,
  path: "/disclaimer",
});

export default function DisclaimerRoute() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/disclaimer",
            name: disclaimerPage.title,
            description: disclaimerPage.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Disclaimer", path: "/disclaimer" },
          ]),
        ])}
      />
      <LegalDocument
        kicker="Legal"
        title={disclaimerPage.title}
        sections={[...disclaimerPage.sections]}
      />
    </>
  );
}

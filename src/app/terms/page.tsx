import { LegalDocument } from "@/components/ui/LegalDocument";
import { JsonLd } from "@/components/seo/JsonLd";
import { termsPage } from "@/content/legal";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: `${termsPage.title} | S&M Law Firm, Howrah`,
  description: termsPage.metaDescription,
  path: "/terms",
});

export default function TermsRoute() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({
            path: "/terms",
            name: termsPage.title,
            description: termsPage.metaDescription,
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Terms", path: "/terms" },
          ]),
        ])}
      />
      <LegalDocument
        kicker="Legal"
        title={termsPage.title}
        sections={[...termsPage.sections]}
      />
    </>
  );
}

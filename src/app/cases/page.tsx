import { publishedCases } from "@/content/courts";
import { lawyerProfile } from "@/content/lawyer";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "Selected Cases | Advocate Manoj Kumar Singh, Howrah";
const description = `Case summaries for ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah, are published only with the advocate’s approval and subject to confidentiality.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/cases",
});

export default function CasesPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/cases", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Cases", path: "/cases" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Cases" },
            ]}
          />
          <p className="small-caps">Record</p>
          <h1>Selected cases</h1>
          <p className="lede">
            Individual matters of {lawyerProfile.displayName},{" "}
            {lawyerProfile.firm.name}, Howrah, will appear here only if the
            advocate approves publication.
          </p>
        </div>
      </header>
      <section className="section section-ivory">
        <div className="wrap-narrow">
          {publishedCases.length === 0 ? (
            <div className="empty-panel">
              <p>
                No case summaries are published at present. When a matter is
                listed, the entry will show the case number, court, year, a short
                description of the matter, the role of the advocate, and the
                status — and only with approval and in keeping with professional
                confidentiality. This page is not a record of results, and it
                will not invent proceedings.
              </p>
            </div>
          ) : (
            <div className="faq-list">
              {publishedCases.map((item) => (
                <article className="court-card" key={item.caseNumber}>
                  <p className="small-caps">{item.court}</p>
                  <h2>{item.caseNumber}</h2>
                  <p>
                    {item.year} · {item.matter}
                  </p>
                  <p>
                    Role: {item.role}
                    <br />
                    Status: {item.status}
                  </p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

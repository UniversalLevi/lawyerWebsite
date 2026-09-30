import Link from "next/link";
import { articles } from "@/content/articles";
import { lawyerProfile } from "@/content/lawyer";
import { legalCopy } from "@/content/legal";
import { photos } from "@/content/photos";
import { formatDisplayDate } from "@/lib/format";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Figure } from "@/components/ui/Figure";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "Legal Insights | Advocate Manoj Kumar Singh, Howrah";
const description = `Notes on bail, notices, property, maintenance, cyber crime and related procedure, written for general information by ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/legal-insights",
});

export default function InsightsIndexPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/legal-insights", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Legal Insights", path: "/legal-insights" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap page-hero-split">
          <div>
            <Breadcrumbs
              items={[
                { href: "/", label: "Home" },
                { label: "Legal Insights" },
              ]}
            />
            <p className="small-caps">05 — Legal Insights</p>
            <h1>Legal insights</h1>
            <p className="lede">
              These notes are published by {lawyerProfile.displayName} of{" "}
              {lawyerProfile.firm.name}, Howrah, as general information. They are
              not advice on a particular case.
            </p>
          </div>
          <Figure photo={photos.portrait} className="figure-on-navy" />
        </div>
      </header>
      <section className="section section-ivory">
        <div className="wrap grid-2">
          {articles.map((article) => (
            <article className="insight-card" key={article.slug}>
              <p className="small-caps">{formatDisplayDate(article.publishedAt)}</p>
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <Link className="text-link" href={`/legal-insights/${article.slug}`}>
                Read the note →
              </Link>
            </article>
          ))}
        </div>
        <div className="wrap" style={{ marginTop: "2rem" }}>
          <div className="disclaimer-box">
            <p>{legalCopy.articleDisclaimer}</p>
          </div>
        </div>
      </section>
    </>
  );
}

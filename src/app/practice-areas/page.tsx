import Link from "next/link";
import { practiceAreas } from "@/content/practiceAreas";
import { lawyerProfile } from "@/content/lawyer";
import { PracticeIcon } from "@/components/ui/Icons";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "Practice Areas | Advocate Manoj Kumar Singh, Howrah";
const description = `Practice areas of ${lawyerProfile.displayName}, ${lawyerProfile.firm.name}, Howrah: criminal law, bail, civil litigation, family matters, property, cyber crime, commercial disputes and arbitration.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/practice-areas",
});

export default function PracticeIndexPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/practice-areas", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Practice Areas", path: "/practice-areas" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Practice Areas" },
            ]}
          />
          <p className="small-caps">02 — Practice Areas</p>
          <h1>Practice areas</h1>
          <p className="lede">
            {lawyerProfile.displayName} of {lawyerProfile.firm.name}, Howrah,
            advises on the matters listed below. The pages describe the work in
            general terms. They do not promise a result.
          </p>
        </div>
      </header>
      <section className="section section-ivory">
        <div className="wrap grid-3">
          {practiceAreas.map((area, index) => (
            <article className="practice-card" key={area.slug}>
              <PracticeIcon index={index} className="icon-line" />
              <p className="card-num">{area.number}</p>
              <h2>{area.cardTitle}</h2>
              <p>{area.shortDescription}</p>
              <Link className="text-link" href={`/practice-areas/${area.slug}`}>
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </section>
      <ConsultationCta />
    </>
  );
}

import Link from "next/link";
import { calcuttaHighCourtNote, courts } from "@/content/courts";
import { lawyerProfile } from "@/content/lawyer";
import { photos, photoNote } from "@/content/photos";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConsultationCta } from "@/components/sections/ConsultationCta";
import { Figure } from "@/components/ui/Figure";
import { breadcrumbSchema, graph, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const title = "Courts & Legal Practice | Advocate Manoj Kumar Singh";
const description = `Courts associated with ${lawyerProfile.displayName} of ${lawyerProfile.firm.name}, Howrah: Howrah District Court, Metropolitan Magistrates Court, Calcutta, and the Calcutta High Court.`;

export const metadata = buildMetadata({
  title,
  description,
  path: "/courts",
});

export default function CourtsPage() {
  return (
    <>
      <JsonLd
        data={graph([
          webPageSchema({ path: "/courts", name: title, description }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Courts", path: "/courts" },
          ]),
        ])}
      />
      <header className="page-hero">
        <div className="wrap">
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Courts" },
            ]}
          />
          <p className="small-caps">03 — Courts</p>
          <h1>Courts &amp; legal practice</h1>
          <p className="lede">
            {lawyerProfile.displayName} of {lawyerProfile.firm.name}, Howrah, is
            publicly associated with the courts below. The forum in any matter
            depends on jurisdiction and the nature of the case.
          </p>
        </div>
      </header>

      <section className="section section-ivory">
        <div className="wrap grid-3">
          {courts.map((court) => (
            <article className="court-card" key={court.slug}>
              <p className="card-num">{court.number}</p>
              <h2>{court.name}</h2>
              <p>{court.location}</p>
              <p>{court.description[0]}</p>
              <p className="note">{court.jurisdictionNote}</p>
              <Link className="text-link" href={`/courts/${court.slug}`}>
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-paper">
        <div className="wrap">
          <h2>Photographs</h2>
          <p className="lede">
            Advocate Manoj Kumar Singh photographed during a visit to New Delhi.
            These pictures are not photographs of the Howrah District Court, the
            Metropolitan Magistrates Court, Calcutta, or the Calcutta High Court.
          </p>
          <div className="photo-gallery">
            <Figure photo={photos.supremeCourtSteps} />
            <Figure photo={photos.supremeCourt} />
            <Figure photo={photos.supremeCourtCall} />
            <Figure photo={photos.ambedkar} />
          </div>
          <p className="note">{photoNote}</p>
        </div>
      </section>

      <section className="section section-navy">
        <div className="wrap-narrow">
          <p className="small-caps">Calcutta High Court</p>
          <h2>{calcuttaHighCourtNote.heading}</h2>
          {calcuttaHighCourtNote.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 28)}>{paragraph}</p>
          ))}
          <p>
            <a
              className="text-link"
              href={calcuttaHighCourtNote.officialUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Official High Court website →
            </a>
          </p>
        </div>
      </section>
      <ConsultationCta />
    </>
  );
}

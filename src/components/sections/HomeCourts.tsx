import Link from "next/link";
import { calcuttaHighCourtNote, courts } from "@/content/courts";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeCourts() {
  return (
    <section className="section section-ivory">
      <div className="wrap">
        <SectionLabel number="03">Courts</SectionLabel>
        <h2>Courts &amp; jurisdiction</h2>
        <p className="lede">
          {calcuttaHighCourtNote.paragraphs[0]}
        </p>
        <div className="grid-3" style={{ marginTop: "2rem" }}>
          {courts.map((court) => (
            <article className="court-card" key={court.slug}>
              <p className="card-num">{court.number}</p>
              <h3>{court.shortName}</h3>
              <p>{court.location}</p>
              <p>{court.description[0]}</p>
              <p className="note">{court.jurisdictionNote}</p>
              <Link className="text-link" href={`/courts/${court.slug}`}>
                Court details →
              </Link>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="text-link" href="/courts">
            Courts &amp; legal practice →
          </Link>
        </p>
      </div>
    </section>
  );
}

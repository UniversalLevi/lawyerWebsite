import Link from "next/link";
import { practiceAreas } from "@/content/practiceAreas";
import { PracticeIcon } from "@/components/ui/Icons";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomePractice() {
  return (
    <section className="section section-paper">
      <div className="wrap">
        <SectionLabel number="02">Practice Areas</SectionLabel>
        <h2>Matters the chambers advise on</h2>
        <p className="lede">
          Work of S&amp;M Law Firm in Howrah includes the areas below. Whether a
          particular enquiry can be accepted is confirmed after the facts are
          understood.
        </p>
        <div className="grid-3" style={{ marginTop: "2rem" }}>
          {practiceAreas.map((area, index) => (
            <article className="practice-card" key={area.slug}>
              <PracticeIcon index={index} className="icon-line" />
              <p className="card-num">{area.number}</p>
              <h3>{area.cardTitle}</h3>
              <p>{area.shortDescription}</p>
              <Link className="text-link" href={`/practice-areas/${area.slug}`}>
                Learn More →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

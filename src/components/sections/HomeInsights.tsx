import Link from "next/link";
import { articles } from "@/content/articles";
import { formatDisplayDate } from "@/lib/format";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeInsights() {
  const selected = articles.slice(0, 3);

  return (
    <section className="section section-paper">
      <div className="wrap">
        <SectionLabel number="05">Legal Insights</SectionLabel>
        <h2>Selected notes</h2>
        <p className="lede">
          Short, sourced explanations of procedure. They are general information,
          not advice on a particular brief.
        </p>
        <div className="grid-3" style={{ marginTop: "2rem" }}>
          {selected.map((article) => (
            <article className="insight-card" key={article.slug}>
              <p className="small-caps">{formatDisplayDate(article.publishedAt)}</p>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <Link className="text-link" href={`/legal-insights/${article.slug}`}>
                Read the note →
              </Link>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "1.6rem" }}>
          <Link className="text-link" href="/legal-insights">
            All legal insights →
          </Link>
        </p>
      </div>
    </section>
  );
}

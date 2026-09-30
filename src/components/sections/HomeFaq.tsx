import Link from "next/link";
import { faqs } from "@/content/faqs";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function HomeFaq() {
  const items = faqs.slice(0, 6);

  return (
    <section className="section section-ivory">
      <div className="wrap">
        <SectionLabel number="06">Questions</SectionLabel>
        <h2>Frequently asked questions</h2>
        <div className="faq-list" style={{ marginTop: "1.5rem" }}>
          {items.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              {item.answer.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </details>
          ))}
        </div>
        <p style={{ marginTop: "1.4rem" }}>
          <Link className="text-link" href="/faqs">
            All frequently asked questions →
          </Link>
        </p>
      </div>
    </section>
  );
}
